"undefined" != typeof globalThis && void 0 === globalThis.__IS_GRID_DEV__ && (globalThis.__IS_GRID_DEV__ = !1);
const e = "W";
let t = null;
async function a() {
	if (t) return t;
	if ("undefined" != typeof process && process.versions && process.versions.node) {
		const { initWasmNode: e } = await import("./nodeLoader");
		t = await e();
	} else {
		const e = (await import("./ai_engine-BB00qv7i.js")).default;
		t = await e({ locateFile: (e) => e.endsWith(".wasm") ? "/King-s-Reach-Public/assets/ai_engine-C4dB-a7U.wasm" : e });
	}
	return t;
}
self.onmessage = async (t) => {
	const { type: s, params: i, flatBoard: o, flatReserves: r, color: n, difficulty: l, reserves: c } = t.data;
	try {
		const t = await a();
		if ("UPDATE_PARAMS" === s) return void (t.update_evaluation_params && t.update_evaluation_params(i));
		if ("CLEAR_TT" === s) return void (t.clear_tt && t.clear_tt());
		t._tables_initialized || (t.init_tables(), t._tables_initialized = !0);
		const p = (e, t) => {
			const a = ("hard" === e ? 12e3 : "normal" === e ? 6e3 : 2e3) + 200 * t;
			return Math.min(a, 15e3);
		}, _ = p(l, c?.level || 1), f = n === e ? 0 : 1, d = t.computeAIMove(o, r, f, _);
		if (!d) return void self.postMessage({
			type: "SUCCESS",
			action: null
		});
		if ("string" == typeof d) throw new Error(`C++ Engine Fatal Error: ${d}`);
		const u = {
			type: d.type,
			to: {
				r: d.to.r,
				c: d.to.c
			},
			from: d.from ? {
				r: d.from.r,
				c: d.from.c
			} : void 0,
			pieceType: d.pieceType
		};
		self.postMessage({
			type: "SUCCESS",
			action: u
		});
	} catch (p) {
		self.postMessage({
			type: "ERROR",
			error: p
		});
	}
};

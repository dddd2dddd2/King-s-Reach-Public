const e = "__IS_GRID_DEV__";
"undefined" != typeof globalThis && void 0 === globalThis[e] && (globalThis[e] = !1);
const t = "W";
let a = null;
async function s() {
	if (a) return a;
	if ("undefined" != typeof process && process.versions && process.versions.node) {
		const { initWasmNode: e } = await import("./nodeLoader");
		a = await e();
	} else {
		const e = (await import("./ai_engine-BB00qv7i.js")).default;
		a = await e({ locateFile: (e) => e.endsWith(".wasm") ? "/King-s-Reach-Public/assets/ai_engine-C4dB-a7U.wasm" : e });
	}
	return a;
}
self.onmessage = async (e) => {
	const { type: a, params: o, flatBoard: i, flatReserves: r, color: n, difficulty: l, reserves: c } = e.data;
	try {
		const e = await s();
		if ("UPDATE_PARAMS" === a) return void (e.update_evaluation_params && e.update_evaluation_params(o));
		if ("CLEAR_TT" === a) return void (e.clear_tt && e.clear_tt());
		e._tables_initialized || (e.init_tables(), e._tables_initialized = !0);
		const p = (e, t) => {
			const a = ("hard" === e ? 12e3 : "normal" === e ? 6e3 : 2e3) + 200 * t;
			return Math.min(a, 15e3);
		}, f = p(l, c?.level || 1), d = n === t ? 0 : 1, _ = e.computeAIMove(i, r, d, f);
		if (!_) return void self.postMessage({
			type: "SUCCESS",
			action: null
		});
		if ("string" == typeof _) throw new Error(`C++ Engine Fatal Error: ${_}`);
		const u = {
			type: _.type,
			to: {
				r: _.to.r,
				c: _.to.c
			},
			from: _.from ? {
				r: _.from.r,
				c: _.from.c
			} : void 0,
			pieceType: _.pieceType
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

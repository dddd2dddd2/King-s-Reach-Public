var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, i = Object.getOwnPropertyNames, a = Object.getPrototypeOf, r = Object.prototype.hasOwnProperty, s = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), o = (s, o, c) => (c = null != s ? e(a(s)) : {}, ((e, a, s, o) => {
	if (a && "object" == typeof a || "function" == typeof a) for (var c, l = i(a), d = 0, E = l.length; d < E; d++) c = l[d], r.call(e, c) || c === s || t(e, c, {
		get: ((e) => a[e]).bind(null, c),
		enumerable: !(o = n(a, c)) || o.enumerable
	});
	return e;
})(!o && s && s.__esModule ? c : t(c, "default", {
	value: s,
	enumerable: !0
}), s));
"undefined" != typeof globalThis && void 0 === globalThis.__IS_GRID_DEV__ && (globalThis.__IS_GRID_DEV__ = !1);
const c = "W", l = "B", d = {
	PAWN: "P",
	KNIGHT: "N",
	BISHOP: "B",
	ROOK: "R",
	QUEEN: "Q",
	KING: "K"
}, E = "PvP", u = "menu", m = "normal", _ = {
	FROZEN: "FROZEN",
	PETRIFIED: "PETRIFIED",
	SKILL_LOCKED: "SKILL_LOCKED",
	SILENCED: "SILENCED",
	INVISIBLE: "INVISIBLE",
	ENCRYPTED: "ENCRYPTED",
	FLATTENED: "FLATTENED",
	INFECTED: "INFECTED",
	BETRAYED: "BETRAYED",
	SHIELDED: "SHIELDED",
	GRAVITY_LOCKED: "GRAVITY_LOCKED",
	SMOKE_SCREEN: "SMOKE_SCREEN",
	OVERLOADED: "OVERLOADED",
	ZEALOT_BUFF: "ZEALOT_BUFF",
	COMMAND_AURA: "COMMAND_AURA",
	AURA_SUPPRESSED: "AURA_SUPPRESSED",
	GODHOOD_LINK: "GODHOOD_LINK",
	RAILWAY_BUFF: "RAILWAY_BUFF",
	CHARISMA_BUFF: "CHARISMA_BUFF",
	AURA_REWARD: "AURA_REWARD",
	REFLECTION_AURA: "REFLECTION_AURA",
	COMMANDER_AURA: "COMMANDER_AURA",
	HOLY_DOMAIN_AURA: "HOLY_DOMAIN_AURA",
	BACKUP_BUFFER_ACTIVE: "BACKUP_BUFFER_ACTIVE",
	PARASITIZED: "PARASITIZED",
	EQ_ARROGANT_CREED_DISABLED: "EQ_ARROGANT_CREED_DISABLED",
	GRACE_LIMIT: "GRACE_LIMIT",
	CANNOT_CAPTURE: "CANNOT_CAPTURE",
	RUSTED: "RUSTED",
	GOLD_MAGNET: "GOLD_MAGNET",
	STEALTH: "STEALTH",
	COMMAND_HIJACKED: "COMMAND_HIJACKED",
	DEEP_SLEEP: "DEEP_SLEEP",
	INVULNERABLE: "INVULNERABLE",
	SACCED_MOVE: "SACCED_MOVE",
	CAMOUFLAGED: "CAMOUFLAGED",
	JAMMING_TOWER: "JAMMING_TOWER",
	ROOTED: "ROOTED",
	CROSS_AURA: "CROSS_AURA",
	SHIELD_COOLDOWN: "SHIELD_COOLDOWN",
	BASTION_SHIELD: "BASTION_SHIELD"
}, A = "VOID_ANCHOR", p = "PORTAL_ENTRY", O = "SQUARE_RAILWAY", h = "IRON_CURTAIN", R = "SQ_AFTERIMAGE", I = "SQUARE_BASTION_FIELD", T = "BARRICADE", S = "JAMMING_TOWER", g = "VOID_FISSURE_SQUARE", L = "SUPPLY_DEPOT_SQUARE", N = "ANTI_PAWN_MINE", f = "ICE_SLICK", y = "WORMHOLE_A", G = "WORMHOLE_B", C = "WARP_STORM_PORTAL", P = {
	DESTRUCTIVE_SKILLS: [
		"PAWN_ASSASSIN",
		"PAWN_PROMOTE",
		"PAWN_DETONATOR",
		"PAWN_SACRIFICE",
		"BISHOP_AURORA",
		"ROOK_ION_CANNON"
	],
	REMOTE_STRIKE_SKILLS: ["BISHOP_AURORA"],
	REMOTE_STRIKE_ITEMS: ["ROYAL_CANNON"],
	NEGATIVE_STATUSES: [
		"FROZEN",
		"PETRIFIED",
		"SKILL_LOCKED",
		"SILENCED",
		"INFECTED",
		"BETRAYED",
		"GRAVITY_LOCKED",
		"AURA_SUPPRESSED"
	]
}, D = {
	R: [
		[0, 1],
		[0, -1],
		[1, 0],
		[-1, 0]
	],
	B: [
		[1, 1],
		[1, -1],
		[-1, 1],
		[-1, -1]
	],
	Q: [
		[0, 1],
		[0, -1],
		[1, 0],
		[-1, 0],
		[1, 1],
		[1, -1],
		[-1, 1],
		[-1, -1]
	],
	K: [
		[0, 1],
		[0, -1],
		[1, 0],
		[-1, 0],
		[1, 1],
		[1, -1],
		[-1, 1],
		[-1, -1]
	],
	N: [
		[2, 1],
		[2, -1],
		[-2, 1],
		[-2, -1],
		[1, 2],
		[1, -2],
		[-1, 2],
		[-1, -2]
	]
}, b = (d.PAWN, d.KNIGHT, d.BISHOP, d.ROOK, d.QUEEN, [
	"SELL_PIECE",
	"SELL_ITEM",
	"RECYCLE",
	"MIDAS_TOUCH",
	"REQUISITION_GAIN"
]), M = "ARTHUR", U = "ODYSSEUS", K = "HAPPY_PRINCE", v = "LOUIS_XIV", k = "RICHARD", B = "PIECE_SKILL", H = "CONSUMABLE", F = "EQUIPMENT", w = "TERRAIN", x = "BOSS_MECHANIC", W = "STATUS_EFFECT";
var V = class {
	static isValidPos(e, t) {
		return e >= 0 && e < 8 && t >= 0 && t < 8;
	}
	static getPiece(e, t, n) {
		return this.isValidPos(t, n) ? e[t][n] : null;
	}
	static isEmpty(e, t, n) {
		return !!this.isValidPos(t, n) && null === e[t][n];
	}
	static hasEnemy(e, t, n, i) {
		const a = this.getPiece(e, t, n);
		return null !== a && a.color !== i;
	}
	static hasFriend(e, t, n, i) {
		const a = this.getPiece(e, t, n);
		return null !== a && a.color === i;
	}
	static findPieces(e, t) {
		const n = [];
		for (let i = 0; i < 8; i++) for (let a = 0; a < 8; a++) {
			const r = e[i][a];
			r && t(r, i, a) && n.push({
				r: i,
				c: a,
				piece: r
			});
		}
		return n;
	}
	static slidingMoves(e, t, n, i, a) {
		const r = [];
		for (const [s, o] of a) {
			let a = t + s, c = n + o;
			for (; this.isValidPos(a, c);) {
				const t = e[a][c];
				if (t) {
					t.color !== i && r.push({
						r: a,
						c
					});
					break;
				}
				r.push({
					r: a,
					c
				}), a += s, c += o;
			}
		}
		return r;
	}
	static findFirstInLine(e, t, n, i, a) {
		for (const [r, s] of i) {
			let i = t + r, o = n + s;
			for (; this.isValidPos(i, o);) {
				const t = e[i][o];
				if (t) {
					if (a(t)) return {
						piece: t,
						r: i,
						c: o
					};
					break;
				}
				i += r, o += s;
			}
		}
		return null;
	}
	static neighbors(e, t, n = 1) {
		const i = [];
		for (let a = -n; a <= n; a++) for (let r = -n; r <= n; r++) {
			if (0 === a && 0 === r) continue;
			const n = e + a, s = t + r;
			this.isValidPos(n, s) && i.push({
				r: n,
				c: s
			});
		}
		return i;
	}
};
const Q = "undefined" != typeof window ? window : globalThis, Y = Q.gameEvents || new class {
	constructor() {
		this.events = {};
	}
	on(e, t) {
		return this.events[e] || (this.events[e] = []), this.events[e].push(t), () => this.off(e, t);
	}
	off(e, t) {
		this.events[e] && (this.events[e] = this.events[e].filter((e) => e !== t));
	}
	emit(e, t) {
		this.events[e] && this.events[e].forEach((e) => e(t));
	}
	once(e, t) {
		const n = (i) => {
			this.off(e, n), t(i);
		};
		return this.on(e, n);
	}
}();
void 0 !== Q && (Q.gameEvents = Y);
const q = "STAT_TRACK";
var z = class {
	static {
		this.REGISTRY = /* @__PURE__ */ new Map();
	}
	static register(e) {
		Array.isArray(e) ? e.forEach((e) => this.REGISTRY.set(e.id, e)) : this.REGISTRY.set(e.id, e);
	}
	static get(e) {
		return this.REGISTRY.get(e);
	}
	static getAllDefinitions() {
		return this.REGISTRY;
	}
	static getActiveSkillIds(e) {
		if (!e) return [];
		const t = /* @__PURE__ */ new Set();
		return e.skills && e.skills.forEach((e) => t.add(e)), e.learnedSkills && e.learnedSkills.forEach((e) => t.add(e)), e.traits && e.traits.forEach((e) => t.add(e)), Array.from(t);
	}
	static hasSkill(e, t) {
		return this.getActiveSkillIds(e).includes(t);
	}
}, Z = class {
	static isSilenced(e, t, n, i) {
		if (e.statuses?.some((e) => e.id === _.SILENCED || e.id === _.SKILL_LOCKED)) return !0;
		if (!t || void 0 === n || void 0 === i) return !1;
		if (e.type === d.KING) return !1;
		if (this.isSilenceImmune(e)) return !1;
		for (const [a, r] of [
			[-1, -1],
			[-1, 1],
			[1, -1],
			[1, 1]
		]) {
			let s = n + a, o = i + r;
			for (; s >= 0 && s < 8 && o >= 0 && o < 8;) {
				const n = t[s][o];
				if (n) {
					if (n.color !== e.color && n.type === d.BISHOP && z.hasSkill(n, "BISHOP_SILENCE") && !n.statuses?.some((e) => e.id === _.FROZEN || e.id === _.PETRIFIED || e.id === _.SILENCED || e.id === _.SKILL_LOCKED)) return !0;
					break;
				}
				s += a, o += r;
			}
		}
		return !1;
	}
	static isSilenceImmune(e) {
		return z.hasSkill(e, "GENERIC_FIREWALL") || z.hasSkill(e, "GENERIC_COATING") || !!e.statuses?.some((e) => e.id === _.HOLY_DOMAIN_AURA);
	}
	static applyStatus(e, t, n, i) {
		if (e.type === d.KING && (t === _.INVISIBLE || t === _.PETRIFIED)) return;
		if (z.hasSkill(e, "GENERIC_COATING") && P.NEGATIVE_STATUSES.includes(t)) return;
		if (z.hasSkill(e, "GENERIC_FIREWALL") && [
			_.SILENCED,
			_.BETRAYED,
			_.SKILL_LOCKED
		].includes(t)) return;
		if (e.statuses?.some((e) => e.id === _.HOLY_DOMAIN_AURA) && P.NEGATIVE_STATUSES.includes(t)) return;
		const a = e.statuses || [], r = a.findIndex((e) => e.id === t), s = {
			id: t,
			duration: n,
			...i
		};
		if (r >= 0) {
			const t = {
				...a[r],
				...s,
				duration: Math.max(a[r].duration, s.duration)
			};
			e.statuses = [
				...a.slice(0, r),
				t,
				...a.slice(r + 1)
			];
		} else e.statuses = [...a, s];
	}
	static tickPiece(e) {
		const t = {
			...e,
			statuses: e.statuses ? e.statuses.map((e) => ({ ...e })) : [],
			traits: e.traits ? [...e.traits] : []
		};
		t.type === d.KING && (t.statuses = t.statuses.filter((e) => e.id !== _.INVISIBLE && e.id !== _.PETRIFIED)), t.stackedPiece && (t.stackedPiece = this.tickPiece(t.stackedPiece)), t.statuses.length > 0 && (t.statuses = t.statuses.map((e) => e.duration >= 99 ? e : (e.duration <= 1 && e.id === _.BETRAYED && e.originalColor && (t.color = e.originalColor), {
			...e,
			duration: e.duration - 1
		})).filter((e) => e.duration > 0));
		const n = [_.GRACE_LIMIT, _.CANNOT_CAPTURE];
		return t.traits && t.traits.length > 0 && (t.traits = t.traits.filter((e) => !n.includes(e))), t;
	}
}, X = class {
	static getModifiers(e, t, n, i) {
		if (!e) return [];
		const a = Z.isSilenced(e), r = [];
		if (!a) {
			const t = z.getActiveSkillIds(e);
			e.metadata?.isSwallow && !t.includes("SWALLOW_TRAIT") && t.push("SWALLOW_TRAIT"), t.forEach((t) => {
				const n = z.get(t);
				!n || n.pieceType && n.pieceType !== e.type || !n.modifiers || r.push(n.modifiers);
			}), e.equippedItems && e.equippedItems.forEach((e) => {
				const t = z.get(e.effectId);
				t && t.modifiers && r.push(t.modifiers);
			});
		}
		return e.statuses && e.statuses.forEach((e) => {
			const t = z.get(e.id);
			t && t.modifiers && r.push(t.modifiers);
		}), r;
	}
	static getSquareModifiers(e, t, n, i) {
		if (!i || !i.squares) return [];
		const a = i.squares[`${t},${n}`];
		return a ? a.map((e) => z.get(e.id)?.modifiers).filter((e) => void 0 !== e) : [];
	}
	static hasModifier(e, t) {
		return this.getModifiers(e).some((e) => "function" == typeof e[t] || !0 === e[t]);
	}
};
const j = {
	ATOMIC_STATUS_FROZEN: 256n,
	ATOMIC_STATUS_INFECTED: 512n,
	MOVE_FWD: 65536n,
	MOVE_BACK: 1n << 17n,
	MOVE_SIDE: 1n << 18n,
	MOVE_DIAG: 1n << 19n,
	MOVE_FWD_CAPTURE: 32768n,
	MOVE_KNIGHT: 1n << 20n,
	STEP_LIMIT_1: 1n << 21n,
	STEP_UNLIMITED: 1n << 22n,
	LEAP_OVER: 1n << 23n,
	REQ_EMPTY: 1n << 24n,
	REQ_CAPTURE: 1n << 25n,
	MOVE_KNIGHT_EXT: 1n << 26n,
	STEP_TWO: 1n << 27n,
	BYPASS_FROZEN: 1n << 28n,
	ATOMIC_OBSTACLE: 1n << 29n,
	ATOMIC_GHOST: 1n << 30n,
	POTENTIAL_PROMOTION: 1n << 31n,
	POTENTIAL_REVIVE: 1n << 32n,
	ATOMIC_SHIELDED: 1n << 39n,
	TRIG_DEATH_EXPLODE: 1n << 40n,
	TRIG_KILL_REWARD: 1n << 41n,
	DEATH_REFLECT: 1n << 42n,
	DEATH_EXPLODE: 1n << 43n,
	ACT_RANGED_STRIKE: 1n << 44n,
	NET_LINE: 1n << 45n,
	NET_RANGE_2: 1n << 46n,
	NET_ALWAYS: 1n << 47n,
	NET_SOURCE: 1n << 48n,
	NET_GLOBAL_TYPE: 1n << 49n,
	NET_PROXY_KING: 1n << 50n,
	NET_MIRROR: 1n << 51n,
	REFLECTION_AURA: 1n << 51n,
	ACT_SWAP_ALLY: 1n << 52n,
	ACT_MIDAS_TOUCH: 1n << 53n,
	ACT_IRON_CURTAIN_TRIGGER: 1n << 54n,
	DEF_IMMUNE_MELEE: 1n << 56n,
	DEF_IMMUNE_RANGED: 1n << 57n,
	DEF_IMMUNE_PAWN: 1n << 58n,
	DEF_IMMUNE_KNIGHT: 1n << 59n,
	CREED_ACTIVE: 1n << 60n
}, J = {
	BISHOP_REFRACTION: ["STEP_UNLIMITED"],
	ROOK_VAULT: ["LEAP_OVER"],
	BISHOP_PHASE_SHIFT: ["MOVE_SIDE", "STEP_LIMIT_1"],
	PAWN_DETONATOR: ["DEATH_EXPLODE"],
	EQ_SELF_DESTRUCT: ["DEATH_EXPLODE"],
	KING_REFLECTION: ["DEATH_REFLECT"],
	EQ_REFLECTIVE_ARMOR: ["DEATH_REFLECT"],
	BISHOP_AURORA: ["ACT_RANGED_STRIKE"],
	ROOK_ION_CANNON: ["ACT_RANGED_STRIKE"],
	KING_SWAP: ["ACT_SWAP_ALLY"],
	ROOK_IRON_CURTAIN: ["ACT_IRON_CURTAIN_TRIGGER"],
	GENERIC_ALGORITHM_SWAP: ["ACT_SWAP_ALLY"],
	KNIGHT_CHAIN: ["TRIG_KILL_REWARD"],
	KNIGHT_MIDAS: ["ACT_MIDAS_TOUCH"],
	EQ_GOLDEN_HOOF: ["ACT_MIDAS_TOUCH"],
	KNIGHT_QUICK_ROUTING: ["BYPASS_FROZEN"],
	EQ_LIGHTWEIGHT_ALLOY: ["BYPASS_FROZEN"],
	ROOK_HOVER_TREAD: ["MOVE_DIAG", "STEP_LIMIT_1"],
	EQ_HOVER_TREAD: ["MOVE_DIAG", "STEP_LIMIT_1"],
	EQ_TELESCOPIC_LEGS: ["MOVE_KNIGHT_EXT"],
	EQ_MEGAPHONE: ["NET_RANGE_2"],
	PAWN_RELAY: ["NET_RANGE_2"],
	EQ_BASE_STATION: ["NET_LINE"],
	PAWN_DETONATOR_OLD: ["TRIG_DEATH_EXPLODE"],
	EQ_SELF_DESTRUCT_OLD: ["TRIG_DEATH_EXPLODE"],
	KING_REFLECTION_OLD: ["NET_MIRROR"],
	EQ_REFLECTIVE_ARMOR_OLD: ["NET_MIRROR"]
};
var $ = class {
	static resolveMask(e) {
		let t = 0n;
		return this.getUniqueSkillIds(e).forEach((e) => {
			const n = J[e];
			n && n.forEach((e) => {
				t |= j[e] || 0n;
			});
		}), e.equippedItems?.forEach((e) => {
			const n = J[e.effectId];
			n && n.forEach((e) => {
				t |= j[e] || 0n;
			});
		}), e.statuses?.forEach((e) => {
			const n = `ATOMIC_STATUS_${e.id}`;
			t |= j[n] || 0n;
		}), BigInt(t);
	}
	static getUniqueSkillIds(e) {
		const t = /* @__PURE__ */ new Set();
		return e.skills?.forEach((e) => t.add(e)), e.learnedSkills?.forEach((e) => t.add(e)), e.traits?.forEach((e) => t.add(e)), t;
	}
	static has(e, t) {
		if (void 0 === e.abilityMask || null === e.abilityMask) return !1;
		const n = j[t];
		if (void 0 === n) {
			const n = j[`ATOMIC_STATUS_${t}`];
			return void 0 !== n && 0n !== (BigInt(e.abilityMask) & BigInt(n));
		}
		return 0n !== (BigInt(e.abilityMask) & BigInt(n));
	}
	static hasBit(e, t) {
		return void 0 !== e.abilityMask && null !== e.abilityMask && 0n !== (BigInt(e.abilityMask) & BigInt(t));
	}
}, ee = class e {
	constructor(e) {
		this.seed = e >>> 0;
	}
	next() {
		this.seed = 1831565813 + (0 | this.seed);
		let e = Math.imul(this.seed ^ this.seed >>> 15, 1 | this.seed);
		return e = e + Math.imul(e ^ e >>> 7, 61 | e) ^ e, ((e ^ e >>> 14) >>> 0) / 4294967296;
	}
	nextInt(e, t) {
		return Math.floor(this.next() * (t - e)) + e;
	}
	nextIntInclusive(e, t) {
		return Math.floor(this.next() * (t - e + 1)) + e;
	}
	choice(e) {
		return e[this.nextInt(0, e.length)];
	}
	shuffle(e) {
		const t = [...e];
		for (let n = t.length - 1; n > 0; n--) {
			const e = this.nextInt(0, n + 1);
			[t[n], t[e]] = [t[e], t[n]];
		}
		return t;
	}
	getSeed() {
		return this.seed;
	}
	clone() {
		const t = new e(0);
		return t.seed = this.seed, t;
	}
};
const te = new Int32Array(4096), ne = new Int32Array(4096), ie = new Int32Array(64), ae = new Array(64), re = new Array(64);
(function() {
	for (let e = 0; e < 8; e++) for (let t = 0; t < 8; t++) {
		const n = 8 * e + t;
		ie[n] = Math.abs(2 * e - 7) + Math.abs(2 * t - 7);
		for (let s = 0; s < 8; s++) for (let i = 0; i < 8; i++) {
			const a = n << 6 | 8 * s + i;
			te[a] = Math.abs(e - s) + Math.abs(t - i), ne[a] = Math.max(Math.abs(e - s), Math.abs(t - i));
		}
		const i = [];
		for (let s = -1; s <= 1; s++) for (let n = -1; n <= 1; n++) {
			if (0 === s && 0 === n) continue;
			const a = e + s, r = t + n;
			a >= 0 && a < 8 && r >= 0 && r < 8 && i.push(8 * a + r);
		}
		re[n] = new Int32Array(i);
		const a = [], r = [
			[-2, -1],
			[-2, 1],
			[-1, -2],
			[-1, 2],
			[1, -2],
			[1, 2],
			[2, -1],
			[2, 1]
		];
		for (let s = 0; s < r.length; s++) {
			const n = e + r[s][0], i = t + r[s][1];
			n >= 0 && n < 8 && i >= 0 && i < 8 && a.push(8 * n + i);
		}
		ae[n] = new Int32Array(a);
	}
})();
var se = class {
	static isSquarePassageBlocked(e, t, n, i, a, r) {
		if (r) return r.squareBlock.some((r) => null === r.pieceUid && r.r === n && r.c === i && r.fn({
			board: e,
			piece: t,
			r: n,
			c: i,
			metadata: a
		}));
		if (a?.squares) {
			const r = `${n},${i}`, s = a.squares[r];
			if (s) for (const o of s) {
				const r = Bn.getDefinition(o.id);
				if (r?.modifiers?.squareBlockMovement) return r.modifiers.squareBlockMovement({
					board: e,
					piece: t,
					r: n,
					c: i,
					metadata: a
				});
			}
		}
		return !1;
	}
	static isSquareMud(e, t, n) {
		if (n?.squares) {
			const i = `${e},${t}`;
			return n.squares[i]?.some((e) => "MUD_SWAMP" === e.id) || !1;
		}
		return !1;
	}
	static getPseudoLegalMoves(e, t, n, i, a, r) {
		const s = e[t][n];
		if (!s) return [];
		if (s.metadata?.isDecoyTerminal) return [];
		const o = [], { color: c, type: l } = s;
		if (l === d.PAWN ? this.generatePawnMoves(e, t, n, s, o, i, r) : l === d.KNIGHT ? this.generateKnightMoves(e, t, n, s, o) : l === d.KING ? this.generateKingMoves(e, t, n, s, o) : this.generateSlidingMoves(e, t, n, s, o, i, r), this.applyAbilityEnhancements(e, t, n, s, o, i), i?.screenWrap && [
			[-1, -1],
			[-1, 0],
			[-1, 1],
			[0, -1],
			[0, 1],
			[1, -1],
			[1, 0],
			[1, 1]
		].forEach(([i, a]) => {
			const r = t + i, c = n + a;
			if (r < 0 || r >= 8 || c < 0 || c >= 8) {
				const t = (r + 8) % 8, n = (c + 8) % 8, i = e[t][n];
				(!i || i.color !== s.color && i.type !== d.KING) && (o.some((e) => e.r === t && e.c === n) || o.push({
					r: t,
					c: n
				}));
			}
		}), r) {
			let c = [...o];
			for (const o of r.movement) o.pieceUid === s.uid && (c = o.fn({
				board: e,
				piece: s,
				r: t,
				c: n,
				metadata: i,
				networkedMap: a
			}, c));
			return c;
		}
		{
			let r = [...o];
			const c = X.getModifiers(s, e, t, n);
			for (const o of c) o.movement && (r = o.movement({
				board: e,
				piece: s,
				r: t,
				c: n,
				metadata: i,
				networkedMap: a
			}, r));
			return r;
		}
	}
	static generatePawnMoves(e, t, n, i, a, r, s) {
		const o = i.color === c ? -1 : 1, d = t + o;
		if (d >= 0 && d < 8) {
			const t = e[d][n], o = t && t.color === i.color && t.statuses?.some((e) => e.id === _.FLATTENED) && !t.stackedPiece;
			t && !o || this.isSquarePassageBlocked(e, i, d, n, r, s) || a.push({
				r: d,
				c: n
			});
			const E = i.color === c ? l : c;
			n - 1 >= 0 && e[d][n - 1]?.color === E && !this.isSquarePassageBlocked(e, i, d, n - 1, r, s) && a.push({
				r: d,
				c: n - 1
			}), n + 1 < 8 && e[d][n + 1]?.color === E && !this.isSquarePassageBlocked(e, i, d, n + 1, r, s) && a.push({
				r: d,
				c: n + 1
			});
		}
		if (r?.squares?.[`${t},${n}`]?.some((e) => "SQUARE_RAILWAY" === e.id)) {
			const c = t + 2 * o;
			!(c >= 0 && c < 8) || e[t + o][n] || e[c][n] || this.isSquarePassageBlocked(e, i, t + o, n, r, s) || this.isSquarePassageBlocked(e, i, c, n, r, s) || a.push({
				r: c,
				c: n
			});
		}
	}
	static generateKnightMoves(e, t, n, i, a) {
		const r = ae[t << 3 | n];
		for (let s = 0; s < r.length; s++) {
			const t = r[s], n = t >> 3, o = 7 & t, c = e[n][o], l = c && c.color === i.color && c.statuses?.some((e) => e.id === _.FLATTENED) && !c.stackedPiece;
			c && c.color === i.color && !l || a.push({
				r: n,
				c: o
			});
		}
	}
	static generateKingMoves(e, t, n, i, a) {
		const r = re[t << 3 | n];
		for (let s = 0; s < r.length; s++) {
			const t = r[s], n = t >> 3, o = 7 & t, c = e[n][o], l = c && c.color === i.color && c.statuses?.some((e) => e.id === _.FLATTENED) && !c.stackedPiece;
			c && c.color === i.color && !l || a.push({
				r: n,
				c: o
			});
		}
	}
	static generateSlidingMoves(e, t, n, i, a, r, s) {
		const o = D[i.type], c = $.has(i, "LEAP_OVER");
		for (let l = 0; l < o.length; l++) {
			let d = t + o[l][0], E = n + o[l][1], u = !1;
			for (; d >= 0 && d < 8 && E >= 0 && E < 8 && !this.isSquarePassageBlocked(e, i, d, E, r, s);) {
				const t = e[d][E];
				if (t) {
					const e = t.color === i.color && t.statuses?.some((e) => e.id === _.FLATTENED) && !t.stackedPiece;
					if ((t.color !== i.color || e) && (a.push({
						r: d,
						c: E
					}), !c)) break;
					if (!c || u) break;
					u = !0;
				} else if (a.push({
					r: d,
					c: E
				}), this.isSquareMud(d, E, r)) break;
				d += o[l][0], E += o[l][1];
			}
		}
	}
	static applyAbilityEnhancements(e, t, n, i, a, r) {
		if ($.has(i, "MOVE_SIDE") && $.has(i, "STEP_LIMIT_1") && [
			[-1, 0],
			[1, 0],
			[0, -1],
			[0, 1]
		].forEach(([i, r]) => {
			const s = t + i, o = n + r;
			s >= 0 && s < 8 && o >= 0 && o < 8 && (e[s][o] || a.push({
				r: s,
				c: o
			}));
		}), $.has(i, "MOVE_FWD_CAPTURE")) {
			const r = t + (i.color === c ? -1 : 1);
			if (r >= 0 && r < 8) {
				const t = e[r][n];
				t && t.color !== i.color && (a.some((e) => e.r === r && e.c === n) || a.push({
					r,
					c: n
				}));
			}
		}
	}
	static getValidMoves(e, t, n, i, a) {
		const r = e[t][n];
		if (!r) return [];
		const s = Oe.isNetworked(i || { squares: {} }, r.color, t, n), o = i?.cache ? r.color === c ? i.cache.whiteNetwork : i.cache.blackNetwork : void 0;
		if (!vn.canAct(r, s, e, t, n, i, o)) return [];
		let l = this.getPseudoLegalMoves(e, t, n, i, o, a);
		return a ? (l = l.filter((t) => !a.squareBlock.some((n) => null === n.pieceUid ? n.r === t.r && n.c === t.c : n.fn({
			board: e,
			piece: r,
			r: t.r,
			c: t.c,
			metadata: i
		}))), l = l.filter((t) => {
			const n = e[t.r][t.c];
			if (!n) return !0;
			if (n.color !== r.color) {
				if (vn.isHidden(n, r.color, e, t.r, t.c)) return !1;
				if (a.invulnerable.some((a) => !(a.pieceUid !== n.uid && !a.broadcast && !Bn.hasSkill(r, "GENERIC_FIREWALL")) && a.fn({
					board: e,
					piece: n,
					r: t.r,
					c: t.c,
					metadata: i,
					networkedMap: o
				}, r))) return !1;
			}
			return !0;
		})) : (i && (l = l.filter((t) => !Kn.globalSquareBlockMods.some((n) => null === n.piece ? n.r === t.r && n.c === t.c : n.fn({
			board: e,
			piece: r,
			r: t.r,
			c: t.c,
			metadata: i
		})))), l = l.filter((t) => {
			const n = e[t.r][t.c];
			if (!n) return !0;
			if (n.color !== r.color) {
				if (vn.isHidden(n, r.color, e, t.r, t.c)) return !1;
				if (vn.isInvulnerable(n, r, e, t.r, t.c, i, o)) return !1;
			}
			return !0;
		})), l.map((e) => ({ ...e }));
	}
};
function oe(e, t, n, i, a, r) {
	return se.getValidMoves(e, t, n, i, r);
}
function ce(e, t, n, i) {
	const a = function(e, t, n, i) {
		if (n?.cache) return (t === c ? n.cache.whiteDeployZone : n.cache.blackDeployZone) || (t === c ? n.cache.whiteControl : n.cache.blackControl);
		return de(e, t, n, i).deployZone;
	}(e, t, n, i), r = [];
	for (let s = 0; s < 8; s++) for (let i = 0; i < 8; i++) {
		const o = n?.squares?.[`${s},${i}`]?.some((a) => {
			const r = Bn.getDefinition(a.id);
			if (!r || !r.modifiers) return !1;
			const o = {
				color: t,
				type: d.PAWN,
				skills: [],
				statuses: [],
				equippedItems: [],
				id: "",
				maxSlots: 1,
				level: 1
			}, c = "function" == typeof r.modifiers.squareBlockMovement ? r.modifiers.squareBlockMovement({
				board: e,
				piece: o,
				r: s,
				c: i,
				metadata: n
			}) : !!r.modifiers.squareBlockMovement, l = "function" == typeof r.modifiers.blockDeployment ? r.modifiers.blockDeployment({
				board: e,
				piece: o,
				r: s,
				c: i,
				metadata: n,
				color: t
			}) : !!r.modifiers.blockDeployment;
			return c || l;
		}) || !1;
		e[s][i] || !a[s][i] || o || r.push({
			r: s,
			c: i
		});
	}
	return r;
}
function le(e, t, n, i, a) {
	if (a?.squares) {
		const r = `${n},${i}`, s = a.squares[r];
		if (s) for (const o of s) {
			const r = Bn.getDefinition(o.id);
			if (r?.modifiers?.squareBlockMovement) return r.modifiers.squareBlockMovement({
				board: e,
				piece: t,
				r: n,
				c: i,
				metadata: a
			});
		}
	}
	return !1;
}
function de(e, t, n, i) {
	const a = Array(8).fill(!1).map(() => Array(8).fill(!1)), r = Array(8).fill(!1).map(() => Array(8).fill(!1)), s = Array(8).fill(!1).map(() => Array(8).fill(!1)), o = Array(8).fill(-1).map(() => Array(8).fill(-1)), E = [], u = [];
	let m = !1, A = "ALL";
	for (let c = 0; c < 8; c++) for (let n = 0; n < 8; n++) {
		const i = e[c][n];
		if (i && i.color === t) {
			const t = Bn.getModifiers(i, e, c, n);
			for (const a of t) a.globalNetworkDirection && "FORWARD" === a.globalNetworkDirection({
				board: e,
				piece: i,
				r: c,
				c: n
			}) && (A = "FORWARD"), a.globalDisableRelay?.({
				board: e,
				piece: i,
				r: c,
				c: n
			}) && (m = !0);
		}
	}
	let p = !1;
	if (i?.proxyKing && t === l) {
		let t = !1;
		e.forEach((e) => e.forEach((e) => {
			e?.type === d.KING && e.color === l && (t = !0);
		})), t || (p = !0);
	}
	if (p) for (let c = 0; c < 8; c++) for (let t = 0; t < 8; t++) {
		const i = e[c][t];
		i && i.color === l && (a[c][t] = !0, o[c][t] = 0, ue(e, c, t, a, n).forEach((e) => {
			r[e.r][e.c] = !0, s[e.r][e.c] = !0;
		}));
	}
	else if (function(e, t, n, i, a, r) {
		const s = r?.activeMonarchId === M;
		for (let o = 0; o < 8; o++) for (let r = 0; r < 8; r++) {
			const l = e[o][r], E = l?.statuses?.some((e) => e.networkOwnerOverride === t);
			if (l && (l.color === t || E)) {
				const E = Bn.getModifiers(l, e, o, r);
				let u = l.color === t && l.type === d.KING || E.some((t) => t.proxyKing?.({
					board: e,
					piece: l,
					r: o,
					c: r
				}) || t.networkSource?.({
					board: e,
					piece: l,
					r: o,
					c: r
				}));
				if (s && l.color === c) {
					const e = l.skills.some((e) => "LEGENDARY" === Bn.getDefinition(e)?.tier) || l.equippedItems?.some((e) => "LEGENDARY" === e.tier);
					(l.level >= 3 || e) && (u = !0);
				}
				u && (n[o][r] = !0, i[o][r] = 0, a.push({
					r: o,
					c: r
				}));
			}
		}
	}(e, t, a, o, u, n), !n?.globalJamming || n.globalJamming <= 0) (function(e, t, n, i, a, r, s, o, l, d, E, u) {
		let m = 0;
		for (; m < o.length;) {
			const { r: E, c: A } = o[m++], p = e[E][A], O = r[E][A], h = p.statuses?.some((e) => e.id === _.FROZEN || e.id === _.PETRIFIED), R = me(e, E, A, n, u);
			Bn.getModifiers(p, e, E, A).forEach((t) => {
				t.networkRange && R.push(...t.networkRange({
					board: e,
					piece: p,
					r: E,
					c: A
				}));
			});
			for (const u of R) {
				if ("FORWARD" === d && !(t === c ? u.r <= E : u.r >= E)) continue;
				const m = e[u.r][u.c];
				a[u.r][u.c] = !0, h || (i[u.r][u.c] = !0), m && m.color === t && !n[u.r][u.c] && (n[u.r][u.c] = !0, r[u.r][u.c] = O + 1, l || (o.push(u), s.push({
					from: {
						r: E,
						c: A
					},
					to: u
				})));
			}
		}
	})(e, t, a, r, s, o, E, u, m, A, 0, n);
	else for (let c = 0; c < 8; c++) for (let i = 0; i < 8; i++) {
		const o = e[c][i], l = o?.statuses?.some((e) => e.networkOwnerOverride === t);
		o && (o.color === t || l) && (o.color === t && o.type === d.KING || Bn.hasModifier(o, "networkSource")) && (ue(e, c, i, a, n).forEach((e) => r[e.r][e.c] = !0), me(e, c, i, a, n).forEach((e) => s[e.r][e.c] = !0));
	}
	return function(e, t, n, i, a) {
		const r = /* @__PURE__ */ new Set(), s = {
			[d.PAWN]: [],
			[d.KNIGHT]: [],
			[d.BISHOP]: [],
			[d.ROOK]: [],
			[d.QUEEN]: [],
			[d.KING]: []
		};
		let o = !1;
		for (let c = 0; c < 8; c++) for (let l = 0; l < 8; l++) {
			const d = e[c][l];
			if (d && d.color === t) {
				const t = Bn.getModifiers(d, e, c, l);
				for (const r of t) if (r.alwaysNetworked) {
					const t = r.alwaysNetworked({
						board: e,
						piece: d,
						r: c,
						c: l,
						networkedMap: n
					});
					t && (n[c][l] = !0, -1 === i[c][l] && (i[c][l] = 0), Array.isArray(t) && t.forEach((e) => {
						a.push({
							from: e,
							to: {
								r: c,
								c: l
							}
						});
					}));
				}
				if (s[d.type] && s[d.type].push({
					r: c,
					c: l
				}), n[c][l]) {
					const e = Bn.getAllSkills(d);
					(e.includes("PAWN_SWARM") || e.includes("GENERIC_HIVE_KERNEL")) && r.add(d.type);
				}
				d.equippedItems?.some((e) => "EQ_SWARM_INTELLIGENCE" === e.effectId) && (o = !0);
			}
		}
		o && s[d.PAWN].forEach((r) => {
			let s = null;
			for (const [n, i] of [
				[-1, -1],
				[-1, 0],
				[-1, 1],
				[0, -1],
				[0, 1],
				[1, -1],
				[1, 0],
				[1, 1]
			]) {
				const a = r.r + n, o = r.c + i;
				if (Ae(a, o)) {
					const n = e[a][o];
					if (n && n.color === t && n.type === d.PAWN) {
						s = {
							r: a,
							c: o
						};
						break;
					}
				}
			}
			s && !n[r.r][r.c] && (n[r.r][r.c] = !0, i[r.r][r.c] = 0, a.push({
				from: s,
				to: r
			}));
		});
		r.forEach((e) => {
			s[e].forEach((e) => {
				n[e.r][e.c] || (n[e.r][e.c] = !0, i[e.r][e.c] = 0);
			});
		});
	}(e, t, a, o, E), {
		networked: a,
		control: r,
		deployZone: s,
		connections: E,
		depths: o
	};
}
function Ee(e, t, n, i, a) {
	const r = [], s = t.type, o = t.color;
	if (s === d.KING || s === d.KNIGHT || t.metadata?.isDecoyTerminal) {
		const o = t.metadata?.isDecoyTerminal ? D[d.KING] : D[s];
		for (let s = 0; s < o.length; s++) {
			const c = n + o[s][0], l = i + o[s][1];
			c >= 0 && c < 8 && l >= 0 && l < 8 && (le(e, t, c, l, a) || r.push({
				r: c,
				c: l
			}));
		}
	} else if (s === d.PAWN) {
		const s = o === c ? -1 : 1;
		n + s >= 0 && n + s < 8 && i - 1 >= 0 && (le(e, t, n + s, i - 1, a) || r.push({
			r: n + s,
			c: i - 1
		})), n + s >= 0 && n + s < 8 && i + 1 < 8 && (le(e, t, n + s, i + 1, a) || r.push({
			r: n + s,
			c: i + 1
		}));
	} else {
		const o = D[s];
		for (let s = 0; s < o.length; s++) {
			let c = n + o[s][0], l = i + o[s][1];
			for (; c >= 0 && c < 8 && l >= 0 && l < 8 && !le(e, t, c, l, a) && (r.push({
				r: c,
				c: l
			}), !e[c][l]);) c += o[s][0], l += o[s][1];
		}
	}
	return r;
}
function ue(e, t, n, i, a) {
	const r = e[t][n];
	return r ? r.type !== d.KING && r.statuses?.some((e) => e.id === _.FROZEN || e.id === _.PETRIFIED) ? [] : _e(e, r, t, n, Ee(e, r, t, n, a), i, a) : [];
}
function me(e, t, n, i, a) {
	const r = e[t][n];
	return r ? r.type !== d.KING && r.statuses?.some((e) => e.id === _.FROZEN || e.id === _.PETRIFIED) && !Bn.hasModifier(r, "networkSource") ? [] : _e(e, r, t, n, Ee(e, r, t, n, a), i, a) : [];
}
function _e(e, t, n, i, a, r, s) {
	const o = Bn.getModifiers(t, e, n, i);
	let c = [...a];
	for (const l of o) l.movement && (c = l.movement({
		board: e,
		piece: t,
		r: n,
		c: i,
		networkedMap: r,
		isControlSquares: !0
	}, c));
	return s?.screenWrap && [
		[-1, -1],
		[-1, 0],
		[-1, 1],
		[0, -1],
		[0, 1],
		[1, -1],
		[1, 0],
		[1, 1]
	].forEach(([e, t]) => {
		const a = n + e, r = i + t;
		if (a < 0 || a >= 8 || r < 0 || r >= 8) {
			const e = (a + 8) % 8, t = (r + 8) % 8;
			c.some((n) => n.r === e && n.c === t) || c.push({
				r: e,
				c: t
			});
		}
	}), c;
}
function Ae(e, t) {
	return e >= 0 && e < 8 && t >= 0 && t < 8;
}
function pe(e, t, n) {
	const i = `${e},${t}`, a = n.squares?.[i] || [];
	for (const r of a) if (Bn.getDefinition(r.id)?.modifiers?.squareBlockMovement?.({
		board: [],
		piece: null,
		r: e,
		c: t,
		metadata: n
	})) return !0;
	return !1;
}
var Oe = class {
	static recompute(e, t, n, i, a = !1) {
		Kn.build(e, t);
		const r = de(e, c, t, i), s = de(e, l, t, i), o = this.filterVisibility(e, c, r.networked, t), E = this.filterVisibility(e, l, s.networked, t);
		this.projectActiveSkillThreats(e, t, c, o), this.projectActiveSkillThreats(e, t, l, E);
		const u = E.map((e) => e.map((e) => e ? 1 : 0)), m = {
			whiteNetwork: r.networked,
			blackNetwork: s.networked,
			whiteControl: o,
			blackControl: E,
			whiteDeployZone: r.deployZone,
			blackDeployZone: s.deployZone,
			whiteConnections: r.connections,
			blackConnections: s.connections,
			whiteDepths: r.depths,
			blackDepths: s.depths,
			threatMap: u,
			validDeployments: [],
			validMovesMap: {},
			isCheck: !1,
			lastUpdateEpoch: Date.now()
		}, _ = {
			...t,
			cache: m
		};
		if (!a && 999 !== t.globalJamming && !0 !== t.isAISimulation && !0 !== globalThis.isAISimulation) {
			m.validDeployments = ce(e, n, _, i);
			const t = {};
			for (let n = 0; n < 8; n++) for (let i = 0; i < 8; i++) {
				const a = e[n][i];
				a && (t[a.uid || a.id] = oe(e, n, i, _));
			}
			m.validMovesMap = t;
		}
		let A = !1;
		for (let l = 0; l < 8; l++) {
			for (let t = 0; t < 8; t++) {
				const i = e[l][t];
				if (i && i.color === n && (i.type === d.KING || Bn.isProxyKing(i)) && (n === c ? E : o)[l][t]) {
					A = !0;
					break;
				}
			}
			if (A) break;
		}
		return m.isCheck = A, m;
	}
	static patchCache(e, t, n, i, a, r) {
		let s = !0;
		for (const c of a) {
			const e = c.piece || (c.to ? t[c.to.r]?.[c.to.c] : null);
			if (!e) {
				s = !1;
				break;
			}
			const i = e.type;
			if (i === d.KING || i === d.QUEEN || i === d.ROOK || i === d.BISHOP || Bn.isProxyKing(e) || Bn.hasModifier(e, "networkSource") || Bn.hasModifier(e, "networkRange") || Bn.hasModifier(e, "alwaysNetworked") || this.pieceHasLethalSkill(e) || n.globalJamming && n.globalJamming > 0) {
				s = !1;
				break;
			}
		}
		if (!s) return this.recompute(t, n, i, r, !0);
		if (s) {
			for (let e = 0; e < 8; e++) {
				for (let n = 0; n < 8; n++) {
					const a = t[e][n];
					if (a && a.color === i && Bn.hasModifier(a, "networkRange")) {
						s = !1;
						break;
					}
				}
				if (!s) break;
			}
			if (!s) return this.recompute(t, n, i, r, !0);
		}
		const o = {
			...e,
			whiteControl: e.whiteControl.map((e) => [...e]),
			blackControl: e.blackControl.map((e) => [...e]),
			whiteDeployZone: e.whiteDeployZone.map((e) => [...e]),
			blackDeployZone: e.blackDeployZone.map((e) => [...e]),
			whiteNetwork: e.whiteNetwork.map((e) => [...e]),
			blackNetwork: e.blackNetwork.map((e) => [...e]),
			lastUpdateEpoch: Date.now()
		};
		for (const d of a) {
			const e = d.piece || (d.to ? t[d.to.r]?.[d.to.c] : null);
			if (!e) continue;
			const i = e.color, a = i === c ? o.whiteControl : o.blackControl, r = i === c ? o.whiteDeployZone : o.blackDeployZone, s = i === c ? o.whiteNetwork : o.blackNetwork;
			if (d.from) {
				const i = t[d.from.r][d.from.c];
				t[d.from.r][d.from.c] = e;
				const o = ue(t, d.from.r, d.from.c, s, n), c = me(t, d.from.r, d.from.c, s, n);
				t[d.from.r][d.from.c] = i, o.forEach((e) => a[e.r][e.c] = !1), c.forEach((e) => r[e.r][e.c] = !1), s[d.from.r][d.from.c] = !1;
			}
			if (d.to) {
				const e = ue(t, d.to.r, d.to.c, s, n), o = me(t, d.to.r, d.to.c, s, n);
				e.forEach((e) => a[e.r][e.c] = !0), o.forEach((e) => r[e.r][e.c] = !0);
				let c = !1;
				for (const [n, a] of [
					[-1, 0],
					[1, 0],
					[0, -1],
					[0, 1],
					[-1, -1],
					[-1, 1],
					[1, -1],
					[1, 1]
				]) {
					const e = d.to.r + n, r = d.to.c + a;
					if (e >= 0 && e < 8 && r >= 0 && r < 8) {
						const n = t[e][r];
						if (n && n.color === i && s[e][r]) {
							c = !0;
							break;
						}
					}
				}
				s[d.to.r][d.to.c] = c;
			}
		}
		let l = !1;
		for (let E = 0; E < 8; E++) for (let e = 0; e < 8; e++) {
			const n = t[E][e];
			if (n && n.color === i && (n.type === d.KING || Bn.isProxyKing(n)) && (i === c ? o.blackControl : o.whiteControl)[E][e]) {
				l = !0;
				break;
			}
		}
		return o.isCheck = l, o;
	}
	static projectActiveSkillThreats(e, t, n, i) {
		for (let a = 0; a < 8; a++) for (let r = 0; r < 8; r++) {
			const s = e[a][r];
			if (!s || s.color !== n) continue;
			const o = [...Bn.getAllSkills(s) || [], ...s.equippedItems?.map((e) => e.effectId) || []];
			for (const n of o) {
				const o = Bn.getDefinition(n);
				if (!o?.activeSpec || !o.aiThreat || "NONE" === o.aiThreat.level) continue;
				const c = o.activeSpec;
				if (!c.getAlternatives) continue;
				if (c.cooldownKey && (s.metadata?.[c.cooldownKey] || 0) > 0) continue;
				if (c.usesKey && c.maxUses && (s.metadata?.[c.usesKey] || 0) >= c.maxUses) continue;
				const l = {
					board: e,
					piece: s,
					r: a,
					c: r,
					metadata: t,
					emit: () => {}
				}, d = c.getAlternatives(e, a, r, s, l);
				if (d) for (const e of d) e.pos && e.pos.r >= 0 && e.pos.r < 8 && e.pos.c >= 0 && e.pos.c < 8 && (i[e.pos.r][e.pos.c] = !0);
			}
		}
	}
	static pieceHasLethalSkill(e) {
		const t = [...Bn.getAllSkills(e) || [], ...e.equippedItems?.map((e) => e.effectId) || []];
		for (const n of t) {
			const e = Bn.getDefinition(n);
			if (e?.aiThreat?.level && "NONE" !== e.aiThreat.level && e?.activeSpec?.getAlternatives) return !0;
		}
		return !1;
	}
	static filterVisibility(e, t, n, i) {
		const a = t === c ? l : c, r = [];
		e.forEach((e, t) => e.forEach((e, n) => {
			e && e.color === a && e.equippedItems?.some((e) => "EQ_SCOUT_RADAR" === e.effectId) && r.push({
				r: t,
				c: n
			});
		}));
		const s = Array(8).fill(null).map(() => Array(8).fill(!1));
		return e.forEach((a, o) => a.forEach((a, c) => {
			if (a && a.color === t) {
				if (!n[o][c] && a.type !== d.KING && !Bn.isProxyKing(a)) return;
				const t = a.statuses?.some((e) => e.id === _.ENCRYPTED), l = r.some((e) => Math.max(Math.abs(e.r - o), Math.abs(e.c - c)) <= 2);
				if (t && !l) return;
				const E = ue(e, o, c, n, i);
				Bn.getModifiers(a, e, o, c).forEach((t) => {
					t.networkRange && E.push(...t.networkRange({
						board: e,
						piece: a,
						r: o,
						c
					}));
				}), E.forEach((e) => {
					s[e.r][e.c] = !0;
				});
			}
		})), s;
	}
	static getControlValue(e, t, n) {
		const i = e.cache;
		if (!i) return 0;
		let a = 0;
		return i.whiteControl[t][n] && (a += 1), i.blackControl[t][n] && (a -= 1), a;
	}
	static isNetworked(e, t, n, i) {
		const a = e.cache;
		return !a || (t === c ? a.whiteNetwork[n][i] : a.blackNetwork[n][i]);
	}
}, he = class {
	static apply(e, t, n, i, a, r, s = !1) {
		const o = s || !0 === globalThis.isAISimulation;
		if (!e) return Oe.recompute(t, n, i, r, o);
		const c = [];
		let l = !1;
		for (const d of a) if ("MOVE" === d.type) {
			const e = t[d.to.r][d.to.c];
			c.push({
				from: d.from,
				to: d.to,
				type: "MOVE",
				piece: e
			});
		} else if ("KILL" === d.type) {
			const e = d.pos;
			e ? c.push({
				from: e,
				type: "KILL"
			}) : l = !0;
		} else "SPAWN" === d.type ? d.pos ? c.push({
			to: d.pos,
			type: "SPAWN",
			piece: d.piece
		}) : l = !0 : "ADD_STATUS" !== d.type && "REMOVE_STATUS" !== d.type && "SET_SQUARE" !== d.type && "REMOVE_SQUARE" !== d.type && "SWITCH_TURN" !== d.type || (l = !0);
		if (l || 0 === c.length) return Oe.recompute(t, n, i, r, o);
		let E = !0;
		for (const u of c) {
			const e = u.piece || (u.from ? t[u.from.r]?.[u.from.c] : null);
			if (!e) {
				E = !1;
				break;
			}
			const i = e.type;
			if (i === d.KING || i === d.QUEEN || i === d.ROOK || i === d.BISHOP || Bn.isProxyKing(e) || Bn.hasModifier(e, "networkSource") || Bn.hasModifier(e, "networkRange") || Bn.hasModifier(e, "alwaysNetworked") || n.globalJamming && n.globalJamming > 0) {
				E = !1;
				break;
			}
		}
		if (!E) return Oe.recompute(t, n, i, r, o);
		if (E) {
			for (let e = 0; e < 8; e++) {
				for (let n = 0; n < 8; n++) {
					const a = t[e][n];
					if (a && a.color === i && Bn.hasModifier(a, "networkRange")) {
						E = !1;
						break;
					}
				}
				if (!E) break;
			}
			if (!E) return Oe.recompute(t, n, i, r, o);
		}
		return Oe.patchCache(e, t, n, i, c, r);
	}
}, Re = class {
	static build(e, t) {
		const n = {
			movement: [],
			invulnerable: [],
			squareBlock: []
		}, i = Dn.getActivePieces(e);
		for (const { piece: a, r, c: s } of i) {
			if (!a.uid) continue;
			const t = X.getModifiers(a, e, r, s);
			for (const e of t) e.movement && n.movement.push({
				pieceUid: a.uid,
				fn: e.movement
			}), e.invulnerable && n.invulnerable.push({
				pieceUid: a.uid,
				broadcast: !!e.invulnerableBroadcast,
				fn: e.invulnerable
			}), e.squareBlockMovement && n.squareBlock.push({
				pieceUid: a.uid,
				fn: e.squareBlockMovement
			});
		}
		if (t?.squares) for (const [a, r] of Object.entries(t.squares)) {
			const [i, r] = a.split(",").map(Number), s = X.getSquareModifiers(e, i, r, t);
			for (const e of s) e.squareBlockMovement && n.squareBlock.push({
				pieceUid: null,
				r: i,
				c: r,
				fn: e.squareBlockMovement
			});
		}
		return n;
	}
};
const Ie = () => crypto.randomUUID(), Te = ({ board: e, r: t, c: n, piece: i, emit: a }) => {
	const r = i.type, s = i.color, o = [];
	if (r === d.PAWN) {
		const e = s === c ? -1 : 1;
		t + e >= 0 && t + e < 8 && (n > 0 && o.push({
			r: t + e,
			c: n - 1
		}), n < 7 && o.push({
			r: t + e,
			c: n + 1
		}));
	} else if (r === d.KNIGHT || r === d.KING) {
		const e = D[r];
		for (const [i, a] of e) {
			const e = t + i, r = n + a;
			e >= 0 && e < 8 && r >= 0 && r < 8 && o.push({
				r: e,
				c: r
			});
		}
	} else {
		const i = D[r];
		for (const [a, r] of i) {
			let i = t + a, s = n + r;
			for (; i >= 0 && i < 8 && s >= 0 && s < 8 && (o.push({
				r: i,
				c: s
			}), !e[i][s]);) i += a, s += r;
		}
	}
	o.forEach((t) => {
		const n = e[t.r][t.c];
		n && n.color !== i.color && n.type !== d.KING && a({
			type: "ADD_STATUS",
			pos: t,
			statusId: _.SILENCED,
			duration: 2
		});
	});
}, Se = [
	{
		id: "GENERIC_ALGORITHM_SWAP",
		name: "算法共享",
		tier: "RARE",
		category: B,
		description: "主动：可以与周围 1 格内的任意一名非王友军互换位置。",
		range: {
			type: "chebyshev",
			radius: 1
		},
		activeSpec: {
			targeting: "target",
			getAlternatives: (e, t, n, i) => {
				const a = [];
				for (const [r, s] of [
					[-1, 0],
					[1, 0],
					[0, -1],
					[0, 1],
					[-1, -1],
					[-1, 1],
					[1, -1],
					[1, 1]
				]) {
					const o = t + r, c = n + s;
					if (o >= 0 && o < 8 && c >= 0 && c < 8) {
						const t = e[o][c];
						t && t.color === i.color && t.type !== d.KING && a.push({
							pos: {
								r: o,
								c
							},
							value: {
								r: o,
								c
							}
						});
					}
				}
				return a;
			},
			getAoE: (e, t, n, i, a) => a ? [{
				r: a.r,
				c: a.c
			}] : [],
			execute: (e, t, n, i, a, r) => {
				a && (r({
					type: "SWAP_PIECES",
					posA: {
						r: t,
						c: n
					},
					posB: a,
					actorColor: i.color
				}), r({
					type: "SHOW_TEXT",
					text: "Algorithm Swap",
					textKey: "LOG_ALGORITHM_SWAP",
					style: "system",
					pos: a
				}));
			}
		}
	},
	{
		id: "GENERIC_BACKUP_BUFFER",
		name: "应急电池",
		tier: "RARE",
		category: B,
		description: "当该棋子断开网络连接时，它不会立即冻结，而是可以继续自由行动 1 个回合。",
		hooks: { onTurnStart: ({ board: e, piece: t, r: n, c: i, emit: a, metadata: r }) => {
			const { networked: s } = de(e, t.color, r);
			if (s[n][i]) a({
				type: "UPDATE_ROSTER_PIECE",
				pieceUid: t.uid,
				updates: { metadata: {
					...t.metadata,
					backupBuffer: 1
				} }
			});
			else {
				const e = t.metadata?.backupBuffer || 0;
				e > 0 && (a({
					type: "UPDATE_ROSTER_PIECE",
					pieceUid: t.uid,
					updates: { metadata: {
						...t.metadata,
						backupBuffer: e - 1
					} }
				}), a({
					type: "ADD_STATUS",
					pos: {
						r: n,
						c: i
					},
					statusId: _.BACKUP_BUFFER_ACTIVE,
					duration: 2
				}), a({
					type: "SHOW_TEXT",
					text: "Backup Battery",
					textKey: "LOG_BACKUP_BUFFER",
					style: "system"
				}));
			}
		} }
	},
	{
		id: "GENERIC_RAPID_DEPLOY",
		name: "轻装上阵",
		tier: "EPIC",
		category: B,
		description: "部署该棋子时，有 10% 概率不消耗本回合的操作次数。",
		hooks: { onDeploy: ({ emit: e, prng: t }) => {
			t && t.next() < .1 && (e({
				type: "SET_EXTRA_MOVE",
				active: !0
			}), e({
				type: "SHOW_TEXT",
				text: "Rapid Deploy: Double Action!",
				textKey: "LOG_RAPID_DEPLOY",
				style: "system"
			}));
		} }
	},
	{
		id: "GENERIC_COATING",
		name: "涂层保护",
		tier: "COMMON",
		category: B,
		description: "被动：彻底免疫地图上所有环境负面效果及负面状态（如重力锁定、感染等）。",
		hooks: {
			onTurnStart: ({ piece: e, r: t, c: n, emit: i }) => {
				const a = [
					_.FROZEN,
					_.PETRIFIED,
					_.INFECTED,
					_.SILENCED,
					_.GRAVITY_LOCKED,
					_.SKILL_LOCKED,
					_.ROOTED,
					_.PARASITIZED,
					"RUSTED"
				];
				(e.statuses || []).forEach((e) => {
					a.includes(e.id) && i({
						type: "REMOVE_STATUS",
						pos: {
							r: t,
							c: n
						},
						statusId: e.id
					});
				});
			},
			onAfterMove: ({ piece: e, r: t, c: n, emit: i }) => {
				const a = [
					_.FROZEN,
					_.PETRIFIED,
					_.INFECTED,
					_.SILENCED,
					_.GRAVITY_LOCKED,
					_.SKILL_LOCKED,
					_.ROOTED,
					_.PARASITIZED,
					"RUSTED"
				];
				(e.statuses || []).forEach((e) => {
					a.includes(e.id) && i({
						type: "REMOVE_STATUS",
						pos: {
							r: t,
							c: n
						},
						statusId: e.id
					});
				});
			},
			onDeath: ({ attacker: e, cancelAction: t, emit: n, r: i, c: a }) => {
				e || (t?.(), n({
					type: "SHOW_TEXT",
					text: "Coating Protects",
					textKey: "LOG_COATING_PROTECT",
					style: "gold",
					pos: {
						r: i,
						c: a
					}
				}));
			}
		}
	},
	{
		id: "GENERIC_SHARPEN",
		name: "锋利算法",
		tier: "COMMON",
		category: B,
		description: "吃子后，额外获得 3 金币。",
		hooks: { onKill: ({ piece: e, emit: t }) => {
			e.color === c && t({
				type: "MODIFY_GOLD",
				amount: 3,
				reason: "SHARPEN"
			});
		} }
	},
	{
		id: "GENERIC_CHAFF",
		name: "干扰丝",
		tier: "RARE",
		category: B,
		description: "被攻击死亡时， 50% 概率触发“闪避”，原地消失并随机出现在相邻空格。",
		hooks: { onDeath: ({ board: e, r: t, c: n, piece: i, cancelAction: a, emit: r, prng: s }) => {
			if (s && s.next() < .5) {
				const o = [
					[-1, 0],
					[1, 0],
					[0, -1],
					[0, 1],
					[-1, -1],
					[-1, 1],
					[1, -1],
					[1, 1]
				].sort(() => s.next() - .5);
				for (const [s, c] of o) {
					const o = t + s, l = n + c;
					if (o >= 0 && o < 8 && l >= 0 && l < 8 && !e[o][l]) {
						a?.(), r({
							type: "REMOVE_PIECE",
							pos: {
								r: t,
								c: n
							}
						}), r({
							type: "DELAY",
							duration: 250
						}), r({
							type: "DELAY",
							duration: 120
						}), r({
							type: "SPAWN",
							pos: {
								r: o,
								c: l
							},
							piece: {
								...i,
								statuses: []
							}
						}), r({
							type: "SHOW_TEXT",
							text: "Evaded!",
							textKey: "LOG_CHAFF_EVADE",
							style: "system",
							pos: {
								r: o,
								c: l
							}
						});
						break;
					}
				}
			}
		} }
	},
	{
		id: "GENERIC_RECALL",
		name: "紧急回库",
		tier: "RARE",
		category: B,
		description: "主动：将该棋子撤回库存（保留等级和属性）。",
		range: {
			type: "chebyshev",
			radius: 0
		},
		activeSpec: {
			targeting: "self",
			usesKey: "recallUses",
			maxUses: 1,
			execute: (e, t, n, i, a, r) => {
				(i.metadata?.recallUses || 0) >= 1 || (r({
					type: "MODIFY_RESERVE",
					color: i.color,
					pieceType: i.type,
					amount: 1
				}), r({
					type: "UNDEPLOY_PIECE",
					uid: i.uid
				}), r({
					type: "REMOVE_PIECE",
					pos: {
						r: t,
						c: n
					}
				}), r({
					type: "UPDATE_ROSTER_PIECE",
					pieceUid: i.uid,
					updates: { metadata: {
						...i.metadata,
						recallUses: (i.metadata?.recallUses || 0) + 1
					} }
				}), r({
					type: "SHOW_TEXT",
					text: "Recall Successful",
					textKey: "LOG_RECALL_SUCCESS",
					style: "system",
					pos: {
						r: t,
						c: n
					}
				}));
			}
		},
		getDisplayStatus: (e, t) => (e.metadata?.recallUses || 0) >= 1 ? {
			text: t("used"),
			colorClass: "text-red-500"
		} : {
			text: t("ready"),
			colorClass: "text-cyan-400 animate-pulse"
		}
	},
	{
		id: "GENERIC_LOGIC_LOCK",
		name: "逻辑锁",
		tier: "EPIC",
		category: B,
		description: "被动：被该棋子攻击范围覆盖的敌方非王棋子，会被施加\"沉默\"（无法触发任何非基础技能）。",
		hooks: {
			onTurnStart: (e) => Te(e),
			onAfterMove: (e) => Te(e),
			onDeploy: (e) => Te(e)
		}
	},
	{
		id: "GENERIC_MIRRORING",
		name: "镜像协议",
		tier: "EPIC",
		category: B,
		description: "当该棋子相邻有友军时，能复制友军的基础移动逻辑（仅限基础位移）。",
		modifiers: { movement: (e, t) => {
			const { board: n, r: i, c: a, piece: r, isControlSquares: s } = e;
			if ((r.metadata?.mirrorCd || 0) > 0) return t;
			let o = null;
			for (const [c, l] of [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1],
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			]) {
				const e = i + c, t = a + l;
				if (e >= 0 && e < 8 && t >= 0 && t < 8) {
					const i = n[e][t];
					if (i && i.color === r.color && i.type !== d.KING && i.type !== r.type) {
						o = i.type;
						break;
					}
				}
			}
			if (o) {
				const e = (e, o, c) => {
					let l = i + e, d = a + o;
					for (; l >= 0 && l < 8 && d >= 0 && d < 8;) {
						const i = n[l][d];
						if (i && i.color === r.color && !s || t.push({
							r: l,
							c: d
						}), i || !c) break;
						l += e, d += o;
					}
				};
				if (o === d.PAWN) {
					const e = r.color === c ? -1 : 1;
					i + e >= 0 && i + e < 8 && (n[i + e][a] || t.push({
						r: i + e,
						c: a
					}), a > 0 && n[i + e][a - 1] && n[i + e][a - 1].color !== r.color && t.push({
						r: i + e,
						c: a - 1
					}), a < 7 && n[i + e][a + 1] && n[i + e][a + 1].color !== r.color && t.push({
						r: i + e,
						c: a + 1
					}));
				} else o === d.KNIGHT ? D.N.forEach(([t, n]) => e(t, n, !1)) : (o !== d.BISHOP && o !== d.QUEEN || D.B.forEach(([t, n]) => e(t, n, !0)), o !== d.ROOK && o !== d.QUEEN || D.R.forEach(([t, n]) => e(t, n, !0)));
			}
			return t;
		} },
		hooks: {
			onAfterMove: ({ piece: e, r: t, c: n, from: i, emit: a }) => {
				!i || i.r === t && i.c === n || e.metadata?.mirrorCd && 0 !== e.metadata.mirrorCd || a({
					type: "UPDATE_ROSTER_PIECE",
					pieceUid: e.uid,
					updates: { metadata: {
						...e.metadata,
						mirrorCd: 3
					} }
				});
			},
			onTurnStart: ({ piece: e, emit: t }) => {
				e.metadata?.mirrorCd > 0 && t({
					type: "UPDATE_ROSTER_PIECE",
					pieceUid: e.uid,
					updates: { metadata: {
						...e.metadata,
						mirrorCd: e.metadata.mirrorCd - 1
					} }
				});
			}
		}
	},
	{
		id: "GENERIC_PARASITE",
		name: "寄生脚本",
		tier: "EPIC",
		category: B,
		description: "当该棋子被吃掉时，附身在攻击者身上，使攻击者变为“被寄生”状态（极易掉线）。",
		hooks: { onDeath: ({ attacker: e, emit: t }) => {
			e && e.type !== d.KING && t({
				type: "ADD_STATUS",
				targetId: e.id,
				statusId: _.PARASITIZED,
				duration: 99
			});
		} }
	},
	{
		id: "GENERIC_HIVE_KERNEL",
		name: "同频协议",
		tier: "LEGENDARY",
		category: B,
		description: "只要该棋子联网，全场所有与其同类型的棋子即使断网也能行动。"
	},
	{
		id: "GENERIC_FIREWALL",
		name: "终极防火墙",
		tier: "LEGENDARY",
		category: B,
		description: "被动：限制最大移动距离为 3 格。免疫远程吃子、强行位移、改变颜色或沉默。国王不可装备。",
		modifiers: {
			isSteady: () => !0,
			movement: (e, t) => t.filter((t) => Math.max(Math.abs(t.r - e.r), Math.abs(t.c - e.c)) <= 3),
			invulnerable: ({ board: e, r: t, c: n }, i) => {
				const a = V.findPieces(e, (e) => e.id === i.id)[0], r = a ? a.r : i._lastPos?.r ?? -1, s = a ? a.c : i._lastPos?.c ?? -1;
				return -1 !== r && -1 !== s && Math.max(Math.abs(r - t), Math.abs(s - n)) > 1;
			}
		},
		hooks: { onTurnStart: ({ piece: e, r: t, c: n, emit: i }) => {
			const a = [
				_.SILENCED,
				_.BETRAYED,
				_.SKILL_LOCKED
			];
			(e.statuses || []).forEach((e) => {
				a.includes(e.id) && i({
					type: "REMOVE_STATUS",
					pos: {
						r: t,
						c: n
					},
					statusId: e.id
				});
			});
		} }
	},
	{
		id: "GENERIC_INTIMIDATION",
		name: "威慑",
		tier: "COMMON",
		category: B,
		description: "被动：敌方的“兵”无法吃掉该棋子。",
		modifiers: { invulnerable: ({ r: e, c: t }, n) => n.type === d.PAWN }
	},
	{
		id: "GENERIC_LOGIC_BOMB",
		name: "逻辑炸弹",
		tier: "RARE",
		category: B,
		description: "被动：当该棋子被吃掉时，清除击杀者身上的所有正面状态（护盾、过载），并使其永久“沉默”。",
		hooks: { onDeath: ({ attacker: e, attackerPos: t, emit: n }) => {
			if (e && t) {
				const i = [_.SHIELDED, _.OVERLOADED];
				(e.statuses || []).forEach((e) => {
					i.includes(e.id) && n({
						type: "REMOVE_STATUS",
						pos: t,
						statusId: e.id
					});
				}), n({
					type: "ADD_STATUS",
					pos: t,
					statusId: _.SILENCED,
					duration: 99
				}), n({
					type: "SHOW_TEXT",
					text: "Logic Bomb: Sealed!",
					textKey: "LOG_LOGIC_BOMB",
					style: "danger",
					pos: t
				});
			}
		} }
	},
	{
		id: "GENERIC_DATA_MINING",
		name: "数据挖掘",
		tier: "RARE",
		category: B,
		description: "被动：吃掉带有技能的敌方棋子时，额外获得 10 金币。",
		hooks: { onKill: ({ victim: e, piece: t, emit: n }) => {
			e && t.color === c && e.skills && e.skills.length > 0 && (n({
				type: "MODIFY_GOLD",
				amount: 10,
				reason: "DATA_MINING"
			}), n({
				type: "SHOW_TEXT",
				text: "Data Mining +10",
				textKey: "LOG_DATA_MINING",
				textParams: { amount: 10 },
				style: "gold"
			}));
		} }
	},
	{
		id: "GENERIC_RECURSIVE_STRIKE",
		name: "递归打击",
		tier: "EPIC",
		category: B,
		description: "被动：吃掉敌方棋子后，下回合该棋子的移动范围会叠加“被击杀者”的原始移动逻辑。",
		hooks: {
			onKill: ({ piece: e, victim: t, emit: n }) => {
				t && n({
					type: "UPDATE_ROSTER_PIECE",
					pieceUid: e.uid,
					pieceId: e.id,
					updates: { metadata: {
						...e.metadata,
						recursiveType: t.type,
						recursiveTimer: 2
					} }
				});
			},
			onTurnStart: ({ piece: e, emit: t }) => {
				if (e.metadata?.recursiveTimer > 0) {
					const n = e.metadata.recursiveTimer - 1;
					t({
						type: "UPDATE_ROSTER_PIECE",
						pieceUid: e.uid,
						pieceId: e.id,
						updates: { metadata: {
							...e.metadata,
							recursiveTimer: n,
							recursiveType: 0 === n ? null : e.metadata.recursiveType
						} }
					});
				}
			}
		},
		modifiers: { movement: (e, t) => {
			const { board: n, piece: i, r: a, c: r, isControlSquares: s } = e, o = i.metadata?.recursiveType;
			if (!o) return t;
			const l = [], E = i.color, u = (e, t, i) => {
				let o = a + e, c = r + t;
				for (; o >= 0 && o < 8 && c >= 0 && c < 8;) {
					const a = n[o][c];
					if (a && a.color === E && !s || l.push({
						r: o,
						c
					}), a || !i) break;
					o += e, c += t;
				}
			};
			if (o === d.PAWN) {
				const e = E === c ? -1 : 1;
				a + e >= 0 && a + e < 8 && (n[a + e][r] || l.push({
					r: a + e,
					c: r
				}), r > 0 && (n[a + e][r - 1] && n[a + e][r - 1].color !== E || s) && l.push({
					r: a + e,
					c: r - 1
				}), r < 7 && (n[a + e][r + 1] && n[a + e][r + 1].color !== E || s) && l.push({
					r: a + e,
					c: r + 1
				}));
			} else o === d.KNIGHT ? D.N.forEach(([e, t]) => u(e, t, !1)) : o === d.BISHOP ? D.B.forEach(([e, t]) => u(e, t, !0)) : o === d.ROOK ? D.R.forEach(([e, t]) => u(e, t, !0)) : o !== d.QUEEN && o !== d.KING || D.Q.forEach(([e, t]) => u(e, t, o === d.QUEEN));
			return [...t, ...l];
		} }
	},
	{
		id: "GENERIC_SCRAP_RECYCLE",
		name: "废料回收",
		tier: "COMMON",
		category: B,
		description: "被动：每当该棋子移动而不吃子时获得 1 金币（每关上限 10 金币）。",
		hooks: { onAfterMove: ({ piece: e, victim: t, r: n, c: i, emit: a }) => {
			if (e.color === c && !t) {
				const t = e.metadata?.scrapGold || 0;
				t < 10 && (a({
					type: "MODIFY_GOLD",
					amount: 1,
					reason: "SCRAP_RECYCLE"
				}), a({
					type: "SPAWN",
					pos: {
						r: n,
						c: i
					},
					piece: {
						...e,
						metadata: {
							...e.metadata,
							scrapGold: t + 1
						}
					}
				}));
			}
		} }
	}
], ge = [
	{
		id: "KING_CHARISMA",
		name: "宽宏",
		tier: "COMMON",
		category: B,
		pieceType: d.KING,
		description: "周围 2 格内 of 兵移动 logic 变为同后（滑行），移动范围两格。",
		range: {
			type: "chebyshev",
			radius: 2
		},
		hooks: { onTurnStart: ({ board: e, r: t, c: n, piece: i, emit: a }) => {
			for (let r = -2; r <= 2; r++) for (let s = -2; s <= 2; s++) {
				const o = t + r, c = n + s;
				if (V.isValidPos(o, c)) {
					const t = e[o][c];
					t && t.color === i.color && t.type === d.PAWN && a({
						type: "ADD_STATUS",
						pos: {
							r: o,
							c
						},
						statusId: _.CHARISMA_BUFF,
						duration: 2
					});
				}
			}
		} }
	},
	{
		id: "KING_RADIATION",
		name: "辐射",
		tier: "COMMON",
		category: B,
		pieceType: d.KING,
		description: "王 of 初始信号强度极高，第一层连接 of 有效距离从 1 格提升至 2 格。",
		range: {
			type: "chebyshev",
			radius: 2
		},
		modifiers: { networkRange: ({ r: e, c: t }) => {
			const n = [];
			for (let i = -2; i <= 2; i++) for (let a = -2; a <= 2; a++) {
				const r = e + i, s = t + a;
				V.isValidPos(r, s) && n.push({
					r,
					c: s
				});
			}
			return n;
		} }
	},
	{
		id: "KING_STEADY",
		name: "稳重",
		tier: "COMMON",
		category: B,
		pieceType: d.KING,
		description: "王免疫任何来自敌方技能 of “强制位移”效果。",
		modifiers: { isSteady: () => !0 }
	},
	{
		id: "KING_REWARD",
		name: "恩赏",
		tier: "COMMON",
		category: B,
		pieceType: d.KING,
		description: "任何友军在王周围 2 格内吃子时，额外获得 5 金币。",
		range: {
			type: "chebyshev",
			radius: 2
		},
		hooks: { onTurnStart: ({ board: e, r: t, c: n, piece: i, emit: a }) => {
			for (let r = -2; r <= 2; r++) for (let s = -2; s <= 2; s++) {
				const o = t + r, c = n + s;
				if (V.isValidPos(o, c)) {
					const t = e[o][c];
					t && t.color === i.color && a({
						type: "ADD_STATUS",
						pos: {
							r: o,
							c
						},
						statusId: _.AURA_REWARD,
						duration: 2
					});
				}
			}
		} }
	},
	{
		id: "KING_FORTIFY",
		name: "固守",
		tier: "COMMON",
		category: B,
		pieceType: d.KING,
		description: "只要王相邻有友方“车”，王无法被敌方 of “兵”或“马”吃掉。",
		modifiers: { invulnerable: ({ board: e, r: t, c: n, piece: i }, a) => {
			let r = !1;
			for (const [s, o] of [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1],
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			]) {
				const a = t + s, c = n + o;
				if (a >= 0 && a < 8 && c >= 0 && c < 8) {
					const t = e[a][c];
					if (t && t.color === i.color && t.type === d.ROOK) {
						r = !0;
						break;
					}
				}
			}
			return r && (a.type === d.PAWN || a.type === d.KNIGHT);
		} }
	},
	{
		id: "KING_BACKUP",
		name: "应急供电",
		tier: "COMMON",
		category: B,
		pieceType: d.KING,
		description: "王周围 1 格没有友方单位时，连通 3 格内最近的友方棋子（可多个）。",
		modifiers: { networkRange: ({ board: e, r: t, c: n, piece: i }) => {
			const a = [];
			let r = !1;
			for (let c = -1; c <= 1; c++) for (let a = -1; a <= 1; a++) {
				if (0 === c && 0 === a) continue;
				const s = t + c, o = n + a;
				if (s >= 0 && s < 8 && o >= 0 && o < 8) {
					const t = e[s][o];
					t && t.color === i.color && (r = !0);
				}
			}
			if (r) return [];
			const s = [];
			let o = 999;
			for (let c = -3; c <= 3; c++) for (let a = -3; a <= 3; a++) {
				if (0 === c && 0 === a) continue;
				const r = t + c, l = n + a;
				if (r >= 0 && r < 8 && l >= 0 && l < 8) {
					const t = e[r][l];
					if (t && t.color === i.color) {
						const e = c * c + a * a;
						s.push({
							pos: {
								r,
								c: l
							},
							distSq: e
						}), e < o && (o = e);
					}
				}
			}
			return s.forEach((e) => {
				e.distSq === o && a.push(e.pos);
			}), a;
		} }
	},
	{
		id: "KING_OVERSEER",
		name: "督战",
		tier: "RARE",
		category: B,
		pieceType: d.KING,
		description: "己方联网棋子（不含王）达到 5 个时，每回合额外获得 2 金币。单局限 40 金币。",
		hooks: { onTurnStart: ({ board: e, r: t, c: n, piece: i, emit: a, metadata: r }) => {
			const s = i.metadata?.overseerEarned || 0;
			if (s < 40 && i.color === c) {
				const { networked: o } = de(e, i.color, r);
				let c = 0;
				for (let a = 0; a < 8; a++) for (let r = 0; r < 8; r++) {
					if (a === t && r === n) continue;
					const s = e[a][r];
					s && s.color === i.color && o[a][r] && c++;
				}
				c >= 5 && (a({
					type: "SPAWN",
					pos: {
						r: t,
						c: n
					},
					piece: {
						...i,
						metadata: {
							...i.metadata,
							overseerEarned: s + 2
						}
					}
				}), a({
					type: "MODIFY_GOLD",
					amount: 2,
					reason: "OVERSEER"
				}));
			}
		} }
	},
	{
		id: "KING_ROYAL_GUARD",
		name: "护卫征召",
		tier: "RARE",
		category: B,
		pieceType: d.KING,
		description: "主动：消耗 10 金币，在王身边的空格处随机生成一个 1 级“兵”（过关不保留）。",
		range: {
			type: "chebyshev",
			radius: 1
		},
		activeSpec: {
			targeting: "self",
			execute: (e, t, n, i, a, r, s, o) => {
				const c = s?.gold || 0, l = [];
				for (const [d, u] of [
					[-1, 0],
					[1, 0],
					[0, -1],
					[0, 1],
					[-1, -1],
					[-1, 1],
					[1, -1],
					[1, 1]
				]) {
					const i = t + d, a = n + u;
					V.isValidPos(i, a) && !e[i][a] && l.push({
						r: i,
						c: a
					});
				}
				if (0 === l.length) return void r({
					type: "SHOW_TEXT",
					text: "No space around",
					textKey: "LOG_NO_SPACE",
					style: "system",
					pos: {
						r: t,
						c: n
					}
				});
				if (c < 10) return void r({
					type: "SHOW_TEXT",
					text: "Insufficient gold",
					textKey: "LOG_NO_FUNDS",
					style: "system",
					pos: {
						r: t,
						c: n
					}
				});
				const E = l[Math.floor((o || { next: Math.random }).next() * l.length)];
				r({
					type: "MODIFY_GOLD",
					amount: -10,
					reason: "ROYAL_GUARD"
				}), r({
					type: "SPAWN",
					pos: E,
					piece: {
						id: Ie(),
						type: d.PAWN,
						color: i.color,
						level: 1,
						skills: [],
						statuses: [],
						maxSlots: 1,
						equippedItems: []
					}
				}), r({
					type: "SHOW_TEXT",
					text: "Guard spawned",
					textKey: "LOG_GUARD_SPAWN",
					style: "gold",
					pos: E
				});
			}
		}
	},
	{
		id: "KING_TAXATION",
		name: "纳税",
		tier: "RARE",
		category: B,
		pieceType: d.KING,
		description: "每当有一个友方单位被吃掉，王会立即产生 15 金币作为“抚恤金”。",
		tags: ["GLOBAL"],
		hooks: { onDeath: ({ piece: e, subject: t, emit: n, r: i, c: a }) => {
			t && t.color === e.color && t.uid !== e.uid && (n({
				type: "MODIFY_GOLD",
				amount: 15,
				reason: "TAXATION",
				pos: {
					r: i,
					c: a
				}
			}), n({
				type: "SHOW_TEXT",
				text: "Compensation +15",
				textKey: "LOG_TAXATION_REWARD",
				style: "gold",
				pos: {
					r: i,
					c: a
				}
			}));
		} }
	},
	{
		id: "KING_SWAP",
		name: "换位",
		tier: "EPIC",
		category: B,
		pieceType: d.KING,
		description: "主动：与周围 2 格内的任何一个友军交换位置。",
		range: {
			type: "chebyshev",
			radius: 2
		},
		activeSpec: {
			targeting: "target",
			getAlternatives: (e, t, n, i) => {
				const a = [];
				for (let r = -2; r <= 2; r++) for (let s = -2; s <= 2; s++) {
					const o = t + r, c = n + s;
					if (V.isValidPos(o, c)) {
						const t = e[o][c];
						t && t.color === i.color && t.type !== d.KING && a.push({
							pos: {
								r: o,
								c
							},
							value: {
								r: o,
								c
							}
						});
					}
				}
				return a;
			},
			getAoE: (e, t, n, i, a) => a ? [{
				r: a.r,
				c: a.c
			}] : [],
			execute: (e, t, n, i, a, r) => {
				a && (r({
					type: "SWAP_PIECES",
					posA: {
						r: t,
						c: n
					},
					posB: a,
					actorColor: i.color
				}), r({
					type: "SHOW_TEXT",
					text: "Swap",
					textKey: "LOG_SWAP",
					style: "system",
					pos: a
				}));
			}
		}
	},
	{
		id: "KING_REFLECTION",
		name: "镜像之盾",
		tier: "EPIC",
		category: B,
		pieceType: d.KING,
		description: "任何在王周围 1 格内吃掉友军 of 敌方棋子，会立即被震死（同归于尽）。",
		range: {
			type: "chebyshev",
			radius: 1
		},
		hooks: { onTurnStart: ({ board: e, r: t, c: n, piece: i, emit: a }) => {
			for (let r = -1; r <= 1; r++) for (let s = -1; s <= 1; s++) {
				const o = t + r, c = n + s;
				if (V.isValidPos(o, c)) {
					const t = e[o][c];
					t && t.color === i.color && a({
						type: "ADD_STATUS",
						pos: {
							r: o,
							c
						},
						statusId: _.REFLECTION_AURA,
						duration: 2
					});
				}
			}
		} }
	},
	{
		id: "KING_COMMANDER",
		name: "御前统领",
		tier: "EPIC",
		category: B,
		pieceType: d.KING,
		description: "王周围 2 格内的己方“马”，跳跃落点后会冻结落点周围 1 名距离最近的敌军 1 回合。",
		range: {
			type: "chebyshev",
			radius: 2
		},
		hooks: { onTurnStart: ({ board: e, r: t, c: n, piece: i, emit: a }) => {
			for (let r = -2; r <= 2; r++) for (let s = -2; s <= 2; s++) {
				const o = t + r, c = n + s;
				if (!V.isValidPos(o, c)) continue;
				const l = e[o][c];
				l && l.color === i.color && l.type === d.KNIGHT && a({
					type: "ADD_STATUS",
					pos: {
						r: o,
						c
					},
					statusId: _.COMMANDER_AURA,
					duration: 2
				});
			}
		} }
	},
	{
		id: "KING_GRAND_CASTLE",
		name: "王车易位",
		tier: "EPIC",
		category: B,
		pieceType: d.KING,
		description: "主动：无视距离，直接与场上任意位置的一个友方“车”交换位置。",
		range: {
			type: "chebyshev",
			radius: 7
		},
		activeSpec: {
			targeting: "target",
			getAlternatives: (e, t, n, i) => V.findPieces(e, (e) => e.color === i.color && e.type === d.ROOK).map(({ r: e, c: t }) => ({
				pos: {
					r: e,
					c: t
				},
				value: {
					r: e,
					c: t
				}
			})),
			getAoE: (e, t, n, i, a) => a ? [{
				r: a.r,
				c: a.c
			}] : [],
			execute: (e, t, n, i, a, r) => {
				a && (r({
					type: "SWAP_PIECES",
					posA: {
						r: t,
						c: n
					},
					posB: a,
					actorColor: i.color
				}), r({
					type: "SHOW_TEXT",
					text: "Castling",
					textKey: "LOG_CASTLING",
					style: "system",
					pos: a
				}));
			}
		}
	},
	{
		id: "KING_SOUL_LINK",
		name: "附身斗篷",
		tier: "LEGENDARY",
		category: B,
		pieceType: d.KING,
		description: "王被吃掉时，如果场上有 1 级的兵，该兵变身为新的“王”，使游戏继续。",
		hooks: { onDeath: ({ board: e, piece: t, emit: n, cancelAction: i, r: a, c: r }) => {
			const s = V.findPieces(e, (e) => e.color === t.color && e.type === d.PAWN && 1 === e.level)[0];
			s && (i?.(), n({
				type: "REMOVE_PIECE",
				pos: {
					r: a,
					c: r
				}
			}), n({
				type: "UPDATE_ROSTER_PIECE",
				pieceUid: s.piece.uid,
				updates: {
					type: d.KING,
					maxSlots: 3
				}
			}), n({
				type: "SPAWN",
				pos: {
					r: s.r,
					c: s.c
				},
				piece: {
					...s.piece,
					type: d.KING,
					maxSlots: 3
				}
			}), n({
				type: "SHOW_TEXT",
				text: "Soul link: Succession of the Throne!",
				textKey: "LOG_SOUL_LINK",
				style: "system"
			}));
		} }
	},
	{
		id: "KING_HOLY_DOMAIN",
		name: "绝对圣域",
		tier: "LEGENDARY",
		category: B,
		pieceType: d.KING,
		description: "王周围 2 格内，所有友方棋子免疫一切负面状态（冻结、石化、沉默等）。",
		range: {
			type: "chebyshev",
			radius: 2
		},
		hooks: { onTurnStart: ({ board: e, r: t, c: n, piece: i, emit: a, isAISimulation: r }) => {
			for (let s = -2; s <= 2; s++) for (let o = -2; o <= 2; o++) {
				const c = t + s, l = n + o;
				if (V.isValidPos(c, l)) {
					const t = e[c][l];
					t && t.color === i.color && ([
						_.FROZEN,
						_.PETRIFIED,
						_.SKILL_LOCKED,
						_.SILENCED,
						_.INFECTED,
						_.BETRAYED,
						_.GRAVITY_LOCKED,
						_.AURA_SUPPRESSED
					].forEach((e) => {
						t.statuses?.some((t) => t.id === e) && (a({
							type: "REMOVE_STATUS",
							pos: {
								r: c,
								c: l
							},
							statusId: e
						}), r || Y.emit(q, {
							key: "status_cleansed",
							value: 1,
							isLifetimeOnly: !0
						}));
					}), a({
						type: "ADD_STATUS",
						pos: {
							r: c,
							c: l
						},
						statusId: _.HOLY_DOMAIN_AURA,
						duration: 2
					}));
				}
			}
		} }
	},
	{
		id: "KING_STASIS",
		name: "时空锁定",
		tier: "LEGENDARY",
		category: B,
		pieceType: d.KING,
		description: "主动：使王周围 3 格内的所有单位（不论敌我，除自己外）进入“石化”状态（每局限一次）。",
		range: {
			type: "chebyshev",
			radius: 3
		},
		activeSpec: {
			targeting: "self",
			usesKey: "stasisUses",
			maxUses: 1,
			execute: (e, t, n, i, a, r) => {
				if ((i.metadata?.stasisUses || 0) >= 1) r({
					type: "SHOW_TEXT",
					text: "Already used",
					textKey: "LOG_ALREADY_USED",
					style: "system",
					pos: {
						r: t,
						c: n
					}
				});
				else {
					r({
						type: "UPDATE_ROSTER_PIECE",
						pieceUid: i.uid,
						updates: { metadata: {
							...i.metadata,
							stasisUses: (i.metadata?.stasisUses || 0) + 1
						} }
					});
					for (let i = -3; i <= 3; i++) for (let a = -3; a <= 3; a++) {
						if (0 === i && 0 === a) continue;
						const s = t + i, o = n + a;
						if (V.isValidPos(s, o)) {
							const t = e[s][o];
							t && t.type !== d.KING && r({
								type: "ADD_STATUS",
								pos: {
									r: s,
									c: o
								},
								statusId: _.PETRIFIED,
								duration: 99
							});
						}
					}
					r({
						type: "SHOW_TEXT",
						text: "Time stasis locked!",
						textKey: "LOG_STASIS_LOCK",
						style: "system",
						pos: {
							r: t,
							c: n
						}
					});
				}
			}
		}
	},
	{
		id: "KING_ROYAL_PATH",
		name: "御道",
		tier: "COMMON",
		category: B,
		pieceType: d.KING,
		description: "如果王所在的行和列没有任何敌方棋子，王的移动范围提升至 2 格（不可吃子）。",
		modifiers: { movement: (e, t) => {
			const { board: n, piece: i, r: a, c: r, isControlSquares: s } = e;
			let o = !1;
			for (let c = 0; c < 8; c++) {
				const e = n[a][c], t = n[c][r];
				if (e && e.color !== i.color && (o = !0), t && t.color !== i.color && (o = !0), o) break;
			}
			return o || [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1],
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			].forEach(([e, o]) => {
				const c = a + 2 * e, l = r + 2 * o, d = a + e, E = r + o;
				if (V.isValidPos(c, l) && !n[d][E]) {
					const e = n[c][l];
					(!e || s && e.color === i.color) && t.push({
						r: c,
						c: l
					});
				}
			}), t;
		} }
	},
	{
		id: "KING_LOGISTICS",
		name: "统筹",
		tier: "COMMON",
		category: B,
		pieceType: d.KING,
		description: "部署任何棋子到王相邻的格子时，立即返还 3 金币。",
		tags: ["GLOBAL"],
		hooks: { onDeploy: ({ r: e, c: t, piece: n, ownerPos: i, subject: a, emit: r }) => {
			i && a && n.type === d.KING && n.color === c && n.skills.includes("KING_LOGISTICS") && 1 === Math.max(Math.abs(e - i.r), Math.abs(t - i.c)) && a.color === c && (r({
				type: "MODIFY_GOLD",
				amount: 3,
				reason: "LOGISTICS"
			}), r({
				type: "SHOW_TEXT",
				text: "Logistics +3",
				textKey: "LOG_LOGISTICS_REWARD",
				style: "gold",
				pos: {
					r: e,
					c: t
				}
			}));
		} }
	},
	{
		id: "KING_DECOY_DOUBLE",
		name: "影武者",
		tier: "EPIC",
		category: B,
		pieceType: d.KING,
		description: "移动后，在起始位置留下一个提供信号的“影终端”，持续 1 回合（无法移动或战斗）。",
		hooks: { onAfterMove: ({ from: e, piece: t, emit: n }) => {
			e && (n({
				type: "SPAWN",
				pos: e,
				piece: {
					id: `decoy-${Ie()}`,
					uid: `decoy-uid-${Ie()}`,
					type: d.PAWN,
					color: t.color,
					level: 1,
					skills: ["PAWN_SIGNAL_TOWER"],
					statuses: [{
						id: _.ENCRYPTED,
						duration: 99
					}, {
						id: "DECOY_TERMINAL_EXPIRE",
						duration: 99
					}],
					maxSlots: 0,
					equippedItems: [],
					metadata: {
						isDecoyTerminal: !0,
						decoyAge: 0
					}
				}
			}), n({
				type: "SHOW_TEXT",
				text: "Decoy Terminal",
				textKey: "LOG_DECOY_TERMINAL",
				style: "system",
				pos: e
			}));
		} }
	},
	{
		id: "KING_MARTYRDOM",
		name: "牺牲",
		tier: "LEGENDARY",
		category: B,
		pieceType: d.KING,
		description: "王被吃掉时，若库存已空且场上有其他友军，则牺牲所有友军并自爆，清空周围 5x5 的敌军并重生（限一次）。",
		hooks: { onDeath: ({ board: e, piece: t, r: n, c: i, cancelAction: a, emit: r, reserves: s }) => {
			if (t.metadata?.martyrdomUsed) return;
			const o = s ? s[t.color] : {}, c = Object.values(o).every((e) => (e || 0) <= 0), l = V.findPieces(e, (e) => e.color === t.color && e.type !== d.KING);
			if (c && l.length > 0) {
				a?.(), l.forEach(({ r: e, c: t, piece: n }) => {
					n.uid && r({
						type: "REMOVE_FROM_ROSTER",
						pieceUid: n.uid
					}), r({
						type: "REMOVE_PIECE",
						pos: {
							r: e,
							c: t
						}
					});
				});
				for (let a = -2; a <= 2; a++) for (let s = -2; s <= 2; s++) {
					const o = n + a, c = i + s;
					if (V.isValidPos(o, c)) {
						const n = e[o][c];
						n && n.color !== t.color && n.type !== d.KING && r({
							type: "KILL",
							pos: {
								r: o,
								c
							}
						});
					}
				}
				r({
					type: "SPAWN",
					pos: {
						r: n,
						c: i
					},
					piece: {
						...t,
						statuses: [],
						metadata: {
							...t.metadata,
							martyrdomUsed: !0
						}
					}
				}), r({
					type: "SHOW_TEXT",
					text: "Final Sacrifice: Rebirth!",
					textKey: "LOG_MARTYRDOM",
					style: "danger"
				});
			}
		} }
	}
], Le = [
	{
		id: "EQ_ARROGANT_CREED",
		name: "狂妄信条",
		tier: "LEGENDARY",
		category: F,
		pieceType: d.KING,
		description: "游戏开始时，国王拥有等同于后+马的移动范围。一旦你部署了任何其他棋子，该效果永久失效。",
		tags: ["GLOBAL"],
		modifiers: { movement: ({ board: e, piece: t, r: n, c: i }, a) => (t.type !== d.KING || t.statuses?.some((e) => e.id === _.EQ_ARROGANT_CREED_DISABLED) || ([...D.R, ...D.B].forEach(([r, s]) => {
			let o = n + r, c = i + s;
			for (; o >= 0 && o < 8 && c >= 0 && c < 8;) {
				const n = e[o][c];
				if (n) {
					n.color !== t.color && a.push({
						r: o,
						c
					});
					break;
				}
				a.push({
					r: o,
					c
				}), o += r, c += s;
			}
		}), D.N.forEach(([r, s]) => {
			const o = n + r, c = i + s;
			o >= 0 && o < 8 && c >= 0 && c < 8 && e[o][c]?.color !== t.color && a.push({
				r: o,
				c
			});
		})), a) },
		hooks: { onDeploy: ({ board: e, piece: t, emit: n }) => {
			t.color === c && (V.findPieces(e, (e) => e.color === c && e.type !== d.KING).length > 0 || t.type !== d.KING) && V.findPieces(e, (e) => e.color === c && e.type === d.KING && e.equippedItems?.some((e) => "EQ_ARROGANT_CREED" === e.effectId) && !e.statuses?.some((e) => e.id === _.EQ_ARROGANT_CREED_DISABLED)).forEach(({ r: e, c: t }) => n({
				type: "ADD_STATUS",
				pos: {
					r: e,
					c: t
				},
				statusId: _.EQ_ARROGANT_CREED_DISABLED,
				duration: 99
			}));
		} }
	},
	{
		id: "BATTERY",
		name: "应急电池",
		tier: "COMMON",
		category: H,
		description: "解除冻结",
		hooks: { onUse: ({ piece: e, r: t, c: n, emit: i, setNoSkip: a }) => {
			e && e.color === c ? i({
				type: "REMOVE_STATUS",
				pos: {
					r: t,
					c: n
				},
				statusId: _.FROZEN
			}) : (i({
				type: "SHOW_TEXT",
				text: "Invalid target (Ally only)",
				textKey: "LOG_INVALID_TARGET",
				style: "system",
				pos: {
					r: t,
					c: n
				}
			}), a?.());
		} }
	},
	{
		id: "MEDUSA",
		name: "美杜莎之眼",
		tier: "EPIC",
		category: H,
		description: "永久石化",
		hooks: { onUse: ({ piece: e, r: t, c: n, emit: i, setNoSkip: a }) => {
			e && e.type !== d.KING && e.type !== d.QUEEN && e.color === l ? i({
				type: "ADD_STATUS",
				pos: {
					r: t,
					c: n
				},
				statusId: _.PETRIFIED,
				duration: 99
			}) : (i({
				type: "SHOW_TEXT",
				text: "Invalid target (Enemy Non-Boss only)",
				textKey: "LOG_INVALID_TARGET",
				style: "system",
				pos: {
					r: t,
					c: n
				}
			}), a?.());
		} }
	},
	{
		id: "WITHDRAW",
		name: "战术撤回",
		tier: "RARE",
		category: H,
		description: "撤回库存",
		hooks: { onUse: ({ piece: e, r: t, c: n, emit: i, setNoSkip: a }) => {
			e && e.color === c && e.type !== d.KING ? (i({
				type: "MODIFY_RESERVE",
				color: c,
				pieceType: e.type,
				amount: 1
			}), e.uid && i({
				type: "UNDEPLOY_PIECE",
				uid: e.uid
			}), i({
				type: "REMOVE_PIECE",
				pos: {
					r: t,
					c: n
				}
			})) : (i({
				type: "SHOW_TEXT",
				text: "Invalid target",
				textKey: "LOG_INVALID_TARGET",
				style: "system",
				pos: {
					r: t,
					c: n
				}
			}), a?.());
		} }
	},
	{
		id: "JAMMING",
		name: "全频干扰",
		tier: "RARE",
		category: H,
		description: "永久瘫痪当前棋盘上所有非王棋子（不影响使用后新部署的棋子）",
		hooks: { onUse: ({ board: e, emit: t }) => {
			for (let n = 0; n < 8; n++) for (let i = 0; i < 8; i++) {
				const a = e[n][i];
				a && a.type !== d.KING && t({
					type: "ADD_STATUS",
					pos: {
						r: n,
						c: i
					},
					statusId: _.FROZEN,
					duration: 99
				});
			}
		} }
	},
	{
		id: "SCARY_LETTER",
		name: "恐吓信",
		tier: "COMMON",
		category: H,
		description: "向远离我方国王方向逼退敌方棋子一格（有空位的情况下有效）。",
		hooks: { onUse: ({ piece: e, board: t, r: n, c: i, emit: a, setNoSkip: r }) => {
			if (e && e.color === l) {
				if (Bn.isSteady(e, t, n, i)) return a({
					type: "SHOW_TEXT",
					text: "Immune",
					textKey: "LOG_IMMUNE",
					style: "system",
					pos: {
						r: n,
						c: i
					}
				}), void r?.();
				const s = V.findPieces(t, (e) => e.type === d.KING && e.color === c)[0], o = s ? {
					r: s.r,
					c: s.c
				} : {
					r: 7,
					c: 4
				}, l = n - o.r, E = i - o.c, u = n + (l > 0 ? 1 : l < 0 ? -1 : 0), m = i + (E > 0 ? 1 : E < 0 ? -1 : 0);
				if (u >= 0 && u < 8 && m >= 0 && m < 8 && !t[u][m]) a({
					type: "MOVE",
					from: {
						r: n,
						c: i
					},
					to: {
						r: u,
						c: m
					}
				});
				else {
					const e = n + (o.r < n ? 1 : -1), s = i;
					e >= 0 && e < 8 && !t[e][s] ? a({
						type: "MOVE",
						from: {
							r: n,
							c: i
						},
						to: {
							r: e,
							c: s
						}
					}) : (a({
						type: "SHOW_TEXT",
						text: "Blocked",
						textKey: "LOG_BLOCKED",
						style: "system",
						pos: {
							r: n,
							c: i
						}
					}), r?.());
				}
			} else a({
				type: "SHOW_TEXT",
				text: "Invalid target",
				textKey: "LOG_INVALID_TARGET",
				style: "system",
				pos: {
					r: n,
					c: i
				}
			}), r?.();
		} }
	},
	{
		id: "OVERCLOCK",
		name: "超频驱动",
		tier: "EPIC",
		category: H,
		isFreeAction: !0,
		description: "再动一次",
		hooks: { onUse: ({ emit: e }) => e({
			type: "SET_EXTRA_MOVE",
			active: !0
		}) }
	},
	{
		id: "SPARE_PARTS",
		name: "备用零件",
		tier: "COMMON",
		category: H,
		description: "王身边刷兵",
		hooks: { onUse: ({ board: e, emit: t, prng: n, setNoSkip: i }) => {
			const a = V.findPieces(e, (e) => e.type === d.KING && e.color === c)[0];
			if (!a || !n) return void i?.();
			const r = a.r, s = a.c, o = [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1],
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			].sort(() => n.next() - .5);
			let l = !1;
			for (const [E, u] of o) {
				const n = r + E, i = s + u;
				if (n >= 0 && n < 8 && i >= 0 && i < 8 && !e[n][i]) {
					t({
						type: "SPAWN",
						pos: {
							r: n,
							c: i
						},
						piece: {
							id: Ie(),
							type: d.PAWN,
							color: c,
							level: 1,
							skills: [],
							statuses: [],
							maxSlots: 1,
							equippedItems: []
						}
					}), l = !0;
					break;
				}
			}
			l || (t({
				type: "SHOW_TEXT",
				text: "No space near King",
				textKey: "LOG_NO_SPACE",
				style: "danger"
			}), i?.());
		} }
	},
	{
		id: "COMPASS",
		name: "位移罗盘",
		tier: "COMMON",
		category: H,
		isFreeAction: !0,
		description: "随机漂移",
		hooks: { onUse: ({ piece: e, board: t, r: n, c: i, setNoSkip: a, emit: r, prng: s }) => {
			if (e && s) {
				const e = [
					[-1, 0],
					[1, 0],
					[0, -1],
					[0, 1]
				].sort(() => s.next() - .5);
				let o = !1;
				for (const [a, s] of e) {
					const e = n + a, c = i + s;
					if (e >= 0 && e < 8 && c >= 0 && c < 8 && !t[e][c]) {
						r({
							type: "MOVE",
							from: {
								r: n,
								c: i
							},
							to: {
								r: e,
								c
							}
						}), o = !0;
						break;
					}
				}
				o || (r({
					type: "SHOW_TEXT",
					text: "Blocked",
					textKey: "LOG_BLOCKED",
					style: "danger",
					pos: {
						r: n,
						c: i
					}
				}), a?.());
			} else r({
				type: "SHOW_TEXT",
				text: "Invalid target",
				textKey: "LOG_INVALID_TARGET",
				style: "danger",
				pos: {
					r: n,
					c: i
				}
			}), a?.();
		} }
	},
	{
		id: "FREEZE_RAY",
		name: "冰冻射线",
		tier: "RARE",
		category: H,
		description: "冻结敌军",
		hooks: { onUse: ({ piece: e, r: t, c: n, emit: i, setNoSkip: a }) => {
			e && e.type !== d.KING && e.color === l ? i({
				type: "ADD_STATUS",
				pos: {
					r: t,
					c: n
				},
				statusId: _.FROZEN,
				duration: 2
			}) : (i({
				type: "SHOW_TEXT",
				text: "Invalid target (Enemy Non-King only)",
				textKey: "LOG_INVALID_TARGET",
				style: "system",
				pos: {
					r: t,
					c: n
				}
			}), a?.());
		} }
	},
	{
		id: "PURIFIER",
		name: "信号净化器",
		tier: "COMMON",
		category: H,
		description: "清负面状态",
		hooks: { onUse: ({ piece: e, r: t, c: n, emit: i, setNoSkip: a }) => {
			if (e && e.color === c) {
				const a = [
					_.INFECTED,
					_.SILENCED,
					_.SKILL_LOCKED,
					_.ENCRYPTED
				];
				(e.statuses || []).forEach((e) => {
					a.includes(e.id) && i({
						type: "REMOVE_STATUS",
						pos: {
							r: t,
							c: n
						},
						statusId: e.id
					});
				});
			} else i({
				type: "SHOW_TEXT",
				text: "Invalid target (Ally only)",
				textKey: "LOG_INVALID_TARGET",
				style: "system",
				pos: {
					r: t,
					c: n
				}
			}), a?.();
		} }
	},
	{
		id: "DECOY",
		name: "诱饵弹",
		tier: "RARE",
		category: H,
		description: "高权重诱饵 (需放空地)",
		hooks: { onUse: ({ board: e, r: t, c: n, emit: i, setNoSkip: a }) => {
			e[t][n] ? (i({
				type: "SHOW_TEXT",
				text: "Square occupied",
				textKey: "LOG_SQUARE_OCCUPIED",
				style: "danger",
				pos: {
					r: t,
					c: n
				}
			}), a?.()) : i({
				type: "SPAWN",
				pos: {
					r: t,
					c: n
				},
				piece: {
					id: Ie(),
					type: d.PAWN,
					color: c,
					level: 1,
					skills: [],
					statuses: [],
					maxSlots: 0,
					equippedItems: [],
					metadata: { isDecoy: !0 }
				}
			});
		} }
	},
	{
		id: "DOOM_BROADCAST",
		name: "末日广播",
		tier: "EPIC",
		category: H,
		description: "摧毁全场断网单位",
		hooks: { onUse: ({ board: e, metadata: t, emit: n }) => {
			const i = de(e, c, t).networked, a = de(e, l, t).networked;
			V.findPieces(e, (e) => e.type !== d.KING).forEach(({ r: e, c: t, piece: r }) => {
				(r.color === c ? i[e][t] : a[e][t]) || n({
					type: "KILL",
					pos: {
						r: e,
						c: t
					}
				});
			});
		} }
	},
	{
		id: "PARDON",
		name: "赦免令",
		tier: "EPIC",
		category: H,
		isFreeAction: !0,
		description: "策反敌军",
		hooks: { onUse: ({ piece: e, r: t, c: n, emit: i, setNoSkip: a }) => {
			e && e.color === l && e.type !== d.KING ? (i({
				type: "REMOVE_PIECE",
				pos: {
					r: t,
					c: n
				}
			}), i({
				type: "SPAWN",
				pos: {
					r: t,
					c: n
				},
				piece: {
					...e,
					color: c,
					statuses: [...e.statuses || [], {
						id: _.BETRAYED,
						duration: 2,
						originalColor: l
					}]
				}
			}), i({
				type: "SHOW_TEXT",
				text: "Betrayed!",
				textKey: "LOG_BETRAYED",
				style: "gold",
				pos: {
					r: t,
					c: n
				}
			})) : (i({
				type: "SHOW_TEXT",
				text: "Invalid target",
				textKey: "LOG_INVALID_TARGET",
				style: "system",
				pos: {
					r: t,
					c: n
				}
			}), a?.());
		} }
	},
	{
		id: "TIME_GLASS",
		name: "时间沙漏",
		tier: "RARE",
		category: H,
		isFreeAction: !0,
		description: "加悔棋",
		hooks: { onUse: ({ setNoSkip: e, emit: t }) => {
			t({
				type: "UPDATE_CONSTRAINTS",
				maxUndosOffset: 1,
				maxSavesOffset: 0
			}), t({
				type: "SHOW_TEXT",
				text: "+1 Undo",
				textKey: "LOG_UNDOS_PLUS",
				textParams: { amount: 1 },
				style: "system"
			}), e?.();
		} }
	},
	{
		id: "SPACE_GLASS",
		name: "空间沙漏",
		tier: "RARE",
		category: H,
		isFreeAction: !0,
		description: "加存档",
		hooks: { onUse: ({ setNoSkip: e, emit: t }) => {
			t({
				type: "UPDATE_CONSTRAINTS",
				maxUndosOffset: 0,
				maxSavesOffset: 1
			}), t({
				type: "SHOW_TEXT",
				text: "+1 Save",
				textKey: "LOG_SAVES_PLUS",
				textParams: { amount: 1 },
				style: "system"
			}), e?.();
		} }
	},
	{
		id: "PRESS",
		name: "重压机",
		tier: "RARE",
		category: H,
		description: "永久扁平化",
		hooks: { onUse: ({ piece: e, r: t, c: n, emit: i, setNoSkip: a }) => {
			e && e.color === c ? i({
				type: "ADD_STATUS",
				pos: {
					r: t,
					c: n
				},
				statusId: _.FLATTENED,
				duration: 99
			}) : (i({
				type: "SHOW_TEXT",
				text: "Invalid target",
				textKey: "LOG_INVALID_TARGET",
				style: "system",
				pos: {
					r: t,
					c: n
				}
			}), a?.());
		} }
	},
	{
		id: "VOID_ANCHOR_ITEM",
		name: "虚空锚点",
		tier: "RARE",
		category: H,
		description: "封锁地块",
		hooks: { onUse: ({ board: e, r: t, c: n, emit: i, setNoSkip: a }) => {
			e[t][n] ? (i({
				type: "SHOW_TEXT",
				text: "Square occupied",
				textKey: "LOG_SQUARE_OCCUPIED",
				style: "danger",
				pos: {
					r: t,
					c: n
				}
			}), a?.()) : i({
				type: "SET_SQUARE",
				pos: {
					r: t,
					c: n
				},
				status: {
					id: A,
					duration: 5
				}
			});
		} }
	},
	{
		id: "GRAVITY_TRAP",
		name: "重力陷阱",
		tier: "RARE",
		category: H,
		description: "3x3重力锁定",
		range: {
			type: "chebyshev",
			radius: 1
		},
		hooks: { onUse: ({ board: e, r: t, c: n, emit: i }) => {
			for (let a = -1; a <= 1; a++) for (let r = -1; r <= 1; r++) {
				const s = t + a, o = n + r;
				s >= 0 && s < 8 && o >= 0 && o < 8 && e[s][o] && (i({
					type: "ADD_STATUS",
					pos: {
						r: s,
						c: o
					},
					statusId: _.GRAVITY_LOCKED,
					duration: 5
				}), i({
					type: "SHOW_TEXT",
					text: "Gravity Locked",
					textKey: "LOG_GRAVITY_LOCKED",
					style: "danger",
					pos: {
						r: s,
						c: o
					}
				}));
			}
		} }
	},
	{
		id: "SMOKE_BOMB",
		name: "烟雾弹",
		tier: "COMMON",
		category: H,
		description: "作用于2x2网格，使地块上的棋子免疫1格以外的攻击，持续2回合。",
		hooks: { onUse: ({ r: e, c: t, emit: n }) => {
			const i = 7 === e ? 6 : e, a = 7 === t ? 6 : t;
			for (let r = 0; r <= 1; r++) for (let e = 0; e <= 1; e++) n({
				type: "SET_SQUARE",
				pos: {
					r: i + r,
					c: a + e
				},
				status: {
					id: "SMOKE",
					duration: 5
				}
			});
		} }
	},
	{
		id: "CLOAK",
		name: "信号遮断器",
		tier: "RARE",
		category: H,
		description: "隐身 2 回合",
		hooks: { onUse: ({ piece: e, r: t, c: n, emit: i, setNoSkip: a }) => {
			e && e.color === c ? i({
				type: "ADD_STATUS",
				pos: {
					r: t,
					c: n
				},
				statusId: _.INVISIBLE,
				duration: 5
			}) : (i({
				type: "SHOW_TEXT",
				text: "Invalid target (Ally only)",
				textKey: "LOG_INVALID_TARGET",
				style: "system",
				pos: {
					r: t,
					c: n
				}
			}), a?.());
		} }
	},
	{
		id: "OVERLOAD",
		name: "能量过载",
		tier: "EPIC",
		category: H,
		isFreeAction: !0,
		description: "选定一枚棋子，使其本回合可立刻行动一次（无视网络连接，但不能吃子）。",
		hooks: { onUse: ({ piece: e, r: t, c: n, emit: i, setNoSkip: a }) => {
			e && e.color === c ? (i({
				type: "ADD_STATUS",
				pos: {
					r: t,
					c: n
				},
				statusId: _.CANNOT_CAPTURE,
				duration: 1
			}), i({
				type: "SET_EXTRA_MOVE",
				active: !0
			}), i({
				type: "UPDATE_METADATA",
				updates: { lockedActionUid: e.uid }
			}), i({
				type: "SET_UI_SELECTION",
				pos: {
					r: t,
					c: n
				},
				uid: e.uid ?? null
			}), i({
				type: "SHOW_TEXT",
				text: "Overloaded: No Captures",
				textKey: "LOG_OVERLOAD",
				style: "system",
				pos: {
					r: t,
					c: n
				}
			})) : (i({
				type: "SHOW_TEXT",
				text: "Invalid target",
				textKey: "LOG_INVALID_TARGET",
				style: "system",
				pos: {
					r: t,
					c: n
				}
			}), a?.());
		} }
	},
	{
		id: "PORTAL",
		name: "传送门",
		tier: "RARE",
		category: H,
		description: "建立传送点",
		hooks: { onUse: ({ board: e, r: t, c: n, emit: i, setNoSkip: a }) => {
			e[t][n] ? (i({
				type: "SHOW_TEXT",
				text: "Square occupied",
				textKey: "LOG_SQUARE_OCCUPIED",
				style: "danger",
				pos: {
					r: t,
					c: n
				}
			}), a?.()) : i({
				type: "SET_SQUARE",
				pos: {
					r: t,
					c: n
				},
				status: {
					id: p,
					duration: 5
				}
			});
		} }
	},
	{
		id: "DRAFT_ORDER",
		name: "强行征召",
		tier: "EPIC",
		category: H,
		description: "随机复活一枚高级棋子放入库存（仅本局有效）。",
		hooks: { onUse: ({ emit: e, prng: t }) => {
			if (!t) return;
			const n = [
				d.KNIGHT,
				d.BISHOP,
				d.ROOK
			], i = n[Math.floor(t.next() * n.length)];
			e({
				type: "ADD_TO_ROSTER",
				piece: {
					id: "revived-" + Ie(),
					uid: "u-" + Ie(),
					type: i,
					color: c,
					level: 1,
					skills: [],
					statuses: [],
					maxSlots: 1,
					equippedItems: []
				}
			}), e({
				type: "SHOW_TEXT",
				text: `New Unit: ${i}`,
				textKey: "LOG_DRAFT_ORDER",
				textParams: { type: i },
				style: "gold"
			});
		} }
	},
	{
		id: "MIDAS",
		name: "点金石",
		tier: "RARE",
		category: H,
		description: "将棋子（不论棋盘或库存）转化为 30 金币。",
		hooks: { onUse: (e) => {
			const t = e.piece || e.board[e.r]?.[e.c];
			t && t.type !== d.KING && t.uid ? (e.emit({
				type: "REMOVE_FROM_ROSTER",
				pieceUid: t.uid
			}), e.board[e.r]?.[e.c] && e.emit({
				type: "REMOVE_PIECE",
				pos: {
					r: e.r,
					c: e.c
				}
			}), e.emit({
				type: "MODIFY_GOLD",
				amount: 30,
				reason: "MIDAS_TOUCH"
			}), e.emit({
				type: "SHOW_TEXT",
				text: "Midas Touch +30",
				textKey: "LOG_MIDAS",
				style: "gold",
				pos: {
					r: e.r,
					c: e.c
				}
			})) : (e.emit({
				type: "SHOW_TEXT",
				text: "Invalid target (Non-King only)",
				textKey: "LOG_INVALID_TARGET",
				style: "danger",
				pos: {
					r: e.r,
					c: e.c
				}
			}), e.setNoSkip?.());
		} }
	},
	{
		id: "ROYAL_SACRIFICE",
		name: "皇家献祭",
		tier: "EPIC",
		category: H,
		description: "献祭一名友军，使其力量永久叠加至该棋子（等级+1，槽位+1）。",
		hooks: { onUse: (e) => {
			const t = e.piece;
			if (t && t.type !== d.KING && t.color === c) {
				const n = V.findPieces(e.board, (e) => e.color === c && e.type !== d.KING && e.uid !== t.uid).sort((t, n) => {
					const i = (t.piece.level || 1) - (n.piece.level || 1);
					if (0 !== i) return i;
					const a = Math.abs(t.r - e.r) + Math.abs(t.c - e.c), r = Math.abs(n.r - e.r) + Math.abs(n.c - e.c);
					return a !== r ? a - r : t.r - n.r || t.c - n.c;
				});
				if (0 === n.length) return e.emit({
					type: "SHOW_TEXT",
					text: "No ally to sacrifice",
					textKey: "LOG_INVALID_TARGET",
					style: "danger",
					pos: {
						r: e.r,
						c: e.c
					}
				}), void e.setNoSkip?.();
				const i = n[0], a = (t.level || 1) + 1;
				e.emit({
					type: "REMOVE_PIECE",
					pos: {
						r: i.r,
						c: i.c
					}
				}), i.piece.uid && e.emit({
					type: "REMOVE_FROM_ROSTER",
					pieceUid: i.piece.uid
				}), e.emit({
					type: "UPDATE_ROSTER_PIECE",
					pieceUid: t.uid,
					updates: {
						level: a,
						maxSlots: (t.maxSlots || 1) + 1
					}
				}), e.emit({
					type: "SHOW_TEXT",
					text: "Sacrifice Success",
					textKey: "LOG_SACRIFICE_SUCCESS",
					style: "gold",
					pos: {
						r: e.r,
						c: e.c
					}
				}), e.isAISimulation || Y.emit(q, {
					key: "allies_sacrificed",
					value: 1,
					isLifetimeOnly: !0
				});
			} else e.emit({
				type: "SHOW_TEXT",
				text: "Invalid target (Ally non-King only)",
				textKey: "LOG_INVALID_TARGET",
				style: "danger",
				pos: {
					r: e.r,
					c: e.c
				}
			}), e.setNoSkip?.();
		} }
	},
	{
		id: "PASSIVE_ANTENNA",
		name: "财富天线",
		tier: "RARE",
		category: H,
		description: "主动：激活此天线，使本局内玩家后续获得的所有金币收益翻倍。",
		hooks: { onUse: ({ emit: e }) => {
			e({
				type: "UPDATE_METADATA",
				updates: { doubleGoldActive: !0 }
			}), e({
				type: "SHOW_TEXT",
				text: "Double Yield Activated!",
				textKey: "LOG_ANTENNA_ACTIVE",
				style: "gold"
			}), e({
				type: "PLAY_SOUND",
				soundId: "GOLD_COLLECT"
			});
		} }
	},
	{
		id: "LOOT_BOX",
		name: "战利品箱",
		tier: "COMMON",
		category: H,
		isFreeAction: !0,
		description: "开启后随机获得一个已解锁的消耗品（概率受稀有度影响）。",
		hooks: { onUse: (e) => {
			const { emit: t, setNoSkip: n, prng: i, unlockedIds: a = [] } = e;
			if (!i) return;
			const r = Le.filter((e) => !e.isInternal && "LOOT_BOX" !== e.id && e.category === H), s = {
				COMMON: .55,
				RARE: .3,
				EPIC: .12,
				LEGENDARY: .03
			}, o = i.next();
			let c = "COMMON", l = 0;
			for (const [m, _] of Object.entries(s)) if (l += _, o < l) {
				c = m;
				break;
			}
			const d = (e) => r.filter((t) => t.tier === e && ("COMMON" === e || "RARE" === e || a.includes(t.id) || a.includes(t.effectId || t.id)));
			let E = d(c);
			0 === E.length && (E = d("EPIC")), 0 === E.length && (E = d("RARE")), 0 === E.length && (E = d("COMMON"));
			const u = E[Math.floor(i.next() * E.length)];
			u && (t({
				type: "ADD_ITEM",
				item: {
					id: `loot-${Ie()}`,
					type: "CONSUMABLE",
					name: u.name,
					desc: u.description || "",
					effectId: u.id,
					tier: u.tier || "COMMON"
				}
			}), t({
				type: "SHOW_TEXT",
				text: `Loot: ${u.name}`,
				textKey: "LOG_LOOT_BOX_OPEN",
				textParams: { item: u.name },
				style: "gold"
			})), n?.();
		} }
	},
	{
		id: "EQ_BAYONET",
		name: "刺刀",
		tier: "COMMON",
		category: F,
		pieceType: d.PAWN,
		description: "兵可以向前攻击（吃子）。",
		modifiers: { movement: (e, t) => {
			const { board: n, r: i, c: a, piece: r, isControlSquares: s } = e, o = i + (r.color === c ? -1 : 1);
			if (o >= 0 && o < 8) {
				const e = n[o][a];
				(e && e.color !== r.color || s && e && e.color === r.color) && t.push({
					r: o,
					c: a
				});
			}
			return t;
		} }
	},
	{
		id: "EQ_SCOUT_RADAR",
		name: "侦察雷达",
		tier: "RARE",
		category: F,
		pieceType: d.PAWN,
		description: "只要该兵连通，周围 2 格内的敌方隐身/幻影失效。",
		range: {
			type: "chebyshev",
			radius: 2
		},
		hooks: { onTurnStart: ({ board: e, r: t, c: n, piece: i, metadata: a, emit: r }) => {
			const { networked: s } = de(e, i.color, a);
			if (s[t][n]) for (let o = -2; o <= 2; o++) for (let a = -2; a <= 2; a++) {
				const s = t + o, c = n + a;
				if (s >= 0 && s < 8 && c >= 0 && c < 8) {
					const t = e[s][c];
					t && t.color !== i.color && t.statuses?.some((e) => e.id === _.INVISIBLE) && r({
						type: "REMOVE_STATUS",
						pos: {
							r: s,
							c
						},
						statusId: _.INVISIBLE
					});
				}
			}
		} }
	},
	{
		id: "EQ_SIGNAL_BACKPACK",
		name: "信号背包",
		tier: "RARE",
		category: F,
		pieceType: d.PAWN,
		description: "该兵处于连通时，使其正前 and 正后 2 格内的友军连网。",
		modifiers: { networkRange: ({ r: e, c: t, piece: n }) => {
			const i = [], a = n.color === c ? -1 : 1;
			for (let r = 1; r <= 2; r++) e + a * r >= 0 && e + a * r < 8 && i.push({
				r: e + a * r,
				c: t
			}), e - a * r >= 0 && e - a * r < 8 && i.push({
				r: e - a * r,
				c: t
			});
			return i;
		} }
	},
	{
		id: "EQ_HOOF_ARMOR",
		name: "护蹄重甲",
		tier: "RARE",
		category: F,
		pieceType: d.KNIGHT,
		description: "跳跃落点如果有敌方兵，直接吃掉，且该棋子可立刻再次行动（无视网络连接）。",
		hooks: { onKill: ({ victim: e, piece: t, r: n, c: i, emit: a }) => {
			e && e.type === d.PAWN && (a({
				type: "SET_EXTRA_MOVE",
				active: !0
			}), a({
				type: "UPDATE_METADATA",
				updates: { lockedActionUid: t.uid }
			}), a({
				type: "SET_UI_SELECTION",
				pos: {
					r: n,
					c: i
				},
				uid: t.uid ?? null
			}));
		} }
	},
	{
		id: "EQ_TELESCOPIC_LEGS",
		name: "伸缩腿",
		tier: "EPIC",
		category: F,
		pieceType: d.KNIGHT,
		description: "马可以选择跳跃 3x1 的距离。",
		modifiers: { movement: (e, t) => {
			const { board: n, piece: i, r: a, c: r, isControlSquares: s } = e;
			return [
				[-3, -1],
				[-3, 1],
				[3, -1],
				[3, 1],
				[-1, -3],
				[1, -3],
				[-1, 3],
				[1, 3]
			].forEach(([e, o]) => {
				const c = a + e, l = r + o;
				if (c >= 0 && c < 8 && l >= 0 && l < 8) {
					const e = n[c][l];
					e && e.color === i.color && !s || t.push({
						r: c,
						c: l
					});
				}
			}), t;
		} }
	},
	{
		id: "EQ_SHOCK_STIRRUPS",
		name: "震荡马镫",
		tier: "EPIC",
		category: F,
		pieceType: d.KNIGHT,
		description: "马落地时，使落点周围十字方向 1 格内敌军眩晕 1 回合。",
		range: {
			type: "cross",
			radius: 1
		},
		hooks: { onAfterMove: ({ board: e, piece: t, r: n, c: i, emit: a }) => {
			[
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1]
			].forEach(([r, s]) => {
				const o = n + r, c = i + s;
				if (o >= 0 && o < 8 && c >= 0 && c < 8) {
					const n = e[o][c];
					n && n.color !== t.color && n.type !== d.KING && a({
						type: "ADD_STATUS",
						pos: {
							r: o,
							c
						},
						statusId: _.FROZEN,
						duration: 2
					});
				}
			});
		} }
	},
	{
		id: "EQ_PRISM_SHIELD",
		name: "棱镜护盾",
		tier: "RARE",
		category: F,
		pieceType: d.BISHOP,
		description: "被吃掉时，将其杀手（如果是斜线攻击）一同带走。",
		hooks: { onDeath: ({ r: e, c: t, attacker: n, attackerPos: i, emit: a }) => {
			if (n && i) {
				const r = Math.abs(i.r - e);
				r === Math.abs(i.c - t) && r > 0 && (a({
					type: "KILL",
					targetId: n.id
				}), a({
					type: "SHOW_TEXT",
					text: "Prism Reflect!",
					textKey: "LOG_PRISM_REFLECT",
					style: "danger"
				}));
			}
		} }
	},
	{
		id: "EQ_HIGH_POWER_SCOPE",
		name: "高倍目镜",
		tier: "COMMON",
		category: F,
		pieceType: d.BISHOP,
		description: "如果吃掉距离自己 3 格及以上的敌人，立即获得 5 金币奖励。",
		hooks: { onKill: ({ piece: e, from: t, r: n, c: i, emit: a }) => {
			t && e.color === c && Math.max(Math.abs(n - t.r), Math.abs(i - t.c)) >= 3 && a({
				type: "MODIFY_GOLD",
				amount: 5,
				reason: "SCOPE"
			});
		} }
	},
	{
		id: "EQ_PURIFICATION_STAFF",
		name: "净化法杖",
		tier: "RARE",
		category: F,
		pieceType: d.BISHOP,
		description: "移动后，清除落点周围 3x3 范围友军的负面状态。",
		range: {
			type: "chebyshev",
			radius: 1
		},
		hooks: { onAfterMove: ({ board: e, piece: t, r: n, c: i, emit: a }) => {
			const r = [
				_.FROZEN,
				_.PETRIFIED,
				_.INFECTED,
				_.SILENCED,
				_.GRAVITY_LOCKED,
				_.SKILL_LOCKED
			];
			for (let s = -1; s <= 1; s++) for (let o = -1; o <= 1; o++) {
				const c = n + s, l = i + o;
				if (c >= 0 && c < 8 && l >= 0 && l < 8) {
					const n = e[c][l];
					n && n.color === t.color && (n.statuses || []).forEach((e) => {
						r.includes(e.id) && a({
							type: "REMOVE_STATUS",
							pos: {
								r: c,
								c: l
							},
							statusId: e.id
						});
					});
				}
			}
		} }
	},
	{
		id: "EQ_HOVER_TREAD",
		name: "履带轮",
		tier: "RARE",
		category: F,
		pieceType: d.ROOK,
		description: "车可以斜向移动一格。",
		modifiers: { movement: ({ board: e, piece: t, r: n, c: i }, a) => ([
			[-1, -1],
			[-1, 1],
			[1, -1],
			[1, 1]
		].forEach(([r, s]) => {
			const o = n + r, c = i + s;
			if (o >= 0 && o < 8 && c >= 0 && c < 8) {
				const n = e[o][c];
				n && n.color === t.color || a.push({
					r: o,
					c
				});
			}
		}), a) }
	},
	{
		id: "EQ_BASE_STATION",
		name: "基站天线",
		tier: "EPIC",
		category: F,
		pieceType: d.ROOK,
		description: "车处于连通时，其所在的整条行和列的所有友军视为已连网。",
		range: {
			type: "cross",
			radius: 7
		},
		modifiers: { networkRange: ({ r: e, c: t }) => {
			const n = [];
			for (let i = 0; i < 8; i++) i !== t && n.push({
				r: e,
				c: i
			}), i !== e && n.push({
				r: i,
				c: t
			});
			return n;
		} }
	},
	{
		id: "EQ_REACTIVE_ARMOR",
		name: "反应装甲",
		tier: "EPIC",
		category: F,
		pieceType: d.ROOK,
		description: "免疫来自正上方和正下方的任何攻击。",
		modifiers: { invulnerable: ({ board: e, r: t, c: n }, i) => V.findPieces(e, (e, a, r) => e === i && r === n && a !== t).length > 0 }
	},
	{
		id: "EQ_PHOENIX_FEATHER",
		name: "凤凰羽毛",
		tier: "LEGENDARY",
		category: F,
		pieceType: d.QUEEN,
		description: "被吃时，在王身边重生为等级 1 的兵，随后该装备损毁。",
		hooks: { onDeath: ({ board: e, piece: t, cancelAction: n, emit: i, r: a, c: r, prng: s }) => {
			const o = V.findPieces(e, (e) => e.type === d.KING && e.color === t.color)[0], c = o ? {
				r: o.r,
				c: o.c
			} : null;
			if (c && s) {
				const o = [
					[-1, -1],
					[-1, 0],
					[-1, 1],
					[0, -1],
					[0, 1],
					[1, -1],
					[1, 0],
					[1, 1]
				].sort(() => s.next() - .5);
				for (const [s, l] of o) {
					const o = c.r + s, E = c.c + l;
					if (o >= 0 && o < 8 && E >= 0 && E < 8 && !e[o][E]) {
						const e = {
							...t,
							type: d.PAWN,
							level: 1,
							equippedItems: t.equippedItems.filter((e) => "EQ_PHOENIX_FEATHER" !== e.effectId)
						};
						i({
							type: "REMOVE_PIECE",
							pos: {
								r: a,
								c: r
							}
						}), i({
							type: "SPAWN",
							pos: {
								r: o,
								c: E
							},
							piece: e
						}), i({
							type: "SHOW_TEXT",
							text: "Phoenix Rebirth",
							textKey: "LOG_PHOENIX_REBIRTH",
							style: "system"
						}), n?.();
						break;
					}
				}
			}
		} }
	},
	{
		id: "EQ_BLOOD_DRESS",
		name: "鲜血长裙",
		tier: "EPIC",
		category: F,
		pieceType: d.QUEEN,
		description: "吃掉敌军后在落点留下残影（2回合），之后可无视距离移动至残影处。",
		hooks: { onKill: ({ r: e, c: t, piece: n, emit: i }) => {
			i({
				type: "SET_SQUARE",
				pos: {
					r: e,
					c: t
				},
				status: {
					id: R,
					duration: 3,
					metadata: { uid: n.uid }
				}
			});
		} },
		modifiers: { movement: ({ metadata: e, piece: t }, n) => {
			const i = e?.squares || {};
			for (const a in i) if (i[a].some((e) => e.id === R && e.metadata?.uid === t.uid)) {
				const [e, t] = a.split(",").map(Number);
				n.push({
					r: e,
					c: t
				});
			}
			return n;
		} }
	},
	{
		id: "EQ_SCEPTER_OF_CHARM",
		name: "蛊惑权杖",
		tier: "LEGENDARY",
		category: F,
		pieceType: d.QUEEN,
		description: "威胁范围内有且仅有一个敌方单位且它无相邻友军时，将其策反 1 回合。",
		hooks: { onTurnStart: ({ board: e, r: t, c: n, piece: i, emit: a }) => {
			if ((i.metadata?.charmCd || 0) > 0) return void a({
				type: "UPDATE_ROSTER_PIECE",
				pieceUid: i.uid,
				updates: { metadata: {
					...i.metadata,
					charmCd: i.metadata.charmCd - 1
				} }
			});
			const r = [], s = [...D.R, ...D.B];
			for (const [o, c] of s) {
				let a = t + o, s = n + c;
				for (; a >= 0 && a < 8 && s >= 0 && s < 8;) {
					const t = e[a][s];
					if (t) {
						t.color !== i.color && t.type !== d.KING && r.push({
							r: a,
							c: s,
							p: t
						});
						break;
					}
					a += o, s += c;
				}
			}
			if (1 === r.length) {
				const t = r[0];
				let n = !1;
				for (let i = -1; i <= 1; i++) for (let a = -1; a <= 1; a++) {
					if (0 === i && 0 === a) continue;
					const r = t.r + i, s = t.c + a;
					if (r >= 0 && r < 8 && s >= 0 && s < 8) {
						const i = e[r][s];
						if (i && i.color === t.p.color) {
							n = !0;
							break;
						}
					}
				}
				n || (a({
					type: "UPDATE_ROSTER_PIECE",
					pieceUid: i.uid,
					updates: { metadata: {
						...i.metadata,
						charmCd: 2
					} }
				}), a({
					type: "REMOVE_PIECE",
					pos: {
						r: t.r,
						c: t.c
					}
				}), a({
					type: "SPAWN",
					pos: {
						r: t.r,
						c: t.c
					},
					piece: {
						...t.p,
						color: i.color,
						statuses: [...t.p.statuses || [], {
							id: _.BETRAYED,
							duration: 2,
							originalColor: t.p.color
						}]
					}
				}), a({
					type: "SHOW_TEXT",
					text: "Charmed!",
					textKey: "LOG_CHARMED",
					style: "gold",
					pos: {
						r: t.r,
						c: t.c
					}
				}));
			}
		} }
	},
	{
		id: "EQ_LIGHTNING_ROD",
		name: "避雷针",
		tier: "RARE",
		category: F,
		pieceType: d.KING,
		description: "王免疫敌方环境陷阱 and 负面状态的影响。",
		hooks: { onTurnStart: ({ piece: e, r: t, c: n, emit: i }) => {
			const a = [
				_.FROZEN,
				_.PETRIFIED,
				_.INFECTED,
				_.SILENCED,
				_.GRAVITY_LOCKED,
				_.SKILL_LOCKED
			];
			(e.statuses || []).forEach((e) => {
				a.includes(e.id) && i({
					type: "REMOVE_STATUS",
					pos: {
						r: t,
						c: n
					},
					statusId: e.id
				});
			});
		} }
	},
	{
		id: "EQ_MEGAPHONE",
		name: "扩音器",
		tier: "COMMON",
		category: F,
		pieceType: d.KING,
		description: "王提供的初始网络支持范围变为十字方向 2 格。",
		modifiers: { networkRange: ({ r: e, c: t }) => {
			const n = [];
			for (const [i, a] of [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1]
			]) for (let r = 1; r <= 2; r++) {
				const s = e + i * r, o = t + a * r;
				s >= 0 && s < 8 && o >= 0 && o < 8 && n.push({
					r: s,
					c: o
				});
			}
			return n;
		} }
	},
	{
		id: "EQ_ROYAL_GUARD",
		name: "御前侍卫",
		tier: "LEGENDARY",
		category: F,
		pieceType: d.KING,
		description: "王相邻友军被吃时，自动消耗 10 金币将其复活（每局限一次）。",
		tags: ["GLOBAL"],
		hooks: { onDeath: ({ board: e, piece: t, ownerPos: n, subject: i, r: a, c: r, cancelAction: s, emit: o, gold: c, prng: l, isAISimulation: d }) => {
			if (n && i && i.color === t.color && i.uid !== t.uid && 1 === Math.max(Math.abs(a - n.r), Math.abs(r - n.c))) {
				const E = t.equippedItems.find((e) => "EQ_ROYAL_GUARD" === e.effectId);
				if (E && !E.metadata?.used && (c ?? 0) >= 10 && l) {
					const c = [
						[-1, -1],
						[-1, 0],
						[-1, 1],
						[0, -1],
						[0, 1],
						[1, -1],
						[1, 0],
						[1, 1]
					].sort(() => l.next() - .5);
					let E = null;
					for (const [t, i] of c) {
						const a = n.r + t, r = n.c + i;
						if (a >= 0 && a < 8 && r >= 0 && r < 8 && !e[a][r]) {
							E = {
								r: a,
								c: r
							};
							break;
						}
					}
					if (E) {
						o({
							type: "MODIFY_GOLD",
							amount: -10,
							reason: "ROYAL_GUARD"
						});
						const e = t.equippedItems.map((e) => "EQ_ROYAL_GUARD" === e.effectId ? {
							...e,
							metadata: { used: !0 }
						} : e);
						o({
							type: "UPDATE_ROSTER_PIECE",
							pieceUid: t.uid,
							updates: { equippedItems: e }
						}), s?.(), o({
							type: "REMOVE_PIECE",
							pos: {
								r: a,
								c: r
							}
						}), o({
							type: "SPAWN",
							pos: E,
							piece: {
								...i,
								statuses: []
							}
						}), o({
							type: "SHOW_TEXT",
							text: "Guardian Sacrifice",
							textKey: "LOG_ROYAL_GUARD",
							style: "system"
						}), d || Y.emit(q, {
							key: "king_protected",
							value: 1,
							isLifetimeOnly: !0
						});
						return;
					}
				}
			}
		} }
	},
	{
		id: "EQ_REFLECTIVE_ARMOR",
		name: "反射护甲",
		tier: "COMMON",
		category: F,
		description: "当棋子被吃掉时，吃它的敌方棋子被冻结 1 回合。",
		hooks: { onDeath: ({ attacker: e, emit: t }) => {
			e && e.type !== d.KING && t({
				type: "ADD_STATUS",
				targetId: e.id,
				statusId: _.FROZEN,
				duration: 3
			});
		} }
	},
	{
		id: "EQ_LIGHTWEIGHT_ALLOY",
		name: "轻量化合金",
		tier: "COMMON",
		category: F,
		description: "棋子可以在断网状态下强行移动一次，随后该装备损毁。",
		modifiers: { bypassFrozen: () => !0 },
		hooks: { onAfterMove: ({ board: e, piece: t, r: n, c: i, from: a, emit: r, metadata: s }) => {
			if (!a) return;
			const o = e[n][i], c = e[a.r][a.c];
			e[a.r][a.c] = o, e[n][i] = c;
			const { networked: l } = de(e, t.color, s), d = !l[a.r][a.c];
			e[n][i] = o, e[a.r][a.c] = c, d && (r({
				type: "SPAWN",
				pos: {
					r: n,
					c: i
				},
				piece: {
					...t,
					equippedItems: t.equippedItems.filter((e) => "EQ_LIGHTWEIGHT_ALLOY" !== e.effectId)
				}
			}), r({
				type: "SHOW_TEXT",
				text: "Alloy Broken",
				textKey: "LOG_ALLOY_BROKEN",
				style: "system",
				pos: {
					r: n,
					c: i
				}
			}));
		} }
	},
	{
		id: "EQ_CAMOUFLAGE",
		name: "伪装迷彩",
		tier: "RARE",
		category: F,
		description: "只要该棋子本回合未移动且未吃子，它处于“伪装”状态。",
		hooks: {
			onTurnStart: ({ piece: e, r: t, c: n, emit: i }) => i({
				type: "ADD_STATUS",
				pos: {
					r: t,
					c: n
				},
				statusId: _.CAMOUFLAGED,
				duration: 2
			}),
			onAfterMove: ({ piece: e, r: t, c: n, emit: i }) => {
				i({
					type: "REMOVE_STATUS",
					pos: {
						r: t,
						c: n
					},
					statusId: _.CAMOUFLAGED
				});
			}
		}
	},
	{
		id: "EQ_STABILIZER",
		name: "稳定器",
		tier: "COMMON",
		category: F,
		description: "该棋子不会被任何推开、拉近等强制位移效果影响。",
		modifiers: { isSteady: () => !0 }
	},
	{
		id: "EQ_SELF_DESTRUCT",
		name: "自毁协议",
		tier: "RARE",
		category: F,
		description: "被吃时对周围 1 格造成毁灭爆炸，随后装备损毁。",
		range: {
			type: "chebyshev",
			radius: 1
		},
		hooks: { onDeath: ({ board: e, r: t, c: n, piece: i, emit: a }) => {
			for (let r = -1; r <= 1; r++) for (let i = -1; i <= 1; i++) {
				const s = t + r, o = n + i;
				s >= 0 && s < 8 && o >= 0 && o < 8 && e[s][o]?.type !== d.KING && a({
					type: "KILL",
					pos: {
						r: s,
						c: o
					}
				});
			}
			a({
				type: "UPDATE_ROSTER_PIECE",
				pieceUid: i.uid,
				updates: { equippedItems: (i.equippedItems || []).filter((e) => "EQ_SELF_DESTRUCT" !== e.effectId) }
			});
		} }
	},
	{
		id: "EQ_BACKUP_BATTERY",
		name: "备用电池组",
		tier: "COMMON",
		category: F,
		description: "该棋子断网后，可以多撑 2 回合才进入瘫痪状态。",
		hooks: { onTurnStart: ({ board: e, r: t, c: n, piece: i, emit: a, metadata: r }) => {
			const { networked: s } = de(e, i.color, r);
			if (s[t][n]) a({
				type: "SPAWN",
				pos: {
					r: t,
					c: n
				},
				piece: {
					...i,
					metadata: {
						...i.metadata,
						batteryLeft: 2
					}
				}
			});
			else if (void 0 === i.metadata?.batteryLeft) a({
				type: "SPAWN",
				pos: {
					r: t,
					c: n
				},
				piece: {
					...i,
					metadata: {
						...i.metadata,
						batteryLeft: 2
					}
				}
			}), a({
				type: "ADD_STATUS",
				pos: {
					r: t,
					c: n
				},
				statusId: _.BACKUP_BUFFER_ACTIVE,
				duration: 1
			});
			else if ((i.metadata?.batteryLeft || 0) > 0) {
				const e = i.metadata.batteryLeft - 1;
				a({
					type: "SPAWN",
					pos: {
						r: t,
						c: n
					},
					piece: {
						...i,
						metadata: {
							...i.metadata,
							batteryLeft: e
						}
					}
				}), a({
					type: "ADD_STATUS",
					pos: {
						r: t,
						c: n
					},
					statusId: _.BACKUP_BUFFER_ACTIVE,
					duration: 1
				}), e <= 0 && a({
					type: "ADD_STATUS",
					pos: {
						r: t,
						c: n
					},
					statusId: _.FROZEN,
					duration: 99
				});
			}
		} }
	},
	{
		id: "EQ_EMERGENCY_LINK",
		name: "应急链路",
		tier: "RARE",
		category: F,
		description: "断网时，强行与周围 2 格内的一名“已联网”的友军建立临时连接。",
		range: {
			type: "chebyshev",
			radius: 2
		},
		modifiers: { alwaysNetworked: ({ board: e, r: t, c: n, piece: i, networkedMap: a }) => {
			if (!a) return !1;
			let r = null, s = 999;
			for (let o = -2; o <= 2; o++) for (let c = -2; c <= 2; c++) {
				if (0 === o && 0 === c) continue;
				const l = t + o, d = n + c;
				if (l >= 0 && l < 8 && d >= 0 && d < 8 && e[l][d]?.color === i.color && e[l][d] !== i && a[l][d]) {
					const e = Math.abs(o) + Math.abs(c);
					e < s && (s = e, r = {
						r: l,
						c: d
					});
				}
			}
			return !!r && [r];
		} }
	},
	{
		id: "EQ_BOUNTY_MODULE",
		name: "赏金模块",
		tier: "EPIC",
		category: F,
		description: "该棋子每吃掉一个敌方棋子，立即获得 10 金币。",
		hooks: { onKill: ({ piece: e, emit: t }) => {
			e.color === c && t({
				type: "MODIFY_GOLD",
				amount: 10,
				reason: "BOUNTY"
			});
		} }
	},
	{
		id: "EQ_RESCUE_BEACON",
		name: "急救信标",
		tier: "EPIC",
		category: F,
		description: "被吃掉时，如果有同类棋子在库存，免费将其部署在王周围。",
		hooks: { onDeath: ({ piece: e, board: t, reserves: n, emit: i, prng: a }) => {
			if (n && (n[e.color]?.[e.type] || 0) > 0 && a) {
				let n = null;
				if (t.forEach((t, i) => t.forEach((t, a) => {
					t?.type === d.KING && t.color === e.color && (n = {
						r: i,
						c: a
					});
				})), n) {
					const r = [
						[-1, -1],
						[-1, 0],
						[-1, 1],
						[0, -1],
						[0, 1],
						[1, -1],
						[1, 0],
						[1, 1]
					].sort(() => a.next() - .5);
					for (const [a, s] of r) {
						const r = n.r + a, o = n.c + s;
						if (r >= 0 && r < 8 && o >= 0 && o < 8 && !t[r][o]) {
							i({
								type: "MODIFY_RESERVE",
								color: e.color,
								pieceType: e.type,
								amount: -1
							}), i({
								type: "SPAWN",
								pos: {
									r,
									c: o
								},
								piece: {
									...e,
									id: Ie(),
									statuses: [],
									equippedItems: []
								}
							});
							break;
						}
					}
				}
			}
		} }
	},
	{
		id: "EQ_TACTICAL_OPS",
		name: "战术调度中心",
		tier: "LEGENDARY",
		category: F,
		description: "每场战斗的第一回合，可以额外进行一次部署操作。",
		pieceType: d.KING,
		hooks: { onTurnStart: ({ piece: e, historyLength: t, emit: n }) => {
			const i = t ?? 0;
			e.color === c && 0 === i && e.equippedItems?.some((e) => "EQ_TACTICAL_OPS" === e.effectId) && (n({
				type: "SET_EXTRA_MOVE",
				active: !0
			}), n({
				type: "SHOW_TEXT",
				text: "Tactical Ops: Extra Deployment",
				textKey: "LOG_TACTICAL_OPS",
				style: "gold"
			}));
		} }
	},
	{
		id: "EQ_DIPLOMATIC_IMMUNITY",
		name: "外交豁免权",
		tier: "LEGENDARY",
		category: F,
		description: "前 2 回合，敌方 AI 禁止部署 new 棋子。",
		pieceType: d.KING,
		tags: ["GLOBAL"],
		hooks: { onDeploy: ({ r: e, c: t, piece: n, subject: i, historyLength: a, cancelAction: r, emit: s }) => {
			n && i && i.color !== n.color && n.equippedItems.some((e) => "EQ_DIPLOMATIC_IMMUNITY" === e.effectId) && (a ?? 0) < 5 && (s({
				type: "MODIFY_RESERVE",
				color: i.color,
				pieceType: i.type,
				amount: 1
			}), s({
				type: "REMOVE_PIECE",
				pos: {
					r: e,
					c: t
				}
			}), s({
				type: "SHOW_TEXT",
				text: "Diplomatic Intercept",
				textKey: "LOG_DIPLOMATIC_INTERCEPT",
				style: "system"
			}), r?.());
		} }
	},
	{
		id: "EQ_FULL_BAND_SCANNER",
		name: "全频扫描仪",
		tier: "EPIC",
		category: F,
		description: "回合开始时，强制所有敌方“隐身”和“陷阱”显形销毁。",
		pieceType: d.KING,
		hooks: { onTurnStart: ({ board: e, piece: t, metadata: n, emit: i, isAISimulation: a }) => {
			if (t.color === c && (V.findPieces(e, (e) => e.color === l && e.statuses?.some((e) => e.id === _.INVISIBLE)).forEach(({ r: e, c: t }) => i({
				type: "REMOVE_STATUS",
				pos: {
					r: e,
					c: t
				},
				statusId: _.INVISIBLE
			})), n && n.squares)) {
				const e = { ...n.squares };
				let t = 0;
				for (const n in e) {
					const i = e[n].filter((e) => e.id !== N);
					i.length !== e[n].length && (e[n] = i, t++);
				}
				t > 0 && (i({
					type: "UPDATE_METADATA",
					updates: { squares: e }
				}), a || Y.emit(q, {
					key: "trapsDestroyed",
					value: t,
					isLifetimeOnly: !0
				}));
			}
		} }
	},
	{
		id: "EQ_BLACK_MARKET_LEDGER",
		name: "黑市账本",
		tier: "EPIC",
		category: F,
		description: "击杀敌方国王（胜利）时，额外获得 30 金币的巨额收益。",
		pieceType: d.KING,
		tags: ["GLOBAL"],
		hooks: { onDeath: ({ piece: e, subject: t, emit: n }) => {
			t && t.type === d.KING && t.color === l && e.equippedItems.some((e) => "EQ_BLACK_MARKET_LEDGER" === e.effectId) && n({
				type: "MODIFY_GOLD",
				amount: 30,
				reason: "LEDGER"
			});
		} }
	},
	{
		id: "EQ_RECYCLING_STATION",
		name: "循环回收站",
		tier: "RARE",
		category: F,
		description: "每当有友方棋子阵亡，随机获得一个普通消耗品。",
		pieceType: d.KING,
		tags: ["GLOBAL"],
		hooks: { onDeath: ({ piece: e, subject: t, emit: n, prng: i }) => {
			if (t && t.color === c && t.uid !== e.uid && i) {
				const e = [
					"BATTERY",
					"SMOKE_BOMB",
					"PURIFIER"
				], t = e[Math.floor(i.next() * e.length)];
				n({
					type: "ADD_ITEM",
					item: {
						id: Ie(),
						type: "CONSUMABLE",
						name: "回收物资",
						desc: "",
						effectId: t,
						tier: "COMMON"
					}
				});
			}
		} }
	},
	{
		id: "EQ_RELIC_OF_KINGS",
		name: "王权遗物",
		tier: "LEGENDARY",
		category: F,
		pieceType: d.KING,
		description: "当场上只剩下王且无兵可发时，获得\"后\"和\"马\"的移动能力。",
		hooks: { onTurnStart: ({ piece: e, reserves: t, r: n, c: i, emit: a }) => {
			if (e.type === d.KING) {
				const r = t ? t[e.color] : {}, s = Object.values(r).every((e) => (e || 0) <= 0);
				s !== e.metadata?.isReserveEmpty && a({
					type: "SPAWN",
					pos: {
						r: n,
						c: i
					},
					piece: {
						...e,
						metadata: {
							...e.metadata,
							isReserveEmpty: s
						}
					}
				});
			}
		} },
		modifiers: { movement: (e, t) => {
			const { board: n, piece: i, r: a, c: r } = e, s = !0 === i.metadata?.isReserveEmpty;
			if (1 === V.findPieces(n, (e) => e.color === i.color).length && s) [
				[0, 1],
				[0, -1],
				[1, 0],
				[-1, 0],
				[1, 1],
				[1, -1],
				[-1, 1],
				[-1, -1]
			].forEach(([e, s]) => {
				let o = a + e, c = r + s;
				for (; o >= 0 && o < n.length && c >= 0 && c < n[0].length;) {
					const a = n[o][c];
					if (a) {
						a.color !== i.color && t.push({
							r: o,
							c
						});
						break;
					}
					t.push({
						r: o,
						c
					}), o += e, c += s;
				}
			}), [
				[2, 1],
				[2, -1],
				[-2, 1],
				[-2, -1],
				[1, 2],
				[1, -2],
				[-1, 2],
				[-1, -2]
			].forEach(([e, s]) => {
				const o = a + e, c = r + s;
				if (o >= 0 && o < n.length && c >= 0 && c < n[0].length) {
					const e = n[o][c];
					e && e.color === i.color || t.push({
						r: o,
						c
					});
				}
			});
			return t;
		} }
	},
	{
		id: "EQ_VENTURE_CAPITAL",
		name: "风险投资",
		tier: "RARE",
		category: F,
		description: "每进入下一关且金币>50，立刻获得 10 金币利息。",
		pieceType: d.KING,
		hooks: { onTurnStart: ({ piece: e, gold: t, historyLength: n, emit: i, r: a, c: r }) => {
			0 === (n ?? 0) && e.color === c && "number" == typeof a && "number" == typeof r && (t ?? 0) >= 50 && (i({
				type: "MODIFY_GOLD",
				amount: 10,
				reason: "VENTURE_CAPITAL"
			}), i({
				type: "SHOW_TEXT",
				text: "Venture Capital +10",
				textKey: "LOG_VENTURE_CAPITAL",
				style: "gold",
				pos: {
					r: a,
					c: r
				}
			}));
		} }
	},
	{
		id: "EQ_SWARM_INTELLIGENCE",
		name: "邻接网络",
		tier: "LEGENDARY",
		category: F,
		pieceType: d.KING,
		description: "场上所有的“兵”只要互相相邻，即视为与王连通。",
		hooks: {}
	},
	{
		id: "SCOUT_PROBE",
		name: "侦察探头",
		tier: "COMMON",
		category: H,
		description: "使 2x2 区域内的敌方隐身单位显形。",
		hooks: { onUse: ({ board: e, r: t, c: n, emit: i }) => {
			const a = c;
			for (let r = 0; r < 2; r++) for (let s = 0; s < 2; s++) {
				const o = t + r, c = n + s;
				if (o < 8 && c < 8) {
					const t = e[o][c];
					t && t.color !== a && t.statuses?.some((e) => e.id === _.INVISIBLE) && i({
						type: "REMOVE_STATUS",
						pos: {
							r: o,
							c
						},
						statusId: _.INVISIBLE
					});
				}
			}
		} }
	},
	{
		id: "RUST_SPRAY",
		name: "锈蚀试剂",
		tier: "COMMON",
		category: H,
		description: "目标下回合无法吃子。",
		hooks: { onUse: ({ piece: e, r: t, c: n, emit: i, setNoSkip: a }) => {
			e && e.color === l ? i({
				type: "ADD_STATUS",
				pos: {
					r: t,
					c: n
				},
				statusId: _.RUSTED,
				duration: 3
			}) : (i({
				type: "SHOW_TEXT",
				text: "Invalid target",
				textKey: "LOG_INVALID_TARGET",
				style: "system",
				pos: {
					r: t,
					c: n
				}
			}), a?.());
		} }
	},
	{
		id: "GOLD_MAGNET_ITEM",
		name: "金币磁铁",
		tier: "COMMON",
		category: H,
		description: "每移动一格获得 1 金币。",
		isFreeAction: !0,
		hooks: { onUse: (e) => {
			e.piece && e.piece.color === c ? e.emit({
				type: "ADD_STATUS",
				pos: {
					r: e.r,
					c: e.c
				},
				statusId: _.GOLD_MAGNET,
				duration: 3
			}) : (e.emit({
				type: "SHOW_TEXT",
				text: "Invalid target (Ally only)",
				textKey: "LOG_INVALID_TARGET",
				style: "system",
				pos: {
					r: e.r,
					c: e.c
				}
			}), e.setNoSkip?.());
		} }
	},
	{
		id: "SCRAP_PART",
		name: "多余零件",
		tier: "COMMON",
		category: H,
		description: "直接获得 5-20 金币。",
		hooks: { onUse: ({ emit: e, prng: t }) => {
			t && e({
				type: "MODIFY_GOLD",
				amount: Math.floor(16 * t.next()) + 5,
				reason: "SCRAP"
			});
		} }
	},
	{
		id: "LURE_SIGNAL",
		name: "诱导信号",
		tier: "COMMON",
		category: H,
		description: "强制敌方兵后退。",
		hooks: { onUse: (e) => {
			const { piece: t, r: n, c: i, emit: a, board: r, setNoSkip: s } = e;
			if (t?.type === d.PAWN && t.color === l) {
				const e = n - 1;
				e >= 0 && !r[e][i] ? a({
					type: "MOVE",
					from: {
						r: n,
						c: i
					},
					to: {
						r: e,
						c: i
					}
				}) : (a({
					type: "SHOW_TEXT",
					text: "No space",
					textKey: "LOG_NO_SPACE",
					style: "system",
					pos: {
						r: n,
						c: i
					}
				}), s?.());
			} else a({
				type: "SHOW_TEXT",
				text: "Invalid target (Enemy Pawn only)",
				textKey: "LOG_INVALID_TARGET",
				style: "system",
				pos: {
					r: n,
					c: i
				}
			}), s?.();
		} }
	},
	{
		id: "BARRICADE_ITEM",
		name: "简易工事",
		tier: "COMMON",
		category: H,
		description: "放置一个障碍物。",
		hooks: { onUse: ({ board: e, r: t, c: n, emit: i, setNoSkip: a }) => {
			e[t][n] ? (i({
				type: "SHOW_TEXT",
				text: "Square occupied",
				textKey: "LOG_SQUARE_OCCUPIED",
				style: "danger",
				pos: {
					r: t,
					c: n
				}
			}), a?.()) : i({
				type: "SET_SQUARE",
				pos: {
					r: t,
					c: n
				},
				status: {
					id: T,
					duration: 99
				}
			});
		} }
	},
	{
		id: "EMERGENCY_PATCH",
		name: "紧急补丁",
		tier: "COMMON",
		category: H,
		description: "移除感染。",
		hooks: { onUse: ({ piece: e, r: t, c: n, emit: i, setNoSkip: a }) => {
			e && e.color === c ? i({
				type: "REMOVE_STATUS",
				pos: {
					r: t,
					c: n
				},
				statusId: _.INFECTED
			}) : (i({
				type: "SHOW_TEXT",
				text: "Invalid target (Ally only)",
				textKey: "LOG_INVALID_TARGET",
				style: "system",
				pos: {
					r: t,
					c: n
				}
			}), a?.());
		} }
	},
	{
		id: "SWAP_PLUGIN",
		name: "交换插件",
		tier: "RARE",
		category: H,
		description: "交换相邻友军位置。",
		hooks: { onUse: ({ piece: e, board: t, r: n, c: i, emit: a, setNoSkip: r }) => {
			if (e && e.color === c) {
				let s = !1;
				for (const [r, o] of [
					[0, 1],
					[1, 0],
					[0, -1],
					[-1, 0]
				]) {
					const l = n + r, d = i + o;
					if (l >= 0 && l < 8 && d >= 0 && d < 8 && t[l][d]?.color === c) {
						a({
							type: "SWAP_PIECES",
							posA: {
								r: n,
								c: i
							},
							posB: {
								r: l,
								c: d
							},
							actorColor: e.color
						}), s = !0;
						break;
					}
				}
				s || (a({
					type: "SHOW_TEXT",
					text: "No adjacent ally",
					textKey: "LOG_NO_ADJACENT_ALLY",
					style: "system",
					pos: {
						r: n,
						c: i
					}
				}), r?.());
			} else a({
				type: "SHOW_TEXT",
				text: "Invalid target (Ally only)",
				textKey: "LOG_INVALID_TARGET",
				style: "system",
				pos: {
					r: n,
					c: i
				}
			}), r?.();
		} }
	},
	{
		id: "COMMAND_STEAL",
		name: "指令窃取",
		tier: "RARE",
		category: H,
		description: "接下来两回合无法行动并劫持信号。",
		hooks: { onUse: ({ piece: e, r: t, c: n, emit: i, setNoSkip: a }) => {
			e && e.color === l ? (i({
				type: "ADD_STATUS",
				pos: {
					r: t,
					c: n
				},
				statusId: _.FROZEN,
				duration: 5
			}), i({
				type: "ADD_STATUS",
				pos: {
					r: t,
					c: n
				},
				statusId: _.JAMMING_TOWER,
				duration: 5,
				metadata: { networkOwnerOverride: c }
			})) : (i({
				type: "SHOW_TEXT",
				text: "Invalid target",
				textKey: "LOG_INVALID_TARGET",
				style: "system",
				pos: {
					r: t,
					c: n
				}
			}), a?.());
		} }
	},
	{
		id: "DATA_HARVEST",
		name: "数据收割",
		tier: "RARE",
		category: H,
		description: "每个冻结单位 provide 10 金币。",
		hooks: { onUse: ({ board: e, emit: t }) => {
			let n = 0;
			e.flat().forEach((e) => {
				e?.statuses?.some((e) => e.id === _.FROZEN) && n++;
			}), t({
				type: "MODIFY_GOLD",
				amount: 10 * n,
				reason: "HARVEST"
			});
		} }
	},
	{
		id: "GOLDEN_TOUCH",
		name: "黄金化",
		tier: "RARE",
		category: H,
		description: "将敌方兵变为 50 金币。",
		hooks: { onUse: ({ piece: e, r: t, c: n, emit: i, setNoSkip: a }) => {
			e?.type === d.PAWN && e.color === l ? (i({
				type: "KILL",
				pos: {
					r: t,
					c: n
				}
			}), i({
				type: "MODIFY_GOLD",
				amount: 50,
				reason: "GOLDEN"
			})) : (i({
				type: "SHOW_TEXT",
				text: "Invalid target (Enemy Pawn only)",
				textKey: "LOG_INVALID_TARGET",
				style: "system",
				pos: {
					r: t,
					c: n
				}
			}), a?.());
		} }
	},
	{
		id: "ILLEGAL_SLOT",
		name: "非法扩容",
		tier: "EPIC",
		category: H,
		description: "装备槽永久 +1。",
		hooks: { onUse: ({ piece: e, r: t, c: n, emit: i, setNoSkip: a }) => {
			e && e.uid && e.color === c ? i({
				type: "UPDATE_ROSTER_PIECE",
				pieceUid: e.uid,
				updates: { maxSlots: (e.maxSlots || 1) + 1 }
			}) : (i({
				type: "SHOW_TEXT",
				text: "Invalid target (Ally only)",
				textKey: "LOG_INVALID_TARGET",
				style: "system",
				pos: {
					r: t,
					c: n
				}
			}), a?.());
		} }
	},
	{
		id: "BLACK_ORDER",
		name: "黑市订单",
		tier: "EPIC",
		category: H,
		description: "抢夺敌方一件装备。",
		hooks: { onUse: ({ piece: e, r: t, c: n, emit: i, setNoSkip: a }) => {
			if (e?.equippedItems?.length && e.uid && e.color === l) i({
				type: "ADD_ITEM",
				item: {
					...e.equippedItems[0],
					id: Ie()
				}
			}), i({
				type: "UPDATE_ROSTER_PIECE",
				pieceUid: e.uid,
				updates: { equippedItems: e.equippedItems.slice(1) }
			}), i({
				type: "SHOW_TEXT",
				text: "Stolen!",
				textKey: "LOG_STOLEN",
				style: "gold",
				pos: {
					r: t,
					c: n
				}
			});
			else i({
				type: "SHOW_TEXT",
				text: "Invalid target (Enemy with gear only)",
				textKey: "LOG_INVALID_TARGET",
				style: "system",
				pos: {
					r: t,
					c: n
				}
			}), a?.();
		} }
	},
	{
		id: "REAPER_EXE",
		name: "死神程序",
		tier: "LEGENDARY",
		category: H,
		description: "击杀所有断网棋子。",
		hooks: { onUse: ({ board: e, metadata: t, emit: n }) => {
			const { networked: i } = de(e, c, t), { networked: a } = de(e, l, t);
			V.findPieces(e, (e) => e.type !== d.KING).forEach(({ r: e, c: t, piece: r }) => {
				(r.color === c ? i[e][t] : a[e][t]) || n({
					type: "KILL",
					pos: {
						r: e,
						c: t
					}
				});
			});
		} }
	},
	{
		id: "WHEEL_OF_FATE",
		name: "命运轮盘",
		tier: "LEGENDARY",
		category: H,
		description: "触发 3 个随机道具。",
		hooks: { onUse: (e) => {
			const t = [
				"BATTERY",
				"PURIFIER",
				"SMOKE_BOMB",
				"SPARE_PARTS"
			], n = e.prng || { next: Math.random };
			for (let i = 0; i < 3; i++) {
				const i = t[Math.floor(n.next() * t.length)];
				e.emit({
					type: "SHOW_TEXT",
					text: "Fate Trigger: " + i,
					textKey: "LOG_WHEEL_TRIGGER",
					textParams: { item: i },
					style: "gold"
				});
				const a = Bn.getDefinition(i);
				a?.hooks?.onUse && a.hooks.onUse(e);
			}
		} }
	},
	{
		id: "EQ_ROYAL_SALUTE",
		name: "皇家礼炮",
		tier: "EPIC",
		category: F,
		pieceType: d.QUEEN,
		description: "吃子后随机雷击一名敌方兵。冷却 3 回合。",
		hooks: {
			onKill: ({ board: e, piece: t, emit: n, prng: i, isAISimulation: a }) => {
				if (0 === (t.metadata?.saluteCd || 0) && i) {
					const r = V.findPieces(e, (e) => e.color !== t.color && e.type === d.PAWN);
					if (r.length > 0) {
						const e = r[Math.floor(i.next() * r.length)], s = {
							...t.metadata || {},
							saluteCd: 3
						};
						t.metadata = s, n({
							type: "KILL",
							pos: {
								r: e.r,
								c: e.c
							}
						}), n({
							type: "UPDATE_ROSTER_PIECE",
							pieceUid: t.uid,
							updates: { metadata: s }
						}), a || Y.emit(q, {
							key: "enemy_pawns_killed",
							value: 1,
							isLifetimeOnly: !0
						});
					}
				}
			},
			onTurnStart: ({ piece: e, emit: t }) => {
				(e.metadata?.saluteCd || 0) > 0 && t({
					type: "UPDATE_ROSTER_PIECE",
					pieceUid: e.uid,
					updates: { metadata: {
						...e.metadata,
						saluteCd: e.metadata.saluteCd - 1
					} }
				});
			}
		}
	},
	{
		id: "EQ_GOLDEN_THRONE",
		name: "黄金王座",
		tier: "LEGENDARY",
		category: F,
		pieceType: d.KING,
		description: "每回合开始，根据场上连通的友军数量获得金币。",
		hooks: { onTurnStart: ({ board: e, piece: t, emit: n, metadata: i }) => {
			if (t.color === c) {
				const { networked: a } = de(e, t.color, i);
				let r = 0;
				for (let n = 0; n < 8; n++) for (let i = 0; i < 8; i++) e[n][i] && e[n][i].color === t.color && a[n][i] && r++;
				r > 0 && (n({
					type: "MODIFY_GOLD",
					amount: r,
					reason: "THRONE"
				}), n({
					type: "SHOW_TEXT",
					text: `Throne Income +${r}`,
					textKey: "LOG_THRONE_REWARD",
					textParams: { amount: r },
					style: "gold"
				}));
			}
		} }
	},
	{
		id: "SIGNAL_TOWER_DEFENSE",
		name: "信号塔防御",
		tier: "EPIC",
		category: H,
		description: "u4E3Bu52A8uFF1Au6D88u8017 20 u91D1u5E01u5728u5F53u524Du683Cu5B50u653Eu7F6Eu6C38u4E45u201Cu4FE1u53F7u589Eu76CAu5854u201Du3002u6BCFu5173u9650u4E00u6B21u3002",
		hooks: { onUse: (e) => {
			const { r: t, c: n, board: i, emit: a, gold: r, metadata: s, setNoSkip: o, cancelAction: c, isAISimulation: l } = e, d = s?.signalTowersBuilt ?? 0;
			d >= 1 ? (a({
				type: "SHOW_TEXT",
				text: "Already used this level",
				textKey: "LOG_ALREADY_USED",
				style: "system"
			}), o?.(), c?.()) : (r ?? 0) < 20 ? (a({
				type: "SHOW_TEXT",
				text: "Insufficient gold",
				textKey: "LOG_NO_FUNDS",
				style: "system"
			}), o?.(), c?.()) : !i[t] || i[t][n] ? (a({
				type: "SHOW_TEXT",
				text: "No space around",
				textKey: "LOG_NO_SPACE",
				style: "system"
			}), o?.(), c?.()) : (a({
				type: "UPDATE_METADATA",
				updates: { signalTowersBuilt: d + 1 }
			}), a({
				type: "MODIFY_GOLD",
				amount: -20,
				reason: "BUILD_TOWER"
			}), a({
				type: "SET_SQUARE",
				pos: {
					r: t,
					c: n
				},
				status: {
					id: S,
					duration: 99
				}
			}), a({
				type: "SHOW_TEXT",
				text: "Signal tower built",
				textKey: "LOG_TOWER_BUILT",
				style: "system",
				pos: {
					r: t,
					c: n
				}
			}), l || Y.emit(q, {
				key: "towers_built",
				value: 1,
				isLifetimeOnly: !0
			}));
		} }
	},
	{
		id: "EQ_DEFLATION",
		name: "通缩政策",
		tier: "LEGENDARY",
		category: F,
		description: "全局：商店所有商品价格降低 20%。",
		hooks: { onPriceCalculate: ({ priceRef: e }) => {
			e && (e.value = Math.floor(.8 * e.value));
		} }
	},
	{
		id: "EQ_HACKER_TERMINAL",
		name: "黑客终端",
		tier: "EPIC",
		category: F,
		description: "每回合开始时，随机使一个敌方高级棋子冻结。",
		hooks: { onTurnStart: ({ board: e, piece: t, emit: n, prng: i, isAISimulation: a }) => {
			if (t.color === c && i) {
				const t = V.findPieces(e, (e) => e.color === l && [
					d.ROOK,
					d.BISHOP,
					d.QUEEN
				].includes(e.type));
				if (t.length > 0) {
					const e = t[Math.floor(i.next() * t.length)];
					n({
						type: "ADD_STATUS",
						pos: {
							r: e.r,
							c: e.c
						},
						statusId: _.FROZEN,
						duration: 2
					}), n({
						type: "SHOW_TEXT",
						text: "Remote Hack",
						textKey: "LOG_HACKER_TERMINAL",
						style: "danger",
						pos: {
							r: e.r,
							c: e.c
						}
					}), a || Y.emit(q, {
						key: "highTierFrozen",
						value: 1,
						isLifetimeOnly: !0
					});
				}
			}
		} }
	},
	{
		id: "EQ_SPYWARE",
		name: "间谍软件",
		tier: "RARE",
		category: F,
		description: "每次敌方国王移动后，玩家获得 5 金币。",
		tags: ["GLOBAL"],
		hooks: { onAfterMove: ({ piece: e, subject: t, emit: n }) => {
			t && t.color === l && t.type === d.KING && e.equippedItems?.some((e) => "EQ_SPYWARE" === e.effectId) && (n({
				type: "MODIFY_GOLD",
				amount: 5,
				reason: "SPYWARE"
			}), n({
				type: "SHOW_TEXT",
				text: "Data Stolen +5",
				textKey: "LOG_SPYWARE",
				style: "gold"
			}));
		} }
	},
	{
		id: "SINGULARITY_GRENADE",
		name: "奇点手雷",
		tier: "EPIC",
		category: H,
		description: "选择空地释放。将 5x5 内非王棋子按由内向外次序向中心拉扯 1 格。王免疫拉扯但被重力束缚 2 回合。撞向王的棋子单方面粉碎，王不受伤害。",
		range: {
			type: "chebyshev",
			radius: 1
		},
		hooks: { onUse: ({ board: e, r: t, c: n, emit: i, setNoSkip: a }) => {
			if (e[t][n]) return i({
				type: "SHOW_TEXT",
				text: "必须是空地",
				textKey: "LOG_EMPTY_REQUIRED",
				style: "danger",
				pos: {
					r: t,
					c: n
				}
			}), void a?.();
			i({
				type: "PLAY_SOUND",
				soundId: "WORMHOLE"
			});
			const r = /* @__PURE__ */ new Map();
			[[
				[-1, -1],
				[-1, 0],
				[-1, 1],
				[0, -1],
				[0, 1],
				[1, -1],
				[1, 0],
				[1, 1]
			], [
				[-2, -2],
				[-2, -1],
				[-2, 0],
				[-2, 1],
				[-2, 2],
				[-1, -2],
				[1, -2],
				[0, -2],
				[0, 2],
				[-1, 2],
				[1, 2],
				[2, -2],
				[2, -1],
				[2, 0],
				[2, 1],
				[2, 2]
			]].forEach((a) => {
				a.forEach(([a, s]) => {
					const o = t + a, c = n + s;
					if (!V.isValidPos(o, c)) return;
					const l = e[o][c];
					if (!l) return;
					const E = `${o - Math.sign(a)},${c - Math.sign(s)}`;
					if (l.type === d.KING) return i({
						type: "ADD_STATUS",
						pos: {
							r: o,
							c
						},
						statusId: _.GRAVITY_LOCKED,
						duration: 2
					}), void i({
						type: "SHOW_TEXT",
						text: "Gravity Locked",
						textKey: "LOG_GRAVITY_LOCKED",
						style: "system",
						pos: {
							r: o,
							c
						}
					});
					if (Bn.isSteady(l, e, o, c)) return;
					const u = e[o - Math.sign(a)][c - Math.sign(s)], m = r.has(E);
					u && u.type === d.KING ? (i({
						type: "PLAY_SOUND",
						soundId: "LANDMINE"
					}), i({
						type: "KILL",
						pos: {
							r: o,
							c
						}
					}), i({
						type: "SHOW_TEXT",
						text: "Crushed by King!",
						style: "danger",
						pos: {
							r: o,
							c
						}
					})) : u || m ? (i({
						type: "PLAY_SOUND",
						soundId: "LANDMINE"
					}), i({
						type: "KILL",
						pos: {
							r: o - Math.sign(a),
							c: c - Math.sign(s)
						}
					}), i({
						type: "KILL",
						pos: {
							r: o,
							c
						}
					}), i({
						type: "SHOW_TEXT",
						text: "奇点碰撞！",
						textKey: "LOG_SINGULARITY_COLLISION",
						style: "danger",
						pos: {
							r: o - Math.sign(a),
							c: c - Math.sign(s)
						}
					})) : (i({
						type: "MOVE",
						from: {
							r: o,
							c
						},
						to: {
							r: o - Math.sign(a),
							c: c - Math.sign(s)
						}
					}), r.set(E, !0));
				});
			});
		} }
	},
	{
		id: "EQ_GRAPPLING_HOOK",
		name: "抓地飞索",
		tier: "RARE",
		category: F,
		description: "主动：向直线方向发射飞索，命中目标后将自己拉拽至其前方 1 格的位置（不消耗移动回合，冷却 3 回合）。",
		range: {
			type: "cross",
			radius: 7
		},
		isFreeAction: !0,
		activeSpec: {
			targeting: "direction",
			cooldownKey: "grappleCd",
			getAlternatives: (e, t, n) => [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1]
			].map(([e, i]) => ({
				pos: {
					r: t + e,
					c: n + i
				},
				value: {
					dr: e,
					dc: i
				}
			})).filter((e) => V.isValidPos(e.pos.r, e.pos.c)),
			getAoE: (e, t, n, i, a) => {
				if (!a) return [];
				const { dr: r, dc: s } = a, o = [];
				let c = t + r, l = n + s;
				for (; V.isValidPos(c, l);) o.push({
					r: c,
					c: l
				}), c += r, l += s;
				return o;
			},
			execute: (e, t, n, i, a, r, s) => {
				if ((i.metadata?.grappleCd || 0) > 0) return;
				if (r({
					type: "UPDATE_ROSTER_PIECE",
					pieceUid: i.uid,
					pieceId: i.id,
					updates: { metadata: {
						...i.metadata,
						grappleCd: 3
					} }
				}), !a) return;
				const { dr: o, dc: c } = a;
				let l = t + o, d = n + c, E = null;
				for (; V.isValidPos(l, d) && !e[l][d] && !pe(l, d, s?.metadata);) E = {
					r: l,
					c: d
				}, l += o, d += c;
				E ? (r({
					type: "PLAY_SOUND",
					soundId: "CONVEYOR"
				}), r({
					type: "MOVE",
					from: {
						r: t,
						c: n
					},
					to: E
				}), r({
					type: "SHOW_TEXT",
					text: "Grapple!",
					textKey: "LOG_GRAPPLE",
					style: "gold",
					pos: E
				})) : r({
					type: "SHOW_TEXT",
					text: "Too close",
					textKey: "LOG_GRAPPLE_FAIL",
					style: "danger",
					pos: {
						r: t,
						c: n
					}
				});
			}
		},
		hooks: { onTurnStart: ({ piece: e, emit: t }) => {
			(e.metadata?.grappleCd || 0) > 0 && t({
				type: "UPDATE_ROSTER_PIECE",
				pieceUid: e.uid,
				pieceId: e.id,
				updates: { metadata: {
					...e.metadata,
					grappleCd: e.metadata.grappleCd - 1
				} }
			});
		} }
	},
	{
		id: "SPATIAL_SCRAMBLER",
		name: "空间乱序器",
		tier: "LEGENDARY",
		category: H,
		description: "选择一个 3x3 区域，打乱其中所有非王棋子的位置。",
		range: {
			type: "chebyshev",
			radius: 1
		},
		hooks: { onUse: ({ board: e, r: t, c: n, emit: i, prng: a }) => {
			const r = a || {
				next: () => Math.random(),
				nextInt: (e, t) => Math.floor(Math.random() * (t - e + 1)) + e,
				choice: (e) => e[Math.floor(Math.random() * e.length)]
			}, s = [], o = [];
			for (let l = -1; l <= 1; l++) for (let i = -1; i <= 1; i++) {
				const a = t + l, r = n + i;
				if (!V.isValidPos(a, r)) continue;
				const c = e[a][r];
				c && c.type !== d.KING && !Bn.isSteady(c, e, a, r) && (s.push({
					piece: c,
					pos: {
						r: a,
						c: r
					}
				}), o.push({
					r: a,
					c: r
				}));
			}
			const c = [...o];
			for (let l = c.length - 1; l > 0; l--) {
				const e = Math.floor(r.next() * (l + 1));
				[c[l], c[e]] = [c[e], c[l]];
			}
			for (let l = 0; l < s.length; l++) i({
				type: "REMOVE_PIECE",
				pos: s[l].pos
			});
			for (let l = 0; l < s.length; l++) i({
				type: "SPAWN",
				pos: c[l],
				piece: s[l].piece
			});
			i({
				type: "SHOW_TEXT",
				text: "空间乱序！",
				textKey: "LOG_SPATIAL_SCRAMBLE",
				style: "danger",
				pos: {
					r: t,
					c: n
				}
			});
		} }
	}
], Ne = [
	{
		id: "KNIGHT_AURA",
		name: "骑士光环",
		tier: "COMMON",
		category: B,
		pieceType: d.KNIGHT,
		description: "只要马处于联网状态，与其相邻的友方兵获得十字移动能力。",
		range: {
			type: "chebyshev",
			radius: 1
		},
		hooks: { onTurnStart: ({ board: e, r: t, c: n, piece: i, emit: a, metadata: r }) => {
			const { networked: s } = de(e, i.color, r);
			s[t][n] && [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1],
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			].forEach(([r, s]) => {
				const o = t + r, c = n + s;
				if (o >= 0 && o < 8 && c >= 0 && c < 8) {
					const t = e[o][c];
					t && t.color === i.color && t.type === d.PAWN && a({
						type: "ADD_STATUS",
						pos: {
							r: o,
							c
						},
						statusId: _.CROSS_AURA,
						duration: 2
					});
				}
			});
		} }
	},
	{
		id: "KNIGHT_CROSS_JUMP",
		name: "十字跳",
		tier: "RARE",
		category: B,
		pieceType: d.KNIGHT,
		description: "跳跃后如果没有吃子，该棋子可立刻在十字方向上再次行动一格（无视网络连接，不可吃子）。",
		modifiers: { movement: (e, t) => e.piece.statuses?.some((e) => e.id === _.CROSS_AURA) ? [] : t },
		hooks: { onAfterMove: ({ victim: e, r: t, c: n, piece: i, emit: a }) => {
			i.statuses?.some((e) => e.id === _.CROSS_AURA) ? (a({
				type: "REMOVE_STATUS",
				pos: {
					r: t,
					c: n
				},
				statusId: _.CROSS_AURA
			}), a({
				type: "REMOVE_STATUS",
				pos: {
					r: t,
					c: n
				},
				statusId: _.CANNOT_CAPTURE
			})) : e || (a({
				type: "ADD_STATUS",
				pos: {
					r: t,
					c: n
				},
				statusId: _.CROSS_AURA,
				duration: 2
			}), a({
				type: "ADD_STATUS",
				pos: {
					r: t,
					c: n
				},
				statusId: _.CANNOT_CAPTURE,
				duration: 2
			}), a({
				type: "SET_EXTRA_MOVE",
				active: !0
			}), a({
				type: "UPDATE_METADATA",
				updates: { lockedActionUid: i.uid }
			}), a({
				type: "SET_UI_SELECTION",
				pos: {
					r: t,
					c: n
				},
				uid: i.uid ?? null
			}), a({
				type: "SHOW_TEXT",
				text: "Cross Double-Step",
				textKey: "LOG_CROSS_JUMP",
				style: "system"
			}));
		} }
	},
	{
		id: "KNIGHT_QUICK_ROUTING",
		name: "极速寻址",
		tier: "COMMON",
		category: B,
		pieceType: d.KNIGHT,
		atomicBits: ["MOVE_N"],
		description: "即使该棋子因断网处于“瘫痪/冻结”状态，也允许它进行移动，但仅限跳向目前被己方网络覆盖的格子。",
		modifiers: {
			bypassFrozen: () => !0,
			movement: (e, t) => {
				const { r: n, c: i, piece: a, networkedMap: r, metadata: s, isControlSquares: o } = e;
				if (o) return t;
				if (r && r[n][i]) return t;
				if (!s?.cache) return t;
				const l = a.color === c ? s.cache.whiteControl : s.cache.blackControl;
				return t.filter((e) => l[e.r][e.c]);
			}
		}
	},
	{
		id: "KNIGHT_PHANTOM_STRIKE",
		name: "幻影突袭",
		tier: "COMMON",
		category: B,
		pieceType: d.KNIGHT,
		atomicBits: ["MOVE_N"],
		description: "马吃子后可以马上回到原位。",
		modifiers: { movement: ({ board: e, r: t, c: n, piece: i }, a) => ([
			[-2, -1],
			[-2, 1],
			[-1, -2],
			[-1, 2],
			[1, -2],
			[1, 2],
			[2, -1],
			[2, 1]
		].forEach(([r, s]) => {
			const o = t + r, c = n + s;
			if (V.isValidPos(o, c)) {
				const t = e[o][c];
				t && t.color !== i.color && a.push({
					r: o,
					c
				});
			}
		}), a) },
		hooks: { onKill: ({ from: e, r: t, c: n, emit: i }) => {
			e && (i({
				type: "MOVE",
				from: {
					r: t,
					c: n
				},
				to: e
			}), i({
				type: "SHOW_TEXT",
				text: "Phantom Return",
				textKey: "LOG_PHANTOM_RETURN",
				style: "system",
				pos: e
			}));
		} }
	},
	{
		id: "KNIGHT_SCAVENGER",
		name: "搜刮者",
		tier: "COMMON",
		category: B,
		pieceType: d.KNIGHT,
		description: "如果跳跃的目标格是敌方控制区，立即获得 1 金币。",
		hooks: { onAfterMove: ({ board: e, piece: t, r: n, c: i, emit: a, metadata: r }) => {
			const { control: s } = de(e, t.color === c ? l : c, r);
			s[n][i] && t.color === c && a({
				type: "MODIFY_GOLD",
				amount: 1,
				reason: "SCAVENGER"
			});
		} }
	},
	{
		id: "KNIGHT_SIDE_STEP",
		name: "灵活蹄铁",
		tier: "COMMON",
		category: B,
		pieceType: d.KNIGHT,
		description: "允许马向相邻的空格移动一格（非吃子）。",
		modifiers: { movement: (e, t) => {
			const { board: n, r: i, c: a, piece: r, isControlSquares: s } = e;
			return [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1]
			].forEach(([e, o]) => {
				const c = i + e, l = a + o;
				if (V.isValidPos(c, l)) {
					const e = n[c][l];
					(!e || s && e.color === r.color) && t.push({
						r: c,
						c: l
					});
				}
			}), t;
		} }
	},
	{
		id: "KNIGHT_HOT_SWAP",
		name: "战术换位",
		tier: "COMMON",
		category: B,
		pieceType: d.KNIGHT,
		description: "允许跳向己方“兵”所在的格子，落地后与该兵互换位置。",
		modifiers: { movement: ({ board: e, piece: t, r: n, c: i }, a) => ([
			[-2, -1],
			[-2, 1],
			[-1, -2],
			[-1, 2],
			[1, -2],
			[1, 2],
			[2, -1],
			[2, 1]
		].forEach(([r, s]) => {
			const o = n + r, c = i + s;
			if (V.isValidPos(o, c)) {
				const n = e[o][c];
				n && n.color === t.color && n.type === d.PAWN && a.push({
					r: o,
					c
				});
			}
		}), a) },
		hooks: { onAfterMove: ({ from: e, piece: t, emit: n }) => {
			if (e && t.stackedPiece && t.stackedPiece.type === d.PAWN) {
				const i = t.stackedPiece;
				n({
					type: "UPDATE_ROSTER_PIECE",
					pieceUid: t.uid,
					updates: { stackedPiece: null }
				}), n({
					type: "SPAWN",
					pos: e,
					piece: {
						...i,
						stackedPiece: null
					}
				}), n({
					type: "SHOW_TEXT",
					text: "Tactical Swap!",
					textKey: "LOG_TACTICAL_SWAP",
					style: "system",
					pos: e
				});
			}
		} }
	},
	{
		id: "KNIGHT_VALIANT",
		name: "英勇",
		tier: "RARE",
		category: B,
		pieceType: d.KNIGHT,
		description: "马吃子后，若落点周围 1 格没有友军，该马获得一层“护盾”。",
		hooks: { onKill: ({ board: e, r: t, c: n, piece: i, emit: a }) => {
			let r = !1;
			for (let s = -1; s <= 1; s++) for (let a = -1; a <= 1; a++) {
				if (0 === s && 0 === a) continue;
				const o = t + s, c = n + a;
				if (V.isValidPos(o, c) && e[o][c]?.color === i.color) {
					r = !0;
					break;
				}
			}
			r || a({
				type: "ADD_STATUS",
				pos: {
					r: t,
					c: n
				},
				statusId: _.SHIELDED,
				duration: 99
			});
		} }
	},
	{
		id: "KNIGHT_TROJAN_KERNEL",
		name: "特洛伊内核",
		tier: "LEGENDARY",
		category: B,
		pieceType: d.KNIGHT,
		description: "终极骇客手段。当该棋子吃掉敌方的“车”或“后”时，收获一个一级兵加入你自己的库存中。",
		hooks: { onKill: ({ piece: e, victim: t, emit: n, isAISimulation: i }) => {
			if (t && (t.type === d.QUEEN || t.type === d.ROOK)) {
				n({
					type: "MODIFY_RESERVE",
					color: e.color,
					pieceType: d.PAWN,
					amount: 1
				});
				const t = Date.now();
				n({
					type: "ADD_TO_ROSTER",
					piece: {
						id: `bribe-${t}`,
						uid: `u-${t}`,
						type: d.PAWN,
						color: e.color,
						level: 1,
						skills: [],
						statuses: [],
						maxSlots: 1,
						equippedItems: []
					}
				}), i || Y.emit(q, {
					key: "knight_kills_heavy",
					value: 1,
					isLifetimeOnly: !0
				});
			}
		} }
	},
	{
		id: "KNIGHT_CHARGE",
		name: "冲锋",
		tier: "RARE",
		category: B,
		pieceType: d.KNIGHT,
		description: "马跳跃吃子时，会对目标周围 1 格的敌方兵造成 1 回合冻结。",
		hooks: { onKill: ({ board: e, r: t, c: n, piece: i, emit: a }) => {
			for (let r = -1; r <= 1; r++) for (let s = -1; s <= 1; s++) {
				const o = t + r, c = n + s;
				if (V.isValidPos(o, c)) {
					const t = e[o][c];
					t && t.color !== i.color && t.type === d.PAWN && a({
						type: "ADD_STATUS",
						pos: {
							r: o,
							c
						},
						statusId: _.FROZEN,
						duration: 2
					});
				}
			}
		} }
	},
	{
		id: "KNIGHT_FULL_DUPLEX",
		name: "即插即用",
		tier: "EPIC",
		category: B,
		pieceType: d.KNIGHT,
		description: "当部署该棋子直接上场后，本回合不结束，你可以立即再对场上的任意己方棋子执行一次“移动”操作。",
		hooks: { onDeploy: ({ piece: e, emit: t }) => {
			t({
				type: "SET_EXTRA_MOVE",
				active: !0
			}), t({
				type: "SHOW_TEXT",
				text: e.color === c ? "Plug and Play!" : "AI Plug and Play!",
				textKey: e.color === c ? "LOG_FULL_DUPLEX" : "LOG_FULL_DUPLEX_AI",
				style: "system"
			});
		} }
	},
	{
		id: "KNIGHT_CHAIN",
		name: "连锁闪电",
		tier: "LEGENDARY",
		category: B,
		pieceType: d.KNIGHT,
		description: "如果落点有敌方子力，吃掉后本回合不结束，该棋子可立刻再次行动（无视网络连接）。",
		hooks: { onKill: ({ piece: e, r: t, c: n, emit: i }) => {
			i({
				type: "SET_EXTRA_MOVE",
				active: !0
			}), i({
				type: "UPDATE_METADATA",
				updates: { lockedActionUid: e.uid }
			}), i({
				type: "SET_UI_SELECTION",
				pos: {
					r: t,
					c: n
				},
				uid: e.uid ?? null
			}), i({
				type: "SHOW_TEXT",
				text: e.color === c ? "Chain Jump!" : "AI Chain Jump!",
				textKey: e.color === c ? "LOG_CHAIN_JUMP" : "LOG_CHAIN_JUMP_AI",
				style: "system"
			});
		} }
	},
	{
		id: "KNIGHT_MIRAGE",
		name: "幻影移形",
		tier: "RARE",
		category: B,
		pieceType: d.KNIGHT,
		description: "被吃掉时，如果周围 2 格内有己方兵，则与其交换，兵代替马消失。",
		hooks: { onDeath: ({ piece: e, board: t, r: n, c: i, emit: a, cancelAction: r }) => {
			let s = null, o = null;
			for (let c = -2; c <= 2; c++) {
				for (let a = -2; a <= 2; a++) {
					const r = n + c, l = i + a;
					if (V.isValidPos(r, l)) {
						const n = t[r][l];
						if (n && n.color === e.color && n.type === d.PAWN) {
							s = {
								r,
								c: l
							}, o = n;
							break;
						}
					}
				}
				if (s) break;
			}
			s && o && (r?.(), a({
				type: "REMOVE_PIECE",
				pos: {
					r: n,
					c: i
				}
			}), a({
				type: "REMOVE_PIECE",
				pos: s
			}), a({
				type: "SPAWN",
				pos: s,
				piece: e
			}), a({
				type: "SPAWN",
				pos: {
					r: n,
					c: i
				},
				piece: o
			}), a({
				type: "KILL",
				pos: {
					r: n,
					c: i
				},
				targetId: o.id
			}), a({
				type: "SHOW_TEXT",
				text: "Mirage Substitute",
				textKey: "LOG_MIRAGE_DEATH",
				style: "system"
			}));
		} }
	},
	{
		id: "KNIGHT_MIDAS_TOUCH",
		name: "黄金铁蹄",
		tier: "LEGENDARY",
		category: B,
		pieceType: d.KNIGHT,
		description: "跳跃进入敌方领地或敌方控制区时产生金币（根据距离）。单关收益有上限。吃掉车/后可获得装备。",
		hooks: {
			onAfterMove: ({ from: e, r: t, c: n, piece: i, board: a, emit: r, metadata: s }) => {
				if (!e) return;
				const o = i.color === c ? t < 4 : t > 3, { control: d } = de(a, i.color === c ? l : c, s), E = d[t][n];
				if (!o && !E) return;
				const u = i.metadata?.levelGoldEarned ?? 0;
				if (u >= 40) return;
				const m = Math.abs(t - e.r) + Math.abs(n - e.c), _ = Math.min(m, 40 - u);
				_ <= 0 || (r({
					type: "SPAWN",
					pos: {
						r: t,
						c: n
					},
					piece: {
						...i,
						metadata: {
							...i.metadata,
							levelGoldEarned: u + _
						}
					}
				}), i.color === c && r({
					type: "MODIFY_GOLD",
					amount: _,
					reason: "MIDAS_TOUCH"
				}));
			},
			onKill: ({ victim: e, piece: t, emit: n, prng: i, equipments: a, maxEquipments: r }) => {
				if (!e || e.type !== d.QUEEN && e.type !== d.ROOK || t.color !== c) return;
				if ((a?.length ?? 0) >= (r ?? Infinity)) return void n({
					type: "SHOW_TEXT",
					text: "Equipment bag is full",
					textKey: "LOG_MIDAS_BAG_FULL",
					style: "danger"
				});
				const s = Le.filter((e) => e.category === F && !e.isInternal);
				if (0 === s.length || !i) return;
				const o = s[Math.floor(i.next() * s.length)];
				n({
					type: "ADD_ITEM",
					item: {
						id: `eq-${Ie()}`,
						type: "EQUIPMENT",
						name: o.name,
						desc: "黄金铁蹄战利品",
						effectId: o.id,
						tier: o.tier
					}
				}), n({
					type: "SHOW_TEXT",
					text: `Loot: ${o.name}`,
					textKey: "LOG_MIDAS_LOOT",
					textParams: { name: o.name },
					style: "gold"
				});
			}
		}
	},
	{
		id: "KNIGHT_SABOTAGE",
		name: "破坏",
		tier: "RARE",
		category: B,
		pieceType: d.KNIGHT,
		description: "马跳跃落点相邻 1 格内的敌方陷阱和地块效果被销毁。",
		hooks: { onAfterMove: ({ r: e, c: t, piece: n, metadata: i, emit: a }) => {
			if (i && i.squares) for (let r = -1; r <= 1; r++) for (let s = -1; s <= 1; s++) {
				const o = e + r, c = t + s, l = `${o},${c}`, d = i.squares[l];
				d && d.length > 0 && d.forEach((e) => {
					const t = e.metadata?.ownerColor;
					void 0 !== t && t === n.color || a({
						type: "REMOVE_SQUARE",
						pos: {
							r: o,
							c
						},
						statusId: e.id
					});
				});
			}
		} }
	},
	{
		id: "KNIGHT_TRAMPLE",
		name: "践踏",
		tier: "RARE",
		category: B,
		pieceType: d.KNIGHT,
		description: "跳跃过程中经过的敌方棋子，有 50% 概率被冻结 1 回合。",
		hooks: { onAfterMove: ({ board: e, from: t, r: n, c: i, piece: a, emit: r, prng: s }) => {
			if (!t || !s) return;
			const o = [], c = n - t.r, l = i - t.c;
			if (Math.abs(c) > Math.abs(l)) {
				for (let e = 1; e <= Math.abs(c); e++) o.push({
					r: t.r + Math.sign(c) * e,
					c: t.c
				});
				o.push({
					r: n,
					c: t.c + l
				});
			} else {
				for (let e = 1; e <= Math.abs(l); e++) o.push({
					r: t.r,
					c: t.c + Math.sign(l) * e
				});
				o.push({
					r: t.r + c,
					c: i
				});
			}
			o.forEach((t) => {
				if (t.r === n && t.c === i) return;
				const o = e[t.r]?.[t.c];
				o && o.color !== a.color && s.next() < .5 && (r({
					type: "ADD_STATUS",
					pos: t,
					statusId: _.FROZEN,
					duration: 2
				}), r({
					type: "SHOW_TEXT",
					text: "Trample",
					textKey: "LOG_TRAMPLE",
					style: "system",
					pos: t
				}));
			});
		} }
	},
	{
		id: "KNIGHT_GHOST",
		name: "离线协议",
		tier: "RARE",
		category: B,
		pieceType: d.KNIGHT,
		description: "该骑士免疫冻结状态，断网时仍可移动。",
		modifiers: { bypassFrozen: () => !0 }
	},
	{
		id: "KNIGHT_HIT_AND_RUN",
		name: "回旋弹射",
		tier: "EPIC",
		category: B,
		pieceType: d.KNIGHT,
		description: "主动：不发生位移。掷出飞刃击杀马步（L型）范围内的一名敌军（不可选择国王）。飞刃随后会自动弹射，连带击杀该目标相邻（十字方向）的另一名随机敌军。冷却 3 回合。",
		range: {
			type: "custom",
			radius: 0,
			customOffsets: [
				{
					r: -2,
					c: -1
				},
				{
					r: -2,
					c: 1
				},
				{
					r: -1,
					c: -2
				},
				{
					r: -1,
					c: 2
				},
				{
					r: 1,
					c: -2
				},
				{
					r: 1,
					c: 2
				},
				{
					r: 2,
					c: -1
				},
				{
					r: 2,
					c: 1
				}
			]
		},
		activeSpec: {
			targeting: "target",
			cooldownKey: "boomerangCd",
			getAlternatives: (e, t, n, i) => {
				const a = [];
				return [
					[-2, -1],
					[-2, 1],
					[-1, -2],
					[-1, 2],
					[1, -2],
					[1, 2],
					[2, -1],
					[2, 1]
				].forEach(([r, s]) => {
					const o = t + r, c = n + s;
					if (o >= 0 && o < 8 && c >= 0 && c < 8) {
						const t = e[o][c];
						t && t.color !== i.color && t.type !== d.KING && a.push({
							pos: {
								r: o,
								c
							},
							value: {
								r: o,
								c
							}
						});
					}
				}), a;
			},
			getAoE: (e, t, n, i, a) => a ? [{
				r: a.r,
				c: a.c
			}] : [],
			execute: (e, t, n, i, a, r, s, o) => {
				if (!((i.metadata?.boomerangCd || 0) > 0) && a) {
					r({
						type: "UPDATE_ROSTER_PIECE",
						pieceUid: i.uid,
						updates: { metadata: {
							...i.metadata,
							boomerangCd: 3
						} }
					}), r({
						type: "KILL",
						pos: a
					}), r({
						type: "SHOW_TEXT",
						text: "Boomerang!",
						textKey: "LOG_BOOMERANG",
						style: "danger",
						pos: a
					});
					const t = [
						[-1, 0],
						[1, 0],
						[0, -1],
						[0, 1]
					], n = [];
					for (const [r, s] of t) {
						const t = a.r + r, o = a.c + s;
						if (t >= 0 && t < 8 && o >= 0 && o < 8) {
							const a = e[t][o];
							a && a.color !== i.color && a.type !== d.KING && n.push({
								r: t,
								c: o
							});
						}
					}
					if (n.length > 0) {
						const e = n[Math.floor((o || { next: Math.random }).next() * n.length)];
						r({
							type: "KILL",
							pos: e
						}), r({
							type: "SHOW_TEXT",
							text: "Ricochet!",
							textKey: "LOG_RICOCHET",
							style: "gold",
							pos: e
						});
					}
				}
			}
		},
		hooks: { onTurnStart: ({ piece: e, emit: t }) => {
			(e.metadata?.boomerangCd || 0) > 0 && t({
				type: "UPDATE_ROSTER_PIECE",
				pieceUid: e.uid,
				updates: { metadata: {
					...e.metadata,
					boomerangCd: e.metadata.boomerangCd - 1
				} }
			});
		} }
	},
	{
		id: "KNIGHT_GRAVITY_WELL",
		name: "引力场",
		tier: "EPIC",
		category: B,
		pieceType: d.KNIGHT,
		description: "移动后对周围敌军施加冻结。",
		range: {
			type: "chebyshev",
			radius: 1
		},
		hooks: { onAfterMove: ({ board: e, r: t, c: n, piece: i, emit: a }) => {
			[
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1],
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			].forEach(([r, s]) => {
				const o = t + r, c = n + s;
				if (o >= 0 && o < 8 && c >= 0 && c < 8) {
					const t = e[o][c];
					t && t.color !== i.color && t.type !== d.KING && a({
						type: "ADD_STATUS",
						pos: {
							r: o,
							c
						},
						statusId: _.FROZEN,
						duration: 2
					});
				}
			});
		} }
	},
	{
		id: "KNIGHT_TROJAN",
		name: "木马",
		tier: "EPIC",
		category: B,
		pieceType: d.KNIGHT,
		description: "死亡时生成两个兵作为殿后。",
		hooks: { onDeath: ({ piece: e, board: t, r: n, c: i, emit: a, prng: r, metadata: s }) => {
			if (!r) return;
			const o = e.color === c ? l : c, E = V.findPieces(t, (e) => e.type === d.KING && e.color === o)[0], u = e.color === c ? -1 : 1, m = (e, t) => !!E && e + u === E.r && 1 === Math.abs(t - E.c), { networked: _ } = de(t, e.color, s), A = [], p = [], O = /* @__PURE__ */ new Set();
			for (let c = 1; c <= 7; c++) {
				const e = [];
				for (let a = -c; a <= c; a++) for (let r = -c; r <= c; r++) {
					if (Math.max(Math.abs(a), Math.abs(r)) !== c) continue;
					const s = n + a, o = i + r;
					if (!V.isValidPos(s, o)) continue;
					const l = `${s},${o}`;
					O.has(l) || (O.add(l), t[s][o] || m(s, o) || e.push({
						r: s,
						c: o
					}));
				}
				if (e.sort(() => r.next() - .5), e.forEach((e) => {
					_[e.r][e.c] ? A.push(e) : p.push(e);
				}), A.length >= 2) break;
			}
			const h = [...A, ...p];
			let R = 0;
			for (const c of h) {
				if (R >= 2) break;
				a({
					type: "SPAWN",
					pos: c,
					piece: {
						id: Ie(),
						uid: `trojan-pawn-${Ie()}`,
						type: d.PAWN,
						color: e.color,
						level: 1,
						skills: [],
						learnedSkills: [],
						statuses: [],
						maxSlots: 1,
						equippedItems: []
					}
				}), R += 1;
			}
		} }
	},
	{
		id: "KNIGHT_RIFT",
		name: "时空裂隙",
		tier: "LEGENDARY",
		category: B,
		pieceType: d.KNIGHT,
		description: "跳跃后，将起跳点相邻的一名【非王】友军传送到落点相邻的空格。",
		hooks: { onAfterMove: ({ board: e, from: t, r: n, c: i, piece: a, emit: r, prng: s, isAISimulation: o }) => {
			if (!t || !s) return;
			if (e[n][i]?.uid !== a.uid) return;
			let l = null;
			const E = [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1],
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			];
			for (const [c, u] of E) {
				const n = t.r + c, i = t.c + u;
				if (V.isValidPos(n, i)) {
					const t = e[n][i];
					if (t && t.color === a.color && t.type !== d.KING && t.uid !== a.uid) {
						l = {
							r: n,
							c: i
						};
						break;
					}
				}
			}
			if (l) {
				const t = E.sort(() => s.next() - .5);
				for (const [s, d] of t) {
					const t = n + s, E = i + d;
					if (V.isValidPos(t, E) && !e[t][E]) {
						r({
							type: "MOVE",
							from: l,
							to: {
								r: t,
								c: E
							}
						}), r({
							type: "SHOW_TEXT",
							text: "Rift Teleport",
							textKey: "LOG_RIFT_TELEPORT",
							style: "system",
							pos: {
								r: t,
								c: E
							}
						}), a.color !== c || o || Y.emit(q, {
							key: "swapOrTeleport",
							value: 1,
							isLifetimeOnly: !0
						});
						break;
					}
				}
			}
		} }
	},
	{
		id: "EQ_PLUNDER_HOOVES",
		name: "掠夺马蹄",
		tier: "RARE",
		category: F,
		pieceType: d.KNIGHT,
		description: "跳跃经过敌方单位上方时，窃取每一个敌方 2 金币。",
		hooks: { onAfterMove: ({ board: e, from: t, r: n, c: i, piece: a, emit: r }) => {
			if (!t || a.color !== c) return;
			const s = [], o = n - t.r, l = i - t.c;
			if (Math.abs(o) > Math.abs(l)) {
				for (let e = 1; e <= Math.abs(o); e++) s.push({
					r: t.r + Math.sign(o) * e,
					c: t.c
				});
				s.push({
					r: n,
					c: t.c + l
				});
			} else {
				for (let e = 1; e <= Math.abs(l); e++) s.push({
					r: t.r,
					c: t.c + Math.sign(l) * e
				});
				s.push({
					r: t.r + o,
					c: i
				});
			}
			s.forEach((t) => {
				if (t.r === n && t.c === i) return;
				const s = e[t.r]?.[t.c];
				s && s.color !== a.color && (r({
					type: "MODIFY_GOLD",
					amount: 2,
					reason: "PLUNDER"
				}), r({
					type: "SHOW_TEXT",
					text: "+2 🪙",
					textKey: "LOG_GOLD_PLUS",
					textParams: { amount: 2 },
					style: "gold",
					pos: t
				}));
			});
		} }
	},
	{
		id: "EQ_GHOST_RIDE",
		name: "幽灵骑行",
		tier: "EPIC",
		category: F,
		pieceType: d.KNIGHT,
		description: "跳跃经过的所有敌方单位有 30% 概率被随机传送。",
		hooks: { onAfterMove: ({ board: e, from: t, r: n, c: i, piece: a, emit: r, prng: s, isAISimulation: o }) => {
			if (!t || !s) return;
			if (e[n][i]?.uid !== a.uid) return;
			const l = [], d = n - t.r, E = i - t.c;
			if (Math.abs(d) > Math.abs(E)) {
				for (let e = 1; e <= Math.abs(d); e++) l.push({
					r: t.r + Math.sign(d) * e,
					c: t.c
				});
				l.push({
					r: n,
					c: t.c + E
				});
			} else {
				for (let e = 1; e <= Math.abs(E); e++) l.push({
					r: t.r,
					c: t.c + Math.sign(E) * e
				});
				l.push({
					r: t.r + d,
					c: i
				});
			}
			l.forEach((t) => {
				if (t.r === n && t.c === i) return;
				const l = e[t.r]?.[t.c];
				if (l && l.color !== a.color && !Bn.isSteady(l, e, t.r, t.c) && s.next() < .3) {
					const n = [];
					if (e.forEach((e, t) => e.forEach((e, i) => {
						e || n.push({
							r: t,
							c: i
						});
					})), n.length > 0) {
						const e = n[Math.floor(s.next() * n.length)];
						r({
							type: "MOVE",
							from: t,
							to: e,
							targetId: l.id
						}), r({
							type: "SHOW_TEXT",
							text: "Ghost Teleport",
							textKey: "LOG_GHOST_RIDE",
							style: "system",
							pos: e
						}), a.color !== c || o || Y.emit(q, {
							key: "swapOrTeleport",
							value: 1,
							isLifetimeOnly: !0
						});
					}
				}
			});
		} }
	},
	{
		id: "KNIGHT_SUPLEX",
		name: "战术投掷",
		tier: "EPIC",
		category: B,
		pieceType: d.KNIGHT,
		description: "主动：将相邻十字方向的一名敌军从头顶向后扔出，砸向背后对称位置。若目标格有棋子则同归于尽。",
		range: {
			type: "cross",
			radius: 1
		},
		activeSpec: {
			targeting: "target",
			getAlternatives: (e, t, n, i) => {
				const a = [];
				for (const [r, s] of [
					[-1, 0],
					[1, 0],
					[0, -1],
					[0, 1]
				]) {
					const o = t + r, c = n + s;
					if (!V.isValidPos(o, c)) continue;
					const l = e[o][c];
					l && l.color !== i.color && !Bn.isSteady(l, e, o, c) && a.push({
						pos: {
							r: o,
							c
						},
						value: {
							r: o,
							c,
							dr: r,
							dc: s
						}
					});
				}
				return a;
			},
			getAoE: (e, t, n, i, a) => a ? [{
				r: t - a.dr,
				c: n - a.dc
			}] : [],
			execute: (e, t, n, i, a, r) => {
				if (!a) return;
				const s = e[a.r][a.c];
				if (!s) return;
				if (Bn.isSteady(s, e, a.r, a.c)) return;
				const o = t - a.dr, c = n - a.dc;
				r({
					type: "PLAY_SOUND",
					soundId: "FLING"
				}), V.isValidPos(o, c) ? e[o][c] ? (r({
					type: "KILL",
					pos: {
						r: a.r,
						c: a.c
					}
				}), r({
					type: "KILL",
					pos: {
						r: o,
						c
					}
				}), r({
					type: "SHOW_TEXT",
					text: "过肩摔同归于尽！",
					textKey: "LOG_SUPLEX_COLLISION",
					style: "danger",
					pos: {
						r: o,
						c
					}
				})) : (r({
					type: "MOVE",
					from: {
						r: a.r,
						c: a.c
					},
					to: {
						r: o,
						c
					}
				}), r({
					type: "SHOW_TEXT",
					text: "战术投掷！",
					textKey: "LOG_SUPLEX",
					style: "system",
					pos: {
						r: o,
						c
					}
				})) : (r({
					type: "KILL",
					pos: {
						r: a.r,
						c: a.c
					}
				}), r({
					type: "SHOW_TEXT",
					text: "撞墙！",
					textKey: "LOG_SUPLEX_WALL",
					style: "danger",
					pos: {
						r: a.r,
						c: a.c
					}
				}));
			}
		}
	}
], fe = [
	{
		id: "PAWN_PATROL",
		name: "巡逻",
		tier: "COMMON",
		category: B,
		pieceType: d.PAWN,
		description: "允许兵水平向左或向右移动 1 格（不可吃子）。",
		tags: ["MOVEMENT"],
		isUnique: !0,
		modifiers: { movement: (e, t) => {
			const { board: n, r: i, c: a, piece: r, isControlSquares: s } = e;
			return [a - 1, a + 1].forEach((e) => {
				if (e >= 0 && e < 8) {
					const a = n[i][e];
					(!a || s && a.color === r.color) && t.push({
						r: i,
						c: e
					});
				}
			}), t;
		} }
	},
	{
		id: "PAWN_CHARGER",
		name: "冲锋者",
		tier: "COMMON",
		category: B,
		pieceType: d.PAWN,
		description: "允许兵在任何位置向前直线移动两格（不可吃子，不可越子）。",
		tags: ["MOVEMENT"],
		isUnique: !0,
		modifiers: { movement: (e, t) => {
			const { board: n, r: i, c: a, piece: r, isControlSquares: s } = e, o = r.color === c ? -1 : 1, l = i + 2 * o;
			if (l >= 0 && l < 8 && !n[i + o][a]) {
				const e = n[l][a];
				(!e || s && e.color === r.color) && t.push({
					r: l,
					c: a
				});
			}
			return t;
		} }
	},
	{
		id: "PAWN_FRONTAL_SPIKE",
		name: "锋刃",
		tier: "COMMON",
		category: B,
		pieceType: d.PAWN,
		description: "允许兵向前直行移动 1 格时吃子。",
		modifiers: { movement: (e, t) => {
			const { board: n, r: i, c: a, piece: r, isControlSquares: s } = e, o = i + (r.color === c ? -1 : 1);
			if (o >= 0 && o < 8) {
				const e = n[o][a];
				(e && e.color !== r.color || s && e && e.color === r.color) && t.push({
					r: o,
					c: a
				});
			}
			return t;
		} }
	},
	{
		id: "PAWN_BACKSTEP",
		name: "后撤步",
		tier: "COMMON",
		category: B,
		pieceType: d.PAWN,
		description: "允许向左后或右后方斜向退一格（不吃子）。",
		tags: ["MOVEMENT"],
		isUnique: !0,
		modifiers: { movement: (e, t) => {
			const { board: n, r: i, c: a, piece: r, isControlSquares: s } = e, o = i + (r.color === c ? 1 : -1);
			return o >= 0 && o < 8 && [a - 1, a + 1].forEach((e) => {
				if (e >= 0 && e < 8) {
					const i = n[o][e];
					(!i || s && i.color === r.color) && t.push({
						r: o,
						c: e
					});
				}
			}), t;
		} }
	},
	{
		id: "PAWN_RESOURCEFUL",
		name: "补给包",
		tier: "COMMON",
		category: B,
		pieceType: d.PAWN,
		description: "被吃掉时，有 30% 概率随机回到库存中。",
		hooks: { onDeath: ({ piece: e, emit: t, prng: n, isAISimulation: i }) => {
			if (n) n.next() < .3 && (t({
				type: "MODIFY_RESERVE",
				color: e.color,
				pieceType: d.PAWN,
				amount: 1
			}), e.uid && t({
				type: "UNDEPLOY_PIECE",
				uid: e.uid
			}));
		} }
	},
	{
		id: "PAWN_VENGEANCE",
		name: "牺牲闪击",
		tier: "COMMON",
		category: B,
		pieceType: d.PAWN,
		description: "被吃掉时，随机冻结对方一名非王棋子 2 回合。",
		hooks: { onDeath: ({ board: e, piece: t, emit: n, prng: i }) => {
			const a = V.findPieces(e, (e) => e.color !== t.color && e.type !== d.KING);
			if (a.length > 0 && i) {
				const e = a[Math.floor(i.next() * a.length)];
				n({
					type: "ADD_STATUS",
					pos: {
						r: e.r,
						c: e.c
					},
					statusId: _.FROZEN,
					duration: 2
				}), n({
					type: "SHOW_TEXT",
					text: "Vengeance Strike",
					textKey: "LOG_VENGEANCE_STRIKE",
					style: "danger",
					pos: {
						r: e.r,
						c: e.c
					}
				});
			}
		} }
	},
	{
		id: "PAWN_ASSASSIN",
		name: "刺客代码",
		tier: "RARE",
		category: B,
		pieceType: d.PAWN,
		description: "吃掉敌方的“后”或“车”时，在原地进化为随机高级棋子。",
		hooks: { onKill: ({ piece: e, victim: t, r: n, c: i, emit: a, prng: r }) => {
			if (t && (t.type === d.QUEEN || t.type === d.ROOK) && r) {
				const t = [
					d.KNIGHT,
					d.BISHOP,
					d.ROOK
				], s = t[Math.floor(r.next() * t.length)], o = e.skills.filter((e) => "PAWN_ASSASSIN" !== e), c = e.learnedSkills?.filter((e) => "PAWN_ASSASSIN" !== e) || [];
				a({
					type: "SPAWN",
					pos: {
						r: n,
						c: i
					},
					piece: {
						...e,
						type: s,
						level: 1,
						skills: o,
						learnedSkills: c
					}
				}), a({
					type: "UPDATE_ROSTER_PIECE",
					pieceUid: e.uid,
					updates: {
						type: s,
						level: 1,
						skills: o,
						learnedSkills: c
					}
				}), a({
					type: "SHOW_TEXT",
					text: "Assassin Evolution!",
					textKey: "LOG_ASSASSIN_EVOLVE",
					style: "gold",
					pos: {
						r: n,
						c: i
					}
				});
			}
		} }
	},
	{
		id: "PAWN_PROMOTE",
		name: "晉階之路",
		tier: "RARE",
		category: B,
		pieceType: d.PAWN,
		description: "每吃掉一个敌方子力，等级 +1；达到 5 级后再次吃子时进化。",
		modifiers: { interceptExp: () => 0 },
		hooks: { onKill: ({ piece: e, r: t, c: n, emit: i, prng: a }) => {
			const r = (e.metadata?.currentCaptures || 0) + 1;
			if (r >= 5) {
				const r = [
					d.KNIGHT,
					d.BISHOP,
					d.ROOK
				], s = r[Math.floor((a ? a.next() : Math.random()) * r.length)], o = e.skills.filter((e) => "PAWN_PROMOTE" !== e), c = e.learnedSkills?.filter((e) => "PAWN_PROMOTE" !== e) || [], l = {
					...e,
					type: s,
					level: 1,
					maxSlots: 1,
					skills: o,
					learnedSkills: c,
					metadata: {
						...e.metadata,
						currentCaptures: 0,
						targetCaptures: void 0
					}
				};
				i({
					type: "SPAWN",
					pos: {
						r: t,
						c: n
					},
					piece: l
				}), i({
					type: "UPDATE_ROSTER_PIECE",
					pieceUid: e.uid,
					updates: {
						type: s,
						level: 1,
						maxSlots: 1,
						skills: o,
						learnedSkills: c,
						metadata: l.metadata
					}
				}), i({
					type: "SHOW_TEXT",
					text: "Pawn Evolution!",
					textKey: "LOG_PAWN_EVOLVE",
					style: "gold",
					pos: {
						r: t,
						c: n
					}
				});
			} else {
				const a = (e.level || 1) + 1;
				i({
					type: "UPDATE_ROSTER_PIECE",
					pieceUid: e.uid,
					updates: {
						level: a,
						metadata: {
							...e.metadata,
							currentCaptures: r
						}
					}
				}), i({
					type: "SHOW_TEXT",
					text: "LV UP!",
					textKey: "LOG_LEVEL_UP",
					style: "gold",
					pos: {
						r: t,
						c: n
					}
				});
			}
		} }
	},
	{
		id: "PAWN_SIGNAL_TOWER",
		name: "信号塔",
		tier: "RARE",
		category: B,
		pieceType: d.PAWN,
		description: "即使断网自己不能移动，也会为周围 1 格的己方棋子提供网络连接。",
		range: {
			type: "chebyshev",
			radius: 1
		},
		tags: ["NETWORK"],
		isUnique: !0,
		modifiers: { networkSource: () => !0 }
	},
	{
		id: "PAWN_PHALANX",
		name: "兄弟会",
		tier: "RARE",
		category: B,
		pieceType: d.PAWN,
		description: "兵左边或右边有己方的兵时，自身免疫来自敌方兵或马的捕捉。",
		modifiers: { invulnerable: ({ board: e, r: t, c: n, piece: i }, a) => (n > 0 && e[t][n - 1]?.color === i.color && e[t][n - 1]?.type === d.PAWN || n < 7 && e[t][n + 1]?.color === i.color && e[t][n + 1]?.type === d.PAWN) && (a.type === d.PAWN || a.type === d.KNIGHT) }
	},
	{
		id: "PAWN_DETONATOR",
		name: "炸弹兵",
		tier: "RARE",
		category: B,
		pieceType: d.PAWN,
		description: "被吃掉时，炸毁周围 3x3 范围内的所有非王棋子。",
		hooks: { onDeath: ({ r: e, c: t, piece: n, victim: i, board: a, emit: r }) => {
			if (i && n.uid === i.uid) for (let s = -1; s <= 1; s++) for (let n = -1; n <= 1; n++) {
				const i = e + s, o = t + n;
				V.isValidPos(i, o) && a[i][o] && a[i][o]?.type !== d.KING && r({
					type: "KILL",
					pos: {
						r: i,
						c: o
					}
				});
			}
		} }
	},
	{
		id: "PAWN_UNSTABLE_CORE",
		name: "不可靠的炸弹兵",
		tier: "EPIC",
		category: B,
		pieceType: d.PAWN,
		description: "死亡必自爆(5x5)；吃子50%概率自爆并引发尸体连锁反应。不论敌我，毁灭一切。",
		hooks: {
			onDeath: (e) => {
				const { piece: t, victim: n } = e;
				n && t.uid === n.uid && ye(e.r, e.c, 1, e);
			},
			onKill: (e) => {
				const { r: t, c: n, piece: i, emit: a, prng: r } = e;
				r && r.next() < .5 && (a({
					type: "SHOW_TEXT",
					text: "Core Overloaded!",
					textKey: "LOG_CORE_OVERLOAD",
					style: "danger",
					pos: {
						r: t,
						c: n
					}
				}), a({
					type: "KILL",
					pos: {
						r: t,
						c: n
					},
					targetId: i.id
				}));
			}
		}
	},
	{
		id: "PAWN_RELAY",
		name: "中继站",
		tier: "EPIC",
		category: B,
		pieceType: d.PAWN,
		description: "该棋子的网络覆盖范围提升至 2 格。",
		range: {
			type: "chebyshev",
			radius: 2
		},
		modifiers: { networkRange: ({ r: e, c: t }) => {
			const n = [];
			for (let i = -2; i <= 2; i++) for (let a = -2; a <= 2; a++) 0 === i && 0 === a || e + i >= 0 && e + i < 8 && t + a >= 0 && t + a < 8 && n.push({
				r: e + i,
				c: t + a
			});
			return n;
		} }
	},
	{
		id: "PAWN_SACRIFICE",
		name: "牺牲契约",
		tier: "EPIC",
		category: B,
		pieceType: d.PAWN,
		description: "被吃掉时获得 2 次额外存档机会，并在王周围生成一个兵。",
		hooks: { onDeath: ({ piece: e, board: t, emit: n, prng: i }) => {
			n({
				type: "UPDATE_CONSTRAINTS",
				maxUndosOffset: 0,
				maxSavesOffset: 2
			}), n({
				type: "SHOW_TEXT",
				text: "+2 Saves",
				textKey: "LOG_SAVES_PLUS",
				textParams: { amount: 2 },
				style: "system"
			});
			const a = V.findPieces(t, (t) => t.type === d.KING && t.color === e.color)[0], r = a ? {
				r: a.r,
				c: a.c
			} : null;
			if (r && i) {
				const a = r, s = [
					[-1, -1],
					[-1, 0],
					[-1, 1],
					[0, -1],
					[0, 1],
					[-1, -1],
					[-1, 1],
					[1, -1],
					[1, 1]
				].sort(() => i.next() - .5);
				for (const [i, r] of s) {
					const s = a.r + i, o = a.c + r;
					if (V.isValidPos(s, o) && !t[s][o]) {
						n({
							type: "SPAWN",
							pos: {
								r: s,
								c: o
							},
							piece: {
								id: Ie(),
								type: d.PAWN,
								color: e.color,
								level: 1,
								skills: [],
								statuses: [],
								maxSlots: 1,
								equippedItems: []
							}
						});
						break;
					}
				}
			}
		} }
	},
	{
		id: "PAWN_INTERLOCK",
		name: "联锁装甲",
		tier: "EPIC",
		category: B,
		pieceType: d.PAWN,
		description: "左右 1 格有友军时，无法被对方的“后”或“车”吃掉。",
		modifiers: { invulnerable: ({ board: e, r: t, c: n, piece: i }, a) => (n > 0 && e[t][n - 1]?.color === i.color || n < 7 && e[t][n + 1]?.color === i.color) && (a.type === d.QUEEN || a.type === d.ROOK) }
	},
	{
		id: "PAWN_PARASITE",
		name: "寄生算法",
		tier: "EPIC",
		category: B,
		pieceType: d.PAWN,
		description: "移动到敌方棋子相邻时，使其下回合无法移动。",
		hooks: { onAfterMove: ({ board: e, piece: t, r: n, c: i, emit: a }) => {
			[
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1],
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			].forEach(([r, s]) => {
				const o = n + r, c = i + s;
				if (V.isValidPos(o, c)) {
					const n = e[o][c];
					n && n.color !== t.color && n.type !== d.KING && a({
						type: "ADD_STATUS",
						pos: {
							r: o,
							c
						},
						statusId: _.FROZEN,
						duration: 2
					});
				}
			});
		} }
	},
	{
		id: "PAWN_VANGUARD",
		name: "先锋",
		tier: "RARE",
		category: B,
		pieceType: d.PAWN,
		description: "该兵只要处于敌方半场，即视为“永远联网”。",
		modifiers: { alwaysNetworked: ({ r: e, piece: t }) => t.color === c ? e < 4 : e > 3 }
	},
	{
		id: "PAWN_TRAITOR",
		name: "背叛者",
		tier: "EPIC",
		category: B,
		pieceType: d.PAWN,
		description: "被吃掉时，有 50% 概率将攻击者（非王）变为你的颜色并施加“被策反”状态 1 回合。",
		hooks: { onDeath: ({ attacker: e, attackerPos: t, piece: n, emit: i, prng: a }) => {
			e && t && e.type !== d.KING && a && a.next() < .5 && i({
				type: "SPAWN",
				pos: t,
				piece: {
					...e,
					color: n.color,
					statuses: [...e.statuses || [], {
						id: _.BETRAYED,
						duration: 2,
						originalColor: e.color
					}]
				}
			});
		} }
	},
	{
		id: "PAWN_SWARM",
		name: "兵链广播",
		tier: "LEGENDARY",
		category: B,
		pieceType: d.PAWN,
		description: "只要有一个联网，全场所有的兵均视为已联网。"
	},
	{
		id: "PAWN_OMEGA_MIRROR",
		name: "终局镜像",
		tier: "LEGENDARY",
		category: B,
		pieceType: d.PAWN,
		description: "模拟其网络连线上己方高级棋子的移动和攻击方式。",
		modifiers: { movement: ({ board: e, piece: t, r: n, c: i, metadata: a, networkedMap: r, isControlSquares: s }, o) => {
			if (!r) return o;
			if (!r[n][i]) return o;
			const c = [];
			return V.findPieces(e, (e, n, i) => e.color === t.color && e.type !== d.PAWN && e.type !== d.KING && !!r?.[n]?.[i]).forEach(({ r: o, c: l }) => {
				(function(e, t, n, i, a, r) {
					return se.getPseudoLegalMoves(e, t, n, i, a, r);
				})(e, o, l, a, r).forEach((a) => {
					const r = a.r - o, d = a.c - l, E = n + r, u = i + d;
					if (V.isValidPos(E, u)) {
						let a = !1;
						const o = Math.abs(r), l = Math.abs(d);
						if ((0 === r || 0 === d || o === l) && Math.max(o, l) > 1) {
							const t = Math.sign(r), s = Math.sign(d), c = Math.max(o, l);
							for (let r = 1; r < c; r++) {
								const o = i + r * s;
								if (e[n + r * t][o]) {
									a = !0;
									break;
								}
							}
						}
						if (!a) {
							const n = e[E][u];
							n && n.color === t.color && !s || c.push({
								r: E,
								c: u
							});
						}
					}
				});
			}), [...o, ...c];
		} }
	},
	{
		id: "PAWN_SATELLITE",
		name: "卫星链路",
		tier: "LEGENDARY",
		category: B,
		pieceType: d.PAWN,
		description: "永远不需要网络连接，且国王死后可作为代理王（proxy king）。",
		modifiers: {
			alwaysNetworked: () => !0,
			proxyKing: () => !0
		},
		tags: ["GLOBAL"],
		hooks: { onDeath: (e) => {
			const { piece: t, ownerPos: n, subject: i, r: a, c: r, emit: s, cancelAction: o } = e;
			i && i.type === d.KING && i.color === t.color && n && (o?.(), s({
				type: "REMOVE_PIECE",
				pos: {
					r: a,
					c: r
				}
			}), s({
				type: "UPDATE_ROSTER_PIECE",
				pieceUid: t.uid,
				updates: {
					type: d.KING,
					level: 1,
					skills: [],
					learnedSkills: [],
					traits: [],
					maxSlots: 3,
					equippedItems: [],
					metadata: {}
				}
			}), s({
				type: "REMOVE_PIECE",
				pos: n
			}), s({
				type: "SPAWN",
				pos: n,
				piece: {
					id: Ie(),
					uid: t.uid,
					type: d.KING,
					color: t.color,
					level: 1,
					skills: [],
					learnedSkills: [],
					traits: [],
					statuses: [],
					maxSlots: 3,
					equippedItems: [],
					metadata: {}
				}
			}), s({
				type: "SHOW_TEXT",
				text: "卫星唤醒：新皇登基！",
				textKey: "LOG_SATELLITE_ASCENSION",
				style: "gold",
				pos: n
			}));
		} }
	},
	{
		id: "EQ_HIVE_CORE",
		name: "动力核心",
		tier: "EPIC",
		category: F,
		pieceType: d.PAWN,
		description: "只要该兵连通，其移动力增加 1 格（可前移 2 格）。",
		modifiers: { movement: (e, t) => {
			const { board: n, piece: i, r: a, c: r, networkedMap: s, isControlSquares: o } = e;
			if (!s) return t;
			if (!s[a][r]) return t;
			const l = i.color === c ? -1 : 1, d = a + 2 * l;
			if (d >= 0 && d < 8 && !n[a + l][r]) {
				const e = n[d][r];
				(!e || o && e.color === i.color) && t.push({
					r: d,
					c: r
				});
			}
			return t;
		} }
	},
	{
		id: "EQ_CHEAP_BOOSTER",
		name: "廉价增频器",
		tier: "RARE",
		category: F,
		pieceType: d.PAWN,
		description: "该兵的网络延伸距离提升至 3 格，但无法进行攻击（吃子）。",
		modifiers: {
			networkRange: ({ r: e, c: t }) => {
				const n = [];
				for (let i = -3; i <= 3; i++) for (let a = -3; a <= 3; a++) if (Math.abs(i) + Math.abs(a) <= 3) {
					const r = e + i, s = t + a;
					V.isValidPos(r, s) && n.push({
						r,
						c: s
					});
				}
				return n;
			},
			movement: ({ board: e, piece: t }, n) => n.filter((n) => {
				const i = e[n.r][n.c];
				return !i || i.color === t.color;
			})
		}
	},
	{
		id: "EQ_CHAIN_MINE",
		name: "连锁地雷",
		tier: "RARE",
		category: F,
		pieceType: d.PAWN,
		description: "被吃掉时，若周围 1 格有其他“兵”，触发连锁爆炸（3x3）。",
		hooks: { onDeath: ({ board: e, r: t, c: n, piece: i, victim: a, emit: r }) => {
			if (!a || i.uid !== a.uid) return;
			let s = !1;
			for (let c = -1; c <= 1 && !s; c++) for (let a = -1; a <= 1; a++) {
				if (0 === c && 0 === a) continue;
				const r = t + c, o = n + a;
				if (!V.isValidPos(r, o)) continue;
				const l = e[r][o];
				if (l && l.type === d.PAWN && l.uid !== i.uid) {
					s = !0;
					break;
				}
			}
			if (!s) return;
			const o = (t, n, i) => {
				const a = `${t},${n}`;
				if (!i.has(a)) {
					i.add(a);
					for (let a = -1; a <= 1; a++) for (let s = -1; s <= 1; s++) {
						const c = t + a, l = n + s;
						if (V.isValidPos(c, l)) {
							const t = e[c][l];
							t && t.type !== d.KING && (r({
								type: "KILL",
								pos: {
									r: c,
									c: l
								}
							}), t.type === d.PAWN && o(c, l, i));
						}
					}
				}
			};
			o(t, n, /* @__PURE__ */ new Set());
		} }
	}
];
function ye(e, t, n, i) {
	const a = i.metadata;
	if (a && (a.unstableCount = (a.unstableCount || 0) + 1, a.unstableCount > 10)) return;
	const { emit: r, board: s, prng: o } = i;
	for (let c = -2; c <= 2; c++) for (let a = -2; a <= 2; a++) {
		const l = e + c, E = t + a;
		if (!V.isValidPos(l, E) || 0 === c && 0 === a) continue;
		const u = s[l][E];
		if (u && u.type !== d.KING && (r({
			type: "KILL",
			pos: {
				r: l,
				c: E
			},
			targetId: u.id
		}), o)) {
			const e = .3 * n;
			o.next() < e && (r({
				type: "DELAY",
				duration: 100
			}), ye(l, E, e, i));
		}
	}
}
const Ge = [
	{
		id: "BLACK_HOLE",
		squares: ["VOID_ANCHOR"],
		count: 4,
		mirrorNeutral: !1,
		bargain: !0
	},
	{
		id: "OBSTACLES",
		squares: ["BARRICADE"],
		count: 4,
		mirrorNeutral: !0,
		bargain: !1
	},
	{
		id: "LASER_GRID",
		squares: ["SQUARE_LASER_GRID"],
		count: 8,
		mirrorNeutral: !1,
		bargain: !0
	},
	{
		id: "ANTI_PAWN_MINE",
		squares: ["ANTI_PAWN_MINE"],
		count: 4,
		mirrorNeutral: !1,
		bargain: !0
	},
	{
		id: "TIME_ANOMALY",
		squares: ["TIME_ANOMALY"],
		count: 2,
		mirrorNeutral: !0,
		bargain: !1
	},
	{
		id: "ICE_SLICK",
		squares: ["ICE_SLICK"],
		count: 6,
		mirrorNeutral: !0,
		bargain: !1
	},
	{
		id: "WORMHOLE",
		squares: ["WORMHOLE_A", "WORMHOLE_B"],
		count: 2,
		mirrorNeutral: !0,
		bargain: !1
	},
	{
		id: "MUD_SWAMP",
		squares: ["MUD_SWAMP"],
		count: 6,
		mirrorNeutral: !0,
		bargain: !1
	},
	{
		id: "CONVEYOR_BELT",
		squares: ["CONVEYOR_BELT"],
		count: 4,
		mirrorNeutral: !0,
		bargain: !1
	},
	{
		id: "OVERCLOCK_NODE",
		squares: ["OVERCLOCK_NODE"],
		count: 2,
		mirrorNeutral: !1,
		bargain: !1
	},
	{
		id: "DATA_VAULT",
		squares: ["DATA_VAULT"],
		count: 2,
		mirrorNeutral: !1,
		bargain: !1
	},
	{
		id: "SIGNAL_RELAY",
		squares: ["SIGNAL_RELAY"],
		count: 2,
		mirrorNeutral: !1,
		bargain: !1
	},
	{
		id: "FARADAY_CAGE",
		squares: ["FARADAY_CAGE"],
		count: 4,
		mirrorNeutral: !1,
		bargain: !1
	},
	{
		id: "BOSS_MASS_ERASURE",
		squares: ["BOSS_MASS_ERASURE"],
		count: 1,
		mirrorNeutral: !1,
		bargain: !0
	},
	{
		id: "SENTINEL",
		squares: [],
		count: 1,
		mirrorNeutral: !1,
		bargain: !0
	}
], Ce = (Ge.map((e) => e.id), Ge.filter((e) => e.mirrorNeutral).map((e) => e.id), Ge.filter((e) => e.bargain).map((e) => e.id), [
	{
		id: "SMOKE",
		name: "烟幕地块",
		isInternal: !0,
		category: w,
		tier: "COMMON",
		description: "地块上的棋子免疫1格以外的远程攻击。",
		modifiers: { invulnerable: ({ board: e, r: t, c: n }, i) => {
			const a = V.findPieces(e, (e) => e.id === i.id)[0], r = a ? a.r : i._lastPos?.r ?? -1, s = a ? a.c : i._lastPos?.c ?? -1;
			return -1 !== r && -1 !== s && Math.max(Math.abs(r - t), Math.abs(s - n)) > 1;
		} }
	},
	{
		id: "BISHOP_AFTERSHOCK_SQUARE",
		name: "余震区域",
		isInternal: !0,
		category: w,
		tier: "COMMON",
		description: "敌方无法在此部署单位。",
		modifiers: { blockDeployment: (e) => {
			const t = (e.metadata?.squares?.[`${e.r},${e.c}`] || []).find((e) => "BISHOP_AFTERSHOCK_SQUARE" === e.id)?.metadata?.ownerColor;
			return void 0 !== t && e.color === ("W" === t ? "B" : "W");
		} }
	},
	{
		id: "HAPPY_PRINCE_IMMORTAL",
		name: "快乐金身",
		isInternal: !0,
		category: x,
		tier: "LEGENDARY",
		description: "",
		modifiers: {
			isSteady: () => !0,
			movement: (e, t) => e.isControlSquares ? t : [],
			pieceValueOverride: ({ piece: e }) => e.metadata?.isPetrified ? 0 : 5e4,
			invulnerable: ({ piece: e }) => !!e.metadata?.isPetrified,
			networkRange: ({ piece: e, r: t, c: n }) => {
				if (e.metadata?.isPetrified) {
					const e = [];
					for (let i = -1; i <= 1; i++) for (let a = -1; a <= 1; a++) e.push({
						r: t + i,
						c: n + a
					});
					return e;
				}
				return [];
			}
		},
		hooks: { onDeath: ({ piece: e, emit: t, cancelAction: n, r: i, c: a }) => {
			e.metadata?.isPetrified || (n?.(), t({
				type: "UPDATE_ROSTER_PIECE",
				pieceUid: e.uid,
				updates: {
					metadata: {
						...e.metadata,
						isPetrified: !0
					},
					statuses: [{
						id: _.PETRIFIED,
						duration: 99
					}, {
						id: _.FLATTENED,
						duration: 99
					}]
				}
			}), t({
				type: "SHOW_TEXT",
				text: "\"Goodbye, Swallow.\"",
				textKey: "LOG_SWALLOW_GOODBYE",
				style: "system",
				pos: {
					r: i,
					c: a
				}
			}));
		} }
	},
	{
		id: "ROOTED",
		name: "定身",
		isInternal: !0,
		category: W,
		tier: "COMMON",
		description: "",
		modifiers: { movement: (e, t) => e.isControlSquares ? t : [] }
	},
	{
		id: "BETRAYED",
		name: "被策反",
		isInternal: !0,
		category: W,
		tier: "COMMON",
		description: "被策反，临时加入敌方阵营。作为内鬼，行动无视网络连接要求。",
		modifiers: { alwaysNetworked: () => !0 }
	},
	{
		id: "CROSS_AURA",
		name: "十字步",
		isInternal: !0,
		category: W,
		tier: "COMMON",
		description: "获得十字方向 1 格的移动能力。",
		modifiers: { movement: (e, t) => {
			const { r: n, c: i, board: a, piece: r, isControlSquares: s } = e;
			return [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1]
			].forEach(([e, o]) => {
				const c = n + e, l = i + o;
				if (c >= 0 && c < 8 && l >= 0 && l < 8) {
					const e = a[c][l];
					e && e.color === r.color && !s || t.push({
						r: c,
						c: l
					});
				}
			}), t;
		} }
	},
	{
		id: "COMMAND_AURA",
		name: "统率光环",
		isInternal: !0,
		category: W,
		tier: "COMMON",
		description: "获得全向 1 格移动能力。",
		modifiers: { movement: (e, t) => {
			const { r: n, c: i, board: a, piece: r, isControlSquares: s } = e;
			for (const [o, c] of [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1],
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			]) {
				const e = n + o, l = i + c;
				if (e >= 0 && e < 8 && l >= 0 && l < 8 && !t.some((t) => t.r === e && t.c === l)) {
					const n = a[e][l];
					n && n.color === r.color && !s || t.push({
						r: e,
						c: l
					});
				}
			}
			return t;
		} }
	},
	{
		id: "AURA_SUPPRESSED",
		name: "威压压制",
		isInternal: !0,
		category: W,
		tier: "COMMON",
		description: "移动范围受限。",
		modifiers: { movement: ({ r: e, c: t }, n) => n.filter((n) => Math.abs(n.r - e) <= 2 && Math.abs(n.c - t) <= 2) }
	},
	{
		id: "GRACE_LIMIT",
		name: "优雅限制",
		isInternal: !0,
		category: W,
		tier: "COMMON",
		description: "移动范围限制为 1 格",
		modifiers: { movement: ({ r: e, c: t }, n) => n.filter((n) => Math.abs(n.r - e) <= 1 && Math.abs(n.c - t) <= 1) }
	},
	{
		id: "CANNOT_CAPTURE",
		name: "虚化",
		isInternal: !0,
		category: W,
		tier: "COMMON",
		description: "处于镜像位面，无法吃子",
		modifiers: { movement: ({ board: e }, t) => t.filter((t) => !e[t.r][t.c]) }
	},
	{
		id: "GODHOOD_LINK",
		name: "神权链接",
		isInternal: !0,
		category: W,
		tier: "LEGENDARY",
		description: "被绝对王权强制连通。",
		modifiers: { alwaysNetworked: () => !0 }
	},
	{
		id: "CHARISMA_BUFF",
		name: "宽宏增益",
		isInternal: !0,
		category: W,
		tier: "COMMON",
		description: "获得两格全向滑行移动。",
		modifiers: { movement: (e, t) => {
			const { r: n, c: i, board: a, piece: r, isControlSquares: s } = e, o = [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1],
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			], c = [];
			for (const [l, d] of o) for (let e = 1; e <= 2; e++) {
				const t = n + l * e, o = i + d * e;
				if (!(t >= 0 && t < 8 && o >= 0 && o < 8)) break;
				{
					const e = a[t][o];
					if (e) {
						(e.color !== r.color || s) && c.push({
							r: t,
							c: o
						});
						break;
					}
					c.push({
						r: t,
						c: o
					});
				}
			}
			return c;
		} }
	},
	{
		id: "AURA_REWARD",
		name: "恩赏光环",
		isInternal: !0,
		category: W,
		tier: "COMMON",
		description: "吃子时额外获得 5 金币。",
		hooks: { onKill: ({ piece: e, emit: t }) => {
			e.color === c && t({
				type: "MODIFY_GOLD",
				amount: 5,
				reason: "REWARD"
			});
		} }
	},
	{
		id: "REFLECTION_AURA",
		name: "反射光环",
		isInternal: !0,
		category: W,
		tier: "COMMON",
		description: "被吃时反伤击杀者。",
		hooks: { onDeath: ({ emit: e, attackerPos: t, attacker: n }) => {
			(t || n) && (e({
				type: "KILL",
				pos: t,
				targetId: n?.id
			}), e({
				type: "SHOW_TEXT",
				text: "Killed by Reflection",
				style: "system",
				pos: t
			}));
		} }
	},
	{
		id: "COMMANDER_AURA",
		name: "统领光环",
		isInternal: !0,
		category: W,
		tier: "COMMON",
		description: "落点冻结 1 名距离最近的敌军。",
		hooks: { onAfterMove: ({ board: e, r: t, c: n, piece: i, emit: a }) => {
			for (const [r, s] of [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1],
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			]) {
				const o = t + r, c = n + s;
				if (o >= 0 && o < 8 && c >= 0 && c < 8) {
					const t = e[o][c];
					if (t && t.color !== i.color && t.type !== d.KING) {
						a({
							type: "ADD_STATUS",
							pos: {
								r: o,
								c
							},
							statusId: _.FROZEN,
							duration: 2
						});
						break;
					}
				}
			}
		} }
	},
	{
		id: "HOLY_DOMAIN_AURA",
		name: "圣域光环",
		isInternal: !0,
		category: W,
		tier: "COMMON",
		description: "免疫一切负面状态。"
	},
	{
		id: "ZEALOT_BUFF",
		name: "狂热增益",
		isInternal: !0,
		category: W,
		tier: "EPIC",
		description: "获得滑行移动能力。",
		modifiers: { movement: (e, t) => {
			const { r: n, c: i, board: a, piece: r, isControlSquares: s } = e;
			return [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1],
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			].forEach(([e, o]) => {
				let c = n + e, l = i + o;
				for (; c >= 0 && c < 8 && l >= 0 && l < 8;) {
					const n = a[c][l];
					if (n) {
						(n.color !== r.color || s) && t.push({
							r: c,
							c: l
						});
						break;
					}
					t.push({
						r: c,
						c: l
					}), c += e, l += o;
				}
			}), t;
		} }
	},
	{
		id: "BACKUP_BUFFER_ACTIVE",
		name: "应急电池激活",
		isInternal: !0,
		category: W,
		tier: "COMMON",
		description: "临时无视断网",
		modifiers: { bypassFrozen: () => !0 }
	},
	{
		id: "PARASITIZED",
		name: "被寄生",
		isInternal: !0,
		category: W,
		tier: "COMMON",
		description: "每回合有 50% 概率断网/冻结。",
		hooks: { onTurnStart: ({ r: e, c: t, emit: n, prng: i }) => {
			i && i.next() < .5 && (n({
				type: "ADD_STATUS",
				pos: {
					r: e,
					c: t
				},
				statusId: _.FROZEN,
				duration: 2
			}), n({
				type: "SHOW_TEXT",
				text: "Parasite Interference",
				textKey: "LOG_PARASITE_INTERFERENCE",
				style: "system"
			}));
		} }
	},
	{
		id: "INFECTED",
		name: "感染",
		isInternal: !0,
		category: W,
		tier: "COMMON",
		description: "每回合蔓延。若宿主处于联网状态，吞噬部分金币。",
		hooks: { onTurnStart: ({ board: e, r: t, c: n, piece: i, emit: a, metadata: r }) => {
			const { networked: s } = de(e, i.color, r);
			s[t][n] && i.color === c && (a({
				type: "MODIFY_GOLD",
				amount: -1,
				reason: "INFECTION_PENALTY"
			}), a({
				type: "SHOW_TEXT",
				text: "-1 🪙",
				textKey: "LOG_GOLD_MINUS",
				textParams: { amount: 1 },
				style: "danger",
				pos: {
					r: t,
					c: n
				}
			}));
			for (const [o, c] of [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1],
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			]) {
				const i = t + o, r = n + c;
				if (i >= 0 && i < 8 && r >= 0 && r < 8) {
					const t = e[i][r];
					t && !t.statuses?.some((e) => e.id === _.PETRIFIED || e.id === _.INFECTED) && a({
						type: "ADD_STATUS",
						pos: {
							r: i,
							c: r
						},
						statusId: _.INFECTED,
						duration: 3
					});
				}
			}
		} }
	},
	{
		id: "CAMOUFLAGED",
		name: "伪装中",
		isInternal: !0,
		category: W,
		tier: "COMMON",
		description: "敌人看不见棋子实体，但能看到其威胁区。"
	},
	{
		id: "GRAVITY_LOCKED",
		name: "重力束缚",
		isInternal: !0,
		category: W,
		tier: "COMMON",
		description: "移动力受限",
		modifiers: { movement: ({ r: e, c: t }, n) => n.filter((n) => Math.abs(n.r - e) <= 1 && Math.abs(n.c - t) <= 1) },
		hooks: { onTurnStart: ({ r: e, c: t, piece: n, emit: i }) => {
			const a = n.metadata?.gravityLockAge || 0;
			i(a >= 1 ? {
				type: "REMOVE_STATUS",
				pos: {
					r: e,
					c: t
				},
				statusId: _.GRAVITY_LOCKED
			} : {
				type: "UPDATE_ROSTER_PIECE",
				pieceUid: n.uid,
				updates: { metadata: {
					...n.metadata,
					gravityLockAge: a + 1
				} }
			});
		} }
	},
	{
		id: "VOID_FISSURE_SQUARE",
		name: "虚空废墟",
		isInternal: !0,
		category: w,
		tier: "LEGENDARY",
		description: "永久损毁的地块，无法停留。",
		modifiers: {
			squareBlockMovement: () => !0,
			blockDeployment: () => !0
		}
	},
	{
		id: "SQUARE_RAILWAY",
		name: "铁轨地块",
		isInternal: !0,
		category: w,
		tier: "COMMON",
		description: "铁轨地块：兵站在该格时可以向正前方直进两格（与铁轨朝向无关）。"
	},
	{
		id: "IRON_CURTAIN",
		name: "铁幕地块",
		isInternal: !0,
		category: w,
		tier: "LEGENDARY",
		description: "铁幕地块：只有铁幕的所有者可以踏入，敌方棋子无法进入。",
		modifiers: { squareBlockMovement: (e) => (e.metadata?.squares?.[`${e.r},${e.c}`] || []).find((e) => "IRON_CURTAIN" === e.id)?.metadata?.ownerColor !== e.piece?.color }
	},
	{
		id: "SQ_AFTERIMAGE",
		name: "残影地块",
		isInternal: !0,
		category: w,
		tier: "RARE",
		description: "残影：血裙女王吃掉敌军后在落点留下 3 回合的残影，女王本人可无视距离走回该格。"
	},
	{
		id: "SMOKE_SCREEN",
		name: "烟幕",
		isInternal: !0,
		category: W,
		tier: "COMMON",
		description: "免疫来自 1 格以外的远程攻击。",
		modifiers: { invulnerable: ({ board: e, r: t, c: n }, i) => {
			const a = V.findPieces(e, (e) => e.id === i.id)[0], r = a ? a.r : i._lastPos?.r, s = a ? a.c : i._lastPos?.c;
			return void 0 !== r && void 0 !== s && Math.max(Math.abs(r - t), Math.abs(s - n)) > 1;
		} }
	},
	{
		id: "RUSTED",
		name: "锈蚀",
		isInternal: !0,
		category: W,
		tier: "COMMON",
		description: "无法吃子",
		modifiers: { movement: ({ board: e }, t) => t.filter((t) => !e[t.r][t.c]) }
	},
	{
		id: "GOLD_MAGNET",
		name: "金币磁铁",
		isInternal: !0,
		category: W,
		tier: "COMMON",
		description: "每移动一格获得金币",
		hooks: { onAfterMove: ({ from: e, r: t, c: n, emit: i }) => {
			e && i({
				type: "MODIFY_GOLD",
				amount: Math.abs(t - e.r) + Math.abs(n - e.c),
				reason: "MAGNET"
			});
		} }
	},
	{
		id: "BARRICADE",
		name: "障碍物",
		isInternal: !0,
		category: w,
		tier: "COMMON",
		description: "阻挡移动与部署",
		modifiers: {
			squareBlockMovement: () => !0,
			blockDeployment: () => !0
		}
	},
	{
		id: "JAMMING_TOWER",
		name: "信号塔",
		isInternal: !0,
		category: w,
		tier: "EPIC",
		description: "信号塔：站在该格上的棋子被视为网络源，即使在全局干扰下也能提供连通。",
		modifiers: { networkSource: () => !0 }
	},
	{
		id: "FLATTENED",
		name: "扁平化",
		isInternal: !0,
		category: W,
		tier: "COMMON",
		description: "允许友军停留在该格"
	},
	{
		id: "VOID_ANCHOR",
		name: "虚空锚点",
		isInternal: !0,
		category: w,
		tier: "RARE",
		description: "虚空锚点：该格被彻底封锁，任何棋子无法停留，也无法在此部署。",
		modifiers: {
			squareBlockMovement: () => !0,
			blockDeployment: () => !0
		}
	},
	{
		id: "PORTAL_ENTRY",
		name: "传送门",
		isInternal: !0,
		category: w,
		tier: "RARE",
		description: "传送门入口：踩上后传送到另一处传送门并消耗该入口；出口被占据时不触发。",
		hooks: { onAfterMove: ({ r: e, c: t, board: n, metadata: i, emit: a }) => {
			const r = i?.squares || {};
			for (const s in r) {
				if (s === `${e},${t}`) continue;
				if (!r[s].some((e) => e.id === p)) continue;
				const [i, o] = s.split(",").map(Number);
				if (n[i]?.[o]) break;
				a({
					type: "REMOVE_SQUARE",
					pos: {
						r: e,
						c: t
					},
					statusId: p
				}), a({
					type: "PLAY_SOUND",
					soundId: "WORMHOLE"
				}), a({
					type: "MOVE",
					from: {
						r: e,
						c: t
					},
					to: {
						r: i,
						c: o
					}
				}), a({
					type: "SHOW_TEXT",
					text: "Teleport",
					textKey: "LOG_TELEPORT",
					style: "system",
					pos: {
						r: i,
						c: o
					}
				});
				break;
			}
		} }
	},
	{
		id: "SHIELDED",
		name: "护盾",
		isInternal: !0,
		category: W,
		tier: "COMMON",
		description: "抵消一次伤害",
		hooks: { onDeath: ({ piece: e, cancelAction: t, emit: n, r: i, c: a }) => {
			n({
				type: "PLAY_SOUND",
				soundId: "SHIELD"
			}), n({
				type: "REMOVE_STATUS",
				pos: {
					r: i,
					c: a
				},
				statusId: _.SHIELDED
			});
			const r = e?.statuses?.find((e) => e.id === _.SHIELDED);
			r?.auraSource && n({
				type: "ADD_STATUS",
				pos: {
					r: i,
					c: a
				},
				statusId: _.SHIELD_COOLDOWN,
				duration: 3,
				metadata: { auraSource: r.auraSource }
			}), t?.();
		} }
	},
	{
		id: "SHIELD_COOLDOWN",
		name: "护盾冷却",
		isInternal: !0,
		category: W,
		tier: "COMMON",
		description: "刚刚消耗过一层光环护盾，短暂时间内无法通过该光环重新获得护盾。"
	},
	{
		id: "BASTION_SHIELD",
		name: "堡垒护盾",
		isInternal: !0,
		category: W,
		tier: "COMMON",
		description: "受车的堡垒形态保护，免疫远程单位（后/车/象）1 格以外的攻击。",
		modifiers: { invulnerable: ({ board: e, r: t, c: n }, i) => {
			if ([
				d.QUEEN,
				d.ROOK,
				d.BISHOP
			].includes(i.type)) {
				const a = V.findPieces(e, (e) => e.id === i.id)[0], r = a ? a.r : i._lastPos?.r, s = a ? a.c : i._lastPos?.c;
				if (void 0 !== r && void 0 !== s) return Math.max(Math.abs(r - t), Math.abs(s - n)) > 1;
			}
			return !1;
		} }
	},
	{
		id: "SQUARE_BASTION_FIELD",
		name: "堡垒力场",
		isInternal: !0,
		category: w,
		tier: "COMMON",
		description: "为地块上的友军提供远程攻击免疫。",
		modifiers: { invulnerable: ({ board: e, r: t, c: n }, i) => {
			if ([
				d.QUEEN,
				d.ROOK,
				d.BISHOP
			].includes(i.type)) {
				const a = V.findPieces(e, (e) => e === i)[0];
				if (a && Math.max(Math.abs(a.r - t), Math.abs(a.c - n)) > 1) return !0;
			}
			return !1;
		} }
	},
	{
		id: "SUPPLY_DEPOT_SQUARE",
		name: "补给地块",
		isInternal: !0,
		category: w,
		tier: "COMMON",
		description: "补给地块：己方补给车在场时，在此部署返还 5 金币，单局最多返还 30 金币。",
		hooks: { onDeploy: ({ r: e, c: t, board: n, emit: i }) => {
			const a = V.findPieces(n, (e) => e.skills.includes("ROOK_SUPPLY_DEPOT"))[0]?.piece;
			if (a && (a.metadata?.supplyGoldEarned || 0) < 30) {
				const n = a.metadata?.supplyGoldEarned || 0;
				i({
					type: "MODIFY_GOLD",
					amount: 5,
					reason: "SUPPLY_DEPOT"
				}), i({
					type: "UPDATE_ROSTER_PIECE",
					pieceUid: a.uid,
					updates: { metadata: {
						...a.metadata,
						supplyGoldEarned: n + 5
					} }
				}), i({
					type: "SHOW_TEXT",
					text: "+5G Supply",
					textKey: "LOG_SUPPLY_DEPOT",
					style: "gold",
					pos: {
						r: e,
						c: t
					}
				});
			}
		} }
	},
	{
		id: "BOSS_MASS_ERASURE",
		name: "轨道轰炸区",
		isInternal: !0,
		category: w,
		tier: "LEGENDARY",
		description: "每隔 5 回合，轰炸棋盘特定区域。",
		hooks: { onTurnStart: (e) => {
			const { board: t, emit: n, prng: i } = e, a = e.status;
			if (!a) return;
			const r = a.metadata?.erasureTimer || 1, s = a.metadata?.erasureTarget || {
				r: 4,
				c: 4
			};
			if (3 === r) {
				n({
					type: "PLAY_SOUND",
					soundId: "HAZARD_WARNING"
				});
				for (let e = -1; e <= 1; e++) for (let t = -1; t <= 1; t++) {
					const i = s.r + e, a = s.c + t;
					i >= 0 && i < 8 && a >= 0 && a < 8 && n({
						type: "SET_SQUARE",
						pos: {
							r: i,
							c: a
						},
						status: {
							id: "DANGER_ZONE",
							duration: 4
						}
					});
				}
				n({
					type: "SHOW_TEXT",
					text: "Orbital lock detected: Charging 50%",
					textKey: "LOG_RAILGUN_LOCK_50",
					style: "danger"
				}), n({
					type: "SET_SQUARE",
					pos: {
						r: 0,
						c: 0
					},
					status: {
						id: "BOSS_MASS_ERASURE",
						duration: 999,
						metadata: {
							erasureTimer: 4,
							erasureTarget: s
						}
					}
				});
			} else if (4 === r) {
				n({
					type: "PLAY_SOUND",
					soundId: "HAZARD_WARNING"
				});
				for (let e = -1; e <= 1; e++) for (let t = -1; t <= 1; t++) {
					const i = s.r + e, a = s.c + t;
					i >= 0 && i < 8 && a >= 0 && a < 8 && n({
						type: "SET_SQUARE",
						pos: {
							r: i,
							c: a
						},
						status: {
							id: "DANGER_ZONE",
							duration: 2
						}
					});
				}
				n({
					type: "SHOW_TEXT",
					text: "Warning: Orbital Cannon locked! Charging 100% Evacuate!",
					textKey: "LOG_RAILGUN_LOCK_100",
					style: "danger"
				}), n({
					type: "SET_SQUARE",
					pos: {
						r: 0,
						c: 0
					},
					status: {
						id: "BOSS_MASS_ERASURE",
						duration: 999,
						metadata: {
							erasureTimer: 5,
							erasureTarget: s
						}
					}
				});
			} else if (5 === r) {
				n({
					type: "PLAY_SOUND",
					soundId: "ELECTRIC_SHOCK"
				});
				for (let e = -1; e <= 1; e++) for (let i = -1; i <= 1; i++) {
					const a = s.r + e, r = s.c + i;
					a >= 0 && a < 8 && r >= 0 && r < 8 && (t[a][r] && t[a][r]?.type !== d.KING && n({
						type: "KILL",
						pos: {
							r: a,
							c: r
						}
					}), n({
						type: "REMOVE_SQUARE",
						pos: {
							r: a,
							c: r
						},
						statusId: "DANGER_ZONE"
					}));
				}
				i && n({
					type: "SET_SQUARE",
					pos: {
						r: 0,
						c: 0
					},
					status: {
						id: "BOSS_MASS_ERASURE",
						duration: 999,
						metadata: {
							erasureTimer: 1,
							erasureTarget: {
								r: Math.floor(6 * i.next()) + 1,
								c: Math.floor(6 * i.next()) + 1
							}
						}
					}
				});
			} else n({
				type: "SET_SQUARE",
				pos: {
					r: 0,
					c: 0
				},
				status: {
					id: "BOSS_MASS_ERASURE",
					duration: 999,
					metadata: {
						erasureTimer: r + 1,
						erasureTarget: s
					}
				}
			});
		} },
		getDisplayStatus: (e, t) => {
			const n = 5 - ((("undefined" != typeof window ? window.gameStore?.getState() : null)?.metadata?.squares?.["0,0"]?.find((e) => "BOSS_MASS_ERASURE" === e.id))?.metadata?.erasureTimer || 1);
			return 0 === n ? {
				text: t("railgunFiring") || "Firing",
				colorClass: "text-red-500 animate-pulse"
			} : {
				text: t("railgunCountdown", { n }),
				colorClass: n <= 2 ? "text-orange-400 font-bold" : "text-slate-400"
			};
		}
	},
	{
		id: "FAKE_KING_TRAIT",
		name: "大明代宗",
		isInternal: !0,
		category: x,
		tier: "COMMON",
		description: "伪王。死后游戏结束。",
		modifiers: {
			movement: (e, t) => e.isControlSquares ? t : [],
			invulnerable: () => !0
		}
	},
	{
		id: "YUQIAN_TRAIT",
		name: "兵部尚书",
		isInternal: !0,
		category: x,
		tier: "LEGENDARY",
		description: "满级主力。死后游戏结束。"
	},
	{
		id: "LOUIS_ABSOLUTE_CORONA",
		name: "绝对日冕",
		isInternal: !0,
		category: x,
		tier: "LEGENDARY",
		description: "信号覆盖 5x5，但无法通过友军中继。进入范围的敌军被施加封印。",
		modifiers: {
			networkRange: ({ r: e, c: t }) => {
				const n = [];
				for (let i = -2; i <= 2; i++) for (let a = -2; a <= 2; a++) e + i >= 0 && e + i < 8 && t + a >= 0 && t + a < 8 && n.push({
					r: e + i,
					c: t + a
				});
				return n;
			},
			globalDisableRelay: () => !0
		},
		hooks: { onTurnStart: ({ board: e, r: t, c: n, piece: i, emit: a }) => {
			for (let r = -2; r <= 2; r++) for (let s = -2; s <= 2; s++) {
				const o = t + r, c = n + s;
				if (o >= 0 && o < 8 && c >= 0 && c < 8) {
					const t = e[o][c];
					t && t.color !== i.color && t.type !== d.KING && a({
						type: "ADD_STATUS",
						pos: {
							r: o,
							c
						},
						statusId: _.SKILL_LOCKED,
						duration: 2
					});
				}
			}
		} }
	},
	{
		id: "QUEEN_MOVE",
		name: "王权武力",
		isInternal: !0,
		category: x,
		tier: "EPIC",
		description: "获得全向 2 格移动能力。",
		modifiers: { movement: (e, t) => {
			const { board: n, r: i, c: a, piece: r, isControlSquares: s } = e, o = [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1],
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			], c = [];
			for (const [l, d] of o) for (let e = 1; e <= 2; e++) {
				const t = i + l * e, o = a + d * e;
				if (!(t >= 0 && t < 8 && o >= 0 && o < 8)) break;
				{
					const e = n[t][o];
					if (e) {
						(e.color !== r.color || s) && c.push({
							r: t,
							c: o
						});
						break;
					}
					c.push({
						r: t,
						c: o
					});
				}
			}
			return c;
		} }
	},
	{
		id: "RICHARD_FORWARD_ONLY",
		name: "单向远征",
		isInternal: !0,
		category: x,
		tier: "RARE",
		description: "全军信号仅能向前或水平传播。处于敌方半场队友获得【不屈】。国王拥有无限制的“后”的机动，但无法后退。",
		modifiers: {
			globalNetworkDirection: () => "FORWARD",
			movement: (e, t) => {
				const { board: n, piece: i, r: a, c: r, isControlSquares: s } = e;
				let o = t;
				if (i.type === d.KING) {
					const e = i.color === c, t = [
						[-1, 0],
						[1, 0],
						[0, -1],
						[0, 1],
						[-1, -1],
						[-1, 1],
						[1, -1],
						[1, 1]
					], l = [];
					for (const [o, c] of t) {
						let e = a + o, t = r + c;
						for (; e >= 0 && e < 8 && t >= 0 && t < 8;) {
							const a = n[e][t];
							if (a) {
								(a.color !== i.color || s) && l.push({
									r: e,
									c: t
								});
								break;
							}
							l.push({
								r: e,
								c: t
							}), e += o, t += c;
						}
					}
					return o = l, o.filter((t) => e ? t.r <= a : t.r >= a);
				}
				return o;
			}
		},
		hooks: {
			onTurnStart: ({ board: e, r: t, c: n, piece: i, emit: a, metadata: r }) => {
				const s = i.color === c ? 7 - t : t, { networked: o } = de(e, i.color, r);
				V.findPieces(e, (e) => e.color === i.color && e.type !== d.KING).forEach(({ r: e, c: t }) => {
					s > 0 && (a({
						type: "ADD_STATUS",
						pos: {
							r: e,
							c: t
						},
						statusId: _.CHARISMA_BUFF,
						duration: 2,
						metadata: { bonus: s }
					}), a({
						type: "ADD_STATUS",
						pos: {
							r: e,
							c: t
						},
						statusId: "RICHARD_REWARD_BUFF",
						duration: 2
					})), (i.color === c ? e < 4 : e > 3) && o[e][t] && a({
						type: "ADD_STATUS",
						pos: {
							r: e,
							c: t
						},
						statusId: "RICHARD_UNYIELDING",
						duration: 2
					});
				});
			},
			onDeath: ({ board: e, r: t, c: n, piece: i, cancelAction: a, emit: r, gold: s, prng: o }) => {
				if (i.type === d.KING && i.color === c && (s ?? 0) >= 100) {
					const s = 7, c = [];
					for (let t = 0; t < 8; t++) e[s][t] || c.push({
						r: s,
						c: t
					});
					if (c.length > 0) {
						a?.(), r({
							type: "MODIFY_GOLD",
							amount: -100,
							reason: "KING_RANSOM"
						}), r({
							type: "REMOVE_PIECE",
							pos: {
								r: t,
								c: n
							}
						});
						const e = c[Math.floor((o || { next: Math.random }).next() * c.length)];
						r({
							type: "SPAWN",
							pos: e,
							piece: {
								...i,
								id: Ie(),
								statuses: []
							}
						}), r({
							type: "SHOW_TEXT",
							text: "\"Massive ransom collected: The King returns!\"",
							textKey: "LOG_KING_RANSOM",
							style: "gold",
							pos: e
						}), r({
							type: "PLAY_SOUND",
							soundId: "GOLD_COLLECT"
						});
					}
				}
			}
		}
	},
	{
		id: "RICHARD_REWARD_BUFF",
		name: "圣战狂热",
		isInternal: !0,
		category: x,
		tier: "COMMON",
		description: "狮心王御驾亲征，吃子获得额外金币。",
		hooks: { onKill: ({ piece: e, emit: t }) => {
			const n = (e.statuses?.find((e) => "RICHARD_REWARD_BUFF" === e.id || e.id === _.CHARISMA_BUFF))?.bonus || 1;
			t({
				type: "MODIFY_GOLD",
				amount: n,
				reason: "CRUSADE_REWARD"
			}), t({
				type: "SHOW_TEXT",
				text: `Crusade +${n}`,
				textKey: "LOG_CRUSADE_REWARD",
				textParams: { amount: n },
				style: "gold"
			});
		} }
	},
	{
		id: "RICHARD_UNYIELDING",
		name: "不屈",
		isInternal: !0,
		category: x,
		tier: "RARE",
		description: "被吃时 40% 概率返回库存。",
		hooks: { onDeath: ({ piece: e, emit: t, prng: n }) => {
			n && n.next() < .4 && (t({
				type: "MODIFY_RESERVE",
				color: e.color,
				pieceType: e.type,
				amount: 1
			}), e.uid && t({
				type: "UNDEPLOY_PIECE",
				uid: e.uid
			}), t({
				type: "SHOW_TEXT",
				text: "Unyielding: Recalled",
				textKey: "LOG_UNYIELDING_RECALL",
				style: "system"
			}));
		} }
	},
	{
		id: "SWALLOW_TRAIT",
		name: "燕子羁绊",
		isInternal: !0,
		category: x,
		tier: "LEGENDARY",
		description: "不可吃子。永远联网。提供信号源。无视强制位移。",
		modifiers: {
			alwaysNetworked: () => !0,
			networkSource: () => !0,
			isSteady: () => !0,
			movement: (e, t) => t.filter((t) => e.isControlSquares || !e.board[t.r][t.c])
		},
		hooks: { onDeath: ({ board: e, piece: t, cancelAction: n, emit: i, gold: a, prng: r }) => {
			if ((a ?? 0) >= 500) {
				const a = V.findPieces(e, (e) => e.type === d.KING && e.color === t.color)[0], s = a ? {
					r: a.r,
					c: a.c
				} : null;
				if (s) {
					const a = [
						[-1, 0],
						[1, 0],
						[0, -1],
						[0, 1],
						[-1, -1],
						[-1, 1],
						[1, -1],
						[1, 1]
					];
					let o = null;
					const c = r || { next: Math.random }, l = a.sort(() => c.next() - .5);
					for (const [t, n] of l) {
						const i = s.r + t, a = s.c + n;
						if (Ae(i, a) && !e[i][a]) {
							o = {
								r: i,
								c: a
							};
							break;
						}
					}
					o && (n?.(), i({
						type: "MODIFY_GOLD",
						amount: -500,
						reason: "SWALLOW_RESURRECT"
					}), i({
						type: "SPAWN",
						pos: o,
						piece: {
							...t,
							id: Ie(),
							statuses: []
						}
					}), i({
						type: "SHOW_TEXT",
						text: "\"Leaden heart shattered: Remaking Swallow!\"",
						textKey: "LOG_SWALLOW_RESURRECT",
						style: "gold",
						pos: o
					}), i({
						type: "PLAY_SOUND",
						soundId: "GOLD_COLLECT"
					}));
				}
			}
		} }
	},
	{
		id: "ARTHUR_ROUND_TABLE",
		name: "圆桌誓约",
		isInternal: !0,
		category: x,
		tier: "LEGENDARY",
		tags: ["GLOBAL"],
		description: "圆桌骑士同生共死。每当有 3 级友方单位在战场上成功吃子时，全场所有 3 级友方单位（除国王外）将同时获得一层【护盾】。",
		hooks: { onKill: ({ board: e, piece: t, subject: n, emit: i }) => {
			n && n.color === t.color && n.level >= 3 && n.type !== d.KING && (e.flat().forEach((e, n) => {
				if (e && e.color === t.color && e.level >= 3 && e.type !== d.KING) {
					const t = Math.floor(n / 8), a = n % 8;
					e.statuses?.some((e) => e.id === _.SHIELDED) || i({
						type: "ADD_STATUS",
						pos: {
							r: t,
							c: a
						},
						statusId: _.SHIELDED,
						duration: 99
					});
				}
			}), i({
				type: "SHOW_TEXT",
				text: "\"Oath Resonance: Round Table Shield!\"",
				textKey: "LOG_ARTHUR_SHIELD",
				style: "gold"
			}));
		} }
	},
	{
		id: "ODYSSEUS_WOODEN_HORSE",
		name: "特洛伊木马",
		isInternal: !0,
		category: x,
		tier: "EPIC",
		description: "奥德修斯的绝妙诡计。静止在原地，2回合后自动解体，就地释放两只奇袭兵蜂。",
		modifiers: { movement: () => [] },
		hooks: { onTurnStart: ({ board: e, piece: t, r: n, c: i, emit: a, prng: r }) => {
			const s = t.metadata?.woodenHorseTimer || 1;
			if (s >= 2) {
				a({
					type: "REMOVE_PIECE",
					pos: {
						r: n,
						c: i
					}
				});
				let s = 0;
				const o = r || { next: Math.random }, c = [
					[-1, 0],
					[1, 0],
					[0, -1],
					[0, 1],
					[-1, -1],
					[-1, 1],
					[1, -1],
					[1, 1]
				].sort(() => o.next() - .5);
				for (const [r, l] of c) {
					if (s >= 2) break;
					const o = n + r, c = i + l;
					Ae(o, c) && !e[o][c] && (a({
						type: "SPAWN",
						pos: {
							r: o,
							c
						},
						piece: {
							id: Ie(),
							uid: `trojan-spawn-${Ie()}`,
							type: d.PAWN,
							color: t.color,
							level: 1,
							skills: [],
							statuses: [],
							maxSlots: 1,
							equippedItems: []
						}
					}), s++);
				}
				a({
					type: "SHOW_TEXT",
					text: "\"Trojan Horse broken: Trojan warriors ambush!\"",
					textKey: "LOG_TROJAN_BREAK",
					style: "gold",
					pos: {
						r: n,
						c: i
					}
				});
			} else a({
				type: "SPAWN",
				pos: {
					r: n,
					c: i
				},
				piece: {
					...t,
					metadata: {
						...t.metadata,
						woodenHorseTimer: s + 1
					}
				}
			}), a({
				type: "SHOW_TEXT",
				text: `Trojan lurking (${2 - s}T)`,
				textKey: "LOG_TROJAN_WAIT",
				textParams: { turns: 2 - s },
				style: "system",
				pos: {
					r: n,
					c: i
				}
			});
		} }
	},
	{
		id: "ODYSSEUS_TROJAN_ACTIVE",
		name: "木马计",
		isInternal: !0,
		category: x,
		tier: "EPIC",
		description: "主动：消耗本回合行动，在棋盘任意空地秘密空投一辆“特洛伊木马”。木马伪装静止 2 回合后自动解体，就地释放两名奇袭兵蜂（每场战斗限一次）。",
		range: {
			type: "chebyshev",
			radius: 7
		},
		activeSpec: {
			targeting: "target",
			usesKey: "trojanUses",
			maxUses: 1,
			getAlternatives: (e, t, n) => {
				const i = [];
				for (let a = 0; a < 8; a++) for (let t = 0; t < 8; t++) e[a][t] || i.push({
					pos: {
						r: a,
						c: t
					},
					value: {
						r: a,
						c: t
					}
				});
				return i;
			},
			execute: (e, t, n, i, a, r) => {
				(i.metadata?.trojanUses || 0) >= 1 || a && (r({
					type: "SPAWN",
					pos: a,
					piece: {
						id: Ie(),
						uid: `horse-${Ie()}`,
						type: d.PAWN,
						color: i.color,
						level: 1,
						skills: ["ODYSSEUS_WOODEN_HORSE"],
						learnedSkills: ["ODYSSEUS_WOODEN_HORSE"],
						statuses: [],
						maxSlots: 0,
						equippedItems: []
					}
				}), r({
					type: "UPDATE_ROSTER_PIECE",
					pieceUid: i.uid,
					updates: { metadata: {
						...i.metadata,
						trojanUses: (i.metadata?.trojanUses || 0) + 1
					} }
				}), r({
					type: "SHOW_TEXT",
					text: "\"Crossing the sea in stealth: Deploying Trojan!\"",
					textKey: "LOG_TROJAN_DEPLOY",
					style: "system",
					pos: a
				}));
			}
		}
	},
	{
		id: "BOSS_YINGZONG_CURSE",
		name: "乱命 (土木之变)",
		isInternal: !0,
		category: x,
		tier: "LEGENDARY",
		description: "BOSS专属：受到致命一击时，在黑方底线生成不能动的伪王和于谦救场。",
		hooks: { onDeath: ({ board: e, piece: t, r: n, c: i, cancelAction: a, emit: r, prng: s }) => {
			if (t.color !== l) return;
			const o = [];
			for (let c = 0; c < 8; c++) e[0][c] || o.push({
				r: 0,
				c
			});
			if (o.length >= 2) {
				a?.(), r({
					type: "REMOVE_PIECE",
					pos: {
						r: n,
						c: i
					}
				}), r({
					type: "SHOW_TEXT",
					text: "“也先”挟天子以令诸侯：北狩！",
					textKey: "LOG_DAIZONG_CAPTURED",
					style: "danger"
				});
				const e = s || { next: Math.random }, t = Math.floor(e.next() * o.length), c = o.splice(t, 1)[0], E = o[Math.floor(e.next() * o.length)], u = `daizong-${Ie()}`, m = `hero-yuqian-${Ie()}`;
				r({
					type: "SPAWN",
					pos: c,
					piece: {
						...be(d.KING, l),
						uid: u,
						traits: ["FAKE_KING_TRAIT", "ROOTED"],
						customName: "unitDaizong"
					}
				});
				const _ = function(e) {
					const t = () => e ? e.next() : Math.random(), n = xe()[d.BISHOP].filter((e) => "LEGENDARY" === e.tier), i = n[Math.floor(t() * n.length)]?.id || "BISHOP_AURORA", a = We.filter((e) => "EQUIPMENT" === e.type), r = a.filter((e) => "LEGENDARY" === e.tier), s = a.filter((e) => "EPIC" === e.tier), o = r[Math.floor(t() * r.length)], c = s[Math.floor(t() * s.length)], l = a[Math.floor(t() * a.length)];
					return {
						skills: [i],
						equippedItems: [
							{
								id: `yq-l-${Ie()}`,
								type: "EQUIPMENT",
								name: o.id,
								desc: "",
								effectId: o.effectId,
								tier: "LEGENDARY"
							},
							{
								id: `yq-e-${Ie()}`,
								type: "EQUIPMENT",
								name: c.id,
								desc: "",
								effectId: c.effectId,
								tier: "EPIC"
							},
							{
								id: `yq-r-${Ie()}`,
								type: "EQUIPMENT",
								name: l.id,
								desc: "",
								effectId: l.effectId,
								tier: l.tier
							}
						]
					};
				}(e), A = {
					...be(d.BISHOP, l),
					uid: m,
					level: 5,
					traits: ["YUQIAN_TRAIT"],
					customName: "unitYuqian",
					skills: _.skills,
					learnedSkills: _.skills,
					equippedItems: _.equippedItems
				};
				r({
					type: "ADD_TO_ROSTER",
					piece: A
				}), r({
					type: "SPAWN",
					pos: E,
					piece: A
				});
			}
		} }
	},
	{
		id: "LOUIS_IRON_MASK",
		name: "铁面人限制",
		isInternal: !0,
		category: x,
		tier: "LEGENDARY",
		description: "路易十四的神秘孪生兄弟。作为副信号源（Proxy King），但永久定身且无法吃子。一旦被击杀，国王将因政权动摇永久失去“绝对日冕”5x5网络。",
		modifiers: {
			networkSource: () => !0,
			proxyKing: () => !0,
			isSteady: () => !0,
			movement: () => []
		},
		hooks: { onDeath: ({ board: e, emit: t }) => {
			e.flat().forEach((e) => {
				if (e && e.type === d.KING && e.color === c) {
					const n = e.skills.filter((e) => "LOUIS_ABSOLUTE_CORONA" !== e);
					t({
						type: "UPDATE_ROSTER_PIECE",
						pieceUid: e.uid,
						updates: {
							skills: n,
							learnedSkills: n
						}
					}), t({
						type: "SHOW_TEXT",
						text: "\"Divine right shaken: The Corona dims!\"",
						textKey: "LOG_LOUIS_CORONA_DIMMED",
						style: "danger"
					});
				}
			});
		} }
	},
	{
		id: "BOSS_QUANTUM_SWAP",
		name: "量子纠缠",
		isInternal: !0,
		category: x,
		tier: "LEGENDARY",
		description: "每过5个回合，随机调换场上两个白色棋子的位置。",
		hooks: { onTurnStart: ({ board: e, piece: t, emit: n, prng: i }) => {
			const a = t.metadata?.quantumTurns || 0;
			if (a >= 5) {
				const a = V.findPieces(e, (e) => e.color === c && e.type !== d.KING).map(({ r: e, c: t, piece: n }) => ({
					r: e,
					c: t,
					p: n
				}));
				if (a.length >= 2 && i) {
					const e = Math.floor(i.next() * a.length);
					let r = Math.floor(i.next() * (a.length - 1));
					r >= e && r++;
					const s = a[e], o = a[r];
					n({
						type: "SWAP_PIECES",
						posA: {
							r: s.r,
							c: s.c
						},
						posB: {
							r: o.r,
							c: o.c
						},
						actorColor: t.color
					}), n({
						type: "SHOW_TEXT",
						text: "Quantum Swap",
						textKey: "LOG_QUANTUM_SWAP",
						style: "danger"
					});
				}
				n({
					type: "UPDATE_ROSTER_PIECE",
					pieceUid: t.uid,
					updates: { metadata: {
						...t.metadata,
						quantumTurns: 0
					} }
				});
			} else n({
				type: "UPDATE_ROSTER_PIECE",
				pieceUid: t.uid,
				updates: { metadata: {
					...t.metadata,
					quantumTurns: a + 1
				} }
			});
		} },
		getDisplayStatus: (e, t) => ({
			text: t("quantumCountdown", { n: 5 - (e.metadata?.quantumTurns || 0) }),
			colorClass: "text-cyan-400"
		})
	},
	{
		id: "SENTINEL",
		name: "巡逻哨兵",
		isInternal: !0,
		category: x,
		tier: "LEGENDARY",
		description: "免疫一切攻击，随机移动（撞墙反弹），撞击到的任何棋子都会被摧毁。",
		modifiers: {
			invulnerable: () => !0,
			isSteady: () => !0
		},
		hooks: { onTurnStart: ({ board: e, r: t, c: n, piece: i, emit: a, prng: r }) => {
			if (i.color !== l) return;
			let s = i.metadata?.dr, o = i.metadata?.dc;
			if (void 0 === s || void 0 === o) {
				const e = r || { next: Math.random }, t = e.next() > .5, n = e.next() > .5 ? 1 : -1;
				s = t ? n : 0, o = t ? 0 : n;
			}
			let c = t + s, E = n + o, u = s, m = o;
			(c < 0 || c >= 8 || E < 0 || E >= 8) && (u = 0 === s ? 0 : -s, m = 0 === o ? 0 : -o, c = t + u, E = n + m), a({
				type: "UPDATE_ROSTER_PIECE",
				pieceUid: i.uid,
				updates: { metadata: {
					...i.metadata,
					dr: u,
					dc: m
				} }
			});
			const _ = e[c][E];
			_ && _.type !== d.KING && a({
				type: "KILL",
				pos: {
					r: c,
					c: E
				}
			}), a({
				type: "MOVE",
				from: {
					r: t,
					c: n
				},
				to: {
					r: c,
					c: E
				}
			});
		} }
	},
	{
		id: "BOSS_PERMISSION_DENIED",
		name: "权限篡改",
		isInternal: !0,
		category: x,
		tier: "LEGENDARY",
		description: "每隔3回合禁用一种棋子",
		hooks: { onTurnStart: ({ piece: e, emit: t, prng: n, board: i }) => {
			const a = e.metadata?.permissionTimer || 1;
			if (3 === a && n) {
				const a = [
					d.PAWN,
					d.KNIGHT,
					d.BISHOP,
					d.ROOK,
					d.QUEEN
				], r = a[Math.floor(n.next() * a.length)];
				V.findPieces(i, (t) => t.color !== e.color && t.type === r).forEach(({ r: e, c: n }) => t({
					type: "ADD_STATUS",
					pos: {
						r: e,
						c: n
					},
					statusId: _.FROZEN,
					duration: 2
				})), t({
					type: "UPDATE_ROSTER_PIECE",
					pieceUid: e.uid,
					updates: { metadata: {
						...e.metadata,
						permissionTimer: 1
					} }
				}), t({
					type: "SHOW_TEXT",
					text: `Permission Denied: Disable ${r}`,
					textKey: "LOG_PERMISSION_DENIED",
					textParams: { banned: r },
					style: "danger"
				});
			} else t({
				type: "UPDATE_ROSTER_PIECE",
				pieceUid: e.uid,
				updates: { metadata: {
					...e.metadata,
					permissionTimer: a + 1
				} }
			});
		} }
	},
	{
		id: "BOSS_PACIFISM",
		name: "和平协议",
		isInternal: !0,
		category: x,
		tier: "LEGENDARY",
		description: "前5回合无法吃子",
		hooks: { onTurnStart: ({ board: e, piece: t, emit: n, historyLength: i }) => {
			const a = i || 0;
			if (a < 10) {
				const t = 9 === a ? 1 : 2;
				V.findPieces(e, () => !0).forEach(({ r: e, c: i }) => {
					n({
						type: "ADD_STATUS",
						pos: {
							r: e,
							c: i
						},
						statusId: _.INVULNERABLE,
						duration: t
					});
				});
			}
		} },
		getDisplayStatus: (e, t) => {
			const n = "undefined" != typeof window && window.gameStore?.getState()?.history?.length || 0, i = Math.max(0, 3 - Math.floor(n / 2));
			return i <= 0 ? {
				text: t("finished") || "Finished",
				colorClass: "text-slate-500"
			} : {
				text: t("turnsRemaining", { n: i }),
				colorClass: "text-red-400 font-bold animate-pulse"
			};
		}
	},
	{
		id: "INVULNERABLE",
		name: "无敌",
		isInternal: !0,
		category: W,
		tier: "COMMON",
		description: "",
		modifiers: { invulnerable: () => !0 }
	},
	{
		id: "BOSS_ECHO_CHAMBER",
		name: "信息茧房",
		isInternal: !0,
		category: x,
		tier: "LEGENDARY",
		description: "隐藏玩家棋子属性（UI端处理）"
	},
	{
		id: "BOSS_BOARD_ROTATION",
		name: "棋盘自转",
		isInternal: !0,
		category: x,
		tier: "LEGENDARY",
		description: "每4回合旋转90度",
		hooks: { onTurnStart: ({ board: e, piece: t, emit: n, metadata: i }) => {
			const a = t.metadata?.rotateTimer || 1;
			if (4 === a) {
				n({
					type: "SHOW_TEXT",
					text: "Board Rotation!",
					textKey: "LOG_BOARD_ROTATION",
					style: "danger"
				});
				const a = V.findPieces(e, () => !0).map(({ r: e, c: t, piece: n }) => ({
					p: n,
					r: e,
					c: t,
					nr: t,
					nc: 7 - e
				}));
				a.forEach(({ r: e, c: t }) => n({
					type: "REMOVE_PIECE",
					pos: {
						r: e,
						c: t
					}
				})), a.forEach(({ p: e, nr: t, nc: a }) => {
					i?.squares?.[`${t},${a}`]?.some((e) => e.id === A || e.id === T || e.id === g || "DANGER_ZONE" === e.id) && e.type !== d.KING ? (n({
						type: "SPAWN",
						pos: {
							r: t,
							c: a
						},
						piece: e
					}), n({
						type: "KILL",
						pos: {
							r: t,
							c: a
						}
					})) : n({
						type: "SPAWN",
						pos: {
							r: t,
							c: a
						},
						piece: e
					});
				}), n({
					type: "UPDATE_ROSTER_PIECE",
					pieceUid: t.uid,
					updates: { metadata: {
						...t.metadata,
						rotateTimer: 1
					} }
				});
			} else n({
				type: "UPDATE_ROSTER_PIECE",
				pieceUid: t.uid,
				updates: { metadata: {
					...t.metadata,
					rotateTimer: a + 1
				} }
			});
		} }
	},
	{
		id: "BOSS_QUANTUM_MIRAGE",
		name: "量子分身",
		isInternal: !0,
		category: x,
		tier: "LEGENDARY",
		description: "无限替死",
		hooks: { onDeath: ({ board: e, piece: t, r: n, c: i, cancelAction: a, emit: r, prng: s }) => {
			const o = V.findPieces(e, (e) => e.color === t.color && e.uid !== t.uid).map(({ r: e, c: t, piece: n }) => ({
				r: e,
				c: t,
				p: n
			}));
			if (o.length > 0 && s) {
				a?.();
				const e = o[Math.floor(s.next() * o.length)];
				r({
					type: "REMOVE_PIECE",
					pos: {
						r: n,
						c: i
					}
				}), r({
					type: "KILL",
					pos: {
						r: e.r,
						c: e.c
					},
					targetId: e.p.id
				}), r({
					type: "SPAWN",
					pos: {
						r: e.r,
						c: e.c
					},
					piece: { ...t }
				}), r({
					type: "SHOW_TEXT",
					text: "Quantum Mirage Substitute!",
					textKey: "LOG_QUANTUM_MIRAGE",
					style: "danger",
					pos: {
						r: e.r,
						c: e.c
					}
				});
			}
		} }
	},
	{
		id: "BOSS_WARP_STORM",
		name: "传送乱流",
		isInternal: !0,
		category: x,
		tier: "LEGENDARY",
		description: "随机生成传送门",
		hooks: { onTurnStart: ({ board: e, emit: t, prng: n, metadata: i }) => {
			if (i?.squares) {
				for (const r in i.squares) if (i.squares[r].some((e) => e.id === C)) {
					const [e, n] = r.split(",").map(Number);
					t({
						type: "REMOVE_SQUARE",
						pos: {
							r: e,
							c: n
						},
						statusId: C
					});
				}
			}
			const a = [];
			if (e.forEach((e, t) => e.forEach((e, n) => {
				e || a.push({
					r: t,
					c: n
				});
			})), n) for (let r = 0; r < 2 && a.length > 0; r++) {
				const e = Math.floor(n.next() * a.length);
				t({
					type: "SET_SQUARE",
					pos: a.splice(e, 1)[0],
					status: {
						id: C,
						duration: 1
					}
				});
			}
		} }
	},
	{
		id: "WARP_STORM_PORTAL",
		name: "传送乱流门",
		isInternal: !0,
		category: w,
		tier: "COMMON",
		description: "踩中后被传送到随机空格。",
		hooks: { onAfterMove: ({ board: e, r: t, c: n, emit: i, prng: a, metadata: r }) => {
			if (!r?.squares?.[`${t},${n}`]?.some((e) => e.id === C)) return;
			const s = [];
			if (e.forEach((e, t) => e.forEach((e, n) => {
				e || s.push({
					r: t,
					c: n
				});
			})), s.length > 0 && a) {
				const e = s[Math.floor(a.next() * s.length)];
				i({
					type: "PLAY_SOUND",
					soundId: "WORMHOLE"
				}), i({
					type: "MOVE",
					from: {
						r: t,
						c: n
					},
					to: e
				}), i({
					type: "SHOW_TEXT",
					text: "Warp Storm Teleport",
					textKey: "LOG_WARP_STORM",
					style: "system",
					pos: e
				});
			}
		} }
	},
	{
		id: "BOSS_MUTINY",
		name: "倒戈协议",
		isInternal: !0,
		category: x,
		tier: "LEGENDARY",
		description: "定期策反非王棋子",
		hooks: { onTurnStart: ({ board: e, piece: t, emit: n, prng: i }) => {
			const a = t.metadata?.mutinyTimer || 1;
			if (6 === a) {
				const a = V.findPieces(e, (e) => e.color !== t.color && e.type !== d.KING).map(({ r: e, c: t, piece: n }) => ({
					r: e,
					c: t,
					p: n
				}));
				if (a.length > 0 && i) {
					const e = (e) => ({
						P: 10,
						N: 30,
						B: 30,
						R: 50,
						Q: 90
					})[e] || 0;
					a.sort((t, n) => e(n.p.type) - e(t.p.type));
					const r = a.slice(0, 3), s = r[Math.floor(i.next() * r.length)];
					n({
						type: "SPAWN",
						pos: s,
						piece: {
							...s.p,
							color: t.color,
							statuses: [...s.p.statuses || [], {
								id: _.BETRAYED,
								duration: 2,
								originalColor: s.p.color
							}]
						}
					}), n({
						type: "SHOW_TEXT",
						text: "Mutiny Protocol",
						textKey: "LOG_MUTINY",
						style: "danger",
						pos: s
					});
				}
				n({
					type: "UPDATE_ROSTER_PIECE",
					pieceUid: t.uid,
					updates: { metadata: {
						...t.metadata,
						mutinyTimer: 1
					} }
				});
			} else n({
				type: "UPDATE_ROSTER_PIECE",
				pieceUid: t.uid,
				updates: { metadata: {
					...t.metadata,
					mutinyTimer: a + 1
				} }
			});
		} }
	},
	{
		id: "BOSS_NECROMANCER",
		name: "死灵复苏",
		isInternal: !0,
		category: x,
		tier: "LEGENDARY",
		description: "",
		hooks: { onTurnStart: ({ piece: e, board: t, emit: n, prng: i, roster: a, deployedUids: r }) => {
			const s = e.metadata?.necroTimer || 1;
			if (5 === s) {
				const s = a || [], o = r || [], c = t.flat().filter(Boolean), l = s.filter((t) => t.type !== d.KING && t.color !== e.color && !c.some((e) => e.uid === t.uid) && o.includes(t.uid));
				if (l.length > 0 && i) {
					const a = l[Math.floor(i.next() * l.length)], r = [];
					if (t.forEach((e, t) => e.forEach((e, n) => {
						e || r.push({
							r: t,
							c: n
						});
					})), r.length > 0) {
						const t = r[Math.floor(i.next() * r.length)];
						n({
							type: "SPAWN",
							pos: t,
							piece: {
								...a,
								id: Ie(),
								uid: `zombie-${Ie()}`,
								color: e.color,
								statuses: [{
									id: _.ENCRYPTED,
									duration: 99
								}]
							}
						}), n({
							type: "SHOW_TEXT",
							text: "Necrotic Rebirth",
							textKey: "LOG_NECRO_REVIVE",
							style: "danger",
							pos: t
						});
					}
				}
				n({
					type: "UPDATE_ROSTER_PIECE",
					pieceUid: e.uid,
					updates: { metadata: {
						...e.metadata,
						necroTimer: 1
					} }
				});
			} else n({
				type: "UPDATE_ROSTER_PIECE",
				pieceUid: e.uid,
				updates: { metadata: {
					...e.metadata,
					necroTimer: s + 1
				} }
			});
		} }
	},
	{
		id: "ZOMBIE_DECAY",
		name: "丧尸",
		isInternal: !0,
		category: W,
		tier: "COMMON",
		description: "",
		hooks: { onAfterMove: ({ r: e, c: t, emit: n }) => {
			n({
				type: "KILL",
				pos: {
					r: e,
					c: t
				}
			});
		} }
	},
	{
		id: "BOSS_MIRROR_MATCH",
		name: "克隆工厂",
		isInternal: !0,
		category: x,
		tier: "LEGENDARY",
		description: "",
		hooks: { onTurnStart: ({ board: e, piece: t, emit: n, historyLength: i }) => {
			0 !== (i || 0) || t.metadata?.mirrorMatched || (V.findPieces(e, (e) => e.color === c && e.type !== d.KING).forEach(({ r: t, c: i, piece: a }) => {
				const r = 7 - t, s = 7 - i;
				e[r][s] || n({
					type: "SPAWN",
					pos: {
						r,
						c: s
					},
					piece: {
						...a,
						id: Ie(),
						uid: `mirror-${Ie()}`,
						color: l
					}
				});
			}), n({
				type: "UPDATE_ROSTER_PIECE",
				pieceUid: t.uid,
				updates: { metadata: {
					...t.metadata,
					mirrorMatched: !0
				} }
			}), n({
				type: "SHOW_TEXT",
				text: "Clone Factory",
				textKey: "LOG_CLONE_FACTORY",
				style: "danger"
			}));
		} }
	},
	{
		id: "BOSS_HIVE_MOTHER",
		name: "寄生母巢",
		isInternal: !0,
		category: x,
		tier: "LEGENDARY",
		description: "",
		hooks: { onTurnStart: ({ board: e, piece: t, emit: n, prng: i }) => {
			const a = t.metadata?.hiveTimer || 1;
			if (5 === a) {
				const a = [];
				for (let t = 0; t < 4; t++) for (let n = 0; n < 8; n++) e[t][n] || a.push({
					r: t,
					c: n
				});
				if (a.length > 0 && i) {
					const e = a[Math.floor(i.next() * a.length)];
					n({
						type: "SPAWN",
						pos: e,
						piece: {
							id: Ie(),
							uid: `egg-${Ie()}`,
							type: d.PAWN,
							color: t.color,
							level: 1,
							skills: ["EGG_HATCH"],
							statuses: [],
							maxSlots: 0,
							equippedItems: []
						}
					}), n({
						type: "SHOW_TEXT",
						text: "Hatch Egg",
						textKey: "LOG_HATCH_EGG",
						style: "danger",
						pos: e
					});
				}
				n({
					type: "UPDATE_ROSTER_PIECE",
					pieceUid: t.uid,
					updates: { metadata: {
						...t.metadata,
						hiveTimer: 1
					} }
				});
			} else n({
				type: "UPDATE_ROSTER_PIECE",
				pieceUid: t.uid,
				updates: { metadata: {
					...t.metadata,
					hiveTimer: a + 1
				} }
			});
		} }
	},
	{
		id: "EGG_HATCH",
		name: "异形卵",
		isInternal: !0,
		category: x,
		tier: "COMMON",
		description: "3回合后孵化为高级棋子",
		modifiers: { movement: () => [] },
		hooks: { onTurnStart: ({ piece: e, r: t, c: n, emit: i, prng: a }) => {
			const r = e.metadata?.hatchTimer || 1;
			if (3 === r && a) {
				const r = a.next() < .5 ? d.QUEEN : d.ROOK;
				i({
					type: "REMOVE_PIECE",
					pos: {
						r: t,
						c: n
					}
				}), i({
					type: "SPAWN",
					pos: {
						r: t,
						c: n
					},
					piece: {
						id: Ie(),
						uid: `hatched-${Ie()}`,
						type: r,
						color: e.color,
						level: 1,
						skills: [],
						statuses: [],
						maxSlots: 1,
						equippedItems: []
					}
				}), i({
					type: "SHOW_TEXT",
					text: "Hatched!",
					textKey: "LOG_EGG_HATCHED",
					style: "danger",
					pos: {
						r: t,
						c: n
					}
				});
			} else i({
				type: "SPAWN",
				pos: {
					r: t,
					c: n
				},
				piece: {
					...e,
					metadata: {
						...e.metadata,
						hatchTimer: r + 1
					}
				}
			}), i({
				type: "SHOW_TEXT",
				text: "Hatching in " + (3 - r),
				textKey: "LOG_EGG_HATCHING",
				textParams: { count: 3 - r },
				style: "danger",
				pos: {
					r: t,
					c: n
				}
			});
		} }
	},
	{
		id: "BOSS_ENRAGE",
		name: "狂暴阈值",
		isInternal: !0,
		category: x,
		tier: "LEGENDARY",
		description: "每 4 回合行动两次",
		hooks: { onTurnStart: ({ piece: e, emit: t, historyLength: n }) => {
			(Math.floor((n || 0) / 2) + 1) % 4 == 0 && e.color === l && (t({
				type: "SET_EXTRA_MOVE",
				active: !0
			}), t({
				type: "SHOW_TEXT",
				text: "Enrage: Double Action!",
				textKey: "LOG_ENRAGE_DOUBLE",
				style: "danger"
			}));
		} }
	},
	{
		id: "SQUARE_LASER_GRID",
		name: "高压电网",
		isInternal: !0,
		category: w,
		tier: "COMMON",
		description: "高压电网：每奇数回合（轮次开始时）通电，摧毁格上的棋子；王免疫。",
		hooks: { onTurnStart: ({ r: e, c: t, emit: n, board: i, historyLength: a }) => {
			const r = a || 0, s = Math.floor(r / 2) + 1;
			r % 2 == 0 && s % 2 != 0 && (n({
				type: "PLAY_SOUND",
				soundId: "LASER_GRID"
			}), i[e][t] && i[e][t].type !== d.KING && n({
				type: "KILL",
				pos: {
					r: e,
					c: t
				}
			}));
		} }
	},
	{
		id: "ANTI_PAWN_MINE",
		name: "反步兵地雷",
		isInternal: !0,
		category: w,
		tier: "COMMON",
		description: "反步兵地雷：仅“兵”踩中时引爆，摧毁周围 3x3 内的棋子（王免疫）并消耗地雷；其他棋子踩上不受影响。",
		hooks: { onAfterMove: ({ piece: e, r: t, c: n, board: i, emit: a }) => {
			if (e.type === d.PAWN) {
				a({
					type: "PLAY_SOUND",
					soundId: "LANDMINE"
				}), a({
					type: "REMOVE_SQUARE",
					pos: {
						r: t,
						c: n
					},
					statusId: N
				});
				for (let e = -1; e <= 1; e++) for (let r = -1; r <= 1; r++) {
					const s = t + e, o = n + r;
					s >= 0 && s < 8 && o >= 0 && o < 8 && i[s][o] && i[s][o].type !== d.KING && a({
						type: "KILL",
						pos: {
							r: s,
							c: o
						}
					});
				}
			}
		} }
	},
	{
		id: "TIME_ANOMALY",
		name: "时间刺客",
		isInternal: !0,
		category: w,
		tier: "COMMON",
		description: "踩中后放逐3回合",
		hooks: { onAfterMove: ({ piece: e, r: t, c: n, emit: i }) => {
			i({
				type: "PLAY_SOUND",
				soundId: "TELEPORT"
			}), i({
				type: "REMOVE_PIECE",
				pos: {
					r: t,
					c: n
				}
			}), i({
				type: "SET_SQUARE",
				pos: {
					r: t,
					c: n
				},
				status: {
					id: "TIME_ANOMALY_REBIRTH",
					duration: 3,
					metadata: { piece: e }
				}
			}), i({
				type: "SHOW_TEXT",
				text: "Time Banished",
				textKey: "LOG_TIME_BANISHED",
				style: "system",
				pos: {
					r: t,
					c: n
				}
			});
		} }
	},
	{
		id: "TIME_ANOMALY_REBIRTH",
		name: "时间回溯",
		isInternal: !0,
		category: w,
		tier: "COMMON",
		description: "时间回溯：3 回合后，被放逐的棋子回到原格；若原格已被占据，先摧毁占据者再复活。",
		hooks: { onTurnStart: ({ r: e, c: t, emit: n, board: i, metadata: a }) => {
			const r = (a?.squares?.[`${e},${t}`] || []).find((e) => "TIME_ANOMALY_REBIRTH" === e.id);
			if (r && 1 === r.duration) {
				const a = r.metadata.piece;
				i[e][t] ? (n({
					type: "KILL",
					pos: {
						r: e,
						c: t
					}
				}), n({
					type: "SPAWN",
					pos: {
						r: e,
						c: t
					},
					piece: a
				})) : (n({
					type: "SPAWN",
					pos: {
						r: e,
						c: t
					},
					piece: a
				}), n({
					type: "SHOW_TEXT",
					text: "Returned",
					textKey: "LOG_TIME_REBIRTH",
					style: "system",
					pos: {
						r: e,
						c: t
					}
				}));
			}
		} }
	},
	{
		id: "ICE_SLICK",
		name: "冰面",
		isInternal: !0,
		category: w,
		tier: "COMMON",
		description: "冰面：棋子无法停留在冰面上，会沿原方向继续滑行，直到离开冰面或前方受阻。",
		hooks: { onAfterMove: ({ piece: e, from: t, r: n, c: i, board: a, emit: r, metadata: s }) => {
			if (!t || e.metadata?.isSliding) return;
			const o = Math.sign(n - t.r), c = Math.sign(i - t.c);
			if (0 === o && 0 === c) return;
			let l = n + o, d = i + c, E = null;
			for (; l >= 0 && l < 8 && d >= 0 && d < 8 && !a[l][d] && (E = {
				r: l,
				c: d
			}, s?.squares?.[`${l},${d}`]?.some((e) => e.id === f));) l += o, d += c;
			E && (r({
				type: "UPDATE_ROSTER_PIECE",
				pieceUid: e.uid,
				updates: { metadata: {
					...e.metadata,
					isSliding: !0
				} }
			}), r({
				type: "MOVE",
				from: {
					r: n,
					c: i
				},
				to: E
			}));
		} }
	},
	{
		id: "WORMHOLE_A",
		name: "传送阵A",
		isInternal: !0,
		category: w,
		tier: "COMMON",
		description: "传送阵A：踩上后移动到配对传送阵 B；出口被占据时不传送。",
		hooks: { onAfterMove: ({ r: e, c: t, emit: n, metadata: i, board: a }) => {
			const r = i?.squares || {};
			for (const s in r) if (r[s].some((e) => e.id === G)) {
				const [i, r] = s.split(",").map(Number);
				a[i][r] || (n({
					type: "PLAY_SOUND",
					soundId: "WORMHOLE"
				}), n({
					type: "MOVE",
					from: {
						r: e,
						c: t
					},
					to: {
						r: i,
						c: r
					}
				}), n({
					type: "SHOW_TEXT",
					text: "Teleport",
					textKey: "LOG_TELEPORT",
					style: "system",
					pos: {
						r: i,
						c: r
					}
				}));
				break;
			}
		} }
	},
	{
		id: "WORMHOLE_B",
		name: "传送阵B",
		isInternal: !0,
		category: w,
		tier: "COMMON",
		description: "传送阵B：踩上后移动到配对传送阵 A；出口被占据时不传送。",
		hooks: { onAfterMove: ({ r: e, c: t, emit: n, metadata: i, board: a }) => {
			const r = i?.squares || {};
			for (const s in r) if (r[s].some((e) => e.id === y)) {
				const [i, r] = s.split(",").map(Number);
				a[i][r] || (n({
					type: "PLAY_SOUND",
					soundId: "WORMHOLE"
				}), n({
					type: "MOVE",
					from: {
						r: e,
						c: t
					},
					to: {
						r: i,
						c: r
					}
				}), n({
					type: "SHOW_TEXT",
					text: "Teleport",
					textKey: "LOG_TELEPORT",
					style: "system",
					pos: {
						r: i,
						c: r
					}
				}));
				break;
			}
		} }
	},
	{
		id: "MUD_SWAMP",
		name: "泥沼",
		isInternal: !0,
		category: w,
		tier: "COMMON",
		description: "泥沼：直线滑行的棋子（后/车/象）可以踏入，但无法再继续前进；马与兵不受影响。",
		modifiers: { squareBlockMovement: () => !1 },
		hooks: { onAfterMove: ({ emit: e, r: t, c: n }) => {
			e({
				type: "PLAY_SOUND",
				soundId: "MUD_SWAMP"
			}), e({
				type: "SHOW_TEXT",
				text: "Trapped in Mud",
				textKey: "LOG_MUD_SWAMP",
				style: "system",
				pos: {
					r: t,
					c: n
				}
			});
		} }
	},
	{
		id: "CONVEYOR_BELT",
		name: "传送带",
		isInternal: !0,
		category: w,
		tier: "COMMON",
		description: "传送带：你方回合开始时，站在上面的棋子沿箭头推移 1 格；推出棋盘边缘即坠落死亡，撞上任何棋子则同归于尽。",
		hooks: { onTurnStart: ({ board: e, r: t, c: n, emit: i, metadata: a, historyLength: r }) => {
			if ((r || 0) % 2 != 0) return;
			if (!e[t][n]) return;
			const s = (a?.squares?.[`${t},${n}`]?.find((e) => "CONVEYOR_BELT" === e.id))?.metadata?.dir || {
				dr: 0,
				dc: 1
			}, o = t + s.dr, c = n + s.dc;
			o < 0 || o >= 8 || c < 0 || c >= 8 ? (i({
				type: "PLAY_SOUND",
				soundId: "MUD_SWAMP"
			}), i({
				type: "KILL",
				pos: {
					r: t,
					c: n
				}
			}), i({
				type: "SHOW_TEXT",
				text: "Fell off",
				textKey: "LOG_FALL_OFF",
				style: "danger",
				pos: {
					r: t,
					c: n
				}
			})) : e[o][c] ? (i({
				type: "PLAY_SOUND",
				soundId: "LANDMINE"
			}), i({
				type: "KILL",
				pos: {
					r: t,
					c: n
				}
			}), i({
				type: "KILL",
				pos: {
					r: o,
					c
				}
			}), i({
				type: "SHOW_TEXT",
				text: "Crash!",
				textKey: "LOG_CRASH",
				style: "danger",
				pos: {
					r: o,
					c
				}
			})) : (i({
				type: "PLAY_SOUND",
				soundId: "CONVEYOR"
			}), i({
				type: "MOVE",
				from: {
					r: t,
					c: n
				},
				to: {
					r: o,
					c
				}
			}));
		} }
	},
	{
		id: "OVERCLOCK_NODE",
		name: "超频基站",
		isInternal: !0,
		category: w,
		tier: "COMMON",
		description: "超频基站：回合开始时，清空站在该格棋子身上所有技能冷却。",
		hooks: { onTurnStart: ({ board: e, emit: t, r: n, c: i }) => {
			const a = e[n][i];
			if (a) {
				const e = a.metadata || {}, r = {};
				let s = !1;
				for (const t in e) (t.toLowerCase().includes("cooldown") || t.toLowerCase().includes("cd")) && (r[t] = 0, s = !0);
				s && (t({
					type: "UPDATE_ROSTER_PIECE",
					pieceUid: a.uid,
					updates: { metadata: {
						...e,
						...r
					} }
				}), t({
					type: "SHOW_TEXT",
					text: "Cooldown Cleared",
					textKey: "LOG_CD_CLEARED",
					style: "gold",
					pos: {
						r: n,
						c: i
					}
				}));
			}
		} }
	},
	{
		id: "DATA_VAULT",
		name: "数据金库",
		isInternal: !0,
		category: w,
		tier: "COMMON",
		description: "数据金库：你方棋子停留在该格时，每个回合开始获得 3 金币。",
		hooks: { onTurnStart: ({ board: e, emit: t, r: n, c: i }) => {
			const a = e[n][i];
			a && a.color === c && (t({
				type: "MODIFY_GOLD",
				amount: 3,
				reason: "DATA_VAULT"
			}), t({
				type: "SHOW_TEXT",
				text: "+3G",
				textKey: "LOG_GOLD_PLUS",
				textParams: { amount: 3 },
				style: "gold",
				pos: {
					r: n,
					c: i
				}
			}));
		} }
	},
	{
		id: "SIGNAL_RELAY",
		name: "信号放大器",
		isInternal: !0,
		category: w,
		tier: "COMMON",
		description: "信号放大器：站在该格上的棋子被视为信号源，即使全局断网也能维持局部连通。",
		modifiers: { networkSource: () => !0 }
	},
	{
		id: "FARADAY_CAGE",
		name: "法拉第笼",
		isInternal: !0,
		category: w,
		tier: "COMMON",
		description: "法拉第笼：棋子踏上该格时立刻被冻结 2 回合；每个回合开始仍在此格的棋子会持续被冻结。",
		hooks: {
			onTurnStart: ({ emit: e, r: t, c: n, board: i }) => {
				i[t][n] && (e({
					type: "PLAY_SOUND",
					soundId: "FARADAY_CAGE"
				}), e({
					type: "ADD_STATUS",
					pos: {
						r: t,
						c: n
					},
					statusId: _.FROZEN,
					duration: 2
				}));
			},
			onAfterMove: ({ emit: e, r: t, c: n }) => {
				e({
					type: "PLAY_SOUND",
					soundId: "FARADAY_CAGE"
				}), e({
					type: "ADD_STATUS",
					pos: {
						r: t,
						c: n
					},
					statusId: _.FROZEN,
					duration: 2
				});
			}
		}
	},
	{
		id: "DANGER_ZONE",
		name: "危险区域",
		isInternal: !0,
		category: w,
		tier: "LEGENDARY",
		description: "轨道轰炸锁定区，禁止部署",
		modifiers: { blockDeployment: () => !0 }
	},
	{
		id: "BOSS_TURN_LIMIT",
		name: "系统崩溃倒计时",
		isInternal: !0,
		category: x,
		tier: "LEGENDARY",
		description: "BOSS在场时存在系统倒计时，归零玩家失败。",
		hooks: {
			onTurnStart: ({ piece: e, emit: t, historyLength: n }) => {
				if (e.color !== l) return;
				const i = e.metadata?.maxTurns;
				if (!i) {
					const n = "undefined" != typeof window && window.rogueStore?.getState()?.chapter || 1, i = Math.max(40, 65 - n);
					t({
						type: "UPDATE_ROSTER_PIECE",
						pieceUid: e.uid,
						updates: { metadata: {
							...e.metadata,
							maxTurns: i
						} }
					}), t({
						type: "UPDATE_METADATA",
						updates: { turnsRemaining: i }
					});
					return;
				}
				const a = i - Math.floor((n || 0) / 2);
				t({
					type: "UPDATE_METADATA",
					updates: { turnsRemaining: a }
				}), a <= 0 && (t({
					type: "SET_WINNER",
					winner: l
				}), t({
					type: "SHOW_TEXT",
					text: "能量耗尽 - 任务失败",
					textKey: "LOG_ENERGY_DEPLETED",
					style: "danger"
				}));
			},
			onDeath: ({ emit: e }) => {
				e({
					type: "UPDATE_METADATA",
					updates: { turnsRemaining: void 0 }
				});
			}
		},
		getDisplayStatus: (e, t) => {
			const n = "undefined" != typeof window && window.gameStore?.getState()?.history?.length || 0, i = e.metadata?.maxTurns || 40;
			return {
				text: `系统崩溃: ${Math.max(0, i - Math.floor(n / 2))}T`,
				colorClass: "text-red-500 animate-pulse"
			};
		}
	},
	{
		id: "DECOY_TERMINAL_EXPIRE",
		name: "影终端·过期",
		isInternal: !0,
		category: W,
		tier: "COMMON",
		description: "影终端生存倒计时。",
		hooks: { onTurnStart: ({ r: e, c: t, piece: n, emit: i }) => {
			const a = n.metadata?.decoyAge || 0;
			i(a >= 1 ? {
				type: "REMOVE_PIECE",
				pos: {
					r: e,
					c: t
				}
			} : {
				type: "UPDATE_ROSTER_PIECE",
				pieceUid: n.uid,
				updates: { metadata: {
					...n.metadata,
					decoyAge: a + 1
				} }
			});
		} }
	}
]), Pe = (Ce.filter((e) => e.category === x).map((e) => e.id), {
	PIECE: {
		[d.PAWN]: 10,
		[d.KNIGHT]: 25,
		[d.BISHOP]: 25,
		[d.ROOK]: 40,
		[d.QUEEN]: 80,
		[d.KING]: 50
	},
	ITEM_TIER: {
		COMMON: 20,
		RARE: 50,
		EPIC: 120,
		LEGENDARY: 300
	},
	TIER: {
		COMMON: 1,
		RARE: 3,
		EPIC: 10,
		LEGENDARY: 30
	},
	LEVEL_MULTIPLIER: .05
}), De = {
	COMMON: {
		min: 15,
		max: 25
	},
	RARE: {
		min: 40,
		max: 60
	},
	EPIC: {
		min: 90,
		max: 130
	},
	LEGENDARY: {
		min: 180,
		max: 250
	}
};
d.PAWN, d.KNIGHT, d.BISHOP, d.ROOK, d.QUEEN, d.KING, d.PAWN, d.KNIGHT, d.BISHOP, d.ROOK, d.QUEEN, d.KING;
function be(e, t = c) {
	return {
		id: Ie(),
		uid: `u-${Ie()}`,
		type: e,
		color: t,
		level: 1,
		skills: [],
		learnedSkills: [],
		traits: [],
		statuses: [],
		maxSlots: e === d.KING ? 3 : 1,
		equippedItems: [],
		metadata: {}
	};
}
function Me(e, t) {
	const n = Pe.PIECE[e] || 10;
	return Math.floor(n / 20) + t;
}
function Ue(e, t, n, i, a) {
	const r = Math.abs(n - e), s = Math.abs(i - t);
	if (r !== s && 0 !== r && 0 !== s) return !1;
	const o = n > e ? 1 : n < e ? -1 : 0, c = i > t ? 1 : i < t ? -1 : 0;
	let l = e + o, d = t + c;
	for (; l !== n || d !== i;) {
		if (a[l][d]) return !1;
		l += o, d += c;
	}
	return !0;
}
function Ke(e, t, n, i, a) {
	let r = null, s = Infinity;
	return V.findPieces(e, (e) => e.color === i && e.type === a).forEach(({ r: e, c: i }) => {
		const a = Math.max(Math.abs(t - e), Math.abs(n - i));
		a < s && a > 0 && (s = a, r = {
			r: e,
			c: i
		});
	}), r;
}
function ve(e, t, n, i, a) {
	for (const [r, s] of [
		[-1, 0],
		[1, 0],
		[0, -1],
		[0, 1],
		[-1, -1],
		[-1, 1],
		[1, -1],
		[1, 1]
	]) {
		const o = t + r, c = n + s;
		if (o >= 0 && o < 8 && c >= 0 && c < 8) {
			const t = e[o][c];
			t && t.color !== i.color && t.type !== d.KING && a({
				type: "ADD_STATUS",
				pos: {
					r: o,
					c
				},
				statusId: _.SILENCED,
				duration: 2
			});
		}
	}
}
function ke(e, t, n, i, a) {
	const r = [];
	for (const [s, o] of [
		[-1, 0],
		[1, 0],
		[0, -1],
		[0, 1],
		[-1, -1],
		[-1, 1],
		[1, -1],
		[1, 1]
	]) {
		const a = t + s, c = n + o;
		if (a >= 0 && a < 8 && c >= 0 && c < 8) {
			const t = e[a][c];
			t && t.color !== i.color && r.push({
				r: a,
				c
			});
		}
	}
	r.length > 0 && r.length <= 2 && (r.forEach((e) => {
		a({
			type: "ADD_STATUS",
			pos: e,
			statusId: _.GRAVITY_LOCKED,
			duration: 99
		});
	}), a({
		type: "SHOW_TEXT",
		text: "Gravity Well Active",
		textKey: "LOG_GRAVITY_WELL",
		style: "system",
		pos: {
			r: t,
			c: n
		}
	}));
}
const Be = [
	{
		id: "QUEEN_COMMAND",
		name: "统率",
		tier: "COMMON",
		category: B,
		pieceType: d.QUEEN,
		description: "周围 1 格 of 友军可获得全向 1 格 of 移动能力。若周围无友军，自身获得 1 金币战备金。",
		range: {
			type: "chebyshev",
			radius: 1
		},
		hooks: { onTurnStart: ({ board: e, r: t, c: n, piece: i, emit: a }) => {
			const r = [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1],
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			];
			let s = !1;
			for (const [o, c] of r) {
				const r = t + o, l = n + c;
				if (r >= 0 && r < 8 && l >= 0 && l < 8) {
					const t = e[r][l];
					t && t.color === i.color && (a({
						type: "ADD_STATUS",
						pos: {
							r,
							c: l
						},
						statusId: _.COMMAND_AURA,
						duration: 2
					}), s = !0);
				}
			}
			s || i.color !== c || a({
				type: "MODIFY_GOLD",
				amount: 1,
				reason: "QUEEN_ALONE"
			});
		} }
	},
	{
		id: "QUEEN_AURA",
		name: "威压",
		tier: "COMMON",
		category: B,
		pieceType: d.QUEEN,
		description: "周围 2 格内 of 敌方\"车\"和\"象\"移动范围限制为两格。",
		range: {
			type: "chebyshev",
			radius: 2
		},
		hooks: { onTurnStart: ({ board: e, r: t, c: n, piece: i, emit: a }) => {
			for (let r = -2; r <= 2; r++) for (let s = -2; s <= 2; s++) {
				const o = t + r, c = n + s;
				if (o >= 0 && o < 8 && c >= 0 && c < 8) {
					const t = e[o][c];
					!t || t.color === i.color || t.type !== d.ROOK && t.type !== d.BISHOP || a({
						type: "ADD_STATUS",
						pos: {
							r: o,
							c
						},
						statusId: _.AURA_SUPPRESSED,
						duration: 2
					});
				}
			}
		} }
	},
	{
		id: "QUEEN_PROVISION",
		name: "皇家补给",
		tier: "COMMON",
		category: B,
		pieceType: d.QUEEN,
		description: "每回合开始时，若后联网，增加 2 金币。",
		hooks: { onTurnStart: ({ board: e, r: t, c: n, piece: i, emit: a, metadata: r }) => {
			const { networked: s } = de(e, i.color, r);
			s[t][n] && i.color === c && a({
				type: "MODIFY_GOLD",
				amount: 2,
				reason: "PROVISION"
			});
		} }
	},
	{
		id: "QUEEN_GRACE",
		name: "优雅",
		tier: "COMMON",
		category: B,
		pieceType: d.QUEEN,
		description: "吃子后，若落点还是敌人控制区，该棋子可立刻再次行动一次（无视网络连接，仅限移动1格，不可吃子）。",
		hooks: {
			onKill: ({ board: e, r: t, c: n, piece: i, emit: a, metadata: r }) => {
				const { control: s } = de(e, i.color === c ? l : c, r);
				s[t][n] && (a({
					type: "ADD_STATUS",
					pos: {
						r: t,
						c: n
					},
					statusId: _.GRACE_LIMIT,
					duration: 2
				}), a({
					type: "ADD_STATUS",
					pos: {
						r: t,
						c: n
					},
					statusId: _.CANNOT_CAPTURE,
					duration: 2
				}), a({
					type: "SET_EXTRA_MOVE",
					active: !0
				}), a({
					type: "UPDATE_METADATA",
					updates: { lockedActionUid: i.uid }
				}), a({
					type: "SET_UI_SELECTION",
					pos: {
						r: t,
						c: n
					},
					uid: i.uid ?? null
				}), a({
					type: "SHOW_TEXT",
					text: "Graceful Steps",
					textKey: "LOG_GRACE",
					style: "system"
				}));
			},
			onAfterMove: ({ r: e, c: t, piece: n, emit: i }) => {
				n.statuses?.some((e) => e.id === _.GRACE_LIMIT) && (i({
					type: "REMOVE_STATUS",
					pos: {
						r: e,
						c: t
					},
					statusId: _.GRACE_LIMIT
				}), i({
					type: "REMOVE_STATUS",
					pos: {
						r: e,
						c: t
					},
					statusId: _.CANNOT_CAPTURE
				}));
			}
		}
	},
	{
		id: "QUEEN_DOMINATE",
		name: "霸道",
		tier: "RARE",
		category: B,
		pieceType: d.QUEEN,
		description: "相邻 of 敌方棋子失去所有非基础技能。",
		range: {
			type: "chebyshev",
			radius: 1
		},
		hooks: {
			onTurnStart: ({ board: e, r: t, c: n, piece: i, emit: a }) => {
				ve(e, t, n, i, a);
			},
			onAfterMove: ({ board: e, r: t, c: n, piece: i, emit: a }) => {
				ve(e, t, n, i, a);
			}
		}
	},
	{
		id: "QUEEN_DECOY",
		name: "幻影",
		tier: "RARE",
		category: B,
		pieceType: d.QUEEN,
		description: "被攻击死亡时，如果库存有“兵”，自动消耗一个兵来抵消本次死亡并随机传送。",
		hooks: { onDeath: ({ r: e, c: t, piece: n, board: i, roster: a, deployedUids: r, cancelAction: s, emit: o, prng: c }) => {
			const l = /* @__PURE__ */ new Set();
			for (let d = 0; d < 8; d++) for (let e = 0; e < 8; e++) {
				const t = i[d][e];
				t && t.uid && l.add(t.uid);
			}
			const E = a?.find((e) => e.type === d.PAWN && e.uid && !l.has(e.uid));
			if (E && c) {
				let a = null;
				const r = [
					[-3, 0],
					[3, 0],
					[0, -3],
					[0, 3],
					[-2, -2],
					[2, 2]
				].sort(() => c.next() - .5);
				for (const [n, s] of r) {
					const r = e + n, o = t + s;
					if (r >= 0 && r < 8 && o >= 0 && o < 8 && !i[r][o]) {
						a = {
							r,
							c: o
						};
						break;
					}
				}
				a && (s?.(), o({
					type: "REMOVE_PIECE",
					pos: {
						r: e,
						c: t
					}
				}), o({
					type: "REMOVE_FROM_ROSTER",
					pieceUid: E.uid
				}), o({
					type: "MODIFY_RESERVE",
					color: n.color,
					pieceType: d.PAWN,
					amount: -1
				}), o({
					type: "SPAWN",
					pos: a,
					piece: {
						...n,
						statuses: []
					}
				}), o({
					type: "SHOW_TEXT",
					text: "Decoy Substitute",
					textKey: "LOG_DECOY_DEATH",
					style: "system"
				}));
			}
		} }
	},
	{
		id: "QUEEN_LINKAGE",
		name: "连锁部署",
		tier: "RARE",
		category: B,
		pieceType: d.QUEEN,
		description: "部署时，可立即免费从库存部署最多两个“兵”在后身边。",
		hooks: { onDeploy: ({ r: e, c: t, piece: n, board: i, reserves: a, roster: r, deployedUids: s, emit: o, prng: c }) => {
			const l = a?.[n.color]?.[d.PAWN] ?? 0;
			let E = 0;
			if (!c) return;
			const u = /* @__PURE__ */ new Set();
			for (let d = 0; d < 8; d++) for (let e = 0; e < 8; e++) {
				const t = i[d][e];
				t && t.uid && u.add(t.uid);
			}
			const m = r ? r.filter((e) => e.color === n.color && e.type === d.PAWN && e.uid && !u.has(e.uid)) : [], _ = [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1],
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			].sort(() => c.next() - .5);
			for (const [A, p] of _) {
				if (E >= 2 || E >= l) break;
				const a = e + A, s = t + p;
				if (a >= 0 && a < 8 && s >= 0 && s < 8 && !i[a][s]) {
					let e;
					o({
						type: "MODIFY_RESERVE",
						color: n.color,
						pieceType: d.PAWN,
						amount: -1
					});
					const t = r && m.length > E;
					e = t ? {
						...m[E],
						statuses: []
					} : {
						id: Ie(),
						uid: `u-${Ie()}`,
						type: d.PAWN,
						color: n.color,
						level: 1,
						skills: [],
						statuses: [],
						maxSlots: 1,
						equippedItems: []
					}, o({
						type: "SPAWN",
						pos: {
							r: a,
							c: s
						},
						piece: e
					}), t && o({
						type: "RECORD_DEPLOY",
						uid: e.uid
					}), E++;
				}
			}
		} }
	},
	{
		id: "QUEEN_BRIBE",
		name: "策反",
		tier: "RARE",
		category: B,
		pieceType: d.QUEEN,
		description: "吃掉敌方\"兵\"时，有 50% 概率将其转化为己方库存。",
		hooks: { onKill: ({ piece: e, victim: t, r: n, c: i, emit: a, prng: r }) => {
			if (t && t.type === d.PAWN && r && r.next() < .5) {
				a({
					type: "MODIFY_RESERVE",
					color: e.color,
					pieceType: d.PAWN,
					amount: 1
				});
				const t = Date.now();
				a({
					type: "ADD_TO_ROSTER",
					piece: {
						id: `bribe-${t}`,
						uid: `u-${t}`,
						type: d.PAWN,
						color: e.color,
						level: 1,
						skills: [],
						statuses: [],
						maxSlots: 1,
						equippedItems: []
					}
				}), a({
					type: "SHOW_TEXT",
					text: "Bribe Successful",
					textKey: "LOG_BRIBE_SUCCESS",
					style: "system"
				});
			}
		} }
	},
	{
		id: "QUEEN_MULTICAST",
		name: "镜像维度",
		tier: "EPIC",
		category: B,
		pieceType: d.QUEEN,
		description: "如果本回合移动没有吃子且在连线状态，该棋子可立刻再次行动一次（无视网络连接，但不能吃子）。",
		hooks: {
			onTurnStart: ({ piece: e, emit: t }) => {
				e.metadata?.multicastUsed && t({
					type: "UPDATE_ROSTER_PIECE",
					pieceUid: e.uid,
					updates: { metadata: {
						...e.metadata,
						multicastUsed: !1
					} }
				});
			},
			onAfterMove: ({ board: e, r: t, c: n, piece: i, victim: a, emit: r, metadata: s }) => {
				if (!a && !i.metadata?.multicastUsed) {
					const { networked: a } = de(e, i.color, s);
					a[t][n] && (r({
						type: "ADD_STATUS",
						pos: {
							r: t,
							c: n
						},
						statusId: _.CANNOT_CAPTURE,
						duration: 1
					}), r({
						type: "SET_EXTRA_MOVE",
						active: !0
					}), r({
						type: "UPDATE_METADATA",
						updates: { lockedActionUid: i.uid }
					}), r({
						type: "SET_UI_SELECTION",
						pos: {
							r: t,
							c: n
						},
						uid: i.uid ?? null
					}), r({
						type: "UPDATE_ROSTER_PIECE",
						pieceUid: i.uid,
						updates: { metadata: {
							...i.metadata,
							multicastUsed: !0
						} }
					}), r({
						type: "SHOW_TEXT",
						text: "Mirror Double-Action",
						textKey: "LOG_MIRROR_MULTICAST",
						style: "system"
					}));
				}
			}
		}
	},
	{
		id: "QUEEN_INSIGHT",
		name: "洞察",
		tier: "EPIC",
		category: B,
		pieceType: d.QUEEN,
		description: "只要后在场，敌方隐身单位自动显形。",
		hooks: { onTurnStart: ({ board: e, piece: t, emit: n, isAISimulation: i }) => {
			V.findPieces(e, (e) => e.color !== t.color && e.statuses?.some((e) => e.id === _.INVISIBLE)).forEach(({ r: e, c: t }) => {
				n({
					type: "REMOVE_STATUS",
					pos: {
						r: e,
						c: t
					},
					statusId: _.INVISIBLE
				}), i || Y.emit(q, {
					key: "revealed_invis",
					value: 1,
					isLifetimeOnly: !0
				});
			});
		} }
	},
	{
		id: "QUEEN_RECALL",
		name: "战术撤退",
		tier: "EPIC",
		category: B,
		pieceType: d.QUEEN,
		description: "主动：将后立即瞬移回国王身边的空格（冷却 3 回合）。",
		range: {
			type: "chebyshev",
			radius: 0
		},
		activeSpec: {
			targeting: "self",
			cooldownKey: "recallCooldown",
			execute: (e, t, n, i, a, r) => {
				if ((i.metadata?.recallCooldown || 0) > 0) return;
				const s = V.findPieces(e, (e) => e.color === i.color && e.type === d.KING)[0], o = s ? s.r : -1, c = s ? s.c : -1;
				if (-1 !== o) for (const [l, d] of [
					[-1, 0],
					[1, 0],
					[0, -1],
					[0, 1],
					[-1, -1],
					[-1, 1],
					[1, -1],
					[1, 1]
				]) {
					const a = o + l, s = c + d;
					if (a >= 0 && a < 8 && s >= 0 && s < 8 && !e[a][s]) return r({
						type: "UPDATE_ROSTER_PIECE",
						pieceUid: i.uid,
						updates: { metadata: {
							...i.metadata,
							recallCooldown: 3
						} }
					}), r({
						type: "MOVE",
						from: {
							r: t,
							c: n
						},
						to: {
							r: a,
							c: s
						}
					}), void r({
						type: "SHOW_TEXT",
						text: "Tactical Retreat",
						textKey: "LOG_TACTICAL_RECALL",
						style: "system",
						pos: {
							r: a,
							c: s
						}
					});
				}
				r({
					type: "SHOW_TEXT",
					text: "No space near King",
					textKey: "LOG_NO_EMPTY_KING",
					style: "system",
					pos: {
						r: t,
						c: n
					}
				});
			}
		},
		hooks: { onTurnStart: ({ piece: e, emit: t }) => {
			e.metadata?.recallCooldown > 0 && t({
				type: "UPDATE_ROSTER_PIECE",
				pieceUid: e.uid,
				updates: { metadata: {
					...e.metadata,
					recallCooldown: e.metadata.recallCooldown - 1
				} }
			});
		} }
	},
	{
		id: "QUEEN_TIME_WARP",
		name: "时间倒流",
		tier: "LEGENDARY",
		category: B,
		pieceType: d.QUEEN,
		description: "每 5 个回合，可以获得一次免费的\"悔棋\"机会而不消耗回合数。",
		hooks: { onTurnStart: ({ piece: e, emit: t }) => {
			const n = e.metadata?.warpTurns || 0;
			n >= 4 ? (t({
				type: "UPDATE_CONSTRAINTS",
				maxUndosOffset: 1,
				maxSavesOffset: 0
			}), t({
				type: "SHOW_TEXT",
				text: "Time Warp: +1 Undo",
				textKey: "LOG_TIME_WARP",
				style: "system"
			}), t({
				type: "UPDATE_ROSTER_PIECE",
				pieceUid: e.uid,
				updates: { metadata: {
					...e.metadata,
					warpTurns: 0
				} }
			})) : t({
				type: "UPDATE_ROSTER_PIECE",
				pieceUid: e.uid,
				updates: { metadata: {
					...e.metadata,
					warpTurns: n + 1
				} }
			});
		} },
		getDisplayStatus: (e, t) => ({
			text: t("turnsRemaining", { n: 5 - (e.metadata?.warpTurns || 0) }),
			colorClass: "text-cyan-400"
		})
	},
	{
		id: "QUEEN_NEMESIS",
		name: "复仇女神",
		tier: "LEGENDARY",
		category: B,
		pieceType: d.QUEEN,
		description: "当国王被将军时，后可以移动至棋盘任何空格；若目标在原本攻击范围内，则允许吃子。",
		hooks: { onKill: (e) => {
			e.isAISimulation || Y.emit(q, {
				key: "nemesisKills",
				value: 1,
				isLifetimeOnly: !0
			});
		} },
		modifiers: { movement: (e, t) => {
			const { board: n, piece: i, r: a, c: r } = e, s = V.findPieces(n, (e) => e.type === d.KING && e.color === i.color)[0], o = s ? {
				r: s.r,
				c: s.c
			} : null;
			if (o) {
				const t = i.color === c ? l : c;
				let s = !1;
				for (const [e, i] of [
					[-1, 0],
					[1, 0],
					[0, -1],
					[0, 1],
					[-1, -1],
					[-1, 1],
					[1, -1],
					[1, 1]
				]) {
					let a = o.r + e, r = o.c + i;
					for (; V.isValidPos(a, r);) {
						const c = n[a][r];
						if (c) {
							if (c.color === t) {
								const e = Math.max(Math.abs(a - o.r), Math.abs(r - o.c)), t = a === o.r || r === o.c, n = Math.abs(a - o.r) === Math.abs(r - o.c);
								(t && (c.type === d.QUEEN || c.type === d.ROOK) || n && (c.type === d.QUEEN || c.type === d.BISHOP) || 1 === e) && (s = !0);
							}
							break;
						}
						a += e, r += i;
					}
					if (s) break;
				}
				if (!s) for (const [e, i] of [
					[-2, -1],
					[-2, 1],
					[-1, -2],
					[-1, 2],
					[1, -2],
					[1, 2],
					[2, -1],
					[2, 1]
				]) {
					const a = V.getPiece(n, o.r + e, o.c + i);
					if (a && a.color === t && a.type === d.KNIGHT) {
						s = !0;
						break;
					}
				}
				if (s) {
					const t = [];
					for (let s = 0; s < 8; s++) for (let o = 0; o < 8; o++) {
						if (s === a && o === r) continue;
						const c = n[s][o];
						Ue(a, r, s, o, n) ? c && c.color === i.color && !e.isControlSquares || t.push({
							r: s,
							c: o
						}) : (!c || e.isControlSquares && c.color === i.color) && t.push({
							r: s,
							c: o
						});
					}
					return t;
				}
			}
			return t;
		} }
	},
	{
		id: "QUEEN_ROOK_AUTHORITY",
		name: "战车主权",
		tier: "LEGENDARY",
		category: B,
		pieceType: d.QUEEN,
		description: "只要后连通，离后最近的一名友方“车”强制变为“连通”状态。",
		hooks: { onTurnStart: ({ board: e, piece: t, r: n, c: i, emit: a, metadata: r }) => {
			const { networked: s } = de(e, t.color, r);
			if (s[n][i]) {
				const r = Ke(e, n, i, t.color, d.ROOK);
				r && (a({
					type: "ADD_STATUS",
					pos: r,
					statusId: _.GODHOOD_LINK,
					duration: 2
				}), a({
					type: "SHOW_TEXT",
					text: "Divine Link: Rook",
					textKey: "LOG_ROOK_LINK",
					style: "system",
					pos: r
				}));
			}
		} }
	},
	{
		id: "QUEEN_BISHOP_AUTHORITY",
		name: "主教主权",
		tier: "LEGENDARY",
		category: B,
		pieceType: d.QUEEN,
		description: "只要后连通，离后最近的一名友方“象”强制变为“连通”状态。",
		hooks: { onTurnStart: ({ board: e, piece: t, r: n, c: i, emit: a, metadata: r }) => {
			const { networked: s } = de(e, t.color, r);
			if (s[n][i]) {
				const r = Ke(e, n, i, t.color, d.BISHOP);
				r && (a({
					type: "ADD_STATUS",
					pos: r,
					statusId: _.GODHOOD_LINK,
					duration: 2
				}), a({
					type: "SHOW_TEXT",
					text: "Divine Link: Bishop",
					textKey: "LOG_BISHOP_LINK",
					style: "system",
					pos: r
				}));
			}
		} }
	},
	{
		id: "QUEEN_GRAVITY_WELL",
		name: "重力场",
		tier: "EPIC",
		category: B,
		pieceType: d.QUEEN,
		description: "若相邻敌军不多于2个，这些敌军将被重力锁定，移动范围限制为1格。",
		range: {
			type: "chebyshev",
			radius: 1
		},
		hooks: {
			onAfterMove: ({ board: e, r: t, c: n, piece: i, emit: a }) => {
				ke(e, t, n, i, a);
			},
			onTurnStart: ({ board: e, r: t, c: n, piece: i, emit: a }) => {
				ke(e, t, n, i, a);
			}
		}
	},
	{
		id: "QUEEN_CORONATION",
		name: "皇家授勋",
		tier: "RARE",
		category: B,
		pieceType: d.QUEEN,
		description: "回合开始时，赋予相邻且无技能的友方“兵”一个随机普通技能。",
		hooks: { onTurnStart: ({ board: e, r: t, c: n, piece: i, emit: a, prng: r }) => {
			const s = [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1],
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			];
			if (r) for (const [o, c] of s) {
				const s = t + o, l = n + c;
				if (s >= 0 && s < 8 && l >= 0 && l < 8) {
					const t = e[s][l];
					if (t && t.color === i.color && t.type === d.PAWN && 0 === t.skills.length) {
						const e = fe.filter((e) => "COMMON" === e.tier), n = e[Math.floor(r.next() * e.length)];
						n && (a({
							type: "UPDATE_ROSTER_PIECE",
							pieceUid: t.uid,
							updates: { skills: [n.id] }
						}), a({
							type: "SHOW_TEXT",
							text: `Coronated: ${n.name}`,
							textKey: "LOG_CORONATION",
							textParams: { skill: n.name },
							style: "gold",
							pos: {
								r: s,
								c: l
							}
						}));
					}
				}
			}
		} }
	},
	{
		id: "QUEEN_REQUISITION",
		name: "绝对征用",
		tier: "EPIC",
		category: B,
		pieceType: d.QUEEN,
		description: "主动：消耗10金币，直接摧毁射程内一名“断网”的敌方单位（非王、非后），并回收其价值。",
		range: {
			type: "chebyshev",
			radius: 7
		},
		activeSpec: {
			targeting: "target",
			getAlternatives: (e, t, n, i, a) => {
				const r = [];
				if ((a?.gold || 0) < 10) return r;
				const { control: s } = de(e, i.color, a?.metadata), { networked: o } = de(e, i.color === c ? l : c, a?.metadata);
				return V.findPieces(e, (e, t, n) => e.color !== i.color && e.type !== d.KING && e.type !== d.QUEEN && s[t][n] && !o[t][n]).forEach(({ r: e, c: t, piece: n }) => {
					r.push({
						pos: {
							r: e,
							c: t
						},
						value: {
							r: e,
							c: t,
							type: n.type
						}
					});
				}), r;
			},
			getAoE: (e, t, n, i, a) => a ? [{
				r: a.r,
				c: a.c
			}] : [],
			execute: (e, t, n, i, a, r) => {
				if (a) {
					const e = Pe.PIECE[a.type] || 10, i = [], s = a.r - t, o = a.c - n;
					if (0 === s || 0 === o || Math.abs(s) === Math.abs(o)) {
						const e = Math.sign(s), r = Math.sign(o);
						let c = t, l = n, d = 0;
						for (; (c !== a.r || l !== a.c) && d < 15;) i.push({
							r: c,
							c: l
						}), c += e, l += r, d++;
						i.push({
							r: a.r,
							c: a.c
						});
					} else i.push({
						r: t,
						c: n
					}), i.push({
						r: a.r,
						c: a.c
					});
					r({
						type: "MODIFY_GOLD",
						amount: -10,
						reason: "REQUISITION_COST"
					}), r({
						type: "KILL",
						pos: {
							r: a.r,
							c: a.c
						}
					}), r({
						type: "MODIFY_GOLD",
						amount: e,
						reason: "REQUISITION_GAIN"
					}), r({
						type: "SHOW_TEXT",
						text: "Requisition Successful",
						textKey: "LOG_REQUISITION_SUCCESS",
						style: "gold",
						pos: {
							r: a.r,
							c: a.c
						}
					});
				}
			}
		}
	}
];
function He(e, t, n, i, a) {
	const r = [];
	let s = n.r + i.dr, o = n.c + i.dc, c = 0, l = 0;
	for (; s >= 0 && s < 8 && o >= 0 && o < 8;) {
		const n = e[s][o], d = pe(s, o, t);
		if (d) {
			if (!(l < a.maxTerrainPierces)) break;
			l++;
		}
		if (n) {
			if (!(c < a.maxUnitPierces)) {
				r.push({
					r: s,
					c: o
				});
				break;
			}
			a.canCaptureLeaped && r.push({
				r: s,
				c: o
			}), c++;
		} else d || r.push({
			r: s,
			c: o
		});
		s += i.dr, o += i.dc;
	}
	return r;
}
const Fe = [
	{
		id: "ROOK_VAULT",
		name: "翻越",
		tier: "COMMON",
		category: B,
		pieceType: d.ROOK,
		description: "允许跳过路径上的第一个障碍物（友军或敌军）。",
		modifiers: { movement: (e, t) => {
			const { board: n, r: i, c: a, piece: r, isControlSquares: s } = e, o = [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1]
			], c = [];
			for (const [l, d] of o) {
				let e = i + l, t = a + d, o = !1;
				for (; V.isValidPos(e, t);) {
					const i = n[e][t];
					if (i) {
						if (o) {
							(i.color !== r.color || s) && c.push({
								r: e,
								c: t
							});
							break;
						}
						s && i.color === r.color && c.push({
							r: e,
							c: t
						}), o = !0;
					} else c.push({
						r: e,
						c: t
					});
					e += l, t += d;
				}
			}
			return [...t, ...c];
		} }
	},
	{
		id: "ROOK_RAILWAY",
		name: "铁轨",
		tier: "COMMON",
		category: B,
		pieceType: d.ROOK,
		description: "在车移动过的直线路径上，留下铁轨（2回合），友方\"兵\"移动力+1。",
		hooks: { onAfterMove: ({ from: e, r: t, c: n, emit: i }) => {
			if (!e) return;
			const a = Math.sign(t - e.r), r = Math.sign(n - e.c);
			if (0 === a || 0 === r) {
				const s = 0 !== a;
				let o = e.r, c = e.c;
				for (; o !== t || c !== n;) i({
					type: "SET_SQUARE",
					pos: {
						r: o,
						c
					},
					status: {
						id: O,
						duration: 5,
						metadata: { vertical: s }
					}
				}), o += a, c += r;
				i({
					type: "SET_SQUARE",
					pos: {
						r: t,
						c: n
					},
					status: {
						id: O,
						duration: 5,
						metadata: { vertical: s }
					}
				});
			}
		} }
	},
	{
		id: "ROOK_PRESS",
		name: "压制",
		tier: "COMMON",
		category: B,
		pieceType: d.ROOK,
		description: "处于车直线上的敌方兵无法移动。",
		range: {
			type: "cross",
			radius: 7
		},
		hooks: { onTurnStart: ({ board: e, r: t, c: n, piece: i, emit: a }) => {
			for (const [r, s] of [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1]
			]) {
				let o = t + r, c = n + s;
				for (; V.isValidPos(o, c);) {
					const t = e[o][c];
					if (t && t.color !== i.color && t.type === d.PAWN && a({
						type: "ADD_STATUS",
						pos: {
							r: o,
							c
						},
						statusId: _.ROOTED,
						duration: 2
					}), t) break;
					o += r, c += s;
				}
			}
		} }
	},
	{
		id: "ROOK_AEGIS",
		name: "塔盾",
		tier: "COMMON",
		category: B,
		pieceType: d.ROOK,
		description: "只要车与国王靠在一起，国王获得远程免疫。",
		hooks: { onTurnStart: ({ board: e, r: t, c: n, piece: i, emit: a }) => {
			[
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1],
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			].forEach(([r, s]) => {
				const o = t + r, c = n + s;
				if (o >= 0 && o < 8 && c >= 0 && c < 8) {
					const t = e[o][c];
					t && t.type === d.KING && t.color === i.color && a({
						type: "ADD_STATUS",
						pos: {
							r: o,
							c
						},
						statusId: _.SMOKE_SCREEN,
						duration: 2
					});
				}
			});
		} }
	},
	{
		id: "ROOK_CONCUSSION",
		name: "震荡",
		tier: "COMMON",
		category: B,
		pieceType: d.ROOK,
		description: "长距离移动（超过 3 格）后，落点周围 1 格内的敌方“兵”将被冻结 1 回合。",
		hooks: { onAfterMove: ({ board: e, from: t, r: n, c: i, piece: a, emit: r }) => {
			t && Math.abs(n - t.r) + Math.abs(i - t.c) > 3 && [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1],
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			].forEach(([t, s]) => {
				const o = n + t, c = i + s;
				if (V.isValidPos(o, c)) {
					const t = e[o][c];
					t && t.color !== a.color && t.type === d.PAWN && r({
						type: "ADD_STATUS",
						pos: {
							r: o,
							c
						},
						statusId: _.FROZEN,
						duration: 2
					});
				}
			});
		} }
	},
	{
		id: "ROOK_COVER",
		name: "掩体",
		tier: "COMMON",
		category: B,
		pieceType: d.ROOK,
		description: "只要车处于联网状态，下回合开始时与其相邻的友方兵获得一层护盾（护盾破除后有 3 回合冷却）。",
		range: {
			type: "chebyshev",
			radius: 1
		},
		hooks: { onTurnStart: ({ board: e, r: t, c: n, piece: i, emit: a, metadata: r }) => {
			const { networked: s } = de(e, i.color, r);
			s[t][n] && [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1],
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			].forEach(([r, s]) => {
				const o = t + r, c = n + s;
				if (V.isValidPos(o, c)) {
					const t = e[o][c];
					if (t && t.color === i.color && t.type === d.PAWN) {
						const e = t.statuses?.some((e) => e.id === _.SHIELDED), n = t.statuses?.some((e) => e.id === _.SHIELD_COOLDOWN);
						e || n || a({
							type: "ADD_STATUS",
							pos: {
								r: o,
								c
							},
							statusId: _.SHIELDED,
							duration: 2,
							metadata: { auraSource: "ROOK_COVER" }
						});
					}
				}
			});
		} }
	},
	{
		id: "ROOK_BASTION",
		name: "堡垒形态",
		tier: "RARE",
		category: B,
		pieceType: d.ROOK,
		description: "主动：切换为堡垒，不可移动，自身与周围十字 1 格友军免受远程伤害。",
		range: {
			type: "cross",
			radius: 1
		},
		tags: ["GLOBAL"],
		activeSpec: {
			targeting: "self",
			execute: (e, t, n, i, a, r) => {
				const s = !i.metadata?.isBastion;
				r({
					type: "UPDATE_ROSTER_PIECE",
					pieceUid: i.uid,
					updates: { metadata: {
						...i.metadata,
						isBastion: s
					} }
				}), [
					[0, 0],
					[-1, 0],
					[1, 0],
					[0, -1],
					[0, 1]
				].forEach(([e, i]) => {
					const a = t + e, s = n + i;
					V.isValidPos(a, s) && r({
						type: "REMOVE_STATUS",
						pos: {
							r: a,
							c: s
						},
						statusId: _.BASTION_SHIELD
					});
				}), s && [
					[-1, 0],
					[1, 0],
					[0, -1],
					[0, 1]
				].forEach(([a, s]) => {
					const o = t + a, c = n + s;
					if (V.isValidPos(o, c)) {
						const t = e[o][c];
						t && t.color === i.color && r({
							type: "ADD_STATUS",
							pos: {
								r: o,
								c
							},
							statusId: _.BASTION_SHIELD,
							duration: 2
						});
					}
				}), r({
					type: "SHOW_TEXT",
					text: s ? "Entering Bastion" : "Exiting Bastion",
					textKey: s ? "LOG_ENTER_BASTION" : "LOG_EXIT_BASTION",
					style: "system"
				});
			}
		},
		modifiers: { movement: ({ piece: e }, t) => e.metadata?.isBastion ? [] : t },
		hooks: {
			onTurnStart: ({ board: e, piece: t, r: n, c: i, ownerPos: a, emit: r }) => {
				if (t.metadata?.isBastion) {
					const s = a?.r ?? n, o = a?.c ?? i;
					[
						[-1, 0],
						[1, 0],
						[0, -1],
						[0, 1]
					].forEach(([n, i]) => {
						const a = s + n, c = o + i;
						if (V.isValidPos(a, c)) {
							const n = e[a][c], i = n?.statuses?.some((e) => e.id === _.BASTION_SHIELD);
							n && n.color === t.color && !i && r({
								type: "ADD_STATUS",
								pos: {
									r: a,
									c
								},
								statusId: _.BASTION_SHIELD,
								duration: 2
							});
						}
					});
				}
			},
			onAfterMove: ({ board: e, piece: t, ownerPos: n, subject: i, r: a, c: r, emit: s }) => {
				if (!t.metadata?.isBastion || !n || !i || i.color !== t.color) return;
				const o = (c = a, l = r, Math.abs(c - n.r) + Math.abs(l - n.c) === 1);
				var c, l;
				const d = i.statuses?.some((e) => e.id === _.BASTION_SHIELD);
				o ? d || s({
					type: "ADD_STATUS",
					pos: {
						r: a,
						c: r
					},
					statusId: _.BASTION_SHIELD,
					duration: 2
				}) : d && s({
					type: "REMOVE_STATUS",
					pos: {
						r: a,
						c: r
					},
					statusId: _.BASTION_SHIELD
				});
			}
		},
		getDisplayStatus: (e, t) => {
			const n = e.metadata?.isBastion;
			return {
				text: t(n ? "bastionMode" : "mobileMode"),
				colorClass: n ? "text-amber-400" : "text-cyan-400"
			};
		}
	},
	{
		id: "ROOK_HEAVY_ARMOR",
		name: "重装铠甲",
		tier: "RARE",
		category: B,
		pieceType: d.ROOK,
		description: "不能被对方的“兵”或“马”吃掉。",
		modifiers: { invulnerable: (e, t) => t.type === d.PAWN || t.type === d.KNIGHT }
	},
	{
		id: "ROOK_SWEEPER",
		name: "横扫",
		tier: "RARE",
		category: B,
		pieceType: d.ROOK,
		description: "移动经过敌方单位旁时，使其本回合断网（冻结）。",
		hooks: { onAfterMove: ({ board: e, from: t, r: n, c: i, piece: a, emit: r }) => {
			if (!t) return;
			const s = Math.sign(n - t.r), o = Math.sign(i - t.c);
			let c = t.r, l = t.c;
			for (; c !== n || l !== i;) [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1]
			].forEach(([t, n]) => {
				const i = c + t, s = l + n;
				if (V.isValidPos(i, s)) {
					const t = e[i][s];
					t && t.color !== a.color && t.type !== d.KING && r({
						type: "ADD_STATUS",
						pos: {
							r: i,
							c: s
						},
						statusId: _.FROZEN,
						duration: 3
					});
				}
			}), c += s, l += o;
		} }
	},
	{
		id: "ROOK_SUPPLY_DEPOT",
		name: "补给站",
		tier: "RARE",
		category: B,
		pieceType: d.ROOK,
		description: "移动路径变为补给地块（2回合）：友军在此部署返还 5 金币（单局上限 30G）。无法覆盖已有特殊地块。",
		hooks: { onAfterMove: ({ from: e, r: t, c: n, piece: i, metadata: a, emit: r, historyLength: s }) => {
			if (!e) return;
			const o = Math.sign(t - e.r), c = Math.sign(n - e.c);
			let l = e.r, d = e.c;
			const E = Math.floor((s || 0) / 2) + 1;
			for (; l !== t || d !== n;) {
				const e = `${l},${d}`;
				a?.squares?.[e] && a.squares[e].length > 0 || r({
					type: "SET_SQUARE",
					pos: {
						r: l,
						c: d
					},
					status: {
						id: L,
						duration: 3,
						metadata: {
							ownerUid: i.uid,
							createdRound: E
						}
					}
				}), l += o, d += c;
			}
		} }
	},
	{
		id: "ROOK_MAGNET",
		name: "磁吸",
		tier: "EPIC",
		category: B,
		pieceType: d.ROOK,
		description: "主动：不移动，将直线上一名友军拉到自己身边。",
		range: {
			type: "cross",
			radius: 7
		},
		activeSpec: {
			targeting: "target",
			getAlternatives: (e, t, n, i) => {
				const a = [];
				for (const [r, s] of [
					[-1, 0],
					[1, 0],
					[0, -1],
					[0, 1]
				]) {
					let o = t + r, c = n + s;
					for (; V.isValidPos(o, c);) {
						const t = e[o][c];
						if (t) {
							t.color !== i.color || t.type === d.KING || Bn.isSteady(t, e, o, c) || a.push({
								pos: {
									r: o,
									c
								},
								value: {
									r: o,
									c,
									dr: r,
									dc: s
								}
							});
							break;
						}
						o += r, c += s;
					}
				}
				return a;
			},
			getAoE: (e, t, n, i, a) => a ? [{
				r: a.r,
				c: a.c
			}] : [],
			execute: (e, t, n, i, a, r, s) => {
				a && (r({
					type: "MOVE",
					from: {
						r: a.r,
						c: a.c
					},
					to: {
						r: t + a.dr,
						c: n + a.dc
					}
				}), r({
					type: "SHOW_TEXT",
					text: "Magnet",
					textKey: "LOG_MAGNET",
					style: "system"
				}), i.color === c && s && !s.isAISimulation && Y.emit(q, {
					key: "forcedMoves",
					value: 1,
					isLifetimeOnly: !0
				}));
			}
		}
	},
	{
		id: "ROOK_CARRIER",
		name: "运输机",
		tier: "EPIC",
		category: B,
		pieceType: d.ROOK,
		description: "移动时，如果有扁平的棋子在同一格，可以携带一起移动。",
		hooks: { onAfterMove: ({ board: e, from: t, piece: n, r: i, c: a, emit: r }) => {
			if (!t) return;
			const s = e[t.r][t.c];
			s && s.statuses?.some((e) => e.id === _.FLATTENED) && (r({
				type: "SPAWN",
				pos: {
					r: i,
					c: a
				},
				piece: {
					...n,
					stackedPiece: s
				}
			}), r({
				type: "REMOVE_PIECE",
				pos: t
			}));
		} }
	},
	{
		id: "ROOK_EJECTION",
		name: "弹射",
		tier: "EPIC",
		category: B,
		pieceType: d.ROOK,
		description: "主动：将相邻十字方向的一个友方兵向外弹射到最远端。",
		range: {
			type: "cross",
			radius: 1
		},
		activeSpec: {
			targeting: "direction",
			getAlternatives: (e, t, n, i) => {
				const a = [];
				for (const [r, s] of [
					[-1, 0],
					[1, 0],
					[0, -1],
					[0, 1]
				]) {
					const o = t + r, c = n + s, l = e[o]?.[c];
					l && l.type === d.PAWN && l.color === i.color && !Bn.isSteady(l, e, o, c) && a.push({
						pos: {
							r: o,
							c
						},
						value: {
							r: o,
							c,
							dr: r,
							dc: s
						}
					});
				}
				return a;
			},
			getAoE: (e, t, n, i, a) => a ? [{
				r: a.r,
				c: a.c
			}] : [],
			execute: (e, t, n, i, a, r, s) => {
				if (a) {
					let t = a.r + a.dr, n = a.c + a.dc, o = null;
					for (; t >= 0 && t < 8 && n >= 0 && n < 8 && !e[t][n];) o = {
						r: t,
						c: n
					}, t += a.dr, n += a.dc;
					o && (r({
						type: "MOVE",
						from: {
							r: a.r,
							c: a.c
						},
						to: o
					}), r({
						type: "SHOW_TEXT",
						text: "Ejected!",
						textKey: "LOG_EJECTION",
						style: "system"
					}), i.color === c && s && !s.isAISimulation && Y.emit(q, {
						key: "forcedMoves",
						value: 1,
						isLifetimeOnly: !0
					}));
				}
			}
		}
	},
	{
		id: "ROOK_CATAPULT",
		name: "抛射",
		tier: "EPIC",
		category: B,
		pieceType: d.ROOK,
		description: "主动：将相邻十字的一个友方兵发射过车身，飞向同一直线的另一端。",
		range: {
			type: "cross",
			radius: 1
		},
		activeSpec: {
			targeting: "direction",
			getAlternatives: (e, t, n, i) => {
				const a = [];
				for (const [r, s] of [
					[-1, 0],
					[1, 0],
					[0, -1],
					[0, 1]
				]) {
					const o = t + r, c = n + s, l = e[o]?.[c];
					l && l.type === d.PAWN && l.color === i.color && !Bn.isSteady(l, e, o, c) && a.push({
						pos: {
							r: o,
							c
						},
						value: {
							r: o,
							c,
							dr: r,
							dc: s
						}
					});
				}
				return a;
			},
			getAoE: (e, t, n, i, a) => a ? [{
				r: a.r,
				c: a.c
			}] : [],
			execute: (e, t, n, i, a, r, s) => {
				if (a) {
					const o = -a.dr, l = -a.dc;
					let d = t + o, E = n + l, u = null;
					for (; d >= 0 && d < 8 && E >= 0 && E < 8 && !e[d][E];) u = {
						r: d,
						c: E
					}, d += o, E += l;
					u && (r({
						type: "MOVE",
						from: {
							r: a.r,
							c: a.c
						},
						to: u
					}), r({
						type: "SHOW_TEXT",
						text: "Catapulted!",
						textKey: "LOG_CATAPULT",
						style: "system"
					}), i.color === c && s && !s.isAISimulation && Y.emit(q, {
						key: "forcedMoves",
						value: 1,
						isLifetimeOnly: !0
					}));
				}
			}
		}
	},
	{
		id: "ROOK_FORBIDDEN_ZONE",
		name: "领土主权",
		tier: "LEGENDARY",
		category: B,
		pieceType: d.ROOK,
		description: "车所在的行或列上的敌方棋子移动力降为1。",
		range: {
			type: "cross",
			radius: 7
		},
		hooks: { onTurnStart: ({ board: e, r: t, c: n, piece: i, emit: a }) => {
			for (let r = 0; r < 8; r++) {
				const s = e[t][r], o = e[r][n];
				s && s.color !== i.color && s.type !== d.KING && a({
					type: "ADD_STATUS",
					pos: {
						r: t,
						c: r
					},
					statusId: _.GRAVITY_LOCKED,
					duration: 2
				}), o && o.color !== i.color && o.type !== d.KING && a({
					type: "ADD_STATUS",
					pos: {
						r,
						c: n
					},
					statusId: _.GRAVITY_LOCKED,
					duration: 2
				});
			}
		} }
	},
	{
		id: "ROOK_ION_CANNON",
		name: "轨道炮",
		tier: "LEGENDARY",
		category: B,
		pieceType: d.ROOK,
		description: "主动：原地不动，摧毁正方向直线上的所有非王单位（冷却 5 回合）。",
		range: {
			type: "cross",
			radius: 7
		},
		activeSpec: {
			targeting: "direction",
			cooldownKey: "ionCooldown",
			getAlternatives: (e, t, n) => [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1]
			].map(([e, i]) => ({
				pos: {
					r: t + e,
					c: n + i
				},
				value: {
					dr: e,
					dc: i
				}
			})).filter((e) => V.isValidPos(e.pos.r, e.pos.c)),
			getAoE: (e, t, n, i, a) => {
				a || (a = i.color === c ? {
					dr: -1,
					dc: 0
				} : {
					dr: 1,
					dc: 0
				});
				const { dr: r, dc: s } = a, o = [];
				let l = t + r, d = n + s;
				for (; V.isValidPos(l, d);) o.push({
					r: l,
					c: d
				}), l += r, d += s;
				return o;
			},
			execute: (e, t, n, i, a, r, s) => {
				if ((i.metadata?.ionCooldown || 0) > 0) return;
				r({
					type: "UPDATE_ROSTER_PIECE",
					pieceUid: i.uid,
					pieceId: i.id,
					updates: { metadata: {
						...i.metadata,
						ionCooldown: 5
					} }
				}), a || (a = i.color === c ? {
					dr: -1,
					dc: 0
				} : {
					dr: 1,
					dc: 0
				});
				const { dr: o, dc: l } = a;
				let E = t + o, u = n + l, m = 0;
				for (; V.isValidPos(E, u);) e[E][u] && e[E][u]?.type !== d.KING && (r({
					type: "KILL",
					pos: {
						r: E,
						c: u
					}
				}), m++), E += o, u += l;
				r({
					type: "SHOW_TEXT",
					text: "Orbital Cannon",
					textKey: "LOG_ION_CANNON",
					style: "danger"
				}), s && !s.isAISimulation && m > 0 && Y.emit(q, {
					key: "rookCrossBoard",
					value: 1,
					isLifetimeOnly: !0
				});
			}
		},
		hooks: { onTurnStart: ({ piece: e, emit: t }) => {
			(e.metadata?.ionCooldown || 0) > 0 && t({
				type: "UPDATE_ROSTER_PIECE",
				pieceUid: e.uid,
				pieceId: e.id,
				updates: { metadata: {
					...e.metadata,
					ionCooldown: e.metadata.ionCooldown - 1
				} }
			});
		} }
	},
	{
		id: "ROOK_IRON_CURTAIN",
		name: "铁幕",
		tier: "LEGENDARY",
		category: B,
		pieceType: d.ROOK,
		description: "主动：锁定车所在整行，2回合内敌方车/象/后/兵无法进入或穿越该行（马、王不受影响）；冷却3回合。",
		range: {
			type: "chebyshev",
			radius: 0
		},
		activeSpec: {
			targeting: "self",
			cooldownKey: "ironCooldown",
			execute: (e, t, n, i, a, r) => {
				if (!((i.metadata?.ironCooldown || 0) > 0)) {
					r({
						type: "UPDATE_ROSTER_PIECE",
						pieceUid: i.uid,
						pieceId: i.id,
						updates: { metadata: {
							...i.metadata,
							ironCooldown: 3
						} }
					});
					for (let e = 0; e < 8; e++) r({
						type: "SET_SQUARE",
						pos: {
							r: t,
							c: e
						},
						status: {
							id: h,
							duration: 2,
							metadata: { ownerColor: i.color }
						}
					});
					r({
						type: "SHOW_TEXT",
						text: "Iron Curtain",
						textKey: "LOG_IRON_CURTAIN",
						style: "system"
					});
				}
			}
		},
		hooks: { onTurnStart: ({ piece: e, emit: t }) => {
			(e.metadata?.ironCooldown || 0) > 0 && t({
				type: "UPDATE_ROSTER_PIECE",
				pieceUid: e.uid,
				pieceId: e.id,
				updates: { metadata: {
					...e.metadata,
					ironCooldown: e.metadata.ironCooldown - 1
				} }
			});
		} }
	},
	{
		id: "ROOK_VOID_FISSURE",
		name: "虚空裂解炮",
		tier: "LEGENDARY",
		category: B,
		pieceType: d.ROOK,
		description: "主动：摧毁直线上首个目标并永久摧毁该空格（一局 3 次，冷却 5 回合）。",
		range: {
			type: "cross",
			radius: 7
		},
		aiThreat: {
			level: "LETHAL",
			piercesTerrain: !0
		},
		activeSpec: {
			targeting: "target",
			cooldownKey: "fissureCd",
			usesKey: "fissureUses",
			maxUses: 3,
			getAlternatives: (e, t, n, i, a) => {
				const r = [], s = [
					{
						dr: -1,
						dc: 0
					},
					{
						dr: 1,
						dc: 0
					},
					{
						dr: 0,
						dc: -1
					},
					{
						dr: 0,
						dc: 1
					}
				], o = a?.metadata || {
					squares: {},
					globalJamming: 0
				};
				for (const c of s) {
					const i = He(e, o, {
						r: t,
						c: n
					}, c, {
						maxUnitPierces: 0,
						maxTerrainPierces: Infinity,
						canCaptureLeaped: !1
					});
					if (i.length > 0) {
						const e = i[i.length - 1];
						r.push({
							pos: e,
							value: e
						});
					}
				}
				return r;
			},
			getAoE: (e, t, n, i, a) => a ? [{
				r: a.r,
				c: a.c
			}] : [],
			execute: (e, t, n, i, a, r) => {
				const s = i.metadata?.fissureUses || 0, o = i.metadata?.fissureCd || 0;
				if (!(s >= 3 || o > 0) && a) {
					const e = s + 1;
					r({
						type: "UPDATE_ROSTER_PIECE",
						pieceUid: i.uid,
						pieceId: i.id,
						updates: { metadata: {
							...i.metadata,
							fissureUses: e,
							fissureCd: 5
						} }
					}), r({
						type: "KILL",
						pos: a
					}), r({
						type: "SET_SQUARE",
						pos: a,
						status: {
							id: g,
							duration: 999
						}
					});
					const t = 3 - e;
					r({
						type: "SHOW_TEXT",
						text: t > 0 ? `Void Fissure! ${t} uses left` : "Void Fissure! Ammo depleted",
						textKey: t > 0 ? "LOG_VOID_FISSURE_REMAINING" : "LOG_VOID_FISSURE_EMPTY",
						textParams: { remaining: t },
						style: "danger"
					});
				}
			}
		},
		hooks: { onTurnStart: ({ piece: e, emit: t }) => {
			const n = e.metadata?.fissureCd || 0;
			n > 0 && t({
				type: "UPDATE_ROSTER_PIECE",
				pieceUid: e.uid,
				pieceId: e.id,
				updates: { metadata: {
					...e.metadata,
					fissureCd: n - 1
				} }
			});
		} }
	},
	{
		id: "EQ_EM_SHIELD",
		name: "电磁屏蔽罩",
		tier: "RARE",
		category: F,
		pieceType: d.ROOK,
		description: "只要车在国王边上一格，国王免疫来自“马”的攻击。",
		modifiers: {
			invulnerable: ({ board: e, r: t, c: n, piece: i }, a) => {
				if (i.type === d.KING) for (let r = -1; r <= 1; r++) for (let s = -1; s <= 1; s++) {
					const o = t + r, c = n + s;
					if (o >= 0 && o < 8 && c >= 0 && c < 8) {
						const t = e[o][c];
						if (t && t.color === i.color && t.type === d.ROOK && (t.equippedItems?.some((e) => "EQ_EM_SHIELD" === e.effectId) || t.skills?.includes("EQ_EM_SHIELD") || t.learnedSkills?.includes("EQ_EM_SHIELD"))) return a.type === d.KNIGHT;
					}
				}
				return !1;
			},
			invulnerableBroadcast: !0
		}
	},
	{
		id: "EQ_TOW_HOOK",
		name: "远程牵引钩",
		tier: "EPIC",
		category: F,
		pieceType: d.ROOK,
		description: "主动：不移动，将距离自己 2 格直线上的一个敌军拖拽到身边，并将其消灭（稳定器可免疫）。",
		range: {
			type: "cross",
			radius: 2
		},
		activeSpec: {
			targeting: "target",
			getAlternatives: (e, t, n, i) => {
				const a = [];
				return [
					[0, 2],
					[0, -2],
					[2, 0],
					[-2, 0]
				].forEach(([r, s]) => {
					const o = t + r, c = n + s;
					if (o >= 0 && o < 8 && c >= 0 && c < 8) {
						const l = e[o][c];
						l && l.color !== i.color && l.type !== d.KING && !e[t + r / 2][n + s / 2] && a.push({
							pos: {
								r: o,
								c
							},
							value: {
								r: o,
								c,
								dr: r,
								dc: s
							}
						});
					}
				}), a;
			},
			getAoE: (e, t, n, i, a) => a ? [{
				r: a.r,
				c: a.c
			}] : [],
			execute: (e, t, n, i, a, r, s) => {
				if (!a) return;
				const o = e[a.r][a.c];
				if (!o) return;
				if (Bn.isSteady(o, e, a.r, a.c)) return void r({
					type: "SHOW_TEXT",
					text: "Immune",
					textKey: "LOG_IMMUNE",
					style: "system",
					pos: {
						r: a.r,
						c: a.c
					}
				});
				const l = {
					r: t + a.dr / 2,
					c: n + a.dc / 2
				};
				r({
					type: "PLAY_SOUND",
					soundId: "CONVEYOR"
				}), r({
					type: "MOVE",
					from: {
						r: a.r,
						c: a.c
					},
					to: l,
					targetId: o.id
				}), r({
					type: "SHOW_TEXT",
					text: "Towed!",
					textKey: "LOG_TOW_HOOK_DRAG",
					style: "danger",
					pos: l
				}), r({
					type: "KILL",
					pos: l,
					targetId: o.id
				}), r({
					type: "SHOW_TEXT",
					text: "Towing Kill",
					textKey: "LOG_TOW_HOOK_KILL",
					style: "danger",
					pos: l
				}), i.color === c && s && !s.isAISimulation && Y.emit(q, {
					key: "forcedMoves",
					value: 1,
					isLifetimeOnly: !0
				});
			}
		}
	},
	{
		id: "ROOK_TRACTOR_BEAM",
		name: "牵引光束",
		tier: "EPIC",
		category: B,
		pieceType: d.ROOK,
		description: "主动：不移动。若直线方向 3 格以内没有任何棋子挡路，将该方向上距离超过 3 格的第一个棋子朝车的方向拉近 1 格，无论敌我（稳定器可免疫）。",
		range: {
			type: "cross",
			radius: 7
		},
		activeSpec: {
			targeting: "target",
			getAlternatives: (e, t, n, i) => {
				const a = [];
				for (const [r, s] of [
					[-1, 0],
					[1, 0],
					[0, -1],
					[0, 1]
				]) {
					let i = !1;
					for (let a = 1; a <= 3; a++) {
						const o = t + r * a, c = n + s * a;
						if (!V.isValidPos(o, c) || e[o][c]) {
							i = !0;
							break;
						}
					}
					if (!i) for (let o = 4; o < 8; o++) {
						const i = t + r * o, c = n + s * o;
						if (!V.isValidPos(i, c)) break;
						const l = e[i][c];
						if (l) {
							l.type !== d.KING && a.push({
								pos: {
									r: i,
									c
								},
								value: {
									r: i,
									c,
									dr: r,
									dc: s
								}
							});
							break;
						}
					}
				}
				return a;
			},
			getAoE: (e, t, n, i, a) => a ? [{
				r: a.r,
				c: a.c
			}] : [],
			execute: (e, t, n, i, a, r, s) => {
				if (!a) return;
				const o = e[a.r][a.c];
				if (!o) return;
				if (Bn.isSteady(o, e, a.r, a.c)) return void r({
					type: "SHOW_TEXT",
					text: "Immune",
					textKey: "LOG_IMMUNE",
					style: "system",
					pos: {
						r: a.r,
						c: a.c
					}
				});
				const l = {
					r: a.r - a.dr,
					c: a.c - a.dc
				};
				r({
					type: "PLAY_SOUND",
					soundId: "CONVEYOR"
				}), r({
					type: "MOVE",
					from: {
						r: a.r,
						c: a.c
					},
					to: l,
					targetId: o.id
				}), r({
					type: "SHOW_TEXT",
					text: "Pulled",
					textKey: "LOG_TRACTOR_PULL",
					style: "system",
					pos: l
				}), i.color === c && s && !s.isAISimulation && Y.emit(q, {
					key: "forcedMoves",
					value: 1,
					isLifetimeOnly: !0
				});
			}
		}
	},
	{
		id: "ROOK_SHOCKWAVE",
		name: "冲击波",
		tier: "EPIC",
		category: B,
		pieceType: d.ROOK,
		description: "主动：不移动。将直线方向 3 格以内的第一个棋子沿远离车的方向推开 1 格，无论敌我。若落点有其他棋子，双方同归于尽；但如果落点棋子是「扁平」状态的同阵营友军，则改为承载叠放（稳定器可免疫）。",
		range: {
			type: "cross",
			radius: 3
		},
		activeSpec: {
			targeting: "target",
			getAlternatives: (e, t, n, i) => {
				const a = [];
				for (const [r, s] of [
					[-1, 0],
					[1, 0],
					[0, -1],
					[0, 1]
				]) for (let i = 1; i <= 3; i++) {
					const o = t + r * i, c = n + s * i;
					if (!V.isValidPos(o, c)) break;
					const l = e[o][c];
					if (l) {
						l.type !== d.KING && a.push({
							pos: {
								r: o,
								c
							},
							value: {
								r: o,
								c,
								dr: r,
								dc: s
							}
						});
						break;
					}
				}
				return a;
			},
			getAoE: (e, t, n, i, a) => a ? [{
				r: a.r,
				c: a.c
			}] : [],
			execute: (e, t, n, i, a, r, s) => {
				if (!a) return;
				const o = e[a.r][a.c];
				if (!o) return;
				if (Bn.isSteady(o, e, a.r, a.c)) return void r({
					type: "SHOW_TEXT",
					text: "Immune",
					textKey: "LOG_IMMUNE",
					style: "system",
					pos: {
						r: a.r,
						c: a.c
					}
				});
				const l = a.r + a.dr, d = a.c + a.dc;
				if (!V.isValidPos(l, d)) return void r({
					type: "SHOW_TEXT",
					text: "Blocked",
					textKey: "LOG_BLOCKED",
					style: "system",
					pos: {
						r: a.r,
						c: a.c
					}
				});
				const E = {
					r: l,
					c: d
				}, u = e[l][d], m = !!u && u.color === o.color && u.statuses?.some((e) => e.id === _.FLATTENED);
				u && !m ? (r({
					type: "PLAY_SOUND",
					soundId: "LANDMINE"
				}), r({
					type: "KILL",
					pos: E,
					targetId: u.id
				}), r({
					type: "MOVE",
					from: {
						r: a.r,
						c: a.c
					},
					to: E,
					targetId: o.id
				}), r({
					type: "KILL",
					pos: E,
					targetId: o.id
				}), r({
					type: "SHOW_TEXT",
					text: "Collision!",
					textKey: "LOG_SHOCKWAVE_COLLIDE",
					style: "danger",
					pos: E
				})) : (r({
					type: "PLAY_SOUND",
					soundId: "CONVEYOR"
				}), r({
					type: "MOVE",
					from: {
						r: a.r,
						c: a.c
					},
					to: E,
					targetId: o.id
				}), r({
					type: "SHOW_TEXT",
					text: "Pushed",
					textKey: "LOG_SHOCKWAVE_PUSH",
					style: "system",
					pos: E
				})), i.color === c && s && !s.isAISimulation && Y.emit(q, {
					key: "forcedMoves",
					value: 1,
					isLifetimeOnly: !0
				});
			}
		}
	}
];
let we = null;
function xe() {
	return we || (we = {
		[d.PAWN]: [...fe, ...Se],
		[d.KNIGHT]: [...Ne, ...Se],
		[d.BISHOP]: [...Fn, ...Se],
		[d.ROOK]: [...Fe, ...Se],
		[d.QUEEN]: [...Be, ...Se],
		[d.KING]: [...ge, ...Se]
	}), we;
}
const We = Le.filter((e) => !e.isInternal).map((e) => ({
	type: e.category === F ? "EQUIPMENT" : "CONSUMABLE",
	tier: e.tier,
	id: e.id,
	effectId: e.id,
	pieceType: e.pieceType
}));
(class {
	static {
		this._prng = null;
	}
	static _rand() {
		return this._prng ? this._prng.next() : Math.random();
	}
	static pickTier(e) {
		const t = this._rand();
		let n = 0;
		for (const i of [
			"COMMON",
			"RARE",
			"EPIC",
			"LEGENDARY"
		]) if (n += e[i], t < n) return i;
		return "COMMON";
	}
	static getPrice(e) {
		const { min: t, max: n } = De[e], i = 5 * Math.floor((this._rand() * (n - t + 1) + t) / 5);
		return Math.max(i, 5);
	}
	static applyPriceForReward(e, t) {
		let n = this.getPrice(e);
		return n = Bn.executePriceHooks(t, n), {
			price: n,
			originalPrice: n,
			isPityFree: !1
		};
	}
	static isCompatible(e, t) {
		const n = [...e.learnedSkills || [], ...e.equippedItems?.map((e) => e.effectId) || []], i = n.map((e) => Bn.getDefinition(e)).filter(Boolean);
		return !t.conflicts?.some((e) => n.includes(e)) && !(t.isUnique && t.tags && i.some((e) => e?.isUnique && e.tags?.some((e) => t.tags?.includes(e))));
	}
	static rollPieceReward(e, t, n, i = () => !0, a, r) {
		let s;
		s = a ? [d.PAWN] : "ARTHUR" === r ? [
			d.PAWN,
			d.KNIGHT,
			d.BISHOP,
			d.ROOK
		] : [
			d.PAWN,
			d.KNIGHT,
			d.BISHOP,
			d.ROOK,
			d.QUEEN
		];
		const o = s[Math.floor(this._rand() * s.length)], l = a ? "COMMON" : this.pickTier(n), E = this.applyPriceForReward(l, t);
		let u;
		if ("COMMON" !== l) {
			let t = (xe()[o] || []).filter((e) => !e.isInternal).filter((t) => !e[o]?.includes(t.id));
			if (t.length > 0) {
				const e = t.filter((e) => "RARE" === l ? "RARE" === e.tier : "EPIC" === l ? "EPIC" === e.tier : "LEGENDARY" === l ? "LEGENDARY" === e.tier : "COMMON" === e.tier), n = {
					id: "temp",
					uid: "temp",
					type: o,
					color: c,
					level: 1,
					skills: [],
					learnedSkills: [],
					traits: [],
					statuses: [],
					maxSlots: o === d.KING ? 3 : 1,
					equippedItems: []
				}, a = e.filter((e) => this.isCompatible(n, e) && i(e)), r = (a.length, a);
				u = r.length > 0 ? r[Math.floor(this._rand() * r.length)] : t.filter(i)[Math.floor(this._rand() * t.filter(i).length)];
			}
		}
		return {
			id: `choice-piece-${Date.now()}-${Math.random()}`,
			type: "PIECE",
			tier: l,
			...E,
			data: {
				pieceType: o,
				extraSkill: u
			}
		};
	}
	static rollSkillReward(e, t, n, i = () => !0) {
		if (0 === e.length) {
			const t = this.applyPriceForReward("COMMON", e);
			return {
				id: `choice-fallback-${Date.now()}-${Math.random()}`,
				type: "FALLBACK_PIECE",
				tier: "COMMON",
				...t,
				data: { pieceType: d.PAWN }
			};
		}
		let a;
		const r = e.filter((e) => (e.learnedSkills?.length || 0) < (e.maxSkillSlots || 1));
		a = r.length > 0 ? r[Math.floor(this._rand() * r.length)] : e[Math.floor(this._rand() * e.length)];
		const s = (xe()[a.type] || []).filter((e) => !e.isInternal);
		let o = s.filter((e) => !a.learnedSkills?.includes(e.id) && this.isCompatible(a, e) && i(e));
		const c = t[a.type] || [];
		o = o.filter((e) => !c.includes(e.id));
		const l = this.pickTier(n);
		let E = o.filter((e) => e.tier === l);
		0 === E.length && (E = o.filter(i).filter((e) => "COMMON" === e.tier || "RARE" === e.tier)), 0 === E.length && (E = s.filter(i));
		const u = E[Math.floor(this._rand() * E.length)], m = this.applyPriceForReward(u.tier, e);
		return {
			id: `choice-skill-${Date.now()}-${Math.random()}`,
			type: "SKILL",
			tier: u.tier,
			...m,
			data: {
				targetPieceUid: a.uid,
				targetPieceType: a.type,
				skillId: u.id,
				hasExistingSkill: (a.learnedSkills?.length || 0) >= (a.maxSkillSlots || 1),
				skillRaw: u
			}
		};
	}
	static rollItemReward(e, t, n, i, a, r, s, o, c = () => !0) {
		const l = this.pickTier(o);
		let d = We.filter((e) => ("CONSUMABLE" === e.type || !r.has(e.effectId)) && !!c(e) && e.tier === l);
		0 === d.length && (d = We.filter((e) => ("CONSUMABLE" === e.type || !r.has(e.effectId)) && c(e))), 0 === d.length && (d = We.filter(c));
		const E = d[Math.floor(this._rand() * d.length)], u = "CONSUMABLE" === E.type, m = u ? i : a;
		if ((u ? t.length : n.length) >= m) {
			const e = this.applyPriceForReward("COMMON", s);
			return {
				id: `choice-item-full-${Date.now()}-${Math.random()}`,
				type: "ITEM_FULL",
				tier: "COMMON",
				...e,
				data: {
					typeLabelKey: u ? "consumable" : "equipment",
					max: m,
					recycleGold: 15
				}
			};
		}
		{
			const e = this.applyPriceForReward(E.tier, s);
			return {
				id: `choice-item-${Date.now()}-${Math.random()}`,
				type: "ITEM",
				tier: E.tier,
				...e,
				data: {
					itemTemplate: E,
					typeLabelKey: u ? "consumable" : "equipment"
				}
			};
		}
	}
	static generateChoices(e) {
		const { gold: t, roster: n, consumables: i, equipments: a, maxConsumables: r, maxEquipments: s, isInitial: o, isFirstDraft: c, unlockedIds: l, activeMonarchId: E, prng: u } = e;
		this._prng = u || null;
		const m = (e) => {
			if ("EPIC" === e.tier || "LEGENDARY" === e.tier) {
				const t = e.id, n = e.effectId;
				return l.includes(t) || n && l.includes(n);
			}
			return !0;
		}, _ = function(e) {
			return e.reduce((e, t) => {
				let n = Pe.PIECE[t.type] || 10;
				return n += Math.floor(n * (t.level - 1) * .05), t.skills && (n += 30 * t.skills.length), t.equippedItems && t.equippedItems.forEach((e) => {
					n += {
						COMMON: 20,
						RARE: 50,
						EPIC: 120,
						LEGENDARY: 300
					}[e.tier || "COMMON"] || 20;
				}), e + n;
			}, 0);
		}(n);
		let A;
		A = c ? {
			COMMON: .7,
			RARE: .3,
			EPIC: 0,
			LEGENDARY: 0
		} : function(e) {
			let t = {
				COMMON: .65,
				RARE: .25,
				EPIC: .08,
				LEGENDARY: .02
			};
			const n = Math.min(.25, e / 2e3), i = Math.min(.2, e / 3e3), a = Math.min(.1, e / 5e3);
			return t.RARE += n, t.EPIC += i, t.LEGENDARY += a, t.COMMON = Math.max(.05, 1 - (t.RARE + t.EPIC + t.LEGENDARY)), t;
		}(_);
		const p = new Set([
			...i,
			...a,
			...n.flatMap((e) => e.equippedItems || [])
		].map((e) => e.effectId)), O = {
			[d.QUEEN]: [
				"PAWN_PATROL",
				"PAWN_FRONTAL_SPIKE",
				"PAWN_BACKSTEP",
				"KNIGHT_SIDE_STEP",
				"BISHOP_PHASE_SHIFT",
				"GENERIC_HIVE_KERNEL"
			],
			[d.ROOK]: [
				"PAWN_PATROL",
				"PAWN_FRONTAL_SPIKE",
				"PAWN_BACKSTEP",
				"BISHOP_PHASE_SHIFT"
			],
			[d.BISHOP]: ["KNIGHT_SIDE_STEP"],
			[d.PAWN]: [],
			[d.KNIGHT]: [],
			[d.KING]: [
				"GENERIC_FIREWALL",
				"GENERIC_HIVE_KERNEL",
				"GENERIC_RAPID_DEPLOY",
				"GENERIC_RECALL",
				"GENERIC_LOGIC_BOMB",
				"GENERIC_PARASITE"
			]
		}, h = [
			this.rollPieceReward(O, n, A, m, c, E),
			this.rollSkillReward(n, O, A, m),
			this.rollItemReward(t, i, a, r, s, p, n, A, m)
		];
		if (c) return h.forEach((e) => {
			e.price = 0;
		}), h;
		if (h.length > 0) {
			let e = 0;
			for (let t = 1; t < h.length; t++) h[t].price < h[e].price && (e = t);
			h[e].price = 0, h[e].isPityFree = !0;
		}
		return h;
	}
});
const Ve = [
	{
		id: "DEFAULT",
		nameKey: "monarchDefaultName",
		descKey: "monarchDefaultDesc",
		mechanicKey: "monarchDefaultMechanic",
		difficulty: 2,
		initialGold: 30,
		isImplemented: !0
	},
	{
		id: "HAPPY_PRINCE",
		nameKey: "monarchHappyPrinceName",
		descKey: "monarchHappyPrinceDesc",
		mechanicKey: "monarchHappyPrinceMechanic",
		difficulty: 5,
		initialGold: 5e3,
		isImplemented: !0
	},
	{
		id: "ARTHUR",
		nameKey: "monarchArthurName",
		descKey: "monarchArthurDesc",
		mechanicKey: "monarchArthurMechanic",
		difficulty: 3,
		initialGold: 40,
		isImplemented: !0
	},
	{
		id: "ODYSSEUS",
		nameKey: "monarchOdysseusName",
		descKey: "monarchOdysseusDesc",
		mechanicKey: "monarchOdysseusMechanic",
		difficulty: 4,
		initialGold: 30,
		isImplemented: !0
	},
	{
		id: "LOUIS_XIV",
		nameKey: "monarchLouisName",
		descKey: "monarchLouisDesc",
		mechanicKey: "monarchLouisMechanic",
		difficulty: 2,
		initialGold: 20,
		isImplemented: !0
	},
	{
		id: "RICHARD",
		nameKey: "monarchRichardName",
		descKey: "monarchRichardDesc",
		mechanicKey: "monarchRichardMechanic",
		difficulty: 3,
		initialGold: 10,
		isImplemented: !0
	}
];
const Qe = {
	DEFAULT: { getInitialRoster: (e) => [
		e(d.KING, "wk"),
		e(d.PAWN, "p"),
		e(d.PAWN, "p"),
		e(d.PAWN, "p"),
		e(d.ROOK, "r"),
		e(d.KNIGHT, "n"),
		e(d.BISHOP, "b")
	] },
	[K]: {
		getInitialRoster: (e) => {
			const t = Qe.DEFAULT.getInitialRoster(e), n = t.find((e) => e.type === d.KING);
			return n && (n.traits = ["HAPPY_PRINCE_IMMORTAL"], n.skills = ["HAPPY_PRINCE_IMMORTAL"]), [...t, {
				...e(d.KNIGHT, "swallow"),
				customName: "unitSwallow",
				metadata: { isSwallow: !0 },
				traits: ["SWALLOW_TRAIT"],
				skills: ["SWALLOW_TRAIT"]
			}];
		},
		setupBoard: (e, t, n) => {
			const i = t.find((e) => e.metadata?.isSwallow);
			if (i) {
				const t = {
					...i,
					id: Ie()
				};
				t.traits = [...new Set([...t.traits || [], "SWALLOW_TRAIT"])], t.skills = [...new Set([...t.skills || [], "SWALLOW_TRAIT"])], e[7][3] = t, n.push(i.uid);
			}
			const a = e[7][4];
			a && a.type === d.KING && (a.traits = [...new Set([...a.traits || [], "HAPPY_PRINCE_IMMORTAL"])], a.skills = [...new Set([...a.skills || [], "HAPPY_PRINCE_IMMORTAL"])]);
		},
		interceptAction: (e) => "MODIFY_GOLD" === e.type && e.amount > 0 && !b.includes(e.reason) ? {
			...e,
			amount: 0
		} : e,
		checkGameOverOverride: (e, t) => {
			if (t === c) {
				let n = !1;
				const i = (e) => {
					e && (e.color === t && e.metadata?.isSwallow && (n = !0), e.stackedPiece && i(e.stackedPiece));
				};
				return e.forEach((e) => e.forEach(i)), !n;
			}
			return null;
		}
	},
	[M]: { getInitialRoster: (e) => {
		const t = e(d.KING, "wk"), n = e(d.BISHOP, "b");
		n.level = 3, n.customName = "unitMerlin", n.maxSlots = 2;
		const i = e(d.KNIGHT, "n");
		return i.level = 3, i.customName = "unitLancelot", i.maxSlots = 2, [
			t,
			n,
			i,
			e(d.PAWN, "p"),
			e(d.PAWN, "p"),
			e(d.PAWN, "p"),
			e(d.ROOK, "r")
		];
	} },
	[U]: { getInitialRoster: (e) => {
		const t = Qe.DEFAULT.getInitialRoster(e), n = t.find((e) => e.type === d.KING);
		if (n) {
			const e = ["ODYSSEUS_TROJAN_ACTIVE"];
			n.traits = [...n.traits || [], ...e], n.skills = [...new Set([...n.skills, ...e])], n.maxSkillSlots = 3;
		}
		return t;
	} },
	[v]: {
		getInitialRoster: (e) => {
			const t = Qe.DEFAULT.getInitialRoster(e), n = t.find((e) => e.type === d.KING);
			if (n) {
				const e = ["LOUIS_ABSOLUTE_CORONA"];
				n.traits = e, n.skills = [...new Set([...n.skills, ...e])], n.maxSkillSlots = 3;
			}
			const i = e(d.BISHOP, "ironmask");
			i.customName = "unitIronMask", i.traits = ["LOUIS_IRON_MASK"], i.skills = ["LOUIS_IRON_MASK"], i.statuses = [{
				id: _.SILENCED,
				duration: 999
			}];
			const a = t.findIndex((e) => e.type === d.BISHOP);
			return -1 !== a ? t[a] = i : t.push(i), t;
		},
		setupBoard: (e, t, n) => {
			const i = t.find((e) => "unitIronMask" === e.customName);
			i && (e[7][3] = {
				...i,
				id: Ie()
			}, n.push(i.uid));
		}
	},
	[k]: { getInitialRoster: (e) => {
		const t = Qe.DEFAULT.getInitialRoster(e), n = t.find((e) => e.type === d.KING);
		if (n) {
			const e = ["RICHARD_FORWARD_ONLY"];
			n.traits = e, n.skills = [...new Set([...n.skills, ...e])], n.maxSkillSlots = 3;
		}
		return t;
	} }
};
var Ye = class {
	static filterGoldGain(e, t, n) {
		return t <= 0 ? t : e === K ? b.includes(n) ? t : 0 : t;
	}
	static interceptSync(e, t, n) {
		if (e === K) {
			if ("MODIFY_GOLD" === t.type && t.amount > 0 && !b.includes(t.reason)) return {
				...t,
				amount: 0
			};
			if ("UPDATE_ROSTER_PIECE" === t.type && (n.roster || []).find((e) => e.uid === t.pieceUid)?.type === d.KING && t.updates.equippedItems?.length) {
				const e = We.filter((e) => "LEGENDARY" === e.tier && "EQUIPMENT" === e.type), i = e[Math.floor(n.prng.next() * e.length)];
				n.emit && (n.emit({
					type: "ADD_ITEM",
					item: {
						id: `trans-${Ie()}`,
						type: "EQUIPMENT",
						name: i.id,
						desc: "由王子的金箔转化而来",
						effectId: i.effectId,
						tier: "LEGENDARY"
					}
				}), n.emit({
					type: "SHOW_TEXT",
					text: "金箔剥离：转化为传说装备",
					textKey: "LOG_GOLD_FOIL_CONVERT",
					style: "gold"
				})), t.updates.equippedItems = [];
			}
		}
		const i = Qe[e] || Qe.DEFAULT;
		return i.interceptAction ? i.interceptAction(t) : t;
	}
	static onRunInit(e) {
		return { gold: (Ve.find((t) => t.id === e) || Ve[0]).initialGold };
	}
	static onRosterInit(e, t) {
		return (Qe[e] || Qe.DEFAULT).getInitialRoster(t);
	}
	static onBoardSetup(e, t, n, i) {
		const a = Qe[e] || Qe.DEFAULT;
		a.setupBoard && a.setupBoard(t, n, i);
	}
	static checkGameOverOverride(e, t, n) {
		const i = Qe[e] || Qe.DEFAULT;
		return i.checkGameOverOverride ? i.checkGameOverOverride(t, n) : null;
	}
};
function qe(e) {
	const t = (e) => {
		if (!e) return null;
		const n = {
			...e,
			statuses: e.statuses ? e.statuses.map((e) => ({ ...e })) : [],
			traits: e.traits ? [...e.traits] : [],
			learnedSkills: e.learnedSkills ? [...e.learnedSkills] : [],
			skills: e.skills ? [...e.skills] : [],
			equippedItems: e.equippedItems ? [...e.equippedItems] : [],
			metadata: e.metadata ? { ...e.metadata } : {}
		};
		return n.stackedPiece && (n.stackedPiece = t(n.stackedPiece)), n;
	};
	return e.map((e) => e.map((e) => t(e)));
}
function ze(e) {
	const t = {};
	if (e.squares) for (const i in e.squares) t[i] = e.squares[i].map((e) => ({
		...e,
		metadata: e.metadata ? { ...e.metadata } : void 0
	}));
	const n = e.recentDeaths ? { ...e.recentDeaths } : void 0;
	return {
		...e,
		squares: t,
		recentDeaths: n,
		globalJamming: e.globalJamming,
		activeMonarchId: e.activeMonarchId,
		screenWrap: e.screenWrap,
		sirenSongEnabled: e.sirenSongEnabled
	};
}
var Ze = class {
	static handleKillExp(e, t, n, i, a) {
		if (!e.uid || e.color !== c || e.type === d.KING) return;
		const r = X.getModifiers(e);
		let s = 1;
		for (const c of r) if (c.interceptExp) {
			const n = {
				board: void 0,
				piece: e,
				r: t.r,
				c: t.c
			};
			s = c.interceptExp(n, s);
		}
		if (s <= 0) return;
		const o = e.level || 1;
		if (o >= ("ARTHUR" === i ? 3 : 5)) return;
		let l = e.metadata?.currentCaptures || 0, E = e.metadata?.targetCaptures;
		if (E || (E = Me(e.type, o)), l++, l >= E) {
			const i = o + 1, r = Math.max(e.maxSlots || 1, Math.floor((i + 1) / 2)), s = Me(e.type, i);
			n({
				type: "UPDATE_ROSTER_PIECE",
				pieceUid: e.uid,
				updates: {
					level: i,
					maxSlots: r,
					metadata: {
						...e.metadata,
						currentCaptures: 0,
						targetCaptures: s
					}
				}
			}), n({
				type: "SHOW_TEXT",
				text: "LV UP!",
				textKey: "LOG_LEVEL_UP",
				style: "gold",
				pos: t
			}), n({
				type: "LEVEL_UP",
				pos: t
			}), Y.emit(q, {
				key: "maxLevelReached",
				value: i,
				type: "max",
				isLifetimeOnly: !0
			}), !a && i >= 3 && Y.emit(q, {
				key: "level3_reached",
				value: 1,
				isLifetimeOnly: !0
			});
		} else n({
			type: "UPDATE_ROSTER_PIECE",
			pieceUid: e.uid,
			updates: { metadata: {
				...e.metadata,
				currentCaptures: l,
				targetCaptures: E
			} }
		});
	}
};
const Xe = (e) => {
	let t;
	const n = /* @__PURE__ */ new Set(), i = (e, i) => {
		const a = "function" == typeof e ? e(t) : e;
		if (!Object.is(a, t)) {
			const e = t;
			t = (null != i ? i : "object" != typeof a || null === a) ? a : Object.assign({}, t, a), n.forEach((n) => n(t, e));
		}
	}, a = () => t, r = {
		setState: i,
		getState: a,
		getInitialState: () => s,
		subscribe: (e) => (n.add(e), () => n.delete(e))
	}, s = t = e(i, a, r);
	return r;
};
var je = s((e) => {
	var t = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	}, n = Object.assign, i = {};
	function a(e, n, a) {
		this.props = e, this.context = n, this.refs = i, this.updater = a || t;
	}
	function r() {}
	function s(e, n, a) {
		this.props = e, this.context = n, this.refs = i, this.updater = a || t;
	}
	a.prototype.isReactComponent = {}, a.prototype.setState = function(e, t) {
		if ("object" != typeof e && "function" != typeof e && null != e) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, e, t, "setState");
	}, a.prototype.forceUpdate = function(e) {
		this.updater.enqueueForceUpdate(this, e, "forceUpdate");
	}, r.prototype = a.prototype;
	var o = s.prototype = new r();
	o.constructor = s, n(o, a.prototype), o.isPureReactComponent = !0;
	Array.isArray;
	var c = {
		H: null,
		A: null,
		T: null,
		S: null
	};
	e.useCallback = function(e, t) {
		return c.H.useCallback(e, t);
	}, e.useDebugValue = function() {}, e.useSyncExternalStore = function(e, t, n) {
		return c.H.useSyncExternalStore(e, t, n);
	};
}), Je = o(s((e, t) => {
	t.exports = je();
})(), 1);
const $e = (e) => e;
const et = (e) => {
	const t = ((e) => e ? Xe(e) : Xe)(e), n = (e) => function(e, t = $e) {
		const n = Je.useSyncExternalStore(e.subscribe, Je.useCallback(() => t(e.getState()), [e, t]), Je.useCallback(() => t(e.getInitialState()), [e, t]));
		return Je.useDebugValue(n), n;
	}(t, e);
	return Object.assign(n, t), n;
};
function tt(e, t) {
	let n;
	try {
		n = e();
	} catch (i) {
		return;
	}
	return {
		getItem: (e) => {
			var i;
			const a = (e) => null === e ? null : JSON.parse(e, null == t ? void 0 : t.reviver), r = null != (i = n.getItem(e)) ? i : null;
			return r instanceof Promise ? r.then(a) : a(r);
		},
		setItem: (e, i) => n.setItem(e, JSON.stringify(i, null == t ? void 0 : t.replacer)),
		removeItem: (e) => n.removeItem(e)
	};
}
const nt = (e) => (t) => {
	try {
		const n = e(t);
		return n instanceof Promise ? n : {
			then: (e) => nt(e)(n),
			catch(e) {
				return this;
			}
		};
	} catch (n) {
		return {
			then(e) {
				return this;
			},
			catch: (e) => nt(e)(n)
		};
	}
}, it = (e, t) => (n, i, a) => {
	let r = {
		storage: tt(() => window.localStorage),
		partialize: (e) => e,
		version: 0,
		merge: (e, t) => ({
			...t,
			...e
		}),
		...t
	}, s = !1, o = 0;
	const c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set();
	let d = r.storage;
	if (!d) return e((...e) => {
		n(...e);
	}, i, a);
	const E = () => {
		const e = r.partialize({ ...i() });
		return d.setItem(r.name, {
			state: e,
			version: r.version
		});
	}, u = a.setState;
	a.setState = (e, t) => (u(e, t), E());
	const m = e((...e) => (n(...e), E()), i, a);
	let _;
	a.getInitialState = () => m;
	const A = () => {
		var e, t;
		if (!d) return;
		const a = ++o;
		s = !1, c.forEach((e) => {
			var t;
			return e(null != (t = i()) ? t : m);
		});
		const u = (null == (t = r.onRehydrateStorage) ? void 0 : t.call(r, null != (e = i()) ? e : m)) || void 0;
		return nt(d.getItem.bind(d))(r.name).then((e) => {
			if (e) {
				if ("number" != typeof e.version || e.version === r.version) return [!1, e.state];
				if (r.migrate) {
					const t = r.migrate(e.state, e.version);
					return t instanceof Promise ? t.then((e) => [!0, e]) : [!0, t];
				}
			}
			return [!1, void 0];
		}).then((e) => {
			var t;
			if (a !== o) return;
			const [s, c] = e;
			return _ = r.merge(c, null != (t = i()) ? t : m), n(_, !0), s ? E() : void 0;
		}).then(() => {
			a === o && (u?.(i(), void 0), _ = i(), s = !0, l.forEach((e) => e(_)));
		}).catch((e) => {
			a === o && u?.(void 0, e);
		});
	};
	return a.persist = {
		setOptions: (e) => {
			r = {
				...r,
				...e
			}, e.storage && (d = e.storage);
		},
		clearStorage: () => {
			d?.removeItem(r.name);
		},
		getOptions: () => r,
		rehydrate: () => A(),
		hasHydrated: () => s,
		onHydrate: (e) => (c.add(e), () => {
			c.delete(e);
		}),
		onFinishHydration: (e) => (l.add(e), () => {
			l.delete(e);
		})
	}, r.skipHydration || A(), _ || m;
};
var at = {
	title: "RELARCH",
	subtitle: "Verbinden|Kommandieren|Erobern",
	playVsAi: "Standard",
	playVsHuman: "vs. Mensch",
	playRogue: "Schicksalslauf",
	unitExclusive: "Nur {name}",
	whiteReserve: "Weiß",
	blackReserve: "Schwarz",
	whiteReserveFull: "Weiße Reserve",
	blackReserveFull: "Schwarze Reserve",
	whiteTurn: "Weiß ist am Zug",
	blackTurn: "Schwarz ist am Zug",
	whiteWins: "Weiß gewinnt!",
	blackWins: "Schwarz gewinnt!",
	draw: "Remis",
	basicConfiguration: "Basiskonfiguration",
	skillsLabel: "Fähigkeiten",
	noCombo: "Keine Combo",
	blackHQ: "SCHWARZ",
	interfaceTab: "INTERFACE",
	visualTab: "VISUELL",
	audioTab: "AUDIO",
	port: "PORTRÄT",
	land: "LANDSCHAFT",
	fit: "ANPASSEN",
	closeTerminal: "TERMINAL SCHLIESSEN",
	systemLanguage: "SPRACHE",
	masterAudio: "HAUPTLAUTSTÄRKE",
	musicVolume: "MUSIK",
	sfxVolume: "EFFEKTE",
	cancelAim: "ABBRECHEN",
	systemCollapse: "Systemkollaps in:",
	turns: "ZÜGE",
	economicStable: "Wirtschaft stabil",
	danger: "GEFAHR",
	undoLabel: "RÜCKGÄNGIG",
	skipLabel: "ÜBERSPRINGEN",
	itemsLabel: "GEGENSTÄNDE",
	equipLabel: "AUSRÜSTUNG",
	progress: "Fortschritt",
	credits: "Credits",
	systemReady: "System bereit",
	module: "MODUL:",
	cost: "KOSTEN",
	accessGranted: "ZUGRIFF GEWÄHRT",
	systemPurged: "SYSTEM GEREINIGT",
	continueDeep: "Tiefer eintauchen (Kapitel {next})",
	funds: "MITTEL",
	rank: "RANG",
	backgroundInfo: "HINTERGRUND",
	coreLogic: "KERNLOGIK",
	difficultyLabel: "SCHWIERIGKEIT",
	sov: "SOV",
	max: "MAX",
	none: "KEINE",
	spawn: "Beschwören",
	menu: "Menü",
	restart: "Neustart",
	settings: "Einstellungen",
	settingsTitle: "EINSTELLUNGEN",
	restoreDefaults: "STANDARDWERT",
	resetMessage: "Systemparameter auf Standardwert zurückgesetzt.",
	backToMenu: "Hauptmenü",
	languageName: "Deutsch",
	showDanger: "Gefahrenzone",
	reserveLayoutLabel: "Layout",
	reserveLayoutAuto: "Auto",
	reserveLayoutPortrait: "Porträt",
	reserveLayoutLandscape: "Landschaft",
	aspectRatioLabel: "Seitenverhältnis",
	resolutionLabel: "Auflösung",
	resolutionAdaptive: "Adaptiv",
	brightnessLabel: "Helligkeit",
	qualityLabel: "Qualität",
	qualityHigh: "Hoch",
	qualityMedium: "Mittel",
	qualityLow: "Niedrig",
	connectionLineModeLabel: "Link-Visualisierung",
	connectionLineModeAlways: "Immer Ein",
	connectionLineModeAuto: "Auto-Ausblenden",
	connectionLineModeNever: "Immer Aus",
	gridStyleLabel: "Hintergrundgitter",
	gridStyleDotted: "Gepunktet",
	gridStyleCurve: "Kurve",
	defaultDangerZoneLabel: "Standard-Gefahrenzone",
	gameLogicPreferences: "Spiellogik & Einstellungen",
	displayLayout: "Anzeige & Layout",
	connectionLineAutoPauseLabel: "Verbindungslinien auto-ausblenden",
	connectionLinePauseDelayLabel: "Ausblend-Verzögerung",
	autoEndTurnLabel: "Auto-Zugende",
	confirmationsLabel: "Bestätigungen",
	confirmEndTurnLabel: "Zugende bestätigen",
	confirmSurrenderLabel: "Aufgabe bestätigen",
	confirmShopLegendaryLabel: "Shop-Kauf bestätigen",
	postProcessingLabel: "Retro-Nachbearbeitung",
	noiseStrengthLabel: "Filmkorn-Intensität",
	vignetteStrengthLabel: "Vignette-Intensität",
	crtCurvatureLabel: "CRT-Krümmung",
	accessibilityLabel: "Barrierefreiheit",
	screenShakeLabel: "Bildschirmwackeln",
	floating3DLabel: "3D-Parallaxe",
	showEndgameBackground: "Endgame im Menü anzeigen",
	difficultyEasy: "Einfach",
	difficultyNormal: "Normal",
	difficultyHard: "Schwer",
	rules: "Regeln",
	rulesContent: "Ziel: Den feindlichen König schlagen.\nBewegung: Figuren bewegen sich wie im Standard-Schach.\nAufstellung: Sie können Figuren aus Ihrer Reserve auf jedes leere Feld gemäß den Aufstellungsregeln setzen.\nNetzwerk: Eine Figur ist \"verbunden\", wenn sie sich in Reichweite einer anderen verbundenen Figur befindet, die zum König zurückführt.\nEingefrorene Figuren: Wenn eine Figur die Verbindung zum Netzwerk verliert (der Pfad zum König ist unterbrochen), ist sie eingefroren und kann sich nicht bewegen. Verbundene Figuren können sich bewegen, um das Netzwerk wiederherzustellen.",
	undo: "Rückgängig",
	skip: "Zug überspringen",
	surrender: "Aufgeben",
	surrenderConfirm: "Sind Sie sicher, dass Sie aufgeben wollen?",
	surrenderTitle: "Verzweifeltes Angebot",
	surrenderMsg: "Der Feind hat alle Kampffähigkeiten verloren und bittet um Abschaltung. Annehmen?",
	acceptSurrender: "Annehmen",
	refuseSurrender: "Bis zum Ende",
	cancel: "Abbrechen",
	checkWarning: "SCHACH!",
	gameOver: "Game Over",
	winnerIs: "Sieger: ",
	playAgain: "Noch einmal spielen",
	undoRetry: "Rückgängig machen & Wiederholen ({count} übrig)",
	victory: "Sieg!",
	ok: "OK",
	bossSuffix: " (BOSS)",
	decrypt: "ENTSCHLÜSSELN",
	decryptSuccess: "STATUS: DECRYPT_SUCCESS // SEKTOR_ENTSCHLÜSSELUNGS_PROTOKOLL",
	transmissionComplete: "ÜBERTRAGUNG ABGESCHLOSSEN",
	systemUnlocked: "SYSTEM ENTSPERRT",
	swallow: "SCHWALBE",
	protocolLocked: "PROTOKOLL GESPERRT",
	noDescription: "Keine Beschreibung",
	unit: "Einheit",
	level: "Stufe",
	skill: "Fähigkeit",
	equip: "Ausrüsten",
	add: "HINZUFÜGEN",
	unlockAll: "Alles freischalten",
	clearData: "Daten löschen",
	selectConsumable: "Verbrauchsgegenstand wählen...",
	selectEquipment: "Ausrüstung wählen...",
	generic: "ALLG",
	monarchSelectTitle: "Monarch wählen",
	monarchSelectSub: "Strategiekern wird initialisiert",
	monarchFunds: "STARTKAPITAL",
	monarchDifficulty: "STRATEGISCHE SCHWIERIGKEIT",
	monarchHistory: "Geschichte / Aufklärung",
	monarchLogic: "Kernsystemlogik",
	monarchCancel: "Abbrechen",
	monarchStart: "Lauf initialisieren",
	monarchWIP: "In Arbeit",
	monarchLocked: "Gesperrt",
	monarchDefaultName: "Der Souverän",
	monarchDefaultDesc: "Der traditionelle Kommandant des neuronalen Netzwerks. Ausgewogen, stabil und folgt strikt den Basisprotokollen.",
	monarchDefaultMechanic: "Standardprotokoll: Bietet Netzwerkverbindung für Verbündete in 1 Feld Entfernung.",
	monarchHappyPrinceName: "Glücklicher Prinz",
	monarchHappyPrinceDesc: "\"Ein bleiernes Herz, gebunden an absolutes Opfer. Er legt seine goldene Hülle ab, um sein Volk zu bewaffnen.\"",
	monarchHappyPrinceMechanic: "[Goldenes Almosen] Startet mit 5000G, kein passives Einkommen. Für den Prinzen gekaufte Gegenstände werden zu legendärer Ausrüstung für Verbündete.\n[Bleiernes Herz] Begleitet von der Signalquelle \"Schwalbe\". Wenn sie gefangen wird, geben Sie 500G aus, um sie wiederzubeleben. Game over, wenn sie endgültig stirbt.\n[Bleierne Statue] Der erste tödliche Schlag versteinert den Prinzen zu einer unbesiegbaren 3x3 Netzwerkquelle.",
	monarchArthurName: "König Artus",
	monarchArthurDesc: "\"Erster unter Gleichen. Er zertrümmert die absolute Monarchie, um eine dezentrale Gemeinschaft zu schmieden.\"",
	monarchArthurMechanic: "[Dezentral] Stufe 3/Legendäre Einheiten fungieren als Netzwerkquellen. Startet mit Merlin & Lanzelot auf Stufe 3.\n[Eid der Tafelrunde] Wenn ein Verbündeter der Stufe 3 einen Gegner schlägt, erhalten alle anderen Verbündeten der Stufe 3 einen [Schild].\n(Einschränkung: Max. Einheitenstufe ist 3; Damen deaktiviert)",
	monarchOdysseusName: "Odysseus",
	monarchOdysseusDesc: "\"Navigator des endlosen Abgrunds. Für ihn sind Grenzen Illusionen, und Täuschung ist die höchste Kunst.\"",
	monarchOdysseusMechanic: "[Abgrund-Navigation] Einheiten und Netzwerke werden über die Brettkanten hinweg fortgesetzt (max. 1 Feld).\n[Sirenengesang] Alle 5 Züge können vernetzte Einheiten (außer König) einen tödlichen Verhaltens-Drift erleiden.\n[Trojanisches Pferd] Aktiv: Setze ein verstecktes Pferd ein. Nach 2 Zügen bricht es auf und bringt zwei Überraschungs-Bauern hervor.",
	monarchLouisName: "Ludwig XIV.",
	monarchLouisDesc: "\"L'état, c'est moi. Absolute Macht strahlt von der Sonne aus, zu heilig, um geteilt zu werden.\"",
	monarchLouisMechanic: "[Absolute Corona] Massives 5x5-Königsnetzwerk. Signale können NICHT weitergeleitet werden. Feinde darin werden zum Schweigen gebracht.\n[Die Eiserne Maske] Startet mit einer unbeweglichen \"Eisernen Maske\" als sekundäre Quelle. Wenn sie gefangen wird, verliert der König dauerhaft sein Corona-Netzwerk.",
	monarchRichardName: "Richard I.",
	monarchRichardDesc: "\"Ein Kreuzritter, ewig an der Vorhut. Ruhm liegt voraus; Rückblick ist Verrat.\"",
	monarchRichardMechanic: "[Einweg-Kreuzzug] Signale fließen nur vorwärts. König bewegt sich wie eine Dame. Tiefere Vorstöße des Königs gewähren Verbündeten +2 Gleitbewegungen und erhöhen Kopfgelder.\n[Kein Rückzug] Der König kann sich nicht rückwärts bewegen.\n[Lösegeld des Königs] Bei seinem Tod werden automatisch 100G ausgegeben, um den König in Ihrer Grundlinie wiederzubeleben.",
	selectLoot: "Wähle deine Beute",
	recruitKnight: "Rekrutieren: Springer",
	recruitKnightDesc: "Füge einen neuen Springer zu deiner Liste hinzu.",
	recruitBishop: "Rekrutieren: Läufer",
	recruitBishopDesc: "Füge einen neuen Läufer zu deiner Liste hinzu.",
	itemFreeze: "Gegenstand: Frostrolle",
	itemFreezeDesc: "Verbrauchsgut: Friert einen Feind für 1 Zug ein.",
	loadGame: "Wiedereintritt",
	loadGameSub: "Kontrollpunkt wiederherstellen",
	saveGame: "Spiel speichern",
	saveManagement: "Speicherverwaltung",
	loadArchive: "Archiv laden",
	emptySlot: "Leerer Platz",
	chapter: "Kapitel",
	levelLabel: "Stufe",
	saveLimitReached: "Speicherlimit erreicht",
	saveSuccess: "Spiel erfolgreich gespeichert!",
	remainingSaves: "Verbleibende Speicherungen",
	yourTurn: "DEIN ZUG",
	yourTurnAnim: "DEIN ZUG",
	aiTurn: "KI-ZUG",
	normalMode: "Standard",
	rogueMode: "Schicksalslauf",
	turn: "Zug",
	tacticalTurnBased: "Taktisch rundenbasiert",
	permadeathRun: "Permadeath-Lauf",
	standardSimulation: "Standard-Simulation",
	selectAiConfig: "KI-Konfiguration wählen",
	protocolBaseline: "01 - Protokoll-Baseline",
	standardLogic: "02 - Standard-Logik",
	advancedNeural: "03 - Erweitert neuronal",
	localP2P: "Lokales Peer-to-Peer",
	build: "REV",
	local: "Lokal",
	terminal: "Terminal",
	skipReward: "Überspringen (+10G)",
	reroll: "Neu würfeln ({cost}G)",
	combo: "Combo x{count}",
	comboInc: "Combo +1!",
	slot: "PLATZ",
	tierCommon: "Gewöhnlich",
	tierRare: "Selten",
	tierEpic: "Episch",
	tierLegendary: "Legendär",
	availableCredit: "Verfügbares Guthaben",
	confirmClaim: "Anspruch bestätigen",
	insufficientFunds: "Unzureichende Mittel",
	darkBargain: "Finsterer Handel",
	targetSold: "Ziel verkauft",
	blackMarket: "Schwarzmarkt",
	awaitingSelection: "Warten auf Terminal-Auswahl...",
	unlockRequired: "Über taktischen Erfolg freischalten",
	itemDetails: "Gegenstandsdetails",
	assetDetails: "Asset-Details",
	sell: "VERKAUFEN",
	back: "Zurück",
	recruitPiece: "Rekrutieren: {name}",
	newUnit: "Neue Einheit",
	addPieceDesc: "Füge einen neuen {name} zu deiner Liste hinzu.",
	imbueSkill: "Verleihen: {name}",
	replaceSkill: "Ersetzen: {name}",
	backupUnit: "Reserve-Einheit",
	bonusSkill: "Bonus-Fähigkeit: ",
	conflict: "KONFLIKT",
	equipmentFull: "Ausrüstungsplätze voll",
	pieceTypeMismatch: "Einheitentyp-Konflikt",
	itemConflictReplace: "Konfliktgegenstand ersetzt: {name}",
	replaces: "(Ersetzt) ",
	scrapRecycle: "Schrott-Recycling",
	inventoryFull: "Inventar voll",
	scrapRecycleDesc: "Deine {type}-Plätze sind voll ({max}). In 15 Gold umgewandelt.",
	consumable: "Gegenstände",
	equipment: "Ausrüstung",
	piecePawn: "Bauer",
	pieceKnight: "Springer",
	pieceBishop: "Läufer",
	pieceRook: "Turm",
	pieceQueen: "Dame",
	pieceKing: "König",
	unitMerlin: "Merlin (St.3)",
	unitLancelot: "Lanzelot (St.3)",
	unitIronMask: "Die Eiserne Maske",
	campTitle: "Lager",
	campSubtitle: "Ausruhen & Vorbereiten",
	campDesc: "Nutze diesen Moment, um deine Ausrüstung vor dem nächsten Gefecht zu überprüfen.",
	campLevel: "Stufe",
	campGold: "Gold",
	campInventory: "Inventar",
	campUnits: "{count} Einheiten",
	campItems: "{consumables} Gegenstände · {equipments} Ausrüstung",
	continue: "Fortfahren",
	close: "Schließen",
	debug: {
		spawnerTitle: "Einheiten-Beschwörer (Debug)",
		pieceType: "Figurentyp",
		selectPiece: "Figur wählen...",
		imbueSkill: "Fähigkeit verleihen",
		initialEquipment: "Startausrüstung",
		none: "Keine",
		generate: "Generieren"
	},
	dbTitle: "Datenbank",
	dbSub: "Datenentschlüsselung & Archiv",
	dbClose: "Trennen",
	dbNotCollected: "Daten nicht entdeckt",
	dbUnlockProtocol: "Freischaltprotokoll:",
	dbTabs: {
		monarch: "Monarchenkerne",
		king: "Königsmodule",
		pawn: "Bauernmodule",
		knight: "Springermodule",
		bishop: "Läufermodule",
		rook: "Turmmodule",
		queen: "Damenmodule",
		generic: "Allgemeine Protokolle",
		equipment: "Hardware-Peripherie",
		consumable: "Einweg-Skripte",
		boss: "Boss-Mechaniken",
		terrain: "Gelände-Anomalien"
	},
	noSelection: "Keine Auswahl",
	personnel: "Personal",
	inventory: "Inventar",
	emptyBag: "Leere Tasche",
	storageEmpty: "Lager leer",
	skillModule: "Fähigkeitsmodul",
	equipModule: "Ausrüstung",
	railgunFiring: "Orbitalkanone: FEUERT!",
	railgunCountdown: "Orbitalkanone: {n} Züge bis zum Feuern",
	quantumCountdown: "Quantentausch in: {n} Zügen",
	cooldown: "Abklingzeit",
	ready: "Bereit",
	used: "Benutzt",
	depleted: "Munition erschöpft",
	turnsRemaining: "{n} Züge",
	remainingUses: "{n} Anwendungen verbleibend",
	bastionMode: "Bastionsmodus",
	mobileMode: "Mobiler Modus",
	costGold: "Kosten {n} Gold",
	deployToUse: "Zum Benutzen aufstellen",
	prepare: "Vorbereiten",
	intel: "Aufklärung",
	barracks: "Kaserne",
	sectorLogs: "Sektor-Logs",
	sector: "Sektor",
	eliminateAll: "Alle eliminieren",
	vipTarget: "VIP-Ziel",
	vipTargetDesc: "Kein feindlicher König. Eliminiere alle Feinde, um zu gewinnen.",
	jammingTitle: "Störung",
	jammingShortDesc: "Globaler Netzwerkausfall. Nur Relais bieten Signale.",
	noAnomaly: "Normal",
	anomalyTitle: "ANOMALIEN",
	proxyKingDesc: "Der König ist nur der Anfang. Solange der feindliche König lebt, benötigen die gegnerischen Einheiten eine Netzwerkverbindung. Fällt der König, ist die gesamte feindliche Armee permanent verbunden. Du musst alle Feinde eliminieren, um zu gewinnen.",
	empty: "Leer",
	dragToUnequip: "Zum Ablegen ziehen",
	dragToEquip: "Zum Ausrüsten ziehen",
	dragToUse: "Zum Benutzen ziehen",
	aiAnalyzing: "KI analysiert...",
	noData: "Keine Daten",
	items: JSON.parse("{\"EMP\":{\"name\":\"EMP-Puls\",\"desc\":\"Friert alle Feinde in einem 3x3-Bereich für 1 Zug ein.\"},\"OVERCLOCK\":{\"name\":\"Übertakten\",\"desc\":\"Ausgewählte Figur kann sich in diesem Zug zweimal bewegen.\"},\"PHASE\":{\"name\":\"Phasensprung\",\"desc\":\"Passiv: Diese Figur kann sich durch andere Figuren bewegen.\"},\"RANGE_UP\":{\"name\":\"Reichweiten-Extender\",\"desc\":\"Passiv: Erhöht die Netzwerkreichweite um 1.\"},\"BATTERY\":{\"name\":\"Batterie\",\"desc\":\"Taut ein eingefrorenes Ziel sofort auf.\"},\"FREEZE_RAY\":{\"name\":\"Froststrahl\",\"desc\":\"Friert einen Feind für 2 Züge ein.\"},\"PARDON\":{\"name\":\"Gnadengesuch\",\"desc\":\"Konvertiert vorübergehend eine feindliche Einheit.\"},\"SMOKE_BOMB\":{\"name\":\"Rauchbombe\",\"desc\":\"Immunität gegen lineare Fernangriffe für 2 Züge.\"},\"EQ_BAYONET\":{\"name\":\"Bajonett\",\"desc\":\"Bauern können vorwärts angreifen (schlagen).\"},\"EQ_SCOUT_RADAR\":{\"name\":\"Späher-Radar\",\"desc\":\"Solange verbunden, schlägt feindliche Unsichtbarkeit/Täuschung in der Nähe fehl.\"},\"EQ_SIGNAL_BACKPACK\":{\"name\":\"Signal-Rucksack\",\"desc\":\"Zwingt Verbündete 2 Felder vor/zurück, verbunden zu sein.\"},\"EQ_TELESCOPIC_LEGS\":{\"name\":\"Teleskopbeine\",\"desc\":\"Springer kann wählen, eine Distanz von 3x1 zu springen.\"},\"EQ_SHOCK_STIRRUPS\":{\"name\":\"Schocksteigbügel\",\"desc\":\"Landung friert benachbarte Kreuzrichtungs-Feinde für 1 Zug ein.\"},\"EQ_PRISM_SHIELD\":{\"name\":\"Prismenschild\",\"desc\":\"Bei Tod schlägt er den Mörder mit, wenn es ein diagonaler Angriff war.\"},\"EQ_HIGH_POWER_SCOPE\":{\"name\":\"Hochleistungs-Zielfernrohr\",\"desc\":\"Erhalte 5 Gold, wenn du einen Feind aus 3+ Feldern Entfernung schlägst.\"},\"EQ_PURIFICATION_STAFF\":{\"name\":\"Reinigungsstab\",\"desc\":\"Beseitigt negative Status von Verbündeten in einem 3x3-Bereich um das Ziel nach der Bewegung.\"},\"EQ_HOVER_TREAD\":{\"name\":\"Schwebekette\",\"desc\":\"Türme können sich 1 Feld diagonal bewegen.\"},\"EQ_BASE_STATION\":{\"name\":\"Basisstation\",\"desc\":\"Solange verbunden, sind alle Verbündeten in derselben Reihe/Spalte verbunden.\"},\"EQ_REACTIVE_ARMOR\":{\"name\":\"Reaktivpanzerung\",\"desc\":\"Türme sind immun gegen Angriffe von direkt oben oder unten.\"},\"EQ_PHOENIX_FEATHER\":{\"name\":\"Phönixfeder\",\"desc\":\"Beim ersten Tod als Bauer Stufe 1 in der Nähe des Königs wiedergeboren.\"},\"EQ_BLOOD_DRESS\":{\"name\":\"Blutkleid\",\"desc\":\"Hinterlasse ein Nachbild bei Kill; kann später dorthin teleportieren.\"},\"EQ_SCEPTER_OF_CHARM\":{\"name\":\"Zepter des Charmes\",\"desc\":\"Konvertiert einen einsamen Feind in Reichweite für 1 Zug zu Beginn des Zuges.\"},\"EQ_LIGHTNING_ROD\":{\"name\":\"Blitzableiter\",\"desc\":\"König ist immun gegen Umweltfallen und negative Status.\"},\"EQ_MEGAPHONE\":{\"name\":\"Megaphon\",\"desc\":\"Reichweite der Königsunterstützung von 1 auf 2 Felder erhöht.\"},\"EQ_ROYAL_GUARD\":{\"name\":\"Königliche Wache\",\"desc\":\"Benachbarter Verbündeter-Kill löst 10G Auto-Wiederbelebung aus (Einmalig).\"},\"EQ_REFLECTIVE_ARMOR\":{\"name\":\"Reflektionsrüstung\",\"desc\":\"Beim Geschlagenwerden wird der Angreifer für 1 Zug eingefroren.\"},\"EQ_LIGHTWEIGHT_ALLOY\":{\"name\":\"Leichtmetalllegierung\",\"desc\":\"Ermöglicht einen Zug im getrennten Zustand; Gegenstand bricht danach.\"},\"EQ_CAMOUFLAGE\":{\"name\":\"Tarnung\",\"desc\":\"Unsichtbar für Feinde, wenn in diesem Zug keine Bewegung/Schlagen erfolgte.\"},\"EQ_STABILIZER\":{\"name\":\"Stabilisator\",\"desc\":\"Immun gegen erzwungene Verdrängungseffekte.\"},\"EQ_SELF_DESTRUCT\":{\"name\":\"Selbstzerstörung\",\"desc\":\"Zerstöre benachbarten 1-Feld-Bereich bei Tod; Gegenstand bricht danach.\"},\"EQ_BACKUP_BATTERY\":{\"name\":\"Ersatzbatterie\",\"desc\":\"Verzögert das Einfrieren um 2 Züge bei Trennung.\"},\"EQ_EMERGENCY_LINK\":{\"name\":\"Notfall-Link\",\"desc\":\"Verbindet sich mit einem Verbündeten innerhalb von 2 Feldern bei Trennung.\"},\"EQ_BOUNTY_MODULE\":{\"name\":\"Kopfgeld-Modul\",\"desc\":\"Erhalte 10 Gold bei jedem erfolgreichen Schlagen.\"},\"EQ_RESCUE_BEACON\":{\"name\":\"Rettungsbake\",\"desc\":\"Bei Tod ein Duplikat aus der Reserve in der Nähe des Königs aufstellen.\"},\"EQ_TACTICAL_OPS\":{\"name\":\"Taktische Operationen\",\"desc\":\"Erhalte eine extra Aufstellungsaktion im ersten Zug des Gefechts.\"},\"EQ_DIPLOMATIC_IMMUNITY\":{\"name\":\"Diplomatische Immunität\",\"desc\":\"Feindliche KI kann in den ersten 2 Zügen keine neuen Einheiten aufstellen.\"},\"EQ_FULL_BAND_SCANNER\":{\"name\":\"Vollband-Scanner\",\"desc\":\"Enthülle und zerstöre alle feindlichen Tarnungen/Fallen zu Zugbeginn.\"},\"EQ_BLACK_MARKET_LEDGER\":{\"name\":\"Schwarzmarkt-Kassenbuch\",\"desc\":\"Erhalte 30 Gold Bonus bei Sieg (Königsmord).\"},\"EQ_RECYCLING_STATION\":{\"name\":\"Recycling-Station\",\"desc\":\"Erhalte einen zufälligen gewöhnlichen Verbrauchsgegenstand bei Tod eines Verbündeten.\"},\"EQ_RELIC_OF_KINGS\":{\"name\":\"Relikt der Könige\",\"desc\":\"König erhält Dame+Springer-Bewegung, wenn er die letzte Einheit ist und Reserven leer sind.\"},\"EQ_VENTURE_CAPITAL\":{\"name\":\"Risikokapital\",\"desc\":\"Erhalte 10 Gold Zinsen, wenn du die Stufe mit 50+ Gold betrittst.\"},\"EQ_SWARM_INTELLIGENCE\":{\"name\":\"Nachbarschaftsnetz\",\"desc\":\"Bauern sind verbunden, wenn sie nebeneinander stehen.\"},\"EQ_ARROGANT_CREED\":{\"name\":\"Arrogantes Glaubensbekenntnis\",\"desc\":\"Zu Beginn des Spiels hat der König Dame+Springer-Bewegung. Dieser Effekt geht dauerhaft verloren, wenn du eine andere Figur aufstellst.\"},\"EQ_QUEEN_ROOK_LINK\":{\"name\":\"Turm-Link-Halsband\",\"desc\":\"Legendär: Wenn die Dame vernetzt ist, wird der nächste verbündete Turm zwangsvernetzt.\"},\"EQ_QUEEN_BISHOP_LINK\":{\"name\":\"Läufer-Link-Halsband\",\"desc\":\"Legendär: Wenn die Dame vernetzt ist, wird der nächste verbündete Läufer zwangsvernetzt.\"},\"EQ_HIVE_CORE\":{\"name\":\"Kraftkern\",\"desc\":\"Solange verbunden, erhält dieser Bauer +1 Bewegung (kann 2 Felder vorwärts ziehen).\"},\"EQ_CHEAP_BOOSTER\":{\"name\":\"Billiger Booster\",\"desc\":\"Netzwerkreichweite auf 3 erhöht, kann aber nicht schlagen.\"},\"EQ_CHAIN_MINE\":{\"name\":\"Kettenmine\",\"desc\":\"Bei Tod wird eine 3x3-Explosion ausgelöst, wenn er neben einem anderen Bauern steht.\"},\"EQ_PLUNDER_HOOVES\":{\"name\":\"Plünderhufe\",\"desc\":\"Stiehl 2 Gold von übersprungenen Feinden.\"},\"EQ_GHOST_RIDE\":{\"name\":\"Geisterritt\",\"desc\":\"30% Chance, übersprungene Feinde auf ein zufälliges Feld zu teleportieren.\"},\"EQ_REFRACTION_LENS\":{\"name\":\"Refraktionslinse\",\"desc\":\"Ermöglicht 90-Grad-Refraktionszug von 2 Feldern, wenn von einem Verbündeten blockiert.\"},\"EQ_FAITH_SIPHON\":{\"name\":\"Glaubenssog\",\"desc\":\"Erhalte 2 Gold, wann immer eine Einheit auf den Diagonalen dieses Läufers stirbt.\"},\"EQ_EM_SHIELD\":{\"name\":\"EM-Schild\",\"desc\":\"König ist immun gegen Springer, solange dieser Turm benachbart ist.\"},\"EQ_TOW_HOOK\":{\"name\":\"Abschlepphaken\",\"desc\":\"Aktiv: Schlage einen Feind in 2 Feldern Entfernung in gerader Linie, ohne dich zu bewegen.\"},\"EQ_ROYAL_SALUTE\":{\"name\":\"Königlicher Gruß\",\"desc\":\"Ein erfolgreicher Angriff löst einen Blitzschlag bei einem zufälligen feindlichen Bauern aus (Abklingzeit: 3).\"},\"EQ_GOLDEN_THRONE\":{\"name\":\"Goldener Thron\",\"desc\":\"Erhalte Gold basierend auf vernetzten Verbündeten zu Zugbeginn.\"},\"SIGNAL_TOWER_DEFENSE\":{\"name\":\"Signalturm-Verteidigung\",\"desc\":\"Aktiv: Gib 20 Gold aus, um einen permanenten Signalturm auf das aktuelle Feld zu setzen.\"},\"EQ_DEFLATION\":{\"name\":\"Deflation\",\"desc\":\"Global: Reduziert alle Shop-Preise um 20%.\"},\"EQ_HACKER_TERMINAL\":{\"name\":\"Hacker-Terminal\",\"desc\":\"Global: Friere zu Zugbeginn zufällig einen hochrangigen Feind ein.\"},\"EQ_SPYWARE\":{\"name\":\"Spyware\",\"desc\":\"Global: Erhalte 5 Gold, wann immer der feindliche König eine Bewegung ausführt.\"},\"FROZEN\":{\"name\":\"Eingefroren\",\"desc\":\"Kann sich in dieser Runde nicht bewegen oder handeln.\"},\"PETRIFIED\":{\"name\":\"Versteinert\",\"desc\":\"Dauerhaft bewegungsunfähig.\"},\"SKILL_LOCKED\":{\"name\":\"Fertigkeit gesperrt\",\"desc\":\"Aktive Fähigkeiten können nicht genutzt werden.\"},\"SILENCED\":{\"name\":\"Stummgeschaltet\",\"desc\":\"Kann keine Fähigkeiten aktivieren.\"},\"ENCRYPTED\":{\"name\":\"Verschlüsselt\",\"desc\":\"Identität maskiert. Figurentyp verborgen.\"},\"SHIELDED\":{\"name\":\"Geschützt\",\"desc\":\"Negiert eine Instanz von Schaden.\"},\"GRAVITY_LOCKED\":{\"name\":\"Schwerkraft-gesperrt\",\"desc\":\"Bewegungsreichweite begrenzt.\"},\"MEDUSA\":{\"name\":\"Medusa-Auge\",\"desc\":\"Permanente Versteinerung.\"},\"WITHDRAW\":{\"name\":\"Taktischer Rückzug\",\"desc\":\"Figur in Reserve zurückrufen.\"},\"JAMMING\":{\"name\":\"Vollband-Störung\",\"desc\":\"Lähmt dauerhaft alle Nicht-König-Figuren auf dem Brett (beeinträchtigt nicht nach der Nutzung platzierte Figuren).\"},\"SCARY_LETTER\":{\"name\":\"Drohbrief\",\"desc\":\"Zwinge eine feindliche Figur, sich 1 Feld von deinem König wegzubewegen.\"},\"SPARE_PARTS\":{\"name\":\"Ersatzteile\",\"desc\":\"Erzeuge einen Bauern in der Nähe des Königs.\"},\"COMPASS\":{\"name\":\"Verdrängungskompass\",\"desc\":\"Drifte zufällig auf ein benachbartes Feld.\"},\"PURIFIER\":{\"name\":\"Signalreiniger\",\"desc\":\"Beseitige negative Status.\"},\"DECOY\":{\"name\":\"Täuschkörper\",\"desc\":\"Täuscheinheit mit hoher Priorität.\"},\"DOOM_BROADCAST\":{\"name\":\"Untergangs-Übertragung\",\"desc\":\"Zerstöre alle nicht vernetzten Einheiten auf dem Brett.\"},\"TIME_GLASS\":{\"name\":\"Zeitsandglas\",\"desc\":\"Füge 1 Rückgängig-Ladung hinzu.\"},\"SPACE_GLASS\":{\"name\":\"Raumsandglas\",\"desc\":\"Füge 1 Speicher-Ladung hinzu.\"},\"PRESS\":{\"name\":\"Schwere Presse\",\"desc\":\"Dauerhaft abgeflacht.\"},\"VOID_ANCHOR\":{\"name\":\"Leerenanker\",\"desc\":\"Sperre das Feld.\"},\"GRAVITY_TRAP\":{\"name\":\"Schwerkraftfalle\",\"desc\":\"Schwerkraftsperre im 3x3-Bereich, maximale Bewegungsdistanz auf 1 Feld begrenzt.\"},\"CLOAK\":{\"name\":\"Signalstörer\",\"desc\":\"Unsichtbarkeit für 2 Züge.\"},\"OVERLOAD\":{\"name\":\"Energieüberlastung\",\"desc\":\"Extra Zug, kann aber nicht schlagen.\"},\"PORTAL\":{\"name\":\"Portal\",\"desc\":\"Erstelle einen Portal-Eintrittspunkt.\"},\"DRAFT_ORDER\":{\"name\":\"Zwangseinziehung\",\"desc\":\"Belebe einen Springer wieder und füge ihn der Reserve hinzu.\"},\"MIDAS\":{\"name\":\"Midas-Stein\",\"desc\":\"Ziehe diesen Stein auf eine Einheit in deiner Kasernenreihe unten oder auf dem Brett, um sie in Gold umzuwandeln.\"},\"GOLDEN_TOUCH\":{\"name\":\"Goldene Berührung\",\"desc\":\"Konvertiere sofort einen gewählten [feindlichen Bauern] in 50 Gold.\"},\"LOOT_BOX\":{\"name\":\"Beutekiste\",\"desc\":\"Zufälliger Verbrauchsgegenstand.\"},\"ROYAL_SACRIFICE\":{\"name\":\"Königliches Opfer\",\"desc\":\"Opfere dauerhaft einen gewählten [Verbündeten], um den Benutzer zu stärken (+1 Stufe, +1 Ausrüstungsplatz).\"},\"SCRAP_PART\":{\"name\":\"Schrottteil\",\"desc\":\"Für schnelles Geld zerlegen. Gewährt 5-20 Gold.\"},\"LURE_SIGNAL\":{\"name\":\"Locksignal\",\"desc\":\"Zwinge einen gewählten [feindlichen Bauern], sich 1 Feld rückwärts zu bewegen.\"},\"EMERGENCY_PATCH\":{\"name\":\"Notfall-Patch\",\"desc\":\"Entferne sofort den Status [Infiziert] von einem gewählten Verbündeten.\"},\"COMMAND_STEAL\":{\"name\":\"Befehlsdiebstahl\",\"desc\":\"Friere einen Feind für 2 Züge ein und nutze ihn als temporäre [Netzwerkquelle].\"},\"DATA_HARVEST\":{\"name\":\"Daten-Ernte\",\"desc\":\"Erhalte 10 Gold für jede [eingefrorene] Einheit, die sich derzeit auf dem Brett befindet.\"},\"VOID_ANCHOR_ITEM\":{\"name\":\"Leerenanker\",\"desc\":\"Sperre ein Feld für 3 Züge, was das Betreten oder Aufstellen jeglicher Einheiten verhindert.\"},\"GOLD_MAGNET_ITEM\":{\"name\":\"Goldmagnet\",\"desc\":\"Verleihe einer Einheit: Erhalte 1 Gold für jedes Feld, das sie in diesem Zug zieht.\"},\"BARRICADE_ITEM\":{\"name\":\"Barrikade\",\"desc\":\"Platziere ein physisches Hindernis auf einem Feld, das alle Bewegungen blockiert.\"},\"SCOUT_PROBE\":{\"name\":\"Spähsonde\",\"desc\":\"Enthülle feindliche unsichtbare Einheiten in einem 2x2-Bereich.\"},\"RUST_SPRAY\":{\"name\":\"Rostspray\",\"desc\":\"Ziel-Feind kann im nächsten Zug nicht schlagen.\"},\"SWAP_PLUGIN\":{\"name\":\"Tausch-Plugin\",\"desc\":\"Tausche die Positionen von zwei benachbarten Verbündeten.\"},\"ILLEGAL_SLOT\":{\"name\":\"Illegaler Platz\",\"desc\":\"Füge einer Figur dauerhaft +1 Ausrüstungsplatz hinzu.\"},\"BLACK_ORDER\":{\"name\":\"Schwarzmarkt-Auftrag\",\"desc\":\"Stiehl eine Ausrüstung von einer feindlichen Figur.\"},\"REAPER_EXE\":{\"name\":\"Reaper.exe\",\"desc\":\"Zerstöre alle nicht vernetzten Figuren auf dem Brett.\"},\"WHEEL_OF_FATE\":{\"name\":\"Glücksrad\",\"desc\":\"Löse 3 zufällige Verbrauchsgegenstands-Effekte aus.\"},\"PASSIVE_ANTENNA\":{\"name\":\"Wohlstandsantenne\",\"desc\":\"Aktiv: Verdoppelt in diesem Kampf alle erhaltenen Golderträge.\"},\"SINGULARITY_GRENADE\":{\"name\":\"Singularitätsgranate\",\"desc\":\"Auf leerem Feld werfen. Zieht Nicht-König-Figuren im 5×5-Bereich ringweise 1 Feld zur Mitte. König ist immun, aber 2 Züge gravitationsgebunden. Figuren, die in den König prallen, werden einseitig zerstört.\"},\"SPATIAL_SCRAMBLER\":{\"name\":\"Raumzerhacker\",\"desc\":\"Ordnet alle Nicht-König-Figuren in 3×3 um das Ziel zufällig neu an.\"},\"EQ_GRAPPLING_HOOK\":{\"name\":\"Enterhaken\",\"desc\":\"Aktiv: Feuere einen Enterhaken in eine Richtung. Ziehe dich selbst zum letzten leeren Feld vor einem Hindernis. Kostet keinen Aktionspunkt.\"}}"),
	skills: JSON.parse("{\"BLACK_HOLE\":{\"name\":\"Schwarzes Loch\",\"desc\":\"Permanente Leerenanker blockieren das Zentrum des Bretts.\"},\"OBSTACLES\":{\"name\":\"Ruinen\",\"desc\":\"Unpassierbare Barrikaden sind über das Brett verstreut.\"},\"LASER_GRID\":{\"name\":\"Lasergitter\",\"desc\":\"Elektrifiziertes Gitter: In jeder ungeraden Runde (zu Rundenbeginn) unter Strom; zerstört die Figur darauf. Könige sind immun.\"},\"WORMHOLE\":{\"name\":\"Wurmloch\",\"desc\":\"Ein Paar verbundener Teleporter: Wer den einen betritt, kommt aus dem anderen; ist der Ausgang besetzt, passiert nichts.\"},\"NETWORK_JAM\":{\"name\":\"Netzwerkstörung\",\"desc\":\"Signalinterferenz betrifft das gesamte Brett.\"},\"FOG_OF_WAR\":{\"name\":\"Nebel des Krieges\",\"desc\":\"Unerforschte Gebiete sind verborgen.\"},\"quantumCountdown\":\"Quantentausch in: {n} Zügen\",\"erasureReady\":\"Orbitalkanone: BEREIT\",\"erasureCharging\":\"Orbitalkanone lädt: {n} Züge\",\"PAWN_PATROL\":{\"name\":\"Patrouille\",\"desc\":\"Ermöglicht horizontale Bewegung 1 Feld (kein Schlagen).\"},\"PAWN_FRONTAL_SPIKE\":{\"name\":\"Frontalstachel\",\"desc\":\"Ermöglicht Schlagen bei Bewegung 1 Feld vorwärts.\"},\"PAWN_BACKSTEP\":{\"name\":\"Rückschritt\",\"desc\":\"Ermöglicht diagonale Rückwärtsbewegung 1 Feld (kein Schlagen).\"},\"PAWN_RESOURCEFUL\":{\"name\":\"Einfallsreich\",\"desc\":\"30% Chance, bei Tod in die Reserve zurückzukehren.\"},\"PAWN_VENGEANCE\":{\"name\":\"Vergeltung\",\"desc\":\"Friere bei Tod einen zufälligen Feind für 2 Züge ein.\"},\"PAWN_ASSASSIN\":{\"name\":\"Attentäter-Code\",\"desc\":\"Entwickelt sich zu Springer/Läufer/Turm beim Schlagen von Dame/Turm.\"},\"PAWN_PROMOTE\":{\"name\":\"Beförderungspfad\",\"desc\":\"Stufenaufstieg pro erbeuteter Figur; auf Stufe 5 beim nächsten Schlag Evolution.\"},\"PAWN_SIGNAL_TOWER\":{\"name\":\"Signalturm\",\"desc\":\"Kann sich bei Trennung nicht bewegen, bietet aber Netzwerk für benachbarte Verbündete.\"},\"PAWN_PHALANX\":{\"name\":\"Phalanx\",\"desc\":\"Immun gegen feindliche Bauern/Springer, wenn links oder rechts ein verbündeter Bauer angrenzt.\"},\"PAWN_DETONATOR\":{\"name\":\"Detonator\",\"desc\":\"Explodiere bei Tod und zerstöre alle Nicht-Könige im 3x3-Bereich.\"},\"PAWN_RELAY\":{\"name\":\"Relaisstation\",\"desc\":\"Erweitere Netzwerkreichweite auf 2 Felder.\"},\"PAWN_SACRIFICE\":{\"name\":\"Opferpakt\",\"desc\":\"Erhalte 2 extra Speicherungen und erzeuge bei Tod einen Bauern beim König.\"},\"PAWN_INTERLOCK\":{\"name\":\"Verriegelungspanzerung\",\"desc\":\"Unverwundbar gegen Dame/Turm, wenn neben einem Verbündeten.\"},\"PAWN_PARASITE\":{\"name\":\"Parasiten-Algorithmus\",\"desc\":\"Friere benachbarte Feinde für 1 Zug nach der Bewegung ein.\"},\"PAWN_SWARM\":{\"name\":\"Bauernkette\",\"desc\":\"Wenn ein Schwarm-Bauer vernetzt ist, sind alle Bauern vernetzt.\"},\"PAWN_OMEGA_MIRROR\":{\"name\":\"Omega-Spiegel\",\"desc\":\"Spiegelt Bewegung eines vernetzten Nicht-Bauern-Verbündeten.\"},\"PAWN_SATELLITE\":{\"name\":\"Satelliten-Link\",\"desc\":\"Immer vernetzt; agiert als Ersatzkönig.\"},\"PAWN_CHARGER\":{\"name\":\"Stürmer\",\"desc\":\"Erlaubt dem Bauern, sich von jeder Position aus 2 Felder vorwärts zu bewegen (kein Schlagen, kein Springen).\"},\"KNIGHT_QUICK_ROUTING\":{\"name\":\"Schnell-Routing\",\"desc\":\"Kann sich auch bei Frost bewegen, aber nur auf vernetzte Felder.\"},\"KNIGHT_CROSS_JUMP\":{\"name\":\"Kreuzsprung\",\"desc\":\"Nach Sprung ohne Schlagen kann er sich 1 Feld orthogonal bewegen.\"},\"KNIGHT_HOT_SWAP\":{\"name\":\"Heißer Tausch\",\"desc\":\"Springe auf einen verbündeten Bauern und tausche die Positionen.\"},\"KNIGHT_SIDE_STEP\":{\"name\":\"Seitenschritt\",\"desc\":\"Erlaube dem Springer, sich 1 Feld horizontal oder vertikal auf ein leeres Feld zu bewegen.\"},\"KNIGHT_SCAVENGER\":{\"name\":\"Aasfresser\",\"desc\":\"Springe in feindliche Kontrollzone, um 1 Gold zu erhalten.\"},\"KNIGHT_TRAMPLE\":{\"name\":\"Niedertrampeln\",\"desc\":\"Sprungpfad hat eine 50%ige Chance, passierte Feinde für 1 Zug einzufrieren.\"},\"KNIGHT_GHOST\":{\"name\":\"Offline-Protokoll\",\"desc\":\"Erlaubt dem Springer, sich frei zu bewegen, auch wenn er vom Netzwerk getrennt ist (Eingefroren).\"},\"KNIGHT_HIT_AND_RUN\":{\"name\":\"Springender Bumerang\",\"desc\":\"Aktiv: Wirf eine Klinge, um einen Feind im L-förmigen Springer-Bereich zu töten (König ausgenommen). Die Klinge prallt ab und tötet einen zufälligen benachbarten (Kreuzrichtung) Feind. Abklingzeit: 3 Züge.\"},\"KNIGHT_MIRAGE\":{\"name\":\"Fata Morgana\",\"desc\":\"Bei Tod, wenn ein verbündeter Bauer in der Nähe ist, tausche mit ihm. Bauer stirbt stattdessen.\"},\"KNIGHT_GRAVITY_WELL\":{\"name\":\"Schwerkraftbrunnen\",\"desc\":\"Friere benachbarte Feinde für 1 Zug nach der Bewegung ein.\"},\"KNIGHT_TROJAN\":{\"name\":\"Trojaner\",\"desc\":\"Erzeuge 2 verbündete Bauern in der Nähe, wenn geschlagen.\"},\"KNIGHT_FULL_DUPLEX\":{\"name\":\"Plug and Play\",\"desc\":\"Bei Aufstellung endet der Zug nicht. Bewege eine beliebige befreundete Figur.\"},\"KNIGHT_CHAIN\":{\"name\":\"Kettenblitz\",\"desc\":\"Nach Schlagen endet der Zug nicht, springe erneut.\"},\"KNIGHT_RIFT\":{\"name\":\"Riss\",\"desc\":\"Trage eine benachbarte befreundete Figur zu einem leeren Feld nahe der Landung.\"},\"KNIGHT_MIDAS_TOUCH\":{\"name\":\"Midas-Berührung\",\"desc\":\"Sprung generiert Gold nach Distanz. Schlagen von D/T gewährt Ausrüstung.\"},\"KNIGHT_TROJAN_KERNEL\":{\"name\":\"Trojaner-Kern\",\"desc\":\"Erhalte einen Bauern in Reserve beim Schlagen einer Dame oder eines Turms.\"},\"KNIGHT_AURA\":{\"name\":\"Ritter-Aura\",\"desc\":\"Solange der Springer vernetzt ist, erhalten benachbarte verbündete Bauern orthogonale Bewegungsfähigkeit.\"},\"KNIGHT_SUPLEX\":{\"name\":\"Suplex\",\"desc\":\"Aktiv: Greife einen benachbarten Feind und schleudere ihn auf das symmetrische Feld hinter dir. Ist das Zielfeld besetzt, werden beide Figuren zerstört.\"},\"BISHOP_REFRACTION\":{\"name\":\"Refraktion\",\"desc\":\"Triff Kante, reflektiere 90 Grad und gleite 1 Feld.\"},\"BISHOP_MIRROR\":{\"name\":\"Spiegel\",\"desc\":\"Tausche Positionen mit einem anderen verbündeten Läufer auf derselben Diagonale.\"},\"BISHOP_PHASE_SHIFT\":{\"name\":\"Phasensprung\",\"desc\":\"Bewege dich 1 Feld horizontal oder vertikal wie ein Turm (kein Schlagen).\"},\"BISHOP_AFTERSHOCK\":{\"name\":\"Nachbeben\",\"desc\":\"Nach Schlagen werden benachbarte Felder für 2 Züge zu Nachbebenzonen, die der Gegner nicht zur Aufstellung nutzen kann.\"},\"BISHOP_PIERCE\":{\"name\":\"Durchbohren\",\"desc\":\"Kann genau eine befreundete Figur zur Bewegung oder zum Angriff durchdringen.\"},\"BISHOP_HOLY_LAND\":{\"name\":\"Heiliges Land\",\"desc\":\"Diagonale Felder gelten als kontrollierte Zonen (ignoriert Blockaden). Verbündete, die dort platziert werden, erhalten 1 Zug lang temporäres Netzwerk (immun gegen Einfrieren).\"},\"BISHOP_MIRROR_RESONANCE\":{\"name\":\"Spiegelresonanz\",\"desc\":\"Befindet sich ein verbündeter Läufer in diagonaler Sichtlinie (ungestört), gilt diese Figur unabhängig vom Netzwerkstatus des anderen stets als vernetzt und kann wie eine normal vernetzte Figur Netzwerkverbindungen nach außen bereitstellen.\"},\"BISHOP_RECALL\":{\"name\":\"Rückruf\",\"desc\":\"Aktiv: Ziehe diese Figur in die Reserve zurück.\"},\"BISHOP_CONDUIT\":{\"name\":\"Leitung\",\"desc\":\"Wenn verbunden, sind alle Verbündeten auf der Diagonale verbunden, selbst durch blockierende Figuren.\"},\"BISHOP_SILENCE\":{\"name\":\"Stille\",\"desc\":\"Nach Bewegung versiegelt er Fähigkeiten aller Feinde auf der Diagonale.\"},\"BISHOP_OPTICAL_BLIND_ZONE\":{\"name\":\"Optische Blindzone\",\"desc\":\"Immun gegen lineares Schlagen (Türme/Damen).\"},\"BISHOP_RESURRECTION\":{\"name\":\"Wiederbelebung\",\"desc\":\"Bringe beim Schlagen einen zufälligen gefallenen Verbündeten in die Reserve zurück.\"},\"BISHOP_AURORA\":{\"name\":\"Aurora\",\"desc\":\"Aktiv: Zerstöre einen Feind auf der Diagonale, ohne dich zu bewegen.\"},\"BISHOP_ABSOLUTE_BARRIER\":{\"name\":\"Absolute Barriere\",\"desc\":\"Feindliche Einheiten können nicht auf den kontrollierten Feldern dieses Läufers bleiben, außer zum Schlagen.\"},\"ROOK_VAULT\":{\"name\":\"Tresor-Sprung\",\"desc\":\"Erlaubt das Überspringen des ersten Hindernisses in einem Pfad.\"},\"ROOK_RAILWAY\":{\"name\":\"Eisenbahn\",\"desc\":\"Hinterlässt eine Spur, die verbündeten Bauern +1 Bewegung gewährt.\"},\"ROOK_PRESS\":{\"name\":\"Druck\",\"desc\":\"Feindliche Bauern auf derselben Linie werden unterdrückt und können nicht ziehen.\"},\"ROOK_AEGIS\":{\"name\":\"Aegis\",\"desc\":\"Wenn neben dem König, gewährt er dem König Immunität gegen Fernangriffe.\"},\"ROOK_BASTION\":{\"name\":\"Bastion\",\"desc\":\"Aktiv: Bastion-Modus umschalten. Kann nicht ziehen, schützt aber benachbarte Verbündete.\"},\"ROOK_HEAVY_ARMOR\":{\"name\":\"Schwere Panzerung\",\"desc\":\"Kann nicht von feindlichen Bauern oder Springern geschlagen werden.\"},\"ROOK_SWEEPER\":{\"name\":\"Feger\",\"desc\":\"Friert benachbarte Feinde für 1 Zug beim Vorbeiziehen ein.\"},\"ROOK_MAGNET\":{\"name\":\"Magnet\",\"desc\":\"Aktiv: Ziehe eine verbündete Figur in Linie auf ein benachbartes Feld.\"},\"ROOK_CARRIER\":{\"name\":\"Träger\",\"desc\":\"Kann abgeflachte Figuren auf demselben Feld beim Ziehen tragen.\"},\"ROOK_CATAPULT\":{\"name\":\"Katapult\",\"desc\":\"Aktiv: Schieße einen benachbarten verbündeten Bauern auf das am weitesten entfernte leere Feld in Linie.\"},\"ROOK_TRACTOR_BEAM\":{\"name\":\"Traktorstrahl\",\"desc\":\"Aktiv: Ziehe die erste Figur jenseits von 3 Feldern in Linie um 1 Feld näher (Stabilisator immun).\"},\"ROOK_SHOCKWAVE\":{\"name\":\"Schockwelle\",\"desc\":\"Aktiv: Stoße die erste Figur innerhalb von 3 Feldern in Linie um 1 Feld weg. Kollision tötet beide; flache Verbündete werden gestapelt (Stabilisator immun).\"},\"ROOK_FORBIDDEN_ZONE\":{\"name\":\"Verbotene Zone\",\"desc\":\"Feindliche Figuren auf der Reihe/Spalte des Turms werden in der Bewegung auf 1 reduziert.\"},\"ROOK_ION_CANNON\":{\"name\":\"Ionenkanone\",\"desc\":\"Aktiv: Zerstöre alle Einheiten (außer dem König) in einer geraden Linie (Abklingzeit: 5).\"},\"ROOK_IRON_CURTAIN\":{\"name\":\"Eiserner Vorhang\",\"desc\":\"Aktiv: Sperrt die gesamte Reihe des Turms für 2 Züge; feindliche Türme/Läufer/Damen/Bauern können diese Reihe weder betreten noch durchqueren (Springer und König unbeeinflusst). Abklingzeit: 3.\"},\"ROOK_COVER\":{\"name\":\"Deckung\",\"desc\":\"Solange verbunden, erhalten benachbarte verbündete Bauern zu Beginn des nächsten Zuges einen Schild (Abklingzeit nach Bruch).\"},\"ROOK_CONCUSSION\":{\"name\":\"Erschütterung\",\"desc\":\"Nach einer Bewegung von mehr als 3 Feldern werden benachbarte feindliche Bauern für 1 Zug eingefroren.\"},\"ROOK_SUPPLY_STATION\":{\"name\":\"Versorgungsstation\",\"desc\":\"Der Bewegungspfad wird zu Versorgungsfeldern (2 Runden): Verbündete, die hier eingesetzt werden, erhalten 5 Gold zurück (Limit 30G pro Level). Kann bestehende Spezialfelder nicht überschreiben.\"},\"QUEEN_COMMAND\":{\"name\":\"Befehl\",\"desc\":\"Benachbarte Verbündete erhalten omnidirektionale 1-Feld-Bewegung. Wenn keine Verbündeten nah, erhalte 1 Gold.\"},\"QUEEN_AURA\":{\"name\":\"Aura\",\"desc\":\"Feindliche Türme und Läufer innerhalb von 2 Feldern sind auf 2 Bewegung begrenzt.\"},\"QUEEN_PROVISION\":{\"name\":\"Versorgung\",\"desc\":\"Generiert 2 Gold pro Zug, wenn verbunden.\"},\"QUEEN_GRACE\":{\"name\":\"Gnade\",\"desc\":\"Nach einem Kill erhalte einen extra Zug, wenn du in feindlicher Kontrollzone landest.\"},\"QUEEN_DOMINATE\":{\"name\":\"Dominieren\",\"desc\":\"Benachbarte Feinde werden zum Schweigen gebracht und verlieren Nicht-Basis-Fähigkeiten.\"},\"QUEEN_DECOY\":{\"name\":\"Lockvogel\",\"desc\":\"Bei Tod verbrauche einen Bauern aus der Reserve, um zu überleben und zu teleportieren.\"},\"QUEEN_LINKAGE\":{\"name\":\"Verknüpfung\",\"desc\":\"Bei Aufstellung werden automatisch bis zu zwei Bauern in der Nähe aufgestellt.\"},\"QUEEN_BRIBE\":{\"name\":\"Bestechen\",\"desc\":\"50% Chance, geschlagene feindliche Bauern in deine Reserve zu konvertieren.\"},\"QUEEN_MULTICAST\":{\"name\":\"Multicast\",\"desc\":\"Wenn Bewegung ohne Schlagen bei Verbindung erfolgt, kann sie erneut ziehen.\"},\"QUEEN_INSIGHT\":{\"name\":\"Einsicht\",\"desc\":\"Enthüllt alle feindlichen unsichtbaren Einheiten, solange sie auf dem Brett ist.\"},\"QUEEN_RECALL\":{\"name\":\"Rückruf\",\"desc\":\"Aktiv: Teleportiere zurück auf ein leeres Feld neben dem König (Abklingzeit: 3).\"},\"QUEEN_TIME_WARP\":{\"name\":\"Zeitschleife\",\"desc\":\"Alle 5 Züge erhalte eine freie Rückgängig-Ladung.\"},\"QUEEN_NEMESIS\":{\"name\":\"Nemesis\",\"desc\":\"Wenn der König im Schach steht, erhält die Dame unendliche durchdringende Bewegung.\"},\"QUEEN_ROOK_AUTHORITY\":{\"name\":\"Turm-Autorität\",\"desc\":\"Wenn die Dame vernetzt ist, wird der nächste verbündete Turm zwangsvernetzt.\"},\"QUEEN_BISHOP_AUTHORITY\":{\"name\":\"Läufer-Autorität\",\"desc\":\"Wenn die Dame vernetzt ist, wird der nächste verbündete Läufer zwangsvernetzt.\"},\"KING_CHARISMA\":{\"name\":\"Charisma\",\"desc\":\"Bauern innerhalb von 2 Feldern erhalten damenähnliche Bewegung bis zu 2 Feldern.\"},\"KING_RADIATION\":{\"name\":\"Strahlung\",\"desc\":\"Initiale Netzwerkreichweite auf 2 Felder erhöht.\"},\"KING_STEADY\":{\"name\":\"Beständig\",\"desc\":\"Immun gegen erzwungene Verdrängungsfähigkeiten.\"},\"KING_REWARD\":{\"name\":\"Belohnung\",\"desc\":\"Verbündete, die innerhalb von 2 Feldern schlagen, generieren 5 extra Gold.\"},\"KING_FORTIFY\":{\"name\":\"Befestigen\",\"desc\":\"Wenn neben einem befreundeten Turm, immun gegen Bauern und Springer.\"},\"KING_BACKUP\":{\"name\":\"Notstrom\",\"desc\":\"Wenn keine benachbarten Einheiten, kann er sich mit den nächsten verbündeten Figuren innerhalb von 3 Feldern verbinden.\"},\"KING_OVERSEER\":{\"name\":\"Aufseher\",\"desc\":\"Wenn 5+ verbundene eigene Figuren (ohne König) vernetzt sind, erhalte 2 Gold pro Zug (Max. 40 Gold).\"},\"KING_ROYAL_GUARD\":{\"name\":\"Königliche Wache\",\"desc\":\"Aktiv: Gib 10 Gold aus, um einen Bauern in der Nähe zu erzeugen (temporär für diese Stufe).\"},\"KING_TAXATION\":{\"name\":\"Besteuerung\",\"desc\":\"Wann immer eine befreundete Figur geschlagen wird, generiere 15 Gold.\"},\"KING_SWAP\":{\"name\":\"Tausch\",\"desc\":\"Aktiv: Tausche Positionen mit einer befreundeten Figur innerhalb von 2 Feldern.\"},\"KING_REFLECTION\":{\"name\":\"Reflektionsschild\",\"desc\":\"Feinde, die einen Verbündeten innerhalb von 1 Feld schlagen, werden sofort zerstört.\"},\"KING_COMMANDER\":{\"name\":\"Kommandant\",\"desc\":\"Springer im Umkreis von 2 Feldern um den König frieren bei Landung 1 benachbarten Feind ein.\"},\"KING_GRAND_CASTLE\":{\"name\":\"Große Rochade\",\"desc\":\"Aktiv: Tausche Position mit einem beliebigen befreundeten Turm irgendwo auf dem Brett.\"},\"KING_SOUL_LINK\":{\"name\":\"Seelenlink\",\"desc\":\"Bei Tod verwandelt sich ein existierender Bauer der Stufe 1 in den neuen König.\"},\"KING_HOLY_DOMAIN\":{\"name\":\"Heilige Domäne\",\"desc\":\"Verbündete innerhalb von 2 Feldern sind immun gegen alle negativen Statuseffekte.\"},\"KING_STASIS\":{\"name\":\"Stase\",\"desc\":\"Aktiv: Versteinere alle Nicht-Königs-Einheiten innerhalb von 3 Feldern auf unbestimmte Zeit (Einmal pro Kampf).\"},\"KING_ROYAL_PATH\":{\"name\":\"Königlicher Pfad\",\"desc\":\"Wenn Reihe und Spalte frei von Feinden sind, kann der König 2 Felder ziehen (kein Schlagen).\"},\"KING_LOGISTICS\":{\"name\":\"Logistik\",\"desc\":\"Das Aufstellen einer beliebigen Figur neben dem König erstattet sofort 3 Gold zurück.\"},\"KING_DECOY_DOUBLE\":{\"name\":\"Schattendoppel\",\"desc\":\"Hinterlässt nach der Bewegung ein Täusch-Terminal.\"},\"KING_MARTYRDOM\":{\"name\":\"Martyrium\",\"desc\":\"Bei Tod, wenn Reserve leer und Verbündete existieren, absorbiere Verbündete, explodiere 5x5 und belebe wieder.\"},\"KING_ROYAL_DECORATION\":{\"name\":\"Königliche Auszeichnung\",\"desc\":\"Gewährt zu Beginn des Zuges einem benachbarten verbündeten Bauern ohne Fähigkeiten eine zufällige gewöhnliche Fähigkeit.\"},\"GENERIC_ALGORITHM_SWAP\":{\"name\":\"Algorithmus-Tausch\",\"desc\":\"Aktiv: Tausche Positionen mit einem beliebigen Nicht-König-Verbündeten innerhalb von 1 Feld.\"},\"GENERIC_BACKUP_BUFFER\":{\"name\":\"Backup-Puffer\",\"desc\":\"Bei Trennung wird das Einfrieren um 1 Zug verzögert.\"},\"GENERIC_RAPID_DEPLOY\":{\"name\":\"Schnellaufstellung\",\"desc\":\"10% Chance, bei Aufstellung keinen Zug zu verbrauchen.\"},\"GENERIC_COATING\":{\"name\":\"Beschichtung\",\"desc\":\"Immun gegen Umwelt-Debuffs wie Schwerkraftfallen oder Infektion.\"},\"GENERIC_SHARPEN\":{\"name\":\"Schärfen\",\"desc\":\"Erhalte 3 extra Gold bei einem erfolgreichen Schlagen.\"},\"GENERIC_CHAFF\":{\"name\":\"Düppel\",\"desc\":\"Bei Angriff 50% Chance auszuweichen und auf ein benachbartes leeres Feld zu teleportieren.\"},\"GENERIC_RECALL\":{\"name\":\"Rückruf\",\"desc\":\"Aktiv: Ziehe diese Figur zurück in die Reserve.\"},\"GENERIC_LOGIC_LOCK\":{\"name\":\"Logiksperre\",\"desc\":\"Nicht-König-Feinde in Angriffsreichweite werden zum Schweigen gebracht (können keine aktiven Fähigkeiten nutzen).\"},\"GENERIC_MIRRORING\":{\"name\":\"Spiegelung\",\"desc\":\"Kopiere die Basisbewegung eines benachbarten Verbündeten.\"},\"GENERIC_PARASITE\":{\"name\":\"Parasit\",\"desc\":\"Bei Tod an den Angreifer anhängen, was eine 50%ige Chance verursacht, ihn in jedem Zug einzufrieren.\"},\"GENERIC_HIVE_KERNEL\":{\"name\":\"Sync-Protokoll\",\"desc\":\"Wenn diese Figur verbunden is, sind alle Figuren desselben Typs verbunden.\"},\"GENERIC_FIREWALL\":{\"name\":\"Firewall\",\"desc\":\"Passiv: Begrenzt maximale Bewegungsdistanz auf 3 Felder. Immun gegen Fernschlagen, erzwungene Verdrängung, Farbwechsel oder Schweigen. Könige können nicht ausrüsten.\"},\"GENERIC_INTIMIDATION\":{\"name\":\"Einschüchterung\",\"desc\":\"Passiv: Feindliche Bauern können diese Figur nicht schlagen.\"},\"GENERIC_LOGIC_BOMB\":{\"name\":\"Logikbombe\",\"desc\":\"Bei Tod entzieht sie dem Angreifer positive Buffs und bringt ihn dauerhaft zum Schweigen.\"},\"GENERIC_DATA_MINING\":{\"name\":\"Data Mining\",\"desc\":\"Erhalte 10 Gold beim Schlagen einer feindlichen Figur mit Fähigkeiten.\"},\"GENERIC_RECURSIVE_STRIKE\":{\"name\":\"Rekursiver Schlag\",\"desc\":\"Nach dem Schlagen erbt sie die Bewegungslogik des Opfers für den nächsten Zug.\"},\"GENERIC_SCRAP_RECYCLE\":{\"name\":\"Schrott-Recycling\",\"desc\":\"Erhalte 1 Gold bei Bewegung ohne Schlagen (Max. 10G pro Stufe).\"},\"GENERIC_ABSOLUTE_REQUISITION\":{\"name\":\"Absolute Requisition\",\"desc\":\"Aktiv: Gib 10 Gold aus, um eine nicht vernetzte feindliche Einheit (außer König oder Dame) in Reichweite zu zerstören und ihren Wert zurückzugewinnen.\"},\"AURA_REWARD\":{\"name\":\"Belohnungs-Aura\",\"desc\":\"Erhalte extra 5 Gold beim Schlagen.\"},\"AURA_SUPPRESSED\":{\"name\":\"Unterdrückungs-Aura\",\"desc\":\"Bewegungsreichweite ist begrenzt.\"},\"BACKUP_BUFFER_ACTIVE\":{\"name\":\"Ersatzbatterie aktiv\",\"desc\":\"Trennung vorübergehend ignorieren.\"},\"BISHOP_CONVERSION\":{\"name\":\"Taufe\",\"desc\":\"Aktiv: Konvertiere dauerhaft einen benachbarten feindlichen Bauern. Läufer wird zerstört.\"},\"BISHOP_HOLY_LIGHT\":{\"name\":\"Heiliges Licht\",\"desc\":\"Beseitige negative Status von benachbarten Verbündeten zu Zugbeginn.\"},\"BISHOP_PENETRATION\":{\"name\":\"Durchdringung\",\"desc\":\"Kann durch eine feindliche Figur gleiten (kann nicht durch Verbündete gleiten oder zwei schlagen).\"},\"BISHOP_SACRED_ZONE\":{\"name\":\"Heilige Zone\",\"desc\":\"Feinde auf derselben Diagonale werden für 1 Zug eingefroren.\"},\"BISHOP_ZEALOT\":{\"name\":\"Eiferer\",\"desc\":\"Wenn geschlagen wurde, erhalte unendliche Gleitbewegung (wie Dame) im nächsten Zug.\"},\"BISHOP_SHADOW_SWAP\":{\"name\":\"Schattentausch\",\"desc\":\"Aktiv: Tausche Positionen mit einem Feind auf derselben Diagonalen (Sichtlinie erforderlich). Das Ziel wird 1 Zug lang eingefroren.\"},\"CHARISMA_BUFF\":{\"name\":\"Charisma-Buff\",\"desc\":\"Erhalte 2-Felder omnidirektionale Gleitbewegung.\"},\"COMMANDER_AURA\":{\"name\":\"Kommandanten-Aura\",\"desc\":\"Friere 1 benachbarten Feind bei Landung ein.\"},\"COMMAND_AURA\":{\"name\":\"Befehls-Aura\",\"desc\":\"Erhalte 1-Feld omnidirektionale Bewegung.\"},\"GODHOOD_LINK\":{\"name\":\"Göttlicher Link\",\"desc\":\"Durch absolute Göttlichkeit zur Verbindung gezwungen.\"},\"HOLY_DOMAIN_AURA\":{\"name\":\"Heilige-Domäne-Aura\",\"desc\":\"Immun gegen alle negativen Statuseffekte.\"},\"INFECTED\":{\"name\":\"Infiziert\",\"desc\":\"Breitet sich in jedem Zug aus. Verbraucht Gold, wenn vernetzt.\"},\"IRON_CURTAIN\":{\"name\":\"Eiserner Vorhang\",\"desc\":\"Eiserner Vorhang: Nur sein Besitzer darf das Feld betreten; feindliche Figuren werden blockiert.\"},\"KNIGHT_CHARGE\":{\"name\":\"Ansturm\",\"desc\":\"Friere feindliche Bauern benachbart zum Landeplatz für 1 Zug bei Sprung-Kill ein.\"},\"KNIGHT_PHANTOM_STRIKE\":{\"name\":\"Phantom-Schlag\",\"desc\":\"Kann \\\"Fernschlagen\\\" unter Ignorierung von Hindernissen ausführen, muss aber zum Ursprung zurückkehren.\"},\"KNIGHT_SABOTAGE\":{\"name\":\"Sabotage\",\"desc\":\"Zerstöre feindliche Fallen und Feldeffekte benachbart zum Landeplatz.\"},\"KNIGHT_VALIANT\":{\"name\":\"Tapfer\",\"desc\":\"Erhalte einen Schild, wenn die Landung ohne Verbündete in der Nähe nach Schlagen erfolgt.\"},\"PARASITIZED\":{\"name\":\"Parasitiert\",\"desc\":\"50% Chance auf Trennung/Einfrieren in jedem Zug.\"},\"PAWN_TRAITOR\":{\"name\":\"Verräter\",\"desc\":\"Bei Tod 50% Chance, Angreifer (Nicht-König) zu konvertieren und für 1 Zug Verraten anzuwenden.\"},\"PAWN_VANGUARD\":{\"name\":\"Vorhut\",\"desc\":\"Immer vernetzt, solange in der feindlichen Hälfte.\"},\"RAILWAY_BUFF\":{\"name\":\"Eisenbahn-Boost\",\"desc\":\"Bauern auf Eisenbahn erhalten +1 Bewegung.\"},\"REFLECTION_AURA\":{\"name\":\"Reflektions-Aura\",\"desc\":\"Schädige Angreifer beim Schlagen.\"},\"SQUARE_BASTION_FIELD\":{\"name\":\"Bastion-Feld\",\"desc\":\"Bietet Fernangriff-Immunität für Verbündete auf diesem Feld.\"},\"SQUARE_RAILWAY\":{\"name\":\"Eisenbahn (Feld)\",\"desc\":\"Schienenfeld: Ein Bauer, der hier steht, darf zwei Felder gerade nach vorne ziehen (die Ausrichtung wird nicht verwendet).\"},\"TAXATION_AURA\":{\"name\":\"Besteuerungs-Aura\",\"desc\":\"Generiere 15 Gold bei Tod.\"},\"ZEALOT_BUFF\":{\"name\":\"Eiferer-Buff\",\"desc\":\"Erhalte Gleitbewegungs-Fähigkeit.\"},\"BETRAYED\":{\"name\":\"Verraten\",\"desc\":\"Vorübergehend konvertiert. Kehrt nach 1 Zug zur ursprünglichen Farbe zurück.\"},\"SMOKE\":{\"name\":\"Rauch\",\"desc\":\"Bietet Immunität gegen lineare Fernangriffe.\"},\"SQ_AFTERIMAGE\":{\"name\":\"Nachbild\",\"desc\":\"Nachbild: Die Blutkleid-Königin hinterlässt nach einem Schlag 3 Züge lang ein Nachbild; sie selbst kann aus beliebiger Entfernung dorthin ziehen.\"},\"FROZEN_TRAP\":{\"name\":\"Frostfalle\",\"desc\":\"Friert jede Einheit ein, die sie betritt.\"},\"VOID_FISSURE_SQUARE\":{\"name\":\"Leerenriss\",\"desc\":\"Das Gefüge des Raums ist zerrissen. Dieses Feld ist dauerhaft unpassierbar.\"},\"SUPPLY_DEPOT_SQUARE\":{\"name\":\"Versorgungsdepot\",\"desc\":\"Versorgungsfeld: Ist dein Versorgungsturm im Spiel, erstattet eine Aufstellung hier 5 Gold, maximal 30 Gold pro Lauf.\"},\"VOID_ANCHOR\":{\"name\":\"Leerenanker\",\"desc\":\"Ankerfeld: Das Feld ist vollständig gesperrt – keine Figur kann hier halten, keine Aufstellung möglich.\"},\"BARRICADE\":{\"name\":\"Barrikade\",\"desc\":\"Ein physisches Hindernis, das alle Bewegungen blockiert.\"},\"JAMMING_TOWER\":{\"name\":\"Signalturm\",\"desc\":\"Signalturm: Die Figur auf diesem Feld gilt als Netzwerkquelle und hält die Verbindung auch bei globaler Störung aufrecht.\"},\"HOLY_LAND\":{\"name\":\"Heiliges Land\",\"desc\":\"Geheiligter Boden, der die direkte Aufstellung von Einheiten ungeachtet der typischen Reichweite ermöglicht.\"},\"LOUIS_ABSOLUTE_CORONA\":{\"name\":\"Absolute Corona\",\"desc\":\"Der König strahlt ein massives 5x5-Netzwerk aus, aber sein Signal ist zu rein, um von anderen weitergeleitet zu werden. Verbündete müssen nah an der Sonne bleiben.\"},\"QUEEN_MOVE\":{\"name\":\"Königliche Macht\",\"desc\":\"Der König hat seine physischen Lasten abgeworfen und die unerreichte Mobilität einer Dame gewonnen.\"},\"RICHARD_FORWARD_ONLY\":{\"name\":\"Einweg-Kreuzzug\",\"desc\":\"Der Glaube blickt nur nach vorn. Das Netzwerksignal des Königs breitet sich nur in Richtung der feindlichen Grundlinie aus.\"},\"BOSS_PERMISSION_DENIED\":{\"name\":\"Zugriff verweigert\",\"desc\":\"BOSS deaktiviert alle 3 Züge zufällig einen Figurentyp.\"},\"BOSS_PACIFISM\":{\"name\":\"Pazifismus-Protokoll\",\"desc\":\"Schlagen-Aktion ist für beide Seiten für die ersten 5 Züge deaktiviert.\"},\"INVULNERABLE\":{\"name\":\"Unverwundbar\",\"desc\":\"Absolute Immunität gegen allen Schaden.\"},\"BOSS_ECHO_CHAMBER\":{\"name\":\"Echokammer\",\"desc\":\"Verbirgt Figurenattribute, Fähigkeiten und Ausrüstung.\"},\"BOSS_BOARD_ROTATION\":{\"name\":\"Brett-Rotation\",\"desc\":\"Alle 4 Züge werden alle Figuren um 90 Grad im Uhrzeigersinn rotiert.\"},\"BOSS_QUANTUM_MIRAGE\":{\"name\":\"Quanten-Fata-Morgana\",\"desc\":\"Tauscht mit zufälligem Feind, um tödliche Schläge zu überleben.\"},\"BOSS_WARP_STORM\":{\"name\":\"Warp-Sturm\",\"desc\":\"Erzeugt zufällig Portale, die Einheiten teleportieren.\"},\"BOSS_MUTINY\":{\"name\":\"Meuterei-Override\",\"desc\":\"Konvertiert alle 6 Züge zufällig eine verbündete Figur.\"},\"BOSS_NECROMANCER\":{\"name\":\"Nekromant\",\"desc\":\"Belebt gefallene Spielerfiguren als feindliche Zombies wieder.\"},\"ZOMBIE_DECAY\":{\"name\":\"Zombie-Verfall\",\"desc\":\"Zerfällt automatisch nach einer Aktion.\"},\"BOSS_MIRROR_MATCH\":{\"name\":\"Spiegelkampf\",\"desc\":\"BOSS beschwört eine Spiegelkopie deiner Startaufstellung.\"},\"BOSS_HIVE_MOTHER\":{\"name\":\"Schwarmmutter\",\"desc\":\"Legt Eier, die in mächtige Einheiten schlüpfen, wenn sie nicht zerstört werden.\"},\"EGG_HATCH\":{\"name\":\"Alienei\",\"desc\":\"Schlüpft bald...\"},\"BOSS_ENRAGE\":{\"name\":\"Wut-Timer\",\"desc\":\"Agiert alle 4 Züge zweimal.\"},\"BOSS_MASS_ERASURE\":{\"name\":\"Orbitales Bombardement\",\"desc\":\"Schlägt alle 5 Züge in einem zufälligen 3x3-Bereich ein; zwei Züge vor dem Einschlag leuchtet das Ziel als Gefahrenzone.\"},\"BOSS_QUANTUM_SWAP\":{\"name\":\"Quantenverschränkung\",\"desc\":\"Vertauscht alle 5 Züge zwei zufällige weiße Figuren.\"},\"BOSS_SENTINEL\":{\"name\":\"Wachposten\",\"desc\":\"Unverwundbare Einheit, die im Uhrzeigersinn patrouilliert und alles zerstört, was sie trifft.\"},\"SQUARE_LASER_GRID\":{\"name\":\"Lasergitter\",\"desc\":\"Lasergitter: In jeder ungeraden Runde (zu Rundenbeginn) unter Strom; zerstört die Figur darauf. Könige sind immun.\"},\"ANTI_PAWN_MINE\":{\"name\":\"Anti-Bauern-Mine\",\"desc\":\"Anti-Bauern-Mine: Nur Bauern lösen sie aus; zerstört alle Figuren im umliegenden 3x3 (Könige immun) und verbraucht die Mine. Andere Figuren sind unberührt.\"},\"TIME_ANOMALY\":{\"name\":\"Zeitanomalie\",\"desc\":\"Verbannt Einheiten beim Betreten für 3 Züge.\"},\"ICE_SLICK\":{\"name\":\"Glatteis\",\"desc\":\"Zwingt Einheiten zum Gleiten, bis sie auf ein Hindernis oder eine Kante treffen.\"},\"WORMHOLE_A\":{\"name\":\"Wurmloch A\",\"desc\":\"Wurmloch A: Betreten teleportiert zur Partnerstation B; ist B besetzt, passiert nichts.\"},\"WORMHOLE_B\":{\"name\":\"Wurmloch B\",\"desc\":\"Wurmloch B: Betreten teleportiert zur Partnerstation A; ist A besetzt, passiert nichts.\"},\"MUD_SWAMP\":{\"name\":\"Matsch/Sumpf\",\"desc\":\"Sumpf: Gleitfiguren (Dame/Turm/Läufer) dürfen hinein, aber nicht weiterziehen; Springer und Bauern sind unberührt.\"},\"CONVEYOR_BELT\":{\"name\":\"Förderband\",\"desc\":\"Förderband: Zu Beginn deines Zuges wird die Figur 1 Feld in Pfeilrichtung geschoben; über den Rand geschoben stirbt sie, in eine Figur geschoben werden beide zerstört.\"},\"OVERCLOCK_NODE\":{\"name\":\"Überclock-Knoten\",\"desc\":\"Overclock-Knoten: Zu Zugbeginn werden alle Abklingzeiten der Figur hier zurückgesetzt.\"},\"DATA_VAULT\":{\"name\":\"Datentresor\",\"desc\":\"Datentresor: Eine verbündete Figur hier erhält zu Beginn jedes Zuges 3 Gold.\"},\"SIGNAL_RELAY\":{\"name\":\"Signalrelais\",\"desc\":\"Signalverstärker: Die Figur auf diesem Feld gilt als Signalquelle und hält auch bei globalem Netzausfall eine lokale Verbindung.\"},\"FARADAY_CAGE\":{\"name\":\"Faradayscher Käfig\",\"desc\":\"Faraday-Käfig: Eine Figur, die es betritt, wird 2 Züge eingefroren; wer zu Zugbeginn noch hier steht, wird erneut eingefroren.\"},\"PAWN_UNSTABLE_CORE\":{\"name\":\"Instabiler Kern\",\"desc\":\"Löst bei Tod eine gewaltige 5x5-Explosion aus. Schlagen hat eine 50%-Chance auf Selbstzündung, was eine Kettenreaktion auslöst. Zerstört alles, Freund oder Feind.\"},\"ROOK_VOID_FISSURE\":{\"name\":\"Leerenriss-Kanone\",\"desc\":\"Aktiv: Zerstört das erste Ziel in einer geraden Linie und zerstört dieses Feld dauerhaft (3-mal pro Spiel, Abklingzeit: 5 Züge).\"},\"ROOK_EJECTION\":{\"name\":\"Ausstoß\",\"desc\":\"Aktiv: Schleudert einen benachbarten verbündeten Bauern in Kreuzrichtung auf das am weitesten entfernte leere Feld.\"},\"ROOK_SUPPLY_DEPOT\":{\"name\":\"Versorgungsstation\",\"desc\":\"Der Bewegungspfad wird zu Versorgungsfeldern (2 Runden): Verbündete, die hier eingesetzt werden, erhalten 5 Gold zurück (Limit 30G pro Spiel). Kann bestehende Spezialfelder nicht überschreiben.\"},\"QUEEN_CORONATION\":{\"name\":\"Königliche Krönung\",\"desc\":\"Gewährt zu Beginn des Zuges einem benachbarten verbündeten Bauern ohne Fähigkeiten eine zufällige gewöhnliche Fähigkeit.\"},\"QUEEN_GRAVITY_WELL\":{\"name\":\"Schwerkraftfeld\",\"desc\":\"Wenn nicht mehr als 2 benachbarte Gegner vorhanden sind, werden sie von der Schwerkraft blockiert, wodurch ihre Bewegungsreichweite auf 1 Feld begrenzt wird.\"},\"QUEEN_REQUISITION\":{\"name\":\"Absolute Requisition\",\"desc\":\"Aktiv: Gib 10 Gold aus, um eine nicht vernetzte feindliche Einheit (außer König oder Dame) in Reichweite zu zerstören und ihren Wert zurückzugewinnen.\"},\"EQ_HOOF_ARMOR\":{\"name\":\"Hufpanzerung\",\"desc\":\"Befindet sich ein feindlicher Bauer auf dem Landeplatz eines Sprungs, schlage ihn direkt und erhalte in diesem Zug einen zusätzlichen Zug.\"}}"),
	battleLogs: {
		LOG_CHECKMATE_PURGED: "SCHACHMATT: NETZWERK PARALYSIERT!",
		LOG_SWALLOW_GOODBYE: "\"Auf Wiedersehen, Schwalbe.\"",
		LOG_DAIZONG_MOVE: "\"Ich habe mich entschieden, vorwärts!\"",
		LOG_DAIZONG_GUARD: "\"Beschützt den Kaiser unverzüglich!\"",
		LOG_DAIZONG_CAPTURED: "\"Der Kaiser wurde gefangen genommen!\"",
		LOG_LOUIS_CORONA_DIMMED: "\"Göttliches Recht erschüttert: Die Corona verblasst!\"",
		LOG_QUANTUM_SWAP: "Quantentausch",
		LOG_PERMISSION_DENIED: "Rechte manipuliert: Deaktiviere {banned}",
		LOG_BOARD_ROTATION: "Brett-Rotation!",
		LOG_QUANTUM_MIRAGE: "Quanten-Fata-Morgana-Ersatz!",
		LOG_TELEPORT: "Teleport",
		LOG_WARP_STORM: "Turbulenter Teleport",
		LOG_MUTINY: "Meuterei-Protokoll",
		LOG_NECRO_REVIVE: "Nekrotische Wiedergeburt",
		LOG_EGG_HATCHED: "Ausgeschlüpft!",
		LOG_EGG_HATCHING: "Brütet aus in {count}",
		LOG_ENRAGE_THRESHOLD: "Wut-Schwelle! Kontinuierliche Aktion",
		LOG_ENRAGE_DOUBLE: "Wut: Doppelte Aktion!",
		LOG_TIME_BANISHED: "Zeit verbannt",
		LOG_TIME_REBIRTH: "Zurückgekehrt",
		LOG_MUD_SWAMP: "Im Matsch gefangen",
		LOG_FALL_OFF: "Abgestürzt",
		LOG_CRASH: "Zusammenstoß!",
		LOG_CD_CLEARED: "Abklingzeit zurückgesetzt",
		LOG_GOLD_MINUS: "-{amount}G",
		LOG_GOLD_PLUS: "+{amount}G",
		LOG_RAILGUN_LOCK_50: "Orbitaler Lock detektiert: Lädt 50%",
		LOG_RAILGUN_LOCK_100: "Warnung: Orbitalkanone gelockt! Lädt 100% Evakuieren!",
		LOG_KING_RANSOM: "\"Riesiges Lösegeld gesammelt: Der König kehrt zurück!\"",
		LOG_CRUSADE_REWARD: "Kreuzzug +{amount}",
		LOG_UNYIELDING_RECALL: "Unbeugsam: Zurückgezogen",
		LOG_SWALLOW_RESURRECT: "\"Bleiernes Herz zerschmettert: Schwalbe wiederhergestellt!\"",
		LOG_ARTHUR_SHIELD: "\"Eid-Resonanz: Schild der Tafelrunde!\"",
		LOG_TROJAN_BREAK: "\"Trojanisches Pferd gebrochen: Trojaner-Krieger-Hinterhalt!\"",
		LOG_TROJAN_WAIT: "Trojaner lauert ({turns}T)",
		LOG_TROJAN_DEPLOY: "\"Unter dem Radar: Trojaner platziert!\"",
		LOG_SUPPLY_DEPOT: "+5G Versorgung",
		LOG_NO_SPACE: "Kein Platz im Umkreis",
		LOG_NO_FUNDS: "Nicht genügend Gold",
		LOG_GUARD_SPAWN: "Wache erschienen",
		LOG_TAXATION_REWARD: "Entschädigung +15",
		LOG_SWAP: "Tausch",
		LOG_CASTLING: "Rochade",
		LOG_SOUL_LINK: "Seelenlink: Nachfolge des Throns!",
		LOG_ALREADY_USED: "Bereits benutzt",
		LOG_STASIS_LOCK: "Zeitstase gesperrt!",
		LOG_LOGISTICS_REWARD: "Logistik +3",
		LOG_DECOY_TERMINAL: "Köder-Terminal",
		LOG_MARTYRDOM: "Letztes Opfer: Wiedergeburt!",
		LOG_GRACE: "Elegante Schritte",
		LOG_DECOY_DEATH: "Köder-Ersatz",
		LOG_BRIBE_SUCCESS: "Bestechung erfolgreich",
		LOG_MIRROR_MULTICAST: "Spiegel-Doppelaktion",
		LOG_TACTICAL_RECALL: "Taktischer Rückzug",
		LOG_NO_EMPTY_KING: "Kein Platz am König",
		LOG_TIME_WARP: "Zeitschleife: +1 Rückgängig",
		LOG_ROOK_LINK: "Göttlicher Link: Turm",
		LOG_BISHOP_LINK: "Göttlicher Link: Läufer",
		LOG_GRAVITY_WELL: "Schwerkraftbrunnen aktiv",
		LOG_CORONATION: "Gekrönt: {skill}",
		LOG_REQUISITION_SUCCESS: "Requisition erfolgreich",
		LOG_ENTER_BASTION: "Bastion betreten",
		LOG_EXIT_BASTION: "Bastion verlassen",
		LOG_MAGNET: "Magnet",
		LOG_EJECTION: "Ausgestoßen!",
		LOG_CATAPULT: "Katapultiert!",
		LOG_ION_CANNON: "Orbitalkanone",
		LOG_IRON_CURTAIN: "Eiserner Vorhang",
		LOG_VOID_FISSURE_REMAINING: "Leerenriss! {remaining} Anwendungen übrig",
		LOG_VOID_FISSURE_EMPTY: "Leerenriss! Munition erschöpft",
		LOG_TOW_HOOK_DRAG: "Geschleppt!",
		LOG_TOW_HOOK_KILL: "Abschlepp-Kill",
		LOG_TRACTOR_PULL: "Herangezogen",
		LOG_SHOCKWAVE_PUSH: "Geschoben",
		LOG_SHOCKWAVE_COLLIDE: "Kollision!",
		LOG_RECALLED: "Zurückgezogen",
		LOG_ZEALOT: "Eiferer!",
		LOG_RESURRECT: "Wiederbelebt: {type}",
		LOG_AURORA: "Aurora-Snipe",
		LOG_CROSS_JUMP: "Kreuz-Doppelschritt",
		LOG_PHANTOM_RETURN: "Phantom-Rückkehr",
		LOG_TACTICAL_SWAP: "Taktischer Tausch!",
		LOG_FULL_DUPLEX: "Plug and Play aktiv!",
		LOG_FULL_DUPLEX_AI: "KI Plug and Play!",
		LOG_CHAIN_JUMP: "Kettensprung!",
		LOG_CHAIN_JUMP_AI: "KI-Kettensprung!",
		LOG_MIRAGE_DEATH: "Phantom-Ersatz",
		LOG_RIFT_TELEPORT: "Riss-Teleport",
		LOG_VENGEANCE_STRIKE: "Vergeltungsschlag",
		LOG_ASSASSIN_EVOLVE: "Attentäter-Entwicklung!",
		LOG_PAWN_EVOLVE: "Bauern-Entwicklung!",
		LOG_CORE_OVERLOAD: "Kern überlastet!",
		LOG_UNDOS_PLUS: "+{amount} Rückgängig",
		LOG_SAVES_PLUS: "+{amount} Speicherung",
		LOG_ALGORITHM_SWAP: "Algorithmus-Tausch",
		LOG_BACKUP_BUFFER: "Ersatzbatterie",
		LOG_RAPID_DEPLOY: "Schnellaufstellung: Doppelaktion!",
		LOG_CHAFF_EVADE: "Ausgewichen!",
		LOG_RECALL_SUCCESS: "Rückzug erfolgreich",
		LOG_PARASITE_INTERFERENCE: "Parasiten-Störung",
		LOG_LOGIC_BOMB: "Logikbombe: Versiegelt!",
		LOG_DATA_MINING: "Data Mining +{amount}",
		LOG_TOWER_BUILT: "Signalturm gebaut",
		LOG_SPYWARE: "Daten gestohlen +5",
		LOG_TERMINAL_OFFLINE: "TERMINAL OFFLINE",
		LOG_CONVERSION: "Taufe",
		LOG_CLONE_FACTORY: "Klonfabrik",
		LOG_HATCH_EGG: "Schlüpfen",
		LOG_OVERLOAD: "Überlastung",
		LOG_DRAFT_ORDER: "Einberufung",
		LOG_MIDAS: "Midas-Berührung +30",
		LOG_SACRIFICE_SUCCESS: "Opfer erfolgreich",
		LOG_ANTENNA_ACTIVE: "Antenne aktiv!",
		LOG_PRISM_REFLECT: "Prismen-Reflexion!",
		LOG_PHOENIX_REBIRTH: "Phönix-Wiedergeburt",
		LOG_ROYAL_GUARD: "Opfer der Wache",
		LOG_ALLOY_BROKEN: "Legierung gebrochen",
		LOG_TACTICAL_OPS: "Taktische Ops: Extra-Zug",
		LOG_DIPLOMATIC_INTERCEPT: "Diplomatisches Abfangen",
		LOG_WHEEL_TRIGGER: "Schicksalsrad: {item}",
		LOG_THRONE_REWARD: "Throneinkommen +{amount}",
		LOG_HACKER_TERMINAL: "Remote-Hack",
		LOG_TRAMPLE: "Niedertrampeln",
		LOG_GHOST_RIDE: "Geister-Teleport",
		LOG_LEVEL_UP: "STUFENAUFSTIEG!",
		LOG_SIREN_CRASH: "Sirenengesang: Absturz!",
		LOG_SIREN_DRIFT: "Sirenengesang: Drift",
		LOG_ENERGY_DEPLETED: "Energie erschöpft",
		LOG_IMMUNE: "Immun",
		LOG_BLOCKED: "Blockiert",
		LOG_INVALID_TARGET: "Ungültiges Ziel",
		LOG_GOLD_FOIL_CONVERT: "Goldfolie umgewandelt",
		LOG_MIDAS_LOOT: "Goldhuf-Beute: {name}",
		LOG_MIDAS_BAG_FULL: "Ausrüstungstasche ist voll, Beute kann nicht gespeichert werden",
		LOG_ASSIMILATED: "Daten assimiliert",
		LOG_EMPTY_REQUIRED: "Muss ein leeres Feld sein",
		LOG_GRAVITY_LOCKED: "Gravitationsgebunden",
		LOG_SINGULARITY_COLLISION: "Singularitätskollision!",
		LOG_FAITH_SIPHON: "Glaubenssiphon +2G",
		LOG_SPATIAL_SCRAMBLE: "Raumdurcheinander",
		LOG_BETRAYED: "Verraten!",
		LOG_BOOMERANG: "Bumerang!",
		LOG_CHARMED: "Verzaubert!",
		LOG_COATING_PROTECT: "Beschichtung schützt",
		LOG_DARK_BARGAIN_CURSED: "DARK_BARGAIN: VERFLUCHTES SIGNAL ERKANNT",
		LOG_DEPLOY_FAILED: "SIGNAL VERLOREN: ENTFALTUNG BLOCKIERT",
		LOG_HOLY_BLESSING: "Heiliger Segen!",
		LOG_IMMUNE_BLOCKED: "Immun: Blockiert",
		LOG_LOOT_BOX_OPEN: "Beute: {item}",
		LOG_NO_ADJACENT_ALLY: "Kein benachbarter Verbündeter",
		LOG_RICOCHET: "Abpraller!",
		LOG_SATELLITE_ASCENSION: "Satellitenerwachen: Neuer König besteigt Thron!",
		LOG_SHADOW_SWAP: "Schattentausch!",
		LOG_SKILL_SILENCED: "Verstummt",
		LOG_SQUARE_OCCUPIED: "Feld besetzt",
		LOG_STOLEN: "Gestohlen!",
		LOG_SUPLEX: "Springer-Suplex!",
		LOG_SUPLEX_COLLISION: "Suplex-Kollision!",
		LOG_SUPLEX_WALL: "Wand-Aufprall!",
		LOG_VENTURE_CAPITAL: "Risikokapital +10"
	},
	unlockRequirements: {
		HAPPY_PRINCE: "[Monopol]: Akkumuliere 1000 Gold in einem Schicksalslauf.",
		ARTHUR: "[Rittereid]: Setze insgesamt 50 Springer aus deiner Reserve ein.",
		ODYSSEUS: "[Raumkrümmung]: Benutze Tausch oder Teleportation insgesamt 30-mal.",
		LOUIS_XIV: "[Sonnenkönig]: Verbinde mehr als 10 Einheiten in einem einzigen Zug.",
		RICHARD: "[Kreuzzug]: Der König schlägt den feindlichen König persönlich.",
		PAWN_UNSTABLE_CORE: "[Überlastung]: Schlage insgesamt 30 Feinde mit Bauern.",
		PAWN_RELAY: "[Eilmarsch]: Bewege Bauern insgesamt 100-mal.",
		PAWN_SACRIFICE: "[Verbrauchsmaterial]: Verliere insgesamt 20 Bauern im Kampf.",
		PAWN_INTERLOCK: "[Infanterie]: Setze insgesamt 30 Bauern aus deiner Reserve ein.",
		PAWN_PARASITE: "[Absoluter Nullpunkt]: Friert feindliche Einheiten insgesamt 50-mal ein.",
		PAWN_TRAITOR: "[Infiltration]: Bekehre insgesamt 10 feindliche Einheiten.",
		PAWN_SWARM: "[Schwarmmythos]: Halte 6+ eigene Bauern gleichzeitig am Leben.",
		PAWN_OMEGA_MIRROR: "[Endstation]: Werte einen Bauern auf Stufe 5 (MAX) auf.",
		PAWN_SATELLITE: "[Inselüberleben]: Gewinne einen Kampf, während der König getrennt ist.",
		KNIGHT_GRAVITY_WELL: "[Kavallerie]: Bewege Springer insgesamt 50-mal.",
		KNIGHT_TROJAN: "[Gefallener Ritter]: Verliere insgesamt 10 Springer im Kampf.",
		KNIGHT_FULL_DUPLEX: "[Blitzreaktion]: Schlage eine schwere Einheit in den ersten 3 Zügen.",
		KNIGHT_CHAIN: "[Blitzkrieg]: Räume eine Stufe in weniger als 5 Zügen auf.",
		KNIGHT_RIFT: "[Raumriss]: Benutze Tausch oder Teleportation insgesamt 50-mal.",
		KNIGHT_MIDAS_TOUCH: "[Midas]: Erhalte insgesamt 500 Gold über Gold-Umwandlungseffekte.",
		KNIGHT_TROJAN_KERNEL: "[Riesentöter]: Schlage insgesamt 10 Damen oder Türme mit Springern.",
		BISHOP_CONDUIT: "[Läufer-Parade]: Bewege Läufer insgesamt 50-mal.",
		BISHOP_SILENCE: "[Versiegeler]: Bring feindliche Einheiten insgesamt 30-mal zum Schweigen.",
		BISHOP_OPTICAL_BLIND_ZONE: "[Aegis-Schild]: Blockiere insgesamt 5-mal Schaden mit Schilden.",
		BISHOP_ZEALOT: "[Eiferer]: Schlage insgesamt 20 Feinde mit Läufern.",
		BISHOP_SACRED_ZONE: "[Heilige Stase]: Friert feindliche Einheiten insgesamt 20-mal ein.",
		BISHOP_CONVERSION: "[Glaubenssprung]: Bewege Läufer über eine kumulierte Distanz von 30 Feldern.",
		BISHOP_RESURRECTION: "[Nekromant]: Löse Wiederbelebungs- oder Ersatz-Effekte insgesamt 10-mal aus.",
		BISHOP_AURORA: "[Auge des Himmels]: Schlage einen Feind aus 6+ Feldern Entfernung mit einem Läufer.",
		BISHOP_ABSOLUTE_BARRIER: "[Mauer der Klagen]: Weiche einer feindlichen Schach-Bedrohung insgesamt 20-mal aus.",
		ROOK_MAGNET: "[Schwerkraft]: Verschiebe Einheiten insgesamt 10-mal durch erzwungene Effekte.",
		ROOK_CARRIER: "[Schwermetall]: Bewege Türme insgesamt 50-mal.",
		ROOK_EJECTION: "[Schwerlastaufstellung]: Setze insgesamt 10 Türme aus deiner Reserve ein.",
		ROOK_CATAPULT: "[Katapult]: Verschiebe Einheiten insgesamt 30-mal durch erzwungene Effekte.",
		ROOK_TRACTOR_BEAM: "[Traktor]: Verschiebe Einheiten 15-mal durch erzwungene Effekte.",
		ROOK_SHOCKWAVE: "[Schockwelle]: Verschiebe Einheiten 20-mal durch erzwungene Effekte.",
		ROOK_FORBIDDEN_ZONE: "[Eiserne Festung]: Gewinne 5-mal, ohne einen einzigen Turm zu verlieren.",
		ROOK_ION_CANNON: "[Kanonenritt]: Bewege einen Turm um 7+ Felder in einer einzigen Bewegung.",
		ROOK_IRON_CURTAIN: "[Eiserner Wille]: Blockiere insgesamt 15-mal Schaden mit Schilden.",
		ROOK_VOID_FISSURE: "[Leerenfürst]: Überlebe 20+ Züge in einer BOSS-Stufe.",
		QUEEN_MULTICAST: "[Spiegelübung]: Löse zusätzliche Aktionen (Extra Move) insgesamt 10-mal aus.",
		QUEEN_INSIGHT: "[Alles sehendes Auge]: Enthülle insgesamt 10 feindliche unsichtbare Einheiten.",
		QUEEN_RECALL: "[Königinnenfeldzug]: Bewege Damen insgesamt 30-mal.",
		QUEEN_REQUISITION: "[Plünderer]: Akkumuliere mehr als 50 Gold in einem einzigen Kampf.",
		QUEEN_TIME_WARP: "[Meister der Zeit]: Nutze insgesamt 100-mal die Rückgängig-Funktion.",
		QUEEN_NEMESIS: "[Zeit der Rache]: Schlage insgesamt 50 Feinde mit Damen.",
		QUEEN_GRAVITY_WELL: "[Schwerkraftmeister]: Verriegle/Unterdrücke Gegner insgesamt 30-mal.",
		KING_DECOY_DOUBLE: "[Schattenschritt]: Bewege den König insgesamt 50-mal.",
		QUEEN_ROOK_AUTHORITY: "[Dreifaltigkeit]: Besitze gleichzeitig eigene Dame, Turm, Läufer und Springer auf dem Brett.",
		QUEEN_BISHOP_AUTHORITY: "[Königliche Einberufung]: Setze insgesamt 5 Damen aus deiner Reserve ein.",
		KING_SWAP: "[Taktischer Positionswechsel]: Tausche Positionen oder teleportiere insgesamt 20-mal.",
		KING_REFLECTION: "[Kriegerkönig]: Schlage 5 Feinde direkt mit dem König.",
		KING_COMMANDER: "[Unruhige Bewegung]: Bewege den König insgesamt 30-mal.",
		KING_GRAND_CASTLE: "[Meister des Sieges]: Gewinne insgesamt 10 Kämpfe.",
		KING_SOUL_LINK: "[Unbeugsamer Wille]: Bewege den König mindestens 15-mal in einem einzigen Lauf.",
		KING_HOLY_DOMAIN: "[Licht der Reinigung]: Heile negative Status von Verbündeten insgesamt 20-mal.",
		KING_STASIS: "[Absolute Stille]: Mehr als 50% der Einheiten auf dem Brett sind gleichzeitig eingefroren/versteinert.",
		KING_MARTYRDOM: "[Neugeburt aus der Asche]: Gewinne einen Kampf nur mit dem König, während die Reserve leer ist.",
		GENERIC_RAPID_DEPLOY: "[Mobilisierung]: Setze Einheiten insgesamt 50-mal auf.",
		GENERIC_LOGIC_LOCK: "[Hacken]: Bring feindliche Einheiten insgesamt 20-mal zum Schweigen.",
		GENERIC_MIRRORING: "[Extrem-Übertaktung]: Löse zusätzliche Aktionen insgesamt 20-mal aus.",
		GENERIC_PARASITE: "[Systemabsturz]: Alle Feinde sind gleichzeitig getrennt/eingefroren und handlungsunfähig.",
		GENERIC_RECURSIVE_STRIKE: "[Combo-Meister]: Erreiche eine 5er-Combo (Combo x5) in einem Kampf.",
		GENERIC_HIVE_KERNEL: "[Kollektivbewusstsein]: Verbinde mehr als 10 Einheiten in einem einzigen Zug.",
		GENERIC_FIREWALL: "[Letzte Verteidigungslinie]: Schließe Kapitel 3 ab.",
		EQ_SHOCK_STIRRUPS: "[Schockwelle]: Friert feindliche Einheiten insgesamt 10-mal ein.",
		EQ_BASE_STATION: "[Weitbereichsantenne]: Verbinde mehr als 8 Einheiten in einem einzigen Zug.",
		EQ_REACTIVE_ARMOR: "[Eiserne Rüstung]: Blockiere insgesamt 5-mal Schaden mit Schilden.",
		EQ_BLOOD_DRESS: "[Melodie des Gemetzels]: Erreiche eine 3er-Combo (Combo x3) in einem Kampf.",
		EQ_BOUNTY_MODULE: "[Kopfgeldjäger]: Erhalte insgesamt 200 Gold.",
		EQ_RESCUE_BEACON: "[Überlebender]: Löse Wiederbelebungs- oder Ersatz-Effekte insgesamt 5-mal aus.",
		EQ_FULL_BAND_SCANNER: "[Frequenzstörer]: Zerstöre insgesamt 10 feindliche Fallenfelder.",
		EQ_BLACK_MARKET_LEDGER: "[Schwarzmarkt-Pakt]: Erwerbe Ausrüstung im Shop mit 0 Gold.",
		EQ_TOW_HOOK: "[Hakenangriff]: Verschiebe Einheiten insgesamt 10-mal durch erzwungene Effekte.",
		EQ_ROYAL_SALUTE: "[Bauern-Killer]: Schlage insgesamt 50 feindliche Bauern.",
		SIGNAL_TOWER_DEFENSE: "[Baumeister]: Platziere Signaltürme oder Signalturm-Bauern insgesamt 5-mal.",
		EQ_HACKER_TERMINAL: "[Logik-Kapern]: Friere feindliche Damen oder Türme insgesamt 5-mal ein.",
		EQ_GHOST_RIDE: "[Streich]: Tausche Positionen oder teleportiere insgesamt 20-mal.",
		EQ_HIVE_CORE: "[Kleiner Schwarm]: Halte 4 eigene Bauern gleichzeitig am Leben.",
		EQ_TELESCOPIC_LEGS: "[Langbeiniger Ritter]: Bewege Springer insgesamt 20-mal.",
		EQ_PHOENIX_FEATHER: "[Phönix-Nirwana]: Löse Wiederbelebungs- oder Ersatz-Effekte insgesamt 10-mal aus.",
		EQ_SCEPTER_OF_CHARM: "[Verführer]: Bekehre insgesamt 10 feindliche Einheiten.",
		EQ_ROYAL_GUARD: "[Treuer Schild]: Löse die Leibwächter-Effekte des Königs insgesamt 5-mal aus.",
		EQ_TACTICAL_OPS: "[Elite-Truppe]: Gewinne einen Kampf, ohne eine einzige Reserve-Einheit aufzustellen.",
		EQ_DIPLOMATIC_IMMUNITY: "[Einsamer Wolf]: Gewinne einen Kampf nur mit dem König.",
		EQ_RELIC_OF_KINGS: "[Relikt der Könige]: Gewinne einen Kampf nur mit dem König.",
		EQ_VENTURE_CAPITAL: "[Kapitalist]: Erreiche eine Goldsumme von 500.",
		EQ_SWARM_INTELLIGENCE: "[Insektenvolk]: Halte 8 eigene Bauern gleichzeitig am Leben.",
		EQ_ARROGANT_CREED: "[Preis der Arroganz]: Überlebe 5 Züge mit getrenntem König.",
		EQ_QUEEN_ROOK_LINK: "[Kette von Dame und Turm]: Setze Dame und Turm gleichzeitig in einem einzigen Spiel ein.",
		EQ_QUEEN_BISHOP_LINK: "[Kette von Dame und Läufer]: Setze Dame und Läufer gleichzeitig in einem einzigen Spiel ein.",
		EQ_GOLDEN_THRONE: "[Goldenes Zeitalter]: Erreiche eine Goldsumme von 1000.",
		EQ_DEFLATION: "[Dezimation]: Würfle den Shop 3-mal neu, ohne etwas zu kaufen.",
		OVERCLOCK: "[Konsum-Enthusiast]: Nutze Verbrauchsgegenstände insgesamt 10-mal.",
		PARDON: "[Sieger der Champions]: Gewinne insgesamt 5 Kämpfe.",
		ILLEGAL_SLOT: "[Modding-Enthusiast]: Werte eine Einheit auf Stufe 3 auf.",
		BLACK_ORDER: "[Schmuggler]: Verkaufe insgesamt 10 Ausrüstungsgegenstände auf dem Schwarzmarkt.",
		DRAFT_ORDER: "[Kaufsüchtig]: Würfle den Shop insgesamt 10-mal neu.",
		DOOM_BROADCAST: "[Netzwerk-Oberherr]: Bringe alle Feinde in den Zustand der Trennung.",
		ROYAL_SACRIFICE: "[Überleben des Stärkeren]: Opfere/Verkaufe Verbündete insgesamt 5-mal manuell.",
		REAPER_EXE: "[Erntezeit]: Schlage 8 Feinde in den ersten 10 Zügen.",
		WHEEL_OF_FATE: "[Chaostheorie]: Löse Zufallsereignisse insgesamt 30-mal aus.",
		MEDUSA: "[Versteinernder Blick]: Friere 100 Feinde ein.",
		SINGULARITY_GRENADE: "[Schwerkraftmeister]: 25-mal Zwangsbewegung verursachen.",
		SPATIAL_SCRAMBLER: "[Chaostheorie]: 50-mal Zufallsereignisse auslösen.",
		KNIGHT_SUPLEX: "[Kämpfer]: 40 Feinde mit Springern töten.",
		BISHOP_SHADOW_SWAP: "[Leerenwandler]: 40-mal tauschen oder teleportieren."
	},
	player: "EIGN",
	enemy: "GEGN",
	recycleTrade: "Recyceln / Handeln",
	confirmEndTurnTitle: "Zugende bestätigen",
	confirmEndTurnMessage: "Sind Sie sicher, dass Sie Ihren Zug beenden möchten?",
	confirmPurchaseTitle: "Kauf bestätigen",
	confirmPurchaseMessage: "Sind Sie sicher, dass Sie {item} kaufen möchten?",
	connectionLineIdleLabel: "Verbindungsdrosselung im Leerlauf",
	genericEquipment: "Universelle Ausrüstung",
	use: "Verwenden",
	useItem: "Gegenstand verwenden",
	visualQualityLabel: "Qualität & Rendering",
	networkActive: "ONLINE",
	networkOffline: "OFFLINE",
	statusLabel: "NETZWERK",
	additionalEffects: "ZUSÄTZLICHE EFFEKTE",
	permanent: "PERM"
};
var rt = {
	title: "RELARCH",
	subtitle: "Connect|Command|Conquer",
	playVsAi: "Standard",
	playVsHuman: "vs. Human",
	playRogue: "Fate Run",
	unitExclusive: "{name} Only",
	whiteReserve: "White",
	blackReserve: "Black",
	whiteReserveFull: "White Reserve",
	blackReserveFull: "Black Reserve",
	whiteTurn: "White's Turn",
	blackTurn: "Black's Turn",
	whiteWins: "White Wins!",
	blackWins: "Black Wins!",
	draw: "Draw",
	basicConfiguration: "Basic Configuration",
	skillsLabel: "Skills",
	noCombo: "No Combo",
	blackHQ: "BLACK",
	interfaceTab: "Interface",
	visualTab: "Visual",
	audioTab: "Audio",
	port: "PORT",
	land: "LAND",
	fit: "FIT",
	closeTerminal: "CLOSE TERMINAL",
	systemLanguage: "LANGUAGE",
	masterAudio: "MASTER AUDIO",
	musicVolume: "MUSIC",
	sfxVolume: "SFX",
	cancelAim: "CANCEL",
	systemCollapse: "System Collapse In:",
	turns: "TURNS",
	economicStable: "Economic Stable",
	danger: "DANGER",
	undoLabel: "UNDO",
	skipLabel: "SKIP",
	itemsLabel: "ITEMS",
	equipLabel: "EQUIP",
	progress: "Progress",
	credits: "Credits",
	systemReady: "System Ready",
	module: "MODULE:",
	cost: "COST",
	accessGranted: "ACCESS GRANTED",
	systemPurged: "SYSTEM PURGED",
	continueDeep: "Delve Deeper (Chapter {next})",
	funds: "FUNDS",
	rank: "RANK",
	backgroundInfo: "BACKGROUND",
	coreLogic: "CORE LOGIC",
	difficultyLabel: "DIFFICULTY",
	sov: "SOV",
	max: "MAX",
	none: "NONE",
	spawn: "Spawn",
	menu: "Menu",
	restart: "Restart",
	settings: "Settings",
	settingsTitle: "SETTINGS",
	restoreDefaults: "RESTORE DEFAULTS",
	resetMessage: "System parameters reset to baseline protocol.",
	backToMenu: "Main Menu",
	languageName: "English",
	showDanger: "Danger Zone",
	reserveLayoutLabel: "Layout",
	reserveLayoutAuto: "Auto",
	reserveLayoutPortrait: "Portrait",
	reserveLayoutLandscape: "Landscape",
	aspectRatioLabel: "Aspect Ratio",
	resolutionLabel: "Resolution",
	resolutionAdaptive: "Adaptive",
	brightnessLabel: "Brightness",
	qualityLabel: "Quality",
	qualityHigh: "High",
	qualityMedium: "Medium",
	qualityLow: "Low",
	connectionLineModeLabel: "Link Visualization",
	connectionLineModeAlways: "Always On",
	connectionLineModeAuto: "Auto-Hide",
	connectionLineModeNever: "Always Off",
	gridStyleLabel: "Background Grid",
	gridStyleDotted: "Dotted",
	gridStyleCurve: "Curve",
	defaultDangerZoneLabel: "Default Danger Zone",
	gameLogicPreferences: "Game Logic & Preferences",
	displayLayout: "Display & Layout",
	connectionLineAutoPauseLabel: "Auto-Pause Connections",
	connectionLinePauseDelayLabel: "Pause Delay",
	autoEndTurnLabel: "Auto-End Turn",
	confirmationsLabel: "Action Confirmations",
	confirmEndTurnLabel: "End Turn Confirmation",
	confirmSurrenderLabel: "Surrender Confirmation",
	confirmShopLegendaryLabel: "Shop Purchase Confirmation",
	postProcessingLabel: "Retro Post-Processing",
	noiseStrengthLabel: "Film Grain Intensity",
	vignetteStrengthLabel: "Vignette Intensity",
	crtCurvatureLabel: "CRT Curvature",
	accessibilityLabel: "Accessibility & Comfort",
	screenShakeLabel: "Screen Shake",
	floating3DLabel: "3D Tilt & Parallax",
	showEndgameBackground: "Show Endgame on Menu",
	difficultyEasy: "Easy",
	difficultyNormal: "Normal",
	difficultyHard: "Hard",
	rules: "Rules",
	rulesContent: "Objective: Kill the enemy King.\nMovement: Pieces move as in standard Chess.\nDeployment: You can deploy pieces from your reserve onto any empty square according to deployment rules.\nNetwork: A piece is \"connected\" if it is within movement range of another connected piece, tracing back to your King.\nFrozen Pieces: If a piece loses connection to the network (its path to the King is broken), it is Frozen and cannot move. Connected pieces can move to restore the network.",
	undo: "Undo",
	skip: "Skip Turn",
	surrender: "Surrender",
	surrenderConfirm: "Are you sure you want to surrender?",
	surrenderTitle: "Desperate Offer",
	surrenderMsg: "The enemy has lost all combat capabilities and requests to shutdown. Accept?",
	acceptSurrender: "Accept",
	refuseSurrender: "To the end",
	cancel: "Cancel",
	checkWarning: "CHECK!",
	gameOver: "Game Over",
	winnerIs: "Winner: ",
	playAgain: "Play Again",
	undoRetry: "Retry with Undo ({count} left)",
	victory: "Victory!",
	ok: "OK",
	bossSuffix: " (BOSS)",
	decrypt: "DECRYPT",
	decryptSuccess: "STATUS: DECRYPT_SUCCESS // SECTOR_DECRYPTION_LOG",
	transmissionComplete: "TRANSMISSION COMPLETE",
	systemUnlocked: "SYSTEM UNLOCKED",
	swallow: "SWALLOW",
	protocolLocked: "PROTOCOL LOCKED",
	noDescription: "No Description",
	unit: "Unit",
	level: "Level",
	skill: "Skill",
	equip: "Equip",
	add: "ADD",
	unlockAll: "Unlock All",
	clearData: "Clear Data",
	selectConsumable: "Select Consumable...",
	selectEquipment: "Select Equipment...",
	generic: "GEN",
	monarchSelectTitle: "Select Monarch",
	monarchSelectSub: "Initializing Strategic Core",
	monarchFunds: "STARTING FUNDS",
	monarchDifficulty: "STRATEGIC DIFF",
	monarchHistory: "History / Intelligence",
	monarchLogic: "Core System Logic",
	monarchCancel: "Cancel",
	monarchStart: "Initialize Run",
	monarchWIP: "WIP",
	monarchLocked: "Locked",
	monarchDefaultName: "The Sovereign",
	monarchDefaultDesc: "The traditional commander of the neural network. Balanced, stable, and strictly follows basic protocols.",
	monarchDefaultMechanic: "Standard Protocol: Provides network connection to allies within 1 square distance.",
	monarchHappyPrinceName: "Happy Prince",
	monarchHappyPrinceDesc: "\"A leaden heart bound by absolute sacrifice. He sheds his golden shell to arm his people.\"",
	monarchHappyPrinceMechanic: "[Golden Almsgiving] Starts with 5000G, no passive income. Items bought for the Prince become Legendary gear for allies.\n[Leaden Heart] Accompanied by the \"Swallow\" signal source. If captured, spend 500G to revive her. Game over if she dies permanently.\n[Leaden Statue] First fatal blow petrifies the Prince into an invincible 3x3 network source.",
	monarchArthurName: "King Arthur",
	monarchArthurDesc: "\"First among equals. He shatters the absolute monarchy to forge a decentralized fellowship.\"",
	monarchArthurMechanic: "[Decentralized] Level 3/Legendary units act as network sources. Starts with Lv.3 Merlin & Lancelot.\n[Round Table Oath] When a Lv.3 ally secures a kill, all other Lv.3 allies gain [Shield].\n(Restriction: Max unit level is 3; Queens disabled)",
	monarchOdysseusName: "Odysseus",
	monarchOdysseusDesc: "\"Navigator of the endless abyss. To him, boundaries are illusions, and deception is the highest art.\"",
	monarchOdysseusMechanic: "[Abyssal Navigation] Units and networks wrap across board edges (max 1 sq).\n[Siren's Song] Every 5 turns, networked non-King units may suffer lethal drift.\n[Trojan Horse] Active: Deploy a hidden Horse. After 2 turns, it bursts into two surprise Pawns.",
	monarchLouisName: "Louis XIV",
	monarchLouisDesc: "\"L'état, c'est moi. Absolute power radiates from the sun, too sacred to be shared.\"",
	monarchLouisMechanic: "[Absolute Corona] Massive 5x5 King network. Signals CANNOT be relayed. Enemies within are silenced.\n[The Iron Mask] Starts with an immobile \"Iron Mask\" as a secondary source. If captured, the King permanently loses his Corona network.",
	monarchRichardName: "Richard I",
	monarchRichardDesc: "\"A crusader forever on the vanguard. Glory lies ahead; looking back is treason.\"",
	monarchRichardMechanic: "[One-Way Crusade] Signals only flow forward. King moves like a Queen. Deeper King charges grant allies +2 sliding moves and boost bounties.\n[No Retreat] The King cannot move backward.\n[King's Ransom] On death, auto-spend 100G to resurrect the King in your backline.",
	selectLoot: "Select your loot",
	recruitKnight: "Recruit: Knight",
	recruitKnightDesc: "Add a new Knight to your roster.",
	recruitBishop: "Recruit: Bishop",
	recruitBishopDesc: "Add a new Bishop to your roster.",
	itemFreeze: "Item: Freeze Scroll",
	itemFreezeDesc: "Consumable: Freeze an enemy for 1 turn.",
	loadGame: "Re-enter",
	loadGameSub: "Restore Checkpoint",
	saveGame: "Save Game",
	saveManagement: "Save Management",
	loadArchive: "Load Archive",
	emptySlot: "Empty Slot",
	chapter: "Chapter",
	levelLabel: "Level",
	saveLimitReached: "Save limit reached",
	saveSuccess: "Game saved successfully!",
	remainingSaves: "Remaining saves",
	yourTurn: "YOUR TURN",
	yourTurnAnim: "YOUR TURN",
	aiTurn: "AI TURN",
	normalMode: "Standard",
	rogueMode: "Fate Run",
	turn: "Turn",
	tacticalTurnBased: "Tactical Turn-Based",
	permadeathRun: "Permadeath Run",
	standardSimulation: "Standard Simulation",
	selectAiConfig: "Select AI Configuration",
	protocolBaseline: "01 - Protocol Baseline",
	standardLogic: "02 - Standard Logic",
	advancedNeural: "03 - Advanced Neural",
	localP2P: "Local Peer-to-Peer",
	build: "REV",
	local: "Local",
	terminal: "Terminal",
	skipReward: "Skip (+10G)",
	reroll: "Reroll ({cost}G)",
	combo: "Combo x{count}",
	comboInc: "Combo +1!",
	slot: "SLOT",
	tierCommon: "Common",
	tierRare: "Rare",
	tierEpic: "Epic",
	tierLegendary: "Legendary",
	availableCredit: "Available Credit",
	confirmClaim: "Confirm Claim",
	insufficientFunds: "Insufficient Funds",
	darkBargain: "Dark Bargain",
	targetSold: "Target Sold",
	blackMarket: "Black Market",
	awaitingSelection: "Awaiting Terminal Selection...",
	unlockRequired: "Unlock via tactical achievement",
	itemDetails: "Item Details",
	assetDetails: "Asset Details",
	sell: "SELL",
	back: "Back",
	recruitPiece: "Recruit: {name}",
	newUnit: "New Unit",
	addPieceDesc: "Add a new {name} to your roster.",
	imbueSkill: "Imbue: {name}",
	replaceSkill: "Replace: {name}",
	backupUnit: "Backup Unit",
	bonusSkill: "Bonus Skill: ",
	conflict: "CONFLICT",
	equipmentFull: "Equipment Slots Full",
	pieceTypeMismatch: "Unit Type Mismatch",
	itemConflictReplace: "Replaced conflicting item: {name}",
	replaces: "(Replaces) ",
	scrapRecycle: "Scrap Recycle",
	inventoryFull: "Inventory Full",
	scrapRecycleDesc: "Your {type} slots are full ({max}). Converted to 15 Gold.",
	consumable: "Items",
	equipment: "Equips",
	piecePawn: "Pawn",
	pieceKnight: "Knight",
	pieceBishop: "Bishop",
	pieceRook: "Rook",
	pieceQueen: "Queen",
	pieceKing: "King",
	unitMerlin: "Merlin (Lv.3)",
	unitLancelot: "Lancelot (Lv.3)",
	unitIronMask: "The Iron Mask",
	campTitle: "Camp",
	campSubtitle: "Rest & Prepare",
	campDesc: "Use this moment to review your loadout before the next encounter.",
	campLevel: "Level",
	campGold: "Gold",
	campInventory: "Inventory",
	campUnits: "{count} units",
	campItems: "{consumables} consumables · {equipments} equipment",
	continue: "Continue",
	close: "Close",
	debug: {
		spawnerTitle: "Unit Spawner (Debug)",
		pieceType: "Piece Type",
		selectPiece: "Select Piece...",
		imbueSkill: "Imbue Skill",
		initialEquipment: "Initial Equipment",
		none: "None",
		generate: "Generate"
	},
	dbTitle: "Database",
	dbSub: "Data Decryption & Archive",
	dbClose: "Disconnect",
	dbNotCollected: "Data Undiscovered",
	dbUnlockProtocol: "Unlock Protocol:",
	dbTabs: {
		monarch: "Monarch Cores",
		king: "King Modules",
		pawn: "Pawn Modules",
		knight: "Knight Modules",
		bishop: "Bishop Modules",
		rook: "Rook Modules",
		queen: "Queen Modules",
		generic: "Generic Protocols",
		equipment: "Hardware Peripherals",
		consumable: "Disposable Scripts",
		boss: "Boss Mechanics",
		terrain: "Terrain Anomalies"
	},
	noSelection: "No Selection",
	personnel: "Personnel",
	inventory: "Inventory",
	emptyBag: "Empty Bag",
	storageEmpty: "Storage Empty",
	skillModule: "Skill",
	equipModule: "Equip",
	used: "Used",
	railgunFiring: "Orbital Cannon: FIRING!",
	railgunCountdown: "Orbital Cannon: {n} turns until firing",
	quantumCountdown: "Quantum Swap in: {n} turns",
	cooldown: "Cooldown",
	ready: "Ready",
	depleted: "Ammunition Depleted",
	turnsRemaining: "{n} Turns",
	remainingUses: "{n} Uses Remaining",
	bastionMode: "Bastion Mode",
	mobileMode: "Mobile Mode",
	costGold: "Cost {n} Gold",
	deployToUse: "Deploy to use",
	prepare: "Prepare",
	intel: "Intel",
	barracks: "Barracks",
	sectorLogs: "Sector Logs",
	sector: "Sector",
	eliminateAll: "Eliminate All",
	vipTarget: "VIP Target",
	vipTargetDesc: "No enemy King. Eliminate all enemies to win.",
	jammingTitle: "Jamming",
	jammingShortDesc: "Global network failure. Only relays provide signal.",
	noAnomaly: "Nominal",
	anomalyTitle: "ANOMALIES",
	proxyKingDesc: "The King is just the beginning. While the enemy King lives, their units require network connection to act. Once the enemy King falls, their entire army becomes permanently connected. You must eliminate all enemies to win.",
	empty: "Empty",
	dragToUnequip: "Drag to unequip",
	dragToEquip: "Drag to Equip",
	dragToUse: "Drag to Use",
	aiAnalyzing: "AI Analyzing...",
	noData: "No Data",
	items: JSON.parse("{\"EMP\":{\"name\":\"EMP Pulse\",\"desc\":\"Freeze all enemies in a 3x3 area for 1 turn.\"},\"OVERCLOCK\":{\"name\":\"Overclock\",\"desc\":\"Selected piece can move twice this turn.\"},\"PHASE\":{\"name\":\"Phase Shift\",\"desc\":\"Passive: This piece can move through other pieces.\"},\"RANGE_UP\":{\"name\":\"Range Extender\",\"desc\":\"Passive: Increase network range by 1.\"},\"BATTERY\":{\"name\":\"Battery\",\"desc\":\"Instantly thaw a frozen target.\"},\"FREEZE_RAY\":{\"name\":\"Freeze Ray\",\"desc\":\"Freeze an enemy for 2 turns.\"},\"PARDON\":{\"name\":\"Pardon\",\"desc\":\"Temporarily convert an enemy unit.\"},\"SMOKE_BOMB\":{\"name\":\"Smoke Bomb\",\"desc\":\"Immunity to remote linear attacks for 2 turns.\"},\"EQ_BAYONET\":{\"name\":\"Bayonet\",\"desc\":\"Pawns can attack (capture) forward.\"},\"EQ_SCOUT_RADAR\":{\"name\":\"Scout Radar\",\"desc\":\"While connected, enemy Invisibility/Decoy nearby fails.\"},\"EQ_SIGNAL_BACKPACK\":{\"name\":\"Signal Backpack\",\"desc\":\"Forces allies 2 squares forward/backward to be connected.\"},\"EQ_TELESCOPIC_LEGS\":{\"name\":\"Telescopic Legs\",\"desc\":\"Knight can choose to jump a 3x1 distance.\"},\"EQ_SHOCK_STIRRUPS\":{\"name\":\"Shock Stirrups\",\"desc\":\"Landing freezes adjacent cross-direction enemies for 1 turn.\"},\"EQ_PRISM_SHIELD\":{\"name\":\"Prism Shield\",\"desc\":\"On death, take down the killer if it was a diagonal attack.\"},\"EQ_HIGH_POWER_SCOPE\":{\"name\":\"High-Power Scope\",\"desc\":\"Gain 5 Gold when capturing an enemy from 3+ squares away.\"},\"EQ_PURIFICATION_STAFF\":{\"name\":\"Purification Staff\",\"desc\":\"Clears negative statuses of allies in a 3x3 area around destination after moving.\"},\"EQ_HOVER_TREAD\":{\"name\":\"Hover Tread\",\"desc\":\"Rooks can move 1 square diagonally.\"},\"EQ_BASE_STATION\":{\"name\":\"Base Station\",\"desc\":\"While connected, all allies in the same row/col are connected.\"},\"EQ_REACTIVE_ARMOR\":{\"name\":\"Reactive Armor\",\"desc\":\"Rooks are immune to attacks from directly above or below.\"},\"EQ_PHOENIX_FEATHER\":{\"name\":\"Phoenix Feather\",\"desc\":\"On first death, respawn as a Level 1 Pawn near the King.\"},\"EQ_BLOOD_DRESS\":{\"name\":\"Blood Dress\",\"desc\":\"Leave an Afterimage on kill; can teleport back to it later.\"},\"EQ_SCEPTER_OF_CHARM\":{\"name\":\"Charm Scepter\",\"desc\":\"Convert a lone enemy in range for 1 turn at start of turn.\"},\"EQ_LIGHTNING_ROD\":{\"name\":\"Lightning Rod\",\"desc\":\"King is immune to environmental traps and negative statuses.\"},\"EQ_MEGAPHONE\":{\"name\":\"Megaphone\",\"desc\":\"King support range increased from 1 to 2 squares.\"},\"EQ_ROYAL_GUARD\":{\"name\":\"Royal Guard\",\"desc\":\"King adjacent ally capture triggers 10G auto-revive (Once).\"},\"EQ_REFLECTIVE_ARMOR\":{\"name\":\"Reflective Armor\",\"desc\":\"When captured, the attacker is frozen for 1 turn.\"},\"EQ_LIGHTWEIGHT_ALLOY\":{\"name\":\"Lightweight Alloy\",\"desc\":\"Allows one move while disconnected; item breaks after.\"},\"EQ_CAMOUFLAGE\":{\"name\":\"Camouflage\",\"desc\":\"Invisible to enemies if no move/capture was made this turn.\"},\"EQ_STABILIZER\":{\"name\":\"Stabilizer\",\"desc\":\"Immune to forced displacement effects.\"},\"EQ_SELF_DESTRUCT\":{\"name\":\"Self-Destruct\",\"desc\":\"Destroy adjacent 1-square area on death; item breaks after.\"},\"EQ_BACKUP_BATTERY\":{\"name\":\"Backup Battery\",\"desc\":\"Delays freezing by 2 turns when disconnected.\"},\"EQ_EMERGENCY_LINK\":{\"name\":\"Emergency Link\",\"desc\":\"Connects to an ally within 2 squares when disconnected.\"},\"EQ_BOUNTY_MODULE\":{\"name\":\"Bounty Module\",\"desc\":\"Gain 10 Gold on every successful capture.\"},\"EQ_RESCUE_BEACON\":{\"name\":\"Rescue Beacon\",\"desc\":\"On death, deploy a duplicate from reserve near the King.\"},\"EQ_TACTICAL_OPS\":{\"name\":\"Tactical Ops\",\"desc\":\"Gain an extra Deployment action on the first turn of battle.\"},\"EQ_DIPLOMATIC_IMMUNITY\":{\"name\":\"Diplomatic Immunity\",\"desc\":\"Enemy AI cannot deploy new units for the first 2 turns.\"},\"EQ_FULL_BAND_SCANNER\":{\"name\":\"Full-Band Scanner\",\"desc\":\"Reveal and destroy all enemy Stealth/Traps on turn start.\"},\"EQ_BLACK_MARKET_LEDGER\":{\"name\":\"Black Market Ledger\",\"desc\":\"Gain 30 Gold bonus upon victory (King kill).\"},\"EQ_RECYCLING_STATION\":{\"name\":\"Recycling Station\",\"desc\":\"Gain a random common consumable on ally death.\"},\"EQ_RELIC_OF_KINGS\":{\"name\":\"Relic of Kings\",\"desc\":\"King gains Queen+Knight movement when he is the last unit and reserves are empty.\"},\"EQ_VENTURE_CAPITAL\":{\"name\":\"Venture Capital\",\"desc\":\"Gain 10 Gold interest if entering level with 50+ Gold.\"},\"EQ_SWARM_INTELLIGENCE\":{\"name\":\"Adjacent Link\",\"desc\":\"Pawns are connected if they are adjacent to each other.\"},\"EQ_ARROGANT_CREED\":{\"name\":\"Arrogant Creed\",\"desc\":\"At the start of the game, King has Queen+Knight movement. This effect is permanently lost if you deploy any other piece.\"},\"EQ_QUEEN_ROOK_LINK\":{\"name\":\"Rook Link Collar\",\"desc\":\"Legendary: If Queen is networked, the nearest allied Rook is forced to be networked.\"},\"EQ_QUEEN_BISHOP_LINK\":{\"name\":\"Bishop Link Collar\",\"desc\":\"Legendary: If Queen is networked, the nearest allied Bishop is forced to be networked.\"},\"EQ_HIVE_CORE\":{\"name\":\"Power Core\",\"desc\":\"While connected, this Pawn gains +1 movement (can move 2 squares forward).\"},\"EQ_CHEAP_BOOSTER\":{\"name\":\"Cheap Booster\",\"desc\":\"Network range increased to 3, but cannot capture.\"},\"EQ_CHAIN_MINE\":{\"name\":\"Chain Mine\",\"desc\":\"On death, triggers 3x3 explosion if adjacent to another Pawn.\"},\"EQ_PLUNDER_HOOVES\":{\"name\":\"Plunder Hooves\",\"desc\":\"Steal 2 Gold from enemies jumped over.\"},\"EQ_GHOST_RIDE\":{\"name\":\"Ghost Ride\",\"desc\":\"30% chance to teleport enemies jumped over to a random square.\"},\"EQ_REFRACTION_LENS\":{\"name\":\"Refraction Lens\",\"desc\":\"Allows 90-degree refraction move of 2 squares when blocked by an ally.\"},\"EQ_FAITH_SIPHON\":{\"name\":\"Faith Siphon\",\"desc\":\"Gain 2 Gold whenever a unit dies on this Bishop's diagonals.\"},\"EQ_EM_SHIELD\":{\"name\":\"EM Shield\",\"desc\":\"King is immune to Knights while this Rook is adjacent.\"},\"EQ_TOW_HOOK\":{\"name\":\"Tow Hook\",\"desc\":\"Active: Capture an enemy 2 squares away in a straight line without moving.\"},\"EQ_ROYAL_SALUTE\":{\"name\":\"Royal Salute\",\"desc\":\"Capture triggers lightning on a random enemy Pawn (Cooldown: 3).\"},\"EQ_GOLDEN_THRONE\":{\"name\":\"Golden Throne\",\"desc\":\"Gain Gold based on networked allies at start of turn.\"},\"SIGNAL_TOWER_DEFENSE\":{\"name\":\"Signal Tower Defense\",\"desc\":\"Active: Spend 20 Gold to place a permanent Signal Tower on current square.\"},\"EQ_DEFLATION\":{\"name\":\"Percent Off\",\"desc\":\"Global: Reduce shop prices by 20%.\"},\"EQ_HACKER_TERMINAL\":{\"name\":\"Hacker Terminal\",\"desc\":\"Global: Randomly freeze a high-tier enemy at start of turn.\"},\"EQ_SPYWARE\":{\"name\":\"Spyware\",\"desc\":\"Global: Gain 5 Gold whenever the enemy King moves.\"},\"FROZEN\":{\"name\":\"Frozen\",\"desc\":\"Unable to move or act this turn.\"},\"PETRIFIED\":{\"name\":\"Petrified\",\"desc\":\"Permanently immobilized.\"},\"SKILL_LOCKED\":{\"name\":\"Skill Locked\",\"desc\":\"Active skills cannot be used.\"},\"SILENCED\":{\"name\":\"Silenced\",\"desc\":\"Cannot activate any skills.\"},\"ENCRYPTED\":{\"name\":\"Encrypted\",\"desc\":\"Identity masked. Piece type hidden.\"},\"SHIELDED\":{\"name\":\"Shielded\",\"desc\":\"Negates one instance of damage.\"},\"GRAVITY_LOCKED\":{\"name\":\"Gravity Locked\",\"desc\":\"Movement range limited.\"},\"MEDUSA\":{\"name\":\"Medusa Eye\",\"desc\":\"Permanent petrification.\"},\"WITHDRAW\":{\"name\":\"Tactical Withdraw\",\"desc\":\"Return piece to reserve.\"},\"JAMMING\":{\"name\":\"Full-Band Jamming\",\"desc\":\"Permanently paralyze all non-king pieces on the board (does not affect pieces deployed after use).\"},\"SCARY_LETTER\":{\"name\":\"Scary Letter\",\"desc\":\"Force an enemy piece to retreat 1 square away from your King.\"},\"SPARE_PARTS\":{\"name\":\"Spare Parts\",\"desc\":\"Spawn a Pawn near the King.\"},\"COMPASS\":{\"name\":\"Displacement Compass\",\"desc\":\"Randomly drift to an adjacent square.\"},\"PURIFIER\":{\"name\":\"Signal Purifier\",\"desc\":\"Clear negative statuses.\"},\"DECOY\":{\"name\":\"Decoy Flare\",\"desc\":\"High-priority decoy unit.\"},\"DOOM_BROADCAST\":{\"name\":\"Doom Broadcast\",\"desc\":\"Destroy all disconnected units on the board.\"},\"TIME_GLASS\":{\"name\":\"Time Hourglass\",\"desc\":\"Add 1 undo charge.\"},\"SPACE_GLASS\":{\"name\":\"Space Hourglass\",\"desc\":\"Add 1 save charge.\"},\"PRESS\":{\"name\":\"Heavy Press\",\"desc\":\"Permanently flattened.\"},\"VOID_ANCHOR\":{\"name\":\"Void Anchor\",\"desc\":\"Lock the square.\"},\"GRAVITY_TRAP\":{\"name\":\"Gravity Trap\",\"desc\":\"3x3 area gravity lock, max movement distance limited to 1 tile.\"},\"CLOAK\":{\"name\":\"Signal Jammer\",\"desc\":\"Invisibility for 2 turns.\"},\"OVERLOAD\":{\"name\":\"Energy Overload\",\"desc\":\"Extra move but cannot capture.\"},\"PORTAL\":{\"name\":\"Portal\",\"desc\":\"Establish a portal entry point.\"},\"DRAFT_ORDER\":{\"name\":\"Forced Conscription\",\"desc\":\"Revive a Knight and add to reserve.\"},\"MIDAS\":{\"name\":\"Midas Stone\",\"desc\":\"Drag this stone onto a unit in your barracks row below or on the board to convert it into Gold.\"},\"GOLDEN_TOUCH\":{\"name\":\"Golden Touch\",\"desc\":\"Instantly convert a selected [Enemy Pawn] into 50 Gold.\"},\"LOOT_BOX\":{\"name\":\"Loot Box\",\"desc\":\"Random consumable item.\"},\"ROYAL_SACRIFICE\":{\"name\":\"Royal Sacrifice\",\"desc\":\"Permanently sacrifice a selected [Ally] to buff the user (+1 Level, +1 Equipment Slot).\"},\"SCRAP_PART\":{\"name\":\"Scrap Part\",\"desc\":\"Dismantle for quick cash. Grants 5-20 Gold.\"},\"LURE_SIGNAL\":{\"name\":\"Lure Signal\",\"desc\":\"Force a selected [Enemy Pawn] to move backward 1 square.\"},\"EMERGENCY_PATCH\":{\"name\":\"Emergency Patch\",\"desc\":\"Immediately remove [Infected] status from a selected ally.\"},\"COMMAND_STEAL\":{\"name\":\"Command Steal\",\"desc\":\"Freeze an enemy for 2 turns and use them as a temporary [Network Source].\"},\"DATA_HARVEST\":{\"name\":\"Data Harvest\",\"desc\":\"Gain 10 Gold for every [Frozen] unit currently on the board.\"},\"VOID_ANCHOR_ITEM\":{\"name\":\"Void Anchor\",\"desc\":\"Lock a square for 3 turns, preventing any unit from entering or deploying.\"},\"GOLD_MAGNET_ITEM\":{\"name\":\"Gold Magnet\",\"desc\":\"Imbue a unit: gain 1 Gold for every square it moves this turn.\"},\"BARRICADE_ITEM\":{\"name\":\"Barricade\",\"desc\":\"Place a physical obstruction on a square that blocks all movement.\"},\"SCOUT_PROBE\":{\"name\":\"Scout Probe\",\"desc\":\"Reveal enemy invisible units in a 2x2 area.\"},\"RUST_SPRAY\":{\"name\":\"Rust Spray\",\"desc\":\"Target enemy cannot capture next turn.\"},\"SWAP_PLUGIN\":{\"name\":\"Swap Plugin\",\"desc\":\"Swap positions of two adjacent allies.\"},\"ILLEGAL_SLOT\":{\"name\":\"Illegal Slot\",\"desc\":\"Permanently add +1 Equipment Slot to a piece.\"},\"BLACK_ORDER\":{\"name\":\"Black Market Order\",\"desc\":\"Steal one equipment from an enemy piece.\"},\"REAPER_EXE\":{\"name\":\"Reaper.exe\",\"desc\":\"Destroy all disconnected pieces on the board.\"},\"WHEEL_OF_FATE\":{\"name\":\"Wheel of Fate\",\"desc\":\"Trigger 3 random consumable effects.\"},\"PASSIVE_ANTENNA\":{\"name\":\"Passive Antenna\",\"desc\":\"Active: Double all gold gains during this battle.\"},\"SINGULARITY_GRENADE\":{\"name\":\"Singularity Grenade\",\"desc\":\"Drop on an empty square. Pulls non-King pieces within 5×5 toward center by 1 sq (inner ring first). King is immune but gets Gravity Locked for 2 turns. Pieces colliding into the King shatter alone — the King is unharmed.\"},\"SPATIAL_SCRAMBLER\":{\"name\":\"Spatial Scrambler\",\"desc\":\"Randomly rearrange all non-King pieces within 3×3 around target.\"},\"EQ_GRAPPLING_HOOK\":{\"name\":\"Grappling Hook\",\"desc\":\"Active: Fire a grappling hook in a direction. Pull yourself to the last empty square before an obstacle. Free action, does not consume your turn.\"}}"),
	skills: JSON.parse("{\"BLACK_HOLE\":{\"name\":\"Black Hole\",\"desc\":\"Permanent void anchors block the center of the board.\"},\"OBSTACLES\":{\"name\":\"Ruins\",\"desc\":\"Impassable barricades are scattered across the board.\"},\"LASER_GRID\":{\"name\":\"Laser Grid\",\"desc\":\"Electrified grid: powered at the start of every odd round, destroying the piece on it. Kings are immune.\"},\"WORMHOLE\":{\"name\":\"Wormhole\",\"desc\":\"A pair of linked teleporters exists on the board; entering one exits the other, unless the exit is occupied.\"},\"NETWORK_JAM\":{\"name\":\"Network Jam\",\"desc\":\"Signal interference affects the entire board.\"},\"FOG_OF_WAR\":{\"name\":\"Fog of War\",\"desc\":\"Unexplored areas are hidden.\"},\"quantumCountdown\":\"Quantum Swap in: {n} Turns\",\"erasureReady\":\"Orbital Cannon: READY\",\"erasureCharging\":\"Orbital Cannon Charging: {n} Turns\",\"PAWN_PATROL\":{\"name\":\"Patrol\",\"desc\":\"Allows horizontal movement 1 sq (no capture).\"},\"PAWN_FRONTAL_SPIKE\":{\"name\":\"Frontal Spike\",\"desc\":\"Allows capture when moving 1 sq forward.\"},\"PAWN_BACKSTEP\":{\"name\":\"Backstep\",\"desc\":\"Allows diagonal backward move 1 sq (no capture).\"},\"PAWN_RESOURCEFUL\":{\"name\":\"Resourceful\",\"desc\":\"30% chance to return to reserve on death.\"},\"PAWN_VENGEANCE\":{\"name\":\"Vengeance\",\"desc\":\"Freeze a random enemy for 2 turns on death.\"},\"PAWN_ASSASSIN\":{\"name\":\"Assassin Code\",\"desc\":\"Evolve into Knight/Bishop/Rook when capturing Queen/Rook.\"},\"PAWN_PROMOTE\":{\"name\":\"Promotion Path\",\"desc\":\"Level up on each capture; at Level 5, evolve on the next kill.\"},\"PAWN_SIGNAL_TOWER\":{\"name\":\"Signal Tower\",\"desc\":\"Cannot move when disconnected, but provide network to adjacent allies.\"},\"PAWN_PHALANX\":{\"name\":\"Phalanx\",\"desc\":\"Immune to capture by enemy Pawns or Knights when adjacent to an ally Pawn on left or right.\"},\"PAWN_DETONATOR\":{\"name\":\"Detonator\",\"desc\":\"Explode on death, destroying all non-Kings in 3x3 area.\"},\"PAWN_RELAY\":{\"name\":\"Relay Station\",\"desc\":\"Extend network range to 2 squares.\"},\"PAWN_SACRIFICE\":{\"name\":\"Sacrificial Pact\",\"desc\":\"Get 2 extra saves and spawn a Pawn near King on death.\"},\"PAWN_INTERLOCK\":{\"name\":\"Interlock Armor\",\"desc\":\"Invulnerable to Queen/Rook if adjacent to an ally.\"},\"PAWN_PARASITE\":{\"name\":\"Parasite Algorithm\",\"desc\":\"Freeze adjacent enemies for 1 turn after moving.\"},\"PAWN_SWARM\":{\"name\":\"Pawn Chain\",\"desc\":\"If one Swarm Pawn is networked, all Pawns are networked.\"},\"PAWN_OMEGA_MIRROR\":{\"name\":\"Omega Mirror\",\"desc\":\"Mirror movement of any networked non-Pawn ally.\"},\"PAWN_SATELLITE\":{\"name\":\"Satellite Link\",\"desc\":\"Always networked; acts as a Proxy King.\"},\"PAWN_CHARGER\":{\"name\":\"Charger\",\"desc\":\"Allows the Pawn to move forward 2 squares from any position (no capture, no jumping).\"},\"KNIGHT_QUICK_ROUTING\":{\"name\":\"Quick Routing\",\"desc\":\"Can move even if frozen, but only to currently networked squares.\"},\"KNIGHT_CROSS_JUMP\":{\"name\":\"Cross Jump\",\"desc\":\"After jump without capture, can move 1 sq orthogonally.\"},\"KNIGHT_HOT_SWAP\":{\"name\":\"Hot Swap\",\"desc\":\"Jump to an allied Pawn and swap positions with it.\"},\"KNIGHT_SIDE_STEP\":{\"name\":\"Side-Step\",\"desc\":\"Allow the Knight to move 1 square horizontally or vertically to an empty square.\"},\"KNIGHT_SCAVENGER\":{\"name\":\"Scavenger\",\"desc\":\"Jump into enemy control zone to gain 1 gold.\"},\"KNIGHT_TRAMPLE\":{\"name\":\"Trample\",\"desc\":\"Path of jump has a 50% chance to freeze passed enemies for 1 turn.\"},\"KNIGHT_GHOST\":{\"name\":\"Offline Protocol\",\"desc\":\"Allows the Knight to move freely even when disconnected from the network (Frozen).\"},\"KNIGHT_HIT_AND_RUN\":{\"name\":\"Ricochet Boomerang\",\"desc\":\"Active: Throw a blade to kill an enemy within knight L-shaped range (cannot target the King). The blade then ricochets to kill a random adjacent (cross-direction) enemy. Cooldown: 3 turns.\"},\"KNIGHT_MIRAGE\":{\"name\":\"Mirage\",\"desc\":\"On death, if an allied pawn is nearby, swap with it. Pawn dies instead.\"},\"KNIGHT_GRAVITY_WELL\":{\"name\":\"Gravity Well\",\"desc\":\"Freeze adjacent enemies for 1 turn after moving.\"},\"KNIGHT_TROJAN\":{\"name\":\"Trojan\",\"desc\":\"Spawn 2 allied Pawns nearby when captured.\"},\"KNIGHT_FULL_DUPLEX\":{\"name\":\"Plug and Play\",\"desc\":\"When deployed, turn does not end. Move any friendly piece.\"},\"KNIGHT_CHAIN\":{\"name\":\"Chain Lightning\",\"desc\":\"After capturing, the turn does not end, jump again.\"},\"KNIGHT_RIFT\":{\"name\":\"Rift\",\"desc\":\"Carry an adjacent friendly piece to an empty square near landing.\"},\"KNIGHT_MIDAS_TOUCH\":{\"name\":\"Midas Touch\",\"desc\":\"Jump generates gold by distance. Capturing Q/R grants equipment.\"},\"KNIGHT_TROJAN_KERNEL\":{\"name\":\"Trojan Kernel\",\"desc\":\"Gain a Pawn in reserve when capturing a Queen or Rook.\"},\"KNIGHT_AURA\":{\"name\":\"Knight Aura\",\"desc\":\"While Knight is networked, adjacent allied Pawns gain orthogonal movement.\"},\"KNIGHT_SUPLEX\":{\"name\":\"Suplex\",\"desc\":\"Active: Grab an adjacent enemy and fling them to the symmetric square behind you. If the landing square is occupied, both pieces are destroyed.\"},\"BISHOP_REFRACTION\":{\"name\":\"Refraction\",\"desc\":\"Hit edge, reflect 90 degrees and slide 1 sq.\"},\"BISHOP_MIRROR\":{\"name\":\"Mirror\",\"desc\":\"Swap positions with another allied Bishop on the same diagonal.\"},\"BISHOP_PHASE_SHIFT\":{\"name\":\"Phase Shift\",\"desc\":\"Move 1 square horizontally or vertically like a Rook (no capture).\"},\"BISHOP_AFTERSHOCK\":{\"name\":\"Aftershock\",\"desc\":\"After capture, adjacent empty squares become aftershock zones for 2 turns, preventing enemy deployment.\"},\"BISHOP_PIERCE\":{\"name\":\"Pierce\",\"desc\":\"Can pierce exactly one friendly piece to move or attack.\"},\"BISHOP_HOLY_LAND\":{\"name\":\"Holy Land\",\"desc\":\"Diagonal squares are treated as controlled zones (ignoring blocking). Allied pieces deployed there gain 1 turn of temporary network (immune to freeze).\"},\"BISHOP_MIRROR_RESONANCE\":{\"name\":\"Mirror Resonance\",\"desc\":\"When another friendly Bishop is visible on a diagonal (unblocked line-of-sight), this piece is always considered networked regardless of the other's status, and can provide network connections outward like a normal networked piece.\"},\"BISHOP_RECALL\":{\"name\":\"Recall\",\"desc\":\"Active: withdraw this piece to reserve.\"},\"BISHOP_CONDUIT\":{\"name\":\"Conduit\",\"desc\":\"If connected, all allies on diagonal are connected even through blocking pieces.\"},\"BISHOP_SILENCE\":{\"name\":\"Silence\",\"desc\":\"After move, seal skills of all enemies on diagonal.\"},\"BISHOP_OPTICAL_BLIND_ZONE\":{\"name\":\"Optical Blind Zone\",\"desc\":\"Immune to straight-line capture (Rooks/Queens).\"},\"BISHOP_RESURRECTION\":{\"name\":\"Resurrection\",\"desc\":\"Return a random fallen ally to reserve on capture.\"},\"BISHOP_AURORA\":{\"name\":\"Aurora\",\"desc\":\"Active: Destroy any enemy on diagonal without moving.\"},\"BISHOP_ABSOLUTE_BARRIER\":{\"name\":\"Absolute Barrier\",\"desc\":\"Enemy units cannot stay on this Bishop's diagonal controlled squares unless capturing.\"},\"ROOK_VAULT\":{\"name\":\"Vault\",\"desc\":\"Allows jumping over the first obstacle in a path.\"},\"ROOK_RAILWAY\":{\"name\":\"Railway\",\"desc\":\"Leaves a trail that grants +1 movement to allied Pawns.\"},\"ROOK_PRESS\":{\"name\":\"Press\",\"desc\":\"Enemy Pawns on the same line are suppressed and cannot move.\"},\"ROOK_AEGIS\":{\"name\":\"Aegis\",\"desc\":\"If adjacent to King, grants King immunity to ranged attacks.\"},\"ROOK_BASTION\":{\"name\":\"Bastion\",\"desc\":\"Active: Toggle Bastion mode. Cannot move, but protects adjacent allies.\"},\"ROOK_HEAVY_ARMOR\":{\"name\":\"Heavy Armor\",\"desc\":\"Cannot be captured by enemy Pawns or Knights.\"},\"ROOK_SWEEPER\":{\"name\":\"Sweeper\",\"desc\":\"Freezes adjacent enemies for 1 turn when passing by.\"},\"ROOK_MAGNET\":{\"name\":\"Magnet\",\"desc\":\"Active: Pull an allied piece in line to an adjacent square.\"},\"ROOK_CARRIER\":{\"name\":\"Carrier\",\"desc\":\"Can carry flattened pieces in the same square when moving.\"},\"ROOK_CATAPULT\":{\"name\":\"Catapult\",\"desc\":\"Active: Launch an adjacent allied Pawn to the furthest empty square in line.\"},\"ROOK_TRACTOR_BEAM\":{\"name\":\"Tractor Beam\",\"desc\":\"Active: Pull the first piece beyond 3 squares in line 1 square closer (Steady immune).\"},\"ROOK_SHOCKWAVE\":{\"name\":\"Shockwave\",\"desc\":\"Active: Push the first piece within 3 squares in line 1 square away. Collision kills both; flattened ally stacks instead (Steady immune).\"},\"ROOK_FORBIDDEN_ZONE\":{\"name\":\"Forbidden Zone\",\"desc\":\"Enemy pieces on the Rook's row or column have their movement reduced to 1.\"},\"ROOK_ION_CANNON\":{\"name\":\"Ion Cannon\",\"desc\":\"Active: Destroy all non-King units in a straight line (Cooldown: 5).\"},\"ROOK_IRON_CURTAIN\":{\"name\":\"Iron Curtain\",\"desc\":\"Active: Lock the Rook's entire row for 2 turns; enemy Rooks/Bishops/Queens/Pawns cannot enter or cross that row (Knights and Kings unaffected). Cooldown: 3.\"},\"ROOK_COVER\":{\"name\":\"Cover\",\"desc\":\"While connected, adjacent allied Pawns gain a Shield at the start of next turn (cooldown after breaking).\"},\"ROOK_CONCUSSION\":{\"name\":\"Concussion\",\"desc\":\"After moving more than 3 squares, freeze adjacent enemy Pawns for 1 turn.\"},\"ROOK_SUPPLY_STATION\":{\"name\":\"Supply Station\",\"desc\":\"Movement path becomes Supply Depots (2 turns): Allies deploying here refund 5 Gold (Limit 30G per level). Cannot override existing special tiles.\"},\"QUEEN_COMMAND\":{\"name\":\"Command\",\"desc\":\"Adjacent allies gain omnidirectional 1-square movement. If no allies nearby, gain 1 gold.\"},\"QUEEN_AURA\":{\"name\":\"Aura\",\"desc\":\"Enemy Rooks and Bishops within 2 squares are limited to 2 movement.\"},\"QUEEN_PROVISION\":{\"name\":\"Provision\",\"desc\":\"Generates 2 gold per turn if connected.\"},\"QUEEN_GRACE\":{\"name\":\"Grace\",\"desc\":\"After a capture, gain an extra move if landing in enemy control zone.\"},\"QUEEN_DOMINATE\":{\"name\":\"Dominate\",\"desc\":\"Adjacent enemies are silenced, losing non-basic skills.\"},\"QUEEN_DECOY\":{\"name\":\"Decoy\",\"desc\":\"On death, consume a Pawn from reserve to survive and teleport.\"},\"QUEEN_LINKAGE\":{\"name\":\"Linkage\",\"desc\":\"When deployed, automatically deploys up to two Pawns nearby.\"},\"QUEEN_BRIBE\":{\"name\":\"Bribe\",\"desc\":\"50% chance to convert captured enemy Pawns to your reserve.\"},\"QUEEN_MULTICAST\":{\"name\":\"Multicast\",\"desc\":\"If moving without capturing while connected, can move again.\"},\"QUEEN_INSIGHT\":{\"name\":\"Insight\",\"desc\":\"Reveals all enemy invisible units while on the board.\"},\"QUEEN_RECALL\":{\"name\":\"Recall\",\"desc\":\"Active: Teleport back to an empty square adjacent to King (Cooldown: 3).\"},\"QUEEN_TIME_WARP\":{\"name\":\"Time Warp\",\"desc\":\"Every 5 turns, gain a free Undo charge.\"},\"QUEEN_NEMESIS\":{\"name\":\"Nemesis\",\"desc\":\"When King is in check, Queen gains infinite penetrating movement.\"},\"QUEEN_ROOK_AUTHORITY\":{\"name\":\"Rook Authority\",\"desc\":\"If Queen is networked, the nearest allied Rook is forced to be networked.\"},\"QUEEN_BISHOP_AUTHORITY\":{\"name\":\"Bishop Authority\",\"desc\":\"If Queen is networked, the nearest allied Bishop is forced to be networked.\"},\"KING_CHARISMA\":{\"name\":\"Charisma\",\"desc\":\"Pawns within 2 squares gain Queen-like movement up to 2 squares.\"},\"KING_RADIATION\":{\"name\":\"Radiation\",\"desc\":\"Initial network connection range increased to 2 squares.\"},\"KING_STEADY\":{\"name\":\"Steady\",\"desc\":\"Immune to forced displacement abilities.\"},\"KING_REWARD\":{\"name\":\"Reward\",\"desc\":\"Allies capturing within 2 squares generate 5 extra gold.\"},\"KING_FORTIFY\":{\"name\":\"Fortify\",\"desc\":\"If adjacent to a friendly Rook, immune to Pawns and Knights.\"},\"KING_BACKUP\":{\"name\":\"Backup Power\",\"desc\":\"If no adjacent units, can connect to the nearest allied pieces within 3 squares.\"},\"KING_OVERSEER\":{\"name\":\"Overseer\",\"desc\":\"When 5+ allied pieces (excluding King) are networked, gain 2 gold per turn (Max 40 gold).\"},\"KING_ROYAL_GUARD\":{\"name\":\"Royal Guard\",\"desc\":\"Active: Spend 10 gold to spawn a Pawn nearby (temporary for this level).\"},\"KING_TAXATION\":{\"name\":\"Taxation\",\"desc\":\"Whenever a friendly piece is captured, generate 15 gold.\"},\"KING_SWAP\":{\"name\":\"Swap\",\"desc\":\"Active: Swap positions with any friendly piece within 2 squares.\"},\"KING_REFLECTION\":{\"name\":\"Reflection Shield\",\"desc\":\"Enemies capturing an ally within 1 square are destroyed instantly.\"},\"KING_COMMANDER\":{\"name\":\"Commander\",\"desc\":\"Knights within 2 squares of the King freeze 1 nearest enemy upon landing.\"},\"KING_GRAND_CASTLE\":{\"name\":\"Grand Castle\",\"desc\":\"Active: Swap position with any friendly Rook anywhere on the board.\"},\"KING_SOUL_LINK\":{\"name\":\"Soul Link\",\"desc\":\"On death, if a Level 1 Pawn exists, it transforms into the new King.\"},\"KING_HOLY_DOMAIN\":{\"name\":\"Holy Domain\",\"desc\":\"Allies within 2 squares are immune to all negative status effects.\"},\"KING_STASIS\":{\"name\":\"Stasis\",\"desc\":\"Active: Petrify all non-King units within 3 squares indefinitely (Once per battle).\"},\"KING_ROYAL_PATH\":{\"name\":\"Royal Path\",\"desc\":\"If row and col are clear of enemies, King can move 2 squares (no capture).\"},\"KING_LOGISTICS\":{\"name\":\"Logistics\",\"desc\":\"Deploying any piece adjacent to the King immediately refunds 3 Gold.\"},\"KING_DECOY_DOUBLE\":{\"name\":\"Shadow Double\",\"desc\":\"Leaves a Decoy Terminal behind after moving.\"},\"KING_MARTYRDOM\":{\"name\":\"Martyrdom\",\"desc\":\"On death, if reserve is empty and allies exist, absorb allies, explode 5x5, and revive.\"},\"KING_ROYAL_DECORATION\":{\"name\":\"Royal Decoration\",\"desc\":\"At the start of turn, grant a random common skill to an adjacent allied Pawn without skills.\"},\"GENERIC_ALGORITHM_SWAP\":{\"name\":\"Algorithm Swap\",\"desc\":\"Active: Swap positions with any non-King ally within 1 square.\"},\"GENERIC_BACKUP_BUFFER\":{\"name\":\"Backup Buffer\",\"desc\":\"When disconnected, delays freezing by 1 turn.\"},\"GENERIC_RAPID_DEPLOY\":{\"name\":\"Rapid Deploy\",\"desc\":\"10% chance to not consume a turn when deployed.\"},\"GENERIC_COATING\":{\"name\":\"Coating\",\"desc\":\"Immune to environmental debuffs like Gravity Traps or Infection.\"},\"GENERIC_SHARPEN\":{\"name\":\"Sharpen\",\"desc\":\"Gain 3 extra gold on a successful capture.\"},\"GENERIC_CHAFF\":{\"name\":\"Chaff\",\"desc\":\"When attacked, 50% chance to dodge and teleport to an adjacent empty square.\"},\"GENERIC_RECALL\":{\"name\":\"Recall\",\"desc\":\"Active: Withdraw this piece back to the reserve.\"},\"GENERIC_LOGIC_LOCK\":{\"name\":\"Logic Lock\",\"desc\":\"Non-King enemies in attack range are Silenced (cannot use active skills).\"},\"GENERIC_MIRRORING\":{\"name\":\"Mirroring\",\"desc\":\"Copy the base movement of an adjacent ally.\"},\"GENERIC_PARASITE\":{\"name\":\"Parasite\",\"desc\":\"On death, attach to the attacker, causing a 50% chance to freeze them each turn.\"},\"GENERIC_HIVE_KERNEL\":{\"name\":\"Sync Protocol\",\"desc\":\"If this piece is connected, all pieces of the same type are connected.\"},\"GENERIC_FIREWALL\":{\"name\":\"Firewall\",\"desc\":\"Passive: Limits maximum movement distance to 3 squares. Immune to remote capture, forced displacement, color change, or silence. Kings cannot equip\"},\"GENERIC_INTIMIDATION\":{\"name\":\"Intimidation\",\"desc\":\"Passive: Enemy Pawns cannot capture this piece.\"},\"GENERIC_LOGIC_BOMB\":{\"name\":\"Logic Bomb\",\"desc\":\"On death, strips positive buffs from attacker and permanently Silences them.\"},\"GENERIC_DATA_MINING\":{\"name\":\"Data Mining\",\"desc\":\"Gain 10 Gold when capturing an enemy piece with skills.\"},\"GENERIC_RECURSIVE_STRIKE\":{\"name\":\"Recursive Strike\",\"desc\":\"After capturing, inherit the victim's movement logic for the next turn.\"},\"GENERIC_SCRAP_RECYCLE\":{\"name\":\"Scrap Recycle\",\"desc\":\"Gain 1 Gold when moving without capturing (Max 10G per level).\"},\"GENERIC_ABSOLUTE_REQUISITION\":{\"name\":\"Absolute Requisition\",\"desc\":\"Active: Spend 10 Gold to destroy a disconnected enemy unit (non-King, non-Queen) within range and recover its value.\"},\"AURA_REWARD\":{\"name\":\"Reward Aura\",\"desc\":\"Gain extra 5 Gold on capture.\"},\"AURA_SUPPRESSED\":{\"name\":\"Suppression Aura\",\"desc\":\"Movement range is limited.\"},\"BACKUP_BUFFER_ACTIVE\":{\"name\":\"Backup Battery Active\",\"desc\":\"Temporarily ignore disconnection.\"},\"BISHOP_CONVERSION\":{\"name\":\"Baptism\",\"desc\":\"Active: Permanently convert an adjacent enemy Pawn. Bishop is destroyed.\"},\"BISHOP_HOLY_LIGHT\":{\"name\":\"Holy Light\",\"desc\":\"Clear negative statuses of adjacent allies at start of turn.\"},\"BISHOP_PENETRATION\":{\"name\":\"Penetration\",\"desc\":\"Can slide through one enemy piece (cannot slide through allies or capture two).\"},\"BISHOP_SACRED_ZONE\":{\"name\":\"Sacred Zone\",\"desc\":\"Enemies on the same diagonal are frozen for 1 turn.\"},\"BISHOP_ZEALOT\":{\"name\":\"Zealot\",\"desc\":\"If a capture is made, gain infinite sliding movement (like Queen) next turn.\"},\"BISHOP_SHADOW_SWAP\":{\"name\":\"Shadow Swap\",\"desc\":\"Active: Swap positions with an enemy piece on the same diagonal (must have line of sight). The target is Frozen for 1 turn.\"},\"CHARISMA_BUFF\":{\"name\":\"Charisma Buff\",\"desc\":\"Gain 2-square omnidirectional sliding movement.\"},\"COMMANDER_AURA\":{\"name\":\"Commander Aura\",\"desc\":\"Freeze 1 nearest enemy upon landing.\"},\"COMMAND_AURA\":{\"name\":\"Command Aura\",\"desc\":\"Gain 1-square omnidirectional movement.\"},\"GODHOOD_LINK\":{\"name\":\"Divine Link\",\"desc\":\"Forced to be connected by Absolute Godhood.\"},\"HOLY_DOMAIN_AURA\":{\"name\":\"Holy Domain Aura\",\"desc\":\"Immune to all negative status effects.\"},\"INFECTED\":{\"name\":\"Infected\",\"desc\":\"Spreads each turn. Consumes gold if networked.\"},\"IRON_CURTAIN\":{\"name\":\"Iron Curtain\",\"desc\":\"Iron Curtain square: only the curtain's owner may enter; enemy pieces are blocked.\"},\"KNIGHT_CHARGE\":{\"name\":\"Charge\",\"desc\":\"Freeze enemy Pawns adjacent to landing spot for 1 turn on jump capture.\"},\"KNIGHT_PHANTOM_STRIKE\":{\"name\":\"Phantom Strike\",\"desc\":\"Can perform \\\"remote capture\\\" ignoring obstacles, but must return to origin.\"},\"KNIGHT_SABOTAGE\":{\"name\":\"Sabotage\",\"desc\":\"Destroy enemy traps and square effects adjacent to landing spot.\"},\"KNIGHT_VALIANT\":{\"name\":\"Valiant\",\"desc\":\"Gain a shield if landing with no allies nearby after capture.\"},\"PARASITIZED\":{\"name\":\"Parasitized\",\"desc\":\"50% chance to disconnect/freeze each turn.\"},\"PAWN_TRAITOR\":{\"name\":\"Traitor\",\"desc\":\"On death, 50% chance to convert attacker (non-King) and apply Betrayed for 1 turn.\"},\"PAWN_VANGUARD\":{\"name\":\"Vanguard\",\"desc\":\"Always networked while in enemy half.\"},\"RAILWAY_BUFF\":{\"name\":\"Railway Boost\",\"desc\":\"Pawns on railway gain +1 movement.\"},\"REFLECTION_AURA\":{\"name\":\"Reflection Aura\",\"desc\":\"Damage attacker upon capture.\"},\"SQUARE_BASTION_FIELD\":{\"name\":\"Bastion Field\",\"desc\":\"Provides ranged attack immunity to allies on this square.\"},\"SQUARE_RAILWAY\":{\"name\":\"Railway (Square)\",\"desc\":\"Railway square: a pawn standing here may advance two squares straight forward (the orientation metadata is unused).\"},\"TAXATION_AURA\":{\"name\":\"Taxation Aura\",\"desc\":\"Generate 15 Gold upon death.\"},\"ZEALOT_BUFF\":{\"name\":\"Zealot Buff\",\"desc\":\"Gain sliding movement capability.\"},\"BETRAYED\":{\"name\":\"Betrayed\",\"desc\":\"Temporarily converted. Will return to original color after 1 turn.\"},\"SMOKE\":{\"name\":\"Smoke\",\"desc\":\"Provides immunity to remote linear attacks.\"},\"SQ_AFTERIMAGE\":{\"name\":\"Afterimage\",\"desc\":\"Afterimage: the Blood Dress queen leaves a 3-turn afterimage where she captured; she may move to it from any distance.\"},\"FROZEN_TRAP\":{\"name\":\"Frozen Trap\",\"desc\":\"Freezes any unit that enters.\"},\"VOID_FISSURE_SQUARE\":{\"name\":\"Void Fissure\",\"desc\":\"The fabric of space is torn. This square is permanently impassable.\"},\"SUPPLY_DEPOT_SQUARE\":{\"name\":\"Supply Depot\",\"desc\":\"Supply square: with your supply rook on the board, deploying here refunds 5 Gold, up to 30 Gold per run.\"},\"VOID_ANCHOR\":{\"name\":\"Void Anchor\",\"desc\":\"Space is locked. Movement and deployment on this square are disabled.\"},\"BARRICADE\":{\"name\":\"Barricade\",\"desc\":\"A physical obstruction that blocks all movement.\"},\"JAMMING_TOWER\":{\"name\":\"Signal Tower\",\"desc\":\"A permanent signal emitter that acts as a network source.\"},\"HOLY_LAND\":{\"name\":\"Holy Land\",\"desc\":\"Sanctified ground that allows direct unit deployment regardless of typical range.\"},\"LOUIS_ABSOLUTE_CORONA\":{\"name\":\"Absolute Corona\",\"desc\":\"The King radiates a massive 5x5 network, but his signal is too pure to be relayed by others. Allies must stay close to the Sun.\"},\"QUEEN_MOVE\":{\"name\":\"Royal Might\",\"desc\":\"The King has cast off his physical burdens, gaining the peerless mobility of a Queen.\"},\"RICHARD_FORWARD_ONLY\":{\"name\":\"One-Way Crusade\",\"desc\":\"Faith only looks forward. The King's network signal only propagates towards the enemy backline.\"},\"BOSS_PERMISSION_DENIED\":{\"name\":\"Permission Denied\",\"desc\":\"BOSS randomly disables one type of piece every 3 turns.\"},\"BOSS_PACIFISM\":{\"name\":\"Pacifism Protocol\",\"desc\":\"Capture action is disabled for both sides for the first 5 turns.\"},\"INVULNERABLE\":{\"name\":\"Invulnerable\",\"desc\":\"Absolute immunity to all damage.\"},\"BOSS_ECHO_CHAMBER\":{\"name\":\"Echo Chamber\",\"desc\":\"Hides piece attributes, skills, and equipment.\"},\"BOSS_BOARD_ROTATION\":{\"name\":\"Board Rotation\",\"desc\":\"Every 4 turns, rotates all pieces 90 degrees clockwise.\"},\"BOSS_QUANTUM_MIRAGE\":{\"name\":\"Quantum Mirage\",\"desc\":\"Swaps with a random enemy to survive fatal blows.\"},\"BOSS_WARP_STORM\":{\"name\":\"Warp Storm\",\"desc\":\"Randomly generates portals that teleport units.\"},\"BOSS_MUTINY\":{\"name\":\"Mutiny Override\",\"desc\":\"Randomly converts one allied piece every 6 turns.\"},\"BOSS_NECROMANCER\":{\"name\":\"Necromancer\",\"desc\":\"Revives fallen player pieces as enemy zombies.\"},\"ZOMBIE_DECAY\":{\"name\":\"Zombie Decay\",\"desc\":\"Dies naturally after one action.\"},\"BOSS_MIRROR_MATCH\":{\"name\":\"Mirror Match\",\"desc\":\"BOSS summons a mirror copy of your starting roster.\"},\"BOSS_HIVE_MOTHER\":{\"name\":\"Hive Mother\",\"desc\":\"Spawns eggs that hatch into powerful units if not destroyed.\"},\"EGG_HATCH\":{\"name\":\"Alien Egg\",\"desc\":\"Hatching soon...\"},\"BOSS_ENRAGE\":{\"name\":\"Enrage Timer\",\"desc\":\"Acts twice every 4 turns.\"},\"BOSS_MASS_ERASURE\":{\"name\":\"Orbital Bombardment\",\"desc\":\"Every 5 turns, strikes a random 3x3 area; the target lights up as a danger zone two turns before impact.\"},\"BOSS_QUANTUM_SWAP\":{\"name\":\"Quantum Entanglement\",\"desc\":\"Swaps two random white pieces every 5 turns.\"},\"BOSS_SENTINEL\":{\"name\":\"Patrol Sentinel\",\"desc\":\"Invulnerable unit that patrols in a clockwise loop, destroying anything it hits.\"},\"SQUARE_LASER_GRID\":{\"name\":\"Laser Grid\",\"desc\":\"Laser grid: powered at the start of every odd round, destroying the piece on it. Kings are immune.\"},\"ANTI_PAWN_MINE\":{\"name\":\"Anti-Pawn Mine\",\"desc\":\"Anti-pawn mine: only pawns trigger it, destroying everything in the surrounding 3x3 (kings are immune) and consuming the mine.\"},\"TIME_ANOMALY\":{\"name\":\"Time Anomaly\",\"desc\":\"Exiles units for 3 turns upon entry.\"},\"ICE_SLICK\":{\"name\":\"Ice Slick\",\"desc\":\"Forces units to slide until hitting an obstacle or edge.\"},\"WORMHOLE_A\":{\"name\":\"Wormhole A\",\"desc\":\"Enter A to exit from B. Nothing happens if B is occupied.\"},\"WORMHOLE_B\":{\"name\":\"Wormhole B\",\"desc\":\"Enter B to exit from A. Nothing happens if A is occupied.\"},\"MUD_SWAMP\":{\"name\":\"Mud/Swamp\",\"desc\":\"Mud: sliding pieces (queen/rook/bishop) may enter but cannot keep moving; knights and pawns are unaffected.\"},\"CONVEYOR_BELT\":{\"name\":\"Conveyor Belt\",\"desc\":\"At the start of White's turn, forces the unit above to move in the arrow's direction. If moved off-board or into another unit, they are destroyed.\"},\"OVERCLOCK_NODE\":{\"name\":\"Overclock Node\",\"desc\":\"Overclock node: at turn start every skill cooldown on the piece standing here is cleared.\"},\"DATA_VAULT\":{\"name\":\"Data Vault\",\"desc\":\"Generates 3 Gold per turn for the occupying unit.\"},\"SIGNAL_RELAY\":{\"name\":\"Signal Relay\",\"desc\":\"Unit occupying this tile automatically becomes a network source.\"},\"FARADAY_CAGE\":{\"name\":\"Faraday Cage\",\"desc\":\"Faraday cage: a piece entering is frozen for 2 turns, and any piece still standing here at turn start is frozen again.\"},\"PAWN_UNSTABLE_CORE\":{\"name\":\"Unstable Core\",\"desc\":\"Triggers a massive 5x5 explosion on death. Capturing has a 50% chance to detonate self and trigger a chain reaction of corpse explosions. Destroys everything, friend or foe.\"},\"ROOK_VOID_FISSURE\":{\"name\":\"Void Fissure Cannon\",\"desc\":\"Active: Destroy the first target in a straight line and permanently ruin that square (3 times per game, Cooldown: 5 turns).\"},\"ROOK_EJECTION\":{\"name\":\"Ejection\",\"desc\":\"Active: Launch an adjacent allied Pawn in a cross direction to the furthest empty square.\"},\"ROOK_SUPPLY_DEPOT\":{\"name\":\"Supply Station\",\"desc\":\"Movement path becomes Supply Depots (2 turns): Allies deploying here refund 5 Gold (Limit 30G per game). Cannot override existing special tiles.\"},\"QUEEN_CORONATION\":{\"name\":\"Royal Coronation\",\"desc\":\"At the start of the turn, grant a random common skill to an adjacent allied Pawn without skills.\"},\"QUEEN_GRAVITY_WELL\":{\"name\":\"Gravity Well\",\"desc\":\"If there are no more than 2 adjacent enemies, they will be locked by gravity, limiting their movement range to 1 square.\"},\"QUEEN_REQUISITION\":{\"name\":\"Absolute Requisition\",\"desc\":\"Active: Spend 10 Gold to directly destroy a disconnected enemy unit (non-King, non-Queen) within range, and recover its value.\"},\"EQ_HOOF_ARMOR\":{\"name\":\"Hoof Armor\",\"desc\":\"If there is an enemy Pawn at the landing spot of a jump, capture it directly and gain an extra move this turn.\"}}"),
	battleLogs: {
		LOG_CHECKMATE_PURGED: "CHECKMATE: NETWORK PARALYZED!",
		LOG_SWALLOW_GOODBYE: "\"Goodbye, Swallow.\"",
		LOG_DAIZONG_MOVE: "\"My mind is made up, move forward!\"",
		LOG_DAIZONG_GUARD: "\"Protect the Emperor immediately!\"",
		LOG_DAIZONG_CAPTURED: "\"The Emperor has been captured!\"",
		LOG_LOUIS_CORONA_DIMMED: "\"Divine right shaken: The Corona dims!\"",
		LOG_QUANTUM_SWAP: "Quantum Swap",
		LOG_PERMISSION_DENIED: "Permission Tampered: Disabling {banned}",
		LOG_BOARD_ROTATION: "Board Rotating!",
		LOG_QUANTUM_MIRAGE: "Quantum Mirage Substitute!",
		LOG_TELEPORT: "Teleport",
		LOG_WARP_STORM: "Warp Storm Teleport",
		LOG_MUTINY: "Mutiny Protocol",
		LOG_NECRO_REVIVE: "Necrotic Rebirth",
		LOG_EGG_HATCHED: "Hatched!",
		LOG_EGG_HATCHING: "Hatching in {count}",
		LOG_ENRAGE_THRESHOLD: "Enrage Threshold! Continuous Action",
		LOG_ENRAGE_DOUBLE: "Enrage: Double Action!",
		LOG_TIME_BANISHED: "Time Banished",
		LOG_TIME_REBIRTH: "Returned",
		LOG_MUD_SWAMP: "Trapped in Mud",
		LOG_FALL_OFF: "Fell off",
		LOG_CRASH: "Crash!",
		LOG_CD_CLEARED: "Cooldown Cleared",
		LOG_GOLD_MINUS: "-{amount}G",
		LOG_GOLD_PLUS: "+{amount}G",
		LOG_RAILGUN_LOCK_50: "Orbital lock detected: Charging 50%",
		LOG_RAILGUN_LOCK_100: "Warning: Orbital Cannon locked! Charging 100% Evacuate!",
		LOG_KING_RANSOM: "\"Massive ransom collected: The King returns!\"",
		LOG_CRUSADE_REWARD: "Crusade +{amount}",
		LOG_UNYIELDING_RECALL: "Unyielding: Recalled",
		LOG_SWALLOW_RESURRECT: "\"Leaden heart shattered: Remaking Swallow!\"",
		LOG_ARTHUR_SHIELD: "\"Oath Resonance: Round Table Shield!\"",
		LOG_TROJAN_BREAK: "\"Trojan Horse broken: Trojan warriors ambush!\"",
		LOG_TROJAN_WAIT: "Trojan lurking ({turns}T)",
		LOG_TROJAN_DEPLOY: "\"Crossing the sea in stealth: Deploying Trojan!\"",
		LOG_SUPPLY_DEPOT: "+5G Supply",
		LOG_NO_SPACE: "No space around",
		LOG_NO_FUNDS: "Insufficient gold",
		LOG_GUARD_SPAWN: "Guard spawned",
		LOG_TAXATION_REWARD: "Pension +15",
		LOG_SWAP: "Swap",
		LOG_CASTLING: "Castling",
		LOG_SOUL_LINK: "Soul link: Succession of the Throne!",
		LOG_ALREADY_USED: "Already used",
		LOG_STASIS_LOCK: "Stasis Locked!",
		LOG_LOGISTICS_REWARD: "Logistics +3",
		LOG_DECOY_TERMINAL: "Decoy Terminal",
		LOG_MARTYRDOM: "Final Sacrifice: Rebirth!",
		LOG_GRACE: "Graceful Steps",
		LOG_DECOY_DEATH: "Decoy Substitute",
		LOG_BRIBE_SUCCESS: "Bribe Successful",
		LOG_MIRROR_MULTICAST: "Mirror Double-Action",
		LOG_TACTICAL_RECALL: "Tactical Retreat",
		LOG_NO_EMPTY_KING: "No space near King",
		LOG_TIME_WARP: "Time Warp: +1 Undo",
		LOG_ROOK_LINK: "Divine Link: Rook",
		LOG_BISHOP_LINK: "Divine Link: Bishop",
		LOG_GRAVITY_WELL: "Gravity Well Active",
		LOG_CORONATION: "Coronated: {skill}",
		LOG_REQUISITION_SUCCESS: "Requisition Successful",
		LOG_ENTER_BASTION: "Entering Bastion",
		LOG_EXIT_BASTION: "Exiting Bastion",
		LOG_MAGNET: "Magnet",
		LOG_EJECTION: "Ejected!",
		LOG_CATAPULT: "Catapulted!",
		LOG_ION_CANNON: "Orbital Cannon",
		LOG_IRON_CURTAIN: "Iron Curtain",
		LOG_VOID_FISSURE_REMAINING: "Void Fissure! {remaining} uses left",
		LOG_VOID_FISSURE_EMPTY: "Void Fissure! Ammo depleted",
		LOG_TOW_HOOK_DRAG: "Towed!",
		LOG_TOW_HOOK_KILL: "Tow Hook Kill",
		LOG_TRACTOR_PULL: "Pulled",
		LOG_SHOCKWAVE_PUSH: "Pushed",
		LOG_SHOCKWAVE_COLLIDE: "Collision!",
		LOG_RECALLED: "Recalled",
		LOG_ZEALOT: "Zealot!",
		LOG_RESURRECT: "Resurrected: {type}",
		LOG_AURORA: "Aurora Snipe",
		LOG_CROSS_JUMP: "Cross Double-Step",
		LOG_PHANTOM_RETURN: "Phantom Return",
		LOG_TACTICAL_SWAP: "Tactical Swap!",
		LOG_FULL_DUPLEX: "Plug and Play!",
		LOG_FULL_DUPLEX_AI: "AI Plug and Play!",
		LOG_CHAIN_JUMP: "Chain Jump!",
		LOG_CHAIN_JUMP_AI: "AI Chain Jump!",
		LOG_MIRAGE_DEATH: "Mirage Substitute",
		LOG_RIFT_TELEPORT: "Rift Teleport",
		LOG_VENGEANCE_STRIKE: "Vengeance Strike",
		LOG_ASSASSIN_EVOLVE: "Assassin Evolution!",
		LOG_PAWN_EVOLVE: "Pawn Evolution!",
		LOG_CORE_OVERLOAD: "Core Overloaded!",
		LOG_UNDOS_PLUS: "+{amount} Undo",
		LOG_SAVES_PLUS: "+{amount} Save",
		LOG_ALGORITHM_SWAP: "Algorithm Swap",
		LOG_BACKUP_BUFFER: "Backup Battery",
		LOG_RAPID_DEPLOY: "Rapid Deploy: Double Action!",
		LOG_CHAFF_EVADE: "Evaded!",
		LOG_RECALL_SUCCESS: "Recall Successful",
		LOG_PARASITE_INTERFERENCE: "Parasite Interference",
		LOG_LOGIC_BOMB: "Logic Bomb: Sealed!",
		LOG_DATA_MINING: "Data Mining +{amount}",
		LOG_TOWER_BUILT: "Signal tower built",
		LOG_SPYWARE: "Data Stolen +5",
		LOG_TERMINAL_OFFLINE: "TERMINAL OFFLINE",
		LOG_CONVERSION: "Conversion",
		LOG_CLONE_FACTORY: "Clone Factory",
		LOG_HATCH_EGG: "Hatch",
		LOG_OVERLOAD: "Overload",
		LOG_DRAFT_ORDER: "Draft Order",
		LOG_MIDAS: "Midas Touch +30",
		LOG_SACRIFICE_SUCCESS: "Sacrifice Success",
		LOG_ANTENNA_ACTIVE: "Antenna Active!",
		LOG_PRISM_REFLECT: "Prism Reflect!",
		LOG_PHOENIX_REBIRTH: "Phoenix Rebirth",
		LOG_ROYAL_GUARD: "Guardian Sacrifice",
		LOG_ALLOY_BROKEN: "Alloy Broken",
		LOG_TACTICAL_OPS: "Tactical Ops: Extra Move",
		LOG_DIPLOMATIC_INTERCEPT: "Diplomatic Intercept",
		LOG_WHEEL_TRIGGER: "Wheel Trigger: {item}",
		LOG_THRONE_REWARD: "Throne Income +{amount}",
		LOG_HACKER_TERMINAL: "Remote Hack",
		LOG_TRAMPLE: "Trample",
		LOG_GHOST_RIDE: "Ghost Teleport",
		LOG_LEVEL_UP: "LEVEL UP!",
		LOG_SIREN_CRASH: "Siren's Song: Crash!",
		LOG_SIREN_DRIFT: "Siren's Song: Drift",
		LOG_ENERGY_DEPLETED: "Energy Depleted",
		LOG_IMMUNE: "Immune",
		LOG_BLOCKED: "Blocked",
		LOG_INVALID_TARGET: "Invalid target",
		LOG_GOLD_FOIL_CONVERT: "Foil Converted",
		LOG_MIDAS_LOOT: "Golden Hooves Loot: {name}",
		LOG_MIDAS_BAG_FULL: "Equipment bag is full, loot cannot be saved",
		LOG_ASSIMILATED: "Data Assimilated",
		LOG_EMPTY_REQUIRED: "Must be empty square",
		LOG_GRAVITY_LOCKED: "Gravity Locked",
		LOG_SINGULARITY_COLLISION: "Singularity Collision!",
		LOG_FAITH_SIPHON: "Faith Siphon +2G",
		LOG_SPATIAL_SCRAMBLE: "Spatial Scramble",
		LOG_BETRAYED: "Betrayed!",
		LOG_BOOMERANG: "Boomerang!",
		LOG_CHARMED: "Charmed!",
		LOG_COATING_PROTECT: "Coating Protects",
		LOG_DARK_BARGAIN_CURSED: "DARK_BARGAIN: CURSED SECTOR SIGNAL DETECTED",
		LOG_DEPLOY_FAILED: "SIGNAL LOST: DEPLOY BLOCKED",
		LOG_HOLY_BLESSING: "Holy Blessing!",
		LOG_IMMUNE_BLOCKED: "Immune: Blocked",
		LOG_LOOT_BOX_OPEN: "Loot: {item}",
		LOG_NO_ADJACENT_ALLY: "No adjacent ally",
		LOG_RICOCHET: "Ricochet!",
		LOG_SATELLITE_ASCENSION: "Satellite Awakening: New King Ascends!",
		LOG_SHADOW_SWAP: "Shadow Swap!",
		LOG_SKILL_SILENCED: "Silenced",
		LOG_SQUARE_OCCUPIED: "Square occupied",
		LOG_STOLEN: "Stolen!",
		LOG_SUPLEX: "Knight Suplex!",
		LOG_SUPLEX_COLLISION: "Suplex Collision!",
		LOG_SUPLEX_WALL: "Wall Slam!",
		LOG_VENTURE_CAPITAL: "Venture Capital +10"
	},
	unlockRequirements: {
		HAPPY_PRINCE: "[Monopoly]: Accumulate 1000 Gold in a run.",
		ARTHUR: "[Knight's Oath]: Deploy 50 Knights in total.",
		ODYSSEUS: "[Space Warp]: Use swap or teleport 30 times.",
		LOUIS_XIV: "[Sun King]: Connect 10 units in one turn.",
		RICHARD: "[Royal Crusade]: King kills enemy King.",
		PAWN_UNSTABLE_CORE: "[Overload]: Kill 30 enemies with Pawns.",
		PAWN_RELAY: "[March]: Move Pawns 100 times.",
		PAWN_SACRIFICE: "[Expendable]: Lose 20 Pawns.",
		PAWN_INTERLOCK: "[Legion]: Deploy 30 Pawns.",
		PAWN_PARASITE: "[Absolute Zero]: Freeze enemies 50 times.",
		PAWN_TRAITOR: "[Infiltration]: Convert 10 enemies.",
		PAWN_SWARM: "[Swarm Myth]: Have 6+ Pawns alive simultaneously.",
		PAWN_OMEGA_MIRROR: "[Apex Evolution]: Upgrade a Pawn to Level 5.",
		PAWN_SATELLITE: "[Lone Survivor]: Win with disconnected King.",
		KNIGHT_GRAVITY_WELL: "[Cavalry]: Move Knights 50 times.",
		KNIGHT_TROJAN: "[Fallen Knight]: Lose 10 Knights.",
		KNIGHT_FULL_DUPLEX: "[Swift Reaction]: Kill a heavy unit in first 3 turns.",
		KNIGHT_CHAIN: "[Blitzkrieg]: Clear a level in 5 turns.",
		KNIGHT_RIFT: "[Space Rift]: Swap/Teleport 50 times.",
		KNIGHT_MIDAS_TOUCH: "[Midas]: Gain 500 Gold via Midas or scrap.",
		KNIGHT_TROJAN_KERNEL: "[Giant Slayer]: Kill 10 Queens/Rooks with Knights.",
		BISHOP_CONDUIT: "[Bishop March]: Move Bishops 50 times.",
		BISHOP_SILENCE: "[Silencer]: Silence enemies 30 times.",
		BISHOP_OPTICAL_BLIND_ZONE: "[Aegis]: Block 5 attacks with shields.",
		BISHOP_ZEALOT: "[Zealot]: Kill 20 enemies with Bishops.",
		BISHOP_SACRED_ZONE: "[Sacred Stasis]: Freeze enemies 20 times.",
		BISHOP_CONVERSION: "[Leap of Faith]: Move Bishops for 30 squares.",
		BISHOP_RESURRECTION: "[Necromancer]: Trigger revive mechanics 10 times.",
		BISHOP_AURORA: "[Higher Dimension]: Sniper kill from 6+ squares.",
		BISHOP_ABSOLUTE_BARRIER: "[Wall of Sighs]: Resolve Check 20 times.",
		ROOK_MAGNET: "[Gravity]: Force move allies/enemies 10 times.",
		ROOK_CARRIER: "[Heavy Trans]: Move Rooks 50 times.",
		ROOK_EJECTION: "[Deployment]: Deploy 10 Rooks.",
		ROOK_CATAPULT: "[Catapult]: Force move 30 times.",
		ROOK_TRACTOR_BEAM: "[Tractor]: Force move 15 times.",
		ROOK_SHOCKWAVE: "[Shockwave]: Force move 20 times.",
		ROOK_FORBIDDEN_ZONE: "[Flawless]: Win 5 battles without losing a Rook.",
		ROOK_ION_CANNON: "[Orbital Strike]: Move a Rook 7 squares in one turn.",
		ROOK_IRON_CURTAIN: "[Eternal Will]: Block 15 attacks with shields.",
		ROOK_VOID_FISSURE: "[Void Lord]: Survive 20 turns in a BOSS level.",
		QUEEN_MULTICAST: "[Mirror Drill]: Trigger Extra Move 10 times.",
		QUEEN_INSIGHT: "[All-Seeing]: Reveal 10 invisible enemies.",
		QUEEN_RECALL: "[Queen March]: Move Queens 30 times.",
		QUEEN_REQUISITION: "[Plunder]: Gain 50 Gold in one battle.",
		QUEEN_TIME_WARP: "[Time Lord]: Use Undo 100 times.",
		QUEEN_NEMESIS: "[Retribution]: Kill 50 enemies with Queens.",
		QUEEN_GRAVITY_WELL: "[Gravity Master]: Suppress enemies 30 times.",
		KING_DECOY_DOUBLE: "[Shadow]: Move King 50 times.",
		QUEEN_ROOK_AUTHORITY: "[Full Squad]: Have Q, R, B, N on board.",
		QUEEN_BISHOP_AUTHORITY: "[Royal Call]: Deploy 5 Queens.",
		KING_SWAP: "[Castling]: Swap or teleport 20 times.",
		KING_REFLECTION: "[Warrior King]: Kill 5 enemies with King.",
		KING_COMMANDER: "[Restless]: Move King 30 times.",
		KING_GRAND_CASTLE: "[Victory]: Win 10 battles.",
		KING_SOUL_LINK: "[Immortal]: Move King 15 times in one run.",
		KING_HOLY_DOMAIN: "[Purifier]: Cleanse 20 debuffs.",
		KING_STASIS: "[Absolute Zero]: Half the board is frozen.",
		KING_MARTYRDOM: "[Desperate]: Win with lone King and empty reserve.",
		GENERIC_RAPID_DEPLOY: "[Mobilization]: Deploy 50 units.",
		GENERIC_LOGIC_LOCK: "[Hacker]: Silence 20 times.",
		GENERIC_MIRRORING: "[Overdrive]: Trigger Extra Move 20 times.",
		GENERIC_PARASITE: "[System Crash]: Enemy AI skips turn.",
		GENERIC_RECURSIVE_STRIKE: "[Combo Master]: Reach Combo x5.",
		GENERIC_HIVE_KERNEL: "[Hive Mind]: Network 10 units.",
		GENERIC_FIREWALL: "[Last Defense]: Clear Chapter 3.",
		EQ_SHOCK_STIRRUPS: "[Stunner]: Freeze 10 enemies.",
		EQ_BASE_STATION: "[Broadcaster]: Network 8 units.",
		EQ_REACTIVE_ARMOR: "[Iron Wall]: Block 5 attacks with shields.",
		EQ_BLOOD_DRESS: "[Melody of Carnage]: Reach Combo x3.",
		EQ_BOUNTY_MODULE: "[Bounty Hunter]: Gain 200 Gold.",
		EQ_RESCUE_BEACON: "[Survivor]: Evade death 5 times.",
		EQ_FULL_BAND_SCANNER: "[Counter]: Destroy 10 trap squares.",
		EQ_BLACK_MARKET_LEDGER: "[Black Market]: Buy/Get item at 0 Gold.",
		EQ_TOW_HOOK: "[Hooked]: Force move 10 times.",
		EQ_ROYAL_SALUTE: "[Pawn Slayer]: Kill 50 Pawns.",
		SIGNAL_TOWER_DEFENSE: "[Builder]: Build 5 Towers.",
		EQ_HACKER_TERMINAL: "[Logic Hijack]: Freeze Q/R 5 times.",
		EQ_GHOST_RIDE: "[Poltergeist]: Teleport 20 times.",
		EQ_HIVE_CORE: "[Hive]: Max Pawns 4.",
		EQ_TELESCOPIC_LEGS: "[Long Legs]: Move Knights 20 times.",
		EQ_PHOENIX_FEATHER: "[Nirvana]: Evade death 10 times.",
		EQ_SCEPTER_OF_CHARM: "[Charmer]: Betray 10 enemies.",
		EQ_ROYAL_GUARD: "[Loyalty]: Protect King 5 times.",
		EQ_TACTICAL_OPS: "[Clean Setup]: Win without deploying.",
		EQ_DIPLOMATIC_IMMUNITY: "[Lone Wolf]: Win with lone King.",
		EQ_RELIC_OF_KINGS: "[Relic]: Win with lone King.",
		EQ_VENTURE_CAPITAL: "[Capitalist]: Reach 500 Gold.",
		EQ_SWARM_INTELLIGENCE: "[Zerg]: Max Pawns 8.",
		EQ_ARROGANT_CREED: "[Arrogance]: King isolated for 5 turns.",
		EQ_QUEEN_ROOK_LINK: "[QR Link]: Deploy Q and R.",
		EQ_QUEEN_BISHOP_LINK: "[QB Link]: Deploy Q and B.",
		EQ_GOLDEN_THRONE: "[Golden Age]: Max Gold 1000.",
		EQ_DEFLATION: "[Deflation]: Reroll 3 times no buy.",
		OVERCLOCK: "[Overclocker]: Use 10 items.",
		PARDON: "[Mercy]: Win 5 battles.",
		ILLEGAL_SLOT: "[Modder]: Reach Level 3.",
		BLACK_ORDER: "[Smuggler]: Sell 10 items.",
		DRAFT_ORDER: "[Shopper]: Reroll shop 10 times.",
		DOOM_BROADCAST: "[Network Overlord]: All enemies disconnected.",
		ROYAL_SACRIFICE: "[Sacrifice]: Manually remove 5 allies.",
		REAPER_EXE: "[Harvest]: 8 early kills.",
		WHEEL_OF_FATE: "[Chaos]: Trigger RNG 30 times.",
		MEDUSA: "[Petrifying Gaze]: Freeze 100 enemies.",
		SINGULARITY_GRENADE: "[Gravity Master]: Force move 25 times.",
		SPATIAL_SCRAMBLER: "[Chaos Theory]: Trigger RNG 50 times.",
		KNIGHT_SUPLEX: "[Grappler]: Kill 40 enemies with Knights.",
		BISHOP_SHADOW_SWAP: "[Void Walker]: Swap or teleport 40 times."
	},
	player: "ALLY",
	enemy: "OPP",
	recycleTrade: "Recycle / Trade",
	confirmEndTurnTitle: "End Turn Confirmation",
	confirmEndTurnMessage: "Are you sure you want to end your turn?",
	confirmPurchaseTitle: "Confirm Purchase",
	confirmPurchaseMessage: "Are you sure you want to purchase {item}?",
	connectionLineIdleLabel: "Idle Line Downclock",
	genericEquipment: "Universal Equipment",
	use: "Use",
	useItem: "Use Item",
	visualQualityLabel: "Quality & Rendering",
	networkActive: "ONLINE",
	networkOffline: "OFFLINE",
	statusLabel: "NETWORK",
	additionalEffects: "ADDITIONAL EFFECTS",
	permanent: "PERM"
};
var st = {
	title: "リレアーク",
	subtitle: "接続|指揮|征服",
	playVsAi: "スタンダード",
	playVsHuman: "対人戦",
	playRogue: "運命の行路",
	unitExclusive: "{name}専用",
	whiteReserve: "白",
	blackReserve: "黒",
	whiteReserveFull: "白の予備兵",
	blackReserveFull: "黒の予備兵",
	whiteTurn: "白の手番",
	blackTurn: "黒の手番",
	whiteWins: "白の勝利！",
	blackWins: "黒の勝利！",
	draw: "引き分け",
	basicConfiguration: "基本設定",
	skillsLabel: "スキル",
	noCombo: "コンボなし",
	blackHQ: "黒軍",
	interfaceTab: "インターフェース",
	visualTab: "ビジュアル",
	audioTab: "オーディオ",
	port: "縦画面",
	land: "横画面",
	fit: "フィット",
	closeTerminal: "ターミナルを閉じる",
	systemLanguage: "言語",
	masterAudio: "マスター音量",
	musicVolume: "BGM",
	sfxVolume: "効果音",
	cancelAim: "キャンセル",
	systemCollapse: "システム崩壊まで：",
	turns: "ターン",
	economicStable: "経済安定",
	danger: "危険",
	undoLabel: "待った",
	skipLabel: "スキップ",
	itemsLabel: "消耗品",
	equipLabel: "装備",
	progress: "進行度",
	credits: "クレジット",
	systemReady: "システム準備完了",
	module: "モジュール：",
	cost: "コスト",
	accessGranted: "アクセス承認",
	systemPurged: "システムパージ完了",
	continueDeep: "さらに深部へ (第 {next} 章)",
	funds: "資金",
	rank: "ランク",
	backgroundInfo: "背景設定",
	coreLogic: "コアロジック",
	difficultyLabel: "難易度",
	sov: "君主",
	max: "最大",
	none: "なし",
	spawn: "配置",
	menu: "メニュー",
	restart: "再起動",
	settings: "設定",
	settingsTitle: "設定",
	restoreDefaults: "初期化",
	resetMessage: "システムパラメータが初期化されました。",
	backToMenu: "メインメニュー",
	languageName: "日本語",
	showDanger: "危険地帯",
	reserveLayoutLabel: "レイアウト",
	reserveLayoutAuto: "自動",
	reserveLayoutPortrait: "縦",
	reserveLayoutLandscape: "横",
	aspectRatioLabel: "アスペクト比",
	resolutionLabel: "解像度設定",
	resolutionAdaptive: "ウィンドウサイズに合わせる",
	brightnessLabel: "画面の明るさ",
	qualityLabel: "画質",
	qualityHigh: "高画質",
	qualityMedium: "中画質",
	qualityLow: "低電力",
	connectionLineModeLabel: "接続ライン",
	connectionLineModeAlways: "常に表示",
	connectionLineModeAuto: "自動非表示",
	connectionLineModeNever: "表示しない",
	gridStyleLabel: "グリッド",
	gridStyleDotted: "ドット",
	gridStyleCurve: "カーブ",
	defaultDangerZoneLabel: "脅威エリアのデフォルト表示",
	gameLogicPreferences: "ゲームロジックと設定",
	displayLayout: "ディスプレイとレイアウト",
	connectionLineAutoPauseLabel: "接続ラインの自動非表示",
	connectionLinePauseDelayLabel: "非表示までの時間",
	autoEndTurnLabel: "自動ターン終了",
	confirmationsLabel: "操作の二次確認",
	confirmEndTurnLabel: "ターン終了の確認",
	confirmSurrenderLabel: "降参の確認",
	confirmShopLegendaryLabel: "ショップ購入の確認",
	postProcessingLabel: "レトロフィルター",
	noiseStrengthLabel: "フィルムグレイン強度",
	vignetteStrengthLabel: "ビネット強度",
	crtCurvatureLabel: "CRT 曲面歪み",
	accessibilityLabel: "アクセシビリティ",
	screenShakeLabel: "画面の揺れ",
	floating3DLabel: "3D パララックス",
	showEndgameBackground: "メインメニューで残局を表示",
	difficultyEasy: "初級",
	difficultyNormal: "中級",
	difficultyHard: "上級",
	rules: "ルール",
	rulesContent: "目的：敵のキングを撃破する。\n移動：駒の動きは標準的なチェスと同じ。\n配置：予備兵から空いているマスに駒を配置できる。\nネットワーク：駒がキングからの移動範囲の連鎖内にある場合、「接続」状態となる。\n凍結：ネットワークが切れた駒は「凍結」し、移動できなくなる。接続状態の駒を移動させてネットワークを復旧できる。",
	undo: "待った",
	skip: "ターンをスキップ",
	surrender: "降参",
	surrenderConfirm: "本当に降参しますか？",
	surrenderTitle: "絶望的な提案",
	surrenderMsg: "敵は戦闘能力を喪失し、シャットダウンを要求しています。受け入れますか？",
	acceptSurrender: "受け入れる",
	refuseSurrender: "最後まで戦う",
	cancel: "キャンセル",
	checkWarning: "チェック！",
	gameOver: "ゲームオーバー",
	winnerIs: "勝者：",
	playAgain: "もう一度プレイ",
	undoRetry: "悔し棋で再試行 (残り {count} 回)",
	victory: "勝利！",
	ok: "OK",
	bossSuffix: " (BOSS)",
	decrypt: "復号中",
	decryptSuccess: "ステータス：復号成功 // セクターログ同期完了",
	transmissionComplete: "通信完了",
	systemUnlocked: "システムロック解除",
	swallow: "ツバメ",
	protocolLocked: "プロトコルロック",
	noDescription: "説明なし",
	unit: "ユニット",
	level: "レベル",
	skill: "スキル",
	equip: "装備",
	add: "追加",
	unlockAll: "すべて解放",
	clearData: "データを消去",
	selectConsumable: "消耗品を選択...",
	selectEquipment: "装備を選択...",
	generic: "汎用",
	monarchSelectTitle: "君主選択",
	monarchSelectSub: "戦略コアの初期化",
	monarchFunds: "初期資金",
	monarchDifficulty: "戦略難易度",
	monarchHistory: "経歴 / 情報",
	monarchLogic: "コアシステムロジック",
	monarchCancel: "キャンセル",
	monarchStart: "作戦開始",
	monarchWIP: "開発中",
	monarchLocked: "ロック中",
	monarchDefaultName: "ベースライン",
	monarchDefaultDesc: "ニューラルネットワークの伝統的な指揮官。バランスが良く安定しており、基本プロトコルを厳格に遵守する。",
	monarchDefaultMechanic: "標準プロトコル：周囲 1 マスの味方にネットワーク接続を提供する。",
	monarchHappyPrinceName: "幸福な王子",
	monarchHappyPrinceDesc: "「絶対的な犠牲によって縛られた鉛の心。彼は民を武装させるために黄金の外殻を脱ぎ捨てる。」",
	monarchHappyPrinceMechanic: "【黄金の施し】初期資金 5000G、パッシブ収入なし。王子が購入したアイテムは味方のレジェンダリー装備となる。\n【鉛の心】信号源「ツバメ」を伴う。ツバメが捕らえられた場合、500G を消費して復活させることができる。ツバメが完全に死ぬとゲームオーバー。\n【鉛の像】最初の致命的な一撃を受けると、王子は無敵の 3x3 ネットワークソースとして石化する。",
	monarchArthurName: "アーサー王",
	monarchArthurDesc: "「対等な者たちの第一人者。彼は絶対王政を打ち砕き、分散型の円卓の騎士団を築く。」",
	monarchArthurMechanic: "【分散型】レベル 3 またはレジェンダリーユニットがネットワークソースとなる。初期ユニットに Lv.3 マーリンとランスロットを含む。\n【円卓の誓い】Lv.3 の味方が敵を撃破すると、他のすべての Lv.3 の味方が【シールド】を得る。\n（制限：ユニットの最大レベルは 3、クイーンは使用不可）",
	monarchOdysseusName: "オデュッセウス",
	monarchOdysseusDesc: "「終わりのない深淵の航海士。彼にとって境界は幻想であり、欺瞞こそが最高の芸術である。」",
	monarchOdysseusMechanic: "【深淵航法】ユニットとネットワークがボードの端を越えてループする（最大 1 マス）。\n【セイレーンの歌】5 ターンごとに、接続されたキング以外のユニットがランダムに移動（ビヘイビア・ドリフト）する可能性がある。\n【トロイの木馬】アクティブ：隠された木馬を配置する。2 ターン後、2 体のポーンとして出現する。",
	monarchLouisName: "ルイ 14 世",
	monarchLouisDesc: "「朕は国家なり。絶対的な権力は太陽から放射され、共有されるにはあまりに神聖である。」",
	monarchLouisMechanic: "【絶対的コロナ】5x5 の巨大なキングネットワーク。信号の中継は禁止される。範囲内の敵はサイレンス状態になる。\n【鉄の仮面】移動不可の「鉄の仮面」を二次ソースとして伴う。鉄の仮面が捕らえられると、キングはコロナネットワークを永久に失う。",
	monarchRichardName: "リチャード 1 世",
	monarchRichardDesc: "「常に先陣を切る十字軍。栄光は前方にあり、振り返ることは反逆である。」",
	monarchRichardMechanic: "【一方通行の十字軍】信号は前方のみに流れる。キングはクイーンのように動ける。キングが深く進むほど味方にバフを与え、報奨金を増やす。\n【退却不可】キングは後退できない。\n【王の身代金】死亡時、100G を自動消費して後列に復活する。",
	selectLoot: "戦利品を選択してください",
	recruitKnight: "雇用：ナイト",
	recruitKnightDesc: "編成に新しいナイトを追加します。",
	recruitBishop: "雇用：ビショップ",
	recruitBishopDesc: "編成に新しいビショップを追加します。",
	itemFreeze: "アイテム：フリーズスクロール",
	itemFreezeDesc: "消耗品：敵を 1 ターン凍結させます。",
	loadGame: "再開",
	loadGameSub: "チェックポイントから復旧",
	saveGame: "セーブ",
	saveManagement: "セーブ管理",
	loadArchive: "アーカイブ読み込み",
	emptySlot: "空きスロット",
	chapter: "章",
	levelLabel: "レベル",
	saveLimitReached: "セーブ回数が上限に達しました",
	saveSuccess: "セーブに成功しました！",
	remainingSaves: "残りのセーブ回数",
	yourTurn: "あなたの番",
	yourTurnAnim: "YOUR TURN",
	aiTurn: "AI の番",
	normalMode: "スタンダード",
	rogueMode: "運命の行路",
	turn: "ターン",
	tacticalTurnBased: "タクティカル・ターン制",
	permadeathRun: "パーマデス挑戦",
	standardSimulation: "標準シミュレーション",
	selectAiConfig: "AI 設定を選択",
	protocolBaseline: "01 - プロトコル・ベースライン",
	standardLogic: "02 - 標準ロジック",
	advancedNeural: "03 - 高度ニューラル",
	localP2P: "ローカル対戦",
	build: "ビルド",
	local: "ローカル",
	terminal: "ターミナル",
	skipReward: "スキップ (+10G)",
	reroll: "リロール ({cost}G)",
	combo: "コンボ x{count}",
	comboInc: "コンボ +1!",
	slot: "スロット",
	tierCommon: "コモン",
	tierRare: "レア",
	tierEpic: "エピック",
	tierLegendary: "レジェンダリー",
	availableCredit: "利用可能クレジット",
	confirmClaim: "獲得を確認",
	insufficientFunds: "資金不足",
	darkBargain: "闇の取引",
	targetSold: "対象売却済み",
	blackMarket: "ブラックマーケット",
	awaitingSelection: "ターミナル選択待機中...",
	unlockRequired: "戦術的実績により解放",
	itemDetails: "アイテム詳細",
	assetDetails: "アセット詳細",
	sell: "売却",
	back: "戻る",
	recruitPiece: "雇用：{name}",
	newUnit: "新しいユニット",
	addPieceDesc: "編成に新しい {name} を追加します。",
	imbueSkill: "付与：{name}",
	replaceSkill: "置換：{name}",
	backupUnit: "予備ユニット",
	bonusSkill: "ボーナススキル：",
	conflict: "競合",
	equipmentFull: "装備スロットがいっぱいです",
	pieceTypeMismatch: "ユニットタイプが一致しません",
	itemConflictReplace: "競合するアイテムを置換しました：{name}",
	replaces: "(置換) ",
	scrapRecycle: "スクラップリサイクル",
	inventoryFull: "インベントリがいっぱいです",
	scrapRecycleDesc: "{type} スロットがいっぱいです ({max})。15 ゴールドに変換されました。",
	consumable: "消耗品",
	equipment: "装備",
	piecePawn: "ポーン",
	pieceKnight: "ナイト",
	pieceBishop: "ビショップ",
	pieceRook: "ルーク",
	pieceQueen: "クイーン",
	pieceKing: "キング",
	unitMerlin: "マーリン (Lv.3)",
	unitLancelot: "ランスロット (Lv.3)",
	unitIronMask: "鉄の仮面",
	campTitle: "キャンプ",
	campSubtitle: "休息と準備",
	campDesc: "次の戦闘に備えて、ロードアウトを確認しましょう。",
	campLevel: "レベル",
	campGold: "ゴールド",
	campInventory: "インベントリ",
	campUnits: "{count} ユニット",
	campItems: "消耗品 {consumables} · 装備 {equipments}",
	continue: "続行",
	close: "閉じる",
	debug: {
		spawnerTitle: "ユニットスポナー (デバッグ)",
		pieceType: "駒のタイプ",
		selectPiece: "駒を選択...",
		imbueSkill: "スキルを付与",
		initialEquipment: "初期装備",
		none: "なし",
		generate: "生成"
	},
	dbTitle: "データベース",
	dbSub: "復号とアーカイブ",
	dbClose: "切断",
	dbNotCollected: "データ未発見",
	dbUnlockProtocol: "解除プロトコル：",
	dbTabs: {
		monarch: "君主コア",
		king: "王権モジュール",
		pawn: "ポーンモジュール",
		knight: "ナイトモジュール",
		bishop: "ビショップモジュール",
		rook: "ルークモジュール",
		queen: "クイーンモジュール",
		generic: "汎用プロトコル",
		equipment: "拡張パーツ",
		consumable: "使い捨てスクリプト",
		boss: "キャンペーン・メカニクス",
		terrain: "地形異常"
	},
	noSelection: "選択なし",
	personnel: "人員",
	inventory: "インベントリ",
	emptyBag: "バッグは空です",
	storageEmpty: "ストレージは空です",
	skillModule: "スキル",
	equipModule: "装備",
	used: "使用済み",
	railgunFiring: "軌道砲：まもなく発射！",
	railgunCountdown: "軌道砲：{n} ターン後に発射",
	quantumCountdown: "量子スワップまで：{n} ターン",
	cooldown: "クールダウン",
	ready: "準備完了",
	depleted: "弾薬切れ",
	turnsRemaining: "{n} ターン",
	remainingUses: "残り {n} 回",
	bastionMode: "バスティオン形態",
	mobileMode: "機動形態",
	costGold: "{n} ゴールド消費",
	deployToUse: "使用するには配置が必要",
	prepare: "準備",
	intel: "インテル",
	barracks: "兵舎",
	sectorLogs: "セクターログ",
	sector: "セクター",
	eliminateAll: "敵軍殲滅",
	vipTarget: "VIP ターゲット",
	vipTargetDesc: "敵のキングがいません。すべての敵を排除して勝利。",
	jammingTitle: "妨害中",
	jammingShortDesc: "グローバルネットワーク障害。リレーのみが信号を提供。",
	noAnomaly: "正常",
	anomalyTitle: "異常事態",
	proxyKingDesc: "キング討伐は終わりではない。敵キング生存中、敵ユニットはネットワーク接続を必要とするが、敵キングが倒されると全軍が永久接続状態となる。勝利するには全敵ユニットを排除しなければならない。",
	empty: "空",
	dragToUnequip: "ドラッグして装備解除",
	dragToEquip: "ドラッグして装備",
	dragToUse: "ドラッグして使用",
	aiAnalyzing: "AI 分析中...",
	noData: "データなし",
	items: JSON.parse("{\"EMP\":{\"name\":\"EMP パルス\",\"desc\":\"3x3 範囲内のすべての敵を 1 ターン凍結させる。\"},\"OVERCLOCK\":{\"name\":\"オーバークロック\",\"desc\":\"選択した駒はこのターン、2 回移動できる。\"},\"PHASE\":{\"name\":\"フェーズシフト\",\"desc\":\"パッシブ：他の駒を通り抜けて移動できる。\"},\"RANGE_UP\":{\"name\":\"レンジエクステンダー\",\"desc\":\"パッシブ：ネットワーク範囲を 1 広げる。\"},\"BATTERY\":{\"name\":\"バッテリー\",\"desc\":\"凍結したターゲットを即座に復旧させる。\"},\"FREEZE_RAY\":{\"name\":\"フリーズレイ\",\"desc\":\"敵を 2 ターン凍結させる。\"},\"PARDON\":{\"name\":\"パードン\",\"desc\":\"一時的に敵ユニットを寝返らせる。\"},\"SMOKE_BOMB\":{\"name\":\"煙幕\",\"desc\":\"2 ターンの間、遠距離直線攻撃を無効化する。\"},\"EQ_BAYONET\":{\"name\":\"銃剣\",\"desc\":\"ポーンが前方に攻撃（捕獲）できる。\"},\"EQ_SCOUT_RADAR\":{\"name\":\"スカウトレーダー\",\"desc\":\"接続中、周囲の敵のステルス/デコイを無効化する。\"},\"EQ_SIGNAL_BACKPACK\":{\"name\":\"信号バックパック\",\"desc\":\"前後 2 マスの味方を強制的に接続状態にする。\"},\"EQ_HOOF_ARMOR\":{\"name\":\"蹄の重甲\",\"desc\":\"ジャンプの着地点に敵のポーンがある場合、それを直接捕獲し、このターンに追加の移動を得る。\"},\"EQ_TELESCOPIC_LEGS\":{\"name\":\"テレスコピックレッグ\",\"desc\":\"ナイトが 3x1 の距離をジャンプできる。\"},\"EQ_SHOCK_STIRRUPS\":{\"name\":\"ショックあぶみ\",\"desc\":\"着地時、隣接する十字方向の敵を 1 ターン凍結させる。\"},\"EQ_PRISM_SHIELD\":{\"name\":\"プリズムシールド\",\"desc\":\"死亡時、対角線攻撃を受けた場合に攻撃者を道連れにする。\"},\"EQ_HIGH_POWER_SCOPE\":{\"name\":\"高倍率スコープ\",\"desc\":\"3 マス以上離れた敵を捕獲すると 5 ゴールド得る。\"},\"EQ_PURIFICATION_STAFF\":{\"name\":\"浄化の杖\",\"desc\":\"移動後、着地点の 3x3 範囲内の味方の弱体化状態を解除する。\"},\"EQ_HOVER_TREAD\":{\"name\":\"ホバートレッド\",\"desc\":\"ルークが斜めに 1 マス移動できる。\"},\"EQ_BASE_STATION\":{\"name\":\"ベースステーション\",\"desc\":\"接続中、同じ行/列のすべての味方を接続状態にする。\"},\"EQ_REACTIVE_ARMOR\":{\"name\":\"反応装甲\",\"desc\":\"ルークは真上または真下からの攻撃を無効化する。\"},\"EQ_PHOENIX_FEATHER\":{\"name\":\"フェニックスの羽\",\"desc\":\"最初の死亡時、キングの近くに Lv.1 ポーンとして復活する。\"},\"EQ_BLOOD_DRESS\":{\"name\":\"血のドレス\",\"desc\":\"撃破時に残像を残し、後にそこへテレポートできる。\"},\"EQ_SCEPTER_OF_CHARM\":{\"name\":\"魅了の笏\",\"desc\":\"ターン開始時、範囲内の敵を 1 ターン寝返らせる。\"},\"EQ_LIGHTNING_ROD\":{\"name\":\"避雷針\",\"desc\":\"キングは環境トラップと弱体化状態を無効化する。\"},\"EQ_MEGAPHONE\":{\"name\":\"メガホン\",\"desc\":\"キングの支援範囲が 1 から 2 マスに拡大。\"},\"EQ_ROYAL_GUARD\":{\"name\":\"近衛兵\",\"desc\":\"キングに隣接する味方が捕らえられた際、10G で自動復活させる（1回）。\"},\"EQ_REFLECTIVE_ARMOR\":{\"name\":\"反射装甲\",\"desc\":\"捕らえられた際、攻撃者を 1 ターン凍結させる。\"},\"EQ_LIGHTWEIGHT_ALLOY\":{\"name\":\"軽量合金\",\"desc\":\"未接続状態で 1 回移動できる。使用後に壊れる。\"},\"EQ_CAMOUFLAGE\":{\"name\":\"迷彩\",\"desc\":\"移動や捕獲を行わなかったターン、敵から見えなくなる。\"},\"EQ_STABILIZER\":{\"name\":\"スタビライザー\",\"desc\":\"強制移動効果を無効化する。\"},\"EQ_SELF_DESTRUCT\":{\"name\":\"自爆装置\",\"desc\":\"死亡時に隣接 1 マスを破壊する。使用後に壊れる。\"},\"EQ_BACKUP_BATTERY\":{\"name\":\"予備バッテリー\",\"desc\":\"未接続時の凍結を 2 ターン遅らせる。\"},\"EQ_EMERGENCY_LINK\":{\"name\":\"緊急リンク\",\"desc\":\"未接続時、2 マス以内の味方と接続する。\"},\"EQ_BOUNTY_MODULE\":{\"name\":\"バウンティモジュール\",\"desc\":\"敵を捕らえるたびに 10 ゴールド得る。\"},\"EQ_RESCUE_BEACON\":{\"name\":\"救助ビーコン\",\"desc\":\"死亡時、予備から複製をキングの近くに配置する。\"},\"EQ_TACTICAL_OPS\":{\"name\":\"タクティカル・オプス\",\"desc\":\"戦闘の最初のターンに配置アクションを追加で 1 回行える。\"},\"EQ_DIPLOMATIC_IMMUNITY\":{\"name\":\"外交特権\",\"desc\":\"最初の 2 ターン、敵 AI は新しいユニットを配置できない。\"},\"EQ_FULL_BAND_SCANNER\":{\"name\":\"フルバンドスキャナー\",\"desc\":\"ターン開始時、すべての敵のステルス/トラップを暴いて破壊する。\"},\"EQ_BLACK_MARKET_LEDGER\":{\"name\":\"闇市の帳簿\",\"desc\":\"勝利時（キング撃破）に 30 ゴールドのボーナスを得る。\"},\"EQ_RECYCLING_STATION\":{\"name\":\"リサイクルステーション\",\"desc\":\"味方の死亡時にランダムなコモン消耗品を得る。\"},\"EQ_RELIC_OF_KINGS\":{\"name\":\"王の遺物\",\"desc\":\"最後のユニットになり予備も空のとき、キングはクイーン+ナイトの移動能力を得る。\"},\"EQ_VENTURE_CAPITAL\":{\"name\":\"ベンチャーキャピタル\",\"desc\":\"50 ゴールド以上持っている状態でレベルを開始すると、10 ゴールドの利息を得る。\"},\"EQ_SWARM_INTELLIGENCE\":{\"name\":\"隣接ネット\",\"desc\":\"ポーン同士が隣接していれば接続状態となる。\"},\"EQ_ARROGANT_CREED\":{\"name\":\"アロガントクリード\",\"desc\":\"開始時、キングはクイーン+ナイトの移動能力を持つ。他の駒を配置すると永久に失われる。\"},\"EQ_QUEEN_ROOK_LINK\":{\"name\":\"ルークリンクカラー\",\"desc\":\"レジェンダリー：クイーンが接続中なら、最も近い味方のルークを強制接続する。\"},\"EQ_QUEEN_BISHOP_LINK\":{\"name\":\"ビショップリンクカラー\",\"desc\":\"レジェンダリー：クイーンが接続中なら、最も近い味方のビショップを強制接続する。\"},\"EQ_HIVE_CORE\":{\"name\":\"パワーコア\",\"desc\":\"接続中、このポーンは移動力が +1 される（2マス前進可能）。\"},\"EQ_CHEAP_BOOSTER\":{\"name\":\"安価なブースター\",\"desc\":\"ネットワーク範囲が 3 になるが、敵を捕らえられなくなる。\"},\"EQ_CHAIN_MINE\":{\"name\":\"連鎖地雷\",\"desc\":\"死亡時、隣接する他のポーンがある場合に 3x3 の爆発を起こす。\"},\"EQ_PLUNDER_HOOVES\":{\"name\":\"略奪の蹄\",\"desc\":\"飛び越えた敵から 2 ゴールド盗む。\"},\"EQ_GHOST_RIDE\":{\"name\":\"ゴーストライド\",\"desc\":\"飛び越えた敵を 30% の確率でランダムな位置にテレポートさせる。\"},\"EQ_REFRACTION_LENS\":{\"name\":\"屈折レンズ\",\"desc\":\"味方に遮られた際、90 度屈折して 2 マス移動できる。\"},\"EQ_FAITH_SIPHON\":{\"name\":\"信仰のサイフォン\",\"desc\":\"このビショップの対角線上でユニットが死亡するたびに 2 ゴールド得る。\"},\"EQ_EM_SHIELD\":{\"name\":\"EM シールド\",\"desc\":\"このルークが隣接している間、キングはナイトからの攻撃を無効化する。\"},\"EQ_TOW_HOOK\":{\"name\":\"牽引フック\",\"desc\":\"引力と強制移動で敵を引き寄せる。\"},\"EQ_ROYAL_SALUTE\":{\"name\":\"祝砲\",\"desc\":\"捕獲時にランダムな敵ポーンに落雷を落とす（クールダウン：3）。\"},\"EQ_GOLDEN_THRONE\":{\"name\":\"黄金の玉座\",\"desc\":\"ターン開始時、接続された味方の数に応じてゴールドを得る。\"},\"SIGNAL_TOWER_DEFENSE\":{\"name\":\"信号塔の防衛\",\"desc\":\"アクティブ：20G 消費して現在のマスに永続的な信号塔を設置。\"},\"EQ_DEFLATION\":{\"name\":\"デフレ政策\",\"desc\":\"グローバル：ショップの価格が 20% 割引。\"},\"EQ_HACKER_TERMINAL\":{\"name\":\"ハッカーターミナル\",\"desc\":\"グローバル：ターン開始時にランダムに高ティアの敵を凍結。\"},\"EQ_SPYWARE\":{\"name\":\"スパイウェア\",\"desc\":\"グローバル：敵のキングが動くたびに 5 ゴールド得る。\"},\"FROZEN\":{\"name\":\"凍結\",\"desc\":\"このターンは移動・行動不能。\"},\"PETRIFIED\":{\"name\":\"石化\",\"desc\":\"永久に行動不能。\"},\"SKILL_LOCKED\":{\"name\":\"スキルロック\",\"desc\":\"アクティブスキルを使用不可。\"},\"SILENCED\":{\"name\":\"沈黙\",\"desc\":\"スキルを発動不可。\"},\"ENCRYPTED\":{\"name\":\"暗号化\",\"desc\":\"身分が隠蔽。駒の種類が不可視。\"},\"SHIELDED\":{\"name\":\"シールド\",\"desc\":\"ダメージを 1 回無効化。\"},\"GRAVITY_LOCKED\":{\"name\":\"重力ロック\",\"desc\":\"移動範囲が制限。\"},\"MEDUSA\":{\"name\":\"メドゥーサの目\",\"desc\":\"永続的な石化。\"},\"WITHDRAW\":{\"name\":\"戦術的撤退\",\"desc\":\"予備に戻す。\"},\"JAMMING\":{\"name\":\"フルバンド妨害\",\"desc\":\"現在のボード上のキング以外の全ての駒を永続的に麻痺させる（使用後に配置された駒には影響しない）。\"},\"SCARY_LETTER\":{\"name\":\"脅迫状\",\"desc\":\"味方キングから遠ざかる方向に敵駒を1マス後退させる。\"},\"SPARE_PARTS\":{\"name\":\"予備パーツ\",\"desc\":\"キングの近くにポーンを生成。\"},\"COMPASS\":{\"name\":\"変位コンパス\",\"desc\":\"隣接するマスにランダムにドリフト。\"},\"PURIFIER\":{\"name\":\"信号精製器\",\"desc\":\"弱体化状態を解除。\"},\"DECOY\":{\"name\":\"デコイフレア\",\"desc\":\"優先度の高いデコイユニット。\"},\"DOOM_BROADCAST\":{\"name\":\"終末放送\",\"desc\":\"未接続の全ユニットを破壊。\"},\"TIME_GLASS\":{\"name\":\"時の砂時計\",\"desc\":\"「待った」の回数を 1 増やす。\"},\"SPACE_GLASS\":{\"name\":\"空間の砂時計\",\"desc\":\"セーブ回数を 1 増やす。\"},\"PRESS\":{\"name\":\"ヘビープレス\",\"desc\":\"永久に押し潰される。\"},\"VOID_ANCHOR\":{\"name\":\"ヴォイドアンカー\",\"desc\":\"マスをロック。\"},\"GRAVITY_TRAP\":{\"name\":\"重力トラップ\",\"desc\":\"3x3 範囲の重力ロック、最大移動距離が 1 マスに制限。\"},\"CLOAK\":{\"name\":\"信号ジャマー\",\"desc\":\"2 ターンステルス。\"},\"OVERLOAD\":{\"name\":\"エネルギーオーバーロード\",\"desc\":\"追加移動可能だが捕獲不可。\"},\"PORTAL\":{\"name\":\"ポータル\",\"desc\":\"ポータルエントリーを設置。\"},\"DRAFT_ORDER\":{\"name\":\"強制作集\",\"desc\":\"ナイトを復活させて予備に追加。\"},\"MIDAS\":{\"name\":\"マイダスストーン\",\"desc\":\"兵舎やボード上のユニットに使うことで、ゴールドに変換する。\"},\"GOLDEN_TOUCH\":{\"name\":\"黄金の指先\",\"desc\":\"敵のポーンを選択して即座に 50 ゴールドに変換。\"},\"LOOT_BOX\":{\"name\":\"ルートボックス\",\"desc\":\"ランダムな消耗品。\"},\"ROYAL_SACRIFICE\":{\"name\":\"王の犠牲\",\"desc\":\"味方を選択して永久に捧げ、自身を強化（レベル+1、装備枠+1）。\"},\"SCRAP_PART\":{\"name\":\"スクラップ\",\"desc\":\"解体して 5-20 ゴールドを得る。\"},\"LURE_SIGNAL\":{\"name\":\"誘引信号\",\"desc\":\"敵のポーンを選択して 1 マス後退させる。\"},\"EMERGENCY_PATCH\":{\"name\":\"緊急パッチ\",\"desc\":\"味方から「感染」状態を即座に取り除く。\"},\"COMMAND_STEAL\":{\"name\":\"コマンドスティール\",\"desc\":\"敵を 2 ターン凍結し、一時的なネットワークソースとして利用する。\"},\"DATA_HARVEST\":{\"name\":\"データハーベスト\",\"desc\":\"現在凍結しているユニット 1 体につき 10 ゴールド得る。\"},\"VOID_ANCHOR_ITEM\":{\"name\":\"ヴォイドアンカー\",\"desc\":\"マスを 3 ターンロックし、配置や進入を防ぐ。\"},\"GOLD_MAGNET_ITEM\":{\"name\":\"ゴールドマグネット\",\"desc\":\"付与：このターンに移動したマス 1 つにつき 1 ゴールド得る。\"},\"BARRICADE_ITEM\":{\"name\":\"バリケード\",\"desc\":\"移動を妨げる障害物を設置。\"},\"SCOUT_PROBE\":{\"name\":\"スカウトプローブ\",\"desc\":\"2x2 範囲内の敵のステルスを暴く。\"},\"RUST_SPRAY\":{\"name\":\"サビスプレー\",\"desc\":\"ターゲットの敵は次のターン捕獲できない。\"},\"SWAP_PLUGIN\":{\"name\":\"スワッププラグイン\",\"desc\":\"隣接する味方 2 体の位置を入れ替える。\"},\"ILLEGAL_SLOT\":{\"name\":\"違法スロット\",\"desc\":\"駒の装備スロットを永久に +1 する。\"},\"BLACK_ORDER\":{\"name\":\"闇市への注文\",\"desc\":\"敵の装備を 1 つ盗む。\"},\"REAPER_EXE\":{\"name\":\"Reaper.exe\",\"desc\":\"未接続の全ユニットを破壊。\"},\"WHEEL_OF_FATE\":{\"name\":\"運命の輪\",\"desc\":\"ランダムな消耗品効果を 3 回発動。\"},\"PASSIVE_ANTENNA\":{\"name\":\"パッシブアンテナ\",\"desc\":\"アクティブ：この戦闘中、プレイヤーが得るすべてのゴールドが2倍になる。\"},\"SINGULARITY_GRENADE\":{\"name\":\"特異点グレネード\",\"desc\":\"空きマスに投擲。5×5内の非キング駒を内側の輪から順に中心へ1マス引き寄せる。キングは無効化するが2ターン重力拘束を受ける。キングに衝突した駒は一方的に粉砕される。\"},\"SPATIAL_SCRAMBLER\":{\"name\":\"空間スクランブラー\",\"desc\":\"対象を中心とした3×3内の非キング駒の位置をランダムに並べ替える。\"},\"EQ_GRAPPLING_HOOK\":{\"name\":\"グラップリングフック\",\"desc\":\"アクティブ：方向を指定してフックを発射し、障害物の直前の空きマスまで自身を引き寄せる。行動回数を消費しない。\"}}"),
	skills: JSON.parse("{\"BLACK_HOLE\":{\"name\":\"ブラックホール\",\"desc\":\"永続的なヴォイドアンカーが中央を塞ぐ。\"},\"OBSTACLES\":{\"name\":\"廃墟\",\"desc\":\"通行不能なバリケードが散在する。\"},\"LASER_GRID\":{\"name\":\"レーザーグリッド\",\"desc\":\"奇数ラウンド開始時に通電し、上の駒を破壊する電流グリッド。キングは免疫。\"},\"WORMHOLE\":{\"name\":\"ワームホール\",\"desc\":\"盤上に繋がったテレポートのペアが存在。片方に入るともう片方から出る。出口が埋まっている場合は転送されない。\"},\"NETWORK_JAM\":{\"name\":\"ネットワークジャム\",\"desc\":\"信号干渉がボード全体に影響。\"},\"FOG_OF_WAR\":{\"name\":\"戦霧\",\"desc\":\"未探索のエリアが隠される。\"},\"quantumCountdown\":\"量子スワップまで：{n} ターン\",\"erasureReady\":\"軌道砲：準備完了\",\"erasureCharging\":\"軌道砲チャージ中：{n} ターン\",\"PAWN_PATROL\":{\"name\":\"パトロール\",\"desc\":\"横に 1 マス移動可能（捕獲不可）。\"},\"PAWN_FRONTAL_SPIKE\":{\"name\":\"フロントスパイク\",\"desc\":\"1 マス前進時に捕獲が可能。\"},\"PAWN_BACKSTEP\":{\"name\":\"バックステップ\",\"desc\":\"斜め後ろに 1 マス移動可能（捕獲不可）。\"},\"PAWN_RESOURCEFUL\":{\"name\":\"機転\",\"desc\":\"死亡時、30%の確率で予備に戻る。\"},\"PAWN_VENGEANCE\":{\"name\":\"復讐\",\"desc\":\"死亡時、ランダムな敵を 2 ターン凍結させる。\"},\"PAWN_ASSASSIN\":{\"name\":\"アサシンコード\",\"desc\":\"クイーン/ルークを捕獲すると、ナイト/ビショップ/ルークに進化。\"},\"PAWN_PROMOTE\":{\"name\":\"昇進の道\",\"desc\":\"捕獲時にレベル+1。Lv.5 でもう一度捕獲すると進化。\"},\"PAWN_SIGNAL_TOWER\":{\"name\":\"信号塔\",\"desc\":\"未接続時は自身は移動不可だが、隣接する味方にネットワークを提供。\"},\"PAWN_PHALANX\":{\"name\":\"ファランクス\",\"desc\":\"自ポーンが左右に味方ポーンと隣接している間、敵ポーン/ナイトによる捕獲を無効化する。\"},\"PAWN_DETONATOR\":{\"name\":\"デトネーター\",\"desc\":\"死亡時に爆発し、3x3 範囲内のキング以外を破壊。\"},\"PAWN_RELAY\":{\"name\":\"中継局\",\"desc\":\"ネットワーク範囲を 2 に拡大。\"},\"PAWN_SACRIFICE\":{\"name\":\"犠牲の誓約\",\"desc\":\"死亡時にセーブ回数を 2 増やし、キングの近くにポーンを生成。\"},\"PAWN_INTERLOCK\":{\"name\":\"インターロック装甲\",\"desc\":\"味方に隣接している間、クイーン/ルークからの攻撃を受けない。\"},\"PAWN_PARASITE\":{\"name\":\"寄生アルゴリズム\",\"desc\":\"移動後、隣接する敵を 1 ターン凍結させる。\"},\"PAWN_SWARM\":{\"name\":\"ポーン連鎖\",\"desc\":\"1 体のポーンが接続されていれば、全ポーンが接続状態となる。\"},\"PAWN_OMEGA_MIRROR\":{\"name\":\"オメガミラー\",\"desc\":\"接続されたポーン以外の味方の基本移動をコピー。\"},\"PAWN_SATELLITE\":{\"name\":\"サテライトリンク\",\"desc\":\"常に接続状態。キングの代替ソースとなる。\"},\"PAWN_CHARGER\":{\"name\":\"チャージャー\",\"desc\":\"どの位置からも 2 マス前進可能（捕獲不可、飛び越し不可）。\"},\"KNIGHT_QUICK_ROUTING\":{\"name\":\"クイックルーティング\",\"desc\":\"凍結時も移動可能だが、接続済みのマスに限る。\"},\"KNIGHT_CROSS_JUMP\":{\"name\":\"クロスジャンプ\",\"desc\":\"捕獲なしのジャンプ後、十字方向に 1 マス移動可能。\"},\"KNIGHT_HOT_SWAP\":{\"name\":\"ホットスワップ\",\"desc\":\"味方のポーンのマスにジャンプし、位置を入れ替える。\"},\"KNIGHT_SIDE_STEP\":{\"name\":\"サイドステップ\",\"desc\":\"空いている隣接マス（上下左右）に 1 マス移動可能（捕獲不可）。\"},\"KNIGHT_SCAVENGER\":{\"name\":\"スカベンジャー\",\"desc\":\"敵の制御圏内にジャンプすると 1 ゴールド得る。\"},\"KNIGHT_TRAMPLE\":{\"name\":\"蹂躙\",\"desc\":\"ジャンプ経路上の敵を 50% の確率で 1 ターン凍結させる。\"},\"KNIGHT_GHOST\":{\"name\":\"オフラインプロトコル\",\"desc\":\"未接続（凍結）状態でも自由に移動できる。\"},\"KNIGHT_HIT_AND_RUN\":{\"name\":\"跳弾ブーメラン\",\"desc\":\"アクティブ：移動せずに、ナイトのL字範囲内の敵を1体倒す（キングは不可）。刃は跳弾し、隣接（十字方向）するランダムな敵を1体追加で倒す。クールダウン：3ターン。\"},\"KNIGHT_MIRAGE\":{\"name\":\"ミラージュ\",\"desc\":\"死亡時、近くに味方のポーンがいれば入れ替わる（ポーンが身代わり）。\"},\"KNIGHT_GRAVITY_WELL\":{\"name\":\"グラビティウェル\",\"desc\":\"移動後、隣接する敵を 1 ターン凍結させる。\"},\"KNIGHT_TROJAN\":{\"name\":\"トロイ\",\"desc\":\"捕獲された際、近くに 2 体の味方ポーンを生成。\"},\"KNIGHT_FULL_DUPLEX\":{\"name\":\"プラグアンドプレイ\",\"desc\":\"配置時にターンが終了しない。さらに任意の味方を移動可能。\"},\"KNIGHT_CHAIN\":{\"name\":\"チェインライトニング\",\"desc\":\"捕獲後にターンが終了せず、再度ジャンプ可能。\"},\"KNIGHT_RIFT\":{\"name\":\"リフト\",\"desc\":\"隣接する味方を着地点付近に運ぶ。\"},\"KNIGHT_MIDAS_TOUCH\":{\"name\":\"マイダスタッチ\",\"desc\":\"ジャンプ距離に応じてゴールド生成。クイーン/ルーク捕獲で装備獲得。\"},\"KNIGHT_TROJAN_KERNEL\":{\"name\":\"トロイカーネル\",\"desc\":\"クイーン/ルークを捕獲した際、予備にポーンを得る。\"},\"KNIGHT_AURA\":{\"name\":\"ナイトオーラ\",\"desc\":\"ナイトがネットワークに接続されている間、隣接する味方のポーンは十字方向への移動能力を得る。\"},\"KNIGHT_SUPLEX\":{\"name\":\"スープレックス\",\"desc\":\"アクティブ：隣接する十字方向の敵を掴み、自身の反対側の対称位置に投げ飛ばす。着地マスに駒がある場合、双方が破壊される。\"},\"BISHOP_REFRACTION\":{\"name\":\"屈折\",\"desc\":\"端に当たると 90 度屈折して 1 マス滑る。\"},\"BISHOP_MIRROR\":{\"name\":\"ミラー\",\"desc\":\"同じ対角線上の別の味方ビショップと位置を入れ替える。\"},\"BISHOP_PHASE_SHIFT\":{\"name\":\"フェーズシフト\",\"desc\":\"ルークのように上下左右に 1 マス移動可能（捕獲不可）。\"},\"BISHOP_AFTERSHOCK\":{\"name\":\"アフターショック\",\"desc\":\"捕獲後、隣接する空きマスが 2 ターンの間余震エリアとなり、敵は配置できなくなる。\"},\"BISHOP_PIERCE\":{\"name\":\"貫通\",\"desc\":\"味方 1 体を通り抜けて移動または攻撃できる。\"},\"BISHOP_HOLY_LAND\":{\"name\":\"聖地\",\"desc\":\"この駒の斜線上の全マスを遮断無視で“支配領域”とみなす。味方がこの領域に配置されると、1ターンの間一時的なネットワークを得る（凍結無効）。\"},\"BISHOP_MIRROR_RESONANCE\":{\"name\":\"ミラーレゾナンス\",\"desc\":\"斜線の視線内（遮蔽なし）に味方のビショップが存在する場合、相手の接続状態に関わらず、この駒は常にネットワーク接続済みとみなされ、通常の接続駒のように外部へネットワーク接続を提供できる。\"},\"BISHOP_RECALL\":{\"name\":\"リコール\",\"desc\":\"アクティブ：この駒を予備に戻す。\"},\"BISHOP_CONDUIT\":{\"name\":\"コンダクト\",\"desc\":\"接続中、遮られても対角線上のすべての味方を接続状態にする。\"},\"BISHOP_SILENCE\":{\"name\":\"サイレンス\",\"desc\":\"移動後、対角線上の敵のスキルを封印。\"},\"BISHOP_OPTICAL_BLIND_ZONE\":{\"name\":\"ブラインドゾーン\",\"desc\":\"直線攻撃（ルーク/クイーン）による捕獲を無効化。\"},\"BISHOP_RESURRECTION\":{\"name\":\"蘇生\",\"desc\":\"捕獲時にランダムな脱落した味方を予備に戻す。\"},\"BISHOP_AURORA\":{\"name\":\"オーロラ\",\"desc\":\"アクティブ：移動せずに対角線上の敵を破壊。\"},\"BISHOP_ABSOLUTE_BARRIER\":{\"name\":\"絶対障壁\",\"desc\":\"敵はこのビショップの対角線上のマスに（捕獲以外で）留まれない。\"},\"ROOK_VAULT\":{\"name\":\"ヴォルト\",\"desc\":\"経路上にある最初の障害物を飛び越えられる。\"},\"ROOK_RAILWAY\":{\"name\":\"鉄道\",\"desc\":\"通過した跡をポーン的移動力 +1 のトレイルにする。\"},\"ROOK_PRESS\":{\"name\":\"プレス\",\"desc\":\"同じ直線上の敵ポーンを抑制し、移動不可にする。\"},\"ROOK_AEGIS\":{\"name\":\"アイギス\",\"desc\":\"キングに隣接中、キングへの遠距離攻撃を無効化。\"},\"ROOK_BASTION\":{\"name\":\"バスティオン\",\"desc\":\"アクティブ：形態を切り替え。移動不可だが周囲の味方を守る。\"},\"ROOK_HEAVY_ARMOR\":{\"name\":\"重装甲\",\"desc\":\"敵のポーンやナイトから捕獲されない。\"},\"ROOK_SWEEPER\":{\"name\":\"スイーパー\",\"desc\":\"通過時に隣接する敵を 1 ターン凍結させる。\"},\"ROOK_MAGNET\":{\"name\":\"マグネット\",\"desc\":\"アクティブ：直線上の味方を隣接マスまで引き寄せる。\"},\"ROOK_CARRIER\":{\"name\":\"キャリア\",\"desc\":\"同じマスの押し潰された駒を運んで移動できる。\"},\"ROOK_CATAPULT\":{\"name\":\"カタパルト\",\"desc\":\"アクティブ：隣接する味方ポーンを直線上の最も遠い空きマスへ飛ばす。\"},\"ROOK_TRACTOR_BEAM\":{\"name\":\"トラクタービーム\",\"desc\":\"アクティブ：直線上の 3 マスより先の最初の駒を 1 マス引き寄せる（安定化ユニットは免疫）。\"},\"ROOK_SHOCKWAVE\":{\"name\":\"衝撃波\",\"desc\":\"アクティブ：直線上の 3 マス以内の最初の駒を 1 マス押し出す。衝突時は相殺。扁平味方はスタック（安定化ユニットは免疫）。\"},\"ROOK_FORBIDDEN_ZONE\":{\"name\":\"禁止区域\",\"desc\":\"ルークと同じ行/列にいる敵の移動力を 1 に制限。\"},\"ROOK_ION_CANNON\":{\"name\":\"イオンキャノン\",\"desc\":\"アクティブ：直線上のキング以外の全ユニットを破壊（クールダウン：5）。\"},\"ROOK_IRON_CURTAIN\":{\"name\":\"鉄のカーテン\",\"desc\":\"アクティブ：ルークの行全体をロックし、2ターンの間敵の車/象/後/兵は進入も通過も不可（馬と王は影響なし）。クールダウン：3。\"},\"ROOK_COVER\":{\"name\":\"カバー\",\"desc\":\"接続中、隣接する味方ポーンは次のターン開始時にシールドを獲得（破壊後クールダウンあり）。\"},\"ROOK_CONCUSSION\":{\"name\":\"コンカッション\",\"desc\":\"3 マス以上移動後、着地点付近の敵ポーンを 1 ターン凍結。\"},\"ROOK_SUPPLY_STATION\":{\"name\":\"補給ステーション\",\"desc\":\"移動経路が補給タイルになる（2ターン）：味方がここで配置されると5ゴールド返還される（1ステージ最大30G）。既存の特殊タイルを上書きすることはできない。\"},\"QUEEN_COMMAND\":{\"name\":\"コマンド\",\"desc\":\"隣接する味方が全方向に 1 マス移動可能になる。\"},\"QUEEN_AURA\":{\"name\":\"オーラ\",\"desc\":\"2 マス以内の敵ルークとビショップの移動を 2 に制限。\"},\"QUEEN_PROVISION\":{\"name\":\"プロビジョン\",\"desc\":\"接続中、毎ターン 2 ゴールド生成。\"},\"QUEEN_GRACE\":{\"name\":\"グレース\",\"desc\":\"捕獲後、敵の制御圏内に着地したなら再度移動可能。\"},\"QUEEN_DOMINATE\":{\"name\":\"ドミネイト\",\"desc\":\"隣接する敵をサイレンス状態にし、スキルを失わせる。\"},\"QUEEN_DECOY\":{\"name\":\"デコイ\",\"desc\":\"死亡時、予備のポーンを消費して生存し、テレポートする。\"},\"QUEEN_LINKAGE\":{\"name\":\"リンケージ\",\"desc\":\"配置時に近くに最大 2 体のポーンを自動配置。\"},\"QUEEN_BRIBE\":{\"name\":\"買収\",\"desc\":\"捕獲した敵ポーンを 50% の確率で予備に加える。\"},\"QUEEN_MULTICAST\":{\"name\":\"マルチキャスト\",\"desc\":\"接続中、捕獲せずに移動したなら再度移動可能。\"},\"QUEEN_INSIGHT\":{\"name\":\"インサイト\",\"desc\":\"ボードにいる間、すべての敵のステルスを暴く。\"},\"QUEEN_RECALL\":{\"name\":\"リコール\",\"desc\":\"アクティブ：キングに隣接する空きマスへテレポート（クールダウン：3）。\"},\"QUEEN_TIME_WARP\":{\"name\":\"タイムワープ\",\"desc\":\"5 ターンごとに「待った」回数を 1 得る。\"},\"QUEEN_NEMESIS\":{\"name\":\"ネメシス\",\"desc\":\"キングが王手（チェック）の際、クイーンは障害物を無視して移動可能。\"},\"QUEEN_ROOK_AUTHORITY\":{\"name\":\"ルーク統制\",\"desc\":\"クイーンが接続中なら、最も近い味方ルークを強制接続。\"},\"QUEEN_BISHOP_AUTHORITY\":{\"name\":\"ビショップ統制\",\"desc\":\"クイーンが接続中なら、最も近い味方ビショップを強制接続。\"},\"KING_CHARISMA\":{\"name\":\"カリスマ\",\"desc\":\"2 マス以内のポーンが最大 2 マスのクイーンのような移動を得る。\"},\"KING_RADIATION\":{\"name\":\"放射\",\"desc\":\"初期 network 接続範囲を 2 マスに拡大。\"},\"KING_STEADY\":{\"name\":\"ステディ\",\"desc\":\"強制移動効果を無効化。\"},\"KING_REWARD\":{\"name\":\"報奨\",\"desc\":\"2 マス以内で味方が捕獲すると追加で 5 ゴールド生成。\"},\"KING_FORTIFY\":{\"name\":\"フォーティファイ\",\"desc\":\"味方のルークに隣接中、ポーンとナイトからの攻撃を無効化。\"},\"KING_BACKUP\":{\"name\":\"バックアップ\",\"desc\":\"隣接ユニットがいない場合、3 マス以内の最も近い味方と接続。\"},\"KING_OVERSEER\":{\"name\":\"オーバーシア\",\"desc\":\"味方のネット接続駒（王を除く）が 5 つ以上の場合、毎ターン 2 ゴールド獲得（最大 40 ゴールド）。\"},\"KING_ROYAL_GUARD\":{\"name\":\"近衛召集\",\"desc\":\"アクティブ：10G 消費して近くにポーンを生成（このレベル限定）。\"},\"KING_TAXATION\":{\"name\":\"課税\",\"desc\":\"味方が捕らえられるたびに 15 ゴールド生成。\"},\"KING_SWAP\":{\"name\":\"スワップ\",\"desc\":\"アクティブ：2 マス以内の味方と位置を入れ替える。\"},\"KING_REFLECTION\":{\"name\":\"反射シールド\",\"desc\":\"1 マス以内の味方を捕らえた敵を即座に破壊。\"},\"KING_COMMANDER\":{\"name\":\"コマンダー\",\"desc\":\"王の周囲2マス以内の味方ナイトが、着地時に最も近い敵1体を1ターン凍結。\"},\"KING_GRAND_CASTLE\":{\"name\":\"グランドキャッスル\",\"desc\":\"アクティブ：ボード上の任意の味方ルークと位置を入れ替える。\"},\"KING_SOUL_LINK\":{\"name\":\"ソウルリンク\",\"desc\":\"死亡時、Lv.1 ポーンが存在すればそれが新しいキングになる。\"},\"KING_HOLY_DOMAIN\":{\"name\":\"聖域ドメイン\",\"desc\":\"2 マス以内の味方はすべての弱体化状態を無効化。\"},\"KING_STASIS\":{\"name\":\"ステイシス\",\"desc\":\"アクティブ：3 マス以内のキング以外を無期限に石化（戦闘中 1 回）。\"},\"KING_ROYAL_PATH\":{\"name\":\"王道\",\"desc\":\"行/列に敵がいない場合、キングは 2 マス移動可能（捕獲不可）。\"},\"KING_LOGISTICS\":{\"name\":\"ロジスティクス\",\"desc\":\"キングに隣接して配置した駒 1 つにつき 3 ゴールド返金。\"},\"KING_DECOY_DOUBLE\":{\"name\":\"シャドウダブル\",\"desc\":\"移動後にデコイターミナルを残す。\"},\"KING_MARTYRDOM\":{\"name\":\"殉教\",\"desc\":\"死亡時に予備が空なら、全味方を吸収して 5x5 爆発を起こし復活。\"},\"KING_ROYAL_DECORATION\":{\"name\":\"ロイヤルデコレーション\",\"desc\":\"ターン開始時、隣接するスキルのない味方のポーンにランダムなコモンスキルを1つ付与する。\"},\"GENERIC_ALGORITHM_SWAP\":{\"name\":\"アルゴリズムスワップ\",\"desc\":\"アクティブ：1 マス以内の味方（非キング）と位置を入れ替える。\"},\"GENERIC_BACKUP_BUFFER\":{\"name\":\"バックアップバッファ\",\"desc\":\"未接続時、凍結を 1 ターン遅らせる。\"},\"GENERIC_RAPID_DEPLOY\":{\"name\":\"高速配置\",\"desc\":\"配置時に 10% の確率でターンを消費しない。\"},\"GENERIC_COATING\":{\"name\":\"コーティング\",\"desc\":\"環境デバフ（重力トラップ、感染など）を無効化。\"},\"GENERIC_SHARPEN\":{\"name\":\"研磨\",\"desc\":\"捕獲時に追加で 3 ゴールド得る。\"},\"GENERIC_CHAFF\":{\"name\":\"チャフ\",\"desc\":\"攻撃を受けた際、50% の確率で回避し隣接マスへ移動。\"},\"GENERIC_RECALL\":{\"name\":\"リコール\",\"desc\":\"アクティブ：この駒を予備に戻す。\"},\"GENERIC_LOGIC_LOCK\":{\"name\":\"ロジックロック\",\"desc\":\"攻撃範囲内の敵（キング以外）はサイレンス状態になる。\"},\"GENERIC_MIRRORING\":{\"name\":\"ミラーリング\",\"desc\":\"隣接する味方の基本移動をコピーする。\"},\"GENERIC_PARASITE\":{\"name\":\"パラサイト\",\"desc\":\"死亡時に攻撃者に付着し、毎ターン 50% で凍結させる。\"},\"GENERIC_HIVE_KERNEL\":{\"name\":\"同期プロトコル\",\"desc\":\"この駒が接続されていれば、同種の全駒が接続状態になる。\"},\"GENERIC_FIREWALL\":{\"name\":\"ファイアウォール\",\"desc\":\"パッシブ：最大移動を 3 に制限。遠隔捕獲、強制移動、色変化、サイレンスを無効化。キング装備不可。\"},\"GENERIC_INTIMIDATION\":{\"name\":\"威圧\",\"desc\":\"パッシブ：敵のポーンはこの駒を捕らえられない。\"},\"GENERIC_LOGIC_BOMB\":{\"name\":\"ロジックボム\",\"desc\":\"死亡時に攻撃者のバフを剥ぎ取り、永久にサイレンス状態にする。\"},\"GENERIC_DATA_MINING\":{\"name\":\"データマイニング\",\"desc\":\"スキルを持つ敵を捕らえると 10 ゴールド得る。\"},\"GENERIC_RECURSIVE_STRIKE\":{\"name\":\"再帰ストライク\",\"desc\":\"捕獲後、次のターンにその撃破した駒の移動ロジックを継承。\"},\"GENERIC_SCRAP_RECYCLE\":{\"name\":\"スクラップリサイクル\",\"desc\":\"捕獲せずに移動すると 1 ゴールド得る（レベル毎最大 10G）。\"},\"GENERIC_ABSOLUTE_REQUISITION\":{\"name\":\"絶対徴用\",\"desc\":\"アクティブ：10ゴールドを消費し、射程内の「ネットワーク切断」状態の敵ユニット（キング、クイーンを除く）を1体破壊し、その価値を回収する。\"},\"AURA_REWARD\":{\"name\":\"報奨オーラ\",\"desc\":\"捕獲時に追加で 5 ゴールド得る。\"},\"AURA_SUPPRESSED\":{\"name\":\"抑制オーラ\",\"desc\":\"移動範囲が制限。\"},\"BACKUP_BUFFER_ACTIVE\":{\"name\":\"予備バッテリー作動\",\"desc\":\"一時的に未接続状態を無視。\"},\"BISHOP_CONVERSION\":{\"name\":\"洗礼\",\"desc\":\"アクティブ：隣接する敵ポーンを永久に寝返らせる。ビショップは消滅。\"},\"BISHOP_HOLY_LIGHT\":{\"name\":\"ホーリーライト\",\"desc\":\"ターン開始時、隣接する味方の弱体化を解除。\"},\"BISHOP_PENETRATION\":{\"name\":\"貫通\",\"desc\":\"スライド時に敵ユニット 1 体を通りぬけることができるが、味方を通り抜けたり 2 体を捕獲することはできない。\"},\"BISHOP_SACRED_ZONE\":{\"name\":\"神聖領域\",\"desc\":\"対角線上の敵を 1 ターン凍結させる。\"},\"BISHOP_ZEALOT\":{\"name\":\"ジーロット\",\"desc\":\"捕獲を行った次のターン、クイーンのような無限移動を得る。\"},\"BISHOP_SHADOW_SWAP\":{\"name\":\"シャドウスワップ\",\"desc\":\"アクティブ：同一直線上（視線内）の敵駒と位置を交換する。対象は1ターン凍結される。\"},\"CHARISMA_BUFF\":{\"name\":\"カリスマバフ\",\"desc\":\"2 マスの全方向無限移動を得る。\"},\"COMMANDER_AURA\":{\"name\":\"コマンダーオーラ\",\"desc\":\"着地時に最も近い敵1体を凍結。\"},\"COMMAND_AURA\":{\"name\":\"コマンドオーラ\",\"desc\":\"全方向に 1 マス移動可能。\"},\"ID_CONNECTED\":{\"name\":\"接続\",\"desc\":\"キングに接続。\"},\"GODHOOD_LINK\":{\"name\":\"神権リンク\",\"desc\":\"绝对王政により強制的に接続。\"},\"HOLY_DOMAIN_AURA\":{\"name\":\"聖域オーラ\",\"desc\":\"すべての弱体化状態を無効化。\"},\"INFECTED\":{\"name\":\"感染\",\"desc\":\"毎ターン拡大。接続されている場合ゴールドを消費。\"},\"IRON_CURTAIN\":{\"name\":\"鉄のカーテン\",\"desc\":\"アイアンカーテンの所有舗だけが進入できる。敵の駒は進入できない。\"},\"KNIGHT_CHARGE\":{\"name\":\"チャージ\",\"desc\":\"捕獲ジャンプ时、着地点付近の敵ポーンを 1 ターン凍結。\"},\"KNIGHT_PHANTOM_STRIKE\":{\"name\":\"ファントムストライク\",\"desc\":\"障害物を無視して「遠隔捕獲」が可能だが、元の位置に戻る必要がある。\"},\"KNIGHT_SABOTAGE\":{\"name\":\"サボタージュ\",\"desc\":\"着地点付近の敵のトラップや特殊効果を破壊。\"},\"KNIGHT_VALIANT\":{\"name\":\"ヴァリアント\",\"desc\":\"味方がいない場所に捕獲着地したならシールドを得る。\"},\"PARASITIZED\":{\"name\":\"寄生\",\"desc\":\"毎ターン 50% の確率で切断/凍結。\"},\"PAWN_TRAITOR\":{\"name\":\"裏切り者\",\"desc\":\"死亡時 50% で攻撃者を寝返らせ、1 ターン裏切り状態にする。\"},\"PAWN_VANGUARD\":{\"name\":\"前衛\",\"desc\":\"敵陣にいる間は常に接続状態。\"},\"RAILWAY_BUFF\":{\"name\":\"鉄道ブースト\",\"desc\":\"鉄道上のポーンの移動力 +1。\"},\"REFLECTION_AURA\":{\"name\":\"反射オーラ\",\"desc\":\"捕獲時に攻撃者にダメージを与える。\"},\"SQUARE_BASTION_FIELD\":{\"name\":\"バスティオンフィールド\",\"desc\":\"このマスの味方に遠距離攻撃耐性を付与。\"},\"SQUARE_RAILWAY\":{\"name\":\"鉄道 (マス)\",\"desc\":\"ポーンがこのマスに立つと、正面へ 2 マス進める（線路の向きの設定は未使用）。\"},\"TAXATION_AURA\":{\"name\":\"課税オーラ\",\"desc\":\"死亡時に 15 ゴールド生成。\"},\"ZEALOT_BUFF\":{\"name\":\"ジーロットバフ\",\"desc\":\"滑る移動能力を獲得。\"},\"BETRAYED\":{\"name\":\"裏切り\",\"desc\":\"一時的に寝返った状態。1 ターン後に元に戻る。\"},\"SMOKE\":{\"name\":\"煙\",\"desc\":\"遠距離直線攻撃を無効化。\"},\"SQ_AFTERIMAGE\":{\"name\":\"残像\",\"desc\":\"ブラッドドレスのクイーンが駒を取った地点に 3 ターンの残像を残す。クイーン本人は距離を無視してそのマスへ移動できる。\"},\"FROZEN_TRAP\":{\"name\":\"凍結トラップ\",\"desc\":\"進入したユニットを凍結させる。\"},\"VOID_FISSURE_SQUARE\":{\"name\":\"ヴォイドの裂け目\",\"desc\":\"空間が引き裂かれている。このマスは永久に通行不能。\"},\"SUPPLY_DEPOT_SQUARE\":{\"name\":\"補給拠点\",\"desc\":\"味方の補給ルークが盤上にいる時、ここへの配置で 5 ゴールド返金。1 ラン最大 30 ゴールド。\"},\"VOID_ANCHOR\":{\"name\":\"ヴォイドアンカー\",\"desc\":\"このマスは完全に封鎖されており、どの駒も停止できず配置もできない。\"},\"BARRICADE\":{\"name\":\"バリケード\",\"desc\":\"すべての移動を遮断する障害物。\"},\"JAMMING_TOWER\":{\"name\":\"信号塔\",\"desc\":\"このマスに立つ駒はネットワークソースとして扱われ、全体ジャミング中でも接続を提供する。\"},\"HOLY_LAND\":{\"name\":\"聖地\",\"desc\":\"聖なる土地。通常の範囲を無視して直接配置が可能。\"},\"LOUIS_ABSOLUTE_CORONA\":{\"name\":\"絶対的コロナ\",\"desc\":\"キングは巨大な 5x5 ネットワークを放射するが、信号の中継は不可。味方は太陽の近くに留まる必要がある。\"},\"QUEEN_MOVE\":{\"name\":\"王の武力\",\"desc\":\"キングは肉体的な重荷を脱ぎ捨て、クイーンと同等の機動力を得た。\"},\"RICHARD_FORWARD_ONLY\":{\"name\":\"一方通行の十字軍\",\"desc\":\"信仰は前のみを向く。ネットワーク信号は敵陣側にのみ伝播する。\"},\"BOSS_PERMISSION_DENIED\":{\"name\":\"アクセス拒否\",\"desc\":\"ボスは 3 ターンごとにランダムな駒の種類を無効化する。\"},\"BOSS_PACIFISM\":{\"name\":\"平和プロトコル\",\"desc\":\"最初の 5 ターン、双方とも捕獲アクションが不可。\"},\"INVULNERABLE\":{\"name\":\"無敵\",\"desc\":\"すべてのダメージに対する絶対的な耐性。\"},\"BOSS_ECHO_CHAMBER\":{\"name\":\"エコーチェンバー\",\"desc\":\"駒の属性、スキル、装備を隠す。\"},\"BOSS_BOARD_ROTATION\":{\"name\":\"盤面回転\",\"desc\":\"4 ターンごとに、全駒を時計回りに 90 度回転させる。\"},\"BOSS_QUANTUM_MIRAGE\":{\"name\":\"量子ミラージュ\",\"desc\":\"致命傷を受けた際、ランダムな敵と入れ替わって生存。\"},\"BOSS_WARP_STORM\":{\"name\":\"ワープストーム\",\"desc\":\"テレポートさせるポータルをランダムに生成。\"},\"BOSS_MUTINY\":{\"name\":\"反乱\",\"desc\":\"6 ターンごとに、味方の駒 1 つをランダムに寝返らせる。\"},\"BOSS_NECROMANCER\":{\"name\":\"ネクロマンサー\",\"desc\":\"脱落したプレイヤーの駒を敵のゾンビとして蘇らせる。\"},\"ZOMBIE_DECAY\":{\"name\":\"ゾンビ\",\"desc\":\"1 ターン後に肉体腐敗により自然死する。\"},\"BOSS_MIRROR_MATCH\":{\"name\":\"クローン工場\",\"desc\":\"開始時、クローンを生成し、プレイヤーの初期名簿と同じコピーを召喚する。\"},\"BOSS_HIVE_MOTHER\":{\"name\":\"寄生母巣\",\"desc\":\"定期的にボード上に虫卵を孵化させ、破壊しないと強力なユニットになる。\"},\"EGG_HATCH\":{\"name\":\"エイリアンの卵\",\"desc\":\"3 ターン後に孵化し、強力な駒に変化する。\"},\"BOSS_ENRAGE\":{\"name\":\"激昂タイマー\",\"desc\":\"4 ターンごとに 2 回行動する。\"},\"BOSS_MASS_ERASURE\":{\"name\":\"軌道爆撃\",\"desc\":\"5 ターンごとに、ランダムな 3x3 範囲を攻撃。着弾の 2 ターン前に対象範囲が危険警告で光る。\"},\"BOSS_QUANTUM_SWAP\":{\"name\":\"量子もつれ\",\"desc\":\"5 ターンごとに、ランダムな白い駒 2 つを入れ替える。\"},\"BOSS_SENTINEL\":{\"name\":\"巡回センチネル\",\"desc\":\"無敵のユニット。時計回りに巡回し、触れたものを破壊。\"},\"SQUARE_LASER_GRID\":{\"name\":\"レーザーグリッド\",\"desc\":\"奇数ラウンド開始時に通電し、上の駒を破壊する。キングは免疫。\"},\"ANTI_PAWN_MINE\":{\"name\":\"対ポーン地雷\",\"desc\":\"「ポーン」が踏んだ時だけ起爆し、周囲 3x3 の駒を破壊（キングは免疫）して地雷を消費する。他の駒は影響を受けない。\"},\"TIME_ANOMALY\":{\"name\":\"タイム・アノマリー\",\"desc\":\"進入したユニットを 3 ターン追放する。\"},\"ICE_SLICK\":{\"name\":\"アイススリック\",\"desc\":\"障害物や端に当たるまで滑り続ける。\"},\"WORMHOLE_A\":{\"name\":\"ワームホール A\",\"desc\":\"踏むと対になる B へ移動する。出口が埋まっている場合は転送されない。\"},\"WORMHOLE_B\":{\"name\":\"ワームホール B\",\"desc\":\"踏むと対になる A へ移動する。出口が埋まっている場合は転送されない。\"},\"MUD_SWAMP\":{\"name\":\"泥沼\",\"desc\":\"直線スライドする駒（クイーン/ルーク/ビショップ）は進入できるが、それ以上進めない。ナイトとポーンは影響を受けない。\"},\"CONVEYOR_BELT\":{\"name\":\"ベルトコンベア\",\"desc\":\"自分のターン開始時、上の駒を矢印方向へ 1 マス押し出す。盤外に出ると落下死し、他の駒に衝突すると両方消滅する。\"},\"OVERCLOCK_NODE\":{\"name\":\"オーバークロックノード\",\"desc\":\"ターン開始時、このマスに立つ駒のすべてのスキルクールダウンを解除する。\"},\"DATA_VAULT\":{\"name\":\"データ保管庫\",\"desc\":\"味方の駒がこのマスに留まっている間、毎ターン開始時に 3 ゴールドを得る。\"},\"SIGNAL_RELAY\":{\"name\":\"信号リレー\",\"desc\":\"このマスに立つ駒は信号源として扱われ、全体断網中でも局所的な接続を維持する。\"},\"FARADAY_CAGE\":{\"name\":\"ファラデーケージ\",\"desc\":\"駒がこのマスに踏み入ると即座に 2 ターン凍結。ターン開始時にまだここにいる駒は再び凍結される。\"},\"PAWN_UNSTABLE_CORE\":{\"name\":\"不安定な自爆兵\",\"desc\":\"死亡時に5x5の広範囲自爆を誘発。捕獲時に50%の確率で自爆し、連鎖爆発を引き起こす。敵味方問わず、すべてを破壊する。\"},\"ROOK_VOID_FISSURE\":{\"name\":\"ヴォイド亀裂砲\",\"desc\":\"アクティブ：直線上の最初の目標を破壊し、そのマスを永久に通行不能にする（1ゲーム中3回まで、クールダウン: 5ターン）。\"},\"ROOK_EJECTION\":{\"name\":\"射出\",\"desc\":\"アクティブ：隣接する十字方向の味方ポーンを、同一直線上の最も遠い空きマスへ射出する。\"},\"ROOK_SUPPLY_DEPOT\":{\"name\":\"補給拠点\",\"desc\":\"移動経路が補給タイルになる（2ターン）：味方がここで配置されると5ゴールド返還される（1ステージ最大30G）。既存の特殊タイルを上書きすることはできない。\"},\"QUEEN_CORONATION\":{\"name\":\"戴冠式\",\"desc\":\"ターン開始時、隣接するスキルのない味方のポーンにランダムなコモンスキルを1つ付与する。\"},\"QUEEN_GRAVITY_WELL\":{\"name\":\"重力場\",\"desc\":\"隣接する敵が2体以下の場合、それらの敵は重力ロックされ、移動範囲が1マスに制限される。\"},\"QUEEN_REQUISITION\":{\"name\":\"強制徴用\",\"desc\":\"アクティブ：10ゴールドを消費し、射程内の未接続状態の敵ユニット（キング、クイーンを除く）を1体破壊し、その価値を回収する。\"},\"EQ_HOOF_ARMOR\":{\"name\":\"蹄の重甲\",\"desc\":\"ジャンプの着地点に敵のポーンがある場合、それを直接捕獲し、このターンに追加の移動を得る。\"}}"),
	battleLogs: {
		LOG_CHECKMATE_PURGED: "チェックメイト：ネットワーク麻痺！",
		LOG_SWALLOW_GOODBYE: "「さようなら、ツバメ。」",
		LOG_DAIZONG_MOVE: "「朕の心は決まった、前へ進め！」",
		LOG_DAIZONG_GUARD: "「直ちに陛下を護衛せよ！」",
		LOG_DAIZONG_CAPTURED: "「陛下が北へ連れ去られた！」",
		LOG_LOUIS_CORONA_DIMMED: "「神権が揺らぐ：コロナが陰る！」",
		LOG_QUANTUM_SWAP: "量子互換",
		LOG_PERMISSION_DENIED: "権限改ざん: {banned} を無効化",
		LOG_BOARD_ROTATION: "盤面自転！",
		LOG_QUANTUM_MIRAGE: "量子分身が身代わりに！",
		LOG_TELEPORT: "テレポート",
		LOG_WARP_STORM: "乱気流テレポート",
		LOG_MUTINY: "寝返りプロトコル",
		LOG_NECRO_REVIVE: "死霊復興",
		LOG_EGG_HATCHED: "孵化完了！",
		LOG_EGG_HATCHING: "孵化中 残り {count}",
		LOG_ENRAGE_THRESHOLD: "激昂閾値！連続行動",
		LOG_ENRAGE_DOUBLE: "激怒：ダブルアクション！",
		LOG_TIME_BANISHED: "時間放逐",
		LOG_TIME_REBIRTH: "帰還",
		LOG_MUD_SWAMP: "泥沼に嵌まる",
		LOG_FALL_OFF: "深淵に転落",
		LOG_CRASH: "衝突粉砕",
		LOG_CD_CLEARED: "クールダウンクリア",
		LOG_GOLD_MINUS: "-{amount}G",
		LOG_GOLD_PLUS: "+{amount}G",
		LOG_RAILGUN_LOCK_50: "軌道砲ロックオン：チャージ 50%",
		LOG_RAILGUN_LOCK_100: "警告：軌道砲ロック完了！チャージ 100% 直ちに退避せよ！",
		LOG_KING_RANSOM: "「巨額の身代金回収：国王帰還！」",
		LOG_CRUSADE_REWARD: "聖戦 +{amount}",
		LOG_UNYIELDING_RECALL: "不屈：撤回",
		LOG_SWALLOW_RESURRECT: "「鉛の心粉砕：ツバメ再構築！」",
		LOG_ARTHUR_SHIELD: "「誓いの共鳴：円卓の大盾！」",
		LOG_TROJAN_BREAK: "「木馬破裂：トロイの戦士奇襲！」",
		LOG_TROJAN_WAIT: "木馬潜伏中 ({turns}T)",
		LOG_TROJAN_DEPLOY: "「秘策：トロイの木馬を配備！」",
		LOG_SUPPLY_DEPOT: "+5G 補給",
		LOG_NO_SPACE: "周囲に空きスペースなし",
		LOG_NO_FUNDS: "ゴールド不足",
		LOG_GUARD_SPAWN: "護衛出現",
		LOG_TAXATION_REWARD: "慰問金 +15",
		LOG_SWAP: "入れ替え",
		LOG_CASTLING: "キャスリング",
		LOG_SOUL_LINK: "魂のリンク：王位継承！",
		LOG_ALREADY_USED: "使用済み",
		LOG_STASIS_LOCK: "時空ロック！",
		LOG_LOGISTICS_REWARD: "協調 +3",
		LOG_DECOY_TERMINAL: "影ターミナル",
		LOG_MARTYRDOM: "最後の犠牲：涅槃から新生！",
		LOG_GRACE: "優雅なステップ",
		LOG_DECOY_DEATH: "デコイ身代わり",
		LOG_BRIBE_SUCCESS: "調略成功",
		LOG_MIRROR_MULTICAST: "ミラー・ダブルアクション",
		LOG_TACTICAL_RECALL: "戦術的撤退",
		LOG_NO_EMPTY_KING: "キングの周囲に空きスペースなし",
		LOG_TIME_WARP: "タイムワープ：待った+1",
		LOG_ROOK_LINK: "神権リンク：ルーク",
		LOG_BISHOP_LINK: "神権リンク：ビショップ",
		LOG_GRAVITY_WELL: "重力場作動",
		LOG_CORONATION: "叙勲: {skill}",
		LOG_REQUISITION_SUCCESS: "徴用成功",
		LOG_ENTER_BASTION: "バスティオン展開",
		LOG_EXIT_BASTION: "バスティオン解除",
		LOG_MAGNET: "マグネット",
		LOG_EJECTION: "射出！",
		LOG_CATAPULT: "投射！",
		LOG_ION_CANNON: "軌道砲",
		LOG_IRON_CURTAIN: "鉄のカーテン",
		LOG_VOID_FISSURE_REMAINING: "ヴォイド亀裂！残り {remaining} 回",
		LOG_VOID_FISSURE_EMPTY: "ヴォイド亀裂！弾薬切れ",
		LOG_TOW_HOOK_DRAG: "牽引！",
		LOG_TOW_HOOK_KILL: "フック撃破",
		LOG_TRACTOR_PULL: "引き寄せ",
		LOG_SHOCKWAVE_PUSH: "押し出し",
		LOG_SHOCKWAVE_COLLIDE: "激突！",
		LOG_RECALLED: "回収完了",
		LOG_ZEALOT: "狂熱！",
		LOG_RESURRECT: "復活: {type}",
		LOG_AURORA: "オーロラ狙撃",
		LOG_CROSS_JUMP: "十字二段移動",
		LOG_PHANTOM_RETURN: "ファントムリターン",
		LOG_TACTICAL_SWAP: "戦術的入れ替え！",
		LOG_FULL_DUPLEX: "プラグアンドプレイ作動！",
		LOG_FULL_DUPLEX_AI: "AI プラグアンドプレイ！",
		LOG_CHAIN_JUMP: "連跳！",
		LOG_CHAIN_JUMP_AI: "AI 連跳！",
		LOG_MIRAGE_DEATH: "ファントム身代わり",
		LOG_RIFT_TELEPORT: "裂け目テレポート",
		LOG_VENGEANCE_STRIKE: "復讐ストライク",
		LOG_ASSASSIN_EVOLVE: "暗殺進化！",
		LOG_PAWN_EVOLVE: "羽化進化！",
		LOG_CORE_OVERLOAD: "コアオーバーロード！",
		LOG_UNDOS_PLUS: "待った+{amount}",
		LOG_SAVES_PLUS: "セーブ+{amount}",
		LOG_ALGORITHM_SWAP: "アルゴリズムスワップ",
		LOG_BACKUP_BUFFER: "予備バッテリー",
		LOG_RAPID_DEPLOY: "高速配置：連動！",
		LOG_CHAFF_EVADE: "回避！",
		LOG_RECALL_SUCCESS: "回収成功",
		LOG_PARASITE_INTERFERENCE: "寄生干渉",
		LOG_LOGIC_BOMB: "ロジックボム：封印！",
		LOG_DATA_MINING: "データマイニング +{amount}",
		LOG_TOWER_BUILT: "信号塔が建設されました",
		LOG_SPYWARE: "データを窃取する +5",
		LOG_TERMINAL_OFFLINE: "TERMINAL OFFLINE",
		LOG_CONVERSION: "洗礼",
		LOG_CLONE_FACTORY: "クローン工場",
		LOG_HATCH_EGG: "孵化",
		LOG_OVERLOAD: "オーバーロード",
		LOG_DRAFT_ORDER: "強制徴集",
		LOG_MIDAS: "マイダス +30",
		LOG_SACRIFICE_SUCCESS: "生贄成功",
		LOG_ANTENNA_ACTIVE: "アンテナ作動！",
		LOG_PRISM_REFLECT: "プリズム反射！",
		LOG_PHOENIX_REBIRTH: "不死鳥の再生",
		LOG_ROYAL_GUARD: "近衛の犠牲",
		LOG_ALLOY_BROKEN: "合金破損",
		LOG_TACTICAL_OPS: "戦術行動：追加行動",
		LOG_DIPLOMATIC_INTERCEPT: "外交特権による妨害",
		LOG_WHEEL_TRIGGER: "運命の輪：{item}",
		LOG_THRONE_REWARD: "玉座の収益 +{amount}",
		LOG_HACKER_TERMINAL: "リモートハック",
		LOG_TRAMPLE: "蹂躙",
		LOG_GHOST_RIDE: "ゴーストテレポート",
		LOG_LEVEL_UP: "レベルアップ！",
		LOG_SIREN_CRASH: "セイレーンの歌：衝突！",
		LOG_SIREN_DRIFT: "セイレーンの歌：漂流",
		LOG_ENERGY_DEPLETED: "エネルギー枯渇",
		LOG_IMMUNE: "免疫",
		LOG_BLOCKED: "進路妨害",
		LOG_INVALID_TARGET: "無効な対象",
		LOG_GOLD_FOIL_CONVERT: "金箔剥離",
		LOG_MIDAS_LOOT: "黄金の蹄戦利品：{name} を獲得",
		LOG_MIDAS_BAG_FULL: "装備欄が一杯で、戦利品を保存できません",
		LOG_ASSIMILATED: "データ同化",
		LOG_EMPTY_REQUIRED: "空きマスである必要があります",
		LOG_GRAVITY_LOCKED: "重力拘束",
		LOG_SINGULARITY_COLLISION: "特異点衝突！",
		LOG_FAITH_SIPHON: "信仰吸収 +2G",
		LOG_SPATIAL_SCRAMBLE: "空間スクランブル",
		LOG_BETRAYED: "裏切られた！",
		LOG_BOOMERANG: "ブーメラン！",
		LOG_CHARMED: "魅了された！",
		LOG_COATING_PROTECT: "コーティング防御",
		LOG_DARK_BARGAIN_CURSED: "ダークバーゲン：呪われた信号を検出",
		LOG_DEPLOY_FAILED: "信号喪失：展開ブロック",
		LOG_HOLY_BLESSING: "ホーリーブレッシング！",
		LOG_IMMUNE_BLOCKED: "免疫：ブロック",
		LOG_LOOT_BOX_OPEN: "戦利品：{item}",
		LOG_NO_ADJACENT_ALLY: "隣接する味方がいない",
		LOG_RICOCHET: "跳弾！",
		LOG_SATELLITE_ASCENSION: "衛星覚醒：新王即位！",
		LOG_SHADOW_SWAP: "シャドウスワップ！",
		LOG_SKILL_SILENCED: "沈黙",
		LOG_SQUARE_OCCUPIED: "マスが占有されている",
		LOG_STOLEN: "盗まれた！",
		LOG_SUPLEX: "ナイトスープレックス！",
		LOG_SUPLEX_COLLISION: "スープレックス衝突！",
		LOG_SUPLEX_WALL: "壁への衝突！",
		LOG_VENTURE_CAPITAL: "ベンチャーキャピタル +10"
	},
	unlockRequirements: {
		HAPPY_PRINCE: "[大富豪]：1ゲーム中に所持ゴールドが1000に達する。",
		ARTHUR: "[騎士の誓い]：累計で予備からナイトを50回配置する。",
		ODYSSEUS: "[時空跳躍]：累計でテレポートまたは位置交換を30回行う。",
		LOUIS_XIV: "[太陽王]：1ターンに10体以上の味方を接続状態にする。",
		RICHARD: "[御駕親征]：キングが敵のキングを直接撃破する。",
		PAWN_UNSTABLE_CORE: "[コアオーバーロード]：ポーンで累計30体の敵を撃破する。",
		PAWN_RELAY: "[強行軍]：ポーンを累計100回移動させる。",
		PAWN_SACRIFICE: "[消耗品]：ポーンが累計20回撃破される。",
		PAWN_INTERLOCK: "[兵団]：予備からポーンを累計30回配置する。",
		PAWN_PARASITE: "[絶対零度]：敵を累計50回凍結させる。",
		PAWN_TRAITOR: "[裏切り工作]：敵を累計10回寝返らせる。",
		PAWN_SWARM: "[群れの神話]：盤面に同時に6体以上の味方ポーンを維持する。",
		PAWN_OMEGA_MIRROR: "[進化の果て]：ポーンのレベルを5（MAX）に上げる。",
		PAWN_SATELLITE: "[孤島生存]：キングが未接続（凍結）状態で勝利する。",
		KNIGHT_GRAVITY_WELL: "[騎兵連隊]：ナイトを累計50回移動させる。",
		KNIGHT_TROJAN: "[陥落した騎士]：ナイトが累計10回撃破される。",
		KNIGHT_FULL_DUPLEX: "[電撃反応]：最初の3ターン以内に敵の高脅威ユニットを撃破する。",
		KNIGHT_CHAIN: "[電撃戦]：5ターン以内にステージをクリアする。",
		KNIGHT_RIFT: "[空間の裂け目]：累計でテレポートまたは位置交換を50回行う。",
		KNIGHT_MIDAS_TOUCH: "[ミダスタッチ]：変現などの効果で累計500ゴールド獲得する。",
		KNIGHT_TROJAN_KERNEL: "[ジャイアントキラー]：ナイトで敵のクイーン/ルークを累計10体撃破する。",
		BISHOP_CONDUIT: "[主教の巡礼]：ビショップを累計50回移動させる。",
		BISHOP_SILENCE: "[封印者]：敵を累計30回サイレンス状態にする。",
		BISHOP_OPTICAL_BLIND_ZONE: "[神の盾]：シールドで累計5回ダメージを無効化する。",
		BISHOP_ZEALOT: "[狂信者]：ビショップで累計20体の敵を撃破する。",
		BISHOP_SACRED_ZONE: "[神聖静止]：敵を累計20回凍結させる。",
		BISHOP_CONVERSION: "[信仰の跳躍]：ビショップの累計移動距離が30マスに達する。",
		BISHOP_RESURRECTION: "[死霊術師]：蘇生/身代わり効果を累計10回発動する。",
		BISHOP_AURORA: "[高次元の眼]：ビショップで6マス以上離れた敵を撃破する。",
		BISHOP_ABSOLUTE_BARRIER: "[嘆きの壁]：キングへの王手（チェック）を累計20回回避する。",
		ROOK_MAGNET: "[万有引力]：累計でユニットを10回強制移動させる。",
		ROOK_CARRIER: "[重量輸送]：ルークを累計50回移動させる。",
		ROOK_EJECTION: "[重装投下]：ルークを累計10回配置する。",
		ROOK_CATAPULT: "[投石機]：累計でユニットを30回強制移動させる。",
		ROOK_TRACTOR_BEAM: "[トラクタービーム]：累計でユニットを15回強制移動させる。",
		ROOK_SHOCKWAVE: "[衝撃波]：累計でユニットを20回強制移動させる。",
		ROOK_FORBIDDEN_ZONE: "[鉄壁の防衛]：ルークを1体も失わずに5回勝利する。",
		ROOK_ION_CANNON: "[軌道レーザー]：1回の移動でルークが7マス以上移動する。",
		ROOK_IRON_CURTAIN: "[不屈の意志]：シールドで累計15回ダメージを無効化する。",
		ROOK_VOID_FISSURE: "[空虚の領主]：BOSSステージで20ターン以上生存する。",
		QUEEN_MULTICAST: "[鏡像練習]：追加行動（Extra Move）を累計10回発動する。",
		QUEEN_INSIGHT: "[千里眼]：隠された敵のステルスを累計10回暴く。",
		QUEEN_RECALL: "[女王親征]：クイーンを累計30回移動させる。",
		QUEEN_REQUISITION: "[略奪者]：1回の戦闘で累計50ゴールド以上獲得する。",
		QUEEN_TIME_WARP: "[時の支配者]：累計で「待った」を100回使用する。",
		QUEEN_NEMESIS: "[復讐の刻]：クイーンで累計50体の敵を撃破する。",
		QUEEN_GRAVITY_WELL: "[重力の支配者]：敵を累計30回重力ロック/抑制する。",
		KING_DECOY_DOUBLE: "[シャドウステップ]：キングを累計50回移動させる。",
		QUEEN_ROOK_AUTHORITY: "[三位一体]：自軍のクイーン、ルーク、ビショップ、ナイトが同時に盤面に存在する。",
		QUEEN_BISHOP_AUTHORITY: "[王室の招集]：クイーンを累計5回配置する。",
		KING_SWAP: "[戦術位置交換]：累計で入れ替えやテレポートを20回行う。",
		KING_REFLECTION: "[武神王]：キングで直接5体の敵を撃破する。",
		KING_COMMANDER: "[不穏な動き]：キングを累計30回移動させる。",
		KING_GRAND_CASTLE: "[常勝の将]：累計で10回戦闘に勝利する。",
		KING_SOUL_LINK: "[不滅の意志]：1ゲーム中にキングを15回以上移動させる。",
		KING_HOLY_DOMAIN: "[浄化の光]：味方のデバフを累計20回解除する。",
		KING_STASIS: "[絶対静止]：盤面の50%以上のユニットが同時に凍結/石化状態になる。",
		KING_MARTYRDOM: "[逆境の新生]：キング1体のみで、予備も空の状態で勝利する。",
		GENERIC_RAPID_DEPLOY: "[総動員]：ユニットを累計50回配置する。",
		GENERIC_LOGIC_LOCK: "[ハッキング]：敵を累計20回サイレンス状態にする。",
		GENERIC_MIRRORING: "[極限オーバークロック]：追加行動を累計20回発動する。",
		GENERIC_PARASITE: "[システムクラッシュ]：敵全員が接続遮断/凍結により行動不能になる。",
		GENERIC_RECURSIVE_STRIKE: "[コンボマスター]：1戦中に5連撃（Combo x5）を達成する。",
		GENERIC_HIVE_KERNEL: "[集合精神]：1ターンに10体以上の味方を接続状態にする。",
		GENERIC_FIREWALL: "[最終防衛線]：累計で第3章を突破する。",
		EQ_SHOCK_STIRRUPS: "[衝撃波]：敵を累計10回凍結させる。",
		EQ_BASE_STATION: "[広域アンテナ]：1ターンに8体以上の味方を接続状態にする。",
		EQ_REACTIVE_ARMOR: "[鉄壁の装甲]：シールドで累計5回ダメージを無効化する。",
		EQ_BLOOD_DRESS: "[殺戮の旋律]：1戦中に3連撃（Combo x3）を達成する。",
		EQ_BOUNTY_MODULE: "[賞金稼ぎ]：累計で200ゴールド獲得する。",
		EQ_RESCUE_BEACON: "[サバイバー]：死亡回避/復活効果を累計5回発動する。",
		EQ_FULL_BAND_SCANNER: "[全帯域妨害]：累計で敵のトラップマスを10個破壊する。",
		EQ_BLACK_MARKET_LEDGER: "[ブラック契約]：ゴールドが0の状態でショップから装備を獲得する。",
		EQ_TOW_HOOK: "[フックアタック]：累計でユニットを10回強制移動させる。",
		EQ_ROYAL_SALUTE: "[兵卒キラー]：敵のポーンを累計50体撃破する。",
		SIGNAL_TOWER_DEFENSE: "[建築マニア]：信号塔の配置、または信号塔兵を累計5回配置する。",
		EQ_HACKER_TERMINAL: "[ロジックジャック]：敵のクイーンまたはルークを累計5回凍結させる。",
		EQ_GHOST_RIDE: "[いたずら]：累計でテレポート/位置交換を20回行う。",
		EQ_HIVE_CORE: "[小規模な群れ]：盤面に同時に4体のポーンを維持する。",
		EQ_TELESCOPIC_LEGS: "[長脚の騎士]：ナイトを累計20回移動させる。",
		EQ_PHOENIX_FEATHER: "[フェニックスの涅槃]：死亡回避/復活効果を累計10回発動する。",
		EQ_SCEPTER_OF_CHARM: "[魅了者]：敵を累計10回寝返らせる。",
		EQ_ROYAL_GUARD: "[忠実な盾]：キングの近衛効果を累計5回発動する。",
		EQ_TACTICAL_OPS: "[精鋭部隊]：一度も予備ユニットを配置せずに戦闘で勝利する。",
		EQ_DIPLOMATIC_IMMUNITY: "[孤高の狼]：キング1体のみで勝利する。",
		EQ_RELIC_OF_KINGS: "[王権の遺物]：キング1体のみで勝利する。",
		EQ_VENTURE_CAPITAL: "[資本家]：所持ゴールドが500に達する。",
		EQ_SWARM_INTELLIGENCE: "[虫群]：盤面に同時に8体のポーンを維持する。",
		EQ_ARROGANT_CREED: "[傲慢の代償]：キングが未接続状態で5ターン耐える。",
		EQ_QUEEN_ROOK_LINK: "[女王と車の連鎖]：1ゲーム中にクイーンとルークを同時に配置する。",
		EQ_QUEEN_BISHOP_LINK: "[女王と象の連鎖]：1ゲーム中にクイーンとビショップを同時に配置する。",
		EQ_GOLDEN_THRONE: "[黄金時代]：所持ゴールドが1000に達する。",
		EQ_DEFLATION: "[デフレの奇跡]：購入せずにショップを3回リロールする。",
		OVERCLOCK: "[オーバードライブ]：消耗品を累計10回使用する。",
		PARDON: "[常勝の覇者]：累計で5回戦闘に勝利する。",
		ILLEGAL_SLOT: "[改造マニア]：ユニットのレベルを3に上げる。",
		BLACK_ORDER: "[密輸業者]：ブラックマーケットで装備を累計10個売却する。",
		DRAFT_ORDER: "[買い物中毒]：ショップを累計10回リロールする。",
		DOOM_BROADCAST: "[ネットワーク主宰]：敵全員が未接続状態になる。",
		ROYAL_SACRIFICE: "[適者生存]：味方を累計5回手動で生贄/売却する。",
		REAPER_EXE: "[刈り入れ時]：最初の10ターン以内に敵を8体撃破する。",
		WHEEL_OF_FATE: "[カオス理論]：確率イベントを累計30回トリガーする。",
		MEDUSA: "[石化の凝視]：敵を累計100回凍結させる。",
		SINGULARITY_GRENADE: "[重力使い]：強制移動を累計25回発生させる。",
		SPATIAL_SCRAMBLER: "[カオス理論]：確率イベントを累計50回トリガーする。",
		KNIGHT_SUPLEX: "[格闘家]：ナイトで敵を累計40体撃破する。",
		BISHOP_SHADOW_SWAP: "[虚無歩行者]：転送または位置交換を累計40回行う。"
	},
	player: "自軍",
	enemy: "敵軍",
	recycleTrade: "整理 / 取引",
	confirmEndTurnTitle: "ターン終了の確認",
	confirmEndTurnMessage: "本当にターンを終了しますか？",
	confirmPurchaseTitle: "購入の確認",
	confirmPurchaseMessage: "本当に {item} を購入しますか？",
	connectionLineIdleLabel: "待機時接続ラインの簡略化",
	genericEquipment: "汎用装備",
	use: "使用",
	useItem: "使用",
	visualQualityLabel: "画質とレンダリング",
	networkActive: "ONLINE",
	networkOffline: "OFFLINE",
	statusLabel: "NETWORK",
	additionalEffects: "追加効果",
	permanent: "永久"
};
var ot = {
	title: "王 權 網 路",
	subtitle: "連接|統率|征服",
	playVsAi: "標準棋局",
	playVsHuman: "雙人對戰",
	playRogue: "命運輪局",
	unitExclusive: "{name}專用",
	whiteReserve: "白方",
	blackReserve: "黑方",
	whiteReserveFull: "白方後備",
	blackReserveFull: "黑方後備",
	whiteTurn: "白方回合",
	blackTurn: "黑方回合",
	whiteWins: "白方勝利！",
	blackWins: "黑方勝利！",
	draw: "平局",
	basicConfiguration: "基礎配置",
	skillsLabel: "技能",
	noCombo: "無連擊",
	blackHQ: "黑方",
	interfaceTab: "界面",
	visualTab: "視覺",
	audioTab: "音訊",
	port: "豎屏",
	land: "橫屏",
	fit: "自適應",
	closeTerminal: "關閉終端",
	systemLanguage: "系統語言",
	masterAudio: "聲音主開關",
	musicVolume: "音樂音量",
	sfxVolume: "音效音量",
	cancelAim: "取消瞄準",
	systemCollapse: "系統崩潰倒計時：",
	turns: "回合",
	economicStable: "經濟穩定",
	danger: "危險區",
	undoLabel: "悔棋",
	skipLabel: "跳過",
	itemsLabel: "物品",
	equipLabel: "裝備",
	progress: "攻略進度",
	credits: "結餘資金",
	systemReady: "系統就緒",
	module: "當前模組：",
	cost: "花費",
	accessGranted: "系統破解成功",
	systemPurged: "系統已被清除",
	continueDeep: "繼續深入 (Chapter {next})",
	funds: "資金",
	rank: "評級",
	backgroundInfo: "背景檔案",
	coreLogic: "核心邏輯",
	difficultyLabel: "危險等級",
	sov: "君主",
	max: "滿級",
	none: "無",
	spawn: "單位生成",
	menu: "菜單",
	restart: "重新開始",
	settings: "系統設置",
	settingsTitle: "系統設置",
	restoreDefaults: "恢復默認",
	resetMessage: "系統參數已重置為基準出廠協定。",
	backToMenu: "返回主菜單",
	languageName: "繁體中文",
	showDanger: "危險區",
	reserveLayoutLabel: "庫存佈局",
	reserveLayoutAuto: "自動",
	reserveLayoutPortrait: "豎屏",
	reserveLayoutLandscape: "橫屏",
	aspectRatioLabel: "螢幕比例",
	resolutionLabel: "屏幕解析度",
	resolutionAdaptive: "自适应視窗",
	brightnessLabel: "螢幕亮度",
	qualityLabel: "畫面品質",
	qualityHigh: "高畫質",
	qualityMedium: "中畫質",
	qualityLow: "低功耗",
	connectionLineModeLabel: "連接線顯示",
	connectionLineModeAlways: "始終顯示",
	connectionLineModeAuto: "自動隱藏",
	connectionLineModeNever: "從不顯示",
	gridStyleLabel: "網格樣式",
	gridStyleDotted: "點陣",
	gridStyleCurve: "曲線",
	defaultDangerZoneLabel: "預設顯示威脅區",
	gameLogicPreferences: "遊戲邏輯與偏好",
	displayLayout: "顯示與佈局",
	connectionLineAutoPauseLabel: "自動隱藏連接線",
	connectionLinePauseDelayLabel: "隱藏延遲時間",
	autoEndTurnLabel: "自動結束回合",
	confirmationsLabel: "操作二次確認",
	confirmEndTurnLabel: "結束回合確認",
	confirmSurrenderLabel: "投降確認",
	confirmShopLegendaryLabel: "商店購買確認",
	postProcessingLabel: "復古後期濾鏡",
	noiseStrengthLabel: "膠片顆粒強度",
	vignetteStrengthLabel: "邊緣暗角強度",
	crtCurvatureLabel: "CRT 曲面屏畸變",
	accessibilityLabel: "無礙與舒適",
	screenShakeLabel: "屏幕震動",
	floating3DLabel: "3D 懸浮與視差",
	showEndgameBackground: "主菜單顯示殘局",
	difficultyEasy: "簡單",
	difficultyNormal: "普通",
	difficultyHard: "困難",
	rules: "規則說明",
	rulesContent: "目標：擊殺敵方國王。\n\n移動：棋子移動規則同國際象棋。\n\n部署：可從庫存中部署棋子到棋盤上的合法位置。\n\n網路：棋子可通過彼此的移動範圍相連，最終連接至國王的為“連接狀態”。\n\n癱瘓棋子：若棋子失去與國王的網路連接，即被“癱瘓”無法移動。己方正常棋子可通過移動恢復其網路。",
	undo: "悔棋",
	skip: "跳過",
	surrender: "投降",
	surrenderConfirm: "確認投降嗎？",
	surrenderTitle: "絕望的提議",
	surrenderMsg: "敵軍已喪失全部戰鬥能力，請求停機投降。是否接受？",
	acceptSurrender: "接受",
	refuseSurrender: "戰至最後",
	cancel: "取消",
	checkWarning: "將軍！",
	gameOver: "遊戲結束",
	winnerIs: "勝利者：",
	playAgain: "再來一局",
	undoRetry: "使用悔棋重試 (剩餘 {count} 次)",
	victory: "戰鬥勝利！",
	ok: "確定",
	bossSuffix: " (首領)",
	decrypt: "解析中",
	decryptSuccess: "狀態: 解析成功 // 戰區日誌已同步",
	transmissionComplete: "傳輸完成",
	systemUnlocked: "系統已解鎖",
	swallow: "燕子",
	protocolLocked: "協議已鎖定",
	noDescription: "暫無描述",
	unit: "單位",
	level: "等級",
	skill: "技能",
	equip: "裝備",
	add: "添加",
	unlockAll: "解鎖全部",
	clearData: "清除數據",
	selectConsumable: "選擇消耗品...",
	selectEquipment: "選擇裝備...",
	generic: "通用",
	monarchSelectTitle: "選擇君主",
	monarchSelectSub: "初始化戰略核心",
	monarchFunds: "初始資金",
	monarchDifficulty: "戰略難度",
	monarchHistory: "歷史檔案 / 情報",
	monarchLogic: "核心系統邏輯",
	monarchCancel: "取消",
	monarchStart: "開啟輪局",
	monarchWIP: "開發中",
	monarchLocked: "鎖定",
	monarchDefaultName: "基準君主",
	monarchDefaultDesc: "神經網絡的傳統指揮官。穩健、平衡，嚴格遵循基礎通信協議。",
	monarchDefaultMechanic: "標準協議：為周圍 1 格的友軍提供網路連接。",
	monarchHappyPrinceName: "快樂王子",
	monarchHappyPrinceDesc: "“剝落金箔，武裝萬民。一顆只為犧牲跳動的鉛鐵之心。”",
	monarchHappyPrinceMechanic: "【黃金佈施】開局 5000G，無常規收益。王子購買的道具全部分發為友軍傳說裝備。\n【鉛心熔鑄】伴生信號源“燕子”，陣亡即敗。王子存活時可耗費 500G 將其復活。\n【不朽金身】免疫首次致死打擊，化為無敵的鉛鐵雕像（永久定身，提供 3x3 輻射網路，允許友軍重疊）。",
	monarchArthurName: "亞瑟王",
	monarchArthurDesc: "“圓桌之首，天命之王。他打破集權，以分佈式的信仰統御群敵。”",
	monarchArthurMechanic: "【去中心化】3 級或傳說單位視為信號源。自帶 3 級梅林(象)與蘭斯洛特(馬)。\n【圓桌誓約】同生共死：任一 3 級友軍完成擊殺，其餘所有 3 級友軍獲得【護盾】。\n（限制：棋子最高 3 級，禁用皇后）",
	monarchOdysseusName: "奧德修斯",
	monarchOdysseusDesc: "“深淵的巡航者。視邊界為虛無，將詭局化作戰爭的最高藝術。”",
	monarchOdysseusMechanic: "【無界航行】棋子與網路信號可穿透棋盤邊界（限 1 格）。\n【海妖之歌】每 5 回合，連通狀態的非王棋子可能發生致命的隨機漂移。\n【木馬詭計】主動：在任意空地秘密投放木馬。靜默 2 回合後解體，爆出兩名奇襲兵蜂。",
	monarchLouisName: "路易十四",
	monarchLouisDesc: "“朕即國家。權力如烈陽當空，神聖且不容分權。”",
	monarchLouisMechanic: "【絕對日冕】國王獨佔 5x5 超大網路，但信號絕對禁止被友軍中繼。踏入日冕的敵軍將被全盤沉默。\n【雙子王權】伴生隱秘信號源“鐵面人”。一旦鐵面人陣亡，國王永久喪失日冕網路。",
	monarchRichardName: "獅心王理查",
	monarchRichardDesc: "“永遠衝鋒的十字軍統帥。勝利在前方，回望即是背叛。”",
	monarchRichardMechanic: "【單向遠征】信號僅向前傳遞。國王擁有“后”的機動。衝鋒越深賞金越高，全軍解鎖 2 格滑行；過河友軍獲得【不屈】。\n【死不旋踵】國王絕不後退。\n【天價贖金】國王陣亡時，自動扣除 100G 並在己方底線滿血復活。",
	selectLoot: "選擇你的戰利品",
	recruitKnight: "招募: 騎士",
	recruitKnightDesc: "在隊伍中增加一個新馬",
	recruitBishop: "招募: 主教",
	recruitBishopDesc: "在隊伍中增加一個新象",
	itemFreeze: "道具: 冰霜卷軸",
	itemFreezeDesc: "獲得一個消耗品：凍結敵方一回合",
	loadGame: "讀取進度",
	loadGameSub: "恢復本地節點",
	saveGame: "存檔進度",
	saveManagement: "存檔管理",
	loadArchive: "再臨棋局",
	emptySlot: "空位",
	chapter: "章",
	levelLabel: "關",
	saveLimitReached: "存檔次數已用盡",
	saveSuccess: "存檔成功！",
	remainingSaves: "剩餘存檔次數",
	yourTurn: "你的回合",
	yourTurnAnim: "你的回合",
	aiTurn: "AI 回合",
	normalMode: "標準棋局",
	rogueMode: "命運輪局",
	turn: "當前回合",
	tacticalTurnBased: "戰術回合制",
	permadeathRun: "永久死亡挑戰",
	standardSimulation: "標準模擬",
	selectAiConfig: "選擇 AI 配置",
	protocolBaseline: "01 - 協議基準",
	standardLogic: "02 - 標準邏輯",
	advancedNeural: "03 - 高級神經",
	localP2P: "本地對戰",
	build: "版本",
	local: "本地",
	terminal: "終端",
	skipReward: "跳過 (+10G)",
	reroll: "重刷新 ({cost}G)",
	combo: "連擊 x{count}",
	comboInc: "連擊 +1!",
	slot: "槽位",
	tierCommon: "普通",
	tierRare: "稀有",
	tierEpic: "史詩",
	tierLegendary: "傳說",
	availableCredit: "可用資金",
	confirmClaim: "確認領取",
	insufficientFunds: "資金不足",
	darkBargain: "黑暗交易",
	targetSold: "目標已出售",
	blackMarket: "黑市交易",
	awaitingSelection: "等待終端指令選擇...",
	unlockRequired: "達成特定戰術成就以解鎖",
	itemDetails: "物品詳情",
	assetDetails: "單位詳情",
	sell: "出售",
	back: "返回",
	recruitPiece: "招募: {name}",
	newUnit: "新單位",
	addPieceDesc: "將一個新的 {name} 加入你的隊伍編制。",
	imbueSkill: "賦予技能: {name}",
	replaceSkill: "替換技能: {name}",
	backupUnit: "後備單位",
	bonusSkill: "附帶技能：",
	conflict: "互斥衝突",
	equipmentFull: "裝備槽位已滿",
	pieceTypeMismatch: "單位類型不匹配",
	itemConflictReplace: "替換了衝突裝備: {name}",
	replaces: "(覆蓋) ",
	scrapRecycle: "物資轉化",
	inventoryFull: "庫存已滿",
	scrapRecycleDesc: "你的 {type} 槽位已達上限 ({max})。選擇此項將轉化為 15 金幣。",
	consumable: "消耗品",
	equipment: "裝備",
	piecePawn: "兵",
	pieceKnight: "騎士",
	pieceBishop: "主教",
	pieceRook: "戰車",
	pieceQueen: "王后",
	pieceKing: "國王",
	unitMerlin: "梅林 (3級)",
	unitLancelot: "蘭斯洛特 (3級)",
	unitIronMask: "鐵面人",
	campTitle: "營地",
	campSubtitle: "休整與準備",
	campDesc: "利用這個時機在下一場戰鬥前檢查你的裝備和陣容。",
	campLevel: "層級",
	campGold: "金幣",
	campInventory: "庫存",
	campUnits: "{count} 個單位",
	campItems: "{consumables} 消耗品 · {equipments} 裝備",
	continue: "繼續",
	close: "關閉",
	debug: {
		spawnerTitle: "單位生成器 (調試)",
		pieceType: "單位類型",
		selectPiece: "選擇單位...",
		imbueSkill: "賦予技能",
		initialEquipment: "初始裝備",
		none: "無",
		generate: "生成"
	},
	dbTitle: "核心數據庫",
	dbSub: "數據解密與存檔",
	dbClose: "斷開連接",
	dbNotCollected: "數據未發現",
	dbUnlockProtocol: "解鎖協議：",
	dbTabs: {
		monarch: "君主核心",
		king: "王權模組",
		pawn: "兵蜂模組",
		knight: "突擊模組",
		bishop: "遠控模組",
		rook: "戰車模組",
		queen: "皇后模組",
		generic: "通用協議",
		equipment: "硬體外設",
		consumable: "一次性腳本",
		boss: "戰役機制",
		terrain: "環境異常"
	},
	noSelection: "暫無選中單位",
	personnel: "兵營編制",
	inventory: "儲備物資",
	emptyBag: "行囊空空如也",
	storageEmpty: "庫房尚未整備",
	skillModule: "性能模組",
	equipModule: "輔助外掛",
	used: "已使用",
	railgunFiring: "軌道炮：即將發射！",
	railgunCountdown: "軌道炮：{n} 回合後發射",
	quantumCountdown: "距離下次糾纏: {n} 回合",
	cooldown: "冷卻中",
	ready: "已就緒",
	depleted: "彈藥耗盡",
	turnsRemaining: "{n} 回合",
	remainingUses: "剩餘 {n} 次",
	bastionMode: "堡壘狀態",
	mobileMode: "機動狀態",
	costGold: "耗費 {n} 金幣",
	deployToUse: "部署後可用",
	prepare: "準備釋放",
	intel: "情報",
	barracks: "兵營編制",
	sectorLogs: "戰區日誌",
	sector: "扇區",
	eliminateAll: "全殲敵軍",
	vipTarget: "重要目標",
	vipTargetDesc: "敵方不存在國王，擊敗所有敵軍即可獲勝。",
	jammingTitle: "網路干擾",
	jammingShortDesc: "本局全場斷網，僅特殊能力可提供網路。",
	noAnomaly: "無異常",
	anomalyTitle: "異常狀態",
	proxyKingDesc: "斬首非終點。敵方「王」存活時，敵方普通棋子必須保證信號在網方可行動；一旦敵方「王」被擊殺，全軍將強制進入不受鏈路限制的永久連通狀態。玩家必須清除棋盤上的所有敵軍。",
	empty: "空",
	dragToUnequip: "拖拽以卸下",
	dragToEquip: "拖拽以裝備",
	dragToUse: "拖拽以使用",
	aiAnalyzing: "AI 思考中...",
	noData: "暫無數據",
	items: JSON.parse("{\"EMP\":{\"name\":\"EMP 脈衝\",\"desc\":\"釋放電磁干擾，凍結 3x3 範圍內的敵軍 1 回合。\"},\"OVERCLOCK\":{\"name\":\"超頻\",\"desc\":\"使目標單位本回合可以額外行動一次。\"},\"PHASE\":{\"name\":\"相位偏移\",\"desc\":\"被動：該單位移動時可以穿過其他棋子。\"},\"RANGE_UP\":{\"name\":\"信號增強器\",\"desc\":\"被動：該單位的網路覆蓋範圍 +1。\"},\"BATTERY\":{\"name\":\"應急電池\",\"desc\":\"立刻解除目標凍結。\"},\"FREEZE_RAY\":{\"name\":\"冰凍射線\",\"desc\":\"凍結敵方單位 2 回合。\"},\"PARDON\":{\"name\":\"赦免令\",\"desc\":\"暫時策反一個敵方單位。\"},\"SMOKE_BOMB\":{\"name\":\"煙霧彈\",\"desc\":\"免疫遠程直線攻擊 2 回合。\"},\"ROYAL_SACRIFICE\":{\"name\":\"皇家獻祭\",\"desc\":\"永久犧牲一名選中的【友軍】，將其力量疊加至當前棋子（等級+1，裝備槽+1）。\"},\"SCRAP_PART\":{\"name\":\"多餘零件\",\"desc\":\"拆解獲得意外之財，直接獲得 5-20 枚金幣。\"},\"LURE_SIGNAL\":{\"name\":\"誘導信號\",\"desc\":\"強制一名選中的【敵方兵】向後退一格。\"},\"EMERGENCY_PATCH\":{\"name\":\"緊急補丁\",\"desc\":\"立即移除一名選中的友方棋子身上的【感染】狀態。\"},\"COMMAND_STEAL\":{\"name\":\"指令竊取\",\"desc\":\"鎖定一名敵方棋子 2 回合，並在此期間將其轉化為臨時的【信號源】為我方供電。\"},\"DATA_HARVEST\":{\"name\":\"數據收割\",\"desc\":\"場上每存在一個【凍結】狀態的單位，你便獲得 10 金幣。\"},\"EQ_BAYONET\":{\"name\":\"刺刀\",\"desc\":\"兵可以向前攻擊（吃子）。\"},\"EQ_SCOUT_RADAR\":{\"name\":\"偵察雷達\",\"desc\":\"只要該兵連通，其周圍 2 格內的敵方隱身/幻影效果失效。\"},\"EQ_SIGNAL_BACKPACK\":{\"name\":\"信號背包\",\"desc\":\"強制使其正後方和正前方各 2 格內的友軍視為“已連網”。\"},\"EQ_HOOF_ARMOR\":{\"name\":\"護蹄重甲\",\"desc\":\"跳躍落點如果有敵方兵，直接吃掉且本回合可再次行動。\"},\"EQ_TELESCOPIC_LEGS\":{\"name\":\"伸縮腿\",\"desc\":\"馬可以選擇跳躍 3x1 的距離，而不僅僅是 2x1。\"},\"EQ_SHOCK_STIRRUPS\":{\"name\":\"震盪馬鐙\",\"desc\":\"馬落地時，會引發震盪，使落點周圍十字 1 格內的敵方非王單位眩暈 1 回合。\"},\"EQ_PRISM_SHIELD\":{\"name\":\"稜鏡護盾\",\"desc\":\"象被吃掉時，將其殺手（如果是斜線攻擊）一同帶走。\"},\"EQ_HIGH_POWER_SCOPE\":{\"name\":\"高倍目鏡\",\"desc\":\"如果吃掉距離自己 3 格及以上的敵人，立即獲得 5 金幣獎勵。\"},\"EQ_PURIFICATION_STAFF\":{\"name\":\"淨化法杖\",\"desc\":\"移動後，清除落點周圍 3x3 範圍友軍的負面狀態。\"},\"EQ_HOVER_TREAD\":{\"name\":\"履帶輪\",\"desc\":\"車可以斜向移動一格。\"},\"EQ_BASE_STATION\":{\"name\":\"基站天線\",\"desc\":\"只要車處於連網狀態，車所在的整條行和列的所有友軍均視為已連網。\"},\"EQ_REACTIVE_ARMOR\":{\"name\":\"反應裝甲\",\"desc\":\"車免疫來自正上方和正下方的任何攻擊。\"},\"EQ_PHOENIX_FEATHER\":{\"name\":\"鳳凰羽毛\",\"desc\":\"後第一次被吃時，在王身邊重生為等級 1 的兵。\"},\"EQ_BLOOD_DRESS\":{\"name\":\"鮮血長裙\",\"desc\":\"吃掉敵軍後在落點留下殘影（2回合），之後可無視距離移動互換位置。\"},\"EQ_SCEPTER_OF_CHARM\":{\"name\":\"蠱惑權杖\",\"desc\":\"後的威脅範圍內有且僅有一個敵軍且無同伴時，策反該敵軍 1 回合。\"},\"EQ_LIGHTNING_ROD\":{\"name\":\"避雷針\",\"desc\":\"王免疫敵方環境陷阱和負面狀態的影響。\"},\"EQ_MEGAPHONE\":{\"name\":\"擴音器\",\"desc\":\"王提供的初始網路支持範圍從周圍 1 格擴大到 2 格。\"},\"EQ_ROYAL_GUARD\":{\"name\":\"御前侍衛\",\"desc\":\"王相鄰友軍被吃時，自動消耗 10 金幣將其復活（每局限一次）。\"},\"EQ_REFLECTIVE_ARMOR\":{\"name\":\"反射護甲\",\"desc\":\"當棋子被吃掉時，吃它的敵方棋子被凍結 1 回合。\"},\"EQ_LIGHTWEIGHT_ALLOY\":{\"name\":\"輕量化合金\",\"desc\":\"棋子可以在斷網狀態下移動一次，隨後該裝備損毀。\"},\"EQ_CAMOUFLAGE\":{\"name\":\"偽裝迷彩\",\"desc\":\"只要該棋子本回合未移動且未吃子，它對敵方隱身。\"},\"EQ_STABILIZER\":{\"name\":\"穩定器\",\"desc\":\"該棋子不會被任何強制位移效果影響。\"},\"EQ_SELF_DESTRUCT\":{\"name\":\"自毀協議\",\"desc\":\"被吃時對周圍 1 格造成毀滅爆炸，隨後裝備損毀。\"},\"EQ_BACKUP_BATTERY\":{\"name\":\"備用電池組\",\"desc\":\"該棋子斷網後，可以多撐 2 回合才進入癱瘓狀態。\"},\"EQ_EMERGENCY_LINK\":{\"name\":\"應急鏈路\",\"desc\":\"斷網時，強行與周圍 2 格內的另一名友軍建立臨時連接。\"},\"EQ_BOUNTY_MODULE\":{\"name\":\"賞金模組\",\"desc\":\"該棋子每吃掉一個敵方棋子，立即獲得 10 金幣。\"},\"EQ_RESCUE_BEACON\":{\"name\":\"急救信標\",\"desc\":\"被吃掉時，如果有同類棋子在庫存，免費部署一個在王周圍。\"},\"EQ_TACTICAL_OPS\":{\"name\":\"戰術調度中心\",\"desc\":\"每場戰鬥的第一回合，可以額外進行一次“部署”操作。\"},\"EQ_DIPLOMATIC_IMMUNITY\":{\"name\":\"外交豁免權\",\"desc\":\"前 2 回合，敵方 AI 禁止部署新棋子。\"},\"EQ_FULL_BAND_SCANNER\":{\"name\":\"全頻掃描儀\",\"desc\":\"全圖所有敵方“隱身”和“陷阱”在回合開始時強制顯形銷毀。\"},\"EQ_BLACK_MARKET_LEDGER\":{\"name\":\"黑市賬本\",\"desc\":\"戰鬥勝利（擊殺敵方王）後，額外獲得 30 金幣收益。\"},\"EQ_RECYCLING_STATION\":{\"name\":\"循環回收站\",\"desc\":\"每當有友方棋子陣亡，隨機獲得一個普通消耗品。\"},\"EQ_RELIC_OF_KINGS\":{\"name\":\"王權遺物\",\"desc\":\"當只剩下王且庫存已空時，王獲得等同於“後”和“馬”的究極移動能力。\"},\"EQ_VENTURE_CAPITAL\":{\"name\":\"風險投資\",\"desc\":\"每進入下一關，如果你當前擁有的金幣超過 50，則額外獲得 10 金幣利息。\"},\"EQ_SWARM_INTELLIGENCE\":{\"name\":\"鄰接網路\",\"desc\":\"場上所有的“兵”只要互相相鄰，即視為與王連通。\"},\"EQ_ARROGANT_CREED\":{\"name\":\"狂妄信條\",\"desc\":\"遊戲開始時，國王擁有等同於後+馬的移動範圍。一旦你部署了任何其他棋子，該效果永久失效。\"},\"EQ_QUEEN_ROOK_LINK\":{\"name\":\"戰車連接項圈\",\"desc\":\"傳說：只要後處於聯網狀態，離後最近的一名友方“車”強制變為聯網狀態。\"},\"EQ_QUEEN_BISHOP_LINK\":{\"name\":\"主教連接項圈\",\"desc\":\"傳說：只要後處於聯網狀態，離後最近的一名友方“象”強制變為聯網狀態。\"},\"EQ_HIVE_CORE\":{\"name\":\"動力核心\",\"desc\":\"只要該兵連通，其移動力增加 1 格（可前移 2 格）。\"},\"EQ_CHEAP_BOOSTER\":{\"name\":\"廉價增頻器\",\"desc\":\"該兵的網路延伸距離提升至 3 格，但無法進行攻擊（吃子）。\"},\"EQ_CHAIN_MINE\":{\"name\":\"連鎖地雷\",\"desc\":\"被吃掉時，若周圍 1 格有其他“兵”，觸發連鎖爆炸（3x3）。\"},\"EQ_PLUNDER_HOOVES\":{\"name\":\"裂隙馬蹄\",\"desc\":\"跳躍經過敵方單位上方時，竊取每一個敵方 2 金幣。\"},\"EQ_GHOST_RIDE\":{\"name\":\"幽靈騎行\",\"desc\":\"跳躍經過的所有敵方單位有 30% 概率被隨機傳送。\"},\"EQ_REFRACTION_LENS\":{\"name\":\"折射透鏡\",\"desc\":\"象的路徑上有友軍時，可以改變方向移動 2 格（90度折射）。\"},\"EQ_FAITH_SIPHON\":{\"name\":\"信仰汲取\",\"desc\":\"每當象斜線上的單位陣亡，玩家獲得 2 金幣。\"},\"EQ_EM_SHIELD\":{\"name\":\"電磁屏蔽罩\",\"desc\":\"只要車在國王邊上一格，國王免疫來自“馬”的攻擊。\"},\"EQ_TOW_HOOK\":{\"name\":\"遠程牽引鉤\",\"desc\":\"主動：不移動，直接吃掉距離自己 2 格直線上的一個敵軍。\"},\"EQ_ROYAL_SALUTE\":{\"name\":\"皇家禮炮\",\"desc\":\"吃子後隨機雷擊一名敵方兵（冷卻：3回合）。\"},\"EQ_GOLDEN_THRONE\":{\"name\":\"黃金王座\",\"desc\":\"每回合開始，根據場上連通的友軍數量獲得金幣。\"},\"SIGNAL_TOWER_DEFENSE\":{\"name\":\"信號塔防禦\",\"desc\":\"主動：消耗 20 金幣在當前格子放置永久“信號增益塔”。\"},\"EQ_DEFLATION\":{\"name\":\"通縮政策\",\"desc\":\"全局：商店所有商品價格降低 20%。\"},\"EQ_HACKER_TERMINAL\":{\"name\":\"駭客終端\",\"desc\":\"全局：每回合開始時，隨機使一個敵方高級棋子凍結。\"},\"EQ_SPYWARE\":{\"name\":\"間諜軟體\",\"desc\":\"全局：每次敵方國王移動後，玩家獲得 5 金幣。\"},\"FROZEN\":{\"name\":\"凍結\",\"desc\":\"本回合無法移動或行動。\"},\"PETRIFIED\":{\"name\":\"石化\",\"desc\":\"永久無法行動。\"},\"SKILL_LOCKED\":{\"name\":\"技能封鎖\",\"desc\":\"無法使用主動技能。\"},\"SILENCED\":{\"name\":\"沉默\",\"desc\":\"無法激活任何技能。\"},\"ENCRYPTED\":{\"name\":\"加密偽裝\",\"desc\":\"身份被隱藏，兵種類型不可見。\"},\"SHIELDED\":{\"name\":\"護盾\",\"desc\":\"抵消一次傷害。\"},\"GRAVITY_LOCKED\":{\"name\":\"重力束縛\",\"desc\":\"移動力受限。\"},\"MEDUSA\":{\"name\":\"美杜莎之眼\",\"desc\":\"永久石化。\"},\"WITHDRAW\":{\"name\":\"戰術撤回\",\"desc\":\"撤回庫存。\"},\"JAMMING\":{\"name\":\"全頻干擾\",\"desc\":\"永久癱瘓當前棋盤上所有非王棋子（不影響使用後新部署的棋子）。\"},\"SCARY_LETTER\":{\"name\":\"恐嚇信\",\"desc\":\"向遠離我方國王方向逼退敵方棋子一格。\"},\"SPARE_PARTS\":{\"name\":\"備用零件\",\"desc\":\"在王身邊生成一個兵。\"},\"COMPASS\":{\"name\":\"位移羅盤\",\"desc\":\"隨機漂移。\"},\"PURIFIER\":{\"name\":\"信號淨化器\",\"desc\":\"清除負面狀態。\"},\"DECOY\":{\"name\":\"誘餌彈\",\"desc\":\"高權重誘餌。\"},\"DOOM_BROADCAST\":{\"name\":\"末日廣播\",\"desc\":\"摧毀全場所有斷網單位。\"},\"TIME_GLASS\":{\"name\":\"時間沙漏\",\"desc\":\"增加一次悔棋機會。\"},\"SPACE_GLASS\":{\"name\":\"空間沙漏\",\"desc\":\"增加一次存檔機會。\"},\"PRESS\":{\"name\":\"重壓機\",\"desc\":\"永久扁平化。\"},\"VOID_ANCHOR\":{\"name\":\"虛空錨點\",\"desc\":\"封鎖地塊。\"},\"GRAVITY_TRAP\":{\"name\":\"重力陷阱\",\"desc\":\"3x3 範圍重力鎖定，最大移動距離限制為 1 格。\"},\"CLOAK\":{\"name\":\"信號遮斷器\",\"desc\":\"隱身 2 回合。\"},\"OVERLOAD\":{\"name\":\"能量過載\",\"desc\":\"雙動且無法吃子。\"},\"PORTAL\":{\"name\":\"傳送門\",\"desc\":\"建立傳送點。\"},\"DRAFT_ORDER\":{\"name\":\"強行徵召\",\"desc\":\"復活一個馬放入庫存。\"},\"MIDAS\":{\"name\":\"點金石\",\"desc\":\"將此石拖拽至下方倉庫行或者棋盤上的單位上，可將其變現為 30 金幣。\"},\"GOLDEN_TOUCH\":{\"name\":\"黃金化\",\"desc\":\"將一名選中的【敵方兵】瞬間轉化為 50 金幣。\"},\"LOOT_BOX\":{\"name\":\"戰利品箱\",\"desc\":\"隨機獲得一個消耗品。\"},\"VOID_ANCHOR_ITEM\":{\"name\":\"虛空錨點\",\"desc\":\"在選定空格放置一個持續 3 回合的錨點，禁止任何單位進入或部署。\"},\"GOLD_MAGNET_ITEM\":{\"name\":\"金幣磁鐵\",\"desc\":\"為單位注入磁力，本回合其每移動一格便獲得 1 金幣。\"},\"BARRICADE_ITEM\":{\"name\":\"簡易工事\",\"desc\":\"在選定空格放置一個永久障礙物（直到被摧毀），阻擋移動。\"},\"SCOUT_PROBE\":{\"name\":\"偵察探頭\",\"desc\":\"使 2x2 區域內的敵方隱身單位顯形。\"},\"RUST_SPRAY\":{\"name\":\"鏽蝕試劑\",\"desc\":\"目標下回合無法吃子。\"},\"SWAP_PLUGIN\":{\"name\":\"交換外掛\",\"desc\":\"交換相鄰友軍位置。\"},\"ILLEGAL_SLOT\":{\"name\":\"非法擴容\",\"desc\":\"裝備槽永久 +1。\"},\"BLACK_ORDER\":{\"name\":\"黑市訂單\",\"desc\":\"搶奪敵方一件裝備。\"},\"REAPER_EXE\":{\"name\":\"死神程序\",\"desc\":\"擊殺所有斷網棋子。\"},\"WHEEL_OF_FATE\":{\"name\":\"命運輪盤\",\"desc\":\"觸發 3 個隨機消耗品效果。\"},\"PASSIVE_ANTENNA\":{\"name\":\"財富天線\",\"desc\":\"主動：激活此天線，使本局內玩家後續獲得的所有金幣收益翻倍。\"},\"SINGULARITY_GRENADE\":{\"name\":\"奇點手雷\",\"desc\":\"在空地釋放。將 5×5 內非王棋子按由內向外次序向中心拉扯 1 格。王免疫但被重力束縛 2 回合。撞向王的棋子單方面粉碎。\"},\"SPATIAL_SCRAMBLER\":{\"name\":\"空間亂序器\",\"desc\":\"以目標格為中心的 3×3 範圍內所有非王棋子的位置被隨機重新排列。\"},\"EQ_GRAPPLING_HOOK\":{\"name\":\"抓地飛索\",\"desc\":\"主動：朝一個方向發射飛索，將自身拉拽至路徑上最後一個空位（障礙物前）。不消耗行動次數。\"}}"),
	skills: JSON.parse("{\"BLACK_HOLE\":{\"name\":\"虛空黑洞\",\"desc\":\"場地中央存在永久的虛空錨點，封鎖區域。\"},\"OBSTACLES\":{\"name\":\"廢墟\",\"desc\":\"場地中散佈著無法逾越的障礙物。\"},\"LASER_GRID\":{\"name\":\"高壓電網\",\"desc\":\"場地存在電網：每輪次奇數回合通電，摧毀格上的棋子；王免疫。\"},\"WORMHOLE\":{\"name\":\"蟲洞\",\"desc\":\"場地上存在一對互相連通的傳送陣：踩上一個會從另一個出來，出口被佔據時不傳送。\"},\"NETWORK_JAM\":{\"name\":\"網路風暴\",\"desc\":\"全場信號受到嚴重干擾。\"},\"FOG_OF_WAR\":{\"name\":\"戰爭迷霧\",\"desc\":\"戰場被迷霧籠罩，視野受限。\"},\"quantumCountdown\":\"距離下次糾纏: {n} 回合\",\"erasureReady\":\"軌道炮：即將發射\",\"erasureCharging\":\"軌道炮裝填中: {n} 回合\",\"PAWN_PATROL\":{\"name\":\"巡邏\",\"desc\":\"允許水平向左或向右移動 1 格（不可吃子）。\"},\"PAWN_FRONTAL_SPIKE\":{\"name\":\"鋒刃\",\"desc\":\"允許向前直行移動 1 格時吃子。\"},\"PAWN_BACKSTEP\":{\"name\":\"後撤步\",\"desc\":\"允許向左後或右後方斜向退一格（不吃子）。\"},\"PAWN_RESOURCEFUL\":{\"name\":\"補給包\",\"desc\":\"被吃掉時，有 30% 概率隨機回到庫存中。\"},\"PAWN_VENGEANCE\":{\"name\":\"犧牲閃擊\",\"desc\":\"被吃掉時，隨機凍結對方一名非王棋子 2 回合。\"},\"PAWN_ASSASSIN\":{\"name\":\"刺客代碼\",\"desc\":\"該棋子吃掉敵方的“後”或“車”時，進化為隨機高級棋子。\"},\"PAWN_PROMOTE\":{\"name\":\"晉升之路\",\"desc\":\"每吃掉一個敵方子力，等級 +1；達到 5 級後再次吃子時進化。\"},\"PAWN_SIGNAL_TOWER\":{\"name\":\"信號塔\",\"desc\":\"即使斷網自身不能移動，也會為周圍 1 格的己方棋子提供網路連接。\"},\"PAWN_PHALANX\":{\"name\":\"兄弟會\",\"desc\":\"兵左邊或右邊有己方的兵時，自身免疫來自敵方兵（Pawn）或馬（Knight）的捕捉。\"},\"PAWN_DETONATOR\":{\"name\":\"炸彈兵\",\"desc\":\"被吃掉時，炸毀周圍 3x3 範圍內的所有非王棋子。\"},\"PAWN_RELAY\":{\"name\":\"中繼站\",\"desc\":\"該棋子的網路覆蓋範圍提升至 2 格。\"},\"PAWN_SACRIFICE\":{\"name\":\"犧牲契約\",\"desc\":\"被吃掉時獲得 2 次額外存檔機會，並在王周圍生成一個兵。\"},\"PAWN_INTERLOCK\":{\"name\":\"聯鎖裝甲\",\"desc\":\"左右 1 格有友軍時，無法被對方的“後”或“車”吃掉。\"},\"PAWN_PARASITE\":{\"name\":\"寄生算法\",\"desc\":\"移動到敵方棋子相鄰時，使其下回合無法移動。\"},\"PAWN_SWARM\":{\"name\":\"兵鏈廣播\",\"desc\":\"只要有一個聯網，全場所有的兵均視為已聯網。\"},\"PAWN_OMEGA_MIRROR\":{\"name\":\"終局鏡像\",\"desc\":\"模擬其網路連線上己方高級棋子的移動 and 攻擊方式。\"},\"PAWN_SATELLITE\":{\"name\":\"衛星鏈路\",\"desc\":\"永遠不需要網路連接，且國王死後可作為代理王。\"},\"PAWN_CHARGER\":{\"name\":\"衝鋒者\",\"desc\":\"允許兵在任何位置向前直線移動兩格（不可吃子，不可越子）。\"},\"KNIGHT_QUICK_ROUTING\":{\"name\":\"極速尋址\",\"desc\":\"因斷網處於癱瘓狀態時也允許移動，但僅限跳向己方已聯網的格子。\"},\"KNIGHT_CROSS_JUMP\":{\"name\":\"十字跳\",\"desc\":\"跳躍後如果沒有吃子，可以在十字方向上再移動一格（不可吃子）。\"},\"KNIGHT_HOT_SWAP\":{\"name\":\"戰術換位\",\"desc\":\"允許跳向己方“兵”所在的格子，落地後與該兵互換位置。\"},\"KNIGHT_SIDE_STEP\":{\"name\":\"靈活蹄鐵\",\"desc\":\"允許馬向相鄰的空格水平或垂直移動 1 格（不可吃子）。\"},\"KNIGHT_SCAVENGER\":{\"name\":\"搜刮者\",\"desc\":\"如果跳躍的目標格是敵方控制區，立即獲得 1 金幣。\"},\"KNIGHT_TRAMPLE\":{\"name\":\"踐踏\",\"desc\":\"跳躍過程中經過的敵方棋子，有 50% 機率被凍結 1 回合。\"},\"KNIGHT_GHOST\":{\"name\":\"離線協議\",\"desc\":\"被動：即使處於斷網狀態（癱瘓），該騎士依然可以自由行動。\"},\"KNIGHT_HIT_AND_RUN\":{\"name\":\"回旋彈射\",\"desc\":\"主動：不發生位移，擲出飛刃擊殺馬步（L型）範圍內的一名敵軍（不可選擇國王）。飛刃隨後自動彈射，連帶擊殺該目標相鄰（十字方向）的另一名隨機敵軍。冷卻 3 回合。\"},\"KNIGHT_MIRAGE\":{\"name\":\"幻影移形\",\"desc\":\"被吃掉時，如果周圍 2 格內有己方兵，則與其交換，兵代替馬消失。\"},\"KNIGHT_GRAVITY_WELL\":{\"name\":\"引力場\",\"desc\":\"落點周圍 1 格的所有敵方棋子下回合禁止移動。\"},\"KNIGHT_TROJAN\":{\"name\":\"木馬\",\"desc\":\"被吃掉後，在周圍隨機位置生成兩個己方“兵”。\"},\"KNIGHT_FULL_DUPLEX\":{\"name\":\"即插即用\",\"desc\":\"當部署上場後，本回合不結束，你可以立即再進行一次移動。\"},\"KNIGHT_CHAIN\":{\"name\":\"連鎖閃電\",\"desc\":\"如果落點有敵方子力，吃掉後本回合不結束，可立即再跳一次。\"},\"KNIGHT_RIFT\":{\"name\":\"時空裂隙\",\"desc\":\"可帶走起點周圍的一名友方棋子，並在落地時放在身邊。\"},\"KNIGHT_MIDAS_TOUCH\":{\"name\":\"黃金鐵蹄\",\"desc\":\"跳躍會根據移動距離產生金幣。吃掉後/車直接獲得一件裝備。\"},\"KNIGHT_TROJAN_KERNEL\":{\"name\":\"特洛伊內核\",\"desc\":\"當該棋子吃掉敵方的「車」或「後」時，收穫一個一級兵加入庫存中。\"},\"KNIGHT_AURA\":{\"name\":\"騎士光環\",\"desc\":\"只要馬處於聯網狀態，與其相鄰的友方「兵」獲得十字移動能力。\"},\"KNIGHT_SUPLEX\":{\"name\":\"過肩摔\",\"desc\":\"主動：將相鄰十字方向的一名敵軍抓起，扔到自身對稱位置（隔一格的對面）。落點若有棋子則雙方同歸於盡。\"},\"BISHOP_REFRACTION\":{\"name\":\"反射\",\"desc\":\"移動觸碰邊界時，可以按 90 度角折射繼續滑行一格。\"},\"BISHOP_MIRROR\":{\"name\":\"鏡像傳送\",\"desc\":\"當斜線上有另一個己方“象”時，這兩個象可以互換位置。\"},\"BISHOP_PHASE_SHIFT\":{\"name\":\"相位偏轉\",\"desc\":\"允許象像“車”一樣水平或垂直移動 1 格（不能吃子）。\"},\"BISHOP_AFTERSHOCK\":{\"name\":\"餘震\",\"desc\":\"吃子後，落點周圍 1 格的所有空格在 2 回合內變為餘震區域，敵方無法在此部署單位。\"},\"BISHOP_PIERCE\":{\"name\":\"穿透狙擊\",\"desc\":\"可以穿過一個己方單位進行移動或者攻擊。\"},\"BISHOP_HOLY_LAND\":{\"name\":\"聖域\",\"desc\":\"該棋子斜線無視阻擋視為“控制區”。友軍若部署在這些格子上，落地獲得 1 回合臨時網路（免於凍結）。\"},\"BISHOP_MIRROR_RESONANCE\":{\"name\":\"鏡像共鳴\",\"desc\":\"斜線視線內（無遮擋）存在另一隻己方「象」（視線不被任何棋子遮擋），無論對方是否聯網，該棋子始終視為已聯網，並能像正常聯網棋子一樣向外提供網格連接。\"},\"BISHOP_RECALL\":{\"name\":\"應急回存\",\"desc\":\"主動技能：可以點擊自己，將該棋子撤回庫存。\"},\"BISHOP_CONDUIT\":{\"name\":\"遠程授能\",\"desc\":\"只要象連通，即使有阻擋也能為斜線上所有友軍提供網路連接。\"},\"BISHOP_SILENCE\":{\"name\":\"禁魔\",\"desc\":\"移動後，將鎖定並封印對角線上所有敵方棋子的技能。\"},\"BISHOP_OPTICAL_BLIND_ZONE\":{\"name\":\"光學死角\",\"desc\":\"該象免疫來自直線方向（車、後）的吃子攻擊。\"},\"BISHOP_RESURRECTION\":{\"name\":\"復活術\",\"desc\":\"吃掉敵方棋子時，隨機將一個兵、馬或象放回你的庫存。\"},\"BISHOP_AURORA\":{\"name\":\"極光\",\"desc\":\"主動技能：不移動，直接狙擊吃掉斜線上任何位置的一個敵方棋子。\"},\"BISHOP_ABSOLUTE_BARRIER\":{\"name\":\"絕對防線\",\"desc\":\"敵方單位無法在不吃子的情況下，停留在該象的對角線控制格上。\"},\"ROOK_VAULT\":{\"name\":\"翻越\",\"desc\":\"允許跳過路徑上的第一個障礙物（友軍或敵軍）。\"},\"ROOK_RAILWAY\":{\"name\":\"鐵軌\",\"desc\":\"在車移動過的直線路徑上，留下鐵軌，友方“兵”移動力+1。\"},\"ROOK_PRESS\":{\"name\":\"壓制\",\"desc\":\"處於車直線上的敵方“兵”會被壓制，無法移動。\"},\"ROOK_AEGIS\":{\"name\":\"塔盾\",\"desc\":\"只要車與國王靠在一起，國王獲得遠程免疫。\"},\"ROOK_BASTION\":{\"name\":\"堡壘形態\",\"desc\":\"主動：切換為堡壘，不可移動，但保護周圍十字1格所有友軍免受遠程攻擊。\"},\"ROOK_HEAVY_ARMOR\":{\"name\":\"重裝鎧甲\",\"desc\":\"不能被對方的“兵”或“馬”吃掉。\"},\"ROOK_SWEEPER\":{\"name\":\"橫掃\",\"desc\":\"移動經過敵方單位旁時，使其本回合斷網。\"},\"ROOK_MAGNET\":{\"name\":\"磁吸\",\"desc\":\"主動：不移動，將直線上一名友軍拉到自己身邊。\"},\"ROOK_CARRIER\":{\"name\":\"運輸機\",\"desc\":\"移動時，如果有扁平的棋子在同一格，可以攜帶一起移動。\"},\"ROOK_CATAPULT\":{\"name\":\"拋射\",\"desc\":\"主動：將相鄰十字方向的一個友方兵發射到同一直線最遠端的空格上。\"},\"ROOK_TRACTOR_BEAM\":{\"name\":\"牽引光束\",\"desc\":\"主動：不移動。將直線方向 3 格以外的第一個棋子拉近 1 格（穩定器可免疫）。\"},\"ROOK_SHOCKWAVE\":{\"name\":\"衝擊波\",\"desc\":\"主動：不移動。將直線方向 3 格以內的第一個棋子推開 1 格，碰撞則同歸於盡，扁平友軍則疊放（穩定器可免疫）。\"},\"ROOK_FORBIDDEN_ZONE\":{\"name\":\"領土主權\",\"desc\":\"車所在的行或列上的敵方棋子移動力降為1。\"},\"ROOK_ION_CANNON\":{\"name\":\"軌道炮\",\"desc\":\"主動：原地不動，摧毀正方向直線上的所有非王單位（冷卻 5 回合）。\"},\"ROOK_IRON_CURTAIN\":{\"name\":\"鐵幕\",\"desc\":\"主動：鎖定車所在整行，2回合內敵方車/象/后/兵無法進入或穿越該行（馬、王不受影響）；冷卻3回合。\"},\"ROOK_COVER\":{\"name\":\"掩體\",\"desc\":\"只要車處於聯網狀態，下回合開始時與其相鄰的友方兵獲得一層護盾（盾破後有冷卻）。\"},\"ROOK_CONCUSSION\":{\"name\":\"震盪\",\"desc\":\"長距離移動（超過 3 格）後，落點周圍 1 格內的敵方「兵」將被凍結 1 回合。\"},\"ROOK_SUPPLY_STATION\":{\"name\":\"補給站\",\"desc\":\"移動路徑變為補給地塊（2回合）：友軍在此部署返還 5 金幣（單局上限 30G）。無法覆蓋已有特殊地塊。\"},\"QUEEN_COMMAND\":{\"name\":\"統率\",\"desc\":\"周圍 1 格的友軍可以獲得全向 1 格的移動能力。\"},\"QUEEN_AURA\":{\"name\":\"威壓\",\"desc\":\"周圍 2 格內的敵方“車”和“象”移動範圍限制為兩格。\"},\"QUEEN_PROVISION\":{\"name\":\"皇家補給\",\"desc\":\"每回合開始時，若後聯網，增加 2 金幣。\"},\"QUEEN_GRACE\":{\"name\":\"優雅\",\"desc\":\"吃子後，若落點還是敵人控制區，可額外獲得一次移動機會。\"},\"QUEEN_DOMINATE\":{\"name\":\"霸道\",\"desc\":\"相鄰的敵方棋子失去所有非基礎技能。\"},\"QUEEN_DECOY\":{\"name\":\"幻影\",\"desc\":\"被攻擊死亡時，如果庫存有“兵”，自動消耗一個兵來抵消本次死亡並隨機傳送。\"},\"QUEEN_LINKAGE\":{\"name\":\"連鎖部署\",\"desc\":\"部署時，可立即免費從庫存部署最多兩個“兵”在後身邊。\"},\"QUEEN_BRIBE\":{\"name\":\"策反\",\"desc\":\"吃掉敵方“兵”時，有 50% 概率將其轉化為己方庫存。\"},\"QUEEN_MULTICAST\":{\"name\":\"鏡像維度\",\"desc\":\"如果本回合移動沒有吃子且在連線狀態，可以再次移動一次（但不能吃子）。\"},\"QUEEN_INSIGHT\":{\"name\":\"洞察\",\"desc\":\"只要後在場，敵方隱身單位自動顯形。\"},\"QUEEN_RECALL\":{\"name\":\"戰術撤退\",\"desc\":\"主動：將後立即瞬移回國王身邊的空格（冷卻 3 回合）。\"},\"QUEEN_TIME_WARP\":{\"name\":\"時間倒流\",\"desc\":\"每 5 個回合，可以獲得一次免費的“悔棋”機會而不消耗回合數。\"},\"QUEEN_NEMESIS\":{\"name\":\"復仇女神\",\"desc\":\"當國王被將軍時，後可以無視阻擋，直接瞬移至棋盤上任何一個安全的空格；也可進行常規的吃子。\"},\"QUEEN_ROOK_AUTHORITY\":{\"name\":\"戰車主權\",\"desc\":\"只要後處於聯網狀態，離後最近的一名友方“車”強制變為聯網狀態。\"},\"QUEEN_BISHOP_AUTHORITY\":{\"name\":\"主教主權\",\"desc\":\"只要後處於聯網狀態，離後最近的一名友方“象”強制變為聯網狀態。\"},\"KING_CHARISMA\":{\"name\":\"寬宏\",\"desc\":\"周圍 2 格內的“兵”移動邏輯變為同“後”（滑行），移動範圍兩格。\"},\"KING_RADIATION\":{\"name\":\"輻射\",\"desc\":\"王的初始信號強度極高，第一層連接的有效距離從 1 格提升至 2 格。\"},\"KING_STEADY\":{\"name\":\"穩重\",\"desc\":\"王免疫任何來自敵方技能的“強制位移”效果。\"},\"KING_REWARD\":{\"name\":\"恩賞\",\"desc\":\"任何友軍在王周圍 2 格內吃子時，額外獲得 5 金幣。\"},\"KING_FORTIFY\":{\"name\":\"固守\",\"desc\":\"只要王相鄰有友方“車”，王無法被敵方的“兵”或“馬”吃掉。\"},\"KING_BACKUP\":{\"name\":\"應急供電\",\"desc\":\"如果王周圍沒子，王可以臨時通過“無線連接”連通 3 格內最近的友軍（可多個）。\"},\"KING_OVERSEER\":{\"name\":\"督戰\",\"desc\":\"己方聯網棋子（不含王）達到 5 個時，每回合額外獲得 2 金幣。單局限 40 金幣。\"},\"KING_ROYAL_GUARD\":{\"name\":\"護衛徵召\",\"desc\":\"主動：點擊自己，消耗 10 金幣，在王身邊的空格處隨機生成一個 1 級“兵”（過關不保留）。\"},\"KING_TAXATION\":{\"name\":\"納稅\",\"desc\":\"每當有一個友方單位被吃掉，王會立即產生 15 金幣作為“撫恤金”。\"},\"KING_SWAP\":{\"name\":\"換位\",\"desc\":\"主動：與周圍 2 格內的任何一個友軍交換位置。\"},\"KING_REFLECTION\":{\"name\":\"鏡像之盾\",\"desc\":\"任何在王周圍 1 格內吃掉友軍的敵方棋子，會立即被“震死”（同歸於盡）。\"},\"KING_COMMANDER\":{\"name\":\"御前統領\",\"desc\":\"王周圍 2 格內的己方“馬”，跳躍落點後會凍結落點周圍 1 名距離最近的敵軍 1 回合。\"},\"KING_GRAND_CASTLE\":{\"name\":\"王車易位\",\"desc\":\"主動：王可以無視距離，直接與場上任意位置的一個友方“車”交換位置。\"},\"KING_SOUL_LINK\":{\"name\":\"附身斗篷\",\"desc\":\"王被吃掉時，如果場上有 1 級的兵，該兵變身為新的“王”，使遊戲繼續。\"},\"KING_HOLY_DOMAIN\":{\"name\":\"絕對聖域\",\"desc\":\"王周圍 2 格內，所有友方棋子免疫一切負面狀態（凍結、石化、沉默等）。\"},\"KING_STASIS\":{\"name\":\"時空鎖定\",\"desc\":\"主動：使王周圍 3 格內的所有單位（除雙方國王外）進入永久“石化”狀態（每場戰鬥限一次）。\"},\"KING_ROYAL_PATH\":{\"name\":\"御道\",\"desc\":\"如果王所在的行和列沒有任何敵方棋子，王的移動範圍提升至 2 格（不可吃子）。\"},\"KING_LOGISTICS\":{\"name\":\"統籌\",\"desc\":\"部署任何棋子到王相鄰的格子時，立即返還 3 金幣。\"},\"KING_DECOY_DOUBLE\":{\"name\":\"影武者\",\"desc\":\"移動後，在起始位置留下一個提供信號的“影終端”，持續 1 回合。\"},\"KING_MARTYRDOM\":{\"name\":\"犧牲\",\"desc\":\"王被吃掉時，若庫存已空且場上有其他友軍，則吸收友軍引發大爆炸並重生（限一次）。\"},\"KING_ROYAL_DECORATION\":{\"name\":\"皇家授勳\",\"desc\":\"回合開始時，賦予相鄰且無技能的友方「兵」一個隨機普通技能。\"},\"GENERIC_ALGORITHM_SWAP\":{\"name\":\"算法共享\",\"desc\":\"主動：可以與周圍 1 格內的任意一名非王友軍互換位置。\"},\"GENERIC_BACKUP_BUFFER\":{\"name\":\"應急電池\",\"desc\":\"當該棋子斷開網路連接時，它不會立即凍結，而是可以繼續自由行動 1 個回合。\"},\"GENERIC_RAPID_DEPLOY\":{\"name\":\"輕裝上陣\",\"desc\":\"部署該棋子時，有 10% 概率不消耗本回合的操作次數。\"},\"GENERIC_COATING\":{\"name\":\"塗層保護\",\"desc\":\"被動：徹底免疫地圖上所有環境負面效果及負面狀態（如重力鎖定、感染等）。\"},\"GENERIC_SHARPEN\":{\"name\":\"鋒利算法\",\"desc\":\"吃子後，額外獲得 3 金幣。\"},\"GENERIC_CHAFF\":{\"name\":\"干擾絲\",\"desc\":\"被攻擊死亡時，50% 概率觸發“閃避”，原地消失並隨機出現在相鄰空格。\"},\"GENERIC_RECALL\":{\"name\":\"緊急回庫\",\"desc\":\"主動：消耗本回合行動，將該棋子撤回庫存（保留等級和技能）。\"},\"GENERIC_LOGIC_LOCK\":{\"name\":\"邏輯鎖\",\"desc\":\"被該棋子攻擊範圍覆蓋的敵方非王棋子，會被施加“沉默”（無法觸發任何技能）。\"},\"GENERIC_MIRRORING\":{\"name\":\"鏡像協議\",\"desc\":\"當該棋子相鄰有友軍時，它能複製友軍的基礎移動邏輯。\"},\"GENERIC_PARASITE\":{\"name\":\"寄生腳本\",\"desc\":\"當該棋子被吃掉時，附身在攻擊者身上，使其變為“被寄生”狀態（極易掉線）。\"},\"GENERIC_HIVE_KERNEL\":{\"name\":\"同頻協議\",\"desc\":\"只要該棋子聯網，全場所有與其同類型的棋子即使斷網也能行動。\"},\"GENERIC_FIREWALL\":{\"name\":\"終極防火牆\",\"desc\":\"被動：限制最大移動距離為 3 格。免疫遠程吃子、強行位移、改變顏色或沉默。國王不可裝備。\"},\"GENERIC_INTIMIDATION\":{\"name\":\"威懾\",\"desc\":\"被動：敵方的“兵”無法吃掉該棋子。\"},\"GENERIC_LOGIC_BOMB\":{\"name\":\"邏輯炸彈\",\"desc\":\"被動：被吃掉時清除擊殺者增益並使其永久沉默。\"},\"GENERIC_DATA_MINING\":{\"name\":\"數據挖掘\",\"desc\":\"被動：吃掉帶有技能的敵方棋子時，額外獲得 10 金幣。\"},\"GENERIC_RECURSIVE_STRIKE\":{\"name\":\"遞歸打擊\",\"desc\":\"被動：吃掉敵方棋子後，下回合移動範圍疊加被擊殺者的原始移動邏輯。\"},\"GENERIC_SCRAP_RECYCLE\":{\"name\":\"廢料回收\",\"desc\":\"被動：移動不吃子時獲得 1 金幣（每關上限 10 金幣）。\"},\"GENERIC_ABSOLUTE_REQUISITION\":{\"name\":\"絕對征用\",\"desc\":\"主動：消耗10金幣，直接摧毀射程內一名「斷網」的敵方單位（非王、非後），並回收其價值。\"},\"AURA_REWARD\":{\"name\":\"恩賞光環\",\"desc\":\"吃子時額外獲得 5 金幣。\"},\"AURA_SUPPRESSED\":{\"name\":\"威壓壓制\",\"desc\":\"移動範圍受限。\"},\"BACKUP_BUFFER_ACTIVE\":{\"name\":\"應急電池激活\",\"desc\":\"臨時無視斷網\"},\"BISHOP_CONVERSION\":{\"name\":\"洗禮\",\"desc\":\"主動：將一名相鄰的敵方兵永久轉化為己方，該象隨後損毀。\"},\"BISHOP_HOLY_LIGHT\":{\"name\":\"聖光\",\"desc\":\"每回合開始時，象周圍 1 格的友軍負面狀態清除。\"},\"BISHOP_PENETRATION\":{\"name\":\"穿透\",\"desc\":\"滑行時可以穿過敵方的一個子力，但不能穿過友軍或吃掉兩個子。\"},\"BISHOP_SACRED_ZONE\":{\"name\":\"神聖領域\",\"desc\":\"象所在的斜線上，敵方單位被施加 1 回合的凍結。\"},\"BISHOP_ZEALOT\":{\"name\":\"狂熱\",\"desc\":\"如果吃掉了敵方棋子，下回合該象將無視距離（同「後」滑行）一次。\"},\"BISHOP_SHADOW_SWAP\":{\"name\":\"暗影置換\",\"desc\":\"主動：與視線範圍內的一名敵方棋子互換位置，並凍結該敵方 1 回合。\"},\"CHARISMA_BUFF\":{\"name\":\"寬宏增益\",\"desc\":\"獲得兩格全向滑行移動。\"},\"COMMANDER_AURA\":{\"name\":\"統領光環\",\"desc\":\"落點凍結 1 名距離最近的敵軍。\"},\"COMMAND_AURA\":{\"name\":\"統率光環\",\"desc\":\"獲得全向 1 格的移動能力。\"},\"GODHOOD_LINK\":{\"name\":\"神權鏈接\",\"desc\":\"被絕對王權強製連通。\"},\"HOLY_DOMAIN_AURA\":{\"name\":\"聖域光環\",\"desc\":\"免疫一切負面狀態。\"},\"INFECTED\":{\"name\":\"感染\",\"desc\":\"每回合蔓延。若宿主處於聯網狀態，吞噬部分金幣。\"},\"IRON_CURTAIN\":{\"name\":\"鐵幕\",\"desc\":\"鐵幕地塊：只有鐵幕的所有者可以踏入，敵方棋子無法進入。\"},\"KNIGHT_CHARGE\":{\"name\":\"衝鋒\",\"desc\":\"馬跳躍吃子時，會對目標周圍 1 格的敵方兵造成 1 回合凍結。\"},\"KNIGHT_PHANTOM_STRIKE\":{\"name\":\"幻影突襲\",\"desc\":\"馬可以無視阻擋進行“遠程吃子”，但吃子後必須回到原位。\"},\"KNIGHT_SABOTAGE\":{\"name\":\"破壞\",\"desc\":\"馬跳躍落點相鄰 1 格內的敵方陷阱和地塊效果被銷毀。\"},\"KNIGHT_VALIANT\":{\"name\":\"英勇\",\"desc\":\"馬吃子後，若落點周圍 1 格沒有友軍，該馬獲得一層“護盾”。\"},\"PARASITIZED\":{\"name\":\"被寄生\",\"desc\":\"每回合有 50% 概率斷網/凍結。\"},\"PAWN_TRAITOR\":{\"name\":\"背叛者\",\"desc\":\"被吃掉時，有 50% 概率將攻擊者（非王）變為你的顏色並施加“被策反”狀態 1 回合。\"},\"PAWN_VANGUARD\":{\"name\":\"先鋒\",\"desc\":\"該兵只要處於敵方半場，即視為“永遠聯網”。\"},\"RAILWAY_BUFF\":{\"name\":\"鐵軌加速\",\"desc\":\"處於鐵軌上的兵移動力 +1。\"},\"REFLECTION_AURA\":{\"name\":\"反射光環\",\"desc\":\"被吃時反傷擊殺者。\"},\"SQUARE_BASTION_FIELD\":{\"name\":\"堡壘力場\",\"desc\":\"為地塊上的友軍提供遠程攻擊免疫。\"},\"SQUARE_RAILWAY\":{\"name\":\"鐵軌（地塊狀態）\",\"desc\":\"鐵軌地塊：兵站在該格時可以向正前方直進兩格（與鐵軌朝向無關）。\"},\"TAXATION_AURA\":{\"name\":\"撫恤光環\",\"desc\":\"被吃掉時提供 15 金幣。\"},\"ZEALOT_BUFF\":{\"name\":\"狂熱增益\",\"desc\":\"獲得滑行移動能力。\"},\"BETRAYED\":{\"name\":\"被策反\",\"desc\":\"暫時被策反。1 回合後回歸原始陣營。\"},\"SMOKE\":{\"name\":\"煙霧\",\"desc\":\"提供遠程直線攻擊免疫。\"},\"SQ_AFTERIMAGE\":{\"name\":\"殘影\",\"desc\":\"殘影：血裙女王吃掉敵軍後在落點留下 3 回合的殘影，女王本人可無視距離走回該格。\"},\"FROZEN_TRAP\":{\"name\":\"凍結陷阱\",\"desc\":\"凍結任何進入該格的單位。\"},\"VOID_FISSURE_SQUARE\":{\"name\":\"Void Fissure\",\"desc\":\"空間的結構已被撕裂。此地塊永久無法通行。\"},\"SUPPLY_DEPOT_SQUARE\":{\"name\":\"補給地塊\",\"desc\":\"補給地塊：己方補給車在場時，在此部署返還 5 金幣，單局最多返還 30 金幣。\"},\"VOID_ANCHOR\":{\"name\":\"虛空錨點\",\"desc\":\"虛空錨點：該格被徹底封鎖，任何棋子無法停留，也無法在此部署。\"},\"BARRICADE\":{\"name\":\"簡易工事\",\"desc\":\"物理障礙物，阻擋通行。\"},\"JAMMING_TOWER\":{\"name\":\"信號塔\",\"desc\":\"信號塔：站在該格上的棋子被視為網路源，即使在全局干擾下也能提供連通。\"},\"HOLY_LAND\":{\"name\":\"聖域\",\"desc\":\"神聖化的土地，允許無視常規限制在此處直接部署。\"},\"LOUIS_ABSOLUTE_CORONA\":{\"name\":\"絕對日冕\",\"desc\":\"國王自帶 5x5 的網路，但其權力過於集中，信號無法通過任何友軍進行中繼。\"},\"QUEEN_MOVE\":{\"name\":\"王權武力\",\"desc\":\"國王展現出全盛時期的武力，獲得等同於“後”的全向滑行能力。\"},\"RICHARD_FORWARD_ONLY\":{\"name\":\"單向遠征\",\"desc\":\"信仰絕不回頭。國王的網路信號只能向前方（敵方底線）傳播。\"},\"BOSS_PERMISSION_DENIED\":{\"name\":\"權限篡改\",\"desc\":\"BOSS每隔3回合隨機禁用一種棋子一回合。\"},\"BOSS_PACIFISM\":{\"name\":\"和平協議\",\"desc\":\"前5個回合內，雙方都無法進行“吃子”操作。\"},\"INVULNERABLE\":{\"name\":\"無敵\",\"desc\":\"絕對免疫傷害。\"},\"BOSS_ECHO_CHAMBER\":{\"name\":\"信息繭房\",\"desc\":\"隱藏玩家棋子的屬性、技能與裝備狀態。\"},\"BOSS_BOARD_ROTATION\":{\"name\":\"棋盤自轉\",\"desc\":\"每隔4回合，全場所有棋子順時針位移旋轉90度。\"},\"BOSS_QUANTUM_MIRAGE\":{\"name\":\"量子分身\",\"desc\":\"受到致命一擊時會隨機和一個敵方棋子互換替死。\"},\"BOSS_WARP_STORM\":{\"name\":\"傳送亂流\",\"desc\":\"每回合隨機生成傳送門，踩中將被甩飛至任意空位。\"},\"BOSS_MUTINY\":{\"name\":\"倒戈協議\",\"desc\":\"每6回合，隨機策反玩家場上的一個非王棋子。\"},\"BOSS_NECROMANCER\":{\"name\":\"死靈復甦\",\"desc\":\"定期隨機將一名陣亡的玩家棋子復活為黑方喪屍。\"},\"ZOMBIE_DECAY\":{\"name\":\"喪屍體質\",\"desc\":\"一回合後由於身體腐敗自然死亡。\"},\"BOSS_MIRROR_MATCH\":{\"name\":\"克隆工廠\",\"desc\":\"開始時，克隆並生成與玩家一模一樣的一套陣容。\"},\"BOSS_HIVE_MOTHER\":{\"name\":\"寄生母巢\",\"desc\":\"定期在場上孵化蟲卵，不打破則會孵化為強力怪物。\"},\"EGG_HATCH\":{\"name\":\"蟲卵\",\"desc\":\"處於孵化期，倒計時結束將誕生高級棋子。\"},\"BOSS_ENRAGE\":{\"name\":\"狂暴閾值\",\"desc\":\"每 4 回合行動兩次。\"},\"BOSS_MASS_ERASURE\":{\"name\":\"軌道轟炸\",\"desc\":\"每隔 5 回合，轟炸棋盤上一個隨機的 3x3 區域；開火前兩回合目標區會亮起危險警告。\"},\"BOSS_QUANTUM_SWAP\":{\"name\":\"量子糾纏\",\"desc\":\"每過5個回合，隨機調換場上兩個白色棋子的位置。\"},\"BOSS_SENTINEL\":{\"name\":\"巡邏哨兵\",\"desc\":\"免疫一切攻擊，按照順時針路徑移動，撞擊到的任何棋子都會被摧毀。\"},\"SQUARE_LASER_GRID\":{\"name\":\"高壓電網\",\"desc\":\"高壓電網：每奇數回合（輪次開始時）通電，摧毀格上的棋子；王免疫。\"},\"ANTI_PAWN_MINE\":{\"name\":\"反步兵地雷\",\"desc\":\"反步兵地雷：僅「兵」踩中時引爆，摧毀周圍 3x3 內的棋子（王免疫）並消耗地雷；其他棋子踩上不受影響。\"},\"TIME_ANOMALY\":{\"name\":\"時間刺客\",\"desc\":\"踩上去的棋子會被放逐出棋盤，3 個回合後才會在原位置重新出現。\"},\"ICE_SLICK\":{\"name\":\"冰面\",\"desc\":\"踩上冰面的棋子無法停留在該格，必須順著原方向一直滑行。\"},\"WORMHOLE_A\":{\"name\":\"傳送陣A\",\"desc\":\"傳送陣A：踩上後移動到配對傳送陣 B；出口被佔據時不傳送。\"},\"WORMHOLE_B\":{\"name\":\"傳送陣B\",\"desc\":\"傳送陣B：踩上後移動到配對傳送陣 A；出口被佔據時不傳送。\"},\"MUD_SWAMP\":{\"name\":\"泥沼\",\"desc\":\"泥沼：直線滑行的棋子（后/車/象）可以踏入，但無法再繼續前進；馬與兵不受影響。\"},\"CONVEYOR_BELT\":{\"name\":\"傳送帶\",\"desc\":\"傳送帶：你方回合開始時，站在上面的棋子沿箭頭推移 1 格；推出棋盤邊緣即墜落死亡，撞上任何棋子則同歸於盡。\"},\"OVERCLOCK_NODE\":{\"name\":\"超頻基站\",\"desc\":\"超頻基站：回合開始時，清空站在該格棋子身上所有技能冷卻。\"},\"DATA_VAULT\":{\"name\":\"數據金庫\",\"desc\":\"數據金庫：你方棋子停留在該格時，每個回合開始獲得 3 金幣。\"},\"SIGNAL_RELAY\":{\"name\":\"信號放大器\",\"desc\":\"信號放大器：站在該格上的棋子被視為信號源，即使全局斷網也能維持局部連通。\"},\"FARADAY_CAGE\":{\"name\":\"法拉第籠\",\"desc\":\"法拉第籠：棋子踏上該格時立刻被凍結 2 回合；每個回合開始仍在此格的棋子會持續被凍結。\"},\"PAWN_UNSTABLE_CORE\":{\"name\":\"不可靠的炸彈兵\",\"desc\":\"死亡必自爆(5x5)；吃子50%概率自爆並引發屍體連鎖反應。不論敵我，毀滅一切。\"},\"ROOK_VOID_FISSURE\":{\"name\":\"虛空裂解炮\",\"desc\":\"主動：摧毀直線上首個目標並永久摧毀該空格（一局 3 次，冷卻 5 回合）。\"},\"ROOK_EJECTION\":{\"name\":\"彈射\",\"desc\":\"主動：將相鄰十字方向的一個友方兵向外彈射到最遠端。\"},\"ROOK_SUPPLY_DEPOT\":{\"name\":\"補給站\",\"desc\":\"移動路徑變為補給地塊（2回合）：友軍在此部署返還 5 金幣（單局上限 30G）。無法覆蓋已有特殊地块。\"},\"QUEEN_CORONATION\":{\"name\":\"皇家授勳\",\"desc\":\"自動：回合開始時，賦予相鄰且無技能的友方“兵”一個隨機普通技能。\"},\"QUEEN_GRAVITY_WELL\":{\"name\":\"重力場\",\"desc\":\"若相鄰敵軍不多於2個，這些敵軍將被重力鎖定，移動範圍限制為1格。\"},\"QUEEN_REQUISITION\":{\"name\":\"絕對征用\",\"desc\":\"主動：消耗10金幣，直接摧毀射程內一名“斷網”的敵方單位（非王、非後），並回收其價值。\"},\"EQ_HOOF_ARMOR\":{\"name\":\"護蹄重甲\",\"desc\":\"跳躍落點如果有敵方兵，直接吃掉且本回合可再次行動。\"}}"),
	battleLogs: {
		LOG_CHECKMATE_PURGED: "將死：系統網路癱瘓！",
		LOG_SWALLOW_GOODBYE: "「再見，燕子。」",
		LOG_DAIZONG_MOVE: "「朕意已決，前移！」",
		LOG_DAIZONG_GUARD: "「速速護駕！」",
		LOG_DAIZONG_CAPTURED: "「陛下北狩了！」",
		LOG_LOUIS_CORONA_DIMMED: "「神權動搖：日冕黯淡！」",
		LOG_QUANTUM_SWAP: "量子互換",
		LOG_PERMISSION_DENIED: "權限篡改: 禁用 {banned}",
		LOG_BOARD_ROTATION: "棋盤自轉！",
		LOG_QUANTUM_MIRAGE: "量子分身替死！",
		LOG_TELEPORT: "傳送",
		LOG_WARP_STORM: "亂流傳送",
		LOG_MUTINY: "倒戈協議",
		LOG_NECRO_REVIVE: "死靈復甦",
		LOG_EGG_HATCHED: "破殼而出",
		LOG_EGG_HATCHING: "孵化中 {count}",
		LOG_ENRAGE_THRESHOLD: "狂暴閾值！連續行動",
		LOG_ENRAGE_DOUBLE: "狂暴：雙重行動！",
		LOG_TIME_BANISHED: "時間放逐",
		LOG_TIME_REBIRTH: "歸來",
		LOG_MUD_SWAMP: "陷入泥沼",
		LOG_FALL_OFF: "跌落深淵",
		LOG_CRASH: "撞擊粉碎",
		LOG_CD_CLEARED: "CD清零",
		LOG_GOLD_MINUS: "-{amount}G",
		LOG_GOLD_PLUS: "+{amount}G",
		LOG_RAILGUN_LOCK_50: "檢測到軌道炮鎖定，充能率 50%",
		LOG_RAILGUN_LOCK_100: "警告：軌道炮已鎖定！充能率 100% 極速撤離！",
		LOG_KING_RANSOM: "「募集巨額贖金：國王歸國！」",
		LOG_CRUSADE_REWARD: "聖戰 +{amount}",
		LOG_UNYIELDING_RECALL: "不屈：撤回",
		LOG_SWALLOW_RESURRECT: "「鉛心碎裂：重塑燕子！」",
		LOG_ARTHUR_SHIELD: "「誓約共鳴：圓圓重盾！」",
		LOG_TROJAN_BREAK: "「木馬破裂：特洛伊勇士奇襲！」",
		LOG_TROJAN_WAIT: "木馬潛伏中 ({turns}T)",
		LOG_TROJAN_DEPLOY: "「瞞天過海：暗度木馬！」",
		LOG_SUPPLY_DEPOT: "+5G 補給",
		LOG_NO_SPACE: "周圍沒有空間",
		LOG_NO_FUNDS: "金幣不足",
		LOG_GUARD_SPAWN: "護衛現身",
		LOG_TAXATION_REWARD: "撫卹金 +15",
		LOG_SWAP: "換位",
		LOG_CASTLING: "王車易位",
		LOG_SOUL_LINK: "靈魂附身，王位更替！",
		LOG_ALREADY_USED: "已使用過",
		LOG_STASIS_LOCK: "時空鎖定！",
		LOG_LOGISTICS_REWARD: "統籌 +3",
		LOG_DECOY_TERMINAL: "影終端",
		LOG_MARTYRDOM: "最後的犧牲：涅槃重生！",
		LOG_GRACE: "優雅步法",
		LOG_DECOY_DEATH: "幻影替死",
		LOG_BRIBE_SUCCESS: "策反成功",
		LOG_MIRROR_MULTICAST: "鏡像雙動",
		LOG_TACTICAL_RECALL: "戰術撤退",
		LOG_NO_EMPTY_KING: "王邊無空格",
		LOG_TIME_WARP: "時空倒流：+1悔棋",
		LOG_ROOK_LINK: "神權鏈接: 車",
		LOG_BISHOP_LINK: "神權鏈接: 象",
		LOG_GRAVITY_WELL: "重力場激活",
		LOG_CORONATION: "授勳: {skill}",
		LOG_REQUISITION_SUCCESS: "徵用成功",
		LOG_ENTER_BASTION: "進入堡壘",
		LOG_EXIT_BASTION: "解除堡壘",
		LOG_MAGNET: "磁吸",
		LOG_EJECTION: "彈射！",
		LOG_CATAPULT: "拋射！",
		LOG_ION_CANNON: "軌道炮",
		LOG_IRON_CURTAIN: "鐵幕",
		LOG_VOID_FISSURE_REMAINING: "虛空裂解！剩餘 {remaining} 次",
		LOG_VOID_FISSURE_EMPTY: "虛空裂解！彈藥耗盡",
		LOG_TOW_HOOK_DRAG: "拖拽命中！",
		LOG_TOW_HOOK_KILL: "牽引擊殺",
		LOG_TRACTOR_PULL: "牽引拉近",
		LOG_SHOCKWAVE_PUSH: "推開",
		LOG_SHOCKWAVE_COLLIDE: "劇烈碰撞！",
		LOG_RECALLED: "已回存",
		LOG_ZEALOT: "狂熱！",
		LOG_RESURRECT: "復活: {type}",
		LOG_AURORA: "極光狙擊",
		LOG_CROSS_JUMP: "十字二段動",
		LOG_PHANTOM_RETURN: "幻影迴旋",
		LOG_TACTICAL_SWAP: "戰術換位！",
		LOG_FULL_DUPLEX: "即插即用生效!",
		LOG_FULL_DUPLEX_AI: "AI 即插即用!",
		LOG_CHAIN_JUMP: "連跳!",
		LOG_CHAIN_JUMP_AI: "AI 連跳!",
		LOG_MIRAGE_DEATH: "幻影替死",
		LOG_RIFT_TELEPORT: "裂隙傳送",
		LOG_VENGEANCE_STRIKE: "犧牲閃擊",
		LOG_ASSASSIN_EVOLVE: "刺殺進化!",
		LOG_PAWN_EVOLVE: "破繭進化!",
		LOG_CORE_OVERLOAD: "核心過載!",
		LOG_UNDOS_PLUS: "+{amount} 悔棋",
		LOG_SAVES_PLUS: "+{amount} 存檔",
		LOG_ALGORITHM_SWAP: "算法互換",
		LOG_BACKUP_BUFFER: "應急電池",
		LOG_RAPID_DEPLOY: "輕裝上陣: 連動!",
		LOG_CHAFF_EVADE: "閃避!",
		LOG_RECALL_SUCCESS: "撤回成功",
		LOG_PARASITE_INTERFERENCE: "寄生干擾",
		LOG_LOGIC_BOMB: "邏輯炸彈：封印！",
		LOG_DATA_MINING: "數據挖掘 +{amount}",
		LOG_TOWER_BUILT: "信號塔已建成",
		LOG_SPYWARE: "竊取數據 +5",
		LOG_TERMINAL_OFFLINE: "TERMINAL OFFLINE",
		LOG_CONVERSION: "洗禮",
		LOG_CLONE_FACTORY: "克隆工廠",
		LOG_HATCH_EGG: "孵化",
		LOG_OVERLOAD: "能量過載",
		LOG_DRAFT_ORDER: "強行徵召",
		LOG_MIDAS: "點金石 +30",
		LOG_SACRIFICE_SUCCESS: "獻祭成功",
		LOG_ANTENNA_ACTIVE: "財富天線激活！",
		LOG_PRISM_REFLECT: "稜鏡反射！",
		LOG_PHOENIX_REBIRTH: "鳳凰涅槃",
		LOG_ROYAL_GUARD: "護衛犧牲",
		LOG_ALLOY_BROKEN: "合金損毀",
		LOG_TACTICAL_OPS: "戰術調度：額外行動",
		LOG_DIPLOMATIC_INTERCEPT: "外交豁免攔截",
		LOG_WHEEL_TRIGGER: "命運輪盤：{item}",
		LOG_THRONE_REWARD: "王座收益 +{amount}",
		LOG_HACKER_TERMINAL: "遠程駭入",
		LOG_TRAMPLE: "踐踏",
		LOG_GHOST_RIDE: "幽靈傳送",
		LOG_LEVEL_UP: "升級！",
		LOG_SIREN_CRASH: "海妖之歌：撞擊！",
		LOG_SIREN_DRIFT: "海妖之歌：漂移",
		LOG_ENERGY_DEPLETED: "能量耗盡",
		LOG_IMMUNE: "免疫",
		LOG_BLOCKED: "退路被阻擋",
		LOG_INVALID_TARGET: "無效目標",
		LOG_GOLD_FOIL_CONVERT: "金箔剝離",
		LOG_MIDAS_LOOT: "黃金鐵蹄戰利品：獲得 {name}",
		LOG_MIDAS_BAG_FULL: "裝備欄已滿，戰利品未能保存",
		LOG_ASSIMILATED: "數據同化",
		LOG_EMPTY_REQUIRED: "必須是空地",
		LOG_GRAVITY_LOCKED: "重力束縛",
		LOG_SINGULARITY_COLLISION: "奇點碰撞！",
		LOG_FAITH_SIPHON: "信仰汲取 +2G",
		LOG_SPATIAL_SCRAMBLE: "空間亂序",
		LOG_BETRAYED: "背叛！",
		LOG_BOOMERANG: "迴旋鏢！",
		LOG_CHARMED: "被魅惑！",
		LOG_COATING_PROTECT: "塗層保護",
		LOG_DARK_BARGAIN_CURSED: "黑暗交易：檢測到詛咒信號",
		LOG_DEPLOY_FAILED: "信號丟失：部署被阻斷",
		LOG_HOLY_BLESSING: "神聖祝福！",
		LOG_IMMUNE_BLOCKED: "免疫阻擋",
		LOG_LOOT_BOX_OPEN: "戰利品：{item}",
		LOG_NO_ADJACENT_ALLY: "沒有相鄰友軍",
		LOG_RICOCHET: "彈射！",
		LOG_SATELLITE_ASCENSION: "衛星喚醒：新皇登基！",
		LOG_SHADOW_SWAP: "暗影置換！",
		LOG_SKILL_SILENCED: "技能被沉默",
		LOG_SQUARE_OCCUPIED: "格子被佔據",
		LOG_STOLEN: "被偷了！",
		LOG_SUPLEX: "戰術投擲！",
		LOG_SUPLEX_COLLISION: "過肩摔同歸於盡！",
		LOG_SUPLEX_WALL: "撞牆！",
		LOG_VENTURE_CAPITAL: "風險投資 +10"
	},
	unlockRequirements: {
		HAPPY_PRINCE: "[大富翁]：單局金幣持有量曾達到 1000。",
		ARTHUR: "[騎士誓言]：累計從庫存部署 50 個“馬”。",
		ODYSSEUS: "[時空穿梭]：累計使用傳送或位置交換 30 次。",
		LOUIS_XIV: "[太陽王]：單回合連通 10 個以上單位。",
		RICHARD: "[御駕親征]：國王親自擊殺敵方國王。",
		PAWN_UNSTABLE_CORE: "[過載核心]：使用“兵”累計擊殺 30 名敵軍。",
		PAWN_RELAY: "[急行軍]：累計移動“兵” 100 次。",
		PAWN_SACRIFICE: "[消耗品]：累計陣亡 20 名“兵”。",
		PAWN_INTERLOCK: "[兵團]：累計從庫存部署 30 個“兵”。",
		PAWN_PARASITE: "[絕對零度]：累計凍結敵方單位 50 次。",
		PAWN_TRAITOR: "[反向滲透]：累計策反 10 名敵軍。",
		PAWN_SWARM: "[蜂群神話]：場上同時存在 6 個存活的己方“兵”。",
		PAWN_OMEGA_MIRROR: "[進化終點]：將“兵”升至 5 級（MAX）。",
		PAWN_SATELLITE: "[孤島生存]：在國王斷網的情況下獲得勝利。",
		KNIGHT_GRAVITY_WELL: "[騎兵連]：累計移動“馬” 50 次。",
		KNIGHT_TROJAN: "[殘落騎士]：累計陣亡 10 名“馬”。",
		KNIGHT_FULL_DUPLEX: "[迅捷反應]：前 3 回合內擊殺敵方高級單位。",
		KNIGHT_CHAIN: "[閃電戰]：在 5 回合內清空關卡敵軍。",
		KNIGHT_RIFT: "[時空穿越]：累計使用傳送或位置交換 50 次。",
		KNIGHT_MIDAS_TOUCH: "[點石成金]：累計通過變現等機制獲得 500 金幣。",
		KNIGHT_TROJAN_KERNEL: "[巨人殺手]：使用“馬”累計擊殺 10 個後或車。",
		BISHOP_CONDUIT: "[主教巡遊]：累計移動“象” 50 次。",
		BISHOP_SILENCE: "[封印者]：累計沉默敵方單位 30 次。",
		BISHOP_OPTICAL_BLIND_ZONE: "[神盾]：累計使用護盾抵消 5 次傷害。",
		BISHOP_ZEALOT: "[狂熱者]：使用“象”累計擊殺 20 名敵軍。",
		BISHOP_SACRED_ZONE: "[神聖靜滯]：累計凍結敵方單位 20 次。",
		BISHOP_CONVERSION: "[信仰之躍]：累積使用“象”移動超過 30 格。",
		BISHOP_RESURRECTION: "[死靈法師]：累計觸發復活/替死機制 10 次。",
		BISHOP_AURORA: "[高維視角]：使用“象”跨越 6 格以上擊殺敵方。",
		BISHOP_ABSOLUTE_BARRIER: "[嘆息之牆]：累計化解對國王的“將軍”威脅 20 次。",
		ROOK_MAGNET: "[萬有引力]：累計強制位移棋子 10 次。",
		ROOK_CARRIER: "[重型運輸]：累計移動“車” 50 次。",
		ROOK_EJECTION: "[重裝空投]：累計部署 10 個“車”。",
		ROOK_CATAPULT: "[投石機]：累計強制位移棋子 30 次。",
		ROOK_TRACTOR_BEAM: "[牽引光束]：累計強制位移棋子 15 次。",
		ROOK_SHOCKWAVE: "[衝擊波]：累計強制位移棋子 20 次。",
		ROOK_FORBIDDEN_ZONE: "[完美堡壘]：在不損失任何“車”的情況下獲勝 5 次。",
		ROOK_ION_CANNON: "[軌道火力]：單次移動“車”達到 7 格。",
		ROOK_IRON_CURTAIN: "[永恆意志]：累計使用護盾抵消 15 次傷害。",
		ROOK_VOID_FISSURE: "[虛空領主]：在 BOSS 關卡中生存超過 20 回合。",
		QUEEN_MULTICAST: "[鏡像練習]：累計觸發 10 次額外行動(Extra Move)。",
		QUEEN_INSIGHT: "[全視之眼]：累計識破 10 個隱身敵軍。",
		QUEEN_RECALL: "[女王出征]：累計移動“後” 30 次。",
		QUEEN_REQUISITION: "[資源掠奪]：單場戰鬥中累積獲得 50 金幣。",
		QUEEN_TIME_WARP: "[時間領主]：累計使用“悔棋” 100 次。",
		QUEEN_NEMESIS: "[復仇時刻]：使用\"后\"累計擊殺 50 名敵軍。",
		QUEEN_GRAVITY_WELL: "[重力大師]：累計壓制/鎖定敵軍 30 次。",
		KING_DECOY_DOUBLE: "[影子戲法]：國王累計移動 50 次。",
		QUEEN_ROOK_AUTHORITY: "[三位一體]：場上同時存在我方後、車、象、馬。",
		QUEEN_BISHOP_AUTHORITY: "[王室徵召]：累計部署 5 個“後”。",
		KING_SWAP: "[戰術換位]：累計交換或傳送 20 次。",
		KING_REFLECTION: "[武神王]：國王親自擊殺 5 名敵軍。",
		KING_COMMANDER: "[躁動不安]：累計移動國王 30 次。",
		KING_GRAND_CASTLE: "[常勝將軍]：累計贏得 10 場戰鬥。",
		KING_SOUL_LINK: "[意志不滅]：單局國王移動超過 15 次。",
		KING_HOLY_DOMAIN: "[淨化者]：累計為友軍清除 20 次負面狀態。",
		KING_STASIS: "[絕對靜止]：單回合內，場上 50% 單位處於癱瘓/凍結。",
		KING_MARTYRDOM: "[絕境反擊]：僅剩白王且庫存為空的情況下獲勝。",
		GENERIC_RAPID_DEPLOY: "[全面動員]：累計部署 50 個單位。",
		GENERIC_LOGIC_LOCK: "[黑客入侵]：累計沉默敵方 20 次。",
		GENERIC_MIRRORING: "[極限超頻]：累計觸發 20 次額外行動。",
		GENERIC_PARASITE: "[系統崩潰]：敵方由於全員斷網/凍結無法行動。",
		GENERIC_RECURSIVE_STRIKE: "[連擊大師]：單場達成 5 連擊 (Combo x5)。",
		GENERIC_HIVE_KERNEL: "[蜂群思維]：單回合連通 10 個以上單位。",
		GENERIC_FIREWALL: "[最後防線]：累計通關第 3 章。",
		EQ_SHOCK_STIRRUPS: "[震盪波]：累計凍結 10 名敵軍。",
		EQ_BASE_STATION: "[廣播基站]：單回合連通 8 個以上單位。",
		EQ_REACTIVE_ARMOR: "[鐵壁]：累計使用護盾抵消 5 次傷害。",
		EQ_BLOOD_DRESS: "[殺戮旋律]：單場達成 3 連擊 (Combo x3)。",
		EQ_BOUNTY_MODULE: "[賞金獵人]：累計獲得 200 金幣。",
		EQ_RESCUE_BEACON: "[幸存者]：累計觸發免死/復活機制 5 次。",
		EQ_FULL_BAND_SCANNER: "[全頻反制]：累積破壞 10 個敵方陷阱地塊。",
		EQ_BLACK_MARKET_LEDGER: "[黑市契約]：在金幣為 0 的情況下獲取裝備。",
		EQ_TOW_HOOK: "[鉤爪]：累計強制位移棋子 10 次。",
		EQ_ROYAL_SALUTE: "[兵卒殺手]：累計擊殺 50 個敵方兵。",
		SIGNAL_TOWER_DEFENSE: "[基建狂魔]：累計使用“信號塔”或部署“信號塔兵” 5 次。",
		EQ_HACKER_TERMINAL: "[邏輯劫持]：累計凍結敵方“後”或“車” 5 次。",
		EQ_GHOST_RIDE: "[惡作劇]：累計使用傳送/互換 20 次。",
		EQ_HIVE_CORE: "[小型蜂群]：場上同時存活 4 個兵。",
		EQ_TELESCOPIC_LEGS: "[長腿騎士]：累計移動“馬” 20 次。",
		EQ_PHOENIX_FEATHER: "[涅槃]：累計觸發免死/復活機制 10 次。",
		EQ_SCEPTER_OF_CHARM: "[蠱惑者]：累計策反 10 名敵軍。",
		EQ_ROYAL_GUARD: "[忠誠護衛]：累計觸發護駕效果 5 次。",
		EQ_TACTICAL_OPS: "[精銳部隊]：全場不部署任何庫存棋子獲勝。",
		EQ_DIPLOMATIC_IMMUNITY: "[孤狼]：僅剩國王一人獲勝。",
		EQ_RELIC_OF_KINGS: "[王權遺物]：僅剩國王一人獲勝。",
		EQ_VENTURE_CAPITAL: "[資本家]：單局金幣達到 500。",
		EQ_SWARM_INTELLIGENCE: "[蟲群]：場上同時存活 8 個兵。",
		EQ_ARROGANT_CREED: "[傲慢代價]：國王無網路堅持 5 個回合。",
		EQ_QUEEN_ROOK_LINK: "[後車連攜]：單局內同時部署過後和車。",
		EQ_QUEEN_BISHOP_LINK: "[後象連攜]：單局內同時部署過後和象。",
		EQ_GOLDEN_THRONE: "[黃金時代]：單局金幣達到 1000。",
		EQ_DEFLATION: "[通縮奇蹟]：重刷新 3 次不買東西。",
		OVERCLOCK: "[嗑藥狂人]：累計使用 10 個消耗品。",
		PARDON: "[常勝將軍]：累計贏得 5 场戰鬥。",
		ILLEGAL_SLOT: "[改裝狂人]：將棋子升至 3 級。",
		BLACK_ORDER: "[走私販]：在黑市累計變現 10 個道具。",
		DRAFT_ORDER: "[購物狂]：累計重刷新商店 10 次。",
		DOOM_BROADCAST: "[網路主宰]：達成敵方全部斷網。",
		ROYAL_SACRIFICE: "[優勝劣汰]：累計手動獻祭/出售 5 名友軍。",
		REAPER_EXE: "[收割時刻]：前 10 回合內擊杀 8 名敵軍。",
		WHEEL_OF_FATE: "[混沌法則]：累計觸發 30 次概率事件。",
		MEDUSA: "[石化凝視]：累計凍結 100 名敵軍。",
		SINGULARITY_GRENADE: "[重力大師]：累計造成 25 次強制位移。",
		SPATIAL_SCRAMBLER: "[混沌理論]：累計觸發 50 次概率事件。",
		KNIGHT_SUPLEX: "[格鬥家]：馬累計擊殺 40 名敵軍。",
		BISHOP_SHADOW_SWAP: "[虛空行者]：累計傳送或位置交換 40 次。"
	},
	player: "我方",
	enemy: "敵方",
	recycleTrade: "整頓 / 交易",
	confirmEndTurnTitle: "結束回合確認",
	confirmEndTurnMessage: "您確定要結束本回合嗎？",
	confirmPurchaseTitle: "確認購買",
	confirmPurchaseMessage: "您確定要購買 {item} 嗎？",
	connectionLineIdleLabel: "待機連線降頻",
	genericEquipment: "通用裝備",
	use: "使用",
	useItem: "使用道具",
	visualQualityLabel: "畫面與渲染",
	networkActive: "聯網",
	networkOffline: "離線",
	statusLabel: "網路狀態",
	additionalEffects: "附加效果",
	permanent: "永久"
};
const ct = {
	en: rt,
	zh: {
		title: "王 权 网 络",
		subtitle: "连接|统率|征服",
		playVsAi: "标准棋局",
		playVsHuman: "双人对战",
		playRogue: "命运轮局",
		unitExclusive: "{name}专用",
		whiteReserve: "白方",
		blackReserve: "黑方",
		whiteReserveFull: "白方后备",
		blackReserveFull: "黑方后备",
		whiteTurn: "白方回合",
		blackTurn: "黑方回合",
		whiteWins: "白方胜利！",
		blackWins: "黑方胜利！",
		draw: "平局",
		basicConfiguration: "基础配置",
		skillsLabel: "技能",
		noCombo: "无连击",
		blackHQ: "黑方",
		interfaceTab: "界面",
		visualTab: "视觉",
		audioTab: "音频",
		port: "竖屏",
		land: "横屏",
		fit: "自适应",
		closeTerminal: "关闭终端",
		systemLanguage: "系统语言",
		masterAudio: "声音主开关",
		musicVolume: "音乐音量",
		sfxVolume: "音效音量",
		cancelAim: "取消瞄准",
		systemCollapse: "系统崩溃倒计时：",
		turns: "回合",
		economicStable: "经济稳定",
		danger: "危险区",
		undoLabel: "悔棋",
		skipLabel: "跳过",
		itemsLabel: "物品",
		equipLabel: "装备",
		progress: "攻略进度",
		credits: "结余资金",
		systemReady: "系统就绪",
		module: "当前模块：",
		cost: "花费",
		accessGranted: "系统破解成功",
		systemPurged: "系统已被清除",
		continueDeep: "继续深入 (Chapter {next})",
		funds: "资金",
		rank: "评级",
		backgroundInfo: "背景档案",
		coreLogic: "核心逻辑",
		difficultyLabel: "危险等级",
		sov: "君主",
		max: "满级",
		none: "无",
		spawn: "单位生成",
		menu: "菜单",
		restart: "重新开始",
		settings: "系统设置",
		settingsTitle: "系统设置",
		restoreDefaults: "恢复默认",
		resetMessage: "系统参数已重置为基准出厂协议。",
		backToMenu: "返回主菜单",
		languageName: "简体中文",
		showDanger: "危险区",
		reserveLayoutLabel: "库存布局",
		reserveLayoutAuto: "自动",
		reserveLayoutPortrait: "竖屏",
		reserveLayoutLandscape: "横屏",
		aspectRatioLabel: "屏幕比例",
		resolutionLabel: "屏幕分辨率",
		resolutionAdaptive: "自适应窗口",
		brightnessLabel: "屏幕亮度",
		qualityLabel: "画面质量",
		qualityHigh: "高画质",
		qualityMedium: "中画质",
		qualityLow: "低功耗",
		connectionLineModeLabel: "连接线显示",
		connectionLineModeAlways: "始终显示",
		connectionLineModeAuto: "自动隐藏",
		connectionLineModeNever: "从不显示",
		gridStyleLabel: "网格样式",
		gridStyleDotted: "点阵",
		gridStyleCurve: "曲线",
		defaultDangerZoneLabel: "默认显示威胁区",
		gameLogicPreferences: "游戏逻辑与偏好",
		displayLayout: "显示与布局",
		connectionLineAutoPauseLabel: "自动隐藏连接线",
		connectionLinePauseDelayLabel: "隐藏延迟时间",
		autoEndTurnLabel: "自动结束回合",
		confirmationsLabel: "操作二次确认",
		confirmEndTurnLabel: "结束回合确认",
		confirmSurrenderLabel: "投降确认",
		confirmShopLegendaryLabel: "商店购买确认",
		postProcessingLabel: "复古后期滤镜",
		noiseStrengthLabel: "胶片颗粒强度",
		vignetteStrengthLabel: "边缘暗角强度",
		crtCurvatureLabel: "CRT 曲面屏畸变",
		accessibilityLabel: "无障碍与舒适",
		screenShakeLabel: "屏幕震动",
		floating3DLabel: "3D 悬浮与视差",
		showEndgameBackground: "主菜单显示残局",
		difficultyEasy: "简单",
		difficultyNormal: "普通",
		difficultyHard: "困难",
		rules: "规则说明",
		rulesContent: "目标：击杀敌方国王。\n\n移动：棋子移动规则同国际象棋。\n\n部署：可从库存中部署棋子到棋盘上的合法位置。\n\n网络：棋子可通过彼此的移动范围相连，最终连接 to 国王的为“连接状态”。\n\n瘫痪棋子：若棋子失去与国王的网络连接，即被“瘫痪”无法移动。己方正常棋子可通过移动恢复其网络。",
		undo: "悔棋",
		skip: "跳过",
		surrender: "投降",
		surrenderConfirm: "确认投降吗？",
		surrenderTitle: "绝望的提议",
		surrenderMsg: "敌军已丧失全部战斗能力，请求停机投降。是否接受？",
		acceptSurrender: "接受",
		refuseSurrender: "战至最后",
		cancel: "取消",
		checkWarning: "将军！",
		gameOver: "游戏结束",
		winnerIs: "胜利者：",
		playAgain: "再来一局",
		undoRetry: "使用悔棋重试 (剩余 {count} 次)",
		victory: "战斗胜利！",
		ok: "确定",
		bossSuffix: " (首领)",
		decrypt: "解析中",
		decryptSuccess: "状态: 解析成功 // 战区日志已同步",
		transmissionComplete: "传输完成",
		systemUnlocked: "系统已解锁",
		swallow: "燕子",
		protocolLocked: "协议已锁定",
		noDescription: "暂无描述",
		unit: "单位",
		level: "等级",
		skill: "技能",
		equip: "装备",
		add: "添加",
		unlockAll: "解锁全部",
		clearData: "清除数据",
		selectConsumable: "选择消耗品...",
		selectEquipment: "选择装备...",
		generic: "通用",
		monarchSelectTitle: "选择君主",
		monarchSelectSub: "初始化战略核心",
		monarchFunds: "初始资金",
		monarchDifficulty: "战略难度",
		monarchHistory: "历史档案 / 情报",
		monarchLogic: "核心系统逻辑",
		monarchCancel: "取消",
		monarchStart: "开启轮局",
		monarchWIP: "开发中",
		monarchLocked: "锁定",
		monarchDefaultName: "基准君主",
		monarchDefaultDesc: "神经网络的传统指挥官。稳健、平衡，严格遵循基础通信协议。",
		monarchDefaultMechanic: "标准协议：为周围 1 格的友军提供网络连接。",
		monarchHappyPrinceName: "快乐王子",
		monarchHappyPrinceDesc: "“剥落金箔，武装万民。一颗只为牺牲跳动的铅铁之心。”",
		monarchHappyPrinceMechanic: "【黄金布施】开局 5000G，无常规收益。王子购买的道具全部分发为友军传说装备。\n【铅心熔铸】伴生信号源“燕子”，阵亡即败。王子存活时可耗费 500G 将其复活。\n【不朽金身】免疫首次致死打击，化为无敌的铅铁雕像（永久定身，提供 3x3 辐射网络，允许友军重叠）。",
		monarchArthurName: "亚瑟王",
		monarchArthurDesc: "“圆桌之首，天命之王。他打破集权，以分布式的信仰统御群敌。”",
		monarchArthurMechanic: "【去中心化】3 级或传说单位视为信号源。自带 3 级梅林(象)与兰斯洛特(马)。\n【圆桌誓约】同生共死：任一 3 级友军完成击杀，其余所有 3 级友军获得【护盾】。\n（限制：棋子最高 3 级，禁用皇后）",
		monarchOdysseusName: "奥德修斯",
		monarchOdysseusDesc: "“深渊的巡航者。视边界为虚无，将诡局化作战争的最高艺术。”",
		monarchOdysseusMechanic: "【无界航行】棋子与网络信号可穿透棋盘边界（限 1 格）。\n【海妖之歌】每 5 回合，连通状态的非王棋子可能发生致命的随机漂移。\n【木马诡计】主动：在任意空地秘密投放木马。静默 2 回合后解体，爆出两名奇袭兵蜂。",
		monarchLouisName: "路易十四",
		monarchLouisDesc: "“朕即国家。权力如烈阳当空，神圣且不容分权。”",
		monarchLouisMechanic: "【绝对日冕】国王独占 5x5 超大网络，但信号绝对禁止被友军中继。踏入日冕的敌军将被全盘沉默。\n【双子王权】伴生隐秘信号源“铁面人”。一旦铁面人阵亡，国王永久丧失日冕网络。",
		monarchRichardName: "狮心王理查",
		monarchRichardDesc: "“永远冲锋的十字军统帅。胜利在前方，回望即是背叛。”",
		monarchRichardMechanic: "【单向远征】信号仅向前传递。国王拥有“后”的机动。冲锋越深赏金越高，全军解锁 2 格滑行；过河友军获得【不屈】。\n【死不旋踵】国王绝不后退。\n【天价赎金】国王阵亡时，自动扣除 100G 并在己方底线满血复活。",
		selectLoot: "选择你的战利品",
		recruitKnight: "招募: 骑士",
		recruitKnightDesc: "在队伍中增加一个新马",
		recruitBishop: "招募: 主教",
		recruitBishopDesc: "在队伍中增加一个新象",
		itemFreeze: "道具: 冰霜卷轴",
		itemFreezeDesc: "获得一个消耗品：冻结敌方一回合",
		loadGame: "读取进度",
		loadGameSub: "恢复本地节点",
		saveGame: "存档进度",
		saveManagement: "存档管理",
		loadArchive: "再临棋局",
		emptySlot: "空位",
		chapter: "章",
		levelLabel: "关",
		saveLimitReached: "存档次数已用尽",
		saveSuccess: "存档成功！",
		remainingSaves: "剩余存档次数",
		yourTurn: "你的回合",
		yourTurnAnim: "你的回合",
		aiTurn: "AI 回合",
		normalMode: "标准棋局",
		rogueMode: "命运轮局",
		turn: "当前回合",
		tacticalTurnBased: "战术回合制",
		permadeathRun: "永久死亡挑战",
		standardSimulation: "标准模拟",
		selectAiConfig: "选择 AI 配置",
		protocolBaseline: "01 - 协议基准",
		standardLogic: "02 - 标准逻辑",
		advancedNeural: "03 - 高级神经",
		localP2P: "本地对战",
		build: "版本",
		local: "本地",
		terminal: "终端",
		skipReward: "跳过 (+10G)",
		reroll: "重刷新 ({cost}G)",
		combo: "连击 x{count}",
		comboInc: "连击 +1!",
		slot: "槽位",
		tierCommon: "普通",
		tierRare: "稀有",
		tierEpic: "史诗",
		tierLegendary: "传说",
		availableCredit: "可用资金",
		confirmClaim: "确认领取",
		insufficientFunds: "资金不足",
		darkBargain: "黑暗交易",
		targetSold: "目标已出售",
		blackMarket: "黑市交易",
		awaitingSelection: "等待终端指令选择...",
		unlockRequired: "达成特定战术成就以解锁",
		itemDetails: "物品详情",
		assetDetails: "单位详情",
		sell: "出售",
		back: "返回",
		recruitPiece: "招募: {name}",
		newUnit: "新单位",
		addPieceDesc: "将一个新的 {name} 加入你的队伍编制。",
		imbueSkill: "赋予技能: {name}",
		replaceSkill: "替换技能: {name}",
		backupUnit: "后备单位",
		bonusSkill: "附带技能：",
		conflict: "互斥冲突",
		equipmentFull: "装备槽位已满",
		pieceTypeMismatch: "单位类型不匹配",
		itemConflictReplace: "替换了冲突装备: {name}",
		replaces: "(覆盖) ",
		scrapRecycle: "物资转化",
		inventoryFull: "库存已满",
		scrapRecycleDesc: "你的 {type} 槽位已达上限 ({max})。选择此项将转化为 15 金币。",
		consumable: "消耗品",
		equipment: "装备",
		piecePawn: "兵",
		pieceKnight: "骑士",
		pieceBishop: "主教",
		pieceRook: "战车",
		pieceQueen: "王后",
		pieceKing: "国王",
		unitMerlin: "梅林 (3级)",
		unitLancelot: "兰斯洛特 (3级)",
		unitIronMask: "铁面人",
		campTitle: "营地",
		campSubtitle: "休整与准备",
		campDesc: "利用这个时机在下一场战斗前检查你的装备和阵容。",
		campLevel: "层级",
		campGold: "金币",
		campInventory: "库存",
		campUnits: "{count} 个单位",
		campItems: "{consumables} 消耗品 · {equipments} 装备",
		continue: "继续",
		close: "关闭",
		debug: {
			spawnerTitle: "单位生成器 (调试)",
			pieceType: "单位类型",
			selectPiece: "选择单位...",
			imbueSkill: "赋予技能",
			initialEquipment: "初始装备",
			none: "无",
			generate: "生成"
		},
		dbTitle: "核心数据库",
		dbSub: "数据解密与存档",
		dbClose: "断开连接",
		dbNotCollected: "数据未发现",
		dbUnlockProtocol: "解锁协议：",
		dbTabs: {
			monarch: "君主核心",
			king: "王权模块",
			pawn: "兵蜂模块",
			knight: "突击模块",
			bishop: "远控模块",
			rook: "战车模块",
			queen: "皇后模块",
			generic: "通用协议",
			equipment: "硬件外设",
			consumable: "一次性脚本",
			boss: "战役机制",
			terrain: "环境异常"
		},
		noSelection: "暂无选中单位",
		personnel: "兵营编制",
		inventory: "储备物资",
		emptyBag: "行囊空空如也",
		storageEmpty: "库房尚未整备",
		skillModule: "性能模块",
		equipModule: "辅助插件",
		railgunFiring: "轨道炮：即将发射！",
		railgunCountdown: "轨道炮：{n} 回合后发射",
		quantumCountdown: "距离下次纠缠: {n} 回合",
		cooldown: "冷却中",
		ready: "已就绪",
		used: "已使用",
		depleted: "弹药耗尽",
		turnsRemaining: "{n} 回合",
		remainingUses: "剩余 {n} 次",
		bastionMode: "堡垒状态",
		mobileMode: "机动状态",
		costGold: "耗费 {n} 金币",
		deployToUse: "部署后可用",
		prepare: "准备释放",
		intel: "情报",
		barracks: "兵营编制",
		sectorLogs: "战区日志",
		sector: "扇区",
		eliminateAll: "全歼敌军",
		vipTarget: "重要目标",
		vipTargetDesc: "敌方不存在国王，击败所有敌军即可获胜。",
		jammingTitle: "网络干扰",
		jammingShortDesc: "本局全场断网，仅特殊能力可提供网络。",
		noAnomaly: "无异常",
		anomalyTitle: "异常状态",
		proxyKingDesc: "斩首非终点。敌方“王”存活时，敌方普通棋子必须保证信号在网方可行动；一旦敌方“王”被击杀，全军将强制进入不受链路限制的永久连通状态。玩家必须清除棋盘上的所有敌军。",
		empty: "空",
		dragToUnequip: "拖拽以卸下",
		dragToEquip: "拖拽以装备",
		dragToUse: "拖拽以使用",
		aiAnalyzing: "AI 思考中...",
		noData: "暂无数据",
		items: JSON.parse("{\"EMP\":{\"name\":\"EMP 脉冲\",\"desc\":\"释放电磁干扰，冻结 3x3 范围内的敌军 1 回合。\"},\"OVERCLOCK\":{\"name\":\"超频\",\"desc\":\"使目标单位本回合可以额外行动一次。\"},\"PHASE\":{\"name\":\"相位偏移\",\"desc\":\"被动：该单位移动时可以穿过其他棋子。\"},\"RANGE_UP\":{\"name\":\"信号增强器\",\"desc\":\"被动：该单位的网络覆盖范围 +1。\"},\"BATTERY\":{\"name\":\"应急电池\",\"desc\":\"立刻解除目标冻结。\"},\"FREEZE_RAY\":{\"name\":\"冰冻射线\",\"desc\":\"冻结敌方单位 2 回合。\"},\"PARDON\":{\"name\":\"赦免令\",\"desc\":\"暂时策反一个敌方单位。\"},\"SMOKE_BOMB\":{\"name\":\"烟雾弹\",\"desc\":\"免疫远程直线攻击 2 回合。\"},\"ROYAL_SACRIFICE\":{\"name\":\"皇家献祭\",\"desc\":\"永久牺牲一名选中的【友军】，将其力量叠加至当前棋子（等级+1，装备槽+1）。\"},\"SCRAP_PART\":{\"name\":\"多余零件\",\"desc\":\"拆解获得意外之财，直接获得 5-20 枚金币。\"},\"LURE_SIGNAL\":{\"name\":\"诱导信号\",\"desc\":\"强制一名选中的【敌方兵】向后退一格。\"},\"EMERGENCY_PATCH\":{\"name\":\"紧急补丁\",\"desc\":\"立即移除一名选中的友方棋子身上的【感染】状态。\"},\"COMMAND_STEAL\":{\"name\":\"指令窃取\",\"desc\":\"锁定一名敌方棋子 2 回合，并在此期间将其转化为临时的【信号源】为我方供电。\"},\"DATA_HARVEST\":{\"name\":\"数据收割\",\"desc\":\"场上每存在一个【冻结】状态的单位，你便获得 10 金币。\"},\"EQ_BAYONET\":{\"name\":\"刺刀\",\"desc\":\"兵可以向前攻击（吃子）。\"},\"EQ_SCOUT_RADAR\":{\"name\":\"侦察雷达\",\"desc\":\"只要该兵连通，其周围 2 格内的敌方隐身/幻影效果失效。\"},\"EQ_SIGNAL_BACKPACK\":{\"name\":\"信号背包\",\"desc\":\"强制使其正后方和正前方各 2 格内的友军视为“已连网”。\"},\"EQ_HOOF_ARMOR\":{\"name\":\"护蹄重甲\",\"desc\":\"跳跃落点如果有敌方兵，直接吃掉且本回合可再次行动。\"},\"EQ_TELESCOPIC_LEGS\":{\"name\":\"伸缩腿\",\"desc\":\"马可以选择跳跃 3x1 的距离，而不仅仅是 2x1。\"},\"EQ_SHOCK_STIRRUPS\":{\"name\":\"震荡马镫\",\"desc\":\"马落地时，会引发震荡，使落点周围十字 1 格内的敌方非王单位眩晕 1 回合。\"},\"EQ_PRISM_SHIELD\":{\"name\":\"棱镜护盾\",\"desc\":\"象被吃掉时，将其杀手（如果是斜线攻击）一同带走。\"},\"EQ_HIGH_POWER_SCOPE\":{\"name\":\"高倍目镜\",\"desc\":\"如果吃掉距离自己 3 格及以上的敌人，立即获得 5 金币奖励。\"},\"EQ_PURIFICATION_STAFF\":{\"name\":\"净化法杖\",\"desc\":\"移动后，清除落点周围 3x3 范围友军的负面状态。\"},\"EQ_HOVER_TREAD\":{\"name\":\"履带轮\",\"desc\":\"车可以斜向移动一格。\"},\"EQ_BASE_STATION\":{\"name\":\"基站天线\",\"desc\":\"只要车处于连网状态，车所在的整条行和列的所有友军均视为已连网。\"},\"EQ_REACTIVE_ARMOR\":{\"name\":\"反应装甲\",\"desc\":\"车免疫来自正上方和正下方的任何攻击。\"},\"EQ_PHOENIX_FEATHER\":{\"name\":\"凤凰羽毛\",\"desc\":\"后第一次被吃时，在王身边重生为等级 1 的兵。\"},\"EQ_BLOOD_DRESS\":{\"name\":\"鲜血长裙\",\"desc\":\"吃掉敌军后在落点留下残影（2回合），之后可无视距离移动互换位置。\"},\"EQ_SCEPTER_OF_CHARM\":{\"name\":\"蛊惑权杖\",\"desc\":\"后的威胁范围内有且仅有一个敌军且无同伴时，策反该敌军 1 回合。\"},\"EQ_LIGHTNING_ROD\":{\"name\":\"避雷针\",\"desc\":\"王免疫敌方环境陷阱和负面状态的影响。\"},\"EQ_MEGAPHONE\":{\"name\":\"扩音器\",\"desc\":\"王提供的初始网络支持范围从周围 1 格扩大到 2 格。\"},\"EQ_ROYAL_GUARD\":{\"name\":\"御前侍卫\",\"desc\":\"王相邻友军被吃时，自动消耗 10 金币将其复活（每局限一次）。\"},\"EQ_REFLECTIVE_ARMOR\":{\"name\":\"反射护甲\",\"desc\":\"当棋子被吃掉时，吃它的敌方棋子被冻结 1 回合。\"},\"EQ_LIGHTWEIGHT_ALLOY\":{\"name\":\"轻量化合金\",\"desc\":\"棋子可以在断网状态下移动一次，随后该装备损毁。\"},\"EQ_CAMOUFLAGE\":{\"name\":\"伪装迷彩\",\"desc\":\"只要该棋子本回合未移动且未吃子，它对敌方隐身。\"},\"EQ_STABILIZER\":{\"name\":\"稳定器\",\"desc\":\"该棋子不会被任何强制位移效果影响。\"},\"EQ_SELF_DESTRUCT\":{\"name\":\"自毁协议\",\"desc\":\"被吃时对周围 1 格造成毁灭爆炸，随后装备损毁。\"},\"EQ_BACKUP_BATTERY\":{\"name\":\"备用电池组\",\"desc\":\"该棋子断网后，可以多撑 2 回合才进入瘫痪状态。\"},\"EQ_EMERGENCY_LINK\":{\"name\":\"应急链路\",\"desc\":\"断网时，强行与周围 2 格内的另一名友军建立临时连接。\"},\"EQ_BOUNTY_MODULE\":{\"name\":\"赏金模块\",\"desc\":\"该棋子每吃掉一个敌方棋子，立即获得 10 金币。\"},\"EQ_RESCUE_BEACON\":{\"name\":\"急救信标\",\"desc\":\"被吃掉时，如果有同类棋子在库存，免费部署一个在王周围。\"},\"EQ_TACTICAL_OPS\":{\"name\":\"战术调度中心\",\"desc\":\"每场战斗的第一回合，可以额外进行一次“部署”操作。\"},\"EQ_DIPLOMATIC_IMMUNITY\":{\"name\":\"外交豁免权\",\"desc\":\"前 2 回合，敌方 AI 禁止部署新棋子。\"},\"EQ_FULL_BAND_SCANNER\":{\"name\":\"全频扫描仪\",\"desc\":\"全图所有敌方“隐身”和“陷阱”在回合开始时强制显形销毁。\"},\"EQ_BLACK_MARKET_LEDGER\":{\"name\":\"黑市账本\",\"desc\":\"战斗胜利（击杀敌方王）后，额外获得 30 金币收益。\"},\"EQ_RECYCLING_STATION\":{\"name\":\"循环回收站\",\"desc\":\"每当有友方棋子阵亡，随机获得一个普通消耗品。\"},\"EQ_RELIC_OF_KINGS\":{\"name\":\"王权遗物\",\"desc\":\"当只剩下王且库存已空时，王获得等同于“后”和“马”的究极移动能力。\"},\"EQ_VENTURE_CAPITAL\":{\"name\":\"风险投资\",\"desc\":\"每进入下一关，如果你当前拥有的金币超过 50，则额外获得 10 金币利息。\"},\"EQ_SWARM_INTELLIGENCE\":{\"name\":\"邻接网络\",\"desc\":\"场上所有的“兵”只要互相相邻，即视为与王连通。\"},\"EQ_ARROGANT_CREED\":{\"name\":\"狂妄信条\",\"desc\":\"游戏开始时，国王拥有等同于后+马的移动范围。一旦你部署了任何其他棋子，该效果永久失效。\"},\"EQ_QUEEN_ROOK_LINK\":{\"name\":\"战车连接项圈\",\"desc\":\"传说：只要后处于联网状态，离后最近的一名友方“车”强制变为联网状态。\"},\"EQ_QUEEN_BISHOP_LINK\":{\"name\":\"主教连接项圈\",\"desc\":\"传说：只要后处于联网状态，离后最近的一名友方“象”强制变为联网状态。\"},\"EQ_HIVE_CORE\":{\"name\":\"动力核心\",\"desc\":\"只要该兵连通，其移动力增加 1 格（可前移 2 格）。\"},\"EQ_CHEAP_BOOSTER\":{\"name\":\"廉价增频器\",\"desc\":\"该兵的网络延伸距离提升至 3 格，但无法进行攻击（吃子）。\"},\"EQ_CHAIN_MINE\":{\"name\":\"连锁地雷\",\"desc\":\"被吃掉时，若周围 1 格有其他“兵”，触发连锁爆炸（3x3）。\"},\"EQ_PLUNDER_HOOVES\":{\"name\":\"裂隙马蹄\",\"desc\":\"跳跃经过敌方单位上方时，窃取每一个敌方 2 金币。\"},\"EQ_GHOST_RIDE\":{\"name\":\"幽灵骑行\",\"desc\":\"跳跃经过的所有敌方单位有 30% 概率被随机传送。\"},\"EQ_REFRACTION_LENS\":{\"name\":\"折射透镜\",\"desc\":\"象的路径上有友军时，可以改变方向移动 2 格（90度折射）。\"},\"EQ_FAITH_SIPHON\":{\"name\":\"信仰汲取\",\"desc\":\"每当象斜线上的单位阵亡，玩家获得 2 金币。\"},\"EQ_EM_SHIELD\":{\"name\":\"电磁屏蔽罩\",\"desc\":\"只要车在国王边上一格，国王免疫来自“马”的攻击。\"},\"EQ_TOW_HOOK\":{\"name\":\"远程牵引钩\",\"desc\":\"主动：不移动，直接吃掉距离自己 2 格直线上的一个敌军。\"},\"EQ_ROYAL_SALUTE\":{\"name\":\"皇家礼炮\",\"desc\":\"吃子后随机雷击一名敌方兵（冷却：3回合）。\"},\"EQ_GOLDEN_THRONE\":{\"name\":\"黄金王座\",\"desc\":\"每回合开始，根据场上连通的友军数量获得金币。\"},\"SIGNAL_TOWER_DEFENSE\":{\"name\":\"信号塔防御\",\"desc\":\"主动：消耗 20 金币在当前格子放置永久“信号增益塔”。\"},\"EQ_DEFLATION\":{\"name\":\"通缩政策\",\"desc\":\"全局：商店所有商品价格降低 20%。\"},\"EQ_HACKER_TERMINAL\":{\"name\":\"黑客终端\",\"desc\":\"全局：每回合开始时，随机使一个敌方高级棋子冻结。\"},\"EQ_SPYWARE\":{\"name\":\"间谍软件\",\"desc\":\"全局：每次敌方国王移动后，玩家获得 5 金币。\"},\"FROZEN\":{\"name\":\"冻结\",\"desc\":\"本回合无法移动或行动。\"},\"PETRIFIED\":{\"name\":\"石化\",\"desc\":\"永久无法行动。\"},\"SKILL_LOCKED\":{\"name\":\"技能封锁\",\"desc\":\"无法使用主动技能。\"},\"SILENCED\":{\"name\":\"沉默\",\"desc\":\"无法激活任何技能。\"},\"ENCRYPTED\":{\"name\":\"加密伪装\",\"desc\":\"身份被隐藏，兵种类型不可见。\"},\"SHIELDED\":{\"name\":\"护盾\",\"desc\":\"抵消一次伤害。\"},\"GRAVITY_LOCKED\":{\"name\":\"重力束缚\",\"desc\":\"移动力受限。\"},\"MEDUSA\":{\"name\":\"美杜莎之眼\",\"desc\":\"永久石化。\"},\"WITHDRAW\":{\"name\":\"战术撤回\",\"desc\":\"撤回库存。\"},\"JAMMING\":{\"name\":\"全频干扰\",\"desc\":\"永久瘫痪当前棋盘上所有非王棋子（不影响使用后新部署的棋子）。\"},\"SCARY_LETTER\":{\"name\":\"恐吓信\",\"desc\":\"向远离我方国王方向逼退敌方棋子一格。\"},\"SPARE_PARTS\":{\"name\":\"备用零件\",\"desc\":\"在王身边生成一个兵。\"},\"COMPASS\":{\"name\":\"位移罗盘\",\"desc\":\"随机漂移。\"},\"PURIFIER\":{\"name\":\"信号净化器\",\"desc\":\"清除负面状态。\"},\"DECOY\":{\"name\":\"诱饵弹\",\"desc\":\"高权重诱饵。\"},\"DOOM_BROADCAST\":{\"name\":\"末日广播\",\"desc\":\"摧毁全场所有断网单位。\"},\"TIME_GLASS\":{\"name\":\"时间沙漏\",\"desc\":\"增加一次悔棋机会。\"},\"SPACE_GLASS\":{\"name\":\"空间沙漏\",\"desc\":\"增加一次存档机会。\"},\"PRESS\":{\"name\":\"重压机\",\"desc\":\"永久扁平化。\"},\"VOID_ANCHOR\":{\"name\":\"虚空锚点\",\"desc\":\"封锁地块。\"},\"GRAVITY_TRAP\":{\"name\":\"重力陷阱\",\"desc\":\"3x3 范围重力锁定，最大移动距离限制为 1 格。\"},\"CLOAK\":{\"name\":\"信号遮断器\",\"desc\":\"隐身 2 回合。\"},\"OVERLOAD\":{\"name\":\"能量过载\",\"desc\":\"双动且无法吃子。\"},\"PORTAL\":{\"name\":\"传送门\",\"desc\":\"建立传送点。\"},\"DRAFT_ORDER\":{\"name\":\"强行征召\",\"desc\":\"复活一个马放入库存。\"},\"MIDAS\":{\"name\":\"点金石\",\"desc\":\"将此石拖拽至下方仓库行或者棋盘上的单位上，可将其变现为 30 金币。\"},\"GOLDEN_TOUCH\":{\"name\":\"黄金化\",\"desc\":\"将一名选中的【敌方兵】瞬间转化为 50 金币。\"},\"LOOT_BOX\":{\"name\":\"战利品箱\",\"desc\":\"随机获得一个消耗品。\"},\"VOID_ANCHOR_ITEM\":{\"name\":\"虚空锚点\",\"desc\":\"在选定空格放置一个持续 3 回合的锚点，禁止任何单位进入或部署。\"},\"GOLD_MAGNET_ITEM\":{\"name\":\"金币磁铁\",\"desc\":\"为单位注入磁力，本回合其每移动一格便获得 1 金币。\"},\"BARRICADE_ITEM\":{\"name\":\"简易工事\",\"desc\":\"在选定空格放置一个永久障碍物（直到被摧毁），阻挡移动。\"},\"SCOUT_PROBE\":{\"name\":\"侦察探头\",\"desc\":\"使 2x2 区域内的敌方隐身单位显形。\"},\"RUST_SPRAY\":{\"name\":\"锈蚀试剂\",\"desc\":\"目标下回合无法吃子。\"},\"SWAP_PLUGIN\":{\"name\":\"交换插件\",\"desc\":\"交换相邻友军位置。\"},\"ILLEGAL_SLOT\":{\"name\":\"非法扩容\",\"desc\":\"装备槽永久 +1。\"},\"BLACK_ORDER\":{\"name\":\"黑市订单\",\"desc\":\"抢夺敌方一件装备。\"},\"REAPER_EXE\":{\"name\":\"死神程序\",\"desc\":\"击杀所有断网棋子。\"},\"WHEEL_OF_FATE\":{\"name\":\"命运轮盘\",\"desc\":\"触发 3 个随机消耗品效果。\"},\"PASSIVE_ANTENNA\":{\"name\":\"财富天线\",\"desc\":\"主动：激活此天线，使本局内玩家后续获得的所有金币收益翻倍。\"},\"SINGULARITY_GRENADE\":{\"name\":\"奇点手雷\",\"desc\":\"在空地释放。将 5×5 内非王棋子按由内向外次序向中心拉扯 1 格。王免疫但被重力束缚 2 回合。撞向王的棋子单方面粉碎。\"},\"SPATIAL_SCRAMBLER\":{\"name\":\"空间扰乱器\",\"desc\":\"以目标格为中心的 3×3 范围内所有非王棋子的位置被随机重新排列。\"},\"EQ_GRAPPLING_HOOK\":{\"name\":\"抓地飞索\",\"desc\":\"主动：朝一个方向发射飞索，将自身拉拽至路径上最后一个空位（障碍物前）。不消耗行动次数。\"}}"),
		skills: JSON.parse("{\"BLACK_HOLE\":{\"name\":\"虚空黑洞\",\"desc\":\"场地中央存在永久的虚空锚点，封锁区域。\"},\"OBSTACLES\":{\"name\":\"废墟\",\"desc\":\"场地中散布着无法逾越的障碍物。\"},\"LASER_GRID\":{\"name\":\"高压电网\",\"desc\":\"场地存在电网：每轮次奇数回合通电，摧毁格上的棋子；王免疫。\"},\"WORMHOLE\":{\"name\":\"虫洞\",\"desc\":\"场地上存在一对互相连通的传送阵：踩上一个会从另一个出来，出口被占据时不传送。\"},\"NETWORK_JAM\":{\"name\":\"网络风暴\",\"desc\":\"全场信号受到严重干扰。\"},\"FOG_OF_WAR\":{\"name\":\"战争迷雾\",\"desc\":\"战场被迷雾笼罩，视野受限。\"},\"quantumCountdown\":\"距离下次纠缠: {n} 回合\",\"erasureReady\":\"轨道炮：即将发射\",\"erasureCharging\":\"轨道炮装填中: {n} 回合\",\"PAWN_PATROL\":{\"name\":\"巡逻\",\"desc\":\"允许水平向左或向右移动 1 格（不可吃子）。\"},\"PAWN_FRONTAL_SPIKE\":{\"name\":\"锋刃\",\"desc\":\"允许向前直行移动 1 格时吃子。\"},\"PAWN_BACKSTEP\":{\"name\":\"后撤步\",\"desc\":\"允许向左后或右后方斜向退一格（不吃子）。\"},\"PAWN_RESOURCEFUL\":{\"name\":\"补给包\",\"desc\":\"被吃掉时，有 30% 概率随机回到库存中。\"},\"PAWN_VENGEANCE\":{\"name\":\"牺牲闪击\",\"desc\":\"被吃掉时，随机冻结对方一名非王棋子 2 回合。\"},\"PAWN_ASSASSIN\":{\"name\":\"刺客代码\",\"desc\":\"该棋子吃掉敌方的“后”或“车”时，进化为随机高级棋子。\"},\"PAWN_PROMOTE\":{\"name\":\"晋升之路\",\"desc\":\"每吃掉一个敌方子力，等级 +1；达到 5 级后再次吃子时进化。\"},\"PAWN_SIGNAL_TOWER\":{\"name\":\"信号塔\",\"desc\":\"即使断网自己不能移动，也会为周围 1 格的己方棋子提供网络连接。\"},\"PAWN_PHALANX\":{\"name\":\"兄弟会\",\"desc\":\"兵左边或右边有己方的兵时，自身免疫来自敌方兵（Pawn）或马（Knight）的捕捉。\"},\"PAWN_DETONATOR\":{\"name\":\"炸弹兵\",\"desc\":\"被吃掉时，炸毁周围 3x3 范围内的所有非王棋子。\"},\"PAWN_RELAY\":{\"name\":\"中继站\",\"desc\":\"该棋子的网络覆盖范围提升至 2 格。\"},\"PAWN_SACRIFICE\":{\"name\":\"牺牲契约\",\"desc\":\"被吃掉时获得 2 次额外存档机会，并在王周围生成一个兵。\"},\"PAWN_INTERLOCK\":{\"name\":\"联锁装甲\",\"desc\":\"左右 1 格有友军时，无法被对方的“后”或“车”吃掉。\"},\"PAWN_PARASITE\":{\"name\":\"寄生算法\",\"desc\":\"移动到敌方棋子相邻时，使其下回合无法移动。\"},\"PAWN_SWARM\":{\"name\":\"兵链广播\",\"desc\":\"只要有一个联网，全场所有的兵均视为已联网。\"},\"PAWN_OMEGA_MIRROR\":{\"name\":\"终局镜像\",\"desc\":\"模拟其网络连线上己方高级棋子的移动 and 攻击方式。\"},\"PAWN_SATELLITE\":{\"name\":\"卫星链路\",\"desc\":\"永远不需要网络连接，且国王死后可作为代理王。\"},\"PAWN_CHARGER\":{\"name\":\"冲锋者\",\"desc\":\"允许兵在任何位置向前直线移动两格（不可吃子，不可越子）。\"},\"KNIGHT_QUICK_ROUTING\":{\"name\":\"极速寻址\",\"desc\":\"因断网处于瘫痪状态时也允许移动，但仅限跳向己方已联网的格子。\"},\"KNIGHT_CROSS_JUMP\":{\"name\":\"十字跳\",\"desc\":\"跳跃后如果没有吃子，可以在十字方向上再移动一格（不可吃子）。\"},\"KNIGHT_HOT_SWAP\":{\"name\":\"战术换位\",\"desc\":\"允许跳向己方“兵”所在的格子，落地后与该兵互换位置。\"},\"KNIGHT_SIDE_STEP\":{\"name\":\"灵活蹄铁\",\"desc\":\"允许马向相邻的空格水平或垂直移动 1 格（不可吃子）。\"},\"KNIGHT_SCAVENGER\":{\"name\":\"搜刮者\",\"desc\":\"如果跳跃的目标格是敌方控制区，立即获得 1 金币。\"},\"KNIGHT_TRAMPLE\":{\"name\":\"践踏\",\"desc\":\"跳跃过程中经过的敌方棋子，有 50% 概率被冻结 1 回合。\"},\"KNIGHT_GHOST\":{\"name\":\"离线协议\",\"desc\":\"被动：即使处于断网状态（瘫痪），该骑士依然可以自由行动。\"},\"KNIGHT_HIT_AND_RUN\":{\"name\":\"回旋弹射\",\"desc\":\"主动：不发生位移，掷出飞刃击杀马步（L型）范围内的一名敌军（不可选择国王）。飞刃随后自动弹射，连带击杀该目标相邻（十字方向）的另一名随机敌军。冷却 3 回合。\"},\"KNIGHT_MIRAGE\":{\"name\":\"幻影移形\",\"desc\":\"被吃掉时，如果周围 2 格内有己方兵，则与其交换，兵代替马消失。\"},\"KNIGHT_GRAVITY_WELL\":{\"name\":\"引力场\",\"desc\":\"落点周围 1 格的所有敌方棋子下回合禁止移动。\"},\"KNIGHT_TROJAN\":{\"name\":\"木马\",\"desc\":\"被吃掉后，在周围随机位置生成两个己方“兵”。\"},\"KNIGHT_FULL_DUPLEX\":{\"name\":\"即插即用\",\"desc\":\"当部署上场后，本回合不结束，你可以立即再进行一次移动。\"},\"KNIGHT_CHAIN\":{\"name\":\"连锁闪电\",\"desc\":\"如果落点有敌方子力，吃掉后本回合不结束，可立即再跳一次。\"},\"KNIGHT_RIFT\":{\"name\":\"时空裂隙\",\"desc\":\"可带走起点周围的一名友方棋子，并在落地时放在身边。\"},\"KNIGHT_MIDAS_TOUCH\":{\"name\":\"黄金铁蹄\",\"desc\":\"跳跃会根据移动距离产生金币。吃掉后/车直接获得一件装备。\"},\"KNIGHT_TROJAN_KERNEL\":{\"name\":\"特洛伊内核\",\"desc\":\"当该棋子吃掉敌方的“车”或“后”时，收获一个一级兵加入库存中。\"},\"KNIGHT_AURA\":{\"name\":\"骑士光环\",\"desc\":\"只要马处于联网状态，与其相邻的友方兵获得十字移动能力。\"},\"KNIGHT_SUPLEX\":{\"name\":\"过肩摔\",\"desc\":\"主动：将相邻十字方向的一名敌军抓起，扔到自身对称位置（隔一格的对面）。落点若有棋子则双方同归于尽。\"},\"BISHOP_REFRACTION\":{\"name\":\"反射\",\"desc\":\"移动触碰边界时，可以按 90 度角折射继续滑行一格。\"},\"BISHOP_MIRROR\":{\"name\":\"镜像传送\",\"desc\":\"当斜线上有另一个己方“象”时，这两个象可以互换位置。\"},\"BISHOP_PHASE_SHIFT\":{\"name\":\"相位偏转\",\"desc\":\"允许象像“车”一样水平或垂直移动 1 格（不能吃子）。\"},\"BISHOP_AFTERSHOCK\":{\"name\":\"余震\",\"desc\":\"吃子后，落点周围 1 格的所有空格在 2 回合内变为余震区域，敌方无法在此部署单位。\"},\"BISHOP_PIERCE\":{\"name\":\"穿透狙击\",\"desc\":\"可以穿过一个己方单位进行移动或者攻击。\"},\"BISHOP_HOLY_LAND\":{\"name\":\"圣域\",\"desc\":\"该棋子斜线无视阻挡视为“控制区”。友军若部署在这些格子上，落地获得 1 回合临时网络（免于冻结）。\"},\"BISHOP_MIRROR_RESONANCE\":{\"name\":\"镜像共鸣\",\"desc\":\"斜线视线内（无遮挡）存在另一只己方“象”（视线不被任何棋子遮挡），无论对方是否联网，该棋子始终视为已联网，并能像正常联网棋子一样向外提供网格连接。\"},\"BISHOP_RECALL\":{\"name\":\"应急回存\",\"desc\":\"主动技能：可以点击自己，将该棋子撤回库存。\"},\"BISHOP_CONDUIT\":{\"name\":\"远程授能\",\"desc\":\"只要象连通，即使有阻挡也能为斜线上所有友军提供网络连接。\"},\"BISHOP_SILENCE\":{\"name\":\"禁魔\",\"desc\":\"移动后，将锁定并封印对角线上所有敌方棋子的技能。\"},\"BISHOP_OPTICAL_BLIND_ZONE\":{\"name\":\"光学死角\",\"desc\":\"该象免疫来自直线方向（车、后）的吃子攻击。\"},\"BISHOP_RESURRECTION\":{\"name\":\"复活术\",\"desc\":\"吃掉敌方棋子时，随机将一个兵、马或象放回你的库存。\"},\"BISHOP_AURORA\":{\"name\":\"极光\",\"desc\":\"主动技能：不移动，直接狙击吃掉斜线上任何位置的一个敌方棋子。\"},\"BISHOP_ABSOLUTE_BARRIER\":{\"name\":\"绝对防线\",\"desc\":\"敌方单位无法在不吃子的情况下，停留在该象的对角线控制格上。\"},\"ROOK_VAULT\":{\"name\":\"翻越\",\"desc\":\"允许跳过路径上的第一个障碍物（友军或敌军）。\"},\"ROOK_RAILWAY\":{\"name\":\"铁轨\",\"desc\":\"在车移动过的直线路径上，留下铁轨，友方“兵”移动力+1。\"},\"ROOK_PRESS\":{\"name\":\"压制\",\"desc\":\"处于车直线上的敌方“兵”会被压制，无法移动。\"},\"ROOK_AEGIS\":{\"name\":\"塔盾\",\"desc\":\"只要车与国王靠在一起，国王获得远程免疫。\"},\"ROOK_BASTION\":{\"name\":\"堡垒形态\",\"desc\":\"主动：切换为堡垒，不可移动，但保护周围十字1格所有友军免受远程攻击。\"},\"ROOK_HEAVY_ARMOR\":{\"name\":\"重装铠甲\",\"desc\":\"不能被对方的“兵”或“马”吃掉。\"},\"ROOK_SWEEPER\":{\"name\":\"横扫\",\"desc\":\"移动经过敌方单位旁时，使其本回合断网。\"},\"ROOK_MAGNET\":{\"name\":\"磁吸\",\"desc\":\"主动：不移动，将直线上一名友军拉到自己身边。\"},\"ROOK_CARRIER\":{\"name\":\"运输机\",\"desc\":\"移动时，如果有扁平的棋子在同一格，可以携带一起移动。\"},\"ROOK_CATAPULT\":{\"name\":\"抛射\",\"desc\":\"主动：将相邻十字方向的一个友方兵发射到同一直线最远端的空格上。\"},\"ROOK_TRACTOR_BEAM\":{\"name\":\"牵引光束\",\"desc\":\"主动：不移动。将直线方向 3 格以外的第一个棋子拉近 1 格（稳定器可免疫）。\"},\"ROOK_SHOCKWAVE\":{\"name\":\"冲击波\",\"desc\":\"主动：不移动。将直线方向 3 格以内的第一个棋子推开 1 格，碰撞则同归于尽，扁平友军则叠放（稳定器可免疫）。\"},\"ROOK_FORBIDDEN_ZONE\":{\"name\":\"领土主权\",\"desc\":\"车所在的行或列上的敌方棋子移动力降为1。\"},\"ROOK_ION_CANNON\":{\"name\":\"轨道炮\",\"desc\":\"主动：原地不动，摧毁正方向直线上的所有非王单位（冷却 5 回合）。\"},\"ROOK_IRON_CURTAIN\":{\"name\":\"铁幕\",\"desc\":\"主动：锁定车所在整行，2回合内敌方车/象/后/兵无法进入或穿越该行（马、王不受影响）；冷却3回合。\"},\"ROOK_COVER\":{\"name\":\"掩体\",\"desc\":\"只要车处于联网状态，下回合开始时与其相邻的友方兵获得一层护盾（盾破后有冷却）。\"},\"ROOK_CONCUSSION\":{\"name\":\"震荡\",\"desc\":\"长距离移动（超过 3 格）后，落点周围 1 格内的敌方“兵”将被冻结 1 回合。\"},\"ROOK_SUPPLY_STATION\":{\"name\":\"补给站\",\"desc\":\"移动路径变为补给地块（2回合）：友军在此部署返还 5 金币（单局上限 30G）。无法覆盖已有特殊地块。\"},\"QUEEN_COMMAND\":{\"name\":\"统率\",\"desc\":\"周围 1 格的友军可以获得全向 1 格的移动能力。\"},\"QUEEN_AURA\":{\"name\":\"威压\",\"desc\":\"周围 2 格内的敌方“车”和“象”移动范围限制为两格。\"},\"QUEEN_PROVISION\":{\"name\":\"皇家补给\",\"desc\":\"每回合开始时，若后联网，增加 2 金币。\"},\"QUEEN_GRACE\":{\"name\":\"优雅\",\"desc\":\"吃子后，若落点还是敌人控制区，可额外获得一次移动机会。\"},\"QUEEN_DOMINATE\":{\"name\":\"霸道\",\"desc\":\"相邻的敌方棋子失去所有非基础技能。\"},\"QUEEN_DECOY\":{\"name\":\"幻影\",\"desc\":\"被攻击死亡时，如果库存有“兵”，自动消耗一个兵来抵消本次死亡并随机传送。\"},\"QUEEN_LINKAGE\":{\"name\":\"连锁部署\",\"desc\":\"部署时，可立即免费从库存部署最多两个“兵”在后身边。\"},\"QUEEN_BRIBE\":{\"name\":\"策反\",\"desc\":\"吃掉敌方“兵”时，有 50% 概率将其转化为己方库存。\"},\"QUEEN_MULTICAST\":{\"name\":\"镜像维度\",\"desc\":\"如果本回合移动没有吃子且在连线状态，可以再次移动一次（但不能吃子）。\"},\"QUEEN_INSIGHT\":{\"name\":\"洞察\",\"desc\":\"只要后在场，敌方隐身单位自动显形。\"},\"QUEEN_RECALL\":{\"name\":\"战术撤退\",\"desc\":\"主动：将后立即瞬移回国王身边的空格（冷却 3 回合）。\"},\"QUEEN_TIME_WARP\":{\"name\":\"时间倒流\",\"desc\":\"每 5 个回合，可以获得一次免费的“悔棋”机会而不消耗回合数。\"},\"QUEEN_NEMESIS\":{\"name\":\"复仇女神\",\"desc\":\"当国王被将军时，后可以无视阻挡，直接瞬移至棋盘上任何一个安全的空格；也可进行常规的吃子。\"},\"QUEEN_ROOK_AUTHORITY\":{\"name\":\"战车主权\",\"desc\":\"只要后处于联网状态，离后最近的一名友方“车”强制变为联网状态。\"},\"QUEEN_BISHOP_AUTHORITY\":{\"name\":\"主教主权\",\"desc\":\"只要后处于联网状态，离后最近的一名友方“象”强制变为联网状态。\"},\"KING_CHARISMA\":{\"name\":\"宽宏\",\"desc\":\"周围 2 格内的“兵”移动逻辑变为同“后”（滑行），移动范围两格。\"},\"KING_RADIATION\":{\"name\":\"辐射\",\"desc\":\"王的初始信号强度极高，第一层连接的有效距离从 1 格提升至 2 格。\"},\"KING_STEADY\":{\"name\":\"稳重\",\"desc\":\"王免疫任何来自敌方技能的“强制位移”效果。\"},\"KING_REWARD\":{\"name\":\"恩赏\",\"desc\":\"任何友军在王周围 2 格内吃子时，额外获得 5 金币。\"},\"KING_FORTIFY\":{\"name\":\"固守\",\"desc\":\"只要王相邻有友方“车”，王无法被敌方的“兵”或“马”吃掉。\"},\"KING_BACKUP\":{\"name\":\"应急供电\",\"desc\":\"如果王周围没子，王可以临时通过“无线连接”连通 3 格内最近的友军（可多个）。\"},\"KING_OVERSEER\":{\"name\":\"督战\",\"desc\":\"己方联网棋子（不含王）达到 5 个时，每回合额外获得 2 金币。单局限 40 金币。\"},\"KING_ROYAL_GUARD\":{\"name\":\"护卫征召\",\"desc\":\"主动：点击自己，消耗 10 金币，在王身边的空格处随机生成一个 1 级“兵”（过关不保留）。\"},\"KING_TAXATION\":{\"name\":\"纳税\",\"desc\":\"每当有一个友方单位被吃掉，王会立即产生 15 金币作为“抚恤金”。\"},\"KING_SWAP\":{\"name\":\"换位\",\"desc\":\"主动：与周围 2 格内的任何一个友军交换位置。\"},\"KING_REFLECTION\":{\"name\":\"镜像之盾\",\"desc\":\"任何在王周围 1 格内吃掉友军的敌方棋子，会立即被“震死”（同归于尽）。\"},\"KING_COMMANDER\":{\"name\":\"御前统领\",\"desc\":\"王周围 2 格内的己方“马”，跳跃落点后会冻结落点周围 1 名距离最近的敌军 1 回合。\"},\"KING_GRAND_CASTLE\":{\"name\":\"王车易位\",\"desc\":\"主动：王可以无视距离，直接与场上任意位置的一个友方“车”交换位置。\"},\"KING_SOUL_LINK\":{\"name\":\"附身斗篷\",\"desc\":\"王被吃掉时，如果场上有 1 级的兵，该兵变身为新的“王”，使游戏继续。\"},\"KING_HOLY_DOMAIN\":{\"name\":\"绝对圣域\",\"desc\":\"王周围 2 格内，所有友方棋子免疫一切负面状态（冻结、石化、沉默等）。\"},\"KING_STASIS\":{\"name\":\"时空锁定\",\"desc\":\"主动：使王周围 3 格内的所有单位（除双方国王外）进入永久“石化”状态（每场战斗限一次）。\"},\"KING_ROYAL_PATH\":{\"name\":\"御道\",\"desc\":\"如果王所在的行和列没有任何敌方棋子，王的移动范围提升至 2 格（不可吃子）。\"},\"KING_LOGISTICS\":{\"name\":\"统筹\",\"desc\":\"部署任何棋子到王相邻的格子时，立即返还 3 金币。\"},\"KING_DECOY_DOUBLE\":{\"name\":\"影武者\",\"desc\":\"移动后，在起始位置留下一个提供信号的“影终端”，持续 1 回合。\"},\"KING_MARTYRDOM\":{\"name\":\"牺牲\",\"desc\":\"王被吃掉时，若库存已空且场上有其他友军，则吸收友军引发大爆炸并重生（限一次）。\"},\"KING_ROYAL_DECORATION\":{\"name\":\"皇家授勋\",\"desc\":\"回合开始时，赋予相邻且无技能的友方“兵”一个随机普通技能。\"},\"GENERIC_ALGORITHM_SWAP\":{\"name\":\"算法共享\",\"desc\":\"主动：可以与周围 1 格内的任意一名非王友军互换位置。\"},\"GENERIC_BACKUP_BUFFER\":{\"name\":\"应急电池\",\"desc\":\"当该棋子断开网络连接时，它不会立即冻结，而是可以继续自由行动 1 个回合。\"},\"GENERIC_RAPID_DEPLOY\":{\"name\":\"轻装上阵\",\"desc\":\"部署该棋子时，有 10% 概率不消耗本回合的操作次数。\"},\"GENERIC_COATING\":{\"name\":\"涂层保护\",\"desc\":\"被动：彻底免疫地图上所有环境负面效果及负面状态（如重力锁定、感染等）。\"},\"GENERIC_SHARPEN\":{\"name\":\"锋利算法\",\"desc\":\"吃子后，额外获得 3 金币。\"},\"GENERIC_CHAFF\":{\"name\":\"干扰丝\",\"desc\":\"被攻击死亡时，50% 概率触发“闪避”，原地消失并随机出现在相邻空格。\"},\"GENERIC_RECALL\":{\"name\":\"紧急回库\",\"desc\":\"主动：消耗本回合行动，将该棋子撤回库存（保留等级和技能）。\"},\"GENERIC_LOGIC_LOCK\":{\"name\":\"逻辑锁\",\"desc\":\"被该棋子攻击范围覆盖的敌方非王棋子，会被施加“沉默”（无法触发任何技能）。\"},\"GENERIC_MIRRORING\":{\"name\":\"镜像协议\",\"desc\":\"当该棋子相邻有友军时，它能复制友军的基础移动逻辑。\"},\"GENERIC_PARASITE\":{\"name\":\"寄生脚本\",\"desc\":\"当该棋子被吃掉时，附身在攻击者身上，使其变为“被寄生”状态（极易掉线）。\"},\"GENERIC_HIVE_KERNEL\":{\"name\":\"同频协议\",\"desc\":\"只要该棋子联网，全场所有与其同类型的棋子即使断网也能行动。\"},\"GENERIC_FIREWALL\":{\"name\":\"终极防火墙\",\"desc\":\"被动：限制最大移动距离为 3 格。免疫远程吃子、强行位移、改变颜色或沉默。国王不可装备。\"},\"GENERIC_INTIMIDATION\":{\"name\":\"威慑\",\"desc\":\"被动：敌方的“兵”无法吃掉该棋子。\"},\"GENERIC_LOGIC_BOMB\":{\"name\":\"逻辑炸弹\",\"desc\":\"被动：被吃掉时清除击杀者增益并使其永久沉默。\"},\"GENERIC_DATA_MINING\":{\"name\":\"数据挖掘\",\"desc\":\"被动：吃掉带有技能的敌方棋子时，额外获得 10 金币。\"},\"GENERIC_RECURSIVE_STRIKE\":{\"name\":\"递归打击\",\"desc\":\"被动：吃掉敌方棋子后，下回合移动范围叠加被击杀者的原始移动逻辑。\"},\"GENERIC_SCRAP_RECYCLE\":{\"name\":\"废料回收\",\"desc\":\"被动：移动不吃子时获得 1 金币（每关上限 10 金币）。\"},\"GENERIC_ABSOLUTE_REQUISITION\":{\"name\":\"绝对征用\",\"desc\":\"主动：消耗10金币，直接摧毁射程内一名“断网”的敌方单位（非王、非后），并回收其价值。\"},\"AURA_REWARD\":{\"name\":\"恩赏光环\",\"desc\":\"吃子时额外获得 5 金币。\"},\"AURA_SUPPRESSED\":{\"name\":\"威压压制\",\"desc\":\"移动范围受限。\"},\"BACKUP_BUFFER_ACTIVE\":{\"name\":\"应急电池激活\",\"desc\":\"临时无视断网\"},\"BISHOP_CONVERSION\":{\"name\":\"洗礼\",\"desc\":\"主动：将一名相邻的敌方兵永久转化为己方，该象随后损毁。\"},\"BISHOP_HOLY_LIGHT\":{\"name\":\"圣光\",\"desc\":\"每回合开始时，象周围 1 格的友军负面状态清除。\"},\"BISHOP_PENETRATION\":{\"name\":\"穿透\",\"desc\":\"滑行时可以穿过敌方的一个子力，但不能穿过友军或吃掉两个子。\"},\"BISHOP_SACRED_ZONE\":{\"name\":\"神圣领域\",\"desc\":\"象所在的斜线上，敌方单位被施加 1 回合的冻结。\"},\"BISHOP_ZEALOT\":{\"name\":\"狂热\",\"desc\":\"如果吃掉了敌方棋子，下回合该象将无视距离（同后滑行）一次。\"},\"BISHOP_SHADOW_SWAP\":{\"name\":\"暗影置换\",\"desc\":\"主动：与视线范围内的一名敌方棋子互换位置，并冻结该敌方 1 回合。\"},\"CHARISMA_BUFF\":{\"name\":\"宽宏增益\",\"desc\":\"获得两格全向滑行移动。\"},\"COMMANDER_AURA\":{\"name\":\"统领光环\",\"desc\":\"落点冻结 1 名距离最近的敌军。\"},\"COMMAND_AURA\":{\"name\":\"统率光环\",\"desc\":\"获得全向 1 格的移动能力。\"},\"GODHOOD_LINK\":{\"name\":\"神权链接\",\"desc\":\"被绝对王权强制连通。\"},\"HOLY_DOMAIN_AURA\":{\"name\":\"圣域光环\",\"desc\":\"免疫一切负面状态。\"},\"INFECTED\":{\"name\":\"感染\",\"desc\":\"每回合蔓延。若宿主处于联网状态，吞噬部分金币。\"},\"IRON_CURTAIN\":{\"name\":\"铁幕\",\"desc\":\"铁幕地块：只有铁幕的所有者可以踏入，敌方棋子无法进入。\"},\"KNIGHT_CHARGE\":{\"name\":\"冲锋\",\"desc\":\"马跳跃吃子时，会对目标周围 1 格的敌方兵造成 1 回合冻结。\"},\"KNIGHT_PHANTOM_STRIKE\":{\"name\":\"幻影突袭\",\"desc\":\"马可以无视阻挡进行“远程吃子”，但吃子后必须回到原位。\"},\"KNIGHT_SABOTAGE\":{\"name\":\"破坏\",\"desc\":\"马跳跃落点相邻 1 格内的敌方陷阱和地块效果被销毁。\"},\"KNIGHT_VALIANT\":{\"name\":\"英勇\",\"desc\":\"马吃子后，若落点周围 1 格没有友军，该马获得一层“护盾”。\"},\"PARASITIZED\":{\"name\":\"被寄生\",\"desc\":\"每回合有 50% 概率断网/冻结。\"},\"PAWN_TRAITOR\":{\"name\":\"背叛者\",\"desc\":\"被吃掉时，有 50% 概率将攻击者（非王）变为你的颜色并施加“被策反”状态 1 回合。\"},\"PAWN_VANGUARD\":{\"name\":\"先锋\",\"desc\":\"该兵只要处于敌方半场，即视为“永远联网”。\"},\"RAILWAY_BUFF\":{\"name\":\"铁轨加速\",\"desc\":\"处于铁轨上的兵移动力 +1。\"},\"REFLECTION_AURA\":{\"name\":\"反射光环\",\"desc\":\"被吃时反伤击杀者。\"},\"SQUARE_BASTION_FIELD\":{\"name\":\"堡垒力场\",\"desc\":\"为地块上的友军提供远程攻击免疫。\"},\"SQUARE_RAILWAY\":{\"name\":\"铁轨（地块状态）\",\"desc\":\"铁轨地块：兵站在该格时可以向正前方直进两格（与铁轨朝向无关）。\"},\"TAXATION_AURA\":{\"name\":\"抚恤光环\",\"desc\":\"被吃掉时提供 15 金币。\"},\"ZEALOT_BUFF\":{\"name\":\"狂热增益\",\"desc\":\"获得滑行移动能力。\"},\"BETRAYED\":{\"name\":\"被策反\",\"desc\":\"暂时被策反。1 回合后回归原始阵营。\"},\"SMOKE\":{\"name\":\"烟雾\",\"desc\":\"提供远程直线攻击免疫。\"},\"SQ_AFTERIMAGE\":{\"name\":\"残影\",\"desc\":\"残影：血裙女王吃掉敌军后在落点留下 3 回合的残影，女王本人可无视距离走回该格。\"},\"FROZEN_TRAP\":{\"name\":\"冻结陷阱\",\"desc\":\"冻结任何进入该格的单位。\"},\"VOID_FISSURE_SQUARE\":{\"name\":\"虚空废墟\",\"desc\":\"空间的结构已被撕裂。此地块永久无法通行。\"},\"SUPPLY_DEPOT_SQUARE\":{\"name\":\"补给地块\",\"desc\":\"补给地块：己方补给车在场时，在此部署返还 5 金币，单局最多返还 30 金币。\"},\"VOID_ANCHOR\":{\"name\":\"虚空锚点\",\"desc\":\"虚空锚点：该格被彻底封锁，任何棋子无法停留，也无法在此部署。\"},\"BARRICADE\":{\"name\":\"简易工事\",\"desc\":\"物理障碍物，阻挡通行。\"},\"JAMMING_TOWER\":{\"name\":\"信号塔\",\"desc\":\"信号塔：站在该格上的棋子被视为网络源，即使在全局干扰下也能提供连通。\"},\"HOLY_LAND\":{\"name\":\"圣域\",\"desc\":\"神圣化的土地，允许无视常规限制在此处直接部署。\"},\"LOUIS_ABSOLUTE_CORONA\":{\"name\":\"绝对日冕\",\"desc\":\"国王自带 5x5 的网络，但其权力过于集中，信号无法通过任何友军进行中继。\"},\"QUEEN_MOVE\":{\"name\":\"王权武力\",\"desc\":\"国王展现出全盛时期的武力，获得等同于“后”的全向滑行能力。\"},\"RICHARD_FORWARD_ONLY\":{\"name\":\"单向远征\",\"desc\":\"信仰绝不回头。国王的网络信号只能向前方（敌方底线）传播。\"},\"BOSS_PERMISSION_DENIED\":{\"name\":\"权限篡改\",\"desc\":\"BOSS每隔3回合随机禁用一种棋子一回合。\"},\"BOSS_PACIFISM\":{\"name\":\"和平协议\",\"desc\":\"前5个回合内，双方都无法进行“吃子”操作。\"},\"INVULNERABLE\":{\"name\":\"无敌\",\"desc\":\"绝对免疫伤害。\"},\"BOSS_ECHO_CHAMBER\":{\"name\":\"信息茧房\",\"desc\":\"隐藏玩家棋子的属性、技能与装备状态。\"},\"BOSS_BOARD_ROTATION\":{\"name\":\"棋盘自转\",\"desc\":\"每隔4回合，全场所有棋子顺时针位移旋转90度。\"},\"BOSS_QUANTUM_MIRAGE\":{\"name\":\"量子分身\",\"desc\":\"受到致命一击时会随机和一个敌方棋子互换替死。\"},\"BOSS_WARP_STORM\":{\"name\":\"传送乱流\",\"desc\":\"每回合随机生成传送门，踩中将被甩飞至任意空位。\"},\"BOSS_MUTINY\":{\"name\":\"倒戈协议\",\"desc\":\"每6回合，随机策反玩家场上的一个非王棋子。\"},\"BOSS_NECROMANCER\":{\"name\":\"死灵复苏\",\"desc\":\"定期随机将一名阵亡的玩家棋子复活为黑方丧尸。\"},\"ZOMBIE_DECAY\":{\"name\":\"丧尸体质\",\"desc\":\"一回合后由于身体腐败自然死亡。\"},\"BOSS_MIRROR_MATCH\":{\"name\":\"克隆工厂\",\"desc\":\"开始时，克隆并生成与玩家一模一样的一套阵容。\"},\"BOSS_HIVE_MOTHER\":{\"name\":\"寄生母巢\",\"desc\":\"定期在场上孵化虫卵，不打破则会孵化为强力怪物。\"},\"EGG_HATCH\":{\"name\":\"虫卵\",\"desc\":\"处于孵化期，倒计时结束将诞生高级棋子。\"},\"BOSS_ENRAGE\":{\"name\":\"狂暴阈值\",\"desc\":\"每 4 回合行动两次。\"},\"BOSS_MASS_ERASURE\":{\"name\":\"轨道轰炸\",\"desc\":\"每隔 5 回合，轰炸棋盘上一个随机的 3x3 区域；开火前两回合目标区会亮起危险警告。\"},\"BOSS_QUANTUM_SWAP\":{\"name\":\"量子纠缠\",\"desc\":\"每过5个回合，随机调换场上两个白色棋子的位置。\"},\"BOSS_SENTINEL\":{\"name\":\"巡逻哨兵\",\"desc\":\"免疫一切攻击，按照顺时针路径移动，撞击到的任何棋子都会被摧毁。\"},\"SQUARE_LASER_GRID\":{\"name\":\"高压电网\",\"desc\":\"高压电网：每奇数回合（轮次开始时）通电，摧毁格上的棋子；王免疫。\"},\"ANTI_PAWN_MINE\":{\"name\":\"反步兵地雷\",\"desc\":\"反步兵地雷：仅“兵”踩中时引爆，摧毁周围 3x3 内的棋子（王免疫）并消耗地雷；其他棋子踩上不受影响。\"},\"TIME_ANOMALY\":{\"name\":\"时间刺客\",\"desc\":\"踩上去的棋子会被放逐出棋盘，3 个回合后才会在原位置重新出现。\"},\"ICE_SLICK\":{\"name\":\"冰面\",\"desc\":\"踩上冰面的棋子无法停留在该格，必须顺着原方向一直滑行。\"},\"WORMHOLE_A\":{\"name\":\"传送阵A\",\"desc\":\"传送阵A：踩上后移动到配对传送阵 B；出口被占据时不传送。\"},\"WORMHOLE_B\":{\"name\":\"传送阵B\",\"desc\":\"传送阵B：踩上后移动到配对传送阵 A；出口被占据时不传送。\"},\"MUD_SWAMP\":{\"name\":\"泥沼\",\"desc\":\"泥沼：直线滑行的棋子（后/车/象）可以踏入，但无法再继续前进；马与兵不受影响。\"},\"CONVEYOR_BELT\":{\"name\":\"传送带\",\"desc\":\"传送带：你方回合开始时，站在上面的棋子沿箭头推移 1 格；推出棋盘边缘即坠落死亡，撞上任何棋子则同归于尽。\"},\"OVERCLOCK_NODE\":{\"name\":\"超频基站\",\"desc\":\"超频基站：回合开始时，清空站在该格棋子身上所有技能冷却。\"},\"DATA_VAULT\":{\"name\":\"数据金库\",\"desc\":\"玩家的棋子停留在该地块时，每回合产生 3 金币。\"},\"SIGNAL_RELAY\":{\"name\":\"信号放大器\",\"desc\":\"只要有玩家棋子站在此处，该棋子自动联网并成为信号源。\"},\"FARADAY_CAGE\":{\"name\":\"法拉第笼\",\"desc\":\"法拉第笼：棋子踏上该格时立刻被冻结 2 回合；每个回合开始仍在此格的棋子会持续被冻结。\"},\"PAWN_UNSTABLE_CORE\":{\"name\":\"不可靠的炸弹兵\",\"desc\":\"死亡必自爆(5x5)；吃子50%概率自爆并引发尸体连锁反应。不论敌我，毁灭一切。\"},\"ROOK_VOID_FISSURE\":{\"name\":\"虚空裂解炮\",\"desc\":\"主动：摧毁直线上首个目标并永久摧毁该空格（一局 3 次，冷却 5 回合）。\"},\"ROOK_EJECTION\":{\"name\":\"弹射\",\"desc\":\"主动：将相邻十字方向的一个友方兵向外弹射到最远端。\"},\"ROOK_SUPPLY_DEPOT\":{\"name\":\"补给站\",\"desc\":\"移动路径变为补给地块（2回合）：友军在此部署返还 5 金币（单局上限 30G）。无法覆盖已有特殊地块。\"},\"QUEEN_CORONATION\":{\"name\":\"皇家授勋\",\"desc\":\"自动：回合开始时，赋予相邻且无技能的友方“兵”一个随机普通技能。\"},\"QUEEN_GRAVITY_WELL\":{\"name\":\"重力场\",\"desc\":\"若相邻敌军不多于2个，这些敌军将被重力锁定，移动范围限制为1格。\"},\"QUEEN_REQUISITION\":{\"name\":\"绝对征用\",\"desc\":\"主动：消耗10金币，直接摧毁射程内一名“断网”的敌方单位（非王、非后），并回收其价值。\"},\"EQ_HOOF_ARMOR\":{\"name\":\"护蹄重甲\",\"desc\":\"跳跃落点如果有敌方兵，直接吃掉且本回合可再次行动。\"}}"),
		battleLogs: {
			LOG_CHECKMATE_PURGED: "将死：系统网络瘫痪！",
			LOG_SWALLOW_GOODBYE: "“再见，燕子。”",
			LOG_DAIZONG_MOVE: "“朕意已决，前移！”",
			LOG_DAIZONG_GUARD: "“速速护驾！”",
			LOG_DAIZONG_CAPTURED: "“陛下北狩了！”",
			LOG_LOUIS_CORONA_DIMMED: "“神权动摇：日冕暗淡！”",
			LOG_QUANTUM_SWAP: "量子互换",
			LOG_PERMISSION_DENIED: "权限篡改: 禁用 {banned}",
			LOG_BOARD_ROTATION: "棋盘自转！",
			LOG_QUANTUM_MIRAGE: "量子分身替死！",
			LOG_TELEPORT: "传送",
			LOG_WARP_STORM: "乱流传送",
			LOG_MUTINY: "倒戈协议",
			LOG_NECRO_REVIVE: "死灵复苏",
			LOG_EGG_HATCHED: "破壳而出",
			LOG_EGG_HATCHING: "孵化中 {count}",
			LOG_ENRAGE_THRESHOLD: "狂暴阈值！连续行动",
			LOG_ENRAGE_DOUBLE: "狂暴：双重行动！",
			LOG_TIME_BANISHED: "时间放逐",
			LOG_TIME_REBIRTH: "归来",
			LOG_MUD_SWAMP: "陷入泥沼",
			LOG_FALL_OFF: "跌落深渊",
			LOG_CRASH: "撞击粉碎",
			LOG_CD_CLEARED: "CD清零",
			LOG_GOLD_MINUS: "-{amount}G",
			LOG_GOLD_PLUS: "+{amount}G",
			LOG_RAILGUN_LOCK_50: "检测到轨道炮锁定，充能率 50%",
			LOG_RAILGUN_LOCK_100: "警告：轨道炮已锁定！充能率 100% 极速撤离！",
			LOG_KING_RANSOM: "“募集巨额赎金：国王归国！”",
			LOG_CRUSADE_REWARD: "圣战 +{amount}",
			LOG_UNYIELDING_RECALL: "不屈：撤回",
			LOG_SWALLOW_RESURRECT: "“铅心碎裂：重塑燕子！”",
			LOG_ARTHUR_SHIELD: "“誓约共鸣：圆桌重盾！”",
			LOG_TROJAN_BREAK: "“木马破裂：特洛伊勇士奇袭！”",
			LOG_TROJAN_WAIT: "木马潜伏中 ({turns}T)",
			LOG_TROJAN_DEPLOY: "“瞒天过海：暗度木马！”",
			LOG_SUPPLY_DEPOT: "+5G 补给",
			LOG_NO_SPACE: "周围没有空间",
			LOG_NO_FUNDS: "金币不足",
			LOG_GUARD_SPAWN: "护卫现身",
			LOG_TAXATION_REWARD: "抚恤金 +15",
			LOG_SWAP: "换位",
			LOG_CASTLING: "王车易位",
			LOG_SOUL_LINK: "灵魂附身，王位更替！",
			LOG_ALREADY_USED: "已使用过",
			LOG_STASIS_LOCK: "时空锁定！",
			LOG_LOGISTICS_REWARD: "统筹 +3",
			LOG_DECOY_TERMINAL: "影终端",
			LOG_MARTYRDOM: "最后的牺牲：涅槃重生！",
			LOG_GRACE: "优雅步法",
			LOG_DECOY_DEATH: "幻影替死",
			LOG_BRIBE_SUCCESS: "策反成功",
			LOG_MIRROR_MULTICAST: "镜像双动",
			LOG_TACTICAL_RECALL: "战术撤退",
			LOG_NO_EMPTY_KING: "王边无空格",
			LOG_TIME_WARP: "时空倒流：+1悔棋",
			LOG_ROOK_LINK: "神权链接: 车",
			LOG_BISHOP_LINK: "神权链接: 象",
			LOG_GRAVITY_WELL: "重力场激活",
			LOG_CORONATION: "授勋: {skill}",
			LOG_REQUISITION_SUCCESS: "征用成功",
			LOG_ENTER_BASTION: "进入堡垒",
			LOG_EXIT_BASTION: "解除堡垒",
			LOG_MAGNET: "磁吸",
			LOG_EJECTION: "弹射！",
			LOG_CATAPULT: "抛射！",
			LOG_ION_CANNON: "轨道炮",
			LOG_IRON_CURTAIN: "铁幕",
			LOG_VOID_FISSURE_REMAINING: "虚空裂解！剩余 {remaining} 次",
			LOG_VOID_FISSURE_EMPTY: "虚空裂解！弹药耗尽",
			LOG_TOW_HOOK_DRAG: "拖拽命中！",
			LOG_TOW_HOOK_KILL: "牵引击杀",
			LOG_TRACTOR_PULL: "牵引拉近",
			LOG_SHOCKWAVE_PUSH: "推开",
			LOG_SHOCKWAVE_COLLIDE: "剧烈碰撞！",
			LOG_RECALLED: "已回存",
			LOG_ZEALOT: "狂热！",
			LOG_RESURRECT: "复活: {type}",
			LOG_AURORA: "极光狙击",
			LOG_CROSS_JUMP: "十字二段动",
			LOG_PHANTOM_RETURN: "幻影回旋",
			LOG_TACTICAL_SWAP: "战术换位！",
			LOG_FULL_DUPLEX: "即插即用生效!",
			LOG_FULL_DUPLEX_AI: "AI 即插即用!",
			LOG_CHAIN_JUMP: "连跳!",
			LOG_CHAIN_JUMP_AI: "AI 连跳!",
			LOG_MIRAGE_DEATH: "幻影替死",
			LOG_RIFT_TELEPORT: "裂隙传送",
			LOG_VENGEANCE_STRIKE: "牺牲闪击",
			LOG_ASSASSIN_EVOLVE: "刺杀进化!",
			LOG_PAWN_EVOLVE: "破茧进化!",
			LOG_CORE_OVERLOAD: "核心过载!",
			LOG_UNDOS_PLUS: "+{amount} 悔棋",
			LOG_SAVES_PLUS: "+{amount} 存档",
			LOG_ALGORITHM_SWAP: "算法互换",
			LOG_BACKUP_BUFFER: "应急电池",
			LOG_RAPID_DEPLOY: "轻装上阵: 连动!",
			LOG_CHAFF_EVADE: "闪避!",
			LOG_RECALL_SUCCESS: "撤回成功",
			LOG_PARASITE_INTERFERENCE: "寄生干扰",
			LOG_LOGIC_BOMB: "逻辑炸弹：封印！",
			LOG_DATA_MINING: "数据挖掘 +{amount}",
			LOG_TOWER_BUILT: "信号塔已建成",
			LOG_SPYWARE: "窃取数据 +5",
			LOG_TERMINAL_OFFLINE: "TERMINAL OFFLINE",
			LOG_CONVERSION: "洗礼",
			LOG_CLONE_FACTORY: "克隆工厂",
			LOG_HATCH_EGG: "孵化",
			LOG_OVERLOAD: "能量过载",
			LOG_DRAFT_ORDER: "强行征召",
			LOG_MIDAS: "点金石 +30",
			LOG_SACRIFICE_SUCCESS: "献祭成功",
			LOG_ANTENNA_ACTIVE: "财富天线激活！",
			LOG_PRISM_REFLECT: "棱镜反射！",
			LOG_PHOENIX_REBIRTH: "凤凰涅槃",
			LOG_ROYAL_GUARD: "护卫牺牲",
			LOG_ALLOY_BROKEN: "合金损毁",
			LOG_TACTICAL_OPS: "战术调度：额外行动",
			LOG_DIPLOMATIC_INTERCEPT: "外交豁免拦截",
			LOG_WHEEL_TRIGGER: "命运轮盘：{item}",
			LOG_THRONE_REWARD: "王座收益 +{amount}",
			LOG_HACKER_TERMINAL: "远程黑入",
			LOG_TRAMPLE: "践踏",
			LOG_GHOST_RIDE: "幽灵传送",
			LOG_LEVEL_UP: "升级！",
			LOG_SIREN_CRASH: "海妖之歌：撞击！",
			LOG_SIREN_DRIFT: "海妖之歌：漂移",
			LOG_ENERGY_DEPLETED: "能量耗尽",
			LOG_IMMUNE: "免疫",
			LOG_BLOCKED: "退路被阻挡",
			LOG_INVALID_TARGET: "无效目标",
			LOG_GOLD_FOIL_CONVERT: "金箔剥离",
			LOG_MIDAS_LOOT: "黄金铁蹄战利品：获得 {name}",
			LOG_MIDAS_BAG_FULL: "装备栏已满，战利品未能保存",
			LOG_ASSIMILATED: "数据同化",
			LOG_EMPTY_REQUIRED: "必须是空地",
			LOG_GRAVITY_LOCKED: "重力束缚",
			LOG_SINGULARITY_COLLISION: "奇点碰撞！",
			LOG_FAITH_SIPHON: "信仰汲取 +2G",
			LOG_SPATIAL_SCRAMBLE: "空间乱序",
			LOG_BETRAYED: "背叛！",
			LOG_BOOMERANG: "回旋镖！",
			LOG_CHARMED: "被魅惑！",
			LOG_COATING_PROTECT: "涂层保护",
			LOG_DARK_BARGAIN_CURSED: "黑暗交易：检测到诅咒信号",
			LOG_DEPLOY_FAILED: "信号丢失：部署被阻断",
			LOG_HOLY_BLESSING: "神圣祝福！",
			LOG_IMMUNE_BLOCKED: "免疫阻挡",
			LOG_LOOT_BOX_OPEN: "战利品：{item}",
			LOG_NO_ADJACENT_ALLY: "没有相邻友军",
			LOG_RICOCHET: "弹射！",
			LOG_SATELLITE_ASCENSION: "卫星唤醒：新皇登基！",
			LOG_SHADOW_SWAP: "暗影置换！",
			LOG_SKILL_SILENCED: "技能被沉默",
			LOG_SQUARE_OCCUPIED: "格子被占据",
			LOG_STOLEN: "被偷了！",
			LOG_SUPLEX: "战术投掷！",
			LOG_SUPLEX_COLLISION: "过肩摔同归于尽！",
			LOG_SUPLEX_WALL: "撞墙！",
			LOG_VENTURE_CAPITAL: "风险投资 +10"
		},
		unlockRequirements: {
			HAPPY_PRINCE: "[大富翁]：单局金币持有量曾达到 1000。",
			ARTHUR: "[骑士誓言]：累计从库存部署 50 个“马”。",
			ODYSSEUS: "[时空穿梭]：累计使用传送或位置交换 30 次。",
			LOUIS_XIV: "[太阳王]：单回合连通 10 个以上单位。",
			RICHARD: "[御驾亲征]：国王亲自击杀敌方国王。",
			PAWN_UNSTABLE_CORE: "[过载核心]：使用“兵”累计击杀 30 名敌军。",
			PAWN_RELAY: "[急行军]：累计移动“兵” 100 次。",
			PAWN_SACRIFICE: "[消耗品]：累计阵亡 20 名“兵”。",
			PAWN_INTERLOCK: "[兵团]：累计从库存部署 30 个“兵”。",
			PAWN_PARASITE: "[绝对零度]：累计冻结敌方单位 50 次。",
			PAWN_TRAITOR: "[反向渗透]：累计策反 10 名敌军。",
			PAWN_SWARM: "[蜂群神话]：场上同时存在 6 个存活的己方“兵”。",
			PAWN_OMEGA_MIRROR: "[进化终点]：将“兵”升至 5 级（MAX）。",
			PAWN_SATELLITE: "[孤岛生存]：在国王断网的情况下获得胜利。",
			KNIGHT_GRAVITY_WELL: "[骑兵连]：累计移动“马” 50 次。",
			KNIGHT_TROJAN: "[残落骑士]：累计阵亡 10 名“马”。",
			KNIGHT_FULL_DUPLEX: "[迅捷反应]：前 3 回合内击杀敌方高级单位。",
			KNIGHT_CHAIN: "[闪电战]：在 5 回合内清空关卡敌军。",
			KNIGHT_RIFT: "[时空穿越]：累计使用传送或位置交换 50 次。",
			KNIGHT_MIDAS_TOUCH: "[点石成金]：累计通过变现等机制获得 500 金币。",
			KNIGHT_TROJAN_KERNEL: "[巨人杀手]：使用“马”累计击杀 10 个后或车。",
			BISHOP_CONDUIT: "[主教巡游]：累计移动“象” 50 次。",
			BISHOP_SILENCE: "[封印者]：累计沉默敌方单位 30 次。",
			BISHOP_OPTICAL_BLIND_ZONE: "[神盾]：累计使用护盾抵消 5 次伤害。",
			BISHOP_ZEALOT: "[狂热者]：使用“象”累计击杀 20 名敌军。",
			BISHOP_SACRED_ZONE: "[神圣静滞]：累计冻结敌方单位 20 次。",
			BISHOP_CONVERSION: "[信仰之跃]：累积使用“象”移动超过 30 格。",
			BISHOP_RESURRECTION: "[死灵法师]：累计触发复活/替死机制 10 次。",
			BISHOP_AURORA: "[高维视角]：使用“象”跨越 6 格以上击杀敌方。",
			BISHOP_ABSOLUTE_BARRIER: "[叹息之墙]：累计化解对国王的“将军”威胁 20 次。",
			ROOK_MAGNET: "[万有引力]：累计强制位移棋子 10 次。",
			ROOK_CARRIER: "[重型运输]：累计移动“车” 50 次。",
			ROOK_EJECTION: "[重装空投]：累计部署 10 个“车”。",
			ROOK_CATAPULT: "[投石机]：累计强制位移棋子 30 次。",
			ROOK_TRACTOR_BEAM: "[牵引光束]：累计强制位移棋子 15 次。",
			ROOK_SHOCKWAVE: "[冲击波]：累计强制位移棋子 20 次。",
			ROOK_FORBIDDEN_ZONE: "[完美堡垒]：在不损失任何“车”的情况下获胜 5 次。",
			ROOK_ION_CANNON: "[轨道火力]：单次移动“车”达到 7 格。",
			ROOK_IRON_CURTAIN: "[永恒意志]：累计使用护盾抵消 15 次伤害。",
			ROOK_VOID_FISSURE: "[虚空领主]：在 BOSS 关卡中生存超过 20 回合。",
			QUEEN_MULTICAST: "[镜像练习]：累计触发 10 次额外行动(Extra Move)。",
			QUEEN_INSIGHT: "[全视之眼]：累计识破 10 个隐身敌军。",
			QUEEN_RECALL: "[女王出征]：累计移动“后” 30 次。",
			QUEEN_REQUISITION: "[资源掠夺]：单场战斗中累积获得 50 金币。",
			QUEEN_TIME_WARP: "[时间领主]：累计使用“悔棋” 100 次。",
			QUEEN_NEMESIS: "[复仇时刻]：使用\"后\"累计击杀 50 名敌军。",
			QUEEN_GRAVITY_WELL: "[重力大师]：累计压制/锁定敌军 30 次。",
			KING_DECOY_DOUBLE: "[影子戏法]：国王累计移动 50 次。",
			QUEEN_ROOK_AUTHORITY: "[三位一体]：场上同时存在我方后、车、象、马。",
			QUEEN_BISHOP_AUTHORITY: "[王室征召]：累计部署 5 个“后”。",
			KING_SWAP: "[战术换位]：累计交换或传送 20 次。",
			KING_REFLECTION: "[武神王]：国王亲自击杀 5 名敌军。",
			KING_COMMANDER: "[躁动不安]：累计移动国王 30 次。",
			KING_GRAND_CASTLE: "[常胜将军]：累计赢得 10 场战斗。",
			KING_SOUL_LINK: "[意志不灭]：单局国王移动超过 15 次。",
			KING_HOLY_DOMAIN: "[净化者]：累计为友军清除 20 次负面状态。",
			KING_STASIS: "[绝对静止]：单回合内，场上 50% 单位处于瘫痪/冻结。",
			KING_MARTYRDOM: "[绝境反击]：仅剩白王且库存为空的情况下获胜。",
			GENERIC_RAPID_DEPLOY: "[全面动员]：累计部署 50 个单位。",
			GENERIC_LOGIC_LOCK: "[黑客入侵]：累计沉默敌方 20 次。",
			GENERIC_MIRRORING: "[极限超频]：累计触发 20 次额外行动。",
			GENERIC_PARASITE: "[系统崩溃]：敌方由于全员断网/冻结无法行动。",
			GENERIC_RECURSIVE_STRIKE: "[连击大师]：单场达成 5 连击 (Combo x5)。",
			GENERIC_HIVE_KERNEL: "[蜂群思维]：单回合连通 10 个以上单位。",
			GENERIC_FIREWALL: "[最后防线]：累计通关第 3 章。",
			EQ_SHOCK_STIRRUPS: "[震荡波]：累计冻结 10 名敌军。",
			EQ_BASE_STATION: "[广播基站]：单回合连通 8 个以上单位。",
			EQ_REACTIVE_ARMOR: "[铁壁]：累计使用护盾抵消 5 次伤害。",
			EQ_BLOOD_DRESS: "[杀戮旋律]：单场达成 3 连击 (Combo x3)。",
			EQ_BOUNTY_MODULE: "[赏金猎人]：累计获得 200 金币。",
			EQ_RESCUE_BEACON: "[幸存者]：累计触发免死/复活机制 5 次。",
			EQ_FULL_BAND_SCANNER: "[全频反制]：累积破坏 10 个敌方陷阱地块。",
			EQ_BLACK_MARKET_LEDGER: "[黑市契约]：在金币为 0 的情况下获取装备。",
			EQ_TOW_HOOK: "[钩爪]：累计强制位移棋子 10 次。",
			EQ_ROYAL_SALUTE: "[兵卒杀手]：累计击杀 50 个敌方兵。",
			SIGNAL_TOWER_DEFENSE: "[基建狂魔]：累计使用“信号塔”或部署“信号塔兵” 5 次。",
			EQ_HACKER_TERMINAL: "[逻辑劫持]：累计冻结敌方“后”或“车” 5 次。",
			EQ_GHOST_RIDE: "[恶作剧]：累计使用传送/互换 20 次。",
			EQ_HIVE_CORE: "[小型蜂群]：场上同时存活 4 个兵。",
			EQ_TELESCOPIC_LEGS: "[长腿骑士]：累计移动“马” 20 次。",
			EQ_PHOENIX_FEATHER: "[涅槃]：累计触发免死/复活机制 10 次。",
			EQ_SCEPTER_OF_CHARM: "[蛊惑者]：累计策反 10 名敌军。",
			EQ_ROYAL_GUARD: "[忠诚护卫]：累计触发护驾效果 5 次。",
			EQ_TACTICAL_OPS: "[精锐部队]：全场不部署任何库存棋子获胜。",
			EQ_DIPLOMATIC_IMMUNITY: "[孤狼]：仅剩国王一人获胜。",
			EQ_RELIC_OF_KINGS: "[王权遗物]：仅剩国王一人获胜。",
			EQ_VENTURE_CAPITAL: "[资本家]：单局金币达到 500。",
			EQ_SWARM_INTELLIGENCE: "[虫群]：场上同时存活 8 个兵。",
			EQ_ARROGANT_CREED: "[傲慢代价]：国王无网络坚持 5 个回合。",
			EQ_QUEEN_ROOK_LINK: "[后车连携]：单局内同时部署过后和车。",
			EQ_QUEEN_BISHOP_LINK: "[后象连携]：单局内同时部署过后和象。",
			EQ_GOLDEN_THRONE: "[黄金时代]：单局金币达到 1000。",
			EQ_DEFLATION: "[通缩奇蹟]：重刷新 3 次不买东西。",
			OVERCLOCK: "[嗑药狂人]：累计使用 10 个消耗品。",
			PARDON: "[常胜将军]：累计赢得 5 场战斗。",
			ILLEGAL_SLOT: "[改装狂人]：将棋子升至 3 级。",
			BLACK_ORDER: "[走私贩]：在黑市累计变现 10 个道具。",
			DRAFT_ORDER: "[购物狂]：累计重刷新商店 10 次。",
			DOOM_BROADCAST: "[网络主宰]：达成敌方全部断网。",
			ROYAL_SACRIFICE: "[优胜劣汰]：累计手动献祭/出售 5 名友军。",
			REAPER_EXE: "[收割时刻]：前 10 回合内击杀 8 名敌军。",
			WHEEL_OF_FATE: "[混沌法则]：累计触发 30 次概率事件。",
			MEDUSA: "[石化凝视]：累计冻结 100 名敌军。",
			SINGULARITY_GRENADE: "[重力大师]：累计造成 25 次强制位移。",
			SPATIAL_SCRAMBLER: "[混沌理论]：累计触发 50 次概率事件。",
			KNIGHT_SUPLEX: "[格斗家]：马累计击杀 40 名敌军。",
			BISHOP_SHADOW_SWAP: "[虚空行者]：累计传送或位置交换 40 次。"
		},
		player: "我方",
		enemy: "敌方",
		recycleTrade: "整顿 / 交易",
		confirmEndTurnTitle: "结束回合确认",
		confirmEndTurnMessage: "您确定要结束本回合吗？",
		confirmPurchaseTitle: "确认购买",
		confirmPurchaseMessage: "您确定要购买 {item} 吗？",
		connectionLineIdleLabel: "待机连接降频",
		genericEquipment: "通用装备",
		use: "使用",
		useItem: "使用道具",
		visualQualityLabel: "画面与渲染",
		networkActive: "联网",
		networkOffline: "离线",
		statusLabel: "网络状态",
		additionalEffects: "附加效果",
		permanent: "永久"
	},
	tw: ot,
	ja: st,
	de: at
}, lt = /iPhone|iPad|iPod|Android/i, dt = () => "undefined" != typeof navigator && lt.test(navigator.userAgent), Et = () => "undefined" != typeof window && ("__TAURI_INTERNALS__" in window || "__TAURI__" in window), ut = () => dt() && Et(), mt = () => Et() && !dt();
function _t(e, t, n, i) {
	if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
	if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
	return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e);
}
function At(e, t, n, i, a) {
	if ("m" === i) throw new TypeError("Private method is not writable");
	if ("a" === i && !a) throw new TypeError("Private accessor was defined without a setter");
	if ("function" == typeof t ? e !== t || !a : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
	return "a" === i ? a.call(e, n) : a ? a.value = n : t.set(e, n), n;
}
var St;
const gt = "__TAURI_TO_IPC_KEY__";
function Lt(e, t = !1) {
	return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function Nt(e, t = {}, n) {
	return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
var ft, yt = class {
	get rid() {
		return _t(this, St, "f");
	}
	constructor(e) {
		St.set(this, void 0), At(this, St, e, "f");
	}
	async close() {
		return Nt("plugin:resources|close", { rid: this.rid });
	}
	async [(St = /* @__PURE__ */ new WeakMap(), Symbol.asyncDispose)]() {
		await this.close();
	}
};
async function Gt(e, t) {
	window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(e, t), await Nt("plugin:event|unlisten", {
		event: e,
		eventId: t
	});
}
async function Ct(e, t, n) {
	var i;
	return Nt("plugin:event|listen", {
		event: e,
		target: "string" == typeof (null == n ? void 0 : n.target) ? {
			kind: "AnyLabel",
			label: n.target
		} : null !== (i = null == n ? void 0 : n.target) && void 0 !== i ? i : { kind: "Any" },
		handler: Lt(t)
	}).then((t) => async () => Gt(e, t));
}
async function Pt(e, t, n) {
	return Ct(e, (n) => {
		Gt(e, n.id), t(n);
	}, n);
}
async function Dt(e, t) {
	await Nt("plugin:event|emit", {
		event: e,
		payload: t
	});
}
async function bt(e, t, n) {
	await Nt("plugin:event|emit_to", {
		target: "string" == typeof e ? {
			kind: "AnyLabel",
			label: e
		} : e,
		event: t,
		payload: n
	});
}
(function(e) {
	e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WINDOW_SUSPENDED = "tauri://suspended", e.WINDOW_RESUMED = "tauri://resumed", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(ft || (ft = {}));
var Mt = class e extends yt {
	constructor(e) {
		super(e);
	}
	static async load(t, n) {
		return new e(await Nt("plugin:store|load", {
			path: t,
			options: n
		}));
	}
	static async get(t) {
		return await Nt("plugin:store|get_store", { path: t }).then((t) => t ? new e(t) : null);
	}
	async set(e, t) {
		await Nt("plugin:store|set", {
			rid: this.rid,
			key: e,
			value: t
		});
	}
	async get(e) {
		const [t, n] = await Nt("plugin:store|get", {
			rid: this.rid,
			key: e
		});
		return n ? t : void 0;
	}
	async has(e) {
		return await Nt("plugin:store|has", {
			rid: this.rid,
			key: e
		});
	}
	async delete(e) {
		return await Nt("plugin:store|delete", {
			rid: this.rid,
			key: e
		});
	}
	async clear() {
		await Nt("plugin:store|clear", { rid: this.rid });
	}
	async reset() {
		await Nt("plugin:store|reset", { rid: this.rid });
	}
	async keys() {
		return await Nt("plugin:store|keys", { rid: this.rid });
	}
	async values() {
		return await Nt("plugin:store|values", { rid: this.rid });
	}
	async entries() {
		return await Nt("plugin:store|entries", { rid: this.rid });
	}
	async length() {
		return await Nt("plugin:store|length", { rid: this.rid });
	}
	async reload(e) {
		await Nt("plugin:store|reload", {
			rid: this.rid,
			...e
		});
	}
	async save() {
		await Nt("plugin:store|save", { rid: this.rid });
	}
	async onKeyChange(e, t) {
		return await Ct("store://change", (n) => {
			n.payload.resourceId === this.rid && n.payload.key === e && t(n.payload.exists ? n.payload.value : void 0);
		});
	}
	async onChange(e) {
		return await Ct("store://change", (t) => {
			t.payload.resourceId === this.rid && e(t.payload.key, t.payload.exists ? t.payload.value : void 0);
		});
	}
};
let Ut = null, Kt = !1;
const vt = async () => {
	if (Kt) return null;
	if (!Ut) try {
		Ut = await async function(e, t) {
			return await Mt.load(e, t);
		}("save_data.json", {
			autoSave: !1,
			defaults: {}
		});
	} catch (e) {
		return Kt = !0, null;
	}
	return Ut;
}, kt = {
	getItem: async (e) => {
		try {
			const t = await vt();
			if (t) {
				const n = await t.get(e);
				return n ? String(n) : null;
			}
		} catch (t) {}
		return window.localStorage.getItem(e);
	},
	setItem: async (e, t) => {
		try {
			const n = await vt();
			if (n) return await n.set(e, t), void await n.save();
		} catch (n) {}
		window.localStorage.setItem(e, t);
	},
	removeItem: async (e) => {
		try {
			const t = await vt();
			if (t) return await t.delete(e), void await t.save();
		} catch (t) {}
		window.localStorage.removeItem(e);
	}
}, Bt = "undefined" != typeof window && ("__TAURI_INTERNALS__" in window || new URLSearchParams(window.location.search).has("tauri_mock"));
var Ht = class {
	evaluate(e, t) {
		const n = e.board || [], i = n.flat().filter(Boolean).length || 32;
		let a = 0;
		n.forEach((e) => e.forEach((e) => {
			e && (a += ("W" === e.color ? 1 : -1) * (e.level || 1));
		}));
		const r = "number" == typeof e.playerAdvantage && Number.isFinite(e.playerAdvantage) ? Math.max(-1, Math.min(1, e.playerAdvantage)) : void 0;
		return {
			tension: e.isCheck ? .95 : Math.min(1, .15 * (e.comboCount || 0) + 16 / Math.max(i, 1) * .3),
			dominance: r ?? Math.tanh(a / 10),
			uncertainty: Math.min(t / 45, 1),
			exhaustion: Math.max(0, 1 - i / 20),
			momentum: Math.min(.2 * (e.comboCount || 0), 1)
		};
	}
}, Ft = class {
	mapIntent(e, t) {
		const n = {
			filterFreq: 2e4,
			reverbWet: .15,
			noteDensity: .5,
			rhythmicHumanization: .01,
			octaveOffset: 0
		};
		let i = n;
		switch (e) {
			case "SUSPENSE":
				i = {
					...n,
					filterFreq: Math.max(4e3, 5e3 - 400 * t.uncertainty),
					reverbWet: .16,
					noteDensity: .3
				};
				break;
			case "STRUGGLE":
				i = {
					...n,
					filterFreq: 1500,
					reverbWet: .2,
					rhythmicHumanization: .15,
					noteDensity: .9
				};
				break;
			case "BLOOM":
				i = {
					...n,
					filterFreq: 15e3,
					reverbWet: .2,
					octaveOffset: 1,
					noteDensity: .6
				};
				break;
			case "VOID":
				i = {
					...n,
					filterFreq: 1800,
					reverbWet: .2,
					noteDensity: .35
				};
				break;
			default: i = n;
		}
		return i;
	}
};
const wt = {
	C1: 32.7,
	Db1: 34.65,
	D1: 36.71,
	Eb1: 38.89,
	E1: 41.2,
	F1: 43.65,
	Gb1: 46.25,
	G1: 49,
	Ab1: 51.91,
	A1: 55,
	Bb1: 58.27,
	B1: 61.74,
	C2: 65.41,
	Db2: 69.3,
	D2: 73.42,
	Eb2: 77.78,
	E2: 82.41,
	F2: 87.31,
	Gb2: 92.5,
	G2: 98,
	Ab2: 103.83,
	A2: 110,
	Bb2: 116.54,
	B2: 123.47,
	C3: 130.81,
	Db3: 138.59,
	D3: 146.83,
	Eb3: 155.56,
	E3: 164.81,
	F3: 174.61,
	Gb3: 185,
	G3: 196,
	Ab3: 207.65,
	A3: 220,
	Bb3: 233.08,
	B3: 246.94,
	C4: 261.63,
	Db4: 277.18,
	D4: 293.66,
	Eb4: 311.13,
	E4: 329.63,
	F4: 349.23,
	Gb4: 369.99,
	G4: 392,
	Ab4: 415.3,
	A4: 440,
	Bb4: 466.16,
	B4: 493.88,
	C5: 523.25,
	Db5: 554.37,
	D5: 587.33,
	Eb5: 622.25,
	E5: 659.25,
	F5: 698.46,
	Gb5: 739.99,
	G5: 783.99,
	Ab5: 830.61,
	A5: 880,
	Bb5: 932.33,
	B5: 987.77
};
var xt = {
	name: "Minimal Narrative",
	steps: 64,
	notes: {
		16: "C4",
		20: "D4",
		32: "G3",
		48: "Eb4",
		52: "D4",
		60: "Bb3"
	}
};
var Wt = {
	name: "Data Stream",
	steps: 64,
	notes: {
		0: "G3",
		2: "C4",
		4: "Eb4",
		6: "G4",
		8: "G4",
		10: "Eb4",
		12: "C4",
		14: "G3",
		16: "C3",
		18: "Eb3",
		20: "Ab3",
		22: "C4",
		24: "Eb4",
		26: "C4",
		28: "Ab3",
		30: "Eb3",
		32: "C3",
		34: "F3",
		36: "Ab3",
		38: "C4",
		40: "D4",
		42: "Eb4",
		44: "F4",
		46: "G4",
		48: "B2",
		50: "D3",
		52: "G3",
		54: "B3",
		56: "D4",
		58: "C5",
		60: "G4",
		62: "G4"
	}
}, Vt = class {
	constructor() {
		this.tensionDebt = 0;
	}
	determineIntent(e) {
		const { phase: t, emotion: n } = e;
		return this.tensionDebt = Math.min(2, this.tensionDebt + .02 + .06 * n.tension), n.tension > .85 ? "STRUGGLE" : "release" === t ? "VOID" : (n.momentum ?? 0) > .6 ? "MOMENTUM" : this.tensionDebt > .6 && "focused" === t ? "BLOOM" : "focused" === t ? "SUSPENSE" : "MOMENTUM";
	}
	peekDebt() {
		return Math.min(this.tensionDebt, 2);
	}
	dischargeDebt() {
		const e = Math.min(this.tensionDebt, 2);
		return this.tensionDebt = 0, e;
	}
	getTensionDebt() {
		return this.tensionDebt;
	}
}, Qt = class {
	constructor(e, t = 30) {
		this.ctx = e, this.size = t, this.gainPool = [], this.filterPool = [], this.pannerPool = [];
		for (let n = 0; n < t; n++) this.gainPool.push(e.createGain()), this.filterPool.push(e.createBiquadFilter()), this.pannerPool.push(e.createStereoPanner());
	}
	getGainNode() {
		return this.gainPool.pop() || this.ctx.createGain();
	}
	releaseGainNode(e, t = .02) {
		const n = this.ctx.currentTime;
		try {
			const t = e.gain.value;
			e.gain.cancelScheduledValues(n), e.gain.setValueAtTime(t, n), e.gain.linearRampToValueAtTime(0, n + .02);
		} catch (i) {}
		setTimeout(() => {
			try {
				e.disconnect(), e.gain.cancelScheduledValues(0), e.gain.value = 0;
			} catch (i) {}
			this.gainPool.length < 2 * this.size && this.gainPool.push(e);
		}, 1e3 * (t + .03));
	}
	getFilterNode() {
		return this.filterPool.pop() || this.ctx.createBiquadFilter();
	}
	releaseFilterNode(e, t = 0) {
		try {
			e.disconnect(), e.frequency.cancelScheduledValues(this.ctx.currentTime + t), e.Q.cancelScheduledValues(this.ctx.currentTime + t);
		} catch (n) {}
		this.filterPool.length < 2 * this.size && this.filterPool.push(e);
	}
	getPannerNode() {
		return this.pannerPool.pop() || this.ctx.createStereoPanner();
	}
	releasePannerNode(e, t = 0) {
		try {
			e.disconnect(), e.pan.cancelScheduledValues(this.ctx.currentTime + t);
		} catch (n) {}
		this.pannerPool.length < 2 * this.size && this.pannerPool.push(e);
	}
};
let Yt = null;
function qt(e, t, n, i, a, r, s, o) {
	const c = e.createOscillator(), l = e.createOscillator(), d = o ? o.getGainNode() : e.createGain(), E = o ? o.getGainNode() : e.createGain();
	c.type = "sine", l.type = "sine", c.frequency.setValueAtTime(t, a), l.frequency.setValueAtTime(n, a), d.gain.setValueAtTime(n * i, a), d.gain.exponentialRampToValueAtTime(.01, a + .8 * r), E.gain.setValueAtTime(0, a), E.gain.linearRampToValueAtTime(.3, a + .1 * r), E.gain.exponentialRampToValueAtTime(.001, a + r), l.connect(d).connect(c.frequency), c.connect(E).connect(s), l.start(a), l.stop(a + r), c.start(a), c.stop(a + r), c.onended = () => {
		o ? (o.releaseGainNode(E, 0), o.releaseGainNode(d, 0)) : (l.disconnect(), d.disconnect(), c.disconnect(), E.disconnect());
	};
}
function zt(e, t, n, i = "heavy", a) {
	const r = "massive" === i ? 1.5 : "heavy" === i ? .8 : .3;
	if ("light" !== i) {
		const s = e.createOscillator(), o = a ? a.getGainNode() : e.createGain();
		s.type = "sine", s.frequency.setValueAtTime(150, t), s.frequency.exponentialRampToValueAtTime(20, t + r), o.gain.setValueAtTime(0, t), o.gain.linearRampToValueAtTime("massive" === i ? .8 : .5, t + .02), o.gain.exponentialRampToValueAtTime(.01, t + r), s.connect(o).connect(n), s.start(t), s.stop(t + r), s.onended = () => {
			a ? a.releaseGainNode(o, 0) : (s.disconnect(), o.disconnect());
		};
	}
	if (!Yt) {
		const t = 2 * e.sampleRate;
		Yt = e.createBuffer(1, t, e.sampleRate);
		const n = Yt.getChannelData(0);
		for (let e = 0; e < t; e++) n[e] = 2 * Math.random() - 1;
	}
	const s = e.createBufferSource();
	s.buffer = Yt;
	const o = a ? a.getFilterNode() : e.createBiquadFilter();
	o.type = "light" === i ? "highpass" : "bandpass", o.frequency.setValueAtTime("light" === i ? 2e3 : 800, t), "massive" === i && o.frequency.exponentialRampToValueAtTime(100, t + r);
	const c = a ? a.getGainNode() : e.createGain();
	c.gain.setValueAtTime(0, t), c.gain.linearRampToValueAtTime("massive" === i ? .6 : "heavy" === i ? .4 : .2, t + .01), c.gain.exponentialRampToValueAtTime(.01, t + .5 * r), s.connect(o).connect(c).connect(n), s.start(t), s.onended = () => {
		a ? (a.releaseFilterNode(o, 0), a.releaseGainNode(c, 0)) : (s.disconnect(), o.disconnect(), c.disconnect());
	};
}
function Zt(e, t, n, i, a, r, s) {
	if (!Yt) {
		const t = 2 * e.sampleRate;
		Yt = e.createBuffer(1, t, e.sampleRate);
		const n = Yt.getChannelData(0);
		for (let e = 0; e < t; e++) n[e] = 2 * Math.random() - 1;
	}
	const o = e.createBufferSource();
	o.buffer = Yt;
	const c = s ? s.getFilterNode() : e.createBiquadFilter();
	c.type = "bandpass", c.Q.value = 15, c.frequency.setValueAtTime(i, t), c.frequency.exponentialRampToValueAtTime(a, t + n);
	const l = s ? s.getGainNode() : e.createGain();
	l.gain.setValueAtTime(0, t), l.gain.linearRampToValueAtTime(.3, t + .1 * n), l.gain.exponentialRampToValueAtTime(.01, t + n), o.connect(c).connect(l).connect(r), o.start(t), o.onended = () => {
		s ? (s.releaseFilterNode(c, 0), s.releaseGainNode(l, 0)) : (o.disconnect(), c.disconnect(), l.disconnect());
	};
}
function Xt(e, t, n, i, a, r) {
	const s = r ? r.getGainNode() : e.createGain();
	s.gain.setValueAtTime(0, n), s.gain.linearRampToValueAtTime(.15, n + .2 * i), s.gain.exponentialRampToValueAtTime(.001, n + i);
	const o = [
		-15,
		-6,
		0,
		7,
		14
	], c = [], l = [];
	for (let d = 0; d < 5; d++) {
		const a = e.createOscillator();
		a.type = "triangle", a.frequency.value = t, a.detune.value = o[d];
		const E = r ? r.getPannerNode() : e.createStereoPanner();
		r && l.push(E), E.pan.value = d / 4 * 1.6 - .8, a.connect(E).connect(s), a.start(n), a.stop(n + i), c.push(a);
	}
	s.connect(a), c.length > 0 && (c[c.length - 1].onended = () => {
		r ? (r.releaseGainNode(s, 0), l.forEach((e) => r.releasePannerNode(e, 0))) : (s.disconnect(), l.forEach((e) => e.disconnect())), c.forEach((e) => e.disconnect());
	});
}
let jt = null, Jt = 0;
function $t(e) {
	if (!jt || Jt !== e.sampleRate) {
		const t = Math.max(1, Math.ceil(.25 * e.sampleRate));
		jt = e.createBuffer(1, t, e.sampleRate);
		const n = jt.getChannelData(0);
		for (let e = 0; e < t; e++) n[e] = 2 * Math.random() - 1;
		Jt = e.sampleRate;
	}
	return jt;
}
function en(e, t, n, i, a, r = 1) {
	const s = e.createOscillator(), o = a ? a.getGainNode() : e.createGain(), c = a ? a.getFilterNode() : e.createBiquadFilter(), l = a ? a.getPannerNode() : e.createStereoPanner();
	s.type = "sawtooth", c.type = "lowpass", c.Q.value = 4, c.frequency.setValueAtTime(Math.min(.5 * t, 2e4), n), c.frequency.exponentialRampToValueAtTime(Math.min(8 * t, 2e4), n + .015), c.frequency.exponentialRampToValueAtTime(Math.min(1.5 * t, 2e4), n + .3), s.frequency.setValueAtTime(t, n), s.detune.value = 8 * (Math.random() - .5), o.gain.setValueAtTime(0, n), o.gain.linearRampToValueAtTime(.12 * (.6 + .4 * Math.random()) * r, n + .01), o.gain.exponentialRampToValueAtTime(.001, n + .5), l.pan.value = .6 * (Math.random() - .5), s.connect(c).connect(o).connect(l).connect(i), s.start(n), s.stop(n + .5), s.onended = () => {
		a ? (a.releaseGainNode(o, 0), a.releaseFilterNode(c, 0), a.releasePannerNode(l, 0)) : (s.disconnect(), c.disconnect(), o.disconnect(), l.disconnect());
	};
}
function tn(e, t, n, i, a = 1.8, r = 1, s, o = "triangle") {
	const c = e.createOscillator(), l = e.createOscillator(), d = s ? s.getGainNode() : e.createGain(), E = s ? s.getFilterNode() : e.createBiquadFilter(), u = s ? s.getFilterNode() : e.createBiquadFilter(), m = s ? s.getFilterNode() : e.createBiquadFilter(), _ = s ? s.getFilterNode() : e.createBiquadFilter(), A = s ? s.getPannerNode() : e.createStereoPanner(), p = Math.max(1e-4, .055 * r), O = Math.min(.075, .22 * a), h = Math.max(n + O + .01, n + a - .1), R = n + Math.min(.12, .35 * a), I = Math.max(h, R), T = Math.max(1e-4, .018 * r);
	c.type = "sawtooth", l.type = o, c.frequency.setValueAtTime(t, n), l.frequency.setValueAtTime(t, n), c.detune.value = -4, l.detune.value = 4, E.type = "highpass", E.frequency.value = 120, E.Q.value = .7, u.type = "peaking", u.frequency.value = 650, u.Q.value = 1.1, u.gain.value = 4, m.type = "peaking", m.frequency.value = 2800, m.Q.value = .9, m.gain.value = 2.5, _.type = "lowpass", _.Q.value = .7, _.frequency.setValueAtTime(1200, n), _.frequency.linearRampToValueAtTime(5200, R), _.frequency.setValueAtTime(5200, I), _.frequency.exponentialRampToValueAtTime(1600, n + a);
	const S = e.createBufferSource();
	S.buffer = $t(e);
	const g = s ? s.getFilterNode() : e.createBiquadFilter(), L = s ? s.getGainNode() : e.createGain();
	g.type = "bandpass", g.frequency.value = 2800, g.Q.value = .8, L.gain.setValueAtTime(0, n), L.gain.linearRampToValueAtTime(T, n + .012), L.gain.exponentialRampToValueAtTime(1e-4, n + .14);
	const N = e.createOscillator(), f = s ? s.getGainNode() : e.createGain();
	N.frequency.value = 5.2, f.gain.setValueAtTime(0, n), f.gain.linearRampToValueAtTime(9, n + Math.min(.35, .6 * a)), N.connect(f), f.connect(c.detune), f.connect(l.detune), d.gain.setValueAtTime(0, n), d.gain.linearRampToValueAtTime(p, n + O), d.gain.setValueAtTime(p, h), d.gain.exponentialRampToValueAtTime(1e-4, n + a), A.pan.value = 0, c.connect(E), l.connect(E), E.connect(_).connect(u).connect(m).connect(d).connect(A).connect(i), S.connect(g).connect(L).connect(A), c.start(n), l.start(n), c.stop(n + a), l.stop(n + a), N.start(n), N.stop(n + a), S.start(n), S.stop(n + Math.min(.18, a)), l.onended = () => {
		c.disconnect(), l.disconnect(), N.disconnect(), S.disconnect(), s ? (s.releaseGainNode(d, 0), s.releaseGainNode(f, 0), s.releaseGainNode(L, 0), s.releaseFilterNode(E, 0), s.releaseFilterNode(_, 0), s.releaseFilterNode(u, 0), s.releaseFilterNode(m, 0), s.releaseFilterNode(g, 0), s.releasePannerNode(A, 0)) : (E.disconnect(), _.disconnect(), u.disconnect(), m.disconnect(), d.disconnect(), A.disconnect(), g.disconnect(), L.disconnect(), f.disconnect());
	};
}
let nn = null;
function an(e, t, n, i, a = 1, r = 1, s) {
	const o = e.createOscillator(), c = e.createOscillator(), l = e.createOscillator(), d = e.createWaveShaper(), E = s ? s.getFilterNode() : e.createBiquadFilter(), u = s ? s.getGainNode() : e.createGain(), m = s ? s.getGainNode() : e.createGain(), _ = s ? s.getPannerNode() : e.createStereoPanner(), A = Math.max(1e-4, .05 * r), p = .01, O = Math.min(.35, Math.max(.05, .3 * a)), h = Math.max(n + p + .02, n + a - O), R = n + Math.min(.1, .28 * a);
	o.type = "square", c.type = "sawtooth", o.frequency.setValueAtTime(t, n), c.frequency.setValueAtTime(t, n), o.detune.value = -7, c.detune.value = 7, l.type = "sine", l.frequency.setValueAtTime(Math.max(40, t / 2), n), d.curve = function() {
		if (nn) return nn;
		const e = 1024, t = new Float32Array(e);
		for (let n = 0; n < e; n++) {
			const i = n / (e - 1) * 2 - 1;
			t[n] = .9 * Math.tanh(2.6 * i);
		}
		return nn = t, t;
	}(), d.oversample = "2x", E.type = "lowpass", E.Q.value = 1.1, E.frequency.setValueAtTime(900, n), E.frequency.linearRampToValueAtTime(2600, R), E.frequency.exponentialRampToValueAtTime(700, n + a), u.gain.setValueAtTime(0, n), u.gain.linearRampToValueAtTime(A, n + p), u.gain.linearRampToValueAtTime(.72 * A, h), u.gain.exponentialRampToValueAtTime(1e-4, n + a), m.gain.setValueAtTime(0, n), m.gain.linearRampToValueAtTime(.45 * A, n + .02), m.gain.exponentialRampToValueAtTime(1e-4, n + a), _.pan.value = 0, o.connect(d), c.connect(d), d.connect(E).connect(u).connect(_).connect(i), l.connect(m).connect(_), o.start(n), c.start(n), l.start(n), o.stop(n + a), c.stop(n + a), l.stop(n + a), c.onended = () => {
		o.disconnect(), c.disconnect(), l.disconnect(), d.disconnect(), s ? (s.releaseGainNode(u, 0), s.releaseGainNode(m, 0), s.releaseFilterNode(E, 0), s.releasePannerNode(_, 0)) : (E.disconnect(), u.disconnect(), m.disconnect(), _.disconnect());
	};
}
function rn(e, t) {
	const n = new Float32Array(64);
	for (let i = 0; i < 64; i++) {
		const a = i / 63;
		n[i] = e * (t ? Math.sin(a * Math.PI / 2) : Math.cos(a * Math.PI / 2));
	}
	return n;
}
function sn(e, t, n, i, a = 6, r = !1, s, o = "triangle", c = .3) {
	const l = s ? s.getGainNode() : e.createGain(), d = .04 * Math.sqrt(3 / Math.max(1, t.length)), E = Math.min(1.2, .3 * a);
	l.gain.setValueCurveAtTime(rn(d, !0), n, E), l.gain.setValueCurveAtTime(rn(d, !1), n + a - E, E);
	const u = [], m = [], _ = [], A = [];
	t.forEach((i, r) => {
		const d = e.createOscillator(), E = s ? s.getFilterNode() : e.createBiquadFilter(), p = s ? s.getGainNode() : e.createGain(), O = s ? s.getPannerNode() : e.createStereoPanner();
		s && (u.push(p), m.push(E)), _.push(O);
		const h = t.length > 1 ? 2 * (r / (t.length - 1) - .5) : 0;
		O.pan.value = h * c, d.type = o, E.type = "lowpass", E.frequency.value = 420, E.Q.value = 1;
		const R = e.createOscillator(), I = s ? s.getGainNode() : e.createGain();
		s && u.push(I), R.frequency.value = .05, I.gain.value = 120, R.connect(I), I.connect(E.frequency), R.start(n), R.stop(n + a), d.frequency.setValueAtTime(i, n), d.detune.value = 15 * (Math.random() - .5), p.gain.setValueAtTime(.08, n), d.connect(E).connect(p).connect(O).connect(l), d.start(n), d.stop(n + a), A.push(d);
	}), r && t.forEach((i, r) => {
		const o = e.createOscillator(), d = s ? s.getGainNode() : e.createGain(), E = s ? s.getPannerNode() : e.createStereoPanner();
		s && u.push(d), _.push(E);
		const m = t.length > 1 ? 2 * (r / (t.length - 1) - .5) : 0;
		E.pan.value = -m * c, o.frequency.value = 2.003 * i, d.gain.setValueAtTime(.02, n), o.connect(d).connect(E).connect(l), o.start(n), o.stop(n + a), A.push(o);
	}), l.connect(i), A.length > 0 && (A[A.length - 1].onended = () => {
		s ? (u.forEach((e) => s.releaseGainNode(e, 0)), m.forEach((e) => s.releaseFilterNode(e, 0)), _.forEach((e) => s.releasePannerNode(e, 0)), s.releaseGainNode(l, 0)) : (u.forEach((e) => e.disconnect()), m.forEach((e) => e.disconnect()), _.forEach((e) => e.disconnect()), l.disconnect()), A.forEach((e) => e.disconnect());
	});
}
function on(e, t, n) {
	zt(e, e.currentTime, t, "heavy", n);
}
function cn(e, t, n) {
	const i = e.currentTime;
	[
		440,
		554,
		659
	].forEach((a, r) => {
		(function(e, t, n, i, a) {
			if (!Yt) {
				const t = 2 * e.sampleRate;
				Yt = e.createBuffer(1, t, e.sampleRate);
				const n = Yt.getChannelData(0);
				for (let e = 0; e < t; e++) n[e] = 2 * Math.random() - 1;
			}
			const r = e.createBufferSource();
			r.buffer = Yt;
			const s = a ? a.getGainNode() : e.createGain();
			s.gain.setValueAtTime(0, n), s.gain.linearRampToValueAtTime(1, n + .005), s.gain.exponentialRampToValueAtTime(.01, n + .05);
			const o = 1 / t, c = e.createDelay();
			c.delayTime.value = o;
			const l = a ? a.getGainNode() : e.createGain();
			l.gain.value = .98;
			const d = a ? a.getFilterNode() : e.createBiquadFilter();
			d.type = "lowpass", d.frequency.value = 2e3;
			const E = a ? a.getGainNode() : e.createGain();
			E.gain.setValueAtTime(.2, n), E.gain.linearRampToValueAtTime(0, n + 2), r.connect(s), s.connect(c), c.connect(d), d.connect(l), l.connect(c), c.connect(E), E.connect(i), r.start(n);
			const u = e.createOscillator();
			u.frequency.value = 0;
			const m = e.createGain();
			m.gain.value = 0, u.connect(m).connect(e.destination), u.start(n), u.stop(n + 2), u.onended = () => {
				u.disconnect(), m.disconnect(), r.disconnect(), a ? (a.releaseGainNode(s, 0), a.releaseGainNode(l, 0), a.releaseFilterNode(d, 0), a.releaseGainNode(E, 0), c.disconnect()) : (s.disconnect(), l.disconnect(), d.disconnect(), E.disconnect(), c.disconnect());
			};
		})(e, a, i + .1 * r, t, n);
	}), Zt(e, i, .5, 500, 4e3, t, n);
}
const ln = [
	{
		file: "piano-c3.ogg",
		rootFrequency: 130.81
	},
	{
		file: "piano-ds3.ogg",
		rootFrequency: 155.56
	},
	{
		file: "piano-fs3.ogg",
		rootFrequency: 185
	},
	{
		file: "piano-a3.ogg",
		rootFrequency: 220
	},
	{
		file: "piano-c4.ogg",
		rootFrequency: 261.63
	},
	{
		file: "piano-ds4.ogg",
		rootFrequency: 311.13
	},
	{
		file: "piano-fs4.ogg",
		rootFrequency: 369.99
	},
	{
		file: "piano-a4.ogg",
		rootFrequency: 440
	},
	{
		file: "piano-c5.ogg",
		rootFrequency: 523.25
	},
	{
		file: "piano-ds5.ogg",
		rootFrequency: 622.25
	},
	{
		file: "piano-fs5.ogg",
		rootFrequency: 739.99
	},
	{
		file: "piano-a5.ogg",
		rootFrequency: 880
	},
	{
		file: "piano-c6.ogg",
		rootFrequency: 1046.5
	},
	{
		file: "piano-ds6.ogg",
		rootFrequency: 1244.51
	},
	{
		file: "piano-fs6.ogg",
		rootFrequency: 1479.98
	},
	{
		file: "piano-a6.ogg",
		rootFrequency: 1760
	},
	{
		file: "piano-c7.ogg",
		rootFrequency: 2093
	}
];
var dn = class {
	constructor(e) {
		this.ctx = e, this.samples = [], this.loadPromise = null;
	}
	get ready() {
		return this.samples.length > 0;
	}
	async load() {
		if (this.samples.length > 0) return;
		if (this.loadPromise) return this.loadPromise;
		const e = (async () => {
			const e = await Promise.all(ln.map(async (e) => {
				try {
					const t = await fetch(function(e) {
						const t = "undefined" != typeof document ? document.baseURI : "http://localhost/";
						return new URL(`audio/piano/${e}`, t).href;
					}(e.file));
					if (!t.ok) throw new Error(`HTTP ${t.status}`);
					const n = await t.arrayBuffer();
					return {
						buffer: await this.ctx.decodeAudioData(n),
						rootFrequency: e.rootFrequency
					};
				} catch (t) {
					return null;
				}
			}));
			this.samples = e.filter((e) => null !== e), this.samples.length;
		})().finally(() => {
			this.loadPromise = null;
		});
		return this.loadPromise = e, e;
	}
	play(e, t, n, i) {
		if (0 === this.samples.length || i <= .01) return;
		const a = this.nearestSample(e);
		if (!a) return;
		const r = this.ctx.createBufferSource(), s = this.ctx.createGain(), o = this.ctx.createStereoPanner();
		r.buffer = a.buffer, r.playbackRate.setValueAtTime(e / a.rootFrequency, t);
		const c = Math.min(1.4, Math.max(.6, 1.4 * Math.pow(220 / Math.max(40, e), .3))), l = Math.max(.1, a.buffer.duration - .02), d = Math.min(c, l), E = Math.max(t + .04, t + d - .12), u = .85 + .15 * Math.random(), m = Math.max(1e-4, .22 * i * u);
		s.gain.setValueAtTime(0, t), s.gain.linearRampToValueAtTime(m, t + .003), s.gain.setValueAtTime(m, E), s.gain.exponentialRampToValueAtTime(1e-4, t + d), o.pan.value = .2 * (Math.random() - .5), r.connect(s).connect(o).connect(n), r.start(t), r.stop(t + d), r.onended = () => {
			r.disconnect(), s.disconnect(), o.disconnect();
		};
	}
	nearestSample(e) {
		let t, n = Number.POSITIVE_INFINITY;
		for (const i of this.samples) {
			const a = Math.abs(Math.log2(e / i.rootFrequency));
			a < n && (n = a, t = i);
		}
		return t;
	}
};
const En = [
	{
		file: "violin-g3.ogg",
		rootFrequency: 196
	},
	{
		file: "violin-a3.ogg",
		rootFrequency: 220
	},
	{
		file: "violin-c4.ogg",
		rootFrequency: 261.63
	},
	{
		file: "violin-e4.ogg",
		rootFrequency: 329.63
	},
	{
		file: "violin-g4.ogg",
		rootFrequency: 392
	},
	{
		file: "violin-a4.ogg",
		rootFrequency: 440
	},
	{
		file: "violin-c5.ogg",
		rootFrequency: 523.25
	},
	{
		file: "violin-e5.ogg",
		rootFrequency: 659.25
	}
];
var un = class {
	constructor(e) {
		this.ctx = e, this.samples = [], this.loadPromise = null;
	}
	get ready() {
		return this.samples.length > 0;
	}
	async load() {
		if (this.samples.length > 0) return;
		if (this.loadPromise) return this.loadPromise;
		const e = (async () => {
			const e = await Promise.all(En.map(async (e) => {
				try {
					const t = await fetch(function(e) {
						const t = "undefined" != typeof document ? document.baseURI : "http://localhost/";
						return new URL(`audio/violin/${e}`, t).href;
					}(e.file));
					if (!t.ok) throw new Error(`HTTP ${t.status}`);
					const n = await t.arrayBuffer();
					return {
						buffer: await this.ctx.decodeAudioData(n),
						rootFrequency: e.rootFrequency
					};
				} catch (t) {
					return null;
				}
			}));
			this.samples = e.filter((e) => null !== e), this.samples.length;
		})().finally(() => {
			this.loadPromise = null;
		});
		return this.loadPromise = e, e;
	}
	play(e, t, n, i, a) {
		if (0 === this.samples.length) return;
		const r = this.nearestSample(e);
		if (!r) return;
		const s = this.ctx.createBufferSource(), o = this.ctx.createGain(), c = this.ctx.createStereoPanner();
		s.buffer = r.buffer, s.playbackRate.setValueAtTime(e / r.rootFrequency, t);
		const l = Math.max(.1, r.buffer.duration - .02), d = Math.min(Math.max(i, .1), l), E = Math.max(t + .04, t + d - .1), u = Math.max(1e-4, .22 * a);
		o.gain.setValueAtTime(0, t), o.gain.linearRampToValueAtTime(u, t + .008), o.gain.setValueAtTime(u, E), o.gain.exponentialRampToValueAtTime(1e-4, t + d), c.pan.value = 0, s.connect(o).connect(c).connect(n), s.start(t), s.stop(t + d), s.onended = () => {
			s.disconnect(), o.disconnect(), c.disconnect();
		};
	}
	nearestSample(e) {
		let t, n = Number.POSITIVE_INFINITY;
		for (const i of this.samples) {
			const a = Math.abs(Math.log2(e / i.rootFrequency));
			a < n && (n = a, t = i);
		}
		return t;
	}
};
const mn = {
	menu: 80,
	rest: 86,
	draft: 84,
	playing: 105,
	boss: 110
}, _n = {
	menu: .42,
	rest: .55,
	draft: .6,
	playing: .95,
	boss: 1
}, An = {
	menu: 4500,
	rest: 5e3,
	draft: 5500,
	playing: 8e3,
	boss: 7e3
}, pn = {
	menu: .16,
	rest: .16,
	draft: .16,
	playing: .15,
	boss: .14
};
var On = class {
	constructor() {
		this.director = new Vt(), this.emotionEngine = new Ht(), this.orchestrator = new Ft(), this.voicePool = null, this.sampledViolin = null, this.sampledPiano = null, this.currentIntent = "MOMENTUM", this.ghostVariation = 0, this.gameIsCheck = !1, this.gameComboCount = 0, this.gameTotalPieces = 32, this.gamePlayerAdvantage = null, this.gameBoard = [], this.currentEmotion = null, this.currentRules = null, this.ctx = null, this.masterBus = null, this.musicBus = null, this.sfxBus = null, this.drumBus = null, this.chordBus = null, this.bassBus = null, this.arpBus = null, this.leadBus = null, this.limiter = null, this.saturator = null, this.reverbNode = null, this.globalFilter = null, this.reverbWet = null, this.tapeLfo = null, this.vinylNoise = null, this.enabled = !0, this.musicPlaying = !1, this.tempo = 72, this.nextNoteTime = 0, this.current16thNote = 0, this.timerID = null, this.currentStep = 0, this.lastActionTime = Date.now(), this.sidechainNode = null, this.reverbSend = null, this.delaySend = null, this.delayNode = null, this.hatBuffer = null, this.noiseEnabled = !1, this.tickIntervalMs = 25, this.hiddenTickIntervalMs = 250, this.scheduleAheadTime = .5, this.hiddenScheduleAheadTime = 2, this.isDocumentHidden = !1, this.visibilityDuck = 1, this.visibilityGain = null, this.mixMeters = /* @__PURE__ */ new Map(), this.forcePadOnNextStep = !1, this.lastPadStartTime = 0, this.lastPadDuration = 0, this.currentPhase = "ambient", this.gameContext = "menu", this.phaseStepCounter = 0, this.situationIntensity = .35, this.targetSituationIntensity = .35, this.situationAdvantage = 0, this.targetSituationAdvantage = 0, this.situationProgress = 0, this.targetSituationProgress = 0, this.situationCloseness = .5, this.targetSituationCloseness = .5, this.theme = null, this.currentMusicVolume = .8, this.currentSfxVolume = .8, this.contextDuck = 1, this.endgameDuck = 1, this.endgameRestoreTimer = null, this.motifIndex = 0, this.motifState = "intro", this.motifStartStep = 0, this.motifHalf = 0, this.phaseVisits = {
			ambient: 0,
			movement: 0,
			focused: 0,
			climax: 0,
			release: 0
		}, this.pendingMotifSelection = !1, this.currentHarmonies = [], this.densities = {
			arp: 0,
			lead: 0,
			bass: 0
		}, this.targetDensities = {
			arp: 0,
			lead: 0,
			bass: 0
		}, this.cycleCount = 0, this.macroPhase = 0, this.counterDrift = 0, this.arpBreathingGain = 1, this.phraseLeadPresent = !0, this.leadOctaveShift = 0, this.arpFilter = null, this.ghostOsc1 = null, this.ghostOsc2 = null, this.ghostGain = null, this.isGhostInit = !1, this.lastResolutionTime = 0, this.specialMomentTimer = 0, this.isSpecialMoment = !1, this.specialMomentType = "bloom", this.nextChordStep = 0, this.currentChordIdx = 0, this.specialMomentSteps = 0, this.handleVisibilityChange = () => {
			const e = "undefined" != typeof document && document.hidden;
			if (this.isDocumentHidden = e, this.scheduleAheadTime = e ? this.hiddenScheduleAheadTime : .5, !this.ctx) return;
			if (e) return this.visibilityDuck = 0, this.applyMusicGain(.12), void this.scheduler();
			this.visibilityDuck = 1;
			(async () => {
				try {
					"suspended" === this.ctx?.state && await this.resume();
				} catch (e) {}
				this.ctx && (this.musicPlaying && (this.nextNoteTime < this.ctx.currentTime && (this.nextNoteTime = this.ctx.currentTime + .06), (0 === this.lastPadStartTime || this.ctx.currentTime > this.lastPadStartTime + this.lastPadDuration - 1) && (this.forcePadOnNextStep = !0), this.scheduler(), this.startTicker()), this.applyMusicGain(.3));
			})();
		};
	}
	initGhostDrone() {
		if (this.isGhostInit || !this.ctx) return;
		this.ghostOsc1 = this.ctx.createOscillator(), this.ghostOsc2 = this.ctx.createOscillator(), this.ghostGain = this.ctx.createGain();
		const e = this.ctx.createStereoPanner();
		this.ghostOsc1.type = "sine", this.ghostOsc2.type = "sine", e.pan.value = .3, this.ghostGain.gain.value = 1e-4, this.ghostOsc1.connect(this.ghostGain), this.ghostOsc2.connect(this.ghostGain), this.ghostGain.connect(e).connect(this.reverbNode), this.ghostOsc1.start(), this.ghostOsc2.start(), this.isGhostInit = !0;
	}
	loadTheme(e) {
		this.theme = e, this.tempo = this.tempoFor(this.gameContext), this.phaseVisits = {
			ambient: 0,
			movement: 0,
			focused: 0,
			climax: 0,
			release: 0
		}, this.pendingMotifSelection = !1, this.motifIndex = 0, this.motifStartStep = this.currentStep, this.motifHalf = 0, this.resetSituation(), this.ctx && this.delayNode && this.delayNode.delayTime.setTargetAtTime(60 / this.tempo * .75, this.ctx.currentTime, .1), this.targetDensities = { ...e.initialDensities }, this.densities = { ...e.initialDensities }, this.currentHarmonies = e.harmonies[this.currentPhase] || e.harmonies.ambient, e.motifIndexByPhase && (this.currentStep % 32 == 0 ? this.selectPhaseMotif() : this.pendingMotifSelection = !0);
	}
	async init() {
		if (this.ctx) {
			if ("closed" !== this.ctx.state) return;
			this.ctx = null, this.sampledViolin = null, this.sampledPiano = null;
		}
		this.isDocumentHidden = "undefined" != typeof document && document.hidden, this.visibilityDuck = this.isDocumentHidden ? 0 : 1, this.scheduleAheadTime = this.isDocumentHidden ? this.hiddenScheduleAheadTime : .5;
		const e = window.AudioContext || window.webkitAudioContext;
		if (!e) return;
		this.ctx = new e(), this.voicePool = new Qt(this.ctx), this.sampledViolin = new un(this.ctx), this.sampledPiano = new dn(this.ctx), this.limiter = this.ctx.createDynamicsCompressor(), this.limiter.threshold.setValueAtTime(-.5, this.ctx.currentTime), this.limiter.ratio.setValueAtTime(20, this.ctx.currentTime), this.limiter.knee.setValueAtTime(0, this.ctx.currentTime);
		const t = this.ctx.createBiquadFilter();
		t.type = "highshelf", t.frequency.value = 6e3, t.gain.value = 3, this.saturator = this.ctx.createWaveShaper(), this.saturator.curve = function() {
			const e = 44100, t = new Float32Array(e);
			for (let n = 0; n < e; n++) {
				const i = 2 * n / e - 1;
				t[n] = Math.tanh(1.2 * i) / Math.tanh(1.2);
			}
			return t;
		}(), this.saturator.oversample = "4x", this.globalFilter = this.ctx.createBiquadFilter(), this.globalFilter.type = "lowpass", this.globalFilter.frequency.setValueAtTime(2e4, this.ctx.currentTime), this.reverbNode = this.ctx.createConvolver(), this.reverbNode.buffer = function(e, t = 1.5) {
			const n = e.sampleRate, i = Math.max(1, Math.floor(n * t)), a = e.createBuffer(2, i, n);
			for (let r = 0; r < 2; r++) {
				const e = a.getChannelData(r);
				for (let t = 0; t < i; t++) e[t] = (2 * Math.random() - 1) * Math.pow(1 - t / i, 3);
			}
			return a;
		}(this.ctx, 1.1), this.reverbWet = this.ctx.createGain(), this.reverbWet.gain.setValueAtTime(.1, this.ctx.currentTime), this.delayNode = this.ctx.createDelay(2), this.delayNode.delayTime.value = 60 / this.tempo * .75;
		const n = this.ctx.createBiquadFilter();
		n.type = "lowpass", n.frequency.value = 1800;
		const i = this.ctx.createGain();
		i.gain.value = .06;
		const a = this.ctx.createGain();
		a.gain.value = .12, this.delaySend = this.ctx.createGain(), this.delaySend.gain.value = .12;
		const r = this.ctx.createBiquadFilter();
		r.type = "highpass", r.frequency.value = 500, this.masterBus = this.ctx.createGain(), this.musicBus = this.ctx.createGain(), this.sfxBus = this.ctx.createGain(), this.drumBus = this.ctx.createGain(), this.chordBus = this.ctx.createGain(), this.bassBus = this.ctx.createGain(), this.arpBus = this.ctx.createGain(), this.leadBus = this.ctx.createGain(), this.sidechainNode = this.ctx.createGain(), this.visibilityGain = this.ctx.createGain(), this.visibilityGain.gain.value = this.visibilityDuck, this.musicBus.gain.value = this.currentMusicVolume * this.contextDuck * this.endgameDuck, this.sfxBus.gain.value = this.currentSfxVolume, this.arpFilter = this.ctx.createBiquadFilter(), this.arpFilter.type = "lowpass", this.arpFilter.frequency.value = 2e4, this.arpBus.connect(this.arpFilter), this.arpFilter.connect(this.musicBus), this.leadBus.connect(this.musicBus), this.drumBus.connect(this.musicBus), this.bassBus.connect(this.musicBus), this.chordBus.connect(this.sidechainNode), this.sidechainNode.connect(this.musicBus), this.musicBus.connect(this.globalFilter), this.globalFilter.connect(this.visibilityGain), this.visibilityGain.connect(this.saturator), this.saturator.connect(this.masterBus), this.leadBus.connect(this.delaySend), this.arpBus.connect(this.delaySend), this.delaySend.connect(r).connect(this.delayNode), this.delayNode.connect(n), n.connect(i), i.connect(this.delayNode), n.connect(a), a.connect(this.globalFilter), this.reverbSend = this.ctx.createGain(), this.reverbSend.gain.value = .16;
		const s = this.ctx.createBiquadFilter();
		s.type = "highpass", s.frequency.value = 350, this.leadBus.connect(this.reverbSend), this.chordBus.connect(this.reverbSend), this.arpBus.connect(this.reverbSend), this.reverbSend.connect(s).connect(this.reverbNode), this.reverbNode.connect(this.reverbWet), this.reverbWet.connect(this.globalFilter);
		const o = this.ctx.createGain();
		o.gain.value = .12;
		const c = this.ctx.createBiquadFilter();
		c.type = "highpass", c.frequency.value = 350, this.sfxBus.connect(o), o.connect(c).connect(this.reverbNode), this.sfxBus.connect(this.masterBus), this.masterBus.connect(t), t.connect(this.limiter), this.limiter.connect(this.ctx.destination), this.tapeLfo = this.ctx.createOscillator(), this.tapeLfo.type = "sine", this.tapeLfo.frequency.value = .3, this.tapeLfo.start(), this.noiseEnabled && (this.vinylNoise = function(e, t) {
			const n = 2 * e.sampleRate, i = e.createBuffer(1, n, e.sampleRate), a = i.getChannelData(0);
			for (let c = 0; c < n; c++) a[c] = .01 * (2 * Math.random() - 1), Math.random() < 1e-4 && (a[c] += Math.random() > .5 ? .3 : -.3);
			const r = e.createBufferSource();
			r.buffer = i, r.loop = !0;
			const s = e.createBiquadFilter();
			s.type = "lowpass", s.frequency.value = 1500;
			const o = e.createGain();
			return o.gain.value = .05, r.connect(s).connect(o).connect(t), r.start(), r;
		}(this.ctx, this.masterBus), function(e, t) {
			const n = 2 * e.sampleRate, i = e.createBuffer(1, n, e.sampleRate), a = i.getChannelData(0);
			for (let A = 0; A < n; A++) a[A] = 2 * Math.random() - 1;
			const r = e.createBufferSource();
			r.buffer = i, r.loop = !0;
			const s = e.createBiquadFilter();
			s.type = "highpass", s.frequency.value = 1e4;
			const o = e.createGain();
			o.gain.value = .015, r.connect(s).connect(o).connect(t), r.start();
			const c = e.createBuffer(1, 2 * e.sampleRate, e.sampleRate), l = c.getChannelData(0);
			for (let A = 0; A < c.length; A++) l[A] = 2 * Math.random() - 1;
			const d = e.createBufferSource();
			d.buffer = c, d.loop = !0;
			const E = e.createBiquadFilter();
			E.type = "lowpass", E.frequency.value = 60;
			const u = e.createOscillator();
			u.type = "sine", u.frequency.value = .02;
			const m = e.createGain();
			m.gain.value = 40, u.connect(m).connect(E.frequency);
			const _ = e.createGain();
			_.gain.value = .8, d.connect(E).connect(_).connect(t), u.start(), d.start();
		}(this.ctx, this.masterBus));
		const l = Math.max(1, Math.floor(.06 * this.ctx.sampleRate));
		this.hatBuffer = this.ctx.createBuffer(1, l, this.ctx.sampleRate);
		const d = this.hatBuffer.getChannelData(0);
		for (let E = 0; E < l; E++) d[E] = (2 * Math.random() - 1) * (1 - E / l);
		"undefined" != typeof document && (document.removeEventListener("visibilitychange", this.handleVisibilityChange), document.addEventListener("visibilitychange", this.handleVisibilityChange)), this.initMixMeters();
	}
	initMixMeters() {}
	setMusicVolume(e) {
		this.currentMusicVolume = e, this.applyMusicGain();
	}
	applyMusicGain(e = .08) {
		if (!this.ctx || !this.musicBus || !this.visibilityGain) return;
		const t = this.currentMusicVolume * this.contextDuck * this.endgameDuck;
		this.musicBus.gain.setTargetAtTime(t, this.ctx.currentTime, e), this.visibilityGain.gain.setTargetAtTime(this.visibilityDuck, this.ctx.currentTime, e);
	}
	setSfxVolume(e) {
		this.currentSfxVolume = e, this.ctx && this.sfxBus && this.sfxBus.gain.setTargetAtTime(e, this.ctx.currentTime, .05);
	}
	getMixSnapshot() {
		return null;
	}
	resetSituation() {
		this.situationIntensity = .35, this.targetSituationIntensity = .35, this.situationAdvantage = 0, this.targetSituationAdvantage = 0, this.situationProgress = 0, this.targetSituationProgress = 0, this.situationCloseness = .5, this.targetSituationCloseness = .5, this.gamePlayerAdvantage = null;
	}
	updateSituation() {
		const e = .04;
		this.situationIntensity += (this.targetSituationIntensity - this.situationIntensity) * e, this.situationAdvantage += (this.targetSituationAdvantage - this.situationAdvantage) * e, this.situationProgress += (this.targetSituationProgress - this.situationProgress) * e, this.situationCloseness += (this.targetSituationCloseness - this.situationCloseness) * e;
	}
	chooseDynamicPhase() {
		const e = this.situationIntensity, t = this.situationProgress, n = this.situationAdvantage, i = this.currentPhase;
		if ("boss" === this.gameContext) return e >= .62 || n < -.45 ? "climax" : "focused";
		if ("climax" === i) {
			if (e >= .58) return "climax";
			if (e < .46 && t > .28) return "release";
			if (e >= .34) return "focused";
		} else if ("focused" === i) {
			if (e >= .68) return "climax";
			if (e >= .38) return "focused";
		} else {
			if ("release" === i) return e >= .68 ? "climax" : e >= .5 ? "focused" : e <= .33 ? "release" : "movement";
			if (e >= .68) return "climax";
			if (e >= .5) return "focused";
		}
		return n < -.55 && e >= .42 && "climax" !== i ? "focused" : t > .28 && e <= .24 ? "release" : "movement";
	}
	advancePhase() {
		if ("playing" === this.gameContext || "boss" === this.gameContext) {
			this.currentPhase;
			this.currentPhase = this.chooseDynamicPhase();
		} else "menu" !== this.gameContext && "rest" !== this.gameContext && "draft" !== this.gameContext || (this.currentPhase = "ambient" === this.currentPhase ? "movement" : "ambient");
		this.theme && (this.currentHarmonies = this.theme.harmonies[this.currentPhase] || this.theme.harmonies.ambient);
		const e = this.currentHarmonies.length || 4;
		this.currentChordIdx = 0 === this.currentStep ? 0 : e - 1, this.theme?.motifIndexByPhase && (this.currentStep % 32 == 0 ? this.selectPhaseMotif() : this.pendingMotifSelection = !0), "focused" === this.currentPhase && (this.motifState = "intro");
	}
	getPhaseLength() {
		return "release" === this.currentPhase ? 64 : 128;
	}
	updateMotifLifecycle(e) {
		"focused" === this.currentPhase && (0 === e ? this.motifState = "intro" : 32 === e ? this.motifState = "repeat" : 64 === e ? this.motifState = "variation" : 96 === e && (this.motifState = "fragment"));
	}
	applyPhaseDensities() {
		const e = this.currentPhase, t = this.gameContext;
		this.targetDensities.bass = "climax" === e ? .6 : "menu" === t || "rest" === t ? 0 : .3, this.targetDensities.arp = "boss" === t ? .5 : "ambient" === e ? "menu" === t ? .28 : .18 : "menu" === t ? .28 : .35;
	}
	updateDensities() {
		const e = .05;
		this.densities.arp += (this.targetDensities.arp - this.densities.arp) * e, this.densities.lead += (this.targetDensities.lead - this.densities.lead) * e, this.densities.bass += (this.targetDensities.bass - this.densities.bass) * e, this.updateSituation();
	}
	contextDuckFor(e) {
		return _n[e] ?? .95;
	}
	tempoFor(e) {
		return mn[e] ?? 94;
	}
	useStringLead() {
		return "menu" === this.gameContext || "draft" === this.gameContext || "rest" === this.gameContext;
	}
	usePluckArp() {
		return !this.useStringLead();
	}
	setGameState(e) {
		this.gameContext !== e && (this.gameContext = e, this.contextDuck = this.contextDuckFor(e), this.tempo = this.tempoFor(e), "menu" === e && (this.endgameDuck = 1), this.ctx && (this.delayNode && this.delayNode.delayTime.setTargetAtTime(60 / this.tempo * .75, this.ctx.currentTime, .4), this.applyMusicGain(.35), this.phaseStepCounter = 0, this.handleContextTransition()));
	}
	handleContextTransition() {
		if (!this.ctx || !this.globalFilter || !this.reverbWet) return;
		switch (this.gameContext) {
			case "menu":
			case "draft":
			case "rest":
				this.currentPhase = "ambient", this.motifIndex = 0;
				break;
			case "boss":
				this.currentPhase = "focused", this.motifIndex = 0;
				break;
			case "playing": this.currentPhase = "movement", this.motifIndex = 0;
		}
		this.theme && (this.currentHarmonies = this.theme.harmonies[this.currentPhase] || this.theme.harmonies.ambient);
		const e = this.currentHarmonies.length || 4;
		this.currentChordIdx = 0 === this.currentStep ? 0 : e - 1, this.phaseVisits = {
			ambient: 0,
			movement: 0,
			focused: 0,
			climax: 0,
			release: 0
		}, this.pendingMotifSelection = !1, this.motifStartStep = this.currentStep, this.motifHalf = 0, this.resetSituation(), this.theme?.motifIndexByPhase && (this.currentStep % 32 == 0 ? this.selectPhaseMotif() : this.pendingMotifSelection = !0);
	}
	startMusic() {
		this.enabled && !this.musicPlaying && (this.musicPlaying = !0, this.init().then(async () => {
			await this.resume(), this.enabled && this.ctx && this.musicPlaying ? (await Promise.all([this.sampledViolin?.load(), this.sampledPiano?.load()]), this.enabled && this.ctx && this.musicPlaying ? (this.initGhostDrone(), this.nextNoteTime = this.ctx.currentTime + .1, this.scheduleAheadTime = this.isDocumentHidden ? this.hiddenScheduleAheadTime : .5, this.startTicker()) : this.musicPlaying = !1) : this.musicPlaying = !1;
		}));
	}
	startTicker() {
		this.timerID && (window.clearTimeout(this.timerID), this.timerID = null);
		const e = () => this.isDocumentHidden ? this.hiddenTickIntervalMs : this.tickIntervalMs, t = () => {
			this.timerID = null, this.ctx && this.musicPlaying && (this.scheduler(), this.ctx && this.musicPlaying && (this.timerID = window.setTimeout(t, e())));
		};
		this.timerID = window.setTimeout(t, e());
	}
	setBusGain(e, t, n) {
		e && (Math.abs(e.gain.value - t) < .02 || e.gain.setTargetAtTime(t, n, .6));
	}
	updateContextualMix(e) {
		if (!this.ctx) return;
		const t = this.ctx.currentTime, n = "menu" === this.gameContext, i = "rest" === this.gameContext || "draft" === this.gameContext, a = "release" === this.currentPhase, r = n || i || a;
		this.setBusGain(this.bassBus, r ? 0 : e.isEndgame ? .4 : .35, t), this.setBusGain(this.drumBus, r ? 0 : "boss" === this.gameContext ? .5 : .42, t), this.setBusGain(this.chordBus, n ? .3 : i || a ? .34 : .45, t), this.setBusGain(this.arpBus, n ? .26 : i ? .2 : a ? .16 : .42 + .12 * e.tension, t), this.setBusGain(this.leadBus, n ? .42 : i ? .5 : a ? .6 : .9, t);
	}
	updateMusicBrain() {
		if (!this.ctx || !this.globalFilter || !this.reverbWet) return;
		const e = this.emotionEngine.evaluate({
			isCheck: this.gameIsCheck,
			totalPieces: this.gameTotalPieces,
			comboCount: this.gameComboCount,
			playerAdvantage: this.gamePlayerAdvantage ?? void 0,
			board: this.gameBoard
		}, this.getIdleTime());
		this.currentEmotion = e, this.currentIntent = this.director.determineIntent({
			phase: this.currentPhase,
			emotion: e
		});
		const t = this.orchestrator.mapIntent(this.currentIntent, e);
		this.currentRules = t, this.applyOrchestration(t);
	}
	applyOrchestration(e) {
		if (!this.ctx || !this.globalFilter || !this.reverbWet) return;
		const t = this.ctx.currentTime, n = An[this.gameContext] ?? 8e3, i = Math.min(e.filterFreq, n);
		Math.abs(this.globalFilter.frequency.value - i) > 50 && this.globalFilter.frequency.setTargetAtTime(i, t, 1.5);
		const a = Math.min(e.reverbWet, pn[this.gameContext] ?? .18);
		Math.abs(this.reverbWet.gain.value - a) > .02 && this.reverbWet.gain.setTargetAtTime(a, t, 1.5), this.targetDensities.lead = e.noteDensity, this.applyPhaseDensities();
	}
	brainDecide(e) {
		const t = .2 * (this.currentEmotion?.uncertainty || 0);
		return Math.random() < e + t;
	}
	pitchClass(e) {
		const t = /^([A-G])([#b]?)/.exec(e);
		if (!t) return -1;
		let n = {
			C: 0,
			D: 2,
			E: 4,
			F: 5,
			G: 7,
			A: 9,
			B: 11
		}[t[1]] ?? 0;
		return "#" === t[2] ? n = (n + 1) % 12 : "b" === t[2] && (n = (n + 11) % 12), n;
	}
	getFrequency(e, t = 0) {
		return (wt[e] || 440) * Math.pow(2, t);
	}
	leadGainFor(e) {
		const t = this.theme?.leadExpression?.[this.currentPhase];
		return void 0 === t ? .75 + .25 * e : Math.min(1.12, t * (.62 + .38 * e));
	}
	selectPhaseMotif() {
		const e = this.theme?.motifIndexByPhase?.[this.currentPhase];
		if (!this.theme || !e || 0 === e.length || 0 === this.theme.motifBank.length) return;
		const t = this.phaseVisits[this.currentPhase] ?? 0, n = e[t % e.length];
		this.motifIndex = Math.max(0, Math.min(n, this.theme.motifBank.length - 1)), this.motifHalf = t % 2 == 0 ? 0 : Math.floor((this.theme.motifLength ?? 256) / 2), this.motifStartStep = this.currentStep, this.phaseVisits[this.currentPhase] = t + 1;
	}
	noteGateSeconds(e, t, n) {
		const i = 60 / this.tempo / 4;
		let a = 12;
		for (let r = 1; r <= 12; r++) if (t[((e + r) % n).toString()]) {
			a = r;
			break;
		}
		return Math.min(4, Math.max(.2, a * i + .1));
	}
	triggerSpecialMoment() {
		this.isSpecialMoment = !0;
		const e = [
			"bloom",
			"void",
			"swell"
		];
		this.specialMomentType = e[Math.floor(Math.random() * e.length)], this.specialMomentSteps = 32 * (Math.floor(2 * Math.random()) + 1);
	}
	handleHarmonicPacing(e) {
		return this.currentHarmonies && 0 !== this.currentHarmonies.length ? (0 !== e && e % 32 == 0 && (this.currentChordIdx = (this.currentChordIdx + 1) % this.currentHarmonies.length), this.currentHarmonies[this.currentChordIdx] || [
			"C3",
			"Eb3",
			"G3"
		]) : [
			"C3",
			"Eb3",
			"G3"
		];
	}
	scheduleNote(e, t) {
		const n = this.theme?.motifLength || 256, i = e % n;
		this.pendingMotifSelection && i % 32 == 0 && (this.pendingMotifSelection = !1, this.selectPhaseMotif());
		const a = this.theme?.motifIndexByPhase ? ((i - this.motifStartStep + this.motifHalf) % n + n) % n : i;
		this.updateMotifLifecycle(i);
		const r = this.handleHarmonicPacing(i);
		let s = wt[r[0]] || 440;
		if (a % 32 == 0) {
			const e = this.theme?.leadPresence?.[this.currentPhase] ?? 1, t = this.theme?.silenceChance?.[this.currentPhase] ?? 0;
			this.phraseLeadPresent = Math.random() < e && Math.random() >= t;
		}
		const o = this.currentRules?.octaveOffset ?? 0, c = this.isSpecialMoment && "bloom" === this.specialMomentType ? 1 : 0;
		let l = 1;
		this.isSpecialMoment && ("void" === this.specialMomentType ? l = .1 : "swell" === this.specialMomentType && (this.reverbWet?.gain.setTargetAtTime(.18, t, .5), this.reverbWet?.gain.setTargetAtTime(.1, t + 2, 2)));
		const d = this.theme && this.theme.motifBank.length > 0 ? Math.min(this.motifIndex, this.theme.motifBank.length - 1) : 0, E = this.theme && this.theme.motifBank.length > 0 ? this.theme.motifBank[d] : {};
		let u = E[a.toString()];
		const m = this.currentRules ? (Math.random() - .5) * (.05 * this.currentRules.rhythmicHumanization) : 0, _ = Math.max(0, t + m);
		if (this.theme?.counterBank && this.isGhostInit) {
			let e = (this.theme.counterBank[d] || {})[a.toString()];
			if (e) {
				let t = this.getFrequency(e, o + c);
				const n = _ + this.counterDrift;
				this.ghostOsc1?.frequency.setTargetAtTime(t, n, 3), this.ghostOsc2?.frequency.setTargetAtTime(1.002 * t, n, 3), this.ghostGain?.gain.setTargetAtTime(.08, n, 2);
			} else a % 32 == 0 && this.ghostGain?.gain.setTargetAtTime(.01, _, 4);
		}
		if (u) {
			let e = u, t = 1;
			if (u.includes(":")) {
				const n = u.split(":");
				e = n[0], t = parseFloat(n[1]);
			}
			const i = [
				0,
				0,
				0,
				.08,
				.12,
				.08,
				0,
				0
			][this.macroPhase], r = a % 8 == 0;
			if (this.phraseLeadPresent && (r || Math.random() > i)) {
				const i = this.noteGateSeconds(a, E, n);
				let r = this.getFrequency(e, this.leadOctaveShift + c);
				r = Math.max(65, Math.min(3200, r));
				const s = this.theme?.instSettings?.leadOsc || "triangle", o = this.leadGainFor(t);
				if (this.useStringLead() ? this.sampledViolin?.ready ? this.sampledViolin.play(r, _, this.leadBus, i, o) : tn(this.ctx, r, _, this.leadBus, i, o, this.voicePool, s) : an(this.ctx, r, _, this.leadBus, i, o, this.voicePool), this.arpFilter) {
					const e = "menu" === this.gameContext ? 5e3 : 2600;
					this.arpFilter.frequency.setTargetAtTime(e, _, .25), this.arpFilter.frequency.setTargetAtTime(2e4, _ + 1, 1.4);
				}
			}
		} else if (!this.theme || 0 === this.theme.motifBank.length) {
			let e = xt.notes[(i % 64).toString()];
			const t = .4 * this.densities.lead;
			if (e && Math.random() < t) {
				const t = this.theme?.instSettings?.leadOsc || "triangle", n = Math.max(65, Math.min(3200, this.getFrequency(e, this.leadOctaveShift + c)));
				this.useStringLead() ? this.sampledViolin?.ready ? this.sampledViolin.play(n, _, this.leadBus, .4, .5) : tn(this.ctx, n, _, this.leadBus, .4, .5, this.voicePool, t) : an(this.ctx, n, _, this.leadBus, .4, .5, this.voicePool);
			}
		}
		const A = this.theme?.arpLength || 16;
		let p;
		if (this.theme && this.theme.arpBank && this.theme.arpBank.length > 0) {
			const e = "release" === this.currentPhase ? 4 : this.currentChordIdx % 4;
			p = this.theme.arpBank[e % this.theme.arpBank.length][(i % A).toString()];
		} else p = Wt.notes[(i % 64).toString()];
		if (p && "release" !== this.currentPhase) {
			const e = this.densities.arp * l * this.arpBreathingGain;
			if (e > .05) {
				let t = this.getFrequency(p, o + 1);
				(this.currentEmotion?.exhaustion ?? 0) > .6 && (t /= 2);
				const n = Math.random();
				n < .03 ? t /= 2 : n < .06 && (t *= 2), this.usePluckArp() ? en(this.ctx, t, _, this.arpBus, this.voicePool, e) : this.sampledPiano?.ready ? this.sampledPiano.play(t, _, this.arpBus, e) : function(e, t, n, i, a, r = 1) {
					const s = e.createOscillator(), o = e.createOscillator(), c = e.createOscillator(), l = a ? a.getGainNode() : e.createGain(), d = a ? a.getGainNode() : e.createGain(), E = a ? a.getFilterNode() : e.createBiquadFilter(), u = a ? a.getFilterNode() : e.createBiquadFilter(), m = a ? a.getFilterNode() : e.createBiquadFilter(), _ = a ? a.getPannerNode() : e.createStereoPanner(), A = .75 + .25 * Math.random(), p = Math.max(1e-4, .075 * r * A), O = Math.max(.6, Math.min(1.4, 1.4 * Math.pow(220 / t, .3))), h = Math.max(1e-4, .03 * r);
					s.type = "triangle", o.type = "sine", c.type = "sine", s.frequency.setValueAtTime(t, n), o.frequency.setValueAtTime(t, n), o.detune.value = 4, c.frequency.setValueAtTime(t, n), d.gain.setValueAtTime(2.4 * t, n), d.gain.exponentialRampToValueAtTime(.55 * t, n + .3), d.gain.exponentialRampToValueAtTime(.12 * t, n + O), c.connect(d), d.connect(s.frequency), d.connect(o.frequency), E.type = "highpass", E.frequency.value = 110, E.Q.value = .7, u.type = "peaking", u.frequency.value = 320, u.Q.value = .9, u.gain.value = 3, m.type = "lowpass", m.Q.value = .6, m.frequency.setValueAtTime(9e3, n), m.frequency.exponentialRampToValueAtTime(2600, n + O), l.gain.setValueAtTime(0, n), l.gain.linearRampToValueAtTime(p, n + .004), l.gain.exponentialRampToValueAtTime(.22 * p, n + .38), l.gain.exponentialRampToValueAtTime(1e-4, n + O);
					const R = e.createBufferSource();
					R.buffer = $t(e);
					const I = a ? a.getFilterNode() : e.createBiquadFilter(), T = a ? a.getGainNode() : e.createGain();
					I.type = "bandpass", I.frequency.value = 3200, I.Q.value = .7, T.gain.setValueAtTime(0, n), T.gain.linearRampToValueAtTime(h, n + .003), T.gain.exponentialRampToValueAtTime(1e-4, n + .06), _.pan.value = .5 * (Math.random() - .5), s.connect(E), o.connect(E), E.connect(m).connect(u).connect(l).connect(_).connect(i), R.connect(I).connect(T).connect(_), s.start(n), o.start(n), c.start(n), s.stop(n + O), o.stop(n + O), c.stop(n + O), R.start(n), R.stop(n + .06), o.onended = () => {
						s.disconnect(), o.disconnect(), c.disconnect(), R.disconnect(), a ? (a.releaseGainNode(l, 0), a.releaseGainNode(d, 0), a.releaseGainNode(T, 0), a.releaseFilterNode(E, 0), a.releaseFilterNode(m, 0), a.releaseFilterNode(u, 0), a.releaseFilterNode(I, 0), a.releasePannerNode(_, 0)) : (E.disconnect(), m.disconnect(), u.disconnect(), l.disconnect(), d.disconnect(), _.disconnect(), I.disconnect(), T.disconnect());
					};
				}(this.ctx, t, _, this.arpBus, this.voicePool, e);
			}
		}
		if (i % 32 == 0 || this.forcePadOnNextStep) {
			this.forcePadOnNextStep = !1;
			const e = "focused" === this.currentPhase && i > 64 || "climax" === this.currentPhase, t = this.currentEmotion?.dominance ?? 0, n = this.currentEmotion?.exhaustion ?? 0, a = this.pitchClass(r[0]), c = (a + 7) % 12, l = (a + 3) % 12;
			let d = r.map((e) => this.getFrequency(e, o));
			if (n > .6) {
				const e = r.findIndex((e, t) => t > 0 && this.pitchClass(e) === c);
				d = [d[0], e > 0 ? d[e] : 1.5 * d[0]];
			} else t < -.4 && (d = r.map((e, t) => ({
				n: e,
				freq: d[t]
			})).filter(({ n: e }, t) => 0 === t || this.pitchClass(e) !== l).map(({ freq: e }) => e));
			(e || t > .4) && d.length > 0 && d.push(2.25 * d[0]);
			const E = this.theme?.instSettings?.padOsc || "triangle", u = this.theme?.padSpread?.[this.currentPhase] ?? .3, m = 60 / this.tempo / 4 * 32 + 1.2;
			this.lastPadStartTime = _, this.lastPadDuration = m, "release" !== this.currentPhase ? sn(this.ctx, d, _, this.chordBus, m, e, this.voicePool, E, u) : sn(this.ctx, [s, 1.5 * s], _, this.chordBus, m, !1, this.voicePool, E, u);
		}
		this.handlePulseBass(i, r[0], _), this.handleRhythmSection(i, _);
	}
	handlePulseBass(e, t, n) {
		const i = "playing" === this.gameContext || "boss" === this.gameContext, a = i ? 4 : 16;
		if (e % a !== 0) return;
		if (this.densities.bass <= .1) return;
		const r = this.currentRules?.octaveOffset ?? 0, s = this.getFrequency(t, r - 1);
		let o = s < 55 ? 2 * s : s;
		i && e / a % 4 == 2 && (o = o >= 110 ? o / 2 : o), function(e, t, n, i, a) {
			const r = e.createOscillator(), s = a ? a.getGainNode() : e.createGain();
			r.type = "sine", r.frequency.setValueAtTime(t, n), s.gain.setValueAtTime(0, n), s.gain.linearRampToValueAtTime(.2, n + .8), s.gain.exponentialRampToValueAtTime(.001, n + 3.5), r.connect(s).connect(i), r.start(n), r.stop(n + 3.5);
			const o = 3 * t <= 220 ? 3 * t : 2 * t, c = e.createOscillator(), l = a ? a.getGainNode() : e.createGain();
			c.type = "sine", c.frequency.setValueAtTime(o, n), l.gain.setValueAtTime(0, n), l.gain.linearRampToValueAtTime(.05, n + .35), l.gain.exponentialRampToValueAtTime(.001, n + 3), c.connect(l).connect(i), c.start(n), c.stop(n + 3), r.onended = () => {
				a ? a.releaseGainNode(s, 0) : (r.disconnect(), s.disconnect());
			}, c.onended = () => {
				a ? a.releaseGainNode(l, 0) : (c.disconnect(), l.disconnect());
			};
		}(this.ctx, o, n, this.bassBus, this.voicePool);
	}
	handleRhythmSection(e, t) {
		this.ctx && (this.shouldKick(e) && function(e, t, n, i, a) {
			const r = t, s = e.createOscillator(), o = a ? a.getGainNode() : e.createGain();
			s.frequency.setValueAtTime(75, r), s.frequency.exponentialRampToValueAtTime(45, r + .45), o.gain.setValueAtTime(0, r), o.gain.linearRampToValueAtTime(.16, r + .02), o.gain.exponentialRampToValueAtTime(.001, r + .5);
			const c = e.createOscillator(), l = a ? a.getGainNode() : e.createGain();
			c.type = "sine", c.frequency.setValueAtTime(500, r), l.gain.setValueAtTime(0, r), l.gain.linearRampToValueAtTime(.03, r + .002), l.gain.exponentialRampToValueAtTime(1e-4, r + .02);
			const d = e.createOscillator(), E = a ? a.getGainNode() : e.createGain();
			if (d.type = "sine", d.frequency.setValueAtTime(150, r), E.gain.setValueAtTime(0, r), E.gain.linearRampToValueAtTime(.06, r + .005), E.gain.exponentialRampToValueAtTime(1e-4, r + .08), d.connect(E).connect(n), d.start(r), d.stop(r + .08), s.connect(o).connect(n), i) {
				const e = i.gain, t = e.value;
				e.cancelScheduledValues(r), e.setValueAtTime(t, r), e.linearRampToValueAtTime(.72, r + .01), e.linearRampToValueAtTime(1, r + .18);
			}
			c.connect(l).connect(n), s.start(r), s.stop(r + .5), c.start(r), c.stop(r + .02), s.onended = () => {
				c.disconnect(), a ? (a.releaseGainNode(o, 0), a.releaseGainNode(l, 0), a.releaseGainNode(E, 0)) : (s.disconnect(), o.disconnect(), l.disconnect(), E.disconnect(), d.disconnect());
			};
		}(this.ctx, t, this.drumBus, this.sidechainNode ?? void 0, this.voicePool ?? void 0), this.shouldHat(e) && this.hatBuffer && function(e, t, n, i, a) {
			const r = e.createBufferSource();
			r.buffer = i;
			const s = a ? a.getFilterNode() : e.createBiquadFilter(), o = a ? a.getGainNode() : e.createGain();
			s.type = "highpass", s.frequency.value = 6e3, o.gain.setValueAtTime(0, t), o.gain.linearRampToValueAtTime(.03, t + .002), o.gain.exponentialRampToValueAtTime(1e-4, t + .04), r.connect(s).connect(o).connect(n), r.start(t), r.stop(t + .05), r.onended = () => {
				a ? (a.releaseFilterNode(s, 0), a.releaseGainNode(o, 0)) : (r.disconnect(), s.disconnect(), o.disconnect());
			};
		}(this.ctx, t, this.drumBus, this.hatBuffer, this.voicePool ?? void 0));
	}
	shouldKick(e) {
		return "menu" !== this.gameContext && "rest" !== this.gameContext && "draft" !== this.gameContext && "release" !== this.currentPhase && ("climax" === this.currentPhase || "boss" === this.gameContext ? e % 4 == 0 : e % 8 == 0);
	}
	shouldHat(e) {
		return ("playing" === this.gameContext || "boss" === this.gameContext) && "ambient" !== this.currentPhase && "release" !== this.currentPhase && e % 4 == 0;
	}
	scheduler() {
		if (this.ctx && this.musicPlaying) {
			if (this.nextNoteTime < this.ctx.currentTime - .5) {
				const e = 60 / this.tempo * .25, t = this.theme?.motifLength || 256;
				for (; this.nextNoteTime < this.ctx.currentTime;) this.nextNoteTime += e, this.currentStep = (this.currentStep + 1) % t;
			}
			for (this.nextNoteTime < this.ctx.currentTime + .01 && (this.nextNoteTime = this.ctx.currentTime + .01); this.ctx && this.nextNoteTime < this.ctx.currentTime + this.scheduleAheadTime;) {
				this.currentStep % 16 == 0 && this.updateMusicBrain(), this.updateDensities(), this.specialMomentTimer++, this.specialMomentSteps > 0 && (this.specialMomentSteps--, 0 === this.specialMomentSteps && (this.isSpecialMoment = !1)), this.specialMomentTimer > 256 && Math.random() < .01 && (this.triggerSpecialMoment(), this.specialMomentTimer = 0), this.scheduleNote(this.currentStep, this.nextNoteTime);
				const e = 60 / this.tempo;
				this.nextNoteTime += .25 * e;
				const t = this.theme?.motifLength || 256;
				if (this.currentStep = (this.currentStep + 1) % t, 0 === this.currentStep) {
					this.cycleCount++, this.macroPhase = this.cycleCount % 8, this.counterDrift = .15 * (Math.random() - .5);
					const e = [
						1,
						.85,
						.7,
						.4,
						.15,
						.55,
						.85,
						1
					];
					if (this.arpBreathingGain = e[this.macroPhase], !this.theme?.motifIndexByPhase) {
						const e = this.theme?.motifBank.length ?? 1;
						this.motifIndex = e > 0 ? Math.floor(this.cycleCount / 2) % e : 0;
					}
					this.leadOctaveShift = this.currentRules?.octaveOffset ?? 0;
				}
				this.phaseStepCounter++, this.phaseStepCounter >= this.getPhaseLength() && this.currentStep % 32 == 0 && (this.phaseStepCounter = 0, this.advancePhase());
			}
		} else this.timerID && (window.clearTimeout(this.timerID), this.timerID = null);
	}
	recordAction() {
		this.lastActionTime = Date.now();
	}
	getIdleTime() {
		return (Date.now() - this.lastActionTime) / 1e3;
	}
	resume() {
		return "suspended" === this.ctx?.state ? (this.initGhostDrone(), this.ctx.resume()) : Promise.resolve();
	}
	setGameMetrics(e) {
		this.gameIsCheck = e.isCheck, this.gameComboCount = e.comboCount, this.gameTotalPieces = e.totalPieces, void 0 !== e.playerAdvantage && (this.gamePlayerAdvantage = e.playerAdvantage, this.targetSituationAdvantage = Math.max(-1, Math.min(1, e.playerAdvantage))), void 0 !== e.intensity && (this.targetSituationIntensity = Math.max(0, Math.min(1, e.intensity))), void 0 !== e.progress && (this.targetSituationProgress = Math.max(0, Math.min(1, e.progress))), void 0 !== e.closeness && (this.targetSituationCloseness = Math.max(0, Math.min(1, e.closeness))), void 0 !== e.board && (this.gameBoard = e.board);
	}
	async triggerResolution() {
		if (!this.ctx || !this.enabled) return;
		const e = this.director.peekDebt();
		if (e < .2) return;
		const t = this.ctx.currentTime;
		if (t - this.lastResolutionTime < 1.5) return;
		this.lastResolutionTime = t, this.director.dischargeDebt(), this.reverbWet?.gain.cancelScheduledValues(t), this.reverbWet?.gain.setValueAtTime(this.reverbWet.gain.value, t), this.reverbWet?.gain.linearRampToValueAtTime(.18, t + .5), this.reverbWet?.gain.exponentialRampToValueAtTime(.1, t + 3), this.globalFilter && (this.globalFilter.frequency.setValueAtTime(this.globalFilter.frequency.value, t), this.globalFilter.frequency.exponentialRampToValueAtTime(2e4, t + .2));
		const n = [
			wt.C4,
			wt.E4,
			wt.G4,
			wt.B4
		];
		sn(this.ctx, n, t, this.chordBus, 3 + 2 * Math.min(e, 1), !0, this.voicePool, "triangle", .35);
	}
	async playMoveByType(e, t = 3.5) {
		if (!this.enabled || !this.ctx) return;
		await this.resume();
		const n = t / 7 - .5, i = this.voicePool, a = i ? i.getPannerNode() : this.ctx.createStereoPanner();
		a.pan.setValueAtTime(n, this.ctx.currentTime), function(e, t, n, i) {
			const a = e.currentTime, r = e.createOscillator(), s = e.createBufferSource(), o = i ? i.getFilterNode() : e.createBiquadFilter(), c = i ? i.getGainNode() : e.createGain();
			let l = 1200, d = 440, E = .15, u = .2;
			"K" === t || "Q" === t ? (l = 600, d = 200, E = .25, u = .3) : "R" === t || "B" === t ? (l = 900, d = 300, E = .18, u = .25) : (l = 1400, d = 500, E = .12, u = .15), l *= .9 + .2 * Math.random(), r.type = "sine", r.frequency.setValueAtTime(l, a), r.frequency.exponentialRampToValueAtTime(d, a + .6 * E);
			const m = e.sampleRate * E, _ = e.createBuffer(1, m, e.sampleRate), A = _.getChannelData(0);
			for (let p = 0; p < m; p++) A[p] = 2 * Math.random() - 1;
			s.buffer = _, o.type = "highpass", o.frequency.value = 2e3, c.gain.setValueAtTime(0, a), c.gain.linearRampToValueAtTime(u, a + .005), c.gain.exponentialRampToValueAtTime(.001, a + E), r.connect(c), s.connect(o).connect(c), c.connect(n), r.start(a), r.stop(a + E), s.start(a), s.stop(a + E), r.onended = () => {
				i ? (i.releaseFilterNode(o, 0), i.releaseGainNode(c, 0)) : (r.disconnect(), s.disconnect(), o.disconnect(), c.disconnect());
			};
		}(this.ctx, e, a, i ?? void 0), a.connect(this.sfxBus), window.setTimeout(() => {
			i ? i.releasePannerNode(a) : a.disconnect();
		}, 900);
	}
	async playCaptureByWeight(e) {
		var t, n, i;
		this.enabled && this.ctx && (await this.resume(), "Q" === e || "R" === e ? (t = this.ctx, n = this.sfxBus, i = this.voicePool, zt(t, t.currentTime, n, "massive", i)) : on(this.ctx, this.sfxBus, this.voicePool));
	}
	async playCheckmate() {
		this.enabled && this.ctx && (await this.resume(), function(e, t, n) {
			const i = e.currentTime;
			Xt(e, 110, i, 3, t, n), qt(e, 220, 110, 8, i, 1.5, t, n);
		}(this.ctx, this.sfxBus, this.voicePool));
	}
	async playDeath() {
		this.enabled && this.ctx && (await this.resume(), function(e, t, n) {
			const i = e.currentTime, a = e.createBufferSource(), r = .8 * e.sampleRate, s = e.createBuffer(1, r, e.sampleRate), o = s.getChannelData(0);
			for (let d = 0; d < r; d++) o[d] = 2 * Math.random() - 1;
			a.buffer = s;
			const c = n ? n.getFilterNode() : e.createBiquadFilter();
			c.type = "lowpass", c.frequency.setValueAtTime(5e3, i), c.frequency.exponentialRampToValueAtTime(200, i + .8);
			const l = n ? n.getGainNode() : e.createGain();
			l.gain.setValueAtTime(0, i), l.gain.linearRampToValueAtTime(.3, i + .01), l.gain.exponentialRampToValueAtTime(1e-4, i + .8), a.connect(c).connect(l).connect(t), a.start(i), a.onended = () => {
				n ? (n.releaseFilterNode(c, 0), n.releaseGainNode(l, 0)) : (a.disconnect(), c.disconnect(), l.disconnect());
			};
		}(this.ctx, this.sfxBus, this.voicePool));
	}
	async playGameStart() {
		this.enabled && this.ctx && (await this.resume(), function(e, t, n) {
			const i = e.currentTime;
			zt(e, i, t, "heavy", n), Xt(e, 220, i, 3, t, n);
		}(this.ctx, this.sfxBus, this.voicePool));
	}
	async playTurnTick() {
		var e, t, n;
		this.enabled && this.ctx && (await this.resume(), e = this.ctx, t = this.sfxBus, n = this.voicePool, qt(e, 2e3, 400, 1, e.currentTime, .05, t, n));
	}
	async playComboHit(e) {
		this.enabled && this.ctx && (await this.resume(), function(e, t, n, i) {
			const a = e.currentTime, r = 440 * Math.pow(1.05946, Math.min(t, 12));
			qt(e, r, 2 * r, 2 + Math.min(.5 * t, 5), a, .4, n, i);
		}(this.ctx, e, this.sfxBus, this.voicePool));
	}
	async playGoldPenalty() {
		this.enabled && this.ctx && (await this.resume(), function(e, t, n) {
			const i = e.currentTime;
			qt(e, 200, 100, 5, i, .6, t, n);
			const a = e.createOscillator();
			a.type = "square", a.frequency.setValueAtTime(400, i), a.frequency.exponentialRampToValueAtTime(50, i + .6);
			const r = n ? n.getGainNode() : e.createGain();
			r.gain.setValueAtTime(0, i), r.gain.linearRampToValueAtTime(.1, i + .005), r.gain.exponentialRampToValueAtTime(1e-4, i + .6), a.connect(r).connect(t), a.start(i), a.stop(i + .6), a.onended = () => {
				n ? n.releaseGainNode(r, 0) : (a.disconnect(), r.disconnect());
			};
		}(this.ctx, this.sfxBus, this.voicePool));
	}
	async playNetworkFreeze() {
		this.enabled && this.ctx && (await this.resume(), function(e, t, n) {
			const i = e.currentTime, a = .5, r = e.createBufferSource(), s = e.sampleRate * a, o = e.createBuffer(1, s, e.sampleRate), c = o.getChannelData(0);
			for (let m = 0; m < s; m++) c[m] = (Math.random() > .5 ? 1 : -1) * (m % 20 == 0 ? 1 : .1);
			r.buffer = o;
			const l = n ? n.getFilterNode() : e.createBiquadFilter();
			l.type = "highpass", l.frequency.value = 3e3;
			const d = n ? n.getGainNode() : e.createGain();
			d.gain.setValueAtTime(0, i), d.gain.linearRampToValueAtTime(.3, i + .01), d.gain.exponentialRampToValueAtTime(1e-4, i + a), r.connect(l).connect(d).connect(t), r.start(i);
			const E = e.createOscillator();
			E.type = "sawtooth", E.frequency.setValueAtTime(880, i), E.frequency.exponentialRampToValueAtTime(110, i + a);
			const u = n ? n.getGainNode() : e.createGain();
			u.gain.setValueAtTime(0, i), u.gain.linearRampToValueAtTime(.2, i + .01), u.gain.exponentialRampToValueAtTime(1e-4, i + a), E.connect(u).connect(t), E.start(i), E.stop(i + a), E.onended = () => {
				n ? (n.releaseFilterNode(l, 0), n.releaseGainNode(d, 0), n.releaseGainNode(u, 0)) : (r.disconnect(), l.disconnect(), d.disconnect(), E.disconnect(), u.disconnect());
			};
		}(this.ctx, this.sfxBus, this.voicePool));
	}
	async playNetworkRestore() {
		this.enabled && this.ctx && (await this.resume(), cn(this.ctx, this.sfxBus, this.voicePool));
	}
	async playBossEntrance() {
		this.enabled && this.ctx && (await this.resume(), function(e, t, n) {
			const i = e.currentTime;
			zt(e, i, t, "massive", n), Xt(e, 65.41, i, 4, t, n);
		}(this.ctx, this.sfxBus, this.voicePool));
	}
	async playBossDefeat() {
		this.enabled && this.ctx && (await this.resume(), function(e, t, n) {
			const i = e.currentTime;
			zt(e, i, t, "massive", n);
			const a = [], r = [];
			[
				261.63,
				329.63,
				392,
				523.25
			].forEach((s, o) => {
				const c = e.createOscillator();
				c.type = "sawtooth", c.frequency.value = s;
				const l = n ? n.getGainNode() : e.createGain();
				n && r.push(l), l.gain.setValueAtTime(0, i + .1 * o), l.gain.linearRampToValueAtTime(.1, i + .1 * o + .1), l.gain.exponentialRampToValueAtTime(.01, i + .1 * o + 3), c.connect(l).connect(t), c.start(i + .1 * o), c.stop(i + .1 * o + 3), a.push(c);
			}), a.length > 0 && (a[a.length - 1].onended = () => {
				n ? r.forEach((e) => n.releaseGainNode(e, 0)) : a.forEach((e) => e.disconnect());
			});
		}(this.ctx, this.sfxBus, this.voicePool));
	}
	playConveyor() {
		this.enabled && this.ctx && function(e, t) {
			const n = e.currentTime, i = e.createBufferSource(), a = .5 * e.sampleRate, r = e.createBuffer(1, a, e.sampleRate), s = r.getChannelData(0);
			for (let E = 0; E < a; E++) s[E] = 2 * Math.random() - 1;
			i.buffer = r;
			const o = e.createBiquadFilter();
			o.type = "lowpass", o.frequency.value = 400;
			const c = e.createOscillator();
			c.type = "sine", c.frequency.value = 8;
			const l = e.createGain();
			l.gain.value = 300, c.connect(l).connect(o.frequency);
			const d = e.createGain();
			d.gain.setValueAtTime(0, n), d.gain.linearRampToValueAtTime(.3, n + .1), d.gain.exponentialRampToValueAtTime(.01, n + .5), i.connect(o).connect(d).connect(t), c.start(n), c.stop(n + .5), i.start(n);
		}(this.ctx, this.sfxBus);
	}
	playLaserGrid() {
		var e, t;
		this.enabled && this.ctx && (e = this.ctx, t = this.sfxBus, qt(e, 4e3, 150, 5, e.currentTime, .4, t));
	}
	playWormhole() {
		this.enabled && this.ctx && function(e, t) {
			const n = e.currentTime, i = e.createStereoPanner();
			i.pan.setValueAtTime(-.8, n), i.pan.linearRampToValueAtTime(.8, n + .8), Zt(e, n, .8, 200, 3e3, i), i.connect(t);
		}(this.ctx, this.sfxBus);
	}
	playLandmine() {
		var e, t;
		this.enabled && this.ctx && (e = this.ctx, t = this.sfxBus, zt(e, e.currentTime, t, "heavy"));
	}
	playMudSwamp() {
		this.enabled && this.ctx && function(e, t) {
			const n = e.currentTime, i = e.createBufferSource(), a = .6 * e.sampleRate, r = e.createBuffer(1, a, e.sampleRate), s = r.getChannelData(0);
			for (let l = 0; l < a; l++) s[l] = 2 * Math.random() - 1;
			i.buffer = r;
			const o = e.createBiquadFilter();
			o.type = "lowpass", o.frequency.setValueAtTime(150, n), o.frequency.exponentialRampToValueAtTime(800, n + .3);
			const c = e.createGain();
			c.gain.setValueAtTime(0, n), c.gain.linearRampToValueAtTime(.4, n + .2), c.gain.exponentialRampToValueAtTime(.01, n + .6), i.connect(o).connect(c).connect(t), i.start(n);
		}(this.ctx, this.sfxBus);
	}
	playFaradayCage() {
		this.enabled && this.ctx && function(e, t) {
			const n = e.currentTime, i = e.createBufferSource(), a = .3 * e.sampleRate, r = e.createBuffer(1, a, e.sampleRate), s = r.getChannelData(0);
			for (let d = 0; d < a; d++) s[d] = 2 * Math.random() - 1;
			i.buffer = r;
			const o = e.createGain();
			o.gain.setValueAtTime(0, n), o.gain.linearRampToValueAtTime(.3, n + .2), o.gain.linearRampToValueAtTime(1e-4, n + .215), i.connect(o).connect(t), i.start(n);
			const c = e.createOscillator();
			c.type = "sawtooth", c.frequency.value = 60;
			const l = e.createGain();
			l.gain.setValueAtTime(0, n + .21), l.gain.linearRampToValueAtTime(.1, n + .3), l.gain.exponentialRampToValueAtTime(.01, n + 1), c.connect(l).connect(t), c.start(n + .21), c.stop(n + 1);
		}(this.ctx, this.sfxBus);
	}
	playShield() {
		var e, t;
		this.enabled && this.ctx && (e = this.ctx, t = this.sfxBus, Zt(e, e.currentTime, .5, 3e3, 500, t));
	}
	playTeleport() {
		this.enabled && this.ctx && function(e, t) {
			const n = e.currentTime;
			[
				440,
				660,
				880
			].forEach((i, a) => {
				const r = e.createOscillator();
				r.type = "sine", r.frequency.value = i;
				const s = e.createGain();
				s.gain.setValueAtTime(0, n + .05 * a), s.gain.linearRampToValueAtTime(.1, n + .05 * a + .02), s.gain.exponentialRampToValueAtTime(.01, n + .05 * a + .2), r.connect(s).connect(t), r.start(n + .05 * a), r.stop(n + .05 * a + .2);
			});
		}(this.ctx, this.sfxBus);
	}
	playElectricShock() {
		this.enabled && this.ctx && function(e, t) {
			const n = e.currentTime;
			for (let i = 0; i < 3; i++) qt(e, 3e3, 200, 10, n + .1 * i, .15, t);
		}(this.ctx, this.sfxBus);
	}
	playHazardWarning() {
		this.enabled && this.ctx && function(e, t) {
			const n = e.currentTime;
			[600, 800].forEach((i, a) => {
				const r = e.createOscillator();
				r.type = "square", r.frequency.value = i;
				const s = e.createGain();
				s.gain.setValueAtTime(0, n + .2 * a), s.gain.linearRampToValueAtTime(.1, n + .2 * a + .05), s.gain.exponentialRampToValueAtTime(.01, n + .2 * a + .3);
				const o = e.createBiquadFilter();
				o.type = "lowpass", o.frequency.setValueAtTime(2e3, n + .2 * a), o.frequency.exponentialRampToValueAtTime(400, n + .2 * a + .3), r.connect(o).connect(s).connect(t), r.start(n + .2 * a), r.stop(n + .2 * a + .3);
			});
		}(this.ctx, this.sfxBus);
	}
	playModalOpen() {
		if (!this.enabled || !this.ctx) return;
		const e = this.ctx.currentTime, t = this.ctx.createOscillator(), n = this.ctx.createGain();
		t.type = "sine", t.frequency.setValueAtTime(200, e), t.frequency.exponentialRampToValueAtTime(800, e + .1), n.gain.setValueAtTime(0, e), n.gain.linearRampToValueAtTime(.1, e + .05), n.gain.exponentialRampToValueAtTime(.01, e + .2), t.connect(n).connect(this.sfxBus), t.start(e), t.stop(e + .2);
	}
	playModalClose() {
		if (!this.enabled || !this.ctx) return;
		const e = this.ctx.currentTime, t = this.ctx.createOscillator(), n = this.ctx.createGain();
		t.type = "sine", t.frequency.setValueAtTime(800, e), t.frequency.exponentialRampToValueAtTime(200, e + .1), n.gain.setValueAtTime(0, e), n.gain.linearRampToValueAtTime(.1, e + .05), n.gain.exponentialRampToValueAtTime(.01, e + .2), t.connect(n).connect(this.sfxBus), t.start(e), t.stop(e + .2);
	}
	playCardReveal() {
		if (!this.enabled || !this.ctx) return;
		const e = this.ctx.currentTime;
		en(this.ctx, 1200, e, this.sfxBus), en(this.ctx, 1600, e + .05, this.sfxBus);
	}
	playEquip() {
		if (!this.enabled || !this.ctx) return;
		const e = this.ctx.currentTime, t = this.ctx.createOscillator();
		t.type = "square", t.frequency.setValueAtTime(800, e), t.frequency.setValueAtTime(1200, e + .05);
		const n = this.ctx.createGain();
		n.gain.setValueAtTime(0, e), n.gain.linearRampToValueAtTime(.1, e + .02), n.gain.exponentialRampToValueAtTime(.01, e + .2), t.connect(n).connect(this.sfxBus), t.start(e), t.stop(e + .2);
	}
	playUnequip() {
		if (!this.enabled || !this.ctx) return;
		const e = this.ctx.currentTime, t = this.ctx.createOscillator();
		t.type = "square", t.frequency.setValueAtTime(1200, e), t.frequency.setValueAtTime(800, e + .05);
		const n = this.ctx.createGain();
		n.gain.setValueAtTime(0, e), n.gain.linearRampToValueAtTime(.1, e + .02), n.gain.exponentialRampToValueAtTime(.01, e + .2), t.connect(n).connect(this.sfxBus), t.start(e), t.stop(e + .2);
	}
	playGoldCollect() {
		if (!this.enabled || !this.ctx) return;
		const e = this.ctx.currentTime;
		[
			1200,
			1600,
			2e3
		].forEach((t, n) => {
			const i = this.ctx.createOscillator(), a = this.ctx.createGain();
			i.type = "sine", i.frequency.value = t, a.gain.setValueAtTime(0, e + .03 * n), a.gain.linearRampToValueAtTime(.05, e + .03 * n + .01), a.gain.exponentialRampToValueAtTime(.01, e + .03 * n + .1), i.connect(a).connect(this.sfxBus), i.start(e + .03 * n), i.stop(e + .03 * n + .1);
		});
	}
	playError() {
		if (!this.enabled || !this.ctx) return;
		const e = this.ctx.currentTime;
		[150, 160].forEach((t, n) => {
			const i = this.ctx.createOscillator();
			i.type = "sawtooth", i.frequency.value = t;
			const a = this.ctx.createGain();
			a.gain.setValueAtTime(0, e + .1 * n), a.gain.linearRampToValueAtTime(.1, e + .1 * n + .02), a.gain.exponentialRampToValueAtTime(.01, e + .1 * n + .15), i.connect(a).connect(this.sfxBus), i.start(e + .1 * n), i.stop(e + .1 * n + .15);
		});
	}
	playHover() {
		if (!this.enabled || !this.ctx) return;
		const e = this.ctx.currentTime, t = this.ctx.createOscillator(), n = this.ctx.createGain();
		t.type = "sine", t.frequency.value = 3e3, n.gain.setValueAtTime(0, e), n.gain.linearRampToValueAtTime(.005, e + .01), n.gain.exponentialRampToValueAtTime(.001, e + .05), t.connect(n).connect(this.sfxBus), t.start(e), t.stop(e + .05);
	}
	playTabSwitch() {
		if (!this.enabled || !this.ctx) return;
		const e = this.ctx.currentTime, t = this.ctx.createOscillator(), n = this.ctx.createGain();
		t.type = "triangle", t.frequency.setValueAtTime(600, e), t.frequency.setValueAtTime(800, e + .03), n.gain.setValueAtTime(0, e), n.gain.linearRampToValueAtTime(.05, e + .01), n.gain.exponentialRampToValueAtTime(.01, e + .08), t.connect(n).connect(this.sfxBus), t.start(e), t.stop(e + .08);
	}
	async playEndgameSequence(e) {
		if (!this.ctx || !this.enabled) return;
		const t = this.ctx.currentTime;
		if (this.endgameDuck = .35, this.applyMusicGain(), this.endgameRestoreTimer && window.clearTimeout(this.endgameRestoreTimer), this.endgameRestoreTimer = window.setTimeout(() => {
			this.endgameDuck = 1, this.endgameRestoreTimer = null, this.applyMusicGain();
		}, 6e3), e) this.triggerResolution();
		else {
			const e = this.ctx.createOscillator();
			e.frequency.setValueAtTime(110, t), e.frequency.exponentialRampToValueAtTime(27.5, t + 4);
			const n = this.ctx.createGain();
			n.gain.setValueAtTime(.5, t), n.gain.exponentialRampToValueAtTime(.001, t + 4), e.connect(n).connect(this.reverbNode), e.start(t), e.stop(t + 4);
		}
	}
	async playCapture() {
		var e, t, n;
		this.enabled && this.ctx && (await this.resume(), e = this.ctx, t = this.sfxBus, n = this.voicePool, on(e, t, n));
	}
	async playCheck() {
		if (!this.enabled || !this.ctx) return;
		var e, t, n;
		await this.resume(), e = this.ctx, t = this.sfxBus, qt(e, 400, 200, 3, e.currentTime, .6, t, n);
		const i = this.ctx.currentTime, a = this.globalFilter?.frequency.value ?? 2e4;
		this.globalFilter?.frequency.cancelScheduledValues(i), this.globalFilter?.frequency.setValueAtTime(a, i), this.globalFilter?.frequency.setTargetAtTime(400, i, .2), this.globalFilter?.frequency.setTargetAtTime(2e4, i + .8, 2);
	}
	playSlotHype() {
		if (!this.ctx || !this.sfxBus) return;
		const e = this.ctx.currentTime;
		[
			220,
			277,
			330,
			440,
			554,
			659,
			880
		].forEach((t, n) => {
			const i = this.ctx.createOscillator(), a = this.ctx.createGain();
			i.frequency.setValueAtTime(t, e + .1 * n), a.gain.setValueAtTime(0, e + .1 * n), a.gain.linearRampToValueAtTime(.2, e + .1 * n + .05), a.gain.exponentialRampToValueAtTime(.001, e + .1 * n + .2), i.connect(a).connect(this.sfxBus), i.start(e + .1 * n), i.stop(e + .1 * n + .2);
		});
	}
	playDeflate() {
		if (!this.ctx || !this.sfxBus) return;
		const e = this.ctx.currentTime, t = this.ctx.createOscillator(), n = this.ctx.createGain();
		t.frequency.setValueAtTime(440, e), t.frequency.exponentialRampToValueAtTime(110, e + .8), n.gain.setValueAtTime(0, e), n.gain.linearRampToValueAtTime(.3, e + .01), n.gain.linearRampToValueAtTime(0, e + .8), t.connect(n).connect(this.sfxBus), t.start(), t.stop(e + .8);
	}
	async playUpgrade() {
		if (!this.enabled || !this.ctx) return;
		await this.resume();
		const e = this.ctx.currentTime;
		[
			523.25,
			659.25,
			783.99,
			987.77,
			1174.66
		].forEach((t, n) => {
			const i = this.ctx.createOscillator(), a = this.ctx.createGain();
			i.frequency.setValueAtTime(t, e + .05 * n), a.gain.setValueAtTime(0, e + .05 * n), a.gain.linearRampToValueAtTime(.1, e + .05 * n + .02), a.gain.exponentialRampToValueAtTime(.001, e + .05 * n + .4), i.connect(a).connect(this.sfxBus), i.start(e + .05 * n), i.stop(e + .05 * n + .4);
		});
	}
	playAchievement() {
		if (!this.enabled || !this.ctx) return;
		this.playUpgrade();
		const e = this.ctx.currentTime;
		Xt(this.ctx, 440, e, 2, this.sfxBus);
	}
	playUIClick() {
		this.ctx && this.enabled && (this.resume(), function(e, t, n) {
			const i = e.currentTime, a = e.createOscillator(), r = n ? n.getGainNode() : e.createGain();
			a.type = "sine", a.frequency.setValueAtTime(2400, i), a.frequency.exponentialRampToValueAtTime(800, i + .05), r.gain.setValueAtTime(0, i), r.gain.linearRampToValueAtTime(.15, i + .002), r.gain.exponentialRampToValueAtTime(.001, i + .08), a.connect(r).connect(t), a.start(i), a.stop(i + .08), a.onended = () => {
				n ? n.releaseGainNode(r, 0) : (a.disconnect(), r.disconnect());
			};
		}(this.ctx, this.sfxBus));
	}
	async playUINav() {
		if (!this.enabled || !this.ctx) return;
		const e = this.ctx.currentTime, t = this.ctx.createOscillator(), n = this.ctx.createGain();
		t.type = "sine", t.frequency.setValueAtTime(2400, e), n.gain.setValueAtTime(0, e), n.gain.linearRampToValueAtTime(.015, e + .003), n.gain.exponentialRampToValueAtTime(.001, e + .05), t.connect(n).connect(this.sfxBus), t.start(e), t.stop(e + .05);
	}
	async playDeploy() {
		if (!this.enabled) return;
		await this.init(), await this.resume();
		const e = this.ctx.currentTime, t = this.ctx.createOscillator();
		t.type = "sine", t.frequency.setValueAtTime(880, e), t.frequency.exponentialRampToValueAtTime(1760, e + .1);
		const n = this.ctx.createGain();
		n.gain.setValueAtTime(0, e), n.gain.linearRampToValueAtTime(.1, e + .01), n.gain.exponentialRampToValueAtTime(.001, e + .2), t.connect(n).connect(this.sfxBus), t.start(e), t.stop(e + .2);
	}
	async playWin() {
		if (!this.enabled) return;
		await this.init(), await this.resume(), this.setGameState("playing");
		const e = this.ctx.currentTime;
		[
			261.63,
			329.63,
			392,
			523.25
		].forEach((t, n) => {
			const i = this.ctx.createOscillator(), a = this.ctx.createGain(), r = e + .1 * n;
			i.type = "triangle", i.frequency.setValueAtTime(t, r), a.gain.setValueAtTime(0, r), a.gain.linearRampToValueAtTime(.1, r + .05), a.gain.exponentialRampToValueAtTime(.001, r + 2), i.connect(a).connect(this.sfxBus), i.start(r), i.stop(r + 2);
		});
	}
	enable() {
		this.enabled = !0;
	}
	disable() {
		this.enabled = !1, this.musicPlaying = !1, this.timerID && (window.clearTimeout(this.timerID), this.timerID = null), "undefined" != typeof document && document.removeEventListener("visibilitychange", this.handleVisibilityChange), this.endgameRestoreTimer && (window.clearTimeout(this.endgameRestoreTimer), this.endgameRestoreTimer = null);
		try {
			this.ghostOsc1?.stop();
		} catch {}
		try {
			this.ghostOsc1?.disconnect();
		} catch {}
		try {
			this.ghostOsc2?.stop();
		} catch {}
		try {
			this.ghostOsc2?.disconnect();
		} catch {}
		try {
			this.ghostGain?.disconnect();
		} catch {}
		this.ghostOsc1 = null, this.ghostOsc2 = null, this.ghostGain = null, this.isGhostInit = !1;
		try {
			this.tapeLfo?.stop();
		} catch {}
		try {
			this.tapeLfo?.disconnect();
		} catch {}
		if (this.tapeLfo = null, this.voicePool = null, this.masterBus = null, this.musicBus = null, this.sfxBus = null, this.drumBus = null, this.chordBus = null, this.bassBus = null, this.arpBus = null, this.leadBus = null, this.limiter = null, this.saturator = null, this.reverbNode = null, this.globalFilter = null, this.reverbWet = null, this.reverbSend = null, this.visibilityGain = null, this.mixMeters.clear(), this.delaySend = null, this.delayNode = null, this.sidechainNode = null, this.arpFilter = null, this.hatBuffer = null, this.currentStep = 0, this.nextNoteTime = 0, this.phaseStepCounter = 0, this.lastResolutionTime = 0, this.contextDuck = 1, this.endgameDuck = 1, this.visibilityDuck = 1, this.isDocumentHidden = !1, this.scheduleAheadTime = .5, this.forcePadOnNextStep = !1, this.lastPadStartTime = 0, this.lastPadDuration = 0, this.isSpecialMoment = !1, this.specialMomentSteps = 0, this.ctx) {
			const e = this.ctx;
			this.ctx = null, e.close().catch((e) => {});
		}
	}
};
new On();
const hn = new On(), Rn = {
	tempo: 94,
	motifLength: 256,
	arpLength: 16,
	initialDensities: {
		arp: .5,
		lead: .2,
		bass: .25
	},
	instSettings: {
		leadOsc: "sawtooth",
		padOsc: "sine"
	},
	leadPresence: {
		ambient: 1,
		movement: 1,
		focused: 1,
		climax: 1,
		release: 1
	},
	silenceChance: {
		ambient: 0,
		movement: 0,
		focused: 0,
		climax: 0,
		release: 0
	},
	leadExpression: {
		ambient: .9,
		movement: .96,
		focused: 1,
		climax: 1.06,
		release: .84
	},
	padSpread: {
		ambient: .5,
		movement: .35,
		focused: .2,
		climax: .25,
		release: .55
	},
	harmonies: {
		ambient: [
			[
				"C3",
				"Eb3",
				"G3"
			],
			[
				"Ab2",
				"C3",
				"Eb3"
			],
			[
				"Eb3",
				"G3",
				"Bb3"
			],
			[
				"Bb2",
				"D3",
				"F3"
			]
		],
		movement: [
			[
				"C3",
				"G3",
				"Eb4"
			],
			[
				"Ab2",
				"Eb3",
				"C4"
			],
			[
				"Eb3",
				"Bb3",
				"G4"
			],
			[
				"Bb2",
				"F3",
				"D4"
			]
		],
		focused: [
			[
				"C3",
				"G3",
				"C4",
				"Eb4"
			],
			[
				"Ab2",
				"Eb3",
				"Ab3",
				"C4"
			],
			[
				"Eb3",
				"Bb3",
				"Eb4",
				"G4"
			],
			[
				"Bb2",
				"F3",
				"Bb3",
				"D4"
			]
		],
		climax: [
			[
				"C3",
				"G3",
				"Eb4",
				"G4"
			],
			[
				"Ab2",
				"Eb3",
				"C4",
				"Eb4"
			],
			[
				"Db3",
				"Ab3",
				"F4",
				"Ab4"
			],
			[
				"Bb2",
				"F3",
				"D4",
				"F4"
			]
		],
		release: [[
			"C3",
			"G3",
			"C4"
		], [
			"C3",
			"G3",
			"C4"
		]]
	},
	motifBank: [
		{
			0: "G4:0.7",
			8: "F4:0.6",
			16: "Eb4:0.6",
			24: "D4:0.5",
			32: "C4:0.6",
			40: "Eb4:0.45",
			48: "G4:0.7",
			56: "F4:0.5",
			60: "Eb4:0.4",
			66: "A4:0.3",
			68: "Bb4:0.8",
			72: "Ab4:0.7",
			76: "G4:0.5",
			80: "F4:0.4",
			88: "F4:0.5",
			96: "F4:0.6",
			104: "C4:0.4",
			112: "D4:0.5",
			120: "C4:0.5",
			124: "D4:0.4",
			132: "G4:0.6",
			134: "G4:0.5",
			136: "F4:0.6",
			138: "Eb4:0.6",
			140: "F4:0.7",
			142: "G4:0.7",
			144: "Eb5:0.95",
			152: "C5:0.7",
			158: "Bb4:0.55",
			164: "Bb4:0.7",
			166: "Bb4:0.6",
			168: "Ab4:0.7",
			170: "G4:0.6",
			172: "Ab4:0.7",
			174: "Bb4:0.7",
			176: "F4:0.6",
			184: "Ab4:0.5",
			190: "G4:0.45",
			196: "C5:0.8",
			198: "C5:0.7",
			200: "Bb4:0.8",
			202: "Ab4:0.7",
			204: "Bb4:0.8",
			206: "C5:0.8",
			208: "Eb5:1.0",
			216: "G4:0.5",
			222: "Ab4:0.45",
			228: "Bb4:0.7",
			230: "Ab4:0.6",
			232: "G4:0.5",
			234: "F4:0.4",
			236: "Eb4:0.4",
			238: "D4:0.3",
			240: "F4:0.4",
			244: "Eb4:0.35",
			252: "D4:0.3"
		},
		{
			0: "G4:0.55",
			8: "F4:0.5",
			16: "Eb4:0.5",
			24: "D4:0.45",
			32: "C4:0.55",
			40: "Eb4:0.4",
			48: "G4:0.55",
			56: "F4:0.45",
			64: "Eb4:0.45",
			72: "D4:0.4",
			80: "C4:0.5",
			88: "Bb3:0.4",
			96: "F4:0.45",
			104: "Eb4:0.4",
			112: "D4:0.4",
			120: "C4:0.5",
			128: "G4:0.5",
			136: "F4:0.45",
			144: "Eb4:0.5",
			152: "D4:0.4",
			160: "C4:0.45",
			168: "Bb3:0.4",
			176: "Ab3:0.45",
			184: "G3:0.4",
			192: "F4:0.5",
			200: "Eb4:0.5",
			208: "D4:0.45",
			216: "C4:0.5",
			224: "G4:0.5",
			232: "F4:0.45",
			240: "Eb4:0.45",
			248: "D4:0.4",
			252: "C4:0.45"
		},
		{
			0: "G4:0.5",
			8: "Eb4:0.45",
			16: "D4:0.4",
			24: "C4:0.5",
			32: "G3:0.45",
			40: "C4:0.4",
			48: "Eb4:0.5",
			56: "D4:0.4",
			64: "C4:0.45",
			72: "Bb3:0.4",
			80: "Ab3:0.45",
			88: "G3:0.4",
			96: "C4:0.5",
			104: "Eb4:0.45",
			112: "G4:0.5",
			120: "F4:0.45",
			128: "Eb4:0.5",
			136: "D4:0.4",
			144: "C4:0.5",
			152: "Bb3:0.4",
			160: "Ab3:0.45",
			168: "G3:0.4",
			176: "F3:0.4",
			184: "G3:0.45",
			192: "Bb3:0.5",
			200: "C4:0.45",
			208: "Eb4:0.5",
			216: "D4:0.45",
			224: "C4:0.5",
			232: "Bb3:0.4",
			240: "Ab3:0.45",
			248: "G3:0.4",
			252: "C4:0.45"
		},
		{
			0: "C4:0.5",
			8: "Eb4:0.45",
			16: "G4:0.5",
			24: "C5:0.5",
			32: "G4:0.4",
			40: "Eb4:0.4",
			48: "C4:0.45",
			56: "Eb4:0.4",
			64: "Ab3:0.5",
			72: "C4:0.45",
			80: "Eb4:0.5",
			88: "Ab4:0.5",
			96: "Eb4:0.4",
			104: "C4:0.4",
			112: "Ab3:0.45",
			120: "C4:0.4",
			128: "Bb3:0.5",
			136: "D4:0.45",
			144: "F4:0.5",
			152: "Bb4:0.5",
			160: "F4:0.4",
			168: "D4:0.4",
			176: "Bb3:0.45",
			184: "D4:0.4",
			192: "C4:0.5",
			200: "G4:0.45",
			208: "Eb5:0.7",
			216: "C5:0.45",
			224: "G4:0.4",
			232: "Eb4:0.4",
			240: "C4:0.45",
			248: "G3:0.4"
		},
		{
			0: "G4:0.45",
			2: "Ab4:0.35",
			4: "C5:0.55",
			8: "Eb5:0.6",
			10: "D5:0.42",
			12: "C5:0.5",
			16: "Bb4:0.42",
			18: "C5:0.36",
			20: "G4:0.4",
			24: "Ab4:0.42",
			28: "G4:0.36",
			32: "Ab4:0.5",
			34: "Bb4:0.36",
			36: "C5:0.55",
			40: "Eb5:0.6",
			42: "F5:0.45",
			44: "Eb5:0.52",
			48: "C5:0.46",
			52: "Bb4:0.4",
			56: "Ab4:0.42",
			60: "G4:0.38",
			64: "G4:0.48",
			66: "Ab4:0.36",
			68: "Bb4:0.5",
			72: "Eb5:0.58",
			76: "G5:0.68",
			78: "F5:0.5",
			80: "Eb5:0.55",
			84: "D5:0.46",
			88: "Bb4:0.4",
			92: "G4:0.38",
			96: "F4:0.44",
			100: "Bb4:0.5",
			104: "D5:0.55",
			108: "F5:0.58",
			110: "Eb5:0.45",
			112: "D5:0.5",
			116: "C5:0.46",
			120: "Bb4:0.4",
			124: "G4:0.36",
			128: "G4:0.46",
			130: "Ab4:0.36",
			132: "C5:0.54",
			136: "Eb5:0.6",
			138: "F5:0.44",
			140: "Eb5:0.52",
			144: "D5:0.48",
			146: "Eb5:0.4",
			148: "C5:0.5",
			152: "Bb4:0.42",
			156: "Ab4:0.44",
			160: "Ab4:0.48",
			162: "Bb4:0.36",
			164: "C5:0.54",
			168: "Eb5:0.6",
			170: "F5:0.46",
			172: "Eb5:0.54",
			176: "C5:0.48",
			180: "Bb4:0.42",
			184: "Ab4:0.44",
			188: "G4:0.38",
			192: "G4:0.48",
			194: "Ab4:0.38",
			196: "Bb4:0.5",
			200: "Eb5:0.58",
			204: "G5:0.7",
			206: "F5:0.52",
			208: "Eb5:0.56",
			212: "D5:0.46",
			216: "Bb4:0.4",
			220: "G4:0.36",
			224: "F4:0.44",
			228: "Bb4:0.5",
			232: "D5:0.54",
			236: "F5:0.6",
			238: "Eb5:0.46",
			240: "D5:0.5",
			244: "C5:0.46",
			248: "Bb4:0.4",
			252: "G4:0.36"
		},
		{
			0: "G3:0.45",
			2: "Bb3:0.3",
			4: "C4:0.5",
			8: "Eb4:0.48",
			10: "D4:0.3",
			12: "D4:0.36",
			16: "C4:0.46",
			18: "Bb3:0.3",
			20: "Bb3:0.38",
			24: "Ab3:0.42",
			28: "G3:0.36",
			32: "Ab3:0.46",
			34: "G3:0.3",
			36: "C4:0.5",
			40: "Eb4:0.5",
			44: "G4:0.5",
			48: "F4:0.42",
			52: "Eb4:0.44",
			56: "C4:0.4",
			60: "Ab3:0.38",
			64: "G3:0.46",
			66: "Bb3:0.3",
			68: "Bb3:0.44",
			72: "Eb4:0.5",
			76: "G4:0.52",
			80: "F4:0.44",
			84: "Eb4:0.46",
			88: "D4:0.4",
			92: "Bb3:0.38",
			96: "F3:0.44",
			100: "Bb3:0.46",
			104: "D4:0.5",
			108: "F4:0.5",
			112: "Eb4:0.46",
			116: "D4:0.42",
			120: "C4:0.44",
			124: "Bb3:0.36",
			128: "C4:0.46",
			130: "D4:0.32",
			132: "Eb4:0.5",
			136: "G4:0.54",
			140: "Ab4:0.46",
			144: "G4:0.5",
			148: "Eb4:0.44",
			152: "D4:0.38",
			156: "C4:0.42",
			160: "Ab3:0.44",
			164: "C4:0.48",
			168: "Eb4:0.5",
			172: "G4:0.5",
			176: "F4:0.44",
			180: "Eb4:0.42",
			184: "C4:0.4",
			188: "Bb3:0.36",
			192: "G3:0.44",
			196: "Bb3:0.44",
			200: "Eb4:0.48",
			204: "G4:0.52",
			208: "F4:0.44",
			212: "Eb4:0.44",
			216: "D4:0.4",
			220: "Bb3:0.38",
			224: "F3:0.42",
			228: "Bb3:0.44",
			232: "D4:0.48",
			236: "F4:0.48",
			240: "Eb4:0.44",
			244: "D4:0.4",
			248: "C4:0.44",
			252: "Bb3:0.36"
		},
		{
			0: "C4:0.7",
			2: "Eb4:0.65",
			4: "G4:0.75",
			6: "C5:0.85",
			8: "G4:0.7",
			10: "Eb4:0.6",
			12: "C4:0.7",
			14: "G3:0.55",
			16: "C4:0.72",
			18: "Eb4:0.68",
			20: "G4:0.78",
			22: "Bb4:0.82",
			24: "C5:0.9",
			26: "G4:0.72",
			28: "Eb4:0.65",
			30: "D4:0.6",
			32: "Ab3:0.7",
			34: "C4:0.68",
			36: "Eb4:0.75",
			38: "Ab4:0.82",
			40: "C5:0.9",
			42: "Ab4:0.72",
			44: "Eb4:0.66",
			46: "C4:0.62",
			48: "Ab3:0.7",
			50: "C4:0.68",
			52: "Eb4:0.76",
			54: "G4:0.8",
			56: "Ab4:0.86",
			58: "G4:0.7",
			60: "Eb4:0.64",
			62: "C4:0.6",
			64: "G3:0.7",
			66: "Bb3:0.66",
			68: "Eb4:0.76",
			70: "G4:0.82",
			72: "Bb4:0.88",
			74: "G4:0.72",
			76: "Eb4:0.66",
			78: "D4:0.62",
			80: "Eb4:0.75",
			82: "G4:0.8",
			84: "Bb4:0.86",
			86: "Eb5:0.94",
			88: "D5:0.82",
			90: "Bb4:0.72",
			92: "G4:0.66",
			94: "Eb4:0.62",
			96: "F3:0.7",
			98: "Bb3:0.66",
			100: "D4:0.74",
			102: "F4:0.8",
			104: "Bb4:0.88",
			106: "F4:0.72",
			108: "D4:0.66",
			110: "Bb3:0.62",
			112: "F4:0.78",
			114: "Bb4:0.84",
			116: "D5:0.92",
			118: "F5:0.96",
			120: "Eb5:0.84",
			122: "D5:0.76",
			124: "Bb4:0.68",
			126: "G4:0.62",
			128: "C4:0.8",
			129: "Eb4:0.7",
			130: "G4:0.8",
			131: "C5:0.9",
			132: "Bb4:0.78",
			134: "G4:0.72",
			136: "Eb4:0.7",
			138: "C4:0.68",
			140: "G3:0.64",
			142: "C4:0.72",
			144: "Eb4:0.78",
			146: "G4:0.84",
			148: "Bb4:0.9",
			150: "C5:0.96",
			152: "G4:0.78",
			154: "Eb4:0.7",
			156: "D4:0.66",
			158: "Eb4:0.74",
			160: "Ab3:0.78",
			161: "C4:0.7",
			162: "Eb4:0.8",
			163: "Ab4:0.88",
			164: "G4:0.78",
			166: "Eb4:0.72",
			168: "C4:0.7",
			170: "Ab3:0.66",
			172: "C4:0.74",
			174: "Eb4:0.8",
			176: "G4:0.86",
			178: "Ab4:0.9",
			180: "G4:0.78",
			182: "Eb4:0.7",
			184: "C4:0.68",
			186: "Bb3:0.64",
			188: "C4:0.72",
			190: "Eb4:0.78",
			192: "G3:0.78",
			193: "Bb3:0.7",
			194: "Eb4:0.8",
			195: "G4:0.86",
			196: "Bb4:0.92",
			198: "G4:0.76",
			200: "Eb4:0.7",
			202: "D4:0.66",
			204: "Eb4:0.76",
			206: "G4:0.82",
			208: "Bb4:0.9",
			210: "Eb5:0.98",
			212: "D5:0.86",
			214: "Bb4:0.76",
			216: "G4:0.7",
			218: "Eb4:0.66",
			220: "D4:0.7",
			222: "Eb4:0.78",
			224: "F3:0.78",
			225: "Bb3:0.7",
			226: "D4:0.8",
			227: "F4:0.86",
			228: "Bb4:0.92",
			230: "F4:0.76",
			232: "D4:0.7",
			234: "Bb3:0.66",
			236: "F4:0.8",
			238: "Bb4:0.86",
			240: "D5:0.94",
			242: "F5:1.0",
			244: "Eb5:0.9",
			246: "D5:0.8",
			248: "C5:0.74",
			250: "Bb4:0.7",
			252: "G4:0.64",
			254: "F4:0.6"
		},
		{
			0: "C5:0.9",
			1: "Bb4:0.75",
			2: "G4:0.7",
			4: "Eb4:0.68",
			6: "G4:0.78",
			8: "C5:0.9",
			10: "Bb4:0.78",
			12: "Ab4:0.7",
			14: "G4:0.68",
			16: "F4:0.72",
			18: "Ab4:0.78",
			20: "C5:0.86",
			21: "Bb4:0.74",
			22: "Ab4:0.7",
			24: "G4:0.76",
			26: "Eb4:0.68",
			28: "C4:0.66",
			30: "D4:0.7",
			32: "Ab4:0.82",
			33: "G4:0.72",
			34: "Eb4:0.7",
			36: "C4:0.68",
			38: "Eb4:0.76",
			40: "Ab4:0.86",
			42: "C5:0.9",
			44: "Bb4:0.8",
			46: "Ab4:0.72",
			48: "G4:0.76",
			50: "Eb4:0.7",
			52: "C4:0.68",
			54: "D4:0.72",
			56: "Eb4:0.8",
			58: "G4:0.84",
			60: "Ab4:0.86",
			62: "G4:0.74",
			64: "G4:0.78",
			66: "Bb4:0.82",
			68: "Eb5:0.94",
			70: "D5:0.84",
			72: "Bb4:0.76",
			74: "G4:0.7",
			76: "Eb4:0.68",
			78: "D4:0.64",
			80: "Eb4:0.78",
			82: "G4:0.84",
			84: "Bb4:0.9",
			85: "Ab4:0.78",
			86: "G4:0.72",
			88: "F4:0.68",
			90: "Eb4:0.7",
			92: "D4:0.74",
			94: "Eb4:0.8",
			96: "F4:0.82",
			97: "Eb4:0.72",
			98: "D4:0.7",
			100: "Bb3:0.66",
			102: "D4:0.74",
			104: "F4:0.82",
			106: "Bb4:0.9",
			108: "D5:0.94",
			110: "C5:0.82",
			112: "Bb4:0.78",
			114: "F4:0.7",
			116: "D4:0.68",
			118: "Eb4:0.74",
			120: "F4:0.82",
			122: "Bb4:0.88",
			124: "D5:0.94",
			126: "F5:1.0",
			128: "C5:0.92",
			130: "G4:0.72",
			131: "Ab4:0.78",
			132: "Bb4:0.82",
			134: "Eb5:0.94",
			136: "D5:0.82",
			138: "C5:0.78",
			140: "G4:0.7",
			142: "Ab4:0.76",
			144: "G4:0.8",
			146: "Eb4:0.7",
			148: "C4:0.66",
			150: "D4:0.72",
			152: "Eb4:0.8",
			154: "G4:0.84",
			156: "Bb4:0.88",
			158: "C5:0.94",
			160: "Ab4:0.84",
			161: "G4:0.74",
			162: "F4:0.7",
			164: "Eb4:0.72",
			166: "C4:0.66",
			168: "Ab3:0.68",
			170: "C4:0.74",
			172: "Eb4:0.8",
			174: "G4:0.86",
			176: "Ab4:0.9",
			178: "G4:0.78",
			180: "Eb4:0.7",
			182: "C4:0.68",
			184: "Bb3:0.7",
			186: "D4:0.74",
			188: "F4:0.82",
			190: "Ab4:0.88",
			192: "G4:0.86",
			194: "Bb4:0.9",
			196: "Eb5:0.98",
			198: "D5:0.86",
			200: "Bb4:0.78",
			202: "G4:0.72",
			204: "Eb4:0.7",
			206: "D4:0.66",
			208: "Eb5:0.96",
			210: "D5:0.84",
			212: "Bb4:0.78",
			214: "G4:0.72",
			216: "F4:0.7",
			218: "Eb4:0.68",
			220: "D4:0.72",
			222: "Eb4:0.8",
			224: "F4:0.84",
			226: "Bb4:0.9",
			228: "D5:0.96",
			230: "F5:1.0",
			232: "Eb5:0.9",
			234: "D5:0.8",
			236: "C5:0.76",
			238: "Bb4:0.72",
			240: "G4:0.68",
			242: "F4:0.64",
			244: "Eb4:0.68",
			246: "D4:0.72",
			248: "C4:0.7",
			250: "Bb3:0.64",
			252: "G3:0.6",
			254: "F3:0.58"
		}
	],
	motifIndexByPhase: {
		ambient: [
			4,
			5,
			2,
			1
		],
		movement: [
			1,
			7,
			0,
			3
		],
		focused: [
			6,
			0,
			7,
			1
		],
		climax: [
			7,
			6,
			0,
			3
		],
		release: [
			5,
			4,
			2,
			0
		]
	},
	counterBank: [
		{
			0: "G4",
			48: "Eb5",
			96: "Bb4",
			144: "C5",
			192: "Ab4",
			208: "G4",
			240: "C5"
		},
		{
			16: "G3",
			80: "Eb4",
			160: "C4",
			224: "G3"
		},
		{
			40: "G4",
			104: "C5",
			168: "Bb4",
			232: "G4"
		},
		{
			24: "Eb4",
			88: "Ab4",
			152: "F4",
			216: "C5"
		},
		{
			8: "G5",
			72: "Eb5",
			136: "Ab5",
			200: "G5"
		},
		{
			0: "C4",
			64: "G3",
			128: "Ab3",
			192: "Eb3"
		},
		{
			16: "C5",
			80: "Eb5",
			144: "G4",
			208: "Bb4"
		},
		{
			32: "Ab4",
			96: "F4",
			160: "C5",
			224: "Bb4"
		}
	],
	arpBank: [
		{
			0: "C3",
			2: "G3",
			4: "C4",
			7: "Eb4",
			8: "C3",
			10: "G3",
			13: "Eb4",
			15: "C4"
		},
		{
			0: "Ab2",
			2: "Eb3",
			4: "Ab3",
			7: "C4",
			8: "Ab2",
			10: "Eb3",
			13: "C4",
			15: "Ab3"
		},
		{
			0: "Eb3",
			2: "Bb3",
			4: "Eb4",
			7: "G4",
			8: "Eb3",
			10: "Bb3",
			13: "G4",
			15: "Eb4"
		},
		{
			0: "Bb2",
			2: "F3",
			4: "Bb3",
			7: "D4",
			8: "Bb2",
			10: "F3",
			13: "D4",
			15: "Bb3"
		},
		{
			0: "C2",
			8: "C2",
			12: "G2"
		}
	]
}, In = (e, t, n) => {
	const i = document.getElementById("root");
	if (i) {
		if ("adaptive" === e) i.style.cssText = "width: 100vw; height: 100dvh; overflow: hidden; background: #000; transition: width 0.3s ease, height 0.3s ease;";
		else {
			const [a, r] = e.split("x").map(Number), s = "landscape" === t || "auto" === t && "landscape" === n, o = s ? a : r, c = s ? r : a;
			i.style.cssText = `\n      width: ${o}px;\n      height: ${c}px;\n      position: fixed;\n      left: 50%;\n      top: 50%;\n      transform: translate(-50%, -50%);\n      border: 1px solid rgba(255, 255, 255, 0.1);\n      border-radius: 12px;\n      box-shadow: 0 0 0 9999px #000, 0 30px 60px rgba(0, 242, 255, 0.15);\n      overflow: hidden;\n      background: #000;\n      transition: width 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), height 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);\n    `;
		}
		setTimeout(() => window.dispatchEvent(new Event("resize")), 50), setTimeout(() => window.dispatchEvent(new Event("resize")), 350);
	}
}, Tn = async (e, t) => {
	try {
		const n = await import("./window-B78Mtlww.js"), i = n.getCurrentWindow ? n.getCurrentWindow() : n.appWindow;
		if (!i) return;
		const a = "landscape" === t, r = (e, t) => ({
			type: "Logical",
			width: e,
			height: t
		});
		if ("adaptive" === e) {
			await i.setResizable(!0), await i.setMaximizable(!0), await i.setMinSize(r(400, 400)), await i.setMaxSize(r(9999, 9999));
			const e = a ? r(1200, 750) : r(540, 960);
			await i.setSize(e);
		} else {
			const [t, n] = e.split("x").map(Number), s = r(a ? t : n, a ? n : t);
			await i.setResizable(!0), await i.setMinSize(r(100, 100)), await i.setMaxSize(r(9999, 9999)), await i.setSize(s), await i.setMinSize(s), await i.setMaxSize(s), await i.setMaximizable(!1), await i.setResizable(!1);
		}
		await i.center();
	} catch (n) {
		"undefined" != typeof window && alert(`Tauri 尺寸调整失败: ${n?.message || n}`);
	}
}, Sn = (e, t) => ({
	appState: u,
	gameMode: E,
	difficulty: m,
	language: "en",
	t: ct.en,
	audioEnabled: !0,
	musicVolume: .8,
	sfxVolume: .8,
	showEnemyControl: !1,
	autoEndTurn: !0,
	confirmEndTurn: !0,
	confirmSurrender: !0,
	confirmShopLegendary: !0,
	debugConfig: {
		overrideControl: !1,
		whiteAi: !1,
		blackAi: !1,
		autoStep: !0
	},
	reserveMode: "auto",
	screenOrientation: "portrait",
	aspectRatio: "16:9",
	desktopResolution: "adaptive",
	setAppState: (n) => e({
		appState: n,
		t: ct[t().language]
	}),
	setGameMode: (t) => e({ gameMode: t }),
	setDifficulty: (t) => e({ difficulty: t }),
	setLanguage: (t) => {
		e({
			language: t,
			t: ct[t]
		});
	},
	toggleAudio: () => {
		const n = !t().audioEnabled;
		return e({ audioEnabled: n }), n ? (hn.loadTheme(Rn), hn.enable(), hn.setMusicVolume(t().musicVolume), hn.setSfxVolume(t().sfxVolume), hn.startMusic()) : hn.disable(), n;
	},
	setMusicVolume: (t) => {
		e({ musicVolume: t }), hn.setMusicVolume(t);
	},
	setSfxVolume: (t) => {
		e({ sfxVolume: t }), hn.setSfxVolume(t);
	},
	toggleEnemyControl: () => e((e) => ({ showEnemyControl: !e.showEnemyControl })),
	setAutoEndTurn: (t) => e({ autoEndTurn: t }),
	setConfirmEndTurn: (t) => e({ confirmEndTurn: t }),
	setConfirmSurrender: (t) => e({ confirmSurrender: t }),
	setConfirmShopLegendary: (t) => e({ confirmShopLegendary: t }),
	setDebugConfig: (t) => e((e) => ({ debugConfig: {
		...e.debugConfig,
		...t
	} })),
	setScreenOrientation: (t) => e({ screenOrientation: t }),
	setAspectRatio: (t) => e({ aspectRatio: t }),
	setDesktopResolution: async (n) => {
		e({ desktopResolution: n }), "undefined" != typeof window && new URLSearchParams(window.location.search).has("tauri_mock") ? In(n, t().reserveMode, t().screenOrientation) : "undefined" != typeof window && ("__TAURI_INTERNALS__" in window || "__TAURI__" in window) && await Tn(n, t().reserveMode);
	},
	setReserveMode: async (n) => {
		e({ reserveMode: n });
		const i = "undefined" != typeof window && new URLSearchParams(window.location.search).has("tauri_mock"), a = t().desktopResolution || "adaptive";
		i ? In(a, n, t().screenOrientation) : "undefined" != typeof window && ("__TAURI_INTERNALS__" in window || "__TAURI__" in window) && await Tn(a, n);
	}
}), gn = (e) => ({
	isAiThinking: !1,
	draggingItemType: null,
	draggingItemEffectId: null,
	hoveredSquare: null,
	selectedItemId: null,
	selectedRogueCategory: null,
	activeInventoryTab: "CONSUMABLE",
	isDraggingPiece: !1,
	isAnimating: !1,
	hoveredRangePreview: null,
	mouseRawX: 0,
	mouseRawY: 0,
	setIsAiThinking: (t) => e({ isAiThinking: t }),
	setDraggingItemType: (t) => e({ draggingItemType: t }),
	setDraggingItemEffectId: (t) => e({ draggingItemEffectId: t }),
	setHoveredSquare: (t) => e({ hoveredSquare: t }),
	setSelectedItemId: (t) => e({ selectedItemId: t }),
	setSelectedRogueCategory: (t) => e({ selectedRogueCategory: t }),
	setActiveInventoryTab: (t) => e({ activeInventoryTab: t }),
	setIsDraggingPiece: (t) => e({ isDraggingPiece: t }),
	setIsAnimating: (t) => e({ isAnimating: t }),
	setMouseRaw: (t, n) => e({
		mouseRawX: t,
		mouseRawY: n
	}),
	setHoveredRangePreview: (t) => e({ hoveredRangePreview: t })
}), Ln = (e) => ({
	isMenuOpen: !1,
	showRules: !1,
	showSurrenderConfirm: !1,
	showMonarchModal: !1,
	showDraftModal: !1,
	showCampModal: !1,
	dialogConfig: null,
	setIsMenuOpen: (t) => e({ isMenuOpen: t }),
	setShowRules: (t) => e({ showRules: t }),
	setShowSurrenderConfirm: (t) => e({ showSurrenderConfirm: t }),
	setShowMonarchModal: (t) => e({ showMonarchModal: t }),
	setShowDraftModal: (t) => e({ showDraftModal: t }),
	setShowCampModal: (t) => e({ showCampModal: t }),
	showDialog: (t) => e({ dialogConfig: {
		...t,
		isOpen: !0
	} }),
	closeDialog: () => e((e) => ({ dialogConfig: e.dialogConfig ? {
		...e.dialogConfig,
		isOpen: !1
	} : null }))
});
var Nn = {
	mainGridMode: "board",
	bgGridMode: "multiple",
	bgGridMultiple: 10,
	main: {
		density: 24,
		stiffness: .01,
		damping: .5,
		returnSpeed: .5,
		baseColor: "#0da687",
		highColor: "#3c3c96",
		staticAlpha: .05,
		dynamicAlpha: .5,
		repelColor: "#ef4444",
		attractColor: "#06b6d4",
		waveColor: "#8b5cf6",
		vortexColor: "#00ff00",
		flowColor: "#00ffcc",
		noiseColor: "#ffffff",
		pinchColor: "#ffaa00",
		shockColor: "#ffff00"
	},
	bg: {
		density: 60,
		stiffness: .15,
		damping: .95,
		returnSpeed: .08,
		baseColor: "#1e1b4b",
		highColor: "#6d28d9",
		staticAlpha: .06,
		dynamicAlpha: .5,
		repelColor: "#7c3aed",
		attractColor: "#1e3a8a",
		waveColor: "#4c1d95",
		vortexColor: "#22c55e",
		flowColor: "#0f172a",
		noiseColor: "#334155",
		pinchColor: "#431407",
		shockColor: "#450a0a"
	},
	forceGains: {
		main: {
			REPEL: .1,
			ATTRACT: 1,
			WAVE: 1,
			VORTEX: 1,
			FLOW: 1,
			NOISE: 1,
			PINCH: 1,
			SHOCK: 1
		},
		bg: {
			REPEL: .1,
			ATTRACT: .1,
			WAVE: .5,
			VORTEX: .5,
			FLOW: .5,
			NOISE: .5,
			PINCH: .5,
			SHOCK: .5
		}
	},
	visualConfig: {
		boardOpacity: .08,
		boardBlur: 0,
		blackSqAlpha: 0,
		whiteSqAlpha: 0,
		mouseForce: .5,
		forceRadius: 5,
		forceMode: "REPEL",
		bloom: .4,
		chroma: .005,
		scanlines: !0,
		quality: "high",
		brightness: 1.5,
		gridStyle: "lines"
	}
};
const fn = (e, t) => ({
	visualConfig: {
		...Nn.visualConfig,
		gridStyle: "lines",
		connectionLineIdleSimplify: !0,
		noiseStrength: .02,
		vignetteStrength: .4,
		crtCurvature: !ut(),
		screenShakeEnabled: !0,
		floating3DEnabled: !0,
		showEndgameBackground: !0
	},
	main: Nn.main,
	bg: Nn.bg,
	forceGains: Nn.forceGains,
	mainGridMode: Nn.mainGridMode,
	bgGridMode: Nn.bgGridMode,
	bgGridMultiple: Nn.bgGridMultiple,
	activeEditLayer: "main",
	setMainGridMode: (t) => e({ mainGridMode: t }),
	setBgGridMode: (t) => e({ bgGridMode: t }),
	setBgGridMultiple: (t) => e({ bgGridMultiple: t }),
	setActiveEditLayer: (t) => e({ activeEditLayer: t }),
	updateGridParams: (t, n) => e((e) => ({ [t]: {
		...e[t],
		...n
	} })),
	setForceGain: (t, n, i) => e((e) => ({ forceGains: {
		...e.forceGains,
		[t]: {
			...e.forceGains[t],
			[n]: i
		}
	} })),
	setVisualConfig: (t) => e((e) => {
		const n = {
			...e.visualConfig,
			...t
		}, i = {};
		return "low" === t.quality ? (n.bloom = 0, n.chroma = 0, n.scanlines = !1, n.boardBlur = 0, n.boardOpacity = .05, n.floating3DEnabled = !1, n.noiseStrength = 0, "points" === n.gridStyle && (i.bg = {
			...e.bg,
			density: 60,
			staticAlpha: .35
		})) : "medium" === t.quality ? (n.bloom = .15, n.chroma = .002, n.scanlines = !0, n.boardBlur = 0, n.boardOpacity = .065, n.floating3DEnabled = !0, n.noiseStrength = .01) : "high" === t.quality && (n.bloom = .4, n.chroma = .005, n.scanlines = !0, n.boardBlur = 0, n.boardOpacity = .08, n.floating3DEnabled = !0, n.noiseStrength = .02), {
			visualConfig: n,
			...i
		};
	})
}), yn = (Gn ? et(Gn) : et)(it((e, t, n) => ({
	_hasHydrated: !1,
	setHasHydrated: (t) => e({ _hasHydrated: t }),
	...Sn(e, t),
	...Ln(e),
	...gn(e),
	...fn(e, 0)
}), {
	name: "Relarch-ui-settings-v4",
	version: 5,
	migrate: (e) => (ut() && e?.visualConfig && (e.visualConfig.crtCurvature = !1), e),
	storage: tt(() => Bt ? kt : window.localStorage),
	partialize: (e) => ({
		language: e.language,
		audioEnabled: e.audioEnabled,
		musicVolume: e.musicVolume,
		sfxVolume: e.sfxVolume,
		reserveMode: e.reserveMode,
		desktopResolution: e.desktopResolution,
		difficulty: e.difficulty,
		showEnemyControl: e.showEnemyControl,
		autoEndTurn: e.autoEndTurn,
		confirmEndTurn: e.confirmEndTurn,
		confirmSurrender: e.confirmSurrender,
		confirmShopLegendary: e.confirmShopLegendary,
		aspectRatio: e.aspectRatio,
		visualConfig: e.visualConfig,
		main: e.main,
		bg: e.bg,
		forceGains: e.forceGains,
		mainGridMode: e.mainGridMode,
		bgGridMode: e.bgGridMode,
		bgGridMultiple: e.bgGridMultiple
	}),
	merge: (e, t) => {
		if (!e) return t;
		try {
			const n = e.language || t.language;
			return {
				...t,
				...e,
				...ut() ? { reserveMode: "auto" } : {},
				language: n,
				t: ct[n] || ct.en,
				visualConfig: {
					...t.visualConfig,
					...e.visualConfig || {}
				},
				main: {
					...t.main,
					...e.main || {}
				},
				bg: {
					...t.bg,
					...e.bg || {}
				},
				forceGains: {
					...t.forceGains,
					...e.forceGains || {}
				}
			};
		} catch (n) {
			return t;
		}
	},
	onRehydrateStorage: () => (e, t) => {
		e?.setHasHydrated(!0), setTimeout(() => {
			e && mt() && ("auto" === e.reserveMode ? e.setReserveMode("portrait") : e.setDesktopResolution(e.desktopResolution || "adaptive"));
		}, 150);
	}
}));
var Gn;
if ("undefined" != typeof window && void 0 !== window.matchMedia) {
	const e = () => {
		if (mt()) return;
		const e = window.matchMedia("(orientation: landscape)").matches;
		requestAnimationFrame(() => {
			yn.getState().setScreenOrientation(e ? "landscape" : "portrait");
		});
	}, t = window.matchMedia("(orientation: landscape)");
	try {
		t.addEventListener("change", e);
	} catch (qn) {
		t.addListener(e);
	}
	e(), window.addEventListener("resize", e), window.useUIStore = yn;
}
var Cn = class e {
	static {
		this.MAX_DEPTH = 16;
	}
	static {
		this.MAX_ACTIONS = 100;
	}
	static checkGameOver(e, t, n, i) {
		if (0 === e.flat().filter(Boolean).length) return !1;
		const a = n || "DEFAULT", r = Ye.checkGameOverOverride(a, e, t);
		if (null !== r) return r;
		let s = !1;
		if (i?.proxyKing && t === l) s = e.flat().some((e) => e && e.color === t);
		else for (let o = 0; o < 8; o++) {
			for (let n = 0; n < 8; n++) {
				const i = e[o][n];
				if (i && i.color === t && (i.type === d.KING || Bn.isProxyKing(i))) {
					s = !0;
					break;
				}
			}
			if (s) break;
		}
		return !s;
	}
	static produceScript(t, n, i) {
		Kn.build(n.board, n.metadata), n.interceptors = Re.build(n.board, n.metadata);
		const a = new ee(n.currentSeed || Date.now()), r = [...t], s = [], o = /* @__PURE__ */ new Set();
		n.depth = 0, n.actionCount = 0;
		let c = !1, l = !1;
		for (; r.length > 0 && !e.budgetExceeded(n);) {
			const t = r.shift(), d = e.interceptAction(t, n, a);
			if (!d) continue;
			if (c = e.markBoardAffecting(c, d), e.handleShieldSegment(d, l, n, s)) {
				l = !1;
				continue;
			}
			if (e.tryInjectKillOnMove(d, i, n, r)) continue;
			const E = e.handleDeathHooks(d, n, i, o, a, r);
			if (E.cancelled) l = !0, e.removeShieldFromCancelledKill(E.victimPos, n);
			else if (e.applyAction(d, n, s), e.invokeActionHooks(d, n, i, E.victimPiece, E.victimPos, a, r), e.checkKingDeathBreak(d, E.victimPiece, E.victimPos, i, n, r, s)) break;
		}
		return n.currentSeed = a.getSeed(), e.recordGameOver(c, n, s), s;
	}
	static budgetExceeded(t) {
		return t.actionCount > e.MAX_ACTIONS || t.depth > e.MAX_DEPTH;
	}
	static interceptAction(e, t, n) {
		return t.activeMonarchId ? Ye.interceptSync(t.activeMonarchId, e, {
			...t,
			prng: n
		}) : e;
	}
	static markBoardAffecting(e, t) {
		return !![
			"MOVE",
			"KILL",
			"SPAWN",
			"SWAP_PIECES",
			"SET_SQUARE",
			"REMOVE_SQUARE"
		].includes(t.type) || e;
	}
	static handleShieldSegment(e, t, n, i) {
		if (!t || "MOVE" !== e.type || !e._killInjected) return !1;
		const a = e.from, r = e.to, s = n.board, o = n.metadata, c = s[a.r][a.c];
		if (c) {
			const e = qe(s);
			e[r.r][r.c] = c, e[a.r][a.c] = null, i.push({
				action: {
					type: "MOVE",
					from: a,
					to: r
				},
				boardSnapshot: e,
				metadataSnapshot: ze(o)
			}), i.push({
				action: {
					type: "PLAY_SOUND",
					soundId: "SHIELD"
				},
				boardSnapshot: e,
				metadataSnapshot: ze(o)
			});
		}
		return i.push({
			action: {
				type: "MOVE",
				from: r,
				to: a
			},
			boardSnapshot: qe(s),
			metadataSnapshot: ze(o)
		}), !0;
	}
	static tryInjectKillOnMove(e, t, n, i) {
		if ("MOVE" !== e.type || !t || e._killInjected) return !1;
		if (n.board[e.from.r][e.from.c] !== t) return !1;
		const a = n.board[e.to.r][e.to.c];
		return !(!a || a.color === t.color && a.type !== d.KING) && (i.unshift({
			...e,
			_killInjected: !0,
			_preservedVictim: a
		}), i.unshift({
			type: "KILL",
			targetId: a.id,
			from: e.from,
			pos: e.to,
			_preservedVictim: a
		}), !0);
	}
	static handleDeathHooks(t, n, i, a, r, s) {
		let o = !1, c = t._preservedVictim || null, l = null;
		if ("KILL" === t.type) {
			const d = e.resolvePos(t, n.board);
			if (d) {
				l = d;
				const e = n.board[d.r][d.c];
				if (e) {
					if (c = e, i && vn.isInvulnerable(e, i, n.board, d.r, d.c, n.metadata)) {
						o = !0;
						const t = "zh" === yn.getState().language || "tw" === yn.getState().language ? "免疫，无法攻击" : "IMMUNE: ATTACK BLOCKED";
						return s.unshift({
							type: "PLAY_SOUND",
							soundId: "SHIELD"
						}, {
							type: "SHOW_TEXT",
							text: t,
							textKey: "LOG_IMMUNE_BLOCKED",
							style: "danger",
							pos: d
						}), {
							cancelled: !0,
							victimPiece: e,
							victimPos: d
						};
					}
					const l = e.uid ? `UID:${e.uid}` : `POS:${d.r},${d.c}`;
					if (!a.has(l)) {
						a.add(l);
						const c = () => {
							o = !0;
						}, E = [];
						Bn.handleHook("onDeath", {
							board: n.board,
							r: d.r,
							c: d.c,
							piece: e,
							attacker: i || void 0,
							attackerPos: t.from,
							getStore: () => n,
							prng: r,
							emit: (e) => {
								"DELAY" !== e.type && "SHOW_TEXT" !== e.type && n.actionCount++, E.push(e);
							},
							cancelAction: c
						}), E.length > 0 && s.unshift(...E);
					}
				}
			}
		}
		return {
			cancelled: o,
			victimPiece: c,
			victimPos: l
		};
	}
	static removeShieldFromCancelledKill(e, t) {
		if (!e) return;
		const n = t.board[e.r]?.[e.c];
		n && (t.board[e.r][e.c] = {
			...n,
			statuses: (n.statuses || []).filter((e) => e.id !== _.SHIELDED)
		});
	}
	static applyAction(e, t, n) {
		if (Dn.apply(e, t), t.script && t.script.length > 0) {
			const e = qe(t.board), i = ze(t.metadata);
			for (const a of t.script) n.push({
				action: a,
				boardSnapshot: e,
				metadataSnapshot: i
			});
			t.script.length = 0;
		}
		[
			"KILL",
			"SPAWN",
			"ADD_STATUS",
			"REMOVE_STATUS",
			"UPDATE_ROSTER_PIECE",
			"SET_SQUARE",
			"REMOVE_SQUARE"
		].includes(e.type) && (t.interceptors = Re.build(t.board, t.metadata)), n.push({
			action: e,
			boardSnapshot: qe(t.board),
			metadataSnapshot: ze(t.metadata)
		}), "DELAY" !== e.type && "SHOW_TEXT" !== e.type && t.actionCount++;
	}
	static invokeActionHooks(t, n, i, a, r, s, o) {
		const c = t.pos || t.to || null;
		e.triggerHooksSync(t, n, (e) => {
			"DELAY" !== e.type && "SHOW_TEXT" !== e.type && n.actionCount++, o.push(e);
		}, i || null, a, c, s);
	}
	static checkKingDeathBreak(e, t, n, i, a, r, s) {
		if ("KILL" !== e.type || !t || t.type !== d.KING) return !1;
		let o = !1;
		for (let c = 0; c < 8; c++) {
			for (let e = 0; e < 8; e++) {
				const n = a.board[c][e];
				if (n && n.color === t.color && n.id !== t.id && (n.type === d.KING || Bn.isProxyKing(n))) {
					o = !0;
					break;
				}
			}
			if (o) break;
		}
		if (a.levelConstraints?.proxyKing && t.color === l || o) return !1;
		if (a.fatalBlow = {
			attackerId: i?.id || "",
			victimId: t.id,
			victimPos: n || e.pos || {
				r: 0,
				c: 0
			}
		}, r.length > 0 && "MOVE" === r[0].type && r[0]._killInjected) {
			const e = r.shift();
			Dn.apply(e, a), s.push({
				action: e,
				boardSnapshot: qe(a.board),
				metadataSnapshot: ze(a.metadata)
			});
		}
		return !0;
	}
	static recordGameOver(t, n, i) {
		if (t) {
			if (e.checkGameOver(n.board, l, n.activeMonarchId, n.levelConstraints)) {
				n.winner = c;
				const e = {
					type: "SET_WINNER",
					winner: c
				};
				i.push({
					action: e,
					boardSnapshot: qe(n.board),
					metadataSnapshot: ze(n.metadata)
				});
			} else if (e.checkGameOver(n.board, c, n.activeMonarchId, n.levelConstraints)) {
				n.winner = l;
				const e = {
					type: "SET_WINNER",
					winner: l
				};
				i.push({
					action: e,
					boardSnapshot: qe(n.board),
					metadataSnapshot: ze(n.metadata)
				});
			}
		}
	}
	static triggerHooksSync(e, t, n, i, a, r, s) {
		const { board: o } = t, l = {
			board: o,
			prng: s,
			emit: n,
			metadata: t.metadata,
			gold: t.gold,
			roster: t.roster,
			equipments: t.equipments,
			maxEquipments: t.maxEquipments,
			deployedUids: t.deployedUids,
			historyLength: t.historyLength ?? t.history?.length ?? 0,
			reserves: t.reserves,
			levelConstraints: t.levelConstraints,
			isAISimulation: t.isAISimulation
		};
		if ("MOVE" === e.type && i) {
			const n = i.uid && this.findPieceByUid(o, i.uid) || i;
			if (Bn.handleHook("onAfterMove", {
				...l,
				piece: n,
				r: e.to.r,
				c: e.to.c,
				from: e.from,
				victim: a || void 0
			}), (t.metadata?.squares?.[`${e.to.r},${e.to.c}`])?.some((e) => e.id === p) && Bn.handleSquareHook("onAfterMove", e.to.r, e.to.c, {
				...l,
				piece: n,
				r: e.to.r,
				c: e.to.c,
				from: e.from,
				victim: a || void 0
			}, t.metadata), !l.isAISimulation && (n.color === c && (Y.emit(q, {
				key: `moves_by_${n.type}`,
				value: 1,
				isLifetimeOnly: !0
			}), Y.emit(q, {
				key: `run_moves_by_${n.type}`,
				value: 1
			})), n.color === c && n.type === d.BISHOP && e.from && e.to)) {
				const t = Math.max(Math.abs(e.to.r - e.from.r), Math.abs(e.to.c - e.from.c));
				Y.emit(q, {
					key: "bishopMovedDist",
					value: t,
					isLifetimeOnly: !0
				});
			}
		} else if ("KILL" === e.type && i) {
			const s = r || this.resolvePos(e, o), E = a || (s ? o[s.r][s.c] : null);
			if (E && E.color !== i.color && s) {
				const a = i.uid && this.findPieceByUid(o, i.uid) || i;
				if (Bn.handleHook("onKill", {
					...l,
					piece: a,
					victim: E,
					r: s.r,
					c: s.c,
					from: e.from
				}), Ze.handleKillExp(a, s, n, t.activeMonarchId, l.isAISimulation), !l.isAISimulation) {
					const t = a.color === c, n = E.color === c;
					t && (Y.emit(q, {
						key: `kills_by_${a.type}`,
						value: 1,
						isLifetimeOnly: !0
					}), a.type === d.KING && E.type === d.KING && Y.emit(q, {
						key: "kingKilledByKing",
						value: 1
					}), E.type === d.PAWN && Y.emit(q, {
						key: "enemy_pawns_killed",
						value: 1,
						isLifetimeOnly: !0
					}), E.type !== d.PAWN && E.type !== d.KNIGHT && E.type !== d.BISHOP && (l.historyLength || 0) <= 4 && Y.emit(q, {
						key: "fastHighTierKills",
						value: 1,
						isLifetimeOnly: !0
					}), (l.historyLength || 0) <= 6 && Y.emit(q, {
						key: "earlyKills",
						value: 1,
						isLifetimeOnly: !0
					}), a.type === d.BISHOP && e.from && s && Math.max(Math.abs(s.r - e.from.r), Math.abs(s.c - e.from.c)) >= 6 && Y.emit(q, {
						key: "bishopSnipe6",
						value: 1,
						isLifetimeOnly: !0
					}), a.type === d.ROOK && e.from && s && Math.max(Math.abs(s.r - e.from.r), Math.abs(s.c - e.from.c)) >= 6 && Y.emit(q, {
						key: "rookCrossBoard",
						value: 1,
						isLifetimeOnly: !0
					})), n && Y.emit(q, {
						key: `deaths_by_${E.type}`,
						value: 1,
						isLifetimeOnly: !0
					});
				}
			}
		} else if ("SPAWN" === e.type) {
			const n = this.resolvePos(e, o);
			n && (Bn.handleHook("onDeploy", {
				...l,
				piece: e.piece,
				r: n.r,
				c: n.c
			}), Bn.handleSquareHook("onDeploy", n.r, n.c, {
				...l,
				piece: e.piece,
				r: n.r,
				c: n.c
			}, t.metadata));
		} else if ("LEVEL_UP" === e.type) {
			const t = e.pos || this.resolvePos(e, o);
			if (t) {
				const e = o[t.r][t.c];
				e && Bn.handleHook("onLevelUp", {
					...l,
					piece: e,
					r: t.r,
					c: t.c
				});
			}
		}
	}
	static calculateSequence(e, t, n) {
		const i = {
			...t,
			script: [],
			depth: 0,
			actionCount: 0,
			emit: () => {},
			activeMonarchId: t.activeMonarchId || "DEFAULT"
		};
		return this.produceScript(e, i, n);
	}
	static findPieceByUid(e, t) {
		for (let n = 0; n < 8; n++) for (let i = 0; i < 8; i++) {
			const a = e[n][i];
			if (a) {
				if (a.uid === t) return a;
				if (a.stackedPiece && a.stackedPiece.uid === t) return a.stackedPiece;
			}
		}
		return null;
	}
	static resolvePos(e, t) {
		if (e.targetId) for (let n = 0; n < 8; n++) {
			const i = t[n];
			if (i) for (let t = 0; t < 8; t++) {
				const a = i[t];
				if (a && (a.id === e.targetId || a.uid === e.targetId)) return {
					r: n,
					c: t
				};
				if (a && a.stackedPiece && (a.stackedPiece.id === e.targetId || a.stackedPiece.uid === e.targetId)) return {
					r: n,
					c: t
				};
			}
		}
		if (e.pos) return e.pos;
	}
};
const Pn = {
	MOVE: (e, t) => {
		const { board: n } = t, i = n[e.from.r][e.from.c];
		if (!i) return;
		if (e.targetId && i.id !== e.targetId && i.uid !== e.targetId) return;
		const a = n[e.to.r][e.to.c], r = { ...i };
		if (a && a.id !== i.id && !t.isAISimulation) {
			let e = r;
			for (; e.stackedPiece;) e.stackedPiece = { ...e.stackedPiece }, e = e.stackedPiece;
			e.stackedPiece = a;
		}
		n[e.from.r][e.from.c] = i.stackedPiece || null, r.stackedPiece = r.stackedPiece || void 0, n[e.to.r][e.to.c] = r, r.abilityMask = $.resolveMask(r);
	},
	KILL: (e, t) => {
		const n = Mn(e, t.board);
		if (n) {
			const i = t.board[n.r][n.c];
			if (e.targetId && i && i.id !== e.targetId && i.uid !== e.targetId) return;
			i && (t.metadata.recentDeaths = {
				...t.metadata.recentDeaths || {},
				[i.id]: 1
			}), t.board[n.r][n.c] = null;
		}
	},
	SPAWN: (e, t) => {
		const n = Mn(e, t.board);
		if (n) {
			const i = { ...e.piece };
			i.skills = [...new Set([
				...i.skills || [],
				...i.learnedSkills || [],
				...i.traits || []
			])], i.abilityMask = $.resolveMask(i), t.board[n.r][n.c] = i;
		}
	},
	SWAP_PIECES: (e, t) => {
		const { board: n } = t, i = n[e.posA.r][e.posA.c], a = n[e.posB.r][e.posB.c];
		n[e.posA.r][e.posA.c] = a ? { ...a } : null, n[e.posB.r][e.posB.c] = i ? { ...i } : null, t.isAISimulation || e.actorColor !== c || Y.emit(q, {
			key: "swapOrTeleport",
			value: 1,
			isLifetimeOnly: !0
		});
	},
	SWAP_STACK: (e, t) => {
		const { board: n } = t, { r: i, c: a } = e.pos, r = n[i][a];
		if (!r || !r.stackedPiece) return;
		const s = { ...r.stackedPiece };
		s.stackedPiece = {
			...r,
			stackedPiece: void 0
		}, s.abilityMask = $.resolveMask(s), n[i][a] = s;
	},
	ADD_STATUS: (e, t) => {
		const n = Mn(e, t.board);
		if (n) {
			const i = t.board[n.r][n.c];
			if (i) {
				const a = {
					...i,
					statuses: [...i.statuses || []]
				};
				Bn.applyStatus(a, e.statusId, e.duration, e.metadata), a.abilityMask = $.resolveMask(a), t.board[n.r][n.c] = a, t.isAISimulation || i.color !== l || Y.emit(q, {
					key: `status_applied_${e.statusId}`,
					value: 1,
					isLifetimeOnly: !0
				}), t.roster && (t.roster = t.roster.map((e) => e.uid === i.uid ? a : e));
			}
		}
	},
	REMOVE_STATUS: (e, t) => {
		const n = Mn(e, t.board);
		if (n) {
			const i = t.board[n.r][n.c];
			if (i && i.statuses) {
				const a = {
					...i,
					statuses: i.statuses.filter((t) => t.id !== e.statusId)
				};
				a.abilityMask = $.resolveMask(a), t.board[n.r][n.c] = a, t.roster && (t.roster = t.roster.map((e) => e.uid === i.uid ? a : e));
			}
		}
	},
	SET_SQUARE: (e, t) => {
		if (e.pos.r < 0 || e.pos.r >= 8 || e.pos.c < 0 || e.pos.c >= 8) return;
		const n = `${e.pos.r},${e.pos.c}`;
		t.metadata.squares[n] = [e.status];
	},
	REMOVE_SQUARE: (e, t) => {
		const n = `${e.pos.r},${e.pos.c}`;
		t.metadata.squares[n] && (t.metadata.squares[n] = t.metadata.squares[n].filter((t) => t.id !== e.statusId));
	},
	MODIFY_RESERVE: (e, t) => {
		const n = t.reserves[e.color][e.pieceType] || 0;
		t.reserves[e.color][e.pieceType] = n + e.amount;
	},
	UPDATE_CONSTRAINTS: (e, t) => {
		t.isAISimulation || (e.maxSavesOffset && (t.baseMaxSaves = (t.baseMaxSaves ?? 3) + e.maxSavesOffset), e.maxUndosOffset && (t.baseMaxUndos = (t.baseMaxUndos ?? 3) + e.maxUndosOffset));
	},
	RECORD_DEPLOY: (e, t) => {
		t.deployedUids && !t.deployedUids.includes(e.uid) && t.deployedUids.push(e.uid);
	},
	UNDEPLOY_PIECE: (e, t) => {
		t.deployedUids = t.deployedUids.filter((t) => t !== e.uid);
	},
	REMOVE_PIECE: (e, t) => {
		const n = Mn(e, t.board);
		if (n) {
			const e = t.board[n.r][n.c];
			e && (t.metadata.recentDeaths = {
				...t.metadata.recentDeaths || {},
				[e.id]: 1
			}), t.board[n.r][n.c] = null;
		}
	},
	SET_EXTRA_MOVE: (e, t) => {
		t.extraMoveActive = e.active, t.extraDeployAllowed = !!e.active && !!e.allowDeploy, e.active && !e.allowDeploy && (t.deployBlockedForTurn = !0), e.active && !t.isAISimulation && Y.emit(q, {
			key: "extraMoves",
			value: 1,
			isLifetimeOnly: !0
		});
	},
	SET_WINNER: (e, t) => {
		t.winner = e.winner;
	},
	TICK_PIECE: (e, t) => {
		const n = t.board[e.pos.r][e.pos.c];
		if (n) {
			const i = Un(n);
			i.abilityMask = $.resolveMask(i), t.board[e.pos.r][e.pos.c] = i, t.roster && (t.roster = t.roster.map((e) => e.uid === n.uid ? i : e));
		}
	},
	SWITCH_TURN: (e, t) => {
		t.turn !== e.nextTurn && (t.extraMoveActive = !1, t.extraDeployAllowed = !1, t.deployBlockedForTurn = !1, t.hasDeployedThisTurn = !1), t.turn = e.nextTurn;
	},
	UPDATE_METADATA: (e, t) => {
		Object.assign(t.metadata, e.updates);
	},
	LEVEL_UP: (e, t) => {
		const n = t.board[e.pos.r][e.pos.c];
		if (n) {
			const i = (n.level || 1) + 1, a = Math.max(n.maxSlots || 1, Math.floor((i + 1) / 2)), r = {
				...n,
				level: i,
				maxSlots: a
			};
			r.abilityMask = $.resolveMask(r), t.board[e.pos.r][e.pos.c] = r, t.roster && (t.roster = t.roster.map((e) => e.uid === n.uid ? r : e));
		}
	},
	UPDATE_ROSTER_PIECE: (e, t) => {
		const n = Dn.getActivePieces(t.board);
		for (const { r: i, c: a, piece: r } of n) if (r.uid === e.pieceUid || r.id === e.pieceId) {
			const n = {
				...r,
				...e.updates
			};
			e.updates.metadata && r.metadata && (n.metadata = {
				...r.metadata,
				...e.updates.metadata
			}), n.skills = [...new Set([
				...n.skills || [],
				...n.learnedSkills || [],
				...n.traits || []
			])], n.abilityMask = $.resolveMask(n), t.board[i][a] = n;
		}
		t.roster && (t.roster = t.roster.map((t) => {
			if (t.uid === e.pieceUid || t.id === e.pieceId) {
				const n = {
					...t,
					...e.updates
				};
				return e.updates.metadata && t.metadata && (n.metadata = {
					...t.metadata,
					...e.updates.metadata
				}), n;
			}
			return t;
		}));
	},
	MODIFY_GOLD: (e, t) => {
		if (void 0 !== t.gold) {
			let n = e.amount;
			n > 0 && t.metadata?.doubleGoldActive && (n *= 2), t.gold = Math.max(0, t.gold + n);
		}
	},
	ADD_TO_ROSTER: (e, t) => {
		if (t.roster) {
			const n = { ...e.piece };
			n.skills = [...new Set([
				...n.skills || [],
				...n.learnedSkills || [],
				...n.traits || []
			])], t.roster = [...t.roster, n];
			const i = n.color;
			t.reserves && t.reserves[i] && (t.reserves[i][n.type] = (t.reserves[i][n.type] || 0) + 1);
		}
	},
	REMOVE_FROM_ROSTER: (e, t) => {
		t.roster && (t.roster = t.roster.filter((t) => t.uid !== e.pieceUid));
	},
	ADD_ITEM: (e, t) => {
		"CONSUMABLE" === e.item.type ? t.consumables && (t.consumables = [...t.consumables, e.item]) : t.equipments && (t.equipments = [...t.equipments, e.item]);
	},
	REMOVE_ITEM: (e, t) => {
		t.consumables && (t.consumables = t.consumables.filter((t) => t.id !== e.itemId)), t.equipments && (t.equipments = t.equipments.filter((t) => t.id !== e.itemId));
	},
	SHOW_TEXT: () => {},
	PLAY_SOUND: () => {},
	UPDATE_HP: () => {},
	SET_UI_SELECTION: () => {},
	DELAY: () => {}
};
var Dn = class e {
	static finalizeInference(e) {
		for (let n = 0; n < 8; n++) for (let t = 0; t < 8; t++) {
			const i = e.board[n][t];
			i && (i.abilityMask = $.resolveMask(i));
		}
		const t = e.isAISimulation || !0 === globalThis.isAISimulation;
		e.metadata.cache = he.apply(e.metadata.cache, e.board, e.metadata, e.turn, [], e.levelConstraints, t);
	}
	static refreshAbilityMasks(e) {
		for (let t = 0; t < 8; t++) for (let n = 0; n < 8; n++) {
			const i = e[t][n];
			i && (i.abilityMask = $.resolveMask(i));
		}
	}
	static updateCache(e) {
		const t = e.isAISimulation || !0 === globalThis.isAISimulation;
		e.metadata.cache = he.apply(e.metadata.cache, e.board, e.metadata, e.turn, [], e.levelConstraints, t);
	}
	static apply(t, n) {
		const i = Pn[t.type];
		i && i(t, n);
		const a = [];
		"pos" in t && t.pos && a.push(t.pos), "from" in t && t.from && a.push(t.from), "to" in t && t.to && a.push(t.to), "posA" in t && t.posA && a.push(t.posA), "posB" in t && t.posB && a.push(t.posB);
		for (const e of a) {
			if (e.r < 0 || e.r >= 8 || e.c < 0 || e.c >= 8) continue;
			const t = n.board[e.r][e.c];
			t && (t.abilityMask = $.resolveMask(t));
		}
		if ("UPDATE_ROSTER_PIECE" === t.type) {
			const i = e.getActivePieces(n.board);
			for (const { r: e, c: n, piece: a } of i) a.uid !== t.pieceUid && a.id !== t.pieceId || (a.abilityMask = $.resolveMask(a));
		}
		n.metadata.cache = he.apply(n.metadata.cache, n.board, n.metadata, n.turn, [t], n.levelConstraints, n.isAISimulation);
	}
	static simulateAIActionWithUndo(t, n, i) {
		const a = {
			boardSnapshot: n.board.map((e) => [...e]),
			metadataSnapshot: {
				...n.metadata,
				squares: { ...n.metadata.squares },
				recentDeaths: n.metadata.recentDeaths ? { ...n.metadata.recentDeaths } : void 0
			},
			reservesSnapshot: {
				[c]: { ...n.reserves[c] },
				[l]: { ...n.reserves[l] }
			},
			turnSnapshot: n.turn,
			winnerSnapshot: n.winner,
			extraMoveSnapshot: n.extraMoveActive,
			extraDeploySnapshot: n.extraDeployAllowed,
			deployBlockedSnapshot: n.deployBlockedForTurn,
			hasDeployedSnapshot: n.hasDeployedThisTurn,
			deployedUidsSnapshot: [...n.deployedUids],
			seedSnapshot: n.currentSeed
		};
		n.isAISimulation = !0, globalThis.isAISimulation = !0;
		const r = new ee(n.currentSeed || Date.now());
		try {
			n.interceptors = Re.build(n.board, n.metadata), Cn.calculateSequence(t, n, i);
			for (let t = 0; t < 8; t++) for (let i = 0; i < 8; i++) {
				const a = n.board[t][i];
				a && (a.statuses && a.statuses.length > 0 || a.stackedPiece) && e.apply({
					type: "TICK_PIECE",
					pos: {
						r: t,
						c: i
					}
				}, n);
			}
			if (n.metadata.squares) {
				const e = { ...n.metadata.squares };
				for (const [t, n] of Object.entries(e)) e[t] = n.map((e) => e.duration >= 99 ? e : {
					...e,
					duration: e.duration - 1
				}).filter((e) => e.duration > 0);
				n.metadata.squares = e;
			}
			if (n.metadata.lockedActionUid && !n.extraMoveActive && (n.metadata.lockedActionUid = void 0), n.metadata.recentDeaths) {
				const e = {};
				for (const [t, i] of Object.entries(n.metadata.recentDeaths)) i > 1 && (e[t] = i - 1);
				n.metadata.recentDeaths = e;
			}
			n.turn = n.extraMoveActive ? n.turn : n.turn === c ? l : c, n.extraMoveActive = !1, n.extraDeployAllowed = !1, n.turn !== a.turnSnapshot && (n.deployBlockedForTurn = !1), n.hasDeployedThisTurn = !1;
			const s = [];
			for (let e = 0; e < 8; e++) for (let t = 0; t < 8; t++) {
				const i = n.board[e][t];
				i && i.color === n.turn && Bn.handleHook("onTurnStart", {
					board: n.board,
					r: e,
					c: t,
					piece: i,
					prng: r,
					emit: (e) => s.push(e),
					metadata: n.metadata,
					gold: n.gold,
					roster: n.roster,
					deployedUids: n.deployedUids,
					historyLength: n.historyLength ?? 0,
					reserves: n.reserves,
					levelConstraints: n.levelConstraints,
					isAISimulation: n.isAISimulation
				});
			}
			s.length > 0 && Cn.calculateSequence(s, n), n.currentSeed = r.getSeed(), n.metadata.cache = he.apply(n.metadata.cache, n.board, n.metadata, n.turn, [], n.levelConstraints, !0);
		} catch (s) {
			if ("ACTION_QUEUE_OVERFLOW" === s.message) return e.undo(n, a), a;
			throw s;
		} finally {
			globalThis.isAISimulation = !1;
		}
		return a;
	}
	static undo(e, t) {
		e.board = t.boardSnapshot, e.metadata = t.metadataSnapshot, e.reserves = t.reservesSnapshot, e.turn = t.turnSnapshot, e.winner = t.winnerSnapshot, e.extraMoveActive = t.extraMoveSnapshot, e.extraDeployAllowed = t.extraDeploySnapshot, e.deployBlockedForTurn = t.deployBlockedSnapshot, e.hasDeployedThisTurn = t.hasDeployedSnapshot, e.deployedUids = t.deployedUidsSnapshot, e.currentSeed = t.seedSnapshot;
	}
	static getActivePieces(e) {
		const t = [];
		for (let n = 0; n < 8; n++) for (let i = 0; i < 8; i++) e[n][i] && t.push({
			r: n,
			c: i,
			piece: e[n][i]
		});
		return t;
	}
}, bn = class {
	static computeActionResults(e, t, n) {
		return {
			nextContext: t,
			script: Cn.calculateSequence(e, t, n)
		};
	}
	static fastCloneContext(e) {
		const t = (e) => {
			if (!e) return null;
			const n = {
				...e,
				statuses: e.statuses ? e.statuses.map((e) => ({ ...e })) : [],
				traits: e.traits ? [...e.traits] : [],
				learnedSkills: e.learnedSkills ? [...e.learnedSkills] : [],
				skills: e.skills ? [...e.skills] : [],
				equippedItems: e.equippedItems ? [...e.equippedItems] : [],
				metadata: e.metadata ? { ...e.metadata } : {}
			};
			return n.stackedPiece && (n.stackedPiece = t(n.stackedPiece)), n;
		}, n = e.board.map((e) => e.map((e) => t(e))), i = {};
		if (e.metadata.squares) for (const c in e.metadata.squares) i[c] = e.metadata.squares[c].map((e) => ({
			...e,
			metadata: e.metadata ? { ...e.metadata } : void 0
		}));
		const a = e.roster ? e.roster.map((e) => t(e)) : [], r = e.consumables ? [...e.consumables] : [], s = e.equipments ? [...e.equipments] : [], o = {
			[c]: { ...e.reserves[c] },
			[l]: { ...e.reserves[l] }
		}, d = e.deployedUids ? [...e.deployedUids] : [], E = e.fatalBlow ? { ...e.fatalBlow } : null;
		return {
			board: n,
			metadata: {
				...e.metadata,
				squares: i,
				activeMonarchId: e.metadata.activeMonarchId,
				screenWrap: e.metadata.screenWrap,
				sirenSongEnabled: e.metadata.sirenSongEnabled
			},
			gameMode: e.gameMode,
			roster: a,
			gold: e.gold,
			consumables: r,
			equipments: s,
			reserves: o,
			levelConstraints: e.levelConstraints,
			activeMonarchId: e.activeMonarchId,
			turn: e.turn,
			winner: e.winner,
			extraMoveActive: e.extraMoveActive,
			hasDeployedThisTurn: e.hasDeployedThisTurn,
			currentSeed: e.currentSeed,
			deployedUids: d,
			baseMaxSaves: e.baseMaxSaves,
			baseMaxUndos: e.baseMaxUndos,
			historyLength: e.historyLength,
			fatalBlow: E
		};
	}
};
function Mn(e, t) {
	if (e.targetId) {
		const n = Dn.getActivePieces(t);
		for (const { r: t, c: i, piece: a } of n) {
			if (a.id === e.targetId || a.uid === e.targetId) return {
				r: t,
				c: i
			};
			if (a.stackedPiece && (a.stackedPiece.id === e.targetId || a.stackedPiece.uid === e.targetId)) return {
				r: t,
				c: i
			};
		}
	}
	return e.pos;
}
function Un(e) {
	const t = {
		...e,
		statuses: e.statuses ? e.statuses.map((e) => ({ ...e })) : [],
		traits: e.traits ? [...e.traits] : []
	};
	t.type === d.KING && (t.statuses = t.statuses.filter((e) => e.id !== _.INVISIBLE && e.id !== _.PETRIFIED)), t.stackedPiece && (t.stackedPiece = Un(t.stackedPiece)), t.statuses.length > 0 && (t.statuses = t.statuses.map((e) => e.duration >= 99 ? e : (e.duration <= 1 && e.id === _.BETRAYED && e.originalColor && (t.color = e.originalColor), {
		...e,
		duration: e.duration - 1
	})).filter((e) => e.duration > 0));
	const n = [_.GRACE_LIMIT, _.CANNOT_CAPTURE];
	return t.traits && t.traits.length > 0 && (t.traits = t.traits.filter((e) => !n.includes(e))), t.skills = [...new Set([
		...t.skills || [],
		...t.learnedSkills || [],
		...t.traits || []
	])], t;
}
var Kn = class {
	static {
		this.globalInvulnerabilityMods = [];
	}
	static {
		this.globalSquareBlockMods = [];
	}
	static build(e, t) {
		this.globalInvulnerabilityMods = [], this.globalSquareBlockMods = [];
		const n = Dn.getActivePieces(e);
		for (const { piece: i, r: a, c: r } of n) {
			const t = X.getModifiers(i, e, a, r);
			for (const e of t) e.invulnerable && this.globalInvulnerabilityMods.push({
				piece: i,
				r: a,
				c: r,
				fn: e.invulnerable,
				broadcast: !!e.invulnerableBroadcast
			}), e.squareBlockMovement && this.globalSquareBlockMods.push({
				piece: i,
				r: a,
				c: r,
				fn: e.squareBlockMovement
			});
		}
		if (t?.squares) for (const [i, a] of Object.entries(t.squares)) {
			const [n, a] = i.split(",").map(Number), r = X.getSquareModifiers(e, n, a, t);
			for (const e of r) e.squareBlockMovement && this.globalSquareBlockMods.push({
				piece: null,
				r: n,
				c: a,
				fn: e.squareBlockMovement
			});
		}
	}
}, vn = class {
	static isSteady(e) {
		return !!e && (!(!$.has(e, "KING_STEADY") && !$.has(e, "EQ_STABILIZER")) || !!e.skills?.includes("KING_STEADY") || !!e.traits?.includes("KING_STEADY") || !!e.equippedItems?.some((e) => "EQ_STABILIZER" === e.effectId));
	}
	static isHidden(e, t, n, i, a) {
		if (!e.statuses?.some((e) => e.id === _.INVISIBLE || e.id === _.CAMOUFLAGED)) return !1;
		let r = !1;
		for (let s = 0; s < 8; s++) {
			for (let e = 0; e < 8; e++) {
				const o = n[s][e];
				if (o && o.color === t && o.equippedItems?.some((e) => "EQ_SCOUT_RADAR" === e.effectId) && Math.max(Math.abs(i - s), Math.abs(a - e)) <= 2) {
					r = !0;
					break;
				}
			}
			if (r) break;
		}
		return !r;
	}
	static isInvulnerable(e, t, n, i, a, r, s) {
		const o = !0 === globalThis.isAISimulation, l = e.color === c;
		if (e.skills?.includes("HAPPY_PRINCE_IMMORTAL") || e.traits?.includes("HAPPY_PRINCE_IMMORTAL")) return l && !o && Y.emit(q, {
			key: "shieldBlocks",
			value: 1,
			isLifetimeOnly: !0
		}), !0;
		for (const c of Kn.globalInvulnerabilityMods) if ((c.piece.id === e.id || $.has(c.piece, "GENERIC_FIREWALL") || c.broadcast) && c.fn({
			board: n,
			piece: e,
			r: i,
			c: a,
			metadata: r,
			networkedMap: s
		}, t)) return l && !o && Y.emit(q, {
			key: "shieldBlocks",
			value: 1,
			isLifetimeOnly: !0
		}), !0;
		if (r?.squares) {
			const c = X.getSquareModifiers(n, i, a, r);
			for (const d of c) if (d.invulnerable && d.invulnerable({
				board: n,
				piece: e,
				r: i,
				c: a,
				metadata: r,
				networkedMap: s
			}, t)) return l && !o && Y.emit(q, {
				key: "shieldBlocks",
				value: 1,
				isLifetimeOnly: !0
			}), !0;
		}
		return !1;
	}
	static canAct(e, t, n, i, a, r, s) {
		return !!e && !e.statuses?.some((e) => e.id === _.PETRIFIED) && (!(!r?.lockedActionUid || r.lockedActionUid !== e.uid) || (e.statuses?.some((e) => e.id === _.FROZEN) ? !!$.has(e, "BYPASS_FROZEN") || X.getModifiers(e, n, i, a).some((t) => t.bypassFrozen && t.bypassFrozen({
			board: n,
			piece: e,
			r: i,
			c: a,
			metadata: r,
			networkedMap: s
		})) : !!t || !!$.has(e, "BYPASS_FROZEN") || X.getModifiers(e, n, i, a).some((t) => t.bypassFrozen && t.bypassFrozen({
			board: n,
			piece: e,
			r: i,
			c: a,
			metadata: r,
			networkedMap: s
		}))));
	}
}, kn = class {
	static {
		this.hookDepth = 0;
	}
	static {
		this.MAX_HOOK_DEPTH = 10;
	}
	static handleHook(e, t) {
		if (this.hookDepth > this.MAX_HOOK_DEPTH) return !1;
		this.hookDepth++;
		try {
			let n = !1, i = !1;
			const a = () => {
				n = !0, t.cancelAction && t.cancelAction();
			}, r = () => {
				i = !0, t.setNoSkip && t.setNoSkip();
			};
			"onDeath" === e && n && Y.emit(q, {
				key: "deathEvaded",
				value: 1,
				isLifetimeOnly: !0
			}), "onUse" === e && t.prng && Y.emit(q, {
				key: "rngTriggers",
				value: 1,
				isLifetimeOnly: !0
			});
			const s = t.subject || t.piece, o = "onDeath" === e ? t.victim || t.piece : t.victim, c = t.getStore?.() ?? null, l = {
				board: t.board,
				piece: t.piece,
				ownerPos: t.ownerPos,
				subject: s,
				r: t.r,
				c: t.c,
				from: t.from,
				attacker: t.attacker,
				attackerPos: t.attackerPos,
				victim: o,
				prng: t.prng,
				emit: (e) => {
					t.emit(e);
				},
				cancelAction: a,
				noSkip: i,
				setNoSkip: r,
				metadata: t.metadata || c?.metadata || {
					squares: {},
					globalJamming: 0
				},
				gold: t.gold ?? c?.gold ?? 0,
				roster: t.roster || c?.roster || [],
				deployedUids: t.deployedUids || c?.deployedUids || [],
				historyLength: t.historyLength ?? c?.historyLength ?? c?.history?.length ?? 0,
				reserves: t.reserves || c?.reserves || {
					W: {},
					B: {}
				},
				levelConstraints: t.levelConstraints || c?.levelConstraints || null,
				isAISimulation: t.isAISimulation ?? c?.isAISimulation ?? !1
			};
			if (!t.piece && "onUse" !== e) return !1;
			if (t.noSkip && (i = !0), t.piece) {
				const i = Z.isSilenced(t.piece), a = (i) => {
					for (const a of i) {
						const i = z.get(a);
						if (i?.hooks?.[e] && (!i.pieceType || i.pieceType === t.piece.type) && (i.hooks[e](l), n)) return !0;
					}
					return !1;
				};
				if (t.piece.statuses && a(t.piece.statuses.map((e) => e.id))) return !0;
				if (!i && a(z.getActiveSkillIds(t.piece))) return !0;
				if (t.piece.equippedItems && a(t.piece.equippedItems.map((e) => e.effectId))) return !0;
			}
			if ("onUse" !== e && t.board && t.piece) {
				const i = Dn.getActivePieces(t.board);
				for (const { piece: a, r, c: s } of i) {
					if (a.uid === t.piece.uid) continue;
					if (Z.isSilenced(a)) continue;
					const i = {
						...l,
						piece: a,
						ownerPos: {
							r,
							c: s
						}
					}, o = [
						...a.statuses?.map((e) => e.id) || [],
						...z.getActiveSkillIds(a),
						...a.equippedItems?.map((e) => e.effectId) || []
					];
					for (const t of o) {
						const a = z.get(t);
						if (a?.hooks?.[e] && a.tags?.includes("GLOBAL") && (a.hooks[e](i), n)) break;
					}
					if (n) break;
				}
			}
			return t.noSkip = i, n;
		} finally {
			this.hookDepth--;
		}
	}
	static handleSquareHook(e, t, n, i, a) {
		if (!a?.squares) return !1;
		const r = a.squares[`${t},${n}`];
		if (!r) return !1;
		let s = !1;
		for (const o of r) {
			const t = z.get(o.id);
			if (t?.hooks?.[e]) {
				const n = {
					...i,
					status: o,
					cancelAction: () => {
						s = !0;
					}
				};
				if (t.hooks[e](n), s) break;
			}
		}
		return s;
	}
}, Bn = class {
	static register(e) {
		z.register(e);
	}
	static getDefinition(e) {
		return z.get(e);
	}
	static getRegisteredSkills() {
		return z.getAllDefinitions();
	}
	static getAllSkills(e) {
		return z.getActiveSkillIds(e);
	}
	static hasSkill(e, t) {
		return z.hasSkill(e, t);
	}
	static getModifiers(e, t, n, i) {
		return X.getModifiers(e, t, n, i);
	}
	static getSquareModifiers(e, t, n, i) {
		return X.getSquareModifiers(e, t, n, i);
	}
	static hasModifier(e, t) {
		return X.hasModifier(e, t);
	}
	static isProxyKing(e) {
		return this.hasModifier(e, "proxyKing");
	}
	static isSteady(e, t, n, i) {
		return vn.isSteady(e);
	}
	static isSilenced(e, t, n, i) {
		return Z.isSilenced(e, t, n, i);
	}
	static isPieceFunctional(e, t, n, i, a, r, s) {
		return vn.canAct(e, t, n, i, a, r, s);
	}
	static isSuppressed(e, t, n, i) {
		return !1;
	}
	static isActionDestructive(e) {
		return !!e && [...e.learnedSkills || [], ...e.traits || []].some((e) => P.DESTRUCTIVE_SKILLS.includes(e));
	}
	static applyStatus(e, t, n, i) {
		Z.applyStatus(e, t, n, i);
	}
	static handleHook(e, t) {
		return kn.handleHook(e, t);
	}
	static handleSquareHook(e, t, n, i, a) {
		return kn.handleSquareHook(e, t, n, i, a);
	}
	static applyModifiers(e, t, n, i, a, r, s) {
		const o = this.getModifiers(t, n, i, a), c = (t.statuses || []).some((e) => e.id === _.FROZEN || e.id === _.PETRIFIED), l = o.some((e) => e.bypassFrozen && e.bypassFrozen({
			board: n,
			piece: t,
			r: i,
			c: a,
			metadata: r,
			networkedMap: s
		}));
		if (c && !l) return [];
		let d = [...e];
		for (const m of o) m.movement && (d = m.movement({
			board: n,
			piece: t,
			r: i,
			c: a,
			metadata: r,
			networkedMap: s
		}, d));
		r && (d = d.filter((e) => !this.getSquareModifiers(n, e.r, e.c, r).some((i) => i.squareBlockMovement && i.squareBlockMovement({
			board: n,
			piece: t,
			r: e.r,
			c: e.c,
			metadata: r
		}))));
		const E = [], u = /* @__PURE__ */ new Set();
		for (const m of d) {
			const e = `${m.r},${m.c}`;
			u.has(e) || (u.add(e), E.push(m));
		}
		return E.filter((e) => {
			const i = n[e.r][e.c];
			return !i || !i.statuses?.some((e) => e.id === _.PETRIFIED) && (!!i.statuses?.some((e) => e.id === _.FLATTENED) || (i.color === t.color || !vn.isHidden(i, t.color, n, e.r, e.c)) && (i.color === t.color ? !(!i.statuses?.some((e) => e.id === _.FLATTENED) || i.stackedPiece) || d.some((t) => t.r === e.r && t.c === e.c) : !vn.isInvulnerable(i, t, n, e.r, e.c, r, s)));
		});
	}
	static executePriceHooks(e, t) {
		const n = { value: t };
		for (const i of e) {
			for (const e of this.getAllSkills(i)) {
				const t = this.getDefinition(e);
				t?.hooks?.onPriceCalculate && t.hooks.onPriceCalculate({
					piece: i,
					priceRef: n
				});
			}
			i.equippedItems?.forEach((e) => {
				const t = this.getDefinition(e.effectId);
				t?.hooks?.onPriceCalculate && t.hooks.onPriceCalculate({
					piece: i,
					priceRef: n
				});
			});
		}
		return Math.max(5, n.value);
	}
};
const Hn = ({ board: e, r: t, c: n, piece: i, emit: a }) => {
	[
		[-1, -1],
		[-1, 1],
		[1, -1],
		[1, 1]
	].forEach(([r, s]) => {
		let o = t + r, c = n + s;
		for (; o >= 0 && o < 8 && c >= 0 && c < 8;) {
			const t = e[o][c];
			if (t && t.color !== i.color && t.type !== d.KING && a({
				type: "ADD_STATUS",
				pos: {
					r: o,
					c
				},
				statusId: _.SILENCED,
				duration: 2
			}), t) break;
			o += r, c += s;
		}
	});
}, Fn = [
	{
		id: "BISHOP_REFRACTION",
		name: "反射",
		tier: "COMMON",
		category: B,
		pieceType: d.BISHOP,
		description: "移动触碰边界时，可以按 90 度角折射继续滑行一格。",
		modifiers: { movement: ({ board: e, r: t, c: n }, i) => ([
			[-1, -1],
			[-1, 1],
			[1, -1],
			[1, 1]
		].forEach(([a, r]) => {
			let s = t + a, o = n + r;
			for (; s >= 0 && s < 8 && o >= 0 && o < 8 && !e[s][o];) s += a, o += r;
			if (s < 0 || s >= 8 || o < 0 || o >= 8) {
				const t = s - a, n = o - r, c = s < 0 || s >= 8, l = t + (c ? -a : a), d = n + (c ? r : -r);
				l >= 0 && l < 8 && d >= 0 && d < 8 && !e[l][d] && i.push({
					r: l,
					c: d,
					isSecondary: !0,
					midPos: {
						r: t,
						c: n
					}
				});
			}
		}), i) }
	},
	{
		id: "BISHOP_MIRROR",
		name: "镜像",
		tier: "COMMON",
		category: B,
		pieceType: d.BISHOP,
		description: "当斜线上有另一个己方\"象\"时，这两个象可以互相传送（交换位置）。",
		modifiers: { movement: ({ board: e, piece: t, r: n, c: i }, a) => ([
			[-1, -1],
			[-1, 1],
			[1, -1],
			[1, 1]
		].forEach(([r, s]) => {
			let o = n + r, c = i + s;
			for (; o >= 0 && o < 8 && c >= 0 && c < 8;) {
				const n = e[o][c];
				if (n) {
					n.color === t.color && n.type === d.BISHOP && a.push({
						r: o,
						c
					});
					break;
				}
				o += r, c += s;
			}
		}), a) },
		hooks: { onAfterMove: ({ from: e, piece: t, emit: n }) => {
			if (e && t.stackedPiece && t.stackedPiece.type === d.BISHOP) {
				const i = t.stackedPiece;
				n({
					type: "UPDATE_ROSTER_PIECE",
					pieceUid: t.uid,
					updates: { stackedPiece: null }
				}), n({
					type: "SPAWN",
					pos: e,
					piece: {
						...i,
						stackedPiece: null
					}
				});
			}
		} }
	},
	{
		id: "BISHOP_PHASE_SHIFT",
		name: "相位偏转",
		tier: "COMMON",
		category: B,
		pieceType: d.BISHOP,
		description: "允许象像\"车\"一样水平或垂直移动 1 格（但此移动不能吃子）。",
		modifiers: { movement: (e, t) => {
			const { board: n, r: i, c: a, piece: r, isControlSquares: s } = e;
			return [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1]
			].forEach(([e, o]) => {
				const c = i + e, l = a + o;
				if (c >= 0 && c < 8 && l >= 0 && l < 8) {
					const e = n[c][l];
					(!e || s && e.color === r.color) && t.push({
						r: c,
						c: l
					});
				}
			}), t;
		} }
	},
	{
		id: "BISHOP_AFTERSHOCK",
		name: "余震",
		tier: "COMMON",
		category: B,
		pieceType: d.BISHOP,
		description: "吃子后，落点周围 1 格的所有空格在下回合内，敌方无法进行\"库存部署\"。",
		hooks: { onKill: ({ r: e, c: t, piece: n, board: i, emit: a }) => {
			const r = n.color;
			for (let s = -1; s <= 1; s++) for (let n = -1; n <= 1; n++) {
				if (0 === s && 0 === n) continue;
				const o = e + s, c = t + n;
				o >= 0 && o < 8 && c >= 0 && c < 8 && (i[o][c] || a({
					type: "SET_SQUARE",
					pos: {
						r: o,
						c
					},
					status: {
						id: "BISHOP_AFTERSHOCK_SQUARE",
						duration: 4,
						metadata: { ownerColor: r }
					}
				}));
			}
		} }
	},
	{
		id: "BISHOP_PIERCE",
		name: "穿透狙击",
		tier: "RARE",
		category: B,
		pieceType: d.BISHOP,
		description: "可以穿过一个己方单位进行移动或者攻击。",
		modifiers: { movement: (e, t) => {
			const { board: n, r: i, c: a, piece: r, isControlSquares: s } = e;
			return [
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			].forEach(([e, o]) => {
				let c = i + e, l = a + o, E = !1;
				for (; c >= 0 && c < 8 && l >= 0 && l < 8;) {
					const i = n[c][l];
					if (i) {
						if (E || i.color !== r.color || i.type === d.KING) {
							(i.color !== r.color || s) && t.push({
								r: c,
								c: l
							});
							break;
						}
						E = !0, s && t.push({
							r: c,
							c: l
						});
					} else t.push({
						r: c,
						c: l
					});
					c += e, l += o;
				}
			}), t;
		} }
	},
	{
		id: "BISHOP_HOLY_LAND",
		name: "圣域",
		tier: "RARE",
		category: B,
		pieceType: d.BISHOP,
		tags: ["GLOBAL"],
		description: "该棋子斜线无视阻挡视为\"控制区\"。友军若部署在这些格子上，落地获得 1 回合临时网络（免于冻结）。",
		modifiers: { movement: ({ board: e, r: t, c: n, piece: i }, a) => ([
			[-1, -1],
			[-1, 1],
			[1, -1],
			[1, 1]
		].forEach(([i, r]) => {
			let s = t + i, o = n + r;
			for (; s >= 0 && s < 8 && o >= 0 && o < 8;) e[s][o] || a.push({
				r: s,
				c: o
			}), s += i, o += r;
		}), a) },
		hooks: { onDeploy: ({ piece: e, ownerPos: t, subject: n, r: i, c: a, emit: r }) => {
			t && n && e.color === n.color && (Math.abs(t.r - i) !== Math.abs(t.c - a) || t.r === i && t.c === a || (r({
				type: "ADD_STATUS",
				pos: {
					r: i,
					c: a
				},
				statusId: _.BACKUP_BUFFER_ACTIVE,
				duration: 2
			}), r({
				type: "SHOW_TEXT",
				text: "Holy Blessing!",
				textKey: "LOG_HOLY_BLESSING",
				style: "gold",
				pos: {
					r: i,
					c: a
				}
			})));
		} }
	},
	{
		id: "BISHOP_MIRROR_RESONANCE",
		name: "镜像共鸣",
		tier: "RARE",
		category: B,
		pieceType: d.BISHOP,
		description: "斜线方向若能看到另一只己方\"象\"（视线不被任何棋子遮挡），无论对方是否联网，该棋子始终视为已联网，并能像正常联网棋子一样向外提供网格连接。",
		modifiers: {
			alwaysNetworked: ({ board: e, r: t, c: n, piece: i }) => {
				for (const [a, r] of [
					[-1, -1],
					[-1, 1],
					[1, -1],
					[1, 1]
				]) {
					let s = t + a, o = n + r;
					for (; s >= 0 && s < 8 && o >= 0 && o < 8;) {
						const t = e[s][o];
						if (t && t.color === i.color && t.type === d.BISHOP && t !== i) return [{
							r: s,
							c: o
						}];
						if (t) break;
						s += a, o += r;
					}
				}
				return !1;
			},
			networkSource: ({ board: e, r: t, c: n, piece: i }) => {
				for (const [a, r] of [
					[-1, -1],
					[-1, 1],
					[1, -1],
					[1, 1]
				]) {
					let s = t + a, o = n + r;
					for (; s >= 0 && s < 8 && o >= 0 && o < 8;) {
						const t = e[s][o];
						if (t && t.color === i.color && t.type === d.BISHOP && t !== i) return !0;
						if (t) break;
						s += a, o += r;
					}
				}
				return !1;
			}
		}
	},
	{
		id: "BISHOP_RECALL",
		name: "应急回存",
		tier: "RARE",
		category: B,
		pieceType: d.BISHOP,
		description: "主动技能：可以将该棋子撤回库存。每局限一次，再部署后失效。",
		range: {
			type: "chebyshev",
			radius: 0
		},
		activeSpec: {
			targeting: "self",
			usesKey: "recallUses",
			maxUses: 1,
			execute: (e, t, n, i, a, r) => {
				(i.metadata?.recallUses || 0) >= 1 || (r({
					type: "MODIFY_RESERVE",
					color: i.color,
					pieceType: i.type,
					amount: 1
				}), r({
					type: "UNDEPLOY_PIECE",
					uid: i.uid
				}), r({
					type: "REMOVE_PIECE",
					pos: {
						r: t,
						c: n
					}
				}), r({
					type: "UPDATE_ROSTER_PIECE",
					pieceUid: i.uid,
					updates: { metadata: {
						...i.metadata,
						recallUses: (i.metadata?.recallUses || 0) + 1
					} }
				}), r({
					type: "SHOW_TEXT",
					text: "Recalled",
					textKey: "LOG_RECALLED",
					style: "system"
				}));
			}
		}
	},
	{
		id: "BISHOP_CONDUIT",
		name: "远程授能",
		tier: "EPIC",
		category: B,
		pieceType: d.BISHOP,
		description: "只要象连通，即使有阻挡也能为斜线上所有友军提供网络连接。",
		modifiers: { networkRange: ({ r: e, c: t }) => {
			const n = [];
			return [
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			].forEach(([i, a]) => {
				let r = e + i, s = t + a;
				for (; r >= 0 && r < 8 && s >= 0 && s < 8;) n.push({
					r,
					c: s
				}), r += i, s += a;
			}), n;
		} }
	},
	{
		id: "BISHOP_SILENCE",
		name: "禁魔",
		tier: "EPIC",
		category: B,
		pieceType: d.BISHOP,
		description: "被该棋子攻击控制范围覆盖的敌方棋子无法触发主动技能。",
		hooks: {
			onAfterMove: Hn,
			onTurnStart: Hn,
			onDeploy: Hn
		}
	},
	{
		id: "BISHOP_OPTICAL_BLIND_ZONE",
		name: "光学死角",
		tier: "EPIC",
		category: B,
		pieceType: d.BISHOP,
		description: "免疫直线远程攻击（1格之外的车、后打击）。",
		modifiers: { invulnerable: ({ board: e, r: t, c: n }, i) => {
			const a = V.findPieces(e, (e) => e.id === i.id)[0], r = a ? a.r : i._lastPos?.r, s = a ? a.c : i._lastPos?.c;
			if (void 0 !== r && void 0 !== s) {
				const e = Math.abs(r - t), i = Math.abs(s - n);
				return (0 === e || 0 === i) && (e > 1 || i > 1);
			}
			return !1;
		} }
	},
	{
		id: "BISHOP_ZEALOT",
		name: "狂热",
		tier: "EPIC",
		category: B,
		pieceType: d.BISHOP,
		description: "吃子后下回合变\"后\"滑行，若持续吃子则效果延续。",
		hooks: { onKill: ({ piece: e, r: t, c: n, emit: i }) => {
			i({
				type: "ADD_STATUS",
				pos: {
					r: t,
					c: n
				},
				statusId: _.ZEALOT_BUFF,
				duration: 3
			}), i({
				type: "SHOW_TEXT",
				text: "Zealot!",
				textKey: "LOG_ZEALOT",
				style: "gold",
				pos: {
					r: t,
					c: n
				}
			});
		} }
	},
	{
		id: "BISHOP_SACRED_ZONE",
		name: "神圣领域",
		tier: "EPIC",
		category: B,
		pieceType: d.BISHOP,
		description: "斜线上敌军被冻结 1 回合。对王和后无效。",
		hooks: { onTurnStart: ({ board: e, r: t, c: n, piece: i, emit: a }) => {
			[
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			].forEach(([r, s]) => {
				let o = t + r, c = n + s;
				for (; o >= 0 && o < 8 && c >= 0 && c < 8;) {
					const t = e[o][c];
					t && t.color !== i.color && t.type !== d.KING && t.type !== d.QUEEN && (t.statuses?.some((e) => e.id === _.FROZEN) || a({
						type: "ADD_STATUS",
						pos: {
							r: o,
							c
						},
						statusId: _.FROZEN,
						duration: 2
					})), o += r, c += s;
				}
			});
		} }
	},
	{
		id: "BISHOP_CONVERSION",
		name: "洗礼",
		tier: "EPIC",
		category: B,
		pieceType: d.BISHOP,
		description: "主动：将一名相邻的敌方非王非后单位永久转化为己方，转化后该单位保留原有全部技能装备，该象随后损毁。",
		range: {
			type: "chebyshev",
			radius: 1
		},
		activeSpec: {
			targeting: "target",
			getAlternatives: (e, t, n, i) => {
				const a = [];
				for (const [r, s] of [
					[-1, -1],
					[-1, 0],
					[-1, 1],
					[0, -1],
					[0, 1],
					[1, -1],
					[1, 0],
					[1, 1]
				]) {
					const o = t + r, c = n + s;
					if (V.isValidPos(o, c)) {
						const t = e[o][c];
						t && t.color !== i.color && t.type !== d.KING && t.type !== d.QUEEN && a.push({
							pos: {
								r: o,
								c
							},
							value: {
								r: o,
								c
							}
						});
					}
				}
				return a;
			},
			getAoE: (e, t, n, i, a) => a ? [{
				r: a.r,
				c: a.c
			}] : [],
			execute: (e, t, n, i, a, r) => {
				if (a) {
					const s = e[a.r][a.c];
					if (s) {
						const e = `u-${Date.now()}`, o = {
							...s,
							color: i.color,
							statuses: [],
							uid: e,
							skills: s.skills ?? [],
							learnedSkills: s.learnedSkills ?? [],
							equippedItems: s.equippedItems ?? []
						};
						r({
							type: "ADD_TO_ROSTER",
							piece: o
						}), r({
							type: "SPAWN",
							pos: a,
							piece: o
						}), r({
							type: "REMOVE_FROM_ROSTER",
							pieceUid: i.uid
						}), r({
							type: "UNDEPLOY_PIECE",
							uid: i.uid
						}), r({
							type: "REMOVE_PIECE",
							pos: {
								r: t,
								c: n
							}
						}), r({
							type: "SHOW_TEXT",
							text: "Conversion",
							textKey: "LOG_CONVERSION",
							style: "gold",
							pos: a
						});
					}
				}
			}
		}
	},
	{
		id: "BISHOP_HOLY_LIGHT",
		name: "圣光",
		tier: "RARE",
		category: B,
		pieceType: d.BISHOP,
		description: "每回合开始时，象周围 1 格的友军负面状态清除。",
		range: {
			type: "chebyshev",
			radius: 1
		},
		hooks: { onTurnStart: ({ board: e, r: t, c: n, piece: i, emit: a }) => {
			const r = [
				_.FROZEN,
				_.PETRIFIED,
				_.SKILL_LOCKED,
				_.SILENCED,
				_.INFECTED,
				_.BETRAYED,
				_.GRAVITY_LOCKED,
				_.AURA_SUPPRESSED
			];
			for (const [s, o] of [
				[-1, -1],
				[-1, 0],
				[-1, 1],
				[0, -1],
				[0, 1],
				[1, -1],
				[1, 0],
				[1, 1]
			]) {
				const c = t + s, l = n + o;
				if (V.isValidPos(c, l)) {
					const t = e[c][l];
					t && t.color === i.color && r.forEach((e) => {
						t.statuses?.some((t) => t.id === e) && a({
							type: "REMOVE_STATUS",
							pos: {
								r: c,
								c: l
							},
							statusId: e
						});
					});
				}
			}
		} }
	},
	{
		id: "BISHOP_RESURRECTION",
		name: "复活术",
		tier: "LEGENDARY",
		category: B,
		pieceType: d.BISHOP,
		description: "吃掉敌方棋子时，随机将一个本局阵亡的友方棋子放回库存。",
		hooks: { onKill: ({ piece: e, emit: t, roster: n, deployedUids: i, board: a, prng: r, victim: s }) => {
			const o = n || [], c = i || [], l = /* @__PURE__ */ new Set();
			for (let d = 0; d < 8; d++) for (let t = 0; t < 8; t++) {
				const n = a[d][t];
				n && n.uid && n.color === e.color && l.add(n.uid);
			}
			const E = o.filter((t) => !(t.type === d.KING || !t.uid) && t.color === e.color && c.includes(t.uid) && !l.has(t.uid));
			if (E.length > 0 && r) {
				const n = E[Math.floor(r.next() * E.length)];
				t({
					type: "MODIFY_RESERVE",
					color: e.color,
					pieceType: n.type,
					amount: 1
				}), n.uid && t({
					type: "UNDEPLOY_PIECE",
					uid: n.uid
				}), t({
					type: "SHOW_TEXT",
					text: `Resurrected: ${n.type}`,
					textKey: "LOG_RESURRECT",
					textParams: { type: n.type },
					style: "gold"
				});
			}
		} }
	},
	{
		id: "BISHOP_AURORA",
		name: "极光",
		tier: "LEGENDARY",
		category: B,
		pieceType: d.BISHOP,
		aiThreat: {
			level: "LETHAL",
			piercesTerrain: !0
		},
		description: "主动技能：不移动，直接狙击吃掉斜线上任何位置的一个敌方棋子。",
		range: {
			type: "diagonal",
			radius: 7
		},
		activeSpec: {
			targeting: "target",
			getAlternatives: (e, t, n, i) => {
				const a = [];
				return [
					[-1, -1],
					[-1, 1],
					[1, -1],
					[1, 1]
				].forEach(([r, s]) => {
					let o = t + r, c = n + s;
					for (; o >= 0 && o < 8 && c >= 0 && c < 8;) {
						const t = e[o][c];
						if (t && t.color !== i.color && t.type !== d.KING && a.push({
							pos: {
								r: o,
								c
							},
							value: {
								r: o,
								c
							}
						}), t) break;
						o += r, c += s;
					}
				}), a;
			},
			getAoE: (e, t, n, i, a) => a ? [{
				r: a.r,
				c: a.c
			}] : [],
			execute: (e, t, n, i, a, r, s) => {
				if (a) {
					const e = a.r - t, i = a.c - n;
					r({
						type: "KILL",
						pos: a
					}), r({
						type: "SHOW_TEXT",
						text: "Aurora Snipe",
						textKey: "LOG_AURORA",
						style: "system"
					}), s && !s.isAISimulation && Math.max(Math.abs(e), Math.abs(i)) >= 6 && Y.emit(q, {
						key: "bishopSnipe6",
						value: 1,
						isLifetimeOnly: !0
					});
				}
			}
		}
	},
	{
		id: "BISHOP_ABSOLUTE_BARRIER",
		name: "绝对防线",
		tier: "LEGENDARY",
		category: B,
		pieceType: d.BISHOP,
		description: "敌方棋子无法在不吃子的情况下，停留在该象的对角线控制格上。",
		modifiers: { squareBlockMovement: ({ board: e, r: t, c: n, piece: i }) => !!V.findPieces(e, (e) => e.color !== i.color && e.type === d.BISHOP && e.skills.includes("BISHOP_ABSOLUTE_BARRIER")).some(({ r: i, c: a }) => Math.abs(i - t) === Math.abs(a - n) && !e[t][n]) }
	},
	{
		id: "EQ_REFRACTION_LENS",
		name: "折射透镜",
		tier: "RARE",
		category: F,
		pieceType: d.BISHOP,
		description: "象的路径上有友军时，可以改变方向移动 2 格（90度折射）。",
		modifiers: { movement: (e, t) => {
			const { board: n, r: i, c: a, piece: r, isControlSquares: s } = e;
			return [
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			].forEach(([e, o]) => {
				let c = i + e, l = a + o;
				for (; c >= 0 && c < 8 && l >= 0 && l < 8;) {
					const i = n[c][l];
					if (i) {
						i.color === r.color && [[-o, e], [o, -e]].forEach(([e, i]) => {
							let a = c + e, o = l + i;
							if (a >= 0 && a < 8 && o >= 0 && o < 8) {
								const c = n[a][o];
								if ((!c || s && c.color === r.color) && t.push({
									r: a,
									c: o
								}), !c && (a += e, o += i, a >= 0 && a < 8 && o >= 0 && o < 8)) {
									const e = n[a][o];
									(!e || s && e.color === r.color || e.color !== r.color) && t.push({
										r: a,
										c: o
									});
								}
							}
						});
						break;
					}
					c += e, l += o;
				}
			}), t;
		} }
	},
	{
		id: "EQ_FAITH_SIPHON",
		name: "信仰汲取",
		tier: "RARE",
		category: F,
		pieceType: d.BISHOP,
		description: "每当象斜线上的单位阵亡，玩家获得 2 金币。",
		tags: ["GLOBAL"],
		hooks: { onDeath: ({ board: e, piece: t, ownerPos: n, subject: i, r: a, c: r, emit: s }) => {
			if (n && i && "number" == typeof a && "number" == typeof r && t.color === c) {
				const t = Math.abs(n.r - a);
				if (t === Math.abs(n.c - r) && t > 0) {
					const t = Math.sign(a - n.r), i = Math.sign(r - n.c);
					let o = n.r + t, c = n.c + i, l = !1;
					for (; o !== a && c !== r;) {
						if (e[o][c]) {
							l = !0;
							break;
						}
						o += t, c += i;
					}
					l || (s({
						type: "MODIFY_GOLD",
						amount: 2,
						reason: "FAITH_SIPHON",
						pos: {
							r: a,
							c: r
						}
					}), s({
						type: "SHOW_TEXT",
						text: "Faith Siphon +2",
						textKey: "LOG_FAITH_SIPHON",
						style: "gold",
						pos: {
							r: a,
							c: r
						}
					}));
				}
			}
		} }
	},
	{
		id: "BISHOP_SHADOW_SWAP",
		name: "暗影置换",
		tier: "EPIC",
		category: B,
		pieceType: d.BISHOP,
		description: "主动：与斜线视距内的一名非王敌军互换位置，并冻结目标 1 回合。",
		range: {
			type: "diagonal",
			radius: 7
		},
		activeSpec: {
			targeting: "target",
			getAlternatives: (e, t, n, i) => {
				const a = [];
				for (const [r, s] of [
					[-1, -1],
					[-1, 1],
					[1, -1],
					[1, 1]
				]) {
					let o = t + r, c = n + s;
					for (; V.isValidPos(o, c);) {
						const t = e[o][c];
						if (t) {
							t.color === i.color || t.type === d.KING || Bn.isSteady(t, e, o, c) || a.push({
								pos: {
									r: o,
									c
								},
								value: {
									r: o,
									c
								}
							});
							break;
						}
						o += r, c += s;
					}
				}
				return a;
			},
			getAoE: (e, t, n, i, a) => a ? [{
				r: a.r,
				c: a.c
			}] : [],
			execute: (e, t, n, i, a, r) => {
				if (!a) return;
				const s = e[a.r][a.c];
				s && (Bn.isSteady(s, e, a.r, a.c) || (r({
					type: "PLAY_SOUND",
					soundId: "WORMHOLE"
				}), r({
					type: "SWAP_PIECES",
					posA: {
						r: t,
						c: n
					},
					posB: a,
					actorColor: i.color
				}), r({
					type: "ADD_STATUS",
					pos: {
						r: t,
						c: n
					},
					statusId: _.FROZEN,
					duration: 2
				}), r({
					type: "SHOW_TEXT",
					text: "暗影置换！",
					textKey: "LOG_SHADOW_SWAP",
					style: "danger",
					pos: {
						r: t,
						c: n
					}
				})));
			}
		}
	}
];
var wn = class {
	static resolve(e, t, n) {
		const i = t.isAISimulation || !0 === globalThis.isAISimulation, a = [], r = Re.build(t.board, t.metadata);
		if ("use_skill" === e.type && e.from && e.skillId) {
			const n = t.board[e.from.r][e.from.c], i = Bn.getDefinition(e.skillId);
			return n && Z.isSilenced(n, t.board, e.from.r, e.from.c) || n && i && i.activeSpec && i.activeSpec.execute(t.board, e.from.r, e.from.c, n, e.choice, (e) => a.push(e), {
				board: t.board,
				piece: n,
				r: e.from.r,
				c: e.from.c,
				emit: (e) => a.push(e),
				metadata: t.metadata,
				gold: t.gold,
				roster: t.roster,
				deployedUids: t.deployedUids
			}), a;
		}
		if ("deploy" === e.type && e.to && e.pieceType) return this.resolveDeploy(e, t, n, i);
		const s = e.from, o = e.to;
		if ("strike" === e.type) {
			const e = t.board[s.r][s.c], n = t.board[o.r][o.c];
			if (!e || !n || n.color === e.color) return a;
			if (r.invulnerable.some((i) => !(i.pieceUid !== n.uid && !i.broadcast && !Bn.hasSkill(e, "GENERIC_FIREWALL")) && i.fn({
				board: t.board,
				piece: n,
				r: o.r,
				c: o.c,
				metadata: t.metadata
			}, e))) {
				const e = "zh" === yn.getState().language || "tw" === yn.getState().language ? "免疫，无法攻击" : "IMMUNE: ATTACK BLOCKED";
				return a.push({
					type: "PLAY_SOUND",
					soundId: "SHIELD"
				}, {
					type: "SHOW_TEXT",
					text: e,
					textKey: "LOG_IMMUNE_BLOCKED",
					style: "danger",
					pos: o
				}), a;
			}
			return a.push({
				type: "KILL",
				pos: o,
				from: s
			}), a;
		}
		if ("swap" === e.type) return oe(t.board, s.r, s.c, t.metadata, t.levelConstraints, r).some((e) => e.r === o.r && e.c === o.c) ? (a.push({
			type: "SWAP_PIECES",
			posA: s,
			posB: o,
			actorColor: t.board[s.r][s.c]?.color
		}), a) : a;
		if ("move" === e.type) {
			const e = oe(t.board, s.r, s.c, t.metadata, t.levelConstraints, r).find((e) => e.r === o.r && e.c === o.c);
			if (!e) return a;
			if (e.isSecondary && e.midPos) {
				const t = e.midPos;
				a.push({
					type: "MOVE",
					from: s,
					to: t
				}, {
					type: "DELAY",
					duration: 80
				}, {
					type: "MOVE",
					from: t,
					to: o
				});
			} else a.push({
				type: "MOVE",
				from: s,
				to: o
			});
			return a;
		}
		return a;
	}
	static resolveDeploy(e, t, n, i) {
		const a = t.turn, r = e.pieceType, { r: s, c: o } = e.to;
		if (t.deployBlockedForTurn) return this.handleDeployFailure(t, "额外行动状态下禁止部署新单位，只能移动场上棋子", i);
		if (s < 0 || s > 7 || o < 0 || o > 7) return this.handleDeployFailure(t, `部署坐标越界: (${s}, ${o})`, i);
		if (null !== t.board[s][o]) return this.handleDeployFailure(t, `目标格 (${s}, ${o}) 已被棋子占用`, i);
		if (pe(s, o, t.metadata)) return this.handleDeployFailure(t, `目标格 (${s}, ${o}) 存在物理障碍，禁止部署`, i);
		const l = t.metadata?.cache, E = a === c ? l?.whiteDeployZone : l?.blackDeployZone;
		if (!E || !E[s][o]) return this.handleDeployFailure(t, `目标格 (${s}, ${o}) 不处于己方网络的控制辐射内`, i);
		const u = t.reserves[a];
		if (!u || (u[r] || 0) <= 0) return this.handleDeployFailure(t, `储备库不足，无法部署单位: ${r}`, i);
		const m = n ? n(r) : {
			id: `sim-${Ie().slice(0, 8)}`,
			uid: `sim-u-${Ie().slice(0, 8)}`,
			type: r,
			color: a,
			level: 1,
			skills: [],
			statuses: [],
			maxSlots: r === d.KING ? 3 : 1,
			equippedItems: []
		};
		if (!m) return this.handleDeployFailure(t, `无法创建棋子实例: ${r}`, i);
		e.recordedUid && (m.uid = e.recordedUid), e.recordedId && (m.id = e.recordedId), e.recordedUid = m.uid, e.recordedId = m.id;
		const _ = [{
			type: "SPAWN",
			pos: e.to,
			piece: m
		}, {
			type: "MODIFY_RESERVE",
			color: a,
			pieceType: r,
			amount: -1
		}];
		return m.uid && _.push({
			type: "RECORD_DEPLOY",
			uid: m.uid
		}), _;
	}
	static handleDeployFailure(e, t, n) {
		if (n) throw new Error(`INVALID_DEPLOY_INTENT: ${t}`);
		return [{
			type: "SHOW_TEXT",
			text: "SIGNAL LOST: DEPLOY BLOCKED",
			textKey: "LOG_DEPLOY_FAILED",
			style: "danger"
		}, {
			type: "SWITCH_TURN",
			nextTurn: e.turn === c ? l : c
		}];
	}
}, xn = class {
	static generateAllActions(e, t) {
		const { board: n, turn: i, metadata: a, reserves: r, hasDeployedThisTurn: s } = e, o = Re.build(n, a), c = [], l = a.lockedActionUid;
		if (!t && !s && !l) {
			const t = ce(n, i, a, e.levelConstraints);
			if (t.length > 0) {
				const e = r[i];
				for (const n of Object.keys(e)) if (e[n] && e[n] > 0) for (const e of t) c.push({
					type: "deploy",
					to: e,
					pieceType: n
				});
			}
		}
		for (let d = 0; d < 8; d++) for (let r = 0; r < 8; r++) {
			const s = n[d][r];
			if (s && s.color === i) {
				if (l && s.uid !== l) continue;
				if (!t && !Z.isSilenced(s, n, d, r)) {
					const t = [...Bn.getAllSkills(s) || [], ...s.equippedItems?.map((e) => e.effectId) || []];
					for (const i of t) {
						const t = Bn.getDefinition(i);
						if (t && t.activeSpec) {
							const a = t.activeSpec;
							if (a.cooldownKey && (s.metadata?.[a.cooldownKey] || 0) > 0) continue;
							if (a.usesKey && (s.metadata?.[a.usesKey] || 0) >= (a.maxUses || Infinity)) continue;
							if ("self" === a.targeting) c.push({
								type: "use_skill",
								from: {
									r: d,
									c: r
								},
								skillId: i,
								choice: null
							});
							else if (a.getAlternatives) {
								const t = {
									board: n,
									piece: s,
									r: d,
									c: r,
									emit: () => {},
									metadata: e.metadata,
									gold: e.gold,
									roster: e.roster,
									deployedUids: e.deployedUids,
									prng: e.prng
								}, o = a.getAlternatives(n, d, r, s, t);
								for (const e of o) c.push({
									type: "use_skill",
									from: {
										r: d,
										c: r
									},
									skillId: i,
									choice: e.value
								});
							}
						}
					}
				}
				const E = oe(n, d, r, a, e.levelConstraints, o), u = Bn.getAllSkills(s).some((e) => P.REMOTE_STRIKE_SKILLS.includes(e)) || s.equippedItems && s.equippedItems.some((e) => P.REMOTE_STRIKE_ITEMS.includes(e.effectId));
				for (const e of E) {
					const a = n[e.r][e.c], o = !(!a || a.color === i);
					t && !o || (u && o && !Z.isSilenced(s, n, d, r) ? c.push({
						type: "strike",
						from: {
							r: d,
							c: r
						},
						to: {
							r: e.r,
							c: e.c
						}
					}) : a && a.color === i ? t || c.push({
						type: "swap",
						from: {
							r: d,
							c: r
						},
						to: {
							r: e.r,
							c: e.c
						}
					}) : c.push({
						type: "move",
						from: {
							r: d,
							c: r
						},
						to: e
					}));
				}
			}
		}
		return c;
	}
};
const Wn = {
	[d.PAWN]: 100,
	[d.KNIGHT]: 320,
	[d.BISHOP]: 330,
	[d.ROOK]: 500,
	[d.QUEEN]: 900,
	[d.KING]: 5e4
};
var Vn = class {
	static isCapture(e, t) {
		if ("strike" === t.type) return !0;
		if ("move" === t.type && t.from && t.to) {
			const n = e.board[t.to.r][t.to.c], i = e.board[t.from.r][t.from.c];
			return !(!n || !i || n.color === i.color);
		}
		return !1;
	}
	static SEE_Approx(e, t) {
		if (!t.from || !t.to) return 0;
		const n = e.board[t.from.r][t.from.c], i = e.board[t.to.r][t.to.c];
		if (!n || !i) return 0;
		const a = Wn[n.type] || 0, r = Wn[i.type] || 0, s = n.color === c ? l : c, o = e.metadata.cache ? s === c ? e.metadata.cache.whiteNetwork : e.metadata.cache.blackNetwork : void 0;
		let d = !1;
		for (let c = 0; c < 8; c++) {
			for (let n = 0; n < 8; n++) {
				const i = e.board[c][n];
				if (i && i.color === s) {
					const i = ue(e.board, c, n, o, e.metadata);
					for (let e = 0; e < i.length; e++) if (i[e].r === t.to.r && i[e].c === t.to.c) {
						d = !0;
						break;
					}
				}
				if (d) break;
			}
			if (d) break;
		}
		return d ? r - a : r;
	}
	static isKingInCheck(e, t) {
		let n = -1, i = -1;
		for (let s = 0; s < 8; s++) {
			for (let a = 0; a < 8; a++) {
				const r = e.board[s][a];
				if (r?.type === d.KING && r.color === t) {
					n = s, i = a;
					break;
				}
			}
			if (-1 !== n) break;
		}
		if (-1 === n) return !1;
		const a = t === c ? l : c, r = e.metadata.cache ? a === c ? e.metadata.cache.whiteNetwork : e.metadata.cache.blackNetwork : void 0;
		for (let s = 0; s < 8; s++) for (let t = 0; t < 8; t++) {
			const o = e.board[s][t];
			if (o && o.color === a) {
				const a = ue(e.board, s, t, r, e.metadata);
				for (let e = 0; e < a.length; e++) if (a[e].r === n && a[e].c === i) return !0;
			}
		}
		return !1;
	}
	static isBadCapture(e, t) {
		return ("move" === t.type || "strike" === t.type) && !!t.to && e.board[t.to.r][t.to.c]?.type !== d.KING && !this.isKingInCheck(e, e.turn) && this.SEE_Approx(e, t) < -50;
	}
}, Qn = class {
	static evaluate(e, t) {
		if (e.winner === l) return t === l ? 1e6 : -1e6;
		if (e.winner === c) return t === c ? 1e6 : -1e6;
		let n = 0;
		const { board: i, metadata: a } = e;
		if (t === c && e.levelConstraints?.proxyKing) {
			let e = !1, t = 0;
			i.forEach((n) => n.forEach((n) => {
				n && n.color === l && (n.type === d.KING || Bn.isProxyKing(n) ? e = !0 : t++);
			})), !e && t > 0 && (n += 8e4);
		}
		let r = null, s = null;
		const o = [], E = [];
		for (let l = 0; l < 8; l++) for (let e = 0; e < 8; e++) {
			const t = i[l][e];
			t && (t.type === d.KING ? t.color === c ? r = {
				r: l,
				c: e
			} : s = {
				r: l,
				c: e
			} : t.color === c ? o.push({
				r: l,
				c: e
			}) : E.push({
				r: l,
				c: e
			}));
		}
		const u = a.cache ? a.cache.whiteNetwork : void 0, m = a.cache ? a.cache.blackNetwork : void 0;
		let _ = 0, A = 0, p = 0, O = 0;
		const h = Array(8).fill(!1).map(() => Array(8).fill(!1)), R = Array(8).fill(!1).map(() => Array(8).fill(!1));
		for (let l = 0; l < 8; l++) for (let e = 0; e < 8; e++) {
			const t = i[l][e];
			t && (t.color === c ? ue(i, l, e, u, a).forEach((e) => h[e.r][e.c] = !0) : ue(i, l, e, m, a).forEach((e) => R[e.r][e.c] = !0));
		}
		for (let c = 0; c < 8; c++) for (let e = 0; e < 8; e++) {
			h[c][e] && p++, R[c][e] && O++;
			const t = a.squares?.[`${c},${e}`] || [];
			for (const i of t) i.id === I && (R[c][e] && (n += 30), h[c][e] && (n -= 30));
		}
		i.forEach((e, t) => e.forEach((e, n) => {
			if (!e) return;
			const a = e.color === l, r = a ? !m || m[t][n] : !u || u[t][n];
			let s = 0;
			const o = Bn.getModifiers(e, i, t, n).find((e) => e.pieceValueOverride)?.pieceValueOverride?.({
				board: i,
				piece: e,
				r: t,
				c: n
			});
			s = void 0 !== o ? o : Wn[e.type] || 0;
			const c = {
				FROZEN: .8 * -s,
				PETRIFIED: .9 * -s,
				SILENCED: -30,
				SHIELDED: 50,
				INVISIBLE: 30,
				BETRAYED: 2 * -s,
				GRAVITY_LOCKED: -20,
				OVERLOADED: 40
			};
			e.statuses?.forEach((e) => s += c[e.id] || 0), r || e.type === d.KING || (s *= .2), Bn.getAllSkills(e).forEach((e) => {
				const t = Bn.getDefinition(e);
				s += {
					COMMON: 20,
					RARE: 60,
					EPIC: 150,
					LEGENDARY: 400
				}[t?.tier || "COMMON"];
			}), e.equippedItems?.forEach((e) => {
				s += {
					COMMON: 30,
					RARE: 80,
					EPIC: 200,
					LEGENDARY: 500
				}[e.tier || "COMMON"];
			}), a ? A += s : _ += s;
		}));
		const T = e.reserves;
		if (T) for (const d of Object.keys(T[c])) _ += (T[c][d] || 0) * (Wn[d] || 0) * .8, A += (T[l][d] || 0) * (Wn[d] || 0) * .8;
		n += A - _, n += 8 * (O - p), Vn.isKingInCheck(e, l) && (n -= 500), Vn.isKingInCheck(e, c) && (n += 500);
		const S = (e, t) => {
			if (!e) return 0;
			let n = 0;
			if (0 !== e.r && 7 !== e.r || 0 !== e.c && 7 !== e.c || !(t.length >= 2) || (n += 450), t.length > 0) {
				let i = Infinity, a = 0;
				for (const n of t) {
					const t = Math.abs(e.r - n.r) + Math.abs(e.c - n.c);
					t < i && (i = t), a += t;
				}
				const r = a / t.length;
				i > 2 && (n += 180 * (i - 2)), r > 3.5 && (n += 60 * (r - 3.5));
			}
			return n;
		};
		n += S(r, o), n -= S(s, E);
		const g = n + .1 * ((_ + A + p + O) % 5);
		return t === c ? -g : g;
	}
};
Bn.register(Fn), Bn.register(Se), Bn.register(Le), Bn.register(ge), Bn.register(Ne), Bn.register(fe), Bn.register(Be), Bn.register(Fe), Bn.register(Ce);
const Yn = new class {
	constructor() {
		this.nodesVisited = 0, this.qNodesVisited = 0, this.prunedNodes = 0, this.startTime = 0, this.timeout = !1, this.thinkingColor = c, this.TIME_LIMIT = 1200, this.historyTable = new Int32Array(4096), this.killerMoves = [], this.ttCache = /* @__PURE__ */ new Map(), this.positionHistory = /* @__PURE__ */ new Map(), this.lastRootHash = null;
	}
	clearPositionHistory() {
		this.positionHistory.clear(), this.lastRootHash = null;
	}
	async computeMove(e, t = "normal") {
		this.nodesVisited = 0, this.qNodesVisited = 0, this.prunedNodes = 0, this.startTime = Date.now(), this.timeout = !1, this.thinkingColor = e.turn;
		let n = "hard" === t ? 4e3 : 1200, i = "hard" === t ? 6 : 4;
		this.TIME_LIMIT && (n = this.TIME_LIMIT), this.killerMoves = Array(32).fill(null).map(() => []);
		for (let d = 0; d < 4096; d++) this.historyTable[d] >>= 1;
		this.ttCache.size > 1e5 && this.ttCache.clear();
		const a = this.getHash(e);
		this.positionHistory.size > 0 && null !== this.lastRootHash && !this.positionHistory.has(a) && this.positionHistory.clear(), this.lastRootHash = a;
		const r = (this.positionHistory.get(a) ?? 0) + 1;
		this.positionHistory.set(a, r), this.positionHistory.size > 300 && (this.positionHistory.clear(), this.positionHistory.set(a, 1));
		const s = bn.fastCloneContext(e);
		s.metadata.cache || (s.metadata.cache = Oe.recompute(s.board, s.metadata, s.turn, s.levelConstraints, !0)), e.turn;
		let o = null, c = 0, l = 0;
		this.thinkingColor;
		this.checkTimeout = (e = n) => Date.now() - this.startTime > e && (this.timeout = !0, !0);
		for (let d = 1; d <= i; d++) {
			const e = this.search(s, d, -Infinity, Infinity, !0, 0);
			if (this.timeout) {
				o || (o = e.action);
				break;
			}
			if (l = d, o = e.action || o, c = e.score, c > 4e4) break;
		}
		if (o && !this.timeout) {
			const e = bn.fastCloneContext(s), t = this.makeMove(e, o), n = this.getHash(e);
			this.unmakeMove(e, t);
			if ((this.positionHistory.get(n) ?? 0) >= 2) {
				const e = xn.generateAllActions(s, !1), t = this.ttCache.get(this.getHash(s))?.bestAction ?? null;
				this.sortActions(e, s, l, t);
				let n = null;
				for (const i of e) {
					const e = bn.fastCloneContext(s), t = this.makeMove(e, i), a = this.getHash(e);
					if (this.unmakeMove(e, t), (this.positionHistory.get(a) ?? 0) < 2) {
						n = i;
						break;
					}
				}
				n && (o = n);
			}
		}
		if (o && !this.validateIntentSafety(o, s)) {
			const e = xn.generateAllActions(s, !1), t = this.ttCache.get(this.getHash(s))?.bestAction ?? null;
			this.sortActions(e, s, l, t);
			let n = null;
			for (const i of e) if (this.validateIntentSafety(i, s)) {
				n = i;
				break;
			}
			if (n) o = n;
			else o = this.generateEmergencyEscapeIntent(s) || null;
		}
		this.countPiecesByColor(s);
		return o;
	}
	countPiecesByColor(e) {
		let t = 0, n = 0;
		for (let a = 0; a < 8; a++) for (let i = 0; i < 8; i++) {
			const r = e.board[a][i];
			r && (r.color === c ? t++ : n++);
		}
		const i = (e) => {
			if (!e) return 0;
			let t = 0;
			for (const n of Object.keys(e)) t += Number(e[n]) || 0;
			return t;
		};
		return {
			boardWhite: t,
			boardBlack: n,
			reserveWhite: i(e.reserves?.[c]),
			reserveBlack: i(e.reserves?.[l])
		};
	}
	checkTimeout() {
		return (this.nodesVisited + this.qNodesVisited) % 64 == 0 && Date.now() - this.startTime > this.TIME_LIMIT && (this.timeout = !0), this.timeout;
	}
	getHash(e) {
		let t = e.turn === c ? c : l;
		for (let n = 0; n < 8; n++) for (let i = 0; i < 8; i++) {
			const a = e.board[n][i];
			a && (t += `|${n}${i}${a.type}${a.color === c ? c : l}${a.statuses?.length || 0}`);
		}
		return t;
	}
	search(e, t, n, i, a, r = 0) {
		if (this.nodesVisited++, this.checkTimeout()) return {
			score: 0,
			action: null
		};
		const s = this.getHash(e);
		if (r > 0) {
			const e = this.positionHistory.get(s) ?? 0;
			if (e >= 2) {
				const t = e >= 3 ? 900 : 450;
				return {
					score: a ? -t : t,
					action: null
				};
			}
		}
		const o = this.ttCache.get(s);
		if (o && o.depth >= t) {
			if (0 === o.flag) return {
				score: o.score,
				action: o.bestAction
			};
			if (1 === o.flag && (i = Math.min(i, o.score)), 2 === o.flag && (n = Math.max(n, o.score)), n >= i) return {
				score: o.score,
				action: o.bestAction
			};
		}
		if (t <= 0 || e.winner) return {
			score: this.quiescence(e, n, i, a),
			action: null
		};
		const d = Vn.isKingInCheck(e, e.turn);
		if (t >= 3 && !d) {
			const s = e.turn;
			e.turn = e.turn === c ? l : c;
			const o = this.search(e, t - 3, n, i, !a, r + 1).score;
			if (e.turn = s, a && o >= i) return {
				score: i,
				action: null
			};
			if (!a && o <= n) return {
				score: n,
				action: null
			};
		}
		const E = xn.generateAllActions(e, !1);
		if (0 === E.length) return {
			score: a ? -2e4 : 2e4,
			action: null
		};
		this.sortActions(E, e, t, o?.bestAction);
		let u = E[0], m = a ? -Infinity : Infinity, _ = n, A = i;
		for (let c = 0; c < E.length; c++) {
			const s = E[c], o = this.makeMove(e, s);
			if (o?.__invalidAction) continue;
			const l = this.getHash(e);
			this.positionHistory.set(l, (this.positionHistory.get(l) ?? 0) + 1);
			let _ = 0;
			const A = Vn.isCapture(e, s), p = o.turnSnapshot !== e.turn ? !a : a;
			t >= 3 && c >= 3 && !A && !d && "use_skill" !== s.type ? (_ = this.search(e, t - 2, n, i, p, r + 1).score, (a ? _ > n : _ < i) && (_ = this.search(e, t - 1, n, i, p, r + 1).score)) : _ = this.search(e, t - 1, n, i, p, r + 1).score;
			const O = this.positionHistory.get(l) ?? 1;
			if (O <= 1 ? this.positionHistory.delete(l) : this.positionHistory.set(l, O - 1), this.unmakeMove(e, o), this.timeout) break;
			if (a) {
				if (_ > m && (m = _, u = s), i <= (n = Math.max(n, _))) {
					this.prunedNodes++, A || this.storeKillerAndHistory(s, t);
					break;
				}
			} else if (_ < m && (m = _, u = s), (i = Math.min(i, _)) <= n) {
				this.prunedNodes++, A || this.storeKillerAndHistory(s, t);
				break;
			}
		}
		if (!this.timeout) {
			let e = 0;
			m <= _ ? e = 1 : m >= A && (e = 2), this.ttCache.set(s, {
				depth: t,
				score: m,
				flag: e,
				bestAction: u
			});
		}
		return {
			score: m,
			action: u
		};
	}
	quiescence(e, t, n, i) {
		if (this.qNodesVisited++, this.checkTimeout() || e.winner) return Qn.evaluate(e, this.thinkingColor);
		const a = Qn.evaluate(e, this.thinkingColor);
		if (i) {
			if (a >= n) return n;
			t < a && (t = a);
		} else {
			if (a <= t) return t;
			n > a && (n = a);
		}
		const r = xn.generateAllActions(e, !0);
		if (this.sortActions(r, e, 0), 0 === r.length) return a;
		if (i) {
			let i = a;
			for (const a of r) {
				if (Vn.isBadCapture(e, a)) continue;
				const r = this.makeMove(e, a);
				if (r?.__invalidAction) continue;
				const s = r.turnSnapshot === e.turn, o = this.quiescence(e, t, n, s);
				if (this.unmakeMove(e, r), o > i && (i = o), n <= (t = Math.max(t, o))) break;
			}
			return i;
		}
		{
			let i = a;
			for (const a of r) {
				if (Vn.isBadCapture(e, a)) continue;
				const r = this.makeMove(e, a);
				if (r?.__invalidAction) continue;
				const s = r.turnSnapshot !== e.turn, o = this.quiescence(e, t, n, s);
				if (this.unmakeMove(e, r), o < i && (i = o), (n = Math.min(n, o)) <= t) break;
			}
			return i;
		}
	}
	makeMove(e, t) {
		const n = t.from && e.board[t.from.r][t.from.c] || void 0;
		try {
			const i = wn.resolve(t, e);
			return Dn.simulateAIActionWithUndo(i, e, n);
		} catch (qn) {
			if (qn.message?.startsWith("INVALID_DEPLOY_INTENT")) return { __invalidAction: !0 };
			throw qn;
		}
	}
	unmakeMove(e, t) {
		Dn.undo(e, t);
	}
	storeKillerAndHistory(e, t) {
		if (!e.from) return;
		const n = Math.min(t, 31), i = this.killerMoves[n];
		if (i[0] && i[0].fromR === e.from.r && i[0].type === e.type || (i[1] = i[0], i[0] = {
			fromR: e.from.r,
			fromC: e.from.c,
			toR: e.to?.r,
			toC: e.to?.c,
			type: e.type
		}), e.to) {
			const n = 8 * e.from.r + e.from.c, i = 8 * e.to.r + e.to.c;
			this.historyTable[64 * n + i] += t * t;
		}
	}
	sortActions(e, t, n, i) {
		const a = Math.min(Math.max(n, 0), 31), r = this.killerMoves[a] || [], s = (e) => {
			if (i && e.type === i.type && e.from?.r === i.from?.r && e.to?.r === i.to?.r && e.to?.c === i.to?.c && e.skillId === i.skillId) return 2e6;
			if ("use_skill" === e.type) return 15e5;
			if ("strike" === e.type || "move" === e.type && e.from && e.to && t.board[e.to.r][e.to.c]) {
				const n = t.board[e.to.r][e.to.c], i = e.from ? t.board[e.from.r][e.from.c] : null;
				if (n && i && n.color !== i.color) return 10 * (Wn[n.type] || 0) - (Wn[i.type] || 0) + 1e6;
			}
			if (e.from && ("move" === e.type || "swap" === e.type)) {
				if (r[0] && r[0].fromR === e.from.r && r[0].toR === e.to.r && r[0].toC === e.to.c) return 9e5;
				if (r[1] && r[1].fromR === e.from.r && r[1].toR === e.to.r && r[1].toC === e.to.c) return 8e5;
				const t = 8 * e.from.r + e.from.c, n = 8 * e.to.r + e.to.c;
				return this.historyTable[64 * t + n];
			}
			return "deploy" === e.type ? 500 : 0;
		};
		e.sort((e, t) => s(t) - s(e));
	}
	validateIntentSafety(e, t) {
		if ("deploy" === e.type) {
			const { r: n, c: i } = e.to;
			if (pe(n, i, t.metadata)) return !1;
			const a = t.metadata?.cache, r = t.turn === c ? a?.whiteControl : a?.blackControl;
			if (!r || !r[n][i]) return !1;
			if (null !== t.board[n][i]) return !1;
			const s = t.reserves[t.turn];
			if (!s || !e.pieceType || (s[e.pieceType] || 0) <= 0) return !1;
		}
		if ("move" === e.type && e.from && e.to) {
			if (!t.board[e.from.r]?.[e.from.c]) return !1;
			if (!oe(t.board, e.from.r, e.from.c, t.metadata, t.levelConstraints).some((t) => t.r === e.to.r && t.c === e.to.c)) return !1;
		}
		if ("strike" === e.type && e.from && e.to) {
			if (!t.board[e.from.r]?.[e.from.c]) return !1;
			const n = t.board[e.to.r]?.[e.to.c];
			if (!n || n.color === t.turn) return !1;
		}
		if ("swap" === e.type && e.from && e.to) {
			if (!t.board[e.from.r]?.[e.from.c]) return !1;
			const n = t.board[e.to.r]?.[e.to.c];
			if (!n || n.color !== t.turn) return !1;
		}
		return !0;
	}
	generateEmergencyEscapeIntent(e) {
		const t = xn.generateAllActions(e, !1).filter((t) => this.validateIntentSafety(t, e));
		if (t.length > 0) return t[0];
		for (let n = 0; n < 8; n++) for (let t = 0; t < 8; t++) {
			const i = e.board[n][t];
			if (i && i.color === e.turn && i.type === d.KING) {
				const i = oe(e.board, n, t, e.metadata, e.levelConstraints);
				for (const a of i) {
					const i = e.board[a.r][a.c];
					if (!i || i.color !== e.turn) return {
						type: "move",
						from: {
							r: n,
							c: t
						},
						to: {
							r: a.r,
							c: a.c
						}
					};
				}
			}
		}
		return null;
	}
}();
self.onmessage = async (e) => {
	try {
		const { state: t, difficulty: n } = e.data, i = await Yn.computeMove(t, n);
		self.postMessage({
			type: "SUCCESS",
			action: i
		});
	} catch (t) {
		self.postMessage({
			type: "ERROR",
			error: t
		});
	}
};
export { Pt as a, Nt as c, Ct as i, Dt as n, yt as o, bt as r, gt as s, ft as t };

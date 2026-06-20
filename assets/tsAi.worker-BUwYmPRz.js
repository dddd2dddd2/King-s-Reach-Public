const e = "__IS_GRID_DEV__";
"undefined" != typeof globalThis && void 0 === globalThis[e] && (globalThis[e] = !1);
const t = "W", o = "B", r = {
	PAWN: "P",
	KNIGHT: "N",
	BISHOP: "B",
	ROOK: "R",
	QUEEN: "Q",
	KING: "K"
}, i = {
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
	CROSS_AURA: "CROSS_AURA"
}, s = "VOID_ANCHOR", a = "FROZEN_TRAP", c = "PORTAL_ENTRY", n = "SQUARE_RAILWAY", d = "IRON_CURTAIN", p = "SQ_AFTERIMAGE", E = "SQUARE_BASTION_FIELD", l = "BARRICADE", u = "JAMMING_TOWER", A = "VOID_FISSURE_SQUARE", I = "SUPPLY_DEPOT_SQUARE", T = "ANTI_PAWN_MINE", m = "ICE_SLICK", O = "WORMHOLE_A", _ = "WORMHOLE_B", f = "WARP_STORM_PORTAL", S = {
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
}, R = {
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
}, y = (r.PAWN, r.KNIGHT, r.BISHOP, r.ROOK, r.QUEEN, [
	"SELL_PIECE",
	"SELL_ITEM",
	"RECYCLE",
	"MIDAS_TOUCH",
	"REQUISITION_GAIN"
]), N = "ARTHUR", h = "ODYSSEUS", M = "HAPPY_PRINCE", P = "LOUIS_XIV", D = "RICHARD";
var C = class {
	static isValidPos(e, t) {
		return e >= 0 && e < 8 && t >= 0 && t < 8;
	}
	static getPiece(e, t, o) {
		return this.isValidPos(t, o) ? e[t][o] : null;
	}
	static isEmpty(e, t, o) {
		return !!this.isValidPos(t, o) && null === e[t][o];
	}
	static hasEnemy(e, t, o, r) {
		const i = this.getPiece(e, t, o);
		return null !== i && i.color !== r;
	}
	static hasFriend(e, t, o, r) {
		const i = this.getPiece(e, t, o);
		return null !== i && i.color === r;
	}
	static findPieces(e, t) {
		const o = [];
		for (let r = 0; r < 8; r++) for (let i = 0; i < 8; i++) {
			const s = e[r][i];
			s && t(s, r, i) && o.push({
				r,
				c: i,
				piece: s
			});
		}
		return o;
	}
	static slidingMoves(e, t, o, r, i) {
		const s = [];
		for (const [a, c] of i) {
			let i = t + a, n = o + c;
			for (; this.isValidPos(i, n);) {
				const t = e[i][n];
				if (t) {
					t.color !== r && s.push({
						r: i,
						c: n
					});
					break;
				}
				s.push({
					r: i,
					c: n
				}), i += a, n += c;
			}
		}
		return s;
	}
	static findFirstInLine(e, t, o, r, i) {
		for (const [s, a] of r) {
			let r = t + s, c = o + a;
			for (; this.isValidPos(r, c);) {
				const t = e[r][c];
				if (t) {
					if (i(t)) return {
						piece: t,
						r,
						c
					};
					break;
				}
				r += s, c += a;
			}
		}
		return null;
	}
	static neighbors(e, t, o = 1) {
		const r = [];
		for (let i = -o; i <= o; i++) for (let s = -o; s <= o; s++) {
			if (0 === i && 0 === s) continue;
			const o = e + i, a = t + s;
			this.isValidPos(o, a) && r.push({
				r: o,
				c: a
			});
		}
		return r;
	}
};
const L = (e, t) => Math.atan2(e, t) * (180 / Math.PI), U = [
	{
		id: "BISHOP_REFRACTION",
		name: "反射",
		tier: "COMMON",
		pieceType: r.BISHOP,
		description: "移动触碰边界时，可以按 90 度角折射继续滑行一格。",
		modifiers: { movement: ({ board: e, r: t, c: o }, r) => ([
			[-1, -1],
			[-1, 1],
			[1, -1],
			[1, 1]
		].forEach(([i, s]) => {
			let a = t + i, c = o + s;
			for (; a >= 0 && a < 8 && c >= 0 && c < 8 && !e[a][c];) a += i, c += s;
			if (a < 0 || a >= 8 || c < 0 || c >= 8) {
				const t = a < 0 || a >= 8, o = a - i + (t ? -i : i), n = c - s + (t ? s : -s);
				o >= 0 && o < 8 && n >= 0 && n < 8 && !e[o][n] && r.push({
					r: o,
					c: n
				});
			}
		}), r) }
	},
	{
		id: "BISHOP_MIRROR",
		name: "镜像",
		tier: "COMMON",
		pieceType: r.BISHOP,
		description: "当斜线上有另一个己方“象”时，这两个象可以互相传送（交换位置）。",
		modifiers: { movement: ({ board: e, piece: t, r: o, c: i }, s) => ([
			[-1, -1],
			[-1, 1],
			[1, -1],
			[1, 1]
		].forEach(([a, c]) => {
			let n = o + a, d = i + c;
			for (; n >= 0 && n < 8 && d >= 0 && d < 8;) {
				const o = e[n][d];
				if (o) {
					o.color === t.color && o.type === r.BISHOP && s.push({
						r: n,
						c: d
					});
					break;
				}
				n += a, d += c;
			}
		}), s) },
		hooks: { onAfterMove: ({ from: e, victim: t, emit: o }) => {
			e && t && t.type === r.BISHOP && o({
				type: "SPAWN",
				pos: e,
				piece: t
			});
		} }
	},
	{
		id: "BISHOP_PHASE_SHIFT",
		name: "相位偏转",
		tier: "COMMON",
		pieceType: r.BISHOP,
		description: "允许象像“车”一样水平或垂直移动 1 格（但此移动不能吃子）。",
		modifiers: { movement: (e, t) => {
			const { board: o, r, c: i, piece: s, isControlSquares: a } = e;
			return [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1]
			].forEach(([e, c]) => {
				const n = r + e, d = i + c;
				if (n >= 0 && n < 8 && d >= 0 && d < 8) {
					const e = o[n][d];
					(!e || a && e.color === s.color) && t.push({
						r: n,
						c: d
					});
				}
			}), t;
		} }
	},
	{
		id: "BISHOP_AFTERSHOCK",
		name: "余震",
		tier: "COMMON",
		pieceType: r.BISHOP,
		description: "吃子后，落点周围 1 格的所有空格在下回合内，敌方无法进行“库存部署”。",
		hooks: { onKill: ({ r: e, c: t, piece: o, board: r, emit: i }) => {
			const s = o.color;
			for (let a = -1; a <= 1; a++) for (let o = -1; o <= 1; o++) {
				if (0 === a && 0 === o) continue;
				const c = e + a, n = t + o;
				c >= 0 && c < 8 && n >= 0 && n < 8 && (r[c][n] || i({
					type: "SET_SQUARE",
					pos: {
						r: c,
						c: n
					},
					status: {
						id: "BISHOP_AFTERSHOCK_SQUARE",
						duration: 3,
						metadata: { ownerColor: s }
					}
				}));
			}
		} }
	},
	{
		id: "BISHOP_PIERCE",
		name: "穿透狙击",
		tier: "RARE",
		pieceType: r.BISHOP,
		description: "可以穿过一个己方单位进行攻击。",
		modifiers: { movement: (e, t) => {
			const { board: o, r: i, c: s, piece: a, isControlSquares: c } = e;
			return [
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			].forEach(([e, n]) => {
				let d = i + e, p = s + n, E = !1;
				for (; d >= 0 && d < 8 && p >= 0 && p < 8;) {
					const i = o[d][p];
					if (i) {
						if (E || i.color !== a.color || i.type === r.KING) {
							(i.color !== a.color || c) && t.push({
								r: d,
								c: p
							});
							break;
						}
						E = !0, c && t.push({
							r: d,
							c: p
						});
					} else t.push({
						r: d,
						c: p
					});
					d += e, p += n;
				}
			}), t;
		} }
	},
	{
		id: "BISHOP_HOLY_LAND",
		name: "圣域",
		tier: "RARE",
		pieceType: r.BISHOP,
		description: "该棋子斜线上所有空格，即使被阻挡也视为“已控制区”，可直接部署。",
		modifiers: { movement: ({ board: e, r: t, c: o, piece: r }, i) => ([
			[-1, -1],
			[-1, 1],
			[1, -1],
			[1, 1]
		].forEach(([r, s]) => {
			let a = t + r, c = o + s;
			for (; a >= 0 && a < 8 && c >= 0 && c < 8;) e[a][c] || i.push({
				r: a,
				c
			}), a += r, c += s;
		}), i) }
	},
	{
		id: "BISHOP_MIRROR_RESONANCE",
		name: "镜像共鸣",
		tier: "RARE",
		pieceType: r.BISHOP,
		description: "当斜线上有另一个己方“象”时，两者共享网络连接状态。",
		modifiers: { alwaysNetworked: ({ board: e, r: t, c: o, piece: i }) => {
			for (const [s, a] of [
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			]) {
				let c = t + s, n = o + a;
				for (; c >= 0 && c < 8 && n >= 0 && n < 8;) {
					const t = e[c][n];
					if (t && t.color === i.color && t.type === r.BISHOP && t !== i) return !0;
					if (t) break;
					c += s, n += a;
				}
			}
			return !1;
		} }
	},
	{
		id: "BISHOP_RECALL",
		name: "应急回存",
		tier: "RARE",
		pieceType: r.BISHOP,
		description: "主动技能：可以将该棋子撤回库存。每局限一次，再部署后失效。",
		activeSpec: {
			targeting: "self",
			usesKey: "recallUses",
			maxUses: 1,
			execute: (e, t, o, r, i, s) => {
				(r.metadata?.recallUses || 0) >= 1 || (s({
					type: "MODIFY_RESERVE",
					color: r.color,
					pieceType: r.type,
					amount: 1
				}), s({
					type: "UNDEPLOY_PIECE",
					uid: r.uid
				}), s({
					type: "REMOVE_PIECE",
					pos: {
						r: t,
						c: o
					}
				}), s({
					type: "UPDATE_ROSTER_PIECE",
					pieceUid: r.uid,
					updates: { metadata: {
						...r.metadata,
						recallUses: (r.metadata?.recallUses || 0) + 1
					} }
				}), s({
					type: "SHOW_TEXT",
					text: "Recalled",
					textKey: "LOG_RECALLED",
					style: "system"
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
		id: "BISHOP_CONDUIT",
		name: "远程授能",
		tier: "EPIC",
		pieceType: r.BISHOP,
		description: "只要象连通，斜线上所有友军即使离王很远也视为连通。",
		modifiers: { networkRange: ({ r: e, c: t }) => {
			const o = [];
			return [
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			].forEach(([r, i]) => {
				let s = e + r, a = t + i;
				for (; s >= 0 && s < 8 && a >= 0 && a < 8;) o.push({
					r: s,
					c: a
				}), s += r, a += i;
			}), o;
		} }
	},
	{
		id: "BISHOP_SILENCE",
		name: "禁魔",
		tier: "EPIC",
		pieceType: r.BISHOP,
		description: "被该棋子攻击控制范围覆盖的敌方棋子无法触发主动技能。",
		hooks: { onAfterMove: ({ board: e, r: t, c: o, piece: s, emit: a }) => {
			[
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			].forEach(([c, n]) => {
				let d = t + c, p = o + n;
				for (; d >= 0 && d < 8 && p >= 0 && p < 8;) {
					const t = e[d][p];
					if (t && t.color !== s.color && t.type !== r.KING && a({
						type: "ADD_STATUS",
						pos: {
							r: d,
							c: p
						},
						statusId: i.SILENCED,
						duration: 2
					}), t) break;
					d += c, p += n;
				}
			});
		} }
	},
	{
		id: "BISHOP_OPTICAL_BLIND_ZONE",
		name: "光学死角",
		tier: "EPIC",
		pieceType: r.BISHOP,
		description: "免疫直线远程攻击（1格之外的车、后打击）。",
		modifiers: { invulnerable: ({ r: e, c: t }, o) => {
			const r = o._lastPos?.r, i = o._lastPos?.c;
			if (void 0 !== r && void 0 !== i) {
				const o = Math.abs(r - e), s = Math.abs(i - t);
				return (0 === o || 0 === s) && (o > 1 || s > 1);
			}
			return !1;
		} }
	},
	{
		id: "BISHOP_ZEALOT",
		name: "狂热",
		tier: "EPIC",
		pieceType: r.BISHOP,
		description: "吃子后下回合变“后”滑行，若持续吃子则效果延续。",
		hooks: { onKill: ({ piece: e, r: t, c: o, emit: r }) => {
			r({
				type: "ADD_STATUS",
				pos: {
					r: t,
					c: o
				},
				statusId: i.ZEALOT_BUFF,
				duration: 2
			}), r({
				type: "SHOW_TEXT",
				text: "Zealot!",
				textKey: "LOG_ZEALOT",
				style: "gold"
			});
		} }
	},
	{
		id: "BISHOP_SACRED_ZONE",
		name: "神圣领域",
		tier: "EPIC",
		pieceType: r.BISHOP,
		description: "斜线上敌军被冻结 1 回合。对王和后无效。",
		hooks: { onTurnStart: ({ board: e, r: t, c: o, piece: s, emit: a }) => {
			[
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			].forEach(([c, n]) => {
				let d = t + c, p = o + n;
				for (; d >= 0 && d < 8 && p >= 0 && p < 8;) {
					const t = e[d][p];
					t && t.color !== s.color && t.type !== r.KING && t.type !== r.QUEEN && (t.statuses?.some((e) => e.id === i.FROZEN) || a({
						type: "ADD_STATUS",
						pos: {
							r: d,
							c: p
						},
						statusId: i.FROZEN,
						duration: 2,
						visualMeta: { delayBefore: 50 }
					})), d += c, p += n;
				}
			});
		} }
	},
	{
		id: "BISHOP_CONVERSION",
		name: "洗礼",
		tier: "EPIC",
		pieceType: r.BISHOP,
		description: "主动：将一名相邻的敌方兵永久转化为己方，该象随后损毁。",
		activeSpec: {
			targeting: "target",
			getAlternatives: (e, t, o, i) => {
				const s = [];
				for (const [a, c] of [
					[-1, -1],
					[-1, 0],
					[-1, 1],
					[0, -1],
					[0, 1],
					[1, -1],
					[1, 0],
					[1, 1]
				]) {
					const n = t + a, d = o + c;
					if (C.isValidPos(n, d)) {
						const t = e[n][d];
						t && t.color !== i.color && t.type === r.PAWN && s.push({
							pos: {
								r: n,
								c: d
							},
							value: {
								r: n,
								c: d
							}
						});
					}
				}
				return s;
			},
			getAoE: (e, t, o, r, i) => i ? [{
				r: i.r,
				c: i.c
			}] : [],
			execute: (e, t, o, r, i, s) => {
				if (i) {
					const a = e[i.r][i.c];
					if (a) {
						const e = `u-${Date.now()}`, c = {
							...a,
							color: r.color,
							statuses: [],
							uid: e
						};
						s({
							type: "ADD_TO_ROSTER",
							piece: c
						}), s({
							type: "SPAWN",
							pos: i,
							piece: c
						}), s({
							type: "REMOVE_FROM_ROSTER",
							pieceUid: r.uid
						}), s({
							type: "UNDEPLOY_PIECE",
							uid: r.uid
						}), s({
							type: "REMOVE_PIECE",
							pos: {
								r: t,
								c: o
							}
						}), s({
							type: "SHOW_TEXT",
							text: "Conversion",
							textKey: "LOG_CONVERSION",
							style: "gold",
							pos: i
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
		pieceType: r.BISHOP,
		description: "每回合开始时，象周围 1 格的友军负面状态清除。",
		hooks: { onTurnStart: ({ board: e, r: t, c: o, piece: r, emit: s }) => {
			const a = [
				i.FROZEN,
				i.PETRIFIED,
				i.SKILL_LOCKED,
				i.SILENCED,
				i.INFECTED,
				i.BETRAYED,
				i.GRAVITY_LOCKED,
				i.AURA_SUPPRESSED
			];
			for (const [i, c] of [
				[-1, -1],
				[-1, 0],
				[-1, 1],
				[0, -1],
				[0, 1],
				[1, -1],
				[1, 0],
				[1, 1]
			]) {
				const n = t + i, d = o + c;
				if (C.isValidPos(n, d)) {
					const t = e[n][d];
					t && t.color === r.color && a.forEach((e) => {
						t.statuses?.some((t) => t.id === e) && s({
							type: "REMOVE_STATUS",
							pos: {
								r: n,
								c: d
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
		pieceType: r.BISHOP,
		description: "吃掉敌方棋子时，随机将一个本局阵亡的友方棋子放回库存。",
		hooks: { onKill: ({ piece: e, emit: t, roster: o, deployedUids: i, board: s, prng: a }) => {
			const c = i || [], n = (o || []).filter((e) => !(e.type === r.KING || !e.uid) && !(C.findPieces(s, (t) => t.uid === e.uid).length > 0 || c.includes(e.uid)));
			if (n.length > 0 && a) {
				const o = n[Math.floor(a.next() * n.length)];
				t({
					type: "MODIFY_RESERVE",
					color: e.color,
					pieceType: o.type,
					amount: 1
				}), t({
					type: "SHOW_TEXT",
					text: `Resurrected: ${o.type}`,
					textKey: "LOG_RESURRECT",
					textParams: { type: o.type },
					style: "gold"
				});
			}
		} }
	},
	{
		id: "BISHOP_AURORA",
		name: "极光",
		tier: "LEGENDARY",
		pieceType: r.BISHOP,
		description: "主动技能：不移动，直接狙击吃掉斜线上任何位置的一个敌方棋子。",
		activeSpec: {
			targeting: "target",
			getAlternatives: (e, t, o, i) => {
				const s = [];
				return [
					[-1, -1],
					[-1, 1],
					[1, -1],
					[1, 1]
				].forEach(([a, c]) => {
					let n = t + a, d = o + c;
					for (; n >= 0 && n < 8 && d >= 0 && d < 8;) {
						const t = e[n][d];
						if (t && t.color !== i.color && t.type !== r.KING && s.push({
							pos: {
								r: n,
								c: d
							},
							value: {
								r: n,
								c: d
							}
						}), t) break;
						n += a, d += c;
					}
				}), s;
			},
			getAoE: (e, t, o, r, i) => i ? [{
				r: i.r,
				c: i.c
			}] : [],
			execute: (e, t, o, r, i, s) => {
				if (i) {
					const e = i.r - t, r = i.c - o;
					s({
						type: "ANIMATE",
						name: "LINEAR_BEAM",
						pos: {
							r: t,
							c: o
						},
						duration: 600,
						metadata: { angle: L(e, r) }
					}), s({
						type: "KILL",
						pos: i
					}), s({
						type: "SHOW_TEXT",
						text: "Aurora Snipe",
						textKey: "LOG_AURORA",
						style: "system"
					});
				}
			}
		}
	},
	{
		id: "BISHOP_ABSOLUTE_BARRIER",
		name: "绝对防线",
		tier: "LEGENDARY",
		pieceType: r.BISHOP,
		description: "敌方棋子无法在不吃子的情况下，停留在该象的对角线控制格上。",
		modifiers: { squareBlockMovement: ({ board: e, r: t, c: o, piece: i }) => !!C.findPieces(e, (e) => e.color !== i.color && e.type === r.BISHOP && e.skills.includes("BISHOP_ABSOLUTE_BARRIER")).some(({ r, c: i }) => Math.abs(r - t) === Math.abs(i - o) && !e[t][o]) }
	},
	{
		id: "EQ_REFRACTION_LENS",
		name: "折射透镜",
		tier: "RARE",
		pieceType: r.BISHOP,
		description: "象的路径上有友军时，可以改变方向移动 2 格（90度折射）。",
		modifiers: { movement: (e, t) => {
			const { board: o, r, c: i, piece: s, isControlSquares: a } = e;
			return [
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			].forEach(([e, c]) => {
				let n = r + e, d = i + c;
				for (; n >= 0 && n < 8 && d >= 0 && d < 8;) {
					const r = o[n][d];
					if (r) {
						r.color === s.color && [[-c, e], [c, -e]].forEach(([e, r]) => {
							let i = n + e, c = d + r;
							if (i >= 0 && i < 8 && c >= 0 && c < 8) {
								const n = o[i][c];
								if ((!n || a && n.color === s.color) && t.push({
									r: i,
									c
								}), !n && (i += e, c += r, i >= 0 && i < 8 && c >= 0 && c < 8)) {
									const e = o[i][c];
									(!e || a && e.color === s.color || e.color !== s.color) && t.push({
										r: i,
										c
									});
								}
							}
						});
						break;
					}
					n += e, d += c;
				}
			}), t;
		} }
	},
	{
		id: "EQ_FAITH_SIPHON",
		name: "信仰汲取",
		tier: "RARE",
		pieceType: r.BISHOP,
		description: "每当象斜线上的单位阵亡，玩家获得 2 金币。",
		tags: ["GLOBAL"],
		hooks: { onDeath: ({ board: e, piece: o, ownerPos: r, subject: i, r: s, c: a, emit: c }) => {
			if (r && i && o.color === t && o.equippedItems.some((e) => "EQ_FAITH_SIPHON" === e.effectId)) {
				const t = Math.abs(r.r - s), o = Math.abs(r.c - a);
				if (t === o && t > 0) {
					const i = (s - r.r) / t, n = (a - r.c) / o;
					let d = r.r + i, p = r.c + n, E = !1;
					for (; d !== s || p !== a;) {
						if (e[d][p]) {
							E = !0;
							break;
						}
						d += i, p += n;
					}
					E || c({
						type: "MODIFY_GOLD",
						amount: 2,
						reason: "FAITH_SIPHON"
					});
				}
			}
		} }
	}
], G = new Int32Array(4096), k = new Int32Array(4096), K = new Int32Array(64), g = new Array(64), b = new Array(64);
(function() {
	for (let e = 0; e < 8; e++) for (let t = 0; t < 8; t++) {
		const o = 8 * e + t;
		K[o] = Math.abs(2 * e - 7) + Math.abs(2 * t - 7);
		for (let a = 0; a < 8; a++) for (let r = 0; r < 8; r++) {
			const i = o << 6 | 8 * a + r;
			G[i] = Math.abs(e - a) + Math.abs(t - r), k[i] = Math.max(Math.abs(e - a), Math.abs(t - r));
		}
		const r = [];
		for (let a = -1; a <= 1; a++) for (let o = -1; o <= 1; o++) {
			if (0 === a && 0 === o) continue;
			const i = e + a, s = t + o;
			i >= 0 && i < 8 && s >= 0 && s < 8 && r.push(8 * i + s);
		}
		b[o] = new Int32Array(r);
		const i = [], s = [
			[-2, -1],
			[-2, 1],
			[-1, -2],
			[-1, 2],
			[1, -2],
			[1, 2],
			[2, -1],
			[2, 1]
		];
		for (let a = 0; a < s.length; a++) {
			const o = e + s[a][0], r = t + s[a][1];
			o >= 0 && o < 8 && r >= 0 && r < 8 && i.push(8 * o + r);
		}
		g[o] = new Int32Array(i);
	}
})();
var H = class {
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
}, v = class {
	static isSilenced(e) {
		return e.statuses?.some((e) => e.id === i.SILENCED || e.id === i.SKILL_LOCKED) || !1;
	}
	static applyStatus(e, t, o, s) {
		if (e.type === r.KING && (t === i.INVISIBLE || t === i.PETRIFIED)) return;
		if (H.hasSkill(e, "GENERIC_COATING") && S.NEGATIVE_STATUSES.includes(t)) return;
		if (H.hasSkill(e, "GENERIC_FIREWALL") && [
			i.SILENCED,
			i.BETRAYED,
			i.SKILL_LOCKED
		].includes(t)) return;
		if (e.statuses?.some((e) => e.id === i.HOLY_DOMAIN_AURA) && S.NEGATIVE_STATUSES.includes(t)) return;
		const a = {
			id: t,
			duration: o,
			...s
		};
		e.statuses = [...e.statuses || [], a];
	}
	static tickPiece(e) {
		const t = {
			...e,
			statuses: e.statuses ? e.statuses.map((e) => ({ ...e })) : [],
			traits: e.traits ? [...e.traits] : []
		};
		t.type === r.KING && (t.statuses = t.statuses.filter((e) => e.id !== i.INVISIBLE && e.id !== i.PETRIFIED)), t.stackedPiece && (t.stackedPiece = this.tickPiece(t.stackedPiece)), t.statuses.length > 0 && (t.statuses = t.statuses.map((e) => e.duration >= 99 ? e : (e.duration <= 1 && e.id === i.BETRAYED && e.originalColor && (t.color = e.originalColor), {
			...e,
			duration: e.duration - 1
		})).filter((e) => e.duration > 0));
		const o = [i.GRACE_LIMIT, i.CANNOT_CAPTURE];
		return t.traits && t.traits.length > 0 && (t.traits = t.traits.filter((e) => !o.includes(e))), t;
	}
}, x = class {
	static getModifiers(e, t, o, r) {
		if (!e) return [];
		const i = v.isSilenced(e), s = [];
		if (!i) {
			const t = H.getActiveSkillIds(e);
			e.metadata?.isSwallow && !t.includes("SWALLOW_TRAIT") && t.push("SWALLOW_TRAIT"), t.forEach((t) => {
				const o = H.get(t);
				!o || o.pieceType && o.pieceType !== e.type || !o.modifiers || s.push(o.modifiers);
			}), e.equippedItems && e.equippedItems.forEach((e) => {
				const t = H.get(e.effectId);
				t && t.modifiers && s.push(t.modifiers);
			});
		}
		return e.statuses && e.statuses.forEach((e) => {
			const t = H.get(e.id);
			t && t.modifiers && s.push(t.modifiers);
		}), s;
	}
	static getSquareModifiers(e, t, o, r) {
		if (!r || !r.squares) return [];
		const i = r.squares[`${t},${o}`];
		return i ? i.map((e) => H.get(e.id)?.modifiers).filter((e) => void 0 !== e) : [];
	}
	static hasModifier(e, t) {
		return this.getModifiers(e).some((e) => "function" == typeof e[t] || !0 === e[t]);
	}
};
const W = {
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
}, B = {
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
var Q = class {
	static resolveMask(e) {
		let t = 0n;
		return this.getUniqueSkillIds(e).forEach((e) => {
			const o = B[e];
			o && o.forEach((e) => {
				t |= W[e] || 0n;
			});
		}), e.equippedItems?.forEach((e) => {
			const o = B[e.effectId];
			o && o.forEach((e) => {
				t |= W[e] || 0n;
			});
		}), e.statuses?.forEach((e) => {
			const o = `ATOMIC_STATUS_${e.id}`;
			t |= W[o] || 0n;
		}), BigInt(t);
	}
	static getUniqueSkillIds(e) {
		const t = /* @__PURE__ */ new Set();
		return e.skills?.forEach((e) => t.add(e)), e.learnedSkills?.forEach((e) => t.add(e)), e.traits?.forEach((e) => t.add(e)), t;
	}
	static has(e, t) {
		if (void 0 === e.abilityMask || null === e.abilityMask) return !1;
		const o = W[t];
		if (void 0 === o) {
			const o = W[`ATOMIC_STATUS_${t}`];
			return void 0 !== o && 0n !== (BigInt(e.abilityMask) & BigInt(o));
		}
		return 0n !== (BigInt(e.abilityMask) & BigInt(o));
	}
	static hasBit(e, t) {
		return void 0 !== e.abilityMask && null !== e.abilityMask && 0n !== (BigInt(e.abilityMask) & BigInt(t));
	}
}, F = class e {
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
		for (let o = t.length - 1; o > 0; o--) {
			const e = this.nextInt(0, o + 1);
			[t[o], t[e]] = [t[e], t[o]];
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
}, Y = class {
	static recompute(e, i, s, a, c = !1) {
		Ne.build(e, i);
		const n = Ge(e, t, i, a), d = Ge(e, o, i, a), p = this.filterVisibility(e, t, n.networked, i), E = this.filterVisibility(e, o, d.networked, i), l = E.map((e) => e.map((e) => e ? 1 : 0)), u = {
			whiteNetwork: n.networked,
			blackNetwork: d.networked,
			whiteControl: p,
			blackControl: E,
			whiteConnections: n.connections,
			blackConnections: d.connections,
			whiteDepths: n.depths,
			blackDepths: d.depths,
			threatMap: l,
			validDeployments: [],
			validMovesMap: {},
			isCheck: !1,
			lastUpdateEpoch: Date.now()
		}, A = {
			...i,
			cache: u
		};
		if (!c && 999 !== i.globalJamming && !0 !== i.isAISimulation && !0 !== globalThis.isAISimulation) {
			u.validDeployments = Le(e, s, A, a);
			const t = {};
			for (let o = 0; o < 8; o++) for (let r = 0; r < 8; r++) {
				const i = e[o][r];
				i && (t[i.uid || i.id] = Ce(e, o, r, A, a));
			}
			u.validMovesMap = t;
		}
		let I = !1;
		for (let o = 0; o < 8; o++) {
			for (let i = 0; i < 8; i++) {
				const a = e[o][i];
				if (a && a.color === s && (a.type === r.KING || Pe.isProxyKing(a)) && (s === t ? E : p)[o][i]) {
					I = !0;
					break;
				}
			}
			if (I) break;
		}
		return u.isCheck = I, u;
	}
	static patchCache(e, o, i, s, a, c) {
		let n = !0;
		for (const t of a) {
			const e = t.piece || (t.to ? o[t.to.r]?.[t.to.c] : null);
			if (!e) {
				n = !1;
				break;
			}
			const s = e.type;
			if (s === r.KING || s === r.QUEEN || s === r.ROOK || s === r.BISHOP || Pe.isProxyKing(e) || Pe.hasModifier(e, "networkSource") || Pe.hasModifier(e, "networkRange") || Pe.hasModifier(e, "alwaysNetworked") || i.globalJamming && i.globalJamming > 0) {
				n = !1;
				break;
			}
		}
		if (!n) return this.recompute(o, i, s, c, !0);
		const d = {
			...e,
			whiteControl: e.whiteControl.map((e) => [...e]),
			blackControl: e.blackControl.map((e) => [...e]),
			whiteNetwork: e.whiteNetwork.map((e) => [...e]),
			blackNetwork: e.blackNetwork.map((e) => [...e]),
			lastUpdateEpoch: Date.now()
		};
		for (const r of a) {
			const e = r.piece || (r.to ? o[r.to.r]?.[r.to.c] : null);
			if (!e) continue;
			const s = e.color, a = s === t ? d.whiteControl : d.blackControl, c = s === t ? d.whiteNetwork : d.blackNetwork;
			if (r.from) {
				const t = o[r.from.r][r.from.c];
				o[r.from.r][r.from.c] = e;
				const s = ke(o, r.from.r, r.from.c, c, i);
				o[r.from.r][r.from.c] = t, s.forEach((e) => {
					a[e.r][e.c] = !1;
				}), c[r.from.r][r.from.c] = !1;
			}
			if (r.to) {
				ke(o, r.to.r, r.to.c, c, i).forEach((e) => {
					a[e.r][e.c] = !0;
				});
				let e = !1;
				for (const [t, i] of [
					[-1, 0],
					[1, 0],
					[0, -1],
					[0, 1],
					[-1, -1],
					[-1, 1],
					[1, -1],
					[1, 1]
				]) {
					const a = r.to.r + t, n = r.to.c + i;
					if (a >= 0 && a < 8 && n >= 0 && n < 8) {
						const t = o[a][n];
						if (t && t.color === s && c[a][n]) {
							e = !0;
							break;
						}
					}
				}
				c[r.to.r][r.to.c] = e;
			}
		}
		let p = !1;
		for (let E = 0; E < 8; E++) for (let e = 0; e < 8; e++) {
			const i = o[E][e];
			if (i && i.color === s && (i.type === r.KING || Pe.isProxyKing(i)) && (s === t ? d.blackControl : d.whiteControl)[E][e]) {
				p = !0;
				break;
			}
		}
		return d.isCheck = p, d;
	}
	static filterVisibility(e, s, a, c) {
		const n = s === t ? o : t, d = [];
		e.forEach((e, t) => e.forEach((e, o) => {
			e && e.color === n && e.equippedItems?.some((e) => "EQ_SCOUT_RADAR" === e.effectId) && d.push({
				r: t,
				c: o
			});
		}));
		const p = Array(8).fill(null).map(() => Array(8).fill(!1));
		return e.forEach((t, o) => t.forEach((t, n) => {
			if (t && t.color === s) {
				if (!a[o][n] && t.type !== r.KING && !Pe.isProxyKing(t)) return;
				const s = t.statuses?.some((e) => e.id === i.ENCRYPTED), E = d.some((e) => Math.max(Math.abs(e.r - o), Math.abs(e.c - n)) <= 2);
				if (s && !E) return;
				const l = ke(e, o, n, a, c);
				Pe.getModifiers(t, e, o, n).forEach((r) => {
					r.networkRange && l.push(...r.networkRange({
						board: e,
						piece: t,
						r: o,
						c: n
					}));
				}), l.forEach((e) => {
					p[e.r][e.c] = !0;
				});
			}
		})), p;
	}
	static getControlValue(e, t, o) {
		const r = e.cache;
		if (!r) return 0;
		let i = 0;
		return r.whiteControl[t][o] && (i += 1), r.blackControl[t][o] && (i -= 1), i;
	}
	static isNetworked(e, o, r, i) {
		const s = e.cache;
		return !s || (o === t ? s.whiteNetwork[r][i] : s.blackNetwork[r][i]);
	}
}, V = class {
	static apply(e, t, o, i, s, a, c = !1) {
		const n = c || !0 === globalThis.isAISimulation;
		if (!e) return Y.recompute(t, o, i, a, n);
		const d = [];
		let p = !1;
		for (const r of s) if ("MOVE" === r.type) {
			const e = t[r.to.r][r.to.c];
			d.push({
				from: r.from,
				to: r.to,
				type: "MOVE",
				piece: e
			});
		} else if ("KILL" === r.type) {
			const e = r.pos;
			e ? d.push({
				from: e,
				type: "KILL"
			}) : p = !0;
		} else "SPAWN" === r.type ? r.pos ? d.push({
			to: r.pos,
			type: "SPAWN",
			piece: r.piece
		}) : p = !0 : "ADD_STATUS" !== r.type && "REMOVE_STATUS" !== r.type && "SET_SQUARE" !== r.type && "REMOVE_SQUARE" !== r.type && "SWITCH_TURN" !== r.type || (p = !0);
		if (p || 0 === d.length) return Y.recompute(t, o, i, a, n);
		let E = !0;
		for (const l of d) {
			const e = l.piece || (l.from ? t[l.from.r]?.[l.from.c] : null);
			if (!e) {
				E = !1;
				break;
			}
			const i = e.type;
			if (i === r.KING || i === r.QUEEN || i === r.ROOK || i === r.BISHOP || Pe.isProxyKing(e) || Pe.hasModifier(e, "networkSource") || Pe.hasModifier(e, "networkRange") || Pe.hasModifier(e, "alwaysNetworked") || o.globalJamming && o.globalJamming > 0) {
				E = !1;
				break;
			}
		}
		return E ? Y.patchCache(e, t, o, i, d, a) : Y.recompute(t, o, i, a, n);
	}
}, w = class {
	static build(e, t) {
		const o = {
			movement: [],
			invulnerable: [],
			squareBlock: []
		}, r = fe.getActivePieces(e);
		for (const { piece: i, r: s, c: a } of r) {
			if (!i.uid) continue;
			const t = x.getModifiers(i, e, s, a);
			for (const e of t) e.movement && o.movement.push({
				pieceUid: i.uid,
				fn: e.movement
			}), e.invulnerable && o.invulnerable.push({
				pieceUid: i.uid,
				fn: e.invulnerable
			}), e.squareBlockMovement && o.squareBlock.push({
				pieceUid: i.uid,
				fn: e.squareBlockMovement
			});
		}
		if (t?.squares) for (const [i, s] of Object.entries(t.squares)) {
			const [r, s] = i.split(",").map(Number), a = x.getSquareModifiers(e, r, s, t);
			for (const e of a) e.squareBlockMovement && o.squareBlock.push({
				pieceUid: null,
				r,
				c: s,
				fn: e.squareBlockMovement
			});
		}
		return o;
	}
};
const q = () => crypto.randomUUID(), X = [
	{
		id: "KING_CHARISMA",
		name: "宽宏",
		tier: "COMMON",
		pieceType: r.KING,
		description: "周围 2 格内 of “兵”移动 logic 变为同“后”（滑行），移动范围两格。",
		hooks: { onTurnStart: ({ board: e, r: t, c: o, piece: s, emit: a }) => {
			for (let c = -2; c <= 2; c++) for (let n = -2; n <= 2; n++) {
				const d = t + c, p = o + n;
				if (C.isValidPos(d, p)) {
					const t = e[d][p];
					t && t.color === s.color && t.type === r.PAWN && a({
						type: "ADD_STATUS",
						pos: {
							r: d,
							c: p
						},
						statusId: i.CHARISMA_BUFF,
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
		pieceType: r.KING,
		description: "王 of 初始信号强度极高，第一层连接 of 有效距离从 1 格提升至 2 格。",
		modifiers: { networkRange: ({ r: e, c: t }) => {
			const o = [];
			for (let r = -2; r <= 2; r++) for (let i = -2; i <= 2; i++) {
				const s = e + r, a = t + i;
				C.isValidPos(s, a) && o.push({
					r: s,
					c: a
				});
			}
			return o;
		} }
	},
	{
		id: "KING_STEADY",
		name: "稳重",
		tier: "COMMON",
		pieceType: r.KING,
		description: "王免疫任何来自敌方技能 of “强制位移”效果。",
		modifiers: { isSteady: () => !0 }
	},
	{
		id: "KING_REWARD",
		name: "恩赏",
		tier: "COMMON",
		pieceType: r.KING,
		description: "任何友军在王周围 2 格内吃子时，额外获得 5 金币。",
		hooks: { onTurnStart: ({ board: e, r: t, c: o, piece: r, emit: s }) => {
			for (let a = -2; a <= 2; a++) for (let c = -2; c <= 2; c++) {
				const n = t + a, d = o + c;
				if (C.isValidPos(n, d)) {
					const t = e[n][d];
					t && t.color === r.color && s({
						type: "ADD_STATUS",
						pos: {
							r: n,
							c: d
						},
						statusId: i.AURA_REWARD,
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
		pieceType: r.KING,
		description: "只要王相邻有友方“车”，王无法被敌方 of “兵”或“马”吃掉。",
		modifiers: { invulnerable: ({ board: e, r: t, c: o, piece: i }, s) => {
			let a = !1;
			for (const [c, n] of [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1],
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			]) {
				const s = t + c, d = o + n;
				if (s >= 0 && s < 8 && d >= 0 && d < 8) {
					const t = e[s][d];
					if (t && t.color === i.color && t.type === r.ROOK) {
						a = !0;
						break;
					}
				}
			}
			return a && (s.type === r.PAWN || s.type === r.KNIGHT);
		} }
	},
	{
		id: "KING_BACKUP",
		name: "应急供电",
		tier: "COMMON",
		pieceType: r.KING,
		description: "王周围 1 格没有友方单位时，连通 3 格内最近的友方棋子（可多个）。",
		modifiers: { networkRange: ({ board: e, r: t, c: o, piece: r }) => {
			const i = [];
			let s = !1;
			for (let n = -1; n <= 1; n++) for (let i = -1; i <= 1; i++) {
				if (0 === n && 0 === i) continue;
				const a = t + n, c = o + i;
				if (a >= 0 && a < 8 && c >= 0 && c < 8) {
					const t = e[a][c];
					t && t.color === r.color && (s = !0);
				}
			}
			if (s) return [];
			const a = [];
			let c = 999;
			for (let n = -3; n <= 3; n++) for (let i = -3; i <= 3; i++) {
				if (0 === n && 0 === i) continue;
				const s = t + n, d = o + i;
				if (s >= 0 && s < 8 && d >= 0 && d < 8) {
					const t = e[s][d];
					if (t && t.color === r.color) {
						const e = n * n + i * i;
						a.push({
							pos: {
								r: s,
								c: d
							},
							distSq: e
						}), e < c && (c = e);
					}
				}
			}
			return a.forEach((e) => {
				e.distSq === c && i.push(e.pos);
			}), i;
		} }
	},
	{
		id: "KING_OVERSEER",
		name: "督战",
		tier: "RARE",
		pieceType: r.KING,
		description: "只要王处于联网状态，每回合额外获得 2 金币。单局限 40 金币。",
		hooks: { onTurnStart: ({ board: e, r: o, c: r, piece: i, emit: s, metadata: a }) => {
			const c = i.metadata?.overseerEarned || 0;
			if (c < 40 && i.color === t) {
				const { networked: t } = Ge(e, i.color, a);
				t[o][r] && (s({
					type: "SPAWN",
					pos: {
						r: o,
						c: r
					},
					piece: {
						...i,
						metadata: {
							...i.metadata,
							overseerEarned: c + 2
						}
					}
				}), s({
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
		pieceType: r.KING,
		description: "主动：消耗 10 金币，在王身边的空格处随机生成一个 1 级“兵”（过关不保留）。",
		activeSpec: {
			targeting: "self",
			execute: (e, t, o, i, s, a, c, n) => {
				const d = c?.gold || 0, p = [];
				for (const [r, l] of [
					[-1, 0],
					[1, 0],
					[0, -1],
					[0, 1],
					[-1, -1],
					[-1, 1],
					[1, -1],
					[1, 1]
				]) {
					const i = t + r, s = o + l;
					C.isValidPos(i, s) && !e[i][s] && p.push({
						r: i,
						c: s
					});
				}
				if (0 === p.length) return void a({
					type: "SHOW_TEXT",
					text: "No space around",
					textKey: "LOG_NO_SPACE",
					style: "system",
					pos: {
						r: t,
						c: o
					}
				});
				if (d < 10) return void a({
					type: "SHOW_TEXT",
					text: "Insufficient gold",
					textKey: "LOG_NO_FUNDS",
					style: "system",
					pos: {
						r: t,
						c: o
					}
				});
				const E = p[Math.floor((n || { next: Math.random }).next() * p.length)];
				a({
					type: "MODIFY_GOLD",
					amount: -10,
					reason: "ROYAL_GUARD"
				}), a({
					type: "SPAWN",
					pos: E,
					piece: {
						id: q(),
						type: r.PAWN,
						color: i.color,
						level: 1,
						skills: [],
						statuses: [],
						maxSlots: 1,
						equippedItems: []
					}
				}), a({
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
		pieceType: r.KING,
		description: "每当有一个友方单位被吃掉，王会立即产生 15 金币作为“抚恤金”。",
		tags: ["GLOBAL"],
		hooks: { onDeath: ({ piece: e, subject: t, emit: o, r, c: i }) => {
			t && t.color === e.color && t.uid !== e.uid && (o({
				type: "MODIFY_GOLD",
				amount: 15,
				reason: "TAXATION",
				pos: {
					r,
					c: i
				}
			}), o({
				type: "SHOW_TEXT",
				text: "Compensation +15",
				textKey: "LOG_TAXATION_REWARD",
				style: "gold",
				pos: {
					r,
					c: i
				}
			}));
		} }
	},
	{
		id: "KING_SWAP",
		name: "换位",
		tier: "EPIC",
		pieceType: r.KING,
		description: "主动：与周围 2 格内的任何一个友军交换位置。",
		activeSpec: {
			targeting: "target",
			getAlternatives: (e, t, o, i) => {
				const s = [];
				for (let a = -2; a <= 2; a++) for (let c = -2; c <= 2; c++) {
					const n = t + a, d = o + c;
					if (C.isValidPos(n, d)) {
						const t = e[n][d];
						t && t.color === i.color && t.type !== r.KING && s.push({
							pos: {
								r: n,
								c: d
							},
							value: {
								r: n,
								c: d
							}
						});
					}
				}
				return s;
			},
			getAoE: (e, t, o, r, i) => i ? [{
				r: i.r,
				c: i.c
			}] : [],
			execute: (e, t, o, r, i, s) => {
				i && (s({
					type: "SWAP_PIECES",
					posA: {
						r: t,
						c: o
					},
					posB: i
				}), s({
					type: "SHOW_TEXT",
					text: "Swap",
					textKey: "LOG_SWAP",
					style: "system",
					pos: i
				}));
			}
		}
	},
	{
		id: "KING_REFLECTION",
		name: "镜像之盾",
		tier: "EPIC",
		pieceType: r.KING,
		description: "任何在王周围 1 格内吃掉友军 of 敌方棋子，会立即被“震死”（同归于尽）。",
		hooks: { onTurnStart: ({ board: e, r: t, c: o, piece: r, emit: s }) => {
			for (let a = -1; a <= 1; a++) for (let c = -1; c <= 1; c++) {
				const n = t + a, d = o + c;
				if (C.isValidPos(n, d)) {
					const t = e[n][d];
					t && t.color === r.color && s({
						type: "ADD_STATUS",
						pos: {
							r: n,
							c: d
						},
						statusId: i.REFLECTION_AURA,
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
		pieceType: r.KING,
		description: "只要王处于连通状态，全场所有 of “马”在跳跃落点时，会自动冻结周围 1 格 of 敌军。",
		hooks: { onTurnStart: ({ board: e, r: t, c: o, piece: s, emit: a, metadata: c }) => {
			const { networked: n } = Ge(e, s.color, c);
			n[t][o] && C.findPieces(e, (e) => e.color === s.color && e.type === r.KNIGHT).forEach(({ r: e, c: t }) => a({
				type: "ADD_STATUS",
				pos: {
					r: e,
					c: t
				},
				statusId: i.COMMANDER_AURA,
				duration: 2
			}));
		} }
	},
	{
		id: "KING_GRAND_CASTLE",
		name: "王车易位",
		tier: "EPIC",
		pieceType: r.KING,
		description: "主动：无视距离，直接与场上任意位置的一个友方“车”交换位置。",
		activeSpec: {
			targeting: "target",
			getAlternatives: (e, t, o, i) => C.findPieces(e, (e) => e.color === i.color && e.type === r.ROOK).map(({ r: e, c: t }) => ({
				pos: {
					r: e,
					c: t
				},
				value: {
					r: e,
					c: t
				}
			})),
			getAoE: (e, t, o, r, i) => i ? [{
				r: i.r,
				c: i.c
			}] : [],
			execute: (e, t, o, r, i, s) => {
				i && (s({
					type: "SWAP_PIECES",
					posA: {
						r: t,
						c: o
					},
					posB: i
				}), s({
					type: "SHOW_TEXT",
					text: "Castling",
					textKey: "LOG_CASTLING",
					style: "system",
					pos: i
				}));
			}
		}
	},
	{
		id: "KING_SOUL_LINK",
		name: "附身斗篷",
		tier: "LEGENDARY",
		pieceType: r.KING,
		description: "王被吃掉时，如果场上有 1 级的兵，该兵变身为新的“王”，使游戏继续。",
		hooks: { onDeath: ({ board: e, piece: t, emit: o, cancelAction: i, r: s, c: a }) => {
			const c = C.findPieces(e, (e) => e.color === t.color && e.type === r.PAWN && 1 === e.level)[0];
			c && (i?.(), o({
				type: "REMOVE_PIECE",
				pos: {
					r: s,
					c: a
				}
			}), o({
				type: "UPDATE_ROSTER_PIECE",
				pieceUid: c.piece.uid,
				updates: {
					type: r.KING,
					maxSlots: 3
				}
			}), o({
				type: "SPAWN",
				pos: {
					r: c.r,
					c: c.c
				},
				piece: {
					...c.piece,
					type: r.KING,
					maxSlots: 3
				}
			}), o({
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
		pieceType: r.KING,
		description: "王周围 2 格内，所有友方棋子免疫一切负面状态（冻结、石化、沉默等）。",
		hooks: { onTurnStart: ({ board: e, r: t, c: o, piece: r, emit: s }) => {
			for (let a = -2; a <= 2; a++) for (let c = -2; c <= 2; c++) {
				const n = t + a, d = o + c;
				if (C.isValidPos(n, d)) {
					const t = e[n][d];
					t && t.color === r.color && ([
						i.FROZEN,
						i.PETRIFIED,
						i.SKILL_LOCKED,
						i.SILENCED,
						i.INFECTED,
						i.BETRAYED,
						i.GRAVITY_LOCKED,
						i.AURA_SUPPRESSED
					].forEach((e) => {
						t.statuses?.some((t) => t.id === e) && s({
							type: "REMOVE_STATUS",
							pos: {
								r: n,
								c: d
							},
							statusId: e
						});
					}), s({
						type: "ADD_STATUS",
						pos: {
							r: n,
							c: d
						},
						statusId: i.HOLY_DOMAIN_AURA,
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
		pieceType: r.KING,
		description: "主动：使王周围 3 格内的所有单位（不论敌我，除自己外）进入“石化”状态（每局限一次）。",
		activeSpec: {
			targeting: "self",
			usesKey: "stasisUses",
			maxUses: 1,
			execute: (e, t, o, s, a, c) => {
				if ((s.metadata?.stasisUses || 0) >= 1) c({
					type: "SHOW_TEXT",
					text: "Already used",
					textKey: "LOG_ALREADY_USED",
					style: "system",
					pos: {
						r: t,
						c: o
					}
				});
				else {
					c({
						type: "ANIMATE",
						name: "STASIS_FIELD",
						pos: {
							r: t,
							c: o
						},
						duration: 1e3
					}), c({
						type: "ANIMATE",
						name: "SCREEN_SHAKE",
						duration: 300
					}), c({
						type: "UPDATE_ROSTER_PIECE",
						pieceUid: s.uid,
						updates: { metadata: {
							...s.metadata,
							stasisUses: (s.metadata?.stasisUses || 0) + 1
						} }
					});
					for (let s = -3; s <= 3; s++) for (let a = -3; a <= 3; a++) {
						if (0 === s && 0 === a) continue;
						const n = t + s, d = o + a;
						if (C.isValidPos(n, d)) {
							const t = e[n][d];
							t && t.type !== r.KING && c({
								type: "ADD_STATUS",
								pos: {
									r: n,
									c: d
								},
								statusId: i.PETRIFIED,
								duration: 99,
								visualMeta: { delayBefore: 200 }
							});
						}
					}
					c({
						type: "SHOW_TEXT",
						text: "Time stasis locked!",
						textKey: "LOG_STASIS_LOCK",
						style: "system",
						pos: {
							r: t,
							c: o
						}
					});
				}
			}
		},
		getDisplayStatus: (e, t) => (e.metadata?.stasisUses || 0) >= 1 ? {
			text: t("used"),
			colorClass: "text-red-500"
		} : {
			text: t("ready"),
			colorClass: "text-cyan-400 animate-pulse"
		}
	},
	{
		id: "KING_ROYAL_PATH",
		name: "御道",
		tier: "COMMON",
		pieceType: r.KING,
		description: "如果王所在的行和列没有任何敌方棋子，王的移动范围提升至 2 格（不可吃子）。",
		modifiers: { movement: (e, t) => {
			const { board: o, piece: r, r: i, c: s, isControlSquares: a } = e;
			let c = !1;
			for (let n = 0; n < 8; n++) {
				const e = o[i][n], t = o[n][s];
				if (e && e.color !== r.color && (c = !0), t && t.color !== r.color && (c = !0), c) break;
			}
			return c || [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1],
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			].forEach(([e, c]) => {
				const n = i + 2 * e, d = s + 2 * c, p = i + e, E = s + c;
				if (C.isValidPos(n, d) && !o[p][E]) {
					const e = o[n][d];
					(!e || a && e.color === r.color) && t.push({
						r: n,
						c: d
					});
				}
			}), t;
		} }
	},
	{
		id: "KING_LOGISTICS",
		name: "统筹",
		tier: "COMMON",
		pieceType: r.KING,
		description: "部署任何棋子到王相邻的格子时，立即返还 3 金币。",
		tags: ["GLOBAL"],
		hooks: { onDeploy: ({ r: e, c: o, piece: i, ownerPos: s, subject: a, emit: c }) => {
			s && a && i.type === r.KING && i.color === t && i.skills.includes("KING_LOGISTICS") && 1 === Math.max(Math.abs(e - s.r), Math.abs(o - s.c)) && a.color === t && (c({
				type: "MODIFY_GOLD",
				amount: 3,
				reason: "LOGISTICS"
			}), c({
				type: "SHOW_TEXT",
				text: "Logistics +3",
				textKey: "LOG_LOGISTICS_REWARD",
				style: "gold",
				pos: {
					r: e,
					c: o
				}
			}));
		} }
	},
	{
		id: "KING_DECOY_DOUBLE",
		name: "影武者",
		tier: "EPIC",
		pieceType: r.KING,
		description: "移动后，在起始位置留下一个提供信号的“影终端”，持续 1 回合（无法移动或战斗）。",
		hooks: {
			onAfterMove: ({ from: e, piece: t, emit: o }) => {
				e && (o({
					type: "SPAWN",
					pos: e,
					piece: {
						id: `decoy-${q()}`,
						type: r.PAWN,
						color: t.color,
						level: 1,
						skills: ["PAWN_SIGNAL_TOWER"],
						statuses: [{
							id: i.ENCRYPTED,
							duration: 1
						}],
						maxSlots: 0,
						equippedItems: [],
						metadata: { isDecoyTerminal: !0 }
					}
				}), o({
					type: "SHOW_TEXT",
					text: "Decoy Terminal",
					textKey: "LOG_DECOY_TERMINAL",
					style: "system",
					pos: e
				}));
			},
			onTurnStart: ({ r: e, c: t, piece: o, emit: r }) => {
				o.metadata?.isDecoyTerminal && r({
					type: "REMOVE_PIECE",
					pos: {
						r: e,
						c: t
					}
				});
			}
		}
	},
	{
		id: "KING_MARTYRDOM",
		name: "牺牲",
		tier: "LEGENDARY",
		pieceType: r.KING,
		description: "王被吃掉时，若库存已空且场上有其他友军，则牺牲所有友军并自爆，清空周围 5x5 的敌军并重生（限一次）。",
		hooks: { onDeath: ({ board: e, piece: t, r: o, c: i, cancelAction: s, emit: a, reserves: c }) => {
			if (t.metadata?.martyrdomUsed) return;
			const n = c ? c[t.color] : {}, d = Object.values(n).every((e) => (e || 0) <= 0), p = C.findPieces(e, (e) => e.color === t.color && e.type !== r.KING);
			if (d && p.length > 0) {
				a({
					type: "ANIMATE",
					name: "RIPPLE",
					pos: {
						r: o,
						c: i
					},
					duration: 600,
					metadata: { color: "#ef4444" }
				}), a({
					type: "ANIMATE",
					name: "SCREEN_SHAKE",
					duration: 400
				}), s?.(), p.forEach(({ r: e, c: t, piece: o }) => {
					o.uid && a({
						type: "REMOVE_FROM_ROSTER",
						pieceUid: o.uid
					}), a({
						type: "REMOVE_PIECE",
						pos: {
							r: e,
							c: t
						}
					});
				});
				for (let s = -2; s <= 2; s++) for (let c = -2; c <= 2; c++) {
					const n = o + s, d = i + c;
					if (C.isValidPos(n, d)) {
						const o = e[n][d];
						o && o.color !== t.color && o.type !== r.KING && a({
							type: "KILL",
							pos: {
								r: n,
								c: d
							}
						});
					}
				}
				a({
					type: "ANIMATE",
					name: "ITEM_USE_FLASH",
					pos: {
						r: o,
						c: i
					},
					duration: 600
				}), a({
					type: "SPAWN",
					pos: {
						r: o,
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
				}), a({
					type: "SHOW_TEXT",
					text: "Final Sacrifice: Rebirth!",
					textKey: "LOG_MARTYRDOM",
					style: "danger"
				});
			}
		} }
	}
], $ = [
	{
		id: "KNIGHT_AURA",
		name: "骑士光环",
		tier: "COMMON",
		pieceType: r.KNIGHT,
		description: "只要马处于联网状态，与其相邻的友方“兵”获得十字移动能力。",
		hooks: { onTurnStart: ({ board: e, r: t, c: o, piece: s, emit: a, metadata: c }) => {
			const { networked: n } = Ge(e, s.color, c);
			n[t][o] && [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1],
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			].forEach(([c, n]) => {
				const d = t + c, p = o + n;
				if (d >= 0 && d < 8 && p >= 0 && p < 8) {
					const t = e[d][p];
					t && t.color === s.color && t.type === r.PAWN && a({
						type: "ADD_STATUS",
						pos: {
							r: d,
							c: p
						},
						statusId: i.CROSS_AURA,
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
		pieceType: r.KNIGHT,
		description: "跳跃后如果没有吃子，该棋子可立刻在十字方向上再次行动一格（无视网络连接，不可吃子）。",
		hooks: { onAfterMove: ({ victim: e, r: t, c: o, piece: r, emit: s }) => {
			e || (s({
				type: "ADD_STATUS",
				pos: {
					r: t,
					c: o
				},
				statusId: i.CROSS_AURA,
				duration: 2
			}), s({
				type: "ADD_STATUS",
				pos: {
					r: t,
					c: o
				},
				statusId: i.CANNOT_CAPTURE,
				duration: 2
			}), s({
				type: "SET_EXTRA_MOVE",
				active: !0
			}), s({
				type: "UPDATE_METADATA",
				updates: { lockedActionUid: r.uid }
			}), s({
				type: "SET_UI_SELECTION",
				pos: {
					r: t,
					c: o
				},
				uid: r.uid ?? null
			}), s({
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
		pieceType: r.KNIGHT,
		atomicBits: ["MOVE_N"],
		description: "即使该棋子因断网处于“瘫痪/冻结”状态，也允许它进行移动，但仅限跳向目前被己方网络覆盖的格子。",
		modifiers: {
			bypassFrozen: () => !0,
			movement: (e, o) => {
				const { r, c: i, piece: s, networkedMap: a, metadata: c, isControlSquares: n } = e;
				if (n) return o;
				if (a && a[r][i]) return o;
				if (!c?.cache) return o;
				const d = s.color === t ? c.cache.whiteControl : c.cache.blackControl;
				return o.filter((e) => d[e.r][e.c]);
			}
		}
	},
	{
		id: "KNIGHT_PHANTOM_STRIKE",
		name: "幻影突袭",
		tier: "COMMON",
		pieceType: r.KNIGHT,
		atomicBits: ["MOVE_N"],
		description: "马吃子后可以马上回到原位。",
		modifiers: { movement: ({ board: e, r: t, c: o, piece: r }, i) => ([
			[-2, -1],
			[-2, 1],
			[-1, -2],
			[-1, 2],
			[1, -2],
			[1, 2],
			[2, -1],
			[2, 1]
		].forEach(([s, a]) => {
			const c = t + s, n = o + a;
			if (C.isValidPos(c, n)) {
				const t = e[c][n];
				t && t.color !== r.color && i.push({
					r: c,
					c: n
				});
			}
		}), i) },
		hooks: { onKill: ({ from: e, r: t, c: o, emit: r }) => {
			e && (r({
				type: "MOVE",
				from: {
					r: t,
					c: o
				},
				to: e,
				visualMeta: {
					delayBefore: 200,
					duration: 300
				}
			}), r({
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
		pieceType: r.KNIGHT,
		description: "如果跳跃的目标格是敌方控制区，立即获得 1 金币。",
		hooks: { onAfterMove: ({ board: e, piece: r, r: i, c: s, emit: a, metadata: c }) => {
			const { control: n } = Ge(e, r.color === t ? o : t, c);
			n[i][s] && r.color === t && a({
				type: "MODIFY_GOLD",
				amount: 1,
				reason: "SCAVENGER"
			});
		} }
	},
	{
		id: "KNIGHT_SIDE_STEP",
		name: "侧步",
		tier: "COMMON",
		pieceType: r.KNIGHT,
		description: "允许马向相邻的空格移动一格（非吃子）。",
		modifiers: { movement: (e, t) => {
			const { board: o, r, c: i, piece: s, isControlSquares: a } = e;
			return [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1]
			].forEach(([e, c]) => {
				const n = r + e, d = i + c;
				if (C.isValidPos(n, d)) {
					const e = o[n][d];
					(!e || a && e.color === s.color) && t.push({
						r: n,
						c: d
					});
				}
			}), t;
		} }
	},
	{
		id: "KNIGHT_HOT_SWAP",
		name: "战术换位",
		tier: "COMMON",
		pieceType: r.KNIGHT,
		description: "允许跳向己方“兵”所在的格子，落地后与该兵互换位置。",
		modifiers: { movement: ({ board: e, piece: t, r: o, c: i }, s) => ([
			[-2, -1],
			[-2, 1],
			[-1, -2],
			[-1, 2],
			[1, -2],
			[1, 2],
			[2, -1],
			[2, 1]
		].forEach(([a, c]) => {
			const n = o + a, d = i + c;
			if (C.isValidPos(n, d)) {
				const o = e[n][d];
				o && o.color === t.color && o.type === r.PAWN && s.push({
					r: n,
					c: d
				});
			}
		}), s) },
		hooks: { onAfterMove: ({ from: e, piece: t, emit: o }) => {
			if (e && t.stackedPiece && t.stackedPiece.type === r.PAWN) {
				const r = t.stackedPiece;
				o({
					type: "UPDATE_ROSTER_PIECE",
					pieceUid: t.uid,
					updates: { stackedPiece: null }
				}), o({
					type: "SPAWN",
					pos: e,
					piece: {
						...r,
						stackedPiece: null
					}
				}), o({
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
		pieceType: r.KNIGHT,
		description: "马吃子后，若落点周围 1 格没有友军，该马获得一层“护盾”。",
		hooks: { onKill: ({ board: e, r: t, c: o, piece: r, emit: s }) => {
			let a = !1;
			for (let i = -1; i <= 1; i++) for (let s = -1; s <= 1; s++) {
				if (0 === i && 0 === s) continue;
				const c = t + i, n = o + s;
				if (C.isValidPos(c, n) && e[c][n]?.color === r.color) {
					a = !0;
					break;
				}
			}
			a || s({
				type: "ADD_STATUS",
				pos: {
					r: t,
					c: o
				},
				statusId: i.SHIELDED,
				duration: 99
			});
		} }
	},
	{
		id: "KNIGHT_TROJAN_KERNEL",
		name: "特洛伊内核",
		tier: "LEGENDARY",
		pieceType: r.KNIGHT,
		description: "终极骇客手段。当该棋子吃掉敌方的“车”或“后”时，收获一个一级兵加入你自己的库存中。",
		hooks: { onKill: ({ piece: e, victim: t, emit: o }) => {
			if (t && (t.type === r.QUEEN || t.type === r.ROOK)) {
				o({
					type: "MODIFY_RESERVE",
					color: e.color,
					pieceType: r.PAWN,
					amount: 1
				});
				const t = Date.now();
				o({
					type: "ADD_TO_ROSTER",
					piece: {
						id: `bribe-${t}`,
						uid: `u-${t}`,
						type: r.PAWN,
						color: e.color,
						level: 1,
						skills: [],
						statuses: [],
						maxSlots: 1,
						equippedItems: []
					}
				});
			}
		} }
	},
	{
		id: "KNIGHT_CHARGE",
		name: "冲锋",
		tier: "RARE",
		pieceType: r.KNIGHT,
		description: "马跳跃吃子时，会对目标周围 1 格 of 敌方兵造成 1 回合冻结。",
		hooks: { onKill: ({ board: e, r: t, c: o, piece: s, emit: a }) => {
			for (let c = -1; c <= 1; c++) for (let n = -1; n <= 1; n++) {
				const d = t + c, p = o + n;
				if (C.isValidPos(d, p)) {
					const t = e[d][p];
					t && t.color !== s.color && t.type !== r.KING && a({
						type: "ADD_STATUS",
						pos: {
							r: d,
							c: p
						},
						statusId: i.FROZEN,
						duration: 2
					});
				}
			}
		} }
	},
	{
		id: "KNIGHT_FULL_DUPLEX",
		name: "全双工响应",
		tier: "EPIC",
		pieceType: r.KNIGHT,
		description: "当部署该棋子直接上场后，本回合不结束，你可以立即再对场上的任意己方棋子执行一次“移动”操作。",
		hooks: { onDeploy: ({ piece: e, emit: o }) => {
			o({
				type: "SET_EXTRA_MOVE",
				active: !0
			}), o({
				type: "SHOW_TEXT",
				text: e.color === t ? "Full-Duplex Active!" : "AI Full-Duplex!",
				textKey: e.color === t ? "LOG_FULL_DUPLEX" : "LOG_FULL_DUPLEX_AI",
				style: "system"
			});
		} }
	},
	{
		id: "KNIGHT_CHAIN",
		name: "连锁闪电",
		tier: "LEGENDARY",
		pieceType: r.KNIGHT,
		description: "如果落点有敌方子力，吃掉后本回合不结束，该棋子可立刻再次行动（无视网络连接）。",
		hooks: { onKill: ({ piece: e, r: o, c: r, emit: i }) => {
			i({
				type: "SET_EXTRA_MOVE",
				active: !0
			}), i({
				type: "UPDATE_METADATA",
				updates: { lockedActionUid: e.uid }
			}), i({
				type: "SET_UI_SELECTION",
				pos: {
					r: o,
					c: r
				},
				uid: e.uid ?? null
			}), i({
				type: "SHOW_TEXT",
				text: e.color === t ? "Chain Jump!" : "AI Chain Jump!",
				textKey: e.color === t ? "LOG_CHAIN_JUMP" : "LOG_CHAIN_JUMP_AI",
				style: "system"
			});
		} }
	},
	{
		id: "KNIGHT_MIRAGE",
		name: "幻影移形",
		tier: "RARE",
		pieceType: r.KNIGHT,
		description: "被吃掉时，如果周围 2 格内有己方兵，则与其交换，兵代替马消失。",
		hooks: { onDeath: ({ piece: e, board: t, r: o, c: i, emit: s, cancelAction: a }) => {
			let c = null, n = null;
			for (let d = -2; d <= 2; d++) {
				for (let s = -2; s <= 2; s++) {
					const a = o + d, p = i + s;
					if (C.isValidPos(a, p)) {
						const o = t[a][p];
						if (o && o.color === e.color && o.type === r.PAWN) {
							c = {
								r: a,
								c: p
							}, n = o;
							break;
						}
					}
				}
				if (c) break;
			}
			c && n && (a?.(), s({
				type: "ANIMATE",
				name: "PHANTOM_MOVE",
				pos: {
					r: o,
					c: i
				},
				duration: 400
			}), s({
				type: "REMOVE_PIECE",
				pos: {
					r: o,
					c: i
				}
			}), s({
				type: "REMOVE_PIECE",
				pos: c
			}), s({
				type: "SPAWN",
				pos: {
					r: o,
					c: i
				},
				piece: n
			}), s({
				type: "SPAWN",
				pos: c,
				piece: e
			}), s({
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
		pieceType: r.KNIGHT,
		description: "跳跃进入敌方领地或敌方控制区时产生金币（根据距离）。单关收益有上限。吃掉车/后可获得装备。",
		hooks: {
			onAfterMove: ({ from: e, r, c: i, piece: s, board: a, emit: c, metadata: n }) => {
				if (!e) return;
				const d = s.color === t ? r < 4 : r > 3, { control: p } = Ge(a, s.color === t ? o : t, n), E = p[r][i];
				if (!d && !E) return;
				const l = s.metadata?.levelGoldEarned ?? 0;
				if (l >= 40) return;
				const u = Math.abs(r - e.r) + Math.abs(i - e.c), A = Math.min(u, 40 - l);
				A <= 0 || (c({
					type: "SPAWN",
					pos: {
						r,
						c: i
					},
					piece: {
						...s,
						metadata: {
							...s.metadata,
							levelGoldEarned: l + A
						}
					}
				}), s.color === t && c({
					type: "MODIFY_GOLD",
					amount: A,
					reason: "MIDAS_TOUCH"
				}));
			},
			onKill: ({ victim: e, piece: o, emit: i }) => {
				!e || e.type !== r.QUEEN && e.type !== r.ROOK || o.color !== t || i({
					type: "ADD_ITEM",
					item: {
						id: `eq-${Date.now()}`,
						type: "EQUIPMENT",
						name: "战利品",
						desc: "强力核心",
						effectId: "GENERIC_BUFF"
					}
				});
			}
		}
	},
	{
		id: "KNIGHT_SABOTAGE",
		name: "破坏",
		tier: "RARE",
		pieceType: r.KNIGHT,
		description: "马跳跃落点 adjacent 1 格内 of 敌方陷阱和地块效果被销毁。",
		hooks: { onAfterMove: ({ r: e, c: t, metadata: o, emit: r }) => {
			if (o && o.squares) for (let i = -1; i <= 1; i++) for (let s = -1; s <= 1; s++) {
				const a = e + i, c = t + s, n = `${a},${c}`;
				o.squares[n] && r({
					type: "REMOVE_SQUARE",
					pos: {
						r: a,
						c
					},
					statusId: "ALL"
				});
			}
		} }
	},
	{
		id: "KNIGHT_TRAMPLE",
		name: "践踏",
		tier: "RARE",
		pieceType: r.KNIGHT,
		description: "跳跃过程中经过的敌方棋子，随机概率会被冻结 1 回合。",
		hooks: { onAfterMove: ({ board: e, from: t, r: o, c: r, piece: s, emit: a, prng: c }) => {
			if (!t || !c) return;
			const n = [], d = o - t.r, p = r - t.c;
			if (Math.abs(d) > Math.abs(p)) {
				for (let e = 1; e <= Math.abs(d); e++) n.push({
					r: t.r + Math.sign(d) * e,
					c: t.c
				});
				n.push({
					r: o,
					c: t.c + p
				});
			} else {
				for (let e = 1; e <= Math.abs(p); e++) n.push({
					r: t.r,
					c: t.c + Math.sign(p) * e
				});
				n.push({
					r: t.r + d,
					c: r
				});
			}
			n.forEach((t) => {
				if (t.r === o && t.c === r) return;
				const n = e[t.r]?.[t.c];
				n && n.color !== s.color && c.next() < .5 && (a({
					type: "ADD_STATUS",
					pos: t,
					statusId: i.FROZEN,
					duration: 2
				}), a({
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
		pieceType: r.KNIGHT,
		description: "该骑士免疫冻结状态，断网时仍可移动。",
		modifiers: { bypassFrozen: () => !0 }
	},
	{
		id: "KNIGHT_HIT_AND_RUN",
		name: "回旋镖",
		tier: "RARE",
		pieceType: r.KNIGHT,
		description: "吃子后返回原位。",
		hooks: { onKill: ({ from: e, r: t, c: o, emit: r }) => {
			e && r({
				type: "MOVE",
				from: {
					r: t,
					c: o
				},
				to: e
			});
		} }
	},
	{
		id: "KNIGHT_GRAVITY_WELL",
		name: "引力场",
		tier: "EPIC",
		pieceType: r.KNIGHT,
		description: "移动后对周围敌军施加冻结。",
		hooks: { onAfterMove: ({ r: e, c: t, emit: o }) => {
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
				const a = e + r, c = t + s;
				a >= 0 && a < 8 && c >= 0 && c < 8 && o({
					type: "ADD_STATUS",
					pos: {
						r: a,
						c
					},
					statusId: i.FROZEN,
					duration: 2
				});
			});
		} }
	},
	{
		id: "KNIGHT_TROJAN",
		name: "木马",
		tier: "EPIC",
		pieceType: r.KNIGHT,
		description: "死亡时生成两个兵作为殿后。",
		hooks: { onDeath: ({ piece: e, board: t, r: o, c: i, emit: s, prng: a }) => {
			if (!a) return;
			let c = 0;
			const n = [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1],
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			].sort(() => a.next() - .5);
			for (const [d, p] of n) {
				if (c >= 2) break;
				const a = o + d, n = i + p;
				C.isValidPos(a, n) && !t[a][n] && (s({
					type: "SPAWN",
					pos: {
						r: a,
						c: n
					},
					piece: {
						...e,
						id: `spawn-${Date.now()}-${c}`,
						type: r.PAWN,
						level: 1,
						skills: [],
						statuses: [],
						maxSlots: 1,
						equippedItems: []
					}
				}), c += 1);
			}
		} }
	},
	{
		id: "KNIGHT_RIFT",
		name: "时空裂隙",
		tier: "LEGENDARY",
		pieceType: r.KNIGHT,
		description: "跳跃后，将起跳点相邻的一名【非王】友军传送到落点相邻的空格。",
		hooks: { onAfterMove: ({ board: e, from: t, r: o, c: i, piece: s, emit: a, prng: c }) => {
			if (!t || !c) return;
			let n = null;
			const d = [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1],
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			];
			for (const [p, E] of d) {
				const o = t.r + p, i = t.c + E;
				if (C.isValidPos(o, i)) {
					const t = e[o][i];
					if (t && t.color === s.color && t.type !== r.KING) {
						n = {
							r: o,
							c: i
						};
						break;
					}
				}
			}
			if (n) {
				const t = d.sort(() => c.next() - .5);
				for (const [r, s] of t) {
					const t = o + r, c = i + s;
					if (C.isValidPos(t, c) && !e[t][c]) {
						a({
							type: "MOVE",
							from: n,
							to: {
								r: t,
								c
							}
						}), a({
							type: "SHOW_TEXT",
							text: "Rift Teleport",
							textKey: "LOG_RIFT_TELEPORT",
							style: "system",
							pos: {
								r: t,
								c
							}
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
		pieceType: r.KNIGHT,
		description: "跳跃经过敌方单位上方时，窃取每一个敌方 2 金币。",
		hooks: { onAfterMove: ({ board: e, from: r, r: i, c: s, piece: a, emit: c }) => {
			if (!r || a.color !== t) return;
			const n = Math.round((r.r + i) / 2), d = Math.round((r.c + s) / 2);
			[e[n]?.[r.c], e[r.r]?.[d]].forEach((e) => {
				e && e.color === o && (c({
					type: "MODIFY_GOLD",
					amount: 2,
					reason: "PLUNDER"
				}), c({
					type: "SHOW_TEXT",
					text: "+2 🪙",
					textKey: "LOG_GOLD_PLUS",
					textParams: { amount: 2 },
					style: "gold",
					pos: {
						r: i,
						c: s
					}
				}));
			});
		} }
	},
	{
		id: "EQ_GHOST_RIDE",
		name: "幽灵骑行",
		tier: "EPIC",
		pieceType: r.KNIGHT,
		description: "跳跃经过的所有敌方单位有 30% 概率被随机传送。",
		hooks: { onAfterMove: ({ board: e, from: t, r: o, c: r, piece: i, emit: s, prng: a }) => {
			if (!t || !a) return;
			const c = Math.round((t.r + o) / 2), n = Math.round((t.c + r) / 2);
			[{
				r: c,
				c: t.c
			}, {
				r: t.r,
				c: n
			}].forEach((t) => {
				const o = e[t.r]?.[t.c];
				if (o && o.color !== i.color && a.next() < .3) {
					const o = [];
					if (e.forEach((e, t) => e.forEach((e, r) => {
						e || o.push({
							r: t,
							c: r
						});
					})), o.length > 0) {
						const e = o[Math.floor(a.next() * o.length)];
						s({
							type: "MOVE",
							from: t,
							to: e
						}), s({
							type: "SHOW_TEXT",
							text: "Ghost Teleport",
							textKey: "LOG_GHOST_RIDE",
							style: "system",
							pos: e
						});
					}
				}
			});
		} }
	}
], Z = [
	{
		id: "PAWN_PATROL",
		name: "巡逻",
		tier: "COMMON",
		pieceType: r.PAWN,
		description: "允许兵水平向左或向右移动 1 格（不可吃子）。",
		tags: ["MOVEMENT"],
		isUnique: !0,
		modifiers: { movement: (e, t) => {
			const { board: o, r, c: i, piece: s, isControlSquares: a } = e;
			return [i - 1, i + 1].forEach((e) => {
				if (e >= 0 && e < 8) {
					const i = o[r][e];
					(!i || a && i.color === s.color) && t.push({
						r,
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
		pieceType: r.PAWN,
		description: "允许兵在任何位置向前直线移动两格（不可吃子，不可越子）。",
		tags: ["MOVEMENT"],
		isUnique: !0,
		modifiers: { movement: (e, o) => {
			const { board: r, r: i, c: s, piece: a, isControlSquares: c } = e, n = a.color === t ? -1 : 1, d = i + 2 * n;
			if (d >= 0 && d < 8 && !r[i + n][s]) {
				const e = r[d][s];
				(!e || c && e.color === a.color) && o.push({
					r: d,
					c: s
				});
			}
			return o;
		} }
	},
	{
		id: "PAWN_FRONTAL_SPIKE",
		name: "锋刃",
		tier: "COMMON",
		pieceType: r.PAWN,
		description: "允许兵向前直行移动 1 格时吃子。",
		modifiers: { movement: (e, o) => {
			const { board: r, r: i, c: s, piece: a, isControlSquares: c } = e, n = i + (a.color === t ? -1 : 1);
			if (n >= 0 && n < 8) {
				const e = r[n][s];
				(e && e.color !== a.color || c && e && e.color === a.color) && o.push({
					r: n,
					c: s
				});
			}
			return o;
		} }
	},
	{
		id: "PAWN_BACKSTEP",
		name: "后撤步",
		tier: "COMMON",
		pieceType: r.PAWN,
		description: "允许向左后或右后方斜向退一格（不吃子）。",
		tags: ["MOVEMENT"],
		isUnique: !0,
		modifiers: { movement: (e, o) => {
			const { board: r, r: i, c: s, piece: a, isControlSquares: c } = e, n = i + (a.color === t ? 1 : -1);
			return n >= 0 && n < 8 && [s - 1, s + 1].forEach((e) => {
				if (e >= 0 && e < 8) {
					const t = r[n][e];
					(!t || c && t.color === a.color) && o.push({
						r: n,
						c: e
					});
				}
			}), o;
		} }
	},
	{
		id: "PAWN_RESOURCEFUL",
		name: "补给包",
		tier: "COMMON",
		pieceType: r.PAWN,
		description: "被吃掉时，有 30% 概率随机返还一个“兵”到你的库存中。",
		hooks: { onDeath: ({ piece: e, emit: t, prng: o }) => {
			o && o.next() < .3 && t({
				type: "MODIFY_RESERVE",
				color: e.color,
				pieceType: r.PAWN,
				amount: 1
			});
		} }
	},
	{
		id: "PAWN_VENGEANCE",
		name: "牺牲闪击",
		tier: "COMMON",
		pieceType: r.PAWN,
		description: "被吃掉时，随机冻结对方一名非王棋子 2 回合。",
		hooks: { onDeath: ({ board: e, piece: t, emit: o, prng: s }) => {
			const a = C.findPieces(e, (e) => e.color !== t.color && e.type !== r.KING);
			if (a.length > 0 && s) {
				const e = a[Math.floor(s.next() * a.length)];
				o({
					type: "ADD_STATUS",
					pos: {
						r: e.r,
						c: e.c
					},
					statusId: i.FROZEN,
					duration: 2
				}), o({
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
		pieceType: r.PAWN,
		description: "吃掉敌方的“后”或“车”时，在原地进化为随机高级棋子。",
		hooks: { onKill: ({ piece: e, victim: t, r: o, c: i, emit: s, prng: a }) => {
			if (t && (t.type === r.QUEEN || t.type === r.ROOK) && a) {
				const t = [
					r.KNIGHT,
					r.BISHOP,
					r.ROOK
				];
				s({
					type: "SPAWN",
					pos: {
						r: o,
						c: i
					},
					piece: {
						...e,
						type: t[Math.floor(a.next() * t.length)],
						level: 1
					}
				}), s({
					type: "SHOW_TEXT",
					text: "Assassin Evolution!",
					textKey: "LOG_ASSASSIN_EVOLVE",
					style: "gold",
					pos: {
						r: o,
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
		pieceType: r.PAWN,
		description: "每吃掉一个敌方子力，等级 +1；达到 3 级时进化。",
		hooks: { onLevelUp: ({ piece: e, r: t, c: o, emit: i }) => {
			const s = [
				r.KNIGHT,
				r.BISHOP,
				r.ROOK
			], a = s[Math.floor(Math.random() * s.length)], c = e.skills.filter((e) => "PAWN_PROMOTE" !== e), n = e.learnedSkills?.filter((e) => "PAWN_PROMOTE" !== e) || [], d = {
				...e,
				type: a,
				level: 1,
				maxSlots: 1,
				skills: c,
				learnedSkills: n,
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
					c: o
				},
				piece: d
			}), i({
				type: "UPDATE_ROSTER_PIECE",
				pieceUid: e.uid,
				updates: {
					type: a,
					level: 1,
					maxSlots: 1,
					skills: c,
					learnedSkills: n,
					metadata: d.metadata
				}
			}), i({
				type: "SHOW_TEXT",
				text: "Pawn Evolution!",
				textKey: "LOG_PAWN_EVOLVE",
				style: "gold",
				pos: {
					r: t,
					c: o
				}
			});
		} }
	},
	{
		id: "PAWN_SIGNAL_TOWER",
		name: "信号塔",
		tier: "RARE",
		pieceType: r.PAWN,
		description: "即使断网，也会为周围 1 格的己方棋子提供网络连接。",
		tags: ["NETWORK"],
		isUnique: !0,
		modifiers: { networkSource: () => !0 }
	},
	{
		id: "PAWN_PHALANX",
		name: "兄弟会",
		tier: "RARE",
		pieceType: r.PAWN,
		description: "当两个兵左右相邻时，不能被对方的马或兵吃掉。",
		modifiers: { invulnerable: ({ board: e, r: t, c: o, piece: i }, s) => (o > 0 && e[t][o - 1]?.color === i.color && e[t][o - 1]?.type === r.PAWN || o < 7 && e[t][o + 1]?.color === i.color && e[t][o + 1]?.type === r.PAWN) && (s.type === r.PAWN || s.type === r.KNIGHT) }
	},
	{
		id: "PAWN_DETONATOR",
		name: "炸弹兵",
		tier: "RARE",
		pieceType: r.PAWN,
		description: "被吃掉时，炸毁周围 3x3 范围内的所有棋子。",
		hooks: { onDeath: ({ r: e, c: t, piece: o, victim: i, board: s, emit: a }) => {
			if (i && o.uid === i.uid) {
				a({
					type: "ANIMATE",
					name: "SCREEN_SHAKE",
					duration: 400
				}), a({
					type: "ANIMATE",
					name: "SEMANTIC:DEEP_SPACE:EXECUTE:RARE",
					pos: {
						r: e,
						c: t
					},
					duration: 600
				});
				for (let o = -1; o <= 1; o++) for (let i = -1; i <= 1; i++) {
					const c = e + o, n = t + i;
					C.isValidPos(c, n) && s[c][n] && s[c][n]?.type !== r.KING && a({
						type: "KILL",
						pos: {
							r: c,
							c: n
						},
						visualMeta: { delayBefore: 100 }
					});
				}
			}
		} }
	},
	{
		id: "PAWN_UNSTABLE_CORE",
		name: "不可靠的炸弹兵",
		tier: "EPIC",
		pieceType: r.PAWN,
		description: "死亡必自爆(5x5)；吃子50%概率自爆并引发尸体连锁反应。不论敌我，毁灭一切。",
		hooks: {
			onDeath: (e) => {
				const { piece: t, victim: o } = e;
				o && t.uid === o.uid && J(e.r, e.c, 1, e);
			},
			onKill: (e) => {
				const { r: t, c: o, piece: r, emit: i, prng: s } = e;
				s && s.next() < .5 && (i({
					type: "SHOW_TEXT",
					text: "Core Overloaded!",
					textKey: "LOG_CORE_OVERLOAD",
					style: "danger",
					pos: {
						r: t,
						c: o
					}
				}), i({
					type: "KILL",
					pos: {
						r: t,
						c: o
					},
					targetId: r.id
				}));
			}
		}
	},
	{
		id: "PAWN_RELAY",
		name: "中继站",
		tier: "EPIC",
		pieceType: r.PAWN,
		description: "该棋子的网络覆盖范围提升至 2 格。",
		modifiers: { networkRange: ({ r: e, c: t }) => {
			const o = [];
			for (let r = -2; r <= 2; r++) for (let i = -2; i <= 2; i++) 0 === r && 0 === i || e + r >= 0 && e + r < 8 && t + i >= 0 && t + i < 8 && o.push({
				r: e + r,
				c: t + i
			});
			return o;
		} }
	},
	{
		id: "PAWN_SACRIFICE",
		name: "牺牲契约",
		tier: "EPIC",
		pieceType: r.PAWN,
		description: "被吃掉时获得 2 次额外存档机会，并在王周围生成一个兵。",
		hooks: { onDeath: ({ piece: e, board: t, emit: o, prng: i }) => {
			o({
				type: "UPDATE_CONSTRAINTS",
				maxSavesOffset: 2
			}), o({
				type: "SHOW_TEXT",
				text: "+2 Saves",
				textKey: "LOG_SAVES_PLUS",
				textParams: { amount: 2 },
				style: "system"
			});
			const s = C.findPieces(t, (t) => t.type === r.KING && t.color === e.color)[0], a = s ? {
				r: s.r,
				c: s.c
			} : null;
			if (a && i) {
				const s = a, c = [
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
				for (const [i, a] of c) {
					const c = s.r + i, n = s.c + a;
					if (C.isValidPos(c, n) && !t[c][n]) {
						o({
							type: "SPAWN",
							pos: {
								r: c,
								c: n
							},
							piece: {
								id: q(),
								type: r.PAWN,
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
		pieceType: r.PAWN,
		description: "左右 1 格有友军时，无法被对方的“后”或“车”吃掉。",
		modifiers: { invulnerable: ({ board: e, r: t, c: o, piece: i }, s) => (o > 0 && e[t][o - 1]?.color === i.color || o < 7 && e[t][o + 1]?.color === i.color) && (s.type === r.QUEEN || s.type === r.ROOK) }
	},
	{
		id: "PAWN_PARASITE",
		name: "寄生算法",
		tier: "EPIC",
		pieceType: r.PAWN,
		description: "移动到敌方棋子相邻时，使其下回合无法移动。",
		hooks: { onAfterMove: ({ board: e, piece: t, r: o, c: s, emit: a }) => {
			[
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1],
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			].forEach(([c, n]) => {
				const d = o + c, p = s + n;
				if (C.isValidPos(d, p)) {
					const o = e[d][p];
					o && o.color !== t.color && o.type !== r.KING && (a({
						type: "ADD_STATUS",
						pos: {
							r: d,
							c: p
						},
						statusId: i.FROZEN,
						duration: 2
					}), a({
						type: "ANIMATE",
						name: "DATA_GLITCH",
						pos: {
							r: d,
							c: p
						},
						duration: 500,
						metadata: { color: "text-purple-500" }
					}));
				}
			});
		} }
	},
	{
		id: "PAWN_VANGUARD",
		name: "先锋",
		tier: "RARE",
		pieceType: r.PAWN,
		description: "该兵只要处于敌方半场，即视为“永远联网”。",
		modifiers: { alwaysNetworked: ({ r: e, piece: o }) => o.color === t ? e < 4 : e > 3 }
	},
	{
		id: "PAWN_TRAITOR",
		name: "背叛者",
		tier: "EPIC",
		pieceType: r.PAWN,
		description: "被吃掉时，有 50% 概率将攻击者（非王）变为你的颜色并施加“被策反”状态 1 回合。",
		hooks: { onDeath: ({ attacker: e, attackerPos: t, piece: o, emit: s, prng: a }) => {
			e && t && e.type !== r.KING && a && a.next() < .5 && s({
				type: "SPAWN",
				pos: t,
				piece: {
					...e,
					color: o.color,
					statuses: [...e.statuses || [], {
						id: i.BETRAYED,
						duration: 2
					}]
				}
			});
		} }
	},
	{
		id: "PAWN_SWARM",
		name: "蜂群意识",
		tier: "LEGENDARY",
		pieceType: r.PAWN,
		description: "只要有一个联网，全场所有的兵均视为已联网。"
	},
	{
		id: "PAWN_OMEGA_MIRROR",
		name: "终局镜像",
		tier: "LEGENDARY",
		pieceType: r.PAWN,
		description: "模拟其网络连线上己方高级棋子的移动和攻击方式。",
		modifiers: { movement: ({ board: e, piece: t, r: o, c: i, metadata: s, networkedMap: a }, c) => {
			if (!a) return c;
			if (!a[o][i]) return c;
			const n = [];
			return C.findPieces(e, (e, o, i) => e.color === t.color && e.type !== r.PAWN && e.type !== r.KING && !!a?.[o]?.[i]).forEach(({ r, c }) => {
				(function(e, t, o, r, i, s) {
					return De.getPseudoLegalMoves(e, t, o, r, i, s);
				})(e, r, c, s, a).forEach((s) => {
					const a = o + (s.r - r), d = i + (s.c - c);
					C.isValidPos(a, d) && e[a][d]?.color !== t.color && n.push({
						r: a,
						c: d
					});
				});
			}), [...c, ...n];
		} }
	},
	{
		id: "PAWN_SATELLITE",
		name: "卫星链路",
		tier: "LEGENDARY",
		pieceType: r.PAWN,
		description: "永远不需要网络连接，且国王死后可作为代理王。",
		modifiers: {
			alwaysNetworked: () => !0,
			proxyKing: () => !0
		}
	},
	{
		id: "EQ_HIVE_CORE",
		name: "蜂巢核心",
		tier: "EPIC",
		pieceType: r.PAWN,
		description: "只要该兵连通，其移动力增加 1 格（可前移 2 格）。",
		modifiers: { movement: (e, o) => {
			const { board: r, piece: i, r: s, c: a, networkedMap: c, isControlSquares: n } = e;
			if (!c) return o;
			if (!c[s][a]) return o;
			const d = i.color === t ? -1 : 1, p = s + 2 * d;
			if (p >= 0 && p < 8 && !r[s + d][a]) {
				const e = r[p][a];
				(!e || n && e.color === i.color) && o.push({
					r: p,
					c: a
				});
			}
			return o;
		} }
	},
	{
		id: "EQ_CHEAP_BOOSTER",
		name: "廉价增频器",
		tier: "RARE",
		pieceType: r.PAWN,
		description: "该兵的网络延伸距离提升至 3 格，但无法进行攻击（吃子）。",
		modifiers: {
			networkRange: ({ r: e, c: t }) => {
				const o = [];
				for (let r = -3; r <= 3; r++) for (let i = -3; i <= 3; i++) if (Math.abs(r) + Math.abs(i) <= 3) {
					const s = e + r, a = t + i;
					C.isValidPos(s, a) && o.push({
						r: s,
						c: a
					});
				}
				return o;
			},
			movement: ({ board: e }, t) => t.filter((t) => !e[t.r][t.c])
		}
	},
	{
		id: "EQ_CHAIN_MINE",
		name: "连锁地雷",
		tier: "RARE",
		pieceType: r.PAWN,
		description: "被吃掉时，若周围 1 格有其他“兵”，触发连锁爆炸（3x3）。",
		hooks: { onDeath: ({ board: e, r: t, c: o, emit: r }) => {} }
	}
];
function J(e, t, o, i) {
	const s = i.metadata;
	if (s && (s.unstableCount = (s.unstableCount || 0) + 1, s.unstableCount > 10)) return;
	const { emit: a, board: c, prng: n } = i;
	a({
		type: "ANIMATE",
		name: "EXPLOSION",
		pos: {
			r: e,
			c: t
		},
		duration: 500
	});
	for (let d = -1; d <= 1; d++) for (let s = -1; s <= 1; s++) {
		const p = e + d, E = t + s;
		if (!C.isValidPos(p, E) || 0 === d && 0 === s) continue;
		const l = c[p][E];
		if (l && l.type !== r.KING && (a({
			type: "KILL",
			pos: {
				r: p,
				c: E
			},
			targetId: l.id
		}), n)) {
			const e = .3 * o;
			n.next() < e && (a({
				type: "DELAY",
				duration: 100
			}), J(p, E, e, i));
		}
	}
}
const j = {
	PIECE: {
		[r.PAWN]: 10,
		[r.KNIGHT]: 25,
		[r.BISHOP]: 25,
		[r.ROOK]: 40,
		[r.QUEEN]: 80,
		[r.KING]: 50
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
};
r.PAWN, r.KNIGHT, r.BISHOP, r.ROOK, r.QUEEN, r.KING, r.PAWN, r.KNIGHT, r.BISHOP, r.ROOK, r.QUEEN, r.KING;
function z(e, o = t) {
	return {
		id: q(),
		uid: `u-${q()}`,
		type: e,
		color: o,
		level: 1,
		skills: [],
		learnedSkills: [],
		traits: [],
		statuses: [],
		maxSlots: e === r.KING ? 3 : 1,
		equippedItems: [],
		metadata: {}
	};
}
function ee(e, t) {
	const o = j.PIECE[e] || 10;
	return Math.floor(o / 20) + t;
}
function te(e, t, o, r, i) {
	const s = Math.abs(o - e), a = Math.abs(r - t);
	if (s !== a && 0 !== s && 0 !== a) return !1;
	const c = o > e ? 1 : o < e ? -1 : 0, n = r > t ? 1 : r < t ? -1 : 0;
	let d = e + c, p = t + n;
	for (; d !== o || p !== r;) {
		if (i[d][p]) return !1;
		d += c, p += n;
	}
	return !0;
}
function oe(e, t, o, r, i) {
	let s = null, a = Infinity;
	return C.findPieces(e, (e) => e.color === r && e.type === i).forEach(({ r: e, c: r }) => {
		const i = Math.max(Math.abs(t - e), Math.abs(o - r));
		i < a && i > 0 && (a = i, s = {
			r: e,
			c: r
		});
	}), s;
}
const re = [
	{
		id: "QUEEN_COMMAND",
		name: "统率",
		tier: "COMMON",
		pieceType: r.QUEEN,
		description: "周围 1 格 of 友军可获得全向 1 格 of 移动能力。若周围无友军，自身获得 1 金币战备金。",
		hooks: { onTurnStart: ({ board: e, r: o, c: r, piece: s, emit: a }) => {
			const c = [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1],
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			];
			let n = !1;
			for (const [t, d] of c) {
				const c = o + t, p = r + d;
				if (c >= 0 && c < 8 && p >= 0 && p < 8) {
					const t = e[c][p];
					t && t.color === s.color && (a({
						type: "ADD_STATUS",
						pos: {
							r: c,
							c: p
						},
						statusId: i.COMMAND_AURA,
						duration: 2
					}), n = !0);
				}
			}
			n || s.color !== t || a({
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
		pieceType: r.QUEEN,
		description: "周围 2 格内 of 敌方“车”和“象”移动范围限制为两格。",
		hooks: { onTurnStart: ({ board: e, r: t, c: o, piece: s, emit: a }) => {
			for (let c = -2; c <= 2; c++) for (let n = -2; n <= 2; n++) {
				const d = t + c, p = o + n;
				if (d >= 0 && d < 8 && p >= 0 && p < 8) {
					const t = e[d][p];
					!t || t.color === s.color || t.type !== r.ROOK && t.type !== r.BISHOP || a({
						type: "ADD_STATUS",
						pos: {
							r: d,
							c: p
						},
						statusId: i.AURA_SUPPRESSED,
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
		pieceType: r.QUEEN,
		description: "每回合开始时，若后联网，增加 2 金币。",
		hooks: { onTurnStart: ({ board: e, r: o, c: r, piece: i, emit: s, metadata: a }) => {
			const { networked: c } = Ge(e, i.color, a);
			c[o][r] && i.color === t && s({
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
		pieceType: r.QUEEN,
		description: "吃子后，若落点还是敌人控制区，该棋子可立刻再次行动一次（无视网络连接，仅限移动1格）。",
		hooks: { onKill: ({ board: e, r, c: s, piece: a, emit: c, metadata: n }) => {
			const { control: d } = Ge(e, a.color === t ? o : t, n);
			d[r][s] && (c({
				type: "ADD_STATUS",
				pos: {
					r,
					c: s
				},
				statusId: i.GRACE_LIMIT,
				duration: 2
			}), c({
				type: "SET_EXTRA_MOVE",
				active: !0
			}), c({
				type: "UPDATE_METADATA",
				updates: { lockedActionUid: a.uid }
			}), c({
				type: "SET_UI_SELECTION",
				pos: {
					r,
					c: s
				},
				uid: a.uid ?? null
			}), c({
				type: "SHOW_TEXT",
				text: "Graceful Steps",
				textKey: "LOG_GRACE",
				style: "system"
			}));
		} }
	},
	{
		id: "QUEEN_DOMINATE",
		name: "霸道",
		tier: "RARE",
		pieceType: r.QUEEN,
		description: "相邻 of 敌方棋子失去所有非基础技能。",
		hooks: { onTurnStart: ({ board: e, r: t, c: o, piece: s, emit: a }) => {
			for (const [c, n] of [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1],
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			]) {
				const d = t + c, p = o + n;
				if (d >= 0 && d < 8 && p >= 0 && p < 8) {
					const t = e[d][p];
					t && t.color !== s.color && t.type !== r.KING && a({
						type: "ADD_STATUS",
						pos: {
							r: d,
							c: p
						},
						statusId: i.SILENCED,
						duration: 2
					});
				}
			}
		} }
	},
	{
		id: "QUEEN_DECOY",
		name: "幻影",
		tier: "RARE",
		pieceType: r.QUEEN,
		description: "被攻击死亡时，如果库存有“兵”，自动消耗一个兵来抵消本次死亡并随机传送。",
		hooks: { onDeath: ({ r: e, c: t, piece: o, board: i, roster: s, deployedUids: a, cancelAction: c, emit: n, prng: d }) => {
			const p = s?.find((e) => e.type === r.PAWN && !a?.includes(e.uid));
			if (p && d) {
				let s = null;
				const a = [
					[-3, 0],
					[3, 0],
					[0, -3],
					[0, 3],
					[-2, -2],
					[2, 2]
				].sort(() => d.next() - .5);
				for (const [o, r] of a) {
					const a = e + o, c = t + r;
					if (a >= 0 && a < 8 && c >= 0 && c < 8 && !i[a][c]) {
						s = {
							r: a,
							c
						};
						break;
					}
				}
				s && (c?.(), n({
					type: "REMOVE_PIECE",
					pos: {
						r: e,
						c: t
					}
				}), n({
					type: "REMOVE_FROM_ROSTER",
					pieceUid: p.uid
				}), n({
					type: "MODIFY_RESERVE",
					color: o.color,
					pieceType: r.PAWN,
					amount: -1
				}), n({
					type: "SPAWN",
					pos: s,
					piece: {
						...o,
						statuses: []
					}
				}), n({
					type: "ANIMATE",
					name: "PHANTOM_MOVE",
					pos: {
						r: e,
						c: t
					},
					duration: 600
				}), n({
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
		pieceType: r.QUEEN,
		description: "部署时，可立即免费从库存部署最多两个“兵”在后身边。",
		hooks: { onDeploy: ({ r: e, c: t, piece: o, board: i, reserves: s, emit: a, prng: c }) => {
			const n = s?.[o.color]?.[r.PAWN] ?? 0;
			let d = 0;
			if (!c) return;
			const p = [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1],
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			].sort(() => c.next() - .5);
			for (const [E, l] of p) {
				if (d >= 2 || d >= n) break;
				const s = e + E, c = t + l;
				s >= 0 && s < 8 && c >= 0 && c < 8 && !i[s][c] && (a({
					type: "MODIFY_RESERVE",
					color: o.color,
					pieceType: r.PAWN,
					amount: -1
				}), a({
					type: "SPAWN",
					pos: {
						r: s,
						c
					},
					piece: {
						id: q(),
						type: r.PAWN,
						color: o.color,
						level: 1,
						skills: [],
						statuses: [],
						maxSlots: 1,
						equippedItems: []
					}
				}), d++);
			}
		} }
	},
	{
		id: "QUEEN_BRIBE",
		name: "策反",
		tier: "RARE",
		pieceType: r.QUEEN,
		description: "吃掉敌方“兵”时，有 50% 概率将其转化为己方库存。",
		hooks: { onKill: ({ piece: e, victim: t, r: o, c: i, emit: s, prng: a }) => {
			if (t && t.type === r.PAWN && a && a.next() < .5) {
				s({
					type: "MODIFY_RESERVE",
					color: e.color,
					pieceType: r.PAWN,
					amount: 1
				}), s({
					type: "ANIMATE",
					name: "GOLD_SPARKLE",
					pos: {
						r: o,
						c: i
					},
					duration: 600
				});
				const t = Date.now();
				s({
					type: "ADD_TO_ROSTER",
					piece: {
						id: `bribe-${t}`,
						uid: `u-${t}`,
						type: r.PAWN,
						color: e.color,
						level: 1,
						skills: [],
						statuses: [],
						maxSlots: 1,
						equippedItems: []
					}
				}), s({
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
		pieceType: r.QUEEN,
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
			onAfterMove: ({ board: e, r: t, c: o, piece: r, victim: s, emit: a, metadata: c }) => {
				if (!s && !r.metadata?.multicastUsed) {
					const { networked: s } = Ge(e, r.color, c);
					s[t][o] && (a({
						type: "ADD_STATUS",
						pos: {
							r: t,
							c: o
						},
						statusId: i.CANNOT_CAPTURE,
						duration: 1
					}), a({
						type: "SET_EXTRA_MOVE",
						active: !0
					}), a({
						type: "UPDATE_METADATA",
						updates: { lockedActionUid: r.uid }
					}), a({
						type: "SET_UI_SELECTION",
						pos: {
							r: t,
							c: o
						},
						uid: r.uid ?? null
					}), a({
						type: "UPDATE_ROSTER_PIECE",
						pieceUid: r.uid,
						updates: { metadata: {
							...r.metadata,
							multicastUsed: !0
						} }
					}), a({
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
		pieceType: r.QUEEN,
		description: "只要后在场，敌方隐身单位自动显形。",
		hooks: { onTurnStart: ({ board: e, piece: t, emit: o }) => {
			C.findPieces(e, (e) => e.color !== t.color && e.statuses?.some((e) => e.id === i.INVISIBLE)).forEach(({ r: e, c: t }) => o({
				type: "REMOVE_STATUS",
				pos: {
					r: e,
					c: t
				},
				statusId: i.INVISIBLE
			}));
		} }
	},
	{
		id: "QUEEN_RECALL",
		name: "战术撤退",
		tier: "EPIC",
		pieceType: r.QUEEN,
		description: "主动：将后立即瞬移回国王身边的空格（冷却 3 回合）。",
		activeSpec: {
			targeting: "self",
			cooldownKey: "recallCooldown",
			execute: (e, t, o, i, s, a) => {
				if ((i.metadata?.recallCooldown || 0) > 0) return;
				const c = C.findPieces(e, (e) => e.color === i.color && e.type === r.KING)[0], n = c ? c.r : -1, d = c ? c.c : -1;
				if (-1 !== n) for (const [r, p] of [
					[-1, 0],
					[1, 0],
					[0, -1],
					[0, 1],
					[-1, -1],
					[-1, 1],
					[1, -1],
					[1, 1]
				]) {
					const s = n + r, c = d + p;
					if (s >= 0 && s < 8 && c >= 0 && c < 8 && !e[s][c]) return a({
						type: "UPDATE_ROSTER_PIECE",
						pieceUid: i.uid,
						updates: { metadata: {
							...i.metadata,
							recallCooldown: 3
						} }
					}), a({
						type: "MOVE",
						from: {
							r: t,
							c: o
						},
						to: {
							r: s,
							c
						}
					}), void a({
						type: "SHOW_TEXT",
						text: "Tactical Retreat",
						textKey: "LOG_TACTICAL_RECALL",
						style: "system",
						pos: {
							r: s,
							c
						}
					});
				}
				a({
					type: "SHOW_TEXT",
					text: "No space near King",
					textKey: "LOG_NO_EMPTY_KING",
					style: "system",
					pos: {
						r: t,
						c: o
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
		} },
		getDisplayStatus: (e, t) => {
			const o = e.metadata?.recallCooldown || 0;
			return o > 0 ? {
				text: `${t("cooldown")}: ${t("turnsRemaining", { n: o })}`,
				colorClass: "text-slate-500"
			} : {
				text: t("ready"),
				colorClass: "text-cyan-400 animate-pulse"
			};
		}
	},
	{
		id: "QUEEN_TIME_WARP",
		name: "时间倒流",
		tier: "LEGENDARY",
		pieceType: r.QUEEN,
		description: "每 10 个回合，可以获得一次免费 of “悔棋”机会而不消耗回合数。",
		hooks: { onTurnStart: ({ piece: e, r: t, c: o, emit: r }) => {
			const i = e.metadata?.warpTurns || 0;
			i >= 10 ? (r({
				type: "UPDATE_CONSTRAINTS",
				maxUndosOffset: 1
			}), r({
				type: "SHOW_TEXT",
				text: "Time Warp: +1 Undo",
				textKey: "LOG_TIME_WARP",
				style: "system"
			}), r({
				type: "SPAWN",
				pos: {
					r: t,
					c: o
				},
				piece: {
					...e,
					metadata: {
						...e.metadata,
						warpTurns: 0
					}
				}
			})) : r({
				type: "SPAWN",
				pos: {
					r: t,
					c: o
				},
				piece: {
					...e,
					metadata: {
						...e.metadata,
						warpTurns: i + 1
					}
				}
			});
		} }
	},
	{
		id: "QUEEN_NEMESIS",
		name: "复仇女神",
		tier: "LEGENDARY",
		pieceType: r.QUEEN,
		description: "当国王被将军时，后可以移动至棋盘任何空格；若目标在原本攻击范围内，则允许吃子。",
		modifiers: { movement: (e, i) => {
			const { board: s, piece: a, r: c, c: n } = e, d = C.findPieces(s, (e) => e.type === r.KING && e.color === a.color)[0], p = d ? {
				r: d.r,
				c: d.c
			} : null;
			if (p) {
				const i = a.color === t ? o : t;
				let d = !1;
				for (const [e, t] of [
					[-1, 0],
					[1, 0],
					[0, -1],
					[0, 1],
					[-1, -1],
					[-1, 1],
					[1, -1],
					[1, 1]
				]) {
					let o = p.r + e, a = p.c + t;
					for (; C.isValidPos(o, a);) {
						const c = s[o][a];
						if (c) {
							if (c.color === i) {
								const e = Math.max(Math.abs(o - p.r), Math.abs(a - p.c)), t = o === p.r || a === p.c, i = Math.abs(o - p.r) === Math.abs(a - p.c);
								(t && (c.type === r.QUEEN || c.type === r.ROOK) || i && (c.type === r.QUEEN || c.type === r.BISHOP) || 1 === e) && (d = !0);
							}
							break;
						}
						o += e, a += t;
					}
					if (d) break;
				}
				if (!d) for (const [e, t] of [
					[-2, -1],
					[-2, 1],
					[-1, -2],
					[-1, 2],
					[1, -2],
					[1, 2],
					[2, -1],
					[2, 1]
				]) {
					const o = C.getPiece(s, p.r + e, p.c + t);
					if (o && o.color === i && o.type === r.KNIGHT) {
						d = !0;
						break;
					}
				}
				if (d) {
					const t = [];
					for (let o = 0; o < 8; o++) for (let r = 0; r < 8; r++) {
						if (o === c && r === n) continue;
						const i = s[o][r];
						te(c, n, o, r, s) ? i && i.color === a.color && !e.isControlSquares || t.push({
							r: o,
							c: r
						}) : (!i || e.isControlSquares && i.color === a.color) && t.push({
							r: o,
							c: r
						});
					}
					return t;
				}
			}
			return i;
		} }
	},
	{
		id: "QUEEN_ROOK_AUTHORITY",
		name: "战车主权",
		tier: "LEGENDARY",
		pieceType: r.QUEEN,
		description: "只要后连通，离后最近的一名友方“车”强制变为“连通”状态。",
		hooks: { onTurnStart: ({ board: e, piece: t, r: o, c: s, emit: a, metadata: c }) => {
			const { networked: n } = Ge(e, t.color, c);
			if (n[o][s]) {
				const c = oe(e, o, s, t.color, r.ROOK);
				c && (a({
					type: "ADD_STATUS",
					pos: c,
					statusId: i.GODHOOD_LINK,
					duration: 2
				}), a({
					type: "SHOW_TEXT",
					text: "Divine Link: Rook",
					textKey: "LOG_ROOK_LINK",
					style: "system",
					pos: c
				}));
			}
		} }
	},
	{
		id: "QUEEN_BISHOP_AUTHORITY",
		name: "主教主权",
		tier: "LEGENDARY",
		pieceType: r.QUEEN,
		description: "只要后连通，离后最近的一名友方“象”强制变为“连通”状态。",
		hooks: { onTurnStart: ({ board: e, piece: t, r: o, c: s, emit: a, metadata: c }) => {
			const { networked: n } = Ge(e, t.color, c);
			if (n[o][s]) {
				const c = oe(e, o, s, t.color, r.BISHOP);
				c && (a({
					type: "ADD_STATUS",
					pos: c,
					statusId: i.GODHOOD_LINK,
					duration: 2
				}), a({
					type: "SHOW_TEXT",
					text: "Divine Link: Bishop",
					textKey: "LOG_BISHOP_LINK",
					style: "system",
					pos: c
				}));
			}
		} }
	},
	{
		id: "QUEEN_GRAVITY_WELL",
		name: "重力场",
		tier: "EPIC",
		pieceType: r.QUEEN,
		description: "若相邻敌军不多于2个，这些敌军将被重力锁定，移动范围限制为1格。",
		hooks: { onTurnStart: ({ board: e, r: t, c: o, piece: r, emit: s }) => {
			const a = [];
			for (const [i, c] of [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1],
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			]) {
				const s = t + i, n = o + c;
				if (s >= 0 && s < 8 && n >= 0 && n < 8) {
					const t = e[s][n];
					t && t.color !== r.color && a.push({
						r: s,
						c: n
					});
				}
			}
			a.length > 0 && a.length <= 2 && (a.forEach((e) => {
				s({
					type: "ADD_STATUS",
					pos: e,
					statusId: i.GRAVITY_LOCKED,
					duration: 2
				});
			}), s({
				type: "SHOW_TEXT",
				text: "Gravity Well Active",
				textKey: "LOG_GRAVITY_WELL",
				style: "system",
				pos: {
					r: t,
					c: o
				}
			}));
		} }
	},
	{
		id: "QUEEN_CORONATION",
		name: "皇家授勋",
		tier: "RARE",
		pieceType: r.QUEEN,
		description: "回合开始时，赋予相邻且无技能的友方“兵”一个随机普通技能。",
		hooks: { onTurnStart: ({ board: e, r: t, c: o, piece: i, emit: s, prng: a }) => {
			const c = [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1],
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			];
			if (a) for (const [n, d] of c) {
				const c = t + n, p = o + d;
				if (c >= 0 && c < 8 && p >= 0 && p < 8) {
					const t = e[c][p];
					if (t && t.color === i.color && t.type === r.PAWN && 0 === t.skills.length) {
						const e = Z.filter((e) => "COMMON" === e.tier), o = e[Math.floor(a.next() * e.length)];
						o && (s({
							type: "UPDATE_ROSTER_PIECE",
							pieceUid: t.uid,
							updates: { skills: [o.id] }
						}), s({
							type: "SHOW_TEXT",
							text: `Coronated: ${o.name}`,
							textKey: "LOG_CORONATION",
							textParams: { skill: o.name },
							style: "gold",
							pos: {
								r: c,
								c: p
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
		pieceType: r.QUEEN,
		description: "主动：消耗10金币，直接摧毁射程内一名“断网”的敌方单位（非王、非后），并回收其价值。",
		activeSpec: {
			targeting: "target",
			getAlternatives: (e, i, s, a, c) => {
				const n = [];
				if ((c?.gold || 0) < 10) return n;
				const { control: d } = Ge(e, a.color, c?.metadata), { networked: p } = Ge(e, a.color === t ? o : t, c?.metadata);
				return C.findPieces(e, (e, t, o) => e.color !== a.color && e.type !== r.KING && e.type !== r.QUEEN && d[t][o] && !p[t][o]).forEach(({ r: e, c: t, piece: o }) => {
					n.push({
						pos: {
							r: e,
							c: t
						},
						value: {
							r: e,
							c: t,
							type: o.type
						}
					});
				}), n;
			},
			getAoE: (e, t, o, r, i) => i ? [{
				r: i.r,
				c: i.c
			}] : [],
			execute: (e, t, o, r, i, s) => {
				if (i) {
					const e = j.PIECE[i.type] || 10, r = [], a = i.r - t, c = i.c - o;
					if (0 === a || 0 === c || Math.abs(a) === Math.abs(c)) {
						const e = Math.sign(a), s = Math.sign(c);
						let n = t, d = o, p = 0;
						for (; (n !== i.r || d !== i.c) && p < 15;) r.push({
							r: n,
							c: d
						}), n += e, d += s, p++;
						r.push({
							r: i.r,
							c: i.c
						});
					} else r.push({
						r: t,
						c: o
					}), r.push({
						r: i.r,
						c: i.c
					});
					s({
						type: "ANIMATE",
						name: "SEMANTIC:NETWORK:EXECUTE:EPIC",
						pos: {
							r: i.r,
							c: i.c
						},
						duration: 900,
						metadata: {
							from: {
								r: t,
								c: o
							},
							networkPath: r
						}
					}), s({
						type: "MODIFY_GOLD",
						amount: -10,
						reason: "REQUISITION_COST"
					}), s({
						type: "KILL",
						pos: {
							r: i.r,
							c: i.c
						}
					}), s({
						type: "MODIFY_GOLD",
						amount: e,
						reason: "REQUISITION_GAIN"
					}), s({
						type: "SHOW_TEXT",
						text: "Requisition Successful",
						textKey: "LOG_REQUISITION_SUCCESS",
						style: "gold",
						pos: {
							r: i.r,
							c: i.c
						}
					});
				}
			}
		}
	}
], ie = (e, t) => Math.atan2(e, t) * (180 / Math.PI), se = [
	{
		id: "ROOK_VAULT",
		name: "翻越",
		tier: "COMMON",
		pieceType: r.ROOK,
		description: "允许跳过路径上的第一个障碍物（友军或敌军）。",
		modifiers: { movement: (e, t) => {
			const { board: o, r, c: i, piece: s, isControlSquares: a } = e, c = [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1]
			], n = [];
			for (const [d, p] of c) {
				let e = r + d, t = i + p, c = !1;
				for (; C.isValidPos(e, t);) {
					const r = o[e][t];
					if (r) {
						if (c) {
							(r.color !== s.color || a) && n.push({
								r: e,
								c: t
							});
							break;
						}
						a && r.color === s.color && n.push({
							r: e,
							c: t
						}), c = !0;
					} else n.push({
						r: e,
						c: t
					});
					e += d, t += p;
				}
			}
			return [...t, ...n];
		} }
	},
	{
		id: "ROOK_RAILWAY",
		name: "铁轨",
		tier: "COMMON",
		pieceType: r.ROOK,
		description: "在车移动过的直线路径上，留下铁轨，友方“兵”移动力+1。",
		hooks: { onAfterMove: ({ from: e, r: t, c: o, emit: r }) => {
			if (!e) return;
			const i = Math.sign(t - e.r), s = Math.sign(o - e.c);
			if (0 === i || 0 === s) {
				const a = 0 !== i;
				let c = e.r, d = e.c;
				for (; c !== t || d !== o;) r({
					type: "SET_SQUARE",
					pos: {
						r: c,
						c: d
					},
					status: {
						id: n,
						duration: 3,
						metadata: { vertical: a }
					}
				}), c += i, d += s;
				r({
					type: "SET_SQUARE",
					pos: {
						r: t,
						c: o
					},
					status: {
						id: n,
						duration: 3,
						metadata: { vertical: a }
					}
				});
			}
		} }
	},
	{
		id: "ROOK_PRESS",
		name: "压制",
		tier: "COMMON",
		pieceType: r.ROOK,
		description: "处于车直线上的敌方“兵”无法移动。",
		hooks: { onTurnStart: ({ board: e, r: t, c: o, piece: s, emit: a }) => {
			for (const [c, n] of [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1]
			]) {
				let d = t + c, p = o + n;
				for (; C.isValidPos(d, p);) {
					const t = e[d][p];
					if (t && t.color !== s.color && t.type === r.PAWN && a({
						type: "ADD_STATUS",
						pos: {
							r: d,
							c: p
						},
						statusId: i.ROOTED,
						duration: 2
					}), t) break;
					d += c, p += n;
				}
			}
		} }
	},
	{
		id: "ROOK_AEGIS",
		name: "塔盾",
		tier: "COMMON",
		pieceType: r.ROOK,
		description: "只要车与国王靠在一起，国王获得远程免疫。",
		hooks: { onTurnStart: ({ board: e, r: t, c: o, piece: s, emit: a }) => {
			[
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1],
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			].forEach(([c, n]) => {
				const d = t + c, p = o + n;
				if (d >= 0 && d < 8 && p >= 0 && p < 8) {
					const t = e[d][p];
					t && t.type === r.KING && t.color === s.color && a({
						type: "ADD_STATUS",
						pos: {
							r: d,
							c: p
						},
						statusId: i.SMOKE_SCREEN,
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
		pieceType: r.ROOK,
		description: "长距离移动（超过 3 格）后，落点周围 1 格内的敌方“兵”将被冻结 1 回合。",
		hooks: { onAfterMove: ({ board: e, from: t, r: o, c: s, piece: a, emit: c }) => {
			t && Math.abs(o - t.r) + Math.abs(s - t.c) > 3 && (c({
				type: "ANIMATE",
				name: "SCREEN_SHAKE",
				pos: {
					r: o,
					c: s
				},
				duration: 200
			}), [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1],
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			].forEach(([t, n]) => {
				const d = o + t, p = s + n;
				if (C.isValidPos(d, p)) {
					const t = e[d][p];
					t && t.color !== a.color && t.type === r.PAWN && c({
						type: "ADD_STATUS",
						pos: {
							r: d,
							c: p
						},
						statusId: i.FROZEN,
						duration: 2
					});
				}
			}));
		} }
	},
	{
		id: "ROOK_COVER",
		name: "掩体",
		tier: "COMMON",
		pieceType: r.ROOK,
		description: "只要车处于联网状态，与其相邻的友方“兵”获得一层护盾（抵消一次伤害）。",
		hooks: { onTurnStart: ({ board: e, r: t, c: o, piece: s, emit: a, metadata: c }) => {
			const { networked: n } = Ge(e, s.color, c);
			n[t][o] && [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1],
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			].forEach(([c, n]) => {
				const d = t + c, p = o + n;
				if (C.isValidPos(d, p)) {
					const t = e[d][p];
					t && t.color === s.color && t.type === r.PAWN && a({
						type: "ADD_STATUS",
						pos: {
							r: d,
							c: p
						},
						statusId: i.SHIELDED,
						duration: 2
					});
				}
			});
		} }
	},
	{
		id: "ROOK_BASTION",
		name: "堡垒形态",
		tier: "RARE",
		pieceType: r.ROOK,
		description: "主动：切换为堡垒，不可移动，保护周围十字 1 格友军免受远程伤害。",
		activeSpec: {
			targeting: "self",
			execute: (e, t, o, r, i, s) => {
				const a = !r.metadata?.isBastion;
				s({
					type: "UPDATE_ROSTER_PIECE",
					pieceUid: r.uid,
					updates: { metadata: {
						...r.metadata,
						isBastion: a
					} }
				}), s({
					type: "SHOW_TEXT",
					text: a ? "Entering Bastion" : "Exiting Bastion",
					textKey: a ? "LOG_ENTER_BASTION" : "LOG_EXIT_BASTION",
					style: "system"
				});
			}
		},
		modifiers: { movement: ({ piece: e }, t) => e.metadata?.isBastion ? [] : t },
		hooks: { onTurnStart: ({ piece: e, r: t, c: o, emit: r }) => {
			e.metadata?.isBastion && [
				[0, 0],
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1]
			].forEach(([e, i]) => {
				const s = t + e, a = o + i;
				C.isValidPos(s, a) && r({
					type: "SET_SQUARE",
					pos: {
						r: s,
						c: a
					},
					status: {
						id: E,
						duration: 1
					}
				});
			});
		} },
		getDisplayStatus: (e, t) => {
			const o = e.metadata?.isBastion;
			return {
				text: t(o ? "bastionMode" : "mobileMode"),
				colorClass: o ? "text-amber-400" : "text-cyan-400"
			};
		}
	},
	{
		id: "ROOK_HEAVY_ARMOR",
		name: "重装铠甲",
		tier: "RARE",
		pieceType: r.ROOK,
		description: "不能被对方的“兵”或“马”吃掉。",
		modifiers: { invulnerable: (e, t) => t.type === r.PAWN || t.type === r.KNIGHT }
	},
	{
		id: "ROOK_SWEEPER",
		name: "横扫",
		tier: "RARE",
		pieceType: r.ROOK,
		description: "移动经过敌方单位旁时，使其本回合断网（冻结）。",
		hooks: { onAfterMove: ({ board: e, from: t, r: o, c: s, piece: a, emit: c }) => {
			if (!t) return;
			const n = Math.sign(o - t.r), d = Math.sign(s - t.c);
			let p = t.r, E = t.c;
			for (; p !== o || E !== s;) [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1]
			].forEach(([t, o]) => {
				const s = p + t, n = E + o;
				if (C.isValidPos(s, n)) {
					const t = e[s][n];
					t && t.color !== a.color && t.type !== r.KING && c({
						type: "ADD_STATUS",
						pos: {
							r: s,
							c: n
						},
						statusId: i.FROZEN,
						duration: 2
					});
				}
			}), p += n, E += d;
		} }
	},
	{
		id: "ROOK_SUPPLY_DEPOT",
		name: "补给站",
		tier: "RARE",
		pieceType: r.ROOK,
		description: "移动路径变为补给地块（2回合）：友军在此部署返还 5 金币（单局上限 30G）。无法覆盖已有特殊地块。",
		hooks: { onAfterMove: ({ from: e, r: t, c: o, piece: r, metadata: i, emit: s }) => {
			if (!e) return;
			const a = Math.sign(t - e.r), c = Math.sign(o - e.c);
			let n = e.r, d = e.c;
			for (; n !== t || d !== o;) {
				const e = `${n},${d}`;
				i?.squares?.[e] && i.squares[e].length > 0 || s({
					type: "SET_SQUARE",
					pos: {
						r: n,
						c: d
					},
					status: {
						id: I,
						duration: 2,
						metadata: { ownerUid: r.uid }
					}
				}), n += a, d += c;
			}
		} }
	},
	{
		id: "ROOK_MAGNET",
		name: "磁吸",
		tier: "EPIC",
		pieceType: r.ROOK,
		description: "主动：不移动，将直线上一名友军拉到自己身边。",
		activeSpec: {
			targeting: "target",
			getAlternatives: (e, t, o, i) => {
				const s = [];
				for (const [a, c] of [
					[-1, 0],
					[1, 0],
					[0, -1],
					[0, 1]
				]) {
					let n = t + a, d = o + c;
					for (; C.isValidPos(n, d);) {
						const t = e[n][d];
						if (t) {
							t.color !== i.color || t.type === r.KING || Pe.isSteady(t, e, n, d) || s.push({
								pos: {
									r: n,
									c: d
								},
								value: {
									r: n,
									c: d,
									dr: a,
									dc: c
								}
							});
							break;
						}
						n += a, d += c;
					}
				}
				return s;
			},
			getAoE: (e, t, o, r, i) => i ? [{
				r: i.r,
				c: i.c
			}] : [],
			execute: (e, t, o, r, i, s) => {
				i && (s({
					type: "MOVE",
					from: {
						r: i.r,
						c: i.c
					},
					to: {
						r: t + i.dr,
						c: o + i.dc
					}
				}), s({
					type: "SHOW_TEXT",
					text: "Magnet",
					textKey: "LOG_MAGNET",
					style: "system"
				}));
			}
		}
	},
	{
		id: "ROOK_CARRIER",
		name: "运输机",
		tier: "EPIC",
		pieceType: r.ROOK,
		description: "移动时，如果有扁平的棋子在同一格，可以携带一起移动。",
		hooks: { onAfterMove: ({ board: e, from: t, piece: o, r, c: s, emit: a }) => {
			if (!t) return;
			const c = e[t.r][t.c];
			c && c.statuses?.some((e) => e.id === i.FLATTENED) && (a({
				type: "SPAWN",
				pos: {
					r,
					c: s
				},
				piece: {
					...o,
					stackedPiece: c
				}
			}), a({
				type: "REMOVE_PIECE",
				pos: t
			}));
		} }
	},
	{
		id: "ROOK_EJECTION",
		name: "弹射",
		tier: "EPIC",
		pieceType: r.ROOK,
		description: "主动：将相邻十字方向的一个友方兵向外弹射到最远端。",
		activeSpec: {
			targeting: "direction",
			getAlternatives: (e, t, o, i) => {
				const s = [];
				for (const [a, c] of [
					[-1, 0],
					[1, 0],
					[0, -1],
					[0, 1]
				]) {
					const n = t + a, d = o + c, p = e[n]?.[d];
					p && p.type === r.PAWN && p.color === i.color && !Pe.isSteady(p, e, n, d) && s.push({
						pos: {
							r: n,
							c: d
						},
						value: {
							r: n,
							c: d,
							dr: a,
							dc: c
						}
					});
				}
				return s;
			},
			getAoE: (e, t, o, r, i) => i ? [{
				r: i.r,
				c: i.c
			}] : [],
			execute: (e, t, o, r, i, s) => {
				if (i) {
					let t = i.r + i.dr, o = i.c + i.dc, r = null;
					for (; t >= 0 && t < 8 && o >= 0 && o < 8 && !e[t][o];) r = {
						r: t,
						c: o
					}, t += i.dr, o += i.dc;
					r && (s({
						type: "MOVE",
						from: {
							r: i.r,
							c: i.c
						},
						to: r
					}), s({
						type: "SHOW_TEXT",
						text: "Ejected!",
						textKey: "LOG_EJECTION",
						style: "system"
					}));
				}
			}
		}
	},
	{
		id: "ROOK_CATAPULT",
		name: "抛射",
		tier: "EPIC",
		pieceType: r.ROOK,
		description: "主动：将相邻十字的一个友方兵发射过车身，飞向同一直线的另一端。",
		activeSpec: {
			targeting: "direction",
			getAlternatives: (e, t, o, i) => {
				const s = [];
				for (const [a, c] of [
					[-1, 0],
					[1, 0],
					[0, -1],
					[0, 1]
				]) {
					const n = t + a, d = o + c, p = e[n]?.[d];
					p && p.type === r.PAWN && p.color === i.color && !Pe.isSteady(p, e, n, d) && s.push({
						pos: {
							r: n,
							c: d
						},
						value: {
							r: n,
							c: d,
							dr: a,
							dc: c
						}
					});
				}
				return s;
			},
			getAoE: (e, t, o, r, i) => i ? [{
				r: i.r,
				c: i.c
			}] : [],
			execute: (e, t, o, r, i, s) => {
				if (i) {
					const r = -i.dr, a = -i.dc;
					let c = t + r, n = o + a, d = null;
					for (; c >= 0 && c < 8 && n >= 0 && n < 8 && !e[c][n];) d = {
						r: c,
						c: n
					}, c += r, n += a;
					d && (s({
						type: "MOVE",
						from: {
							r: i.r,
							c: i.c
						},
						to: d
					}), s({
						type: "SHOW_TEXT",
						text: "Catapulted!",
						textKey: "LOG_CATAPULT",
						style: "system"
					}));
				}
			}
		}
	},
	{
		id: "ROOK_FORBIDDEN_ZONE",
		name: "领土主权",
		tier: "LEGENDARY",
		pieceType: r.ROOK,
		description: "任何敌方棋子进入车所在的行或列时，移动力强行降为 1。",
		hooks: { onTurnStart: ({ board: e, r: t, c: o, piece: s, emit: a }) => {
			for (let c = 0; c < 8; c++) {
				const n = e[t][c], d = e[c][o];
				n && n.color !== s.color && n.type !== r.KING && a({
					type: "ADD_STATUS",
					pos: {
						r: t,
						c
					},
					statusId: i.GRAVITY_LOCKED,
					duration: 2
				}), d && d.color !== s.color && d.type !== r.KING && a({
					type: "ADD_STATUS",
					pos: {
						r: c,
						c: o
					},
					statusId: i.GRAVITY_LOCKED,
					duration: 2
				});
			}
		} }
	},
	{
		id: "ROOK_ION_CANNON",
		name: "轨道炮",
		tier: "LEGENDARY",
		pieceType: r.ROOK,
		description: "主动：原地不动，摧毁正方向直线上的所有单位（冷却 5 回合）。",
		activeSpec: {
			targeting: "direction",
			cooldownKey: "ionCooldown",
			getAlternatives: (e, t, o) => [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1]
			].map(([e, r]) => ({
				pos: {
					r: t + e,
					c: o + r
				},
				value: {
					dr: e,
					dc: r
				}
			})).filter((e) => C.isValidPos(e.pos.r, e.pos.c)),
			getAoE: (e, o, r, i, s) => {
				s || (s = i.color === t ? {
					dr: -1,
					dc: 0
				} : {
					dr: 1,
					dc: 0
				});
				const { dr: a, dc: c } = s, n = [];
				let d = o + a, p = r + c;
				for (; C.isValidPos(d, p);) n.push({
					r: d,
					c: p
				}), d += a, p += c;
				return n;
			},
			execute: (e, o, i, s, a, c) => {
				if ((s.metadata?.ionCooldown || 0) > 0) return;
				c({
					type: "UPDATE_ROSTER_PIECE",
					pieceUid: s.uid,
					updates: { metadata: {
						...s.metadata,
						ionCooldown: 5
					} }
				}), a || (a = s.color === t ? {
					dr: -1,
					dc: 0
				} : {
					dr: 1,
					dc: 0
				});
				const { dr: n, dc: d } = a;
				c({
					type: "ANIMATE",
					name: "LINEAR_BEAM",
					pos: {
						r: o,
						c: i
					},
					duration: 600,
					metadata: { angle: ie(n, d) }
				}), c({
					type: "ANIMATE",
					name: "SCREEN_SHAKE",
					duration: 400
				});
				let p = o + n, E = i + d;
				for (; C.isValidPos(p, E);) e[p][E] && e[p][E]?.type !== r.KING && c({
					type: "KILL",
					pos: {
						r: p,
						c: E
					}
				}), p += n, E += d;
				c({
					type: "SHOW_TEXT",
					text: "Orbital Cannon",
					textKey: "LOG_ION_CANNON",
					style: "danger"
				});
			}
		},
		hooks: { onTurnStart: ({ piece: e, emit: t }) => {
			e.metadata?.ionCooldown > 0 && t({
				type: "UPDATE_ROSTER_PIECE",
				pieceUid: e.uid,
				updates: { metadata: {
					...e.metadata,
					ionCooldown: e.metadata.ionCooldown - 1
				} }
			});
		} },
		getDisplayStatus: (e, t) => {
			const o = e.metadata?.ionCooldown || 0;
			return o > 0 ? {
				text: `${t("cooldown")}: ${t("turnsRemaining", { n: o })}`,
				colorClass: "text-slate-500"
			} : {
				text: t("ready"),
				colorClass: "text-cyan-400 animate-pulse"
			};
		}
	},
	{
		id: "ROOK_IRON_CURTAIN",
		name: "铁幕",
		tier: "LEGENDARY",
		pieceType: r.ROOK,
		description: "主动：锁定车所在的行，敌方单位本回合无法穿越该行（冷却 3 回合）。",
		activeSpec: {
			targeting: "self",
			cooldownKey: "ironCooldown",
			execute: (e, t, o, r, i, s) => {
				if (!((r.metadata?.ironCooldown || 0) > 0)) {
					s({
						type: "UPDATE_ROSTER_PIECE",
						pieceUid: r.uid,
						updates: { metadata: {
							...r.metadata,
							ironCooldown: 3
						} }
					});
					for (let e = 0; e < 8; e++) s({
						type: "SET_SQUARE",
						pos: {
							r: t,
							c: e
						},
						status: {
							id: d,
							duration: 2
						}
					});
					s({
						type: "SHOW_TEXT",
						text: "Iron Curtain",
						textKey: "LOG_IRON_CURTAIN",
						style: "system"
					});
				}
			}
		},
		hooks: { onTurnStart: ({ piece: e, emit: t }) => {
			e.metadata?.ironCooldown > 0 && t({
				type: "UPDATE_ROSTER_PIECE",
				pieceUid: e.uid,
				updates: { metadata: {
					...e.metadata,
					ironCooldown: e.metadata.ionCooldown - 1
				} }
			});
		} },
		getDisplayStatus: (e, t) => {
			const o = e.metadata?.ironCooldown || 0;
			return o > 0 ? {
				text: `${t("cooldown")}: ${t("turnsRemaining", { n: o })}`,
				colorClass: "text-slate-500"
			} : {
				text: t("ready"),
				colorClass: "text-cyan-400 animate-pulse"
			};
		}
	},
	{
		id: "ROOK_VOID_FISSURE",
		name: "虚空裂解炮",
		tier: "LEGENDARY",
		pieceType: r.ROOK,
		description: "主动：摧毁直线上首个目标并永久摧毁该空格（一局 3 次，冷却 5 回合）。",
		activeSpec: {
			targeting: "target",
			cooldownKey: "fissureCd",
			usesKey: "fissureUses",
			maxUses: 3,
			getAlternatives: (e, t, o) => {
				const r = [];
				for (const [i, s] of [
					[-1, 0],
					[1, 0],
					[0, -1],
					[0, 1]
				]) {
					let a = t + i, c = o + s;
					for (; C.isValidPos(a, c);) {
						if (e[a][c]) {
							r.push({
								pos: {
									r: a,
									c
								},
								value: {
									r: a,
									c
								}
							});
							break;
						}
						a += i, c += s;
					}
				}
				return r;
			},
			getAoE: (e, t, o, r, i) => i ? [{
				r: i.r,
				c: i.c
			}] : [],
			execute: (e, t, o, r, i, s) => {
				const a = r.metadata?.fissureUses || 0;
				if (!(a >= 3 || (r.metadata?.fissureCd || 0) > 0) && i) {
					const e = a + 1;
					s({
						type: "KILL",
						pos: i
					}), s({
						type: "SET_SQUARE",
						pos: i,
						status: {
							id: A,
							duration: 999
						}
					}), s({
						type: "UPDATE_ROSTER_PIECE",
						pieceUid: r.uid,
						updates: { metadata: {
							...r.metadata,
							fissureUses: e,
							fissureCd: 5
						} }
					});
					const t = 3 - e;
					s({
						type: "SHOW_TEXT",
						text: t > 0 ? `Void Fissure! ${t} uses left` : "Void Fissure! Ammo depleted",
						textKey: t > 0 ? "LOG_VOID_FISSURE_REMAINING" : "LOG_VOID_FISSURE_EMPTY",
						textParams: { remaining: t },
						style: "danger"
					}), s({
						type: "ANIMATE",
						name: "ION_FIRE",
						pos: i,
						duration: 500
					});
				}
			}
		},
		hooks: { onTurnStart: ({ piece: e, emit: t }) => {
			(e.metadata?.fissureCd || 0) > 0 && t({
				type: "UPDATE_ROSTER_PIECE",
				pieceUid: e.uid,
				updates: { metadata: {
					...e.metadata,
					fissureCd: e.metadata.fissureCd - 1
				} }
			});
		} },
		getDisplayStatus: (e, t) => {
			const o = e.metadata?.fissureCd || 0, r = e.metadata?.fissureUses || 0;
			return r >= 3 ? {
				text: t("depleted"),
				colorClass: "text-red-500"
			} : o > 0 ? {
				text: `${t("cooldown")}: ${t("turnsRemaining", { n: o })} (${t("remainingUses", { n: 3 - r })})`,
				colorClass: "text-slate-500"
			} : {
				text: `${t("ready")} (${t("remainingUses", { n: 3 - r })})`,
				colorClass: "text-cyan-400 animate-pulse"
			};
		}
	},
	{
		id: "EQ_EM_SHIELD",
		name: "电磁屏蔽罩",
		tier: "RARE",
		pieceType: r.ROOK,
		description: "只要车在国王边上一格，国王免疫来自“马”的攻击。",
		modifiers: { invulnerable: ({ board: e, r: t, c: o, piece: i }, s) => {
			if (i.type === r.KING) for (let a = -1; a <= 1; a++) for (let c = -1; c <= 1; c++) {
				const n = t + a, d = o + c;
				if (n >= 0 && n < 8 && d >= 0 && d < 8) {
					const t = e[n][d];
					if (t && t.color === i.color && t.type === r.ROOK && t.equippedItems?.some((e) => "EQ_EM_SHIELD" === e.effectId)) return s.type === r.KNIGHT;
				}
			}
			return !1;
		} }
	},
	{
		id: "EQ_TOW_HOOK",
		name: "远程牵引钩",
		tier: "EPIC",
		pieceType: r.ROOK,
		description: "主动：不移动，直接拉取并吃掉距离自己 2 格直线上的一个敌军。",
		activeSpec: {
			targeting: "target",
			getAlternatives: (e, t, o, i) => {
				const s = [];
				return [
					[0, 2],
					[0, -2],
					[2, 0],
					[-2, 0]
				].forEach(([a, c]) => {
					const n = t + a, d = o + c;
					if (n >= 0 && n < 8 && d >= 0 && d < 8) {
						const p = e[n][d];
						p && p.color !== i.color && p.type !== r.KING && !e[t + a / 2][o + c / 2] && s.push({
							pos: {
								r: n,
								c: d
							},
							value: {
								r: n,
								c: d,
								dr: a,
								dc: c
							}
						});
					}
				}), s;
			},
			getAoE: (e, t, o, r, i) => i ? [{
				r: i.r,
				c: i.c
			}] : [],
			execute: (e, t, o, r, i, s) => {
				i && (s({
					type: "KILL",
					pos: {
						r: i.r,
						c: i.c
					}
				}), s({
					type: "SHOW_TEXT",
					text: "Towing Kill",
					textKey: "LOG_TOW_HOOK_KILL",
					style: "danger",
					pos: {
						r: i.r,
						c: i.c
					}
				}));
			}
		}
	}
];
let ae = null;
function ce() {
	return ae || (ae = {
		[r.PAWN]: [...Z, ...ge],
		[r.KNIGHT]: [...$, ...ge],
		[r.BISHOP]: [...U, ...ge],
		[r.ROOK]: [...se, ...ge],
		[r.QUEEN]: [...re, ...ge],
		[r.KING]: [...X, ...ge]
	}), ae;
}
const ne = [
	{
		type: "CONSUMABLE",
		tier: "RARE",
		id: "BATTERY",
		effectId: "BATTERY"
	},
	{
		type: "CONSUMABLE",
		tier: "EPIC",
		id: "OVERCLOCK",
		effectId: "OVERCLOCK"
	},
	{
		type: "CONSUMABLE",
		tier: "RARE",
		id: "FREEZE_RAY",
		effectId: "FREEZE_RAY"
	},
	{
		type: "CONSUMABLE",
		tier: "COMMON",
		id: "SMOKE_BOMB",
		effectId: "SMOKE_BOMB"
	},
	{
		type: "CONSUMABLE",
		tier: "EPIC",
		id: "PARDON",
		effectId: "PARDON"
	},
	{
		type: "CONSUMABLE",
		tier: "COMMON",
		id: "SCOUT_PROBE",
		effectId: "SCOUT_PROBE"
	},
	{
		type: "CONSUMABLE",
		tier: "COMMON",
		id: "RUST_SPRAY",
		effectId: "RUST_SPRAY"
	},
	{
		type: "CONSUMABLE",
		tier: "RARE",
		id: "SWAP_PLUGIN",
		effectId: "SWAP_PLUGIN"
	},
	{
		type: "CONSUMABLE",
		tier: "RARE",
		id: "GOLDEN_TOUCH",
		effectId: "GOLDEN_TOUCH"
	},
	{
		type: "CONSUMABLE",
		tier: "RARE",
		id: "PASSIVE_ANTENNA",
		effectId: "PASSIVE_ANTENNA"
	},
	{
		type: "CONSUMABLE",
		tier: "EPIC",
		id: "ILLEGAL_SLOT",
		effectId: "ILLEGAL_SLOT"
	},
	{
		type: "CONSUMABLE",
		tier: "EPIC",
		id: "BLACK_ORDER",
		effectId: "BLACK_ORDER"
	},
	{
		type: "CONSUMABLE",
		tier: "EPIC",
		id: "SIGNAL_TOWER_DEFENSE",
		effectId: "SIGNAL_TOWER_DEFENSE"
	},
	{
		type: "CONSUMABLE",
		tier: "LEGENDARY",
		id: "REAPER_EXE",
		effectId: "REAPER_EXE"
	},
	{
		type: "CONSUMABLE",
		tier: "LEGENDARY",
		id: "WHEEL_OF_FATE",
		effectId: "WHEEL_OF_FATE"
	},
	{
		type: "EQUIPMENT",
		tier: "COMMON",
		id: "EQ_BAYONET",
		effectId: "EQ_BAYONET",
		pieceType: r.PAWN
	},
	{
		type: "EQUIPMENT",
		tier: "RARE",
		id: "EQ_SCOUT_RADAR",
		effectId: "EQ_SCOUT_RADAR",
		pieceType: r.PAWN
	},
	{
		type: "EQUIPMENT",
		tier: "RARE",
		id: "EQ_SIGNAL_BACKPACK",
		effectId: "EQ_SIGNAL_BACKPACK",
		pieceType: r.PAWN
	},
	{
		type: "EQUIPMENT",
		tier: "EPIC",
		id: "EQ_HIVE_CORE",
		effectId: "EQ_HIVE_CORE",
		pieceType: r.PAWN
	},
	{
		type: "EQUIPMENT",
		tier: "RARE",
		id: "EQ_CHEAP_BOOSTER",
		effectId: "EQ_CHEAP_BOOSTER",
		pieceType: r.PAWN
	},
	{
		type: "EQUIPMENT",
		tier: "RARE",
		id: "EQ_CHAIN_MINE",
		effectId: "EQ_CHAIN_MINE",
		pieceType: r.PAWN
	},
	{
		type: "EQUIPMENT",
		tier: "LEGENDARY",
		id: "EQ_SWARM_INTELLIGENCE",
		effectId: "EQ_SWARM_INTELLIGENCE",
		pieceType: r.PAWN
	},
	{
		type: "EQUIPMENT",
		tier: "RARE",
		id: "EQ_HOOF_ARMOR",
		effectId: "EQ_HOOF_ARMOR",
		pieceType: r.KNIGHT
	},
	{
		type: "EQUIPMENT",
		tier: "RARE",
		id: "EQ_TELESCOPIC_LEGS",
		effectId: "EQ_TELESCOPIC_LEGS",
		pieceType: r.KNIGHT
	},
	{
		type: "EQUIPMENT",
		tier: "EPIC",
		id: "EQ_SHOCK_STIRRUPS",
		effectId: "EQ_SHOCK_STIRRUPS",
		pieceType: r.KNIGHT
	},
	{
		type: "EQUIPMENT",
		tier: "RARE",
		id: "EQ_PLUNDER_HOOVES",
		effectId: "EQ_PLUNDER_HOOVES",
		pieceType: r.KNIGHT
	},
	{
		type: "EQUIPMENT",
		tier: "EPIC",
		id: "EQ_GHOST_RIDE",
		effectId: "EQ_GHOST_RIDE",
		pieceType: r.KNIGHT
	},
	{
		type: "EQUIPMENT",
		tier: "RARE",
		id: "EQ_PRISM_SHIELD",
		effectId: "EQ_PRISM_SHIELD",
		pieceType: r.BISHOP
	},
	{
		type: "EQUIPMENT",
		tier: "COMMON",
		id: "EQ_HIGH_POWER_SCOPE",
		effectId: "EQ_HIGH_POWER_SCOPE",
		pieceType: r.BISHOP
	},
	{
		type: "EQUIPMENT",
		tier: "RARE",
		id: "EQ_PURIFICATION_STAFF",
		effectId: "EQ_PURIFICATION_STAFF",
		pieceType: r.BISHOP
	},
	{
		type: "EQUIPMENT",
		tier: "RARE",
		id: "EQ_REFRACTION_LENS",
		effectId: "EQ_REFRACTION_LENS",
		pieceType: r.BISHOP
	},
	{
		type: "EQUIPMENT",
		tier: "RARE",
		id: "EQ_FAITH_SIPHON",
		effectId: "EQ_FAITH_SIPHON",
		pieceType: r.BISHOP
	},
	{
		type: "EQUIPMENT",
		tier: "RARE",
		id: "EQ_HOVER_TREAD",
		effectId: "EQ_HOVER_TREAD",
		pieceType: r.ROOK
	},
	{
		type: "EQUIPMENT",
		tier: "EPIC",
		id: "EQ_BASE_STATION",
		effectId: "EQ_BASE_STATION",
		pieceType: r.ROOK
	},
	{
		type: "EQUIPMENT",
		tier: "EPIC",
		id: "EQ_REACTIVE_ARMOR",
		effectId: "EQ_REACTIVE_ARMOR",
		pieceType: r.ROOK
	},
	{
		type: "EQUIPMENT",
		tier: "RARE",
		id: "EQ_EM_SHIELD",
		effectId: "EQ_EM_SHIELD",
		pieceType: r.ROOK
	},
	{
		type: "EQUIPMENT",
		tier: "EPIC",
		id: "EQ_TOW_HOOK",
		effectId: "EQ_TOW_HOOK",
		pieceType: r.ROOK
	},
	{
		type: "EQUIPMENT",
		tier: "LEGENDARY",
		id: "EQ_PHOENIX_FEATHER",
		effectId: "EQ_PHOENIX_FEATHER",
		pieceType: r.QUEEN
	},
	{
		type: "EQUIPMENT",
		tier: "EPIC",
		id: "EQ_BLOOD_DRESS",
		effectId: "EQ_BLOOD_DRESS",
		pieceType: r.QUEEN
	},
	{
		type: "EQUIPMENT",
		tier: "LEGENDARY",
		id: "EQ_SCEPTER_OF_CHARM",
		effectId: "EQ_SCEPTER_OF_CHARM",
		pieceType: r.QUEEN
	},
	{
		type: "EQUIPMENT",
		tier: "LEGENDARY",
		id: "EQ_QUEEN_ROOK_LINK",
		effectId: "QUEEN_ROOK_AUTHORITY",
		pieceType: r.QUEEN
	},
	{
		type: "EQUIPMENT",
		tier: "LEGENDARY",
		id: "EQ_QUEEN_BISHOP_LINK",
		effectId: "QUEEN_BISHOP_AUTHORITY",
		pieceType: r.QUEEN
	},
	{
		type: "EQUIPMENT",
		tier: "EPIC",
		id: "EQ_ROYAL_SALUTE",
		effectId: "EQ_ROYAL_SALUTE",
		pieceType: r.QUEEN
	},
	{
		type: "EQUIPMENT",
		tier: "RARE",
		id: "EQ_LIGHTNING_ROD",
		effectId: "EQ_LIGHTNING_ROD",
		pieceType: r.KING
	},
	{
		type: "EQUIPMENT",
		tier: "COMMON",
		id: "EQ_MEGAPHONE",
		effectId: "EQ_MEGAPHONE",
		pieceType: r.KING
	},
	{
		type: "EQUIPMENT",
		tier: "LEGENDARY",
		id: "EQ_ROYAL_GUARD",
		effectId: "EQ_ROYAL_GUARD",
		pieceType: r.KING
	},
	{
		type: "EQUIPMENT",
		tier: "LEGENDARY",
		id: "EQ_RELIC_OF_KINGS",
		effectId: "EQ_RELIC_OF_KINGS",
		pieceType: r.KING
	},
	{
		type: "EQUIPMENT",
		tier: "LEGENDARY",
		id: "EQ_ARROGANT_CREED",
		effectId: "EQ_ARROGANT_CREED",
		pieceType: r.KING
	},
	{
		type: "EQUIPMENT",
		tier: "EPIC",
		id: "EQ_GOLDEN_THRONE",
		effectId: "EQ_GOLDEN_THRONE",
		pieceType: r.KING
	},
	{
		type: "EQUIPMENT",
		tier: "COMMON",
		id: "EQ_REFLECTIVE_ARMOR",
		effectId: "EQ_REFLECTIVE_ARMOR"
	},
	{
		type: "EQUIPMENT",
		tier: "COMMON",
		id: "EQ_LIGHTWEIGHT_ALLOY",
		effectId: "EQ_LIGHTWEIGHT_ALLOY"
	},
	{
		type: "EQUIPMENT",
		tier: "RARE",
		id: "EQ_CAMOUFLAGE",
		effectId: "EQ_CAMOUFLAGE"
	},
	{
		type: "EQUIPMENT",
		tier: "COMMON",
		id: "EQ_STABILIZER",
		effectId: "EQ_STABILIZER"
	},
	{
		type: "EQUIPMENT",
		tier: "RARE",
		id: "EQ_SELF_DESTRUCT",
		effectId: "EQ_SELF_DESTRUCT"
	},
	{
		type: "EQUIPMENT",
		tier: "COMMON",
		id: "EQ_BACKUP_BATTERY",
		effectId: "EQ_BACKUP_BATTERY"
	},
	{
		type: "EQUIPMENT",
		tier: "RARE",
		id: "EQ_EMERGENCY_LINK",
		effectId: "EQ_EMERGENCY_LINK"
	},
	{
		type: "EQUIPMENT",
		tier: "EPIC",
		id: "EQ_BOUNTY_MODULE",
		effectId: "EQ_BOUNTY_MODULE"
	},
	{
		type: "EQUIPMENT",
		tier: "EPIC",
		id: "EQ_RESCUE_BEACON",
		effectId: "EQ_RESCUE_BEACON"
	},
	{
		type: "EQUIPMENT",
		tier: "LEGENDARY",
		id: "EQ_TACTICAL_OPS",
		effectId: "EQ_TACTICAL_OPS"
	},
	{
		type: "EQUIPMENT",
		tier: "LEGENDARY",
		id: "EQ_DIPLOMATIC_IMMUNITY",
		effectId: "EQ_DIPLOMATIC_IMMUNITY"
	},
	{
		type: "EQUIPMENT",
		tier: "EPIC",
		id: "EQ_FULL_BAND_SCANNER",
		effectId: "EQ_FULL_BAND_SCANNER"
	},
	{
		type: "EQUIPMENT",
		tier: "EPIC",
		id: "EQ_BLACK_MARKET_LEDGER",
		effectId: "EQ_BLACK_MARKET_LEDGER"
	},
	{
		type: "EQUIPMENT",
		tier: "RARE",
		id: "EQ_RECYCLING_STATION",
		effectId: "EQ_RECYCLING_STATION"
	},
	{
		type: "EQUIPMENT",
		tier: "LEGENDARY",
		id: "EQ_VENTURE_CAPITAL",
		effectId: "EQ_VENTURE_CAPITAL"
	},
	{
		type: "EQUIPMENT",
		tier: "RARE",
		id: "EQ_DEFLATION",
		effectId: "EQ_DEFLATION"
	},
	{
		type: "EQUIPMENT",
		tier: "EPIC",
		id: "EQ_HACKER_TERMINAL",
		effectId: "EQ_HACKER_TERMINAL"
	},
	{
		type: "EQUIPMENT",
		tier: "RARE",
		id: "EQ_SPYWARE",
		effectId: "EQ_SPYWARE"
	}
], de = [
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
const pe = {
	DEFAULT: { getInitialRoster: (e) => [
		e(r.KING, "wk"),
		e(r.PAWN, "p"),
		e(r.PAWN, "p"),
		e(r.PAWN, "p"),
		e(r.ROOK, "r"),
		e(r.KNIGHT, "n"),
		e(r.BISHOP, "b")
	] },
	[M]: {
		getInitialRoster: (e) => {
			const t = pe.DEFAULT.getInitialRoster(e), o = t.find((e) => e.type === r.KING);
			return o && (o.traits = ["HAPPY_PRINCE_IMMORTAL"], o.skills = ["HAPPY_PRINCE_IMMORTAL"]), [...t, {
				...e(r.KNIGHT, "swallow"),
				customName: "unitSwallow",
				metadata: { isSwallow: !0 },
				traits: ["SWALLOW_TRAIT"],
				skills: ["SWALLOW_TRAIT"]
			}];
		},
		setupBoard: (e, t, o) => {
			const i = t.find((e) => e.metadata?.isSwallow);
			if (i) {
				const t = {
					...i,
					id: q()
				};
				t.traits = Array.from(new Set([...t.traits || [], "SWALLOW_TRAIT"])), t.skills = Array.from(new Set([...t.skills || [], "SWALLOW_TRAIT"])), e[7][3] = t, o.push(i.uid);
			}
			const s = e[7][4];
			s && s.type === r.KING && (s.traits = Array.from(new Set([...s.traits || [], "HAPPY_PRINCE_IMMORTAL"])), s.skills = Array.from(new Set([...s.skills || [], "HAPPY_PRINCE_IMMORTAL"])));
		},
		interceptAction: (e) => "MODIFY_GOLD" === e.type && e.amount > 0 && !y.includes(e.reason) ? {
			...e,
			amount: 0
		} : e,
		checkGameOverOverride: (e, o) => {
			if (o === t) {
				let t = !1;
				const r = (e) => {
					e && (e.color === o && e.metadata?.isSwallow && (t = !0), e.stackedPiece && r(e.stackedPiece));
				};
				return e.forEach((e) => e.forEach(r)), !t;
			}
			return null;
		}
	},
	[N]: { getInitialRoster: (e) => {
		const t = e(r.KING, "wk"), o = e(r.BISHOP, "b");
		o.level = 3, o.customName = "unitMerlin", o.maxSlots = 2;
		const i = e(r.KNIGHT, "n");
		return i.level = 3, i.customName = "unitLancelot", i.maxSlots = 2, [
			t,
			o,
			i,
			e(r.PAWN, "p"),
			e(r.PAWN, "p"),
			e(r.PAWN, "p"),
			e(r.ROOK, "r")
		];
	} },
	[h]: { getInitialRoster: (e) => {
		const t = pe.DEFAULT.getInitialRoster(e), o = t.find((e) => e.type === r.KING);
		if (o) {
			const e = ["ODYSSEUS_TROJAN_ACTIVE"];
			o.traits = [...o.traits || [], ...e], o.skills = [...new Set([...o.skills, ...e])], o.maxSkillSlots = 3;
		}
		return t;
	} },
	[P]: {
		getInitialRoster: (e) => {
			const t = pe.DEFAULT.getInitialRoster(e), o = t.find((e) => e.type === r.KING);
			if (o) {
				const e = ["LOUIS_ABSOLUTE_CORONA"];
				o.traits = e, o.skills = [...new Set([...o.skills, ...e])], o.maxSkillSlots = 3;
			}
			const s = e(r.BISHOP, "ironmask");
			s.customName = "unitIronMask", s.traits = ["LOUIS_IRON_MASK"], s.skills = ["LOUIS_IRON_MASK"], s.maxSlots = 3, s.statuses = [{
				id: i.SILENCED,
				duration: 999
			}];
			const a = t.findIndex((e) => e.type === r.BISHOP);
			return -1 !== a ? t[a] = s : t.push(s), t;
		},
		setupBoard: (e, t, o) => {
			const r = t.find((e) => "unitIronMask" === e.customName);
			r && (e[7][3] = {
				...r,
				id: q()
			}, o.push(r.uid));
		}
	},
	[D]: { getInitialRoster: (e) => {
		const t = pe.DEFAULT.getInitialRoster(e), o = t.find((e) => e.type === r.KING);
		if (o) {
			const e = ["RICHARD_FORWARD_ONLY"];
			o.traits = e, o.skills = [...new Set([...o.skills, ...e])], o.maxSkillSlots = 3;
		}
		return t;
	} }
};
var Ee = class {
	static filterGoldGain(e, t, o) {
		return t <= 0 ? t : e === M ? y.includes(o) ? t : 0 : t;
	}
	static interceptSync(e, t, o) {
		if (e === M) {
			if ("MODIFY_GOLD" === t.type && t.amount > 0 && !y.includes(t.reason)) return {
				...t,
				amount: 0
			};
			if ("UPDATE_ROSTER_PIECE" === t.type && (o.roster || []).find((e) => e.uid === t.pieceUid)?.type === r.KING && t.updates.equippedItems?.length) {
				const e = ne.filter((e) => "LEGENDARY" === e.tier && "EQUIPMENT" === e.type), r = e[Math.floor(o.prng.next() * e.length)];
				o.emit && (o.emit({
					type: "ADD_ITEM",
					item: {
						id: `trans-${q()}`,
						type: "EQUIPMENT",
						name: r.id,
						desc: "由王子的金箔转化而来",
						effectId: r.effectId,
						tier: "LEGENDARY"
					}
				}), o.emit({
					type: "SHOW_TEXT",
					text: "金箔剥离：转化为传说装备",
					textKey: "LOG_GOLD_FOIL_CONVERT",
					style: "gold"
				})), t.updates.equippedItems = [];
			}
		}
		const i = pe[e] || pe.DEFAULT;
		return i.interceptAction ? i.interceptAction(t) : t;
	}
	static onRunInit(e) {
		return { gold: (de.find((t) => t.id === e) || de[0]).initialGold };
	}
	static onRosterInit(e, t) {
		return (pe[e] || pe.DEFAULT).getInitialRoster(t);
	}
	static onBoardSetup(e, t, o, r) {
		const i = pe[e] || pe.DEFAULT;
		i.setupBoard && i.setupBoard(t, o, r);
	}
	static checkGameOverOverride(e, t, o) {
		const r = pe[e] || pe.DEFAULT;
		return r.checkGameOverOverride ? r.checkGameOverOverride(t, o) : null;
	}
};
function le(e) {
	const t = (e) => {
		if (!e) return null;
		const o = {
			...e,
			statuses: e.statuses ? e.statuses.map((e) => ({ ...e })) : [],
			traits: e.traits ? [...e.traits] : [],
			learnedSkills: e.learnedSkills ? [...e.learnedSkills] : [],
			skills: e.skills ? [...e.skills] : [],
			equippedItems: e.equippedItems ? [...e.equippedItems] : [],
			metadata: e.metadata ? { ...e.metadata } : {}
		};
		return o.stackedPiece && (o.stackedPiece = t(o.stackedPiece)), o;
	};
	return e.map((e) => e.map((e) => t(e)));
}
function ue(e) {
	const t = {};
	if (e.squares) for (const r in e.squares) t[r] = e.squares[r].map((e) => ({
		...e,
		metadata: e.metadata ? { ...e.metadata } : void 0
	}));
	const o = e.recentDeaths ? { ...e.recentDeaths } : void 0;
	return {
		...e,
		squares: t,
		recentDeaths: o,
		globalJamming: e.globalJamming,
		activeMonarchId: e.activeMonarchId,
		screenWrap: e.screenWrap,
		sirenSongEnabled: e.sirenSongEnabled
	};
}
const Ae = "undefined" != typeof window ? window : "undefined" != typeof self ? self : globalThis, Ie = Ae.gameEvents || new class {
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
		const o = (r) => {
			this.off(e, o), t(r);
		};
		return this.on(e, o);
	}
}();
void 0 !== Ae && (Ae.gameEvents = Ie);
const Te = "STAT_TRACK";
var me = class {
	static handleKillExp(e, o, i, s) {
		if (!e.uid || e.color !== t || e.type === r.KING) return;
		const a = H.hasSkill(e, "PAWN_PROMOTE"), c = e.level || 1;
		if (!(c >= ("ARTHUR" === s ? 3 : 5)) || a) {
			let t = e.metadata?.currentCaptures || 0, r = e.metadata?.targetCaptures;
			if (r || (r = a ? 1 : ee(e.type, c)), t++, t >= r) {
				const t = c + 1, r = Math.max(e.maxSlots || 1, Math.floor((t + 1) / 2)), s = a ? 1 : ee(e.type, t);
				i({
					type: "UPDATE_ROSTER_PIECE",
					pieceUid: e.uid,
					updates: {
						level: t,
						maxSlots: r,
						metadata: {
							...e.metadata,
							currentCaptures: 0,
							targetCaptures: s
						}
					}
				}), i({
					type: "SHOW_TEXT",
					text: "LV UP!",
					textKey: "LOG_LEVEL_UP",
					style: "gold",
					pos: o
				}), i({
					type: "LEVEL_UP",
					pos: o
				}), Ie.emit(Te, {
					key: "maxLevelReached",
					value: t,
					type: "max",
					isLifetimeOnly: !0
				});
			} else i({
				type: "UPDATE_ROSTER_PIECE",
				pieceUid: e.uid,
				updates: { metadata: {
					...e.metadata,
					currentCaptures: t,
					targetCaptures: r
				} }
			});
		}
	}
}, Oe = class e {
	static {
		this.MAX_DEPTH = 16;
	}
	static {
		this.MAX_ACTIONS = 100;
	}
	static checkGameOver(e, t, i, s) {
		if (0 === e.flat().filter(Boolean).length) return !1;
		const a = i || "DEFAULT", c = Ee.checkGameOverOverride(a, e, t);
		if (null !== c) return c;
		let n = !1;
		if (s?.proxyKing && t === o) n = e.flat().some((e) => e && e.color === t);
		else for (let o = 0; o < 8; o++) {
			for (let i = 0; i < 8; i++) {
				const s = e[o][i];
				if (s && s.color === t && (s.type === r.KING || Pe.isProxyKing(s))) {
					n = !0;
					break;
				}
			}
			if (n) break;
		}
		return !n;
	}
	static produceScript(i, s, a) {
		Ne.build(s.board, s.metadata), s.interceptors = w.build(s.board, s.metadata);
		const c = new F(s.currentSeed || Date.now()), n = [...i], d = [], p = /* @__PURE__ */ new Set();
		s.depth = 0, s.actionCount = 0;
		let E = !1;
		for (; n.length > 0 && !(s.actionCount > e.MAX_ACTIONS || s.depth > e.MAX_DEPTH);) {
			const e = n.shift(), t = s.activeMonarchId ? Ee.interceptSync(s.activeMonarchId, e, {
				...s,
				prng: c
			}) : e;
			if (!t) continue;
			if ([
				"MOVE",
				"KILL",
				"SPAWN",
				"SWAP_PIECES",
				"SET_SQUARE",
				"REMOVE_SQUARE"
			].includes(t.type) && (E = !0), "MOVE" === t.type && a && !t._killInjected) {
				const e = s.board[t.to.r][t.to.c];
				if (e && e.color !== a.color) {
					n.unshift({
						...t,
						_killInjected: !0,
						_preservedVictim: e
					}), n.unshift({
						type: "KILL",
						targetId: e.id,
						from: t.from,
						pos: t.to,
						_preservedVictim: e
					});
					continue;
				}
			}
			let i = !1, l = t._preservedVictim || null, u = null;
			if ("KILL" === t.type) {
				const e = this.resolvePos(t, s.board);
				if (e) {
					u = e;
					const o = s.board[e.r][e.c];
					if (o) {
						l = o;
						const r = o.uid ? `UID:${o.uid}` : `POS:${e.r},${e.c}`;
						if (!p.has(r)) {
							p.add(r);
							const d = () => {
								i = !0;
							}, E = [];
							Pe.handleHook("onDeath", {
								board: s.board,
								r: e.r,
								c: e.c,
								piece: o,
								attacker: a || void 0,
								attackerPos: t.from,
								getStore: () => s,
								prng: c,
								emit: (e) => {
									"DELAY" !== e.type && "SHOW_TEXT" !== e.type && s.actionCount++, E.push(e);
								},
								cancelAction: d
							}), E.length > 0 && n.unshift(...E);
						}
					}
				}
			}
			if (i) continue;
			if (fe.apply(t, s), s.script && s.script.length > 0) {
				const e = le(s.board), t = ue(s.metadata);
				for (const o of s.script) d.push({
					action: o,
					boardSnapshot: e,
					metadataSnapshot: t
				});
				s.script.length = 0;
			}
			[
				"KILL",
				"SPAWN",
				"ADD_STATUS",
				"REMOVE_STATUS",
				"UPDATE_ROSTER_PIECE",
				"SET_SQUARE",
				"REMOVE_SQUARE"
			].includes(t.type) && (s.interceptors = w.build(s.board, s.metadata)), d.push({
				action: t,
				boardSnapshot: le(s.board),
				metadataSnapshot: ue(s.metadata)
			}), "DELAY" !== t.type && "SHOW_TEXT" !== t.type && s.actionCount++;
			const A = t.pos || t.to || null;
			if (this.triggerHooksSync(t, s, (e) => {
				"DELAY" !== e.type && "SHOW_TEXT" !== e.type && s.actionCount++, n.push(e);
			}, a || null, l, A, c), "KILL" === t.type && l?.type === r.KING && (!s.levelConstraints?.proxyKing || l.color !== o)) {
				if (s.fatalBlow = {
					attackerId: a?.id || "",
					victimId: l.id,
					victimPos: u || t.pos || {
						r: 0,
						c: 0
					}
				}, n.length > 0 && "MOVE" === n[0].type && n[0]._killInjected) {
					const e = n.shift();
					fe.apply(e, s), d.push({
						action: e,
						boardSnapshot: le(s.board),
						metadataSnapshot: ue(s.metadata)
					});
				}
				break;
			}
		}
		if (s.currentSeed = c.getSeed(), E) {
			if (this.checkGameOver(s.board, o, s.activeMonarchId, s.levelConstraints)) {
				s.winner = t;
				const e = {
					type: "SET_WINNER",
					winner: t
				};
				d.push({
					action: e,
					boardSnapshot: le(s.board),
					metadataSnapshot: ue(s.metadata)
				});
			} else if (this.checkGameOver(s.board, t, s.activeMonarchId, s.levelConstraints)) {
				s.winner = o;
				const e = {
					type: "SET_WINNER",
					winner: o
				};
				d.push({
					action: e,
					boardSnapshot: le(s.board),
					metadataSnapshot: ue(s.metadata)
				});
			}
		}
		return d;
	}
	static triggerHooksSync(e, t, o, r, i, s, a) {
		const { board: c } = t, n = {
			board: c,
			prng: a,
			emit: o,
			metadata: t.metadata,
			gold: t.gold,
			roster: t.roster,
			deployedUids: t.deployedUids,
			historyLength: t.historyLength ?? t.history?.length ?? 0,
			reserves: t.reserves,
			levelConstraints: t.levelConstraints,
			isAISimulation: t.isAISimulation
		};
		if ("MOVE" === e.type && r) {
			const t = r.uid && this.findPieceByUid(c, r.uid) || r;
			Pe.handleHook("onAfterMove", {
				...n,
				piece: t,
				r: e.to.r,
				c: e.to.c,
				from: e.from,
				victim: i || void 0
			});
		} else if ("KILL" === e.type && r) {
			const a = s || this.resolvePos(e, c), d = i || (a ? c[a.r][a.c] : null);
			if (d && d.color !== r.color && a) {
				const i = r.uid && this.findPieceByUid(c, r.uid) || r;
				Pe.handleHook("onKill", {
					...n,
					piece: i,
					victim: d,
					r: a.r,
					c: a.c,
					from: e.from
				}), me.handleKillExp(i, a, o, t.activeMonarchId);
			}
		} else if ("SPAWN" === e.type) {
			const t = this.resolvePos(e, c);
			t && Pe.handleHook("onDeploy", {
				...n,
				piece: e.piece,
				r: t.r,
				c: t.c
			});
		} else if ("LEVEL_UP" === e.type) {
			const t = e.pos, o = c[t.r][t.c];
			o && Pe.handleHook("onLevelUp", {
				...n,
				piece: o,
				r: t.r,
				c: t.c
			});
		}
	}
	static calculateSequence(e, t, o) {
		const r = {
			...t,
			script: [],
			depth: 0,
			actionCount: 0,
			emit: () => {},
			activeMonarchId: t.activeMonarchId || "DEFAULT"
		};
		return this.produceScript(e, r, o);
	}
	static findPieceByUid(e, t) {
		for (let o = 0; o < 8; o++) for (let r = 0; r < 8; r++) {
			const i = e[o][r];
			if (i) {
				if (i.uid === t) return i;
				if (i.stackedPiece && i.stackedPiece.uid === t) return i.stackedPiece;
			}
		}
		return null;
	}
	static resolvePos(e, t) {
		if (e.targetId) for (let o = 0; o < 8; o++) for (let r = 0; r < 8; r++) {
			const i = t[o][r];
			if (i && (i.id === e.targetId || i.uid === e.targetId)) return {
				r: o,
				c: r
			};
			if (i && i.stackedPiece && (i.stackedPiece.id === e.targetId || i.stackedPiece.uid === e.targetId)) return {
				r: o,
				c: r
			};
		}
		if (e.pos) return e.pos;
	}
};
const _e = {
	MOVE: (e, t) => {
		const { board: o } = t, r = o[e.from.r][e.from.c];
		if (r) {
			const i = o[e.to.r][e.to.c], s = { ...r };
			if (i && i.id !== r.id && !t.isAISimulation) {
				let e = s;
				for (; e.stackedPiece;) e.stackedPiece = { ...e.stackedPiece }, e = e.stackedPiece;
				e.stackedPiece = i;
			}
			o[e.from.r][e.from.c] = r.stackedPiece || null, s.stackedPiece = s.stackedPiece || void 0, o[e.to.r][e.to.c] = s, s.abilityMask = Q.resolveMask(s);
		}
	},
	KILL: (e, t) => {
		const o = Re(e, t.board);
		if (o) {
			const e = t.board[o.r][o.c];
			e && (t.metadata.recentDeaths = {
				...t.metadata.recentDeaths || {},
				[e.id]: 1
			}), t.board[o.r][o.c] = null;
		}
	},
	SPAWN: (e, t) => {
		const o = Re(e, t.board);
		if (o) {
			const r = { ...e.piece };
			r.skills = [...new Set([
				...r.skills || [],
				...r.learnedSkills || [],
				...r.traits || []
			])], r.abilityMask = Q.resolveMask(r), t.board[o.r][o.c] = r;
		}
	},
	SWAP_PIECES: (e, t) => {
		const { board: o } = t, r = o[e.posA.r][e.posA.c], i = o[e.posB.r][e.posB.c];
		o[e.posA.r][e.posA.c] = i ? { ...i } : null, o[e.posB.r][e.posB.c] = r ? { ...r } : null;
	},
	ADD_STATUS: (e, t) => {
		const o = Re(e, t.board);
		if (o) {
			const r = t.board[o.r][o.c];
			if (r) {
				const i = {
					...r,
					statuses: [...r.statuses || []]
				};
				Pe.applyStatus(i, e.statusId, e.duration, e.metadata), i.abilityMask = Q.resolveMask(i), t.board[o.r][o.c] = i, t.roster && (t.roster = t.roster.map((e) => e.uid === r.uid ? i : e)), t.script && ("FROZEN" === e.statusId ? t.script.push({
					type: "ANIMATE",
					name: "RIPPLE",
					pos: o,
					duration: 300,
					metadata: { color: "#7dd3fc" }
				}) : "SILENCED" === e.statusId && t.script.push({
					type: "ANIMATE",
					name: "DATA_GLITCH",
					pos: o,
					duration: 400
				}));
			}
		}
	},
	REMOVE_STATUS: (e, t) => {
		const o = Re(e, t.board);
		if (o) {
			const r = t.board[o.r][o.c];
			if (r && r.statuses) {
				const i = {
					...r,
					statuses: r.statuses.filter((t) => t.id !== e.statusId)
				};
				i.abilityMask = Q.resolveMask(i), t.board[o.r][o.c] = i, t.roster && (t.roster = t.roster.map((e) => e.uid === r.uid ? i : e));
			}
		}
	},
	SET_SQUARE: (e, t) => {
		const o = `${e.pos.r},${e.pos.c}`;
		t.metadata.squares[o] = [...t.metadata.squares[o] || [], e.status];
	},
	REMOVE_SQUARE: (e, t) => {
		const o = `${e.pos.r},${e.pos.c}`;
		t.metadata.squares[o] && (t.metadata.squares[o] = t.metadata.squares[o].filter((t) => t.id !== e.statusId));
	},
	MODIFY_RESERVE: (e, t) => {
		const o = t.reserves[e.color][e.pieceType] || 0;
		t.reserves[e.color][e.pieceType] = o + e.amount;
	},
	UPDATE_CONSTRAINTS: (e, t) => {
		t.isAISimulation || (e.maxSavesOffset && (t.baseMaxSaves += e.maxSavesOffset), e.maxUndosOffset && (t.baseMaxUndos += e.maxUndosOffset));
	},
	RECORD_DEPLOY: (e, t) => {
		t.deployedUids && !t.deployedUids.includes(e.uid) && t.deployedUids.push(e.uid);
	},
	UNDEPLOY_PIECE: (e, t) => {
		t.deployedUids = t.deployedUids.filter((t) => t !== e.uid);
	},
	REMOVE_PIECE: (e, t) => {
		const o = Re(e, t.board);
		if (o) {
			const e = t.board[o.r][o.c];
			e && (t.metadata.recentDeaths = {
				...t.metadata.recentDeaths || {},
				[e.id]: 1
			}), t.board[o.r][o.c] = null;
		}
	},
	SET_EXTRA_MOVE: (e, t) => {
		t.extraMoveActive = e.active;
	},
	SET_WINNER: (e, t) => {
		t.winner = e.winner;
	},
	TICK_PIECE: (e, t) => {
		const o = t.board[e.pos.r][e.pos.c];
		if (o) {
			const r = ye(o);
			r.abilityMask = Q.resolveMask(r), t.board[e.pos.r][e.pos.c] = r, t.roster && (t.roster = t.roster.map((e) => e.uid === o.uid ? r : e));
		}
	},
	SWITCH_TURN: (e, t) => {
		t.turn !== e.nextTurn && (t.extraMoveActive = !1), t.turn = e.nextTurn, t.hasDeployedThisTurn = !1;
	},
	UPDATE_METADATA: (e, t) => {
		Object.assign(t.metadata, e.updates);
	},
	LEVEL_UP: (e, t) => {
		const o = t.board[e.pos.r][e.pos.c];
		if (o) {
			const r = (o.level || 1) + 1, i = Math.max(o.maxSlots || 1, Math.floor((r + 1) / 2)), s = {
				...o,
				level: r,
				maxSlots: i
			};
			s.abilityMask = Q.resolveMask(s), t.board[e.pos.r][e.pos.c] = s, t.roster && (t.roster = t.roster.map((e) => e.uid === o.uid ? s : e)), t.script && t.script.push({
				type: "ANIMATE",
				name: "LEVEL_UP",
				pos: e.pos,
				duration: 800
			});
		}
	},
	UPDATE_ROSTER_PIECE: (e, t) => {
		const o = fe.getActivePieces(t.board);
		for (const { r, c: i, piece: s } of o) if (s.uid === e.pieceUid) {
			const o = {
				...s,
				...e.updates
			};
			o.skills = [...new Set([
				...o.skills || [],
				...o.learnedSkills || [],
				...o.traits || []
			])], o.abilityMask = Q.resolveMask(o), t.board[r][i] = o;
		}
		t.roster && (t.roster = t.roster.map((t) => t.uid === e.pieceUid ? {
			...t,
			...e.updates
		} : t));
	},
	MODIFY_GOLD: (e, t) => {
		if (void 0 !== t.gold) {
			let o = e.amount;
			o > 0 && t.metadata?.doubleGoldActive && (o *= 2), t.gold = Math.max(0, t.gold + o);
		}
	},
	ANIMATE: () => {},
	ADD_TO_ROSTER: (e, t) => {
		if (t.roster) {
			const o = { ...e.piece };
			o.skills = [...new Set([
				...o.skills || [],
				...o.learnedSkills || [],
				...o.traits || []
			])], t.roster = [...t.roster, o];
			const r = o.color;
			t.reserves && t.reserves[r] && (t.reserves[r][o.type] = (t.reserves[r][o.type] || 0) + 1);
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
var fe = class e {
	static finalizeInference(e) {
		for (let o = 0; o < 8; o++) for (let t = 0; t < 8; t++) {
			const r = e.board[o][t];
			r && (r.abilityMask = Q.resolveMask(r));
		}
		const t = e.isAISimulation || !0 === globalThis.isAISimulation;
		e.metadata.cache = V.apply(e.metadata.cache, e.board, e.metadata, e.turn, [], e.levelConstraints, t);
	}
	static refreshAbilityMasks(e) {
		for (let t = 0; t < 8; t++) for (let o = 0; o < 8; o++) {
			const r = e[t][o];
			r && (r.abilityMask = Q.resolveMask(r));
		}
	}
	static updateCache(e) {
		const t = e.isAISimulation || !0 === globalThis.isAISimulation;
		e.metadata.cache = V.apply(e.metadata.cache, e.board, e.metadata, e.turn, [], e.levelConstraints, t);
	}
	static apply(t, o) {
		const r = _e[t.type];
		r && r(t, o);
		const i = [];
		"pos" in t && t.pos && i.push(t.pos), "from" in t && t.from && i.push(t.from), "to" in t && t.to && i.push(t.to), "posA" in t && t.posA && i.push(t.posA), "posB" in t && t.posB && i.push(t.posB);
		for (const e of i) {
			const t = o.board[e.r][e.c];
			t && (t.abilityMask = Q.resolveMask(t));
		}
		if ("UPDATE_ROSTER_PIECE" === t.type) {
			const r = e.getActivePieces(o.board);
			for (const { r: e, c: o, piece: i } of r) i.uid === t.pieceUid && (i.abilityMask = Q.resolveMask(i));
		}
		o.metadata.cache = V.apply(o.metadata.cache, o.board, o.metadata, o.turn, [t], o.levelConstraints, o.isAISimulation);
	}
	static simulateAIActionWithUndo(r, i, s) {
		const a = {
			boardSnapshot: i.board.map((e) => [...e]),
			metadataSnapshot: {
				...i.metadata,
				squares: { ...i.metadata.squares },
				recentDeaths: i.metadata.recentDeaths ? { ...i.metadata.recentDeaths } : void 0
			},
			reservesSnapshot: {
				[t]: { ...i.reserves[t] },
				[o]: { ...i.reserves[o] }
			},
			turnSnapshot: i.turn,
			winnerSnapshot: i.winner,
			extraMoveSnapshot: i.extraMoveActive,
			hasDeployedSnapshot: i.hasDeployedThisTurn,
			deployedUidsSnapshot: [...i.deployedUids],
			seedSnapshot: i.currentSeed
		};
		i.isAISimulation = !0, globalThis.isAISimulation = !0;
		const c = new F(i.currentSeed || Date.now());
		try {
			i.interceptors = w.build(i.board, i.metadata), Oe.calculateSequence(r, i, s);
			for (let t = 0; t < 8; t++) for (let o = 0; o < 8; o++) {
				const r = i.board[t][o];
				r && (r.statuses && r.statuses.length > 0 || r.stackedPiece) && e.apply({
					type: "TICK_PIECE",
					pos: {
						r: t,
						c: o
					}
				}, i);
			}
			if (i.metadata.squares) {
				const e = { ...i.metadata.squares };
				for (const [t, o] of Object.entries(e)) e[t] = o.map((e) => e.duration >= 99 ? e : {
					...e,
					duration: e.duration - 1
				}).filter((e) => e.duration > 0);
				i.metadata.squares = e;
			}
			if (i.metadata.lockedActionUid && !i.extraMoveActive && (i.metadata.lockedActionUid = void 0), i.metadata.recentDeaths) {
				const e = {};
				for (const [t, o] of Object.entries(i.metadata.recentDeaths)) o > 1 && (e[t] = o - 1);
				i.metadata.recentDeaths = e;
			}
			i.turn = i.extraMoveActive ? i.turn : i.turn === t ? o : t, i.extraMoveActive = !1, i.hasDeployedThisTurn = !1;
			const a = [];
			for (let e = 0; e < 8; e++) for (let t = 0; t < 8; t++) {
				const o = i.board[e][t];
				o && o.color === i.turn && Pe.handleHook("onTurnStart", {
					board: i.board,
					r: e,
					c: t,
					piece: o,
					prng: c,
					emit: (e) => a.push(e),
					metadata: i.metadata,
					gold: i.gold,
					roster: i.roster,
					deployedUids: i.deployedUids,
					historyLength: i.historyLength ?? 0,
					reserves: i.reserves,
					levelConstraints: i.levelConstraints,
					isAISimulation: i.isAISimulation
				});
			}
			a.length > 0 && Oe.calculateSequence(a, i), i.currentSeed = c.getSeed(), i.metadata.cache = V.apply(i.metadata.cache, i.board, i.metadata, i.turn, [], i.levelConstraints, !0);
		} catch (n) {
			if ("ACTION_QUEUE_OVERFLOW" === n.message) return e.undo(i, a), a;
			throw n;
		} finally {
			globalThis.isAISimulation = !1;
		}
		return a;
	}
	static undo(e, t) {
		e.board = t.boardSnapshot, e.metadata = t.metadataSnapshot, e.reserves = t.reservesSnapshot, e.turn = t.turnSnapshot, e.winner = t.winnerSnapshot, e.extraMoveActive = t.extraMoveSnapshot, e.hasDeployedThisTurn = t.hasDeployedSnapshot, e.deployedUids = t.deployedUidsSnapshot, e.currentSeed = t.seedSnapshot;
	}
	static getActivePieces(e) {
		const t = [];
		for (let o = 0; o < 8; o++) for (let r = 0; r < 8; r++) e[o][r] && t.push({
			r: o,
			c: r,
			piece: e[o][r]
		});
		return t;
	}
}, Se = class {
	static computeActionResults(e, t, o) {
		return {
			nextContext: t,
			script: Oe.calculateSequence(e, t, o)
		};
	}
	static fastCloneContext(e) {
		const r = (e) => {
			if (!e) return null;
			const t = {
				...e,
				statuses: e.statuses ? e.statuses.map((e) => ({ ...e })) : [],
				traits: e.traits ? [...e.traits] : [],
				learnedSkills: e.learnedSkills ? [...e.learnedSkills] : [],
				skills: e.skills ? [...e.skills] : [],
				equippedItems: e.equippedItems ? [...e.equippedItems] : [],
				metadata: e.metadata ? { ...e.metadata } : {}
			};
			return t.stackedPiece && (t.stackedPiece = r(t.stackedPiece)), t;
		}, i = e.board.map((e) => e.map((e) => r(e))), s = {};
		if (e.metadata.squares) for (const t in e.metadata.squares) s[t] = e.metadata.squares[t].map((e) => ({
			...e,
			metadata: e.metadata ? { ...e.metadata } : void 0
		}));
		const a = e.roster ? e.roster.map((e) => r(e)) : [], c = e.consumables ? [...e.consumables] : [], n = e.equipments ? [...e.equipments] : [], d = {
			[t]: { ...e.reserves[t] },
			[o]: { ...e.reserves[o] }
		}, p = e.deployedUids ? [...e.deployedUids] : [], E = e.fatalBlow ? { ...e.fatalBlow } : null;
		return {
			board: i,
			metadata: {
				...e.metadata,
				squares: s,
				activeMonarchId: e.metadata.activeMonarchId,
				screenWrap: e.metadata.screenWrap,
				sirenSongEnabled: e.metadata.sirenSongEnabled
			},
			gameMode: e.gameMode,
			roster: a,
			gold: e.gold,
			consumables: c,
			equipments: n,
			reserves: d,
			levelConstraints: e.levelConstraints,
			activeMonarchId: e.activeMonarchId,
			turn: e.turn,
			winner: e.winner,
			extraMoveActive: e.extraMoveActive,
			hasDeployedThisTurn: e.hasDeployedThisTurn,
			currentSeed: e.currentSeed,
			deployedUids: p,
			baseMaxSaves: e.baseMaxSaves,
			baseMaxUndos: e.baseMaxUndos,
			historyLength: e.historyLength,
			fatalBlow: E
		};
	}
};
function Re(e, t) {
	if (e.targetId) {
		const o = fe.getActivePieces(t);
		for (const { r: t, c: r, piece: i } of o) {
			if (i.id === e.targetId || i.uid === e.targetId) return {
				r: t,
				c: r
			};
			if (i.stackedPiece && (i.stackedPiece.id === e.targetId || i.stackedPiece.uid === e.targetId)) return {
				r: t,
				c: r
			};
		}
	}
	return e.pos;
}
function ye(e) {
	const t = {
		...e,
		statuses: e.statuses ? e.statuses.map((e) => ({ ...e })) : [],
		traits: e.traits ? [...e.traits] : []
	};
	t.type === r.KING && (t.statuses = t.statuses.filter((e) => e.id !== i.INVISIBLE && e.id !== i.PETRIFIED)), t.stackedPiece && (t.stackedPiece = ye(t.stackedPiece)), t.statuses.length > 0 && (t.statuses = t.statuses.map((e) => e.duration >= 99 ? e : (e.duration <= 1 && e.id === i.BETRAYED && e.originalColor && (t.color = e.originalColor), {
		...e,
		duration: e.duration - 1
	})).filter((e) => e.duration > 0));
	const o = [i.GRACE_LIMIT, i.CANNOT_CAPTURE];
	return t.traits && t.traits.length > 0 && (t.traits = t.traits.filter((e) => !o.includes(e))), t.skills = [...new Set([
		...t.skills || [],
		...t.learnedSkills || [],
		...t.traits || []
	])], t;
}
var Ne = class {
	static {
		this.globalInvulnerabilityMods = [];
	}
	static {
		this.globalSquareBlockMods = [];
	}
	static build(e, t) {
		this.globalInvulnerabilityMods = [], this.globalSquareBlockMods = [];
		const o = fe.getActivePieces(e);
		for (const { piece: r, r: i, c: s } of o) {
			const t = x.getModifiers(r, e, i, s);
			for (const e of t) e.invulnerable && this.globalInvulnerabilityMods.push({
				piece: r,
				r: i,
				c: s,
				fn: e.invulnerable
			}), e.squareBlockMovement && this.globalSquareBlockMods.push({
				piece: r,
				r: i,
				c: s,
				fn: e.squareBlockMovement
			});
		}
		if (t?.squares) for (const [r, i] of Object.entries(t.squares)) {
			const [o, i] = r.split(",").map(Number), s = x.getSquareModifiers(e, o, i, t);
			for (const e of s) e.squareBlockMovement && this.globalSquareBlockMods.push({
				piece: null,
				r: o,
				c: i,
				fn: e.squareBlockMovement
			});
		}
	}
}, he = class {
	static isSteady(e) {
		return !!e && (Q.has(e, "KING_STEADY") || Q.has(e, "EQ_STABILIZER"));
	}
	static isHidden(e, t, o, r, s) {
		if (!e.statuses?.some((e) => e.id === i.INVISIBLE || e.id === i.CAMOUFLAGED)) return !1;
		let a = !1;
		for (let i = 0; i < 8; i++) {
			for (let e = 0; e < 8; e++) {
				const c = o[i][e];
				if (c && c.color === t && c.equippedItems?.some((e) => "EQ_SCOUT_RADAR" === e.effectId) && Math.max(Math.abs(r - i), Math.abs(s - e)) <= 2) {
					a = !0;
					break;
				}
			}
			if (a) break;
		}
		return !a;
	}
	static isInvulnerable(e, t, o, r, i, s, a) {
		for (const c of Ne.globalInvulnerabilityMods) if ((c.piece.id === e.id || Q.has(c.piece, "GENERIC_FIREWALL")) && c.fn({
			board: o,
			piece: e,
			r,
			c: i,
			metadata: s,
			networkedMap: a
		}, t)) return !0;
		if (s?.squares) {
			const c = x.getSquareModifiers(o, r, i, s);
			for (const n of c) if (n.invulnerable && n.invulnerable({
				board: o,
				piece: e,
				r,
				c: i,
				metadata: s,
				networkedMap: a
			}, t)) return !0;
		}
		return !1;
	}
	static canAct(e, t, o, r, s, a, c) {
		return !!e && !e.statuses?.some((e) => e.id === i.PETRIFIED) && (!(!a?.lockedActionUid || a.lockedActionUid !== e.uid) || (e.statuses?.some((e) => e.id === i.FROZEN) ? !!Q.has(e, "BYPASS_FROZEN") || x.getModifiers(e, o, r, s).some((t) => t.bypassFrozen && t.bypassFrozen({
			board: o,
			piece: e,
			r,
			c: s,
			metadata: a,
			networkedMap: c
		})) : !!t || !!Q.has(e, "BYPASS_FROZEN") || x.getModifiers(e, o, r, s).some((t) => t.bypassFrozen && t.bypassFrozen({
			board: o,
			piece: e,
			r,
			c: s,
			metadata: a,
			networkedMap: c
		}))));
	}
}, Me = class {
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
			let o = !1, r = !1;
			const i = () => {
				o = !0, t.cancelAction && t.cancelAction();
			}, s = () => {
				r = !0, t.setNoSkip && t.setNoSkip();
			};
			"onDeath" === e && o && Ie.emit(Te, {
				key: "deathEvaded",
				value: 1,
				isLifetimeOnly: !0
			}), "onUse" === e && t.prng && Ie.emit(Te, {
				key: "rngTriggers",
				value: 1,
				isLifetimeOnly: !0
			});
			const a = t.subject || t.piece, c = "onDeath" === e ? t.victim || t.piece : t.victim, n = t.getStore ? t.getStore() : null, d = {
				board: t.board,
				piece: t.piece,
				ownerPos: t.ownerPos,
				subject: a,
				r: t.r,
				c: t.c,
				from: t.from,
				attacker: t.attacker,
				attackerPos: t.attackerPos,
				victim: c,
				prng: t.prng,
				emit: (e) => {
					t.emit(e);
				},
				cancelAction: i,
				noSkip: r,
				setNoSkip: s,
				metadata: t.metadata || n?.metadata || {
					squares: {},
					globalJamming: 0
				},
				gold: t.gold ?? n?.gold ?? 0,
				roster: t.roster || n?.roster || [],
				deployedUids: t.deployedUids || n?.deployedUids || [],
				historyLength: t.historyLength ?? n?.historyLength ?? n?.history?.length ?? 0,
				reserves: t.reserves || n?.reserves || {
					W: {},
					B: {}
				},
				levelConstraints: t.levelConstraints || n?.levelConstraints || null,
				isAISimulation: t.isAISimulation ?? n?.isAISimulation ?? !1
			};
			if (!t.piece && "onUse" !== e) return !1;
			if (t.noSkip && (r = !0), t.piece) {
				const r = v.isSilenced(t.piece), i = (r) => {
					for (const i of r) {
						const r = H.get(i);
						if (r?.hooks?.[e] && (!r.pieceType || r.pieceType === t.piece.type) && (r.hooks[e](d), o)) return !0;
					}
					return !1;
				};
				if (t.piece.statuses && i(t.piece.statuses.map((e) => e.id))) return !0;
				if (!r) {
					if (i(H.getActiveSkillIds(t.piece))) return !0;
					if (t.piece.equippedItems && i(t.piece.equippedItems.map((e) => e.effectId))) return !0;
				}
			}
			if ("onUse" !== e && t.board && t.piece) {
				const r = fe.getActivePieces(t.board);
				for (const { piece: i, r: s, c: a } of r) {
					if (i.uid === t.piece.uid) continue;
					if (v.isSilenced(i)) continue;
					const r = {
						...d,
						piece: i,
						ownerPos: {
							r: s,
							c: a
						}
					}, c = [
						...i.statuses?.map((e) => e.id) || [],
						...H.getActiveSkillIds(i),
						...i.equippedItems?.map((e) => e.effectId) || []
					];
					for (const t of c) {
						const i = H.get(t);
						if (i?.hooks?.[e] && i.tags?.includes("GLOBAL") && (i.hooks[e](r), o)) break;
					}
					if (o) break;
				}
			}
			return t.noSkip = r, o;
		} finally {
			this.hookDepth--;
		}
	}
	static handleSquareHook(e, t, o, r, i) {
		if (!i?.squares) return !1;
		const s = i.squares[`${t},${o}`];
		if (!s) return !1;
		let a = !1;
		const c = {
			...r,
			cancelAction: () => {
				a = !0;
			}
		};
		for (const n of s) {
			const t = H.get(n.id);
			if (t?.hooks?.[e] && (t.hooks[e](c), a)) break;
		}
		return a;
	}
}, Pe = class {
	static register(e) {
		H.register(e);
	}
	static getDefinition(e) {
		return H.get(e);
	}
	static getRegisteredSkills() {
		return H.getAllDefinitions();
	}
	static getAllSkills(e) {
		return H.getActiveSkillIds(e);
	}
	static hasSkill(e, t) {
		return H.hasSkill(e, t);
	}
	static getModifiers(e, t, o, r) {
		return x.getModifiers(e, t, o, r);
	}
	static getSquareModifiers(e, t, o, r) {
		return x.getSquareModifiers(e, t, o, r);
	}
	static hasModifier(e, t) {
		return x.hasModifier(e, t);
	}
	static isProxyKing(e) {
		return this.hasModifier(e, "proxyKing");
	}
	static isSteady(e, t, o, r) {
		return he.isSteady(e);
	}
	static isSilenced(e) {
		return v.isSilenced(e);
	}
	static isPieceFunctional(e, t, o, r, i, s, a) {
		return he.canAct(e, t, o, r, i, s, a);
	}
	static isSuppressed(e, t, o, r) {
		return !1;
	}
	static isActionDestructive(e) {
		return !!e && [...e.learnedSkills || [], ...e.traits || []].some((e) => S.DESTRUCTIVE_SKILLS.includes(e));
	}
	static applyStatus(e, t, o, r) {
		v.applyStatus(e, t, o, r);
	}
	static handleHook(e, t) {
		return Me.handleHook(e, t);
	}
	static handleSquareHook(e, t, o, r, i) {
		return Me.handleSquareHook(e, t, o, r, i);
	}
	static applyModifiers(e, t, o, r, s, a, c) {
		const n = this.getModifiers(t, o, r, s), d = (t.statuses || []).some((e) => e.id === i.FROZEN || e.id === i.PETRIFIED), p = n.some((e) => e.bypassFrozen && e.bypassFrozen({
			board: o,
			piece: t,
			r,
			c: s,
			metadata: a,
			networkedMap: c
		}));
		if (d && !p) return [];
		let E = [...e];
		for (const i of n) i.movement && (E = i.movement({
			board: o,
			piece: t,
			r,
			c: s,
			metadata: a,
			networkedMap: c
		}, E));
		a && (E = E.filter((e) => !this.getSquareModifiers(o, e.r, e.c, a).some((r) => r.squareBlockMovement && r.squareBlockMovement({
			board: o,
			piece: t,
			r: e.r,
			c: e.c,
			metadata: a
		}))));
		const l = [], u = /* @__PURE__ */ new Set();
		for (const i of E) {
			const e = `${i.r},${i.c}`;
			u.has(e) || (u.add(e), l.push(i));
		}
		return l.filter((e) => {
			const r = o[e.r][e.c];
			return !r || !r.statuses?.some((e) => e.id === i.PETRIFIED) && (!!r.statuses?.some((e) => e.id === i.FLATTENED) || (r.color === t.color || !he.isHidden(r, t.color, o, e.r, e.c)) && (r.color === t.color ? !(!r.statuses?.some((e) => e.id === i.FLATTENED) || r.stackedPiece) || E.some((t) => t.r === e.r && t.c === e.c) : !he.isInvulnerable(r, t, o, e.r, e.c, a, c)));
		});
	}
	static executePriceHooks(e, t) {
		const o = { value: t };
		for (const r of e) {
			for (const e of this.getAllSkills(r)) {
				const t = this.getDefinition(e);
				t?.hooks?.onPriceCalculate && t.hooks.onPriceCalculate({
					piece: r,
					priceRef: o
				});
			}
			r.equippedItems?.forEach((e) => {
				const t = this.getDefinition(e.effectId);
				t?.hooks?.onPriceCalculate && t.hooks.onPriceCalculate({
					piece: r,
					priceRef: o
				});
			});
		}
		return Math.max(5, o.value);
	}
}, De = class {
	static isSquarePassageBlocked(e, t, o, r) {
		if (r) return r.squareBlock.some((o) => null === o.pieceUid && o.r === e && o.c === t);
		if (o?.squares) {
			const r = `${e},${t}`, i = o.squares[r];
			if (i) {
				for (const e of i) if (Pe.getDefinition(e.id)?.modifiers?.squareBlockMovement) return !0;
			}
		}
		return !1;
	}
	static isSquareMud(e, t, o) {
		if (o?.squares) {
			const r = `${e},${t}`;
			return o.squares[r]?.some((e) => "MUD_SWAMP" === e.id) || !1;
		}
		return !1;
	}
	static getPseudoLegalMoves(e, t, o, i, s, a) {
		const c = e[t][o];
		if (!c) return [];
		const n = [], { color: d, type: p } = c;
		if (p === r.PAWN ? this.generatePawnMoves(e, t, o, c, n, i, a) : p === r.KNIGHT ? this.generateKnightMoves(e, t, o, c, n) : p === r.KING ? this.generateKingMoves(e, t, o, c, n) : this.generateSlidingMoves(e, t, o, c, n, i, a), this.applyAbilityEnhancements(e, t, o, c, n, i), i?.screenWrap && [
			[-1, -1],
			[-1, 0],
			[-1, 1],
			[0, -1],
			[0, 1],
			[1, -1],
			[1, 0],
			[1, 1]
		].forEach(([i, s]) => {
			const a = t + i, d = o + s;
			if (a < 0 || a >= 8 || d < 0 || d >= 8) {
				const t = (a + 8) % 8, o = (d + 8) % 8, i = e[t][o];
				(!i || i.color !== c.color && i.type !== r.KING) && (n.some((e) => e.r === t && e.c === o) || n.push({
					r: t,
					c: o
				}));
			}
		}), a) {
			let r = [...n];
			for (const n of a.movement) n.pieceUid === c.uid && (r = n.fn({
				board: e,
				piece: c,
				r: t,
				c: o,
				metadata: i,
				networkedMap: s
			}, r));
			return r;
		}
		{
			let r = [...n];
			const a = x.getModifiers(c, e, t, o);
			for (const n of a) n.movement && (r = n.movement({
				board: e,
				piece: c,
				r: t,
				c: o,
				metadata: i,
				networkedMap: s
			}, r));
			return r;
		}
	}
	static generatePawnMoves(e, r, i, s, a, c, n) {
		const d = s.color === t ? -1 : 1, p = r + d;
		if (p >= 0 && p < 8) {
			e[p][i] || this.isSquarePassageBlocked(p, i, c, n) || a.push({
				r: p,
				c: i
			});
			const r = s.color === t ? o : t;
			i - 1 >= 0 && e[p][i - 1]?.color === r && !this.isSquarePassageBlocked(p, i - 1, c, n) && a.push({
				r: p,
				c: i - 1
			}), i + 1 < 8 && e[p][i + 1]?.color === r && !this.isSquarePassageBlocked(p, i + 1, c, n) && a.push({
				r: p,
				c: i + 1
			});
		}
		if (c?.squares?.[`${r},${i}`]?.some((e) => "SQUARE_RAILWAY" === e.id)) {
			const t = r + 2 * d;
			!(t >= 0 && t < 8) || e[r + d][i] || e[t][i] || this.isSquarePassageBlocked(r + d, i, c, n) || this.isSquarePassageBlocked(t, i, c, n) || a.push({
				r: t,
				c: i
			});
		}
	}
	static generateKnightMoves(e, t, o, r, i) {
		const s = g[t << 3 | o];
		for (let a = 0; a < s.length; a++) {
			const t = s[a], o = t >> 3, c = 7 & t, n = e[o][c];
			n && n.color === r.color || i.push({
				r: o,
				c
			});
		}
	}
	static generateKingMoves(e, t, o, r, i) {
		const s = b[t << 3 | o];
		for (let a = 0; a < s.length; a++) {
			const t = s[a], o = t >> 3, c = 7 & t, n = e[o][c];
			n && n.color === r.color || i.push({
				r: o,
				c
			});
		}
	}
	static generateSlidingMoves(e, t, o, r, i, s, a) {
		const c = R[r.type], n = Q.has(r, "LEAP_OVER");
		for (let d = 0; d < c.length; d++) {
			let p = t + c[d][0], E = o + c[d][1], l = !1;
			for (; p >= 0 && p < 8 && E >= 0 && E < 8 && !this.isSquarePassageBlocked(p, E, s, a);) {
				const t = e[p][E];
				if (t) {
					if (t.color !== r.color && (i.push({
						r: p,
						c: E
					}), !n)) break;
					if (!n || l) break;
					l = !0;
				} else if (i.push({
					r: p,
					c: E
				}), this.isSquareMud(p, E, s)) break;
				p += c[d][0], E += c[d][1];
			}
		}
	}
	static applyAbilityEnhancements(e, o, r, i, s, a) {
		if (Q.has(i, "MOVE_SIDE") && Q.has(i, "STEP_LIMIT_1") && [
			[-1, 0],
			[1, 0],
			[0, -1],
			[0, 1]
		].forEach(([t, i]) => {
			const a = o + t, c = r + i;
			a >= 0 && a < 8 && c >= 0 && c < 8 && (e[a][c] || s.push({
				r: a,
				c
			}));
		}), Q.has(i, "MOVE_FWD_CAPTURE")) {
			const a = o + (i.color === t ? -1 : 1);
			if (a >= 0 && a < 8) {
				const t = e[a][r];
				t && t.color !== i.color && (s.some((e) => e.r === a && e.c === r) || s.push({
					r: a,
					c: r
				}));
			}
		}
	}
	static getValidMoves(e, o, r, i, s) {
		const a = e[o][r];
		if (!a) return [];
		const c = Y.isNetworked(i || { squares: {} }, a.color, o, r), n = i?.cache ? a.color === t ? i.cache.whiteNetwork : i.cache.blackNetwork : void 0;
		if (!he.canAct(a, c, e, o, r, i, n)) return [];
		let d = this.getPseudoLegalMoves(e, o, r, i, n, s);
		return s ? (d = d.filter((t) => !s.squareBlock.some((o) => null === o.pieceUid ? o.r === t.r && o.c === t.c : o.fn({
			board: e,
			piece: a,
			r: t.r,
			c: t.c,
			metadata: i
		}))), d = d.filter((t) => {
			const o = e[t.r][t.c];
			if (!o) return !0;
			if (o.color !== a.color) {
				if (he.isHidden(o, a.color, e, t.r, t.c)) return !1;
				if (s.invulnerable.some((r) => !(r.pieceUid !== o.uid && !Pe.hasSkill(a, "GENERIC_FIREWALL")) && r.fn({
					board: e,
					piece: o,
					r: t.r,
					c: t.c,
					metadata: i,
					networkedMap: n
				}, a))) return !1;
			}
			return !0;
		})) : (i && (d = d.filter((t) => !Ne.globalSquareBlockMods.some((o) => null === o.piece ? o.r === t.r && o.c === t.c : o.fn({
			board: e,
			piece: a,
			r: t.r,
			c: t.c,
			metadata: i
		})))), d = d.filter((t) => {
			const o = e[t.r][t.c];
			if (!o) return !0;
			if (o.color !== a.color) {
				if (he.isHidden(o, a.color, e, t.r, t.c)) return !1;
				if (he.isInvulnerable(o, a, e, t.r, t.c, i, n)) return !1;
			}
			return !0;
		})), d.map((e) => ({ ...e }));
	}
};
function Ce(e, t, o, r, i, s) {
	return De.getValidMoves(e, t, o, r, s);
}
function Le(e, o, r, i) {
	const s = function(e, o, r, i) {
		return r?.cache ? o === t ? r.cache.whiteControl : r.cache.blackControl : Ge(e, o, r, i).control;
	}(e, o, r, i), a = [];
	for (let t = 0; t < 8; t++) for (let i = 0; i < 8; i++) {
		const c = r?.squares?.[`${t},${i}`]?.some((s) => {
			const a = Pe.getDefinition(s.id), c = a?.modifiers?.squareBlockMovement?.({
				board: e,
				piece: null,
				r: t,
				c: i,
				metadata: r
			}), n = a?.modifiers?.blockDeployment?.({
				board: e,
				piece: null,
				r: t,
				c: i,
				metadata: r,
				color: o
			});
			return c || n;
		});
		e[t][i] || !s[t][i] || c || a.push({
			r: t,
			c: i
		});
	}
	return a;
}
function Ue(e, t, o, r) {
	if (r?.squares) {
		const e = `${t},${o}`, i = r.squares[e];
		if (i) {
			for (const t of i) if (Pe.getDefinition(t.id)?.modifiers?.squareBlockMovement) return !0;
		}
	}
	return !1;
}
function Ge(e, i, s, a) {
	const c = Array(8).fill(!1).map(() => Array(8).fill(!1)), n = Array(8).fill(!1).map(() => Array(8).fill(!1)), d = Array(8).fill(-1).map(() => Array(8).fill(-1)), p = [], E = [];
	let l = !1, u = "ALL";
	for (let t = 0; t < 8; t++) for (let o = 0; o < 8; o++) {
		const r = e[t][o];
		if (r && r.color === i) {
			const i = Pe.getModifiers(r, e, t, o);
			for (const s of i) s.globalNetworkDirection && "FORWARD" === s.globalNetworkDirection({
				board: e,
				piece: r,
				r: t,
				c: o
			}) && (u = "FORWARD"), s.globalDisableRelay?.({
				board: e,
				piece: r,
				r: t,
				c: o
			}) && (l = !0);
		}
	}
	let A = !1;
	if (a?.proxyKing && i === o) {
		let t = !1;
		e.forEach((e) => e.forEach((e) => {
			e?.type === r.KING && e.color === o && (t = !0);
		})), t || (A = !0);
	}
	if (A) for (let t = 0; t < 8; t++) for (let r = 0; r < 8; r++) {
		const i = e[t][r];
		i && i.color === o && (c[t][r] = !0, d[t][r] = 0, ke(e, t, r, c, s).forEach((e) => n[e.r][e.c] = !0));
	}
	else if (function(e, o, i, s, a, c) {
		const n = c?.activeMonarchId === N;
		for (let d = 0; d < 8; d++) for (let c = 0; c < 8; c++) {
			const p = e[d][c];
			if (p && p.color === o) {
				const o = Pe.getModifiers(p, e, d, c);
				let E = p.type === r.KING || o.some((t) => t.proxyKing?.({
					board: e,
					piece: p,
					r: d,
					c
				}) || t.networkSource?.({
					board: e,
					piece: p,
					r: d,
					c
				}));
				if (n && p.color === t) {
					const e = p.skills.some((e) => "LEGENDARY" === Pe.getDefinition(e)?.tier) || p.equippedItems?.some((e) => "LEGENDARY" === e.tier);
					(p.level >= 3 || e) && (E = !0);
				}
				E && (i[d][c] = !0, s[d][c] = 0, a.push({
					r: d,
					c
				}));
			}
		}
	}(e, i, c, d, E, s), !s?.globalJamming || s.globalJamming <= 0) (function(e, o, r, i, s, a, c, n, d, p, E) {
		let l = 0;
		for (; l < c.length;) {
			const { r: p, c: u } = c[l++], A = e[p][u], I = s[p][u], T = ke(e, p, u, r, E);
			Pe.getModifiers(A, e, p, u).forEach((t) => {
				t.networkRange && T.push(...t.networkRange({
					board: e,
					piece: A,
					r: p,
					c: u
				}));
			});
			for (const E of T) {
				if ("FORWARD" === d && !(o === t ? E.r <= p : E.r >= p)) continue;
				const l = e[E.r][E.c];
				i[E.r][E.c] = !0, l && l.color === o && !r[E.r][E.c] && (r[E.r][E.c] = !0, s[E.r][E.c] = I + 1, n || (c.push(E), a.push({
					from: {
						r: p,
						c: u
					},
					to: E
				})));
			}
		}
	})(e, i, c, n, d, p, E, l, u, 0, s);
	else for (let t = 0; t < 8; t++) for (let o = 0; o < 8; o++) {
		const a = e[t][o];
		a && a.color === i && (a.type === r.KING || Pe.hasModifier(a, "networkSource")) && ke(e, t, o, c, s).forEach((e) => n[e.r][e.c] = !0);
	}
	return function(e, t, o, i) {
		const s = /* @__PURE__ */ new Set(), a = {
			[r.PAWN]: [],
			[r.KNIGHT]: [],
			[r.BISHOP]: [],
			[r.ROOK]: [],
			[r.QUEEN]: [],
			[r.KING]: []
		};
		let c = !1;
		for (let r = 0; r < 8; r++) for (let n = 0; n < 8; n++) {
			const d = e[r][n];
			if (d && d.color === t) {
				if (Pe.getModifiers(d, e, r, n).some((t) => t.alwaysNetworked?.({
					board: e,
					piece: d,
					r,
					c: n
				})) && (o[r][n] = !0, -1 === i[r][n] && (i[r][n] = 0)), a[d.type] && a[d.type].push({
					r,
					c: n
				}), o[r][n]) {
					const e = Pe.getAllSkills(d);
					(e.includes("PAWN_SWARM") || e.includes("GENERIC_HIVE_KERNEL")) && s.add(d.type);
				}
				d.equippedItems?.some((e) => "EQ_SWARM_INTELLIGENCE" === e.effectId) && (c = !0);
			}
		}
		c && a[r.PAWN].forEach((s) => {
			let a = !1;
			for (const [o, i] of [
				[-1, -1],
				[-1, 0],
				[-1, 1],
				[0, -1],
				[0, 1],
				[-1, -1],
				[-1, 1],
				[-1, 1]
			]) {
				const c = s.r + o, n = s.c + i;
				if (Ke(c, n)) {
					const o = e[c][n];
					if (o && o.color === t && o.type === r.PAWN) {
						a = !0;
						break;
					}
				}
			}
			a && !o[s.r][s.c] && (o[s.r][s.c] = !0, i[s.r][s.c] = 0);
		});
		s.forEach((e) => {
			a[e].forEach((e) => {
				o[e.r][e.c] || (o[e.r][e.c] = !0, i[e.r][e.c] = 0);
			});
		});
	}(e, i, c, d), {
		networked: c,
		control: n,
		connections: p,
		depths: d
	};
}
function ke(e, o, s, a, c) {
	const n = e[o][s];
	if (!n) return [];
	if (n.type !== r.KING && n.statuses?.some((e) => e.id === i.FROZEN || e.id === i.PETRIFIED)) return [];
	const d = [], p = n.type, E = n.color;
	if (p === r.KING || p === r.KNIGHT) {
		const e = R[p];
		for (let t = 0; t < e.length; t++) {
			const r = o + e[t][0], i = s + e[t][1];
			r >= 0 && r < 8 && i >= 0 && i < 8 && d.push({
				r,
				c: i
			});
		}
	} else if (p === r.PAWN) {
		const e = E === t ? -1 : 1;
		o + e >= 0 && o + e < 8 && s - 1 >= 0 && d.push({
			r: o + e,
			c: s - 1
		}), o + e >= 0 && o + e < 8 && s + 1 < 8 && d.push({
			r: o + e,
			c: s + 1
		});
	} else {
		const t = R[p];
		for (let r = 0; r < t.length; r++) {
			let i = o + t[r][0], a = s + t[r][1];
			for (; i >= 0 && i < 8 && a >= 0 && a < 8 && !Ue(0, i, a, c) && (d.push({
				r: i,
				c: a
			}), !e[i][a]);) i += t[r][0], a += t[r][1];
		}
	}
	const l = Pe.getModifiers(n, e, o, s);
	let u = [...d];
	for (const t of l) t.movement && (u = t.movement({
		board: e,
		piece: n,
		r: o,
		c: s,
		networkedMap: a,
		isControlSquares: !0
	}, u));
	return c?.screenWrap && [
		[-1, -1],
		[-1, 0],
		[-1, 1],
		[0, -1],
		[0, 1],
		[1, -1],
		[1, 0],
		[1, 1]
	].forEach(([e, t]) => {
		const r = o + e, i = s + t;
		if (r < 0 || r >= 8 || i < 0 || i >= 8) {
			const e = (r + 8) % 8, t = (i + 8) % 8;
			u.some((o) => o.r === e && o.c === t) || u.push({
				r: e,
				c: t
			});
		}
	}), u;
}
function Ke(e, t) {
	return e >= 0 && e < 8 && t >= 0 && t < 8;
}
const ge = [
	{
		id: "GENERIC_ALGORITHM_SWAP",
		name: "算法共享",
		tier: "RARE",
		description: "主动：可以与周围 1 格内的任意一名非王友军互换位置。",
		activeSpec: {
			targeting: "target",
			getAlternatives: (e, t, o, i) => {
				const s = [];
				for (const [a, c] of [
					[-1, 0],
					[1, 0],
					[0, -1],
					[0, 1],
					[-1, -1],
					[-1, 1],
					[1, -1],
					[1, 1]
				]) {
					const n = t + a, d = o + c;
					if (n >= 0 && n < 8 && d >= 0 && d < 8) {
						const t = e[n][d];
						t && t.color === i.color && t.type !== r.KING && s.push({
							pos: {
								r: n,
								c: d
							},
							value: {
								r: n,
								c: d
							}
						});
					}
				}
				return s;
			},
			getAoE: (e, t, o, r, i) => i ? [{
				r: i.r,
				c: i.c
			}] : [],
			execute: (e, t, o, r, i, s) => {
				i && (s({
					type: "SWAP_PIECES",
					posA: {
						r: t,
						c: o
					},
					posB: i
				}), s({
					type: "SHOW_TEXT",
					text: "Algorithm Swap",
					textKey: "LOG_ALGORITHM_SWAP",
					style: "system",
					pos: i
				}));
			}
		}
	},
	{
		id: "GENERIC_BACKUP_BUFFER",
		name: "应急电池",
		tier: "RARE",
		description: "当该棋子断开网络连接时，它不会立即冻结，而是可以继续自由行动 1 个回合。",
		hooks: { onTurnStart: ({ board: e, piece: t, r: o, c: r, emit: s, metadata: a }) => {
			const { networked: c } = Ge(e, t.color, a);
			if (c[o][r]) s({
				type: "UPDATE_ROSTER_PIECE",
				pieceUid: t.uid,
				updates: { metadata: {
					...t.metadata,
					backupBuffer: 1
				} }
			});
			else {
				const e = t.metadata?.backupBuffer || 0;
				e > 0 && (s({
					type: "UPDATE_ROSTER_PIECE",
					pieceUid: t.uid,
					updates: { metadata: {
						...t.metadata,
						backupBuffer: e - 1
					} }
				}), s({
					type: "ADD_STATUS",
					pos: {
						r: o,
						c: r
					},
					statusId: i.BACKUP_BUFFER_ACTIVE,
					duration: 2
				}), s({
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
		description: "被动：彻底免疫地图上所有环境负面效果及负面状态（如重力锁定、感染等）。",
		hooks: {}
	},
	{
		id: "GENERIC_SHARPEN",
		name: "锋利算法",
		tier: "COMMON",
		description: "吃子后，额外获得 3 金币。",
		hooks: { onKill: ({ piece: e, emit: o }) => {
			e.color === t && o({
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
		description: "被攻击死亡时， 50% 概率触发“闪避”，原地消失并随机出现在相邻空格。",
		hooks: { onDeath: ({ board: e, r: t, c: o, piece: r, cancelAction: i, emit: s, prng: a }) => {
			if (a && a.next() < .5) {
				const c = [
					[-1, 0],
					[1, 0],
					[0, -1],
					[0, 1],
					[-1, -1],
					[-1, 1],
					[1, -1],
					[1, 1]
				].sort(() => a.next() - .5);
				for (const [a, n] of c) {
					const c = t + a, d = o + n;
					if (c >= 0 && c < 8 && d >= 0 && d < 8 && !e[c][d]) {
						i?.(), s({
							type: "ANIMATE",
							name: "LENS_DISAPPEAR",
							pos: {
								r: t,
								c: o
							},
							duration: 300
						}), s({
							type: "DELAY",
							duration: 150
						}), s({
							type: "REMOVE_PIECE",
							pos: {
								r: t,
								c: o
							}
						}), s({
							type: "DELAY",
							duration: 120
						}), s({
							type: "ANIMATE",
							name: "LENS_APPEAR",
							pos: {
								r: c,
								c: d
							},
							duration: 400
						}), s({
							type: "SPAWN",
							pos: {
								r: c,
								c: d
							},
							piece: {
								...r,
								statuses: []
							}
						}), s({
							type: "SHOW_TEXT",
							text: "Evaded!",
							textKey: "LOG_CHAFF_EVADE",
							style: "system",
							pos: {
								r: c,
								c: d
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
		description: "主动：将该棋子撤回库存（保留等级和属性）。",
		activeSpec: {
			targeting: "self",
			usesKey: "recallUses",
			maxUses: 1,
			execute: (e, t, o, r, i, s) => {
				(r.metadata?.recallUses || 0) >= 1 || (s({
					type: "MODIFY_RESERVE",
					color: r.color,
					pieceType: r.type,
					amount: 1
				}), s({
					type: "UNDEPLOY_PIECE",
					uid: r.uid
				}), s({
					type: "REMOVE_PIECE",
					pos: {
						r: t,
						c: o
					}
				}), s({
					type: "UPDATE_ROSTER_PIECE",
					pieceUid: r.uid,
					updates: { metadata: {
						...r.metadata,
						recallUses: (r.metadata?.recallUses || 0) + 1
					} }
				}), s({
					type: "SHOW_TEXT",
					text: "Recall Successful",
					textKey: "LOG_RECALL_SUCCESS",
					style: "system",
					pos: {
						r: t,
						c: o
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
		description: "被动：被该棋子攻击范围覆盖的敌方棋子，会被施加“沉默”（无法触发任何非基础技能）。",
		hooks: { onTurnStart: ({ board: e, r: o, c: s, piece: a, emit: c }) => {
			const n = a.type, d = a.color, p = [];
			if (n === r.PAWN) {
				const e = d === t ? -1 : 1;
				o + e >= 0 && o + e < 8 && (s > 0 && p.push({
					r: o + e,
					c: s - 1
				}), s < 7 && p.push({
					r: o + e,
					c: s + 1
				}));
			} else if (n === r.KNIGHT || n === r.KING) {
				const e = R[n];
				for (const [t, r] of e) {
					const e = o + t, i = s + r;
					e >= 0 && e < 8 && i >= 0 && i < 8 && p.push({
						r: e,
						c: i
					});
				}
			} else {
				const t = R[n];
				for (const [r, i] of t) {
					let t = o + r, a = s + i;
					for (; t >= 0 && t < 8 && a >= 0 && a < 8 && (p.push({
						r: t,
						c: a
					}), !e[t][a]);) t += r, a += i;
				}
			}
			p.forEach((t) => {
				const o = e[t.r][t.c];
				o && o.color !== a.color && o.type !== r.KING && (c({
					type: "ADD_STATUS",
					pos: t,
					statusId: i.SILENCED,
					duration: 2
				}), c({
					type: "ANIMATE",
					name: "DATA_GLITCH",
					pos: t,
					duration: 400
				}));
			});
		} }
	},
	{
		id: "GENERIC_MIRRORING",
		name: "镜像协议",
		tier: "EPIC",
		description: "当该棋子相邻有友军时，能复制友军的基础移动逻辑（仅限基础位移，冷却 3 回合）。",
		modifiers: { movement: (e, o) => {
			const { board: i, r: s, c: a, piece: c, isControlSquares: n } = e;
			if ((c.metadata?.mirrorCd || 0) > 0) return o;
			let d = null;
			for (const [t, p] of [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1],
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			]) {
				const e = s + t, o = a + p;
				if (e >= 0 && e < 8 && o >= 0 && o < 8) {
					const t = i[e][o];
					if (t && t.color === c.color && t.type !== r.KING && t.type !== c.type) {
						d = t.type;
						break;
					}
				}
			}
			if (d) {
				const e = (e, t, r) => {
					let d = s + e, p = a + t;
					for (; d >= 0 && d < 8 && p >= 0 && p < 8;) {
						const s = i[d][p];
						if (s && s.color === c.color && !n || o.push({
							r: d,
							c: p
						}), s || !r) break;
						d += e, p += t;
					}
				};
				if (d === r.PAWN) {
					const e = c.color === t ? -1 : 1;
					s + e >= 0 && s + e < 8 && (i[s + e][a] || o.push({
						r: s + e,
						c: a
					}), a > 0 && i[s + e][a - 1] && i[s + e][a - 1].color !== c.color && o.push({
						r: s + e,
						c: a - 1
					}), a < 7 && i[s + e][a + 1] && i[s + e][a + 1].color !== c.color && o.push({
						r: s + e,
						c: a + 1
					}));
				} else d === r.KNIGHT ? R.N.forEach(([t, o]) => e(t, o, !1)) : (d !== r.BISHOP && d !== r.QUEEN || R.B.forEach(([t, o]) => e(t, o, !0)), d !== r.ROOK && d !== r.QUEEN || R.R.forEach(([t, o]) => e(t, o, !0)));
			}
			return o;
		} },
		hooks: {
			onAfterMove: ({ piece: e, r: t, c: o, from: r, emit: i }) => {
				!r || r.r === t && r.c === o || e.metadata?.mirrorCd && 0 !== e.metadata.mirrorCd || i({
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
		description: "当该棋子被吃掉时，附身在攻击者身上，使攻击者变为“被寄生”状态（极易掉线）。",
		hooks: { onDeath: ({ attacker: e, emit: t }) => {
			e && e.type !== r.KING && t({
				type: "ADD_STATUS",
				targetId: e.id,
				statusId: i.PARASITIZED,
				duration: 99
			});
		} }
	},
	{
		id: "GENERIC_HIVE_KERNEL",
		name: "蜂群核心",
		tier: "LEGENDARY",
		description: "只要该棋子联网，全场所有与其同类型的棋子即使断网也能行动。"
	},
	{
		id: "GENERIC_FIREWALL",
		name: "终极防火墙",
		tier: "LEGENDARY",
		description: "被动：限制最大移动距离为 3 格。免疫远程吃子、强行位移、改变颜色或沉默。国王不可装备。",
		modifiers: {
			isSteady: () => !0,
			movement: (e, t) => t.filter((t) => Math.max(Math.abs(t.r - e.r), Math.abs(t.c - e.c)) <= 3)
		},
		hooks: { onTurnStart: ({ piece: e, r: t, c: o, emit: r }) => {
			const s = [
				i.SILENCED,
				i.BETRAYED,
				i.SKILL_LOCKED
			];
			(e.statuses || []).forEach((e) => {
				s.includes(e.id) && r({
					type: "REMOVE_STATUS",
					pos: {
						r: t,
						c: o
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
		description: "被动：敌方的“兵”无法吃掉该棋子。",
		modifiers: { invulnerable: ({ r: e, c: t }, o) => o.type === r.PAWN }
	},
	{
		id: "GENERIC_LOGIC_BOMB",
		name: "逻辑炸弹",
		tier: "RARE",
		description: "被动：当该棋子被吃掉时，清除击杀者身上的所有正面状态（护盾、过载），并使其永久“沉默”。",
		hooks: { onDeath: ({ attacker: e, attackerPos: t, emit: o }) => {
			if (e && t) {
				const r = [i.SHIELDED, i.OVERLOADED];
				(e.statuses || []).forEach((e) => {
					r.includes(e.id) && o({
						type: "REMOVE_STATUS",
						pos: t,
						statusId: e.id
					});
				}), o({
					type: "ADD_STATUS",
					pos: t,
					statusId: i.SILENCED,
					duration: 99
				}), o({
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
		description: "被动：吃掉带有技能的敌方棋子时，额外获得 10 金币。",
		hooks: { onKill: ({ victim: e, piece: o, emit: r }) => {
			e && o.color === t && e.skills && e.skills.length > 0 && (r({
				type: "MODIFY_GOLD",
				amount: 10,
				reason: "DATA_MINING"
			}), r({
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
		description: "被动：吃掉敌方棋子后，下回合该棋子的移动范围会叠加“被击杀者”的原始移动逻辑。",
		hooks: {
			onKill: ({ piece: e, victim: t, r: o, c: r, emit: i }) => {
				t && i({
					type: "SPAWN",
					pos: {
						r: o,
						c: r
					},
					piece: {
						...e,
						metadata: {
							...e.metadata,
							recursiveType: t.type,
							recursiveTimer: 1
						}
					}
				});
			},
			onTurnStart: ({ piece: e, r: t, c: o, emit: r }) => {
				if (e.metadata?.recursiveTimer > 0) {
					const i = e.metadata.recursiveTimer - 1;
					r({
						type: "SPAWN",
						pos: {
							r: t,
							c: o
						},
						piece: {
							...e,
							metadata: {
								...e.metadata,
								recursiveTimer: i,
								recursiveType: 0 === i ? null : e.metadata.recursiveType
							}
						}
					});
				}
			}
		},
		modifiers: { movement: (e, o) => {
			const { board: i, piece: s, r: a, c, isControlSquares: n } = e, d = s.metadata?.recursiveType;
			if (!d) return o;
			const p = [], E = s.color, l = (e, t, o) => {
				let r = a + e, s = c + t;
				for (; r >= 0 && r < 8 && s >= 0 && s < 8;) {
					const a = i[r][s];
					if (a && a.color === E && !n || p.push({
						r,
						c: s
					}), a || !o) break;
					r += e, s += t;
				}
			};
			if (d === r.PAWN) {
				const e = E === t ? -1 : 1;
				a + e >= 0 && a + e < 8 && (i[a + e][c] || p.push({
					r: a + e,
					c
				}), c > 0 && i[a + e][c - 1] && i[a + e][c - 1].color !== E && p.push({
					r: a + e,
					c: c - 1
				}), c < 7 && i[a + e][c + 1] && i[a + e][c + 1].color !== E && p.push({
					r: a + e,
					c: c + 1
				}));
			} else d === r.KNIGHT ? R.N.forEach(([e, t]) => l(e, t, !1)) : d === r.BISHOP ? R.B.forEach(([e, t]) => l(e, t, !0)) : d === r.ROOK ? R.R.forEach(([e, t]) => l(e, t, !0)) : d !== r.QUEEN && d !== r.KING || R.Q.forEach(([e, t]) => l(e, t, d === r.QUEEN));
			return [...o, ...p];
		} }
	},
	{
		id: "GENERIC_SCRAP_RECYCLE",
		name: "废料回收",
		tier: "COMMON",
		description: "被动：每当该棋子移动而不吃子时获得 1 金币（每关上限 10 金币）。",
		hooks: { onAfterMove: ({ piece: e, victim: o, r, c: i, emit: s }) => {
			if (e.color === t && !o) {
				const t = e.metadata?.scrapGold || 0;
				t < 10 && (s({
					type: "MODIFY_GOLD",
					amount: 1,
					reason: "SCRAP_RECYCLE"
				}), s({
					type: "SPAWN",
					pos: {
						r,
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
], be = [
	{
		id: "SMOKE",
		name: "烟幕地块",
		isInternal: !0,
		tier: "COMMON",
		description: "地块上的棋子免疫1格以外的远程攻击。",
		modifiers: { invulnerable: ({ board: e, r: t, c: o }, r) => {
			const i = C.findPieces(e, (e) => e.id === r.id)[0], s = i ? i.r : r._lastPos?.r ?? -1, a = i ? i.c : r._lastPos?.c ?? -1;
			return -1 !== s && -1 !== a && Math.max(Math.abs(s - t), Math.abs(a - o)) > 1;
		} }
	},
	{
		id: "BISHOP_AFTERSHOCK_SQUARE",
		name: "余震区域",
		isInternal: !0,
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
		tier: "LEGENDARY",
		description: "",
		modifiers: {
			isSteady: () => !0,
			movement: (e, t) => e.isControlSquares ? t : [],
			pieceValueOverride: ({ piece: e }) => e.metadata?.isPetrified ? 0 : 5e4,
			invulnerable: ({ piece: e }) => !!e.metadata?.isPetrified,
			networkRange: ({ piece: e, r: t, c: o }) => {
				if (e.metadata?.isPetrified) {
					const e = [];
					for (let r = -1; r <= 1; r++) for (let i = -1; i <= 1; i++) e.push({
						r: t + r,
						c: o + i
					});
					return e;
				}
				return [];
			}
		},
		hooks: { onDeath: ({ piece: e, emit: t, cancelAction: o, r, c: s }) => {
			e.metadata?.isPetrified || (o?.(), t({
				type: "UPDATE_ROSTER_PIECE",
				pieceUid: e.uid,
				updates: {
					metadata: {
						...e.metadata,
						isPetrified: !0
					},
					statuses: [{
						id: i.PETRIFIED,
						duration: 99
					}, {
						id: i.FLATTENED,
						duration: 99
					}]
				}
			}), t({
				type: "SHOW_TEXT",
				text: "\"Goodbye, Swallow.\"",
				textKey: "LOG_SWALLOW_GOODBYE",
				style: "system",
				pos: {
					r,
					c: s
				}
			}));
		} }
	},
	{
		id: "ROOTED",
		name: "定身",
		isInternal: !0,
		tier: "COMMON",
		description: "",
		modifiers: { movement: (e, t) => e.isControlSquares ? t : [] }
	},
	{
		id: "CROSS_AURA",
		name: "十字步",
		isInternal: !0,
		tier: "COMMON",
		description: "获得十字方向 1 格的移动能力。",
		modifiers: { movement: (e, t) => {
			const { r: o, c: r, board: i, piece: s, isControlSquares: a } = e;
			return [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1]
			].forEach(([e, c]) => {
				const n = o + e, d = r + c;
				if (n >= 0 && n < 8 && d >= 0 && d < 8) {
					const e = i[n][d];
					e && e.color === s.color && !a || t.push({
						r: n,
						c: d
					});
				}
			}), t;
		} }
	},
	{
		id: "COMMAND_AURA",
		name: "统率光环",
		isInternal: !0,
		tier: "COMMON",
		description: "获得全向 1 格移动能力。",
		modifiers: { movement: (e, t) => {
			const { r: o, c: r, board: i, piece: s, isControlSquares: a } = e;
			for (const [c, n] of [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1],
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			]) {
				const e = o + c, d = r + n;
				if (e >= 0 && e < 8 && d >= 0 && d < 8 && !t.some((t) => t.r === e && t.c === d)) {
					const o = i[e][d];
					o && o.color === s.color && !a || t.push({
						r: e,
						c: d
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
		tier: "COMMON",
		description: "移动范围受限。",
		modifiers: { movement: ({ r: e, c: t }, o) => o.filter((o) => Math.abs(o.r - e) <= 2 && Math.abs(o.c - t) <= 2) }
	},
	{
		id: "GRACE_LIMIT",
		name: "优雅限制",
		isInternal: !0,
		tier: "COMMON",
		description: "移动范围限制为 1 格",
		modifiers: { movement: ({ r: e, c: t }, o) => o.filter((o) => Math.abs(o.r - e) <= 1 && Math.abs(o.c - t) <= 1) }
	},
	{
		id: "CANNOT_CAPTURE",
		name: "虚化",
		isInternal: !0,
		tier: "COMMON",
		description: "处于镜像位面，无法吃子",
		modifiers: { movement: ({ board: e }, t) => t.filter((t) => !e[t.r][t.c]) }
	},
	{
		id: "GODHOOD_LINK",
		name: "神权链接",
		isInternal: !0,
		tier: "LEGENDARY",
		description: "被绝对王权强制连通。",
		modifiers: { alwaysNetworked: () => !0 }
	},
	{
		id: "CHARISMA_BUFF",
		name: "宽宏增益",
		isInternal: !0,
		tier: "COMMON",
		description: "获得两格全向滑行移动。",
		modifiers: { movement: (e, t) => {
			const { r: o, c: r, board: i, piece: s, isControlSquares: a } = e, c = [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1],
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			], n = [];
			for (const [d, p] of c) for (let e = 1; e <= 2; e++) {
				const t = o + d * e, c = r + p * e;
				if (!(t >= 0 && t < 8 && c >= 0 && c < 8)) break;
				{
					const e = i[t][c];
					if (e) {
						(e.color !== s.color || a) && n.push({
							r: t,
							c
						});
						break;
					}
					n.push({
						r: t,
						c
					});
				}
			}
			return n;
		} }
	},
	{
		id: "AURA_REWARD",
		name: "恩赏光环",
		isInternal: !0,
		tier: "COMMON",
		description: "吃子时额外获得 5 金币。",
		hooks: { onKill: ({ piece: e, emit: o }) => {
			e.color === t && o({
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
		tier: "COMMON",
		description: "被吃时反伤击杀者。",
		hooks: { onDeath: ({ emit: e, attackerPos: t, attacker: o }) => {
			(t || o) && (e({
				type: "KILL",
				pos: t,
				targetId: o?.id
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
		tier: "COMMON",
		description: "落点冻结周围敌军。",
		hooks: { onAfterMove: ({ board: e, r: t, c: o, piece: s, emit: a }) => {
			for (const [c, n] of [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1],
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			]) {
				const d = t + c, p = o + n;
				if (d >= 0 && d < 8 && p >= 0 && p < 8) {
					const t = e[d][p];
					t && t.color !== s.color && t.type !== r.KING && a({
						type: "ADD_STATUS",
						pos: {
							r: d,
							c: p
						},
						statusId: i.FROZEN,
						duration: 2
					});
				}
			}
		} }
	},
	{
		id: "HOLY_DOMAIN_AURA",
		name: "圣域光环",
		isInternal: !0,
		tier: "COMMON",
		description: "免疫一切负面状态。"
	},
	{
		id: "ZEALOT_BUFF",
		name: "狂热增益",
		isInternal: !0,
		tier: "EPIC",
		description: "获得滑行移动能力。",
		modifiers: { movement: (e, t) => {
			const { r: o, c: r, board: i, piece: s, isControlSquares: a } = e;
			return [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1],
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			].forEach(([e, c]) => {
				let n = o + e, d = r + c;
				for (; n >= 0 && n < 8 && d >= 0 && d < 8;) {
					const o = i[n][d];
					if (o) {
						(o.color !== s.color || a) && t.push({
							r: n,
							c: d
						});
						break;
					}
					t.push({
						r: n,
						c: d
					}), n += e, d += c;
				}
			}), t;
		} }
	},
	{
		id: "BACKUP_BUFFER_ACTIVE",
		name: "应急电池激活",
		isInternal: !0,
		tier: "COMMON",
		description: "临时无视断网",
		modifiers: { bypassFrozen: () => !0 }
	},
	{
		id: "PARASITIZED",
		name: "被寄生",
		isInternal: !0,
		tier: "COMMON",
		description: "每回合有 50% 概率断网/冻结。",
		hooks: { onTurnStart: ({ r: e, c: t, emit: o, prng: r }) => {
			r && r.next() < .5 && (o({
				type: "ADD_STATUS",
				pos: {
					r: e,
					c: t
				},
				statusId: i.FROZEN,
				duration: 2
			}), o({
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
		tier: "COMMON",
		description: "每回合蔓延。若宿主处于联网状态，吞噬部分金币。",
		hooks: { onTurnStart: ({ board: e, r: o, c: r, piece: s, emit: a, metadata: c }) => {
			const { networked: n } = Ge(e, s.color, c);
			n[o][r] && s.color === t && (a({
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
					r: o,
					c: r
				}
			}));
			for (const [t, d] of [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1],
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			]) {
				const s = o + t, c = r + d;
				if (s >= 0 && s < 8 && c >= 0 && c < 8) {
					const t = e[s][c];
					t && !t.statuses?.some((e) => e.id === i.PETRIFIED || e.id === i.INFECTED) && a({
						type: "ADD_STATUS",
						pos: {
							r: s,
							c
						},
						statusId: i.INFECTED,
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
		tier: "COMMON",
		description: "敌人看不见棋子实体，但能看到其威胁区。"
	},
	{
		id: "GRAVITY_LOCKED",
		name: "重力束缚",
		isInternal: !0,
		tier: "COMMON",
		description: "移动力受限",
		modifiers: { movement: ({ r: e, c: t }, o) => o.filter((o) => Math.abs(o.r - e) <= 1 && Math.abs(o.c - t) <= 1) }
	},
	{
		id: "VOID_FISSURE_SQUARE",
		name: "虚空废墟",
		isInternal: !0,
		tier: "LEGENDARY",
		description: "永久损毁的地块，无法停留。",
		modifiers: { squareBlockMovement: () => !0 }
	},
	{
		id: "SQUARE_RAILWAY",
		name: "铁轨地块",
		isInternal: !0,
		tier: "COMMON",
		description: "铁轨地块"
	},
	{
		id: "IRON_CURTAIN",
		name: "铁幕地块",
		isInternal: !0,
		tier: "LEGENDARY",
		description: "铁幕地块"
	},
	{
		id: "SQ_AFTERIMAGE",
		name: "残影地块",
		isInternal: !0,
		tier: "RARE",
		description: "残影地块"
	},
	{
		id: "SMOKE_SCREEN",
		name: "烟幕",
		isInternal: !0,
		tier: "COMMON",
		description: "免疫来自 1 格以外的远程攻击。",
		modifiers: { invulnerable: ({ r: e, c: t }, o) => {
			const r = o._lastPos?.r, i = o._lastPos?.c;
			return void 0 !== r && void 0 !== i && Math.max(Math.abs(r - e), Math.abs(i - t)) > 1;
		} }
	},
	{
		id: "RUSTED",
		name: "锈蚀",
		isInternal: !0,
		tier: "COMMON",
		description: "无法吃子",
		modifiers: { movement: ({ board: e }, t) => t.filter((t) => !e[t.r][t.c]) }
	},
	{
		id: "GOLD_MAGNET",
		name: "金币磁铁",
		isInternal: !0,
		tier: "COMMON",
		description: "每移动一格获得金币",
		hooks: { onAfterMove: ({ from: e, r: t, c: o, emit: r }) => {
			e && r({
				type: "MODIFY_GOLD",
				amount: Math.abs(t - e.r) + Math.abs(o - e.c),
				reason: "MAGNET"
			});
		} }
	},
	{
		id: "BARRICADE",
		name: "障碍物",
		isInternal: !0,
		tier: "COMMON",
		description: "阻挡移动",
		modifiers: { squareBlockMovement: () => !0 }
	},
	{
		id: "JAMMING_TOWER",
		name: "信号塔",
		isInternal: !0,
		tier: "EPIC",
		description: "提供信号源",
		modifiers: { networkSource: () => !0 }
	},
	{
		id: "FLATTENED",
		name: "扁平化",
		isInternal: !0,
		tier: "COMMON",
		description: "允许友军停留在该格"
	},
	{
		id: "VOID_ANCHOR",
		name: "虚空锚点",
		isInternal: !0,
		tier: "RARE",
		description: "封锁地块",
		modifiers: { squareBlockMovement: () => !0 }
	},
	{
		id: "PORTAL_ENTRY",
		name: "传送门",
		isInternal: !0,
		tier: "RARE",
		description: "传送入口"
	},
	{
		id: "SHIELDED",
		name: "护盾",
		isInternal: !0,
		tier: "COMMON",
		description: "抵消一次伤害",
		hooks: { onDeath: ({ cancelAction: e, emit: t, r: o, c: r }) => {
			t({
				type: "PLAY_SOUND",
				soundId: "SHIELD"
			}), t({
				type: "REMOVE_STATUS",
				pos: {
					r: o,
					c: r
				},
				statusId: i.SHIELDED
			}), e?.();
		} }
	},
	{
		id: "SQUARE_BASTION_FIELD",
		name: "堡垒力场",
		isInternal: !0,
		tier: "COMMON",
		description: "为地块上的友军提供远程攻击免疫。",
		modifiers: { invulnerable: ({ board: e, r: t, c: o }, i) => {
			if ([
				r.QUEEN,
				r.ROOK,
				r.BISHOP
			].includes(i.type)) {
				const r = C.findPieces(e, (e) => e === i)[0];
				if (r && Math.max(Math.abs(r.r - t), Math.abs(r.c - o)) > 1) return !0;
			}
			return !1;
		} }
	},
	{
		id: "SUPPLY_DEPOT_SQUARE",
		name: "补给地块",
		isInternal: !0,
		tier: "COMMON",
		description: "在此部署返还金币",
		hooks: { onDeploy: ({ r: e, c: t, board: o, emit: r }) => {
			const i = C.findPieces(o, (e) => e.skills.includes("ROOK_SUPPLY_DEPOT"))[0]?.piece;
			if (i && (i.metadata?.supplyGoldEarned || 0) < 30) {
				const o = i.metadata?.supplyGoldEarned || 0;
				r({
					type: "MODIFY_GOLD",
					amount: 5,
					reason: "SUPPLY_DEPOT"
				}), r({
					type: "UPDATE_ROSTER_PIECE",
					pieceUid: i.uid,
					updates: { metadata: {
						...i.metadata,
						supplyGoldEarned: o + 5
					} }
				}), r({
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
		tier: "LEGENDARY",
		description: "每隔 5 回合，轰炸棋盘特定区域。",
		hooks: { onTurnStart: ({ board: e, piece: t, emit: o, prng: i }) => {
			const s = t.metadata?.erasureTimer || 1, a = t.metadata?.erasureTarget || {
				r: 4,
				c: 4
			};
			if (3 === s) {
				o({
					type: "PLAY_SOUND",
					soundId: "HAZARD_WARNING"
				});
				for (let e = -1; e <= 1; e++) for (let t = -1; t <= 1; t++) {
					const r = a.r + e, i = a.c + t;
					r >= 0 && r < 8 && i >= 0 && i < 8 && o({
						type: "SET_SQUARE",
						pos: {
							r,
							c: i
						},
						status: {
							id: "DANGER_ZONE",
							duration: 4
						}
					});
				}
				o({
					type: "SHOW_TEXT",
					text: "Orbital lock detected: Charging 50%",
					textKey: "LOG_RAILGUN_LOCK_50",
					style: "danger"
				}), o({
					type: "UPDATE_ROSTER_PIECE",
					pieceUid: t.uid,
					updates: { metadata: {
						...t.metadata,
						erasureTimer: 4
					} }
				});
			} else if (4 === s) {
				o({
					type: "PLAY_SOUND",
					soundId: "HAZARD_WARNING"
				});
				for (let e = -1; e <= 1; e++) for (let t = -1; t <= 1; t++) {
					const r = a.r + e, i = a.c + t;
					r >= 0 && r < 8 && i >= 0 && i < 8 && o({
						type: "SET_SQUARE",
						pos: {
							r,
							c: i
						},
						status: {
							id: "DANGER_ZONE",
							duration: 2
						}
					});
				}
				o({
					type: "SHOW_TEXT",
					text: "Warning: Orbital Cannon locked! Charging 100% Evacuate!",
					textKey: "LOG_RAILGUN_LOCK_100",
					style: "danger"
				}), o({
					type: "UPDATE_ROSTER_PIECE",
					pieceUid: t.uid,
					updates: { metadata: {
						...t.metadata,
						erasureTimer: 5
					} }
				});
			} else if (5 === s) {
				o({
					type: "PLAY_SOUND",
					soundId: "ELECTRIC_SHOCK"
				}), o({
					type: "ANIMATE",
					name: "SCREEN_SHAKE",
					duration: 400
				});
				for (let t = -1; t <= 1; t++) for (let i = -1; i <= 1; i++) {
					const s = a.r + t, c = a.c + i;
					s >= 0 && s < 8 && c >= 0 && c < 8 && (o({
						type: "ANIMATE",
						name: "ION_FIRE",
						pos: {
							r: s,
							c
						},
						duration: 500,
						visualMeta: { delayBefore: 100 * (t + 1) }
					}), e[s][c] && e[s][c]?.type !== r.KING && o({
						type: "KILL",
						pos: {
							r: s,
							c
						}
					}), o({
						type: "REMOVE_SQUARE",
						pos: {
							r: s,
							c
						},
						statusId: "DANGER_ZONE"
					}));
				}
				if (i) {
					const e = {
						r: Math.floor(6 * i.next()) + 1,
						c: Math.floor(6 * i.next()) + 1
					};
					o({
						type: "UPDATE_ROSTER_PIECE",
						pieceUid: t.uid,
						updates: { metadata: {
							...t.metadata,
							erasureTimer: 1,
							erasureTarget: e
						} }
					});
				}
			} else o({
				type: "UPDATE_ROSTER_PIECE",
				pieceUid: t.uid,
				updates: { metadata: {
					...t.metadata,
					erasureTimer: s + 1
				} }
			});
		} },
		getDisplayStatus: (e, t) => {
			const o = 5 - (e.metadata?.erasureTimer || 1);
			return 0 === o ? {
				text: t("railgunFiring"),
				colorClass: "text-red-500 animate-pulse"
			} : {
				text: t("railgunCountdown", { n: o }),
				colorClass: o <= 2 ? "text-orange-400 font-bold" : "text-slate-400"
			};
		}
	},
	{
		id: "FAKE_KING_TRAIT",
		name: "大明代宗",
		isInternal: !0,
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
		tier: "LEGENDARY",
		description: "满级主力。死后游戏结束。"
	},
	{
		id: "LOUIS_ABSOLUTE_CORONA",
		name: "绝对日冕",
		isInternal: !0,
		tier: "LEGENDARY",
		description: "信号覆盖 5x5，但无法通过友军中继。进入范围的敌军被施加封印。",
		modifiers: {
			networkRange: ({ r: e, c: t }) => {
				const o = [];
				for (let r = -2; r <= 2; r++) for (let i = -2; i <= 2; i++) e + r >= 0 && e + r < 8 && t + i >= 0 && t + i < 8 && o.push({
					r: e + r,
					c: t + i
				});
				return o;
			},
			globalDisableRelay: () => !0
		},
		hooks: { onTurnStart: ({ board: e, r: t, c: o, piece: s, emit: a }) => {
			for (let c = -2; c <= 2; c++) for (let n = -2; n <= 2; n++) {
				const d = t + c, p = o + n;
				if (d >= 0 && d < 8 && p >= 0 && p < 8) {
					const t = e[d][p];
					t && t.color !== s.color && t.type !== r.KING && a({
						type: "ADD_STATUS",
						pos: {
							r: d,
							c: p
						},
						statusId: i.SKILL_LOCKED,
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
		tier: "EPIC",
		description: "获得全向 2 格移动能力。",
		modifiers: { movement: (e, t) => {
			const { board: o, r, c: i, piece: s, isControlSquares: a } = e, c = [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1],
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			], n = [];
			for (const [d, p] of c) for (let e = 1; e <= 2; e++) {
				const t = r + d * e, c = i + p * e;
				if (!(t >= 0 && t < 8 && c >= 0 && c < 8)) break;
				{
					const e = o[t][c];
					if (e) {
						(e.color !== s.color || a) && n.push({
							r: t,
							c
						});
						break;
					}
					n.push({
						r: t,
						c
					});
				}
			}
			return n;
		} }
	},
	{
		id: "RICHARD_FORWARD_ONLY",
		name: "单向远征",
		isInternal: !0,
		tier: "RARE",
		description: "全军信号仅能向前或水平传播。处于敌方半场队友获得【不屈】。国王拥有无限制的“后”的机动，但无法后退。",
		modifiers: {
			globalNetworkDirection: () => "FORWARD",
			movement: (e, o) => {
				const { board: i, piece: s, r: a, c, isControlSquares: n } = e;
				let d = o;
				if (s.type === r.KING) {
					const e = s.color === t, o = [
						[-1, 0],
						[1, 0],
						[0, -1],
						[0, 1],
						[-1, -1],
						[-1, 1],
						[1, -1],
						[1, 1]
					], r = [];
					for (const [t, d] of o) {
						let e = a + t, o = c + d;
						for (; e >= 0 && e < 8 && o >= 0 && o < 8;) {
							const a = i[e][o];
							if (a) {
								(a.color !== s.color || n) && r.push({
									r: e,
									c: o
								});
								break;
							}
							r.push({
								r: e,
								c: o
							}), e += t, o += d;
						}
					}
					return d = r, d.filter((t) => e ? t.r <= a : t.r >= a);
				}
				return d;
			}
		},
		hooks: {
			onTurnStart: ({ board: e, r: o, c: s, piece: a, emit: c, metadata: n }) => {
				const d = a.color === t ? 7 - o : o, { networked: p } = Ge(e, a.color, n);
				C.findPieces(e, (e) => e.color === a.color && e.type !== r.KING).forEach(({ r: e, c: o }) => {
					d > 0 && (c({
						type: "ADD_STATUS",
						pos: {
							r: e,
							c: o
						},
						statusId: i.CHARISMA_BUFF,
						duration: 2,
						metadata: { bonus: d }
					}), c({
						type: "ADD_STATUS",
						pos: {
							r: e,
							c: o
						},
						statusId: "RICHARD_REWARD_BUFF",
						duration: 2
					})), (a.color === t ? e < 4 : e > 3) && p[e][o] && c({
						type: "ADD_STATUS",
						pos: {
							r: e,
							c: o
						},
						statusId: "RICHARD_UNYIELDING",
						duration: 2
					});
				});
			},
			onDeath: ({ board: e, r: o, c: i, piece: s, cancelAction: a, emit: c, gold: n, prng: d }) => {
				if (s.type === r.KING && s.color === t && (n ?? 0) >= 100) {
					const t = 7, r = [];
					for (let o = 0; o < 8; o++) e[t][o] || r.push({
						r: t,
						c: o
					});
					if (r.length > 0) {
						a?.(), c({
							type: "MODIFY_GOLD",
							amount: -100,
							reason: "KING_RANSOM"
						}), c({
							type: "REMOVE_PIECE",
							pos: {
								r: o,
								c: i
							}
						});
						const e = r[Math.floor((d || { next: Math.random }).next() * r.length)];
						c({
							type: "SPAWN",
							pos: e,
							piece: {
								...s,
								id: q(),
								statuses: []
							}
						}), c({
							type: "SHOW_TEXT",
							text: "\"Massive ransom collected: The King returns!\"",
							textKey: "LOG_KING_RANSOM",
							style: "gold",
							pos: e
						}), c({
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
		tier: "COMMON",
		description: "狮心王御驾亲征，吃子获得额外金币。",
		hooks: { onKill: ({ piece: e, emit: t }) => {
			const o = (e.statuses?.find((e) => "RICHARD_REWARD_BUFF" === e.id || e.id === i.CHARISMA_BUFF))?.metadata?.bonus || 1;
			t({
				type: "MODIFY_GOLD",
				amount: o,
				reason: "CRUSADE_REWARD"
			}), t({
				type: "SHOW_TEXT",
				text: `Crusade +${o}`,
				textKey: "LOG_CRUSADE_REWARD",
				textParams: { amount: o },
				style: "gold"
			});
		} }
	},
	{
		id: "RICHARD_UNYIELDING",
		name: "不屈",
		isInternal: !0,
		tier: "RARE",
		description: "被吃时 40% 概率返回库存。",
		hooks: { onDeath: ({ piece: e, emit: t, prng: o }) => {
			o && o.next() < .4 && (t({
				type: "MODIFY_RESERVE",
				color: e.color,
				pieceType: e.type,
				amount: 1
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
		tier: "LEGENDARY",
		description: "不可吃子。永远联网。提供信号源。无视强制位移。",
		modifiers: {
			alwaysNetworked: () => !0,
			networkSource: () => !0,
			isSteady: () => !0,
			movement: (e, t) => t.filter((t) => e.isControlSquares || !e.board[t.r][t.c])
		},
		hooks: { onDeath: ({ board: e, piece: t, cancelAction: o, emit: i, gold: s, prng: a }) => {
			if ((s ?? 0) >= 500) {
				const s = C.findPieces(e, (e) => e.type === r.KING && e.color === t.color)[0], c = s ? {
					r: s.r,
					c: s.c
				} : null;
				if (c) {
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
					let s = null;
					const n = a || { next: Math.random }, d = r.sort(() => n.next() - .5);
					for (const [t, o] of d) {
						const r = c.r + t, i = c.c + o;
						if (Ke(r, i) && !e[r][i]) {
							s = {
								r,
								c: i
							};
							break;
						}
					}
					s && (o?.(), i({
						type: "MODIFY_GOLD",
						amount: -500,
						reason: "SWALLOW_RESURRECT"
					}), i({
						type: "SPAWN",
						pos: s,
						piece: {
							...t,
							id: q(),
							statuses: []
						}
					}), i({
						type: "SHOW_TEXT",
						text: "\"Leaden heart shattered: Remaking Swallow!\"",
						textKey: "LOG_SWALLOW_RESURRECT",
						style: "gold",
						pos: s
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
		tier: "LEGENDARY",
		tags: ["GLOBAL"],
		description: "圆桌骑士同生共死。每当有 3 级友方单位在战场上成功吃子时，全场所有 3 级友方单位（除国王外）将同时获得一层【护盾】。",
		hooks: { onKill: ({ board: e, piece: t, subject: o, emit: s }) => {
			o && o.color === t.color && o.level >= 3 && o.type !== r.KING && (e.flat().forEach((e, o) => {
				if (e && e.color === t.color && e.level >= 3 && e.type !== r.KING) {
					const t = Math.floor(o / 8), r = o % 8;
					e.statuses?.some((e) => e.id === i.SHIELDED) || s({
						type: "ADD_STATUS",
						pos: {
							r: t,
							c: r
						},
						statusId: i.SHIELDED,
						duration: 99
					});
				}
			}), s({
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
		tier: "EPIC",
		description: "奥德修斯的绝妙诡计。静止在原地，2回合后自动解体，就地释放两只奇袭兵蜂。",
		modifiers: { movement: () => [] },
		hooks: { onTurnStart: ({ board: e, piece: t, r: o, c: i, emit: s, prng: a }) => {
			const c = t.metadata?.woodenHorseTimer || 1;
			if (c >= 2) {
				s({
					type: "REMOVE_PIECE",
					pos: {
						r: o,
						c: i
					}
				});
				let c = 0;
				const n = a || { next: Math.random }, d = [
					[-1, 0],
					[1, 0],
					[0, -1],
					[0, 1],
					[-1, -1],
					[-1, 1],
					[1, -1],
					[1, 1]
				].sort(() => n.next() - .5);
				for (const [a, p] of d) {
					if (c >= 2) break;
					const n = o + a, d = i + p;
					Ke(n, d) && !e[n][d] && (s({
						type: "SPAWN",
						pos: {
							r: n,
							c: d
						},
						piece: {
							id: q(),
							uid: `trojan-spawn-${q()}`,
							type: r.PAWN,
							color: t.color,
							level: 1,
							skills: [],
							statuses: [],
							maxSlots: 1,
							equippedItems: []
						}
					}), c++);
				}
				s({
					type: "SHOW_TEXT",
					text: "\"Trojan Horse broken: Trojan warriors ambush!\"",
					textKey: "LOG_TROJAN_BREAK",
					style: "gold",
					pos: {
						r: o,
						c: i
					}
				});
			} else s({
				type: "SPAWN",
				pos: {
					r: o,
					c: i
				},
				piece: {
					...t,
					metadata: {
						...t.metadata,
						woodenHorseTimer: c + 1
					}
				}
			}), s({
				type: "SHOW_TEXT",
				text: `Trojan lurking (${2 - c}T)`,
				textKey: "LOG_TROJAN_WAIT",
				textParams: { turns: 2 - c },
				style: "system",
				pos: {
					r: o,
					c: i
				}
			});
		} }
	},
	{
		id: "ODYSSEUS_TROJAN_ACTIVE",
		name: "木马计",
		isInternal: !0,
		tier: "EPIC",
		description: "主动：消耗本回合行动，在棋盘任意空地秘密空投一辆“特洛伊木马”。木马伪装静止 2 回合后自动解体，就地释放两名奇袭兵蜂（每场战斗限一次）。",
		activeSpec: {
			targeting: "target",
			usesKey: "trojanUses",
			maxUses: 1,
			getAlternatives: (e, t, o) => {
				const r = [];
				for (let i = 0; i < 8; i++) for (let t = 0; t < 8; t++) e[i][t] || r.push({
					pos: {
						r: i,
						c: t
					},
					value: {
						r: i,
						c: t
					}
				});
				return r;
			},
			execute: (e, t, o, i, s, a) => {
				(i.metadata?.trojanUses || 0) >= 1 || s && (a({
					type: "SPAWN",
					pos: s,
					piece: {
						id: q(),
						uid: `horse-${q()}`,
						type: r.PAWN,
						color: i.color,
						level: 1,
						skills: ["ODYSSEUS_WOODEN_HORSE"],
						learnedSkills: ["ODYSSEUS_WOODEN_HORSE"],
						statuses: [],
						maxSlots: 0,
						equippedItems: []
					}
				}), a({
					type: "UPDATE_ROSTER_PIECE",
					pieceUid: i.uid,
					updates: { metadata: {
						...i.metadata,
						trojanUses: (i.metadata?.trojanUses || 0) + 1
					} }
				}), a({
					type: "SHOW_TEXT",
					text: "\"Crossing the sea in stealth: Deploying Trojan!\"",
					textKey: "LOG_TROJAN_DEPLOY",
					style: "system",
					pos: s
				}));
			}
		}
	},
	{
		id: "BOSS_YINGZONG_CURSE",
		name: "乱命 (土木之变)",
		isInternal: !0,
		tier: "LEGENDARY",
		description: "BOSS专属：受到致命一击时，在黑方底线生成不能动的伪王和于谦救场。",
		hooks: { onDeath: ({ board: e, piece: t, r: i, c: s, cancelAction: a, emit: c, prng: n }) => {
			if (t.color !== o) return;
			const d = [];
			for (let o = 0; o < 8; o++) e[0][o] || d.push({
				r: 0,
				c: o
			});
			if (d.length >= 2) {
				a?.(), c({
					type: "REMOVE_PIECE",
					pos: {
						r: i,
						c: s
					}
				}), c({
					type: "SHOW_TEXT",
					text: "“也先”挟天子以令诸侯：北狩！",
					textKey: "LOG_DAIZONG_CAPTURED",
					style: "danger"
				});
				const e = n || { next: Math.random }, t = Math.floor(e.next() * d.length), p = d.splice(t, 1)[0], E = d[Math.floor(e.next() * d.length)], l = `daizong-${q()}`, u = `hero-yuqian-${q()}`;
				c({
					type: "SPAWN",
					pos: p,
					piece: {
						...z(r.KING, o),
						uid: l,
						traits: ["FAKE_KING_TRAIT", "ROOTED"],
						customName: "unitDaizong"
					}
				});
				const A = function(e) {
					const t = () => e ? e.next() : Math.random(), o = ce()[r.BISHOP].filter((e) => "LEGENDARY" === e.tier), i = o[Math.floor(t() * o.length)]?.id || "BISHOP_AURORA", s = ne.filter((e) => "EQUIPMENT" === e.type), a = s.filter((e) => "LEGENDARY" === e.tier), c = s.filter((e) => "EPIC" === e.tier), n = a[Math.floor(t() * a.length)], d = c[Math.floor(t() * c.length)], p = s[Math.floor(t() * s.length)];
					return {
						skills: [i],
						equippedItems: [
							{
								id: `yq-l-${q()}`,
								type: "EQUIPMENT",
								name: n.id,
								desc: "",
								effectId: n.effectId,
								tier: "LEGENDARY"
							},
							{
								id: `yq-e-${q()}`,
								type: "EQUIPMENT",
								name: d.id,
								desc: "",
								effectId: d.effectId,
								tier: "EPIC"
							},
							{
								id: `yq-r-${q()}`,
								type: "EQUIPMENT",
								name: p.id,
								desc: "",
								effectId: p.effectId,
								tier: p.tier
							}
						]
					};
				}(e), I = {
					...z(r.BISHOP, o),
					uid: u,
					level: 5,
					traits: ["YUQIAN_TRAIT"],
					customName: "unitYuqian",
					skills: A.skills,
					learnedSkills: A.skills,
					equippedItems: A.equippedItems
				};
				c({
					type: "ADD_TO_ROSTER",
					piece: I
				}), c({
					type: "SPAWN",
					pos: E,
					piece: I
				});
			}
		} }
	},
	{
		id: "LOUIS_IRON_MASK",
		name: "铁面人限制",
		isInternal: !0,
		tier: "LEGENDARY",
		description: "路易十四的神秘孪生兄弟。作为副信号源（Proxy King），但永久定身且无法吃子。一旦被击杀，国王将因政权动摇永久失去“绝对日冕”5x5网络。",
		modifiers: {
			networkSource: () => !0,
			proxyKing: () => !0,
			isSteady: () => !0,
			movement: () => []
		},
		hooks: { onDeath: ({ board: e, emit: o }) => {
			e.flat().forEach((e) => {
				if (e && e.type === r.KING && e.color === t) {
					const t = e.skills.filter((e) => "LOUIS_ABSOLUTE_CORONA" !== e);
					o({
						type: "UPDATE_ROSTER_PIECE",
						pieceUid: e.uid,
						updates: {
							skills: t,
							learnedSkills: t
						}
					}), o({
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
		tier: "LEGENDARY",
		description: "每过5个回合，随机调换场上两个白色棋子的位置。",
		hooks: { onTurnStart: ({ board: e, piece: o, emit: i, prng: s }) => {
			const a = o.metadata?.quantumTurns || 0;
			if (a >= 5) {
				const a = C.findPieces(e, (e) => e.color === t && e.type !== r.KING).map(({ r: e, c: t, piece: o }) => ({
					r: e,
					c: t,
					p: o
				}));
				if (a.length >= 2 && s) {
					const e = Math.floor(s.next() * a.length);
					let t = Math.floor(s.next() * (a.length - 1));
					t >= e && t++;
					const o = a[e], r = a[t];
					i({
						type: "SWAP_PIECES",
						posA: {
							r: o.r,
							c: o.c
						},
						posB: {
							r: r.r,
							c: r.c
						}
					}), i({
						type: "SHOW_TEXT",
						text: "Quantum Swap",
						textKey: "LOG_QUANTUM_SWAP",
						style: "danger"
					});
				}
				i({
					type: "UPDATE_ROSTER_PIECE",
					pieceUid: o.uid,
					updates: { metadata: {
						...o.metadata,
						quantumTurns: 0
					} }
				});
			} else i({
				type: "UPDATE_ROSTER_PIECE",
				pieceUid: o.uid,
				updates: { metadata: {
					...o.metadata,
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
		tier: "LEGENDARY",
		description: "免疫一切攻击，随机移动（撞墙反弹），撞击到的任何棋子都会被摧毁。",
		modifiers: {
			invulnerable: () => !0,
			isSteady: () => !0
		},
		hooks: { onTurnStart: ({ board: e, r: t, c: i, piece: s, emit: a, prng: c }) => {
			if (s.color !== o) return;
			let n = s.metadata?.dr, d = s.metadata?.dc;
			if (void 0 === n || void 0 === d) {
				const e = c || { next: Math.random }, t = e.next() > .5, o = e.next() > .5 ? 1 : -1;
				n = t ? o : 0, d = t ? 0 : o;
			}
			let p = t + n, E = i + d, l = n, u = d;
			(p < 0 || p >= 8 || E < 0 || E >= 8) && (l = 0 === n ? 0 : -n, u = 0 === d ? 0 : -d, p = t + l, E = i + u), a({
				type: "UPDATE_ROSTER_PIECE",
				pieceUid: s.uid,
				updates: { metadata: {
					...s.metadata,
					dr: l,
					dc: u
				} }
			});
			const A = e[p][E];
			A && A.type !== r.KING && a({
				type: "KILL",
				pos: {
					r: p,
					c: E
				}
			}), a({
				type: "MOVE",
				from: {
					r: t,
					c: i
				},
				to: {
					r: p,
					c: E
				}
			});
		} }
	},
	{
		id: "BOSS_PERMISSION_DENIED",
		name: "权限篡改",
		isInternal: !0,
		tier: "LEGENDARY",
		description: "每隔3回合禁用一种棋子",
		hooks: { onTurnStart: ({ piece: e, emit: t, prng: o, board: s }) => {
			const a = e.metadata?.permissionTimer || 1;
			if (3 === a && o) {
				const a = [
					r.PAWN,
					r.KNIGHT,
					r.BISHOP,
					r.ROOK,
					r.QUEEN
				], c = a[Math.floor(o.next() * a.length)];
				C.findPieces(s, (t) => t.color !== e.color && t.type === c).forEach(({ r: e, c: o }) => t({
					type: "ADD_STATUS",
					pos: {
						r: e,
						c: o
					},
					statusId: i.FROZEN,
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
					text: `Permission Denied: Disable ${c}`,
					textKey: "LOG_PERMISSION_DENIED",
					textParams: { banned: c },
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
		tier: "LEGENDARY",
		description: "前5回合无法吃子",
		hooks: { onTurnStart: ({ board: e, piece: t, emit: o, historyLength: r }) => {
			const s = r || 0;
			if (s < 10) {
				const t = 9 === s ? 1 : 2;
				C.findPieces(e, () => !0).forEach(({ r: e, c: r }) => {
					o({
						type: "ADD_STATUS",
						pos: {
							r: e,
							c: r
						},
						statusId: i.INVULNERABLE,
						duration: t
					});
				});
			}
		} },
		getDisplayStatus: (e, t) => {
			const o = "undefined" != typeof window && window.gameStore?.getState()?.history?.length || 0, r = Math.max(0, 3 - Math.floor(o / 2));
			return r <= 0 ? {
				text: t("finished") || "Finished",
				colorClass: "text-slate-500"
			} : {
				text: t("turnsRemaining", { n: r }),
				colorClass: "text-red-400 font-bold animate-pulse"
			};
		}
	},
	{
		id: "INVULNERABLE",
		name: "无敌",
		isInternal: !0,
		tier: "COMMON",
		description: "",
		modifiers: { invulnerable: () => !0 }
	},
	{
		id: "BOSS_ECHO_CHAMBER",
		name: "信息茧房",
		isInternal: !0,
		tier: "LEGENDARY",
		description: "隐藏玩家棋子属性（UI端处理）"
	},
	{
		id: "BOSS_BOARD_ROTATION",
		name: "棋盘自转",
		isInternal: !0,
		tier: "LEGENDARY",
		description: "每4回合旋转90度",
		hooks: { onTurnStart: ({ board: e, piece: t, emit: o, metadata: i }) => {
			const a = t.metadata?.rotateTimer || 1;
			if (4 === a) {
				o({
					type: "SHOW_TEXT",
					text: "Board Rotation!",
					textKey: "LOG_BOARD_ROTATION",
					style: "danger"
				});
				const a = C.findPieces(e, () => !0).map(({ r: e, c: t, piece: o }) => ({
					p: o,
					r: e,
					c: t,
					nr: t,
					nc: 7 - e
				}));
				a.forEach(({ r: e, c: t }) => o({
					type: "REMOVE_PIECE",
					pos: {
						r: e,
						c: t
					}
				})), a.forEach(({ p: e, nr: t, nc: a }) => {
					i?.squares?.[`${t},${a}`]?.some((e) => e.id === s || e.id === l || e.id === A) && e.type !== r.KING ? (o({
						type: "SPAWN",
						pos: {
							r: t,
							c: a
						},
						piece: e
					}), o({
						type: "KILL",
						pos: {
							r: t,
							c: a
						}
					})) : o({
						type: "SPAWN",
						pos: {
							r: t,
							c: a
						},
						piece: e
					});
				}), o({
					type: "UPDATE_ROSTER_PIECE",
					pieceUid: t.uid,
					updates: { metadata: {
						...t.metadata,
						rotateTimer: 1
					} }
				});
			} else o({
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
		tier: "LEGENDARY",
		description: "无限替死",
		hooks: { onDeath: ({ board: e, piece: t, r: o, c: r, cancelAction: i, emit: s, prng: a }) => {
			const c = C.findPieces(e, (e) => e.color === t.color && e.uid !== t.uid).map(({ r: e, c: t, piece: o }) => ({
				r: e,
				c: t,
				p: o
			}));
			if (c.length > 0 && a) {
				i?.();
				const e = c[Math.floor(a.next() * c.length)];
				s({
					type: "ANIMATE",
					name: "PHANTOM_MOVE",
					pos: {
						r: o,
						c: r
					},
					duration: 400
				}), s({
					type: "REMOVE_PIECE",
					pos: {
						r: o,
						c: r
					}
				}), s({
					type: "KILL",
					pos: {
						r: e.r,
						c: e.c
					},
					targetId: e.p.id
				}), s({
					type: "SPAWN",
					pos: {
						r: e.r,
						c: e.c
					},
					piece: { ...t }
				}), s({
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
		tier: "LEGENDARY",
		description: "随机生成传送门",
		hooks: {
			onTurnStart: ({ board: e, emit: t, prng: o, metadata: r }) => {
				if (r?.squares) {
					for (const s in r.squares) if (r.squares[s].some((e) => e.id === f)) {
						const [e, o] = s.split(",").map(Number);
						t({
							type: "REMOVE_SQUARE",
							pos: {
								r: e,
								c: o
							},
							statusId: f
						});
					}
				}
				const i = [];
				if (e.forEach((e, t) => e.forEach((e, o) => {
					e || i.push({
						r: t,
						c: o
					});
				})), o) for (let s = 0; s < 2 && i.length > 0; s++) {
					const e = Math.floor(o.next() * i.length);
					t({
						type: "SET_SQUARE",
						pos: i.splice(e, 1)[0],
						status: {
							id: f,
							duration: 1
						}
					});
				}
			},
			onAfterMove: ({ board: e, r: t, c: o, emit: r, prng: i, metadata: s }) => {
				if (s?.squares?.[`${t},${o}`]?.some((e) => e.id === f)) {
					const s = [];
					if (e.forEach((e, t) => e.forEach((e, o) => {
						e || s.push({
							r: t,
							c: o
						});
					})), s.length > 0 && i) {
						const e = s[Math.floor(i.next() * s.length)];
						r({
							type: "PLAY_SOUND",
							soundId: "WORMHOLE"
						}), r({
							type: "MOVE",
							from: {
								r: t,
								c: o
							},
							to: e
						}), r({
							type: "SHOW_TEXT",
							text: "Warp Storm Teleport",
							textKey: "LOG_WARP_STORM",
							style: "system",
							pos: e
						});
					}
				}
			}
		}
	},
	{
		id: "BOSS_MUTINY",
		name: "倒戈协议",
		isInternal: !0,
		tier: "LEGENDARY",
		description: "定期策反非王棋子",
		hooks: { onTurnStart: ({ board: e, piece: t, emit: o, prng: s }) => {
			const a = t.metadata?.mutinyTimer || 1;
			if (6 === a) {
				const a = C.findPieces(e, (e) => e.color !== t.color && e.type !== r.KING).map(({ r: e, c: t, piece: o }) => ({
					r: e,
					c: t,
					p: o
				}));
				if (a.length > 0 && s) {
					const e = (e) => ({
						P: 10,
						N: 30,
						B: 30,
						R: 50,
						Q: 90
					})[e] || 0;
					a.sort((t, o) => e(o.p.type) - e(t.p.type));
					const r = a.slice(0, 3), c = r[Math.floor(s.next() * r.length)];
					o({
						type: "SPAWN",
						pos: c,
						piece: {
							...c.p,
							color: t.color,
							statuses: [...c.p.statuses || [], {
								id: i.BETRAYED,
								duration: 1
							}]
						}
					}), o({
						type: "SHOW_TEXT",
						text: "Mutiny Protocol",
						textKey: "LOG_MUTINY",
						style: "danger",
						pos: c
					});
				}
				o({
					type: "UPDATE_ROSTER_PIECE",
					pieceUid: t.uid,
					updates: { metadata: {
						...t.metadata,
						mutinyTimer: 1
					} }
				});
			} else o({
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
		tier: "LEGENDARY",
		description: "",
		hooks: { onTurnStart: ({ piece: e, board: t, emit: o, prng: s, roster: a, deployedUids: c }) => {
			const n = e.metadata?.necroTimer || 1;
			if (5 === n) {
				const n = a || [], d = c || [], p = t.flat().filter(Boolean), E = n.filter((e) => e.type !== r.KING && !p.some((t) => t.uid === e.uid) && !d.includes(e.uid));
				if (E.length > 0 && s) {
					const r = E[Math.floor(s.next() * E.length)], a = [];
					if (t.forEach((e, t) => e.forEach((e, o) => {
						e || a.push({
							r: t,
							c: o
						});
					})), a.length > 0) {
						const t = a[Math.floor(s.next() * a.length)];
						o({
							type: "SPAWN",
							pos: t,
							piece: {
								...r,
								id: q(),
								uid: `zombie-${q()}`,
								color: e.color,
								statuses: [{
									id: i.ENCRYPTED,
									duration: 99
								}]
							}
						}), o({
							type: "SHOW_TEXT",
							text: "Necrotic Rebirth",
							textKey: "LOG_NECRO_REVIVE",
							style: "danger",
							pos: t
						});
					}
				}
				o({
					type: "UPDATE_ROSTER_PIECE",
					pieceUid: e.uid,
					updates: { metadata: {
						...e.metadata,
						necroTimer: 1
					} }
				});
			} else o({
				type: "UPDATE_ROSTER_PIECE",
				pieceUid: e.uid,
				updates: { metadata: {
					...e.metadata,
					necroTimer: n + 1
				} }
			});
		} }
	},
	{
		id: "ZOMBIE_DECAY",
		name: "丧尸",
		isInternal: !0,
		tier: "COMMON",
		description: "",
		hooks: { onAfterMove: ({ r: e, c: t, emit: o }) => {
			o({
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
		tier: "LEGENDARY",
		description: "",
		hooks: { onTurnStart: ({ board: e, piece: i, emit: s, historyLength: a }) => {
			0 !== (a || 0) || i.metadata?.mirrorMatched || (C.findPieces(e, (e) => e.color === t && e.type !== r.KING).forEach(({ r: t, c: r, piece: i }) => {
				const a = 7 - t, c = 7 - r;
				e[a][c] || s({
					type: "SPAWN",
					pos: {
						r: a,
						c
					},
					piece: {
						...i,
						id: q(),
						uid: `mirror-${q()}`,
						color: o
					}
				});
			}), s({
				type: "UPDATE_ROSTER_PIECE",
				pieceUid: i.uid,
				updates: { metadata: {
					...i.metadata,
					mirrorMatched: !0
				} }
			}), s({
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
		tier: "LEGENDARY",
		description: "",
		hooks: { onTurnStart: ({ board: e, piece: t, emit: o, prng: i }) => {
			const s = t.metadata?.hiveTimer || 1;
			if (5 === s) {
				const s = [];
				for (let t = 0; t < 4; t++) for (let o = 0; o < 8; o++) e[t][o] || s.push({
					r: t,
					c: o
				});
				if (s.length > 0 && i) {
					const e = s[Math.floor(i.next() * s.length)];
					o({
						type: "SPAWN",
						pos: e,
						piece: {
							id: q(),
							uid: `egg-${q()}`,
							type: r.PAWN,
							color: t.color,
							level: 1,
							skills: ["EGG_HATCH"],
							statuses: [],
							maxSlots: 0,
							equippedItems: []
						}
					}), o({
						type: "SHOW_TEXT",
						text: "Hatch Egg",
						textKey: "LOG_HATCH_EGG",
						style: "danger",
						pos: e
					});
				}
				o({
					type: "UPDATE_ROSTER_PIECE",
					pieceUid: t.uid,
					updates: { metadata: {
						...t.metadata,
						hiveTimer: 1
					} }
				});
			} else o({
				type: "UPDATE_ROSTER_PIECE",
				pieceUid: t.uid,
				updates: { metadata: {
					...t.metadata,
					hiveTimer: s + 1
				} }
			});
		} }
	},
	{
		id: "EGG_HATCH",
		name: "异形卵",
		isInternal: !0,
		tier: "COMMON",
		description: "3回合后孵化为高级棋子",
		modifiers: { movement: () => [] },
		hooks: { onTurnStart: ({ piece: e, r: t, c: o, emit: i, prng: s }) => {
			const a = e.metadata?.hatchTimer || 1;
			if (3 === a && s) {
				const a = s.next() < .5 ? r.QUEEN : r.ROOK;
				i({
					type: "REMOVE_PIECE",
					pos: {
						r: t,
						c: o
					}
				}), i({
					type: "SPAWN",
					pos: {
						r: t,
						c: o
					},
					piece: {
						id: q(),
						uid: `hatched-${q()}`,
						type: a,
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
						c: o
					}
				});
			} else i({
				type: "SPAWN",
				pos: {
					r: t,
					c: o
				},
				piece: {
					...e,
					metadata: {
						...e.metadata,
						hatchTimer: a + 1
					}
				}
			}), i({
				type: "SHOW_TEXT",
				text: "Hatching in " + (3 - a),
				textKey: "LOG_EGG_HATCHING",
				textParams: { count: 3 - a },
				style: "danger",
				pos: {
					r: t,
					c: o
				}
			});
		} }
	},
	{
		id: "BOSS_ENRAGE",
		name: "狂暴阈值",
		isInternal: !0,
		tier: "LEGENDARY",
		description: "每 4 回合行动两次",
		hooks: { onTurnStart: ({ piece: e, emit: t, historyLength: r }) => {
			(Math.floor((r || 0) / 2) + 1) % 4 == 0 && e.color === o && (t({
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
		tier: "COMMON",
		description: "每奇数回合通电摧毁上方棋子。",
		hooks: { onTurnStart: ({ r: e, c: t, emit: o, board: i, historyLength: s }) => {
			(Math.floor((s || 0) / 2) + 1) % 2 != 0 && (o({
				type: "PLAY_SOUND",
				soundId: "LASER_GRID"
			}), o({
				type: "ANIMATE",
				name: "LIGHTNING",
				pos: {
					r: e,
					c: t
				},
				duration: 400
			}), i[e][t] && i[e][t].type !== r.KING && o({
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
		tier: "COMMON",
		description: "兵踩中触发3x3爆炸。",
		hooks: { onAfterMove: ({ piece: e, r: t, c: o, board: i, emit: s }) => {
			if (e.type === r.PAWN) {
				s({
					type: "PLAY_SOUND",
					soundId: "LANDMINE"
				}), s({
					type: "REMOVE_SQUARE",
					pos: {
						r: t,
						c: o
					},
					statusId: T
				}), s({
					type: "ANIMATE",
					name: "EXPLOSION",
					pos: {
						r: t,
						c: o
					},
					duration: 500
				});
				for (let e = -1; e <= 1; e++) for (let a = -1; a <= 1; a++) {
					const c = t + e, n = o + a;
					c >= 0 && c < 8 && n >= 0 && n < 8 && i[c][n] && i[c][n].type !== r.KING && s({
						type: "KILL",
						pos: {
							r: c,
							c: n
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
		tier: "COMMON",
		description: "踩中后放逐3回合",
		hooks: { onAfterMove: ({ piece: e, r: t, c: o, emit: r }) => {
			r({
				type: "PLAY_SOUND",
				soundId: "TELEPORT"
			}), r({
				type: "REMOVE_PIECE",
				pos: {
					r: t,
					c: o
				}
			}), r({
				type: "SET_SQUARE",
				pos: {
					r: t,
					c: o
				},
				status: {
					id: "TIME_ANOMALY_REBIRTH",
					duration: 3,
					metadata: { piece: e }
				}
			}), r({
				type: "SHOW_TEXT",
				text: "Time Banished",
				textKey: "LOG_TIME_BANISHED",
				style: "system",
				pos: {
					r: t,
					c: o
				}
			});
		} }
	},
	{
		id: "TIME_ANOMALY_REBIRTH",
		name: "时间回溯",
		isInternal: !0,
		tier: "COMMON",
		description: "",
		hooks: { onTurnStart: ({ r: e, c: t, emit: o, board: r, metadata: i }) => {
			const s = (i?.squares?.[`${e},${t}`] || []).find((e) => "TIME_ANOMALY_REBIRTH" === e.id);
			if (s && 1 === s.duration) {
				const i = s.metadata.piece;
				r[e][t] ? (o({
					type: "KILL",
					pos: {
						r: e,
						c: t
					}
				}), o({
					type: "SPAWN",
					pos: {
						r: e,
						c: t
					},
					piece: i
				})) : (o({
					type: "SPAWN",
					pos: {
						r: e,
						c: t
					},
					piece: i
				}), o({
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
		tier: "COMMON",
		description: "棋子滑动",
		hooks: { onAfterMove: ({ piece: e, from: t, r: o, c: r, board: i, emit: s, metadata: a }) => {
			if (!t || e.metadata?.isSliding) return;
			const c = Math.sign(o - t.r), n = Math.sign(r - t.c);
			if (0 === c && 0 === n) return;
			let d = o + c, p = r + n, E = null;
			for (; d >= 0 && d < 8 && p >= 0 && p < 8 && !i[d][p] && (E = {
				r: d,
				c: p
			}, a?.squares?.[`${d},${p}`]?.some((e) => e.id === m));) d += c, p += n;
			E && (s({
				type: "UPDATE_ROSTER_PIECE",
				pieceUid: e.uid,
				updates: { metadata: {
					...e.metadata,
					isSliding: !0
				} }
			}), s({
				type: "MOVE",
				from: {
					r: o,
					c: r
				},
				to: E
			}));
		} }
	},
	{
		id: "WORMHOLE_A",
		name: "传送阵A",
		isInternal: !0,
		tier: "COMMON",
		description: "",
		hooks: { onAfterMove: ({ r: e, c: t, emit: o, metadata: r, board: i }) => {
			const s = r?.squares || {};
			for (const a in s) if (s[a].some((e) => e.id === _)) {
				const [r, s] = a.split(",").map(Number);
				i[r][s] || (o({
					type: "PLAY_SOUND",
					soundId: "WORMHOLE"
				}), o({
					type: "MOVE",
					from: {
						r: e,
						c: t
					},
					to: {
						r,
						c: s
					}
				}), o({
					type: "SHOW_TEXT",
					text: "Teleport",
					textKey: "LOG_TELEPORT",
					style: "system",
					pos: {
						r,
						c: s
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
		tier: "COMMON",
		description: "",
		hooks: { onAfterMove: ({ r: e, c: t, emit: o, metadata: r, board: i }) => {
			const s = r?.squares || {};
			for (const a in s) if (s[a].some((e) => e.id === O)) {
				const [r, s] = a.split(",").map(Number);
				i[r][s] || (o({
					type: "PLAY_SOUND",
					soundId: "WORMHOLE"
				}), o({
					type: "MOVE",
					from: {
						r: e,
						c: t
					},
					to: {
						r,
						c: s
					}
				}), o({
					type: "SHOW_TEXT",
					text: "Teleport",
					textKey: "LOG_TELEPORT",
					style: "system",
					pos: {
						r,
						c: s
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
		tier: "COMMON",
		description: "耗尽行动力",
		modifiers: { squareBlockMovement: () => !1 },
		hooks: { onAfterMove: ({ emit: e, r: t, c: o }) => {
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
					c: o
				}
			});
		} }
	},
	{
		id: "CONVEYOR_BELT",
		name: "传送带",
		isInternal: !0,
		tier: "COMMON",
		description: "",
		hooks: { onTurnStart: ({ board: e, r: t, c: o, emit: r, metadata: i, historyLength: s }) => {
			if ((s || 0) % 2 != 0) return;
			if (!e[t][o]) return;
			const a = (i?.squares?.[`${t},${o}`]?.find((e) => "CONVEYOR_BELT" === e.id))?.metadata?.dir || {
				dr: 0,
				dc: 1
			}, c = t + a.dr, n = o + a.dc;
			c < 0 || c >= 8 || n < 0 || n >= 8 ? (r({
				type: "PLAY_SOUND",
				soundId: "MUD_SWAMP"
			}), r({
				type: "ANIMATE",
				name: "PIECE_SHATTER",
				pos: {
					r: t,
					c: o
				},
				duration: 400
			}), r({
				type: "KILL",
				pos: {
					r: t,
					c: o
				}
			}), r({
				type: "SHOW_TEXT",
				text: "Fell off",
				textKey: "LOG_FALL_OFF",
				style: "danger",
				pos: {
					r: t,
					c: o
				}
			})) : e[c][n] ? (r({
				type: "PLAY_SOUND",
				soundId: "LANDMINE"
			}), r({
				type: "ANIMATE",
				name: "EXPLOSION",
				pos: {
					r: c,
					c: n
				},
				duration: 400
			}), r({
				type: "KILL",
				pos: {
					r: t,
					c: o
				}
			}), r({
				type: "KILL",
				pos: {
					r: c,
					c: n
				}
			}), r({
				type: "SHOW_TEXT",
				text: "Crash!",
				textKey: "LOG_CRASH",
				style: "danger",
				pos: {
					r: c,
					c: n
				}
			})) : (r({
				type: "PLAY_SOUND",
				soundId: "CONVEYOR"
			}), r({
				type: "MOVE",
				from: {
					r: t,
					c: o
				},
				to: {
					r: c,
					c: n
				}
			}));
		} }
	},
	{
		id: "OVERCLOCK_NODE",
		name: "超频基站",
		isInternal: !0,
		tier: "COMMON",
		description: "技能CD清零",
		hooks: { onTurnStart: ({ board: e, emit: t, r: o, c: r }) => {
			const i = e[o][r];
			if (i) {
				const e = i.metadata || {}, s = {};
				let a = !1;
				for (const t in e) (t.toLowerCase().includes("cooldown") || t.toLowerCase().includes("cd")) && (s[t] = 0, a = !0);
				a && (t({
					type: "UPDATE_ROSTER_PIECE",
					pieceUid: i.uid,
					updates: { metadata: {
						...e,
						...s
					} }
				}), t({
					type: "SHOW_TEXT",
					text: "Cooldown Cleared",
					textKey: "LOG_CD_CLEARED",
					style: "gold",
					pos: {
						r: o,
						c: r
					}
				}));
			}
		} }
	},
	{
		id: "DATA_VAULT",
		name: "数据金库",
		isInternal: !0,
		tier: "COMMON",
		description: "",
		hooks: { onTurnStart: ({ board: e, emit: o, r, c: i }) => {
			const s = e[r][i];
			s && s.color === t && (o({
				type: "MODIFY_GOLD",
				amount: 3,
				reason: "DATA_VAULT"
			}), o({
				type: "SHOW_TEXT",
				text: "+3G",
				textKey: "LOG_GOLD_PLUS",
				textParams: { amount: 3 },
				style: "gold",
				pos: {
					r,
					c: i
				}
			}));
		} }
	},
	{
		id: "SIGNAL_RELAY",
		name: "信号放大器",
		isInternal: !0,
		tier: "COMMON",
		description: "",
		modifiers: { networkSource: () => !0 }
	},
	{
		id: "FARADAY_CAGE",
		name: "法拉第笼",
		isInternal: !0,
		tier: "COMMON",
		description: "",
		hooks: {
			onTurnStart: ({ emit: e, r: t, c: o, board: r }) => {
				r[t][o] && (e({
					type: "PLAY_SOUND",
					soundId: "FARADAY_CAGE"
				}), e({
					type: "ADD_STATUS",
					pos: {
						r: t,
						c: o
					},
					statusId: i.FROZEN,
					duration: 2
				}));
			},
			onAfterMove: ({ emit: e, r: t, c: o }) => {
				e({
					type: "PLAY_SOUND",
					soundId: "FARADAY_CAGE"
				}), e({
					type: "ADD_STATUS",
					pos: {
						r: t,
						c: o
					},
					statusId: i.FROZEN,
					duration: 2
				});
			}
		}
	},
	{
		id: "BOSS_TURN_LIMIT",
		name: "系统崩溃倒计时",
		isInternal: !0,
		tier: "LEGENDARY",
		description: "BOSS在场时存在系统倒计时，归零玩家失败。",
		hooks: {
			onTurnStart: ({ piece: e, emit: t, historyLength: r }) => {
				if (e.color !== o) return;
				const i = e.metadata?.maxTurns;
				if (!i) {
					const o = "undefined" != typeof window && window.rogueStore?.getState()?.chapter || 1, r = Math.max(40, 65 - o);
					t({
						type: "UPDATE_ROSTER_PIECE",
						pieceUid: e.uid,
						updates: { metadata: {
							...e.metadata,
							maxTurns: r
						} }
					}), t({
						type: "UPDATE_METADATA",
						updates: { turnsRemaining: r }
					});
					return;
				}
				const s = i - Math.floor((r || 0) / 2);
				t({
					type: "UPDATE_METADATA",
					updates: { turnsRemaining: s }
				}), s <= 0 && (t({
					type: "SET_WINNER",
					winner: o
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
			const o = "undefined" != typeof window && window.gameStore?.getState()?.history?.length || 0, r = e.metadata?.maxTurns || 40;
			return {
				text: `系统崩溃: ${Math.max(0, r - Math.floor(o / 2))}T`,
				colorClass: "text-red-500 animate-pulse"
			};
		}
	}
], He = [
	{
		id: "EQ_ARROGANT_CREED",
		name: "狂妄信条",
		tier: "LEGENDARY",
		pieceType: r.KING,
		description: "游戏开始时，国王拥有等同于后+马的移动范围。一旦你部署了任何其他棋子，该效果永久失效。",
		modifiers: { movement: ({ board: e, piece: t, r: o, c: s }, a) => (t.type !== r.KING || t.statuses?.some((e) => e.id === i.EQ_ARROGANT_CREED_DISABLED) || ([...R.R, ...R.B].forEach(([r, i]) => {
			let c = o + r, n = s + i;
			for (; c >= 0 && c < 8 && n >= 0 && n < 8;) {
				const o = e[c][n];
				if (o) {
					o.color !== t.color && a.push({
						r: c,
						c: n
					});
					break;
				}
				a.push({
					r: c,
					c: n
				}), c += r, n += i;
			}
		}), R.N.forEach(([r, i]) => {
			const c = o + r, n = s + i;
			c >= 0 && c < 8 && n >= 0 && n < 8 && e[c][n]?.color !== t.color && a.push({
				r: c,
				c: n
			});
		})), a) },
		hooks: { onDeploy: ({ board: e, piece: o, emit: s }) => {
			o.color === t && (C.findPieces(e, (e) => e.color === t && e.type !== r.KING).length > 0 || o.type !== r.KING) && C.findPieces(e, (e) => e.color === t && e.type === r.KING && e.equippedItems?.some((e) => "EQ_ARROGANT_CREED" === e.effectId) && !e.statuses?.some((e) => e.id === i.EQ_ARROGANT_CREED_DISABLED)).forEach(({ r: e, c: t }) => s({
				type: "ADD_STATUS",
				pos: {
					r: e,
					c: t
				},
				statusId: i.EQ_ARROGANT_CREED_DISABLED,
				duration: 99
			}));
		} }
	},
	{
		id: "BATTERY",
		name: "应急电池",
		tier: "COMMON",
		description: "解除冻结",
		hooks: { onUse: ({ piece: e, r: t, c: o, emit: r, setNoSkip: s }) => {
			e ? r({
				type: "REMOVE_STATUS",
				pos: {
					r: t,
					c: o
				},
				statusId: i.FROZEN
			}) : s?.();
		} }
	},
	{
		id: "MEDUSA",
		name: "美杜莎之眼",
		tier: "EPIC",
		description: "永久石化",
		hooks: { onUse: ({ piece: e, r: t, c: o, emit: s, setNoSkip: a }) => {
			e && e.type !== r.KING && e.type !== r.QUEEN ? s({
				type: "ADD_STATUS",
				pos: {
					r: t,
					c: o
				},
				statusId: i.PETRIFIED,
				duration: 99
			}) : a?.();
		} }
	},
	{
		id: "WITHDRAW",
		name: "战术撤回",
		tier: "RARE",
		description: "撤回库存",
		hooks: { onUse: ({ piece: e, r: o, c: i, emit: s, setNoSkip: a }) => {
			e && e.color === t && e.type !== r.KING ? (s({
				type: "MODIFY_RESERVE",
				color: t,
				pieceType: e.type,
				amount: 1
			}), s({
				type: "REMOVE_PIECE",
				pos: {
					r: o,
					c: i
				}
			})) : a?.();
		} }
	},
	{
		id: "JAMMING",
		name: "全频干扰",
		tier: "RARE",
		description: "敌方 network 失效",
		hooks: { onUse: ({ emit: e }) => {
			e({
				type: "UPDATE_METADATA",
				updates: { globalJamming: 2 }
			});
		} }
	},
	{
		id: "SCARY_LETTER",
		name: "恐吓信",
		tier: "COMMON",
		description: "逼退敌军",
		hooks: { onUse: ({ piece: e, board: i, r: s, c: a, emit: c, setNoSkip: n }) => {
			if (e && e.color === o) {
				if (e.equippedItems?.some((e) => "EQ_STABILIZER" === e.effectId)) return void n?.();
				const o = C.findPieces(i, (e) => e.type === r.KING && e.color === t)[0], d = o ? {
					r: o.r,
					c: o.c
				} : {
					r: 7,
					c: 4
				}, p = s - d.r, E = a - d.c, l = s + (p > 0 ? 1 : p < 0 ? -1 : 0), u = a + (E > 0 ? 1 : E < 0 ? -1 : 0);
				l >= 0 && l < 8 && !i[l][u] ? c({
					type: "MOVE",
					from: {
						r: s,
						c: a
					},
					to: {
						r: l,
						c: u
					}
				}) : n?.();
			} else n?.();
		} }
	},
	{
		id: "OVERCLOCK",
		name: "超频驱动",
		tier: "EPIC",
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
		description: "王身边刷兵",
		hooks: { onUse: ({ board: e, emit: o, prng: i }) => {
			const s = C.findPieces(e, (e) => e.type === r.KING && e.color === t)[0], a = s ? {
				r: s.r,
				c: s.c
			} : null;
			if (!a || !i) return;
			const c = a, n = [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1],
				[-1, -1],
				[-1, 1],
				[1, -1],
				[1, 1]
			].sort(() => i.next() - .5);
			for (const [d, p] of n) {
				const i = c.r + d, s = c.c + p;
				if (i >= 0 && i < 8 && s >= 0 && s < 8 && !e[i][s]) {
					o({
						type: "SPAWN",
						pos: {
							r: i,
							c: s
						},
						piece: {
							id: q(),
							type: r.PAWN,
							color: t,
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
		} }
	},
	{
		id: "COMPASS",
		name: "位移罗盘",
		tier: "COMMON",
		isFreeAction: !0,
		description: "随机漂移",
		hooks: { onUse: ({ piece: e, board: o, r, c: i, setNoSkip: s, emit: a, prng: c }) => {
			if (!c) return;
			const n = [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1]
			].sort(() => c.next() - .5);
			for (const [d, p] of n) {
				const c = r + d, n = i + p;
				if (c >= 0 && c < 8 && n >= 0 && n < 8 && !o[c][n] && e && e.color === t) return a({
					type: "MOVE",
					from: {
						r,
						c: i
					},
					to: {
						r: c,
						c: n
					}
				}), void s?.();
			}
			s?.();
		} }
	},
	{
		id: "FREEZE_RAY",
		name: "冰冻射线",
		tier: "RARE",
		description: "冻结敌军",
		hooks: { onUse: ({ piece: e, r: t, c: s, emit: a, setNoSkip: c }) => {
			e && e.type !== r.KING && e.color === o ? a({
				type: "ADD_STATUS",
				pos: {
					r: t,
					c: s
				},
				statusId: i.FROZEN,
				duration: 2
			}) : c?.();
		} }
	},
	{
		id: "PURIFIER",
		name: "信号净化器",
		tier: "COMMON",
		description: "清负面状态",
		hooks: { onUse: ({ piece: e, r: t, c: o, emit: r, setNoSkip: s }) => {
			if (e) {
				const s = [
					i.INFECTED,
					i.SILENCED,
					i.SKILL_LOCKED,
					i.ENCRYPTED
				];
				(e.statuses || []).forEach((e) => {
					s.includes(e.id) && r({
						type: "REMOVE_STATUS",
						pos: {
							r: t,
							c: o
						},
						statusId: e.id
					});
				});
			} else s?.();
		} }
	},
	{
		id: "DECOY",
		name: "诱饵弹",
		tier: "RARE",
		description: "高权重诱饵",
		hooks: { onUse: ({ r: e, c: o, emit: i }) => {
			i({
				type: "SPAWN",
				pos: {
					r: e,
					c: o
				},
				piece: {
					id: q(),
					type: r.PAWN,
					color: t,
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
		description: "摧毁全场断网单位",
		hooks: { onUse: ({ board: e, metadata: i, emit: s }) => {
			const a = Ge(e, t, i).networked, c = Ge(e, o, i).networked;
			C.findPieces(e, (e) => e.type !== r.KING).forEach(({ r: e, c: o, piece: r }) => {
				(r.color === t ? a[e][o] : c[e][o]) || s({
					type: "KILL",
					pos: {
						r: e,
						c: o
					}
				});
			});
		} }
	},
	{
		id: "PARDON",
		name: "赦免令",
		tier: "EPIC",
		description: "策反敌军",
		hooks: { onUse: ({ piece: e, r: s, c: a, emit: c, setNoSkip: n }) => {
			e && e.color === o && e.type !== r.KING ? c({
				type: "SPAWN",
				pos: {
					r: s,
					c: a
				},
				piece: {
					...e,
					color: t,
					statuses: [...e.statuses || [], {
						id: i.BETRAYED,
						duration: 1
					}]
				}
			}) : n?.();
		} }
	},
	{
		id: "TIME_GLASS",
		name: "时间沙漏",
		tier: "RARE",
		isFreeAction: !0,
		description: "加悔棋",
		hooks: { onUse: ({ setNoSkip: e, emit: t }) => {
			t({
				type: "UPDATE_CONSTRAINTS",
				maxUndosOffset: 1
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
		isFreeAction: !0,
		description: "加存档",
		hooks: { onUse: ({ setNoSkip: e, emit: t }) => {
			t({
				type: "UPDATE_CONSTRAINTS",
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
		description: "永久扁平化",
		hooks: { onUse: ({ piece: e, r: o, c: r, emit: s, setNoSkip: a }) => {
			e && e.color === t ? s({
				type: "ADD_STATUS",
				pos: {
					r: o,
					c: r
				},
				statusId: i.FLATTENED,
				duration: 99
			}) : a?.();
		} }
	},
	{
		id: "VOID_ANCHOR_ITEM",
		name: "虚空锚点",
		tier: "RARE",
		description: "封锁地块",
		hooks: { onUse: ({ r: e, c: t, emit: o }) => {
			o({
				type: "SET_SQUARE",
				pos: {
					r: e,
					c: t
				},
				status: {
					id: s,
					duration: 3
				}
			});
		} }
	},
	{
		id: "GRAVITY_TRAP",
		name: "重力陷阱",
		tier: "RARE",
		description: "3x3重力锁定",
		hooks: { onUse: ({ board: e, r: t, c: o, emit: r }) => {
			for (let s = -1; s <= 1; s++) for (let a = -1; a <= 1; a++) {
				const c = t + s, n = o + a;
				c >= 0 && c < 8 && n >= 0 && n < 8 && e[c][n] && r({
					type: "ADD_STATUS",
					pos: {
						r: c,
						c: n
					},
					statusId: i.GRAVITY_LOCKED,
					duration: 2
				});
			}
		} }
	},
	{
		id: "SMOKE_BOMB",
		name: "烟雾弹",
		tier: "COMMON",
		description: "作用于2x2网格，使地块上的棋子免疫1格以外的攻击，持续2回合。",
		hooks: { onUse: ({ r: e, c: t, emit: o }) => {
			const r = 7 === e ? 6 : e, i = 7 === t ? 6 : t;
			for (let s = 0; s <= 1; s++) for (let e = 0; e <= 1; e++) {
				const t = r + s, a = i + e;
				o({
					type: "SET_SQUARE",
					pos: {
						r: t,
						c: a
					},
					status: {
						id: "SMOKE",
						duration: 5
					}
				}), o({
					type: "ANIMATE",
					name: "SMOKE_BOMB",
					pos: {
						r: t,
						c: a
					},
					duration: 400
				});
			}
		} }
	},
	{
		id: "CLOAK",
		name: "信号遮断器",
		tier: "RARE",
		description: "隐身 2 回合",
		hooks: { onUse: ({ piece: e, r: o, c: r, emit: s, setNoSkip: a }) => {
			e && e.color === t ? s({
				type: "ADD_STATUS",
				pos: {
					r: o,
					c: r
				},
				statusId: i.INVISIBLE,
				duration: 2
			}) : a?.();
		} }
	},
	{
		id: "OVERLOAD",
		name: "能量过载",
		tier: "EPIC",
		isFreeAction: !0,
		description: "选定一枚棋子，使其本回合可立刻行动一次（无视网络连接，但不能吃子）。",
		hooks: { onUse: ({ piece: e, r: t, c: o, emit: r, setNoSkip: s }) => {
			e ? (r({
				type: "ADD_STATUS",
				pos: {
					r: t,
					c: o
				},
				statusId: i.CANNOT_CAPTURE,
				duration: 1
			}), r({
				type: "SET_EXTRA_MOVE",
				active: !0
			}), r({
				type: "UPDATE_METADATA",
				updates: { lockedActionUid: e.uid }
			}), r({
				type: "SET_UI_SELECTION",
				pos: {
					r: t,
					c: o
				},
				uid: e.uid ?? null
			}), r({
				type: "SHOW_TEXT",
				text: "Overloaded: No Captures",
				textKey: "LOG_OVERLOAD",
				style: "system"
			})) : s?.();
		} }
	},
	{
		id: "PORTAL",
		name: "传送门",
		tier: "RARE",
		description: "建立传送点",
		hooks: { onUse: ({ r: e, c: t, emit: o }) => {
			o({
				type: "SET_SQUARE",
				pos: {
					r: e,
					c: t
				},
				status: {
					id: c,
					duration: 3
				}
			});
		} }
	},
	{
		id: "DRAFT_ORDER",
		name: "强行征召",
		tier: "EPIC",
		description: "随机复活一枚高级棋子放入库存（仅本局有效）。",
		hooks: { onUse: ({ emit: e, prng: o }) => {
			if (!o) return;
			const i = [
				r.KNIGHT,
				r.BISHOP,
				r.ROOK
			], s = i[Math.floor(o.next() * i.length)], a = {
				id: "revived-" + q(),
				uid: "u-" + q(),
				type: s,
				color: t,
				level: 1,
				skills: [],
				statuses: [],
				maxSlots: 1,
				equippedItems: []
			};
			e({
				type: "MODIFY_RESERVE",
				color: t,
				pieceType: s,
				amount: 1
			}), e({
				type: "ADD_TO_ROSTER",
				piece: a
			}), e({
				type: "SHOW_TEXT",
				text: `New Unit: ${s}`,
				textKey: "LOG_DRAFT_ORDER",
				textParams: { type: s },
				style: "gold"
			});
		} }
	},
	{
		id: "MIDAS",
		name: "点金石",
		tier: "RARE",
		description: "将棋子（不论棋盘或库存）转化为 30 金币。",
		hooks: { onUse: (e) => {
			const t = e.piece || e.board[e.r]?.[e.c];
			t && t.type !== r.KING ? (e.emit({
				type: "REMOVE_FROM_ROSTER",
				pieceUid: t.uid
			}), e.board[e.r]?.[e.c] && (e.emit({
				type: "REMOVE_PIECE",
				pos: {
					r: e.r,
					c: e.c
				}
			}), e.emit({
				type: "ANIMATE",
				name: "GOLD_SPARKLE",
				pos: {
					r: e.r,
					c: e.c
				},
				duration: 600
			})), e.emit({
				type: "MODIFY_GOLD",
				amount: 30,
				reason: "MIDAS_TOUCH"
			}), e.emit({
				type: "SHOW_TEXT",
				text: "Midas Touch +30",
				textKey: "LOG_MIDAS",
				style: "gold"
			})) : e.setNoSkip?.();
		} }
	},
	{
		id: "ROYAL_SACRIFICE",
		name: "皇家献祭",
		tier: "EPIC",
		description: "献祭一名友军，使其力量永久叠加至该棋子（等级+1，槽位+1）。",
		hooks: { onUse: (e) => {
			e.piece && e.piece.type !== r.KING ? (e.emit({
				type: "REMOVE_FROM_ROSTER",
				pieceUid: e.piece.uid
			}), e.emit({
				type: "LEVEL_UP",
				pos: {
					r: e.r,
					c: e.c
				}
			}), e.emit({
				type: "UPDATE_ROSTER_PIECE",
				pieceUid: e.piece.uid,
				updates: {
					maxSlots: (e.piece.maxSlots || 1) + 1,
					level: (e.piece.level || 1) + 1
				}
			}), e.emit({
				type: "SHOW_TEXT",
				text: "Sacrifice Success: Power Boost",
				textKey: "LOG_SACRIFICE_SUCCESS",
				style: "gold"
			})) : e.setNoSkip?.();
		} }
	},
	{
		id: "PASSIVE_ANTENNA",
		name: "财富天线",
		tier: "RARE",
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
		isFreeAction: !0,
		description: "随机消耗品",
		hooks: { onUse: ({ emit: e, setNoSkip: t, prng: o }) => {
			if (!o) return;
			const r = [
				"BATTERY",
				"PURIFIER",
				"SMOKE_BOMB",
				"SPARE_PARTS"
			], i = r[Math.floor(o.next() * r.length)];
			e({
				type: "ADD_ITEM",
				item: {
					id: q(),
					type: "CONSUMABLE",
					name: i,
					desc: "From Loot Box",
					effectId: i
				}
			}), t?.();
		} }
	},
	{
		id: "EQ_BAYONET",
		name: "刺刀",
		tier: "COMMON",
		pieceType: r.PAWN,
		description: "兵可以向前攻击（吃子）。",
		modifiers: { movement: (e, o) => {
			const { board: r, r: i, c: s, piece: a, isControlSquares: c } = e, n = i + (a.color === t ? -1 : 1);
			if (n >= 0 && n < 8) {
				const e = r[n][s];
				(e && e.color !== a.color || c && e && e.color === a.color) && o.push({
					r: n,
					c: s
				});
			}
			return o;
		} }
	},
	{
		id: "EQ_SCOUT_RADAR",
		name: "侦察雷达",
		tier: "RARE",
		pieceType: r.PAWN,
		description: "只要该兵连通，周围 2 格内的敌方隐身/幻影失效。"
	},
	{
		id: "EQ_SIGNAL_BACKPACK",
		name: "信号背包",
		tier: "RARE",
		pieceType: r.PAWN,
		description: "强制使其正前 and 正后 2 格内的友军连网。",
		modifiers: {
			networkRange: ({ r: e, c: o, piece: r }) => {
				const i = [], s = r.color === t ? -1 : 1;
				for (let t = 1; t <= 2; t++) e + s * t >= 0 && e + s * t < 8 && i.push({
					r: e + s * t,
					c: o
				}), e - s * t >= 0 && e - s * t < 8 && i.push({
					r: e - s * t,
					c: o
				});
				return i;
			},
			networkSource: () => !0
		}
	},
	{
		id: "EQ_HOOF_ARMOR",
		name: "护蹄重甲",
		tier: "RARE",
		pieceType: r.KNIGHT,
		description: "跳跃落点如果有敌方兵，直接吃掉，且该棋子可立刻再次行动（无视网络连接）。",
		hooks: { onKill: ({ victim: e, piece: t, r: o, c: i, emit: s }) => {
			e && e.type === r.PAWN && (s({
				type: "SET_EXTRA_MOVE",
				active: !0
			}), s({
				type: "UPDATE_METADATA",
				updates: { lockedActionUid: t.uid }
			}), s({
				type: "SET_UI_SELECTION",
				pos: {
					r: o,
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
		pieceType: r.KNIGHT,
		description: "马可以选择跳跃 3x1 的距离。",
		modifiers: { movement: (e, t) => {
			const { board: o, piece: r, r: i, c: s, isControlSquares: a } = e;
			return [
				[-3, -1],
				[-3, 1],
				[3, -1],
				[3, 1],
				[-1, -3],
				[1, -3],
				[-1, 3],
				[1, 3]
			].forEach(([e, c]) => {
				const n = i + e, d = s + c;
				if (n >= 0 && n < 8 && d >= 0 && d < 8) {
					const e = o[n][d];
					e && e.color === r.color && !a || t.push({
						r: n,
						c: d
					});
				}
			}), t;
		} }
	},
	{
		id: "EQ_SHOCK_STIRRUPS",
		name: "震荡马镫",
		tier: "EPIC",
		pieceType: r.KNIGHT,
		description: "马落地时，使落点周围十字方向 1 格内敌军眩晕 1 回合。",
		hooks: { onAfterMove: ({ board: e, piece: t, r: o, c: s, emit: a }) => {
			[
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1]
			].forEach(([c, n]) => {
				const d = o + c, p = s + n;
				if (d >= 0 && d < 8 && p >= 0 && p < 8) {
					const o = e[d][p];
					o && o.color !== t.color && o.type !== r.KING && a({
						type: "ADD_STATUS",
						pos: {
							r: d,
							c: p
						},
						statusId: i.FROZEN,
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
		pieceType: r.BISHOP,
		description: "被吃掉时，将其杀手（如果是斜线攻击）一同带走。",
		hooks: { onDeath: ({ r: e, c: t, attacker: o, attackerPos: r, emit: i }) => {
			if (o && r) {
				const s = Math.abs(r.r - e);
				s === Math.abs(r.c - t) && s > 0 && (i({
					type: "KILL",
					targetId: o.id
				}), i({
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
		pieceType: r.BISHOP,
		description: "如果吃掉距离自己 3 格及以上的敌人，立即获得 5 金币奖励。",
		hooks: { onKill: ({ piece: e, from: o, r, c: i, emit: s }) => {
			o && e.color === t && Math.max(Math.abs(r - o.r), Math.abs(i - o.c)) >= 3 && s({
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
		pieceType: r.BISHOP,
		description: "移动后，清除落点周围 3x3 范围友军的负面状态。",
		hooks: { onAfterMove: ({ board: e, piece: t, r: o, c: r, emit: s }) => {
			const a = [
				i.FROZEN,
				i.PETRIFIED,
				i.INFECTED,
				i.SILENCED,
				i.GRAVITY_LOCKED,
				i.SKILL_LOCKED
			];
			for (let i = -1; i <= 1; i++) for (let c = -1; c <= 1; c++) {
				const n = o + i, d = r + c;
				if (n >= 0 && n < 8 && d >= 0 && d < 8) {
					const o = e[n][d];
					o && o.color === t.color && (o.statuses || []).forEach((e) => {
						a.includes(e.id) && s({
							type: "REMOVE_STATUS",
							pos: {
								r: n,
								c: d
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
		pieceType: r.ROOK,
		description: "车可以斜向移动一格。",
		modifiers: { movement: ({ board: e, piece: t, r: o, c: r }, i) => ([
			[-1, -1],
			[-1, 1],
			[1, -1],
			[1, 1]
		].forEach(([s, a]) => {
			const c = o + s, n = r + a;
			if (c >= 0 && c < 8 && n >= 0 && n < 8) {
				const o = e[c][n];
				o && o.color === t.color || i.push({
					r: c,
					c: n
				});
			}
		}), i) }
	},
	{
		id: "EQ_BASE_STATION",
		name: "基站天线",
		tier: "EPIC",
		pieceType: r.ROOK,
		description: "车处于连通时，其所在的整条行和列的所有友军视为已连网。",
		modifiers: { networkRange: ({ r: e, c: t }) => {
			const o = [];
			for (let r = 0; r < 8; r++) r !== t && o.push({
				r: e,
				c: r
			}), r !== e && o.push({
				r,
				c: t
			});
			return o;
		} }
	},
	{
		id: "EQ_REACTIVE_ARMOR",
		name: "反应装甲",
		tier: "EPIC",
		pieceType: r.ROOK,
		description: "免疫来自正上方和正下方的任何攻击。",
		modifiers: { invulnerable: ({ board: e, r: t, c: o }, r) => C.findPieces(e, (e, t, i) => e === r && i === o).length > 0 }
	},
	{
		id: "EQ_PHOENIX_FEATHER",
		name: "凤凰羽毛",
		tier: "LEGENDARY",
		pieceType: r.QUEEN,
		description: "被吃时，在王身边重生为等级 1 的兵，随后该装备损毁。",
		hooks: { onDeath: ({ board: e, piece: t, cancelAction: o, emit: i, r: s, c: a, prng: c }) => {
			const n = C.findPieces(e, (e) => e.type === r.KING && e.color === t.color)[0], d = n ? {
				r: n.r,
				c: n.c
			} : null;
			if (d && c) {
				const n = [
					[-1, -1],
					[-1, 0],
					[-1, 1],
					[0, -1],
					[0, 1],
					[1, -1],
					[1, 0],
					[1, 1]
				].sort(() => c.next() - .5);
				for (const [c, p] of n) {
					const n = d.r + c, E = d.c + p;
					if (n >= 0 && n < 8 && E >= 0 && E < 8 && !e[n][E]) {
						const e = {
							...t,
							type: r.PAWN,
							level: 1,
							equippedItems: t.equippedItems.filter((e) => "EQ_PHOENIX_FEATHER" !== e.effectId)
						};
						i({
							type: "REMOVE_PIECE",
							pos: {
								r: s,
								c: a
							}
						}), i({
							type: "SPAWN",
							pos: {
								r: n,
								c: E
							},
							piece: e
						}), i({
							type: "SHOW_TEXT",
							text: "Phoenix Rebirth",
							textKey: "LOG_PHOENIX_REBIRTH",
							style: "system"
						}), o?.();
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
		pieceType: r.QUEEN,
		description: "吃掉敌军后在落点留下残影（2回合），之后可无视距离移动至残影处。",
		hooks: { onKill: ({ r: e, c: t, piece: o, emit: r }) => {
			r({
				type: "SET_SQUARE",
				pos: {
					r: e,
					c: t
				},
				status: {
					id: p,
					duration: 3,
					metadata: { uid: o.uid }
				}
			});
		} },
		modifiers: { movement: ({ metadata: e, piece: t }, o) => {
			const r = e?.squares || {};
			for (const i in r) if (r[i].some((e) => e.id === p && e.metadata?.uid === t.uid)) {
				const [e, t] = i.split(",").map(Number);
				o.push({
					r: e,
					c: t
				});
			}
			return o;
		} }
	},
	{
		id: "EQ_SCEPTER_OF_CHARM",
		name: "蛊惑权杖",
		tier: "LEGENDARY",
		pieceType: r.QUEEN,
		description: "威胁范围内有且仅有一个敌方单位且它无相邻友军时，将其策反 1 回合。",
		hooks: { onTurnStart: ({ board: e, r: t, c: o, piece: s, emit: a }) => {
			const c = [], n = [...R.R, ...R.B];
			for (const [i, d] of n) {
				let a = t + i, n = o + d;
				for (; a >= 0 && a < 8 && n >= 0 && n < 8;) {
					const t = e[a][n];
					if (t) {
						t.color !== s.color && t.type !== r.KING && c.push({
							r: a,
							c: n,
							p: t
						});
						break;
					}
					a += i, n += d;
				}
			}
			if (1 === c.length) {
				const t = c[0];
				let o = !1;
				for (let r = -1; r <= 1; r++) for (let i = -1; i <= 1; i++) {
					if (0 === r && 0 === i) continue;
					const s = t.r + r, a = t.c + i;
					if (s >= 0 && s < 8 && a >= 0 && a < 8) {
						const r = e[s][a];
						if (r && r.color === t.p.color) {
							o = !0;
							break;
						}
					}
				}
				o || a({
					type: "SPAWN",
					pos: {
						r: t.r,
						c: t.c
					},
					piece: {
						...t.p,
						color: s.color,
						statuses: [...t.p.statuses || [], {
							id: i.BETRAYED,
							duration: 1
						}]
					}
				});
			}
		} }
	},
	{
		id: "EQ_LIGHTNING_ROD",
		name: "避雷针",
		tier: "RARE",
		pieceType: r.KING,
		description: "王免疫敌方环境陷阱 and 负面状态的影响。",
		hooks: { onTurnStart: ({ piece: e, r: t, c: o, emit: r }) => {
			const s = [
				i.FROZEN,
				i.PETRIFIED,
				i.INFECTED,
				i.SILENCED,
				i.GRAVITY_LOCKED,
				i.SKILL_LOCKED
			];
			(e.statuses || []).forEach((e) => {
				s.includes(e.id) && r({
					type: "REMOVE_STATUS",
					pos: {
						r: t,
						c: o
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
		pieceType: r.KING,
		description: "王提供的初始网络支持范围变为十字方向 2 格。",
		modifiers: { networkRange: ({ r: e, c: t }) => {
			const o = [];
			for (const [r, i] of [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1]
			]) for (let s = 1; s <= 2; s++) {
				const a = e + r * s, c = t + i * s;
				a >= 0 && a < 8 && c >= 0 && c < 8 && o.push({
					r: a,
					c
				});
			}
			return o;
		} }
	},
	{
		id: "EQ_ROYAL_GUARD",
		name: "御前侍卫",
		tier: "LEGENDARY",
		pieceType: r.KING,
		description: "王相邻友军被吃时，自动消耗 10 金币将其复活（每局限一次）。",
		tags: ["GLOBAL"],
		hooks: { onDeath: ({ board: e, piece: t, ownerPos: o, subject: r, r: i, c: s, cancelAction: a, emit: c, gold: n, prng: d }) => {
			if (o && r && r.color === t.color && r.uid !== t.uid && 1 === Math.max(Math.abs(i - o.r), Math.abs(s - o.c))) {
				const i = t.equippedItems.find((e) => "EQ_ROYAL_GUARD" === e.effectId);
				if (i && !i.metadata?.used && (n ?? 0) >= 10 && d) {
					const i = [
						[-1, -1],
						[-1, 0],
						[-1, 1],
						[0, -1],
						[0, 1],
						[1, -1],
						[1, 0],
						[1, 1]
					].sort(() => d.next() - .5);
					let s = null;
					for (const [t, r] of i) {
						const i = o.r + t, a = o.c + r;
						if (i >= 0 && i < 8 && a >= 0 && a < 8 && !e[i][a]) {
							s = {
								r: i,
								c: a
							};
							break;
						}
					}
					if (s) {
						c({
							type: "MODIFY_GOLD",
							amount: -10,
							reason: "ROYAL_GUARD"
						});
						const e = t.equippedItems.map((e) => "EQ_ROYAL_GUARD" === e.effectId ? {
							...e,
							metadata: { used: !0 }
						} : e);
						c({
							type: "UPDATE_ROSTER_PIECE",
							pieceUid: t.uid,
							updates: { equippedItems: e }
						}), c({
							type: "SPAWN",
							pos: s,
							piece: {
								...r,
								statuses: []
							}
						}), a?.(), c({
							type: "SHOW_TEXT",
							text: "Guardian Sacrifice",
							textKey: "LOG_ROYAL_GUARD",
							style: "system"
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
		description: "当棋子被吃掉时，吃它的敌方棋子被冻结 1 回合。",
		hooks: { onDeath: ({ attacker: e, emit: t }) => {
			e && e.type !== r.KING && t({
				type: "ADD_STATUS",
				targetId: e.id,
				statusId: i.FROZEN,
				duration: 2
			});
		} }
	},
	{
		id: "EQ_LIGHTWEIGHT_ALLOY",
		name: "轻量化合金",
		tier: "COMMON",
		description: "棋子可以在断网状态下强行移动一次，随后该装备损毁。",
		modifiers: { bypassFrozen: () => !0 },
		hooks: { onAfterMove: ({ board: e, piece: t, r: o, c: r, from: i, emit: s, metadata: a }) => {
			if (!i) return;
			const c = e[o][r], n = e[i.r][i.c];
			e[i.r][i.c] = c, e[o][r] = n;
			const { networked: d } = Ge(e, t.color, a), p = !d[i.r][i.c];
			e[o][r] = c, e[i.r][i.c] = n, p && (s({
				type: "SPAWN",
				pos: {
					r: o,
					c: r
				},
				piece: {
					...t,
					equippedItems: t.equippedItems.filter((e) => "EQ_LIGHTWEIGHT_ALLOY" !== e.effectId)
				}
			}), s({
				type: "SHOW_TEXT",
				text: "Alloy Broken",
				textKey: "LOG_ALLOY_BROKEN",
				style: "system",
				pos: {
					r: o,
					c: r
				}
			}));
		} }
	},
	{
		id: "EQ_CAMOUFLAGE",
		name: "伪装迷彩",
		tier: "RARE",
		description: "只要该棋子本回合未移动且未吃子，它处于“伪装”状态。",
		hooks: {
			onTurnStart: ({ piece: e, r: t, c: o, emit: r }) => r({
				type: "ADD_STATUS",
				pos: {
					r: t,
					c: o
				},
				statusId: i.CAMOUFLAGED,
				duration: 2
			}),
			onAfterMove: ({ piece: e, r: t, c: o, emit: r }) => {
				r({
					type: "REMOVE_STATUS",
					pos: {
						r: t,
						c: o
					},
					statusId: i.CAMOUFLAGED
				});
			}
		}
	},
	{
		id: "EQ_STABILIZER",
		name: "稳定器",
		tier: "COMMON",
		description: "该棋子不会被任何推开、拉近等强制位移效果影响。"
	},
	{
		id: "EQ_SELF_DESTRUCT",
		name: "自毁协议",
		tier: "RARE",
		description: "被吃时对周围 1 格造成毁灭爆炸，随后装备损毁。",
		hooks: { onDeath: ({ board: e, r: t, c: o, emit: i }) => {
			for (let s = -1; s <= 1; s++) for (let a = -1; a <= 1; a++) {
				const c = t + s, n = o + a;
				c >= 0 && c < 8 && n >= 0 && n < 8 && e[c][n]?.type !== r.KING && i({
					type: "KILL",
					pos: {
						r: c,
						c: n
					}
				});
			}
		} }
	},
	{
		id: "EQ_BACKUP_BATTERY",
		name: "备用电池组",
		tier: "COMMON",
		description: "该棋子断网后，可以多撑 2 回合才进入瘫痪状态。",
		hooks: { onTurnStart: ({ board: e, r: t, c: o, piece: r, emit: s, metadata: a }) => {
			const { networked: c } = Ge(e, r.color, a);
			c[t][o] ? s({
				type: "SPAWN",
				pos: {
					r: t,
					c: o
				},
				piece: {
					...r,
					metadata: {
						...r.metadata,
						batteryLeft: 2
					}
				}
			}) : r.metadata?.batteryLeft > 0 && (s({
				type: "SPAWN",
				pos: {
					r: t,
					c: o
				},
				piece: {
					...r,
					metadata: {
						...r.metadata,
						batteryLeft: r.metadata.batteryLeft - 1
					}
				}
			}), s({
				type: "ADD_STATUS",
				pos: {
					r: t,
					c: o
				},
				statusId: i.BACKUP_BUFFER_ACTIVE,
				duration: 2
			}));
		} }
	},
	{
		id: "EQ_EMERGENCY_LINK",
		name: "应急链路",
		tier: "RARE",
		description: "断网时，强行与周围 2 格内的另一名友军建立临时连接。",
		modifiers: { alwaysNetworked: ({ board: e, r: t, c: o, piece: r }) => {
			for (let i = -2; i <= 2; i++) for (let s = -2; s <= 2; s++) {
				const a = t + i, c = o + s;
				if (a >= 0 && a < 8 && c >= 0 && c < 8 && e[a][c]?.color === r.color && e[a][c] !== r) return !0;
			}
			return !1;
		} }
	},
	{
		id: "EQ_BOUNTY_MODULE",
		name: "赏金模块",
		tier: "EPIC",
		description: "该棋子每吃掉一个敌方棋子，立即获得 10 金币。",
		hooks: { onKill: ({ piece: e, emit: o }) => {
			e.color === t && o({
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
		description: "被吃掉时，如果有同类棋子在库存，免费将其部署在王周围。",
		hooks: { onDeath: ({ piece: e, board: t, reserves: o, emit: i, prng: s }) => {
			if (o && (o[e.color]?.[e.type] || 0) > 0 && s) {
				let o = null;
				if (t.forEach((t, i) => t.forEach((t, s) => {
					t?.type === r.KING && t.color === e.color && (o = {
						r: i,
						c: s
					});
				})), o) {
					const r = [
						[-1, -1],
						[-1, 0],
						[-1, 1],
						[0, -1],
						[0, 1],
						[1, -1],
						[1, 0],
						[1, 1]
					].sort(() => s.next() - .5);
					for (const [s, a] of r) {
						const r = o.r + s, c = o.c + a;
						if (r >= 0 && r < 8 && c >= 0 && c < 8 && !t[r][c]) {
							i({
								type: "MODIFY_RESERVE",
								color: e.color,
								pieceType: e.type,
								amount: -1
							}), i({
								type: "SPAWN",
								pos: {
									r,
									c
								},
								piece: {
									...e,
									id: q(),
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
		description: "每场战斗的第一回合，可以额外进行一次部署操作。",
		pieceType: r.KING,
		hooks: { onTurnStart: ({ piece: e, historyLength: o, emit: r }) => {
			const i = o ?? 0;
			e.color === t && 0 === i && e.equippedItems?.some((e) => "EQ_TACTICAL_OPS" === e.effectId) && (r({
				type: "SET_EXTRA_MOVE",
				active: !0
			}), r({
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
		description: "前 2 回合，敌方 AI 禁止部署 new 棋子。",
		pieceType: r.KING,
		tags: ["GLOBAL"],
		hooks: { onDeploy: ({ r: e, c: t, piece: o, subject: r, historyLength: i, cancelAction: s, emit: a }) => {
			o && r && r.color !== o.color && o.equippedItems.some((e) => "EQ_DIPLOMATIC_IMMUNITY" === e.effectId) && (i ?? 0) < 5 && (a({
				type: "MODIFY_RESERVE",
				color: r.color,
				pieceType: r.type,
				amount: 1
			}), a({
				type: "REMOVE_PIECE",
				pos: {
					r: e,
					c: t
				}
			}), a({
				type: "SHOW_TEXT",
				text: "Diplomatic Intercept",
				textKey: "LOG_DIPLOMATIC_INTERCEPT",
				style: "system"
			}), s?.());
		} }
	},
	{
		id: "EQ_FULL_BAND_SCANNER",
		name: "全频扫描仪",
		tier: "EPIC",
		description: "回合开始时，强制所有敌方“隐身”和“陷阱”显形销毁。",
		pieceType: r.KING,
		hooks: { onTurnStart: ({ board: e, piece: r, metadata: s, emit: c }) => {
			if (r.color === t && (C.findPieces(e, (e) => e.color === o && e.statuses?.some((e) => e.id === i.INVISIBLE)).forEach(({ r: e, c: t }) => c({
				type: "REMOVE_STATUS",
				pos: {
					r: e,
					c: t
				},
				statusId: i.INVISIBLE
			})), s && s.squares)) {
				const e = { ...s.squares };
				let t = !1;
				for (const o in e) {
					const r = e[o].filter((e) => e.id !== a);
					r.length !== e[o].length && (e[o] = r, t = !0);
				}
				t && c({
					type: "UPDATE_METADATA",
					updates: { squares: e }
				});
			}
		} }
	},
	{
		id: "EQ_BLACK_MARKET_LEDGER",
		name: "黑市账本",
		tier: "EPIC",
		description: "击杀敌方国王（胜利）时，额外获得 30 金币的巨额收益。",
		pieceType: r.KING,
		tags: ["GLOBAL"],
		hooks: { onDeath: ({ piece: e, subject: t, emit: i }) => {
			t && t.type === r.KING && t.color === o && e.equippedItems.some((e) => "EQ_BLACK_MARKET_LEDGER" === e.effectId) && i({
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
		description: "每当有友方棋子阵亡，随机获得一个普通消耗品。",
		pieceType: r.KING,
		tags: ["GLOBAL"],
		hooks: { onDeath: ({ piece: e, subject: o, emit: r, prng: i }) => {
			if (o && o.color === t && o.uid !== e.uid && i) {
				const e = [
					"BATTERY",
					"SMOKE_BOMB",
					"PURIFIER"
				], t = e[Math.floor(i.next() * e.length)];
				r({
					type: "ADD_ITEM",
					item: {
						id: q(),
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
		pieceType: r.KING,
		description: "当场上只剩下王且无兵可发时，获得“后”和“马”的移动能力。",
		modifiers: { movement: (e, t) => {
			const { board: o, piece: r, r: i, c: s } = e, a = !0 === r.metadata?.isReserveEmpty;
			if (1 === C.findPieces(o, (e) => e.color === r.color).length && a) [
				[0, 1],
				[0, -1],
				[1, 0],
				[-1, 0],
				[1, 1],
				[1, -1],
				[-1, 1],
				[-1, -1]
			].forEach(([e, a]) => {
				let c = i + e, n = s + a;
				for (; c >= 0 && c < o.length && n >= 0 && n < o[0].length;) {
					const i = o[c][n];
					if (i) {
						i.color !== r.color && t.push({
							r: c,
							c: n
						});
						break;
					}
					t.push({
						r: c,
						c: n
					}), c += e, n += a;
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
			].forEach(([e, a]) => {
				const c = i + e, n = s + a;
				if (c >= 0 && c < o.length && n >= 0 && n < o[0].length) {
					const e = o[c][n];
					e && e.color === r.color || t.push({
						r: c,
						c: n
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
		description: "每进入下一关且金币>50，立刻获得 10 金币利息。",
		pieceType: r.KING,
		hooks: { onTurnStart: ({ piece: e, gold: o, historyLength: r, emit: i, r: s, c: a }) => {
			0 === (r ?? 0) && e.color === t && "number" == typeof s && "number" == typeof a && (e.metadata?.ventureCapitalTriggered || (i({
				type: "SPAWN",
				pos: {
					r: s,
					c: a
				},
				piece: {
					...e,
					metadata: {
						...e.metadata,
						ventureCapitalTriggered: !0
					}
				}
			}), (o ?? 0) >= 50 && i({
				type: "MODIFY_GOLD",
				amount: 10,
				reason: "VENTURE_CAPITAL"
			})));
		} }
	},
	{
		id: "EQ_SWARM_INTELLIGENCE",
		name: "蜂群意识",
		tier: "LEGENDARY",
		pieceType: r.KING,
		description: "场上所有的“兵”只要互相相邻，即视为与王连通。",
		hooks: {}
	},
	{
		id: "SCOUT_PROBE",
		name: "侦察探头",
		tier: "COMMON",
		description: "使 2x2 区域内的敌方隐身单位显形。",
		hooks: { onUse: ({ board: e, r: t, c: o, emit: r }) => {
			for (let s = 0; s < 2; s++) for (let a = 0; a < 2; a++) {
				const c = t + s, n = o + a;
				c < 8 && n < 8 && e[c][n] && r({
					type: "REMOVE_STATUS",
					pos: {
						r: c,
						c: n
					},
					statusId: i.INVISIBLE
				});
			}
		} }
	},
	{
		id: "RUST_SPRAY",
		name: "锈蚀试剂",
		tier: "COMMON",
		description: "目标下回合无法吃子。",
		hooks: { onUse: ({ r: e, c: t, emit: o }) => {
			o({
				type: "ADD_STATUS",
				pos: {
					r: e,
					c: t
				},
				statusId: i.RUSTED,
				duration: 2
			});
		} }
	},
	{
		id: "GOLD_MAGNET_ITEM",
		name: "金币磁铁",
		tier: "COMMON",
		description: "每移动一格获得 1 金币。",
		hooks: { onUse: (e) => {
			e.emit({
				type: "ADD_STATUS",
				pos: {
					r: e.r,
					c: e.c
				},
				statusId: i.GOLD_MAGNET,
				duration: 1
			});
		} }
	},
	{
		id: "SCRAP_PART",
		name: "多余零件",
		tier: "COMMON",
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
		description: "强制敌方兵后退。",
		hooks: { onUse: (e) => {
			const { piece: t, r: i, c: s, emit: a, board: c } = e;
			if (t?.type === r.PAWN && t.color === o) {
				const e = i - 1;
				e >= 0 && !c[e][s] && a({
					type: "MOVE",
					from: {
						r: i,
						c: s
					},
					to: {
						r: e,
						c: s
					}
				});
			}
		} }
	},
	{
		id: "BARRICADE_ITEM",
		name: "简易工事",
		tier: "COMMON",
		description: "放置一个障碍物。",
		hooks: { onUse: ({ r: e, c: t, emit: o }) => {
			o({
				type: "SET_SQUARE",
				pos: {
					r: e,
					c: t
				},
				status: {
					id: l,
					duration: 99
				}
			});
		} }
	},
	{
		id: "EMERGENCY_PATCH",
		name: "紧急补丁",
		tier: "COMMON",
		description: "移除感染。",
		hooks: { onUse: ({ r: e, c: t, emit: o }) => {
			o({
				type: "REMOVE_STATUS",
				pos: {
					r: e,
					c: t
				},
				statusId: i.INFECTED
			});
		} }
	},
	{
		id: "SWAP_PLUGIN",
		name: "交换插件",
		tier: "RARE",
		description: "交换相邻友军位置。",
		hooks: { onUse: ({ board: e, r: o, c: r, emit: i }) => {
			for (const [s, a] of [
				[0, 1],
				[1, 0],
				[0, -1],
				[-1, 0]
			]) {
				const c = o + s, n = r + a;
				if (c >= 0 && c < 8 && n >= 0 && n < 8 && e[c][n]?.color === t) {
					i({
						type: "SWAP_PIECES",
						posA: {
							r: o,
							c: r
						},
						posB: {
							r: c,
							c: n
						}
					});
					break;
				}
			}
		} }
	},
	{
		id: "COMMAND_STEAL",
		name: "指令窃取",
		tier: "RARE",
		description: "下回合无法行动并劫持信号。",
		hooks: { onUse: ({ r: e, c: t, emit: o }) => {
			o({
				type: "ADD_STATUS",
				pos: {
					r: e,
					c: t
				},
				statusId: i.FROZEN,
				duration: 2
			}), o({
				type: "ADD_STATUS",
				pos: {
					r: e,
					c: t
				},
				statusId: i.JAMMING_TOWER,
				duration: 2
			});
		} }
	},
	{
		id: "DATA_HARVEST",
		name: "数据收割",
		tier: "RARE",
		description: "每个冻结单位 provide 10 金币。",
		hooks: { onUse: ({ board: e, emit: t }) => {
			let o = 0;
			e.flat().forEach((e) => {
				e?.statuses?.some((e) => e.id === i.FROZEN) && o++;
			}), t({
				type: "MODIFY_GOLD",
				amount: 10 * o,
				reason: "HARVEST"
			});
		} }
	},
	{
		id: "GOLDEN_TOUCH",
		name: "黄金化",
		tier: "RARE",
		description: "将敌方兵变为 50 金币。",
		hooks: { onUse: ({ piece: e, r: t, c: i, emit: s }) => {
			e?.type === r.PAWN && e.color === o && (s({
				type: "KILL",
				pos: {
					r: t,
					c: i
				}
			}), s({
				type: "MODIFY_GOLD",
				amount: 50,
				reason: "GOLDEN"
			}));
		} }
	},
	{
		id: "ILLEGAL_SLOT",
		name: "非法扩容",
		tier: "EPIC",
		description: "装备槽永久 +1。",
		hooks: { onUse: ({ piece: e, emit: t }) => {
			e && e.uid && t({
				type: "UPDATE_ROSTER_PIECE",
				pieceUid: e.uid,
				updates: { maxSlots: (e.maxSlots || 1) + 1 }
			});
		} }
	},
	{
		id: "BLACK_ORDER",
		name: "黑市订单",
		tier: "EPIC",
		description: "抢夺敌方一件装备。",
		hooks: { onUse: ({ piece: e, emit: t }) => {
			if (e?.equippedItems?.length && e.uid) t({
				type: "ADD_ITEM",
				item: {
					...e.equippedItems[0],
					id: q()
				}
			}), t({
				type: "UPDATE_ROSTER_PIECE",
				pieceUid: e.uid,
				updates: { equippedItems: e.equippedItems.slice(1) }
			});
		} }
	},
	{
		id: "REAPER_EXE",
		name: "死神程序",
		tier: "LEGENDARY",
		description: "击杀所有断网棋子。",
		hooks: { onUse: ({ board: e, metadata: i, emit: s }) => {
			const { networked: a } = Ge(e, t, i), { networked: c } = Ge(e, o, i);
			C.findPieces(e, (e) => e.type !== r.KING).forEach(({ r: e, c: o, piece: r }) => {
				(r.color === t ? a[e][o] : c[e][o]) || s({
					type: "KILL",
					pos: {
						r: e,
						c: o
					}
				});
			});
		} }
	},
	{
		id: "WHEEL_OF_FATE",
		name: "命运轮盘",
		tier: "LEGENDARY",
		description: "触发 3 个随机道具。",
		hooks: { onUse: (e) => {
			const t = [
				"BATTERY",
				"PURIFIER",
				"SMOKE_BOMB",
				"SPARE_PARTS"
			], o = e.prng || { next: Math.random };
			for (let r = 0; r < 3; r++) {
				const r = t[Math.floor(o.next() * t.length)];
				e.emit({
					type: "SHOW_TEXT",
					text: "Fate Trigger: " + r,
					textKey: "LOG_WHEEL_TRIGGER",
					textParams: { item: r },
					style: "gold"
				});
				const i = Pe.getDefinition(r);
				i?.hooks?.onUse && i.hooks.onUse(e);
			}
		} }
	},
	{
		id: "EQ_ROYAL_SALUTE",
		name: "皇家礼炮",
		tier: "EPIC",
		pieceType: r.QUEEN,
		description: "吃子后随机雷击一名敌方兵。冷却 3 回合。",
		hooks: {
			onKill: ({ board: e, piece: t, emit: o, prng: i }) => {
				if (0 === (t.metadata?.saluteCd || 0) && i) {
					const s = C.findPieces(e, (e) => e.color !== t.color && e.type === r.PAWN);
					if (s.length > 0) {
						const e = s[Math.floor(i.next() * s.length)];
						o({
							type: "ANIMATE",
							name: "LIGHTNING",
							pos: {
								r: e.r,
								c: e.c
							},
							duration: 500
						}), o({
							type: "KILL",
							pos: {
								r: e.r,
								c: e.c
							}
						}), o({
							type: "UPDATE_ROSTER_PIECE",
							pieceUid: t.uid,
							updates: { metadata: {
								...t.metadata,
								saluteCd: 4
							} }
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
		},
		getDisplayStatus: (e, t) => {
			const o = e.metadata?.saluteCd || 0;
			return o > 0 ? {
				text: `${t("cooldown")}: ${t("turnsRemaining", { n: o })}`,
				colorClass: "text-slate-500"
			} : {
				text: t("ready"),
				colorClass: "text-cyan-400 animate-pulse"
			};
		}
	},
	{
		id: "EQ_GOLDEN_THRONE",
		name: "黄金王座",
		tier: "LEGENDARY",
		pieceType: r.KING,
		description: "每回合开始，根据场上连通的友军数量获得金币。",
		hooks: { onTurnStart: ({ board: e, piece: o, emit: r, metadata: i }) => {
			if (o.color === t) {
				const { networked: t } = Ge(e, o.color, i);
				let s = 0;
				t.forEach((e) => e.forEach((e) => {
					e && s++;
				})), s > 0 && (r({
					type: "MODIFY_GOLD",
					amount: s,
					reason: "THRONE"
				}), r({
					type: "SHOW_TEXT",
					text: `Throne Income +${s}`,
					textKey: "LOG_THRONE_REWARD",
					textParams: { amount: s },
					style: "gold"
				}));
			}
		} }
	},
	{
		id: "SIGNAL_TOWER_DEFENSE",
		name: "信号塔防御",
		tier: "EPIC",
		description: "主动：消耗 20 金币在当前格子放置永久“信号增益塔”。每关限一次。",
		hooks: { onUse: (e) => {
			const { r: t, c: o, board: r, emit: i, gold: s, setNoSkip: a } = e;
			(s ?? 0) < 20 ? (i({
				type: "SHOW_TEXT",
				text: "Insufficient gold",
				textKey: "LOG_NO_FUNDS",
				style: "system"
			}), a?.()) : r[t][o] ? (i({
				type: "SHOW_TEXT",
				text: "No space around",
				textKey: "LOG_NO_SPACE",
				style: "system"
			}), a?.()) : (i({
				type: "MODIFY_GOLD",
				amount: -20,
				reason: "BUILD_TOWER"
			}), i({
				type: "SET_SQUARE",
				pos: {
					r: t,
					c: o
				},
				status: {
					id: u,
					duration: 99
				}
			}), i({
				type: "SHOW_TEXT",
				text: "Signal tower built",
				textKey: "LOG_TOWER_BUILT",
				style: "system",
				pos: {
					r: t,
					c: o
				}
			}));
		} }
	},
	{
		id: "EQ_DEFLATION",
		name: "通缩政策",
		tier: "LEGENDARY",
		description: "全局：商店所有商品价格降低 20%。",
		hooks: { onPriceCalculate: ({ priceRef: e }) => {
			e && (e.value = Math.floor(.8 * e.value));
		} }
	},
	{
		id: "EQ_HACKER_TERMINAL",
		name: "黑客终端",
		tier: "EPIC",
		description: "每回合开始时，随机使一个敌方高级棋子冻结。",
		hooks: { onTurnStart: ({ board: e, piece: s, emit: a, prng: c }) => {
			if (s.color === t && c) {
				const t = C.findPieces(e, (e) => e.color === o && [
					r.ROOK,
					r.BISHOP,
					r.QUEEN
				].includes(e.type));
				if (t.length > 0) {
					const e = t[Math.floor(c.next() * t.length)];
					a({
						type: "ADD_STATUS",
						pos: {
							r: e.r,
							c: e.c
						},
						statusId: i.FROZEN,
						duration: 2
					}), a({
						type: "SHOW_TEXT",
						text: "Remote Hack",
						textKey: "LOG_HACKER_TERMINAL",
						style: "danger",
						pos: {
							r: e.r,
							c: e.c
						}
					});
				}
			}
		} }
	},
	{
		id: "EQ_SPYWARE",
		name: "间谍软件",
		tier: "RARE",
		description: "每次敌方国王移动后，玩家获得 5 金币。",
		tags: ["GLOBAL"],
		hooks: { onAfterMove: ({ piece: e, subject: t, emit: i }) => {
			t && t.color === o && t.type === r.KING && e.equippedItems?.some((e) => "EQ_SPYWARE" === e.effectId) && (i({
				type: "MODIFY_GOLD",
				amount: 5,
				reason: "SPYWARE"
			}), i({
				type: "SHOW_TEXT",
				text: "Data Stolen +5",
				textKey: "LOG_SPYWARE",
				style: "gold"
			}));
		} }
	}
];
var ve = class {
	static resolve(e, t, o) {
		let i = [];
		if ("use_skill" === e.type && e.from && e.skillId) {
			const o = t.board[e.from.r][e.from.c], r = Pe.getDefinition(e.skillId);
			return o && r && r.activeSpec && r.activeSpec.execute(t.board, e.from.r, e.from.c, o, e.choice, (e) => i.push(e), {
				board: t.board,
				piece: o,
				r: e.from.r,
				c: e.from.c,
				emit: (e) => i.push(e),
				metadata: t.metadata,
				gold: t.gold,
				roster: t.roster,
				deployedUids: t.deployedUids
			}), i;
		}
		if ("deploy" === e.type && e.to && e.pieceType) {
			if ((t.reserves[t.turn][e.pieceType] || 0) <= 0) return [];
			const s = o ? o(e.pieceType) : {
				id: `sim-${q().slice(0, 8)}`,
				uid: `sim-u-${q().slice(0, 8)}`,
				type: e.pieceType,
				color: t.turn,
				level: 1,
				skills: [],
				statuses: [],
				maxSlots: e.pieceType === r.KING ? 3 : 1,
				equippedItems: []
			};
			return s ? (e.recordedUid && (s.uid = e.recordedUid), e.recordedId && (s.id = e.recordedId), e.recordedUid = s.uid, e.recordedId = s.id, i.push({
				type: "SPAWN",
				pos: e.to,
				piece: s
			}, {
				type: "MODIFY_RESERVE",
				color: t.turn,
				pieceType: s.type,
				amount: -1
			}), s.uid && i.push({
				type: "RECORD_DEPLOY",
				uid: s.uid
			}), i) : [];
		}
		const s = e.from, a = e.to;
		if ("strike" === e.type) return i.push({
			type: "KILL",
			pos: a,
			from: s
		}), i;
		if ("swap" === e.type) return i.push({
			type: "SWAP_PIECES",
			posA: s,
			posB: a
		}), i;
		if ("move" === e.type) {
			const e = Ce(t.board, s.r, s.c, t.metadata, t.levelConstraints).find((e) => e.r === a.r && e.c === a.c);
			return e?.isSecondary && e.midPos ? i.push({
				type: "MOVE",
				from: s,
				to: e.midPos
			}, {
				type: "DELAY",
				duration: 250
			}, {
				type: "MOVE",
				from: e.midPos,
				to: a
			}) : i.push({
				type: "MOVE",
				from: s,
				to: a
			}), i;
		}
		return i;
	}
}, xe = class {
	static generateAllActions(e, t) {
		const { board: o, turn: r, metadata: i, reserves: s, hasDeployedThisTurn: a } = e, c = w.build(o, i), n = [], d = i.lockedActionUid;
		if (!t && !a && !d) {
			const t = Le(o, r, i, e.levelConstraints);
			if (t.length > 0) {
				const e = s[r];
				for (const o of Object.keys(e)) if (e[o] && e[o] > 0) for (const e of t) n.push({
					type: "deploy",
					to: e,
					pieceType: o
				});
			}
		}
		for (let p = 0; p < 8; p++) for (let s = 0; s < 8; s++) {
			const a = o[p][s];
			if (a && a.color === r) {
				if (d && a.uid !== d) continue;
				if (!t) {
					const t = [...Pe.getAllSkills(a) || [], ...a.equippedItems?.map((e) => e.effectId) || []];
					for (const r of t) {
						const t = Pe.getDefinition(r);
						if (t && t.activeSpec) {
							const i = t.activeSpec;
							if (i.cooldownKey && (a.metadata?.[i.cooldownKey] || 0) > 0) continue;
							if (i.usesKey && (a.metadata?.[i.usesKey] || 0) >= (i.maxUses || Infinity)) continue;
							if ("self" === i.targeting) n.push({
								type: "use_skill",
								from: {
									r: p,
									c: s
								},
								skillId: r,
								choice: null
							});
							else if (i.getAlternatives) {
								const t = {
									board: o,
									piece: a,
									r: p,
									c: s,
									emit: () => {},
									metadata: e.metadata,
									gold: e.gold,
									roster: e.roster,
									deployedUids: e.deployedUids,
									prng: e.prng
								}, c = i.getAlternatives(o, p, s, a, t);
								for (const e of c) n.push({
									type: "use_skill",
									from: {
										r: p,
										c: s
									},
									skillId: r,
									choice: e.value
								});
							}
						}
					}
				}
				const E = Ce(o, p, s, i, e.levelConstraints, c), l = Pe.getAllSkills(a).some((e) => S.REMOTE_STRIKE_SKILLS.includes(e)) || a.equippedItems && a.equippedItems.some((e) => S.REMOTE_STRIKE_ITEMS.includes(e.effectId));
				for (const e of E) {
					const i = o[e.r][e.c], a = !(!i || i.color === r);
					t && !a || (l && a ? n.push({
						type: "strike",
						from: {
							r: p,
							c: s
						},
						to: {
							r: e.r,
							c: e.c
						}
					}) : i && i.color === r ? t || n.push({
						type: "swap",
						from: {
							r: p,
							c: s
						},
						to: {
							r: e.r,
							c: e.c
						}
					}) : n.push({
						type: "move",
						from: {
							r: p,
							c: s
						},
						to: e
					}));
				}
			}
		}
		return n;
	}
};
const We = {
	[r.PAWN]: 100,
	[r.KNIGHT]: 320,
	[r.BISHOP]: 330,
	[r.ROOK]: 500,
	[r.QUEEN]: 900,
	[r.KING]: 5e4
};
var Be = class {
	static isCapture(e, t) {
		if ("strike" === t.type) return !0;
		if ("move" === t.type && t.from && t.to) {
			const o = e.board[t.to.r][t.to.c], r = e.board[t.from.r][t.from.c];
			return !(!o || !r || o.color === r.color);
		}
		return !1;
	}
	static SEE_Approx(e, r) {
		if (!r.from || !r.to) return 0;
		const i = e.board[r.from.r][r.from.c], s = e.board[r.to.r][r.to.c];
		if (!i || !s) return 0;
		const a = We[i.type] || 0, c = We[s.type] || 0, n = i.color === t ? o : t, d = e.metadata.cache ? n === t ? e.metadata.cache.whiteNetwork : e.metadata.cache.blackNetwork : void 0;
		let p = !1;
		for (let t = 0; t < 8; t++) {
			for (let o = 0; o < 8; o++) {
				const i = e.board[t][o];
				if (i && i.color === n) {
					const i = ke(e.board, t, o, d, e.metadata);
					for (let e = 0; e < i.length; e++) if (i[e].r === r.to.r && i[e].c === r.to.c) {
						p = !0;
						break;
					}
				}
				if (p) break;
			}
			if (p) break;
		}
		return p ? c - a : c;
	}
	static isKingInCheck(e, i) {
		let s = -1, a = -1;
		for (let t = 0; t < 8; t++) {
			for (let o = 0; o < 8; o++) {
				const c = e.board[t][o];
				if (c?.type === r.KING && c.color === i) {
					s = t, a = o;
					break;
				}
			}
			if (-1 !== s) break;
		}
		if (-1 === s) return !1;
		const c = i === t ? o : t, n = e.metadata.cache ? c === t ? e.metadata.cache.whiteNetwork : e.metadata.cache.blackNetwork : void 0;
		for (let t = 0; t < 8; t++) for (let o = 0; o < 8; o++) {
			const r = e.board[t][o];
			if (r && r.color === c) {
				const r = ke(e.board, t, o, n, e.metadata);
				for (let e = 0; e < r.length; e++) if (r[e].r === s && r[e].c === a) return !0;
			}
		}
		return !1;
	}
	static isBadCapture(e, t) {
		return ("move" === t.type || "strike" === t.type) && !!t.to && e.board[t.to.r][t.to.c]?.type !== r.KING && !this.isKingInCheck(e, e.turn) && this.SEE_Approx(e, t) < -50;
	}
}, Qe = class {
	static evaluate(e, i) {
		if (e.winner === o) return i === o ? 1e6 : -1e6;
		if (e.winner === t) return i === t ? 1e6 : -1e6;
		let s = 0;
		const { board: a, metadata: c } = e;
		if (i === t && e.levelConstraints?.proxyKing) {
			let e = !1, t = 0;
			a.forEach((i) => i.forEach((i) => {
				i && i.color === o && (i.type === r.KING || Pe.isProxyKing(i) ? e = !0 : t++);
			})), !e && t > 0 && (s += 8e4);
		}
		const n = c.cache ? c.cache.whiteNetwork : void 0, d = c.cache ? c.cache.blackNetwork : void 0;
		let p = 0, l = 0, u = 0, A = 0;
		const I = Array(8).fill(!1).map(() => Array(8).fill(!1)), T = Array(8).fill(!1).map(() => Array(8).fill(!1));
		for (let o = 0; o < 8; o++) for (let e = 0; e < 8; e++) {
			const r = a[o][e];
			r && (r.color === t ? ke(a, o, e, n, c).forEach((e) => I[e.r][e.c] = !0) : ke(a, o, e, d, c).forEach((e) => T[e.r][e.c] = !0));
		}
		for (let t = 0; t < 8; t++) for (let e = 0; e < 8; e++) {
			I[t][e] && u++, T[t][e] && A++;
			const o = c.squares?.[`${t},${e}`] || [];
			for (const r of o) r.id === E && (T[t][e] && (s += 30), I[t][e] && (s -= 30));
		}
		a.forEach((e, t) => e.forEach((e, i) => {
			if (!e) return;
			const s = e.color === o, c = s ? !d || d[t][i] : !n || n[t][i];
			let E = 0;
			const u = Pe.getModifiers(e, a, t, i).find((e) => e.pieceValueOverride)?.pieceValueOverride?.({
				board: a,
				piece: e,
				r: t,
				c: i
			});
			E = void 0 !== u ? u : We[e.type] || 0;
			const A = {
				FROZEN: .8 * -E,
				PETRIFIED: .9 * -E,
				SILENCED: -30,
				SHIELDED: 50,
				INVISIBLE: 30,
				BETRAYED: 2 * -E,
				GRAVITY_LOCKED: -20,
				OVERLOADED: 40
			};
			e.statuses?.forEach((e) => E += A[e.id] || 0), c || e.type === r.KING || (E *= .2), Pe.getAllSkills(e).forEach((e) => {
				const t = Pe.getDefinition(e);
				E += {
					COMMON: 20,
					RARE: 60,
					EPIC: 150,
					LEGENDARY: 400
				}[t?.tier || "COMMON"];
			}), e.equippedItems?.forEach((e) => {
				E += {
					COMMON: 30,
					RARE: 80,
					EPIC: 200,
					LEGENDARY: 500
				}[e.tier || "COMMON"];
			}), s ? l += E : p += E;
		}));
		const m = e.reserves;
		if (m) for (const r of Object.keys(m[t])) p += (m[t][r] || 0) * (We[r] || 0) * .8, l += (m[o][r] || 0) * (We[r] || 0) * .8;
		s += l - p, s += 8 * (A - u), Be.isKingInCheck(e, o) && (s -= 500), Be.isKingInCheck(e, t) && (s += 500);
		const O = s + .1 * ((p + l + u + A) % 5);
		return i === t ? -O : O;
	}
};
Pe.register(U), Pe.register(ge), Pe.register(He), Pe.register(X), Pe.register($), Pe.register(Z), Pe.register(re), Pe.register(se), Pe.register(be);
const Fe = new class {
	constructor() {
		this.nodesVisited = 0, this.qNodesVisited = 0, this.prunedNodes = 0, this.startTime = 0, this.timeout = !1, this.thinkingColor = t, this.TIME_LIMIT = 1200, this.historyTable = new Int32Array(4096), this.killerMoves = [], this.ttCache = /* @__PURE__ */ new Map();
	}
	async computeMove(e, t = "normal") {
		this.nodesVisited = 0, this.qNodesVisited = 0, this.prunedNodes = 0, this.startTime = Date.now(), this.timeout = !1, this.thinkingColor = e.turn;
		let o = "hard" === t ? 4e3 : 1200, r = "hard" === t ? 6 : 4;
		this.TIME_LIMIT && (o = this.TIME_LIMIT), this.killerMoves = Array(32).fill(null).map(() => []);
		for (let n = 0; n < 4096; n++) this.historyTable[n] >>= 1;
		this.ttCache.size > 1e5 && this.ttCache.clear();
		const i = Se.fastCloneContext(e);
		i.metadata.cache || (i.metadata.cache = Y.recompute(i.board, i.metadata, i.turn, i.levelConstraints, !0)), e.turn;
		let s = null, a = 0;
		this.thinkingColor;
		this.checkTimeout = (e = o) => Date.now() - this.startTime > e && (this.timeout = !0, !0);
		for (let n = 1; n <= r; n++) {
			const e = this.search(i, n, -Infinity, Infinity, !0);
			if (this.timeout) break;
			if (s = e.action || s, a = e.score, a > 4e4) break;
		}
		return s;
	}
	checkTimeout() {
		return (this.nodesVisited + this.qNodesVisited) % 64 == 0 && Date.now() - this.startTime > this.TIME_LIMIT && (this.timeout = !0), this.timeout;
	}
	getHash(e) {
		let r = e.turn === t ? t : o;
		for (let i = 0; i < 8; i++) for (let s = 0; s < 8; s++) {
			const a = e.board[i][s];
			a && (r += `|${i}${s}${a.type}${a.color === t ? t : o}${a.statuses?.length || 0}`);
		}
		return r;
	}
	search(e, r, i, s, a) {
		if (this.nodesVisited++, this.checkTimeout()) return {
			score: 0,
			action: null
		};
		const c = this.getHash(e), n = this.ttCache.get(c);
		if (n && n.depth >= r) {
			if (0 === n.flag) return {
				score: n.score,
				action: n.bestAction
			};
			if (1 === n.flag && (s = Math.min(s, n.score)), 2 === n.flag && (i = Math.max(i, n.score)), i >= s) return {
				score: n.score,
				action: n.bestAction
			};
		}
		if (r <= 0 || e.winner) return {
			score: this.quiescence(e, i, s, a),
			action: null
		};
		const d = Be.isKingInCheck(e, e.turn);
		if (r >= 3 && !d) {
			const c = e.turn;
			e.turn = e.turn === t ? o : t;
			const n = this.search(e, r - 3, i, s, !a).score;
			if (e.turn = c, a && n >= s) return {
				score: s,
				action: null
			};
			if (!a && n <= i) return {
				score: i,
				action: null
			};
		}
		const p = xe.generateAllActions(e, !1);
		if (0 === p.length) return {
			score: a ? -2e4 : 2e4,
			action: null
		};
		this.sortActions(p, e, r, n?.bestAction);
		let E = p[0], l = a ? -Infinity : Infinity, u = i, A = s;
		for (let t = 0; t < p.length; t++) {
			const o = p[t], c = this.makeMove(e, o);
			let n = 0;
			const u = Be.isCapture(e, o), A = c.turnSnapshot !== e.turn ? !a : a;
			if (r >= 3 && t >= 3 && !u && !d && "use_skill" !== o.type ? (n = this.search(e, r - 2, i, s, A).score, (a ? n > i : n < s) && (n = this.search(e, r - 1, i, s, A).score)) : n = this.search(e, r - 1, i, s, A).score, this.unmakeMove(e, c), this.timeout) break;
			if (a) {
				if (n > l && (l = n, E = o), s <= (i = Math.max(i, n))) {
					this.prunedNodes++, u || this.storeKillerAndHistory(o, r);
					break;
				}
			} else if (n < l && (l = n, E = o), (s = Math.min(s, n)) <= i) {
				this.prunedNodes++, u || this.storeKillerAndHistory(o, r);
				break;
			}
		}
		if (!this.timeout) {
			let e = 0;
			l <= u ? e = 1 : l >= A && (e = 2), this.ttCache.set(c, {
				depth: r,
				score: l,
				flag: e,
				bestAction: E
			});
		}
		return {
			score: l,
			action: E
		};
	}
	quiescence(e, t, o, r) {
		if (this.qNodesVisited++, this.checkTimeout() || e.winner) return Qe.evaluate(e, this.thinkingColor);
		const i = Qe.evaluate(e, this.thinkingColor);
		if (r) {
			if (i >= o) return o;
			t < i && (t = i);
		} else {
			if (i <= t) return t;
			o > i && (o = i);
		}
		const s = xe.generateAllActions(e, !0);
		if (this.sortActions(s, e, 0), 0 === s.length) return i;
		if (r) {
			let r = i;
			for (const i of s) {
				if (Be.isBadCapture(e, i)) continue;
				const s = this.makeMove(e, i), a = s.turnSnapshot === e.turn, c = this.quiescence(e, t, o, a);
				if (this.unmakeMove(e, s), c > r && (r = c), o <= (t = Math.max(t, c))) break;
			}
			return r;
		}
		{
			let r = i;
			for (const i of s) {
				if (Be.isBadCapture(e, i)) continue;
				const s = this.makeMove(e, i), a = s.turnSnapshot !== e.turn, c = this.quiescence(e, t, o, a);
				if (this.unmakeMove(e, s), c < r && (r = c), (o = Math.min(o, c)) <= t) break;
			}
			return r;
		}
	}
	makeMove(e, t) {
		const o = t.from && e.board[t.from.r][t.from.c] || void 0, r = ve.resolve(t, e);
		return fe.simulateAIActionWithUndo(r, e, o);
	}
	unmakeMove(e, t) {
		fe.undo(e, t);
	}
	storeKillerAndHistory(e, t) {
		if (!e.from) return;
		const o = Math.min(t, 31), r = this.killerMoves[o];
		if (r[0] && r[0].fromR === e.from.r && r[0].type === e.type || (r[1] = r[0], r[0] = {
			fromR: e.from.r,
			fromC: e.from.c,
			toR: e.to?.r,
			toC: e.to?.c,
			type: e.type
		}), e.to) {
			const o = 8 * e.from.r + e.from.c, r = 8 * e.to.r + e.to.c;
			this.historyTable[64 * o + r] += t * t;
		}
	}
	sortActions(e, t, o, r) {
		const i = Math.min(Math.max(o, 0), 31), s = this.killerMoves[i] || [], a = (e) => {
			if (r && e.type === r.type && e.from?.r === r.from?.r && e.to?.r === r.to?.r && e.to?.c === r.to?.c && e.skillId === r.skillId) return 2e6;
			if ("use_skill" === e.type) return 15e5;
			if ("strike" === e.type || "move" === e.type && e.from && e.to && t.board[e.to.r][e.to.c]) {
				const o = t.board[e.to.r][e.to.c], r = e.from ? t.board[e.from.r][e.from.c] : null;
				if (o && r && o.color !== r.color) return 10 * (We[o.type] || 0) - (We[r.type] || 0) + 1e6;
			}
			if (e.from && ("move" === e.type || "swap" === e.type)) {
				if (s[0] && s[0].fromR === e.from.r && s[0].toR === e.to.r && s[0].toC === e.to.c) return 9e5;
				if (s[1] && s[1].fromR === e.from.r && s[1].toR === e.to.r && s[1].toC === e.to.c) return 8e5;
				const t = 8 * e.from.r + e.from.c, o = 8 * e.to.r + e.to.c;
				return this.historyTable[64 * t + o];
			}
			return "deploy" === e.type ? 500 : 0;
		};
		e.sort((e, t) => a(t) - a(e));
	}
}();
self.onmessage = async (e) => {
	try {
		const { state: t, difficulty: o } = e.data, r = await Fe.computeMove(t, o);
		self.postMessage({
			type: "SUCCESS",
			action: r
		});
	} catch (t) {
		self.postMessage({
			type: "ERROR",
			error: t
		});
	}
};

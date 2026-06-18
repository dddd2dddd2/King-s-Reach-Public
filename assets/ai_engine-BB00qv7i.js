async function e(e = {}) {
	var r = e, t = !!globalThis.window, n = !!globalThis.WorkerGlobalScope;
	globalThis.process?.versions?.node && globalThis.process;
	var o, a, i = "./this.program", s = (e, r) => {
		throw r;
	}, l = import.meta.url, u = "";
	if (t || n) {
		try {
			u = new URL(".", l).href;
		} catch {}
		n && (a = (e) => {
			var r = new XMLHttpRequest();
			return r.open("GET", e, !1), r.responseType = "arraybuffer", r.send(null), new Uint8Array(r.response);
		}), o = async (e) => {
			var r = await fetch(e, { credentials: "same-origin" });
			if (r.ok) return r.arrayBuffer();
			throw new Error(r.status + " : " + r.url);
		};
	}
	var d, c, m, h, f, p, v, w, g, y, E, k, b, _, F, T = function() {}.bind(), D = function() {}.bind(), P = !1, S = !1;
	function A() {
		var e = fr.buffer;
		f = new Int8Array(e), v = new Int16Array(e), p = new Uint8Array(e), w = new Uint16Array(e), g = new Int32Array(e), y = new Uint32Array(e), E = new Float32Array(e), k = new Float64Array(e), b = new BigInt64Array(e), _ = new BigUint64Array(e);
	}
	function C(e) {
		r.onAbort?.(e), D(e = "Aborted(" + e + ")"), P = !0, e += ". Build with -sASSERTIONS for more info.";
		var t = new WebAssembly.RuntimeError(e);
		throw h?.(t), t;
	}
	function R() {
		return r.locateFile ? (e = "ai_engine.wasm", r.locateFile ? r.locateFile(e, u) : u + e) : new URL("/King-s-Reach-Public/assets/ai_engine-C4dB-a7U.wasm", "" + import.meta.url).href;
		var e;
	}
	async function x(e) {
		if (!d) try {
			var r = await o(e);
			return new Uint8Array(r);
		} catch {}
		return function(e) {
			if (e == F && d) return new Uint8Array(d);
			if (a) return a(e);
			throw "both async and sync fetching of the wasm failed";
		}(e);
	}
	async function M(e, r, t) {
		if (!e) try {
			var n = fetch(r, { credentials: "same-origin" });
			return await WebAssembly.instantiateStreaming(n, t);
		} catch (o) {
			D(`wasm streaming compile failed: ${o}`), D("falling back to ArrayBuffer instantiation");
		}
		return async function(e, r) {
			try {
				var t = await x(e);
				return await WebAssembly.instantiate(t, r);
			} catch (o) {
				D(`failed to asynchronously prepare wasm: ${o}`), C(o);
			}
		}(r, t);
	}
	class N {
		name = "ExitStatus";
		constructor(e) {
			this.message = `Program terminated with exit(${e})`, this.status = e;
		}
	}
	var $ = (e) => {
		for (; e.length > 0;) e.shift()(r);
	}, B = [], z = (e) => B.push(e), W = [], O = (e) => W.push(e), j = !0, I = () => hr();
	class L {
		constructor(e) {
			this.excPtr = e, this.ptr = e - 24;
		}
		set_type(e) {
			y[this.ptr + 4 >> 2] = e;
		}
		get_type() {
			return y[this.ptr + 4 >> 2];
		}
		set_destructor(e) {
			y[this.ptr + 8 >> 2] = e;
		}
		get_destructor() {
			return y[this.ptr + 8 >> 2];
		}
		set_caught(e) {
			e = e ? 1 : 0, f[this.ptr + 12] = e;
		}
		get_caught() {
			return 0 != f[this.ptr + 12];
		}
		set_rethrown(e) {
			e = e ? 1 : 0, f[this.ptr + 13] = e;
		}
		get_rethrown() {
			return 0 != f[this.ptr + 13];
		}
		init(e, r) {
			this.set_adjusted_ptr(0), this.set_type(e), this.set_destructor(r);
		}
		set_adjusted_ptr(e) {
			y[this.ptr + 16 >> 2] = e;
		}
		get_adjusted_ptr() {
			return y[this.ptr + 16 >> 2];
		}
	}
	var U = (e) => {
		for (var r = "";;) {
			var t = p[e++];
			if (!t) return r;
			r += String.fromCharCode(t);
		}
	}, V = {}, H = {}, q = {}, X = class extends Error {
		constructor(e) {
			super(e), this.name = "BindingError";
		}
	}, G = (e) => {
		throw new X(e);
	};
	function K(e, r, t = {}) {
		return function(e, r, t = {}) {
			var n = r.name;
			if (e || G(`type "${n}" must have a positive integer typeid pointer`), H.hasOwnProperty(e)) {
				if (t.ignoreDuplicateRegistrations) return;
				G(`Cannot register type '${n}' twice`);
			}
			if (H[e] = r, delete q[e], V.hasOwnProperty(e)) {
				var o = V[e];
				delete V[e], o.forEach((e) => e());
			}
		}(e, r, t);
	}
	var Y = (e, r, t) => {
		switch (r) {
			case 1: return t ? (e) => f[e] : (e) => p[e];
			case 2: return t ? (e) => v[e >> 1] : (e) => w[e >> 1];
			case 4: return t ? (e) => g[e >> 2] : (e) => y[e >> 2];
			case 8: return t ? (e) => b[e >> 3] : (e) => _[e >> 3];
			default: throw new TypeError(`invalid integer width (${r}): ${e}`);
		}
	}, J = [], Q = [
		0,
		1,
		,
		1,
		null,
		1,
		!0,
		1,
		!1,
		1
	], Z = (e) => {
		e > 9 && 0 === --Q[e + 1] && (Q[e] = void 0, J.push(e));
	}, ee = {
		toValue: (e) => (e || G(`Cannot use deleted val. handle = ${e}`), Q[e]),
		toHandle: (e) => {
			switch (e) {
				case void 0: return 2;
				case null: return 4;
				case !0: return 6;
				case !1: return 8;
				default: {
					const r = J.pop() || Q.length;
					return Q[r] = e, Q[r + 1] = 1, r;
				}
			}
		}
	};
	function re(e) {
		return this.fromWireType(y[e >> 2]);
	}
	var te = {
		name: "emscripten::val",
		fromWireType: (e) => {
			var r = ee.toValue(e);
			return Z(e), r;
		},
		toWireType: (e, r) => ee.toHandle(r),
		readValueFromPointer: re,
		destructorFunction: null
	}, ne = (e, r) => {
		switch (r) {
			case 4: return function(e) {
				return this.fromWireType(E[e >> 2]);
			};
			case 8: return function(e) {
				return this.fromWireType(k[e >> 3]);
			};
			default: throw new TypeError(`invalid float width (${r}): ${e}`);
		}
	}, oe = (e, r) => Object.defineProperty(r, "name", { value: e }), ae = (e) => {
		for (; e.length;) {
			var r = e.pop();
			e.pop()(r);
		}
	};
	function ie(e) {
		for (var r = 1; r < e.length; ++r) if (null !== e[r] && void 0 === e[r].destructorFunction) return !0;
		return !1;
	}
	function se(e, r, t, n, o, a) {
		var i = r.length;
		i < 2 && G("argTypes array size mismatch! Must at least get return value and 'this' types!");
		for (var s = null !== r[1] && null !== t, l = ie(r), u = !r[0].isVoid, d = r[0], c = r[1], m = [
			e,
			G,
			n,
			o,
			ae,
			d.fromWireType.bind(d),
			c?.toWireType.bind(c)
		], h = 2; h < i; ++h) {
			var f = r[h];
			m.push(f.toWireType.bind(f));
		}
		if (!l) for (h = s ? 1 : 2; h < r.length; ++h) null !== r[h].destructorFunction && m.push(r[h].destructorFunction);
		return oe(e, function(e, r, t, n) {
			var o = ie(e), a = e.length - 2, i = [], s = ["fn"];
			r && s.push("thisWired");
			for (var l = 0; l < a; ++l) i.push(`arg${l}`), s.push(`arg${l}Wired`);
			i = i.join(","), s = s.join(",");
			var u = `return function (${i}) {\n`;
			o && (u += "var destructors = [];\n");
			var d = o ? "destructors" : "null", c = [
				"humanName",
				"throwBindingError",
				"invoker",
				"fn",
				"runDestructors",
				"fromRetWire",
				"toClassParamWire"
			];
			for (r && (u += `var thisWired = toClassParamWire(${d}, this);\n`), l = 0; l < a; ++l) {
				var m = `toArg${l}Wire`;
				u += `var arg${l}Wired = ${m}(${d}, arg${l});\n`, c.push(m);
			}
			if (u += (t || n ? "var rv = " : "") + `invoker(${s});\n`, o) u += "runDestructors(destructors);\n";
			else for (l = r ? 1 : 2; l < e.length; ++l) {
				var h = 1 === l ? "thisWired" : "arg" + (l - 2) + "Wired";
				null !== e[l].destructorFunction && (u += `${h}_dtor(${h});\n`, c.push(`${h}_dtor`));
			}
			return t && (u += "var ret = fromRetWire(rv);\nreturn ret;\n"), u += "}\n", new Function(c, u);
		}(r, s, u, a)(...m));
	}
	var le = (e, r, t) => {
		if (void 0 === e[r].overloadTable) {
			var n = e[r];
			e[r] = function(...n) {
				return e[r].overloadTable.hasOwnProperty(n.length) || G(`Function '${t}' called with an invalid number of arguments (${n.length}) - expects one of (${e[r].overloadTable})!`), e[r].overloadTable[n.length].apply(this, n);
			}, e[r].overloadTable = [], e[r].overloadTable[n.argCount] = n;
		}
	}, ue = class extends Error {
		constructor(e) {
			super(e), this.name = "InternalError";
		}
	}, de = (e) => {
		throw new ue(e);
	}, ce = [], me = (e, r, t = !1) => {
		e = U(e);
		var n, o, a = ((o = ce[n = r]) || (ce[n] = o = pr.get(n)), o);
		return "function" != typeof a && G(`unknown function pointer with signature ${e}: ${r}`), a;
	};
	class he extends Error {}
	var fe = (e) => {
		var r = ur(e), t = U(r);
		return sr(r), t;
	}, pe = (e, r, t, n) => {
		if (!(n > 0)) return 0;
		for (var o = t, a = t + n - 1, i = 0; i < e.length; ++i) {
			var s = e.codePointAt(i);
			if (s <= 127) {
				if (t >= a) break;
				r[t++] = s;
			} else if (s <= 2047) {
				if (t + 1 >= a) break;
				r[t++] = 192 | s >> 6, r[t++] = 128 | 63 & s;
			} else if (s <= 65535) {
				if (t + 2 >= a) break;
				r[t++] = 224 | s >> 12, r[t++] = 128 | s >> 6 & 63, r[t++] = 128 | 63 & s;
			} else {
				if (t + 3 >= a) break;
				r[t++] = 240 | s >> 18, r[t++] = 128 | s >> 12 & 63, r[t++] = 128 | s >> 6 & 63, r[t++] = 128 | 63 & s, i++;
			}
		}
		return r[t] = 0, t - o;
	}, ve = (e, r, t) => pe(e, p, r, t), we = (e) => {
		for (var r = 0, t = 0; t < e.length; ++t) {
			var n = e.charCodeAt(t);
			n <= 127 ? r++ : n <= 2047 ? r += 2 : n >= 55296 && n <= 57343 ? (r += 4, ++t) : r += 3;
		}
		return r;
	}, ge = globalThis.TextDecoder && new TextDecoder(), ye = (e, r, t, n) => {
		var o = r + t;
		if (n) return o;
		for (; e[r] && !(r >= o);) ++r;
		return r;
	}, Ee = (e, r = 0, t, n) => {
		var o = ye(e, r, t, n);
		if (o - r > 16 && e.buffer && ge) return ge.decode(e.subarray(r, o));
		for (var a = ""; r < o;) {
			var i = e[r++];
			if (128 & i) {
				var s = 63 & e[r++];
				if (192 != (224 & i)) {
					var l = 63 & e[r++];
					if ((i = 224 == (240 & i) ? (15 & i) << 12 | s << 6 | l : (7 & i) << 18 | s << 12 | l << 6 | 63 & e[r++]) < 65536) a += String.fromCharCode(i);
					else {
						var u = i - 65536;
						a += String.fromCharCode(55296 | u >> 10, 56320 | 1023 & u);
					}
				} else a += String.fromCharCode((31 & i) << 6 | s);
			} else a += String.fromCharCode(i);
		}
		return a;
	}, ke = (e, r, t) => e ? Ee(p, e, r, t) : "", be = globalThis.TextDecoder ? new TextDecoder("utf-16le") : void 0, _e = (e, r, t) => {
		var n = e >> 1, o = ye(w, n, r / 2, t);
		if (o - n > 16 && be) return be.decode(w.subarray(n, o));
		for (var a = "", i = n; i < o; ++i) {
			var s = w[i];
			a += String.fromCharCode(s);
		}
		return a;
	}, Fe = (e, r, t) => {
		if (t ??= 2147483647, t < 2) return 0;
		for (var n = r, o = (t -= 2) < 2 * e.length ? t / 2 : e.length, a = 0; a < o; ++a) {
			var i = e.charCodeAt(a);
			v[r >> 1] = i, r += 2;
		}
		return v[r >> 1] = 0, r - n;
	}, Te = (e) => 2 * e.length, De = (e, r, t) => {
		for (var n = "", o = e >> 2, a = 0; !(a >= r / 4); a++) {
			var i = y[o + a];
			if (!i && !t) break;
			n += String.fromCodePoint(i);
		}
		return n;
	}, Pe = (e, r, t) => {
		if (t ??= 2147483647, t < 4) return 0;
		for (var n = r, o = n + t - 4, a = 0; a < e.length; ++a) {
			var i = e.codePointAt(a);
			if (i > 65535 && a++, g[r >> 2] = i, (r += 4) + 4 > o) break;
		}
		return g[r >> 2] = 0, r - n;
	}, Se = (e) => {
		for (var r = 0, t = 0; t < e.length; ++t) e.codePointAt(t) > 65535 && t++, r += 4;
		return r;
	}, Ae = 0, Ce = [], Re = (e, r) => {
		var t = H[e];
		return void 0 === t && G(`${r} has unknown type ${fe(e)}`), t;
	}, xe = (e, r, t) => {
		var n = [], o = e(n, t);
		return n.length && (y[r >> 2] = ee.toHandle(n)), o;
	}, Me = {}, Ne = (e) => {
		var r = Me[e];
		return void 0 === r ? U(e) : r;
	}, $e = {}, Be = (e) => {
		if (e instanceof N || "unwind" == e) return c;
		s(0, e);
	}, ze = () => j || Ae > 0, We = (e) => {
		c = e, ze() || (r.onExit?.(e), P = !0), s(0, new N(e));
	}, Oe = (e, r) => {
		c = e, We(e);
	}, je = (e) => {
		if (!P) try {
			e(), (() => {
				if (!ze()) try {
					Oe(c);
				} catch (e) {
					Be(e);
				}
			})();
		} catch (r) {
			Be(r);
		}
	}, Ie = () => performance.now(), Le = (e, r) => Math.ceil(e / r) * r, Ue = (e) => {
		var r = (e - fr.buffer.byteLength + 65535) / 65536 | 0;
		try {
			return fr.grow(r), A(), 1;
		} catch (t) {}
	}, Ve = {}, He = () => {
		if (!He.strings) {
			var e = {
				USER: "web_user",
				LOGNAME: "web_user",
				PATH: "/",
				PWD: "/",
				HOME: "/home/web_user",
				LANG: (globalThis.navigator?.language ?? "C").replace("-", "_") + ".UTF-8",
				_: i || "./this.program"
			};
			for (var r in Ve) void 0 === Ve[r] ? delete e[r] : e[r] = Ve[r];
			var t = [];
			for (var r in e) t.push(`${r}=${e[r]}`);
			He.strings = t;
		}
		return He.strings;
	}, qe = {
		isAbs: (e) => "/" === e.charAt(0),
		splitPath: (e) => /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e).slice(1),
		normalizeArray: (e, r) => {
			for (var t = 0, n = e.length - 1; n >= 0; n--) {
				var o = e[n];
				"." === o ? e.splice(n, 1) : ".." === o ? (e.splice(n, 1), t++) : t && (e.splice(n, 1), t--);
			}
			if (r) for (; t; t--) e.unshift("..");
			return e;
		},
		normalize: (e) => {
			var r = qe.isAbs(e), t = "/" === e.slice(-1);
			return (e = qe.normalizeArray(e.split("/").filter((e) => !!e), !r).join("/")) || r || (e = "."), e && t && (e += "/"), (r ? "/" : "") + e;
		},
		dirname: (e) => {
			var r = qe.splitPath(e), t = r[0], n = r[1];
			return t || n ? (n && (n = n.slice(0, -1)), t + n) : ".";
		},
		basename: (e) => e && e.match(/([^\/]+|\/)\/*$/)[1],
		join: (...e) => qe.normalize(e.join("/")),
		join2: (e, r) => qe.normalize(e + "/" + r)
	}, Xe = (e) => {
		(Xe = (e) => crypto.getRandomValues(e))(e);
	}, Ge = {
		resolve: (...e) => {
			for (var r = "", t = !1, n = e.length - 1; n >= -1 && !t; n--) {
				var o = n >= 0 ? e[n] : ar.cwd();
				if ("string" != typeof o) throw new TypeError("Arguments to path.resolve must be strings");
				if (!o) return "";
				r = o + "/" + r, t = qe.isAbs(o);
			}
			return (t ? "/" : "") + (r = qe.normalizeArray(r.split("/").filter((e) => !!e), !t).join("/")) || ".";
		},
		relative: (e, r) => {
			function t(e) {
				for (var r = 0; r < e.length && "" === e[r]; r++);
				for (var t = e.length - 1; t >= 0 && "" === e[t]; t--);
				return r > t ? [] : e.slice(r, t - r + 1);
			}
			e = Ge.resolve(e).slice(1), r = Ge.resolve(r).slice(1);
			for (var n = t(e.split("/")), o = t(r.split("/")), a = Math.min(n.length, o.length), i = a, s = 0; s < a; s++) if (n[s] !== o[s]) {
				i = s;
				break;
			}
			var l = [];
			for (s = i; s < n.length; s++) l.push("..");
			return (l = l.concat(o.slice(i))).join("/");
		}
	}, Ke = [], Ye = (e, r, t) => {
		var n = t > 0 ? t : we(e) + 1, o = new Array(n), a = pe(e, o, 0, o.length);
		return r && (o.length = a), o;
	}, Je = {
		ttys: [],
		init() {},
		shutdown() {},
		register(e, r) {
			Je.ttys[e] = {
				input: [],
				output: [],
				ops: r
			}, ar.registerDevice(e, Je.stream_ops);
		},
		stream_ops: {
			open(e) {
				var r = Je.ttys[e.node.rdev];
				if (!r) throw new ar.ErrnoError(43);
				e.tty = r, e.seekable = !1;
			},
			close(e) {
				e.tty.ops.fsync(e.tty);
			},
			fsync(e) {
				e.tty.ops.fsync(e.tty);
			},
			read(e, r, t, n, o) {
				if (!e.tty || !e.tty.ops.get_char) throw new ar.ErrnoError(60);
				for (var a = 0, i = 0; i < n; i++) {
					var s;
					try {
						s = e.tty.ops.get_char(e.tty);
					} catch (l) {
						throw new ar.ErrnoError(29);
					}
					if (void 0 === s && 0 === a) throw new ar.ErrnoError(6);
					if (null == s) break;
					a++, r[t + i] = s;
				}
				return a && (e.node.atime = Date.now()), a;
			},
			write(e, r, t, n, o) {
				if (!e.tty || !e.tty.ops.put_char) throw new ar.ErrnoError(60);
				try {
					for (var a = 0; a < n; a++) e.tty.ops.put_char(e.tty, r[t + a]);
				} catch (i) {
					throw new ar.ErrnoError(29);
				}
				return n && (e.node.mtime = e.node.ctime = Date.now()), a;
			}
		},
		default_tty_ops: {
			get_char: (e) => (() => {
				if (!Ke.length) {
					var e = null;
					if (globalThis.window?.prompt && null !== (e = window.prompt("Input: ")) && (e += "\n"), !e) return null;
					Ke = Ye(e, !0);
				}
				return Ke.shift();
			})(),
			put_char(e, r) {
				null === r || 10 === r ? (T(Ee(e.output)), e.output = []) : 0 != r && e.output.push(r);
			},
			fsync(e) {
				e.output?.length > 0 && (T(Ee(e.output)), e.output = []);
			},
			ioctl_tcgets: (e) => ({
				c_iflag: 25856,
				c_oflag: 5,
				c_cflag: 191,
				c_lflag: 35387,
				c_cc: [
					3,
					28,
					127,
					21,
					4,
					0,
					1,
					0,
					17,
					19,
					26,
					0,
					18,
					15,
					23,
					22,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0
				]
			}),
			ioctl_tcsets: (e, r, t) => 0,
			ioctl_tiocgwinsz: (e) => [24, 80]
		},
		default_tty1_ops: {
			put_char(e, r) {
				null === r || 10 === r ? (D(Ee(e.output)), e.output = []) : 0 != r && e.output.push(r);
			},
			fsync(e) {
				e.output?.length > 0 && (D(Ee(e.output)), e.output = []);
			}
		}
	}, Qe = (e) => {
		C();
	}, Ze = {
		ops_table: null,
		mount: (e) => Ze.createNode(null, "/", 16895, 0),
		createNode(e, r, t, n) {
			if (ar.isBlkdev(t) || ar.isFIFO(t)) throw new ar.ErrnoError(63);
			Ze.ops_table ||= {
				dir: {
					node: {
						getattr: Ze.node_ops.getattr,
						setattr: Ze.node_ops.setattr,
						lookup: Ze.node_ops.lookup,
						mknod: Ze.node_ops.mknod,
						rename: Ze.node_ops.rename,
						unlink: Ze.node_ops.unlink,
						rmdir: Ze.node_ops.rmdir,
						readdir: Ze.node_ops.readdir,
						symlink: Ze.node_ops.symlink
					},
					stream: { llseek: Ze.stream_ops.llseek }
				},
				file: {
					node: {
						getattr: Ze.node_ops.getattr,
						setattr: Ze.node_ops.setattr
					},
					stream: {
						llseek: Ze.stream_ops.llseek,
						read: Ze.stream_ops.read,
						write: Ze.stream_ops.write,
						mmap: Ze.stream_ops.mmap,
						msync: Ze.stream_ops.msync
					}
				},
				link: {
					node: {
						getattr: Ze.node_ops.getattr,
						setattr: Ze.node_ops.setattr,
						readlink: Ze.node_ops.readlink
					},
					stream: {}
				},
				chrdev: {
					node: {
						getattr: Ze.node_ops.getattr,
						setattr: Ze.node_ops.setattr
					},
					stream: ar.chrdev_stream_ops
				}
			};
			var o = ar.createNode(e, r, t, n);
			return ar.isDir(o.mode) ? (o.node_ops = Ze.ops_table.dir.node, o.stream_ops = Ze.ops_table.dir.stream, o.contents = {}) : ar.isFile(o.mode) ? (o.node_ops = Ze.ops_table.file.node, o.stream_ops = Ze.ops_table.file.stream, o.usedBytes = 0, o.contents = null) : ar.isLink(o.mode) ? (o.node_ops = Ze.ops_table.link.node, o.stream_ops = Ze.ops_table.link.stream) : ar.isChrdev(o.mode) && (o.node_ops = Ze.ops_table.chrdev.node, o.stream_ops = Ze.ops_table.chrdev.stream), o.atime = o.mtime = o.ctime = Date.now(), e && (e.contents[r] = o, e.atime = e.mtime = e.ctime = o.atime), o;
		},
		getFileDataAsTypedArray: (e) => e.contents ? e.contents.subarray ? e.contents.subarray(0, e.usedBytes) : new Uint8Array(e.contents) : new Uint8Array(0),
		expandFileStorage(e, r) {
			var t = e.contents ? e.contents.length : 0;
			if (!(t >= r)) {
				r = Math.max(r, t * (t < 1048576 ? 2 : 1.125) >>> 0), 0 != t && (r = Math.max(r, 256));
				var n = e.contents;
				e.contents = new Uint8Array(r), e.usedBytes > 0 && e.contents.set(n.subarray(0, e.usedBytes), 0);
			}
		},
		resizeFileStorage(e, r) {
			if (e.usedBytes != r) if (0 == r) e.contents = null, e.usedBytes = 0;
			else {
				var t = e.contents;
				e.contents = new Uint8Array(r), t && e.contents.set(t.subarray(0, Math.min(r, e.usedBytes))), e.usedBytes = r;
			}
		},
		node_ops: {
			getattr(e) {
				var r = {};
				return r.dev = ar.isChrdev(e.mode) ? e.id : 1, r.ino = e.id, r.mode = e.mode, r.nlink = 1, r.uid = 0, r.gid = 0, r.rdev = e.rdev, ar.isDir(e.mode) ? r.size = 4096 : ar.isFile(e.mode) ? r.size = e.usedBytes : ar.isLink(e.mode) ? r.size = e.link.length : r.size = 0, r.atime = new Date(e.atime), r.mtime = new Date(e.mtime), r.ctime = new Date(e.ctime), r.blksize = 4096, r.blocks = Math.ceil(r.size / r.blksize), r;
			},
			setattr(e, r) {
				for (const t of [
					"mode",
					"atime",
					"mtime",
					"ctime"
				]) null != r[t] && (e[t] = r[t]);
				void 0 !== r.size && Ze.resizeFileStorage(e, r.size);
			},
			lookup(e, r) {
				throw Ze.doesNotExistError || (Ze.doesNotExistError = new ar.ErrnoError(44), Ze.doesNotExistError.stack = "<generic error, no stack>"), Ze.doesNotExistError;
			},
			mknod: (e, r, t, n) => Ze.createNode(e, r, t, n),
			rename(e, r, t) {
				var n;
				try {
					n = ar.lookupNode(r, t);
				} catch (a) {}
				if (n) {
					if (ar.isDir(e.mode)) for (var o in n.contents) throw new ar.ErrnoError(55);
					ar.hashRemoveNode(n);
				}
				delete e.parent.contents[e.name], r.contents[t] = e, e.name = t, r.ctime = r.mtime = e.parent.ctime = e.parent.mtime = Date.now();
			},
			unlink(e, r) {
				delete e.contents[r], e.ctime = e.mtime = Date.now();
			},
			rmdir(e, r) {
				for (var t in ar.lookupNode(e, r).contents) throw new ar.ErrnoError(55);
				delete e.contents[r], e.ctime = e.mtime = Date.now();
			},
			readdir: (e) => [
				".",
				"..",
				...Object.keys(e.contents)
			],
			symlink(e, r, t) {
				var n = Ze.createNode(e, r, 41471, 0);
				return n.link = t, n;
			},
			readlink(e) {
				if (!ar.isLink(e.mode)) throw new ar.ErrnoError(28);
				return e.link;
			}
		},
		stream_ops: {
			read(e, r, t, n, o) {
				var a = e.node.contents;
				if (o >= e.node.usedBytes) return 0;
				var i = Math.min(e.node.usedBytes - o, n);
				if (i > 8 && a.subarray) r.set(a.subarray(o, o + i), t);
				else for (var s = 0; s < i; s++) r[t + s] = a[o + s];
				return i;
			},
			write(e, r, t, n, o, a) {
				if (r.buffer === f.buffer && (a = !1), !n) return 0;
				var i = e.node;
				if (i.mtime = i.ctime = Date.now(), r.subarray && (!i.contents || i.contents.subarray)) {
					if (a) return i.contents = r.subarray(t, t + n), i.usedBytes = n, n;
					if (0 === i.usedBytes && 0 === o) return i.contents = r.slice(t, t + n), i.usedBytes = n, n;
					if (o + n <= i.usedBytes) return i.contents.set(r.subarray(t, t + n), o), n;
				}
				if (Ze.expandFileStorage(i, o + n), i.contents.subarray && r.subarray) i.contents.set(r.subarray(t, t + n), o);
				else for (var s = 0; s < n; s++) i.contents[o + s] = r[t + s];
				return i.usedBytes = Math.max(i.usedBytes, o + n), n;
			},
			llseek(e, r, t) {
				var n = r;
				if (1 === t ? n += e.position : 2 === t && ar.isFile(e.node.mode) && (n += e.node.usedBytes), n < 0) throw new ar.ErrnoError(28);
				return n;
			},
			mmap(e, r, t, n, o) {
				if (!ar.isFile(e.node.mode)) throw new ar.ErrnoError(43);
				var a, i, s = e.node.contents;
				if (2 & o || !s || s.buffer !== f.buffer) {
					if (i = !0, !(a = Qe())) throw new ar.ErrnoError(48);
					s && ((t > 0 || t + r < s.length) && (s = s.subarray ? s.subarray(t, t + r) : Array.prototype.slice.call(s, t, t + r)), f.set(s, a));
				} else i = !1, a = s.byteOffset;
				return {
					ptr: a,
					allocated: i
				};
			},
			msync: (e, r, t, n, o) => (Ze.stream_ops.write(e, r, 0, n, t, !1), 0)
		}
	}, er = (e, r) => {
		var t = 0;
		return e && (t |= 365), r && (t |= 146), t;
	}, rr = 0, tr = null, nr = [], or = async (e, t, n, a, i, s, l, u) => {
		var d = t ? Ge.resolve(qe.join2(e, t)) : e;
		rr++, r.monitorRunDependencies?.(rr);
		try {
			var c = n;
			"string" == typeof n && (c = await (async (e) => {
				var r = await o(e);
				return new Uint8Array(r);
			})(n)), c = await (async (e, r) => {
				for (var t of ("undefined" != typeof Browser && Browser.init(), nr)) if (t.canHandle(r)) return t.handle(e, r);
				return e;
			})(c, d), u?.(), s || ((...e) => {
				ar.createDataFile(...e);
			})(e, t, c, a, i, l);
		} finally {
			(() => {
				if (rr--, r.monitorRunDependencies?.(rr), 0 == rr && tr) {
					var e = tr;
					tr = null, e();
				}
			})();
		}
	}, ar = {
		root: null,
		mounts: [],
		devices: {},
		streams: [],
		nextInode: 1,
		nameTable: null,
		currentPath: "/",
		initialized: !1,
		ignorePermissions: !0,
		filesystems: null,
		syncFSRequests: 0,
		readFiles: {},
		ErrnoError: class {
			name = "ErrnoError";
			constructor(e) {
				this.errno = e;
			}
		},
		FSStream: class {
			shared = {};
			get object() {
				return this.node;
			}
			set object(e) {
				this.node = e;
			}
			get isRead() {
				return 1 != (2097155 & this.flags);
			}
			get isWrite() {
				return !!(2097155 & this.flags);
			}
			get isAppend() {
				return 1024 & this.flags;
			}
			get flags() {
				return this.shared.flags;
			}
			set flags(e) {
				this.shared.flags = e;
			}
			get position() {
				return this.shared.position;
			}
			set position(e) {
				this.shared.position = e;
			}
		},
		FSNode: class {
			node_ops = {};
			stream_ops = {};
			readMode = 365;
			writeMode = 146;
			mounted = null;
			constructor(e, r, t, n) {
				e || (e = this), this.parent = e, this.mount = e.mount, this.id = ar.nextInode++, this.name = r, this.mode = t, this.rdev = n, this.atime = this.mtime = this.ctime = Date.now();
			}
			get read() {
				return (this.mode & this.readMode) === this.readMode;
			}
			set read(e) {
				e ? this.mode |= this.readMode : this.mode &= ~this.readMode;
			}
			get write() {
				return (this.mode & this.writeMode) === this.writeMode;
			}
			set write(e) {
				e ? this.mode |= this.writeMode : this.mode &= ~this.writeMode;
			}
			get isFolder() {
				return ar.isDir(this.mode);
			}
			get isDevice() {
				return ar.isChrdev(this.mode);
			}
		},
		lookupPath(e, r = {}) {
			if (!e) throw new ar.ErrnoError(44);
			r.follow_mount ??= !0, qe.isAbs(e) || (e = ar.cwd() + "/" + e);
			e: for (var t = 0; t < 40; t++) {
				for (var n = e.split("/").filter((e) => !!e), o = ar.root, a = "/", i = 0; i < n.length; i++) {
					var s = i === n.length - 1;
					if (s && r.parent) break;
					if ("." !== n[i]) if (".." !== n[i]) {
						a = qe.join2(a, n[i]);
						try {
							o = ar.lookupNode(o, n[i]);
						} catch (u) {
							if (44 === u?.errno && s && r.noent_okay) return { path: a };
							throw u;
						}
						if (!ar.isMountpoint(o) || s && !r.follow_mount || (o = o.mounted.root), ar.isLink(o.mode) && (!s || r.follow)) {
							if (!o.node_ops.readlink) throw new ar.ErrnoError(52);
							var l = o.node_ops.readlink(o);
							qe.isAbs(l) || (l = qe.dirname(a) + "/" + l), e = l + "/" + n.slice(i + 1).join("/");
							continue e;
						}
					} else {
						if (a = qe.dirname(a), ar.isRoot(o)) {
							e = a + "/" + n.slice(i + 1).join("/"), t--;
							continue e;
						}
						o = o.parent;
					}
				}
				return {
					path: a,
					node: o
				};
			}
			throw new ar.ErrnoError(32);
		},
		getPath(e) {
			for (var r;;) {
				if (ar.isRoot(e)) {
					var t = e.mount.mountpoint;
					return r ? "/" !== t[t.length - 1] ? `${t}/${r}` : t + r : t;
				}
				r = r ? `${e.name}/${r}` : e.name, e = e.parent;
			}
		},
		hashName(e, r) {
			for (var t = 0, n = 0; n < r.length; n++) t = (t << 5) - t + r.charCodeAt(n) | 0;
			return (e + t >>> 0) % ar.nameTable.length;
		},
		hashAddNode(e) {
			var r = ar.hashName(e.parent.id, e.name);
			e.name_next = ar.nameTable[r], ar.nameTable[r] = e;
		},
		hashRemoveNode(e) {
			var r = ar.hashName(e.parent.id, e.name);
			if (ar.nameTable[r] === e) ar.nameTable[r] = e.name_next;
			else for (var t = ar.nameTable[r]; t;) {
				if (t.name_next === e) {
					t.name_next = e.name_next;
					break;
				}
				t = t.name_next;
			}
		},
		lookupNode(e, r) {
			var t = ar.mayLookup(e);
			if (t) throw new ar.ErrnoError(t);
			for (var n = ar.hashName(e.id, r), o = ar.nameTable[n]; o; o = o.name_next) {
				var a = o.name;
				if (o.parent.id === e.id && a === r) return o;
			}
			return ar.lookup(e, r);
		},
		createNode(e, r, t, n) {
			var o = new ar.FSNode(e, r, t, n);
			return ar.hashAddNode(o), o;
		},
		destroyNode(e) {
			ar.hashRemoveNode(e);
		},
		isRoot: (e) => e === e.parent,
		isMountpoint: (e) => !!e.mounted,
		isFile: (e) => 32768 == (61440 & e),
		isDir: (e) => 16384 == (61440 & e),
		isLink: (e) => 40960 == (61440 & e),
		isChrdev: (e) => 8192 == (61440 & e),
		isBlkdev: (e) => 24576 == (61440 & e),
		isFIFO: (e) => 4096 == (61440 & e),
		isSocket: (e) => !(49152 & ~e),
		flagsToPermissionString(e) {
			var r = [
				"r",
				"w",
				"rw"
			][3 & e];
			return 512 & e && (r += "w"), r;
		},
		nodePermissions: (e, r) => ar.ignorePermissions || (!r.includes("r") || 292 & e.mode) && (!r.includes("w") || 146 & e.mode) && (!r.includes("x") || 73 & e.mode) ? 0 : 2,
		mayLookup(e) {
			if (!ar.isDir(e.mode)) return 54;
			return ar.nodePermissions(e, "x") || (e.node_ops.lookup ? 0 : 2);
		},
		mayCreate(e, r) {
			if (!ar.isDir(e.mode)) return 54;
			try {
				return ar.lookupNode(e, r), 20;
			} catch (t) {}
			return ar.nodePermissions(e, "wx");
		},
		mayDelete(e, r, t) {
			var n;
			try {
				n = ar.lookupNode(e, r);
			} catch (a) {
				return a.errno;
			}
			var o = ar.nodePermissions(e, "wx");
			if (o) return o;
			if (t) {
				if (!ar.isDir(n.mode)) return 54;
				if (ar.isRoot(n) || ar.getPath(n) === ar.cwd()) return 10;
			} else if (ar.isDir(n.mode)) return 31;
			return 0;
		},
		mayOpen: (e, r) => e ? ar.isLink(e.mode) ? 32 : ar.isDir(e.mode) && ("r" !== ar.flagsToPermissionString(r) || 576 & r) ? 31 : ar.nodePermissions(e, ar.flagsToPermissionString(r)) : 44,
		checkOpExists(e, r) {
			if (!e) throw new ar.ErrnoError(r);
			return e;
		},
		MAX_OPEN_FDS: 4096,
		nextfd() {
			for (var e = 0; e <= ar.MAX_OPEN_FDS; e++) if (!ar.streams[e]) return e;
			throw new ar.ErrnoError(33);
		},
		getStreamChecked(e) {
			var r = ar.getStream(e);
			if (!r) throw new ar.ErrnoError(8);
			return r;
		},
		getStream: (e) => ar.streams[e],
		createStream: (e, r = -1) => (e = Object.assign(new ar.FSStream(), e), -1 == r && (r = ar.nextfd()), e.fd = r, ar.streams[r] = e, e),
		closeStream(e) {
			ar.streams[e] = null;
		},
		dupStream(e, r = -1) {
			var t = ar.createStream(e, r);
			return t.stream_ops?.dup?.(t), t;
		},
		doSetAttr(e, r, t) {
			var n = e?.stream_ops.setattr, o = n ? e : r;
			n ??= r.node_ops.setattr, ar.checkOpExists(n, 63), n(o, t);
		},
		chrdev_stream_ops: {
			open(e) {
				e.stream_ops = ar.getDevice(e.node.rdev).stream_ops, e.stream_ops.open?.(e);
			},
			llseek() {
				throw new ar.ErrnoError(70);
			}
		},
		major: (e) => e >> 8,
		minor: (e) => 255 & e,
		makedev: (e, r) => e << 8 | r,
		registerDevice(e, r) {
			ar.devices[e] = { stream_ops: r };
		},
		getDevice: (e) => ar.devices[e],
		getMounts(e) {
			for (var r = [], t = [e]; t.length;) {
				var n = t.pop();
				r.push(n), t.push(...n.mounts);
			}
			return r;
		},
		syncfs(e, r) {
			"function" == typeof e && (r = e, e = !1), ar.syncFSRequests++, ar.syncFSRequests > 1 && D(`warning: ${ar.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
			var t = ar.getMounts(ar.root.mount), n = 0;
			function o(e) {
				return ar.syncFSRequests--, r(e);
			}
			function a(e) {
				if (e) return a.errored ? void 0 : (a.errored = !0, o(e));
				++n >= t.length && o(null);
			}
			for (var i of t) i.type.syncfs ? i.type.syncfs(i, e, a) : a(null);
		},
		mount(e, r, t) {
			var n, o = "/" === t, a = !t;
			if (o && ar.root) throw new ar.ErrnoError(10);
			if (!o && !a) {
				var i = ar.lookupPath(t, { follow_mount: !1 });
				if (t = i.path, n = i.node, ar.isMountpoint(n)) throw new ar.ErrnoError(10);
				if (!ar.isDir(n.mode)) throw new ar.ErrnoError(54);
			}
			var s = {
				type: e,
				opts: r,
				mountpoint: t,
				mounts: []
			}, l = e.mount(s);
			return l.mount = s, s.root = l, o ? ar.root = l : n && (n.mounted = s, n.mount && n.mount.mounts.push(s)), l;
		},
		unmount(e) {
			var r = ar.lookupPath(e, { follow_mount: !1 });
			if (!ar.isMountpoint(r.node)) throw new ar.ErrnoError(28);
			var t = r.node, n = t.mounted, o = ar.getMounts(n);
			for (var [a, i] of Object.entries(ar.nameTable)) for (; i;) {
				var s = i.name_next;
				o.includes(i.mount) && ar.destroyNode(i), i = s;
			}
			t.mounted = null;
			var l = t.mount.mounts.indexOf(n);
			t.mount.mounts.splice(l, 1);
		},
		lookup: (e, r) => e.node_ops.lookup(e, r),
		mknod(e, r, t) {
			var n = ar.lookupPath(e, { parent: !0 }).node, o = qe.basename(e);
			if (!o) throw new ar.ErrnoError(28);
			if ("." === o || ".." === o) throw new ar.ErrnoError(20);
			var a = ar.mayCreate(n, o);
			if (a) throw new ar.ErrnoError(a);
			if (!n.node_ops.mknod) throw new ar.ErrnoError(63);
			return n.node_ops.mknod(n, o, r, t);
		},
		statfs: (e) => ar.statfsNode(ar.lookupPath(e, { follow: !0 }).node),
		statfsStream: (e) => ar.statfsNode(e.node),
		statfsNode(e) {
			var r = {
				bsize: 4096,
				frsize: 4096,
				blocks: 1e6,
				bfree: 5e5,
				bavail: 5e5,
				files: ar.nextInode,
				ffree: ar.nextInode - 1,
				fsid: 42,
				flags: 2,
				namelen: 255
			};
			return e.node_ops.statfs && Object.assign(r, e.node_ops.statfs(e.mount.opts.root)), r;
		},
		create: (e, r = 438) => (r &= 4095, r |= 32768, ar.mknod(e, r, 0)),
		mkdir: (e, r = 511) => (r &= 1023, r |= 16384, ar.mknod(e, r, 0)),
		mkdirTree(e, r) {
			var t = e.split("/"), n = "";
			for (var o of t) if (o) {
				(n || qe.isAbs(e)) && (n += "/"), n += o;
				try {
					ar.mkdir(n, r);
				} catch (a) {
					if (20 != a.errno) throw a;
				}
			}
		},
		mkdev: (e, r, t) => (void 0 === t && (t = r, r = 438), r |= 8192, ar.mknod(e, r, t)),
		symlink(e, r) {
			if (!Ge.resolve(e)) throw new ar.ErrnoError(44);
			var t = ar.lookupPath(r, { parent: !0 }).node;
			if (!t) throw new ar.ErrnoError(44);
			var n = qe.basename(r), o = ar.mayCreate(t, n);
			if (o) throw new ar.ErrnoError(o);
			if (!t.node_ops.symlink) throw new ar.ErrnoError(63);
			return t.node_ops.symlink(t, n, e);
		},
		rename(e, r) {
			var t, n = qe.dirname(e), o = qe.dirname(r), a = qe.basename(e), i = qe.basename(r), s = ar.lookupPath(e, { parent: !0 }), l = s.node;
			if (t = (s = ar.lookupPath(r, { parent: !0 })).node, !l || !t) throw new ar.ErrnoError(44);
			if (l.mount !== t.mount) throw new ar.ErrnoError(75);
			var u, d = ar.lookupNode(l, a), c = Ge.relative(e, o);
			if ("." !== c.charAt(0)) throw new ar.ErrnoError(28);
			if ("." !== (c = Ge.relative(r, n)).charAt(0)) throw new ar.ErrnoError(55);
			try {
				u = ar.lookupNode(t, i);
			} catch (f) {}
			if (d !== u) {
				var m = ar.isDir(d.mode), h = ar.mayDelete(l, a, m);
				if (h) throw new ar.ErrnoError(h);
				if (h = u ? ar.mayDelete(t, i, m) : ar.mayCreate(t, i)) throw new ar.ErrnoError(h);
				if (!l.node_ops.rename) throw new ar.ErrnoError(63);
				if (ar.isMountpoint(d) || u && ar.isMountpoint(u)) throw new ar.ErrnoError(10);
				if (t !== l && (h = ar.nodePermissions(l, "w"))) throw new ar.ErrnoError(h);
				ar.hashRemoveNode(d);
				try {
					l.node_ops.rename(d, t, i), d.parent = t;
				} catch (f) {
					throw f;
				} finally {
					ar.hashAddNode(d);
				}
			}
		},
		rmdir(e) {
			var r = ar.lookupPath(e, { parent: !0 }).node, t = qe.basename(e), n = ar.lookupNode(r, t), o = ar.mayDelete(r, t, !0);
			if (o) throw new ar.ErrnoError(o);
			if (!r.node_ops.rmdir) throw new ar.ErrnoError(63);
			if (ar.isMountpoint(n)) throw new ar.ErrnoError(10);
			r.node_ops.rmdir(r, t), ar.destroyNode(n);
		},
		readdir(e) {
			var r = ar.lookupPath(e, { follow: !0 }).node;
			return ar.checkOpExists(r.node_ops.readdir, 54)(r);
		},
		unlink(e) {
			var r = ar.lookupPath(e, { parent: !0 }).node;
			if (!r) throw new ar.ErrnoError(44);
			var t = qe.basename(e), n = ar.lookupNode(r, t), o = ar.mayDelete(r, t, !1);
			if (o) throw new ar.ErrnoError(o);
			if (!r.node_ops.unlink) throw new ar.ErrnoError(63);
			if (ar.isMountpoint(n)) throw new ar.ErrnoError(10);
			r.node_ops.unlink(r, t), ar.destroyNode(n);
		},
		readlink(e) {
			var r = ar.lookupPath(e).node;
			if (!r) throw new ar.ErrnoError(44);
			if (!r.node_ops.readlink) throw new ar.ErrnoError(28);
			return r.node_ops.readlink(r);
		},
		stat(e, r) {
			var t = ar.lookupPath(e, { follow: !r }).node;
			return ar.checkOpExists(t.node_ops.getattr, 63)(t);
		},
		fstat(e) {
			var r = ar.getStreamChecked(e), t = r.node, n = r.stream_ops.getattr, o = n ? r : t;
			return n ??= t.node_ops.getattr, ar.checkOpExists(n, 63), n(o);
		},
		lstat: (e) => ar.stat(e, !0),
		doChmod(e, r, t, n) {
			ar.doSetAttr(e, r, {
				mode: 4095 & t | -4096 & r.mode,
				ctime: Date.now(),
				dontFollow: n
			});
		},
		chmod(e, r, t) {
			var n = "string" == typeof e ? ar.lookupPath(e, { follow: !t }).node : e;
			ar.doChmod(null, n, r, t);
		},
		lchmod(e, r) {
			ar.chmod(e, r, !0);
		},
		fchmod(e, r) {
			var t = ar.getStreamChecked(e);
			ar.doChmod(t, t.node, r, !1);
		},
		doChown(e, r, t) {
			ar.doSetAttr(e, r, {
				timestamp: Date.now(),
				dontFollow: t
			});
		},
		chown(e, r, t, n) {
			var o = "string" == typeof e ? ar.lookupPath(e, { follow: !n }).node : e;
			ar.doChown(null, o, n);
		},
		lchown(e, r, t) {
			ar.chown(e, r, t, !0);
		},
		fchown(e, r, t) {
			var n = ar.getStreamChecked(e);
			ar.doChown(n, n.node, !1);
		},
		doTruncate(e, r, t) {
			if (ar.isDir(r.mode)) throw new ar.ErrnoError(31);
			if (!ar.isFile(r.mode)) throw new ar.ErrnoError(28);
			var n = ar.nodePermissions(r, "w");
			if (n) throw new ar.ErrnoError(n);
			ar.doSetAttr(e, r, {
				size: t,
				timestamp: Date.now()
			});
		},
		truncate(e, r) {
			if (r < 0) throw new ar.ErrnoError(28);
			var t = "string" == typeof e ? ar.lookupPath(e, { follow: !0 }).node : e;
			ar.doTruncate(null, t, r);
		},
		ftruncate(e, r) {
			var t = ar.getStreamChecked(e);
			if (r < 0 || !(2097155 & t.flags)) throw new ar.ErrnoError(28);
			ar.doTruncate(t, t.node, r);
		},
		utime(e, r, t) {
			var n = ar.lookupPath(e, { follow: !0 }).node;
			ar.checkOpExists(n.node_ops.setattr, 63)(n, {
				atime: r,
				mtime: t
			});
		},
		open(e, t, n = 438) {
			if ("" === e) throw new ar.ErrnoError(44);
			var o, a;
			if (n = 64 & (t = "string" == typeof t ? ((e) => {
				var r = {
					r: 0,
					"r+": 2,
					w: 577,
					"w+": 578,
					a: 1089,
					"a+": 1090
				}[e];
				if (void 0 === r) throw new Error(`Unknown file open mode: ${e}`);
				return r;
			})(t) : t) ? 4095 & n | 32768 : 0, "object" == typeof e) o = e;
			else {
				a = e.endsWith("/");
				var i = ar.lookupPath(e, {
					follow: !(131072 & t),
					noent_okay: !0
				});
				o = i.node, e = i.path;
			}
			var s = !1;
			if (64 & t) if (o) {
				if (128 & t) throw new ar.ErrnoError(20);
			} else {
				if (a) throw new ar.ErrnoError(31);
				o = ar.mknod(e, 511 | n, 0), s = !0;
			}
			if (!o) throw new ar.ErrnoError(44);
			if (ar.isChrdev(o.mode) && (t &= -513), 65536 & t && !ar.isDir(o.mode)) throw new ar.ErrnoError(54);
			if (!s) {
				var l = ar.mayOpen(o, t);
				if (l) throw new ar.ErrnoError(l);
			}
			512 & t && !s && ar.truncate(o, 0), t &= -131713;
			var u = ar.createStream({
				node: o,
				path: ar.getPath(o),
				flags: t,
				seekable: !0,
				position: 0,
				stream_ops: o.stream_ops,
				ungotten: [],
				error: !1
			});
			return u.stream_ops.open && u.stream_ops.open(u), s && ar.chmod(o, 511 & n), !r.logReadFiles || 1 & t || e in ar.readFiles || (ar.readFiles[e] = 1), u;
		},
		close(e) {
			if (ar.isClosed(e)) throw new ar.ErrnoError(8);
			e.getdents && (e.getdents = null);
			try {
				e.stream_ops.close && e.stream_ops.close(e);
			} catch (r) {
				throw r;
			} finally {
				ar.closeStream(e.fd);
			}
			e.fd = null;
		},
		isClosed: (e) => null === e.fd,
		llseek(e, r, t) {
			if (ar.isClosed(e)) throw new ar.ErrnoError(8);
			if (!e.seekable || !e.stream_ops.llseek) throw new ar.ErrnoError(70);
			if (0 != t && 1 != t && 2 != t) throw new ar.ErrnoError(28);
			return e.position = e.stream_ops.llseek(e, r, t), e.ungotten = [], e.position;
		},
		read(e, r, t, n, o) {
			if (n < 0 || o < 0) throw new ar.ErrnoError(28);
			if (ar.isClosed(e)) throw new ar.ErrnoError(8);
			if (1 == (2097155 & e.flags)) throw new ar.ErrnoError(8);
			if (ar.isDir(e.node.mode)) throw new ar.ErrnoError(31);
			if (!e.stream_ops.read) throw new ar.ErrnoError(28);
			var a = void 0 !== o;
			if (a) {
				if (!e.seekable) throw new ar.ErrnoError(70);
			} else o = e.position;
			var i = e.stream_ops.read(e, r, t, n, o);
			return a || (e.position += i), i;
		},
		write(e, r, t, n, o, a) {
			if (n < 0 || o < 0) throw new ar.ErrnoError(28);
			if (ar.isClosed(e)) throw new ar.ErrnoError(8);
			if (!(2097155 & e.flags)) throw new ar.ErrnoError(8);
			if (ar.isDir(e.node.mode)) throw new ar.ErrnoError(31);
			if (!e.stream_ops.write) throw new ar.ErrnoError(28);
			e.seekable && 1024 & e.flags && ar.llseek(e, 0, 2);
			var i = void 0 !== o;
			if (i) {
				if (!e.seekable) throw new ar.ErrnoError(70);
			} else o = e.position;
			var s = e.stream_ops.write(e, r, t, n, o, a);
			return i || (e.position += s), s;
		},
		mmap(e, r, t, n, o) {
			if (2 & n && !(2 & o) && 2 != (2097155 & e.flags)) throw new ar.ErrnoError(2);
			if (1 == (2097155 & e.flags)) throw new ar.ErrnoError(2);
			if (!e.stream_ops.mmap) throw new ar.ErrnoError(43);
			if (!r) throw new ar.ErrnoError(28);
			return e.stream_ops.mmap(e, r, t, n, o);
		},
		msync: (e, r, t, n, o) => e.stream_ops.msync ? e.stream_ops.msync(e, r, t, n, o) : 0,
		ioctl(e, r, t) {
			if (!e.stream_ops.ioctl) throw new ar.ErrnoError(59);
			return e.stream_ops.ioctl(e, r, t);
		},
		readFile(e, r = {}) {
			r.flags = r.flags || 0, r.encoding = r.encoding || "binary", "utf8" !== r.encoding && "binary" !== r.encoding && C(`Invalid encoding type "${r.encoding}"`);
			var t = ar.open(e, r.flags), n = ar.stat(e).size, o = new Uint8Array(n);
			return ar.read(t, o, 0, n, 0), "utf8" === r.encoding && (o = Ee(o)), ar.close(t), o;
		},
		writeFile(e, r, t = {}) {
			t.flags = t.flags || 577;
			var n = ar.open(e, t.flags, t.mode);
			"string" == typeof r && (r = new Uint8Array(Ye(r, !0))), ArrayBuffer.isView(r) ? ar.write(n, r, 0, r.byteLength, void 0, t.canOwn) : C("Unsupported data type"), ar.close(n);
		},
		cwd: () => ar.currentPath,
		chdir(e) {
			var r = ar.lookupPath(e, { follow: !0 });
			if (null === r.node) throw new ar.ErrnoError(44);
			if (!ar.isDir(r.node.mode)) throw new ar.ErrnoError(54);
			var t = ar.nodePermissions(r.node, "x");
			if (t) throw new ar.ErrnoError(t);
			ar.currentPath = r.path;
		},
		createDefaultDirectories() {
			ar.mkdir("/tmp"), ar.mkdir("/home"), ar.mkdir("/home/web_user");
		},
		createDefaultDevices() {
			ar.mkdir("/dev"), ar.registerDevice(ar.makedev(1, 3), {
				read: () => 0,
				write: (e, r, t, n, o) => n,
				llseek: () => 0
			}), ar.mkdev("/dev/null", ar.makedev(1, 3)), Je.register(ar.makedev(5, 0), Je.default_tty_ops), Je.register(ar.makedev(6, 0), Je.default_tty1_ops), ar.mkdev("/dev/tty", ar.makedev(5, 0)), ar.mkdev("/dev/tty1", ar.makedev(6, 0));
			var e = new Uint8Array(1024), r = 0, t = () => (0 === r && (Xe(e), r = e.byteLength), e[--r]);
			ar.createDevice("/dev", "random", t), ar.createDevice("/dev", "urandom", t), ar.mkdir("/dev/shm"), ar.mkdir("/dev/shm/tmp");
		},
		createSpecialDirectories() {
			ar.mkdir("/proc");
			var e = ar.mkdir("/proc/self");
			ar.mkdir("/proc/self/fd"), ar.mount({ mount() {
				var r = ar.createNode(e, "fd", 16895, 73);
				return r.stream_ops = { llseek: Ze.stream_ops.llseek }, r.node_ops = {
					lookup(e, r) {
						var t = +r, n = ar.getStreamChecked(t), o = {
							parent: null,
							mount: { mountpoint: "fake" },
							node_ops: { readlink: () => n.path },
							id: t + 1
						};
						return o.parent = o, o;
					},
					readdir: () => Array.from(ar.streams.entries()).filter(([e, r]) => r).map(([e, r]) => e.toString())
				}, r;
			} }, {}, "/proc/self/fd");
		},
		createStandardStreams(e, r, t) {
			e ? ar.createDevice("/dev", "stdin", e) : ar.symlink("/dev/tty", "/dev/stdin"), r ? ar.createDevice("/dev", "stdout", null, r) : ar.symlink("/dev/tty", "/dev/stdout"), t ? ar.createDevice("/dev", "stderr", null, t) : ar.symlink("/dev/tty1", "/dev/stderr"), ar.open("/dev/stdin", 0), ar.open("/dev/stdout", 1), ar.open("/dev/stderr", 1);
		},
		staticInit() {
			ar.nameTable = new Array(4096), ar.mount(Ze, {}, "/"), ar.createDefaultDirectories(), ar.createDefaultDevices(), ar.createSpecialDirectories(), ar.filesystems = { MEMFS: Ze };
		},
		init(e, t, n) {
			ar.initialized = !0, e ??= r.stdin, t ??= r.stdout, n ??= r.stderr, ar.createStandardStreams(e, t, n);
		},
		quit() {
			for (var e of (ar.initialized = !1, ar.streams)) e && ar.close(e);
		},
		findObject(e, r) {
			var t = ar.analyzePath(e, r);
			return t.exists ? t.object : null;
		},
		analyzePath(e, r) {
			try {
				e = (n = ar.lookupPath(e, { follow: !r })).path;
			} catch (o) {}
			var t = {
				isRoot: !1,
				exists: !1,
				error: 0,
				name: null,
				path: null,
				object: null,
				parentExists: !1,
				parentPath: null,
				parentObject: null
			};
			try {
				var n = ar.lookupPath(e, { parent: !0 });
				t.parentExists = !0, t.parentPath = n.path, t.parentObject = n.node, t.name = qe.basename(e), n = ar.lookupPath(e, { follow: !r }), t.exists = !0, t.path = n.path, t.object = n.node, t.name = n.node.name, t.isRoot = "/" === n.path;
			} catch (o) {
				t.error = o.errno;
			}
			return t;
		},
		createPath(e, r, t, n) {
			e = "string" == typeof e ? e : ar.getPath(e);
			for (var o = r.split("/").reverse(); o.length;) {
				var a = o.pop();
				if (a) {
					var i = qe.join2(e, a);
					try {
						ar.mkdir(i);
					} catch (s) {
						if (20 != s.errno) throw s;
					}
					e = i;
				}
			}
			return i;
		},
		createFile(e, r, t, n, o) {
			var a = qe.join2("string" == typeof e ? e : ar.getPath(e), r), i = er(n, o);
			return ar.create(a, i);
		},
		createDataFile(e, r, t, n, o, a) {
			var i = r;
			e && (e = "string" == typeof e ? e : ar.getPath(e), i = r ? qe.join2(e, r) : e);
			var s = er(n, o), l = ar.create(i, s);
			if (t) {
				if ("string" == typeof t) {
					for (var u = new Array(t.length), d = 0, c = t.length; d < c; ++d) u[d] = t.charCodeAt(d);
					t = u;
				}
				ar.chmod(l, 146 | s);
				var m = ar.open(l, 577);
				ar.write(m, t, 0, t.length, 0, a), ar.close(m), ar.chmod(l, s);
			}
		},
		createDevice(e, r, t, n) {
			var o = qe.join2("string" == typeof e ? e : ar.getPath(e), r), a = er(!!t, !!n);
			ar.createDevice.major ??= 64;
			var i = ar.makedev(ar.createDevice.major++, 0);
			return ar.registerDevice(i, {
				open(e) {
					e.seekable = !1;
				},
				close(e) {
					n?.buffer?.length && n(10);
				},
				read(e, r, n, o, a) {
					for (var i = 0, s = 0; s < o; s++) {
						var l;
						try {
							l = t();
						} catch (u) {
							throw new ar.ErrnoError(29);
						}
						if (void 0 === l && 0 === i) throw new ar.ErrnoError(6);
						if (null == l) break;
						i++, r[n + s] = l;
					}
					return i && (e.node.atime = Date.now()), i;
				},
				write(e, r, t, o, a) {
					for (var i = 0; i < o; i++) try {
						n(r[t + i]);
					} catch (s) {
						throw new ar.ErrnoError(29);
					}
					return o && (e.node.mtime = e.node.ctime = Date.now()), i;
				}
			}), ar.mkdev(o, a, i);
		},
		forceLoadFile(e) {
			if (e.isDevice || e.isFolder || e.link || e.contents) return !0;
			if (globalThis.XMLHttpRequest) C("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
			else try {
				e.contents = a(e.url);
			} catch (r) {
				throw new ar.ErrnoError(29);
			}
		},
		createLazyFile(e, r, t, o, a) {
			class i {
				lengthKnown = !1;
				chunks = [];
				get(e) {
					if (!(e > this.length - 1 || e < 0)) {
						var r = e % this.chunkSize, t = e / this.chunkSize | 0;
						return this.getter(t)[r];
					}
				}
				setDataGetter(e) {
					this.getter = e;
				}
				cacheLength() {
					var e = new XMLHttpRequest();
					e.open("HEAD", t, !1), e.send(null), e.status >= 200 && e.status < 300 || 304 === e.status || C("Couldn't load " + t + ". Status: " + e.status);
					var r, n = Number(e.getResponseHeader("Content-length")), o = (r = e.getResponseHeader("Accept-Ranges")) && "bytes" === r, a = (r = e.getResponseHeader("Content-Encoding")) && "gzip" === r, i = 1048576;
					o || (i = n);
					var s = this;
					s.setDataGetter((e) => {
						var r = e * i, o = (e + 1) * i - 1;
						return o = Math.min(o, n - 1), void 0 === s.chunks[e] && (s.chunks[e] = ((e, r) => {
							e > r && C("invalid range (" + e + ", " + r + ") or no bytes requested!"), r > n - 1 && C("only " + n + " bytes available! programmer error!");
							var o = new XMLHttpRequest();
							return o.open("GET", t, !1), n !== i && o.setRequestHeader("Range", "bytes=" + e + "-" + r), o.responseType = "arraybuffer", o.overrideMimeType && o.overrideMimeType("text/plain; charset=x-user-defined"), o.send(null), o.status >= 200 && o.status < 300 || 304 === o.status || C("Couldn't load " + t + ". Status: " + o.status), void 0 !== o.response ? new Uint8Array(o.response || []) : Ye(o.responseText || "", !0);
						})(r, o)), void 0 === s.chunks[e] && C("doXHR failed!"), s.chunks[e];
					}), !a && n || (i = n = 1, n = this.getter(0).length, i = n, T("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = n, this._chunkSize = i, this.lengthKnown = !0;
				}
				get length() {
					return this.lengthKnown || this.cacheLength(), this._length;
				}
				get chunkSize() {
					return this.lengthKnown || this.cacheLength(), this._chunkSize;
				}
			}
			if (globalThis.XMLHttpRequest) {
				n || C("Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc");
				var s = {
					isDevice: !1,
					contents: new i()
				};
			} else s = {
				isDevice: !1,
				url: t
			};
			var l = ar.createFile(e, r, s, o, a);
			s.contents ? l.contents = s.contents : s.url && (l.contents = null, l.url = s.url), Object.defineProperties(l, { usedBytes: { get: function() {
				return this.contents.length;
			} } });
			var u = {};
			for (const [n, c] of Object.entries(l.stream_ops)) u[n] = (...e) => (ar.forceLoadFile(l), c(...e));
			function d(e, r, t, n, o) {
				var a = e.node.contents;
				if (o >= a.length) return 0;
				var i = Math.min(a.length - o, n);
				if (a.slice) for (var s = 0; s < i; s++) r[t + s] = a[o + s];
				else for (s = 0; s < i; s++) r[t + s] = a.get(o + s);
				return i;
			}
			return u.read = (e, r, t, n, o) => (ar.forceLoadFile(l), d(e, r, t, n, o)), u.mmap = (e, r, t, n, o) => {
				ar.forceLoadFile(l);
				var a = Qe();
				if (!a) throw new ar.ErrnoError(48);
				return d(e, f, a, r, t), {
					ptr: a,
					allocated: !0
				};
			}, l.stream_ops = u, l;
		}
	}, ir = {
		DEFAULT_POLLMASK: 5,
		calculateAt(e, r, t) {
			if (qe.isAbs(r)) return r;
			var n;
			if (n = -100 === e ? ar.cwd() : ir.getStreamFromFD(e).path, 0 == r.length) {
				if (!t) throw new ar.ErrnoError(44);
				return n;
			}
			return n + "/" + r;
		},
		writeStat(e, r) {
			y[e >> 2] = r.dev, y[e + 4 >> 2] = r.mode, y[e + 8 >> 2] = r.nlink, y[e + 12 >> 2] = r.uid, y[e + 16 >> 2] = r.gid, y[e + 20 >> 2] = r.rdev, b[e + 24 >> 3] = BigInt(r.size), g[e + 32 >> 2] = 4096, g[e + 36 >> 2] = r.blocks;
			var t = r.atime.getTime(), n = r.mtime.getTime(), o = r.ctime.getTime();
			return b[e + 40 >> 3] = BigInt(Math.floor(t / 1e3)), y[e + 48 >> 2] = t % 1e3 * 1e3 * 1e3, b[e + 56 >> 3] = BigInt(Math.floor(n / 1e3)), y[e + 64 >> 2] = n % 1e3 * 1e3 * 1e3, b[e + 72 >> 3] = BigInt(Math.floor(o / 1e3)), y[e + 80 >> 2] = o % 1e3 * 1e3 * 1e3, b[e + 88 >> 3] = BigInt(r.ino), 0;
		},
		writeStatFs(e, r) {
			y[e + 4 >> 2] = r.bsize, y[e + 60 >> 2] = r.bsize, b[e + 8 >> 3] = BigInt(r.blocks), b[e + 16 >> 3] = BigInt(r.bfree), b[e + 24 >> 3] = BigInt(r.bavail), b[e + 32 >> 3] = BigInt(r.files), b[e + 40 >> 3] = BigInt(r.ffree), y[e + 48 >> 2] = r.fsid, y[e + 64 >> 2] = r.flags, y[e + 56 >> 2] = r.namelen;
		},
		doMsync(e, r, t, n, o) {
			if (!ar.isFile(r.node.mode)) throw new ar.ErrnoError(43);
			if (2 & n) return 0;
			var a = p.slice(e, e + t);
			ar.msync(r, a, o, t, n);
		},
		getStreamFromFD: (e) => ar.getStreamChecked(e),
		varargs: void 0,
		getStr: (e) => ke(e)
	};
	var sr, lr, ur, dr, cr, mr, hr, fr, pr, vr = (e) => r["_" + e], wr = (e) => mr(e), gr = (e, r, t, n, o) => {
		var a = {
			string: (e) => {
				var r = 0;
				return null != e && 0 !== e && (r = ((e) => {
					var r = we(e) + 1, t = wr(r);
					return ve(e, t, r), t;
				})(e)), r;
			},
			array: (e) => {
				var r, t, n = wr(e.length);
				return r = e, t = n, f.set(r, t), n;
			}
		};
		var i = vr(e), s = [], l = 0;
		if (n) for (var u = 0; u < n.length; u++) {
			var d = a[t[u]];
			d ? (0 === l && (l = I()), s[u] = d(n[u])) : s[u] = n[u];
		}
		var c = i(...s);
		return c = function(e) {
			return 0 !== l && cr(l), function(e) {
				return "string" === r ? ke(e) : "boolean" === r ? Boolean(e) : e;
			}(e);
		}(c);
	};
	if (ar.createPreloadedFile = (e, r, t, n, o, a, i, s, l, u) => {
		or(e, r, t, n, o, s, l, u).then(a).catch(i);
	}, ar.preloadFile = or, ar.staticInit(), r.noExitRuntime && (j = r.noExitRuntime), r.preloadPlugins && (nr = r.preloadPlugins), r.print && (T = r.print), r.printErr && (D = r.printErr), r.wasmBinary && (d = r.wasmBinary), r.arguments && r.arguments, r.thisProgram && (i = r.thisProgram), r.preInit) for ("function" == typeof r.preInit && (r.preInit = [r.preInit]); r.preInit.length > 0;) r.preInit.shift()();
	r.ccall = gr, r.cwrap = (e, r, t, n) => {
		var o = !t || t.every((e) => "number" === e || "boolean" === e);
		return "string" !== r && o && !n ? vr(e) : (...n) => gr(e, r, t, n);
	};
	var yr = {
		n: (e, r, t) => {
			throw new L(e).init(r, t), e;
		},
		y: () => C(""),
		q: (e, r, t, n, o) => {
			r = U(r);
			const a = 0n === n;
			let i = (e) => e;
			if (a) {
				const e = 8 * t;
				i = (r) => BigInt.asUintN(e, r), o = i(o);
			}
			K(e, {
				name: r,
				fromWireType: i,
				toWireType: (e, r) => ("number" == typeof r && (r = BigInt(r)), r),
				readValueFromPointer: Y(r, t, !a),
				destructorFunction: null
			});
		},
		G: (e, r, t, n) => {
			K(e, {
				name: r = U(r),
				fromWireType: function(e) {
					return !!e;
				},
				toWireType: function(e, r) {
					return r ? t : n;
				},
				readValueFromPointer: function(e) {
					return this.fromWireType(p[e]);
				},
				destructorFunction: null
			});
		},
		E: (e) => K(e, te),
		p: (e, r, t) => {
			K(e, {
				name: r = U(r),
				fromWireType: (e) => e,
				toWireType: (e, r) => r,
				readValueFromPointer: ne(r, t),
				destructorFunction: null
			});
		},
		f: (e, t, n, o, a, i, s, l) => {
			var u = ((e, r) => {
				for (var t = [], n = 0; n < e; n++) t.push(y[r + 4 * n >> 2]);
				return t;
			})(t, n);
			e = ((e) => {
				const r = (e = e.trim()).indexOf("(");
				return -1 === r ? e : e.slice(0, r);
			})(e = U(e)), a = me(o, a, s), ((e, t, n) => {
				r.hasOwnProperty(e) ? ((void 0 === n || void 0 !== r[e].overloadTable && void 0 !== r[e].overloadTable[n]) && G(`Cannot register public name '${e}' twice`), le(r, e, e), r[e].overloadTable.hasOwnProperty(n) && G(`Cannot register multiple overloads of a function with the same number of arguments (${n})!`), r[e].overloadTable[n] = t) : (r[e] = t, r[e].argCount = n);
			})(e, function() {
				((e, r) => {
					var t = [], n = {};
					throw r.forEach(function e(r) {
						n[r] || H[r] || (q[r] ? q[r].forEach(e) : (t.push(r), n[r] = !0));
					}), new he(`${e}: ` + t.map(fe).join([", "]));
				})(`Cannot call ${e} due to unbound types`, u);
			}, t - 1), ((e, r, t) => {
				function n(r) {
					var n = t(r);
					n.length !== e.length && de("Mismatched type converter count");
					for (var o = 0; o < e.length; ++o) K(e[o], n[o]);
				}
				e.forEach((e) => q[e] = r);
				var o = new Array(r.length), a = [], i = 0;
				for (let [s, l] of r.entries()) H.hasOwnProperty(l) ? o[s] = H[l] : (a.push(l), V.hasOwnProperty(l) || (V[l] = []), V[l].push(() => {
					o[s] = H[l], ++i === a.length && n(o);
				}));
				0 === a.length && n(o);
			})([], u, (n) => {
				var o = [n[0], null].concat(n.slice(1));
				return ((e, t, n) => {
					r.hasOwnProperty(e) || de("Replacing nonexistent public symbol"), void 0 !== r[e].overloadTable && void 0 !== n ? r[e].overloadTable[n] = t : (r[e] = t, r[e].argCount = n);
				})(e, se(e, o, null, a, i, s), t - 1), [];
			});
		},
		h: (e, r, t, n, o) => {
			r = U(r);
			let a = (e) => e;
			if (0 === n) {
				var i = 32 - 8 * t;
				a = (e) => e << i >>> i, o = a(o);
			}
			K(e, {
				name: r,
				fromWireType: a,
				toWireType: (e, r) => r,
				readValueFromPointer: Y(r, t, 0 !== n),
				destructorFunction: null
			});
		},
		b: (e, r, t) => {
			var n = [
				Int8Array,
				Uint8Array,
				Int16Array,
				Uint16Array,
				Int32Array,
				Uint32Array,
				Float32Array,
				Float64Array,
				BigInt64Array,
				BigUint64Array
			][r];
			function o(e) {
				var r = y[e >> 2], t = y[e + 4 >> 2];
				return new n(f.buffer, t, r);
			}
			K(e, {
				name: t = U(t),
				fromWireType: o,
				readValueFromPointer: o
			}, { ignoreDuplicateRegistrations: !0 });
		},
		F: (e, r) => {
			r = U(r);
			K(e, {
				name: r,
				fromWireType(e) {
					var r, t = y[e >> 2];
					return r = ke(e + 4, t, !0), sr(e), r;
				},
				toWireType(e, r) {
					var t;
					r instanceof ArrayBuffer && (r = new Uint8Array(r));
					var n = "string" == typeof r;
					n || ArrayBuffer.isView(r) && 1 == r.BYTES_PER_ELEMENT || G("Cannot pass non-string to std::string"), t = n ? we(r) : r.length;
					var o = lr(4 + t + 1), a = o + 4;
					(y[o >> 2] = t, n) ? ve(r, a, t + 1) : p.set(r, a);
					return null !== e && e.push(sr, o), o;
				},
				readValueFromPointer: re,
				destructorFunction(e) {
					sr(e);
				}
			});
		},
		m: (e, r, t) => {
			var n, o, a;
			t = U(t), 2 === r ? (n = _e, o = Fe, a = Te) : (n = De, o = Pe, a = Se), K(e, {
				name: t,
				fromWireType: (e) => {
					var t = y[e >> 2], o = n(e + 4, t * r, !0);
					return sr(e), o;
				},
				toWireType: (e, n) => {
					"string" != typeof n && G(`Cannot pass non-string to C++ string type ${t}`);
					var i = a(n), s = lr(4 + i + r);
					return y[s >> 2] = i / r, o(n, s + 4, i + r), null !== e && e.push(sr, s), s;
				},
				readValueFromPointer: re,
				destructorFunction(e) {
					sr(e);
				}
			});
		},
		H: (e, r) => {
			K(e, {
				isVoid: !0,
				name: r = U(r),
				fromWireType: () => {},
				toWireType: (e, r) => {}
			});
		},
		t: () => {
			j = !1, Ae = 0;
		},
		e: (e, r, t) => {
			var [n, ...o] = ((e, r) => {
				for (var t = new Array(e), n = 0; n < e; ++n) t[n] = Re(y[r + 4 * n >> 2], `parameter ${n}`);
				return t;
			})(e, r), a = n.toWireType.bind(n), i = o.map((e) => e.readValueFromPointer.bind(e));
			e--;
			var s, l = { toValue: ee.toValue }, u = i.map((e, r) => {
				var t = `argFromPtr${r}`;
				return l[t] = e, `${t}(args${r ? "+" + 8 * r : ""})`;
			});
			switch (t) {
				case 0:
					s = "toValue(handle)";
					break;
				case 2:
					s = "new (toValue(handle))";
					break;
				case 3:
					s = "";
					break;
				case 1: l.getStringOrSymbol = Ne, s = "toValue(handle)[getStringOrSymbol(methodName)]";
			}
			s += `(${u})`, n.isVoid || (l.toReturnWire = a, l.emval_returnValue = xe, s = `return emval_returnValue(toReturnWire, destructorsRef, ${s})`), s = `return function (handle, methodName, destructorsRef, args) {\n  ${s}\n  }`;
			var d, c, m = new Function(Object.keys(l), s)(...Object.values(l));
			return d = oe(`methodCaller<(${o.map((e) => e.name)}) => ${n.name}>`, m), c = Ce.length, Ce.push(d), c;
		},
		a: Z,
		r: (e) => e ? (e = Ne(e), ee.toHandle(globalThis[e])) : ee.toHandle(globalThis),
		k: (e, r) => (e = ee.toValue(e), r = ee.toValue(r), ee.toHandle(e[r])),
		i: (e) => {
			e > 9 && (Q[e + 1] += 1);
		},
		d: (e, r, t, n, o) => Ce[e](r, t, n, o),
		g: (e) => ee.toHandle(Ne(e)),
		o: () => ee.toHandle({}),
		c: (e) => {
			ae(ee.toValue(e)), Z(e);
		},
		j: (e, r, t) => {
			e = ee.toValue(e), r = ee.toValue(r), t = ee.toValue(t), e[r] = t;
		},
		u: (e, r) => ($e[e] && (clearTimeout($e[e].id), delete $e[e]), r ? ($e[e] = {
			id: setTimeout(() => {
				delete $e[e], je(() => dr(e, Ie()));
			}, r),
			timeout_ms: r
		}, 0) : 0),
		v: (e, r, t, n) => {
			var o = (/* @__PURE__ */ new Date()).getFullYear(), a = new Date(o, 0, 1), i = new Date(o, 6, 1), s = a.getTimezoneOffset(), l = i.getTimezoneOffset(), u = Math.max(s, l);
			y[e >> 2] = 60 * u, g[r >> 2] = Number(s != l);
			var d = (e) => {
				var r = e >= 0 ? "-" : "+", t = Math.abs(e);
				return `UTC${r}${String(Math.floor(t / 60)).padStart(2, "0")}${String(t % 60).padStart(2, "0")}`;
			}, c = d(s), m = d(l);
			l < s ? (ve(c, t, 17), ve(m, n, 17)) : (ve(c, n, 17), ve(m, t, 17));
		},
		l: Ie,
		D: (e) => {
			var r = p.length, t = 2147483648;
			if ((e >>>= 0) > t) return !1;
			for (var n = 1; n <= 4; n *= 2) {
				var o = r * (1 + .2 / n);
				if (o = Math.min(o, e + 100663296), Ue(Math.min(t, Le(Math.max(e, o), 65536)))) return !0;
			}
			return !1;
		},
		w: (e, r) => {
			var t = 0, n = 0;
			for (var o of He()) {
				var a = r + t;
				y[e + n >> 2] = a, t += ve(o, a, Infinity) + 1, n += 4;
			}
			return 0;
		},
		x: (e, r) => {
			var t = He();
			y[e >> 2] = t.length;
			var n = 0;
			for (var o of t) n += we(o) + 1;
			return y[r >> 2] = n, 0;
		},
		z: function(e) {
			try {
				var r = ir.getStreamFromFD(e);
				return ar.close(r), 0;
			} catch (t) {
				if (void 0 === ar || "ErrnoError" !== t.name) throw t;
				return t.errno;
			}
		},
		C: function(e, r, t, n) {
			try {
				var o = ((e, r, t, n) => {
					for (var o = 0, a = 0; a < t; a++) {
						var i = y[r >> 2], s = y[r + 4 >> 2];
						r += 8;
						var l = ar.read(e, f, i, s, n);
						if (l < 0) return -1;
						if (o += l, l < s) break;
						void 0 !== n && (n += l);
					}
					return o;
				})(ir.getStreamFromFD(e), r, t);
				return y[n >> 2] = o, 0;
			} catch (a) {
				if (void 0 === ar || "ErrnoError" !== a.name) throw a;
				return a.errno;
			}
		},
		A: function(e, r, t, n) {
			var o;
			r = (o = r) < -9007199254740992 || o > 9007199254740992 ? NaN : Number(o);
			try {
				if (isNaN(r)) return 61;
				var a = ir.getStreamFromFD(e);
				return ar.llseek(a, r, t), b[n >> 3] = BigInt(a.position), a.getdents && 0 === r && 0 === t && (a.getdents = null), 0;
			} catch (i) {
				if (void 0 === ar || "ErrnoError" !== i.name) throw i;
				return i.errno;
			}
		},
		B: function(e, r, t, n) {
			try {
				var o = ((e, r, t, n) => {
					for (var o = 0, a = 0; a < t; a++) {
						var i = y[r >> 2], s = y[r + 4 >> 2];
						r += 8;
						var l = ar.write(e, f, i, s, n);
						if (l < 0) return -1;
						if (o += l, l < s) break;
						void 0 !== n && (n += l);
					}
					return o;
				})(ir.getStreamFromFD(e), r, t);
				return y[n >> 2] = o, 0;
			} catch (a) {
				if (void 0 === ar || "ErrnoError" !== a.name) throw a;
				return a.errno;
			}
		},
		s: We
	};
	var Er = await async function() {
		function e(e, r) {
			return function(e) {
				sr = e.K, lr = e.L, ur = e.M, dr = e.N, cr = e.P, mr = e.Q, hr = e.R, fr = e.I, pr = e.O;
			}(Er = e.exports), A(), Er;
		}
		var t = { a: yr };
		return r.instantiateWasm ? new Promise((n, o) => {
			r.instantiateWasm(t, (r, t) => {
				n(e(r));
			});
		}) : (F ??= R(), e((await M(d, F, t)).instance));
	}();
	return function e() {
		function t() {
			r.calledRun = !0, P || (S = !0, r.noFSInit || ar.initialized || ar.init(), Je.init(), Er.J(), ar.ignorePermissions = !1, m?.(r), r.onRuntimeInitialized?.(), function() {
				if (r.postRun) for ("function" == typeof r.postRun && (r.postRun = [r.postRun]); r.postRun.length;) z(r.postRun.shift());
				$(B);
			}());
		}
		rr > 0 ? tr = e : (function() {
			if (r.preRun) for ("function" == typeof r.preRun && (r.preRun = [r.preRun]); r.preRun.length;) O(r.preRun.shift());
			$(W);
		}(), rr > 0 ? tr = e : r.setStatus ? (r.setStatus("Running..."), setTimeout(() => {
			setTimeout(() => r.setStatus(""), 1), t();
		}, 1)) : t());
	}(), S ? r : new Promise((e, r) => {
		m = e, h = r;
	});
}
export { e as default };

import {
    r as H,
    g as ft
} from "./index-D9ROJjVx.js";

function pt(m, a) {
    for (var h = 0; h < a.length; h++) {
        const f = a[h];
        if (typeof f != "string" && !Array.isArray(f)) {
            for (const l in f)
                if (l !== "default" && !(l in m)) {
                    const r = Object.getOwnPropertyDescriptor(f, l);
                    r && Object.defineProperty(m, l, r.get ? r : {
                        enumerable: !0,
                        get: () => f[l]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(m, Symbol.toStringTag, {
        value: "Module"
    }))
}
var ct = {
        exports: {}
    },
    A = {
        exports: {}
    },
    L = {
        exports: {}
    };
/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */
var Q;

function ut() {
    return Q || (Q = 1, function(m) {
        (function(a, h) {
            m.exports ? m.exports = h() : a.getSize = h()
        })(window, function() {
            function h(d) {
                var S = parseFloat(d),
                    g = d.indexOf("%") == -1 && !isNaN(S);
                return g && S
            }

            function f() {}
            var l = typeof console > "u" ? f : function(d) {
                    console.error(d)
                },
                r = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
                n = r.length;

            function o() {
                for (var d = {
                        width: 0,
                        height: 0,
                        innerWidth: 0,
                        innerHeight: 0,
                        outerWidth: 0,
                        outerHeight: 0
                    }, S = 0; S < n; S++) {
                    var g = r[S];
                    d[g] = 0
                }
                return d
            }

            function t(d) {
                var S = getComputedStyle(d);
                return S || l("Style returned " + S + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), S
            }
            var e = !1,
                s;

            function c() {
                if (!e) {
                    e = !0;
                    var d = document.createElement("div");
                    d.style.width = "200px", d.style.padding = "1px 2px 3px 4px", d.style.borderStyle = "solid", d.style.borderWidth = "1px 2px 3px 4px", d.style.boxSizing = "border-box";
                    var S = document.body || document.documentElement;
                    S.appendChild(d);
                    var g = t(d);
                    s = Math.round(h(g.width)) == 200, v.isBoxSizeOuter = s, S.removeChild(d)
                }
            }

            function v(d) {
                if (c(), typeof d == "string" && (d = document.querySelector(d)), !(!d || typeof d != "object" || !d.nodeType)) {
                    var S = t(d);
                    if (S.display == "none") return o();
                    var g = {};
                    g.width = d.offsetWidth, g.height = d.offsetHeight;
                    for (var p = g.isBorderBox = S.boxSizing == "border-box", D = 0; D < n; D++) {
                        var i = r[D],
                            u = S[i],
                            y = parseFloat(u);
                        g[i] = isNaN(y) ? 0 : y
                    }
                    var x = g.paddingLeft + g.paddingRight,
                        b = g.paddingTop + g.paddingBottom,
                        E = g.marginLeft + g.marginRight,
                        C = g.marginTop + g.marginBottom,
                        P = g.borderLeftWidth + g.borderRightWidth,
                        G = g.borderTopWidth + g.borderBottomWidth,
                        V = p && s,
                        j = h(S.width);
                    j !== !1 && (g.width = j + (V ? 0 : x + P));
                    var Y = h(S.height);
                    return Y !== !1 && (g.height = Y + (V ? 0 : b + G)), g.innerWidth = g.width - (x + P), g.innerHeight = g.height - (b + G), g.outerWidth = g.width + E, g.outerHeight = g.height + C, g
                }
            }
            return v
        })
    }(L)), L.exports
}
var k = {
        exports: {}
    },
    I = {
        exports: {}
    },
    $;

function gt() {
    return $ || ($ = 1, function(m) {
        (function(a, h) {
            m.exports ? m.exports = h() : a.matchesSelector = h()
        })(window, function() {
            var h = function() {
                var f = window.Element.prototype;
                if (f.matches) return "matches";
                if (f.matchesSelector) return "matchesSelector";
                for (var l = ["webkit", "moz", "ms", "o"], r = 0; r < l.length; r++) {
                    var n = l[r],
                        o = n + "MatchesSelector";
                    if (f[o]) return o
                }
            }();
            return function(l, r) {
                return l[h](r)
            }
        })
    }(I)), I.exports
}
var J;

function z() {
    return J || (J = 1, function(m) {
        (function(a, h) {
            m.exports ? m.exports = h(a, gt()) : a.fizzyUIUtils = h(a, a.matchesSelector)
        })(window, function(h, f) {
            var l = {};
            l.extend = function(o, t) {
                for (var e in t) o[e] = t[e];
                return o
            }, l.modulo = function(o, t) {
                return (o % t + t) % t
            };
            var r = Array.prototype.slice;
            l.makeArray = function(o) {
                if (Array.isArray(o)) return o;
                if (o == null) return [];
                var t = typeof o == "object" && typeof o.length == "number";
                return t ? r.call(o) : [o]
            }, l.removeFrom = function(o, t) {
                var e = o.indexOf(t);
                e != -1 && o.splice(e, 1)
            }, l.getParent = function(o, t) {
                for (; o.parentNode && o != document.body;)
                    if (o = o.parentNode, f(o, t)) return o
            }, l.getQueryElement = function(o) {
                return typeof o == "string" ? document.querySelector(o) : o
            }, l.handleEvent = function(o) {
                var t = "on" + o.type;
                this[t] && this[t](o)
            }, l.filterFindElements = function(o, t) {
                o = l.makeArray(o);
                var e = [];
                return o.forEach(function(s) {
                    if (s instanceof HTMLElement) {
                        if (!t) {
                            e.push(s);
                            return
                        }
                        f(s, t) && e.push(s);
                        for (var c = s.querySelectorAll(t), v = 0; v < c.length; v++) e.push(c[v])
                    }
                }), e
            }, l.debounceMethod = function(o, t, e) {
                e = e || 100;
                var s = o.prototype[t],
                    c = t + "Timeout";
                o.prototype[t] = function() {
                    var v = this[c];
                    clearTimeout(v);
                    var d = arguments,
                        S = this;
                    this[c] = setTimeout(function() {
                        s.apply(S, d), delete S[c]
                    }, e)
                }
            }, l.docReady = function(o) {
                var t = document.readyState;
                t == "complete" || t == "interactive" ? setTimeout(o) : document.addEventListener("DOMContentLoaded", o)
            }, l.toDashed = function(o) {
                return o.replace(/(.)([A-Z])/g, function(t, e, s) {
                    return e + "-" + s
                }).toLowerCase()
            };
            var n = h.console;
            return l.htmlInit = function(o, t) {
                l.docReady(function() {
                    var e = l.toDashed(t),
                        s = "data-" + e,
                        c = document.querySelectorAll("[" + s + "]"),
                        v = document.querySelectorAll(".js-" + e),
                        d = l.makeArray(c).concat(l.makeArray(v)),
                        S = s + "-options",
                        g = h.jQuery;
                    d.forEach(function(p) {
                        var D = p.getAttribute(s) || p.getAttribute(S),
                            i;
                        try {
                            i = D && JSON.parse(D)
                        } catch (y) {
                            n && n.error("Error parsing " + s + " on " + p.className + ": " + y);
                            return
                        }
                        var u = new o(p, i);
                        g && g.data(p, t, u)
                    })
                })
            }, l
        })
    }(k)), k.exports
}
var M = {
        exports: {}
    },
    Z;

function vt() {
    return Z || (Z = 1, function(m) {
        (function(a, h) {
            m.exports ? m.exports = h(a, ut()) : (a.Flickity = a.Flickity || {}, a.Flickity.Cell = h(a, a.getSize))
        })(window, function(h, f) {
            function l(n, o) {
                this.element = n, this.parent = o, this.create()
            }
            var r = l.prototype;
            return r.create = function() {
                this.element.style.position = "absolute", this.element.setAttribute("aria-hidden", "true"), this.x = 0, this.shift = 0, this.element.style[this.parent.originSide] = 0
            }, r.destroy = function() {
                this.unselect(), this.element.style.position = "";
                var n = this.parent.originSide;
                this.element.style[n] = "", this.element.style.transform = "", this.element.removeAttribute("aria-hidden")
            }, r.getSize = function() {
                this.size = f(this.element)
            }, r.setPosition = function(n) {
                this.x = n, this.updateTarget(), this.renderPosition(n)
            }, r.updateTarget = r.setDefaultTarget = function() {
                var n = this.parent.originSide == "left" ? "marginLeft" : "marginRight";
                this.target = this.x + this.size[n] + this.size.width * this.parent.cellAlign
            }, r.renderPosition = function(n) {
                var o = this.parent.originSide === "left" ? 1 : -1,
                    t = this.parent.options.percentPosition ? n * o * (this.parent.size.innerWidth / this.size.width) : n * o;
                this.element.style.transform = "translateX(" + this.parent.getPositionValue(t) + ")"
            }, r.select = function() {
                this.element.classList.add("is-selected"), this.element.removeAttribute("aria-hidden")
            }, r.unselect = function() {
                this.element.classList.remove("is-selected"), this.element.setAttribute("aria-hidden", "true")
            }, r.wrapShift = function(n) {
                this.shift = n, this.renderPosition(this.x + this.parent.slideableWidth * n)
            }, r.remove = function() {
                this.element.parentNode.removeChild(this.element)
            }, l
        })
    }(M)), M.exports
}
var T = {
        exports: {}
    },
    K;

function mt() {
    return K || (K = 1, function(m) {
        (function(a, h) {
            m.exports ? m.exports = h() : (a.Flickity = a.Flickity || {}, a.Flickity.Slide = h())
        })(window, function() {
            function h(l) {
                this.parent = l, this.isOriginLeft = l.originSide == "left", this.cells = [], this.outerWidth = 0, this.height = 0
            }
            var f = h.prototype;
            return f.addCell = function(l) {
                if (this.cells.push(l), this.outerWidth += l.size.outerWidth, this.height = Math.max(l.size.outerHeight, this.height), this.cells.length == 1) {
                    this.x = l.x;
                    var r = this.isOriginLeft ? "marginLeft" : "marginRight";
                    this.firstMargin = l.size[r]
                }
            }, f.updateTarget = function() {
                var l = this.isOriginLeft ? "marginRight" : "marginLeft",
                    r = this.getLastCell(),
                    n = r ? r.size[l] : 0,
                    o = this.outerWidth - (this.firstMargin + n);
                this.target = this.x + this.firstMargin + o * this.parent.cellAlign
            }, f.getLastCell = function() {
                return this.cells[this.cells.length - 1]
            }, f.select = function() {
                this.cells.forEach(function(l) {
                    l.select()
                })
            }, f.unselect = function() {
                this.cells.forEach(function(l) {
                    l.unselect()
                })
            }, f.getCellElements = function() {
                return this.cells.map(function(l) {
                    return l.element
                })
            }, h
        })
    }(T)), T.exports
}
var W = {
        exports: {}
    },
    tt;

function yt() {
    return tt || (tt = 1, function(m) {
        (function(a, h) {
            m.exports ? m.exports = h(a, z()) : (a.Flickity = a.Flickity || {}, a.Flickity.animatePrototype = h(a, a.fizzyUIUtils))
        })(window, function(h, f) {
            var l = {};
            return l.startAnimation = function() {
                this.isAnimating || (this.isAnimating = !0, this.restingFrames = 0, this.animate())
            }, l.animate = function() {
                this.applyDragForce(), this.applySelectedAttraction();
                var r = this.x;
                if (this.integratePhysics(), this.positionSlider(), this.settle(r), this.isAnimating) {
                    var n = this;
                    requestAnimationFrame(function() {
                        n.animate()
                    })
                }
            }, l.positionSlider = function() {
                var r = this.x;
                this.options.wrapAround && this.cells.length > 1 && (r = f.modulo(r, this.slideableWidth), r -= this.slideableWidth, this.shiftWrapCells(r)), this.setTranslateX(r, this.isAnimating), this.dispatchScrollEvent()
            }, l.setTranslateX = function(r, n) {
                r += this.cursorPosition, r = this.options.rightToLeft ? -r : r;
                var o = this.getPositionValue(r);
                this.slider.style.transform = n ? "translate3d(" + o + ",0,0)" : "translateX(" + o + ")"
            }, l.dispatchScrollEvent = function() {
                var r = this.slides[0];
                if (r) {
                    var n = -this.x - r.target,
                        o = n / this.slidesWidth;
                    this.dispatchEvent("scroll", null, [o, n])
                }
            }, l.positionSliderAtSelected = function() {
                this.cells.length && (this.x = -this.selectedSlide.target, this.velocity = 0, this.positionSlider())
            }, l.getPositionValue = function(r) {
                return this.options.percentPosition ? Math.round(r / this.size.innerWidth * 1e4) * .01 + "%" : Math.round(r) + "px"
            }, l.settle = function(r) {
                var n = !this.isPointerDown && Math.round(this.x * 100) == Math.round(r * 100);
                n && this.restingFrames++, this.restingFrames > 2 && (this.isAnimating = !1, delete this.isFreeScrolling, this.positionSlider(), this.dispatchEvent("settle", null, [this.selectedIndex]))
            }, l.shiftWrapCells = function(r) {
                var n = this.cursorPosition + r;
                this._shiftCells(this.beforeShiftCells, n, -1);
                var o = this.size.innerWidth - (r + this.slideableWidth + this.cursorPosition);
                this._shiftCells(this.afterShiftCells, o, 1)
            }, l._shiftCells = function(r, n, o) {
                for (var t = 0; t < r.length; t++) {
                    var e = r[t],
                        s = n > 0 ? o : 0;
                    e.wrapShift(s), n -= e.size.outerWidth
                }
            }, l._unshiftCells = function(r) {
                if (!(!r || !r.length))
                    for (var n = 0; n < r.length; n++) r[n].wrapShift(0)
            }, l.integratePhysics = function() {
                this.x += this.velocity, this.velocity *= this.getFrictionFactor()
            }, l.applyForce = function(r) {
                this.velocity += r
            }, l.getFrictionFactor = function() {
                return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
            }, l.getRestingPosition = function() {
                return this.x + this.velocity / (1 - this.getFrictionFactor())
            }, l.applyDragForce = function() {
                if (!(!this.isDraggable || !this.isPointerDown)) {
                    var r = this.dragX - this.x,
                        n = r - this.velocity;
                    this.applyForce(n)
                }
            }, l.applySelectedAttraction = function() {
                var r = this.isDraggable && this.isPointerDown;
                if (!(r || this.isFreeScrolling || !this.slides.length)) {
                    var n = this.selectedSlide.target * -1 - this.x,
                        o = n * this.options.selectedAttraction;
                    this.applyForce(o)
                }
            }, l
        })
    }(W)), W.exports
}
var et;

function _() {
    return et || (et = 1, function(m) {
        (function(a, h) {
            if (m.exports) m.exports = h(a, H(), ut(), z(), vt(), mt(), yt());
            else {
                var f = a.Flickity;
                a.Flickity = h(a, a.EvEmitter, a.getSize, a.fizzyUIUtils, f.Cell, f.Slide, f.animatePrototype)
            }
        })(window, function(h, f, l, r, n, o, t) {
            var e = h.jQuery,
                s = h.getComputedStyle,
                c = h.console;

            function v(i, u) {
                for (i = r.makeArray(i); i.length;) u.appendChild(i.shift())
            }
            var d = 0,
                S = {};

            function g(i, u) {
                var y = r.getQueryElement(i);
                if (!y) {
                    c && c.error("Bad element for Flickity: " + (y || i));
                    return
                }
                if (this.element = y, this.element.flickityGUID) {
                    var x = S[this.element.flickityGUID];
                    return x && x.option(u), x
                }
                e && (this.$element = e(this.element)), this.options = r.extend({}, this.constructor.defaults), this.option(u), this._create()
            }
            g.defaults = {
                accessibility: !0,
                cellAlign: "center",
                freeScrollFriction: .075,
                friction: .28,
                namespaceJQueryEvents: !0,
                percentPosition: !0,
                resize: !0,
                selectedAttraction: .025,
                setGallerySize: !0
            }, g.createMethods = [];
            var p = g.prototype;
            r.extend(p, f.prototype), p._create = function() {
                var i = this.guid = ++d;
                this.element.flickityGUID = i, S[i] = this, this.selectedIndex = 0, this.restingFrames = 0, this.x = 0, this.velocity = 0, this.originSide = this.options.rightToLeft ? "right" : "left", this.viewport = document.createElement("div"), this.viewport.className = "flickity-viewport", this._createSlider(), (this.options.resize || this.options.watchCSS) && h.addEventListener("resize", this);
                for (var u in this.options.on) {
                    var y = this.options.on[u];
                    this.on(u, y)
                }
                g.createMethods.forEach(function(x) {
                    this[x]()
                }, this), this.options.watchCSS ? this.watchCSS() : this.activate()
            }, p.option = function(i) {
                r.extend(this.options, i)
            }, p.activate = function() {
                if (!this.isActive) {
                    this.isActive = !0, this.element.classList.add("flickity-enabled"), this.options.rightToLeft && this.element.classList.add("flickity-rtl"), this.getSize();
                    var i = this._filterFindCellElements(this.element.children);
                    v(i, this.slider), this.viewport.appendChild(this.slider), this.element.appendChild(this.viewport), this.reloadCells(), this.options.accessibility && (this.element.tabIndex = 0, this.element.addEventListener("keydown", this)), this.emitEvent("activate"), this.selectInitialIndex(), this.isInitActivated = !0, this.dispatchEvent("ready")
                }
            }, p._createSlider = function() {
                var i = document.createElement("div");
                i.className = "flickity-slider", i.style[this.originSide] = 0, this.slider = i
            }, p._filterFindCellElements = function(i) {
                return r.filterFindElements(i, this.options.cellSelector)
            }, p.reloadCells = function() {
                this.cells = this._makeCells(this.slider.children), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize()
            }, p._makeCells = function(i) {
                var u = this._filterFindCellElements(i),
                    y = u.map(function(x) {
                        return new n(x, this)
                    }, this);
                return y
            }, p.getLastCell = function() {
                return this.cells[this.cells.length - 1]
            }, p.getLastSlide = function() {
                return this.slides[this.slides.length - 1]
            }, p.positionCells = function() {
                this._sizeCells(this.cells), this._positionCells(0)
            }, p._positionCells = function(i) {
                i = i || 0, this.maxCellHeight = i && this.maxCellHeight || 0;
                var u = 0;
                if (i > 0) {
                    var y = this.cells[i - 1];
                    u = y.x + y.size.outerWidth
                }
                for (var x = this.cells.length, b = i; b < x; b++) {
                    var E = this.cells[b];
                    E.setPosition(u), u += E.size.outerWidth, this.maxCellHeight = Math.max(E.size.outerHeight, this.maxCellHeight)
                }
                this.slideableWidth = u, this.updateSlides(), this._containSlides(), this.slidesWidth = x ? this.getLastSlide().target - this.slides[0].target : 0
            }, p._sizeCells = function(i) {
                i.forEach(function(u) {
                    u.getSize()
                })
            }, p.updateSlides = function() {
                if (this.slides = [], !!this.cells.length) {
                    var i = new o(this);
                    this.slides.push(i);
                    var u = this.originSide == "left",
                        y = u ? "marginRight" : "marginLeft",
                        x = this._getCanCellFit();
                    this.cells.forEach(function(b, E) {
                        if (!i.cells.length) {
                            i.addCell(b);
                            return
                        }
                        var C = i.outerWidth - i.firstMargin + (b.size.outerWidth - b.size[y]);
                        x.call(this, E, C) || (i.updateTarget(), i = new o(this), this.slides.push(i)), i.addCell(b)
                    }, this), i.updateTarget(), this.updateSelectedSlide()
                }
            }, p._getCanCellFit = function() {
                var i = this.options.groupCells;
                if (i) {
                    if (typeof i == "number") {
                        var u = parseInt(i, 10);
                        return function(b) {
                            return b % u !== 0
                        }
                    }
                } else return function() {
                    return !1
                };
                var y = typeof i == "string" && i.match(/^(\d+)%$/),
                    x = y ? parseInt(y[1], 10) / 100 : 1;
                return function(b, E) {
                    return E <= (this.size.innerWidth + 1) * x
                }
            }, p._init = p.reposition = function() {
                this.positionCells(), this.positionSliderAtSelected()
            }, p.getSize = function() {
                this.size = l(this.element), this.setCellAlign(), this.cursorPosition = this.size.innerWidth * this.cellAlign
            };
            var D = {
                center: {
                    left: .5,
                    right: .5
                },
                left: {
                    left: 0,
                    right: 1
                },
                right: {
                    right: 0,
                    left: 1
                }
            };
            return p.setCellAlign = function() {
                var i = D[this.options.cellAlign];
                this.cellAlign = i ? i[this.originSide] : this.options.cellAlign
            }, p.setGallerySize = function() {
                if (this.options.setGallerySize) {
                    var i = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
                    this.viewport.style.height = i + "px"
                }
            }, p._getWrapShiftCells = function() {
                if (this.options.wrapAround) {
                    this._unshiftCells(this.beforeShiftCells), this._unshiftCells(this.afterShiftCells);
                    var i = this.cursorPosition,
                        u = this.cells.length - 1;
                    this.beforeShiftCells = this._getGapCells(i, u, -1), i = this.size.innerWidth - this.cursorPosition, this.afterShiftCells = this._getGapCells(i, 0, 1)
                }
            }, p._getGapCells = function(i, u, y) {
                for (var x = []; i > 0;) {
                    var b = this.cells[u];
                    if (!b) break;
                    x.push(b), u += y, i -= b.size.outerWidth
                }
                return x
            }, p._containSlides = function() {
                if (!(!this.options.contain || this.options.wrapAround || !this.cells.length)) {
                    var i = this.options.rightToLeft,
                        u = i ? "marginRight" : "marginLeft",
                        y = i ? "marginLeft" : "marginRight",
                        x = this.slideableWidth - this.getLastCell().size[y],
                        b = x < this.size.innerWidth,
                        E = this.cursorPosition + this.cells[0].size[u],
                        C = x - this.size.innerWidth * (1 - this.cellAlign);
                    this.slides.forEach(function(P) {
                        b ? P.target = x * this.cellAlign : (P.target = Math.max(P.target, E), P.target = Math.min(P.target, C))
                    }, this)
                }
            }, p.dispatchEvent = function(i, u, y) {
                var x = u ? [u].concat(y) : y;
                if (this.emitEvent(i, x), e && this.$element) {
                    i += this.options.namespaceJQueryEvents ? ".flickity" : "";
                    var b = i;
                    if (u) {
                        var E = new e.Event(u);
                        E.type = i, b = E
                    }
                    this.$element.trigger(b, y)
                }
            }, p.select = function(i, u, y) {
                if (this.isActive && (i = parseInt(i, 10), this._wrapSelect(i), (this.options.wrapAround || u) && (i = r.modulo(i, this.slides.length)), !!this.slides[i])) {
                    var x = this.selectedIndex;
                    this.selectedIndex = i, this.updateSelectedSlide(), y ? this.positionSliderAtSelected() : this.startAnimation(), this.options.adaptiveHeight && this.setGallerySize(), this.dispatchEvent("select", null, [i]), i != x && this.dispatchEvent("change", null, [i]), this.dispatchEvent("cellSelect")
                }
            }, p._wrapSelect = function(i) {
                var u = this.slides.length,
                    y = this.options.wrapAround && u > 1;
                if (!y) return i;
                var x = r.modulo(i, u),
                    b = Math.abs(x - this.selectedIndex),
                    E = Math.abs(x + u - this.selectedIndex),
                    C = Math.abs(x - u - this.selectedIndex);
                !this.isDragSelect && E < b ? i += u : !this.isDragSelect && C < b && (i -= u), i < 0 ? this.x -= this.slideableWidth : i >= u && (this.x += this.slideableWidth)
            }, p.previous = function(i, u) {
                this.select(this.selectedIndex - 1, i, u)
            }, p.next = function(i, u) {
                this.select(this.selectedIndex + 1, i, u)
            }, p.updateSelectedSlide = function() {
                var i = this.slides[this.selectedIndex];
                i && (this.unselectSelectedSlide(), this.selectedSlide = i, i.select(), this.selectedCells = i.cells, this.selectedElements = i.getCellElements(), this.selectedCell = i.cells[0], this.selectedElement = this.selectedElements[0])
            }, p.unselectSelectedSlide = function() {
                this.selectedSlide && this.selectedSlide.unselect()
            }, p.selectInitialIndex = function() {
                var i = this.options.initialIndex;
                if (this.isInitActivated) {
                    this.select(this.selectedIndex, !1, !0);
                    return
                }
                if (i && typeof i == "string") {
                    var u = this.queryCell(i);
                    if (u) {
                        this.selectCell(i, !1, !0);
                        return
                    }
                }
                var y = 0;
                i && this.slides[i] && (y = i), this.select(y, !1, !0)
            }, p.selectCell = function(i, u, y) {
                var x = this.queryCell(i);
                if (x) {
                    var b = this.getCellSlideIndex(x);
                    this.select(b, u, y)
                }
            }, p.getCellSlideIndex = function(i) {
                for (var u = 0; u < this.slides.length; u++) {
                    var y = this.slides[u],
                        x = y.cells.indexOf(i);
                    if (x != -1) return u
                }
            }, p.getCell = function(i) {
                for (var u = 0; u < this.cells.length; u++) {
                    var y = this.cells[u];
                    if (y.element == i) return y
                }
            }, p.getCells = function(i) {
                i = r.makeArray(i);
                var u = [];
                return i.forEach(function(y) {
                    var x = this.getCell(y);
                    x && u.push(x)
                }, this), u
            }, p.getCellElements = function() {
                return this.cells.map(function(i) {
                    return i.element
                })
            }, p.getParentCell = function(i) {
                var u = this.getCell(i);
                return u || (i = r.getParent(i, ".flickity-slider > *"), this.getCell(i))
            }, p.getAdjacentCellElements = function(i, u) {
                if (!i) return this.selectedSlide.getCellElements();
                u = u === void 0 ? this.selectedIndex : u;
                var y = this.slides.length;
                if (1 + i * 2 >= y) return this.getCellElements();
                for (var x = [], b = u - i; b <= u + i; b++) {
                    var E = this.options.wrapAround ? r.modulo(b, y) : b,
                        C = this.slides[E];
                    C && (x = x.concat(C.getCellElements()))
                }
                return x
            }, p.queryCell = function(i) {
                if (typeof i == "number") return this.cells[i];
                if (typeof i == "string") {
                    if (i.match(/^[#.]?[\d/]/)) return;
                    i = this.element.querySelector(i)
                }
                return this.getCell(i)
            }, p.uiChange = function() {
                this.emitEvent("uiChange")
            }, p.childUIPointerDown = function(i) {
                i.type != "touchstart" && i.preventDefault(), this.focus()
            }, p.onresize = function() {
                this.watchCSS(), this.resize()
            }, r.debounceMethod(g, "onresize", 150), p.resize = function() {
                if (!(!this.isActive || this.isAnimating || this.isDragging)) {
                    this.getSize(), this.options.wrapAround && (this.x = r.modulo(this.x, this.slideableWidth)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize(), this.emitEvent("resize");
                    var i = this.selectedElements && this.selectedElements[0];
                    this.selectCell(i, !1, !0)
                }
            }, p.watchCSS = function() {
                var i = this.options.watchCSS;
                if (i) {
                    var u = s(this.element, ":after").content;
                    u.indexOf("flickity") != -1 ? this.activate() : this.deactivate()
                }
            }, p.onkeydown = function(i) {
                var u = document.activeElement && document.activeElement != this.element;
                if (!(!this.options.accessibility || u)) {
                    var y = g.keyboardHandlers[i.keyCode];
                    y && y.call(this)
                }
            }, g.keyboardHandlers = {
                37: function() {
                    var i = this.options.rightToLeft ? "next" : "previous";
                    this.uiChange(), this[i]()
                },
                39: function() {
                    var i = this.options.rightToLeft ? "previous" : "next";
                    this.uiChange(), this[i]()
                }
            }, p.focus = function() {
                var i = h.pageYOffset;
                this.element.focus({
                    preventScroll: !0
                }), h.pageYOffset != i && h.scrollTo(h.pageXOffset, i)
            }, p.deactivate = function() {
                this.isActive && (this.element.classList.remove("flickity-enabled"), this.element.classList.remove("flickity-rtl"), this.unselectSelectedSlide(), this.cells.forEach(function(i) {
                    i.destroy()
                }), this.element.removeChild(this.viewport), v(this.slider.children, this.element), this.options.accessibility && (this.element.removeAttribute("tabIndex"), this.element.removeEventListener("keydown", this)), this.isActive = !1, this.emitEvent("deactivate"))
            }, p.destroy = function() {
                this.deactivate(), h.removeEventListener("resize", this), this.allOff(), this.emitEvent("destroy"), e && this.$element && e.removeData(this.element, "flickity"), delete this.element.flickityGUID, delete S[this.guid]
            }, r.extend(p, t), g.data = function(i) {
                i = r.getQueryElement(i);
                var u = i && i.flickityGUID;
                return u && S[u]
            }, r.htmlInit(g, "flickity"), e && e.bridget && e.bridget("flickity", g), g.setJQuery = function(i) {
                e = i
            }, g.Cell = n, g.Slide = o, g
        })
    }(A)), A.exports
}
var U = {
        exports: {}
    },
    w = {
        exports: {}
    },
    R = {
        exports: {}
    };
/*!
 * Unipointer v2.4.0
 * base class for doing one thing with pointer event
 * MIT license
 */
var it;

function X() {
    return it || (it = 1, function(m) {
        (function(a, h) {
            m.exports ? m.exports = h(a, H()) : a.Unipointer = h(a, a.EvEmitter)
        })(window, function(h, f) {
            function l() {}

            function r() {}
            var n = r.prototype = Object.create(f.prototype);
            n.bindStartEvent = function(t) {
                this._bindStartEvent(t, !0)
            }, n.unbindStartEvent = function(t) {
                this._bindStartEvent(t, !1)
            }, n._bindStartEvent = function(t, e) {
                e = e === void 0 ? !0 : e;
                var s = e ? "addEventListener" : "removeEventListener",
                    c = "mousedown";
                "ontouchstart" in h ? c = "touchstart" : h.PointerEvent && (c = "pointerdown"), t[s](c, this)
            }, n.handleEvent = function(t) {
                var e = "on" + t.type;
                this[e] && this[e](t)
            }, n.getTouch = function(t) {
                for (var e = 0; e < t.length; e++) {
                    var s = t[e];
                    if (s.identifier == this.pointerIdentifier) return s
                }
            }, n.onmousedown = function(t) {
                var e = t.button;
                e && e !== 0 && e !== 1 || this._pointerDown(t, t)
            }, n.ontouchstart = function(t) {
                this._pointerDown(t, t.changedTouches[0])
            }, n.onpointerdown = function(t) {
                this._pointerDown(t, t)
            }, n._pointerDown = function(t, e) {
                t.button || this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = e.pointerId !== void 0 ? e.pointerId : e.identifier, this.pointerDown(t, e))
            }, n.pointerDown = function(t, e) {
                this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e])
            };
            var o = {
                mousedown: ["mousemove", "mouseup"],
                touchstart: ["touchmove", "touchend", "touchcancel"],
                pointerdown: ["pointermove", "pointerup", "pointercancel"]
            };
            return n._bindPostStartEvents = function(t) {
                if (t) {
                    var e = o[t.type];
                    e.forEach(function(s) {
                        h.addEventListener(s, this)
                    }, this), this._boundPointerEvents = e
                }
            }, n._unbindPostStartEvents = function() {
                this._boundPointerEvents && (this._boundPointerEvents.forEach(function(t) {
                    h.removeEventListener(t, this)
                }, this), delete this._boundPointerEvents)
            }, n.onmousemove = function(t) {
                this._pointerMove(t, t)
            }, n.onpointermove = function(t) {
                t.pointerId == this.pointerIdentifier && this._pointerMove(t, t)
            }, n.ontouchmove = function(t) {
                var e = this.getTouch(t.changedTouches);
                e && this._pointerMove(t, e)
            }, n._pointerMove = function(t, e) {
                this.pointerMove(t, e)
            }, n.pointerMove = function(t, e) {
                this.emitEvent("pointerMove", [t, e])
            }, n.onmouseup = function(t) {
                this._pointerUp(t, t)
            }, n.onpointerup = function(t) {
                t.pointerId == this.pointerIdentifier && this._pointerUp(t, t)
            }, n.ontouchend = function(t) {
                var e = this.getTouch(t.changedTouches);
                e && this._pointerUp(t, e)
            }, n._pointerUp = function(t, e) {
                this._pointerDone(), this.pointerUp(t, e)
            }, n.pointerUp = function(t, e) {
                this.emitEvent("pointerUp", [t, e])
            }, n._pointerDone = function() {
                this._pointerReset(), this._unbindPostStartEvents(), this.pointerDone()
            }, n._pointerReset = function() {
                this.isPointerDown = !1, delete this.pointerIdentifier
            }, n.pointerDone = l, n.onpointercancel = function(t) {
                t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t)
            }, n.ontouchcancel = function(t) {
                var e = this.getTouch(t.changedTouches);
                e && this._pointerCancel(t, e)
            }, n._pointerCancel = function(t, e) {
                this._pointerDone(), this.pointerCancel(t, e)
            }, n.pointerCancel = function(t, e) {
                this.emitEvent("pointerCancel", [t, e])
            }, r.getPointerPoint = function(t) {
                return {
                    x: t.pageX,
                    y: t.pageY
                }
            }, r
        })
    }(R)), R.exports
}
/*!
 * Unidragger v2.4.0
 * Draggable base class
 * MIT license
 */
var nt;

function St() {
    return nt || (nt = 1, function(m) {
        (function(a, h) {
            m.exports ? m.exports = h(a, X()) : a.Unidragger = h(a, a.Unipointer)
        })(window, function(h, f) {
            function l() {}
            var r = l.prototype = Object.create(f.prototype);
            r.bindHandles = function() {
                this._bindHandles(!0)
            }, r.unbindHandles = function() {
                this._bindHandles(!1)
            }, r._bindHandles = function(t) {
                t = t === void 0 ? !0 : t;
                for (var e = t ? "addEventListener" : "removeEventListener", s = t ? this._touchActionValue : "", c = 0; c < this.handles.length; c++) {
                    var v = this.handles[c];
                    this._bindStartEvent(v, t), v[e]("click", this), h.PointerEvent && (v.style.touchAction = s)
                }
            }, r._touchActionValue = "none", r.pointerDown = function(t, e) {
                var s = this.okayPointerDown(t);
                s && (this.pointerDownPointer = {
                    pageX: e.pageX,
                    pageY: e.pageY
                }, t.preventDefault(), this.pointerDownBlur(), this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e]))
            };
            var n = {
                    TEXTAREA: !0,
                    INPUT: !0,
                    SELECT: !0,
                    OPTION: !0
                },
                o = {
                    radio: !0,
                    checkbox: !0,
                    button: !0,
                    submit: !0,
                    image: !0,
                    file: !0
                };
            return r.okayPointerDown = function(t) {
                var e = n[t.target.nodeName],
                    s = o[t.target.type],
                    c = !e || s;
                return c || this._pointerReset(), c
            }, r.pointerDownBlur = function() {
                var t = document.activeElement,
                    e = t && t.blur && t != document.body;
                e && t.blur()
            }, r.pointerMove = function(t, e) {
                var s = this._dragPointerMove(t, e);
                this.emitEvent("pointerMove", [t, e, s]), this._dragMove(t, e, s)
            }, r._dragPointerMove = function(t, e) {
                var s = {
                    x: e.pageX - this.pointerDownPointer.pageX,
                    y: e.pageY - this.pointerDownPointer.pageY
                };
                return !this.isDragging && this.hasDragStarted(s) && this._dragStart(t, e), s
            }, r.hasDragStarted = function(t) {
                return Math.abs(t.x) > 3 || Math.abs(t.y) > 3
            }, r.pointerUp = function(t, e) {
                this.emitEvent("pointerUp", [t, e]), this._dragPointerUp(t, e)
            }, r._dragPointerUp = function(t, e) {
                this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e)
            }, r._dragStart = function(t, e) {
                this.isDragging = !0, this.isPreventingClicks = !0, this.dragStart(t, e)
            }, r.dragStart = function(t, e) {
                this.emitEvent("dragStart", [t, e])
            }, r._dragMove = function(t, e, s) {
                this.isDragging && this.dragMove(t, e, s)
            }, r.dragMove = function(t, e, s) {
                t.preventDefault(), this.emitEvent("dragMove", [t, e, s])
            }, r._dragEnd = function(t, e) {
                this.isDragging = !1, setTimeout((function() {
                    delete this.isPreventingClicks
                }).bind(this)), this.dragEnd(t, e)
            }, r.dragEnd = function(t, e) {
                this.emitEvent("dragEnd", [t, e])
            }, r.onclick = function(t) {
                this.isPreventingClicks && t.preventDefault()
            }, r._staticClick = function(t, e) {
                this.isIgnoringMouseUp && t.type == "mouseup" || (this.staticClick(t, e), t.type != "mouseup" && (this.isIgnoringMouseUp = !0, setTimeout((function() {
                    delete this.isIgnoringMouseUp
                }).bind(this), 400)))
            }, r.staticClick = function(t, e) {
                this.emitEvent("staticClick", [t, e])
            }, l.getPointerPoint = f.getPointerPoint, l
        })
    }(w)), w.exports
}
var st;

function xt() {
    return st || (st = 1, function(m) {
        (function(a, h) {
            m.exports ? m.exports = h(a, _(), St(), z()) : a.Flickity = h(a, a.Flickity, a.Unidragger, a.fizzyUIUtils)
        })(window, function(h, f, l, r) {
            r.extend(f.defaults, {
                draggable: ">1",
                dragThreshold: 3
            }), f.createMethods.push("_createDrag");
            var n = f.prototype;
            r.extend(n, l.prototype), n._touchActionValue = "pan-y", n._createDrag = function() {
                this.on("activate", this.onActivateDrag), this.on("uiChange", this._uiChangeDrag), this.on("deactivate", this.onDeactivateDrag), this.on("cellChange", this.updateDraggable)
            }, n.onActivateDrag = function() {
                this.handles = [this.viewport], this.bindHandles(), this.updateDraggable()
            }, n.onDeactivateDrag = function() {
                this.unbindHandles(), this.element.classList.remove("is-draggable")
            }, n.updateDraggable = function() {
                this.options.draggable == ">1" ? this.isDraggable = this.slides.length > 1 : this.isDraggable = this.options.draggable, this.isDraggable ? this.element.classList.add("is-draggable") : this.element.classList.remove("is-draggable")
            }, n.bindDrag = function() {
                this.options.draggable = !0, this.updateDraggable()
            }, n.unbindDrag = function() {
                this.options.draggable = !1, this.updateDraggable()
            }, n._uiChangeDrag = function() {
                delete this.isFreeScrolling
            }, n.pointerDown = function(e, s) {
                if (!this.isDraggable) {
                    this._pointerDownDefault(e, s);
                    return
                }
                var c = this.okayPointerDown(e);
                c && (this._pointerDownPreventDefault(e), this.pointerDownFocus(e), document.activeElement != this.element && this.pointerDownBlur(), this.dragX = this.x, this.viewport.classList.add("is-pointer-down"), this.pointerDownScroll = t(), h.addEventListener("scroll", this), this._pointerDownDefault(e, s))
            }, n._pointerDownDefault = function(e, s) {
                this.pointerDownPointer = {
                    pageX: s.pageX,
                    pageY: s.pageY
                }, this._bindPostStartEvents(e), this.dispatchEvent("pointerDown", e, [s])
            };
            var o = {
                INPUT: !0,
                TEXTAREA: !0,
                SELECT: !0
            };
            n.pointerDownFocus = function(e) {
                var s = o[e.target.nodeName];
                s || this.focus()
            }, n._pointerDownPreventDefault = function(e) {
                var s = e.type == "touchstart",
                    c = e.pointerType == "touch",
                    v = o[e.target.nodeName];
                !s && !c && !v && e.preventDefault()
            }, n.hasDragStarted = function(e) {
                return Math.abs(e.x) > this.options.dragThreshold
            }, n.pointerUp = function(e, s) {
                delete this.isTouchScrolling, this.viewport.classList.remove("is-pointer-down"), this.dispatchEvent("pointerUp", e, [s]), this._dragPointerUp(e, s)
            }, n.pointerDone = function() {
                h.removeEventListener("scroll", this), delete this.pointerDownScroll
            }, n.dragStart = function(e, s) {
                this.isDraggable && (this.dragStartPosition = this.x, this.startAnimation(), h.removeEventListener("scroll", this), this.dispatchEvent("dragStart", e, [s]))
            }, n.pointerMove = function(e, s) {
                var c = this._dragPointerMove(e, s);
                this.dispatchEvent("pointerMove", e, [s, c]), this._dragMove(e, s, c)
            }, n.dragMove = function(e, s, c) {
                if (this.isDraggable) {
                    e.preventDefault(), this.previousDragX = this.dragX;
                    var v = this.options.rightToLeft ? -1 : 1;
                    this.options.wrapAround && (c.x %= this.slideableWidth);
                    var d = this.dragStartPosition + c.x * v;
                    if (!this.options.wrapAround && this.slides.length) {
                        var S = Math.max(-this.slides[0].target, this.dragStartPosition);
                        d = d > S ? (d + S) * .5 : d;
                        var g = Math.min(-this.getLastSlide().target, this.dragStartPosition);
                        d = d < g ? (d + g) * .5 : d
                    }
                    this.dragX = d, this.dragMoveTime = new Date, this.dispatchEvent("dragMove", e, [s, c])
                }
            }, n.dragEnd = function(e, s) {
                if (this.isDraggable) {
                    this.options.freeScroll && (this.isFreeScrolling = !0);
                    var c = this.dragEndRestingSelect();
                    if (this.options.freeScroll && !this.options.wrapAround) {
                        var v = this.getRestingPosition();
                        this.isFreeScrolling = -v > this.slides[0].target && -v < this.getLastSlide().target
                    } else !this.options.freeScroll && c == this.selectedIndex && (c += this.dragEndBoostSelect());
                    delete this.previousDragX, this.isDragSelect = this.options.wrapAround, this.select(c), delete this.isDragSelect, this.dispatchEvent("dragEnd", e, [s])
                }
            }, n.dragEndRestingSelect = function() {
                var e = this.getRestingPosition(),
                    s = Math.abs(this.getSlideDistance(-e, this.selectedIndex)),
                    c = this._getClosestResting(e, s, 1),
                    v = this._getClosestResting(e, s, -1),
                    d = c.distance < v.distance ? c.index : v.index;
                return d
            }, n._getClosestResting = function(e, s, c) {
                for (var v = this.selectedIndex, d = 1 / 0, S = this.options.contain && !this.options.wrapAround ? function(g, p) {
                        return g <= p
                    } : function(g, p) {
                        return g < p
                    }; S(s, d) && (v += c, d = s, s = this.getSlideDistance(-e, v), s !== null);) s = Math.abs(s);
                return {
                    distance: d,
                    index: v - c
                }
            }, n.getSlideDistance = function(e, s) {
                var c = this.slides.length,
                    v = this.options.wrapAround && c > 1,
                    d = v ? r.modulo(s, c) : s,
                    S = this.slides[d];
                if (!S) return null;
                var g = v ? this.slideableWidth * Math.floor(s / c) : 0;
                return e - (S.target + g)
            }, n.dragEndBoostSelect = function() {
                if (this.previousDragX === void 0 || !this.dragMoveTime || new Date - this.dragMoveTime > 100) return 0;
                var e = this.getSlideDistance(-this.dragX, this.selectedIndex),
                    s = this.previousDragX - this.dragX;
                return e > 0 && s > 0 ? 1 : e < 0 && s < 0 ? -1 : 0
            }, n.staticClick = function(e, s) {
                var c = this.getParentCell(e.target),
                    v = c && c.element,
                    d = c && this.cells.indexOf(c);
                this.dispatchEvent("staticClick", e, [s, v, d])
            }, n.onscroll = function() {
                var e = t(),
                    s = this.pointerDownScroll.x - e.x,
                    c = this.pointerDownScroll.y - e.y;
                (Math.abs(s) > 3 || Math.abs(c) > 3) && this._pointerDone()
            };

            function t() {
                return {
                    x: h.pageXOffset,
                    y: h.pageYOffset
                }
            }
            return f
        })
    }(U)), U.exports
}
var F = {
        exports: {}
    },
    rt;

function bt() {
    return rt || (rt = 1, function(m) {
        (function(a, h) {
            m.exports ? m.exports = h(a, _(), X(), z()) : h(a, a.Flickity, a.Unipointer, a.fizzyUIUtils)
        })(window, function(h, f, l, r) {
            var n = "http://www.w3.org/2000/svg";

            function o(s, c) {
                this.direction = s, this.parent = c, this._create()
            }
            o.prototype = Object.create(l.prototype), o.prototype._create = function() {
                this.isEnabled = !0, this.isPrevious = this.direction == -1;
                var s = this.parent.options.rightToLeft ? 1 : -1;
                this.isLeft = this.direction == s;
                var c = this.element = document.createElement("button");
                c.className = "flickity-button flickity-prev-next-button", c.className += this.isPrevious ? " previous" : " next", c.setAttribute("type", "button"), this.disable(), c.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");
                var v = this.createSVG();
                c.appendChild(v), this.parent.on("select", this.update.bind(this)), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
            }, o.prototype.activate = function() {
                this.bindStartEvent(this.element), this.element.addEventListener("click", this), this.parent.element.appendChild(this.element)
            }, o.prototype.deactivate = function() {
                this.parent.element.removeChild(this.element), this.unbindStartEvent(this.element), this.element.removeEventListener("click", this)
            }, o.prototype.createSVG = function() {
                var s = document.createElementNS(n, "svg");
                s.setAttribute("class", "flickity-button-icon"), s.setAttribute("viewBox", "0 0 100 100");
                var c = document.createElementNS(n, "path"),
                    v = t(this.parent.options.arrowShape);
                return c.setAttribute("d", v), c.setAttribute("class", "arrow"), this.isLeft || c.setAttribute("transform", "translate(100, 100) rotate(180) "), s.appendChild(c), s
            };

            function t(s) {
                return typeof s == "string" ? s : "M " + s.x0 + ",50 L " + s.x1 + "," + (s.y1 + 50) + " L " + s.x2 + "," + (s.y2 + 50) + " L " + s.x3 + ",50  L " + s.x2 + "," + (50 - s.y2) + " L " + s.x1 + "," + (50 - s.y1) + " Z"
            }
            o.prototype.handleEvent = r.handleEvent, o.prototype.onclick = function() {
                if (this.isEnabled) {
                    this.parent.uiChange();
                    var s = this.isPrevious ? "previous" : "next";
                    this.parent[s]()
                }
            }, o.prototype.enable = function() {
                this.isEnabled || (this.element.disabled = !1, this.isEnabled = !0)
            }, o.prototype.disable = function() {
                this.isEnabled && (this.element.disabled = !0, this.isEnabled = !1)
            }, o.prototype.update = function() {
                var s = this.parent.slides;
                if (this.parent.options.wrapAround && s.length > 1) {
                    this.enable();
                    return
                }
                var c = s.length ? s.length - 1 : 0,
                    v = this.isPrevious ? 0 : c,
                    d = this.parent.selectedIndex == v ? "disable" : "enable";
                this[d]()
            }, o.prototype.destroy = function() {
                this.deactivate(), this.allOff()
            }, r.extend(f.defaults, {
                prevNextButtons: !0,
                arrowShape: {
                    x0: 10,
                    x1: 60,
                    y1: 50,
                    x2: 70,
                    y2: 40,
                    x3: 30
                }
            }), f.createMethods.push("_createPrevNextButtons");
            var e = f.prototype;
            return e._createPrevNextButtons = function() {
                this.options.prevNextButtons && (this.prevButton = new o(-1, this), this.nextButton = new o(1, this), this.on("activate", this.activatePrevNextButtons))
            }, e.activatePrevNextButtons = function() {
                this.prevButton.activate(), this.nextButton.activate(), this.on("deactivate", this.deactivatePrevNextButtons)
            }, e.deactivatePrevNextButtons = function() {
                this.prevButton.deactivate(), this.nextButton.deactivate(), this.off("deactivate", this.deactivatePrevNextButtons)
            }, f.PrevNextButton = o, f
        })
    }(F)), F.exports
}
var N = {
        exports: {}
    },
    ot;

function Et() {
    return ot || (ot = 1, function(m) {
        (function(a, h) {
            m.exports ? m.exports = h(a, _(), X(), z()) : h(a, a.Flickity, a.Unipointer, a.fizzyUIUtils)
        })(window, function(h, f, l, r) {
            function n(t) {
                this.parent = t, this._create()
            }
            n.prototype = Object.create(l.prototype), n.prototype._create = function() {
                this.holder = document.createElement("ol"), this.holder.className = "flickity-page-dots", this.dots = [], this.handleClick = this.onClick.bind(this), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
            }, n.prototype.activate = function() {
                this.setDots(), this.holder.addEventListener("click", this.handleClick), this.bindStartEvent(this.holder), this.parent.element.appendChild(this.holder)
            }, n.prototype.deactivate = function() {
                this.holder.removeEventListener("click", this.handleClick), this.unbindStartEvent(this.holder), this.parent.element.removeChild(this.holder)
            }, n.prototype.setDots = function() {
                var t = this.parent.slides.length - this.dots.length;
                t > 0 ? this.addDots(t) : t < 0 && this.removeDots(-t)
            }, n.prototype.addDots = function(t) {
                for (var e = document.createDocumentFragment(), s = [], c = this.dots.length, v = c + t, d = c; d < v; d++) {
                    var S = document.createElement("li");
                    S.className = "dot", S.setAttribute("aria-label", "Page dot " + (d + 1)), e.appendChild(S), s.push(S)
                }
                this.holder.appendChild(e), this.dots = this.dots.concat(s)
            }, n.prototype.removeDots = function(t) {
                var e = this.dots.splice(this.dots.length - t, t);
                e.forEach(function(s) {
                    this.holder.removeChild(s)
                }, this)
            }, n.prototype.updateSelected = function() {
                this.selectedDot && (this.selectedDot.className = "dot", this.selectedDot.removeAttribute("aria-current")), this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex], this.selectedDot.className = "dot is-selected", this.selectedDot.setAttribute("aria-current", "step"))
            }, n.prototype.onTap = n.prototype.onClick = function(t) {
                var e = t.target;
                if (e.nodeName == "LI") {
                    this.parent.uiChange();
                    var s = this.dots.indexOf(e);
                    this.parent.select(s)
                }
            }, n.prototype.destroy = function() {
                this.deactivate(), this.allOff()
            }, f.PageDots = n, r.extend(f.defaults, {
                pageDots: !0
            }), f.createMethods.push("_createPageDots");
            var o = f.prototype;
            return o._createPageDots = function() {
                this.options.pageDots && (this.pageDots = new n(this), this.on("activate", this.activatePageDots), this.on("select", this.updateSelectedPageDots), this.on("cellChange", this.updatePageDots), this.on("resize", this.updatePageDots), this.on("deactivate", this.deactivatePageDots))
            }, o.activatePageDots = function() {
                this.pageDots.activate()
            }, o.updateSelectedPageDots = function() {
                this.pageDots.updateSelected()
            }, o.updatePageDots = function() {
                this.pageDots.setDots()
            }, o.deactivatePageDots = function() {
                this.pageDots.deactivate()
            }, f.PageDots = n, f
        })
    }(N)), N.exports
}
var O = {
        exports: {}
    },
    at;

function Ct() {
    return at || (at = 1, function(m) {
        (function(a, h) {
            m.exports ? m.exports = h(H(), z(), _()) : h(a.EvEmitter, a.fizzyUIUtils, a.Flickity)
        })(window, function(h, f, l) {
            function r(o) {
                this.parent = o, this.state = "stopped", this.onVisibilityChange = this.visibilityChange.bind(this), this.onVisibilityPlay = this.visibilityPlay.bind(this)
            }
            r.prototype = Object.create(h.prototype), r.prototype.play = function() {
                if (this.state != "playing") {
                    var o = document.hidden;
                    if (o) {
                        document.addEventListener("visibilitychange", this.onVisibilityPlay);
                        return
                    }
                    this.state = "playing", document.addEventListener("visibilitychange", this.onVisibilityChange), this.tick()
                }
            }, r.prototype.tick = function() {
                if (this.state == "playing") {
                    var o = this.parent.options.autoPlay;
                    o = typeof o == "number" ? o : 3e3;
                    var t = this;
                    this.clear(), this.timeout = setTimeout(function() {
                        t.parent.next(!0), t.tick()
                    }, o)
                }
            }, r.prototype.stop = function() {
                this.state = "stopped", this.clear(), document.removeEventListener("visibilitychange", this.onVisibilityChange)
            }, r.prototype.clear = function() {
                clearTimeout(this.timeout)
            }, r.prototype.pause = function() {
                this.state == "playing" && (this.state = "paused", this.clear())
            }, r.prototype.unpause = function() {
                this.state == "paused" && this.play()
            }, r.prototype.visibilityChange = function() {
                var o = document.hidden;
                this[o ? "pause" : "unpause"]()
            }, r.prototype.visibilityPlay = function() {
                this.play(), document.removeEventListener("visibilitychange", this.onVisibilityPlay)
            }, f.extend(l.defaults, {
                pauseAutoPlayOnHover: !0
            }), l.createMethods.push("_createPlayer");
            var n = l.prototype;
            return n._createPlayer = function() {
                this.player = new r(this), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer)
            }, n.activatePlayer = function() {
                this.options.autoPlay && (this.player.play(), this.element.addEventListener("mouseenter", this))
            }, n.playPlayer = function() {
                this.player.play()
            }, n.stopPlayer = function() {
                this.player.stop()
            }, n.pausePlayer = function() {
                this.player.pause()
            }, n.unpausePlayer = function() {
                this.player.unpause()
            }, n.deactivatePlayer = function() {
                this.player.stop(), this.element.removeEventListener("mouseenter", this)
            }, n.onmouseenter = function() {
                this.options.pauseAutoPlayOnHover && (this.player.pause(), this.element.addEventListener("mouseleave", this))
            }, n.onmouseleave = function() {
                this.player.unpause(), this.element.removeEventListener("mouseleave", this)
            }, l.Player = r, l
        })
    }(O)), O.exports
}
var q = {
        exports: {}
    },
    ht;

function Dt() {
    return ht || (ht = 1, function(m) {
        (function(a, h) {
            m.exports ? m.exports = h(a, _(), z()) : h(a, a.Flickity, a.fizzyUIUtils)
        })(window, function(h, f, l) {
            function r(o) {
                var t = document.createDocumentFragment();
                return o.forEach(function(e) {
                    t.appendChild(e.element)
                }), t
            }
            var n = f.prototype;
            return n.insert = function(o, t) {
                var e = this._makeCells(o);
                if (!(!e || !e.length)) {
                    var s = this.cells.length;
                    t = t === void 0 ? s : t;
                    var c = r(e),
                        v = t == s;
                    if (v) this.slider.appendChild(c);
                    else {
                        var d = this.cells[t].element;
                        this.slider.insertBefore(c, d)
                    }
                    if (t === 0) this.cells = e.concat(this.cells);
                    else if (v) this.cells = this.cells.concat(e);
                    else {
                        var S = this.cells.splice(t, s - t);
                        this.cells = this.cells.concat(e).concat(S)
                    }
                    this._sizeCells(e), this.cellChange(t, !0)
                }
            }, n.append = function(o) {
                this.insert(o, this.cells.length)
            }, n.prepend = function(o) {
                this.insert(o, 0)
            }, n.remove = function(o) {
                var t = this.getCells(o);
                if (!(!t || !t.length)) {
                    var e = this.cells.length - 1;
                    t.forEach(function(s) {
                        s.remove();
                        var c = this.cells.indexOf(s);
                        e = Math.min(c, e), l.removeFrom(this.cells, s)
                    }, this), this.cellChange(e, !0)
                }
            }, n.cellSizeChange = function(o) {
                var t = this.getCell(o);
                if (t) {
                    t.getSize();
                    var e = this.cells.indexOf(t);
                    this.cellChange(e)
                }
            }, n.cellChange = function(o, t) {
                var e = this.selectedElement;
                this._positionCells(o), this._getWrapShiftCells(), this.setGallerySize();
                var s = this.getCell(e);
                s && (this.selectedIndex = this.getCellSlideIndex(s)), this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex), this.emitEvent("cellChange", [o]), this.select(this.selectedIndex), t && this.positionSliderAtSelected()
            }, f
        })
    }(q)), q.exports
}
var B = {
        exports: {}
    },
    lt;

function Pt() {
    return lt || (lt = 1, function(m) {
        (function(a, h) {
            m.exports ? m.exports = h(a, _(), z()) : h(a, a.Flickity, a.fizzyUIUtils)
        })(window, function(h, f, l) {
            f.createMethods.push("_createLazyload");
            var r = f.prototype;
            r._createLazyload = function() {
                this.on("select", this.lazyLoad)
            }, r.lazyLoad = function() {
                var t = this.options.lazyLoad;
                if (t) {
                    var e = typeof t == "number" ? t : 0,
                        s = this.getAdjacentCellElements(e),
                        c = [];
                    s.forEach(function(v) {
                        var d = n(v);
                        c = c.concat(d)
                    }), c.forEach(function(v) {
                        new o(v, this)
                    }, this)
                }
            };

            function n(t) {
                if (t.nodeName == "IMG") {
                    var e = t.getAttribute("data-flickity-lazyload"),
                        s = t.getAttribute("data-flickity-lazyload-src"),
                        c = t.getAttribute("data-flickity-lazyload-srcset");
                    if (e || s || c) return [t]
                }
                var v = "img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]",
                    d = t.querySelectorAll(v);
                return l.makeArray(d)
            }

            function o(t, e) {
                this.img = t, this.flickity = e, this.load()
            }
            return o.prototype.handleEvent = l.handleEvent, o.prototype.load = function() {
                this.img.addEventListener("load", this), this.img.addEventListener("error", this);
                var t = this.img.getAttribute("data-flickity-lazyload") || this.img.getAttribute("data-flickity-lazyload-src"),
                    e = this.img.getAttribute("data-flickity-lazyload-srcset");
                this.img.src = t, e && this.img.setAttribute("srcset", e), this.img.removeAttribute("data-flickity-lazyload"), this.img.removeAttribute("data-flickity-lazyload-src"), this.img.removeAttribute("data-flickity-lazyload-srcset")
            }, o.prototype.onload = function(t) {
                this.complete(t, "flickity-lazyloaded")
            }, o.prototype.onerror = function(t) {
                this.complete(t, "flickity-lazyerror")
            }, o.prototype.complete = function(t, e) {
                this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
                var s = this.flickity.getParentCell(this.img),
                    c = s && s.element;
                this.flickity.cellSizeChange(c), this.img.classList.add(e), this.flickity.dispatchEvent("lazyLoad", t, c)
            }, f.LazyLoader = o, f
        })
    }(B)), B.exports
}
/*!
 * Flickity v2.3.0
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2021 Metafizzy
 */
(function(m) {
    (function(a, h) {
        m.exports && (m.exports = h(_(), xt(), bt(), Et(), Ct(), Dt(), Pt()))
    })(window, function(h) {
        return h
    })
})(ct);
var dt = ct.exports;
const zt = ft(dt),
    At = pt({
        __proto__: null,
        default: zt
    }, [dt]);
export {
    At as i
};
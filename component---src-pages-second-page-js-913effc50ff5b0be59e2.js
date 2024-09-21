/*! For license information please see component---src-pages-second-page-js-913effc50ff5b0be59e2.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [4, 15], {
        "0vCa": function(t, e, i) {
            "use strict";

            function n(t) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = function(t) {
                    if (t && t.__esModule) return t;
                    if (null === t || "object" !== n(t) && "function" != typeof t) return {
                        default: t
                    };
                    var e = h();
                    if (e && e.has(t)) return e.get(t);
                    var i = {},
                        s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in t)
                        if (Object.prototype.hasOwnProperty.call(t, o)) {
                            var r = s ? Object.getOwnPropertyDescriptor(t, o) : null;
                            r && (r.get || r.set) ? Object.defineProperty(i, o, r) : i[o] = t[o]
                        }
                    i.default = t, e && e.set(t, i);
                    return i
                }(i("q1tI")),
                o = i("i8i4"),
                r = l(i("vX6Q")),
                a = l(i("17x9"));

            function l(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function h() {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap;
                return h = function() {
                    return t
                }, t
            }

            function c(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function d(t, e) {
                return (d = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function u(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var i, n = f(t);
                    if (e) {
                        var s = f(this).constructor;
                        i = Reflect.construct(n, arguments, s)
                    } else i = n.apply(this, arguments);
                    return p(this, i)
                }
            }

            function p(t, e) {
                return !e || "object" !== n(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function f(t) {
                return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var g = !("undefined" == typeof window || !window.document || !window.document.createElement),
                v = function(t) {
                    ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && d(t, e)
                    }(h, t);
                    var e, n, a, l = u(h);

                    function h(t) {
                        var e;
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, h), (e = l.call(this, t)).state = {
                            flickityReady: !1,
                            flickityCreated: !1,
                            cellCount: 0
                        }, e.carousel = null, e.flkty = null, e
                    }
                    return e = h, a = [{
                        key: "getDerivedStateFromProps",
                        value: function(t, e) {
                            var i = s.default.Children.count(t.children);
                            return i !== e.cellCount ? {
                                flickityReady: !1,
                                cellCount: i
                            } : null
                        }
                    }], (n = [{
                        key: "componentDidUpdate",
                        value: function(t, e) {
                            var i = this,
                                n = this.props,
                                s = n.children,
                                o = n.options,
                                a = o.draggable,
                                l = o.initialIndex,
                                h = n.reloadOnUpdate,
                                c = n.disableImagesLoaded,
                                d = this.state.flickityReady;
                            if (h || !e.flickityReady && d) {
                                var u = this.flkty.isActive;
                                this.flkty.deactivate(), this.flkty.selectedIndex = l || 0, this.flkty.options.draggable = void 0 === a ? !!s && s.length > 1 : a, u && this.flkty.activate(), !c && this.carousel && (0, r.default)(this.carousel, (function() {
                                    i.flkty.reloadCells()
                                }))
                            } else this.flkty.reloadCells()
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            if (!g) return null;
                            var t = i("IXsZ"),
                                e = this.props,
                                n = e.flickityRef,
                                s = e.options;
                            this.flkty = new t(this.carousel, s), n && n(this.flkty), this.props.static ? this.setReady() : this.setState({
                                flickityCreated: !0
                            })
                        }
                    }, {
                        key: "setReady",
                        value: function() {
                            var t = this;
                            if (!this.state.flickityReady) {
                                var e = function() {
                                    return t.setState({
                                        flickityReady: !0
                                    })
                                };
                                this.props.disableImagesLoaded ? e() : (0, r.default)(this.carousel, e)
                            }
                        }
                    }, {
                        key: "renderPortal",
                        value: function() {
                            var t = this;
                            if (!this.carousel) return null;
                            var e = this.carousel.querySelector(".flickity-slider");
                            if (e) {
                                var i = (0, o.createPortal)(this.props.children, e);
                                return setTimeout((function() {
                                    return t.setReady()
                                }), 0), i
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this;
                            return s.default.createElement(this.props.elementType, {
                                className: this.props.className,
                                ref: function(e) {
                                    t.carousel = e
                                }
                            }, this.props.static ? this.props.children : this.renderPortal())
                        }
                    }]) && c(e.prototype, n), a && c(e, a), h
                }(s.Component);
            v.propTypes = {
                children: a.default.array,
                className: a.default.string,
                disableImagesLoaded: a.default.bool,
                elementType: a.default.string,
                flickityRef: a.default.func,
                options: a.default.object,
                reloadOnUpdate: a.default.bool,
                static: a.default.bool
            }, v.defaultProps = {
                className: "",
                disableImagesLoaded: !1,
                elementType: "div",
                options: {},
                reloadOnUpdate: !1,
                static: !1
            };
            var m = v;
            e.default = m, t.exports = e.default
        },
        "1K8p": function(t, e, i) {
            "use strict";
            var n = i("jrfk"),
                s = i("ez49");

            function o(t) {
                var e = 0,
                    i = 0,
                    n = 0,
                    s = 0;
                return "detail" in t && (i = t.detail), "wheelDelta" in t && (i = -t.wheelDelta / 120), "wheelDeltaY" in t && (i = -t.wheelDeltaY / 120), "wheelDeltaX" in t && (e = -t.wheelDeltaX / 120), "axis" in t && t.axis === t.HORIZONTAL_AXIS && (e = i, i = 0), n = 10 * e, s = 10 * i, "deltaY" in t && (s = t.deltaY), "deltaX" in t && (n = t.deltaX), (n || s) && t.deltaMode && (1 == t.deltaMode ? (n *= 40, s *= 40) : (n *= 800, s *= 800)), n && !e && (e = n < 1 ? -1 : 1), s && !i && (i = s < 1 ? -1 : 1), {
                    spinX: e,
                    spinY: i,
                    pixelX: n,
                    pixelY: s
                }
            }
            o.getEventType = function() {
                return n.firefox() ? "DOMMouseScroll" : s("wheel") ? "wheel" : "mousewheel"
            }, t.exports = o
        },
        "3m/Q": function(t, e, i) {
            t.exports = {
                themeDark: "showcaseItem-module--theme-dark--6JSSK",
                themeLight: "showcaseItem-module--theme-light--2p7Fn",
                relative: "showcaseItem-module--relative--zXHBp",
                showCaseItem: "showcaseItem-module--showCaseItem--2cOhQ",
                bgImage: "showcaseItem-module--bgImage--1cv8t",
                featureImage: "showcaseItem-module--featureImage--3EOYU",
                wrapOver: "showcaseItem-module--wrapOver--1WW2q",
                label: "showcaseItem-module--label--3uWQI",
                labelHolder: "showcaseItem-module--labelHolder--VuClN",
                description: "showcaseItem-module--description--1usi_",
                FadeIn: "showcaseItem-module--FadeIn--2RQCA"
            }
        },
        "4PUS": function(t, e, i) {
            var n, s;
            ! function(o, r) {
                n = [i("CUlp")], void 0 === (s = function(t) {
                    return function(t, e) {
                        "use strict";

                        function i() {}
                        var n = i.prototype = Object.create(e.prototype);
                        n.bindStartEvent = function(t) {
                            this._bindStartEvent(t, !0)
                        }, n.unbindStartEvent = function(t) {
                            this._bindStartEvent(t, !1)
                        }, n._bindStartEvent = function(e, i) {
                            var n = (i = void 0 === i || i) ? "addEventListener" : "removeEventListener",
                                s = "mousedown";
                            "ontouchstart" in t ? s = "touchstart" : t.PointerEvent && (s = "pointerdown"), e[n](s, this)
                        }, n.handleEvent = function(t) {
                            var e = "on" + t.type;
                            this[e] && this[e](t)
                        }, n.getTouch = function(t) {
                            for (var e = 0; e < t.length; e++) {
                                var i = t[e];
                                if (i.identifier == this.pointerIdentifier) return i
                            }
                        }, n.onmousedown = function(t) {
                            var e = t.button;
                            e && 0 !== e && 1 !== e || this._pointerDown(t, t)
                        }, n.ontouchstart = function(t) {
                            this._pointerDown(t, t.changedTouches[0])
                        }, n.onpointerdown = function(t) {
                            this._pointerDown(t, t)
                        }, n._pointerDown = function(t, e) {
                            t.button || this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier, this.pointerDown(t, e))
                        }, n.pointerDown = function(t, e) {
                            this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e])
                        };
                        var s = {
                            mousedown: ["mousemove", "mouseup"],
                            touchstart: ["touchmove", "touchend", "touchcancel"],
                            pointerdown: ["pointermove", "pointerup", "pointercancel"]
                        };
                        return n._bindPostStartEvents = function(e) {
                            if (e) {
                                var i = s[e.type];
                                i.forEach((function(e) {
                                    t.addEventListener(e, this)
                                }), this), this._boundPointerEvents = i
                            }
                        }, n._unbindPostStartEvents = function() {
                            this._boundPointerEvents && (this._boundPointerEvents.forEach((function(e) {
                                t.removeEventListener(e, this)
                            }), this), delete this._boundPointerEvents)
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
                        }, n.pointerDone = function() {}, n.onpointercancel = function(t) {
                            t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t)
                        }, n.ontouchcancel = function(t) {
                            var e = this.getTouch(t.changedTouches);
                            e && this._pointerCancel(t, e)
                        }, n._pointerCancel = function(t, e) {
                            this._pointerDone(), this.pointerCancel(t, e)
                        }, n.pointerCancel = function(t, e) {
                            this.emitEvent("pointerCancel", [t, e])
                        }, i.getPointerPoint = function(t) {
                            return {
                                x: t.pageX,
                                y: t.pageY
                            }
                        }, i
                    }(o, t)
                }.apply(e, n)) || (t.exports = s)
            }(window)
        },
        "72Lm": function(t, e, i) {
            var n, s;
            ! function(o, r) {
                n = [i("4PUS")], void 0 === (s = function(t) {
                    return function(t, e) {
                        "use strict";

                        function i() {}
                        var n = i.prototype = Object.create(e.prototype);
                        n.bindHandles = function() {
                            this._bindHandles(!0)
                        }, n.unbindHandles = function() {
                            this._bindHandles(!1)
                        }, n._bindHandles = function(e) {
                            for (var i = (e = void 0 === e || e) ? "addEventListener" : "removeEventListener", n = e ? this._touchActionValue : "", s = 0; s < this.handles.length; s++) {
                                var o = this.handles[s];
                                this._bindStartEvent(o, e), o[i]("click", this), t.PointerEvent && (o.style.touchAction = n)
                            }
                        }, n._touchActionValue = "none", n.pointerDown = function(t, e) {
                            this.okayPointerDown(t) && (this.pointerDownPointer = {
                                pageX: e.pageX,
                                pageY: e.pageY
                            }, t.preventDefault(), this.pointerDownBlur(), this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e]))
                        };
                        var s = {
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
                        return n.okayPointerDown = function(t) {
                            var e = s[t.target.nodeName],
                                i = o[t.target.type],
                                n = !e || i;
                            return n || this._pointerReset(), n
                        }, n.pointerDownBlur = function() {
                            var t = document.activeElement;
                            t && t.blur && t != document.body && t.blur()
                        }, n.pointerMove = function(t, e) {
                            var i = this._dragPointerMove(t, e);
                            this.emitEvent("pointerMove", [t, e, i]), this._dragMove(t, e, i)
                        }, n._dragPointerMove = function(t, e) {
                            var i = {
                                x: e.pageX - this.pointerDownPointer.pageX,
                                y: e.pageY - this.pointerDownPointer.pageY
                            };
                            return !this.isDragging && this.hasDragStarted(i) && this._dragStart(t, e), i
                        }, n.hasDragStarted = function(t) {
                            return Math.abs(t.x) > 3 || Math.abs(t.y) > 3
                        }, n.pointerUp = function(t, e) {
                            this.emitEvent("pointerUp", [t, e]), this._dragPointerUp(t, e)
                        }, n._dragPointerUp = function(t, e) {
                            this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e)
                        }, n._dragStart = function(t, e) {
                            this.isDragging = !0, this.isPreventingClicks = !0, this.dragStart(t, e)
                        }, n.dragStart = function(t, e) {
                            this.emitEvent("dragStart", [t, e])
                        }, n._dragMove = function(t, e, i) {
                            this.isDragging && this.dragMove(t, e, i)
                        }, n.dragMove = function(t, e, i) {
                            t.preventDefault(), this.emitEvent("dragMove", [t, e, i])
                        }, n._dragEnd = function(t, e) {
                            this.isDragging = !1, setTimeout(function() {
                                delete this.isPreventingClicks
                            }.bind(this)), this.dragEnd(t, e)
                        }, n.dragEnd = function(t, e) {
                            this.emitEvent("dragEnd", [t, e])
                        }, n.onclick = function(t) {
                            this.isPreventingClicks && t.preventDefault()
                        }, n._staticClick = function(t, e) {
                            this.isIgnoringMouseUp && "mouseup" == t.type || (this.staticClick(t, e), "mouseup" != t.type && (this.isIgnoringMouseUp = !0, setTimeout(function() {
                                delete this.isIgnoringMouseUp
                            }.bind(this), 400)))
                        }, n.staticClick = function(t, e) {
                            this.emitEvent("staticClick", [t, e])
                        }, i.getPointerPoint = e.getPointerPoint, i
                    }(o, t)
                }.apply(e, n)) || (t.exports = s)
            }(window)
        },
        AVCV: function(t, e, i) {
            var n, s;
            window, n = [i("YVj6")], void 0 === (s = function(t) {
                return function(t, e) {
                    "use strict";
                    var i = {
                        startAnimation: function() {
                            this.isAnimating || (this.isAnimating = !0, this.restingFrames = 0, this.animate())
                        },
                        animate: function() {
                            this.applyDragForce(), this.applySelectedAttraction();
                            var t = this.x;
                            if (this.integratePhysics(), this.positionSlider(), this.settle(t), this.isAnimating) {
                                var e = this;
                                requestAnimationFrame((function() {
                                    e.animate()
                                }))
                            }
                        },
                        positionSlider: function() {
                            var t = this.x;
                            this.options.wrapAround && this.cells.length > 1 && (t = e.modulo(t, this.slideableWidth), t -= this.slideableWidth, this.shiftWrapCells(t)), this.setTranslateX(t, this.isAnimating), this.dispatchScrollEvent()
                        },
                        setTranslateX: function(t, e) {
                            t += this.cursorPosition, t = this.options.rightToLeft ? -t : t;
                            var i = this.getPositionValue(t);
                            this.slider.style.transform = e ? "translate3d(" + i + ",0,0)" : "translateX(" + i + ")"
                        },
                        dispatchScrollEvent: function() {
                            var t = this.slides[0];
                            if (t) {
                                var e = -this.x - t.target,
                                    i = e / this.slidesWidth;
                                this.dispatchEvent("scroll", null, [i, e])
                            }
                        },
                        positionSliderAtSelected: function() {
                            this.cells.length && (this.x = -this.selectedSlide.target, this.velocity = 0, this.positionSlider())
                        },
                        getPositionValue: function(t) {
                            return this.options.percentPosition ? .01 * Math.round(t / this.size.innerWidth * 1e4) + "%" : Math.round(t) + "px"
                        },
                        settle: function(t) {
                            !this.isPointerDown && Math.round(100 * this.x) == Math.round(100 * t) && this.restingFrames++, this.restingFrames > 2 && (this.isAnimating = !1, delete this.isFreeScrolling, this.positionSlider(), this.dispatchEvent("settle", null, [this.selectedIndex]))
                        },
                        shiftWrapCells: function(t) {
                            var e = this.cursorPosition + t;
                            this._shiftCells(this.beforeShiftCells, e, -1);
                            var i = this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition);
                            this._shiftCells(this.afterShiftCells, i, 1)
                        },
                        _shiftCells: function(t, e, i) {
                            for (var n = 0; n < t.length; n++) {
                                var s = t[n],
                                    o = e > 0 ? i : 0;
                                s.wrapShift(o), e -= s.size.outerWidth
                            }
                        },
                        _unshiftCells: function(t) {
                            if (t && t.length)
                                for (var e = 0; e < t.length; e++) t[e].wrapShift(0)
                        },
                        integratePhysics: function() {
                            this.x += this.velocity, this.velocity *= this.getFrictionFactor()
                        },
                        applyForce: function(t) {
                            this.velocity += t
                        },
                        getFrictionFactor: function() {
                            return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
                        },
                        getRestingPosition: function() {
                            return this.x + this.velocity / (1 - this.getFrictionFactor())
                        },
                        applyDragForce: function() {
                            if (this.isDraggable && this.isPointerDown) {
                                var t = this.dragX - this.x - this.velocity;
                                this.applyForce(t)
                            }
                        },
                        applySelectedAttraction: function() {
                            if ((!this.isDraggable || !this.isPointerDown) && !this.isFreeScrolling && this.slides.length) {
                                var t = (-1 * this.selectedSlide.target - this.x) * this.options.selectedAttraction;
                                this.applyForce(t)
                            }
                        }
                    };
                    return i
                }(0, t)
            }.apply(e, n)) || (t.exports = s)
        },
        Bij1: function(t, e, i) {
            var n, s;
            window, n = [i("E4Uq"), i("4PUS"), i("YVj6")], void 0 === (s = function(t, e, i) {
                return function(t, e, i, n) {
                    "use strict";

                    function s(t) {
                        this.parent = t, this._create()
                    }
                    s.prototype = Object.create(i.prototype), s.prototype._create = function() {
                        this.holder = document.createElement("ol"), this.holder.className = "flickity-page-dots", this.dots = [], this.handleClick = this.onClick.bind(this), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
                    }, s.prototype.activate = function() {
                        this.setDots(), this.holder.addEventListener("click", this.handleClick), this.bindStartEvent(this.holder), this.parent.element.appendChild(this.holder)
                    }, s.prototype.deactivate = function() {
                        this.holder.removeEventListener("click", this.handleClick), this.unbindStartEvent(this.holder), this.parent.element.removeChild(this.holder)
                    }, s.prototype.setDots = function() {
                        var t = this.parent.slides.length - this.dots.length;
                        t > 0 ? this.addDots(t) : t < 0 && this.removeDots(-t)
                    }, s.prototype.addDots = function(t) {
                        for (var e = document.createDocumentFragment(), i = [], n = this.dots.length, s = n + t, o = n; o < s; o++) {
                            var r = document.createElement("li");
                            r.className = "dot", r.setAttribute("aria-label", "Page dot " + (o + 1)), e.appendChild(r), i.push(r)
                        }
                        this.holder.appendChild(e), this.dots = this.dots.concat(i)
                    }, s.prototype.removeDots = function(t) {
                        this.dots.splice(this.dots.length - t, t).forEach((function(t) {
                            this.holder.removeChild(t)
                        }), this)
                    }, s.prototype.updateSelected = function() {
                        this.selectedDot && (this.selectedDot.className = "dot", this.selectedDot.removeAttribute("aria-current")), this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex], this.selectedDot.className = "dot is-selected", this.selectedDot.setAttribute("aria-current", "step"))
                    }, s.prototype.onTap = s.prototype.onClick = function(t) {
                        var e = t.target;
                        if ("LI" == e.nodeName) {
                            this.parent.uiChange();
                            var i = this.dots.indexOf(e);
                            this.parent.select(i)
                        }
                    }, s.prototype.destroy = function() {
                        this.deactivate(), this.allOff()
                    }, e.PageDots = s, n.extend(e.defaults, {
                        pageDots: !0
                    }), e.createMethods.push("_createPageDots");
                    var o = e.prototype;
                    return o._createPageDots = function() {
                        this.options.pageDots && (this.pageDots = new s(this), this.on("activate", this.activatePageDots), this.on("select", this.updateSelectedPageDots), this.on("cellChange", this.updatePageDots), this.on("resize", this.updatePageDots), this.on("deactivate", this.deactivatePageDots))
                    }, o.activatePageDots = function() {
                        this.pageDots.activate()
                    }, o.updateSelectedPageDots = function() {
                        this.pageDots.updateSelected()
                    }, o.updatePageDots = function() {
                        this.pageDots.setDots()
                    }, o.deactivatePageDots = function() {
                        this.pageDots.deactivate()
                    }, e.PageDots = s, e
                }(0, t, e, i)
            }.apply(e, n)) || (t.exports = s)
        },
        CUlp: function(t, e, i) {
            var n, s;
            "undefined" != typeof window && window, void 0 === (s = "function" == typeof(n = function() {
                "use strict";

                function t() {}
                var e = t.prototype;
                return e.on = function(t, e) {
                    if (t && e) {
                        var i = this._events = this._events || {},
                            n = i[t] = i[t] || [];
                        return -1 == n.indexOf(e) && n.push(e), this
                    }
                }, e.once = function(t, e) {
                    if (t && e) {
                        this.on(t, e);
                        var i = this._onceEvents = this._onceEvents || {};
                        return (i[t] = i[t] || {})[e] = !0, this
                    }
                }, e.off = function(t, e) {
                    var i = this._events && this._events[t];
                    if (i && i.length) {
                        var n = i.indexOf(e);
                        return -1 != n && i.splice(n, 1), this
                    }
                }, e.emitEvent = function(t, e) {
                    var i = this._events && this._events[t];
                    if (i && i.length) {
                        i = i.slice(0), e = e || [];
                        for (var n = this._onceEvents && this._onceEvents[t], s = 0; s < i.length; s++) {
                            var o = i[s];
                            n && n[o] && (this.off(t, o), delete n[o]), o.apply(this, e)
                        }
                        return this
                    }
                }, e.allOff = function() {
                    delete this._events, delete this._onceEvents
                }, t
            }) ? n.call(e, i, e, t) : n) || (t.exports = s)
        },
        E4Uq: function(t, e, i) {
            var n, s;
            ! function(o, r) {
                n = [i("CUlp"), i("QK1G"), i("YVj6"), i("yNx1"), i("dlLY"), i("AVCV")], void 0 === (s = function(t, e, i, n, s, r) {
                    return function(t, e, i, n, s, o, r) {
                        "use strict";
                        var a = t.jQuery,
                            l = t.getComputedStyle,
                            h = t.console;

                        function c(t, e) {
                            for (t = n.makeArray(t); t.length;) e.appendChild(t.shift())
                        }
                        var d = 0,
                            u = {};

                        function p(t, e) {
                            var i = n.getQueryElement(t);
                            if (i) {
                                if (this.element = i, this.element.flickityGUID) {
                                    var s = u[this.element.flickityGUID];
                                    return s && s.option(e), s
                                }
                                a && (this.$element = a(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e), this._create()
                            } else h && h.error("Bad element for Flickity: " + (i || t))
                        }
                        p.defaults = {
                            accessibility: !0,
                            cellAlign: "center",
                            freeScrollFriction: .075,
                            friction: .28,
                            namespaceJQueryEvents: !0,
                            percentPosition: !0,
                            resize: !0,
                            selectedAttraction: .025,
                            setGallerySize: !0
                        }, p.createMethods = [];
                        var f = p.prototype;
                        n.extend(f, e.prototype), f._create = function() {
                            var e = this.guid = ++d;
                            for (var i in this.element.flickityGUID = e, u[e] = this, this.selectedIndex = 0, this.restingFrames = 0, this.x = 0, this.velocity = 0, this.originSide = this.options.rightToLeft ? "right" : "left", this.viewport = document.createElement("div"), this.viewport.className = "flickity-viewport", this._createSlider(), (this.options.resize || this.options.watchCSS) && t.addEventListener("resize", this), this.options.on) {
                                var n = this.options.on[i];
                                this.on(i, n)
                            }
                            p.createMethods.forEach((function(t) {
                                this[t]()
                            }), this), this.options.watchCSS ? this.watchCSS() : this.activate()
                        }, f.option = function(t) {
                            n.extend(this.options, t)
                        }, f.activate = function() {
                            this.isActive || (this.isActive = !0, this.element.classList.add("flickity-enabled"), this.options.rightToLeft && this.element.classList.add("flickity-rtl"), this.getSize(), c(this._filterFindCellElements(this.element.children), this.slider), this.viewport.appendChild(this.slider), this.element.appendChild(this.viewport), this.reloadCells(), this.options.accessibility && (this.element.tabIndex = 0, this.element.addEventListener("keydown", this)), this.emitEvent("activate"), this.selectInitialIndex(), this.isInitActivated = !0, this.dispatchEvent("ready"))
                        }, f._createSlider = function() {
                            var t = document.createElement("div");
                            t.className = "flickity-slider", t.style[this.originSide] = 0, this.slider = t
                        }, f._filterFindCellElements = function(t) {
                            return n.filterFindElements(t, this.options.cellSelector)
                        }, f.reloadCells = function() {
                            this.cells = this._makeCells(this.slider.children), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize()
                        }, f._makeCells = function(t) {
                            return this._filterFindCellElements(t).map((function(t) {
                                return new s(t, this)
                            }), this)
                        }, f.getLastCell = function() {
                            return this.cells[this.cells.length - 1]
                        }, f.getLastSlide = function() {
                            return this.slides[this.slides.length - 1]
                        }, f.positionCells = function() {
                            this._sizeCells(this.cells), this._positionCells(0)
                        }, f._positionCells = function(t) {
                            t = t || 0, this.maxCellHeight = t && this.maxCellHeight || 0;
                            var e = 0;
                            if (t > 0) {
                                var i = this.cells[t - 1];
                                e = i.x + i.size.outerWidth
                            }
                            for (var n = this.cells.length, s = t; s < n; s++) {
                                var o = this.cells[s];
                                o.setPosition(e), e += o.size.outerWidth, this.maxCellHeight = Math.max(o.size.outerHeight, this.maxCellHeight)
                            }
                            this.slideableWidth = e, this.updateSlides(), this._containSlides(), this.slidesWidth = n ? this.getLastSlide().target - this.slides[0].target : 0
                        }, f._sizeCells = function(t) {
                            t.forEach((function(t) {
                                t.getSize()
                            }))
                        }, f.updateSlides = function() {
                            if (this.slides = [], this.cells.length) {
                                var t = new o(this);
                                this.slides.push(t);
                                var e = "left" == this.originSide ? "marginRight" : "marginLeft",
                                    i = this._getCanCellFit();
                                this.cells.forEach((function(n, s) {
                                    if (t.cells.length) {
                                        var r = t.outerWidth - t.firstMargin + (n.size.outerWidth - n.size[e]);
                                        i.call(this, s, r) || (t.updateTarget(), t = new o(this), this.slides.push(t)), t.addCell(n)
                                    } else t.addCell(n)
                                }), this), t.updateTarget(), this.updateSelectedSlide()
                            }
                        }, f._getCanCellFit = function() {
                            var t = this.options.groupCells;
                            if (!t) return function() {
                                return !1
                            };
                            if ("number" == typeof t) {
                                var e = parseInt(t, 10);
                                return function(t) {
                                    return t % e != 0
                                }
                            }
                            var i = "string" == typeof t && t.match(/^(\d+)%$/),
                                n = i ? parseInt(i[1], 10) / 100 : 1;
                            return function(t, e) {
                                return e <= (this.size.innerWidth + 1) * n
                            }
                        }, f._init = f.reposition = function() {
                            this.positionCells(), this.positionSliderAtSelected()
                        }, f.getSize = function() {
                            this.size = i(this.element), this.setCellAlign(), this.cursorPosition = this.size.innerWidth * this.cellAlign
                        };
                        var g = {
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
                        f.setCellAlign = function() {
                            var t = g[this.options.cellAlign];
                            this.cellAlign = t ? t[this.originSide] : this.options.cellAlign
                        }, f.setGallerySize = function() {
                            if (this.options.setGallerySize) {
                                var t = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
                                this.viewport.style.height = t + "px"
                            }
                        }, f._getWrapShiftCells = function() {
                            if (this.options.wrapAround) {
                                this._unshiftCells(this.beforeShiftCells), this._unshiftCells(this.afterShiftCells);
                                var t = this.cursorPosition,
                                    e = this.cells.length - 1;
                                this.beforeShiftCells = this._getGapCells(t, e, -1), t = this.size.innerWidth - this.cursorPosition, this.afterShiftCells = this._getGapCells(t, 0, 1)
                            }
                        }, f._getGapCells = function(t, e, i) {
                            for (var n = []; t > 0;) {
                                var s = this.cells[e];
                                if (!s) break;
                                n.push(s), e += i, t -= s.size.outerWidth
                            }
                            return n
                        }, f._containSlides = function() {
                            if (this.options.contain && !this.options.wrapAround && this.cells.length) {
                                var t = this.options.rightToLeft,
                                    e = t ? "marginRight" : "marginLeft",
                                    i = t ? "marginLeft" : "marginRight",
                                    n = this.slideableWidth - this.getLastCell().size[i],
                                    s = n < this.size.innerWidth,
                                    o = this.cursorPosition + this.cells[0].size[e],
                                    r = n - this.size.innerWidth * (1 - this.cellAlign);
                                this.slides.forEach((function(t) {
                                    s ? t.target = n * this.cellAlign : (t.target = Math.max(t.target, o), t.target = Math.min(t.target, r))
                                }), this)
                            }
                        }, f.dispatchEvent = function(t, e, i) {
                            var n = e ? [e].concat(i) : i;
                            if (this.emitEvent(t, n), a && this.$element) {
                                var s = t += this.options.namespaceJQueryEvents ? ".flickity" : "";
                                if (e) {
                                    var o = new a.Event(e);
                                    o.type = t, s = o
                                }
                                this.$element.trigger(s, i)
                            }
                        }, f.select = function(t, e, i) {
                            if (this.isActive && (t = parseInt(t, 10), this._wrapSelect(t), (this.options.wrapAround || e) && (t = n.modulo(t, this.slides.length)), this.slides[t])) {
                                var s = this.selectedIndex;
                                this.selectedIndex = t, this.updateSelectedSlide(), i ? this.positionSliderAtSelected() : this.startAnimation(), this.options.adaptiveHeight && this.setGallerySize(), this.dispatchEvent("select", null, [t]), t != s && this.dispatchEvent("change", null, [t]), this.dispatchEvent("cellSelect")
                            }
                        }, f._wrapSelect = function(t) {
                            var e = this.slides.length;
                            if (!(this.options.wrapAround && e > 1)) return t;
                            var i = n.modulo(t, e),
                                s = Math.abs(i - this.selectedIndex),
                                o = Math.abs(i + e - this.selectedIndex),
                                r = Math.abs(i - e - this.selectedIndex);
                            !this.isDragSelect && o < s ? t += e : !this.isDragSelect && r < s && (t -= e), t < 0 ? this.x -= this.slideableWidth : t >= e && (this.x += this.slideableWidth)
                        }, f.previous = function(t, e) {
                            this.select(this.selectedIndex - 1, t, e)
                        }, f.next = function(t, e) {
                            this.select(this.selectedIndex + 1, t, e)
                        }, f.updateSelectedSlide = function() {
                            var t = this.slides[this.selectedIndex];
                            t && (this.unselectSelectedSlide(), this.selectedSlide = t, t.select(), this.selectedCells = t.cells, this.selectedElements = t.getCellElements(), this.selectedCell = t.cells[0], this.selectedElement = this.selectedElements[0])
                        }, f.unselectSelectedSlide = function() {
                            this.selectedSlide && this.selectedSlide.unselect()
                        }, f.selectInitialIndex = function() {
                            var t = this.options.initialIndex;
                            if (this.isInitActivated) this.select(this.selectedIndex, !1, !0);
                            else {
                                if (t && "string" == typeof t)
                                    if (this.queryCell(t)) return void this.selectCell(t, !1, !0);
                                var e = 0;
                                t && this.slides[t] && (e = t), this.select(e, !1, !0)
                            }
                        }, f.selectCell = function(t, e, i) {
                            var n = this.queryCell(t);
                            if (n) {
                                var s = this.getCellSlideIndex(n);
                                this.select(s, e, i)
                            }
                        }, f.getCellSlideIndex = function(t) {
                            for (var e = 0; e < this.slides.length; e++) {
                                if (-1 != this.slides[e].cells.indexOf(t)) return e
                            }
                        }, f.getCell = function(t) {
                            for (var e = 0; e < this.cells.length; e++) {
                                var i = this.cells[e];
                                if (i.element == t) return i
                            }
                        }, f.getCells = function(t) {
                            t = n.makeArray(t);
                            var e = [];
                            return t.forEach((function(t) {
                                var i = this.getCell(t);
                                i && e.push(i)
                            }), this), e
                        }, f.getCellElements = function() {
                            return this.cells.map((function(t) {
                                return t.element
                            }))
                        }, f.getParentCell = function(t) {
                            var e = this.getCell(t);
                            return e || (t = n.getParent(t, ".flickity-slider > *"), this.getCell(t))
                        }, f.getAdjacentCellElements = function(t, e) {
                            if (!t) return this.selectedSlide.getCellElements();
                            e = void 0 === e ? this.selectedIndex : e;
                            var i = this.slides.length;
                            if (1 + 2 * t >= i) return this.getCellElements();
                            for (var s = [], o = e - t; o <= e + t; o++) {
                                var r = this.options.wrapAround ? n.modulo(o, i) : o,
                                    a = this.slides[r];
                                a && (s = s.concat(a.getCellElements()))
                            }
                            return s
                        }, f.queryCell = function(t) {
                            if ("number" == typeof t) return this.cells[t];
                            if ("string" == typeof t) {
                                if (t.match(/^[#.]?[\d/]/)) return;
                                t = this.element.querySelector(t)
                            }
                            return this.getCell(t)
                        }, f.uiChange = function() {
                            this.emitEvent("uiChange")
                        }, f.childUIPointerDown = function(t) {
                            "touchstart" != t.type && t.preventDefault(), this.focus()
                        }, f.onresize = function() {
                            this.watchCSS(), this.resize()
                        }, n.debounceMethod(p, "onresize", 150), f.resize = function() {
                            if (this.isActive && !this.isAnimating && !this.isDragging) {
                                this.getSize(), this.options.wrapAround && (this.x = n.modulo(this.x, this.slideableWidth)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize(), this.emitEvent("resize");
                                var t = this.selectedElements && this.selectedElements[0];
                                this.selectCell(t, !1, !0)
                            }
                        }, f.watchCSS = function() {
                            this.options.watchCSS && (-1 != l(this.element, ":after").content.indexOf("flickity") ? this.activate() : this.deactivate())
                        }, f.onkeydown = function(t) {
                            var e = document.activeElement && document.activeElement != this.element;
                            if (this.options.accessibility && !e) {
                                var i = p.keyboardHandlers[t.keyCode];
                                i && i.call(this)
                            }
                        }, p.keyboardHandlers = {
                            37: function() {
                                var t = this.options.rightToLeft ? "next" : "previous";
                                this.uiChange(), this[t]()
                            },
                            39: function() {
                                var t = this.options.rightToLeft ? "previous" : "next";
                                this.uiChange(), this[t]()
                            }
                        }, f.focus = function() {
                            var e = t.pageYOffset;
                            this.element.focus({
                                preventScroll: !0
                            }), t.pageYOffset != e && t.scrollTo(t.pageXOffset, e)
                        }, f.deactivate = function() {
                            this.isActive && (this.element.classList.remove("flickity-enabled"), this.element.classList.remove("flickity-rtl"), this.unselectSelectedSlide(), this.cells.forEach((function(t) {
                                t.destroy()
                            })), this.element.removeChild(this.viewport), c(this.slider.children, this.element), this.options.accessibility && (this.element.removeAttribute("tabIndex"), this.element.removeEventListener("keydown", this)), this.isActive = !1, this.emitEvent("deactivate"))
                        }, f.destroy = function() {
                            this.deactivate(), t.removeEventListener("resize", this), this.allOff(), this.emitEvent("destroy"), a && this.$element && a.removeData(this.element, "flickity"), delete this.element.flickityGUID, delete u[this.guid]
                        }, n.extend(f, r), p.data = function(t) {
                            var e = (t = n.getQueryElement(t)) && t.flickityGUID;
                            return e && u[e]
                        }, n.htmlInit(p, "flickity"), a && a.bridget && a.bridget("flickity", p);
                        return p.setJQuery = function(t) {
                            a = t
                        }, p.Cell = s, p.Slide = o, p
                    }(o, t, e, i, n, s, r)
                }.apply(e, n)) || (t.exports = s)
            }(window)
        },
        IXsZ: function(t, e, i) {
            var n, s, o;
            window, s = [i("E4Uq"), i("SWQu"), i("z7b9"), i("Bij1"), i("sYrE"), i("vXzw"), i("ihW+")], void 0 === (o = "function" == typeof(n = function(t) {
                return t
            }) ? n.apply(e, s) : n) || (t.exports = o)
        },
        JoT5: function(t, e, i) {
            t.exports = {
                themeDark: "core-module--theme-dark--2Ikqt",
                themeLight: "core-module--theme-light--3N5qJ",
                relative: "core-module--relative--3xmxL",
                description: "core-module--description--27mfT",
                wordWLong: "core-module--word-w-long--2x_RY",
                wordWShort: "core-module--word-w-short--1CGLO",
                link: "core-module--link--2Blw3",
                email: "core-module--email--1KPFN",
                grid: "core-module--grid--Pz1B0",
                flex: "core-module--flex--2jc-r",
                gridG3: "core-module--grid-g-3--d64kZ",
                gridG2: "core-module--grid-g-2--Jacg2",
                gridG1: "core-module--grid-g-1--2VFRn",
                grid11: "core-module--grid-1-1--p7DSG",
                grid1: "core-module--grid-1--12cu6",
                alignCenter: "core-module--align-center--1btq6",
                contentPage: "core-module--contentPage--1aCw9"
            }
        },
        QK1G: function(t, e, i) {
            var n, s;
            window, void 0 === (s = "function" == typeof(n = function() {
                "use strict";

                function t(t) {
                    var e = parseFloat(t);
                    return -1 == t.indexOf("%") && !isNaN(e) && e
                }
                var e = "undefined" == typeof console ? function() {} : function(t) {
                        console.error(t)
                    },
                    i = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
                    n = i.length;

                function s(t) {
                    var i = getComputedStyle(t);
                    return i || e("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), i
                }
                var o, r = !1;

                function a(e) {
                    if (function() {
                            if (!r) {
                                r = !0;
                                var e = document.createElement("div");
                                e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
                                var i = document.body || document.documentElement;
                                i.appendChild(e);
                                var n = s(e);
                                o = 200 == Math.round(t(n.width)), a.isBoxSizeOuter = o, i.removeChild(e)
                            }
                        }(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
                        var l = s(e);
                        if ("none" == l.display) return function() {
                            for (var t = {
                                    width: 0,
                                    height: 0,
                                    innerWidth: 0,
                                    innerHeight: 0,
                                    outerWidth: 0,
                                    outerHeight: 0
                                }, e = 0; e < n; e++) t[i[e]] = 0;
                            return t
                        }();
                        var h = {};
                        h.width = e.offsetWidth, h.height = e.offsetHeight;
                        for (var c = h.isBorderBox = "border-box" == l.boxSizing, d = 0; d < n; d++) {
                            var u = i[d],
                                p = l[u],
                                f = parseFloat(p);
                            h[u] = isNaN(f) ? 0 : f
                        }
                        var g = h.paddingLeft + h.paddingRight,
                            v = h.paddingTop + h.paddingBottom,
                            m = h.marginLeft + h.marginRight,
                            y = h.marginTop + h.marginBottom,
                            b = h.borderLeftWidth + h.borderRightWidth,
                            w = h.borderTopWidth + h.borderBottomWidth,
                            E = c && o,
                            S = t(l.width);
                        !1 !== S && (h.width = S + (E ? 0 : g + b));
                        var x = t(l.height);
                        return !1 !== x && (h.height = x + (E ? 0 : v + w)), h.innerWidth = h.width - (g + b), h.innerHeight = h.height - (v + w), h.outerWidth = h.width + m, h.outerHeight = h.height + y, h
                    }
                }
                return a
            }) ? n.call(e, i, e, t) : n) || (t.exports = s)
        },
        SWQu: function(t, e, i) {
            var n, s;
            ! function(o, r) {
                n = [i("E4Uq"), i("72Lm"), i("YVj6")], void 0 === (s = function(t, e, i) {
                    return function(t, e, i, n) {
                        "use strict";
                        n.extend(e.defaults, {
                            draggable: ">1",
                            dragThreshold: 3
                        }), e.createMethods.push("_createDrag");
                        var s = e.prototype;
                        n.extend(s, i.prototype), s._touchActionValue = "pan-y", s._createDrag = function() {
                            this.on("activate", this.onActivateDrag), this.on("uiChange", this._uiChangeDrag), this.on("deactivate", this.onDeactivateDrag), this.on("cellChange", this.updateDraggable)
                        }, s.onActivateDrag = function() {
                            this.handles = [this.viewport], this.bindHandles(), this.updateDraggable()
                        }, s.onDeactivateDrag = function() {
                            this.unbindHandles(), this.element.classList.remove("is-draggable")
                        }, s.updateDraggable = function() {
                            ">1" == this.options.draggable ? this.isDraggable = this.slides.length > 1 : this.isDraggable = this.options.draggable, this.isDraggable ? this.element.classList.add("is-draggable") : this.element.classList.remove("is-draggable")
                        }, s.bindDrag = function() {
                            this.options.draggable = !0, this.updateDraggable()
                        }, s.unbindDrag = function() {
                            this.options.draggable = !1, this.updateDraggable()
                        }, s._uiChangeDrag = function() {
                            delete this.isFreeScrolling
                        }, s.pointerDown = function(e, i) {
                            this.isDraggable ? this.okayPointerDown(e) && (this._pointerDownPreventDefault(e), this.pointerDownFocus(e), document.activeElement != this.element && this.pointerDownBlur(), this.dragX = this.x, this.viewport.classList.add("is-pointer-down"), this.pointerDownScroll = r(), t.addEventListener("scroll", this), this._pointerDownDefault(e, i)) : this._pointerDownDefault(e, i)
                        }, s._pointerDownDefault = function(t, e) {
                            this.pointerDownPointer = {
                                pageX: e.pageX,
                                pageY: e.pageY
                            }, this._bindPostStartEvents(t), this.dispatchEvent("pointerDown", t, [e])
                        };
                        var o = {
                            INPUT: !0,
                            TEXTAREA: !0,
                            SELECT: !0
                        };

                        function r() {
                            return {
                                x: t.pageXOffset,
                                y: t.pageYOffset
                            }
                        }
                        return s.pointerDownFocus = function(t) {
                            o[t.target.nodeName] || this.focus()
                        }, s._pointerDownPreventDefault = function(t) {
                            var e = "touchstart" == t.type,
                                i = "touch" == t.pointerType,
                                n = o[t.target.nodeName];
                            e || i || n || t.preventDefault()
                        }, s.hasDragStarted = function(t) {
                            return Math.abs(t.x) > this.options.dragThreshold
                        }, s.pointerUp = function(t, e) {
                            delete this.isTouchScrolling, this.viewport.classList.remove("is-pointer-down"), this.dispatchEvent("pointerUp", t, [e]), this._dragPointerUp(t, e)
                        }, s.pointerDone = function() {
                            t.removeEventListener("scroll", this), delete this.pointerDownScroll
                        }, s.dragStart = function(e, i) {
                            this.isDraggable && (this.dragStartPosition = this.x, this.startAnimation(), t.removeEventListener("scroll", this), this.dispatchEvent("dragStart", e, [i]))
                        }, s.pointerMove = function(t, e) {
                            var i = this._dragPointerMove(t, e);
                            this.dispatchEvent("pointerMove", t, [e, i]), this._dragMove(t, e, i)
                        }, s.dragMove = function(t, e, i) {
                            if (this.isDraggable) {
                                t.preventDefault(), this.previousDragX = this.dragX;
                                var n = this.options.rightToLeft ? -1 : 1;
                                this.options.wrapAround && (i.x %= this.slideableWidth);
                                var s = this.dragStartPosition + i.x * n;
                                if (!this.options.wrapAround && this.slides.length) {
                                    var o = Math.max(-this.slides[0].target, this.dragStartPosition);
                                    s = s > o ? .5 * (s + o) : s;
                                    var r = Math.min(-this.getLastSlide().target, this.dragStartPosition);
                                    s = s < r ? .5 * (s + r) : s
                                }
                                this.dragX = s, this.dragMoveTime = new Date, this.dispatchEvent("dragMove", t, [e, i])
                            }
                        }, s.dragEnd = function(t, e) {
                            if (this.isDraggable) {
                                this.options.freeScroll && (this.isFreeScrolling = !0);
                                var i = this.dragEndRestingSelect();
                                if (this.options.freeScroll && !this.options.wrapAround) {
                                    var n = this.getRestingPosition();
                                    this.isFreeScrolling = -n > this.slides[0].target && -n < this.getLastSlide().target
                                } else this.options.freeScroll || i != this.selectedIndex || (i += this.dragEndBoostSelect());
                                delete this.previousDragX, this.isDragSelect = this.options.wrapAround, this.select(i), delete this.isDragSelect, this.dispatchEvent("dragEnd", t, [e])
                            }
                        }, s.dragEndRestingSelect = function() {
                            var t = this.getRestingPosition(),
                                e = Math.abs(this.getSlideDistance(-t, this.selectedIndex)),
                                i = this._getClosestResting(t, e, 1),
                                n = this._getClosestResting(t, e, -1);
                            return i.distance < n.distance ? i.index : n.index
                        }, s._getClosestResting = function(t, e, i) {
                            for (var n = this.selectedIndex, s = 1 / 0, o = this.options.contain && !this.options.wrapAround ? function(t, e) {
                                    return t <= e
                                } : function(t, e) {
                                    return t < e
                                }; o(e, s) && (n += i, s = e, null !== (e = this.getSlideDistance(-t, n)));) e = Math.abs(e);
                            return {
                                distance: s,
                                index: n - i
                            }
                        }, s.getSlideDistance = function(t, e) {
                            var i = this.slides.length,
                                s = this.options.wrapAround && i > 1,
                                o = s ? n.modulo(e, i) : e,
                                r = this.slides[o];
                            if (!r) return null;
                            var a = s ? this.slideableWidth * Math.floor(e / i) : 0;
                            return t - (r.target + a)
                        }, s.dragEndBoostSelect = function() {
                            if (void 0 === this.previousDragX || !this.dragMoveTime || new Date - this.dragMoveTime > 100) return 0;
                            var t = this.getSlideDistance(-this.dragX, this.selectedIndex),
                                e = this.previousDragX - this.dragX;
                            return t > 0 && e > 0 ? 1 : t < 0 && e < 0 ? -1 : 0
                        }, s.staticClick = function(t, e) {
                            var i = this.getParentCell(t.target),
                                n = i && i.element,
                                s = i && this.cells.indexOf(i);
                            this.dispatchEvent("staticClick", t, [e, n, s])
                        }, s.onscroll = function() {
                            var t = r(),
                                e = this.pointerDownScroll.x - t.x,
                                i = this.pointerDownScroll.y - t.y;
                            (Math.abs(e) > 3 || Math.abs(i) > 3) && this._pointerDone()
                        }, e
                    }(o, t, e, i)
                }.apply(e, n)) || (t.exports = s)
            }(window)
        },
        YVj6: function(t, e, i) {
            var n, s;
            ! function(o, r) {
                n = [i("x0Ue")], void 0 === (s = function(t) {
                    return function(t, e) {
                        "use strict";
                        var i = {
                                extend: function(t, e) {
                                    for (var i in e) t[i] = e[i];
                                    return t
                                },
                                modulo: function(t, e) {
                                    return (t % e + e) % e
                                }
                            },
                            n = Array.prototype.slice;
                        i.makeArray = function(t) {
                            return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? n.call(t) : [t]
                        }, i.removeFrom = function(t, e) {
                            var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
                        }, i.getParent = function(t, i) {
                            for (; t.parentNode && t != document.body;)
                                if (t = t.parentNode, e(t, i)) return t
                        }, i.getQueryElement = function(t) {
                            return "string" == typeof t ? document.querySelector(t) : t
                        }, i.handleEvent = function(t) {
                            var e = "on" + t.type;
                            this[e] && this[e](t)
                        }, i.filterFindElements = function(t, n) {
                            t = i.makeArray(t);
                            var s = [];
                            return t.forEach((function(t) {
                                if (t instanceof HTMLElement)
                                    if (n) {
                                        e(t, n) && s.push(t);
                                        for (var i = t.querySelectorAll(n), o = 0; o < i.length; o++) s.push(i[o])
                                    } else s.push(t)
                            })), s
                        }, i.debounceMethod = function(t, e, i) {
                            i = i || 100;
                            var n = t.prototype[e],
                                s = e + "Timeout";
                            t.prototype[e] = function() {
                                var t = this[s];
                                clearTimeout(t);
                                var e = arguments,
                                    o = this;
                                this[s] = setTimeout((function() {
                                    n.apply(o, e), delete o[s]
                                }), i)
                            }
                        }, i.docReady = function(t) {
                            var e = document.readyState;
                            "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
                        }, i.toDashed = function(t) {
                            return t.replace(/(.)([A-Z])/g, (function(t, e, i) {
                                return e + "-" + i
                            })).toLowerCase()
                        };
                        var s = t.console;
                        return i.htmlInit = function(e, n) {
                            i.docReady((function() {
                                var o = i.toDashed(n),
                                    r = "data-" + o,
                                    a = document.querySelectorAll("[" + r + "]"),
                                    l = document.querySelectorAll(".js-" + o),
                                    h = i.makeArray(a).concat(i.makeArray(l)),
                                    c = r + "-options",
                                    d = t.jQuery;
                                h.forEach((function(t) {
                                    var i, o = t.getAttribute(r) || t.getAttribute(c);
                                    try {
                                        i = o && JSON.parse(o)
                                    } catch (l) {
                                        return void(s && s.error("Error parsing " + r + " on " + t.className + ": " + l))
                                    }
                                    var a = new e(t, i);
                                    d && d.data(t, n, a)
                                }))
                            }))
                        }, i
                    }(o, t)
                }.apply(e, n)) || (t.exports = s)
            }(window)
        },
        dlLY: function(t, e, i) {
            var n, s;
            window, void 0 === (s = "function" == typeof(n = function() {
                "use strict";

                function t(t) {
                    this.parent = t, this.isOriginLeft = "left" == t.originSide, this.cells = [], this.outerWidth = 0, this.height = 0
                }
                var e = t.prototype;
                return e.addCell = function(t) {
                    if (this.cells.push(t), this.outerWidth += t.size.outerWidth, this.height = Math.max(t.size.outerHeight, this.height), 1 == this.cells.length) {
                        this.x = t.x;
                        var e = this.isOriginLeft ? "marginLeft" : "marginRight";
                        this.firstMargin = t.size[e]
                    }
                }, e.updateTarget = function() {
                    var t = this.isOriginLeft ? "marginRight" : "marginLeft",
                        e = this.getLastCell(),
                        i = e ? e.size[t] : 0,
                        n = this.outerWidth - (this.firstMargin + i);
                    this.target = this.x + this.firstMargin + n * this.parent.cellAlign
                }, e.getLastCell = function() {
                    return this.cells[this.cells.length - 1]
                }, e.select = function() {
                    this.cells.forEach((function(t) {
                        t.select()
                    }))
                }, e.unselect = function() {
                    this.cells.forEach((function(t) {
                        t.unselect()
                    }))
                }, e.getCellElements = function() {
                    return this.cells.map((function(t) {
                        return t.element
                    }))
                }, t
            }) ? n.call(e, i, e, t) : n) || (t.exports = s)
        },
        ez49: function(t, e, i) {
            "use strict";
            var n, s = i("o97j");
            s.canUseDOM && (n = document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", "")), t.exports = function(t, e) {
                if (!s.canUseDOM || e && !("addEventListener" in document)) return !1;
                var i = "on" + t,
                    o = i in document;
                if (!o) {
                    var r = document.createElement("div");
                    r.setAttribute(i, "return;"), o = "function" == typeof r[i]
                }
                return !o && n && "wheel" === t && (o = document.implementation.hasFeature("Events.wheel", "3.0")), o
            }
        },
        fWck: function(t, e) {
            function i(t, e, i) {
                t.addEventListener("wheel", e, i)
            }
            t.exports = i, t.exports.addWheelListener = i, t.exports.removeWheelListener = function(t, e, i) {
                t.removeEventListener("wheel", e, i)
            }
        },
        i2cy: function(t, e, i) {
            "use strict";
            i.r(e);
            var n = i("q1tI"),
                s = i.n(n),
                o = (i("sUEz"), i("JoT5")),
                r = i.n(o),
                a = i("Wbzz"),
                l = i("9eSz"),
                h = i.n(l),
                c = i("3m/Q"),
                d = i.n(c);
            var u = t => {
                    let {
                        post: e
                    } = t, i = e.frontmatter.bgImage.childImageSharp.fluid;
                    return s.a.createElement("div", {
                        className: d.a.showCaseItem
                    }, s.a.createElement(a.Link, {
                        "aria-label": "Link to showcase",
                        to: e.frontmatter.path
                    }, s.a.createElement("div", {
                        className: d.a.featureImage
                    }, s.a.createElement(h.a, {
                        className: d.a.bgImage,
                        fluid: i
                    }), s.a.createElement("div", {
                        className: d.a.wrapOver
                    }, s.a.createElement("div", {
                        className: d.a.labelHolder
                    }, e.frontmatter.tech.map((t, e) => s.a.createElement("div", {
                        className: d.a.label,
                        key: e
                    }, t)))))), s.a.createElement("h3", null, s.a.createElement(a.Link, {
                        "aria-label": "Link to showcase",
                        to: e.frontmatter.path
                    }, e.frontmatter.title)), s.a.createElement("div", {
                        className: d.a.description
                    }, e.frontmatter.description), s.a.createElement(a.Link, {
                        "aria-label": "Link to showcase",
                        to: e.frontmatter.path
                    }, "VIEW PROJECT"))
                },
                p = i("0vCa"),
                f = i.n(p),
                g = i("fWck"),
                v = i.n(g),
                m = i("wJiJ"),
                y = i.n(m);
            e.default = () => {
                const t = Object(a.useStaticQuery)("1921292785"),
                    e = Object(n.useRef)();
                Object(n.useLayoutEffect)(() => {
                    const t = e.current.flkty;
                    let i = {
                        value: 0,
                        max: 80,
                        min: -80,
                        step: 1,
                        increase: function(e) {
                            const i = this.max / t.slides.length;
                            this.value < this.max && (this.value += this.step), this.value >= i && (t.next(), this.value -= i)
                        },
                        decrease: function(e) {
                            const i = this.max / t.slides.length;
                            this.value > this.min && (this.value -= this.step), this.value <= i && (t.previous(), this.value += i)
                        }
                    };
                    return v.a.addWheelListener(t.element, e => {
                        const n = 100 * y()(e).spinX;
                        n > 0 ? i.increase(n) : i.decrease(n), t.startAnimation()
                    }, {
                        passive: !0
                    }), v.a.removeWheelListener(t.element)
                }, [e]);
                const {
                    allMarkdownRemark: {
                        edges: i
                    }
                } = t, o = i.filter(t => !!t.node.frontmatter.date).map(t => s.a.createElement(u, {
                    key: t.node.id,
                    post: t.node
                }));
                return s.a.createElement("div", {
                    className: r.a.contentPage
                }, s.a.createElement("h2", null, "Showcases."), s.a.createElement("p", {
                    className: [r.a.description, r.a.wordWShort].join(" ")
                }, "These are some highlight projects. Each page discusses the purpose of the project, what was learned, and how I came up with solutions."), s.a.createElement(f.a, {
                    options: {
                        groupCells: !0,
                        contain: !0,
                        draggable: !0,
                        reloadOnUpdate: !0,
                        cellAlign: "left"
                    },
                    ref: e
                }, o))
            }
        },
        "ihW+": function(t, e, i) {
            var n, s;
            window, n = [i("E4Uq"), i("YVj6")], void 0 === (s = function(t, e) {
                return function(t, e, i) {
                    "use strict";
                    e.createMethods.push("_createLazyload");
                    var n = e.prototype;

                    function s(t, e) {
                        this.img = t, this.flickity = e, this.load()
                    }
                    return n._createLazyload = function() {
                        this.on("select", this.lazyLoad)
                    }, n.lazyLoad = function() {
                        var t = this.options.lazyLoad;
                        if (t) {
                            var e = "number" == typeof t ? t : 0,
                                n = this.getAdjacentCellElements(e),
                                o = [];
                            n.forEach((function(t) {
                                var e = function(t) {
                                    if ("IMG" == t.nodeName) {
                                        var e = t.getAttribute("data-flickity-lazyload"),
                                            n = t.getAttribute("data-flickity-lazyload-src"),
                                            s = t.getAttribute("data-flickity-lazyload-srcset");
                                        if (e || n || s) return [t]
                                    }
                                    var o = t.querySelectorAll("img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]");
                                    return i.makeArray(o)
                                }(t);
                                o = o.concat(e)
                            })), o.forEach((function(t) {
                                new s(t, this)
                            }), this)
                        }
                    }, s.prototype.handleEvent = i.handleEvent, s.prototype.load = function() {
                        this.img.addEventListener("load", this), this.img.addEventListener("error", this);
                        var t = this.img.getAttribute("data-flickity-lazyload") || this.img.getAttribute("data-flickity-lazyload-src"),
                            e = this.img.getAttribute("data-flickity-lazyload-srcset");
                        this.img.src = t, e && this.img.setAttribute("srcset", e), this.img.removeAttribute("data-flickity-lazyload"), this.img.removeAttribute("data-flickity-lazyload-src"), this.img.removeAttribute("data-flickity-lazyload-srcset")
                    }, s.prototype.onload = function(t) {
                        this.complete(t, "flickity-lazyloaded")
                    }, s.prototype.onerror = function(t) {
                        this.complete(t, "flickity-lazyerror")
                    }, s.prototype.complete = function(t, e) {
                        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
                        var i = this.flickity.getParentCell(this.img),
                            n = i && i.element;
                        this.flickity.cellSizeChange(n), this.img.classList.add(e), this.flickity.dispatchEvent("lazyLoad", t, n)
                    }, e.LazyLoader = s, e
                }(0, t, e)
            }.apply(e, n)) || (t.exports = s)
        },
        jrfk: function(t, e) {
            var i, n, s, o, r, a, l, h, c, d, u, p, f, g, v, m = !1;

            function y() {
                if (!m) {
                    m = !0;
                    var t = navigator.userAgent,
                        e = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(t),
                        y = /(Mac OS X)|(Windows)|(Linux)/.exec(t);
                    if (p = /\b(iPhone|iP[ao]d)/.exec(t), f = /\b(iP[ao]d)/.exec(t), d = /Android/i.exec(t), g = /FBAN\/\w+;/i.exec(t), v = /Mobile/i.exec(t), u = !!/Win64/.exec(t), e) {
                        (i = e[1] ? parseFloat(e[1]) : e[5] ? parseFloat(e[5]) : NaN) && document && document.documentMode && (i = document.documentMode);
                        var b = /(?:Trident\/(\d+.\d+))/.exec(t);
                        a = b ? parseFloat(b[1]) + 4 : i, n = e[2] ? parseFloat(e[2]) : NaN, s = e[3] ? parseFloat(e[3]) : NaN, (o = e[4] ? parseFloat(e[4]) : NaN) ? (e = /(?:Chrome\/(\d+\.\d+))/.exec(t), r = e && e[1] ? parseFloat(e[1]) : NaN) : r = NaN
                    } else i = n = s = r = o = NaN;
                    if (y) {
                        if (y[1]) {
                            var w = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(t);
                            l = !w || parseFloat(w[1].replace("_", "."))
                        } else l = !1;
                        h = !!y[2], c = !!y[3]
                    } else l = h = c = !1
                }
            }
            var b = {
                ie: function() {
                    return y() || i
                },
                ieCompatibilityMode: function() {
                    return y() || a > i
                },
                ie64: function() {
                    return b.ie() && u
                },
                firefox: function() {
                    return y() || n
                },
                opera: function() {
                    return y() || s
                },
                webkit: function() {
                    return y() || o
                },
                safari: function() {
                    return b.webkit()
                },
                chrome: function() {
                    return y() || r
                },
                windows: function() {
                    return y() || h
                },
                osx: function() {
                    return y() || l
                },
                linux: function() {
                    return y() || c
                },
                iphone: function() {
                    return y() || p
                },
                mobile: function() {
                    return y() || p || f || d || v
                },
                nativeApp: function() {
                    return y() || g
                },
                android: function() {
                    return y() || d
                },
                ipad: function() {
                    return y() || f
                }
            };
            t.exports = b
        },
        o97j: function(t, e, i) {
            "use strict";
            var n = !("undefined" == typeof window || !window.document || !window.document.createElement),
                s = {
                    canUseDOM: n,
                    canUseWorkers: "undefined" != typeof Worker,
                    canUseEventListeners: n && !(!window.addEventListener && !window.attachEvent),
                    canUseViewport: n && !!window.screen,
                    isInWorker: !n
                };
            t.exports = s
        },
        sUEz: function(t, e, i) {},
        sYrE: function(t, e, i) {
            var n, s;
            window, n = [i("CUlp"), i("YVj6"), i("E4Uq")], void 0 === (s = function(t, e, i) {
                return function(t, e, i) {
                    "use strict";

                    function n(t) {
                        this.parent = t, this.state = "stopped", this.onVisibilityChange = this.visibilityChange.bind(this), this.onVisibilityPlay = this.visibilityPlay.bind(this)
                    }
                    n.prototype = Object.create(t.prototype), n.prototype.play = function() {
                        "playing" != this.state && (document.hidden ? document.addEventListener("visibilitychange", this.onVisibilityPlay) : (this.state = "playing", document.addEventListener("visibilitychange", this.onVisibilityChange), this.tick()))
                    }, n.prototype.tick = function() {
                        if ("playing" == this.state) {
                            var t = this.parent.options.autoPlay;
                            t = "number" == typeof t ? t : 3e3;
                            var e = this;
                            this.clear(), this.timeout = setTimeout((function() {
                                e.parent.next(!0), e.tick()
                            }), t)
                        }
                    }, n.prototype.stop = function() {
                        this.state = "stopped", this.clear(), document.removeEventListener("visibilitychange", this.onVisibilityChange)
                    }, n.prototype.clear = function() {
                        clearTimeout(this.timeout)
                    }, n.prototype.pause = function() {
                        "playing" == this.state && (this.state = "paused", this.clear())
                    }, n.prototype.unpause = function() {
                        "paused" == this.state && this.play()
                    }, n.prototype.visibilityChange = function() {
                        this[document.hidden ? "pause" : "unpause"]()
                    }, n.prototype.visibilityPlay = function() {
                        this.play(), document.removeEventListener("visibilitychange", this.onVisibilityPlay)
                    }, e.extend(i.defaults, {
                        pauseAutoPlayOnHover: !0
                    }), i.createMethods.push("_createPlayer");
                    var s = i.prototype;
                    return s._createPlayer = function() {
                        this.player = new n(this), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer)
                    }, s.activatePlayer = function() {
                        this.options.autoPlay && (this.player.play(), this.element.addEventListener("mouseenter", this))
                    }, s.playPlayer = function() {
                        this.player.play()
                    }, s.stopPlayer = function() {
                        this.player.stop()
                    }, s.pausePlayer = function() {
                        this.player.pause()
                    }, s.unpausePlayer = function() {
                        this.player.unpause()
                    }, s.deactivatePlayer = function() {
                        this.player.stop(), this.element.removeEventListener("mouseenter", this)
                    }, s.onmouseenter = function() {
                        this.options.pauseAutoPlayOnHover && (this.player.pause(), this.element.addEventListener("mouseleave", this))
                    }, s.onmouseleave = function() {
                        this.player.unpause(), this.element.removeEventListener("mouseleave", this)
                    }, i.Player = n, i
                }(t, e, i)
            }.apply(e, n)) || (t.exports = s)
        },
        vX6Q: function(t, e, i) {
            var n, s;
            ! function(o, r) {
                "use strict";
                n = [i("CUlp")], void 0 === (s = function(t) {
                    return function(t, e) {
                        var i = t.jQuery,
                            n = t.console;

                        function s(t, e) {
                            for (var i in e) t[i] = e[i];
                            return t
                        }
                        var o = Array.prototype.slice;

                        function r(t, e, a) {
                            if (!(this instanceof r)) return new r(t, e, a);
                            var l, h = t;
                            ("string" == typeof t && (h = document.querySelectorAll(t)), h) ? (this.elements = (l = h, Array.isArray(l) ? l : "object" == typeof l && "number" == typeof l.length ? o.call(l) : [l]), this.options = s({}, this.options), "function" == typeof e ? a = e : s(this.options, e), a && this.on("always", a), this.getImages(), i && (this.jqDeferred = new i.Deferred), setTimeout(this.check.bind(this))) : n.error("Bad element for imagesLoaded " + (h || t))
                        }
                        r.prototype = Object.create(e.prototype), r.prototype.options = {}, r.prototype.getImages = function() {
                            this.images = [], this.elements.forEach(this.addElementImages, this)
                        }, r.prototype.addElementImages = function(t) {
                            "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
                            var e = t.nodeType;
                            if (e && a[e]) {
                                for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                                    var s = i[n];
                                    this.addImage(s)
                                }
                                if ("string" == typeof this.options.background) {
                                    var o = t.querySelectorAll(this.options.background);
                                    for (n = 0; n < o.length; n++) {
                                        var r = o[n];
                                        this.addElementBackgroundImages(r)
                                    }
                                }
                            }
                        };
                        var a = {
                            1: !0,
                            9: !0,
                            11: !0
                        };

                        function l(t) {
                            this.img = t
                        }

                        function h(t, e) {
                            this.url = t, this.element = e, this.img = new Image
                        }
                        return r.prototype.addElementBackgroundImages = function(t) {
                            var e = getComputedStyle(t);
                            if (e)
                                for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
                                    var s = n && n[2];
                                    s && this.addBackground(s, t), n = i.exec(e.backgroundImage)
                                }
                        }, r.prototype.addImage = function(t) {
                            var e = new l(t);
                            this.images.push(e)
                        }, r.prototype.addBackground = function(t, e) {
                            var i = new h(t, e);
                            this.images.push(i)
                        }, r.prototype.check = function() {
                            var t = this;

                            function e(e, i, n) {
                                setTimeout((function() {
                                    t.progress(e, i, n)
                                }))
                            }
                            this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach((function(t) {
                                t.once("progress", e), t.check()
                            })) : this.complete()
                        }, r.prototype.progress = function(t, e, i) {
                            this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && n && n.log("progress: " + i, t, e)
                        }, r.prototype.complete = function() {
                            var t = this.hasAnyBroken ? "fail" : "done";
                            if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                                var e = this.hasAnyBroken ? "reject" : "resolve";
                                this.jqDeferred[e](this)
                            }
                        }, l.prototype = Object.create(e.prototype), l.prototype.check = function() {
                            this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src)
                        }, l.prototype.getIsImageComplete = function() {
                            return this.img.complete && this.img.naturalWidth
                        }, l.prototype.confirm = function(t, e) {
                            this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
                        }, l.prototype.handleEvent = function(t) {
                            var e = "on" + t.type;
                            this[e] && this[e](t)
                        }, l.prototype.onload = function() {
                            this.confirm(!0, "onload"), this.unbindEvents()
                        }, l.prototype.onerror = function() {
                            this.confirm(!1, "onerror"), this.unbindEvents()
                        }, l.prototype.unbindEvents = function() {
                            this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
                        }, h.prototype = Object.create(l.prototype), h.prototype.check = function() {
                            this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
                        }, h.prototype.unbindEvents = function() {
                            this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
                        }, h.prototype.confirm = function(t, e) {
                            this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
                        }, r.makeJQueryPlugin = function(e) {
                            (e = e || t.jQuery) && ((i = e).fn.imagesLoaded = function(t, e) {
                                return new r(this, t, e).jqDeferred.promise(i(this))
                            })
                        }, r.makeJQueryPlugin(), r
                    }(o, t)
                }.apply(e, n)) || (t.exports = s)
            }("undefined" != typeof window ? window : this)
        },
        vXzw: function(t, e, i) {
            var n, s;
            window, n = [i("E4Uq"), i("YVj6")], void 0 === (s = function(t, e) {
                return function(t, e, i) {
                    "use strict";
                    var n = e.prototype;
                    return n.insert = function(t, e) {
                        var i = this._makeCells(t);
                        if (i && i.length) {
                            var n = this.cells.length;
                            e = void 0 === e ? n : e;
                            var s = function(t) {
                                    var e = document.createDocumentFragment();
                                    return t.forEach((function(t) {
                                        e.appendChild(t.element)
                                    })), e
                                }(i),
                                o = e == n;
                            if (o) this.slider.appendChild(s);
                            else {
                                var r = this.cells[e].element;
                                this.slider.insertBefore(s, r)
                            }
                            if (0 === e) this.cells = i.concat(this.cells);
                            else if (o) this.cells = this.cells.concat(i);
                            else {
                                var a = this.cells.splice(e, n - e);
                                this.cells = this.cells.concat(i).concat(a)
                            }
                            this._sizeCells(i), this.cellChange(e, !0)
                        }
                    }, n.append = function(t) {
                        this.insert(t, this.cells.length)
                    }, n.prepend = function(t) {
                        this.insert(t, 0)
                    }, n.remove = function(t) {
                        var e = this.getCells(t);
                        if (e && e.length) {
                            var n = this.cells.length - 1;
                            e.forEach((function(t) {
                                t.remove();
                                var e = this.cells.indexOf(t);
                                n = Math.min(e, n), i.removeFrom(this.cells, t)
                            }), this), this.cellChange(n, !0)
                        }
                    }, n.cellSizeChange = function(t) {
                        var e = this.getCell(t);
                        if (e) {
                            e.getSize();
                            var i = this.cells.indexOf(e);
                            this.cellChange(i)
                        }
                    }, n.cellChange = function(t, e) {
                        var i = this.selectedElement;
                        this._positionCells(t), this._getWrapShiftCells(), this.setGallerySize();
                        var n = this.getCell(i);
                        n && (this.selectedIndex = this.getCellSlideIndex(n)), this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex), this.emitEvent("cellChange", [t]), this.select(this.selectedIndex), e && this.positionSliderAtSelected()
                    }, e
                }(0, t, e)
            }.apply(e, n)) || (t.exports = s)
        },
        wJiJ: function(t, e, i) {
            t.exports = i("1K8p")
        },
        x0Ue: function(t, e, i) {
            var n, s;
            ! function(o, r) {
                "use strict";
                void 0 === (s = "function" == typeof(n = r) ? n.call(e, i, e, t) : n) || (t.exports = s)
            }(window, (function() {
                "use strict";
                var t = function() {
                    var t = window.Element.prototype;
                    if (t.matches) return "matches";
                    if (t.matchesSelector) return "matchesSelector";
                    for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
                        var n = e[i] + "MatchesSelector";
                        if (t[n]) return n
                    }
                }();
                return function(e, i) {
                    return e[t](i)
                }
            }))
        },
        yNx1: function(t, e, i) {
            var n, s;
            window, n = [i("QK1G")], void 0 === (s = function(t) {
                return function(t, e) {
                    "use strict";

                    function i(t, e) {
                        this.element = t, this.parent = e, this.create()
                    }
                    var n = i.prototype;
                    return n.create = function() {
                        this.element.style.position = "absolute", this.element.setAttribute("aria-hidden", "true"), this.x = 0, this.shift = 0, this.element.style[this.parent.originSide] = 0
                    }, n.destroy = function() {
                        this.unselect(), this.element.style.position = "";
                        var t = this.parent.originSide;
                        this.element.style[t] = "", this.element.style.transform = "", this.element.removeAttribute("aria-hidden")
                    }, n.getSize = function() {
                        this.size = e(this.element)
                    }, n.setPosition = function(t) {
                        this.x = t, this.updateTarget(), this.renderPosition(t)
                    }, n.updateTarget = n.setDefaultTarget = function() {
                        var t = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
                        this.target = this.x + this.size[t] + this.size.width * this.parent.cellAlign
                    }, n.renderPosition = function(t) {
                        var e = "left" === this.parent.originSide ? 1 : -1,
                            i = this.parent.options.percentPosition ? t * e * (this.parent.size.innerWidth / this.size.width) : t * e;
                        this.element.style.transform = "translateX(" + this.parent.getPositionValue(i) + ")"
                    }, n.select = function() {
                        this.element.classList.add("is-selected"), this.element.removeAttribute("aria-hidden")
                    }, n.unselect = function() {
                        this.element.classList.remove("is-selected"), this.element.setAttribute("aria-hidden", "true")
                    }, n.wrapShift = function(t) {
                        this.shift = t, this.renderPosition(this.x + this.parent.slideableWidth * t)
                    }, n.remove = function() {
                        this.element.parentNode.removeChild(this.element)
                    }, i
                }(0, t)
            }.apply(e, n)) || (t.exports = s)
        },
        z7b9: function(t, e, i) {
            var n, s;
            window, n = [i("E4Uq"), i("4PUS"), i("YVj6")], void 0 === (s = function(t, e, i) {
                return function(t, e, i, n) {
                    "use strict";
                    var s = "http://www.w3.org/2000/svg";

                    function o(t, e) {
                        this.direction = t, this.parent = e, this._create()
                    }
                    o.prototype = Object.create(i.prototype), o.prototype._create = function() {
                        this.isEnabled = !0, this.isPrevious = -1 == this.direction;
                        var t = this.parent.options.rightToLeft ? 1 : -1;
                        this.isLeft = this.direction == t;
                        var e = this.element = document.createElement("button");
                        e.className = "flickity-button flickity-prev-next-button", e.className += this.isPrevious ? " previous" : " next", e.setAttribute("type", "button"), this.disable(), e.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");
                        var i = this.createSVG();
                        e.appendChild(i), this.parent.on("select", this.update.bind(this)), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
                    }, o.prototype.activate = function() {
                        this.bindStartEvent(this.element), this.element.addEventListener("click", this), this.parent.element.appendChild(this.element)
                    }, o.prototype.deactivate = function() {
                        this.parent.element.removeChild(this.element), this.unbindStartEvent(this.element), this.element.removeEventListener("click", this)
                    }, o.prototype.createSVG = function() {
                        var t = document.createElementNS(s, "svg");
                        t.setAttribute("class", "flickity-button-icon"), t.setAttribute("viewBox", "0 0 100 100");
                        var e, i = document.createElementNS(s, "path"),
                            n = "string" == typeof(e = this.parent.options.arrowShape) ? e : "M " + e.x0 + ",50 L " + e.x1 + "," + (e.y1 + 50) + " L " + e.x2 + "," + (e.y2 + 50) + " L " + e.x3 + ",50  L " + e.x2 + "," + (50 - e.y2) + " L " + e.x1 + "," + (50 - e.y1) + " Z";
                        return i.setAttribute("d", n), i.setAttribute("class", "arrow"), this.isLeft || i.setAttribute("transform", "translate(100, 100) rotate(180) "), t.appendChild(i), t
                    }, o.prototype.handleEvent = n.handleEvent, o.prototype.onclick = function() {
                        if (this.isEnabled) {
                            this.parent.uiChange();
                            var t = this.isPrevious ? "previous" : "next";
                            this.parent[t]()
                        }
                    }, o.prototype.enable = function() {
                        this.isEnabled || (this.element.disabled = !1, this.isEnabled = !0)
                    }, o.prototype.disable = function() {
                        this.isEnabled && (this.element.disabled = !0, this.isEnabled = !1)
                    }, o.prototype.update = function() {
                        var t = this.parent.slides;
                        if (this.parent.options.wrapAround && t.length > 1) this.enable();
                        else {
                            var e = t.length ? t.length - 1 : 0,
                                i = this.isPrevious ? 0 : e;
                            this[this.parent.selectedIndex == i ? "disable" : "enable"]()
                        }
                    }, o.prototype.destroy = function() {
                        this.deactivate(), this.allOff()
                    }, n.extend(e.defaults, {
                        prevNextButtons: !0,
                        arrowShape: {
                            x0: 10,
                            x1: 60,
                            y1: 50,
                            x2: 70,
                            y2: 40,
                            x3: 30
                        }
                    }), e.createMethods.push("_createPrevNextButtons");
                    var r = e.prototype;
                    return r._createPrevNextButtons = function() {
                        this.options.prevNextButtons && (this.prevButton = new o(-1, this), this.nextButton = new o(1, this), this.on("activate", this.activatePrevNextButtons))
                    }, r.activatePrevNextButtons = function() {
                        this.prevButton.activate(), this.nextButton.activate(), this.on("deactivate", this.deactivatePrevNextButtons)
                    }, r.deactivatePrevNextButtons = function() {
                        this.prevButton.deactivate(), this.nextButton.deactivate(), this.off("deactivate", this.deactivatePrevNextButtons)
                    }, e.PrevNextButton = o, e
                }(0, t, e, i)
            }.apply(e, n)) || (t.exports = s)
        }
    }
]);
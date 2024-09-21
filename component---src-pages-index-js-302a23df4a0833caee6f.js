(window.webpackJsonp = window.webpackJsonp || []).push([
    [14], {
        "08cW": function(e, t, a) {
            var n = a("q1tI");

            function r(e) {
                return n.createElement("svg", e, n.createElement("path", {
                    d: "M5.1483 22.7495H0.379911V7.56082H5.1483V22.7495ZM2.76154 5.48894C1.23676 5.48894 0 4.23973 0 2.73152C1.09137e-08 2.00708 0.290947 1.3123 0.808836 0.800045C1.32673 0.287785 2.02913 0 2.76154 0C3.49395 0 4.19635 0.287785 4.71424 0.800045C5.23213 1.3123 5.52308 2.00708 5.52308 2.73152C5.52308 4.23973 4.2858 5.48894 2.76154 5.48894ZM22.9949 22.7495H18.2367V15.3557C18.2367 13.5936 18.2008 11.3339 15.7576 11.3339C13.2784 11.3339 12.8985 13.2483 12.8985 15.2288V22.7495H8.13522V7.56082H12.7085V9.6327H12.7753C13.4119 8.43934 14.9669 7.17996 17.287 7.17996C22.1129 7.17996 23 10.3233 23 14.4061V22.7495H22.9949Z",
                    fill: "black"
                }))
            }
            r.defaultProps = {
                width: "23",
                height: "23",
                viewBox: "0 0 23 23",
                fill: "none"
            }, e.exports = r, r.default = r
        },
        "1ZZH": function(e, t, a) {
            e.exports = {
                themeDark: "pageIndicator-module--theme-dark--2WB-H",
                themeLight: "pageIndicator-module--theme-light--v3-JN",
                relative: "pageIndicator-module--relative--21WiY",
                pageIndicator: "pageIndicator-module--pageIndicator--CH_rw",
                sliderWrapper: "pageIndicator-module--sliderWrapper--7odY4",
                slider: "pageIndicator-module--slider--36WVL",
                active: "pageIndicator-module--active--1KN6J"
            }
        },
        "9Yru": function(e, t, a) {
            e.exports = {
                themeDark: "socialMediaIndicator-module--theme-dark--jdoY5",
                themeLight: "socialMediaIndicator-module--theme-light--Esd4O",
                relative: "socialMediaIndicator-module--relative--1osN1",
                socialMediaIndicator: "socialMediaIndicator-module--socialMediaIndicator--4luJy",
                indicator: "socialMediaIndicator-module--indicator--32gtb"
            }
        },
        Bl7J: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                r = a.n(n),
                l = a("Wbzz"),
                i = a("dI71"),
                o = a("1ZZH"),
                c = a.n(o),
                s = a("pW/P");
            var m = function(e) {
                    function t() {
                        for (var t, a = arguments.length, n = new Array(a), r = 0; r < a; r++) n[r] = arguments[r];
                        return (t = e.call.apply(e, [this].concat(n)) || this).handleClick = e => {
                            const {
                                fpApi: a
                            } = t.props;
                            a.moveTo(e.toLowerCase())
                        }, t
                    }
                    return Object(i.a)(t, e), t.prototype.render = function() {
                        const {
                            fpState: e
                        } = this.props, t = s.a;
                        return r.a.createElement("div", {
                            className: c.a.pageIndicator
                        }, t.map((t, a) => r.a.createElement("div", {
                            className: c.a.sliderWrapper,
                            key: a,
                            onClick: () => {
                                this.handleClick(t)
                            }
                        }, r.a.createElement("div", {
                            className: `${c.a.slider} ${e&&e.index===a?c.a.active:null}`
                        }))))
                    }, t
                }(n.Component),
                d = a("LbRr"),
                u = a("K/0E"),
                p = a.n(u),
                h = a("EgnG");
            var f = function(e) {
                    function t(t) {
                        var a;
                        return (a = e.call(this, t) || this).anime = () => {
                            Object(h.a)({
                                targets: a.obj,
                                translateX: "-50%",
                                duration: 0
                            }), Object(h.a)({
                                targets: a.obj,
                                keyframes: [{
                                    translateX: "-50%",
                                    translateY: 0
                                }, {
                                    translateX: "-50%",
                                    translateY: 10
                                }],
                                duration: 500,
                                easing: "spring(1, 80, 10, 0)"
                            })
                        }, a.handleClick = () => {
                            const {
                                fpApi: e,
                                name: t
                            } = a.props;
                            e.moveTo(t.toLowerCase())
                        }, a
                    }
                    Object(i.a)(t, e);
                    var a = t.prototype;
                    return a.componentDidUpdate = function() {
                        this.anime()
                    }, a.componentDidMount = function() {
                        this.anime()
                    }, a.render = function() {
                        const {
                            name: e
                        } = this.props;
                        return r.a.createElement(r.a.Fragment, null, e && r.a.createElement("div", {
                            className: p.a.nextSectionIndicator,
                            ref: e => this.obj = e,
                            onClick: this.handleClick
                        }, r.a.createElement("span", null, e)))
                    }, t
                }(n.Component),
                g = a("9Yru"),
                C = a.n(g);
            let E = function(e) {
                    function t(t) {
                        var a;
                        return (a = e.call(this, t) || this).getItemBounds = e => {
                            let t = a.parent.getBoundingClientRect(),
                                n = e.target.getBoundingClientRect();
                            a.setState({
                                y: n.y - t.y + n.height / 2 - 3
                            })
                        }, a.state = {
                            y: null
                        }, a
                    }
                    Object(i.a)(t, e);
                    var a = t.prototype;
                    return a.componentDidMount = function() {
                        let e = this.parent.getBoundingClientRect(),
                            t = this.first.getBoundingClientRect();
                        this.setState({
                            y: {
                                y: t.y - e.y + t.height / 2 - 3
                            },
                            defaultY: {
                                y: t.y - e.y + t.height / 2 - 3
                            }
                        })
                    }, a.render = function() {
                        const {
                            y: e
                        } = this.state;
                        return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                            className: C.a.socialMediaIndicator,
                            ref: e => this.parent = e
                        }, r.a.createElement(v, {
                            y: e
                        }), r.a.createElement("ul", null, r.a.createElement("li", {
                            onMouseEnter: this.getItemBounds,
                            ref: e => this.first = e
                        }, r.a.createElement("a", {
                            rel: "noopener noreferrer",
                            "aria-label": "Github",
                            href: "https://github.com/auspham",
                            target: "_blank"
                        }, "Git")), r.a.createElement("li", {
                            onMouseEnter: this.getItemBounds
                        }, r.a.createElement("a", {
                            rel: "noopener noreferrer",
                            "aria-label": "LinkedIn",
                            href: "https://www.linkedin.com/in/pnt263/",
                            target: "_blank"
                        }, "In")), r.a.createElement("li", {
                            onMouseEnter: this.getItemBounds
                        }, r.a.createElement("a", {
                            rel: "noopener noreferrer",
                            "aria-label": "Twitter",
                            href: "https://twitter.com/thang_pham263",
                            target: "_blank"
                        }, "Tw")), r.a.createElement("li", {
                            onMouseEnter: this.getItemBounds
                        }, r.a.createElement("a", {
                            rel: "noopener noreferrer",
                            "aria-label": "Email",
                            href: "mailto:hello@auspham.dev",
                            target: "_blank"
                        }, "Mail")))))
                    }, t
                }(n.Component),
                v = function(e) {
                    function t() {
                        for (var t, a = arguments.length, n = new Array(a), r = 0; r < a; r++) n[r] = arguments[r];
                        return (t = e.call.apply(e, [this].concat(n)) || this).anime = () => {
                            const {
                                y: e
                            } = t.props;
                            null !== e && (Object(h.a)({
                                targets: t.dot,
                                opacity: 1,
                                delay: 500,
                                duration: 500,
                                easing: "easeInQuart"
                            }), Object(h.a)({
                                targets: t.dot,
                                top: e,
                                delay: 100,
                                duration: 500,
                                easing: "spring(1, 80, 10, 0)"
                            }))
                        }, t
                    }
                    Object(i.a)(t, e);
                    var a = t.prototype;
                    return a.componentDidMount = function() {
                        this.anime()
                    }, a.componentDidUpdate = function(e) {
                        e.y !== this.props.y && this.anime()
                    }, a.render = function() {
                        return r.a.createElement("div", {
                            ref: e => this.dot = e,
                            className: C.a.indicator
                        })
                    }, t
                }(n.Component);
            var b = E,
                y = a("DXwB"),
                I = a.n(y);
            var w = function(e) {
                    function t(t) {
                        var a;
                        return (a = e.call(this, t) || this).anime = () => {
                            const {
                                fpState: e
                            } = a.props;
                            Object(h.a)({
                                targets: a.obj,
                                translateY: Math.min(250 * e.index, 250),
                                duration: 1e3,
                                delay: 100,
                                easing: "cubicBezier(.5, .05, .1, .3)"
                            })
                        }, a.state = {
                            bound: null
                        }, a
                    }
                    Object(i.a)(t, e);
                    var a = t.prototype;
                    return a.componentDidMount = function() {
                        this.setState({
                            bound: this.obj.getBoundingClientRect()
                        }), this.anime()
                    }, a.componentDidUpdate = function(e) {
                        e.fpState !== this.props.fpState && this.anime()
                    }, a.render = function() {
                        return r.a.createElement("div", {
                            className: I.a.scrollDownIndicator,
                            ref: e => this.obj = e
                        }, r.a.createElement("span", null, "scroll down"))
                    }, t
                }(n.Component),
                k = a("vrFN"),
                M = a("72Yz");
            t.a = e => {
                let {
                    children: t,
                    fpState: a,
                    fpApi: i
                } = e;
                const {
                    0: o,
                    1: c
                } = Object(n.useState)(!0), u = Object(l.useStaticQuery)("3649515864"), p = r.a.Children.map(t, (e, t) => r.a.cloneElement(e));
                Object(n.useEffect)(() => {
                    c(!1)
                }, [i, a]);
                return r.a.createElement(M.b.Consumer, null, e => r.a.createElement(r.a.Fragment, null, r.a.createElement(k.a, {
                    title: "Homepage"
                }), e.dark ? r.a.createElement("style", null, " ", "\n    body { background: #181a1b; }\n  ", " ") : null, r.a.createElement("div", {
                    className: `container layout ${o?"":"show"} ${e.dark?"theme-dark":"theme-light"}`
                }, r.a.createElement(d.a, {
                    type: 0,
                    siteTitle: u.site.siteMetadata.title,
                    fpState: a,
                    fpApi: i
                }), r.a.createElement(m, {
                    fpState: a,
                    fpApi: i
                }), r.a.createElement(w, {
                    fpState: a
                }), r.a.createElement("main", null, p), r.a.createElement(b, {
                    fpState: a
                }), r.a.createElement(f, {
                    name: a ? s.a[a.index + 1] : "",
                    fpApi: i
                }))))
            }
        },
        DXwB: function(e, t, a) {
            e.exports = {
                themeDark: "scrollDownIndicator-module--theme-dark--3IeWU",
                themeLight: "scrollDownIndicator-module--theme-light--2G2yA",
                relative: "scrollDownIndicator-module--relative--2Kmxy",
                scrollDownIndicator: "scrollDownIndicator-module--scrollDownIndicator--36u-R"
            }
        },
        "K/0E": function(e, t, a) {
            e.exports = {
                themeDark: "nextSectionIndicator-module--theme-dark--S9ULI",
                themeLight: "nextSectionIndicator-module--theme-light--1gyGQ",
                relative: "nextSectionIndicator-module--relative--lr8a2",
                nextSectionIndicator: "nextSectionIndicator-module--nextSectionIndicator--6xLbW"
            }
        },
        Qv3r: function(e, t, a) {
            var n = a("q1tI");

            function r(e) {
                return n.createElement("svg", e, n.createElement("path", {
                    d: "M8.02742 19.4043C8.02742 19.502 7.91613 19.5801 7.77581 19.5801C7.61613 19.5947 7.50484 19.5166 7.50484 19.4043C7.50484 19.3066 7.61613 19.2285 7.75645 19.2285C7.90161 19.2139 8.02742 19.292 8.02742 19.4043ZM6.52258 19.1846C6.48871 19.2822 6.58548 19.3945 6.73065 19.4238C6.85645 19.4727 7.00161 19.4238 7.03064 19.3262C7.05968 19.2285 6.96774 19.1162 6.82258 19.0723C6.69677 19.0381 6.55645 19.0869 6.52258 19.1846ZM8.66129 19.1016C8.52097 19.1357 8.42419 19.2285 8.43871 19.3408C8.45323 19.4385 8.57903 19.502 8.72419 19.4678C8.86452 19.4336 8.96129 19.3408 8.94677 19.2432C8.93226 19.1504 8.80161 19.0869 8.66129 19.1016ZM11.8452 0.390625C5.13387 0.390625 0 5.53223 0 12.3047C0 17.7197 3.37742 22.3535 8.20161 23.9844C8.82097 24.0967 9.03871 23.7109 9.03871 23.3936C9.03871 23.0908 9.02419 21.4209 9.02419 20.3955C9.02419 20.3955 5.6371 21.1279 4.92581 18.9404C4.92581 18.9404 4.37419 17.5195 3.58065 17.1533C3.58065 17.1533 2.47258 16.3867 3.65806 16.4014C3.65806 16.4014 4.8629 16.499 5.52581 17.6611C6.58548 19.5459 8.36129 19.0039 9.05323 18.6816C9.16452 17.9004 9.47903 17.3584 9.82742 17.0361C7.12258 16.7334 4.39355 16.3379 4.39355 11.6406C4.39355 10.2979 4.76129 9.62402 5.53548 8.76465C5.40968 8.44727 4.99839 7.13867 5.66129 5.44922C6.67258 5.13184 9 6.76758 9 6.76758C9.96774 6.49414 11.0081 6.35254 12.0387 6.35254C13.0694 6.35254 14.1097 6.49414 15.0774 6.76758C15.0774 6.76758 17.4048 5.12695 18.4161 5.44922C19.079 7.14355 18.6677 8.44727 18.5419 8.76465C19.3161 9.62891 19.7903 10.3027 19.7903 11.6406C19.7903 16.3525 16.9403 16.7285 14.2355 17.0361C14.6806 17.4219 15.0581 18.1543 15.0581 19.3018C15.0581 20.9473 15.0435 22.9834 15.0435 23.3838C15.0435 23.7012 15.2661 24.0869 15.8806 23.9746C20.7194 22.3535 24 17.7197 24 12.3047C24 5.53223 18.5565 0.390625 11.8452 0.390625ZM4.70323 17.2314C4.64032 17.2803 4.65484 17.3926 4.7371 17.4854C4.81452 17.5635 4.92581 17.5977 4.98871 17.5342C5.05161 17.4854 5.0371 17.373 4.95484 17.2803C4.87742 17.2021 4.76613 17.168 4.70323 17.2314ZM4.18064 16.8359C4.14677 16.8994 4.19516 16.9775 4.29194 17.0264C4.36935 17.0752 4.46613 17.0605 4.5 16.9922C4.53387 16.9287 4.48548 16.8506 4.38871 16.8018C4.29194 16.7725 4.21452 16.7871 4.18064 16.8359ZM5.74839 18.5742C5.67097 18.6377 5.7 18.7842 5.81129 18.877C5.92258 18.9893 6.0629 19.0039 6.12581 18.9258C6.18871 18.8623 6.15968 18.7158 6.0629 18.623C5.95645 18.5107 5.81129 18.4961 5.74839 18.5742ZM5.19677 17.8564C5.11935 17.9053 5.11935 18.0322 5.19677 18.1445C5.27419 18.2568 5.40484 18.3057 5.46774 18.2568C5.54516 18.1934 5.54516 18.0664 5.46774 17.9541C5.4 17.8418 5.27419 17.793 5.19677 17.8564Z",
                    fill: "black"
                }))
            }
            r.defaultProps = {
                width: "24",
                height: "25",
                viewBox: "0 0 24 25",
                fill: "none"
            }, e.exports = r, r.default = r
        },
        RXBc: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a("q1tI"),
                r = a.n(n),
                l = a("Bl7J"),
                i = (a("t+Ps"), a("kVbL"), a("wXU7")),
                o = a.n(i),
                c = a("ZKAt"),
                s = a("pW/P"),
                m = a("i2cy"),
                d = a("MJSQ"),
                u = a("ga0U");
            t.default = () => {
                const e = s.a.map(e => e.toLowerCase()),
                    {
                        0: t,
                        1: a
                    } = Object(n.useState)({
                        index: 0
                    }),
                    {
                        0: i,
                        1: p
                    } = Object(n.useState)();
                return r.a.createElement(l.a, {
                    fpState: t,
                    fpApi: i
                }, r.a.createElement(o.a, {
                    licenseKey: "cN1NI4_2-CkOcZFbI-ckoMNyom-QH6elxTD",
                    anchors: e,
                    scrollingSpeed: 1e3,
                    sliding: !1,
                    fitToSection: !1,
                    recordHistory: !1,
                    fitToSectionDelay: 0,
                    verticalCentered: !0,
                    responsiveWidth: 767,
                    onLeave: (e, t, n) => {
                        a(t)
                    },
                    normalScrollElements: ".description",
                    render: e => {
                        let {
                            state: t,
                            fullpageApi: a
                        } = e;
                        return p(a), r.a.createElement(o.a.Wrapper, null, r.a.createElement("div", {
                            className: "section"
                        }, r.a.createElement(c.default, null)), r.a.createElement("div", {
                            className: "section"
                        }, r.a.createElement(m.default, null)), r.a.createElement("div", {
                            className: "section"
                        }, r.a.createElement(d.default, null)), r.a.createElement("div", {
                            className: "section"
                        }, r.a.createElement(u.default, null)))
                    }
                }))
            }
        },
        T2mb: function(e, t, a) {
            e.exports = {
                themeDark: "firstPage-module--theme-dark--NZRBZ",
                themeLight: "firstPage-module--theme-light--3CXWC",
                relative: "firstPage-module--relative--1rWIp",
                flatImage: "firstPage-module--flatImage--iAE83",
                imageShade: "firstPage-module--imageShade--3R2d9",
                intro: "firstPage-module--intro--13uDr"
            }
        },
        ZKAt: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a("q1tI"),
                r = a.n(n),
                l = a("JoT5"),
                i = a.n(l),
                o = a("T2mb"),
                c = a.n(o),
                s = (a("Wbzz"), a("tBDR"));
            t.default = () => (Object(n.useEffect)(() => {
                window.pageExitTime = 1e3
            }, []), r.a.createElement("div", {
                className: [i.a.grid, i.a.grid11, i.a.alignCenter, i.a.gridG3].join(" ")
            }, r.a.createElement("div", {
                className: c.a.intro
            }, r.a.createElement("h2", null, "Hello,", r.a.createElement("br", null), "My name is Austin"), r.a.createElement("p", {
                className: [i.a.description, i.a.wordWLong].join(" ")
            }, "I'm currently a software engineer at Microsoft."), r.a.createElement("p", {
                className: [i.a.description, i.a.wordWLong].join(" ")
            }, "My areas of interest include problem-solving, cloud infrastructure, machine learning, and IoT."), r.a.createElement("p", {
                className: [i.a.description, i.a.wordWLong].join(" ")
            }, "With a detail oriented-focus, I enjoy creating simple but effective solutions to improve application performance, ease of maintenance, and user experience."), r.a.createElement("a", {
                "aria-label": "Download my resume",
                href: "./resume/austinpham_cv.pdf",
                className: i.a.link,
                target: "_blank"
            }, "Get My Resume")), r.a.createElement("div", {
                className: c.a.flatImage
            }, r.a.createElement(s.a, null), r.a.createElement("div", {
                className: c.a.imageShade
            }))))
        },
        ga0U: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a("q1tI"),
                r = a.n(n),
                l = a("zrLN"),
                i = a.n(l),
                o = a("JoT5"),
                c = a.n(o),
                s = a("Qv3r"),
                m = a.n(s),
                d = a("08cW"),
                u = a.n(d),
                p = a("tln1"),
                h = a.n(p),
                f = a("xqW3"),
                g = a.n(f);
            a("Wbzz");
            var C = () => r.a.createElement("div", {
                className: g.a.copyRight
            }, r.a.createElement("p", null, "Handcrafted by me © 2020."), r.a.createElement("p", null, "Design prototype is available on ", r.a.createElement("a", {
                rel: "noopener noreferrer",
                "aria-label": "Figma draft",
                href: "https://www.figma.com/file/K5yX0EjvrIfGmVtOCFuy9U/Portfolio-Minimal?node-id=0%3A1",
                target: "_blank"
            }, "Figma")));
            t.default = () => r.a.createElement("div", {
                className: [c.a.contentPage].join(" ")
            }, r.a.createElement("div", {
                className: i.a.wrapper
            }, r.a.createElement("h2", null, "Contact!"), r.a.createElement("p", {
                className: [c.a.description, c.a.wordWLong].join(" ")
            }, "Feel free to reach out if you want a to build something together, have a question, or just want to connect."), r.a.createElement("p", null, r.a.createElement("a", {
                "aria-label": "Email",
                href: "mailto:hello@auspham.dev",
                className: c.a.email,
                target: "_blank"
            }, "hello@auspham.dev")), r.a.createElement("div", {
                className: i.a.socialMedia
            }, r.a.createElement("div", null, r.a.createElement("a", {
                rel: "noopener noreferrer",
                "aria-label": "Github",
                href: "https://github.com/auspham",
                target: "_blank"
            }, r.a.createElement(m.a, null))), r.a.createElement("div", null, r.a.createElement("a", {
                rel: "noopener noreferrer",
                "aria-label": "LinkedIn",
                href: "https://www.linkedin.com/in/pnt263/",
                target: "_blank"
            }, r.a.createElement(u.a, null))), r.a.createElement("div", null, r.a.createElement("a", {
                rel: "noopener noreferrer",
                "aria-label": "Twitter",
                href: "https://twitter.com/thang_pham263",
                target: "_blank"
            }, r.a.createElement(h.a, null)))), r.a.createElement(C, null)))
        },
        kVbL: function(e, t, a) {},
        "t+Ps": function(e, t, a) {},
        tln1: function(e, t, a) {
            var n = a("q1tI");

            function r(e) {
                return n.createElement("svg", e, n.createElement("path", {
                    d: "M26.9162 8.88969C26.9353 9.15617 26.9353 9.42271 26.9353 9.6892C26.9353 17.8173 20.7488 27.1828 9.44162 27.1828C5.95811 27.1828 2.72209 26.1739 0 24.4227C0.494941 24.4798 0.970781 24.4988 1.48477 24.4988C4.35908 24.4988 7.00506 23.528 9.11801 21.872C6.41496 21.8148 4.14973 20.0445 3.36926 17.608C3.75 17.665 4.13068 17.7031 4.53047 17.7031C5.08248 17.7031 5.63455 17.627 6.14848 17.4938C3.33123 16.9227 1.21822 14.4481 1.21822 11.4595V11.3834C2.03672 11.8402 2.98857 12.1258 3.99738 12.1638C2.34129 11.0597 1.25631 9.17521 1.25631 7.04322C1.25631 5.90111 1.56082 4.85416 2.09385 3.94045C5.12051 7.67141 9.67002 10.1079 14.7715 10.3745C14.6763 9.9176 14.6192 9.44176 14.6192 8.96586C14.6192 5.5775 17.3603 2.81738 20.7677 2.81738C22.538 2.81738 24.1369 3.55977 25.2601 4.759C26.6496 4.49252 27.9821 3.97854 29.1623 3.27424C28.7054 4.70193 27.7346 5.90117 26.4593 6.66254C27.6966 6.52936 28.8959 6.18664 29.9999 5.7108C29.1625 6.92902 28.1154 8.014 26.9162 8.88969Z",
                    fill: "black"
                }))
            }
            r.defaultProps = {
                width: "30",
                height: "30",
                viewBox: "0 0 30 30",
                fill: "none"
            }, e.exports = r, r.default = r
        },
        xqW3: function(e, t, a) {
            e.exports = {
                themeDark: "copyRight-module--theme-dark--2KOxW",
                themeLight: "copyRight-module--theme-light--Kv4Er",
                relative: "copyRight-module--relative--2mmHw",
                copyRight: "copyRight-module--copy-right--YKw9B"
            }
        },
        zrLN: function(e, t, a) {
            e.exports = {
                themeDark: "fourthPage-module--theme-dark--3PbB5",
                themeLight: "fourthPage-module--theme-light--2J1mV",
                relative: "fourthPage-module--relative--3OBIL",
                socialMedia: "fourthPage-module--socialMedia--2DNIT",
                wrapper: "fourthPage-module--wrapper--3rXTz"
            }
        }
    }
]);
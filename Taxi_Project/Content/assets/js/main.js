! function (e) {
    "use strict";
    e(window).on("load", (function () {
        e(".preloader").fadeOut()
    })), e(".preloader").length > 0 && e(".preloaderCls").each((function () {
        e(this).on("click", (function (t) {
            t.preventDefault(), e(".preloader").css("display", "none")
        }))
    })), e.fn.vsmobilemenu = function (t) {
        var a = e.extend({
            menuToggleBtn: ".as-menu-toggle",
            bodyToggleClass: "as-body-visible",
            subMenuClass: "as-submenu",
            subMenuParent: "as-item-has-children",
            subMenuParentToggle: "as-active",
            meanExpandClass: "as-mean-expand",
            appendElement: '<span class="as-mean-expand"></span>',
            subMenuToggleClass: "as-open",
            toggleSpeed: 400
        }, t);
        return this.each((function () {
            var t = e(this);

            function s() {
                t.toggleClass(a.bodyToggleClass);
                var s = "." + a.subMenuClass;
                e(s).each((function () {
                    e(this).hasClass(a.subMenuToggleClass) && (e(this).removeClass(a.subMenuToggleClass), e(this).css("display", "none"), e(this).parent().removeClass(a.subMenuParentToggle))
                }))
            }
            t.find("li").each((function () {
                var t = e(this).find("ul");
                t.addClass(a.subMenuClass), t.css("display", "none"), t.parent().addClass(a.subMenuParent), t.prev("a").append(a.appendElement), t.next("a").append(a.appendElement)
            }));
            var n = "." + a.meanExpandClass;
            e(n).each((function () {
                e(this).on("click", (function (t) {
                    var s;
                    t.preventDefault(), s = e(this).parent(), e(s).next("ul").length > 0 ? (e(s).parent().toggleClass(a.subMenuParentToggle), e(s).next("ul").slideToggle(a.toggleSpeed), e(s).next("ul").toggleClass(a.subMenuToggleClass)) : e(s).prev("ul").length > 0 && (e(s).parent().toggleClass(a.subMenuParentToggle), e(s).prev("ul").slideToggle(a.toggleSpeed), e(s).prev("ul").toggleClass(a.subMenuToggleClass))
                }))
            })), e(a.menuToggleBtn).each((function () {
                e(this).on("click", (function () {
                    s()
                }))
            })), t.on("click", (function (e) {
                e.stopPropagation(), s()
            })), t.find("div").on("click", (function (e) {
                e.stopPropagation()
            }))
        }))
    }, e(".as-menu-wrapper").vsmobilemenu();
    var t = "";
    e(window).on("scroll", (function () {
        var a, s, n, o, i;
        a = e(".sticky-active"), s = "active", n = "will-sticky", o = e(window).scrollTop(), i = a.css("height"), a.parent().css("min-height", i), e(window).scrollTop() > 800 ? (a.parent().addClass(n), o > t ? a.removeClass(s) : a.addClass(s)) : (a.parent().css("min-height", "").removeClass(n), a.removeClass(s)), t = o, e(this).scrollTop() > 500 ? e(".scrollToTop").addClass("show") : e(".scrollToTop").removeClass("show")
    })), e(".scrollToTop").each((function () {
        e(this).on("click", (function (a) {
            return a.preventDefault(), e("html, body").animate({
                scrollTop: 0
            }, t / 3), !1
        }))
    })), e("[data-bg-src]").length > 0 && e("[data-bg-src]").each((function () {
        var t = e(this).attr("data-bg-src");
        e(this).css("background-image", "url(" + t + ")"), e(this).removeAttr("data-bg-src").addClass("background-image")
    })), e("[data-mask-src]").length > 0 && e("[data-mask-src]").each((function () {
        var t = e(this).attr("data-mask-src");
        e(this).css({
            "mask-image": "url(" + t + ")",
            "-webkit-mask-image": "url(" + t + ")"
        }), e(this).removeAttr("data-mask-src")
    })), e(".as-carousel").each((function () {
        var t = e(this);

        function a(e) {
            return t.data(e)
        }
        var s = '<button type="button" class="slick-prev"><i class="' + a("prev-arrow") + '"></i></button>',
            n = '<button type="button" class="slick-next"><i class="' + a("next-arrow") + '"></i></button>';
        e("[data-slick-next]").each((function () {
            e(this).on("click", (function (t) {
                t.preventDefault(), e(e(this).data("slick-next")).slick("slickNext")
            }))
        })), e("[data-slick-prev]").each((function () {
            e(this).on("click", (function (t) {
                t.preventDefault(), e(e(this).data("slick-prev")).slick("slickPrev")
            }))
        })), 1 == a("arrows") && (t.closest(".arrow-wrap").length || t.closest(".container").parent().addClass("arrow-wrap")), t.slick({
            dots: !!a("dots"),
            fade: !!a("fade"),
            arrows: !!a("arrows"),
            speed: a("speed") ? a("speed") : 1e3,
            asNavFor: !!a("asnavfor") && a("asnavfor"),
            autoplay: 0 != a("autoplay"),
            infinite: 0 != a("infinite"),
            slidesToShow: a("slide-show") ? a("slide-show") : 1,
            adaptiveHeight: !!a("adaptive-height"),
            centerMode: !!a("center-mode"),
            autoplaySpeed: a("autoplay-speed") ? a("autoplay-speed") : 8e3,
            centerPadding: a("center-padding") ? a("center-padding") : "0",
            focusOnSelect: 0 != a("focuson-select"),
            pauseOnFocus: !!a("pauseon-focus"),
            pauseOnHover: !!a("pauseon-hover"),
            variableWidth: !!a("variable-width"),
            vertical: !!a("vertical"),
            verticalSwiping: !!a("vertical"),
            prevArrow: a("prev-arrow") ? s : '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
            nextArrow: a("next-arrow") ? n : '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
            rtl: "rtl" == e("html").attr("dir"),
            responsive: [{
                breakpoint: 1600,
                settings: {
                    arrows: !!a("xl-arrows"),
                    dots: !!a("xl-dots"),
                    slidesToShow: a("xl-slide-show") ? a("xl-slide-show") : a("slide-show"),
                    centerMode: !!a("xl-center-mode"),
                    centerPadding: 0
                }
            }, {
                breakpoint: 1400,
                settings: {
                    arrows: !!a("ml-arrows"),
                    dots: !!a("ml-dots"),
                    slidesToShow: a("ml-slide-show") ? a("ml-slide-show") : a("slide-show"),
                    centerMode: !!a("ml-center-mode"),
                    centerPadding: 0
                }
            }, {
                breakpoint: 1200,
                settings: {
                    arrows: !!a("lg-arrows"),
                    dots: !!a("lg-dots"),
                    slidesToShow: a("lg-slide-show") ? a("lg-slide-show") : a("slide-show"),
                    centerMode: !!a("lg-center-mode") && a("lg-center-mode"),
                    centerPadding: 0
                }
            }, {
                breakpoint: 992,
                settings: {
                    arrows: !!a("md-arrows"),
                    dots: !!a("md-dots"),
                    slidesToShow: a("md-slide-show") ? a("md-slide-show") : 1,
                    centerMode: !!a("md-center-mode") && a("md-center-mode"),
                    centerPadding: 0
                }
            }, {
                breakpoint: 768,
                settings: {
                    arrows: !!a("sm-arrows"),
                    dots: !!a("sm-dots"),
                    slidesToShow: a("sm-slide-show") ? a("sm-slide-show") : 1,
                    centerMode: !!a("sm-center-mode") && a("sm-center-mode"),
                    centerPadding: 0
                }
            }, {
                breakpoint: 576,
                settings: {
                    arrows: !!a("xs-arrows"),
                    dots: !!a("xs-dots"),
                    slidesToShow: a("xs-slide-show") ? a("xs-slide-show") : 1,
                    centerMode: !!a("xs-center-mode") && a("xs-center-mode"),
                    centerPadding: 0
                }
            }]
        })
    })), e("[data-ani-duration]").each((function () {
        var t = e(this).data("ani-duration");
        e(this).css("animation-duration", t)
    })), e("[data-ani-delay]").each((function () {
        var t = e(this).data("ani-delay");
        e(this).css("animation-delay", t)
    })), e("[data-ani]").each((function () {
        var t = e(this).data("ani");
        e(this).addClass(t), e(".slick-current [data-ani]").addClass("as-animated")
    })), e(".as-carousel").on("afterChange", (function (t, a, s, n) {
        e(a.$slides).find("[data-ani]").removeClass("as-animated"), e(a.$slides[s]).find("[data-ani]").addClass("as-animated")
    }));
    var a, s, n, o = ".ajax-contact",
        i = "is-invalid",
        r = '[name="email"]',
        l = '[name="name"],[name="email"],[name="subject"],[name="message"]',
        c = e(".form-messages");

    function d() {
        var t = e(o).serialize();
        u() && jQuery.ajax({
            url: e(o).attr("action"),
            data: t,
            type: "POST"
        }).done((function (t) {
            c.removeClass("error"), c.addClass("success"), c.text(t), e(o + ' input:not([type="submit"]),' + o + " textarea").val("")
        })).fail((function (e) {
            c.removeClass("success"), c.addClass("error"), "" !== e.responseText ? c.html(e.responseText) : c.html("Oops! An error occured and your message could not be sent.")
        }))
    }

    function u() {
        var t, a = !0;
        return function (s) {
            s = s.split(",");
            for (var n = 0; n < s.length; n++) t = o + " " + s[n], e(t).val() ? (e(t).removeClass(i), a = !0) : (e(t).addClass(i), a = !1)
        }(l), e(r).val() && e(r).val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/) ? (e(r).removeClass(i), a = !0) : (e(r).addClass(i), a = !1), a
    }
    if (e(o).on("submit", (function (e) {
        e.preventDefault(), d()
    })), e(".ajax-booking").length > 0) {
        o = ".ajax-booking", r = '[name="email"]', i = "is-invalid", l = '[name="name"],[name="number"],[name="email"],[name="s-destination"],[name="e-destination"],[name="passenger"],[name="date"],[name="time"],[name="vehicle"],[name="message"]', c = e(".form-messages");

        function d() {
            var t = e(o).serialize();
            u() && jQuery.ajax({
                url: e(o).attr("action"),
                data: t,
                type: "POST"
            }).done((function (t) {
                c.removeClass("error"), c.addClass("success"), c.text(t), e(o + ' input:not([type="submit"]),' + o + " textarea").val("")
            })).fail((function (e) {
                c.removeClass("success"), c.addClass("error"), "" !== e.responseText ? c.html(e.responseText) : c.html("Oops! An error occured and your message could not be sent.")
            }))
        }

        function u() {
            var t, a = !0;
            return function (s) {
                s = s.split(",");
                for (var n = 0; n < s.length; n++) t = o + " " + s[n], e(t).val() ? (e(t).removeClass(i), a = !0) : (e(t).addClass(i), a = !1)
            }(l), e(r).val() && e(r).val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/) ? (e(r).removeClass(i), a = !0) : (e(r).addClass(i), a = !1), a
        }
        e(o).on("submit", (function (e) {
            e.preventDefault(), d()
        }))
    }

    function p(e) {
        return parseInt(e, 10)
    }
    a = ".sidemenu-wrapper", s = ".sideMenuCls", n = "show", e(".sideMenuToggler").on("click", (function (t) {
        t.preventDefault(), e(a).addClass(n)
    })), e(a).on("click", (function (t) {
        t.stopPropagation(), e(a).removeClass(n)
    })), e(a + " > div").on("click", (function (t) {
        t.stopPropagation(), e(a).addClass(n)
    })), e(s).on("click", (function (t) {
        t.preventDefault(), t.stopPropagation(), e(a).removeClass(n)
    })),
        function (t, a, s, n) {
            e(a).on("click", (function (a) {
                a.preventDefault(), e(t).addClass(n)
            })), e(t).on("click", (function (a) {
                a.stopPropagation(), e(t).removeClass(n)
            })), e(t).find("form").on("click", (function (a) {
                a.stopPropagation(), e(t).addClass(n)
            })), e(s).on("click", (function (a) {
                a.preventDefault(), a.stopPropagation(), e(t).removeClass(n)
            }))
        }(".popup-search-box", ".searchBoxToggler", ".searchClose", "show"), e(".popup-image").magnificPopup({
            type: "image",
            gallery: {
                enabled: !0
            }
        }), e(".popup-video").magnificPopup({
            type: "iframe"
        }), e(".popup-content").magnificPopup({
            type: "inline",
            midClick: !0
        }), e(".filter-active").imagesLoaded((function () {
            if (e(".filter-active").length > 0) {
                var t = e(".filter-active").isotope({
                    itemSelector: ".filter-item",
                    filter: "*",
                    masonry: {
                        columnWidth: 1
                    }
                });
                e(".filter-menu-active").on("click", "button", (function () {
                    var a = e(this).attr("data-filter");
                    t.isotope({
                        filter: a
                    })
                })), e(".filter-menu-active").on("click", "button", (function (t) {
                    t.preventDefault(), e(this).addClass("active"), e(this).siblings(".active").removeClass("active")
                }))
            }
        })), e(".filter-active-cat1").imagesLoaded((function () {
            if (e(".filter-active-cat1").length > 0) {
                var t = e(".filter-active-cat1").isotope({
                    itemSelector: ".filter-item",
                    filter: ".cat1",
                    masonry: {
                        columnWidth: 1
                    }
                });
                e(".filter-menu-active").on("click", "button", (function () {
                    var a = e(this).attr("data-filter");
                    t.isotope({
                        filter: a
                    })
                })), e(".filter-menu-active").on("click", "button", (function (t) {
                    t.preventDefault(), e(this).addClass("active"), e(this).siblings(".active").removeClass("active")
                }))
            }
        })), e(".date-pick").datetimepicker({
            timepicker: !1,
            datepicker: !0,
            format: "d-m-y",
            step: 10
        }), e(".time-pick").datetimepicker({
            datepicker: !1,
            format: "H:i",
            step: 30
        }), e(".counter-number").counterUp({
            delay: 10,
            time: 1e3
        }), e.fn.vsTab = function (t) {
            var a = e.extend({
                sliderTab: !1,
                tabButton: "button"
            }, t);
            e(this).each((function () {
                var t = e(this),
                    s = t.find(a.tabButton);
                t.append('<span class="indicator"></span>');
                var n = t.find(".indicator");
                if (s.on("click", (function (t) {
                    t.preventDefault();
                    var s = e(this);
                    s.addClass("active").siblings().removeClass("active"), a.sliderTab ? e(o).slick("slickGoTo", s.data("slide-go-to")) : r()
                })), a.sliderTab) {
                    var o = t.data("asnavfor"),
                        i = 0;
                    s.each((function () {
                        var s = e(this);
                        s.attr("data-slide-go-to", i), i++, s.hasClass("active") && e(o).slick("slickGoTo", s.data("slide-go-to")), e(o).on("beforeChange", (function (e, s, n, o) {
                            t.find(a.tabButton + '[data-slide-go-to="' + o + '"]').addClass("active").siblings().removeClass("active"), r()
                        }))
                    }))
                }

                function r() {
                    var o = t.find(a.tabButton + ".active"),
                        i = o.css("height"),
                        r = o.css("width"),
                        l = o.position().top + "px",
                        c = o.position().left + "px";
                    n.get(0).style.setProperty("--height-set", i), n.get(0).style.setProperty("--width-set", r), n.get(0).style.setProperty("--pos-y", l), n.get(0).style.setProperty("--pos-x", c), e(s).first().position().left == o.position().left ? n.addClass("start").removeClass("center").removeClass("end") : e(s).last().position().left == o.position().left ? n.addClass("end").removeClass("center").removeClass("start") : n.addClass("center").removeClass("start").removeClass("end")
                }
                r()
            }))
        }, e(".taxi-tab").length && e(".taxi-tab").vsTab({
            sliderTab: !0,
            tabButton: ".as-btn"
        }), e(".progress-bar").waypoint((function () {
            e(".progress-bar").css({
                animation: "animate-positive 1.8s",
                opacity: "1"
            })
        }), {
            offset: "75%"
        }), e.fn.sectionPosition = function (t, a) {
            e(this).each((function () {
                var s, n, o, i, r, l = e(this);
                s = Math.floor(l.height() / 2), n = l.attr(t), o = l.attr(a), i = p(e(o).css("padding-top")), r = p(e(o).css("padding-bottom")), "top-half" === n ? (e(o).css("padding-bottom", r + s + "px"), l.css("margin-top", "-" + s + "px")) : "bottom-half" === n && (e(o).css("padding-top", i + s + "px"), l.css("margin-bottom", "-" + s + "px"))
            }))
        };
    e("[data-sec-pos]").length && e("[data-sec-pos]").imagesLoaded((function () {
        e("[data-sec-pos]").sectionPosition("data-sec-pos", "data-pos-for")
    })), e.fn.shapeMockup = function () {
        e(this).each((function () {
            var t = e(this),
                a = t.data("top"),
                s = t.data("right"),
                n = t.data("bottom"),
                o = t.data("left");
            t.css({
                top: a,
                right: s,
                bottom: n,
                left: o
            }).removeAttr("data-top").removeAttr("data-right").removeAttr("data-bottom").removeAttr("data-left").parent().addClass("shape-mockup-wrap")
        }))
    }, e(".shape-mockup") && e(".shape-mockup").shapeMockup(), e('[data-bs-toggle="tab"]').on("shown.bs.tab", (function (t) {
        e(".as-carousel").slick("setPosition")
    })), window.addEventListener("contextmenu", (function (e) {
        e.preventDefault()
    }, false), !1), document.onkeydown = function (e) {
        return 123 != event.keyCode && ((!e.ctrlKey || !e.shiftKey || e.keyCode != "I".charCodeAt(0)) && ((!e.ctrlKey || !e.shiftKey || e.keyCode != "C".charCodeAt(0)) && ((!e.ctrlKey || !e.shiftKey || e.keyCode != "J".charCodeAt(0)) && ((!e.ctrlKey || e.keyCode != "U".charCodeAt(0)) && void 0))))
    }
}(jQuery);
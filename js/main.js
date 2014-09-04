$(function () {
    $("a[href*=#]:not([href=#])").click(function () {
        var e = this.hash;
        setTimeout(function () {
            window.location.hash = e
        }, 1e3);
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var t = $(this.hash);
            t = t.length ? t : $("[name=" + this.hash.slice(1) + "]");
            if (t.length) {
                $("html,body").animate({
                    scrollTop: t.offset().top
                }, 1e3);
                return false
            }
        }
    })
});
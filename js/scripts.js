
jQuery(document).ready(function($) {

    // Page Loader
    function imgLoadedCallback() {
        showPage();
    }

    function preloadimages(n) {
        function o() {
            ++a == n.length && imgLoadedCallback()
        }
        for (var e = [], a = 0, t = (n = "object" != typeof n ? [n] : n, 0); t < n.length; t++) e[t] = new Image, e[t].src = n[t], e[t].onload = function() {
            a / n.length * 100, o()
        }, e[t].onerror = function() {
            o()
        }
    }! function() {
        for (var n = document.getElementsByTagName("img"), o = [], e = 0; e < n.length; e++) o.push(n[e].src);
        preloadimages(o)
        if (o.length == 0) {
            showPage();
        }
    }();

    function showPage() {
        // End Loading
        
    }


    // Stciky Header
    $(window).scroll(function(){

        var top = $(document).scrollTop();
        
        if(top >= 100){
            $('.navigation-wrapper').addClass('fixed-top').addClass('animate__slideInDown');
        }else{
            $('.navigation-wrapper').removeClass('fixed-top').removeClass('animate__slideInDown');
        }

    });

});



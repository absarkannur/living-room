
jQuery(document).ready(function($) {

    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        triggerElement: "#js_brands",
    })
    .on('start', function () {
        brandSection();
    })
    .addTo( controller );
    
    function brandSection() {
        $('.js_b1').removeClass('visibility').addClass('animate__fadeInUp');
        setTimeout(function(){
            $('.js_b2').animate({width: '20%'}, function(){
                var li = [ 0, 1, 2, 3, 4, 5 ];
                li.map( ( item, i ) => {
                    setTimeout(function() {
                        $('.brands-details').eq(item).removeClass('visibility').addClass('animate__slideInUp');
                    },(i*100));
                });
            });
        },600);
    }

    // ----------

    new ScrollMagic.Scene({
        triggerElement: "#js_services",
     })
    .on('start', function () {
        serviceSection();
    })
    .addTo( controller );
    
    function serviceSection(){
        $('.js_s1').removeClass('visibility').addClass('animate__slideInLeft');
        $('.js_s2').animate({width: '100%'}, 1000, function(){
            var li = [ 0, 1, 2, 3, 4, 5, 6, 7 ];
                li.map( ( item, i ) => {
                    setTimeout(function() {
                        $('.services-list .list-item').eq(item).removeClass('visibility');
                        $('.services-list .list-item .line').eq(item).animate({width: '100%'});
                        setTimeout(function(){
                            $('.services-list .list-item').eq(item).find('span').removeClass('visibility').addClass('animate__flipInX');
                        },600);
                    },(i*100));
                });
        });
    }

    // ----------

    new ScrollMagic.Scene({
        triggerElement: "#js_footer",
     })
    .on('start', function () {
        footerSection();
    })
    .addTo( controller );
    
    function footerSection(){

        $('.js_f1').removeClass('visibility').addClass('animate__slideInUp');

        setTimeout(function(){
            $('.js_f4').removeClass('visibility').addClass('animate__fadeInLeft'); // Balloon Logo
            setTimeout(function(){

                $('.js_f5').animate({width: '92%'},1000, function(){

                    $('.js_f2').removeClass('visibility').addClass('animate__slideInLeft');
                    $('.js_f3').removeClass('visibility').addClass('animate__slideInRight');

                });
            },200)
        },600)
        
        
        
    }


});
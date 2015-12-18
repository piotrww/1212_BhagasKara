$( document ).ready(function() {
    console.log('dziala');

    //$('#ArrowLeft').click(function() {
    //    console.log("Klik na lewy");
    //});
    //
    //
    //
    //$('#ArrowRight').click(function() {
    //    console.log("Klik na prawy");
    //});

///

    $(window).on('scroll', function () {
        var $topOffset = $(this).scrollTop();
        if ($topOffset >= 2500) {
            console.log('juz!');


            $({countNum: $('.counter:eq(0)').text()}).animate({countNum: 365}, {
                duration: 2000,
                timing:'ease-in-out',
                step: function() {
                    $('.counter:eq(0)').text(Math.floor(this.countNum));
                },
                complete: function() {
                    $('.counter:eq(0)').text(this.countNum);
                }
            });

/// Number counter 2

            $({countNum: $('.counter:eq(1)').text()}).animate({countNum: 98}, {
                duration: 2000,
                easing:'linear',
                step: function() {
                    $('.counter:eq(1)').text(Math.floor(this.countNum));
                },
                complete: function() {
                    $('.counter:eq(1)').text(this.countNum);
                }
            });

// Number counter 3


            $({countNum: $('.counter:eq(2)').text()}).animate({countNum: 69}, {
                duration: 2000,
                easing:'linear',
                step: function() {
                    $('.counter:eq(2)').text(Math.floor(this.countNum));
                },
                complete: function() {
                    $('.counter:eq(2)').text(this.countNum);
                }
            });


////Number counter 4


            $({countNum: $('.counter:eq(3)').text()}).animate({countNum: 1642}, {
                duration: 2000,
                easing:'linear',
                step: function() {
                    $('.counter:eq(3)').text(Math.floor(this.countNum));
                },
                complete: function() {
                    $('.counter:eq(3)').text(this.countNum);
                }
            });




        }


    });

});







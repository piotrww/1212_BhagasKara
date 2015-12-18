$( document ).ready(function() {
    console.log('dziala');



///Function start when scroll top is 2500 or more.

    $(window).on('scroll', function () {
        var $topOffset = $(this).scrollTop();
        var $myWindowValueStart = 2500;
        if ($topOffset >= $myWindowValueStart) {
            console.log('juz!');

            var myArrEq = [0,1,2,3];
            var myArrValues = [365, 98, 69, 1642];
            var eachValue;

                for (i=0; i<myArrEq.length; i++) {

                }
            return


            function countNumbers() {
                            $({countNum: $('.counter:eq(0)').text()}).animate({countNum: 365}, {
                duration: 2000,
                easing:'linear',
                step: function() {
                    $('.counter:eq(0)').text(Math.floor(this.countNum));
                },
                complete: function() {
                    $('.counter:eq(0)').text(this.countNum);
                }
            });


            }


        }


    });

});


//
/////Let's build function :)
//
//
//
//
//
//
//
////Number counter 1
//            $({countNum: $('.counter:eq(0)').text()}).animate({countNum: 365}, {
//                duration: 2000,
//                easing:'linear',
//                step: function() {
//                    $('.counter:eq(0)').text(Math.floor(this.countNum));
//                },
//                complete: function() {
//                    $('.counter:eq(0)').text(this.countNum);
//                }
//            });
//
///// Number counter 2
//
//            $({countNum: $('.counter:eq(1)').text()}).animate({countNum: 98}, {
//                duration: 2000,
//                easing:'linear',
//                step: function() {
//                    $('.counter:eq(1)').text(Math.floor(this.countNum));
//                },
//                complete: function() {
//                    $('.counter:eq(1)').text(this.countNum);
//                }
//            });
//
//// Number counter 3
//
//
//            $({countNum: $('.counter:eq(2)').text()}).animate({countNum: 69}, {
//                duration: 2000,
//                easing:'linear',
//                step: function() {
//                    $('.counter:eq(2)').text(Math.floor(this.countNum));
//                },
//                complete: function() {
//                    $('.counter:eq(2)').text(this.countNum);
//                }
//            });
//
//
//////Number counter 4
//
//
//            $({countNum: $('.counter:eq(3)').text()}).animate({countNum: 1642}, {
//                duration: 2000,
//                easing:'linear',
//                step: function() {
//                    $('.counter:eq(3)').text(Math.floor(this.countNum));
//                },
//                complete: function() {
//                    $('.counter:eq(3)').text(this.countNum);
//                }
//            });
//
//
//
//
//        }
//
//
//    });
//
//
//
//
//});
//
//
//

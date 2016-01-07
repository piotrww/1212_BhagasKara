$( document ).ready(function() {
    console.log('ready');



///Function start when scroll top is 2500 or more.

    $(window).on('scroll', function () {
        var $topOffset = $(this).scrollTop();
        var $myWindowValueStart = 2500;
        if ($topOffset >= $myWindowValueStart) {
            console.log('juz!');

<<<<<<< HEAD
            var myArrEq = [0,1,2,3];
            var myArrValues = [365, 98, 69, 1642];
            var eachValue;

                for (i=0; i<myArrEq.length; i++) {

                }
            //return


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

=======
            liczLiczbyPowyswietleniu();
>>>>>>> a1eb1dc1113b5e0577ec44adc9b7b3dcdc3948cc

        }
    })
})

function liczLiczbyPowyswietleniu() {
    var myArr = [365,98,200,1756];

    for (var i=0;i<myArr.length;i++) {
        liczLiczbe(i,  myArr[i]);
    }
}


function liczLiczbe(index, numb) {
    var $myCounter =  $('.counter:eq('+ index +')');
    $({countNum: $myCounter.text()}).animate({countNum: numb}, {
        duration: 2000,
        easing: 'linear',
        step: function () {
            $myCounter.text(Math.floor(this.countNum));
        },
        complete: function () {
            $myCounter.text(this.countNum);
        }
    });
}
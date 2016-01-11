$( document ).ready(function() {
    console.log('ready');

    var myAnimated = false;

///Function start when scroll top is 2500 or more.

    $(window).on('scroll', function () {
        var $topOffset = $(this).scrollTop();
        var $myWindowValueStart = 2500;
        if ($topOffset >= $myWindowValueStart && !myAnimated ) { // myAnimated == false - dzialaloby ale to zbedny zapis
            myAnimated = true;
            console.log('juz!');
            liczLiczbyPowyswietleniu();

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

    var times = 100;

    for(var i=0; i < times; i++) {
        setTimeout(licz, i*20, numb, i);
    }

    function licz(numb, i) {
        $myCounter.text(Math.floor(numb * i/times));
    }
}

//
//function liczLiczbe(index, numb) {
//    var $myCounter =  $('.counter:eq('+ index +')');
//    $({countNum: $myCounter.text()}).animate({countNum: numb}, {
//        duration: 2000,
//        easing: 'linear',
//        step: function () {
//            $myCounter.text(Math.floor(this.countNum));
//        },
//        complete: function () {
//            $myCounter.text(this.countNum);
//        }
//    });
//}
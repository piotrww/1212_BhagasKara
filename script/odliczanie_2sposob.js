$( document ).ready(function() {
    console.log('ready');

///Function start when scroll top is 2500 or more.

    $(window).on('scroll', probojLiczycLiczby);




    function probojLiczycLiczby () {
        var $topOffset = $(this).scrollTop();
        var $myWindowValueStart = 2500;

        if ($topOffset >= $myWindowValueStart) { // myAnimated == false - dzialaloby ale to zbedny zapis
            console.log('juz!');
            liczLiczbyPowyswietleniu();
          $(window).off('scroll', probojLiczycLiczby) //wylaczenie tego co na starcie
        }
    }

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



})
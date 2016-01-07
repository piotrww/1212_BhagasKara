$( document ).ready(function() {
    console.log('dziala');



///Function start when scroll top is 2500 or more.

    $(window).on('scroll', function () {
        var $topOffset = $(this).scrollTop();
        var $myWindowValueStart = 2000;

        var $progBar1 = $('.prog > [id^=progBar]');

        if ($topOffset >= $myWindowValueStart) {
            console.log('juz przewinales!');
            $progBar1.addClass('animateProgBar');

            window.setTimeout(addSecondAnimation ,4500);

            function addSecondAnimation() {
                $progBar1.addClass('animateProgBar2');

            }



        }


    })


})

$( document ).ready(function() {
    console.log( "ready!" );

//Sticky menu with showing active paragraph
    var $body = $('body');
    var $secGrey = $('.CmyGrey');
    var $antyJump = $('.antyJump');
    var menu = $(".B_myWhite");
    var paragraphs = $("section");
    var links = $("nav a");

    $(window).on('scroll', function () {
        tryCreateStickyMenu() // ine funkcje reagujace na scroll
    })


    var lastPositionTop = 0;

    function tryCreateStickyMenu(){
        var menuHeight = menu.height();
        if(menu.hasClass("sticky") === false && $(this).scrollTop() > menu.offset().top){
            lastPositionTop = menu.offset().top;
            menu.addClass("sticky"); //if has no class, please add class.

            //$secGrey.css("background-color", "red"); //anty jump effect. SPROBOWAC TU Z DIV.
                        //$antyJump.css("height", stickyHeight+"px"); //anty jump effect. SPROBOWAC TU Z DIV.
                        //console.log(stickyHeight);
            $antyJump.css("height", menuHeight+"px");


        }
        if(menu.hasClass("sticky") && $(this).scrollTop() < lastPositionTop){
            menu.removeClass("sticky");
            menu.animate({

            }, 5000);
        }

        paragraphs.each(function(index){ // This paragraph index is calculated in loop (JS func).
            if(index + 1 == paragraphs.length){ // last paragraph
                if( paragraphs.eq(index).offset().top < $(window).scrollTop()){
                    links.eq(index).addClass("active");
                }
                else {
                    links.eq(index).removeClass("active");
                }
            }
            else {
                if( paragraphs.eq(index).offset().top < $(window).scrollTop() &&  paragraphs.eq(index + 1).offset().top > $(window).scrollTop()){
                    links.eq(index).addClass("active");
                }
                else {
                    links.eq(index).removeClass("active");
                }
            }

        });

    }




//F, SLIDER, people

        var scrollingTime = 1000;
        var currentSlideIndex = 0;


        var $box = $(".wrapperVis");
        var $slaids = $box.find('.wrapper');
        var $slaid = $slaids.find('.slid');

        var numberOfSlaids = $slaid.length;


        var first3Slaids = $slaids.find('.slid:lt(3)').clone();
        var lastSlaid = $slaids.find('.slid:last-child').clone();

        $slaids.append(first3Slaids);
        $slaids.prepend(lastSlaid);

        $('#ArrowLeft').on('click', moveLeft);
        $('#ArrowRight').on('click', moveRight);


        function moveLeft() {
            console.log("click left");
            $slaids.animate({
                'margin-left': '+=250px'
            }, 800, goToLastWhenStart)

        }

        function moveRight() {
            console.log("click right");
            $slaids.animate({
                'margin-left': '-=250px'
            }, 800, backToStartWhenFinish)
        }

        function goToLastWhenStart() {
            currentSlideIndex--;
            if (currentSlideIndex === -1) {
                currentSlideIndex = numberOfSlaids - 1;
                $slaids.css('margin-left', -250 * numberOfSlaids + 'px');
            }
        }

        function backToStartWhenFinish() {
            currentSlideIndex++;

            if (currentSlideIndex === numberOfSlaids) {
                currentSlideIndex = 0;
                $slaids.css('margin-left', 0);
            }

        }

//Bar animation

    $(window).on('scroll', function () {
        var $topOffset = $(this).scrollTop();
        var $myWindowValueStart = 1640;
        if ($topOffset >= $myWindowValueStart) {
            console.log("scroolStart");



           $("#progBar1").addClass('animationBar1');
           $("#progBar2").addClass('animationBar2');
           $("#progBar3").addClass('animationBar3');
           $("#progBar4").addClass('animationBar4');


        }










//Count 4 numbers


///Function start when scroll top is 500 or more.


        $(window).on('scroll', tryToCount);



        function tryToCount () {
            var $topOffset = $(window).scrollTop();
            var $myWindowValueStart = 2590;

            if ($topOffset >= $myWindowValueStart) { // myAnimated == false - dzialaloby ale to zbedny zapis
                console.log('Already scrolled!');
                CountNumbersAfterScrool();
                $(window).off('scroll', tryToCount);//wylaczenie tego co na starcie
            }
        }

        function CountNumbersAfterScrool() {
            var myArr = [365,98,200,1756];

            for (var i=0;i<myArr.length;i++) {
                CountNumber(i,  myArr[i]);
                console.log(i);
            }
        }

        function CountNumber(index, numb) {
            var $myCounter =  $('.counter:eq('+ index +')');

            var times = 100;

            for(var i=0; i < times; i++) {
                setTimeout(count, i*20, numb, i);
            }

            function count(numb, i) {
                $myCounter.text(Math.floor(numb * i/times));
            }
        }



//Slider

        var speedOfScrolling = 4100;
        var currentSlaid = 1;

        var $opakowanie = $(".HRwrapper");
        var $slajdy = $opakowanie.find('.AllSlaids');
        var $slajd = $slajdy.find('.slaid');


        setInterval(function() {
                $slajdy.animate(
                    {'margin-left': '-=750px'},
                    2000, revertToFirstSlaid()
                );
            },
            speedOfScrolling);


        function revertToFirstSlaid() {
            currentSlaid++;//Ale czemu tu też, bo zlicza?

            if(currentSlaid === $slajd.length) {
                currentSlaid = 1;
                $slajdy.css('margin-left', 0);
            }

        }

















//menu small screen


    $('.menu_trigger').click(function() {

        $('.belt_menu li').toggle('visibility')
    });
//menu revert from smaller to bigger

    $(window).on('resize', function(){
        var win = $(this); //this = window
        if (win.width() >= 480) {
            $('.belt_menu li').css('display', '');

        }
    });






//photoShow

    $('.photoShow img').on("click", function() {
        var src = $(this).attr("src");
        var div = $("<div class='popupImg'><img src=" + src + "/></div>");
        $('body').append(div);

        div.on("click", function() {
            div.remove()

        });

    });






    //name validation
    $('#name').on('blur', function() {
        var input = $(this);
        var name_length = input.val().length;
        if(name_length >= 5 && name_length <= 15){
            input.removeClass("invalid").addClass("valid");
            input.next('.myKomunikat').text("OK!").removeClass("blad").addClass("ok");
        }
        else{
            input.removeClass("valid").addClass("invalid");
            input.next('.myKomunikat').text("Please enter more then 4 and less than 16 signs!").removeClass("ok").addClass("blad");

        }
    });

// email validation, check

    $('#email').on('blur', function() {
        var input = $(this);
        var pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        var is_email = pattern.test(input.val());
        if(is_email){
            input.removeClass("invalid").addClass("valid");
            input.next('.myKomunikat').text("OK!").removeClass("blad").addClass("ok");
        }
        else{
            input.removeClass("valid").addClass("invalid");
            input.next('.myKomunikat').text("Please enter correct email!").removeClass("ok").addClass("blad");
        }
    });

    //message validation

    $('#message').on('blur', function() {
        var input = $(this);
        var message = $(this).val();
        if(message){
            input.removeClass("invalid").addClass("valid");
            input.next('.myKomunikat').text("OK!").removeClass("blad").addClass("ok");
        }
        else{
            input.removeClass("valid").addClass("invalid");
            input.next('.myKomunikat').text("Please write something!").removeClass("ok").addClass("blad");
        }
    });





    //Po próbie wysłania formularza
    $('#submit button').click(function(event){
        var name = $('#name');
        var email = $('#email');
        var message = $('#message');

        if(name.hasClass('valid') && email.hasClass('valid') && message.hasClass('valid')){
            alert("Pomyślnie wysłano formularz.");
        }
        else {
            event.preventDefault();
            alert("Uzupełnij wszystkie pola!");
        }
    });


  });

});


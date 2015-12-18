$( document ).ready(function() {
    console.log( "ready!" );

//Sticky menu

    $(function(){

        //moze tez $(window).scroll()

        var menu = $(".B_myWhite");
        var lastPositionTop = 0;
        var menuHeight = menu.height();
        var paragraphs = $("section");
        var links = $("nav a");

        $(window).on("scroll", function(){
            if(menu.hasClass("sticky") === false && $(this).scrollTop() > menu.offset().top){
                lastPositionTop = menu.offset().top;
                menu.addClass("sticky"); //dodanie klasy, ale po spr. czy nie ma jej.
                menu.animate({
                 //   height: (menuHeight).toString() + "px"
                }, 500);
            }
            if(menu.hasClass("sticky") && $(this).scrollTop() < lastPositionTop){
                menu.removeClass("sticky");
                menu.animate({
                  //  height: (menuHeight).toString() + "px"
                }, 500);
            }

            paragraphs.each(function(index){ // index tego paragrafu, wylicza z petli JS.
                if(index + 1 == paragraphs.length){ // ostatni paragraf
                    if( paragraphs.eq(index).offset().top < $(window).scrollTop()){
                        links.eq(index).addClass("active");
                    }
                    else {
                        links.eq(index).removeClass("active");
                    }
                }
                else {
                    if( paragraphs.eq(index).offset().top < $(window).scrollTop() &&  paragraphs.eq(index + 1).offset().top > $(window).scrollTop()){
                        links.eq(index).addClass("active"); // wylacza po wlaczeniu, jak zjedziemy np z pkt 3 do pkt 6.
                    }
                    else {
                        links.eq(index).removeClass("active");
                    }
                }

            });

        });




    });

//people





















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
            input.next('.myKomunikat').text("Wprowadzono poprawną nazwę.").removeClass("blad").addClass("ok");
        }
        else{
            input.removeClass("valid").addClass("invalid");
            input.next('.myKomunikat').text("Nazwa musi mieć więcej niż 4 i mniej niż 16 znaków!").removeClass("ok").addClass("blad");

        }
    });

// email validation, check

    $('#email').on('blur', function() {
        var input = $(this);
        var pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        var is_email = pattern.test(input.val());
        if(is_email){
            input.removeClass("invalid").addClass("valid");
            input.next('.myKomunikat').text("Wprowadzono poprawny email.").removeClass("blad").addClass("ok");
        }
        else{
            input.removeClass("valid").addClass("invalid");
            input.next('.myKomunikat').text("Wprowadź poprawny email!").removeClass("ok").addClass("blad");
        }
    });

    //message validation

    $('#message').on('blur', function() {
        var input = $(this);
        var message = $(this).val();
        if(message){
            input.removeClass("invalid").addClass("valid");
            input.next('.myKomunikat').text("Wprowadzono poprawną wiadomość.").removeClass("blad").addClass("ok");
        }
        else{
            input.removeClass("valid").addClass("invalid");
            input.next('.myKomunikat').text("Wiadomość nie może być pusta!").removeClass("ok").addClass("blad");
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
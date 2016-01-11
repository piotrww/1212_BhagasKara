$( document ).ready(function() {
    console.log('dziala');
// name validation, please select input


    $("label").on('focus', function() {
       $(this).addClass(".myfocus");

    });

    $("label").focusin(function() {
      console.log("coto");

    });
//
//
//    //$(".BackFramE label").on('click', function() {
//    //    $(this).addClass('myfocus').siblings().removeClass('myfocus');
//    //
//    //});
//
//
//
//
//
//    //name validation
//    $('#name').on('blur', function() {
//        var input = $(this);
//        var name_length = input.val().length;
//        if(name_length >= 2 && name_length <= 20){
//            input.removeClass("invalid").addClass("valid");
//            input.next('.myKomunikat').text("Wprowadzono poprawn¹ nazwê.").removeClass("blad").addClass("ok");
//        }
//        else{
//            input.removeClass("valid").addClass("invalid");
//            input.next('.myKomunikat').text("Nazwa musi mieæ wiêcej ni¿ 1 znak i mniej ni¿ 20 znaków!").removeClass("ok").addClass("blad");
//
//        }
//    });
//
//// email validation, check
//
//    $('#email').on('blur', function() {
//        var input = $(this);
//        var pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
//        var is_email = pattern.test(input.val());
//        if(is_email){
//            input.removeClass("invalid").addClass("valid");
//            input.next('.myKomunikat').text("Wprowadzono poprawny email.").removeClass("blad").addClass("ok");
//        }
//        else{
//            input.removeClass("valid").addClass("invalid");
//            input.next('.myKomunikat').text("WprowadŸ poprawny email!").removeClass("ok").addClass("blad");
//        }
//    });
//
//    //message validation
//
//    $('#message').on('blur', function() {
//        var input = $(this);
//        var message = $(this).val();
//        if(message){
//            input.removeClass("invalid").addClass("valid");
//            input.next('.myKomunikat').text("Wprowadzono poprawn¹ wiadomoœæ.").removeClass("blad").addClass("ok");
//        }
//        else{
//            input.removeClass("valid").addClass("invalid");
//            input.next('.myKomunikat').text("Wiadomoœæ nie mo¿e byæ pusta!").removeClass("ok").addClass("blad");
//        }
//    });
//
//
//
//
//
//    //Po próbie wys³ania formularza
//    $('#submit button').click(function(event){
//        var name = $('#name');
//        var email = $('#email');
//        var message = $('#message');
//
//        if(name.hasClass('valid') && email.hasClass('valid') && message.hasClass('valid')){
//            alert("Pomyœlnie wys³ano formularz.");
//        }
//        else {
//            event.preventDefault();
//            alert("Uzupe³nij wszystkie pola!");
//        }
//    });



});







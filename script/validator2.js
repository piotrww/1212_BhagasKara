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
//            input.next('.myKomunikat').text("Wprowadzono poprawn� nazw�.").removeClass("blad").addClass("ok");
//        }
//        else{
//            input.removeClass("valid").addClass("invalid");
//            input.next('.myKomunikat').text("Nazwa musi mie� wi�cej ni� 1 znak i mniej ni� 20 znak�w!").removeClass("ok").addClass("blad");
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
//            input.next('.myKomunikat').text("Wprowad� poprawny email!").removeClass("ok").addClass("blad");
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
//            input.next('.myKomunikat').text("Wprowadzono poprawn� wiadomo��.").removeClass("blad").addClass("ok");
//        }
//        else{
//            input.removeClass("valid").addClass("invalid");
//            input.next('.myKomunikat').text("Wiadomo�� nie mo�e by� pusta!").removeClass("ok").addClass("blad");
//        }
//    });
//
//
//
//
//
//    //Po pr�bie wys�ania formularza
//    $('#submit button').click(function(event){
//        var name = $('#name');
//        var email = $('#email');
//        var message = $('#message');
//
//        if(name.hasClass('valid') && email.hasClass('valid') && message.hasClass('valid')){
//            alert("Pomy�lnie wys�ano formularz.");
//        }
//        else {
//            event.preventDefault();
//            alert("Uzupe�nij wszystkie pola!");
//        }
//    });



});







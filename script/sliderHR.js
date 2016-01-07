$( document ).ready(function() {
    console.log( "ready!" );


    var szybkoscPrzewijania = 1000;
    var obecnySlajd = 1;



    var $opakowanie = $(".opakowanie");
    var $slajdy = $opakowanie.find('.slajdy');
    var $slajd = $slajdy.find('.slajd');


    setInterval(function() {
            $slajdy.animate(
                {'margin-left': '-=750px'},
                2000,
                function() {
                    obecnySlajd++;//Ale czemu tu te¿, bo zlicza?

                    if(obecnySlajd === $slajd.length) {
                        obecnySlajd = 1;
                        $slajdy.css('margin-left', 0);
                    }

                });
        },
        3000);


});
$( document ).ready(function() {
    console.log( "ready!" );


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
        currentSlaid++;//Ale czemu tu te¿, bo zlicza?

        if(currentSlaid === $slajd.length) {
            currentSlaid = 1;
            $slajdy.css('margin-left', 0);
        }

    }

});
/**
 * Created by pp on 2016-01-12.
 */




function tellIfIs(pattern, myStr) {
    var x1 = pattern[0];

    for (var i = 0; i < myStr.length; i++) {
        if (x1 === myStr[0]) {
            for (var j = 0; j < pattern.length; j++) {
                if (pattern[j] !== myStr[i + j]) {
                    // nie zgadza sie
                    break;
                }
            }

            if (j === pattern.length) {
                return true
            }
        }
    }
    return false
}

    var myStr = "12gtty3456";
    var pattern = "ty";
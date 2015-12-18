var myArrEq = [0,1,2,3];
var myArrValues = [365, 98, 69, 1642];


function getEachValue(myArrEq) {

    var eachValue;

    for (i=0; i < myArrEq.length-1; i++) {
        eachValue = myArrEq[i];
        console.log(eachValue);
    }



    return eachValue;

}

console.log(getEachValue(myArrEq));
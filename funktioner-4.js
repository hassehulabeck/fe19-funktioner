var kingNames = [
    "Oskar", "Gustav", "Karl", "Erik", "Johan"
];
var romanNumerals = [
    "I", "II", "III", "IV", "V", "VI", "VII", "IX", "X"
];

function kingMaker(antalNamn) {
    var kingString = "";

    for (let i = 0; i < antalNamn; i++) {
        if (i > 0) {
            kingString += " "; // Lägg till ett mellanrum om flera namn.
        }
        let slump = Math.floor(Math.random() * kingNames.length);
        kingString += kingNames[slump];
    }

    return kingString;
}

var theNextKing = kingMaker(1);
var anotherKing = kingMaker(2);
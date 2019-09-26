var kingNames = [
    "Oskar", "Gustav", "Karl", "Erik", "Johan"
];
var romanNumerals = [
    "I", "II", "III", "IV", "V", "VI", "VII", "IX", "X"
];

// Huruvida vi ska ha romerska siffror eller inte bestäms av värdet på argumentet numerals. Där har jag valt att sätta ett default-värde på det, vilket gör att om vi inte skickar med det i funktionsanropet, så sätts det till false och koden i funktionen körs utan problem.
function kingMaker(antalNamn, numerals = false) {
    var kingString = "";

    for (let i = 0; i < antalNamn; i++) {
        if (i > 0) {
            kingString += " "; // Lägg till ett mellanrum om flera namn.
        }
        let slump = Math.floor(Math.random() * kingNames.length);
        kingString += kingNames[slump];
    }

    if (numerals) {
        let slump = Math.floor(Math.random() * romanNumerals.length);
        kingString += " " + romanNumerals[slump];
    }

    return kingString;
}

// I anropet kan vi skriva argumentet som nedan, eller enbart true om vi hellre vill det.
var theNextKing = kingMaker(1, numerals = true);
var anotherKing = kingMaker(2);
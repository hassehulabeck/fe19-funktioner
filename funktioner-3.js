function slumpStr() {
    var str = "";
    for (i = 0; i < 8; i++) {
        let character = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        str += character;
    }
    return str;
}

console.log(slumpStr());
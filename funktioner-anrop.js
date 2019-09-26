function double(tal) {
    return tal * 2;
}

function doubleLastInArray() {
    let x = array[array.length - 1];
    x = x * 2;
    array[array.length - 1] = x;
}
var array = [1, 2, 3];
doubleLastInArray();
let dubbel = double(2);
console.log(dubbel + " & " + array);
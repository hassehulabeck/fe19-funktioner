function actAccordingToType(x) {
    if (typeof (x) == "string") {
        return reverseString(x);
    }
    if (typeof (x) == "number") {
        let divisibleByThree = false;
        if (x % 3 == 0) {
            divisibleByThree = true;
        }
        return {
            sqrt: Math.sqrt(x),
            divisibleByThree: divisibleByThree
        }
    }
    if (Array.isArray(x)) {
        let count = 0;
        x.forEach(function (item) {
            if (typeof (item) == "string") {
                count++;
            }
        })
        return count;
    }
    if ((typeof (x) == "object") && (!Array.isArray(x))) {
        for (egenskap in x) {
            if (typeof (x[egenskap]) === 'boolean') {
                console.log("bool")
                x[egenskap] = !x[egenskap];
            }
        }
        return x;
    }
}

function reverseString(str) {
    let reversed = "";
    for (let char of str) {
        reversed = char + reversed;
    }
    return reversed;
}
var arr = [
    1, 2, 3, "ABC", "Hej", {
        user: "Obie",
        active: true
    }, "Hallå", 3, 4
];

console.log(actAccordingToType("Hans"));
console.log(actAccordingToType(20));
console.log(actAccordingToType(arr));
console.log(actAccordingToType(arr[5]));
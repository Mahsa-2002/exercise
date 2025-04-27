let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let EvenCount = 0;
let OddCount = 0;

for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 === 0) {
        EvenCount++;
    } else {
        OddCount++;
    }
}

console.log("تعداد اعداد زوج :", EvenCount);
console.log("تعداد اعداد فرد  :", OddCount);
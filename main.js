//ex1

const numbers = [12, 2, 34, 1, 23, 5, 6, 7, 24, 45];


for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 13) {
        console.log(numbers[i]);
    }
}

//ex2

let n1 = 5;
let n2 = 15;

for (let i = n1; i <= n2; i++) {
    console.log(i);

}

//ex3

let a = Number(prompt());
let b = Number(prompt());
let c = a + b;
console.log(c);
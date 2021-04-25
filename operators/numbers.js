/*## Числа
* Получить число Pi  из Math и округлить его до двух знаков после точки
* Найти максимальное и минимальное значения из представленного ряда 10, 17, 5, 12, 15, 99, 1
* С помощью Math.random: 
  1. получить случайное число и округлить его до двух цифр после запятой
  2. получить случайное число от 0 до Х
* Получить число из строки '100$'*/

let x = Math.PI;
console.log(x.toFixed(2));

let arr = [10, 17, 5, 12, 15, 99, 1]
let max = Math.max.apply(null, arr);
let min = Math.min.apply(null, arr);
console.log(max, min); // 99, 1

let num2 = Math.random();
console.log(num2);

let num1 = Math.random();
console.log(num1.toFixed(2))

var num3 = parseInt('100$');
console.log(num3)
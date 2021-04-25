/*```javascript
let string = 'string test example'
```
не производить подсчетов вручную
* Получить первую и последнюю букву строки
* Сделать первую и последнюю буквы в верхнем регистре
* Найти положение слова string в строке
* Найти положение второго пробела
* Получить строку со 2-ого символа длинной 6 букв
* Получить строку с 1 по 7 символ
* Получить из ух переменных типа number x = 20, y = 21 получить строку '2021' 
*/


let string = 'string test example';
console.log(string[0] + ' ' + string[string.length - 1]);

console.log(string[0].toUpperCase() + ' ' + string[string.length - 1].toUpperCase());

console.log(string.indexOf('string'));

console.log(string.indexOf(' ', 7));

console.log(string.substr(1, 6));

console.log(string.substr(0, 7));

let x = '20';
let y = '21';
string = x + y;
console.log(string);

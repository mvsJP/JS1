/* Задание №1 */

console.log("***Задание №1 ***")
var Tc = prompt ("Введите температуру в градусах по Цельсию:");
var Tf = (9 / 5) * Tc + 32;
console.log("Температура в градусах по Фаренгейту:" + Tf);

/* Задание №2 */

console.log("***Задание №2 ***")
var N = 8 * "Мина";
console.log(typeof N); // number
N = 8 + "Мина";
console.log(N);
console.log(typeof N); // string
N = 8 - "Мина";
console.log(N); // Nan
console.log(typeof N); // number
N = 8 / "Мина";
console.log(N); // Nan
console.log(typeof N); // number
N = true;
console.log(typeof N); // boolean
N = 560 / 0;
console.log(typeof N); // number
var S = true
var T = N + S; 
console.log(typeof N); // number
T = N * S;
console.log(typeof N); // number
console.log(typeof M); // undefined
var M = "Марка";
console.log(typeof M); // string

// Задание № 3

console.log("***Задание №3 ***")
let admin;
let name = "Василий";
console.log(name);
admin = name;
console.log(admin);

// Задание № 4

console.log("***Задание №4 ***")
console.log(admin);
N = 1000 + '108';
console.log(N);
console.log(typeof N);

/* Задание №5

Атрибуты async и defer, как правило, применяются
 если тэг script расположен в начале или середине 
 html кода страницы. Атрибут async позволяет загружать
 внешний скрипт, не останавливая при этом загрузку страницы.
 Атрибут defer позволяет запускать внешний скрипт 
 только после полной загрузки страницы. Применение конкретного
 атрибута напрямую зависит от действий, производимых скриптом, 
 и необходимости полной загрузки страницы для корректной отработки скрипта. */

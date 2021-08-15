// Написати розв’язок нижче описаного завдання за допомогою function declaration:
// — Потрібно створити функцію, яка повертає максимальний переданий їй числовий параметр.
// — Кількість параметрів у функції може бути від 2х і більше.
// Приклад роботи:
// — max(5,-2) – має повернути 5.
// — max(5,-2, 30, 6) – має повернути 30
function max(...arg) {
    return arg.reduce((a, b) => a > b ? a : b, 0);
}
console.log(max(5, -2));
console.log(max(5, -2, 30, 6));
'use strict';

/* Дана строка str (в textarea), в которой хранится длинный текст. Реализуйте обрезание строки(используя button) по следующему принципу: если количество символов в строке больше заданного max(input value), то в переменную result запишите первые max символов строки str и добавьте в конец троеточие '...'. Если количество символов в строке меньше или равно заданного max, в переменную result запишите содержимое переменной str как есть и выведите на экран в div element.
Пример.
Начальная строка   “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
max = 5
Результат   “Lorem...” */

let textarea = document.getElementById('textarea');
let btn = document.getElementById('btn');
let text = document.getElementById('text');
let max = 5;
let str = textarea.value;

btn.addEventListener('click', cut);

function cut() {
  if (str.length > max) {
    text.innerHTML = str.slice(0, max) + '...';
  } else {
    text.innerHTML = str;
  }
}
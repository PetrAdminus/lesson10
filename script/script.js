"use strict";

const book = document.querySelectorAll(".book"),
  books = document.querySelector(".books"),
  body = document.querySelector("body"),
  a = document.querySelectorAll("a"),
  adv = document.querySelector(".adv"),
  li = document.querySelectorAll("li");

const newElem = document.createElement("li");
li[25].after(newElem);
newElem.textContent = 'Глава 8: За пределами ES6';

books.append(book[2]);
books.prepend(book[1]);
book[4].after(book[3]);
body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';
a[4].textContent = 'Книга 3. this и Прототипы Объектов';
adv.remove();
li[3].after(li[6]);
li[6].after(li[8]);
li[47].after(li[55]);
li[55].after(li[49]);
li[49].after(li[50]);
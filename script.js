// нажатие первой кнопки
function food() {
  let search = document.getElementById("fo").className;
  let div = document.getElementById("fo");
  first();
  second();
  pic1();
  pic2();

  if (search == "button button1") {
    div.classList.add("active");
    div.classList;
  }
}
// функции для активации только одной кнопки
function first() {
  let search = document.getElementById("dr").className;
  let div = document.getElementById("dr");

  if (search == "button button2 active") {
    div.classList.remove("active");
  }
}
function second() {
  let search = document.getElementById("tak").className;
  let div = document.getElementById("tak");

  if (search == "button button3 active") {
    div.classList.remove("active");
  }
}
function third() {
  let search = document.getElementById("fo").className;
  let div = document.getElementById("fo");

  if (search == "button button1 active") {
    div.classList.remove("active");
  }
}
//
//нажатие второй кнопки
function drinks() {
  let search = document.getElementById("dr").className;
  let div = document.getElementById("dr");
  second();
  third();
  pic3();
  pic4();

  if (search == "button button2") {
    div.classList.add("active");
  }
}

//нажатие третьей кнопки
function takeaway() {
  let search = document.getElementById("tak").className;
  let div = document.getElementById("tak");
  first();
  third();
  pic5();
  pic6();

  if (search == "button button3") {
    div.classList.add("active");
  }
}

function pic1() {
  let search = document.getElementById("pic").className;
  let div = document.getElementById("pic");

  if (search == "picture pict1") {
    div.classList.remove("pict2");
    div.classList.add("pict1");
  }
}
function pic2() {
  let search = document.getElementById("pic").className;
  let div = document.getElementById("pic");

  if (search == "picture pict3") {
    div.classList.remove("pict3");
    div.classList.add("pict1");
  }
}
function pic3() {
  let search = document.getElementById("pic").className;
  let div = document.getElementById("pic");

  if (search == "picture pict1") {
    div.classList.remove("pict1");
    div.classList.add("pict2");
  }
}
function pic4() {
  let search = document.getElementById("pic").className;
  let div = document.getElementById("pic");

  if (search == "picture pict3") {
    div.classList.remove("pict3");
    div.classList.add("pict2");
  }
}
function pic5() {
  let search = document.getElementById("pic").className;
  let div = document.getElementById("pic");

  if (search == "picture pict1") {
    div.classList.remove("pictureFo");
    div.classList.add("pictureTak");
  }
}
function pic6() {
  let search = document.getElementById("pic").className;
  let div = document.getElementById("pic");

  if (search == "picture pict2") {
    div.classList.remove("pict2");
    div.classList.add("pict3");
  }
}

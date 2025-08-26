/////////////////btn1
document.querySelector(".btn1").addEventListener("click", button1);
function button1() {
  const arr = [];
  for (var i = 1; i <= 100; i++) {
    if (i % 3 != 0) arr.push(i);
  }
  console.log(arr);
}

////////////////btn2
document.querySelector(".btn2").addEventListener("click", button2);
function button2() {
  const arr = [];
  for (var i = 1; i <= 100; i++) {
    arr.push(i);
  }
  for (var i = 101; i <= 150; i++) {
    arr.push(i);
  }
  console.log(arr);
}
//////////////////btn3

document.querySelector(".btn3").addEventListener("click", button3);
function button3() {
  const arr = [];
  for (var i = 1; i <= 100; i++) {
    arr.push(i + 3);
  }

  console.log(arr);
}
/////////////////////////btn4
document.querySelector(".btn4").addEventListener("click", button4);
function button4() {
  const arr = [];
  for (var i = 1; i <= 100; i++) {
    arr.push(i);
  }
  for (var i = 20; i <= 40; i++) {
    console.log(arr[i]);
  }
}
//////////////////////////btn5
document.querySelector(".btn5").addEventListener("click", button5);
function button5() {
  const arr = [];
  for (var i = 1; i <= 100; i++) {
    arr.push(i);
  }

  shuffleArray(arr);
  sort(arr);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  console.log(array);
}
function sort(arr) {
  const arr1 = [...arr];
  arr.sort((a, b) => b - a);
  console.log(arr);
}

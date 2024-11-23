//console.log(`hwee`);
//window.alert(`alert`);

//document.getElementById("idd").textContent = `hello`;
//  document.getElementById("iddd").textContent = `hddd`;

//let fname = `broooo`;
//let age = 24;
//console.log(age);
//console.log(typeof age);
//let price = 10.22;
//console.log(`you are ${fname} old`);
//console.log(`your ${price} dollar`);

//let online = false;
//console.log(`you are online:${online}`);

//let fullname = `adwaith`;
//let age = `21`;
//let student = false;
//document.getElementById("p1").textContent = `hello ${fullname}` + `!`;
//document.getElementById("p2").textContent = `your age is ${age}`;
//document.getElementById("p3").textContent = `login status is :${student}`;

//let students = 30;
//let sum = 10;
//students -= sum;
//
//students = students ** 3;
//students++;
//let result = 1 + 9 * (9 % 6);
//console.log(result);
//let usrname;
//document.getElementById("submit").onclick = function () {
//usrname = document.getElementById("username").value;
// document.write(usrname + `hello`);
//document.getElementById("welcome").textContent = `hello ${usrname}` + `!`;
//console.log(usrname);
//};
//let a = 33;
//a = Number(a);
//console.log(typeof a);
//const PI = 3.14;
//let rad;
//let cir;
//rad = window.prompt(`enter radius`);
//rad = Number(rad);
//cir = 2 * PI * rad;
//   console.log(cir);

/*let radius;
let circum;
const PI = 3.14;
document.getElementById("submit").onclick = function () {
  radius = document.getElementById("rad").value;
  radius = Number(radius);
  circum = 2 * PI * radius;
  document.getElementById("welcome").textContent =  circum;
};
*/
const btnincrease = document.getElementById("btnincrease");

const btnreset = document.getElementById("btnreset");

const btndecrease = document.getElementById("btndecrease");

const countLabel = document.getElementById("countLabel");

let count = 0;
btnincrease.onclick = function () {
  count--;
  countLabel.textContent = count;
};

btnreset.onclick = function () {
  count = 0;
  countLabel.textContent = count;
};

btndecrease.onclick = function () {
  count++;
  countLabel.textContent = count;
};

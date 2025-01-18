/*let random = Math.random();
otp = random;
otp = Math.ceil(otp);

let random2 = Math.random();
otp2 = random2;
otp2 = Math.floor(otp2);

let random3 = Math.random();
otp3 = random3;
otp3 = Math.ceil(otp3);
*/
let otp;
let otp2;
let otp3;
const genrate = document.getElementById("btngenarate");
const countLabel2 = document.getElementById("countLabel2");
genrate.onclick = function () {
  let random = Math.random() * 10;
  otp = random;
  otp = Math.ceil(otp) * 6;

  let random2 = Math.random() * 10;
  otp2 = random2;
  otp2 = Math.ceil(otp2);

  let random3 = Math.random();
  otp3 = random3;
  otp3 = Math.ceil(otp3 * 6) + 9; //oooooooooo
  let finalotp;
  finalotp = `${otp}${otp2}${otp3}`;
  countLabel2.textContent = `your otp is ${finalotp}`;
  console.log(`your otp is ${finalotp}`);
};

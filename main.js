let countlabel = document.getElementById("valCN");
let Decreasebt = document.getElementById("btn1");
let resetbt = document.getElementById("btn2");
let Increase = document.getElementById("btn3");
let count = 0;
Decreasebt.onclick = function () {
  count--;
  countlabel.textContent = count;
};
resetbt.onclick = function () {
  count = 0;
  countlabel.textContent = count;
};
Increase.onclick = function () {
  count++;
  countlabel.textContent = count;
};

if (!localStorage.clicks) localStorage.clicks = 0;
if (!localStorage.forClick) localStorage.forClick = 1;
if (!localStorage.perSecond) localStorage.perSecond = 0;
if (!localStorage.save) localStorage.save = 0;
if (!localStorage.price1) localStorage.price1 = 500;
if (!localStorage.plus1) localStorage.plus1 = 10;
if (!localStorage.price2) localStorage.price2 = 200;
if (!localStorage.plus2) localStorage.plus2 = 5;
if (!localStorage.del) localStorage.del = 1;
if (!localStorage.reduce1) localStorage.reduce1 = 0;
if (!localStorage.color1) localStorage.color1 = "DarkTurquoise"

if (localStorage.save == 0) {
 localStorage.clicks = 0;
 localStorage.forClick = 1;
 localStorage.perSecond = 0;
 localStorage.price1 = 500;
 localStorage.price2 = 200;
 localStorage.plus1 = 10;
 localStorage.plus2 = 5;
 localStorage.del = 1;
 localStorage.reduce1 = 0;
}

localStorage.save = 1;

let del = Number(localStorage.del);
let bal = Number(localStorage.clicks);
let forClick = Number(localStorage.forClick);
let perSecond = Number(localStorage.perSecond);
let price1 = Number(localStorage.price1);
let plus1 = Number(localStorage.plus1);
let price2 = Number(localStorage.price2);
let plus2 = Number(localStorage.plus2);
const bid10 = document.getElementById("bid10")
const bid25 = document.getElementById("bid25")
const bid50 = document.getElementById("bid50")
const bid75 = document.getElementById("bid75")
const bid100 = document.getElementById("bid100")
let bid = 0;
let price3 = 5000000;
let reduce1 = localStorage.reduce1;


document.getElementById("ball").innerHTML = Math.round(bal);
document.getElementById("forClick").innerHTML = forClick;
document.getElementById("perSecond").innerHTML = perSecond;

function cut() {
 if (bal < 1000) {
  document.getElementById("ball").innerHTML = Math.round(bal)
 }
 if (bal >= 1000) {
  bal1 = bal / 1000;
  document.getElementById("ball").innerHTML = String(bal1.toFixed(2)) + "K"
 }
 if (bal >= 1000000) {
  bal1 = bal / 1000000;
  document.getElementById("ball").innerHTML = String(bal1.toFixed(2)) + "М"
 }
 if (bal >= 1000000000) {
  bal1 = bal / 1000000000;
  document.getElementById("ball").innerHTML = String(bal1.toFixed(2)) + "В"
 }
 if (bal >= 1000000000000) {
  bal1 = bal / 1000000000000;
  document.getElementById("ball").innerHTML = String(bal1.toFixed(2)) + "Т"
 }
}

let forClick1 = 0;
function cut1() {
 if (forClick >= 1000) {
  forClick1 = forClick / 1000;
  document.getElementById("forClick").innerHTML = String(forClick1.toFixed(2)) + "K"
 }
 if (forClick >= 1000000) {
  forClick1 = forClick / 1000000;
  document.getElementById("forClick").innerHTML = String(forClick1.toFixed(2)) + "M"
 }
 if (forClick >= 1000000000) {
  forClick1 = forClick / 1000000000;
  document.getElementById("forClick").innerHTML = String(forClick1.toFixed(2)) + "B"
 }
}

let perSecond1 = 0;
function cut2() {
 if (perSecond >= 1000) {
  perSecond1 = perSecond / 1000;
  document.getElementById("perSecond").innerHTML = String(perSecond1.toFixed(2)) + "К";
 }
 if (perSecond >= 1000000) {
  perSecond1 = perSecond / 1000000;
  document.getElementById("perSecond").innerHTML = String(perSecond1.toFixed(2)) + "М";
 }
 if (perSecond >= 1000000000) {
  perSecond1 = perSecond / 1000000000;
  document.getElementById("perSecond").innerHTML = String(perSecond1.toFixed(2)) + "В"
 }
}

cut();
cut1();
cut2();

function addMoney() {
 bal = bal + forClick;
 document.getElementById("ball").innerHTML = Math.round(bal);
 localStorage.clicks = bal;
 cut()
}

function farm() {
 bal = bal + perSecond
 document.getElementById("ball").innerHTML = bal
 localStorage.clicks = Math.round(bal);
 cut();
}

setInterval(farm, 1000)


function select10() {
 bid10.style.backgroundColor = "#ADD8E6";
 bid25.style.backgroundColor = "#48D1CC"
 bid50.style.backgroundColor = "#48D1CC"
 bid75.style.backgroundColor = "#48D1CC"
 bid100.style.backgroundColor = "#48D1CC"
 bid = 0.1;
}

function select25() {
 bid10.style.backgroundColor = "#48D1CC";
 bid25.style.backgroundColor = "#ADD8E6"
 bid50.style.backgroundColor = "#48D1CC"
 bid75.style.backgroundColor = "#48D1CC"
 bid100.style.backgroundColor = "#48D1CC"
 bid = 0.25;
}

function select50() {
 bid10.style.backgroundColor = "#48D1CC";
 bid25.style.backgroundColor = "#48D1CC"
 bid50.style.backgroundColor = "#ADD8E6"
 bid75.style.backgroundColor = "#48D1CC"
 bid100.style.backgroundColor = "#48D1CC"
 bid = 0.5;
}

function select75() {
 bid10.style.backgroundColor = "#48D1CC";
 bid25.style.backgroundColor = "#48D1CC"
 bid50.style.backgroundColor = "#48D1CC"
 bid75.style.backgroundColor = "#ADD8E6"
 bid100.style.backgroundColor = "#48D1CC"
 bid = 0.75;
}

function select100() {
 bid10.style.backgroundColor = "#48D1CC";
 bid25.style.backgroundColor = "#48D1CC"
 bid50.style.backgroundColor = "#48D1CC"
 bid75.style.backgroundColor = "#48D1CC"
 bid100.style.backgroundColor = "#ADD8E6"
 bid = 1;
}

function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function addClick() {
 if (bal < price1 / del) {
  alert('Не хватает денег')
 }
 if (bal >= price1 / del) {
  bal = bal - price1 / del;
  localStorage.clicks = bal;
  price1 = price1 + 500 / del + plus1 / del;
  localStorage.price1 = price1;
  plus1 = plus1 + 50 / del;
  localStorage.plus1 = plus1;
  forClick = forClick + 1;
  localStorage.forClick = forClick;
  
  document.getElementById("price_1").innerHTML = Math.round(price1 / del);
  cut1();
 }
}

function addFarm() {
 if (bal < price2 / del) {
  alert('Не хватает денег')
 }
 if (bal >= price2 / del) {
  bal = bal - price2 / del;
  localStorage.clicks = bal;
  price2 = price2 + 200 / del + plus2 / del;
  localStorage.price2 = price2;
  plus2 = plus2 + 5 / del;
  localStorage.plus2 = plus2;
  perSecond = perSecond + 1;
  localStorage.perSecond = perSecond;
  
  document.getElementById("price_2").innerHTML = Math.round(price2 / del);
 }
}

function shop() {
 document.getElementById("price_1").innerHTML = Math.round(Number(localStorage.price1) / del);
 document.getElementById("price_2").innerHTML = Math.round(price2 / del);
 document.getElementById("shop3").style.backgroundColor = localStorage.color1;
}

function reduce() {
 if (bal < price3) {
  alert("Не хватает денег")
 }
 if (bal >= price3) {
  if (reduce1 == 1) {
   alert("Ты уже покупал этот бонус!")
  }
  if (reduce1 == 0) {
   bal = bal - price3;
   localStorage.clicks = bal;
   del = del * 2;
   localStorage.del = del;
   reduce1 = 1;
   localStorage.reduce1 = reduce1;
   document.getElementById("shop3").style.backgroundColor = "rgba(0, 0, 0, 0.5)"
   localStorage.color1 = "rgba(0, 0, 0, 0.5)";
   shop();
   alert("Все цены уменьшены в 2 раза!")
  }
 }
}
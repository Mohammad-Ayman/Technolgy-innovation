const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");
const hero = document.querySelector("#hero");
const feature = document.querySelector("#feature");
const articales = document.querySelector("#articales");
const containera = document.querySelector("#containera");
const s1 = document.querySelector("s1");
const contact = document.getElementById("contact");

btnHamburger.addEventListener("click", () => {
  console.log("click hamburger");

  if (header.classList.contains("open")) {
    // Close Hamburger Menu
    body.classList.remove("noscroll");
    header.classList.remove("open");
    fadeElems.forEach(function (element) {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    // Open Hamburger Menu
    body.classList.add("noscroll");
    header.classList.add("open");
    fadeElems.forEach(function (element) {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});
document.querySelector("#article1").addEventListener("click", shows1);
function shows1() {
  document.getElementById("s2").style.display = "block";
}
document.querySelector("#bttn").addEventListener("click", () => {
  function shows11() {
    body.classList.remove("s11");
  }
});
/*
document.getElementById('contact').addEventListener('click',fun);
fun(){

document.querySelector('#hero').innerHTML=" ";


 body.classList.remove('hero');
  body.classList.remove('articales');
  body.classList.remove('feature');
//element.classList.remove('hero');
//element.classList.remove('feature');
//element.classList.remove('articales');
}
*/

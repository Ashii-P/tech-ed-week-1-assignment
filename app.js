console.log("Hello World!");

let backgroundAudio = document.querySelector(".audio");
backgroundAudio.play();

const readMoreButtonOne = document.querySelector(".first-button");
readMoreButtonOne.addEventListener("mouseover", function () {
  readMoreButtonOne.style.backgroundColor = "#fffff0";
  readMoreButtonOne.style.color = "#010711";
});
readMoreButtonOne.addEventListener("mouseout", function () {
  readMoreButtonOne.style.backgroundColor = "transparent";
  readMoreButtonOne.style.color = "#fffff0";
});

const readMoreButtonTwo = document.querySelector(".second-button");
readMoreButtonTwo.addEventListener("mouseover", function () {
  readMoreButtonTwo.style.backgroundColor = "#fffff0";
  readMoreButtonTwo.style.color = "#010711";
});
readMoreButtonTwo.addEventListener("mouseout", function () {
  readMoreButtonTwo.style.backgroundColor = "transparent";
  readMoreButtonTwo.style.color = "#fffff0";
});

const readMoreButtonThree = document.querySelector(".third-button");
readMoreButtonThree.addEventListener("mouseover", function () {
  readMoreButtonThree.style.backgroundColor = "#fffff0";
  readMoreButtonThree.style.color = "#010711";
});
readMoreButtonThree.addEventListener("mouseout", function () {
  readMoreButtonThree.style.backgroundColor = "transparent";
  readMoreButtonThree.style.color = "#fffff0";
});

const topButton = document.querySelector(".top");
window.onscroll = function () {
  scrollfunction();
};
function scrollfunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

function toFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const orange = document.getElementById("orange");
const Blue = document.getElementById("Blue");
const Brown = document.getElementById("Brown");
const Red = document.getElementById("Red");
const Green = document.getElementById("Green");

const changeOrange = () => {
  document.body.style.background = "orange";
};

const changeBlue = () => {
  document.body.style.background = "Blue";
};

const changeBrown = () => {
  document.body.style.background = "Brown";
};

const changeRed = () => {
  document.body.style.background = "Red";
};

const changeGreen = () => {
  document.body.style.background = "Green";
};

orange.addEventListener("click", changeOrange);

Blue.addEventListener("click", changeBlue);

Brown.addEventListener("click", changeBrown);

Red.addEventListener("click", changeRed);

Green.addEventListener("click", changeGreen);

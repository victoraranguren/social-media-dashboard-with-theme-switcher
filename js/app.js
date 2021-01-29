const btnToggle = document.querySelector(".toggle-btn");
const ball = document.querySelector(".toggle-ball");

const switchTheme = () => {
  btnToggle.classList.toggle("active");
  ball.classList.toggle("active");
  return console.log("Done");
};

document.addEventListener("DOMContentLoaded", () => {
  btnToggle.addEventListener("click", switchTheme);
});

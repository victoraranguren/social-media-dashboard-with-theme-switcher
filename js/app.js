const btnToggle = document.querySelector(".toggle-btn");
const ball = document.querySelector(".toggle-ball");

const switchTheme = () => {
  const classArray = [
    ".header",
    ".header .container",
    ".title-lg",
    ".title",
    ".title-sm",
    ".toggle-text",
    'body'
  ];
  const classArrayAll = [
    ".name",
    '.text',
    '.followers',
    '.number',
    '.counter',
    '.overview-card'
  ];
  classArray.forEach((el) => {
    document.querySelector(`${el}`).classList.toggle("dark");
  });
  classArrayAll.forEach((el) => {
    document.querySelectorAll(`${el}`).forEach(el=>el ? el.classList.toggle("dark") : false);
  });
  btnToggle.classList.toggle("active");
  ball.classList.toggle("active");
};

document.addEventListener("DOMContentLoaded", () => {
  btnToggle.addEventListener("click", switchTheme);
});

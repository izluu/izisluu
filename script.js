const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const btnGroup = document.querySelector(".btn-group");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I love you too! 😘";
  gif.src = "giphy3.webp";
  
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});

noBtn.addEventListener("mouseover", () => {
  const groupRect = btnGroup.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = groupRect.width - noBtnRect.width;
  const maxY = groupRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.position = 'absolute'; // Chuyển vị trí nút No sang vị trí tuyệt đối khi di chuyển
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

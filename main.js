let shareBtn = document.querySelector(".profile__share");
let share = document.querySelector(".share");
// let profile = document.querySelector(".profile");

shareBtn.addEventListener("click", () => {
  share.classList.toggle("show");
  shareBtn.classList.toggle("rotate");
});

// $(".swiper-slide").click(function () {
//   let slideId = $(this).attr("id");
//   $(".popup-proj").removeAttr("class").addClass(slideId);
//   $("body").addClass("modal-active");
// });

// $(".popup-proj").click(function () {
//   $(this).addClass("out");
//   $("body").removeClass("modal-active");
// });

const openBtn = document.querySelector(".title");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".modal__overlay");

const openModal = () => {
  modal.classList.remove("hidden");
};
const closeModal = () => {
  modal.classList.add("hidden");
};
overlay.addEventListener("click", closeModal);
openBtn.addEventListener("click", openModal);

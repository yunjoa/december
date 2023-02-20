// 몇초후 페이지로딩 시키기
// window.addEventListener("DOMContentLoaded", function () {
//   const pageTurner = this.document.querySelector("#pageTurner");
//   setTimeout(function () {
//     pageTurner.fadeOut();
//   }, 500);
// });

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const options = {
  root: null, // viewport
  rootMargin: "0px",
  threshold: 0.2, // 20%가 viewport에 들어와 있어야 callback 실행
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry.isIntersecting);
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
}, options);

const titleList = document.querySelectorAll(".pop");

// 반복문을 돌려 모든 DOM에 적용
titleList.forEach((el) => observer.observe(el));

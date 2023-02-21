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

let result;

$.getJSON('data/data.json', function(data) {
  for(key in data){
        
    console.log(data.projects)
    result += `
      <div class="swiper-slide">
  
      <div
      class="slide-image"
      style="
        background-image: url(${data.projects[key].imgSrc});
      "
    ></div>
      <div class="slide-image-con">
        <h4>${data.projects[key].title}</h4>
        <p>${data.projects[key].details}</p>
        <div class="dates">dates or cathegory</div>
      </div>
      </div>
      `
      result += list;
      console.log(result)
    }




    $('#swiperWrapper').html(result);
      

      })



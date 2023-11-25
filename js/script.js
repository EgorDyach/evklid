document.addEventListener('DOMContentLoaded', function () {
  let burger = document.querySelector('.header__burger');
  let menu = document.querySelector('.header__nav');
  let menulinks = menu.querySelectorAll('.header__link');

  burger.addEventListener('click',

    function () {

      burger.classList.toggle('header__burger-active');

      menu.classList.toggle('header__nav-active');

      document.body.classList.toggle('stop-scroll');
    })

  menulinks.forEach(function (el) {
    el.addEventListener('click', function () {

      burger.classList.remove('header__burger--active');

      menu.classList.remove('header__nav--active');

      document.body.classList.remove('stop-scroll');

    })
  })

  // tabs

  document.querySelectorAll('.stages__btn').forEach(function (tabsbtn) {
    tabsbtn.addEventListener('click', function (e) {
      const path = e.currentTarget.dataset.path;

      document.querySelectorAll('.stages__btn').forEach(function (btn) {
        btn.classList.remove('stages__btn-active')
      });
      e.currentTarget.classList.add('stages__btn-active');
      document.querySelectorAll('.stages__info').forEach(function (tabsbtn) {
        tabsbtn.classList.remove('stages__info-active')
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('stages__info-active')
    });
  });

  const container = document.querySelector(".container")
  const swiper = new Swiper('.hero__swiper', {
    // Default parameters
    loop: true,
    speed: 300,
    pagination: {
      el: '.hero__pagination',
      type: 'bullets',
      clickable: true
    }

  })

  $(function () {
    $(".accordion__list").accordion({
      icons: false,
      heightStyle: "content",
      collapsible: true,
      active: false
    });

  });


  document.querySelector(".form-btn__open").addEventListener("click", function () {
    document.querySelector(".form").classList.add("form__active");
    this.classList.add("active");
  })

  document.addEventListener("click", function (e) {
    let target = e.target;
    let form = document.querySelector(".form");
    if (!target.closest(".search__con")) {
      form.classList.remove("form__active");
      form.querySelector("input").value = "";
      document.querySelector(".form-btn__open").classList.remove("active")
    }
  })

});



/*--------------------------
    Project Name: denizButik
---------------------------*/

/* ---------------------------- $$$ --- HEADER BANNER COUNTDOWN --- $$$ ---------------------------- */

const countdown = () => {
  const countDate = new Date("july 17, 2021 11:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  document.querySelector(".day").innerText = textDay;
  document.querySelector(".hour").innerText = textHour;
  document.querySelector(".minute").innerText = textMinute;
  document.querySelector(".second").innerText = textSecond;
};

setInterval(countdown, 1000);

/* ---------------------------- $$$ --- STORY SLIDER --- $$$ ---------------------------- */

$(document).ready(function () {
  $(".story-slick").slick({
    slidesToShow: 9,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    dots: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        centerMode: true,
        swipeToSlide: true,
        centerPadding: "20px",
        initialSlide: 2
      },
    }, ],
  });
});

/* ---------------------------- $$$ ---  CAMPAIGN SLIDER --- $$$ ---------------------------- */

$(document).ready(function () {
  $(".campaign-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
      },
    }, ],
  });
});

/* ---------------------------- $$$ ---  PRODUCT SLIDER --- $$$ ---------------------------- */

$(document).ready(function () {
  $(".product-slider-inner").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    dots: false,
    responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          infinite: false,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
        },
      },
    ],
  });
});

/* ---------------------------- $$$ ---  BEST SELLER --- $$$ ---------------------------- */

$(document).ready(function () {
  $(".best-seller-inner").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    dots: false,
    responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          infinite: false,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
        },
      },
    ],
  });
});

/* ---------------------------- $$$ ---  BLOG SELLER --- $$$ ---------------------------- */

$(document).ready(function () {
  $(".blog-list-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    dots: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    }, ],
  });
});

/* ---------------------------- $$$ ---  FOOTER  --- $$$ ---------------------------- */

$(function () {
  $(".accordion-item__header").on("click", function () {
    $(this).parent(".accordion-item").toggleClass("opened");
    $(this).parent(".accordion-item").siblings().removeClass("opened");
  });
  $(".accordion-item__title").on("click", function (e) {
    e.preventDefault();
  });
});

$(document).ready(function () {
  var windowWidth = $(window).width();
  if (windowWidth <= 768) {
    //for iPad & smaller devices
    $(".accordion-item").removeClass("opened");
    $(".collapse").removeClass("show");
  }
});

/* ---------------------------- $$$ ---  BLOG VIDEO  --- $$$ ---------------------------- */

$(document).ready(function () {
  $(".fancybox-single").fancybox({
    afterShow: function () {
      this.content.find("video").trigger("play");
      this.content.find("video").on("ended", function () {
        $.fancybox.close();
      });
    },
  });
});

/* ---------------------------- $$$ ---  SCROLL TOP BUTTON  --- $$$ ---------------------------- */

var btn = $("#scrollTopBtn");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({
    scrollTop: 0
  }, "300");
});

/* ---------------------------- $$$ ---  WHO WE ARE  --- $$$ ---------------------------- */

$(document).ready(function () {
  $(".circle-img").fancybox({
    afterShow: function () {
      this.content.find("video").trigger("play");
      this.content.find("video").on("ended", function () {
        $.fancybox.close();
      });
    },
  });
});

/* ---------------------------- $$$ --- EXTENSILE DETAILS - ACCORDION --- $$$ ---------------------------- */
$(".extender-action-button").click(function () {
  var _extensileArea = $(".extensile-area");
  var _opener = $(".extender-action-button.opener");
  var _closer = $(".extender-action-button.closer");
  var _contentHeight = _extensileArea
    .find(".common-content-holder")
    .outerHeight(true);
  if (_extensileArea.hasClass("opened")) {
    _closer.hide();
    _opener.show();
    _extensileArea.css("height", "");
    _extensileArea.removeClass("opened");
  } else {
    _opener.hide();
    _closer.show();
    _extensileArea.height(_contentHeight);
    _extensileArea.addClass("opened");
  }
});

/* ---------------------------- $$$ --- HEADER --- $$$ ---------------------------- */

function setHeaderHeight() {
  var headerHeight = $("header").height();
  if ($(window).scrollTop() > headerHeight) {
    $("header").addClass("fixed");
  } else {
    $("header").removeClass("fixed");
  }
}
$(window).scroll(function () {
  setHeaderHeight();
});
$(document).ready(function () {
  setHeaderHeight();
});

$(document).ready(function () {
  $(".hamburger-menu").on("click", function () {
    $(".bg-tram").toggleClass("show");
    $(".mobile-menu").toggleClass("mobileActive");
    $("body").toggleClass("overflow");
  });
});

$(document).ready(function () {
  $(".close").on("click", function () {
    $(".bg-tram").removeClass("show");
    $(".mobile-menu").removeClass("mobileActive");
    $("body").removeClass("overflow");
  });
});

$(document).ready(function () {
  $(".back").on("click", function () {
    $(".mobile-sub-menu").removeClass("active");
    $(".mobile-menu-item").removeClass("active");
  });
});

$(document).ready(function () {
  $(".head-item-close").on("click", function () {
    $(".mobile-sub-menu").removeClass("active");
    $(".mobile-menu-item").removeClass("active");
  });
});

$(document).ready(function () {
  $(".item-cart").on("click", function (e) {
    console.log(e.target);
    var _this = $(this);
    var _listArea = _this.next();
    _this.parent().addClass("active");
    _listArea.addClass("active");
  });
});




$('.mega-menu li').hover(function() {
  $(".bg-tram").toggleClass("show");
});  


$('.mobile-search').click(function() {
  $(".search").toggleClass("search-show");
});  


/* ---------------------------- $$$ --- PRODUCT VIDEO --- $$$ ---------------------------- */


const videoContainers = document.getElementsByClassName("product-img-wrapper");

for (var i = 0; i < videoContainers.length; i++) {

  const element = videoContainers[i];

  const videoItem = element.getElementsByClassName("media-video")[0];
  const playBtn = element.getElementsByClassName("play-btn")[0];
  const pauseBtn = element.getElementsByClassName("pause-btn")[0];

  const playBtnClick = function () {

    videoItem.play();
    pauseBtn.style.display = 'inline-block';
    playBtn.style.display = 'none';

  }
  const pauseBtnClick = function () {

    videoItem.pause();
    playBtn.style.display = 'inline-block';
    pauseBtn.style.display = 'none';

  }

  playBtn.addEventListener("click", playBtnClick);
  pauseBtn.addEventListener("click", pauseBtnClick);
}
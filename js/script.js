$(document).ready(function ($) {
  $(".popup-open").click(function () {
    $(".popup-fade").fadeIn();
    return false;
  });

  $(".popup-close").click(function () {
    $(this).parents(".popup-fade").fadeOut();
    return false;
  });

  $(document).keydown(function (e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $(".popup-fade").fadeOut();
    }
  });

  $(".popup-fade").click(function (e) {
    if ($(e.target).closest(".popup").length == 0) {
      $(this).fadeOut();
    }
  });
});

$(document).ready(function () {
  var i = $(".counter1 input").val();
  $(".counter-min1").click(function () {
    if (i > 1) {
      $(".counter1 input").val(--i);
    }
  });
  $(".counter-plus1").click(function () {
    $(".counter1 input").val(++i);
  });
});

$(document).ready(function () {
  var i = $(".counter2 input").val();
  $(".counter-min2").click(function () {
    if (i > 1) {
      $(".counter2 input").val(--i);
    }
  });
  $(".counter-plus2").click(function () {
    $(".counter2 input").val(++i);
  });
});

$(document).ready(function () {
  var i = $(".counter3 input").val();
  $(".counter-min3").click(function () {
    if (i > 0) {
      $(".counter3 input").val(--i);
    }
  });
  $(".counter-plus3").click(function () {
    $(".counter3 input").val(++i);
  });
});

$(document).ready(function () {
  var i = $(".counter4 input").val();
  $(".counter-min4").click(function () {
    if (i > 0) {
      $(".counter4 input").val(--i);
    }
  });
  $(".counter-plus4").click(function () {
    $(".counter4 input").val(++i);
  });
});

$(document).ready(function () {
  $(".header-burger").on("click", function () {
    $(".mobile-menu").addClass("is-active");
  });

  $(".mobile-menu-close").on("click", function () {
    $(".mobile-menu").removeClass("is-active");
  });
});

const refs = {
  menuAbout: document.querySelector(".header-menu-list-about"),
  openAbout: document.getElementById("menu-about"),
};

const openMenuAbout = (e) => {
  refs.openAbout.classList.remove("is-hidden");
  refs.menuAbout.classList.add("active");
};

const closeMenuAbout = () => {
  refs.openAbout.classList.add("is-hidden");
  refs.menuAbout.classList.remove("active");
};
const closeMenuAboutTwo = (e) => {
  if (e.relatedTarget === refs.openAbout) {
    return;
  }
  // closeMenuAbout();
};

refs.menuAbout.addEventListener("mouseover", openMenuAbout);
refs.menuAbout.addEventListener("mouseout", closeMenuAboutTwo);
refs.openAbout.addEventListener("mouseleave", closeMenuAbout);

(function () {
  var cards = document.querySelectorAll(".work-card.effect__click");
  for (var i = 0, len = cards.length; i < len; i++) {
    var card = cards[i];
    clickListener(card);
  }

  function clickListener(card) {
    card.addEventListener("click", function () {
      var c = this.classList;
      c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
    });
  }
})();

function initComparisons() {
  var x, i;
  /*find all elements with an "overlay" class:*/
  x = document.getElementsByClassName("img-comp-overlay");
  for (i = 0; i < x.length; i++) {
    /*once for each "overlay" element:
    pass the "overlay" element as a parameter when executing the compareImages function:*/
    compareImages(x[i]);
  }
  function compareImages(img) {
    var slider,
      img,
      clicked = 0,
      w,
      h;
    /*get the width and height of the img element*/
    w = img.offsetWidth;
    h = img.offsetHeight;
    /*set the width of the img element to 50%:*/
    img.style.width = w / 2 + "px";
    /*create slider:*/
    slider = document.createElement("DIV");
    slider.setAttribute("class", "img-comp-slider");
    /*insert slider*/
    img.parentElement.insertBefore(slider, img);
    /*position the slider in the middle:*/
    slider.style.top = h / 2 - slider.offsetHeight / 2 + "px";
    slider.style.left = w / 2 - slider.offsetWidth / 2 + "px";
    /*execute a function when the mouse button is pressed:*/
    slider.addEventListener("mousedown", slideReady);
    /*and another function when the mouse button is released:*/
    window.addEventListener("mouseup", slideFinish);
    /*or touched (for touch screens:*/
    slider.addEventListener("touchstart", slideReady);
    /*and released (for touch screens:*/
    window.addEventListener("touchstop", slideFinish);
    function slideReady(e) {
      /*prevent any other actions that may occur when moving over the image:*/
      e.preventDefault();
      /*the slider is now clicked and ready to move:*/
      clicked = 1;
      /*execute a function when the slider is moved:*/
      window.addEventListener("mousemove", slideMove);
      window.addEventListener("touchmove", slideMove);
    }
    function slideFinish() {
      /*the slider is no longer clicked:*/
      clicked = 0;
    }
    function slideMove(e) {
      var pos;
      /*if the slider is no longer clicked, exit this function:*/
      if (clicked == 0) return false;
      /*get the cursor's x position:*/
      pos = getCursorPos(e);
      /*prevent the slider from being positioned outside the image:*/
      if (pos < 0) pos = 0;
      if (pos > w) pos = w;
      /*execute a function that will resize the overlay image according to the cursor:*/
      slide(pos);
    }
    function getCursorPos(e) {
      var a,
        x = 0;
      e = e || window.event;
      /*get the x positions of the image:*/
      a = img.getBoundingClientRect();
      /*calculate the cursor's x coordinate, relative to the image:*/
      x = e.pageX - a.left;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      return x;
    }
    function slide(x) {
      /*resize the image:*/
      img.style.width = x + "px";
      /*position the slider:*/
      slider.style.left = img.offsetWidth - slider.offsetWidth / 2 + "px";
    }
  }
}
initComparisons();

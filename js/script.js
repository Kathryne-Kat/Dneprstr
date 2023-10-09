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

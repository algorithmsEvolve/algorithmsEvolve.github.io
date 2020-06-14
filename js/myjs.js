// carousel
var flkty = new Flickity(".main-gallery", {
  // options
  cellAlign: "left",
  contain: true,
});
// end carousel

//image click fullscreen
$("img[data-enlargable]")
  .addClass("img-enlargable")
  .click(function () {
    var src = $(this).attr("src");
    var modal;
    function removeModal() {
      modal.remove();
      $("body").off("keyup.modal-close");
    }
    modal = $("<div>")
      .css({
        background: "RGBA(0,0,0,.5) url(" + src + ") no-repeat center",
        backgroundSize: "contain",
        width: "100%",
        height: "100%",
        position: "fixed",
        zIndex: "10000",
        top: "0",
        left: "0",
        cursor: "zoom-out",
      })
      .click(function () {
        removeModal();
      })
      .appendTo("body");
    //handling ESC
    $("body").on("keyup.modal-close", function (e) {
      if (e.key === "Escape") {
        removeModal();
      }
    });
  });
//end image click fullscreen

//image on hover
// ig
$(document).ready(function () {
  $("#ig")
    .mouseenter(function () {
      $("#ig-img").attr("src", "../assets/images/ig-pp.jpg");
      $("#ig-img").css("transform", "scale(1.5)");
      $("#ig-img").css("border", "2px solid rgb(148, 148, 148)");
      $("#ig-img").css("border-radius", "50%");
    })
    .mouseleave(function () {
      $("#ig-img").attr("src", "../assets/images/ig.png");
      $("#ig-img").css("transform", "scale(1)");
      $("#ig-img").css("border", "3px transparent");
    });
});
//end ig
//github
$(document).ready(function () {
  $("#github")
    .mouseenter(function () {
      $("#github-img").attr("src", "../assets/images/github-pp.jpeg");
      $("#github-img").css("transform", "scale(1.5)");
      $("#github-img").css("border", "2px solid rgb(148, 148, 148)");
      $("#github-img").css("border-radius", "50%");
    })
    .mouseleave(function () {
      $("#github-img").attr("src", "../assets/images/github.png");
      $("#github-img").css("transform", "scale(1)");
      $("#github-img").css("border", "3px transparent");
    });
});
//end github

//linkedin
$(document).ready(function () {
  $("#linkedin")
    .mouseenter(function () {
      $("#linkedin-img").attr("src", "../assets/images/linkedin-pp.jpeg");
      $("#linkedin-img").css("transform", "scale(1.5)");
      $("#linkedin-img").css("border", "2px solid rgb(148, 148, 148)");
      $("#linkedin-img").css("border-radius", "50%");
    })
    .mouseleave(function () {
      $("#linkedin-img").attr("src", "../assets/images/linkedin.png");
      $("#linkedin-img").css("transform", "scale(1)");
      $("#linkedin-img").css("border", "3px transparent");
    });
});
//end linkedin

//twitter
$(document).ready(function () {
  $("#twitter")
    .mouseenter(function () {
      $("#twitter-img").attr("src", "../assets/images/twitter-pp.jpg");
      $("#twitter-img").css("transform", "scale(1.5)");
      $("#twitter-img").css("border", "2px solid rgb(148, 148, 148)");
      $("#twitter-img").css("border-radius", "50%");
    })
    .mouseleave(function () {
      $("#twitter-img").attr("src", "../assets/images/twitter.png");
      $("#twitter-img").css("transform", "scale(1)");
      $("#twitter-img").css("border", "3px transparent");
    });
});
// end twitter

//wa
$(document).ready(function () {
  $("#wa")
    .mouseenter(function () {
      $("#wa-img").attr("src", "../assets/images/wa-pp.jpeg");
      $("#wa-img").css("transform", "scale(1.5)");
      $("#wa-img").css("border", "2px solid rgb(148, 148, 148)");
      $("#wa-img").css("border-radius", "50%");
    })
    .mouseleave(function () {
      $("#wa-img").attr("src", "../assets/images/wa.png");
      $("#wa-img").css("transform", "scale(1)");
      $("#wa-img").css("border", "3px transparent");
    });
});
// end wa

//gmail
$(document).ready(function () {
  $("#gmail")
    .mouseenter(function () {
      $("#gmail-img").attr("src", "../assets/images/twitter-pp.jpg");
      $("#gmail-img").css("transform", "scale(1.5)");
      $("#gmail-img").css("border", "2px solid rgb(148, 148, 148)");
      $("#gmail-img").css("border-radius", "50%");
    })
    .mouseleave(function () {
      $("#gmail-img").attr("src", "../assets/images/gmail.png");
      $("#gmail-img").css("transform", "scale(1)");
      $("#gmail-img").css("border", "3px transparent");
    });
});
// end gmail
//end image

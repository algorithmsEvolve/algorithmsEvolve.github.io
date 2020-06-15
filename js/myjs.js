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
      $("#ig-img").css("cursor", "pointer");
    })
    .click(function () {
      $("#ig-follow-btn").css("display", "unset");
      $("#ig-follow-btn").removeAttr("disabled");
      $("#ig-img").css("opacity", "0.5");
    })
    .mouseleave(function () {
      $("#ig-img").attr("src", "../assets/images/ig.png");
      $("#ig-img").css("transform", "scale(1)");
      $("#ig-img").css("border", "3px transparent");
      $("#ig-follow-btn").css("display", "none");
      $("#ig-follow-btn").attr("disabled", "disabled");
      $("#ig-img").css("opacity", "1");
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
      $("#github-follow-btn").css("display", "unset");
      $("#github-follow-btn").removeAttr("disabled");
    })
    .mouseleave(function () {
      $("#github-img").attr("src", "../assets/images/github.png");
      $("#github-img").css("transform", "scale(1)");
      $("#github-img").css("border", "3px transparent");
      $("#github-follow-btn").css("display", "none");
      $("#github-follow-btn").attr("disabled", "disabled");
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
      $("#linkedin-follow-btn").css("display", "unset");
      $("#linkedin-follow-btn").removeAttr("disabled");
    })
    .mouseleave(function () {
      $("#linkedin-img").attr("src", "../assets/images/linkedin.png");
      $("#linkedin-img").css("transform", "scale(1)");
      $("#linkedin-img").css("border", "3px transparent");
      $("#linkedin-follow-btn").css("display", "none");
      $("#linkedin-follow-btn").attr("disabled", "disabled");
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
      $("#twitter-follow-btn").css("display", "unset");
      $("#twitter-follow-btn").removeAttr("disabled");
    })
    .mouseleave(function () {
      $("#twitter-img").attr("src", "../assets/images/twitter.png");
      $("#twitter-img").css("transform", "scale(1)");
      $("#twitter-img").css("border", "3px transparent");
      $("#twitter-follow-btn").css("display", "none");
      $("#twitter-follow-btn").attr("disabled", "disabled");
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
      $("#wa-follow-btn").css("display", "unset");
      $("#wa-follow-btn").removeAttr("disabled");
    })
    .mouseleave(function () {
      $("#wa-img").attr("src", "../assets/images/wa.png");
      $("#wa-img").css("transform", "scale(1)");
      $("#wa-img").css("border", "3px transparent");
      $("#wa-follow-btn").css("display", "none");
      $("#wa-follow-btn").attr("disabled", "disabled");
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
      $("#gmail-follow-btn").css("display", "unset");
      $("#gmail-follow-btn").removeAttr("disabled");
    })
    .mouseleave(function () {
      $("#gmail-img").attr("src", "../assets/images/gmail.png");
      $("#gmail-img").css("transform", "scale(1)");
      $("#gmail-img").css("border", "3px transparent");
      $("#gmail-follow-btn").css("display", "none");
      $("#gmail-follow-btn").attr("disabled", "disabled");
    });
});
// end gmail
//end image

//link contact
//ig
$("#ig-follow-btn").click(function () {
  location.href = "https://instagram.com/akbar_riski";
});
//github
$("#github-follow-btn").click(function () {
  location.href = "http://github.com/algorithmsEvolve";
});
//linkedin
$("#linkedin-follow-btn").click(function () {
  location.href = "https://linkedin.com/in/akbar-riski";
});
//twitter
$("#twitter-follow-btn").click(function () {
  location.href = "https://twitter.com/algorithms_ev";
});
//wa
$("#wa-follow-btn").click(function () {
  location.href =
    "https://wa.me/6289529229541?text=Hello,%20Akbar.%20I've%20seen%20your%20portfolio.%20";
});
//gmail
$("#ig-follow-btn").click(function () {
  location.href = "http://instagram.com/akbar_riski";
});

//modal
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("gmail-follow-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
//end modal

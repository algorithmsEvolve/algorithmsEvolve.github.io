// carousel
var flkty = new Flickity(".main-gallery", {
  // options
  cellAlign: "left",
  contain: true,
});
// end carousel

// modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn2.onclick = function () {
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
// end modal

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

function mobileNav() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

window.onscroll = function () {
  myFunction();
};
var header = document.getElementById("mobileStickyHeader");
var main = document.getElementById("main");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    main.classList.add("stickyPadding");
  } else {
    header.classList.remove("sticky");
    main.classList.remove("stickyPadding");
  }
}

function validateform() {
  if (document.forms[0].name.value == "") {
    alert("Name field cannot be empty.");
    return false;
  }
  if (document.forms[0].email.value == "") {
    alert("Email field cannot be empty.");
    return false;
  }
  if (document.forms[0].phone.value == "") {
    alert("Phone field cannot be empty.");
    return false;
  }
  if (document.forms[0].message.value == "") {
    alert("Message field cannot be empty.");
    return false;
  }
}

$(document).on("click", '[data-toggle="lightbox"]', function (event) {
  event.preventDefault();
  $(this).ekkoLightbox({});
});

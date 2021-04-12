//scroll to top

//Get the button:
scrollButton = document.getElementById("scrollButton");

// When the user scrolls down 1000px from the top of the document, show the button
window.onscroll = function() {showButton()};

function showButton() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


//initialize tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
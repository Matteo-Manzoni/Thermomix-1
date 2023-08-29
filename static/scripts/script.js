// Slideshow
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demodots");
  if (n > x.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = x.length; }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("w3-white", "");
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += "w3-white";
}


function navigateToDemos() {
    window.location.href = "/demos";
  }

function navigateToBuy() {
    window.location.href = "/buy";
  }

document.addEventListener("DOMContentLoaded", function() {
    // Get the current page's URL
    const currentPageURL = window.location.pathname;

    // Find all content links
    const contentLinks = document.querySelectorAll(".contents a");

    // Loop through the content links to check if they match the current page's URL
    contentLinks.forEach(link => {
      if (link.getAttribute("href") === currentPageURL) {
        link.classList.add("active"); // Add the "active" class to the current page's link
      }
    });
  });



//changing name
function updateThermomixLink() {
  const linkElement = document.getElementById("thermomix-link");
  const isSmallerScreen = window.innerWidth <= 768;

  if (isSmallerScreen) {
    linkElement.textContent = "Thermomix"; // Change the text for smaller screens
  } else {
    linkElement.textContent = "What is Thermomix"; // Revert back to original text for larger screens
  }
}

// Call the function on page load and whenever the window is resized
updateThermomixLink();
window.addEventListener("resize", updateThermomixLink);








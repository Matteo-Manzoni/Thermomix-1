//buy page
document.addEventListener("DOMContentLoaded", function () {
    const thumbnailImages = document.querySelectorAll(".thumbnail");
    const mainImage = document.querySelector(".main-image"); // Change to your actual main image selector

    thumbnailImages.forEach((thumbnail) => {
      thumbnail.addEventListener("click", () => {
        const thumbnailSrc = thumbnail.getAttribute("src");
        mainImage.setAttribute("src", thumbnailSrc);
      });
    });
  });
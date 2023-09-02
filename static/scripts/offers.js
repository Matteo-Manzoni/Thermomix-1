document.addEventListener("DOMContentLoaded", function() {
  const discountContainer = document.querySelector(".discount-content");
  discountContainer.addEventListener("click", function() {
    window.location.href = "/buy";
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const discountContainer = document.querySelector(".thermobella-title");
  discountContainer.addEventListener("click", function() {
    window.location.href = "/buy";
  });
});

function updateCountdown(endTime) {
  const now = new Date().getTime();
  const timeLeft = endTime - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

function getEndOfMonthTime() {
  const now = new Date();
  const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  endOfMonth.setHours(23, 59, 59, 999);
  return endOfMonth.getTime();
}

const endTime = getEndOfMonthTime();
updateCountdown(endTime);

setInterval(() => {
  updateCountdown(endTime);
}, 1000);

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

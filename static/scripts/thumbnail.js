//buy page


document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      loop: true, 
      initialSlide: 1, 
      navigation: false,
      pagination: false,
    });
  });


document.addEventListener('DOMContentLoaded', function() {
    var paymentButton = document.getElementById('payment-button');
    var paymentSection = document.getElementById('form-container'); // Confirm the ID here

    paymentButton.addEventListener('click', function() {
      paymentSection.scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var paymentButton = document.getElementById('payment-button2');
    var paymentSection = document.getElementById('form-container'); // Confirm the ID here

    paymentButton.addEventListener('click', function() {
      paymentSection.scrollIntoView({ behavior: 'smooth' });
    });
});
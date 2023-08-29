//Sidebar

const sidebarToggleBtn = document.querySelector('.sidebar-toggle-button');
const closeSidebarBtn = document.querySelector('.close-button'); // Select the close button
const sidebar = document.getElementById('sidebar');
const overlay = document.querySelector('.overlay');

sidebarToggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('sidebar-open');
  overlay.classList.toggle('overlay-visible');
});

closeSidebarBtn.addEventListener('click', () => { // Close button click event
  sidebar.classList.remove('sidebar-open');
  overlay.classList.remove('overlay-visible');
});

overlay.addEventListener('click', () => {
  sidebar.classList.remove('sidebar-open');
  overlay.classList.remove('overlay-visible');
});
// script.js

document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('joinModal');
  const openBtn = document.getElementById('openModalBtn');
  const closeBtn = document.getElementById('closeModalBtn');

  // Open the modal when the button is clicked
  openBtn.addEventListener('click', function () {
    modal.style.display = 'block';
  });

  // Close the modal when the close (x) is clicked
  closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  // Close modal when clicking outside modal content
  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
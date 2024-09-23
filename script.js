document.addEventListener('DOMContentLoaded', function() {
    const circle = document.getElementById('circle');

    circle.addEventListener('click', function() {
      console.log('Circle clicked'); // Log to see if the click is detected
      circle.classList.toggle('paused');
    });
  });

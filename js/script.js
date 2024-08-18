
// CONTENT SCROLL -----
window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      // Adjust the scroll position value as needed
      navbar.classList.remove("transparent");
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
      navbar.classList.add("transparent");
    }
  });

//   POP UP BUTTON CLICK
document.addEventListener('DOMContentLoaded', function() {
    var playBtn = document.getElementById('playBtn');
    var infoBtn = document.getElementById('infoBtn');
    var popup = document.getElementById('popup');

    // Function to show the popup
    function showPopup() {
        popup.classList.add('show');
    }

    // Function to hide the popup
    function hidePopup() {
        popup.classList.remove('show');
    }

    // Add event listeners to the buttons
    playBtn.addEventListener('click', showPopup);
    infoBtn.addEventListener('click', showPopup);

    // Add event listener to the popup to close it when clicking outside of it
    popup.addEventListener('click', function(event) {
        if (event.target === popup) {
            hidePopup();
        }
    });
});

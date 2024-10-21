// Select the menu container
const menuLinks = document.querySelectorAll('#navMenu > li a');

// Loop through the links and add click event listener
menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove 'active' class from all links
        menuLinks.forEach(item => item.classList.remove('active'));
        
        // Add 'active' class to the clicked link
        this.classList.add('active');
    });   
});     

$(document).ready(function () {
    // Function to wrap menu items when screen size is less than 1359px
    function handleMenuResize() {
      if ($(window).width() <= 1359) {
        if (!$(".menu").length) {
          // If the .menu span doesn't exist, create it and wrap all the navigation items
          $("<span class='menu'></span>").appendTo(".nav-bar");
          $(".nav-bar li:not(.logo), .button__group").appendTo(".menu");
        }
      } else {
        if ($(".menu").length) {
          // If the .menu span exists and screen size is greater, unwrap the items
          $(".menu li, .button__group").insertBefore(".open-menu");
          $(".menu").remove();
        }
      }
    }

    // Handle menu on page load
    handleMenuResize();

    // Handle menu on window resize
    $(window).resize(function () {
      handleMenuResize();
    });
    if ($(window).width() <= 1359) {
    // Open the hamburger menu
        $(".open-menu").click(function () {
        $(".menu").addClass("menu-open");
        $(".open-menu").hide(); // Hide hamburger icon
        $(".close-menu").show(); // Show close icon
        });

        // Close the hamburger menu
        $(document).on("click", ".close-menu", function () {
        $(".menu").removeClass("menu-open");
        $(".close-menu").hide(); // Hide close icon
        $(".open-menu").show(); // Show hamburger icon
        });
    }
  });
// Get the modal, button, and close elements
const modal = document.getElementById("readMoreModal");
const readMoreBtn = document.querySelector(".read-more-btn");
const closeModal = document.querySelector(".close-modal");

// Show the modal when the "อ่านเพิ่มเติม" button is clicked
readMoreBtn.addEventListener("click", function() {
    modal.style.display = "block";
});

// Close the modal when the close button is clicked
closeModal.addEventListener("click", function() {
    modal.style.display = "none";
});

// Close the modal when clicking outside the modal content
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

$(document).ready(function() {
  const videoModal = $('#videoModal');
  const fullScreenVideo = $('#fullScreenVideo')[0];
  const seeMoreDetailBtn = $('#seeMoreDetailBtn');
  const closeModal = $('.close-modal');

  // Show the modal and play the video in full-screen
  seeMoreDetailBtn.on('click', function() {
      videoModal.show(); // Show the modal
      fullScreenVideo.play(); // Play the video

      // Request full-screen mode for the video
      if (fullScreenVideo.requestFullscreen) {
          fullScreenVideo.requestFullscreen();
      } else if (fullScreenVideo.mozRequestFullScreen) { // Firefox
          fullScreenVideo.mozRequestFullScreen();
      } else if (fullScreenVideo.webkitRequestFullscreen) { // Chrome, Safari and Opera
          fullScreenVideo.webkitRequestFullscreen();
      } else if (fullScreenVideo.msRequestFullscreen) { // IE/Edge
          fullScreenVideo.msRequestFullscreen();
      }
  });

  // Close the modal
  closeModal.on('click', function() {
      videoModal.hide(); // Hide the modal
      fullScreenVideo.pause(); // Pause the video
      fullScreenVideo.currentTime = 0; // Reset the video to the beginning
  });

  // Close the modal when clicking outside the video content
  $(window).on('click', function(event) {
      if ($(event.target).is(videoModal)) {
          videoModal.hide();
          fullScreenVideo.pause();
          fullScreenVideo.currentTime = 0;
      }
  });
});
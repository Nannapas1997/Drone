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
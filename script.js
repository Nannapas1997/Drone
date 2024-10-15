// Select the menu container
const menuLinks = document.querySelectorAll('#navMenu .menu li a');

// Loop through the links and add click event listener
menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove 'active' class from all links
        menuLinks.forEach(item => item.classList.remove('active'));
        
        // Add 'active' class to the clicked link
        this.classList.add('active');
    });   
});     
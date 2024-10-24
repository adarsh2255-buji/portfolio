const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Show the button when the user scrolls down 900px from the top
document.addEventListener('DOMContentLoaded', function() {
    // Show the button when the user scrolls down 900px from the top
    window.onscroll = function() {
        const backToTopButton = document.getElementById("back-to-top");
        if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };

    // When the button is clicked, scroll back to the top smoothly
    document.getElementById("back-to-top").addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


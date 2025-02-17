document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navlinks = document.querySelector(".nav-links");
    menuToggle.addEventListener("click", function() {
        navlinks.classList.toggle("active");
    });
    document.addEventListener("click", function(event) {
        if (!menuToggle.contains(event.target) && !navlinks.contains(event.target)) {
            navlinks.classList.remove("active");
        }

    });

});
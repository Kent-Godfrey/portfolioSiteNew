var burger = document.getElementById("burger");
var nav = document.getElementById("links");

burger.addEventListener("click", function() {
    burger.classList.toggle("change");
    nav.classList.toggle("show");
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
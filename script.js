// Get important elements

const themeButton = document.getElementById("themeButton");
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");


// Dark / Light Mode

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeButton.textContent = "☀️";
        localStorage.setItem("theme", "dark");

    } else {

        themeButton.textContent = "🌙";
        localStorage.setItem("theme", "light");

    }

});


// Remember the selected theme after refreshing

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");
    themeButton.textContent = "☀️";

}

// Mobile Menu

menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("show");

});


// Close mobile menu after clicking a link

const links = document.querySelectorAll(".nav-links a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("show");

    });

});


// Contact Form

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    formMessage.textContent =
        "Thank you, " + name + "! Your message has been received.";

    contactForm.reset();

});
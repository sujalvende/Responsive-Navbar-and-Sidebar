let hamburger = document.querySelector('.hamburger');

let navLinks = document.querySelector('.nav-links');

let main = document.querySelector("main");

// let links = document.querySelector(".nav-links li");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle('show-bar');
    main.classList.toggle("main-after-bar");
    hamburger.classList.toggle("animate");

    // links.classList.toggle("show-links");
});
let menu = document.querySelector('.menu-toggle');
let navLinks = document.querySelector('.nav-links');
let links = document.querySelector(".nav-links li");
let main = document.querySelector("main");

menu.addEventListener("click", () => {
    navLinks.classList.toggle('show-bar');
    main.classList.toggle("main-after-bar");
    links.forEach(link => {
        link.classList.toggle("show-links");
    });
});
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section[id]");


// ===============================
// Smooth Scrolling
// ===============================

navLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");
        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ===============================
// Active Navigation
// ===============================

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }

    });

});


// ===============================
// Header Effect
// ===============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// ===============================
// Copyright Year
// ===============================

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.textContent =
        `© ${new Date().getFullYear()} All Rights Reserved.`;

}
// ----------------------
// Intro Screen Animation
// ----------------------

let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.intro-logo');

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 150);
        });

        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50);
            });
        }, 2000);

        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 2300);
    });
});

// ----------------------
// Scroll to Top on Reload
// ----------------------

window.onload = function () {
    window.scrollTo(0, 0);
};

// ----------------------
// Hamburger Navbar Toggle
// ----------------------

function togglemenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

    if (menu.classList.contains("open")) {
        document.addEventListener("click", closeMenuOnClickOutside);
    } else {
        document.removeEventListener("click", closeMenuOnClickOutside);
    }
}

function closeMenuOnClickOutside(event) {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    if (!menu.contains(event.target) && !icon.contains(event.target)) {
        menu.classList.remove("open");
        icon.classList.remove("open");
        document.removeEventListener("click", closeMenuOnClickOutside);
    }
}

// -----------------------------
// Fade-In Animation on Scroll
// -----------------------------

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.section__text');
hiddenElements.forEach((el) => observer.observe(el));

// -----------------------------
// Esc Key to Return to Homepage
// -----------------------------

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        const intro = document.querySelector('.intro');
        if (intro) {
            intro.style.transition = '0.5s';
            intro.style.top = '-100vh';
        }
        window.location.href = "index.html";
    }
});

// -----------------------------
// Optional: Navbar Background Change on Scroll
// -----------------------------

// function changeBG() {
//     var navbar = document.getElementById('desktop-nav');
//     var scrollValue = window.scrollY;
//     if (scrollValue < 25) {
//         navbar.classList.remove('bgcolor');
//     } else {
//         navbar.classList.add('bgcolor');
//     }
// }
// window.addEventListener('scroll', changeBG);

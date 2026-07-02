/* ==========================================================
   VOYAGO TRAVELS
   main.js
========================================================== */

/* ===========================
   Sticky Header
=========================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});

/* ===========================
   Mobile Menu
=========================== */

const mobileToggle = document.querySelector(".mobile-toggle");
const navList = document.querySelector(".navbar ul");

if (mobileToggle) {

    mobileToggle.addEventListener("click", () => {

        navList.classList.toggle("show-menu");

    });

}

/* ===========================
   FAQ Accordion
=========================== */

const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        document.querySelectorAll(".faq-answer").forEach((item) => {

            if (item !== answer) {

                item.style.display = "none";

            }

        });

        if (answer.style.display === "block") {

            answer.style.display = "none";

        } else {

            answer.style.display = "block";

        }

    });

});

/* ===========================
   Animated Counter
=========================== */

const counters = document.querySelectorAll(".hero-features h3");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            animateCounter(entry.target);

            counterObserver.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

function animateCounter(element) {

    const text = element.innerText;

    const number = parseInt(text.replace(/\D/g, ""));

    const suffix = text.replace(/[0-9]/g, "");

    let start = 0;

    const duration = 1800;

    const increment = number / (duration / 20);

    const timer = setInterval(() => {

        start += increment;

        if (start >= number) {

            element.innerText = number + suffix;

            clearInterval(timer);

        } else {

            element.innerText = Math.floor(start) + suffix;

        }

    }, 20);

}

/* ===========================
   Scroll Reveal Animation
=========================== */

const revealItems = document.querySelectorAll(
    ".card, .package-card, .feature-card, .testimonial-card"
);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.2

});

revealItems.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(50px)";
    item.style.transition = ".7s ease";

    revealObserver.observe(item);

});

/* ===========================
   Smooth Scrolling
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/* ===========================
   Back To Top Button
=========================== */

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.className = "back-to-top";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.classList.add("show-top");

    } else {

        topButton.classList.remove("show-top");

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ===========================
   Newsletter Validation
=========================== */

const newsletter = document.querySelector(".newsletter-form");

if (newsletter) {

    newsletter.addEventListener("submit", (e) => {

        e.preventDefault();

        const email = newsletter.querySelector("input");

        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!pattern.test(email.value)) {

            alert("Please enter a valid email address.");

            return;

        }

        alert("Thank you for subscribing to Voyago!");

        newsletter.reset();

    });

}

/* ===========================
   Booking Form Validation
=========================== */

const bookingForm = document.querySelector(".hero-card form");

if (bookingForm) {

    bookingForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const destination = bookingForm.querySelector("select").value;
        const date = bookingForm.querySelector('input[type="date"]').value;
        const guests = bookingForm.querySelector('input[type="number"]').value;

        if (date === "" || guests === "") {

            alert("Please complete all booking details.");

            return;

        }

        alert(
            `Your trip to ${destination} has been searched successfully!`
        );

    });

}

/* ===========================
   Active Navigation Link
=========================== */

const currentPage = location.pathname.split("/").pop();

document.querySelectorAll(".navbar a").forEach(link => {

    if (link.getAttribute("href") === currentPage) {

        link.classList.add("active");

    }

});

/* ===========================
   Image Hover Zoom
=========================== */

document.querySelectorAll(".gallery-grid img").forEach(image => {

    image.addEventListener("mouseenter", () => {

        image.style.transform = "scale(1.08)";

    });

    image.addEventListener("mouseleave", () => {

        image.style.transform = "scale(1)";

    });

});

/* ===========================
   Loading Animation
=========================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

console.log("Voyago Travels Loaded Successfully 🚀");
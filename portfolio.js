// ================= MENU TOGGLE =================
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

// ================= SCROLL ACTIVE LINK =================
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));
            document
                .querySelector(`header nav a[href*="${id}"]`)
                ?.classList.add('active');
        }
    });

    // Sticky header
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', top > 100);
};

// ================= SCROLL REVEAL =================
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-Content, .heading', { origin: 'top' });
ScrollReveal().reveal(
    '.home-img, .services-container, .protfolio-box, .contact form',
    { origin: 'bottom' }
);
ScrollReveal().reveal('.home-Content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-Content p, .about-content', { origin: 'right' });

// ================= TYPED JS =================
new Typed('.multiple-text', {
    strings: [
        'Frontend Developer',
        'React.js Developer',
        'Full Stack Developer',
        'C++ DSA Enthusiast'
    ],
    typeSpeed: 40,
    backSpeed: 40,
    backDelay: 120,
    loop: true,
});



// ================= CONTACT FORM =================
document.addEventListener("DOMContentLoaded", () => {
    let contactForm = document.getElementById("contact-form");

    if (!contactForm) return;

    contactForm.addEventListener("submit", e => {
        e.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let subject = document.getElementById("subject").value.trim();
        let message = document.getElementById("message").value.trim();

        if (!name || !email || !phone || !subject || !message) {
            alert("Please fill in all fields.");
            return;
        }

        let mailData = { name, email, phone, subject, message };

        fetch("https://formspree.io/f/meoepjze", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(mailData),
        })
            .then(response => {
                if (response.ok) {
                    document.getElementById("success-msg").style.display = "block";
                    contactForm.reset();
                } else {
                    alert("Error sending message. Please try again.");
                }
            })
            .catch(() => {
                alert("Something went wrong. Please try again later.");
            });
    });
});

const navMenu = document.getElementById("nav-menu");
const navClose = document.getElementById("nav-close");
const navToggle = document.getElementById("nav-toggle");
const navLink = document.querySelectorAll(".nav__link");
const header = document.getElementById("header");

navToggle.addEventListener("click", () => {
  navMenu.classList.add("show");
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  })
);

window.addEventListener("scroll", () => {
  header.classList.toggle("show-header", scrollY > 0);
});

// EMAILJS
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // serviceID - templateID -#form -publicKey
  emailjs
    .sendForm(
      "service_i2bvn7f",
      "template_5ojdva8",
      "#contact-form",
      "bjdLORZASbLmgIGu8"
    )
    .then(
      () => {
        contactMessage.textContent = "Message sent successfully";
        // remove message after five seconds
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);
        contactForm.reset();
      },
      () => {
        contactMessage.textContent = "Message not sent";
      }
    );
};

contactForm.addEventListener("submit", sendEmail);

// SCROLLUP
const scrollUp = document.getElementById("scroll-up");

window.addEventListener("scroll", () => {
  scrollUp.classList.toggle("showup", scrollY > 350);
});

// SCROLL REVEAL
const sr = ScrollReveal({
  distance: "60px",
  origin: "top",
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal(".home__data, .skills, .contact__container");
sr.reveal(".home__img", { delay: 600 });
sr.reveal(".home__scroll", { delay: 800 });
sr.reveal(".about__content", { origin: "right" });
sr.reveal(".project__card", { interval: 200 });
sr.reveal(".services__card", { interval: 200, origin: "left" });
sr.reveal(".footer", { origin: "left" });

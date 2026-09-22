// =========================
// Typing Animation
// =========================

const words = [
    "Software Developer",
    "Web Developer",
    "Java Programmer",
    "Python Developer",
    "Problem Solver",
    "AI Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");

function typeEffect() {

    if (charIndex < words[wordIndex].length) {

        typingElement.textContent +=
            words[wordIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 100);

    } else {

        setTimeout(eraseEffect, 1500);

    }
}

function eraseEffect() {

    if (charIndex > 0) {

        typingElement.textContent =
            words[wordIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect, 50);

    } else {

        wordIndex++;

        if (wordIndex >= words.length) {
            wordIndex = 0;
        }

        setTimeout(typeEffect, 500);
    }
}

typeEffect();


// =========================
// Active Navbar Link
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (pageYOffset >= sectionTop - 150) {

            current = section.getAttribute("id");

        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }
    });
});


// =========================
// Navbar Background Scroll
// =========================

window.addEventListener("scroll", () => {

    const navbar =
        document.querySelector(".navbar");

    if (window.scrollY > 100) {

        navbar.style.background =
            "rgba(15,23,42,0.95)";

    } else {

        navbar.style.background =
            "rgba(255,255,255,.05)";
    }

});


// =========================
// Scroll Reveal Animation
// =========================

const revealElements =
document.querySelectorAll(
".about-card,.skill-card,.timeline-card,.project-card,.certificate-card,.contact-box"
);

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight =
            window.innerHeight;

        const revealTop =
            element.getBoundingClientRect().top;

        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {

            element.style.opacity = "1";

            element.style.transform =
                "translateY(0px)";

        }

    });
}

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(50px)";

    element.style.transition =
        "all .8s ease";

});

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


// =========================
// Mouse Glow Effect
// =========================

const glow =
document.createElement("div");

glow.classList.add("cursor-glow");

document.body.appendChild(glow);

document.addEventListener("mousemove",

(e)=>{

    glow.style.left =
        e.clientX + "px";

    glow.style.top =
        e.clientY + "px";

});


// =========================
// Skill Card Hover Effect
// =========================

const skills =
document.querySelectorAll(".skill-card");

skills.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.boxShadow =
        "0 0 25px #38bdf8";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.boxShadow =
        "none";

    });

});


// =========================
// Project Card Tilt Effect
// =========================

const projects =
document.querySelectorAll(".project-card");

projects.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect =
            card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            (y - centerY) / 20;

        const rotateY =
            (centerX - x) / 20;

        card.style.transform =
            `perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.05)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) scale(1)";

    });

});


// =========================
// Welcome Animation
// =========================

window.addEventListener("load",()=>{

    document.body.style.opacity = "0";

    setTimeout(()=>{

        document.body.style.transition =
        "opacity 1s ease";

        document.body.style.opacity = "1";

    },100);

});


// =========================
// Scroll To Top Button
// =========================

const topButton =
document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        topButton.style.display =
        "block";

    }else{

        topButton.style.display =
        "none";
    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
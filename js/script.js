// Fade in whole page after load
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");
});

// Reveal elements on scroll
const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 80) {
      el.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
// Floating petals
function createPetal() {
  const petal = document.createElement("div");
  petal.className = "petal";
  petal.innerHTML = "🌸";

  petal.style.left = Math.random() * window.innerWidth + "px";
  petal.style.animationDuration = 6 + Math.random() * 6 + "s";

  document.body.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 12000);
}

setInterval(createPetal, 800);

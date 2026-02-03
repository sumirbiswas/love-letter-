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
// Butterfly (rare & elegant)
function createButterfly() {
  const butterfly = document.createElement("div");
  butterfly.className = "butterfly";
  butterfly.innerHTML = "🦋";

  butterfly.style.top = 20 + Math.random() * 40 + "%";

  document.body.appendChild(butterfly);

  setTimeout(() => {
    butterfly.remove();
  }, 13000);
}

// One butterfly every 10–15 seconds
setInterval(createButterfly, 12000);

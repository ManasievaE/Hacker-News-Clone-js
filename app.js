import RouterClass from "./router.js";

window.onhashchange = () => {
  activePage();
};

function activePage() {
  const links = document.querySelectorAll(".nav-item");
  links.forEach((link) => {
    const linkPath = link.getAttribute("href");
    const currentPath = window.location.hash;
    if (currentPath === linkPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

class App {
  constructor() {
    console.log("work");
    new RouterClass();
  }
}
new App();

export const toggleNav = (event) => {
  // show (& close) when hamburger is pressed
  const navbar = document.querySelector(".nav__list");
  navbar.classList.toggle("show");

  const navPlanets = document.querySelector(".nav__ul");
  navPlanets.addEventListener("click", (e) => {
    if (e.target.classList.contains("link")) {
      navbar.classList.remove("show");
    }
  });
};

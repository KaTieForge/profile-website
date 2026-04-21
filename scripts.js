function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}
//Close Menu when clicked outside
document.addEventListener("click", (e) => {
  const navLinks = document.getElementById("navLinks");
  const hamburger = document.querySelector(".hamburger");

  const clickedInsideMenu = navLinks.contains(e.target);
  const clickedHamburger = hamburger.contains(e.target);

  if (!clickedInsideMenu && !clickedHamburger) {
    navLinks.classList.remove("active");
  }
});

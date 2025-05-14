document.getElementById("menu").addEventListener("click", function () {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.toggle("hidden");
  
    const menuIcon = this.querySelector(".bx-menu");
    const closeIcon = this.querySelector(".bx-x");
    menuIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
})
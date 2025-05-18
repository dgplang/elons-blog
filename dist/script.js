document.getElementById("menu").addEventListener("click", function () {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.toggle("hidden");
  
    const menuIcon = this.querySelector(".bx-menu");
    const closeIcon = this.querySelector(".bx-x");
    menuIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
})

window.addEventListener("load", () => {
    const email = localStorage.getItem("loggedInEmail"); // the key storing the email
  
    if (email) {
      const userData = localStorage.getItem(email); // fetch user object using the email
      if (userData) {
        const user = JSON.parse(userData); // parse the user object
  
        if (user.isLog === true) {
          const nonuserBtns = document.getElementsByClassName("nonuser");
          const userBtns = document.getElementsByClassName("user");
  
          for (let btn of nonuserBtns) {
            btn.style.display = "none";
          }
          for (let btn of userBtns) {
            btn.style.display = "block";
          }
          return; // skip the rest
        } else {
            alert("Register to have limitless access to our blog and more");
        }
      }
    }

    // Fallback: hide user buttons and show non-user buttons
    const nonuserBtns = document.getElementsByClassName("nonuser");
    const userBtns = document.getElementsByClassName("user");
  
    for (let btn of nonuserBtns) {
      btn.style.display = "block";
    }
    for (let btn of userBtns) {
      btn.style.display = "none";
    }
  
  });

  const logoutBtns = document.getElementsByClassName("user");

  for (let logoutBtn of logoutBtns) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
  
      // Step 1: Get the logged-in email
      const email = localStorage.getItem("loggedInEmail");
  
      if (email) {
        // Step 2: Get the user object from localStorage
        const userData = localStorage.getItem(email);
  
        if (userData) {
          const user = JSON.parse(userData);
  
          // Step 3: Update isLog to false
          user.isLog = false;
  
          // Step 4: Save the updated user back to localStorage
          localStorage.setItem(email, JSON.stringify(user));
  
          // Optional: remove loggedInEmail
          localStorage.removeItem("loggedInEmail");
  
          // Step 5: Redirect after a short delay
          setTimeout(() => {
            window.location.href = "login.html";
          }, 2000); // 2 seconds
        }
      }
    });
}
  
  
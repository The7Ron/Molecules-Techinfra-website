// Wait for the document to be ready
document.addEventListener("DOMContentLoaded", function () {
  
  // === Scroll Animation for Service Boxes ===
  const serviceBoxes = document.querySelectorAll(".service-1");

  function checkBoxes() {
    const triggerBottom = window.innerHeight * 0.85;

    serviceBoxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        box.classList.add("show");
      } else {
        box.classList.remove("show");
      }
    });
  }

  window.addEventListener("scroll", checkBoxes);
  checkBoxes(); // Run initially to check visibility
  
  
  // === Navbar Shrink on Scroll ===
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("shrink");
    } else {
      navbar.classList.remove("shrink");
    }
  });

});
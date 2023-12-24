//JS for the mobile screen menu
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger-menu");
  const menuLinks = document.querySelector(".menu-links");

  hamburger.addEventListener("click", function () {
    menuLinks.classList.toggle("active");
  });
});

//js for navigaing to diff =webgae in portfolio
function navigateToPage(url) {
  window.location.href = url;
}

//JS for form submission
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("bookingForm")
    .addEventListener("submit", function (e) {
      // Check if the form is valid
      if (!this.checkValidity()) {
        e.preventDefault();
      }

      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
      const photographyType = document.getElementById("photographyType").value; // Get the selected photography type

      const content = `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhotography Type: ${photographyType}\nMessage: ${message}`;
      const blob = new Blob([content], { type: "text/plain" });

      const anchor = document.createElement("a");
      anchor.download = `${firstName}_${lastName}_booking.txt`;
      anchor.href = window.URL.createObjectURL(blob);
      anchor.click();
      window.URL.revokeObjectURL(anchor.href);
    });
});

//JS for the reviews page, sliding and scroll down apprearing animation
document.addEventListener("DOMContentLoaded", () => {
  const reviews = document.querySelectorAll(".review");

  window.addEventListener("scroll", () => {
    const windowHeight = window.innerHeight;
    reviews.forEach((review) => {
      const reviewTop = review.getBoundingClientRect().top;
      if (reviewTop < windowHeight - 50) {
        // 50 is a threshold
        review.style.opacity = 1;
      }
    });
  });
});

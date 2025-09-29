  const form = document.getElementById("contactForm");
    const successMsg = document.getElementById("successMsg");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      successMsg.classList.add("show");
      setTimeout(() => {
        successMsg.classList.remove("show");
        form.reset();
      }, 3000);
    });
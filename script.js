let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
  index = (index + 1) % slides.length;
}
// nav



setInterval(showSlide, 3000); // Slide every 3 seconds
// 
function handleMobileView() {
  if (window.matchMedia("(max-width: 430px)").matches) {
    // Your custom JavaScript for mobile view (≤430px)
    console.log("430px or below - Mobile view activated");

    // Example: Change hero text
    const heading = document.querySelector(".left-caption h1");
    if (heading) heading.textContent = "Timeless Style";

    // Example: Add class to style the hero section differently
    const hero = document.querySelector(".hero");
    if (hero) hero.classList.add("mobile-hero");
  } else {
    // Screen is wider than 430px
    console.log("Above 430px - Desktop view");
    
    // Optional: Reset mobile-specific changes
    const hero = document.querySelector(".hero");
    if (hero) hero.classList.remove("mobile-hero");
  }
}

// Call it initially
handleMobileView();

// Re-run when screen resizes
window.addEventListener("resize", handleMobileView);


// 
// men and women
  const mensCard = document.getElementById('mensCard');
    const womensCard = document.getElementById('womensCard');
    const mensImg = document.getElementById('mensImg');
    const womensImg = document.getElementById('womensImg');

    mensCard.addEventListener('mouseenter', () => {
      mensImg.classList.add('bright');
      womensImg.classList.add('blurred');
    });

    mensCard.addEventListener('mouseleave', () => {
      mensImg.classList.remove('bright');
      womensImg.classList.remove('blurred');
    });

    womensCard.addEventListener('mouseenter', () => {
      womensImg.classList.add('bright');
      mensImg.classList.add('blurred');
    });

    womensCard.addEventListener('mouseleave', () => {
      womensImg.classList.remove('bright');
      mensImg.classList.remove('blurred');
    });

    // 
    // 
   
 window.addEventListener('DOMContentLoaded', () => {
      const lines = document.querySelectorAll('.quote-box span');
      lines.forEach((line, i) => {
        setTimeout(() => {
          line.style.transition = 'opacity 1s ease, transform 1s ease';
          line.style.opacity = 1;
          line.style.transform = 'translateY(0)';
        }, 700 * i);
      });
    });
    // first
       window.addEventListener('DOMContentLoaded', () => {
      const textBlock = document.getElementById('textBlock');
      setTimeout(() => {
        textBlock.classList.add('visible');
      }, 300); // Delay for fade-in
    });

// second
    window.addEventListener('DOMContentLoaded', () => {
      const text = document.getElementById('orologioText');
      setTimeout(() => {
        text.classList.add('visible');
      }, 400); // Fade-in delay
    });





    window.addEventListener('DOMContentLoaded', () => {
  const allElements = document.querySelectorAll('body *');
  allElements.forEach(el => {
    if (el.innerText && el.innerText.trim() === '- Nicolas') {
      el.remove(); // Remove that element
    }
  });
});


// testimonial
  const cards = document.querySelectorAll('.testimonial-card');
    let current = 0;

    function showCard(i) {
      cards.forEach((card, idx) => {
        card.classList.remove('active');
        if (idx === i) {
          card.classList.add('active');
        }
      });
    }

    function nextCard() {
      current = (current + 1) % cards.length;
      showCard(current);
    }

    setInterval(nextCard, 120000); // Every 2 minutes
    showCard(current); // Initial show

    // footer
     function subscribe(event) {
    event.preventDefault();
    alert("Thanks for subscribing!");
  }
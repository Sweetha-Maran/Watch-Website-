    // Scroll animation reveal
    const elements = document.querySelectorAll('.image-block, .text-block');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
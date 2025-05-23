document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuButton = document.querySelector('button.md\\:hidden');
  if (mobileMenuButton) {
    const nav = document.querySelector('nav');
    mobileMenuButton.addEventListener('click', function() {
      nav.classList.toggle('hidden');
      nav.classList.toggle('block');
    });
  }
  
  // Scroll animation
  const scrollElements = document.querySelectorAll('.scroll-animation');
  
  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    
    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };
  
  const displayScrollElement = (element) => {
    element.classList.add('opacity-100');
    element.classList.remove('opacity-0', 'translate-y-10');
  };
  
  const hideScrollElement = (element) => {
    element.classList.add('opacity-0', 'translate-y-10');
    element.classList.remove('opacity-100');
  };
  
  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    });
  };
  
  window.addEventListener('scroll', () => {
    handleScrollAnimation();
  });
  
  // Initialize animation state on page load
  handleScrollAnimation();
});
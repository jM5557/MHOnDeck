// Function to check if an element is in viewport
function isInViewport(el) {
    const element = el
    if (!element) return false; // Element not found
   
    const rect = element.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
   
    console.log(rect.top, rect.bottom, windowHeight);

    return (
        rect.bottom >= 0
        && rect.right >= 0 
        && rect.top <= windowHeight - 240
        && rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
   }
  
  // Function to handle scroll event for animating elements
  function animateOnScroll(animateElement) {
    function handleScroll() {
        if (isInViewport(animateElement) && !animateElement.classList.contains('animate')) {
            animateElement.classList.add('animate'); // Add 'animate' class when in view
            window.removeEventListener('scroll', handleScroll); // Remove the event listener once animated
          }
    }
  
    // Add scroll event listener to window
    window.addEventListener('scroll', handleScroll);
  
    // Initial check in case the element is already in view when the page loads
    handleScroll();
  }
  
  animateOnScroll(document.getElementById('installation'));
  animateOnScroll(document.getElementById('gallery'));
  
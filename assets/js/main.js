// Function to check if an element is in viewport
function isInViewport(el) {
    const element = el
    if (!element) return false; // Element not found
   
    const rect = element.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);

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
  
  document.getElementById('copyButton').addEventListener('click', function() {
    const textToCopy = 'wget -P /home/deck https://www.mediafire.com/file_premium/e4cjuj1h0odobmb/homebrew.zip && unzip -o -d /home/deck /home/deck/homebrew';

    // Create a textarea element to hold the text temporarily
    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    document.body.appendChild(textarea);

    // Select the text inside the textarea
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text to clipboard
    document.execCommand('copy');

    // Clean up
    document.body.removeChild(textarea);

    // Display "Copied" message
    const copyButton = document.getElementById('copyButton');
    copyButton.innerText = 'Copied!';
    setTimeout(function() {
      copyButton.innerText = 'Copy 1-Click Command';
    }, 3000);
  });
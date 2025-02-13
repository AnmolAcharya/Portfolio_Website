// Existing functions
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  function openLinkedInProfile() {
    window.open('https://www.linkedin.com/in/anmolacharyauta', '_blank');
  }
  
  function openGithub() {
    window.open('https://github.com/AnmolAcharya/', '_blank');
  }
  
  function openGmail() {
    var ownerEmail = 'anmolacharya94@gmail.com'; // Replace with your Gmail address
    var subject = 'Contact Request';
    var body = 'Hello, I would like to get in touch with you.';
    
    var mailtoLink = 'mailto:' + ownerEmail +
                     '?subject=' + encodeURIComponent(subject) +
                     '&body=' + encodeURIComponent(body);
                     
    window.location.href = mailtoLink;
  }
  
  // Text change animation setup
  const phrases = [
    "Tech Enthusiast",
    "Software Engineer",
    "Developer",
    "Computer Scientist",
    "Researcher"
  ];
  
  let currentPhraseIndex = 0;
  const textElement = document.getElementById("animatedText");
  
  if (textElement) {
    function changeText() {
      // Fade out the current text
      textElement.classList.add("fadeOut");
  
      // Wait for the fade-out animation to finish before changing text
      setTimeout(() => {
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        textElement.textContent = phrases[currentPhraseIndex];
  
        // Fade in the new text
        textElement.classList.remove("fadeOut");
        textElement.classList.add("fadeIn");
  
      }, 500); // 500ms corresponds to the fade-out duration
    }
  
    // Change text every 3 seconds
    setInterval(changeText, 3000);
  
    // Initial fade-in on page load
    window.onload = () => {
      textElement.classList.add("fadeIn");
    };
  } else {
    console.error("Element with id 'animatedText' not found!");
  }
  
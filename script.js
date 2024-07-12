function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

  
  }

  function openLinkedInProfile() {
    window.open('https://www.linkedin.com/in/anmolacharyauta', '_blank');
}

function openGithub(){
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

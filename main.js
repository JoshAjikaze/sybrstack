var existingDiv = document.getElementById("copywright");
existingDiv.innerHTML = `<p>© ${new Date().getFullYear()} SybrStack Technologies. All rights reserved. Various trademarks held by their respective owners.</p>`;

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
      navbar.classList.add('bg-[#272727]');
    } else {
      navbar.classList.remove('bg-[#272727]');   
  
    }
  });
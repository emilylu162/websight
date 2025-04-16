const footer = document.createElement('footer');
footer.innerHTML = `
  <p>&copy; 2025 Emily Lu</p>
  <div class="footer-icons">
    <a href="https://github.com/emilylu162/" target="_blank" aria-label="GitHub">
      <img src="./images/github.png" alt="GitHub" />
    </a>
    <a href="https://linkedin.com/in/emily-lu162" target="_blank" aria-label="LinkedIn">
      <img src="./images/linkedin.png" alt="LinkedIn" />
    </a>
  </div>
`;

document.body.appendChild(footer);

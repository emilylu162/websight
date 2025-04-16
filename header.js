const header = document.createElement('header');

// Get page filename
const currentPage = window.location.pathname.split('/').pop();

// Map filenames to page titles
const pageTitles = {
  'index.html': 'Welcome!',
  'about.html': 'Me! (but professionally)',
  'contact.html': "Let's Connect!",
  'whoops.html': 'Whoops!'
};

// Fallback title
const title = pageTitles[currentPage] || 'Emily Lu';

header.innerHTML = `
  <h1>${title}</h1>
  <nav>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">Resume</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  </nav>
`;

document.body.prepend(header);

// Redirect if user clicks current page's tab
document.querySelectorAll('nav a').forEach(link => {
  const targetPage = link.getAttribute('href');
  
  link.addEventListener('click', (e) => {
    if (targetPage === currentPage) {
      e.preventDefault();
      window.location.href = 'whoops.html';
    }
  });
});


// Contact form submit
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('successMsg').style.display = 'block';
  this.reset();
  setTimeout(() => {
    document.getElementById('successMsg').style.display = 'none';
  }, 3000);
});

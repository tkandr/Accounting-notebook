document.addEventListener('DOMContentLoaded', () => {
  // see https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_accordion
  const acc = document.getElementsByClassName('accordion');

  Array.from(acc).forEach((item) => {
    item.addEventListener('click', function() {
      this.classList.toggle('active');
      const panel = this.nextElementSibling;
      if (panel.style.display === 'block') {
        panel.style.display = 'none';
      } else {
        panel.style.display = 'block';
      }
    });
  });
});

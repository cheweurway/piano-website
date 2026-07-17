// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function () {
  var navToggle = document.getElementById('nav-toggle');
  var navMenu = document.getElementById('nav-menu');

  if (!navToggle || !navMenu) return;

  navToggle.addEventListener('click', function () {
    var isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close the menu after a nav link is tapped (mobile)
  navMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
});

s



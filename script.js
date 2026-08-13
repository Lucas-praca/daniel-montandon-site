const header = document.getElementById('header');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

if (menuToggle && navLinks) {

  menuToggle.addEventListener('click', () => {

    const open = navLinks.classList.toggle('open');

    document.body.classList.toggle('menu-open', open);

    menuToggle.setAttribute(
      'aria-expanded',
      String(open)
    );

  });


  navLinks.querySelectorAll('a').forEach(link => {

    link.addEventListener('click', () => {

      navLinks.classList.remove('open');

      document.body.classList.remove('menu-open');

      menuToggle.setAttribute(
        'aria-expanded',
        'false'
      );

    });

  });

}

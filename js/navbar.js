let toggleBtn = document.querySelector('#sidebarToggle');
let navItems = document.querySelector('#sidebarMenu');


toggleBtn.onclick = () => {
//    toggleBtn.classList.toggle('fa-bars-staggered');
    navItems.classList.toggle('open');
}

const navLinks = document.querySelectorAll('.nav-shape');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => {
      l.classList.remove('active');
      l.querySelector('a').classList.remove('active');
    });
    link.classList.add('active');
    link.querySelector('a').classList.add('active');
  });
});
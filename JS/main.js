// ハンバーガーメニュー
const hamburger_menu = document.getElementById('hamburger-menu');
const nav_menu = document.getElementById('nav-menu');

if (hamburger_menu) {
  hamburger_menu.addEventListener('click', () => {
    hamburger_menu.classList.toggle('is-active');
    nav_menu.classList.toggle('is-active');
  });
}

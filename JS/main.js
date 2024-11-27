// ハンバーガーメニュー要素取得
const hamburger_menu = document.getElementById('hamburger-menu');
const nav_menu = document.getElementById('nav-menu');

// ハンバーガーメニュー開閉アクション
if (hamburger_menu) {
  hamburger_menu.addEventListener('click', () => {
    hamburger_menu.classList.toggle('is-active');
    nav_menu.classList.toggle('is-active');
  });
}

// リンク押下時にハンバーガーメニューを閉じる
document.getElementById('nav-menu__list').addEventListener('click', () => {
  nav_menu.classList.toggle('is-active');
});
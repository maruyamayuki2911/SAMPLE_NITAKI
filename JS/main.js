// ハンバーガーメニュー要素取得
const hamburger = document.getElementById('header__hamburger');
const nav_menu = document.getElementById('header__nav-menu');

// ハンバーガーメニュー開閉アクション
if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('header__hamburger--active');
    nav_menu.classList.toggle('header__hamburger--active');
  });
}

// リンク押下時にハンバーガーメニューを閉じる
document.getElementById('header__nav-list').addEventListener('click', () => {
  nav_menu.classList.toggle('header__hamburger--active');
});
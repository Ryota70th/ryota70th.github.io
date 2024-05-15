const header = document.querySelector('header');
let prevY = window.scrollY; 

window.addEventListener('scroll', () => {
  const currentY = window.scrollY;
  if (currentY < prevY) { 
    header.classList.remove('hidden'); 
  } else { 
  if (currentY > 0) {
      header.classList.add('hidden'); 
    }
  }
  prevY = currentY; 
});

// タイトル要素を取得
const headerTitle = document.querySelector('.name');

// タイトルを制御する関数
function controlHeaderTitle() {
    // 現在のウィンドウ幅を取得
    const windowWidth = window.innerWidth;

    // ウィンドウ幅がある閾値以下の場合は "Ryota" のみを表示
    if (windowWidth <= 600) {
        headerTitle.textContent = 'Ryota';
    } else {
        headerTitle.textContent = 'Ryota Kobayashi';
    }
}

// 初期化とリサイズ時のイベントリスナーを設定
window.addEventListener('DOMContentLoaded', controlHeaderTitle);
window.addEventListener('resize', controlHeaderTitle);

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const menuLinks = document.querySelectorAll('.menu a');

  menuLinks.forEach(link => {
      link.addEventListener('click', () => {
          // メニューを閉じる
          menuToggle.checked = false;
          
          // ヘッダーを非表示にする
          const header = document.querySelector('header');
          header.classList.add('hidden');

          // リンク先のセクションにスクロール
          const targetId = link.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth' });
          }
      });
  });
});

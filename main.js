const header = document.querySelector('header');
let prevY = window.scrollY;
let shouldHideHeader = true;

window.addEventListener('scroll', () => {
  const currentY = window.scrollY;
  if (currentY < prevY) {
    header.classList.remove('hidden');
  } else {
    if (currentY > 0 && shouldHideHeader) {
      header.classList.add('hidden');
    }
  }
  prevY = currentY;
});

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const menuLinks = document.querySelectorAll('.menu a');
  const headerLink = document.querySelector('.name a');

  function smoothScrollTo(targetId, hideHeader = true) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      shouldHideHeader = hideHeader;
      targetElement.scrollIntoView({ behavior: 'smooth' });

      if (hideHeader) {
        setTimeout(() => {
          header.classList.add('hidden');
          shouldHideHeader = true; // Reset flag after hiding header
        }, 1000); // Adjust the timeout to match the scroll duration
      } else {
        shouldHideHeader = true; // Reset flag immediately if not hiding header
      }
    }
  }

  menuLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      menuToggle.checked = false;
      const targetId = link.getAttribute('href').substring(1);
      smoothScrollTo(targetId);
    });
  });

  headerLink.addEventListener('click', function (event) {
    event.preventDefault();
    shouldHideHeader = false; // Prevent header from hiding
    document.querySelector('#home-body').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      shouldHideHeader = true; // Reset flag after scroll
    }, 1000); // Adjust the timeout to match the scroll duration
  });

  // すべての内部リンクに対してスムーズスクロールを設定
  const internalLinks = document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      smoothScrollTo(targetId);
    });
  });
});

/* shared.js — inject header + footer, highlight active nav link */
(function () {
  const pages = [
    { href: 'index.html',     label: 'Главная'      },
    { href: 'vagapova.html',  label: 'Вагапова'     },
    { href: 'kutua.html',     label: 'А. Кутуя'     },
    { href: 'booking.html',   label: 'Бронирование' },
    { href: 'about.html',     label: 'О нас'        },
    { href: 'photos.html',    label: 'Фото'         },
  ];

  const current = location.pathname.split('/').pop() || 'index.html';

  const navLinks = pages
    .map(p => `<a href="${p.href}"${current === p.href ? ' class="active"' : ''}>${p.label}</a>`)
    .join('');

  const headerHTML = `
<header>
  <div class="header-inner">
    <a href="index.html" class="logo">Второй <span>Дом</span></a>
    <nav id="main-nav">${navLinks}</nav>
    <button class="hamburger" id="hamburger" aria-label="Меню">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>`;

  const footerHTML = `
<footer>
  <div class="footer-inner">
    <div>
      <h4>Хостел «Второй Дом»</h4>
      <p>Два хостела в Советском районе Казани — рядом с крупнейшими торговыми центрами и Казанским ипподромом.</p>
      <div class="payment-row" style="margin-top:14px;">
        <span class="pay-badge">МИР</span>
        <span class="pay-badge">Visa</span>
        <span class="pay-badge">Mastercard</span>
        <span class="pay-badge">Наличные</span>
      </div>
    </div>
    <div>
      <h4>Адреса</h4>
      <address>
        420100, Казань<br>
        ул. Р. Вагапова, 5Г<br><br>
        420073, Казань<br>
        ул. Аделя Кутуя, 86/2
      </address>
    </div>
    <div>
      <h4>Контакты</h4>
      <p>
        <a href="tel:+78432764404">+7 (843) 276-44-04</a> — Вагапова<br>
        <a href="tel:+79869340486">+7 (986) 934-04-86</a> — Кутуя<br><br>
        <a href="mailto:vtoroidom@bk.ru">vtoroidom@bk.ru</a>
      </p>
      <a class="vk-link" href="https://vk.com/2vtoroidom" target="_blank" rel="noopener">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2zm3.08 13.45h-1.57c-.6 0-.78-.48-1.85-1.57-.93-.93-1.33-.93-1.57-.93-.32 0-.4.08-.4.52v1.43c0 .37-.12.6-1.12.6-1.65 0-3.48-.99-4.77-2.84C5.7 10.4 5.2 8.5 5.2 8.1c0-.24.08-.45.52-.45h1.57c.4 0 .54.17.69.6.77 2.2 2.06 4.13 2.59 4.13.2 0 .29-.09.29-.6V9.6c-.06-1.09-.64-1.18-.64-1.57 0-.2.16-.4.42-.4h2.47c.33 0 .45.17.45.55v2.96c0 .33.15.45.24.45.2 0 .37-.12.74-.49 1.15-1.28 1.97-3.26 1.97-3.26.11-.24.3-.45.7-.45h1.57c.47 0 .58.24.47.55-.2.93-2.14 3.66-2.14 3.66-.17.28-.23.4 0 .71.17.24.72.72 1.09 1.15.68.77 1.2 1.42 1.34 1.87.14.44-.08.67-.52.67z"/></svg>
        ВКонтакте
      </a>
    </div>
  </div>
  <div class="footer-bottom">© 2025 Хостел «Второй Дом». Казань, Россия.</div>
</footer>`;

  document.getElementById('site-header').outerHTML = headerHTML;
  document.getElementById('site-footer').outerHTML = footerHTML;

  document.getElementById('hamburger').addEventListener('click', function () {
    document.getElementById('main-nav').classList.toggle('open');
  });
})();

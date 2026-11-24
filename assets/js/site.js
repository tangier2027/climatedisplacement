/* Tangier 2027 — small interactions only (all content is written in the HTML).
   Programme day tabs · mobile menu · biography windows · current section in the menu
   · the language switch keeps the section you are reading. */
(function () {
  'use strict';
  var rtl = document.documentElement.dir === 'rtl';

  /* programme tabs */
  var tabs = [].slice.call(document.querySelectorAll('[role="tab"]'));
  function select(t, focus) {
    tabs.forEach(function (x) {
      var on = x === t;
      x.setAttribute('aria-selected', on ? 'true' : 'false');
      x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) t.focus();
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var n = null;
      if (e.key === 'ArrowRight') n = rtl ? i - 1 : i + 1;
      if (e.key === 'ArrowLeft') n = rtl ? i + 1 : i - 1;
      if (e.key === 'Home') n = 0;
      if (e.key === 'End') n = tabs.length - 1;
      if (n !== null) { e.preventDefault(); select(tabs[(n + tabs.length) % tabs.length], true); }
    });
  });

  /* mobile menu */
  var btn = document.querySelector('.menu-btn'), nav = document.getElementById('main-nav');
  if (btn && nav) {
    var openLabel = btn.textContent, closeLabel = btn.getAttribute('data-close') || 'Close';
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.textContent = open ? closeLabel : openLabel;
    });
    nav.addEventListener('click', function (e) { if (e.target.tagName === 'A' && nav.classList.contains('open')) btn.click(); });
  }

  /* windows: a button with data-dlg="X" opens <dialog id="X">; data-bio="id" opens <dialog id="bio-id"> */
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-dlg],[data-bio]');
    if (b) {
      var id = b.getAttribute('data-dlg') || ('bio-' + b.getAttribute('data-bio'));
      var d = document.getElementById(id);
      if (d) { d._opener = b; d.showModal ? d.showModal() : d.setAttribute('open', ''); }
      return;
    }
    var c = e.target.closest('.bio-close');
    var dlg = c ? c.closest('dialog') : (e.target.tagName === 'DIALOG' ? e.target : null);
    if (dlg) { dlg.close ? dlg.close() : dlg.removeAttribute('open'); if (dlg._opener) dlg._opener.focus(); }
  });

  /* current section + language switch keeps it */
  var links = {};
  [].slice.call(document.querySelectorAll('.nav a[data-sec]')).forEach(function (a) { links[a.getAttribute('data-sec')] = a; });
  var sw = document.getElementById('lang-switch'), swBase = sw ? sw.getAttribute('href') : '';
  function setCurrent(id) {
    Object.keys(links).forEach(function (k) { links[k].setAttribute('aria-current', k === id ? 'true' : 'false'); });
    if (sw) sw.setAttribute('href', swBase + (id && id !== 'home' ? '#' + id : ''));
  }
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) setCurrent(en.target.id); });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(links).forEach(function (id) { var el = document.getElementById(id); if (el) io.observe(el); });
  }
})();

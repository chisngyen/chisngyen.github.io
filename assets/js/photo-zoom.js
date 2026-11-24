/* Click a[data-zoom] to show its image full size; click anywhere or Esc closes. */
(function () {
  var box = null;
  function close() {
    if (!box) return;
    var b = box; box = null;
    b.classList.remove('is-open');
    document.documentElement.classList.remove('cvp-lock');
    setTimeout(function () { b.remove(); }, 200);
  }
  document.querySelectorAll('a[data-zoom]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
      e.preventDefault();
      box = document.createElement('div');
      box.className = 'zoom';
      box.setAttribute('role', 'dialog');
      box.setAttribute('aria-label', a.getAttribute('aria-label') || 'Photo');
      var img = document.createElement('img');
      img.src = a.getAttribute('href');
      img.alt = (a.querySelector('img') || {}).alt || '';
      box.appendChild(img);
      box.addEventListener('click', close);
      document.body.appendChild(box);
      document.documentElement.classList.add('cvp-lock');
      requestAnimationFrame(function () { box.classList.add('is-open'); });
    });
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
})();

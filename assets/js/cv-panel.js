/* CV side panel: links marked data-cv open the PDF in a right-hand sheet on wide screens.
   Narrow screens, modified clicks and no-JS keep the plain link. */
(function () {
  var panel = document.getElementById('cv-panel');
  if (!panel) return;
  var sheet = panel.querySelector('.cvp__sheet');
  var doc = panel.querySelector('.cvp__doc');
  var opener = null;
  var wide = window.matchMedia('(min-width: 768px)');

  function open(e) {
    if (!wide.matches || e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
    e.preventDefault();
    opener = e.currentTarget;
    if (!doc.getAttribute('src')) doc.setAttribute('src', doc.getAttribute('data-src'));
    panel.hidden = false;
    document.documentElement.classList.add('cvp-lock');
    requestAnimationFrame(function () { panel.classList.add('is-open'); sheet.focus(); });
  }

  function close() {
    panel.classList.remove('is-open');
    document.documentElement.classList.remove('cvp-lock');
    setTimeout(function () { panel.hidden = true; }, 200);
    if (opener) opener.focus();
  }

  document.querySelectorAll('a[data-cv]').forEach(function (a) { a.addEventListener('click', open); });
  panel.querySelectorAll('[data-cv-close]').forEach(function (b) { b.addEventListener('click', close); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !panel.hidden) close();
  });
})();

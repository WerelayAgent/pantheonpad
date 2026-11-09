// Loaded (blocking) at the top of every page, before the app. Kept as a file, not inline, so the Content Security
// Policy can allow scripts from this site only.

// 1) Theme before first paint: the saved choice, else the system setting (no light flash for dark-mode users).
try {
  var t = localStorage.getItem('pantheonpad.theme');
  if (t !== 'dark' && t !== 'light') t = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  document.documentElement.dataset.theme = t;
} catch (e) {}

// 2) A page cached from an older deploy points at bundles that no longer exist: reload once to get the new one.
addEventListener('error', function (e) {
  var s = e.target;
  if (!s || s.tagName !== 'SCRIPT' || String(s.src).indexOf('/assets/') < 0) return;
  try { if (sessionStorage.getItem('pantheon-reloaded')) return; sessionStorage.setItem('pantheon-reloaded', '1'); } catch (x) {}
  location.reload();
}, true);
addEventListener('load', function () { setTimeout(function () { try { sessionStorage.removeItem('pantheon-reloaded'); } catch (x) {} }, 5000); });

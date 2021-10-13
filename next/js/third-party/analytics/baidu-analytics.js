<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\butterfly\css\APlayer.min.css"><script src="\butterfly\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\butterfly\js\Meting.min.js"></script>/* global _hmt */

if (!window._hmt) window._hmt = [];

document.addEventListener('pjax:success', () => {
  _hmt.push(['_trackPageview', location.pathname]);
});

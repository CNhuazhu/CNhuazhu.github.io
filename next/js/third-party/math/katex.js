<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\butterfly\css\APlayer.min.css"><script src="\butterfly\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\butterfly\js\Meting.min.js"></script>/* global NexT, CONFIG */

document.addEventListener('page:loaded', () => {
  if (!CONFIG.enableMath) return;

  NexT.utils.getScript(CONFIG.katex.copy_tex_js).catch(() => {});
});

<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\butterfly\css\APlayer.min.css"><script src="\butterfly\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\butterfly\js\Meting.min.js"></script>/* global CONFIG, NProgress */

NProgress.configure({
  showSpinner: CONFIG.nprogress.spinner
});
NProgress.start();
document.addEventListener('readystatechange', () => {
  if (document.readyState === 'interactive') {
    NProgress.inc(0.8);
  }
  if (document.readyState === 'complete') {
    NProgress.done();
  }
});
document.addEventListener('pjax:send', () => {
  NProgress.start();
});
document.addEventListener('pjax:success', () => {
  NProgress.done();
});

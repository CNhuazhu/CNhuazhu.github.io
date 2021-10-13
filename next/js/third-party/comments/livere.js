<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\butterfly\css\APlayer.min.css"><script src="\butterfly\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\butterfly\js\Meting.min.js"></script>/* global NexT, CONFIG, LivereTower */

document.addEventListener('page:loaded', () => {
  if (!CONFIG.page.comments) return;

  NexT.utils.loadComments('#lv-container').then(() => {
    window.livereOptions = {
      refer: CONFIG.page.path.replace(/index\.html$/, '')
    };

    if (typeof LivereTower === 'function') return;

    NexT.utils.getScript('https://cdn-city.livere.com/js/embed.dist.js', {
      attributes: {
        async: true
      }
    });
  });
});

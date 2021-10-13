<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\butterfly\css\APlayer.min.css"><script src="\butterfly\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\butterfly\js\Meting.min.js"></script>/* global NexT, CONFIG, DisqusJS */

document.addEventListener('page:loaded', () => {
  if (!CONFIG.page.comments) return;

  NexT.utils.loadComments('#disqus_thread')
    .then(() => NexT.utils.getScript(CONFIG.disqusjs.js, { condition: window.DisqusJS }))
    .then(() => {
      window.dsqjs = new DisqusJS({
        api       : CONFIG.disqusjs.api || 'https://disqus.com/api/',
        apikey    : CONFIG.disqusjs.apikey,
        shortname : CONFIG.disqusjs.shortname,
        url       : CONFIG.page.permalink,
        identifier: CONFIG.page.path,
        title     : CONFIG.page.title
      });
    });
});

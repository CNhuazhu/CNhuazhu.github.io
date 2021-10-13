<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\butterfly\css\APlayer.min.css"><script src="\butterfly\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\butterfly\js\Meting.min.js"></script>/* global NexT, CONFIG */

document.addEventListener('page:loaded', () => {
  if (!CONFIG.page.comments) return;

  NexT.utils.loadComments('#isso-thread')
    .then(() => NexT.utils.getScript(`${CONFIG.isso}js/embed.min.js`, {
      attributes: {
        dataset: {
          isso: `${CONFIG.isso}`
        }
      },
      parentNode: document.querySelector('#isso-thread')
    }));
});

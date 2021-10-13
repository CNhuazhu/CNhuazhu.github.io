<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\butterfly\css\APlayer.min.css"><script src="\butterfly\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\butterfly\js\Meting.min.js"></script>/* global NexT, CONFIG */

document.addEventListener('page:loaded', () => {
  if (!CONFIG.page.comments) return;

  NexT.utils.loadComments('.utterances-container')
    .then(() => NexT.utils.getScript('https://utteranc.es/client.js', {
      attributes: {
        async       : true,
        crossOrigin : 'anonymous',
        'repo'      : CONFIG.utterances.repo,
        'issue-term': CONFIG.utterances.issue_term,
        'theme'     : CONFIG.utterances.theme
      },
      parentNode: document.querySelector('.utterances-container')
    }));
});

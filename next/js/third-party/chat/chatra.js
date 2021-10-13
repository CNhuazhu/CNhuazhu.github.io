<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\butterfly\css\APlayer.min.css"><script src="\butterfly\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\butterfly\js\Meting.min.js"></script>/* global CONFIG, Chatra */

(function() {
  if (CONFIG.chatra.embed) {
    window.ChatraSetup = {
      mode    : 'frame',
      injectTo: CONFIG.chatra.embed
    };
  }

  window.ChatraID = CONFIG.chatra.id;

  const chatButton = document.querySelector('.sidebar-button button');
  if (chatButton) {
    chatButton.addEventListener('click', () => {
      Chatra('openChat', true);
    });
  }
})();

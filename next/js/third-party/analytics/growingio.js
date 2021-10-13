<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\butterfly\css\APlayer.min.css"><script src="\butterfly\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\butterfly\js\Meting.min.js"></script>/* global CONFIG, gio */

if (!window.gio) {
  window.gio = function() {
    (window.gio.q = window.gio.q || []).push(arguments);
  };
}

gio('init', `${CONFIG.growingio_analytics}`, {});
gio('send');

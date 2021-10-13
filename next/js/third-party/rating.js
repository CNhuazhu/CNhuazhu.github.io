<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\butterfly\css\APlayer.min.css"><script src="\butterfly\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\butterfly\js\Meting.min.js"></script>/* global CONFIG, WPac */

(function() {
  const widgets = [{
    widget: 'Rating',
    id    : CONFIG.rating.id,
    el    : 'wpac-rating',
    color : CONFIG.rating.color
  }];

  document.addEventListener('page:loaded', () => {
    if (!CONFIG.page.isPost) return;

    const newWidgets = widgets.map(widget => ({ ...widget }));

    if (window.WPac) {
      WPac.init(newWidgets);
    } else {
      window.wpac_init = newWidgets;
    }
  });
})();

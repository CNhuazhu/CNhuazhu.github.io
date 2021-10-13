<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\butterfly\css\APlayer.min.css"><script src="\butterfly\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\butterfly\js\Meting.min.js"></script>/* global CONFIG, quicklink */

(function() {
  if (typeof CONFIG.quicklink.ignores === 'string') {
    const ignoresStr = `[${CONFIG.quicklink.ignores}]`;
    try {
      CONFIG.quicklink.ignores = JSON.parse(ignoresStr);
    } catch {
      // eslint-disable-next-line no-console
      console.error('Setting regex and function in config file is deprecated. Try setting `CONFIG.quicklink.ignores` in any script code.');
      // eslint-disable-next-line no-eval
      CONFIG.quicklink.ignores = eval(ignoresStr);
    }
  }

  let resetFn = null;

  const onRefresh = () => {
    if (resetFn) resetFn();
    if (!CONFIG.quicklink.enable) return;

    let ignoresArr = CONFIG.quicklink.ignores || [];
    if (!Array.isArray(ignoresArr)) {
      ignoresArr = [ignoresArr];
    }

    resetFn = quicklink.listen({
      timeout : CONFIG.quicklink.timeout,
      priority: CONFIG.quicklink.priority,
      ignores : [
        uri => uri.includes('#'),
        uri => uri === CONFIG.quicklink.url,
        ...ignoresArr
      ]
    });
  };

  if (CONFIG.quicklink.delay) {
    window.addEventListener('load', onRefresh);
    document.addEventListener('pjax:success', onRefresh);
  } else {
    document.addEventListener('page:loaded', onRefresh);
  }
})();

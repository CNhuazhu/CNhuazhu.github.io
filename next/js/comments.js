<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\butterfly\css\APlayer.min.css"><script src="\butterfly\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\butterfly\js\Meting.min.js"></script>/* global CONFIG */

window.addEventListener('tabs:register', () => {
  let { activeClass } = CONFIG.comments;
  if (CONFIG.comments.storage) {
    activeClass = localStorage.getItem('comments_active') || activeClass;
  }
  if (activeClass) {
    const activeTab = document.querySelector(`a[href="#comment-${activeClass}"]`);
    if (activeTab) {
      activeTab.click();
    }
  }
});
if (CONFIG.comments.storage) {
  window.addEventListener('tabs:click', event => {
    if (!event.target.matches('.tabs-comment .tab-content .tab-pane')) return;
    const commentClass = event.target.classList[1];
    localStorage.setItem('comments_active', commentClass);
  });
}

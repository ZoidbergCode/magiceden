let refresher = document.getElementById('pre-info__update');

function refresh() {
  function refreshBack() {
    refresher.style = 'transition: none';
  }
  refresher.style = 'transition: all 0.7s linear; transform: rotate(360deg)';
  setTimeout(refreshBack, 750);
}

refresher.addEventListener('click', refresh);

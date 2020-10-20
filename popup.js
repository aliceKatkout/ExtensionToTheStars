let btn = document.getElementById('btn');
btn.addEventListener('click', hello);

function hello() {
  chrome.tabs.executeScript({
    file: 'alert.js'
  });
}

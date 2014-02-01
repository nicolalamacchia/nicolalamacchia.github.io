var url = 'http://pi.nicolalamacchia.com/status';
var img = new Image();
img.src = url;
var statusSpan = document.getElementById('pi-status');

img.onload = function () {
    statusSpan.innerHTML = 'online';
    statusSpan.setAttribute('class', 'status-online');
}

img.onerror = function () {
    statusSpan.innerHTML = 'offline';
    statusSpan.setAttribute('class', 'status-offline');
}

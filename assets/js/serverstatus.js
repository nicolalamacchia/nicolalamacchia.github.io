var url = 'http://pi.nicolalamacchia.com/status.php';
var statusSpan = document.getElementById('pi-status');

function UrlExists(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    try {
        http.send();
        s = http.status;
        return (s >= 200 && s < 300 || s === 304);
    } catch (ex) {
        return false;
    }
}

if (UrlExists(url)) {
    statusSpan.innerHTML = 'online';
    statusSpan.setAttribute('class', 'status-online');
} else {
    statusSpan.innerHTML = 'offline';
    statusSpan.setAttribute('class', 'status-offline');
}

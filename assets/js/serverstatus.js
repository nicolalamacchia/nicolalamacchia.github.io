var url = 'http://pi.nicolalamacchia.com/status.php';
var statusSpan = document.getElementById('pi-status');

function checkOnline(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, true);
    http.onload = function () {
        if (http.readyState === 4)
            if (http.status >= 200 && http.status < 300 || http.status === 304) {
            online();
        } else {
            offline();
        }
    }
    http.onerror = function () {
        offline();
    }
    http.timeout = 5000;
    http.ontimeout = function () {
        offline();
    }
    http.send();
}

function online () {
    statusSpan.innerHTML = 'online';
    statusSpan.setAttribute('class', 'status-online');
}
function offline () {
    statusSpan.innerHTML = 'offline';
    statusSpan.setAttribute('class', 'status-offline');
}

checkOnline(url);

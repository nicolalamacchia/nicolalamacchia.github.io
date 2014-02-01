var links;
var className = 'sndml';

if (document.getElementsByClassName) {
    links = document.getElementsByClassName(className);
} else {
    var linksArray = [];
    var aTags = document.getElementsByTagName('a');
    var regex = new RegExp("(^|\\s)" + className + "(\\s|$)");
    for (var i = 0; i < aTags.length; i++) {
        if (regex.test(aTags[i].className)) {
            linksArray.push(aTags[i]);
        }
    }
    links = linksArray;
}

for (var i = 0; i < links.length; i++) {
    // md5 of KILLSPAM
    links[i].href = links[i].href.replace(/377867bca0ab759b28b215d31e10ad8b/,'');
}

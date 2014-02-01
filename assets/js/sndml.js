var links = document.getElementsByClassName('sndml'), l;
// md5 of KILLSPAM
for (l in links) {
    links[l].href = links[l].href.replace(/377867bca0ab759b28b215d31e10ad8b/,'');
}

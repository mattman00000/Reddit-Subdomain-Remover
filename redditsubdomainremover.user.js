// ==UserScript==
// @name       Reddit Subdomain Remover
// @namespace  http://mattman00000.com
// @version    0.1.4
// @description  Automatically redirects away from any subdomain
// @match      *://*.reddit.com/*
// @copyright  2015+, mattman00000
// @updateURL https://github.com/mattman00000/Reddit-Subdomain-Remover/raw/master/redditsubdomainremover.user.js
// @downloadURL https://github.com/mattman00000/Reddit-Subdomain-Remover/raw/master/redditsubdomainremover.user.js
// ==/UserScript==

console.warn("Activating Reddit Subdomain Remover");

if (document.location.href.substring(0,21)!="http://www.reddit.com") {
document.location="http://www.reddit.com".concat(document.location.pathname)
}

// ==UserScript==
// @name       Reddit Subdomain Remover
// @namespace  http://mattman00000.com
// @version    0.1.6
// @description  Automatically redirects away from any subdomain
// @match      *://*.reddit.com/*
// @copyright  2015+, mattman00000
// @updateURL https://github.com/mattman00000/Reddit-Subdomain-Remover/raw/master/redditsubdomainremover.user.js
// @downloadURL https://github.com/mattman00000/Reddit-Subdomain-Remover/raw/master/redditsubdomainremover.user.js
// ==/UserScript==

console.warn("Activating Reddit Subdomain Remover");

if (document.location.hostname!="www.reddit.com") {
document.location=document.location.protocol.concat("//www.reddit.com",document.location.pathname,document.location.search)
}

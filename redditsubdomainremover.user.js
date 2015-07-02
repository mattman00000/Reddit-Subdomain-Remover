// ==UserScript==
// @name       Reddit Subdomain Remover
// @namespace  http://mattman00000.com
// @version    0.1.1
// @description  Automatically redirects away from any subdomain
// @match      *://*.reddit.com/*
// @copyright  2015+, mattman00000
// @updateURL TBD
// @downloadURL TBD
// ==/UserScript==

console.warn("Activating Reddit Subdomain Remover");

if (document.location.href.indexOf("reddit.com")!=11) {
document.location="https://www.reddit.com".concat(document.location.pathname)
}

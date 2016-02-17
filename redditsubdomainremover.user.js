// ==UserScript==
// @name       Reddit Subdomain Remover
// @namespace  https://github.com/mattman00000/Reddit-Subdomain-Remover
// @version    2.0.0
// @description  Automatically redirects away from any subdomain
// @match      *://*.reddit.com/*
// @copyright  2015+, mattman00000
// ==/UserScript==

console.warn("Activating Reddit Subdomain Remover");

if (document.location.hostname!="www.reddit.com") {
document.location=document.location.protocol.concat("//www.reddit.com",document.location.pathname,document.location.search)
//document.location=document.location.toString().replace("np","www")
}

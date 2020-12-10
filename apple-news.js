// ==UserScript==
// @name         Apple News Click Through
// @namespace    https://thom.is/
// @version      0.2
// @description  Automatically moves through the Apple News interstitial to view articles in the browser instead of the News app. Converts links to HTTPS.
// @author       Thom Mahoney
// @match        https://apple.news/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var span = document.getElementsByClassName("click-here")[0];
    if (span) {
        var anchor = span.parentElement;
        var href = anchor.href;
        if (href) {
            var url = href.replace(/^http:/, "https:");
            window.location = url;
        }
    }
})();

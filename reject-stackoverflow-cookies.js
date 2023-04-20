// ==UserScript==
// @name         Reject Stackoverflow Cookies
// @namespace    https://thom.is
// @version      0.1
// @description  Stackoverflow and related websites continuously show the cookie consent dialog. This script automatically rejects them.
// @author       Thom Mahoney
// @match        https://stackoverflow.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.getElementsByClassName("js-reject-cookies")[0].click()
})();
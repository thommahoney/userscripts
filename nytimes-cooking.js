// ==UserScript==
// @name         NY Times Cooking Paywall
// @namespace    https://thom.is/
// @version      0.1
// @description  Removes the paywall modal and enables scrolling on NYT Cooking
// @author       Thom Mahoney
// @match        https://cooking.nytimes.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $('div[role=dialog].nytc---modal-window---isShown').remove();
    $('html').removeClass('nytc---modal-window---noScroll');
    $('body').removeClass('nytc---modal-window---noScroll');
})();

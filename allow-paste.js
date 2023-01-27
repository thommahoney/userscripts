// ==UserScript==
// @name         Allow Paste
// @namespace    https://thom.is/
// @version      0.1
// @description  Prevents websites from blocking password managers, hopefully.
// @author       Robert Edmonds, Thom Mahoney
// @match        https://*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var allowPaste = function(e){
        e.stopImmediatePropagation();
        return true;
    };

    document.addEventListener('paste', allowPaste, true);
})();
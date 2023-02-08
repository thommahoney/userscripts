// ==UserScript==
// @name         GitHub Dismiss Merge Queue Modal
// @namespace    https://thom.is/
// @version      0.1
// @description  Dismisses the dialog promoting the merge queue feature for every single repository.
// @author       Thom Mahoney
// @match        https://github.com/*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

    var dismissButton = $(".try-merge-queue-popover form.js-notice-dismiss button[type=submit]");
    if (dismissButton) {
        dismissButton.click();
    }
})();

// ==UserScript==
// @name         AWS SSO Sign On
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically signs in to AWS via SSO via the CLI and closes the browser tab.
// @author       Josh Lavin (@jdigory)
// @match        https://*.awsapps.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=amazon.com
// @grant        window.close
// ==/UserScript==

(function() {
    'use strict';

    var button = document.getElementsByClassName("awsui-signin-button")[0];
    if (button) {
        button.click();
    }

    var mayClose = function() {
        var xpath = "//p[text()='You may now close this browser.']";
        return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }
    if (mayClose()) {
        window.close();
    }
})();

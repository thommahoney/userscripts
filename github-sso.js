// ==UserScript==
// @name         GitHub Auto-SSO
// @namespace    https://thom.is/
// @version      0.2.1
// @description  Auto-submit SSO form when it appears. Takes browser through Okta flow automatically.
// @author       Thom Mahoney, Kailan Blanks
// @match        https://github.com/*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    var getSSOPrompt = function() {
        var xpath = "//*[@id=\"dashboard\"]/div/div[1]/div/ul/li[1]/div/p/a[text()='Single sign-on']";
        return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    };
    var tries = 0;
    var checkForSSOPrompt = setInterval(function() {
        var prompt = getSSOPrompt();
        if (prompt) {
            prompt.click();
            clearInterval(checkForSSOPrompt);
        }
        if (tries++ > 20) {
            clearInterval(checkForSSOPrompt);
        }
    }, 100);
    // Click SSO prompt on interstitial pages
    var panel = document.getElementsByClassName("org-sso-panel");
    if (panel.length > 0) panel[0].getElementsByTagName("button")[0].click();
})();

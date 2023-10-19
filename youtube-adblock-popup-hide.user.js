// ==UserScript==
// @name         Youtube adblock popup hide
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hide the Youtube adblock warning popup via CSS
// @author       BlissSol
// @license      MIT
// @match        https://www.youtube.com/*
// @match        https://youtube.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    /* when youtube loads video, if popup doesn't appear the modal hasn't been injected - so we'll target it's parent element */
    var popUP = document.querySelectorAll('ytd-popup-container')[0];
    /* not really needed, but to screw with it, we'll change the class names */
    popUP.className = "style-scopesing";
    popUP.className += "ytd-appy";
    /* now we'll change the display of the parent element, so even if modal injected into page it wont display */
    popUP.style.display = "none";
})();
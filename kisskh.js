// ==UserScript==
// @name         KissKH Video Skip
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Use comma/period to skip video 5 seconds back/forward on kisskh.co
// @match        *://kisskh.co/*
// @match        *://www.kisskh.co/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    document.addEventListener('keydown', function (e) {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) return;

        const video = document.querySelector('video');
        if (!video) return;

        if (e.key === ',') {
            e.preventDefault();
            video.currentTime = Math.max(0, video.currentTime - 5);
        } else if (e.key === '.') {
            e.preventDefault();
            video.currentTime = Math.min(video.duration, video.currentTime + 5);
        }
    });
})();

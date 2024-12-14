// ==UserScript==
// @name         Add GitHub API Token
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically add Authorization header to GitHub API requests
// @author       You
// @match        https://api.github.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Перехват всех запросов
    const originalFetch = window.fetch;
    window.fetch = function(...args) {
        const [url, options] = args;
        if (url.includes("api.github.com")) {
            // Добавляем токен в заголовок
            if (!options.headers) {
                options.headers = {};
            }
            options.headers["Authorization"] = "token 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";
        }
        return originalFetch.apply(this, args);
    };
})();

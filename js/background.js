'use strict';
chrome.action.onClicked.addListener(function(tab){
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: ['js/script.js']
    });
  });
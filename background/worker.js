import { menus } from "./context-books.js";

try {
  const messageHandlers = {
    async fetch(url) {
      const response = await fetch(url);
      return response.text();
    },
    async fetchJSON(url) {
      const response = await fetch(url);
      return response.json();
    },
  };

  chrome.runtime.onMessage.addListener((message, sender) => {
    for (const id of Object.keys(message)) {
      if (id in messageHandlers) {
        return messageHandlers[id](message[id], sender);
      }
    }
  });

  chrome.contextMenus.onClicked.addListener(
    ({ menuItemId: template, selectionText: query }) => {
      const url = template.replace("%s", encodeURIComponent(query));
      chrome.tabs.create({
        url,
      });
    }
  );

  menus.forEach((m) => {
    chrome.contextMenus.create(m);
  });
} catch (e) {
  throw new Error(e);
}

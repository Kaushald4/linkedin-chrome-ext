chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  // read changeInfo data and do something with it (like read the url)
  if (
    tab.url.includes("linkedin") &&
    tab.url.includes("company") &&
    tab.url.includes("about")
  ) {
    // this means user is in linked in company page
    chrome.tabs.sendMessage(tabId, {
      type: "show-modal",
      url: changeInfo.url,
    })
  }
})

browser.browserAction.onClicked.addListener((tab) => {
  let updatedCSS = "body { border : 40px dashed blue; }";

  try {
    browser.tabs.reload(tab.id);
    browser.tabs.insertCSS(tab.id, { code: updatedCSS });
    console.log("Page ReThinkED");
  } catch (error) {
    return console.log("Erro: " + error.message);
  }
});

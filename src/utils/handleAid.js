export async function closedAidIfPresent(page) {
  try {
    const iframe = page.frameLocator("iframe[src* = 'googleads']");
    const dismissButton = iframe.locator("div[id='dismiss-button']");
    if (await dismissButton.first().isVisible()) {
      await dismissButton.first().click();
    }
  } catch (error) {
    console.log(error);
  }
}

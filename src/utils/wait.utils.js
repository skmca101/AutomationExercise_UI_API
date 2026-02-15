export async function waitForPageLoad(page)
{
    await page.waitForLoadState("domcontentloaded")
   // await page.waitForLoadState("networkidle")
}
export async function waitForVisible(page)
{
    await page.waitFor({state: "visible"})
}
/** @format */

async function main() {
    let browser;
    if (process.env.NODE_ENV !== "development") {
        const chromium = require("@sparticuz/chromium");
        const puppeteer = require("puppeteer-core");

        browser = await puppeteer.launch({
            args: chromium.args,
            defaultViewport: chromium.defaultViewport,
            executablePath: await chromium.executablePath(),
            headless: chromium.headless,
        });
    } else {
        const puppeteer = require("puppeteer");
        browser = await puppeteer.launch({ headless: "new" });
    }

    const page = await browser.newPage();
    await page.goto("https://google.com");
    console.log(await page.title());
    await browser.close();
}

main().catch((error) => console.error(error));

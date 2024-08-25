/** @format */

import chromium from "@sparticuz/chromium";
import puppeteer from "puppeteer-core";

export async function main() {
    let result, browser;

    try {
        browser = await puppeteer.launch({
            args: chromium.args,
            defaultViewport: chromium.defaultViewport,
            executablePath: await chromium.executablePath(),
            headless: chromium.headless,
            ignoreHTTPSErrors: true,
        });

        const page = await browser.newPage();
        await page.goto("https://google.com");

        result = await page.title();
    } catch (error) {
        return error;
    } finally {
        if (browser !== null) {
            await browser.close();
        }
    }

    return result;
}

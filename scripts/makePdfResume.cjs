/**
 * Generates a pdf file based on the /resume page.
 *
 * Usage:
 *
 * ```
 * SRC_URL=http://localhost:9000/resume npm run make-pdf-resume
 * ```
 */

const path = require("node:path");
const fs = require("node:fs");
const puppeteer = require("puppeteer");
const appRoot = require("app-root-path");

/**
 * Throws error and exits
 * @param {any} err
 */
const throwAndExit = (err) => {
  console.error(err);
  process.exit(1);
};

/**
 * Fn that returns env vars
 */
const parseEnvVars = () => ({
  execPathOrName: process.env.PUPPETEER_EXEC_PATH || "",
  srcUrl: process.env.SRC_URL || "",
});

/**
 * Simple sleep fn that could be `await`ed
 * @param {number} delayMs
 */
const sleep = (delayMs) =>
  new Promise((resolve, reject) => setTimeout(resolve, delayMs));

const { srcUrl, execPathOrName } = parseEnvVars();
if (!srcUrl)
  throwAndExit(
    new Error("Source URL not found! Remember to set the SRC_URL env var.")
  );

const pdfPath = path.join(appRoot.toString(), "files", "resume.pdf");

fs.unlink(pdfPath, async (err) => {
  if (err && err.code === "ENOENT") {
    console.log(`${pdfPath} was not found; skipping delete`);
  } else if (err) {
    // other errors, e.g. maybe we don't have enough permission
    return throwAndExit(err);
  } else {
    console.log(`${pdfPath} was deleted.`);
  }

  try {
    const launchOpts = {
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        // Disble cache
        "--disk-cache-size=0",
      ],
      ...(execPathOrName ? { executablePath: execPathOrName } : {}),
    };
    const browser = await puppeteer.launch(launchOpts);
    const page = await browser.newPage();

    // Some cool off time for the website to be ready
    console.log(`Sleeping for 10s...`);
    await sleep(10000);

    await page.goto(srcUrl, {
      waitUntil: "networkidle2",
    });

    // Some more cool off time for the website to be ready
    console.log(`Sleeping for 2s...`);
    await sleep(2000);
    console.log(`Printing PDF from ${srcUrl}`);

    await page.pdf({
      path: pdfPath,
      format: "Letter",
      scale: 0.76,
      margin: { top: 0.1, right: 0, bottom: 0, left: 0 },
    });

    console.log(`PDF saved at ${pdfPath}`);

    await browser.close();
  } catch (error) {
    if (error instanceof Error) {
      throwAndExit(error);
    } else console.log("Unknown error", error);
  }
});

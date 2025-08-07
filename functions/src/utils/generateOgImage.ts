import puppeteer from 'puppeteer-core';
import chromium from 'chrome-aws-lambda';

export async function generateOgImage(result: {
  score: number;
  age: number;
  gender: string;
}) {
  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
  });

  const page = await browser.newPage();

  const html = `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background: #f5f5f5;
          }
          .container {
            text-align: center;
          }
          h1 {
            font-size: 60px;
            color: #222;
          }
          p {
            font-size: 30px;
            color: #666;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>IQ Score: ${result.score}</h1>
          <p>Age: ${result.age}, Gender: ${result.gender}</p>
        </div>
      </body>
    </html>
  `;

  await page.setContent(html, { waitUntil: 'networkidle2' });
  const buffer = await page.screenshot({ type: 'png' });

  await browser.close();

  return buffer;
}

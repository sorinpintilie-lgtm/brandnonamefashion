import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const routes = [
  '/',
  '/collections/reduceri-de-iarna',
  '/collections/fall-winter-25',
  '/collections/rochii',
  '/collections/lenjerie',
  '/products/rochie-maro-din-satin-elastic-haze',
  '/products/corset-maro-din-satin-elastic-haze',
  '/products/rochie-midi-rosu-burgund-cu-cupe-retro-candy',
  '/pages/muses',
  '/pages/magazine-murmur',
  '/pages/contact',
  '/account/login',
  '/search',
  '/cart',
  '/blogs/descopera',
];

const viewports = [
  { name: 'mobile-375', width: 375, height: 2500 },
  { name: 'tablet-768', width: 768, height: 2800 },
  { name: 'desktop-1440', width: 1440, height: 3400 },
];

const baseUrl = 'https://murmur.ro';
const outputRoot = path.resolve('public/assets/murmur/reference');
const stylesOutput = path.resolve('data/style-tokens.json');

function slugifyRoute(route) {
  if (route === '/') return 'home';
  return route.replace(/^\//, '').replaceAll('/', '__');
}

async function ensureDirs() {
  await mkdir(outputRoot, { recursive: true });
  await mkdir(path.dirname(stylesOutput), { recursive: true });
}

async function extractStyleTokens(page) {
  return await page.evaluate(() => {
    const sampleButton = document.querySelector('button, a[role="button"], input[type="submit"]');
    const sampleInput = document.querySelector('input, textarea');
    const body = document.body;
    const html = document.documentElement;

    const getStyles = (el) => {
      if (!el) return null;
      const c = getComputedStyle(el);
      return {
        fontFamily: c.fontFamily,
        fontSize: c.fontSize,
        lineHeight: c.lineHeight,
        letterSpacing: c.letterSpacing,
        fontWeight: c.fontWeight,
        color: c.color,
        backgroundColor: c.backgroundColor,
        borderRadius: c.borderRadius,
        border: c.border,
        textTransform: c.textTransform,
      };
    };

    const bodyStyles = getComputedStyle(body);
    const htmlStyles = getComputedStyle(html);

    return {
      base: {
        htmlFontSize: htmlStyles.fontSize,
        bodyFontFamily: bodyStyles.fontFamily,
        bodyFontSize: bodyStyles.fontSize,
        bodyLineHeight: bodyStyles.lineHeight,
        bodyLetterSpacing: bodyStyles.letterSpacing,
        bodyColor: bodyStyles.color,
        bodyBackground: bodyStyles.backgroundColor,
      },
      button: getStyles(sampleButton),
      input: getStyles(sampleInput),
      headingSamples: Array.from(document.querySelectorAll('h1, h2, h3'))
        .slice(0, 6)
        .map((el) => {
          const c = getComputedStyle(el);
          return {
            tag: el.tagName,
            text: el.textContent?.trim()?.slice(0, 120),
            fontFamily: c.fontFamily,
            fontSize: c.fontSize,
            lineHeight: c.lineHeight,
            letterSpacing: c.letterSpacing,
            fontWeight: c.fontWeight,
            textTransform: c.textTransform,
          };
        }),
    };
  });
}

async function run() {
  await ensureDirs();
  const browser = await chromium.launch({ headless: true });

  const allTokens = {};

  for (const viewport of viewports) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      deviceScaleFactor: 1,
    });

    const page = await context.newPage();

    for (const route of routes) {
      const url = `${baseUrl}${route}`;
      const routeSlug = slugifyRoute(route);
      const folder = path.join(outputRoot, viewport.name);
      await mkdir(folder, { recursive: true });

      try {
        console.log(`[capture] ${viewport.name} ${route}`);
        await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
        await page.waitForTimeout(900);

        const screenshotPath = path.join(folder, `${routeSlug}.png`);
        await page.screenshot({ path: screenshotPath, fullPage: true });

        if (!allTokens[route]) {
          allTokens[route] = {};
        }
        allTokens[route][viewport.name] = await extractStyleTokens(page);

        const videoEls = await page.locator('video source, video').all();
        const mediaUrls = [];
        for (const el of videoEls) {
          const src = (await el.getAttribute('src')) || '';
          if (src) {
            mediaUrls.push(src.startsWith('http') ? src : new URL(src, url).toString());
          }
        }
        if (mediaUrls.length) {
          const mediaPath = path.join(folder, `${routeSlug}.media.json`);
          await writeFile(mediaPath, JSON.stringify({ route, mediaUrls }, null, 2), 'utf8');
        }
      } catch (error) {
        console.error(`[capture:failed] ${viewport.name} ${route}`, error?.message || error);
      }
    }

    await context.close();
  }

  await writeFile(stylesOutput, JSON.stringify(allTokens, null, 2), 'utf8');
  await browser.close();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

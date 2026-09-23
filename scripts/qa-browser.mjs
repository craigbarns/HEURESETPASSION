import puppeteer from '/Users/gregorybaranes/node_modules/puppeteer/lib/esm/puppeteer/puppeteer.js';
import { mkdir, writeFile } from 'node:fs/promises';
const browser=await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true,args:['--no-sandbox','--disable-dev-shm-usage']});
try {
const page=await browser.newPage();
const errors=[];page.on('pageerror',error=>errors.push(error.message));
await mkdir('artifacts',{recursive:true});
const reports=[];
for (const viewport of [{width:1440,height:1000},{width:390,height:844}]) {
 await page.setViewport({...viewport,deviceScaleFactor:1});
 await page.goto('http://127.0.0.1:4173/',{waitUntil:'networkidle0'});
 await page.screenshot({path:`artifacts/home-${viewport.width}.png`,fullPage:false});
 for(const route of ['/','/montres','/marques','/la-maison','/services','/sav','/contact','/mentions-legales','/politique-confidentialite','/page-inexistante','/montres/inconnue','/marques/inconnue']) {
  const response=await page.goto(`http://127.0.0.1:4173${route}`,{waitUntil:'networkidle0'});
  reports.push({width:viewport.width,route,status:response.status(),...await page.evaluate(()=>({title:document.title,h1:document.querySelector('h1')?.textContent,overflow:document.documentElement.scrollWidth>innerWidth,brokenImages:[...document.images].filter(i=>i.complete&&i.naturalWidth===0).map(i=>i.src)}))});
 }
}
await page.goto('http://127.0.0.1:4173/',{waitUntil:'networkidle0'});
await page.click('button[aria-label="Ouvrir le menu"]');
const menuOpen=await page.$eval('#mobile-menu',d=>d.open);
await page.screenshot({path:'artifacts/menu-mobile.png'});
await page.keyboard.press('Escape');
const menuClosed=await page.$eval('#mobile-menu',d=>!d.open);
await page.click('button[aria-label="Ouvrir le menu"]');
await page.click('#mobile-menu a[href="/contact"]');
await page.waitForSelector('#subject');
await page.screenshot({path:'artifacts/contact-mobile.png',fullPage:true});
const formDisabled=await page.$eval('button[type="submit"]',el=>el.disabled);
const mapsNotLoaded=await page.$$eval('iframe',els=>els.length===0);
await page.goto('http://127.0.0.1:4173/contact?objet=rendez-vous',{waitUntil:'networkidle0'});
const appointmentPrefill=await page.$eval('#subject',el=>el.value==='rendez-vous');
const report={routes:reports,menuOpen,menuClosed,formDisabled,mapsNotLoaded,appointmentPrefill,errors};
await writeFile('artifacts/browser-qa.json',JSON.stringify(report,null,2));
console.log(JSON.stringify(report,null,2));
if(reports.some(r=>r.overflow||r.brokenImages.length||r.status!==((r.route.includes('inconnue')||r.route.includes('inexistante'))?404:200))||errors.length||!menuOpen||!menuClosed||!formDisabled||!mapsNotLoaded||!appointmentPrefill)process.exitCode=1;
} finally {await browser.close();}

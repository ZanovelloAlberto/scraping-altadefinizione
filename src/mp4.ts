import puppeteer from "puppeteer"


var link = 'https://altadefinizione.sale/mad-max-interceptor-streaming-4k/'


const DoomMp4 = async () => {

    

    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 100, // slow down by 250ms
    });

    const [page] = await browser.pages();

    await page.goto(link);


    const link2 = await page.evaluate(() => {
        const a = document.getElementById("iframeVid")

        return (a as HTMLIFrameElement).src
    });

    await page.goto(link2);

    const streamTape = await page.evaluate(() => {
        const v = "closeAltaCommunityBanner"
        const Anchor = document.getElementById(v) as HTMLAnchorElement
        Anchor.click()
        return document.getElementById("main-player-wrapper")?.querySelector("iframe")?.src

    })
    
    console.log(streamTape);

    //--------------< NOT WORKING >------------------//
    // if (streamTape) {
    //     page.setJavaScriptEnabled(false)
        
    //     const res = await page.goto(streamTape)
    //     const mp4 = await page.$$eval("loader")

        
    //     console.log("charrivata");
        
        
    //     console.log(mp4);
        
        
    // }


}


export default (v : string) => {
    link = v
    DoomMp4()
}

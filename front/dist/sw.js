if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,c)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}}))).then((e=>{const s=c(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-ac8ffed3"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/calculatorApp.737eed8d.js",revision:"cc6e430a1b63e962f7ac492d449db04d"},{url:"assets/calendarApp.2709ddaa.js",revision:"a65a69f7d4413cfd6344cf662db90a07"},{url:"assets/cameraApp.745be667.js",revision:"57ba85c0037761b80b2be65f58adbaf4"},{url:"assets/clockApp.9c9d86bf.js",revision:"cc6e430a1b63e962f7ac492d449db04d"},{url:"assets/homeScreen.b5aa9f06.css",revision:"7049b80ffb925f86aced484ad73a0d62"},{url:"assets/homeScreen.ede6fd4e.js",revision:"46cdca0fe5d878ce81a25c035f00e730"},{url:"assets/index.1358b134.css",revision:"87ad4b93ee2f1a8fd948d1654cde2fbc"},{url:"assets/index.268a53e4.js",revision:"ff95a5b87e88455a0cd54e202d29db35"},{url:"assets/index.4df76439.css",revision:"d4e4906a690308135fa4f4869d995dc2"},{url:"assets/index.f3631580.js",revision:"f836e4687d4c829e754824f61f1509c5"},{url:"assets/iPodApp.b042f81d.js",revision:"95b6cdc440720285f764f7eb308ef5a3"},{url:"assets/lockScreen.f3489bb1.css",revision:"5f623ec0bd438c734c89ace91734d3d6"},{url:"assets/lockScreen.fb81514c.js",revision:"895b7efe6fb77f7ec5f67e90184a321c"},{url:"assets/mailApp.196bea3a.js",revision:"74ea965b379f5b683fa7c9c4589d46e5"},{url:"assets/mapsApp.c70e5915.js",revision:"2c66261cb75b51c69e2385d49cb08b19"},{url:"assets/noteScreen.7a985b07.css",revision:"5b2e1999784ce996c98de119ce6bf01c"},{url:"assets/noteScreen.e98319a3.js",revision:"bf996a4b4523ef20ba63539aee23985b"},{url:"assets/phoneApp.ad2ebcb1.js",revision:"dd4a72b65fa530252120cf961eaaa6b6"},{url:"assets/photosApp.9ce2e923.js",revision:"234ee3b6d41a6ab60060455c07cbfde4"},{url:"assets/safariApp.8cee0541.js",revision:"0f5461c4377840984553b87dabaae261"},{url:"assets/settings.21cf1f44.js",revision:"cc6e430a1b63e962f7ac492d449db04d"},{url:"assets/startScreen.68cd01d0.js",revision:"d0a3a427c4c3ca6eb647d696252958fd"},{url:"assets/startScreen.76257b3d.css",revision:"62af575d57063e1a7367d754cec482c7"},{url:"assets/stocksApp.008b8acc.js",revision:"02b1a015c8e8360e7a0665b7f7a89dd6"},{url:"assets/textApp.574a72dd.js",revision:"3c51cf2d65aef9cef48e19fe190ef9cd"},{url:"assets/textApp.d29d1dbd.css",revision:"a19f035b3a020fcf68f85a598ffe7c42"},{url:"assets/vendor.c335db97.js",revision:"5720a7e8522eff3c329d6df26ee4acf1"},{url:"assets/weatherApp.161eff13.js",revision:"5aae797f2d748199f9e0b9c1c29e3d38"},{url:"assets/youTubeApp.eaf7d158.js",revision:"f7a65a759c2de4fd65342d8ebd646cd3"},{url:"index.html",revision:"494bc1bd9f2134d063d4572d565615a7"},{url:"./img/icons/android-chrome-192x192.png",revision:"988f463f87e8225b7c0a055ba1f1bc78"},{url:"./img/icons/android-chrome-512x512.png",revision:"bea17c258ca8f429c0c0bb1d98d6b7d9"},{url:"./img/icons/android-chrome-maskable-192x192.png",revision:"988f463f87e8225b7c0a055ba1f1bc78"},{url:"./img/icons/android-chrome-maskable-512x512.png",revision:"bea17c258ca8f429c0c0bb1d98d6b7d9"},{url:"img/apps/calculatorApp.png",revision:"0f412b280914ec10c4f057fd9e429a40"},{url:"img/apps/calendarApp.png",revision:"e9c8d434713cf4492507fb9bb0dabe57"},{url:"img/apps/cameraApp.png",revision:"a34c52d00d8291aa1b33ac58b5fc080f"},{url:"img/apps/clockApp.png",revision:"54b6cd8dacfca5c5fce4e120e9bea377"},{url:"img/apps/iPodApp.png",revision:"d8475dfd0d13b8a196141c4531b34345"},{url:"img/apps/mailApp.png",revision:"9ad6ea136de10a62218f4f4e1fe2aba9"},{url:"img/apps/mapsApp.png",revision:"c50bba2bc8ba941675d5f0684c6fe7a7"},{url:"img/apps/notesApp.png",revision:"f205f90ed11a27e7eed6c3c786f03bd4"},{url:"img/apps/phoneApp.png",revision:"245b6163a0bffd1419f3a4f80e5de167"},{url:"img/apps/photosApp.png",revision:"6d75f63f61b1e7dd05cbec5ef6b31798"},{url:"img/apps/safariApp.png",revision:"1b7629b356c487980aa13ace51693b69"},{url:"img/apps/settings.png",revision:"da2a7f0775f8598d484416a6b29dc66a"},{url:"img/apps/stocksApp.png",revision:"8ef74e2b37b60d07a8aa2e8de502d84c"},{url:"img/apps/textApp.png",revision:"6c3b1430fa4b5047c0ff6964fe2db1bc"},{url:"img/apps/weatherApp.png",revision:"e71c2a7070db47219db3e61f67313b1c"},{url:"img/apps/youTubeApp.png",revision:"c98f912a736ad07c1e95193e9a1d4aee"},{url:"img/icons/android-chrome-192x192.png",revision:"988f463f87e8225b7c0a055ba1f1bc78"},{url:"img/icons/android-chrome-512x512.png",revision:"bea17c258ca8f429c0c0bb1d98d6b7d9"},{url:"img/icons/android-chrome-maskable-192x192.png",revision:"988f463f87e8225b7c0a055ba1f1bc78"},{url:"img/icons/android-chrome-maskable-512x512.png",revision:"bea17c258ca8f429c0c0bb1d98d6b7d9"},{url:"img/icons/apple-touch-icon.png",revision:"ae72f7f9f9f1cc48c313b14913da98ee"},{url:"img/icons/favicon-16x16.png",revision:"92ea6336e6d67a974802ec5b8283e6ff"},{url:"img/icons/favicon-32x32.png",revision:"6f79a94f77176070f1f7daf3f6e954fe"},{url:"img/icons/favicon.ico",revision:"5741e8ccc8d9cdf36d3347397bac54a2"},{url:"img/icons/favicon.svg",revision:"031de8aa6aa4f132dedb49deb178e41b"},{url:"img/icons/mstile-150x150.png",revision:"91262d49507df6454290d448acee0ae2"},{url:"img/icons/safari-pinned-tab.svg",revision:"885d5f46c84d53fe4e432c435e838547"},{url:"img/ui/dock.jpg",revision:"a41d649f5c2b81449f8380b781f7736d"},{url:"img/wallpapers/001.jpg",revision:"f03c02bde09cca9507cf04853e17d190"},{url:"img/wallpapers/002.png",revision:"d848622469339b1170484c712290d645"},{url:"manifest.webmanifest",revision:"8fbaa5c819ed2445a8f4e59a3cf5f892"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map

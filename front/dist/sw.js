if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,c)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}}))).then((e=>{const s=c(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-ac8ffed3"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/alarm.f398282b.js",revision:"00ab1134176f54dda4d851565ffaefb2"},{url:"assets/calculatorApp.b99b7245.js",revision:"17e639fad69bbf506bbea828729da42a"},{url:"assets/calendarApp.74e04645.js",revision:"f4f97e0afa13ce2ae48253a47dc31c71"},{url:"assets/cameraApp.a666a6a9.js",revision:"c85fd1a2d3b14b922196a43f416e4112"},{url:"assets/clockApp.8a813618.css",revision:"fb54bf4ee8063e759d2c616ad0b209d6"},{url:"assets/clockApp.b813e030.js",revision:"814c108d3173d93fd6f509f4ef240e30"},{url:"assets/homeScreen.1ae84c20.js",revision:"1408e2c6a010e5d83d9ddcc21e8ff396"},{url:"assets/homeScreen.d4e02b54.css",revision:"af4373b17da474499e3459316a000c3d"},{url:"assets/index.4233b8d0.css",revision:"1f9a589bd180bde1aa2eaacf2d6aa2aa"},{url:"assets/index.a80fd23e.js",revision:"6db5b2ac009de0023943fcf0beccc9a2"},{url:"assets/index.bc852a36.js",revision:"429fea19c88d4e69d4cbbc0a02468dfc"},{url:"assets/iPodApp.30fd42e9.js",revision:"def12425df258b1e1b96f7cd25ee5da3"},{url:"assets/lockScreen.0cce4ecf.js",revision:"c7aa257ffbf3b97f0bcf0bf9d2c3dab3"},{url:"assets/lockScreen.e14cb2dd.css",revision:"dc05054ccd7e8846910310e6e64a9dc6"},{url:"assets/mailApp.7b8b6d88.js",revision:"7d19130aa02227c40c9ae817f88b7158"},{url:"assets/mapsApp.e4701077.js",revision:"8f8258a2889b0783437a2730f9bc61f8"},{url:"assets/navigationBar.042aec48.js",revision:"f3f415b357a3d78c6c1f1480f29ffae7"},{url:"assets/navigationBar.d1f93e43.css",revision:"e4df738b911d54f6be42dd9390ca52dd"},{url:"assets/noteScreen.76f3b170.js",revision:"d825dc8f283b83bfa8df5c6396c5f0f9"},{url:"assets/noteScreen.7a985b07.css",revision:"5b2e1999784ce996c98de119ce6bf01c"},{url:"assets/phoneApp.d09cefaa.js",revision:"0446c0370152c4882d0f92bc64f08782"},{url:"assets/photosApp.6423a966.js",revision:"88fb430cf94b2af675e136ec440d011b"},{url:"assets/safariApp.e6704634.js",revision:"8c401405994cf4f8220bb6d580624fbd"},{url:"assets/settings.805f7be8.js",revision:"17e639fad69bbf506bbea828729da42a"},{url:"assets/startScreen.2bbaeea0.js",revision:"2587a20d9a607f6c821774bba8c4f4ea"},{url:"assets/startScreen.76257b3d.css",revision:"62af575d57063e1a7367d754cec482c7"},{url:"assets/stocksApp.694a4167.js",revision:"330cfc103fe1a45662e68bb48f130fdd"},{url:"assets/stopwatch.bc0f2945.js",revision:"cde9420aefadd521e769218930248af2"},{url:"assets/textApp.d29d1dbd.css",revision:"a19f035b3a020fcf68f85a598ffe7c42"},{url:"assets/textApp.dfd96827.js",revision:"c4d27941a372b8576662864edbc3935b"},{url:"assets/timer.442cea58.js",revision:"a416f558d217deae96ce7b0f0a320156"},{url:"assets/vendor.fbc0f821.js",revision:"d3aa194a2fc491fcbdc61d8c30b8aa24"},{url:"assets/weatherApp.79e259aa.js",revision:"e3954a095a1528ac128a07a60d748e7e"},{url:"assets/worldClock.15e0a8da.js",revision:"3b2792ef63ade02d64c84ebfa168c9fa"},{url:"assets/worldClock.86f31d32.css",revision:"e9cd172aa2191bbb2064275a24cb85cf"},{url:"assets/youTubeApp.6ec76364.js",revision:"633b14828396421a1dc1b80244d98de0"},{url:"index.html",revision:"ca354ed5be6ad6be33bda65a8bedcf4e"},{url:"./img/icons/android-chrome-192x192.png",revision:"988f463f87e8225b7c0a055ba1f1bc78"},{url:"./img/icons/android-chrome-512x512.png",revision:"bea17c258ca8f429c0c0bb1d98d6b7d9"},{url:"./img/icons/android-chrome-maskable-192x192.png",revision:"988f463f87e8225b7c0a055ba1f1bc78"},{url:"./img/icons/android-chrome-maskable-512x512.png",revision:"bea17c258ca8f429c0c0bb1d98d6b7d9"},{url:"img/apps/calculatorApp.png",revision:"0f412b280914ec10c4f057fd9e429a40"},{url:"img/apps/calendarApp.png",revision:"e9c8d434713cf4492507fb9bb0dabe57"},{url:"img/apps/cameraApp.png",revision:"a34c52d00d8291aa1b33ac58b5fc080f"},{url:"img/apps/clockApp.png",revision:"54b6cd8dacfca5c5fce4e120e9bea377"},{url:"img/apps/iPodApp.png",revision:"d8475dfd0d13b8a196141c4531b34345"},{url:"img/apps/mailApp.png",revision:"9ad6ea136de10a62218f4f4e1fe2aba9"},{url:"img/apps/mapsApp.png",revision:"c50bba2bc8ba941675d5f0684c6fe7a7"},{url:"img/apps/notesApp.png",revision:"f205f90ed11a27e7eed6c3c786f03bd4"},{url:"img/apps/phoneApp.png",revision:"245b6163a0bffd1419f3a4f80e5de167"},{url:"img/apps/photosApp.png",revision:"6d75f63f61b1e7dd05cbec5ef6b31798"},{url:"img/apps/safariApp.png",revision:"1b7629b356c487980aa13ace51693b69"},{url:"img/apps/settings.png",revision:"da2a7f0775f8598d484416a6b29dc66a"},{url:"img/apps/stocksApp.png",revision:"8ef74e2b37b60d07a8aa2e8de502d84c"},{url:"img/apps/textApp.png",revision:"6c3b1430fa4b5047c0ff6964fe2db1bc"},{url:"img/apps/weatherApp.png",revision:"e71c2a7070db47219db3e61f67313b1c"},{url:"img/apps/youTubeApp.png",revision:"c98f912a736ad07c1e95193e9a1d4aee"},{url:"img/icons/android-chrome-192x192.png",revision:"988f463f87e8225b7c0a055ba1f1bc78"},{url:"img/icons/android-chrome-512x512.png",revision:"bea17c258ca8f429c0c0bb1d98d6b7d9"},{url:"img/icons/android-chrome-maskable-192x192.png",revision:"988f463f87e8225b7c0a055ba1f1bc78"},{url:"img/icons/android-chrome-maskable-512x512.png",revision:"bea17c258ca8f429c0c0bb1d98d6b7d9"},{url:"img/icons/apple-touch-icon.png",revision:"ae72f7f9f9f1cc48c313b14913da98ee"},{url:"img/icons/favicon-16x16.png",revision:"92ea6336e6d67a974802ec5b8283e6ff"},{url:"img/icons/favicon-32x32.png",revision:"6f79a94f77176070f1f7daf3f6e954fe"},{url:"img/icons/favicon.ico",revision:"5741e8ccc8d9cdf36d3347397bac54a2"},{url:"img/icons/favicon.svg",revision:"031de8aa6aa4f132dedb49deb178e41b"},{url:"img/icons/mstile-150x150.png",revision:"91262d49507df6454290d448acee0ae2"},{url:"img/icons/safari-pinned-tab.svg",revision:"885d5f46c84d53fe4e432c435e838547"},{url:"img/ui/dock.jpg",revision:"a41d649f5c2b81449f8380b781f7736d"},{url:"img/wallpapers/001.jpg",revision:"f03c02bde09cca9507cf04853e17d190"},{url:"img/wallpapers/002.png",revision:"d848622469339b1170484c712290d645"},{url:"manifest.webmanifest",revision:"8fbaa5c819ed2445a8f4e59a3cf5f892"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map

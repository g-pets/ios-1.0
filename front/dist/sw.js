if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,c,r)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(c.map((s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}}))).then((e=>{const s=r(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-ac8ffed3"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/alarm.ba328a63.js",revision:"724fb9ff552c07c0e1a85ea541cef9ab"},{url:"assets/appState.590d10a0.js",revision:"8f285571874848898fd47ecee5477079"},{url:"assets/authenticatedLayer.08672fa9.js",revision:"9b72d1b330a98ace38ffd748693eafbb"},{url:"assets/authenticatedLayer.6713f7f7.css",revision:"afc78f68156bf39828d37712e4b4ecf2"},{url:"assets/calling.34737431.js",revision:"b6952bd1fe8b1242134ee07266f2c00f"},{url:"assets/calling.77001039.css",revision:"bd3dc628a3f2bf26e3c0cd2d758bd978"},{url:"assets/clockApp.00b64049.css",revision:"2c43eef25b92c1158b9835a074a1b036"},{url:"assets/clockApp.b7cfb8c1.js",revision:"764675e31c5fe2a2527f52a077395a7d"},{url:"assets/comingSoon.25b44b5b.js",revision:"942412b2c5c0bd282ed56e6b487a0894"},{url:"assets/contact.4f8fc392.js",revision:"94b6b3503055e64c87fa7a21abe49639"},{url:"assets/contact.a55006c6.css",revision:"44ce4056b7787615f2d518767e0ea318"},{url:"assets/contacts.8c675c88.js",revision:"45cf8b0c1585475e0fe43e98807786b8"},{url:"assets/conversation.43145c6b.js",revision:"f22db2d21a0d500b5462b0c09d4f9e60"},{url:"assets/conversation.db9c80af.css",revision:"68e2324a83cf9d40137e06c5ca7c4f54"},{url:"assets/conversations.7511f499.css",revision:"d0bd10cb11730c5d26516b48861bd95d"},{url:"assets/conversations.a4015889.js",revision:"012035698fb3230d10c01cc18d83d68b"},{url:"assets/deviceState.5e75fc2f.js",revision:"d1ab84721cd3c79d952b938eec02a612"},{url:"assets/entryLayer.27a8f0f4.css",revision:"1d9eba0b04a668b24a208f1c6f13ea1c"},{url:"assets/entryLayer.e4a1ebed.js",revision:"f4a9cd61ed760c1b60f27806dd628353"},{url:"assets/favorites.0a69d060.js",revision:"b5b2f1569635536b6d2efa76d6f825b1"},{url:"assets/homeScreen.1f125b0c.css",revision:"80b1db108e876a58a9bdf889f0348f95"},{url:"assets/homeScreen.c818f3b3.js",revision:"094344bdad5dcbc13cb4354fbd636b66"},{url:"assets/index.9b9aeaa5.js",revision:"c4fd0633f70500a59b315dbd73cf3dd7"},{url:"assets/index.b9151320.css",revision:"8264a763539f8e27b0c5f017512754d3"},{url:"assets/index.cc4b6a56.js",revision:"a98412d4c51b69621901858b289c4538"},{url:"assets/installationLayer.31c07662.css",revision:"9e1731515d21a076717f8a6b26bb2b5c"},{url:"assets/keypad.5e1e940a.css",revision:"943c7f7cb730bc55cf4c248ae3165560"},{url:"assets/keypad.c53e6ec8.js",revision:"fd71fb2069bd5423f4fafd3fc5363966"},{url:"assets/listView.d505a2fd.css",revision:"6af22fd2ce1f685d8ec5441af489f43e"},{url:"assets/listView.fca92e41.js",revision:"b156a4de8a401839862787192ce2bc3c"},{url:"assets/navigationBarButton.5a5c9bb2.css",revision:"0e219bad96ff59fe09b90bf33f144df5"},{url:"assets/navigationBarButton.ce3ad092.js",revision:"347c45783e06b4aac11f979a183ee3a9"},{url:"assets/phoneApp.14e3668f.css",revision:"64d5e15a2ffe92dc3b8899dec34208fa"},{url:"assets/phoneApp.b148c13b.js",revision:"b2a09f11e2c35597c2085ac8187744fe"},{url:"assets/recents.46f7ce33.js",revision:"f72de7fc05c0dc8deb30d23355918652"},{url:"assets/recents.cb65037d.css",revision:"65b79c85e3c133c234ba2ec88443cc81"},{url:"assets/stopwatch.56d2149b.js",revision:"75bfacca9000c78a058cd8211eeb3e0e"},{url:"assets/store.67a60616.js",revision:"106b1fb84089208a64a203ac9c294ef4"},{url:"assets/tabBar.2d73dccd.css",revision:"04f43a2f98ca8d1e49d369850bec665d"},{url:"assets/tabBar.8f2b72bd.js",revision:"059cf827130fe6e295e0fad68115550e"},{url:"assets/textApp.29801468.css",revision:"fcbae7376611c275efec69b02e25da47"},{url:"assets/textApp.6fc89fbe.js",revision:"580e6bbbbe4dab4a97239450060c62af"},{url:"assets/timer.48ca4203.js",revision:"0fe3209a51b9f5afc82933ba82539b3b"},{url:"assets/toggleButton.973ed10c.css",revision:"92961c2ac0b253edb375840c54878b4f"},{url:"assets/toggleButton.b37c2666.js",revision:"d70e254a64bf54c6eeec7a5e8ce69402"},{url:"assets/unauthenticatedLayer.5b356511.js",revision:"910e4871289bb8567bcc28bee9f0c40a"},{url:"assets/unauthenticatedLayer.96c2393e.css",revision:"7c4c89ce8cbbe2d2c1494eaa4c7c4e30"},{url:"assets/vendor.7fc95355.js",revision:"15cd976944e978e7194dfde0ad119394"},{url:"assets/voicemail.aa36c21a.js",revision:"d2596a33d52152929073fe237928ceae"},{url:"assets/workbox-window.prod.es5.28eaf433.js",revision:"18cc6448dbf32c3b09762fea87235c8f"},{url:"assets/worldClock.089b33bb.js",revision:"9de842a27048ac06e9c67b7032a6e5df"},{url:"assets/worldClock.8ab548b4.css",revision:"6ed649caf2df9bb74ed0ce075e31d0bd"},{url:"index.html",revision:"daf37966bdfe3a876eb87a48226b65c8"},{url:"./img/icons/android-chrome-192x192.png",revision:"988f463f87e8225b7c0a055ba1f1bc78"},{url:"./img/icons/android-chrome-512x512.png",revision:"bea17c258ca8f429c0c0bb1d98d6b7d9"},{url:"./img/icons/android-chrome-maskable-192x192.png",revision:"988f463f87e8225b7c0a055ba1f1bc78"},{url:"./img/icons/android-chrome-maskable-512x512.png",revision:"bea17c258ca8f429c0c0bb1d98d6b7d9"},{url:"img/wallpapers/planet.webp",revision:"e95b332a3eec8587557fc3deebe8079a"},{url:"manifest.webmanifest",revision:"8fbaa5c819ed2445a8f4e59a3cf5f892"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map

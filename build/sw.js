if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,o,i)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const c={uri:location.origin+s.slice(1)};return Promise.all(o.map((s=>{switch(s){case"exports":return r;case"module":return c;default:return e(s)}}))).then((e=>{const s=i(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-df9df33b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/bottle.svg",revision:"60688820e8c63b6b28e242e90214be18"},{url:"assets/cards.js",revision:"3d6bf173474faa2bdeaf015c927c0458"},{url:"assets/down_arrow.svg",revision:"509956294d02449665ae5890cb1d2a83"},{url:"assets/icon-ios.png",revision:"1cc631d61e850d7bc55bf0674b0b3c68"},{url:"assets/icon.png",revision:"3a301bc9bb042bb23e67e16de00c096f"},{url:"assets/icon.webp",revision:"af373ae11bac262ef98f0d6788927b71"},{url:"assets/maskable_icon.png",revision:"84676946e16fbe074aa2db69f92a10f6"},{url:"assets/SF-UI-Text-Regular.otf",revision:"5b838b00736ea2f7108a8479a6ea6a6a"},{url:"compos/card.compo",revision:"1173f12f8908dd77cbc4828966f70a17"},{url:"compos/options.compo",revision:"36d0e9feb9e2fee4ac193b7d00cdb8cf"},{url:"compos/play.compo",revision:"ea764bec233b6dd1f4caef4a5d14a4f9"},{url:"compos/pregame.compo",revision:"ea6c6b1d2210ce0331204afd38f2aaf8"},{url:"compos/startmenu.compo",revision:"efaf4e66c5d1c502cee6fb530a0ff5d9"},{url:"helpers.js",revision:"a200d5181ca38f97e92f405faf77b8f4"},{url:"index.html",revision:"a88e0b63014e6472f9cc8ed298df824b"},{url:"main.js",revision:"de676de1c45f8ce586b547a9931d7529"},{url:"manifest.webmanifest",revision:"510b8caf8c5107dc65c383d2b85b84fd"},{url:"options.js",revision:"83f6530a229230b0812972090e460f67"},{url:"style.css",revision:"42ecb43b5777c6ab3a4a616d18fc9e13"}],{}),e.cleanupOutdatedCaches()}));
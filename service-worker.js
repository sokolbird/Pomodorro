"use strict";var precacheConfig=[["/Pomodorro/index.html","18c1c23b21546f1e36df6247bb8578e7"],["/Pomodorro/static/css/main.0e212598.css","efe77e9f8dd4dbf31a68e8995d1149fa"],["/Pomodorro/static/js/main.c9e90c26.js","e2c2d5bddc7d6c606eae9cb6471fcecb"],["/Pomodorro/static/media/dots-horizontal.1dd6fa86.svg","1dd6fa861b79d33a5b4784c8d5c62447"],["/Pomodorro/static/media/github-circle.6e7b041e.svg","6e7b041ee8ff20c449f061c9658164fb"],["/Pomodorro/static/media/help.3067476a.svg","3067476a6125e223803fb8141e40023d"],["/Pomodorro/static/media/instagram.522560b8.svg","522560b8289dceca1409d20caec3caf2"],["/Pomodorro/static/media/minus-box.203ab15e.svg","203ab15e1802de7153ea14ec63b2354e"],["/Pomodorro/static/media/plus-box.74faea4c.svg","74faea4c61bb326a59333fd119da72fa"],["/Pomodorro/static/media/save.f638348b.svg","f638348bdeab8024cdac7fd12730a6c6"],["/Pomodorro/static/media/settings.a22f5472.svg","a22f5472a4eda12ce5f9a15362cdfdde"],["/Pomodorro/static/media/sound.e22b1eec.wav","e22b1eec9bd6aee34760311d9cace963"],["/Pomodorro/static/media/telegram.f0da16fa.svg","f0da16fafea633fda6757bd85b4074f8"],["/Pomodorro/static/media/tomato.31231bad.svg","31231bad3799ca3e1c730ed3494e8372"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var r=new URL(e);return"/"===r.pathname.slice(-1)&&(r.pathname+=t),r.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,r,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(r)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var r=new URL(t).pathname;return e.some(function(e){return r.match(e)})},stripIgnoredUrlParameters=function(e,r){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return r.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],r=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,r,/\.\w{8}\./);return[a.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(r){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!r.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var r=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!r.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,r=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(r))||(r=addDirectoryIndex(r,a),e=urlsToCacheKeys.has(r));var n="/Pomodorro/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(r=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(r)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(r)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});
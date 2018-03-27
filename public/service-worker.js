/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/YYPcyY
 */

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.0.0-beta.0/workbox-sw.js"
);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "app.js",
    "revision": "f92af0e2b995237170b664939df3076d"
  },
  {
    "url": "common.js",
    "revision": "4705a786beab5c9fccc4fa468828fc32"
  },
  {
    "url": "config.js",
    "revision": "8b51e438dbae39ff626c1413cc99f4f2"
  },
  {
    "url": "index.html",
    "revision": "6bc96526da3bed0320b1fb8bff0c5c27"
  },
  {
    "url": "manifest.json",
    "revision": "e5d5d0f61f178bee8a47e2ec7fd14e67"
  },
  {
    "url": "style.css",
    "revision": "d09f95f17f13763977754a09e24c11c4"
  },
  {
    "url": "widget.html",
    "revision": "ed461d5e6202463ed7d039fbde28f511"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

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
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "app.js",
    "revision": "757396cd7100e010d6fd511076b764c8"
  },
  {
    "url": "common.js",
    "revision": "da53a3a0fef4a75b32b8e3506f15d6fd"
  },
  {
    "url": "config.js",
    "revision": "ad3925a402ba454fb8d7efbd74087014"
  },
  {
    "url": "index.html",
    "revision": "1a9a462374ecf02b7abe5e1b34acc389"
  },
  {
    "url": "manifest.json",
    "revision": "f6e2716ee168909d3e2e4867ffd8eeb3"
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

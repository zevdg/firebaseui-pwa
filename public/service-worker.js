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
    "revision": "4f276d9e5cd7e70918b1456141aa2797"
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

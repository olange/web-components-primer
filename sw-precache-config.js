/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

module.exports = {
  staticFileGlobs: [
    "manifest.json",
    "public/**/*",
  ],
  runtimeCaching: [
    {
      urlPattern: /\/@webcomponents\/webcomponentsjs\//,
      handler: 'fastest'
    },
    {
      urlPattern: /\/@petitatelier\/dia-show\//,
      handler: 'fastest'
    },
    {
      urlPattern: /\/@petitatelier\/dia-livecode\//,
      handler: 'fastest'
    },
    {
      urlPattern: /\/@petitatelier\/dia-code\//,
      handler: 'fastest'
    },
    {
      urlPattern: /^https:\/\/fonts.gstatic.com\//,
      handler: 'fastest'
    },
    {
      urlPattern: /^https:\/\/www.gstatic.com\/firebasejs\//,
      handler: 'fastest'
    }
  ],
  // Ignore reserved namespace of Firebase Auth
  // (see https://gist.github.com/Dabolus/314bd939959ebe68f57f1dcebe120a7e)
  navigateFallback: '/index.html',
  navigateFallbackWhitelist: [ /^\/[^\_]+\/?/ ]
};
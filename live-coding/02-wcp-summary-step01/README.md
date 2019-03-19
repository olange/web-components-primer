[next »](../02-wcp-summary-step02/)

# 1. Using Web Components – How to start?

Part of the live-coding examples of the talk [A Primer on Web Components](https://web-components-primer.firebaseapp.com).

---

## package.json

Create a `package.json` file to bootstrap your development with Web Components – to declare the libraries you'll use and have a local development server running.

Add the [Web Components polyfills](https://github.com/webcomponents/webcomponentsjs) and the [Lit-Element](https://lit-element.polymer-project.org) library

```
  …
  "dependencies": {
    "@webcomponents/webcomponentsjs": "^2.2.7",
    "lit-element": "^2.0.1"
  },
  …
```

Add the `polyserve` local development server and a script to start it:

```
  …
  "scripts": {
    "start": "polyserve --npm --module-resolution=node"
  },
  "devDependencies": {
    "polyserve": "latest"
  },
  …
```

Install the dependencies, start the server and, for the impatient, open http://localhost:8081/ note there is nothing to serve yet:

```
$ npm install
…
$ npm start
…
```

## index.html

Create an HTML page to start your app — we provided a minimal HTML5 template in this example. To use Web Components, you'll essentially need to:

### Add the Web Components polyfills

There are various ways of loading them — may be you'll discover a [`WebComponents.waitFor` asynchronous way](https://github.com/webcomponents/webcomponentsjs#asynchronous) while reading the docs — the following one will work fine in all cases:

```html
    <!-- Web Components polyfills (they will detect if there are needed) -->
    <script src="/node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>
```

### Load the definition of your Web Component

Here we assume we would have the `‹wcp-summary›` element definition ready at hand in a `wcp-summary.js` script:

```html
  <body>
    <!-- Definition of our ‹wcp-summary› custom element -->
    <script type="module" src="/wcp-summary.js" defer></script>
  </body>
```

### Use your Web Component

```html
  <body>
    …
    <wcp-summary></wcp-summary>
    –
  </body>
```

## Notes

Loading the definition of your custom element can go either in the `‹head›`, or in the `‹body›` — the same applies to loading the Web Components polyfills.

If you put both in the ‹head›, the browser will load them synchronously and before painting. By putting them in the ‹body›, the browser will first ignore your custom element tag, then upgrade it, once it loaded its definition.

We like to place the polyfills in the ‹head› and defer loading of the custom elements definitions, so that our page paints as quickly as possible.

There are many ways to get faster to first paint — it is a rich subject on its own — which involve various strategies, not only asynchronously loading our two scripts. If you're interested and new to this topic, we'd suggest the [PWA Starter Kit](https://pwa-starter-kit.polymer-project.org) to start with.

---

[View it on Glitch](https://wcp-summary-step01.glitch.me/) /
[Remix it on Glitch](https://glitch.com/edit/#!/wcp-summary-step01)
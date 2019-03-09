import { html } from "lit-element";

export function diapoGōngfuIO() {
  return html`
    <h1><img src="images/gongfuio-icon-128.png"
      height="128" width="128" alt="Gōng-fu I/O"><br>
      Gōng-fu I/O meetup</h1>
    <p>Wednesday 20:30–22:30, Cité Bleue, Geneva<br>
      <a href="https://www.meetup.com/fr-FR/g%C5%8DngfuIO/">meetup.com/gongfuIO</a></p>
    <p>Study sessions & creative coding<br>
    <a href="http://gongfu.io/presentations/10-min/">Gōng-fu I/O in 10 min.</a></p>
  `;
}

export function diapoPlayWithWebComponents() {
  return html`
    <h1>Play with Web Components</h1>
    <p>Install and serve locally the sources of this slideshow:</p>
    <dia-code>
$ git clone git@github.com:petitatelier/web-components-primer.git
$ cd web-components-primer
$ npm install
$ npm run serve
    </dia-code>
    <p>open <a href="http://localhost:8001/">http://localhost:8001/</a>
      and explore the sources.</p>
  `;
}

export function diapoPlayWithDemonstrates() {
  return html`
    <h1>Demonstrates</h1>
    <h2>PWA app shell</h2>
    <ul>
      <li>A simple PWA app shell <code>public/index.html</code></li>
      <li>wrapping a Web Component with the slideshow <code>public/wcp-slideshow.js</code></li>
    </ul>
    <h2>Polymer & PWA goodness</h2>
    <ul>
      <li>Service Worker Precache <code>sw-precache-config.js</code></li>
      <li>Web App Manifest <code>public/manifest.json</code></li>
      <li>Polymer differential build <code>polymer.json</code></li>
    </ul>
    <h2>Firebase</h2>
    <ul>
      <li>Firebase project settings <code>firebase.json</code></li>
    </ul>
  `;
}

export function diapoPlayWithWebComponentsAside() {
  return html`
    <h1>Play with Web Components</h1>
    <aside>
      <ul>
        <li>How to install <code>@petitatelier/web-components-primer</code></li>
        <li>Gōng-fu I/O: David, Andreas and I run it since 5 years. You'll find us there, hacking
          Javascript, Canvas APIs, WebGL, Firebase, Flutter, Web Components,
          Three.js, D3.js, Observable, force-directed layouts, spherical force-directed graphs,
          VEGA, reactive dataflow & computational graphs, Machine learning, Web Workers
          & Web Streams, mapping…</li>
        <li>Creative coding altogether, 2 hours every week, all levels, own projects, among peers</p>
      </ul>
    </aside>
  `;
}

import { LitElement, html, css } from "lit-element";
import "@petitatelier/dia-show";
import "@petitatelier/dia-code";
import "@petitatelier/dia-livecode";

import "resize-observer-polyfill";
import "intersection-observer";
import "@google/model-viewer";

export class WebComponentsPrimerSlideshow extends LitElement {

  static get styles() {
    return [
      css`
        .big { font-size: var(--big-normal-text-size); }
        .big pre, pre.big,
        .big code, code.big {
          font-size: var(--big-monospaced-text-size); }

        .center { text-align: center; }

        pre, code {
          font-family: var(--monospaced-text-font);
          font-size: var(--monospaced-text-size); }

        h1, pre, model-viewer {
          margin: calc(1.5 * var(--big-normal-text-size)) auto;
          padding: 0; }

        aside {
          background-color: lightgray;
          width: 1fr; padding: 1em 2em; }

        a { color: var(--primary-text-color); }
        a:hover, a:visited { color: var(--secondary-text-color); }

        model-viewer {
          width: 100%; height: 400px; }

        .chip {
          border-radius: 0.25em;
          border: 1px solid var(--primary-text-color);
          background-color: var(--primary-text-color);
          color: var(--main-bg-color);
          margin: 0 0.5em; padding: 0 0.25em; }
      `
    ];
  }

  static get properties() {
    return {
      primerURL: { type: String, attribute: "primer-url" },
      starterURL: { type: String, attribute: "starter-url" }
    };
  }

  constructor() {
    super();
    // URL of this slideshow « A Primer to Web Components »
    this.primerURL = "https://ptat.ch/webcomponents-primer";
    // URL of the « Web Components Starter » kit on GitHub
    this.starterURL = "https://ptat.ch/webcomponents-starter";
    // URL of the Geneva Web Meetup of 11.03.2019 (where to leave feedback)
    this.meetupURL = "https://www.meetup.com/fr-FR/GenevaWeb/events/258787967";
  }

  render() {
    const primerURL = new URL( this.primerURL),
          primerURLShortened = `${primerURL.host}${primerURL.pathname}`,
          starterURL = new URL( this.starterURL),
          starterURLShortened = `${starterURL.host}${starterURL.pathname}`;

    return html`
      <dia-show slide="s01">
        <dia-slide id="s01">
          <dia-po display="pj01">
            <h1>WiFi</h1>
            <pre class="big" style="text-align: center">sdg-solution-space<br>123456</pre>
            <h1>Join the conference <span class="chip">LIVE</span></h1>
            <pre class="big"><a href="${primerURL}">${primerURLShortened}</a></pre>
          </dia-po>
          <dia-po display="tv01" default>
            <h1>A Primer on Web Components</h1>
            <p>by Yves & Olivier Lange<br>
              Geneva Web meetup · 11.03.2019</p>
            <a class="logo" href="https://petit-atelier.ch/"><img height="96" src="images/manifest/icon-192x192.png"></a>
          </dia-po>
          <dia-po display="tv02">
            <pre>‹model-viewer
  src="images/models/Astronaut.glb"
  alt="A 3D model of an astronaut"
  background-color="lightskyblue"
  controls auto-rotate›
‹/model-viewer›</pre>
            <model-viewer
              src="images/models/Astronaut.glb"
              alt="A 3D model of an astronaut"
              background-color="lightskyblue"
              controls auto-rotate>
            </model-viewer>
          </dia-po>
          <dia-po display="sp01">
            <h1>A Primer on Web Components</h1>
            <aside>
              <ul>
                <li>Welcome! My name is Olivier</li>
                <li>In about 45 min. we are going to try to present you Web Components,
                  a standard of the web, that as slowly matured and is now taking on</li>
                <li>Everything you see around you is made of webcomponents and markup text</li>
                <li>So you'll get a live proof of how well it works!</li>
              </ul>
            </aside>
          </dia-po>
          <dia-po display="sp02">
            <pre>
<script src="https://unpkg.com/@google/model-viewer@0.1.1/dist/model-viewer.js"></script>
‹model-viewer
  src="images/models/Astronaut.glb"
  alt="A 3D model of an astronaut"
  background-color="lightskyblue"
  controls auto-rotate›
‹/model-viewer›</pre>
            <aside>
              <ul>
                <li>and my name is Yves</li>
                <li>To follow the slideshow on your computer/tablet</li>
                <li>connect to the WiFi (optionaly)</li>
                <li>and navigate to the address written on projector</li>
              </ul>
            </aside>
          </dia-po>
        </dia-slide>
        <dia-slide id="s02">
          <dia-po display="pj01"></dia-po>
          <dia-po display="tv01" default>
            <h1>What are Web Components?</h1>
            * Web Standards (Custom Elements, Shadow DOM & CSS, Import, Template)
            * Design Guidelines & Good practices (A11Y)
            * Units of deployment
            * Tool chain
            * Public registry
            * A vibrant community</dia-po>
          <dia-po display="tv02">Exemple de terrain en 3D avec élévation</dia-po>
          <dia-po display="sp01"></dia-po>
          <dia-po display="sp02"></dia-po>
        </dia-slide>
        <dia-slide id="s03">
          <dia-po display="pj01"></dia-po>
          <dia-po display="tv01" default>
            <h1>The Promises of Web Components</h1>
            Patchwork
            Reuse
            Ubiquity
          </dia-po>
          <dia-po display="tv02">(Patchwork image / Color of time)</dia-po>
          <dia-po display="sp01"></dia-po>
          <dia-po display="sp02"></dia-po>
        </dia-slide>
        <dia-slide id="s03">
          <dia-po display="pj01"></dia-po>
          <dia-po display="tv01" default>Can I Use… ?</dia-po>
          <dia-po display="tv02">Diagramme compatibilité avec navigateurs (avec polyfills)</dia-po>
          <dia-po display="sp01"></dia-po>
          <dia-po display="sp02"></dia-po>
        </dia-slide>
        <dia-slide id="s03">
          <dia-po display="pj01"></dia-po>
          <dia-po display="tv01" default>Difficult bits</dia-po>
          <dia-po display="tv02">Modules / npm install hairball / Dataflow: many strategies, all valid, soon you'll start mixing strategies / Building for production</dia-po>
          <dia-po display="sp01"></dia-po>
          <dia-po display="sp02"></dia-po>
        </dia-slide>
        <dia-slide id="sEnd">
          <dia-po display="pj01" class="center">
            <p>These slides are available at:</p>
            <p class="big">
              A Primer on Web Components<br/>
              <a href="${primerURL}">${primerURLShortened}</a></p>
            <p>And once you're ready to roll your own collection of Web Components and publish them to NPM:</p>
            <p class="big">
              Web Components Starter<br/>
              <a href="${starterURL}">${starterURLShortened}</a></p>
          </dia-po>
          <dia-po display="tv01" default class="center">
            <h1>Thank you for your attention<br>🙏🏻</h1>
            <p class="big">Your feedback would be very appreciated!</p>
            <p>Please leave a comment on <a href="${this.meetupURL}">meetup.com/GenevaWeb</a><br>
              or ping us on Twitter <a href="https://twitter.com/olange">@olange</a>
              and <a href="https://twitter.com/yveslangech">@yveslangech</a><br>
              or on LinkedIn <a href="https://www.linkedin.com/in/olange">@olange</a> and <a href="https://www.linkedin.com/in/yveslange">@yveslange</a>.</p>
          </dia-po>
          <dia-po display="tv02" class="center">
            <a href="https://petit-atelier.ch/">
              <img height="200" width="200"
                src="images/petit-atelier-logo.png"
                alt="Le Petit Atelier de Génie logiciel sàrl">
            </a>
          </dia-po>
          <dia-po display="sp01" class="center">
            <h1>Thank you for your attention<br>🙏🏻</h1>
            <p class="big">Your feedback would be very appreciated!</p>
          </dia-po>
          <dia-po display="sp02" class="center">
            (Petit Atelier · Logo)
          </dia-po>
        </dia-slide>
        <dia-slide id="sPost">
          <dia-po display="pj01" class="center">
            <h1><img src="images/gongfuio-icon-128.png"
              height="128" width="128" alt="Gōng-fu I/O"><br>
              Gōng-fu I/O meetup</h1>
            <p>Wednesday 20:30–22:30, Cité Bleue, Geneva<br>
              <a href="https://www.meetup.com/fr-FR/g%C5%8DngfuIO/">meetup.com/gongfuIO</a></p>
            <p>Study sessions & creative coding<br>
            <a href="http://gongfu.io/presentations/10-min/">Gōng-fu I/O in 10 min.</a></p>
          </dia-po>
          <dia-po display="tv01" default>
            <h1>Play with Web Components</h1>
            <p>Install and serve locally the sources of this slideshow:</p>
            <pre>
$ git clone git@github.com:petitatelier/web-components-primer.git
$ cd web-components-primer
$ npm install
$ npm run serve
            </pre>
            <p>open <a href="http://localhost:8001/">http://localhost:8001/</a>
              and explore the sources.</p>
          </dia-po>
          <dia-po display="tv02">
            Demonstrates:
            * A simple PWA shell (public/index.html)
            * wrapping a Web Component with the slideshow (public/web-components-primer.js)
            * with Service Worker Precache (sw-precache-config.js)
            * Web App Manifest (manifest.json)
            * Polymer Differential Builds (polymer.json)
            * A Firebase project config (firebase.json)
          </dia-po>
          <dia-po display="sp01">
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
          </dia-po>
          <dia-po display="sp02">
            <h1>Play with Web Components</h1>
            <p>What the code source of <code>@petitatelier/web-components-primer</code> demonstrates</p>
          </dia-po>
        </dia-slide>
      </dia-show>
      <slot></slot>`;
  }

}

// Register the element with the browser
customElements.define( "web-components-primer", WebComponentsPrimerSlideshow);
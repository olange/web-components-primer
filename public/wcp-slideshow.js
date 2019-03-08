import { LitElement, html, css } from "lit-element";

import { SlideshowStyles } from "./styles.js";
import "./wcp-summary.js";

import "@petitatelier/dia-show";
import "@petitatelier/dia-code";
import "@petitatelier/dia-livecode";

import "resize-observer-polyfill";
import "intersection-observer";
import "@google/model-viewer";

export class WebComponentsPrimerSlideshow extends LitElement {

  static get styles() {
    return [ SlideshowStyles ];
  }

  static get properties() {
    return {
      primerURL: { type: String, attribute: "primer-url" },
      starterURL: { type: String, attribute: "starter-url" },
      meetupURL: { type: String, attribute: "meetup-url" }
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
          starterURLShortened = `${starterURL.host}${starterURL.pathname}`,
          meetupURL = new URL( this.meetupURL),
          meetupURLShortened = `${meetupURL.host}/GenevaWeb`

    return html`
      <dia-show detached dashboard speaker>
        <dia-slide id="s01">
          <dia-po display="pj01">
            <h1>WiFi</h1>
            <pre class="big" style="text-align: center">sdg-solution-space<br>123456</pre>
            <h1>Join the conference <span class="chip">LIVE</span></h1>
            <pre class="big"><a href="${primerURL}">${primerURLShortened}</a></pre>
          </dia-po>
          <dia-po display="tv01" default>
            <h1>A Primer on Web Components<br>
              #UseThePlatform</h1>
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
            <h1>A Primer on Web Components<br>
              #UseThePlatform</h1>
            <aside>
              <ul>
                <li>Welcome! My name is Olivier… We're running a software consultancy,
                  le PAGL, and crafting software for our partners and customers.</li>
                <li>In about 45 min. we are going to try to present you Web Components,
                  a standard of the web, that as slowly matured and is now taking on.</li>
                <li>Everything you see around you is made of webcomponents and
                    markup text — so you'll get a live proof of how well it works!</li>
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
                <li>… and my name is Yves. We're both open-source developers,
                  and web fundamentals enthusiasts.</li>
                <li>To follow the slideshow on your computer/tablet</li>
                <li>connect to the WiFi (optionaly)</li>
                <li>and navigate to the address written on projector</li>
              </ul>
            </aside>
          </dia-po>
        </dia-slide>
        <dia-slide id="s02">
          <dia-po display="pj01">
            <wcp-summary active-index="F"></wcp-summary>
          </dia-po>
          <dia-po display="tv01" default>
            <h1>What are Web Components?</h1>
            <ul>
              <li>Web Standards – more on this soon</li>
              <li>Units of deployment</li>
              <li>Tool chain</li>
              <li>Public registry</li>
              <li>Design guidelines & Good practices (A11Y)</li>
              <li>A vibrant and diverse open-source community</li>
            </ul>
          </dia-po>
          <dia-po display="tv02">Exemple de terrain en 3D avec élévation</dia-po>
          <dia-po display="sp01"></dia-po>
          <dia-po display="sp02"></dia-po>
        </dia-slide>
        <dia-slide id="s03">
          <dia-po display="pj01"></dia-po>
          <dia-po display="tv01" default>
            <h1>The Promises of Web Components</h1>
            <ul>
              <li>Patchwork</li>
              <li>Composability & Reuse</li>
              <li>Built-in your browser</li>
            </ul>
          </dia-po>
          <dia-po display="tv02">
            (Patchwork image / Color of time)
          </dia-po>
          <dia-po display="sp01">
            <ul>
                <li>Patchwork – beware hairball though</li>
                <li>Composability & Reuse – UMD libraries though</li>
                <li>Built-in your browser – not a framework, nor a library!</li>
              </ul>
          </dia-po>
          <dia-po display="sp02">
            (Patchwork image / Color of time)
          </dia-po>
        </dia-slide>
        <dia-slide id="s04">
          <dia-po display="pj01"></dia-po>
          <dia-po display="tv01">
            Custom Elements, Shadow DOM & CSS, Import, Template
          </dia-po>
          <dia-po display="tv02"></dia-po>
          <dia-po display="sp01"></dia-po>
          <dia-po display="sp02"></dia-po>
        </dia-slide>
        <dia-slide id="s05">
          <dia-po display="pj01">
            <blockquote cite="https://youtu.be/cuoZenpQveQ?t=960" style="padding: 4em 4em">
              <h2>« Web Components run natively on 1B+ devices »</h2>
              <p><cite>— Wendy Ginsberg, 17.05.2017</cite></p>
            </blockquote>
            <p class="blockquote"><cite><a href="https://youtu.be/cuoZenpQveQ?t=960">Future, Faster: Unlock the Power of Web Components with Polymer (Google I/O '17)</a></cite> at min. 16:00 of the talk</p>
          </dia-po>
          <dia-po display="tv01" default>
            <h1>Can I Use Web Components ?</h1>
            <table>
            <thead>
            <tr>
            <th>Native browser support</th>
            <th align="center">Chrome 66+</th>
            <th align="center">Safari 11.1+</th>
            <th align="center">Firefox 63+</th>
            <th align="center">Edge 16+</th>
            <th align="center">IE11</th>
            <th align="center">Chrome Android</th>
            <th align="center">Mobile Safari</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <td><a href="https://caniuse.com/#search=ES6%20classes">ES6 Classes</a></td>
            <td align="center">✓</td>
            <td align="center">✓</td>
            <td align="center">✓</td>
            <td align="center">✓</td>
            <td align="center">Transpile</td>
            <td align="center">✓</td>
            <td align="center">✓</td>
            </tr>
            <tr>
            <td><a href="https://polymer-library.polymer-project.org/3.0/docs/browsers">ES6 Modules</a></td>
            <td align="center">✓</td>
            <td align="center">✓</td>
            <td align="center">✓</td>
            <td align="center">✓</td>
            <td align="center">Transpile</td>
            <td align="center">✓</td>
            <td align="center">✓</td>
            </tr>
            <tr>
            <td><a href="https://caniuse.com/#search=Custom%20elements">Custom Elements</a></td>
            <td align="center">✓</td>
            <td align="center">✓</td>
            <td align="center">✓</td>
            <td align="center">Polyfill</td>
            <td align="center">Polyfill</td>
            <td align="center">✓</td>
            <td align="center">✓</td>
            </tr>
            <tr>
            <td><a href="https://caniuse.com/#search=shadow%20dom">Shadow DOM</a></td>
            <td align="center">✓</td>
            <td align="center">✓</td>
            <td align="center">✓</td>
            <td align="center">Polyfill</td>
            <td align="center">Polyfill</td>
            <td align="center">✓</td>
            <td align="center">✓</td>
            </tr>
            <tr>
            <td><a href="https://caniuse.com/#search=CSS%20variables">CSS Custom Properties</a></td>
            <td align="center">✓</td>
            <td align="center">✓</td>
            <td align="center">✓</td>
            <td align="center">✓</td>
            <td align="center">Polyfill</td>
            <td align="center">✓</td>
            <td align="center">✓</td>
            </tr>
            <tr>
            <td><a href="https://polymer-library.polymer-project.org/3.0/docs/browsers">Class decorators</a></td>
            <td align="center">Transpile</td>
            <td align="center">Transpile</td>
            <td align="center">Transpile</td>
            <td align="center">Transpile</td>
            <td align="center">Transpile</td>
            <td align="center">Transpile</td>
            <td align="center">Transpile</td>
            </tr>
            </tbody>
            </table>
            <p><cite>Sources: <a href="https://caniuse.com/#search=Custom%20elements">caniuse.com</a> as of 11.03.2019
              and <a href="https://polymer-library.polymer-project.org/3.0/docs/browsers">Polymer 3.0 Browser support overview</a> as of 05.2018.</cite></p>
          </dia-po>
          <dia-po display="tv02">
            <h1>Web Components Polyfills (v1 spec)</h1>
            <h2>Provide support for the Web Components specs</h2>
            <ul>
              <li><strong>Custom Elements v1</strong>: allows authors to define their own <em>custom tags</em>.</li>
              <li><strong>Shadow DOM v1</strong>: provides encapsulation by hiding DOM subtrees under <em>shadow roots</em>.</li>
            </ul>
            <h2>Browser support matrix of the polyfills</h2>
            <table>
            <thead>
            <tr>
            <th>Polyfill</th>
            <th align="center">Edge</th>
            <th align="center">IE11+</th>
            <th align="center">Chrome*</th>
            <th align="center">Firefox*</th>
            <th align="center">Safari 9+*</th>
            <th align="center">Chrome Android*</th>
            <th align="center">Mobile Safari*</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <td>Custom Elements</td>
            <td align="center">✓</td>
            <td align="center">✓</td>
            <td align="center">✓</td>
            <td align="center">✓</td>
            <td align="center">✓</td>
            <td align="center">✓</td>
            <td align="center">✓</td>
            </tr>
            <tr>
            <td>Shady CSS/DOM</td>
            <td align="center">✓</td>
            <td align="center">✓</td>
            <td align="center">✓</td>
            <td align="center">✓</td>
            <td align="center">✓</td>
            <td align="center">✓</td>
            <td align="center">✓</td>
            </tr>
            </tbody>
            </table>
            <p><cite>Source: <a href="https://github.com/webcomponents/webcomponentsjs#browser-support">github.com/webcomponents/webcomponentsjs#browser-support</a></cite></p>
          </dia-po>
          <dia-po display="sp01">
            <h2>Releases of the browsers</h2>
            <ul>
              <li>Chrome 66: released 04.2018</li>
              <li>Safari 11.1: released 03.2018</li>
              <li>Firefox 63: released 10.2018</li>
              <li>Edge 16: released 10.2017</li>
            </ul>
          </dia-po>
          <dia-po display="sp02">
            <h2>Latest versions of the browsers as of today</h2>
            <ul>
              <li>Chrome 72</li>
              <li>Safari 12</li>
              <li>Firefox 667</li>
              <li>Edge 18</li>
            </ul>
          </dia-po>
        </dia-slide>
        <dia-slide id="s06">
          <dia-po display="pj01"></dia-po>
          <dia-po display="tv01" default>
            <h1>Difficult bits</h1>
            <ul>
              <li>Mixing ES2015 Modules and UMD/AMD libraries</li>
              <li>npm install hairball</li>
              <li>Dataflow: many strategies, all valid, soon you'll start mixing strategies</li>
              <li>Building for production</li>
            </ul>
          </dia-po>
          <dia-po display="tv02">
            <h1>Learning is an investment</h1>
            <blockquote cite="https://malloc.fi/go-long-on-web-components">
              « If I had to choose a single front end technology in 2017 for a long
                lasting career in Web Development, I would choose Web Components. »
              <p><cite>— Jani Tarvainen, 18.05.2017, <a href="https://malloc.fi/go-long-on-web-components">Go Long on Web Components</a></cite></p>
            </blockquote>
            <p>We embraced Web Components two years ago and use it for
              everything we're developing since two years on the front-end.</p>
            <p>We helped one of our customers to build an UI Toolbox based on
              Polymer 2 and 1.5 years later, they have rebuilt 14 of their apps.</p>
            <p>Despite the rapid evolving environment and inevitable technical
              challenges (building libraries), it is a foundation that proved
              sound — the standards, librairies and tools and are actively
              developed, supported and wel documented, and there is a vibrant
              community. We will continue investing in learning using it.</p>
          </dia-po>
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
            <p>Then publish them for all of us:</p>
            <p class="big">
              Web Components Publish<br/>
              <a href="">webcomponents.org/publish</a></p>
          </dia-po>
          <dia-po display="tv01" default class="center">
            <h1>Thank you for your attention<br>🙏🏻</h1>
            <p class="big">Your feedback would be very appreciated!</p>
            <p>Please leave a comment on <a href="${meetupURL}">${meetupURLShortened}</a><br>
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
            * wrapping a Web Component with the slideshow (public/wcp-slideshow.js)
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
customElements.define( "wcp-slideshow", WebComponentsPrimerSlideshow);
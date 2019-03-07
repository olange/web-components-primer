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

        pre, code {
          font-family: var(--monospaced-text-font);
          font-size: var(--monospaced-text-size); }

        h1, pre, model-viewer {
          margin: calc(1.5 * var(--big-normal-text-size)) auto;
          padding: 0 }

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
    return {};
  }

  render() {
    return html`
      <dia-show slide="s01">
        <dia-slide id="s01">
          <dia-po display="pj01">
            <h1>WiFi</h1>
            <pre class="big" style="text-align: center">sdg-solution-space<br>123456</pre>
            <h1>Join the conference <span class="chip">LIVE</span></h1>
            <pre><a href="#">174.224.31.12</a></pre>
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
          <dia-po display="sp01"><h1>A Primer on Web Components</h1></dia-po>
          <dia-po display="sp02"><pre>‹model-viewer src="…"›</pre></dia-po>
        </dia-slide>
        <dia-slide id="s02">
          <dia-po display="pj01"></dia-po>
          <dia-po display="tv01"></dia-po>
          <dia-po display="tv02" default></dia-po>
          <dia-po display="sp01"></dia-po>
          <dia-po display="sp02"></dia-po>
        </dia-slide>
        <dia-slide id="s03">
          <dia-po display="pj01"></dia-po>
          <dia-po display="tv01" default></dia-po>
          <dia-po display="tv02"></dia-po>
          <dia-po display="sp01"></dia-po>
          <dia-po display="sp02"></dia-po>
        </dia-slide>
      </dia-show>
      <slot></slot>`;
  }

}

// Register the element with the browser
customElements.define( "web-components-primer", WebComponentsPrimerSlideshow);
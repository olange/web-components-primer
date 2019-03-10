import { html } from "lit-element";

export function diapoWhatAreWebComponents() {
  return html`
    <h1>What are Web Components?</h1>
    <h2>Web Standards</h2>
    <ol>
      <li><strong>Custom Elements</strong> — called <em>Web Components</em> by metonymy</li>
      <li><strong>Shadow DOM/CSS</strong></li>
      <li><strong>Templates</strong></li>
      <li><strong>Modules & Imports</strong></li>
    </ol>
    <h2>And by extension</h2>
    <ul>
      <li>Units of deployment — self-contained</li>
      <li><a href="https://webcomponents.org/">WebComponents.org</a> public registry</li>
      <li>Design guidelines & Good practices (A11Y)</li>
      <li>A vibrant and diverse open-source community</li>
    </ul>
    <p><cite><a href="https://www.webcomponents.org/specs">www.webcomponents.org/specs</a></cite></p>
  `;
}

export function diapoLiveCodeCustomElement( withStyle = false) {
  const myElementName = (withStyle) ? "my-styled-element" : "my-element",
    innerHTMLFragment = (withStyle)
    ? html`.innerHTML = "&lt;div>Web Components are 🚀🦄✨ native!&lt;/div>"
                + "&lt;style>div { color: green }&lt;/style>"`
    : html`.innerHTML = "&lt;div>Web Components are 🚀🦄✨ native!&lt;/div>"`;

  return html`
      <a href="about:blank" target="_blank">about:blank</a>
      <dia-code>customElements.define( "${myElementName}",
  class extends HTMLElement {
    connectedCallback() {
      this.attachShadow( { mode: "open" })
        ${innerHTMLFragment}
    }
  });</dia-code>`;
}

export function diapoLiveCodeCustomElementWithSlot() {
  return html`
      <p><a href="about:blank" target="_blank">about:blank</a></p>
      <dia-code>&lt;my-header>Slotted title&lt;/my-header></dia-code>
      <dia-code>customElements.define( "my-header",
  class extends HTMLElement {
    connectedCallback() {
      this.attachShadow({ mode:"open" })
        .innerHTML = "&lt;header>
          &lt;h1>&lt;slot>&lt;/slot>&lt;/h1>
          &lt;button>Menu&lt;/button>
        &lt;/header>"
    }
  });</dia-code>`;
}
import { LitElement, html, css } from "lit-element";
import { SummaryStyles } from "./styles.js";

export class WebComponentsPrimerSummary extends LitElement {

  static get styles() {
    return [ SummaryStyles ];
  }

  static get properties() {
    return {
      active: { type: String, attribute: "active-index", reflect: true }
    };
  }

  constructor() {
    super();
    this.active = undefined;
  }

  updated( changedProperties) {
    if( changedProperties.has( "active")) {
      const oldActive = changedProperties.get( "active");

      if( typeof oldActive !== "undefined") {
        const oldActiveElt = this.shadowRoot.getElementById( oldActive);
        if( oldActiveElt) oldActiveElt.removeAttribute( "active"); }

      const activeElt = this.shadowRoot.getElementById( this.active);
      if( activeElt) activeElt.setAttribute( "active", "");
    }
  }

  render() {
    return html`
      <div class="summary">
      <h1 id="F">Foundations of Web Components</h1>
        <ul>
          <li id="F01">What are they? Can I use them?</li>
          <li id="F02">Custom Elements</li>
          <li id="F03">Shadow DOM</li>
          <li id="F04">Templates & Modules</li>
        </ul>

        <h1 id="U">Creating and using Web Components</h1>
        <ul>
          <li id="U01">How to start?</li>
          <li id="U02">Lit-Element Templates</li>
          <li id="U03">Lit-Element Data bindings</li>
        </ul>

        <h1 id="D">Dataflows of Web Components</h1>
        <ul>
          <li id="D01">Vanilla data bindings: « data-in via attributes, data-out via events »</li>
          <li id="D02">Fetching data</li>
        </ul>

        <h1 id="E">The Ecosystem of Web Components</h1>
        <ul>
          <li id="E01">Understand the Polymer project</li>
          <li id="E02">Navigate WebComponents.org and discover its main collections</li>
          <li id="E03">Understand Material Design and A11Y</li>
        </ul>
        <h3 id="C">Conclusion</h3>
      </div>
    `;
  }
}

// Register the element with the browser
customElements.define( "wcp-summary", WebComponentsPrimerSummary);
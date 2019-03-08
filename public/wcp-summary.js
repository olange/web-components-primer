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
        <h1 id="F">Foundation of Web Components</h1>
        <ul>
          <li id="F01">What they are? Custom Elements, Shadow DOM, Templates, Modules</li>
          <li id="F02">How to create, use and publish them</li>
          <li id="F03">Web Components Best practices</li>
        </ul>

        <h1 id="D">Dataflows of Web Components</h1>
        <ul>
          <li id="D01">Retrieving and storing data</li>
          <li id="D02">Vanilla data bindings: « data in via attributes, data out via events »</li>
        </ul>

        <h1 id="E">The Ecosystem of Web Components</h1>
        <ul>
          <li id="E01">Understand the Polymer project</li>
          <li id="E02">Navigate WebComponents.org and discover its main collections</li>
          <li id="E03">Understand Material Design and A11Y</li>
          <li id="E04">Lit-HTML and Lit-Element</li>
        </ul>
      </div>
    `;
  }
}

// Register the element with the browser
customElements.define( "wcp-summary", WebComponentsPrimerSummary);
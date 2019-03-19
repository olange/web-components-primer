import { LitElement, html } from "lit-element";
import { SummaryStyles } from "./wcp-summary.css.js";

export class WCPSummary extends LitElement {

  static get styles() {
    return [ SummaryStyles ]; // CSS styles linked to this element
  }

  // TODO: define `active` property, bound and reflected
  // to the `active-index` attribute

  updated( changedProperties) {
    // TODO: Remove `active` attribute on element that was previously active (if it still exists)
    // TODO: Set `active` attribute on element newly identified as being the active one
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
        <h3 id="C">As a conclusion</h3>
      </div>
    `;
  }
}

// Register the element with the browser
customElements.define( "wcp-summary", WCPSummary);
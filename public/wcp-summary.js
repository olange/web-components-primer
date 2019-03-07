import { LitElement, html, css } from "lit-element";

export class WebComponentsPrimerSummary extends LitElement {
  static get properties() {
    return {
      index: { type: String }
    };
  }

  constructor() {
    super();
    this.index = undefined;
  }

  render() {
    return html`
      <h1>Foundation of Web Components</h1>
      <ul>
        <li>What they are? Custom Elements, Shadow DOM, Templates, Modules</li>
        <li>How to create, use and publish them</li>
        <li>Web Components Best practices</li>
      </ul>

      <h1>Dataflows of Web Components</h1>
      <ul>
        <li>Retrieving and storing data</li>
        <li>Vanilla data bindings: « data in via attributes, data out via events »</li>
      </ul>

      <h1>The Ecosystem of Web Components</h1>
      <ul>
        <li>Understand the Polymer project</li>
        <li>Navigate WebComponents.org and discover its main collections</li>
        <li>Understand Material Design and A11Y</li>
        <li>Lit-HTML and Lit-Element</li>
      </ul>
    `;
  }
}

// Register the element with the browser
customElements.define( "wcp-summary", WebComponentsPrimerSummary);
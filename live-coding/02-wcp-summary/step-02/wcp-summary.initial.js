import { LitElement, html } from "lit-element";
import { SummaryStyles } from "./wcp-summary.css.js";
 
export class WCPSummary extends LitElement {

    // TODO: static get styles()
  // TODO: render()

  render() {
    return html`
      <h3>‹wcp-summary› element</h3>
      <p>Hello, from <strong>shadow DOM</strong>!</p>
    `;
  }

}

// Register the element with the browser
customElements.define( "wcp-summary", WCPSummary);
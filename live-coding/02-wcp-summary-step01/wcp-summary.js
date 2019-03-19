import { LitElement, html } from "lit-element";
 
export class WCPSummary extends LitElement {

  render() {
    return html`
      <h3>‹wcp-summary› element</h3>
      <p>Hello, from <strong>shadow DOM</strong>!</p>
    `;
  }

}

// Register the element with the browser
customElements.define( "wcp-summary", WCPSummary);
import { LitElement, html } from "lit-element";
import "./wcp-summary";
import "./wcp-select";
 
export class WCPSummaryReader extends LitElement {

  static get properties() {
    return {
      src: { type: URL },
      data: { type: Object, attribute: false }
    };
  }

  render() {
    return html`
      <wcp-select .items="${this.data}" @selected="${this.onSelected}"></wcp-select>
      <wcp-summary .items="${this.data}"></wcp-summary>
    `;
  }

  constructor() {
    super();
    this.src = undefined;
    this.data = undefined;
    this._summaryElement = undefined;
  }

  firstUpdated() {
    this._summaryElement = this.shadowRoot.querySelector( "wcp-summary");
  }

  onSelected( event) {
    console.log( event);
    this._summaryElement.active = event.detail.selected;
  }

  async updated( changedProperties) {
    if( changedProperties.has( "src")) {
      const response = await fetch( this.src);
      this.data = await response.json();
      this.requestUpdate();
    }
  }

}

// Register the element with the browser
customElements.define( "wcp-summary-reader", WCPSummaryReader);
import { LitElement, html } from "lit-element";
import { SummaryStyles } from "./wcp-summary.css.js";
 
export class WCPSummary extends LitElement {

  static get styles() {
    return [ SummaryStyles ]; // CSS styles linked to this element
  }

  static get properties() {
    return {
      active: { type: String, attribute: "active-index", reflect: true },
      items: { type: Object }
    };
  }

  renderItems( items) {
    return( typeof items === "undefined")
      ? html`<p>Loading…</p>`
      : items.map(([ firstItem, ...items]) =>
          html`
            <h3 id="${firstItem.id}">${firstItem.text}</h3>
            <ul>
              ${items.map(( item) =>
                html`<li id="${item.id}">${item.text}</li>`)}
            </ul>`);
  }

  render() {
    return html`
      <div class="summary">
        ${this.renderItems( this.items)}
      </div>`;
  }

  constructor() {
    super();
    this.active = undefined;
    this.items = undefined;
  }

  updated( changedProperties) {
    if( changedProperties.has( "active")) {
      const oldActive = changedProperties.get( "active");

      // Remove `active` attribute on element that was previously active (if it still exists)
      if( typeof oldActive !== "undefined") {
        const oldActiveElt = this.shadowRoot.getElementById( oldActive);
        if( oldActiveElt) oldActiveElt.removeAttribute( "active"); }

      // Set `active` attribute on element newly identified as being the active one
      const activeElt = this.shadowRoot.getElementById( this.active);
      if( activeElt) activeElt.setAttribute( "active", "");
    }
  }
}

// Register the element with the browser
customElements.define( "wcp-summary", WCPSummary);
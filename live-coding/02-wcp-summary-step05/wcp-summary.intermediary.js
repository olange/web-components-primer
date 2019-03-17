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

  render() {
    return html`
      <div class="summary">
        ${this.items.map(([ firstItem, ...items]) =>
          html`
            <h3 id="${firstItem.id}">${firstItem.text}</h3>
            <ul>${items.map(( item) =>
              html`<li id="${item.id}">${item.text}</li>`)}</ul>
          `)}
      </div>
    `;
  }

  constructor() {
    super();
    this.active = undefined;
    this.items = [
      [ { id: "F",   text: "FOUNDATIONS OF WEB COMPONENTS" },
        { id: "F01", text: "What are they? Can I use them?" },
        { id: "F02", text: "Custom Elements" },
        { id: "F03", text: "Shadow DOM" },
        { id: "F04", text: "Templates &amp; Modules" } ],
      [ { id: "U",   text: "CREATING AND USING WEB COMPONENTS" },
        { id: "U01", text: "How to start?" },
        { id: "U02", text: "Lit-Element Templates" },
        { id: "U03", text: "Lit-Element Data bindings" } ],
      [ { id: "D",   text: "DATAFLOWS OF WEB COMPONENTS" },
        { id: "D01", text: "Vanilla data bindings: « data-in via attributes, data-out via events »" },
        { id: "D02", text: "Retrieving and storing data" } ],
      [ { id: "E",   text: "THE ECOSYSTEM OF WEB COMPONENTS" },
        { id: "E01", text: "Understanding the Polymer project" },
        { id: "E02", text: "Navigate WebComponents.org and discover its main collections" },
        { id: "E03", text: "Understand Material Design and A11Y" } ],
      [ { id: "C",   text: "AS A CONCLUSION" } ]
    ];
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
import { LitElement, html } from "lit-element";

export class WCPSummarySelect extends LitElement {

  static get properties() {
    return {
      items: { type: Object }  // nested array of { id: "F", text: "FOUNDATIONS …" }
    }
  }

  render() {
    return html`
      <select @change="${this.onChange}">
        ${this.items.map(([ firstItem, ...items]) =>
          html`<option value="${firstItem.id}">${firstItem.text}</option>
            ${items.map(( item) =>
              html`<option value="${item.id}">– ${item.text}</option>`)}
          `)}
      </select>
    `;
  }

  constructor() {
    super();
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
        { id: "D02", text: "Fetching data" } ],
      [ { id: "E",   text: "THE ECOSYSTEM OF WEB COMPONENTS" },
        { id: "E01", text: "Understanding the Polymer project" },
        { id: "E02", text: "Navigate WebComponents.org and discover its main collections" },
        { id: "E03", text: "Understand Material Design and A11Y" } ],
      [ { id: "C",   text: "AS A CONCLUSION" } ]
    ];
  }

  onChange( event) {
    const selectElement = event.target,
          selectedIndex = selectElement.selectedIndex,
          selectedValue = selectElement.options[ selectedIndex].value;
    this.dispatchEvent(
      new CustomEvent( "selected", { "detail": { selected: selectedValue }}));
  }

}

customElements.define( "wcp-select", WCPSummarySelect);
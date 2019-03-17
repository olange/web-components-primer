import { LitElement, html } from "lit-element";

export class WCPSummarySelect extends LitElement {

  static get properties() {
    return {
      items: { type: Object }  // nested array of { id: "F", text: "FOUNDATIONS …" }
    }
  }

  renderOptions( items) {
    return( typeof items === "undefined")
      ? html`<option>Loading…</option>`
      : this.items.map(([ firstItem, ...items]) => html`
          <option value="${firstItem.id}">${firstItem.text}</option>
          ${items.map(( item) =>
            html`<option value="${item.id}">– ${item.text}</option>`)}
        `);
  }

  render() {
    return html`
      <select @change="${this.onChange}">
        ${this.renderOptions( this.items)}
      </select>`;
  }

  constructor() {
    super();
    this.items = undefined;
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
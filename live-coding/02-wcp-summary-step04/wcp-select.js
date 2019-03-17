import { LitElement, html } from "lit-element";

export class WCPSummarySelect extends LitElement {
  render() {
    return html`
      <select @change="${this.onSelected}">
        <option value="F"  >FOUNDATIONS OF WEB COMPONENTS</option>
        <option value="F01">– What are they? Can I use them?</option>
        <option value="F02">– Custom Elements</option>
        <option value="F03">– Shadow DOM</option>
        <option value="F04">– Templates &amp; Modules</option>
        <option value="U"  >CREATING AND USING WEB COMPONENTS</option>
        <option value="U01">– How to start?</option>
        <option value="U02">– Lit-Element Templates</option>
        <option value="U03">– Lit-Element Data bindings</option>
        <option value="D"  >DATAFLOWS OF WEB COMPONENTS</option>
        <option value="D01">– Vanilla data bindings: « data-in via attributes, data-out via events »</option>
        <option value="D02">– Retrieving and storing data</option>
        <option value="E"  >THE ECOSYSTEM OF WEB COMPONENTS</option>
        <option value="E01">– Understanding the Polymer project</option>
        <option value="E02">– Navigate WebComponents.org and discover its main collections</option>
        <option value="E03">– Understand Material Design and A11Y</option>
        <option value="C"  >AS A CONCLUSION</option>
      </select>
    `;
  }

  constructor() {
    super();
  }

  onSelected( event) {
    const selectElement = event.target,
          selectedIndex = selectElement.selectedIndex,
          selectedValue = selectElement.options[ selectedIndex].value;
    this.dispatchEvent(
      new CustomEvent( "selected",
                       { "detail": { selected: selectedValue }})
    );
  }
}

customElements.define( "wcp-select", WCPSummarySelect);
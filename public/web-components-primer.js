import { LitElement, html } from "lit-element";
import "@petitatelier/dia-show";
import "@petitatelier/dia-code";
import "@petitatelier/dia-livecode";

export class WebComponentsPrimerSlideshow extends LitElement {

  static get properties() {
    return {};
  }

  render() {
    return html`
      <dia-show slide="s01" display="tv02">
        <dia-slide id="s01">
          <dia-po display="proj01"></dia-po>
          <dia-po display="tv01"></dia-po>
          <dia-po display="tv02" default></dia-po>
          <dia-po display="pres01"></dia-po>
          <dia-po display="pres02"></dia-po>
        </dia-slide>
        <dia-slide id="s02">
          <dia-po display="proj01"></dia-po>
          <dia-po display="tv01"></dia-po>
          <dia-po display="tv02" default></dia-po>
          <dia-po display="pres01"></dia-po>
          <dia-po display="pres02"></dia-po>
        </dia-slide>
        <dia-slide id="s03">
          <dia-po display="proj01"></dia-po>
          <dia-po display="tv01" default></dia-po>
          <dia-po display="tv02"></dia-po>
          <dia-po display="pres01"></dia-po>
          <dia-po display="pres02"></dia-po>
        </dia-slide>
      </dia-show>`;
  }

}

// Register the element with the browser
customElements.define( "web-components-primer", WebComponentsPrimerSlideshow);
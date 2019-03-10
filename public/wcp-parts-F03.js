import { html } from "lit-element";

export function diapoShadowDOM() {
  return html`
    <h1>Shadow DOM · a bit more</h1>
    <h2>Composition & Slots</h2>
    <ul>
      <li>By default, if an element has shadow DOM, the shadow tree
        is rendered instead of the element's children</li>
      <li>Use the <code>‹slot›</code> tag to add a placeholder in the
        Shadow DOM, to allow the children to render</li>
      <li><code>‹my-header›</code> renders as if the <code>‹slot›</code>
        element was replaced by its child <code>"Slotted title"</code>
        text node</li>
    </ul>
    <h2>Lifecycle</h2>
    <ul>
      <li><code>constructor()</code> — invoked each time a new instance of the custom element is created</li>
      <li><code>connectedCallback()</code> — invoked each time the custom element is appended into a document-connected element</li>
      <li><code>disconnectedCallback()</code> — invoked each time the custom element is disconnected from the document's DOM</li>
      <li><code>adoptedCallback()</code> — invoked each time the custom element is moved to a new document</li>
      <li><code>attributeChanged()</code> – invoked each time one of the custom element's attributes is added, removed, or changed</li>
    </ul>
  `;
}

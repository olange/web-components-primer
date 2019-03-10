import { html } from "lit-element";

export function diapoCustomElements() {
  return html`
    <h1>Custom Elements</h1>
    <ul>
      <li><strong>Autonomous custom elements</strong> are new HTML tags</li>
      <li><strong>Customized built-ins</strong> extend existing HTML elements</li>
      <li>To define and register a custom element, use<br>
        <code>customElements.define( "my-element", MyElement)</code></li>
    </ul>
    <h1>Shadow DOM</h1>
    <ul>
      <li>Use the <code>attachShadow()</code> method to create and
        attach a Shadow DOM</li>
      <li>Style information inside them cannot apply to outside
        elements, and vice-versa.</li>
    </ul>
  `;
}

export function diapoCustomElementsAside() {
  return html`
    <h1>Custom Elements</h1>
    <aside>
      <ul>
        <li><strong>Autonomous custom elements</strong> are new HTML tags —
          defined entirely by the author. They have none of the semantics of
          existing HTML elements, so all behaviors need to be defined by the author.</li>
        <li><strong>Customized built-ins</strong> extend existing HTML element —
          They inherit semantics from the elements they extend. The specification
          for customized built-ins is still a work in progress, and at present is
          only supported by Chrome.</li>
        <li>To define and register a custom element, use
          <code>customElements.define( "my-element", MyElementClass)</code></li>
      </ul>
    </aside>
    <h1>Shadow DOM</h1>
    <aside>
      <ul>
        <li>Use the <code>attachShadow()</code> method to create and
          attach a Shadow DOM</li>
        <li><strong>Styles inside</strong> a shadow tree are <em>scoped
          to the shadow tree</em>, and don't affect elements outside
          the shadow tree.</li>
        <li><strong>Styles outside</strong> the shadow tree also don't
          match selectors inside the shadow tree. However, <em>inheritable
          style properties</em> like color still inherit down from host
          to shadow tree.</li>
        <li>To style elements with a shadow root, you can use custom
          CSS properties, if the element’s author has defined them.</li>
      </ul>
    </aside>
  `;
}

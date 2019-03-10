import { html } from "lit-element";

export function diapoModulesAndImports() {
  return html`
    <h1>ES Modules & Imports</h1>
    <ul>
      <li>The <a href="https://html.spec.whatwg.org/multipage/webappapis.html#integration-with-the-javascript-module-system">ES Module specification</a>
        defines the inclusion and reuse of JS documents in other JS documents</li>
      <li>The native <code>customElements.define( "my-element", MyElement)</code>
        expects <code>MyElement</code> to be an <strong>ES6 class</strong></li>
      <li>The entire contents of JavaScript modules are automatically in
        <strong><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode">strict mode</a></strong></li>
      <li>Import with the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import">ES6 module import</a> syntax:<br/>
        <code>import { WebComponentsPrimerSummary } from "wcp-summary";</code><br/>
        <code>import * as WCPSummary from "wcp-summary";</code></li>
    </ul>
    <h1>HTML Template</h1>
    <ul>
      <li>The <code>‹template›</code> element is used to declare fragments
      of HTML that can be cloned and inserted in the document by script.</li>
      <li>Will not render until it is activated</li>
      <li>Has no effect on the page, until activated – scripts won’t run, images won’t load, audio won’t play</li>
      <li>Will not appear in the DOM</li>
    </ul>
  `;
}

export function diapoModuleImportExample() {
  return html`
    <h3>index.html</h3>
    <dia-code>
&lt;script type="module" src="wcp-summary.js">&lt;/script>
&lt;wcp-summary active-index="F01">&lt;/wcp-summary>
    </dia-code>
    <h3>wcp-summary.js</h3>
    <dia-code>
export class WCPSummary extends HTMLElement { … };
customElements.define( "wcp-summary", WCPSummary);
    </dia-code>
  `;
}

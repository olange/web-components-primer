import { html } from "lit-element";

export function diapoDataBindingsMantra() {
  return html`
    <h1>Dataflow — Vanilla data bindings</h1>
    <blockquote class="big" cite="https://robdodson.me/interoperable-custom-elements/">
      <p>« Keep this mantra in mind: ‹&nbsp;Data-in via attributes<br/>
        and properties, data-out via events&nbsp;› »</p>
      <p><cite>— Rob Dodson, 30.11.2016, <a href="https://robdodson.me/interoperable-custom-elements/"
      >Custom Elements That Work Anywhere</a></cite></p>
    </blockquote>
  `;
}

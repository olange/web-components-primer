import { html } from "lit-element";

export function diapoWebComponentPromises() {
  return html`
    <h1>The Promises of Web Components</h1>
    <ul>
      <li><strong>Patchwork</strong></li>
      <li><strong>Composability</strong></li>
      <li><strong>Reuse</strong></li>
      <li><strong>Neutrality</strong> — built-in your browser</li>
    </ul>
  `;
}

export function diapoColorOfTimePatchwork() {
  return html`
    <h1>Color of Time</h1>
    <img src="images/color-of-time(screenshot).png"
      alt="Color of Time · Patchwork of colors" />
  `;
}



export function diapoWebComponentPromisesAsideOlivier() {
  return html`
    <ul>
    <li><strong>Patchwork</strong> – beware hairball and AMD/UMD libraries interop though</li>
    <li><strong>Composability</strong> – you can combine a set of components, as well as place content in their slots</li>
    <li><strong>Reuse</strong> – you can publish a set of components on NPM and reuse them as you wish</li>
    <li><strong>Neutrality</strong> – not a framework, nor a library! built-in your browser</li>
    </ul>
  `;
}

export function diapoXY() {
  return html`
  `;
}

import { html } from "lit-element";

export function diapoPolymerProject() {
  return html`
    <h1>Understand the Polymer project</h1>
    <h2>Polymer 2</h2>
    <ul>
      <li>Two-way data bindings</li>
      <li>HTML Templates and HTML Imports</li>
      <li>Bower for packaging</li>
      <li>Polymer CLI</li>
    </ul>
    <h2>Polymer 3</h2>
    <ul>
      <li>Two-way data bindings</li>
      <li>ES6 Module Imports</li>
      <li>NPM for packaging</li>
      <li>Polymer CLI</li>
    </ul>
    <h1>Future directions</h1>
    <ul>
      <li><a href="https://lit-element.polymer-project.org/">Lit-Element</a></li>
      <li><a href="https://open-wc.org/">open-wc.org</a></li>
    </ul>
  `;
}

export function diapoPolymerProjectDetail() {
  return html`
    <img width="1440" height="810"
         alt="Polymer · What is in the box?"
         src="images/polymer-what-in-the-box.png" />
  `;
}

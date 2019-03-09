import { html } from "lit-element";

import "resize-observer-polyfill";
import "intersection-observer";
import "@google/model-viewer";

export function diapoWiFi( wifiSSID, wifiPWD, primerURL, primerURLShortened) {
  return html`
    <h1>WiFi</h1>
    <pre class="big">${wifiSSID}<br>${wifiPWD}</pre>
    <h1>Join the conference <span class="chip">LIVE</span></h1>
    <pre class="big"><a href="${primerURL}">${primerURLShortened}</a></pre>
  `;
}

export function diapoWCPTitle() {
  return html`
    <h1>A Primer on Web Components<br>
      #UseThePlatform</h1>
    <img height="128" alt="Polymer logo"
      src="images/manifest/icon-192x192.png">
    <p>by Yves & Olivier Lange<br>
      Le Petit Atelier de Génie logiciel</p>
    <p>Geneva Web Meetup · 11.03.2019</p>
  `;
}

export function diapoWCPTitleAsideOlivier() {
  return html`
    <h1>A Primer on Web Components<br>
      #UseThePlatform</h1>
    <aside>
    <ul>
      <li>Welcome! Thank you for coming and joining us in this talk.</li>
    </ul>
    <ul>
      <li>My name is Olivier…</li>
      <li>We are running a software consultancy,
        le PAGL, and craft software for our customers.</li>
    </ul>
    <ul>
      <li>In about 45 min. we are going to present you Web Components,
        a set of standards of the web, that have slowly matured over
        the course of last 6 years and, we believe, are now taking on.</li>
      <li>Everything you see around you is made of webcomponents and
          markup text. We crafted the slideshow system using web components,
          and the content using HTML and CSS.</li>
    </ul>
    </aside>
  `;
}

export function diapoWCPTitleAsideYves() {
  return html`
    <dia-code>‹model-viewer
  src="images/models/Astronaut.glb"
  alt="A 3D model of an astronaut"
  background-color="lightskyblue"
  controls auto-rotate›
‹/model-viewer›</dia-code>
    <aside>
    <ul>
      <li>… and my name is Yves.</li>
      <li>We're both open-source developers,
        and web fundamentals enthusiasts.</li>
    </ul>
    <ul>
      <li>To follow the slideshow on your computer/tablet</li>
      <li>connect to the WiFi (optionaly)</li>
      <li>and navigate to the URL written on the projector</li>
    </ul>
    </aside>
  `;
}

export function diapoModelViewer() {
  return html`
    <dia-code>‹model-viewer
  src="images/models/Astronaut.glb"
  alt="A 3D model of an astronaut"
  background-color="lightskyblue"
  controls auto-rotate›
‹/model-viewer›</dia-code>
    <model-viewer
      src="images/models/Astronaut.glb"
      alt="A 3D model of an astronaut"
      background-color="lightskyblue"
      controls auto-rotate>
    </model-viewer>
  `;
}
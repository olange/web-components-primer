import { html } from "lit-element";

export function diapo1BDevices() {
  return html`
    <blockquote cite="https://youtu.be/cuoZenpQveQ?t=960" style="padding: 4em 4em">
      <h2>« Web Components run natively on 1B+ devices »</h2>
      <p><cite>— Wendy Ginsberg, announcing at Google I/O, 17.05.2017</cite></p>
    </blockquote>
    <p class="blockquote"><cite><a href="https://youtu.be/cuoZenpQveQ?t=960">Future, Faster: Unlock the Power of Web Components with Polymer (Google I/O '17)</a></cite> at min. 16:00 of the talk</p>
  `;
}

export function diapoCanIUseWebComponents() {
  return html`
    <h1>Can I Use Web Components ?</h1>
    <table>
    <thead>
    <tr>
    <th>Native browser support</th>
    <th align="center">Chrome 66+</th>
    <th align="center">Safari 11.1+</th>
    <th align="center">Firefox 63+</th>
    <th align="center">Edge 16+</th>
    <th align="center">IE11</th>
    <th align="center">Chrome Android</th>
    <th align="center">Mobile Safari</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td><a href="https://caniuse.com/#search=ES6%20classes">ES6 Classes</a></td>
    <td align="center">✓</td>
    <td align="center">✓</td>
    <td align="center">✓</td>
    <td align="center">✓</td>
    <td align="center">✓ Transpile</td>
    <td align="center">✓</td>
    <td align="center">✓</td>
    </tr>
    <tr>
    <td><a href="https://polymer-library.polymer-project.org/3.0/docs/browsers">ES6 Modules</a></td>
    <td align="center">✓</td>
    <td align="center">✓</td>
    <td align="center">✓</td>
    <td align="center">✓</td>
    <td align="center">✓ Transpile</td>
    <td align="center">✓</td>
    <td align="center">✓</td>
    </tr>
    <tr>
    <td><a href="https://caniuse.com/#search=Custom%20elements">Custom Elements</a></td>
    <td align="center">✓</td>
    <td align="center">✓</td>
    <td align="center">✓</td>
    <td align="center">✓ Polyfill</td>
    <td align="center">✓ Polyfill</td>
    <td align="center">✓</td>
    <td align="center">✓</td>
    </tr>
    <tr>
    <td><a href="https://caniuse.com/#search=shadow%20dom">Shadow DOM</a></td>
    <td align="center">✓</td>
    <td align="center">✓</td>
    <td align="center">✓</td>
    <td align="center">✓ Polyfill</td>
    <td align="center">✓ Polyfill</td>
    <td align="center">✓</td>
    <td align="center">✓</td>
    </tr>
    <tr>
    <td><a href="https://caniuse.com/#search=CSS%20variables">CSS Custom Properties</a></td>
    <td align="center">✓</td>
    <td align="center">✓</td>
    <td align="center">✓</td>
    <td align="center">✓</td>
    <td align="center">✓ Polyfill</td>
    <td align="center">✓</td>
    <td align="center">✓</td>
    </tr>
    <tr>
    <td><a href="https://polymer-library.polymer-project.org/3.0/docs/browsers">Class decorators</a></td>
    <td align="center">✓ Transpile</td>
    <td align="center">✓ Transpile</td>
    <td align="center">✓ Transpile</td>
    <td align="center">✓ Transpile</td>
    <td align="center">✓ Transpile</td>
    <td align="center">✓ Transpile</td>
    <td align="center">✓ Transpile</td>
    </tr>
    </tbody>
    </table>
    <p><cite>Sources: <a href="https://caniuse.com/#search=Custom%20elements">caniuse.com</a> as of 11.03.2019
      and <a href="https://polymer-library.polymer-project.org/3.0/docs/browsers">Polymer 3.0 Browser support overview</a> as of 05.2018.</cite></p>
  `;
}

export function diapoWebComponentsPolyfill() {
  return html`
    <h1>Web Components Polyfills (v1 spec)</h1>
    <h2>Provide support for the Web Components specs</h2>
    <ul>
      <li><strong>Custom Elements v1</strong>: allows authors to define their own <em>custom tags</em>.</li>
      <li><strong>Shadow DOM v1</strong>: provides encapsulation by hiding DOM subtrees under <em>shadow roots</em>.</li>
    </ul>
    <h2>Browser support matrix of the polyfills</h2>
    <table>
    <thead>
    <tr>
    <th>Polyfill</th>
    <th align="center">Edge</th>
    <th align="center">IE11+</th>
    <th align="center">Chrome*</th>
    <th align="center">Firefox*</th>
    <th align="center">Safari 9+*</th>
    <th align="center">Chrome Android*</th>
    <th align="center">Mobile Safari*</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>Custom Elements</td>
    <td align="center">✓</td>
    <td align="center">✓</td>
    <td align="center">✓</td>
    <td align="center">✓</td>
    <td align="center">✓</td>
    <td align="center">✓</td>
    <td align="center">✓</td>
    </tr>
    <tr>
    <td>Shady CSS/DOM</td>
    <td align="center">✓</td>
    <td align="center">✓</td>
    <td align="center">✓</td>
    <td align="center">✓</td>
    <td align="center">✓</td>
    <td align="center">✓</td>
    <td align="center">✓</td>
    </tr>
    </tbody>
    </table>
    <p><cite>Source: <a href="https://github.com/webcomponents/webcomponentsjs#browser-support">github.com/webcomponents/webcomponentsjs#browser-support</a></cite></p>
  `;
}

export function diapoBrowserReleases() {
  return html`
    <h2>Releases of the browsers</h2>
    <ul>
      <li>Chrome 66: released 04.2018</li>
      <li>Safari 11.1: released 03.2018</li>
      <li>Firefox 63: released 10.2018</li>
      <li>Edge 16: released 10.2017</li>
    </ul>
  `;
}

export function diapoBrowserLatestVersions() {
  return html`
    <h2>Latest versions of the browsers as of today</h2>
    <ul>
      <li>Chrome 72</li>
      <li>Safari 12</li>
      <li>Firefox 65</li>
      <li>Edge 18</li>
    </ul>
  `;
}

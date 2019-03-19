import { html } from "lit-element";

export function diapoDifficultBits() {
  return html`
    <h1>Difficult bits</h1>
    <ul>
      <li>ES6 Modules and UMD/AMD libraries interop</li>
      <li><code>npm install hairball</code></li>
      <li>Dataflow: many strategies, all valid, soon you'll start mixing strategies</li>
      <li>Mastering the timeline of Web Components lifecycle</li>
      <li>Building for production</li>
    </ul>
  `;
}

export function diapoLearningInvestment() {
  return html`
    <h1>Learning is an investment</h1>
    <blockquote cite="https://malloc.fi/go-long-on-web-components">
      <p>« If I had to choose a single front end technology in 2017 for a long<br/>
        lasting career in Web Development, I would choose Web Components. »</p>
      <p><cite>— Jani Tarvainen, 18.05.2017, <a href="https://malloc.fi/go-long-on-web-components"
        >Go Long on Web Components</a></cite></p>
    </blockquote>
    <p>We embraced Web Components two years ago and use it for<br/>
      everything we're developing since two years on the front-end.</p>
    <p>We helped one of our customers to build an UI Toolbox based on<br/>
      Polymer 2 and 1.5 years later, they have rebuilt 14 of their apps.</p>
    <p>Despite the rapid evolving environment and inevitable technical<br/>
      challenges, it is a foundation that proved sound — the standards,<br/>
      libraries and tools and are actively developed, supported and<br/>
      well documented, and there is a vibrant community.</p>
    <p>We will definitively continue using Web Components and invest<br/>
      in learning using them.</p>
  `;
}

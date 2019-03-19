import { html } from "lit-element";

export function diapoSlideshowShare( primerURL, primerURLShortened, examplesURL, examplesURLShortened, starterURL, starterURLShortened) {
  return html`
    <h2>Slides of the presentation</h2>
    <p class="big">
      A Primer on Web Components<br/>
      <a href="${primerURL}">${primerURLShortened}</a></p>
    <p class="big">
      Live-coding examples<br/>
      <a href="${examplesURL}">${examplesURLShortened}</a></p>
    <h2>Share your components</h2>
    <p>To roll your own collection of Web Components and publish them to NPM:</p>
    <p class="big">
      Web Components Starter<br/>
      <a href="${starterURL}">${starterURLShortened}</a></p>
    <p>Then publish your elements for all of us to use:</p>
    <p class="big">
      Web Components › Publish element<br/>
      <a href="https://www.webcomponents.org/publish">webcomponents.org/publish</a></p>
  `;
}

export function diapoThankYouFeedback( meetupURL, meetupURLShortened, slackURL) {
  return html`
    <h1 class="center">Thank you for your attention<br>🙏🏻</h1>
    <p class="big">Your feedback is appreciated</p>
    <p>Please leave a comment on <a href="${meetupURL}">${meetupURLShortened}</a><br>
      or ping us on Twitter <a href="https://twitter.com/olange">@olange</a>
      and <a href="https://twitter.com/yveslangech">@yveslangech</a><br>
      or on LinkedIn <a href="https://www.linkedin.com/in/olange">@olange</a>
      and <a href="https://www.linkedin.com/in/yveslange">@yveslange</a>.</p>
    <p>Or join our <a href="${slackURL}">#webcomponents-primer</a>
      channel on Slack.</p>
  `;
}

export function diapoPetitAtelier() {
  return html`
    <a href="https://petit-atelier.ch/">
      <img height="200" width="200"
        src="images/petit-atelier-logo.png"
        alt="Le Petit Atelier de Génie logiciel sàrl">
    </a>
  `;
}

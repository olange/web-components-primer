import { LitElement, html, css } from "lit-element";

import "@petitatelier/dia-show";
import "@petitatelier/dia-code";
import "@petitatelier/dia-livecode";

import { SlideshowStyles } from "./styles.js";
import { diapoWCPTitle, diapoWCPTitleAsideOlivier, diapoWCPTitleAsideYves, diapoWiFi, diapoModelViewer } from "./wcp-parts01.js";
import { diapoWhatAreWebComponents, diapoLiveCodeCustomElement, diapoLiveCodeCustomElementWithSlot } from "./wcp-parts02.js";
// import { } from "./wcp-parts03.js";
// import { } from "./wcp-parts04.js";
import { diapo1BDevices, diapoCanIUseWebComponents, diapoWebComponentsPolyfill, diapoBrowserReleases, diapoBrowserLatestVersions } from "./wcp-parts05.js";
// import { } from "./wcp-parts06.js";
import { diapoWebComponentPromises, diapoColorOfTimePatchwork, diapoWebComponentPromisesAsideOlivier } from "./wcp-parts-concl01.js";
import { diapoDifficultBits, diapoLearningInvestment } from "./wcp-parts-concl02.js";
import { diapoSlideshowShare, diapoThankYouFeedback, diapoPetitAtelier } from "./wcp-parts-thankyou.js";
import { diapoGōngfuIO, diapoPlayWithWebComponents, diapoPlayWithDemonstrates, diapoPlayWithWebComponentsAside } from "./wcp-parts-play.js";
import "./wcp-summary.js";

export class WebComponentsPrimerSlideshow extends LitElement {

  static get styles() {
    return [ SlideshowStyles ];
  }

  static get properties() {
    return {
      wifi: { type: Array, attribute: "wifi" },
      primerURL: { type: String, attribute: "primer-url" },
      starterURL: { type: String, attribute: "starter-url" },
      meetupURL: { type: String, attribute: "meetup-url" },
      slackURL: { type: String, attribute: "slack-url" },
      refresh: { type: Number }
    };
  }

  constructor() {
    super();
    // Refresh timeout of the live-coding previews (in milliseconds)
    this.refresh = 60000; // 60 sec; change to 7.5 for the talk

    // Wifi SSID & pwd
    this.wifi = [ "wifi-network", "123456" ];

    // URL of this slideshow « A Primer to Web Components »
    this.primerURL = "https://ptat.ch/webcomponents-primer";
    // URL of the « Web Components Starter » kit on GitHub
    this.starterURL = "https://ptat.ch/webcomponents-starter";
    // URL of the Geneva Web Meetup of 11.03.2019 (where to leave feedback)
    this.meetupURL = "https://www.meetup.com/fr-FR/GenevaWeb/events/258787967";
    // URL of our `#webcomponents-primer` channel on Slack
    this.slackURL = "https://petit-atelier.slack.com/messages/CGSSPMXJ7";
  }

  render() {
    const [ wifiSSID, wifiPWD ] = this.wifi,
          primerURL = new URL( this.primerURL),
          primerURLShortened = `${primerURL.host}${primerURL.pathname}`,
          starterURL = new URL( this.starterURL),
          starterURLShortened = `${starterURL.host}${starterURL.pathname}`,
          meetupURL = new URL( this.meetupURL),
          meetupURLShortened = `${meetupURL.host}/GenevaWeb`

    return html`
      <dia-show slide="F03">
        <!-- Introduction -->
        <dia-slide id="I01">
          <dia-po display="pj01" class="center">${diapoWiFi( wifiSSID, wifiPWD, primerURL, primerURLShortened)}</dia-po>
          <dia-po display="tv01" default>${diapoWCPTitle()}</dia-po>
          <dia-po display="tv02">${diapoModelViewer()}</dia-po>
          <dia-po display="sp01">${diapoWCPTitleAsideOlivier()}</dia-po>
          <dia-po display="sp02">${diapoWCPTitleAsideYves()}</dia-po>
        </dia-slide>

        <!-- What are Web Components? -->
        <dia-slide id="F01">
          <dia-po display="pj01"><wcp-summary active-index="F01" /></dia-po>
          <dia-po display="tv01" default>${diapoWhatAreWebComponents()}</dia-po>
          <dia-po display="tv02">${diapoLiveCodeCustomElement( false)}</dia-po>
          <dia-po display="sp01">${diapoWhatAreWebComponents()}</dia-po>
          <dia-po display="sp02">${diapoLiveCodeCustomElement( false)}</dia-po>
        </dia-slide>

        <dia-slide id="F02">
          <dia-po display="pj01"><wcp-summary active-index="F01" /></dia-po>
          <dia-po display="tv01">
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
          </dia-po>
          <dia-po display="tv02">${diapoLiveCodeCustomElement( true)}</dia-po>
          <dia-po display="sp01">
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
          </dia-po>
          <dia-po display="sp02">${diapoLiveCodeCustomElement( true)}</dia-po>
        </dia-slide>

        <dia-slide id="F03">
          <dia-po display="pj01"><wcp-summary active-index="F01" /></dia-po>
          <dia-po display="tv01">
            <h1>Shadow DOM · a bit more</h1>
            <h2>Composition & Slots</h2>
            <ul>
              <li>By default, if an element has shadow DOM, the shadow tree
                is rendered instead of the element's children</li>
              <li>Use the <code>‹slot›</code> tag to add a placeholder,
                where the children can render</li>
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
          </dia-po>
          <dia-po display="tv02">${diapoLiveCodeCustomElementWithSlot()}</dia-po>
          <dia-po display="sp01">TODO</dia-po>
          <dia-po display="sp02">${diapoLiveCodeCustomElementWithSlot()}</dia-po>
        </dia-slide>

        <dia-slide id="F04">
          <dia-po display="pj01"><wcp-summary active-index="F01" /></dia-po>
          <dia-po display="tv01">
            <h1>ES Modules & Imports</h1>
            <ul>
              <li>The <a href="https://html.spec.whatwg.org/multipage/webappapis.html#integration-with-the-javascript-module-system">ES Module specification</a>
                defines the inclusion and reuse of JS documents in other JS documents</li>
              <li>The entire contents of JavaScript modules are automatically in
                <strong><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode">strict mode</a></strong></li>
            </ul>
            <h1>HTML Template</h1>
            <ul>
              <li>The <code>‹template›</code> element is used to declare fragments
              of HTML that can be cloned and inserted in the document by script.</li>
              <li>Will not render until it is activated</li>
              <li>Has no effect on the page, until activated – scripts won’t run, images won’t load, audio won’t play</li>
              <li>Will not appear in the DOM</li>
            </ul>
          </dia-po>
          <dia-po display="tv02">
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
          </dia-po>
          <dia-po display="sp01">TODO</dia-po>
          <dia-po display="sp02">TODO</dia-po>
        </dia-slide>

        <dia-slide id="F05">
          <dia-po display="pj01"><dia-livecode project="wcp-summary" mode="preview" /></dia-po><!-- refresh="${this.refresh}" -->
          <dia-po display="tv01">TODO</dia-po>
          <dia-po display="tv02" default>
            <h1>‹wcp-summary› element · Live code</h1>
            <dia-livecode project="wcp-summary" mode="editor" file="script.js" />
          </dia-po>
          <dia-po display="sp01">TODO</dia-po>
          <dia-po display="sp02">TODO</dia-po>
        </dia-slide>

        <dia-slide id="F06">
          <dia-po display="pj01"><dia-livecode project="wcp-vega-histogram" mode="preview" /></dia-po><!-- refresh="${this.refresh}" -->
          <dia-po display="tv01">TODO</dia-po>
          <dia-po display="tv02" default>
            <h1>‹wcp-vega-histogram› element · Live code</h1>
            <dia-livecode project="wcp-vega-histogram" mode="editor" file="index.html" />
          </dia-po>
          <dia-po display="sp01">TODO</dia-po>
          <dia-po display="sp02">TODO</dia-po>
        </dia-slide>

        <dia-slide id="F07">
          <dia-po display="pj01">${diapo1BDevices()}</dia-po>
          <dia-po display="tv01" default>${diapoCanIUseWebComponents()}</dia-po>
          <dia-po display="tv02">${diapoWebComponentsPolyfill()}</dia-po>
          <dia-po display="sp01">${diapoBrowserReleases()}</dia-po>
          <dia-po display="sp02">${diapoBrowserLatestVersions()}</dia-po>
        </dia-slide>

        <dia-slide id="C01">
          <dia-po display="pj01"><wcp-summary active-index="C" /></dia-po>
          <dia-po display="tv01" default>${diapoWebComponentPromises()}</dia-po>
          <dia-po display="tv02">${diapoColorOfTimePatchwork()}</dia-po>
          <dia-po display="sp01">${diapoWebComponentPromisesAsideOlivier()}</dia-po>
          <dia-po display="sp02">${diapoColorOfTimePatchwork()}</dia-po>
        </dia-slide>
        <dia-slide id="C02">
          <dia-po display="pj01"><wcp-summary active-index="C" /></dia-po>
          <dia-po display="tv01" default>${diapoDifficultBits()}</dia-po>
          <dia-po display="tv02">${diapoLearningInvestment()}</dia-po>
          <dia-po display="sp01">${diapoDifficultBits()}</dia-po>
          <dia-po display="sp02">${diapoLearningInvestment()}</dia-po>
        </dia-slide>
        <dia-slide id="C03">
          <dia-po display="pj01" class="center">${diapoSlideshowShare( primerURL, primerURLShortened, starterURL, starterURLShortened)}</dia-po>
          <dia-po display="tv01" default class="center">${diapoThankYouFeedback( meetupURL, meetupURLShortened, this.slackURL)}</dia-po>
          <dia-po display="tv02" class="center">${diapoPetitAtelier()}</dia-po>
          <dia-po display="sp01" class="center">${diapoSlideshowShare( primerURL, primerURLShortened, starterURL, starterURLShortened)}</dia-po>
          <dia-po display="sp02" class="center">${diapoThankYouFeedback( meetupURL, meetupURLShortened, this.slackURL)}</dia-po>
        </dia-slide>
        <dia-slide id="C04">
          <dia-po display="pj01" class="center">${diapoGōngfuIO()}</dia-po>
          <dia-po display="tv01" default>${diapoPlayWithWebComponents()}</dia-po>
          <dia-po display="tv02">${diapoPlayWithDemonstrates()}</dia-po>
          <dia-po display="sp01">${diapoPlayWithWebComponentsAside()}</dia-po>
          <dia-po display="sp02">${diapoPlayWithDemonstrates()}</dia-po>
        </dia-slide>
      </dia-show>
      <slot></slot>`;
  }

}

// Register the element with the browser
customElements.define( "wcp-slideshow", WebComponentsPrimerSlideshow);
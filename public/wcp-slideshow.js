import { LitElement, html, css } from "lit-element";

import "@petitatelier/dia-show";
import "@petitatelier/dia-code";
import "@petitatelier/dia-livecode";

import { SlideshowStyles } from "./styles.js";
import { diapoWCPTitle, diapoWCPTitleAsideOlivier, diapoWCPTitleAsideYves, diapoWiFi, diapoModelViewer } from "./wcp-parts-I01.js";
import { diapoWhatAreWebComponents, diapoLiveCodeCustomElement, diapoLiveCodeCustomElementWithSlot } from "./wcp-parts-F01.js";
import { diapo1BDevices, diapoCanIUseWebComponents, diapoWebComponentsPolyfill, diapoBrowserReleases, diapoBrowserLatestVersions } from "./wcp-parts-F01B.js";
import { diapoCustomElements, diapoCustomElementsAside } from "./wcp-parts-F02.js";
import { diapoShadowDOM } from "./wcp-parts-F03.js";
import { diapoModulesAndImports, diapoModuleImportExample } from "./wcp-parts-F04.js";
import { diapoWebComponentPromises, diapoColorOfTimePatchwork, diapoWebComponentPromisesAsideOlivier } from "./wcp-parts-C01.js";
import { diapoDifficultBits, diapoLearningInvestment } from "./wcp-parts-C02.js";
import { diapoSlideshowShare, diapoThankYouFeedback, diapoPetitAtelier } from "./wcp-parts-C03.js";
import { diapoGōngfuIO, diapoPlayWithWebComponents, diapoPlayWithDemonstrates, diapoPlayWithWebComponentsAside } from "./wcp-parts-C04.js";
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
        <!-- 0. INTRODUCTION -->

        <dia-slide id="I01">
          <dia-po display="pj01" class="center">${diapoWiFi( wifiSSID, wifiPWD, primerURL, primerURLShortened)}</dia-po>
          <dia-po display="tv01" default>${diapoWCPTitle()}</dia-po>
          <dia-po display="tv02">${diapoModelViewer()}</dia-po>
          <dia-po display="sp01">${diapoWCPTitleAsideOlivier()}</dia-po>
          <dia-po display="sp02">${diapoWCPTitleAsideYves()}</dia-po>
        </dia-slide>

        <!-- 1. FOUNDATIONS OF WEB COMPONENTS -->

        <!-- What are Web Components? -->
        <dia-slide id="F01">
          <dia-po display="pj01"><wcp-summary active-index="F01" /></dia-po>
          <dia-po display="tv01">${diapoWhatAreWebComponents()}</dia-po>
          <dia-po display="tv02" default>${diapoLiveCodeCustomElement( false)}</dia-po>
          <dia-po display="sp01">${diapoWhatAreWebComponents()}</dia-po>
          <dia-po display="sp02">${diapoLiveCodeCustomElement( false)}</dia-po>
        </dia-slide>

        <!-- Can I Use Web Components? -->
        <dia-slide id="F01B">
          <dia-po display="pj01">${diapo1BDevices()}</dia-po>
          <dia-po display="tv01" default>${diapoCanIUseWebComponents()}</dia-po>
          <dia-po display="tv02">${diapoWebComponentsPolyfill()}</dia-po>
          <dia-po display="sp01">${diapoBrowserReleases()}</dia-po>
          <dia-po display="sp02">${diapoBrowserLatestVersions()}</dia-po>
        </dia-slide>

        <!-- Custom Elements (& Shadow DOM) -->
        <dia-slide id="F02">
          <dia-po display="pj01"><wcp-summary active-index="F02" /></dia-po>
          <dia-po display="tv01">${diapoCustomElements()}</dia-po>
          <dia-po display="tv02" default>${diapoLiveCodeCustomElement( true)}</dia-po>
          <dia-po display="sp01">${diapoCustomElementsAside()}</dia-po>
          <dia-po display="sp02">${diapoLiveCodeCustomElement( true)}</dia-po>
        </dia-slide>

        <!-- Shadow DOM -->
        <dia-slide id="F03">
          <dia-po display="pj01"><wcp-summary active-index="F03" /></dia-po>
          <dia-po display="tv01">${diapoShadowDOM()}</dia-po>
          <dia-po display="tv02" default>${diapoLiveCodeCustomElementWithSlot()}</dia-po>
          <dia-po display="sp01">${diapoShadowDOM()}</dia-po>
          <dia-po display="sp02">${diapoLiveCodeCustomElementWithSlot()}</dia-po>
        </dia-slide>

        <!-- Modules & Templates -->
        <dia-slide id="F04">
          <dia-po display="pj01"><wcp-summary active-index="F04" /></dia-po>
          <dia-po display="tv01">${diapoModulesAndImports()}</dia-po>
          <dia-po display="tv02" default>${diapoModuleImportExample()}</dia-po>
          <dia-po display="sp01">${diapoModulesAndImports()}</dia-po>
          <dia-po display="sp02">${diapoModuleImportExample()}</dia-po>
        </dia-slide>

        <!-- 2. CREATING AND USING WEB COMPONENTS -->

        <!-- How to start? -->
        <dia-slide id="U01">
          <dia-po display="pj01"><dia-livecode project="wcp-summary" mode="preview" /></dia-po><!-- refresh="${this.refresh}" -->
          <dia-po display="tv01">TODO</dia-po>
          <dia-po display="tv02" default>
            <h1>‹wcp-summary› element · Live code</h1>
            <dia-livecode project="wcp-summary" mode="editor" file="script.js" />
          </dia-po>
          <dia-po display="sp01">
            <h1>‹wcp-summary› element · Live code</h1>
            <dia-livecode project="wcp-summary" mode="editor" file="script.js" />
          </dia-po>
          <dia-po display="sp02">
            <h1>‹wcp-summary› element · Live code</h1>
            <dia-livecode project="wcp-summary" mode="editor" file="script.js" />
          </dia-po>
        </dia-slide>

        <!-- Lit-Element Templates -->
        <dia-slide id="U02">
          <dia-po display="pj01"><dia-livecode project="wcp-summary" mode="preview" /></dia-po><!-- refresh="${this.refresh}" -->
          <dia-po display="tv01">TODO</dia-po>
          <dia-po display="tv02" default>
            <h1>‹wcp-summary› element · Live code</h1>
            <dia-livecode project="wcp-summary" mode="editor" file="script.js" />
          </dia-po>
          <dia-po display="sp01">
            <h1>‹wcp-summary› element · Live code</h1>
            <dia-livecode project="wcp-summary" mode="editor" file="script.js" />
          </dia-po>
          <dia-po display="sp02">
            <h1>‹wcp-summary› element · Live code</h1>
            <dia-livecode project="wcp-summary" mode="editor" file="script.js" />
          </dia-po>
        </dia-slide>

        <!-- Lit-Element Data bindings -->
        <dia-slide id="U03">
          <dia-po display="pj01"><dia-livecode project="wcp-summary" mode="preview" /></dia-po><!-- refresh="${this.refresh}" -->
          <dia-po display="tv01">TODO</dia-po>
          <dia-po display="tv02" default>
            <h1>‹wcp-summary› element · Live code</h1>
            <dia-livecode project="wcp-summary" mode="editor" file="script.js" />
          </dia-po>
          <dia-po display="sp01">
            <h1>‹wcp-summary› element · Live code</h1>
            <dia-livecode project="wcp-summary" mode="editor" file="script.js" />
          </dia-po>
          <dia-po display="sp02">
            <h1>‹wcp-summary› element · Live code</h1>
            <dia-livecode project="wcp-summary" mode="editor" file="script.js" />
          </dia-po>
        </dia-slide>

        <!-- 3. DATAFLOWS OF WEB COMPONENTS -->

        <!-- Vanilla data bindings: « data-in via attributes, data-out via events » -->
        <dia-slide id="D01">
          <dia-po display="pj01"><dia-livecode project="wcp-vega-histogram" mode="preview" /></dia-po><!-- refresh="${this.refresh}" -->
          <dia-po display="tv01">TODO</dia-po>
          <dia-po display="tv02" default>
            <h1>‹wcp-vega-histogram› element · Live code</h1>
            <dia-livecode project="wcp-vega-histogram" mode="editor" file="index.html" />
          </dia-po>
          <dia-po display="sp01">
            <h1>‹wcp-vega-histogram› element · Live code</h1>
            <dia-livecode project="wcp-vega-histogram" mode="editor" file="index.html" />
          </dia-po>
          <dia-po display="sp02">
            <h1>‹wcp-vega-histogram› element · Live code</h1>
            <dia-livecode project="wcp-vega-histogram" mode="editor" file="index.html" />
          </dia-po>
        </dia-slide>

        <!-- Retrieving and storing data -->
        <dia-slide id="D02">
          <dia-po display="pj01"><dia-livecode project="wcp-vega-histogram" mode="preview" /></dia-po><!-- refresh="${this.refresh}" -->
          <dia-po display="tv01">TODO</dia-po>
          <dia-po display="tv02" default>
            <h1>‹wcp-vega-histogram› element · Live code</h1>
            <dia-livecode project="wcp-vega-histogram" mode="editor" file="index.html" />
          </dia-po>
          <dia-po display="sp01">TODO</dia-po>
          <dia-po display="sp02">TODO</dia-po>
        </dia-slide>

        <!-- 4. THE ECOSYSTEM OF WEB COMPONENTS -->

        <!-- 5. CONCLUSION -->

        <!-- The Promises of Web Components -->
        <dia-slide id="C01">
          <dia-po display="pj01"><wcp-summary active-index="C" /></dia-po>
          <dia-po display="tv01" default>${diapoWebComponentPromises()}</dia-po>
          <dia-po display="tv02">${diapoColorOfTimePatchwork()}</dia-po>
          <dia-po display="sp01">${diapoWebComponentPromisesAsideOlivier()}</dia-po>
          <dia-po display="sp02">${diapoColorOfTimePatchwork()}</dia-po>
        </dia-slide>

        <!-- Difficult bits & Learning investment -->
        <dia-slide id="C02">
          <dia-po display="pj01"><wcp-summary active-index="C" /></dia-po>
          <dia-po display="tv01">${diapoDifficultBits()}</dia-po>
          <dia-po display="tv02" default>${diapoLearningInvestment()}</dia-po>
          <dia-po display="sp01">${diapoDifficultBits()}</dia-po>
          <dia-po display="sp02">${diapoLearningInvestment()}</dia-po>
        </dia-slide>

        <!-- Thank You for Your Attention -->
        <dia-slide id="C03">
          <dia-po display="pj01" class="center">${diapoSlideshowShare( primerURL, primerURLShortened, starterURL, starterURLShortened)}</dia-po>
          <dia-po display="tv01" default class="center">${diapoThankYouFeedback( meetupURL, meetupURLShortened, this.slackURL)}</dia-po>
          <dia-po display="tv02" class="center">${diapoPetitAtelier()}</dia-po>
          <dia-po display="sp01" class="center">${diapoSlideshowShare( primerURL, primerURLShortened, starterURL, starterURLShortened)}</dia-po>
          <dia-po display="sp02" class="center">${diapoThankYouFeedback( meetupURL, meetupURLShortened, this.slackURL)}</dia-po>
        </dia-slide>

        <!-- Gōng-fu I/O & Play with Web Components -->
        <dia-slide id="C04">
          <dia-po display="pj01" class="center">${diapoGōngfuIO()}</dia-po>
          <dia-po display="tv01" default>${diapoPlayWithWebComponents()}</dia-po>
          <dia-po display="tv02">${diapoPlayWithDemonstrates()}</dia-po>
          <dia-po display="sp01">${diapoPlayWithWebComponentsAside()}</dia-po>
          <dia-po display="sp02">${diapoPlayWithDemonstrates()}</dia-po>
        </dia-slide>
      </dia-show>
    `;
  }

}

// Register the element with the browser
customElements.define( "wcp-slideshow", WebComponentsPrimerSlideshow);
import { LitElement, html, css } from "lit-element";

import "@petitatelier/dia-show";
import "@petitatelier/dia-code";
import "@petitatelier/dia-livecode";

import { SlideshowStyles } from "./styles.js";
import "./wcp-summary.js";

import { diapoWCPTitle, diapoWCPTitleAsideOlivier, diapoWCPTitleAsideYves, diapoWiFi, diapoModelViewer } from "./wcp-parts-I01.js";

import { diapoWhatAreWebComponents, diapoLiveCodeCustomElement, diapoLiveCodeCustomElementWithSlot } from "./wcp-parts-F01.js";
import { diapo1BDevices, diapoCanIUseWebComponents, diapoWebComponentsPolyfill, diapoBrowserReleases, diapoBrowserLatestVersions } from "./wcp-parts-F01B.js";
import { diapoCustomElements, diapoCustomElementsAside } from "./wcp-parts-F02.js";
import { diapoShadowDOM } from "./wcp-parts-F03.js";
import { diapoModulesAndImports, diapoModuleImportExample } from "./wcp-parts-F04.js";

import { diapoHowToStart } from "./wcp-parts-U01.js";
import { diapoLitElementTemplate } from "./wcp-parts-U02.js";
import { diapoLitElementDataBindings } from "./wcp-parts-U03.js";

import { diapoDataBindingsMantra } from "./wcp-parts-D01.js";
import { diapoFetchingData } from "./wcp-parts-D02.js";

import { diapoPolymerProject, diapoPolymerProjectDetail } from "./wcp-parts-E01.js";
import { diapoWebComponentsCollections, diapoWebComponentsCollectionsDetail } from "./wcp-parts-E02.js";
import { diapoMaterialDesignAndA11Y, diapoMaterialDesignAndA11YDetail } from "./wcp-parts-E03.js";

import { diapoWebComponentPromises, diapoColorOfTimePatchwork, diapoWebComponentPromisesAsideOlivier } from "./wcp-parts-C01.js";
import { diapoDifficultBits, diapoLearningInvestment } from "./wcp-parts-C02.js";
import { diapoSlideshowShare, diapoThankYouFeedback, diapoPetitAtelier } from "./wcp-parts-C03.js";
import { diapoGōngfuIO, diapoPlayWithWebComponents, diapoPlayWithDemonstrates, diapoPlayWithWebComponentsAside } from "./wcp-parts-C04.js";

export class WebComponentsPrimerSlideshow extends LitElement {

  static get styles() {
    return [ SlideshowStyles ];
  }

  static get properties() {
    return {
      wifi: { type: Array, attribute: "wifi" },
      primerURL: { type: String, attribute: "primer-url" },
      examplesURL: { type: String, attribute: "examples-url" },
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

    // URL of this slideshow « A Primer on Web Components »
    this.primerURL = "https://ptat.ch/webcomponents-primer";
    // URL of the « Web Components Starter » kit on GitHub
    this.starterURL = "https://ptat.ch/webcomponents-starter";
    // URL of the « Web Components Live-coding Examples » on Glitch
    this.examplesURL = "https://ptat.ch/webcomponents-examples";
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
          examplesURL = new URL( this.examplesURL),
          examplesURLShortened = `${examplesURL.host}${examplesURL.pathname}`,
          meetupURL = new URL( this.meetupURL),
          meetupURLShortened = `${meetupURL.host}/GenevaWeb`

    return html`
      <dia-show slide="I01:tv01" display="web">
        <!-- 0. INTRODUCTION -->

        <dia-slide id="I01:tv01"><dia-po display="web">${diapoWCPTitle()}</dia-po></dia-slide>
        <dia-slide id="I01:tv02"><dia-po display="web">${diapoModelViewer()}</dia-po></dia-slide>

        <!-- 1. FOUNDATIONS OF WEB COMPONENTS -->

        <!-- What are Web Components? -->
        <dia-slide id="F01:pj01"><dia-po display="web"><wcp-summary active-index="F01" /></dia-po></dia-slide>
        <dia-slide id="F01:tv01"><dia-po display="web">${diapoWhatAreWebComponents()}</dia-po></dia-slide>
        <dia-slide id="F01:tv02"><dia-po display="web">${diapoLiveCodeCustomElement( false)}</dia-po></dia-slide>

        <!-- Can I Use Web Components? -->
        <dia-slide id="F01B:pj01"><dia-po display="web">${diapo1BDevices()}</dia-po></dia-slide>
        <dia-slide id="F01B:tv01"><dia-po display="web">${diapoCanIUseWebComponents()}</dia-po></dia-slide>
        <dia-slide id="F01B:tv02"><dia-po display="web">${diapoWebComponentsPolyfill()}</dia-po></dia-slide>
        <dia-slide id="F01B:sp01"><dia-po display="web">${diapoBrowserReleases()}${diapoBrowserLatestVersions()}</dia-po></dia-slide>

        <!-- Custom Elements (& Shadow DOM) -->
        <dia-slide id="F02:pj01"><dia-po display="web"><wcp-summary active-index="F02" /></dia-po></dia-slide>
        <dia-slide id="F02:tv01"><dia-po display="web">${diapoCustomElements()}</dia-po></dia-slide>
        <dia-slide id="F02:tv02"><dia-po display="web">${diapoLiveCodeCustomElement( true)}</dia-po></dia-slide>

        <!-- Shadow DOM -->
        <dia-slide id="F03:pj01"><dia-po display="web"><wcp-summary active-index="F03" /></dia-po></dia-slide>
        <dia-slide id="F03:tv01"><dia-po display="web">${diapoShadowDOM()}</dia-po></dia-slide>
        <dia-slide id="F03:tv02"><dia-po display="web">${diapoLiveCodeCustomElementWithSlot()}</dia-po></dia-slide>

        <!-- Modules & Templates -->
        <dia-slide id="F04:pj01"><dia-po display="web"><wcp-summary active-index="F04" /></dia-po></dia-slide>
        <dia-slide id="F04:tv01"><dia-po display="web">${diapoModulesAndImports()}</dia-po></dia-slide>
        <dia-slide id="F04:tv02"><dia-po display="web">${diapoModuleImportExample()}</dia-po></dia-slide>

        <!-- 2. CREATING AND USING WEB COMPONENTS -->

        <!-- How to start? -->
        <dia-slide id="U01:tv01"><dia-po display="web">${diapoHowToStart()}</dia-po></dia-slide>
        <dia-slide id="U01:pj01"><dia-po display="web" fullbleed>
          <dia-livecode project="wcp-summary-step01" mode="preview" /><!-- refresh="${this.refresh}" -->
        </dia-po></dia-slide>
        <dia-slide id="U01:tv02"><dia-po display="web" fullbleed>
          <h1>‹wcp-summary› element · Live code</h1>
          <dia-livecode project="wcp-summary-step01" mode="editor" file="index.html" />
        </dia-po></dia-slide>

        <!-- Lit-Element Templates -->
        <dia-slide id="U02:tv01"><dia-po display="web">${diapoLitElementTemplate()}</dia-po></dia-slide>
        <dia-slide id="U02:pj01"><dia-po display="web" fullbleed>
          <dia-livecode project="wcp-summary-step02" mode="preview" /></dia-po>
        </dia-slide>
        <dia-slide id="U02:tv02"><dia-po display="web" fullbleed>
          <h1>‹wcp-summary› element · Live code</h1>
          <dia-livecode project="wcp-summary-step02" mode="editor" file="wcp-summary.js" />
        </dia-po></dia-slide>

        <!-- Lit-Element Data bindings -->
        <dia-slide id="U03:tv01"><dia-po display="web">${diapoLitElementDataBindings()}</dia-po></dia-slide>
        <dia-slide id="U03:pj01"><dia-po display="web" fullbleed>
          <dia-livecode project="wcp-summary-step03" mode="preview" /><!-- refresh="${this.refresh}" -->
        </dia-po></dia-slide>
        <dia-slide id="U03:tv02"><dia-po display="web" fullbleed>
          <h1>‹wcp-summary› element · Live code</h1>
          <dia-livecode project="wcp-summary-step03" mode="editor" file="index.html" />
        </dia-po></dia-slide>

        <!-- 3. DATAFLOWS OF WEB COMPONENTS -->

        <!-- Vanilla data bindings: « data-in via attributes, data-out via events » -->
        <dia-slide id="D01:tv01"><dia-po display="web">${diapoDataBindingsMantra()}</dia-po></dia-slide>
        <dia-slide id="D01:pj01"><dia-po display="web" fullbleed>
          <dia-livecode project="wcp-summary-step04" mode="preview" /><!-- refresh="${this.refresh}" -->
        </dia-po></dia-slide>
        <dia-slide id="D01:tv02"><dia-po display="web" fullbleed>
          <h1>‹wcp-summary› element · Live code</h1>
          <dia-livecode project="wcp-summary-step04" mode="editor" file="README.md" />
        </dia-po></dia-slide>

        <!-- Fetching data -->
        <dia-slide id="D02:tv01"><dia-po display="web">${diapoFetchingData()}</dia-po></dia-slide>
        <dia-slide id="D02:pj01"><dia-po display="web" fullbleed>
          <dia-livecode project="wcp-summary-step05" mode="preview" /><!-- refresh="${this.refresh}" -->
        </dia-po></dia-slide>
        <dia-slide id="D02:tv02"><dia-po display="web" fullbleed>
          <h1>‹wcp-summary› element · Live code</h1>
          <dia-livecode project="wcp-summary-step05" mode="editor" file="wcp-summary-data.json" />
        </dia-po></dia-slide>

        <!-- 4. THE ECOSYSTEM OF WEB COMPONENTS -->

        <!-- Understand the Polymer project -->
        <dia-slide id="E01:pj01"><dia-po display="web"><wcp-summary active-index="E01" /></dia-po></dia-slide>
        <dia-slide id="E01:tv01"><dia-po display="web">${diapoPolymerProject()}</dia-po></dia-slide>
        <dia-slide id="E01:tv02"><dia-po display="web">${diapoPolymerProjectDetail()}</dia-po></dia-slide>

        <!-- Navigate WebComponents.org and discover its main collections -->
        <dia-slide id="E02:pj01"><dia-po display="web"><wcp-summary active-index="E02" /></dia-po></dia-slide>
        <dia-slide id="E02:tv01"><dia-po display="web">${diapoWebComponentsCollections()}</dia-po></dia-slide>
        <dia-slide id="E02:tv02"><dia-po display="web">${diapoWebComponentsCollectionsDetail()}</dia-po></dia-slide>

        <!-- Understand Material Design and A11Y -->
        <dia-slide id="E03:pj01"><dia-po display="web"><wcp-summary active-index="E03" /></dia-po></dia-slide>
        <dia-slide id="E03:tv01"><dia-po display="web">${diapoMaterialDesignAndA11Y()}</dia-po></dia-slide>
        <dia-slide id="E03:tv02"><dia-po display="web">${diapoMaterialDesignAndA11YDetail()}</dia-po></dia-slide>

        <!-- 5. CONCLUSION -->

        <!-- The Promises of Web Components -->
        <dia-slide id="C01:pj01"><dia-po display="web"><wcp-summary active-index="C" /></dia-po></dia-slide>
        <dia-slide id="C01:tv01"><dia-po display="web">${diapoWebComponentPromises()}</dia-po></dia-slide>
        <dia-slide id="C01:tv02"><dia-po display="web">${diapoColorOfTimePatchwork()}</dia-po></dia-slide>

        <!-- Difficult bits & Learning investment -->
        <dia-slide id="C02:pj01"><dia-po display="web"><wcp-summary active-index="C" /></dia-po></dia-slide>
        <dia-slide id="C02:tv01"><dia-po display="web">${diapoDifficultBits()}</dia-po></dia-slide>
        <dia-slide id="C02:tv02"><dia-po display="web">${diapoLearningInvestment()}</dia-po></dia-slide>

        <!-- Thank You for Your Attention -->
        <dia-slide id="C03:pj01"><dia-po display="web">
          ${diapoSlideshowShare( primerURL, primerURLShortened, examplesURL, examplesURLShortened, starterURL, starterURLShortened)}
        </dia-po></dia-slide>
        <dia-slide id="C03:tv01"><dia-po display="web">
          ${diapoThankYouFeedback( meetupURL, meetupURLShortened, this.slackURL)}
        </dia-po></dia-slide>
        <dia-slide id="C03:tv02"><dia-po display="web">
          ${diapoPetitAtelier()}
        </dia-po></dia-slide>

        <!-- Gōng-fu I/O & Play with Web Components -->
        <dia-slide id="C04:pj01"><dia-po display="web">${diapoGōngfuIO()}</dia-po></dia-slide>
        <dia-slide id="C04:tv01"><dia-po display="web">${diapoPlayWithWebComponents()}</dia-po></dia-slide>
        <dia-slide id="C04:tv02"><dia-po display="web">${diapoPlayWithDemonstrates()}</dia-po></dia-slide>
      </dia-show>
    `;
  }
}

// Register the element with the browser
customElements.define( "wcp-slideshow", WebComponentsPrimerSlideshow);
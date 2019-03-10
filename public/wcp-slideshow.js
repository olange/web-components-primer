import { LitElement, html, css } from "lit-element";

import "@petitatelier/dia-show";
import "@petitatelier/dia-code";
import "@petitatelier/dia-livecode";

import { SlideshowStyles } from "./styles.js";
import { diapoWCPTitle, diapoWCPTitleAsideOlivier, diapoWCPTitleAsideYves, diapoWiFi, diapoModelViewer } from "./wcp-parts01.js";
import { diapoWhatAreWebComponents, diapoLiveCodeCustomElement } from "./wcp-parts02.js";
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
      slackURL: { type: String, attribute: "slack-url" }
    };
  }

  constructor() {
    super();
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
      <dia-show detached dashboard speaker>
        <dia-slide id="s01">
          <dia-po display="pj01" class="center">${diapoWiFi( wifiSSID, wifiPWD, primerURL, primerURLShortened)}</dia-po>
          <dia-po display="tv01" default>${diapoWCPTitle()}</dia-po>
          <dia-po display="tv02">${diapoModelViewer()}</dia-po>
          <dia-po display="sp01">${diapoWCPTitleAsideOlivier()}</dia-po>
          <dia-po display="sp02">${diapoWCPTitleAsideYves()}</dia-po>
        </dia-slide>
        <dia-slide id="s02">
          <dia-po display="pj01"><wcp-summary active-index="F" /></dia-po>
          <dia-po display="tv01" default>${diapoWhatAreWebComponents()}</dia-po>
          <dia-po display="tv02">${diapoLiveCodeCustomElement()}</dia-po>
          <dia-po display="sp01">${diapoWhatAreWebComponents()}</dia-po>
          <dia-po display="sp02">${diapoLiveCodeCustomElement()}</dia-po>
        </dia-slide>
        <dia-slide id="s03">
          <dia-po display="pj01">TODO</dia-po>
          <dia-po display="tv01">TODO
            Custom Elements, Shadow DOM & CSS, Import, Template
          </dia-po>
          <dia-po display="tv02">TODO</dia-po>
          <dia-po display="sp01">TODO</dia-po>
          <dia-po display="sp02">TODO</dia-po>
        </dia-slide>
        <dia-slide id="s04">
          <dia-po display="pj01"><dia-livecode project="wcp-summary" mode="preview" refresh=7500></dia-po>
          <dia-po display="tv01">TODO</dia-po>
          <dia-po display="tv02" default>
            <h1>‹wcp-summary› element · Live code</h1>
            <dia-livecode project="wcp-summary" mode="editor" file="script.js">
          </dia-po>
          <dia-po display="sp01">TODO</dia-po>
          <dia-po display="sp02">TODO</dia-po>
        </dia-slide>
        <dia-slide id="s05">
          <dia-po display="pj01">${diapo1BDevices()}</dia-po>
          <dia-po display="tv01" default>${diapoCanIUseWebComponents()}</dia-po>
          <dia-po display="tv02">${diapoWebComponentsPolyfill()}</dia-po>
          <dia-po display="sp01">${diapoBrowserReleases()}</dia-po>
          <dia-po display="sp02">${diapoBrowserLatestVersions()}</dia-po>
        </dia-slide>
        <dia-slide id="s06">
          <dia-po display="pj01"><wcp-summary active-index="C" /></dia-po>
          <dia-po display="tv01" default>${diapoWebComponentPromises()}</dia-po>
          <dia-po display="tv02">${diapoColorOfTimePatchwork()}</dia-po>
          <dia-po display="sp01">${diapoWebComponentPromisesAsideOlivier()}</dia-po>
          <dia-po display="sp02">${diapoColorOfTimePatchwork()}</dia-po>
        </dia-slide>
        <dia-slide id="s07">
          <dia-po display="pj01"><wcp-summary active-index="C" /></dia-po>
          <dia-po display="tv01" default>${diapoDifficultBits()}</dia-po>
          <dia-po display="tv02">${diapoLearningInvestment()}</dia-po>
          <dia-po display="sp01">${diapoDifficultBits()}</dia-po>
          <dia-po display="sp02">${diapoLearningInvestment()}</dia-po>
        </dia-slide>
        <dia-slide id="sEnd">
          <dia-po display="pj01" class="center">${diapoSlideshowShare( primerURL, primerURLShortened, starterURL, starterURLShortened)}</dia-po>
          <dia-po display="tv01" default class="center">${diapoThankYouFeedback( meetupURL, meetupURLShortened, this.slackURL)}</dia-po>
          <dia-po display="tv02" class="center">${diapoPetitAtelier()}</dia-po>
          <dia-po display="sp01" class="center">${diapoSlideshowShare( primerURL, primerURLShortened, starterURL, starterURLShortened)}</dia-po>
          <dia-po display="sp02" class="center">${diapoThankYouFeedback( meetupURL, meetupURLShortened, this.slackURL)}</dia-po>
        </dia-slide>
        <dia-slide id="sPost">
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
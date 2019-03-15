/**
 * Constructable Stylesheet of the ‹wcp-summary› custom element
 * (see https://lit-element.polymer-project.org/guide/styles#static-styles)
 */

import { css } from "lit-element";

const SummaryStyles = css`
  *[ active] {
    background-color: white;
    color: hsl(248, 39%, 25%) }
  .summary {
    margin: 0 auto; max-width: 600px; }
`;

export {
  SummaryStyles
}

/*
 * There are various ways of attaching a stylesheet to a custom element;
 * using Lit-Element's static `styles` property, as shown in wcp-summary.js,
 * along with this parsed constructable stylesheet is the most efficient one.
 *
 * It makes no sensible difference for this example. However when a
 * custom element gets instantiated a few hundred times in a grid,
 * just re-attaching an already parsed stylesheet is very efficient:
 * the browser does not need to reparse the CSS of every new instance.
 *
 * The `css` helper function from Lit-Element parses the CSS hereafter
 * and builds the constructable stylesheet for us.
 */
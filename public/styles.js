import { css } from "lit-element";

const SummaryStyles = css`
  .summary {
    margin: 0 auto; max-width: 600px; }
  *[ active] {
    background-color: var(--primary-text-color);
    color: var(--primary-bg-color); }
`;

const SlideshowStyles = css`
  .big { font-size: var(--big-normal-text-size); }
  .big pre, pre.big,
  .big code, code.big {
    font-size: var(--big-monospaced-text-size); }

  .center { text-align: center; }

  pre, code {
    font-family: var(--monospaced-text-font);
    font-size: var(--monospaced-text-size); }

  h1, pre, model-viewer {
    margin: calc(1.5 * var(--big-normal-text-size)) auto;
    padding: 0; }

  aside {
    background-color: var(--secondary-bg-color);
    width: 1fr; padding: 1em 2em; }

  a { color: var(--primary-text-color); }
  a:hover, a:visited { color: var(--secondary-text-color); }

  model-viewer {
    width: 100%; height: 400px; }

  dia-show, dia-po {
    background-color: var(--primary-bg-color); }

  dia-livecode {
    width: 100vw; height: calc( 100vh - 4em); }

  /* Scale of diapositive contents */
  dia-po {
    transform: scale( 1); }

  /* Perspective of the diapositives displayed on projector
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transform */
  dia-po[ display="pj01"] {
    transform: skew( 0, -5deg); }

  .chip {
    border-radius: 0.25em;
    border: 1px solid var(--primary-text-color);
    background-color: var(--primary-text-color);
    color: var(--primary-bg-color);
    margin: 0 0.5em; padding: 0 0.25em; }

  table {
    border-collapse: collapse; border-spacing: 0;
    display: block; overflow: auto; width: 100%; }

  table tr {
    border-top: 1px solid #c6cbd1; }

  table tr:nth-child( 2n) {
    background-color: var(--secondary-bg-color); }

  table th, td {
    border: 1px solid #dfe2e5;
    padding: 6px 13px; }

  table th { font-weight: 600; }

  cite { font-style: normal; }
  .blockquote { margin: 1em 1em; }
  blockquote {
    background-color: var(--secondary-bg-color);
    padding: 2em 2em; margin: 1em 1em; }
`;

export {
  SlideshowStyles,
  SummaryStyles
}
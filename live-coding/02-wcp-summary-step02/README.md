[« prev](../02-wcp-summary-step01/) [next »](../02-wcp-summary-step03/)

# 2. Using Web Components – Lit-Element Templates

Part of the live-coding examples of the talk [A Primer on Web Components](https://web-components-primer.firebaseapp.com).

---

## wcp-summary.js

### Creating a Lit-Element custom element

We'll create a custom element by extending the [`Lit-Element`](https://lit-element.polymer-project.org/) class.

You'll first need to import the class from the library, as well as the `html` literal template helper:

```
import { LitElement, html } from "lit-element";

export class WCPSummary extends LitElement {
  …
}
```

### Rendering to Shadow DOM

Add a `render()` method to your class and make it return an [HTML template fragment](#TODO:definition), by using the `html` literal template helper:

```
class WCPSummary extends LitElement {
  …
  render() {
    return html`
      <div class="summary">
        <h1 id="F">Foundations of Web Components</h1>
        …
      </div>
    `;
  }
```

Your `render()` method will be called by `Lit-Element` upon initialization of your custom element — and after each <em>significant</em> update to the values of its observed attributes and properties (more about this hereafter).

### Registering the custom element definition

Finally, register your custom element with the browser; the following defines the `‹wcp-summary›` tag, with the `WCPSummary` Lit-Element class as its element builder:

```
// Register the element with the browser
customElements.define( "wcp-summary", WCPSummary);
```

## wcp-summary.css.js

### Styling

There are various ways to add CSS style rules to your custom element. You could simply add a `‹style›` tag to your template.

The most efficient one is to override the `styles()` getter of your Lit-Element and make it return a [constructable stylesheet](#TODO:definition) — or an array thereof; in your `wcp-summary.js` definition:

```
import { SummaryStyles } from "./wcp-summary.css.js";

class WCPSummary extends LitElement {
  …
  static get styles() {
    return [ SummaryStyles ]; // CSS styles linked to this element
  }
  …
```

### Constructable stylesheet definition

And within `wcp-summary.css.js`, use the `css` literal template helper from Lit-HTML to define a <em>constructable stylesheet<em> from your CSS selectors and rules:

```
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
```

The browser will attach the <em>constructable stylesheet</em> to every instance of your custom element — without the need of re-parse it, every time the Shadow DOM is created.

This comes with a big performance boost, when you instantiate hundreds of your custom elements, such as cells of a grid. And it comes at no cost, when you would use only one, so we suggest using that way.

## About Lit-Element and Lit-HTML

### Lit-Element Features

Lit-Element provides us with some essential abilities — here a simplified overview:

* Observe changes to attribute values, and reflect those changes to properties of your custom element class;
* Observe changes to the values of properties and allows you to handle these changes;
* Use the property values in the render template of your element;
* Render the template to the Shadow DOM of your element;
* And efficiently re-render the parts of your template that would be affected by a change to an attribute- or property value.

### Lit-HTML Template engine

The `html` literal template helper comes from the [`Lit-HTML`](https://lit-html.polymer-project.org) library, which Lit-Element imports and exposes for us.

Lit-HTML is an efficient and concise template engine, that relies on the browser's [literal template API and parser](#TODO:definition)– allowing fast rendering and using plain Javascript expressions in the templates.

Along expressions evaluation and substituion, Lit-HTML provides other features — it namely transparently handles `Promise` and `async` iterators; as well as it allows to embed HTML templates:

```
  render() {
    return html`
      <ul>
        ${this.items.map(( item) => html`<li>${item.text}</li>`)}
      </ul>
    `;
  }
```

Most of the time, you use its features without even noticing, Lit-HTML is very idiomatic and does what you would expect.

### Reactive dataflow

You can think about Lit-Element and Lit-HTML as forming a [reactive dataflow engine](#TODO:definition), where both would collaboratively maintain a <em>computational graph</em> for every custom element and its templates:

* the graph would link attributes to properties of a custom element, and vice-versa;
* and link properties to template parts.

Whenever an attribute or property value changes, the change propagates along the edges of the graph, until a <em>part</em> of the template is reached – allowing Lit-Element and Lit-HTML to know which <em>parts</em> of a template are using that changed value and need to be re-rendered.

(To our knowledge, this graph is an emergent characteristic of the <em>design</em> of Lit-Element and Lit-HTML and does not exist per se in their implementation.)

### Significant updates

Before triggering a re-render upon change of an attribute or property value, Lit-Element gives you an opportunity to determine whether the change is significant or not.

Lit-Element automatically defines a setter (and a getter) for every property. This setter will check that the old and new values are different; if they are not different, the change will result in a no-op in the update/render process.

You can override the setter (and the getter) to provide logic specific to some value, namely when it is an object or an array, where simple comparison by reference would not detect any change — you might need a deep comparison in those cases.

### Lifecyle of a Lit-Element

Detecting changes to attribute and property values is just a part of Lit-Element's [rich lifecycle](#TODO:linkLitElementLifecycle).

You'll probably spend time understanding it in depth – especially when you start to write custom elements, that collaborate with other elements they know about.

To start with, you might want to remember those events:

* `updated( changedProps)` — invoked by Lit-Element upon change of one or more attribute/property values (Lit-Element will debounce changes, yeah!), after the template was re-rendered; by overriding this method, you can insert additional logic to handle a value change
* `firstUpdated()` — invoked <em>once</em> by Lit-Element, after it first rendered the template to the Shadow DOM; overriding this method allows you to perform additional initialization logic, at a special time, where you are guaranteed that your custom element was upgraded by the browser; and that your Shadow DOM is initialized.

### <em>Caveats</em>

When you are designing a <em>system of custom elements</em>, that would collaborate with each other, note that you are on a cross-road, with many ways to choose from.

Essentially remember that, at this time of writing, knowing when a parent/child/sibling custom element was instantiated is a tricky question — subject of [debate and proposals](#TODO:definition).

For instance, let's say you are designing a set of custom elements to build a 3D game app. In the hypothetic design of the following example, the `‹three-view›` would need to grab some `Scene` and `Camera` objects from the properties of its sibling `‹three-scene›` and `‹three-camera›` custom elements class instances, to be able to render the scene to its WebGL renderer:

```
<three-app active-view="V01">
  <three-view id="V01" renderer="WebGL"
    active-scene="S02" active-camera="C01">…</three-view>
  <three-camera id="C01">…</three-camera>
  <three-scene id="S01">…</three-scene>
  <three-scene id="S02">…</three-scene>
</three-app>
```

But `‹three-view›` has no easy way to know when those class instances and objects will be available. You'll need to implement some initialization logic, specific to your solution.

Custom elements definitions will indeed be loaded – and the custom elements will be upgraded — <em>concurrently</em> by the browser.

You have <strong>no guarantee</strong> that the browser would upgrade the parent of a custom element first, because it appears in the DOM as its parent, or vice-versa; or upgrade them in the order in which siblings appear in the DOM — they won't upgrade in order, and it is browser dependent in some cases!

What you know for sure, is that all custom elements live in the DOM, as you placed them, once your class gets constructed. So you're safe to establish <em>references</em> to parent/sibling/child custom elements from the DOM.

But at the time of construction, the classes of those parent/sibling/child custom elements might not have been instantiated yet! so you just have a reference to the elements. And if their class have been instantiated, they might not yet have rendered, so their Shadow DOM might not be there (which applies to your custom element as well).

The only thing you can rely on for sure, is the `firstUpdated()` method invocation of Lit-Element: it comes at a late stage in your custom element's lifecycle, where its class was constructed; and your template was rendered to Shadow DOM.

---

[View it on Glitch](https://wcp-summary-step02.glitch.me/) /
[Remix it on Glitch](https://glitch.com/edit/#!/wcp-summary-step02)
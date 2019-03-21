[« prev](../02-wcp-summary-step04/)

# 5. Dataflow – Fetching data

Part of the live-coding examples of the talk [A Primer on Web Components](https://web-components-primer.firebaseapp.com).

---

Our ‹wcp-summary› and ‹wcp-select› custom elements both share the same text of the summary. The first one renders it as ‹h1› and ‹ul/li› HTML elements; the second one as a ‹select› HTML element. Yet we duplicated the text in both elements.

## index.html

To illustrate how to fetch data from a back-end server and feed it into custom elements, we'll introduce a new custom element and use it in the main `index.html` page, instead of our previous elements:

```
<body>
  <h1>5. Dataflow – Fetching data</h1>
  <wcp-dynamic-summary src="wcp-summary-data.json" />
</body>
```

The new `‹wcp-dynamic-summary›` custom element will:

1. render the <wcp-summary› and <wcp-select› to its shadow DOM;
2. fetch the text of the summary from a separate structured JSON document;
3. and feed the <wcp-summary› and <wcp-select› elements with that data.

## wcp-summary-data.json

The JSON document returned from the back-end might have following data structure, to describe our summary:

```json
[
  [ { "id": "F",   "text": "FOUNDATIONS OF WEB COMPONENTS" },
    { "id": "F01", "text": "What are they? Can I use them?" },
    { "id": "F02", "text": "Custom Elements" },
    { "id": "F03", "text": "Shadow DOM" },
    { "id": "F04", "text": "Templates & Modules" } ],
  [ { "id": "U",   "text": "CREATING AND USING WEB COMPONENTS" },
    { "id": "U01", "text": "How to start?" },
    { "id": "U02", "text": "Lit-Element Templates" },
    { "id": "U03", "text": "Lit-Element Data bindings" } ],
  [ { "id": "D",   "text": "DATAFLOWS OF WEB COMPONENTS" },
    { "id": "D01", "text": "Vanilla data bindings: « data-in via attributes, data-out via events »" },
    { "id": "D02", "text": "Fetching data" } ],
  [ { "id": "E",   "text": "THE ECOSYSTEM OF WEB COMPONENTS" },
    { "id": "E01", "text": "Understanding the Polymer project" },
    { "id": "E02", "text": "Navigate WebComponents.org and discover its main collections" },
    { "id": "E03", "text": "Understand Material Design and A11Y" } ],
  [ { "id": "C",   "text": "AS A CONCLUSION" } ]
]
```

It is a nested array of summary _items_, where each _item_ has following structure:

```
{ "id": "F",   "text": "FOUNDATIONS OF WEB COMPONENTS" }
```

The inner arrays describe groupings of items and the first item of each group will be rendered as its title.

Note alternate designs would of course be possible; in the upcoming sections, this design will drive the `render()` implementations.

## wcp-select.js

We'll refactor both our `‹wcp-select›` and `‹wcp-summary›` custom elements, so to render being driven by that data-structure.

### Add the `items` property

First, let's add an `items` property to `‹wcp-select›` custom element, to receive the data-structure – that is, the items of the summary:

```
  static get properties() {
    return {
      items: { type: Object }
    }
  }
```

Let's initialize the property with an `undefined` value, when constructing the element; we'll use that marker value to render a « Loading… » option later on, until the data is being received:

```
  constructor() {
    super();
    this.items = undefined;
  }
```

### Rendering the items

Then we could render the data-structure as such; note the use of a nested Lit-HTML template in the `this.items.map(… => html\`…\`)` part:

```
  renderOptions( items) {
    return( typeof items === "undefined")
      ? html`<option>Loading…</option>`
      : this.items.map(([ firstItem, ...items]) => html`
          <option value="${firstItem.id}">${firstItem.text}</option>
          ${items.map(( item) =>
            html`<option value="${item.id}">– ${item.text}</option>`)}
        `);
  }

  render() {
    return html`
      <select @change="${this.onChange}">
        ${this.renderOptions( this.items)}
      </select>`;
  }
```

### wcp-summary.js

### Add the same `items` property

Similarly, add the same `items` property to the `‹wcp-summary›` custom element, next to its existing `active` property:

```
  static get properties() {
    return {
      active: { type: String, attribute: "active-index", reflect: true },
      items: { type: Object }
    };
  }
```

Initialize it in the constructor, with an `undefined` marker value:

```
  constructor() {
    super();
    this.active = undefined;
    this.items = undefined;
  }
```

### Rendering the items

And use the items of the summary to drive the rendering. Again, notice we'll display a « Loading… » message, until the data is being received; and use nested `html` templates: 

```
  renderItems( items) {
    return( typeof items === "undefined")
      ? html`<p>Loading…</p>`
      : items.map(([ firstItem, ...items]) =>
          html`
            <h3 id="${firstItem.id}">${firstItem.text}</h3>
            <ul>
              ${items.map(( item) =>
                html`<li id="${item.id}">${item.text}</li>`)}
            </ul>`);
  }

  render() {
    return html`
      <div class="summary">
        ${this.renderItems( this.items)}
      </div>`;
  }
```

### Under the cover

Lit-HTML will handle the composition of the nested `html` templates.

And most importantly:

* Lit-Element will automatically re-render our template, as soon as the `items` property will have been set! We had nothing to do, but declare the property; and use it in the template.
* Lit-HTML will cleverly re-render only the parts of the DOM, that need to be updated, when our properties change.

In this example, only the `<div class="summary">` would stay in place in the DOM, upon initial render – so Lit-HTML's clever re-rendering optimization is of little impact, when we receive the data-structure for the first time.

However, for subsequent updates, there is a [`repeat` directive](https://lit-html.polymer-project.org/guide/template-reference#repeat) we could use, to limit the re-rendering to the sole items, that would have changed in our data-structure.

## wcp-dynamic-summary.js

Yet we need to fetch the JSON document and set the new `items` properties, that we just added to our `‹wcp-select›` and `‹wcp-summary›` custom elements, with the fetched data.

### Define `src` attribute/property and `data` property

We'll handle this in a new `‹wcp-dynamic-summary›` custom element, that will wrap both `‹wcp-select›` and `‹wcp-summary›` and feed them with the data:

```
class WCPDynamicSummary extends LitElement {

  static get properties() {
    return {
      src: { type: URL },
      data: { type: Object, attribute: false }
    };
  }

  render() {
    return html`
      <wcp-select .items="${this.data}" @selected="${this.onSelected}"></wcp-select>
      <wcp-summary .items="${this.data}"></wcp-summary>
    `;
  }
  …
}

customElements.define( "wcp-dynamic-summary", WCPDynamicSummary);
```

### Observed property only vs observed attribute/property

Note a specificity of this design, `data` is an observed property only:

* the `src` property is implicitely linked to a `src` attribute on the custom element – by design and default behavior of Lit-Element;
* the `data` property however is explicitely defined as a sole property, with no bound attribute on the custo element.

Both properties are observed by Lit-Element for changes; but only the `src` property is exposed as an attribute, which is also observed for changes, as « part of its API » to receive a value from « user land ».

By the way, we could have done the same for the `items` properties of the `‹wcp-select›` and `‹wcp-summary›` elements: we won't pass any data thru their attributes, as it is inefficient, but directly set their properties, as you'll see soon. But one thing at a time.

### Initialize the properties

We suggest to always explicitely initialize your properties in the constructor of your custom element class, even if it is with the implied `undefined` value; it documents your assumptions:

```
  constructor() {
    super();
    this.src = undefined;
    this.data = undefined;
    this._summaryElement = undefined;
  }
```

These values will be set on the properties before the custom element renders first; and it will render once with those values. So your template should handle the `undefined` values — but Lit-Element and Lit-HTML have [well defined behavior](https://lit-element.polymer-project.org/guide/properties#conversion) for `null` and `undefined` values.

Remember to call `super()` first in your constructor, or your element won’t render at all.

### Fetch the data

Once the `src` attribute value has been captured by Lit-Element, we'll fetch the JSON from the URL contained in that attribute and set the result in the `data` property.

Capturing the value of the `src` attribute can be handled in the `updated()` method, which Lit-Element will invoke for us, as we've seen earlier:

```
  updated( changedProperties) {
    if( changedProperties.has( "src")) {
      …
    }
    …
  }
```

Fetching is an asynchronous process, so we'll define our `updated()` method as `async` and handle the promise chain with the `await` ES6 statement:

```
  async updated( changedProperties) {
    if( changedProperties.has( "src")) {
      const response = await fetch( this.src);
      this.data = await response.json();
      …
    }
  }
```

Can't be simpler actually.

### Change detection on compound objects

A trick here; `response.json()` would return a new object for every `fetch()` – that is, a new object reference, which Lit-Element will observe as a change.

However, if you'd happen to mutate your data in-memory and return the same object reference, you would need to instruct Lit-Element to re-render, by calling `this.requestUpdate()`; we provided this step explicitely, as an example:

```
  async updated( changedProperties) {
    if( changedProperties.has( "src")) {
      …
      this.data = await …(in-memory mutation of a cached data object)…
      this.requestUpdate();
    }
  }
```

### Feed the data in `‹wcp-select›` and `‹wcp-summary›`

You have nothing to do, actually: as Lit-Element observes the the `data` property and notice a change in the object reference (or because you called `this.requestUpdated()`), it'll re-render your template and set the `.items` properties of both `‹wcp-select›` and `‹wcp-summary›` elements with the data-structure:

```
  render() {
    return html`
      <wcp-select .items="${this.data}" …></wcp-select>
      <wcp-summary .items="${this.data}"></wcp-summary>
    `;
  }
```

The `.items` notation denotes a special [binding type](https://lit-html.polymer-project.org/guide/template-reference#binding-types), that will have Lit-HTML set the `items` _properties– of the `‹wcp-select›` and `‹wcp-summary›` elements directly, without setting their `items` _attributes_ — avoiding serialization/deserialization of a complex data-structure.

### Finishing touch — handle summary item selection

And that's it: we fetched a data-structure describing our summary from a JSON document and handed it to the ‹wcp-summary› and ‹wcp-select› elements, which re-render when they receive the data-structure.

We still need to move the data-binding logic, that we defined in step 04, from the `index.html` page to our new `‹wcp-dynamic-summary›` custom element.

Let's add a private property to our class, to store a reference to the `‹wcp-summary›` element:

```
  constructor() {
    super();
    this._summaryElement = undefined;
  }
```

We retrieve the reference and store it, once the template has rendered to the Shadow DOM for the first time. The `firstUpdated()` method will be called once by Lit-Element on your class, at a time where it rendered the template to the Shadow DOM for the first time; so you know the `‹wcp-summary›` lives there for sure:

```
  firstUpdated() {
    this._summaryElement = this.shadowRoot.querySelector( "wcp-summary");
  }
```

Note we don't declared the `_summaryElement` property to Lit-Element: we don't need Lit-Element to observe it for changes.

Finally, we'll set the `active` property of the ‹wcp-summary› element, when an item is selected on the `‹wcp-select›` element. This is the logic defined in previous step 04, unchanged:

```
  render() {
    return html`
      <wcp-select … @selected="${this.onSelected}"></wcp-select>
      …
    `;
  }

  onSelected( event) {
    this._summaryElement.active = event.detail.selected;
  }
```

This completes the serie of live-coding examples, around the ‹wcp-select› and ‹wcp-select› custom elements. Hope you enjoyed them and found them useful.

Feel free to report issues, suggestions and requests for enhancements in the [A Primer on Web Components](https://github.com/petitatelier/web-components-primer/) repository on GitHub.

---

[View it on Glitch](https://wcp-summary-step05.glitch.me/) /
[Remix it on Glitch](https://glitch.com/edit/#!/wcp-summary-step05)
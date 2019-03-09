[« Future, Faster: Unlock the Power of Web Components with Polymer (Google I/O '17) »](https://www.youtube.com/watch?v=cuoZenpQveQ&feature=youtu.be&t=1044) Kevin P. Schaaf, at min. 18:35:

```
customElements.define( "my-element", class extends HTMLElement{
  connectedCallback() {
    this.attachShadow( { mode: "open" })
      .innerHTML = "Web Components are 🚀🦄✨ native!"
  }
});
```

With CSS styling — scoped to the Shadow DOM:

```
customElements.define( "my-element", class extends HTMLElement{
  connectedCallback() {
    this.attachShadow( { mode: "open" })
      .innerHTML = "<div>Web Components are 🚀🦄✨ native!</div><style>div { color: green }</style>"
  }
});
```

---

Variant with ES6 class definition and constructor:

```
class MyElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow( { mode: "open" })
      .innerHTML = "Web Components are 🚀🦄✨ native!"
  }
}

customElements.define( "my-element", MyElement);
```


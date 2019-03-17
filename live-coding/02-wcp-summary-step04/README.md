[« prev](../02-wcp-summary-step03/) [next »](../02-wcp-summary-step05/)

# 4. Dataflow – Vanilla data-bindings

Part of the live-coding examples of the talk [A Primer to Web Components](https://web-components-primer.firebaseapp.com).

---

![Dataflow – Data-out via custom-event, data-in via attribute](../../../public/images/wcp-summary-dataflow.svg)

**Data-out** – when you pick an item from the `‹wcp-select›` element, it will dispatch an `on-change` custom event, with the identifier of the selected item in its detail.

**Data-binding** — the listener on this enclosing HTML page will respond to the `on-change` custom event, retrieve the identifier of the selected item and set it as the value of the `active-index` attribute of the `‹wcp-select›` element.

**Data-in** — The `‹wcp-summary›` element is observing its `active-index` attribute and will use the new value to highlight the selected summary item.

---

[View it on Glitch](https://wcp-summary-step04.glitch.me/) /
[Remix it on Glitch](https://glitch.com/edit/#!/wcp-summary-step04)
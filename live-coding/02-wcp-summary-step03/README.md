[« prev](../02-wcp-summary-step02/) [next »](../02-wcp-summary-step04/)

# 3. Using Web Components – Lit-Element Data-bindings

Part of the live-coding examples of the talk [A Primer to Web Components](https://web-components-primer.firebaseapp.com).

---

![Bindings – Attribute reflected to property](../../public/images/wcp-summary-bindings.svg)

## Essentially, this example shows

* Definition of an observed attribute (`active-index`) and property (`active`)
* Automatic attribute to property reflection (`active-index` ⟶ `active`)
* Reacting to a change of the property value (`active`)
* Property to attribute reflection (`active` ⟶ `active-index`)

## In detail, the observed attributes and properties of ‹wcp-summary›

We defined a new **`active-index`** _attribute_ on our **‹wcp-summary›**
element. And the attribute will automatically be bound by Lit-Element
to the **`active`** _property_ of the WCPSummary class instance.

Both `active-index` attribute and `active` property are being declared
to Lit-Element, by a static `properties()` getter; Lit-Element will
register their type and consequently observe changes for both
_attribute_ and _property_:

1. Changes to the `active-index` _attribute_ will be automatically
propagated to the `active` _property_ by Lit-Element; they are said
to be bound to each other. Once the `active` property was updated,
the HTML template that is defined by `render()` gets re-rendered.
2. Changes to the `active` _property_ are reflected to the `active-index`
_attribute_ — by a setter automatically defined by Lit-Element.

We also observe these changes, in logic we defined:

In the `updated()` method, we defined logic to respond to a change
to the `active` property's value: when it receives a new value —
which is supposed to be the id of one of the ‹h1› or ‹li› items
of the summary —, it will add an `active` attribute to that
identified ‹h1› or ‹li› item.

The call to the `updated()` method is part of Lit-Element's
lifecycle: Lit-Element will call it with the list of properties
that changed, after it observed one or more change to the values
of properties, and after the template was newly rendered.

A change to the `active-index` _attribute_ would usually come from
the « outside world » of the element — that is, logic from the DOM
around it. You can consider attributes being observed as « the
API » of a Web Component. Whereas changes to the values of observed _properties_ would usually come from the custom element itself.

Yet there are cases where you would also consider some _property_
as part of « the API » of a Web Component. _Attribute_ value indeed
need to    be parsed and converted to _property_ values — which comes
at a  cost, for big datastructures, such as tables or complex objects.
You'll see such a case in [step 5](https://glitch.com/edit/#!/wcp-summary-step05?path=README.md) of this live-coding example.

There would be much more to say about bindings between attributes
of an element and the properties of its class instance; a glimpse:

* you can define a _property_ as being observed by Lit-Element, without
  being bound to an _attribute_ (`{ type: …, attribute: false }`);
* you can decide that changes to observed _properties_ are being
  **reflected** to the _attribute_ they're bound to
  (`{ type: …, reflect: true }`) – or not, in which case the attribute
  always keeps the value that is defined in the DOM; while the property
  holds a different updated value.

---

[View it on Glitch](https://wcp-summary-step03.glitch.me/) /
[Remix it on Glitch](https://glitch.com/edit/#!/wcp-summary-step03)
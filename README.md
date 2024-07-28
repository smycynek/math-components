# MathComponents

# Work in Progress

# Workflow:

To create a new operation type:

1) Create a subclass of `ExpressionData` in `expressionData.ts`

2) Create a corresponding angular component similar to `addition-operation` in the `expression-components` dir.

3) Update the `getMathComponent()` method to map this data class to the component in `math-container-component.ts`

4) Create a method to return some sample data from your new `ExpressionData` derived class, and pass that data to
`math-exp`, e.g.
 `<math-exp [mathData]="your data here" />`

# Questions/TODO

1)  Can I create a better way (a class factory) to choose the component to render rather than relying on type name?
I looked at using a <code>Record</code> map, but that seemed like a lot of overhead.

2) I tried to save some code duplication by putting some common template code (the r-value '= 2' part) into a separate template,
 but it required me making several different `<math>` elements and made items spacing difficult, so went back to a single component with one template.

3) Relative text sizes for fractions are odd on mobile for some reason.

4) Is there a simpler way to do this overall?

# Live demo

https://stevenvictor.net/math-components/


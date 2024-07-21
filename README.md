# MathComponents

# Work in Progress

# Workflow:

To create a new operation type;

1) Create a subclass of `ExpressionData` in `expressionData.ts`

2) Create a corresponding angular component similar to `addition-operation` in the `expression-components` dir.

3) Update the `getMathComponent()` method to map this data class to the component in `math-container-component.ts`

4) Create a method to return some sample data from your new `ExpressionData` derived class, and pass that data to
`math-exp`, e.g.
 `<math-exp [mathData]="your data here" />`

Note: the expression rendered is split across two components that take the same inputs, MathContainerComponent and
RValueComponent.  This is to avoid duplicating the r-value template code in each math component.

# Questions/TODO

1)  Can I workaround the use of `any` here?
```
export class MathContainerComponent {
  @Input() expressionData!: any;
```

I don't know enough about how @Input() and angular mappings using attributes and transforms work to say.

2)  Can I create a better way (a class factory) to choose the component to render?

3)  Is there a simpler way to do this overall?  I would just like to pass a simple data payload
to a component (ideally a strongly typed Typescript object, but a generic object with key-value pairs is okay)
and have that component choose the correct angular template and logic to display it.  This might be about as good
as we can get, but if there is something more direct with less code or overhead, that would be great.

4) I tried to save some code duplication by putting some common template code into a separate template,
see `r-value` and `prefixOp`, but it required me making several different `<math>` elements and made items spacing difficult, so went back to a single component with one template.

5) For some reason, building with optimization on causes issues rendering math.  Currently investigating.

# Live demo

https://stevenvictor.net/math-components/


# MathComponents

Workflow:

To create a new operation type;

1) Create a subclass of `ExpressionData` in `expressionData.ts`

2) Create a corresponding angular component similar to `addition-operation` in the `expression-components` dir.

3) Update the `getMathComponent()` method to map this data class to the component in `math-container-component.ts`

4) Create a method to return some sample data from your new `ExpressionData` derived class, and pass that data to
`math-exp`, e.g.
 `<math-exp [mathData]="your data here" />`

Questions:

1) Is there any way to reduce the duplication of:
```
        @if (showRval) {
            @if (displayOp) {
                <mo>
                    {{displayOp}}
                </mo>
            }
            @else {
                <mo>
                    =
                </mo>
            }
            @if (displayRval) {
                <mn>
                    {{displayRval | number}}
                </mn>
            }
            @else {
                <mn>
                    {{value | number}}
                </mn>
            }
        
        }
```
 in all my component subclasses?

Maybe I could use something with `ViewContainerRef.createEmbeddedView`  ?

2)  Can I workaround the use of `any` in 
```
export class MathContainerComponent {
  @Input() expressionData!: any;
```
?  I don't know enough about how @Input() and angular mappings using attributes and transforms work to say.

3)  Can I create a better way (a class factory) to choose the component to render?

4)  Is there a simpler way to do this overall?  I would just like to pass a simple data payload
to a component (ideally a strongly typed Typescript object, but a generic object with key-value pairs is okay)
and have that component choose the correct angular template and logic to display it.  This might be about as good
as we can get, but if there is something more direct with less code or overhead, that would be great.




# Tavneet-Kaur-Gill_Front-End

Here are the answers to the queries asked for the assignment:

1. This React code creates a straightforward list component that lets you render a list of things and choose one at a time. SingleListItem and ListComponent are the component's two sub-components. The SingleListItem component renders a single item in the list and is a useful component. Four props are required:

 1) index: a number indicating the position of the item in the list 
 2) isSelected:Whether an item is selected or not is indicated by this boolean value 
 3) onClickHandler: When an item is clicked, a method called onClickHandler is called.
 4) text: a string encoding the item's text content
 
Another useful component that renders the complete list is the ListComponent. It only needs one prop
items (an array of objects, each of which represents a list item and includes a text property containing the text that will be displayed in that item).
Using the useState hook, the ListComponent keeps track of the currently selected item in an internal state. Using the handleClick function, it initialises the selectedIndex to null and updates it when a user clicks on an item in the list.
The SingleListItem component is used to draw each item in turn in the ListComponent's render method after mapping over the items array. The SingleListItem component receives the onClickHandler prop in order to handle clicks on the item. When the item's index matches the selectedIndex, the isSelected prop is set to true; otherwise, it is set to false. Finally, in order to enhance efficiency and prevent rendering problems, the key prop is set to the item's index.

2. Below are the problems which are there in the code: 
   a) In the ‘WrappedSingleListItem’ component, the’onClick’ prop should be called as the function rather being called immediately. To correct this, ‘onClick’ prop         is defined as a function which calls ‘onClickHandler’ function with ‘index’ as argument.
   
   b) In the ‘WrappedListComponent’ component, the ‘setSelectedIndex’ function is assigned to ‘selectedIndex’ and vice-versa, so to fix this we change useState to         useState(null).
   
   c) In the ‘WrappedListComponent’ component, the ‘propTypes’ is not used correctly. To solve this array should be changed to arrayOf and shapeOf to shape.
   
   d) In the ‘WrappedListComponent’ component, the ‘isSelected’ prop passed to ‘SingleListItem’ is not defined correctly. To indicate if the current item is selected       or not it should be ‘isSelected={selectedIndex===index}’.
   
3. In the file attached in this repository, I have fixed the errors and optimized the code and also modified it using some CSS.



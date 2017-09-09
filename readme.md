Javascript Form Validations

Most of the common form validations that are required in forms validating, these are the genralised functions written to make the task easier.

Function prototype

function_name( inputidname , blankdivid );

The functions each take in two values the input field ID which needs to be evaluated and one div or span element id which is an empty span or div placed under the input field. It is used to mainly show the error message.

These functions can be called using various event in the html forms.
The events that are preferred in these sort of validations are listed below. One can choose according to their needs
1. onkeydown-->	The event occurs when the user is pressing a key
2. onkeypress-->	The event occurs when the user presses a key
3. onkeyup-->	The event occurs when the user releases a key
4. onblur-->	The event occurs when an element loses focus
5. onchange-->	The event occurs when the content of a form element, the selection, or the checked state have changed (for <input>, <keygen>, <select>, and <textarea>)
6. onfocus-->	The event occurs when an element gets focus
7. onfocusin-->	The event occurs when an element is about to get focus
8. onfocusout-->	The event occurs when an element is about to lose focus
9. oninput-->	The event occurs when an element gets user input
10. oninvalid-->	The event occurs when an element is invalid
11. onreset-->	The event occurs when a form is reset
12 . onsearch-->	The event occurs when the user writes something in a search field (for <input="search">)
13. onselect-->	The event occurs after the user selects some text (for <input> and <textarea>)

More about the events can be found here
https://www.w3schools.com/jsref/dom_obj_event.asp

And inorder to perform all the checks once before submitting the form to the server side, a new function validate is written wherein all the functions are called individually checking all the input fields. The form is then submitted if and only if all the fields are properly validated. And if not, error messages are displayed infront of the input fields and the focus is switched to the ones that are incorrect.

An attribute onsubmit="return validate()" needs to be added to use these validations before submitting the form to server

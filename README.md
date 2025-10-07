# script about "Timer with life cycle control"

Create a Timer class component that:
Displays the number of seconds that have passed since the component was mounted.
Has Start, Stop, and Reset buttons.
Use lifecycle methods:
componentDidMount – to start an interval that increments the counter every second.
componentDidUpdate – to print the message "Updated: <value>" to the console when the number of seconds changes.
componentWillUnmount – to clear the interval when the component is removed.
Add an Unmount Timer button that completely removes the component from the DOM (via conditional rendering in the parent component).
Additionally:

Implement saving the timer state in LocalStorage (so that the time is restored when the page is reloaded).
Do some styling via CSS (for example, when the timer is stopped, the numbers turn red).
Do your homework using class and functional components.

That is, there should be 2 versions of the solution: class and functional
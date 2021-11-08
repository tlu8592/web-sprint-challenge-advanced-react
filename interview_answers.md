# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

A stateful component has state, handling constantly changing data. For the functional component, it is
there to render what was given from the state data passed down as props. Functional components are generally stateless. However there was a React upgrade allowing the use of useState hook to manage state in functional
components

2. When does a componentWillMount function be called? What about a componentWillUpdate?

The componentWillMount function gets called after a component is mounted. componentWillUpdate
is invoked right after an updating (in state for example) took place. It does not get called for
the initial render like componentWillMount.

3. Define stateful logic.

Stateful logic refers to a logic built in a component. These are the following examples of stateful logic:
helper functions that change or toggle state and handle events (i.e., clicking, keypress), a state variable.

4. What are the three step of creating a successful test? What is done in each phase?

The three step method to create successful tests are arrange, act, and assert. In arrange, the component that
is being rendered for testing is identified. For act, elements are being acquired and an intended user action is simulated using the userEvent library and a method such as click or type. Assert involves expectations of the test results (what's suppposed to be in the document, how many elements should be in the document).

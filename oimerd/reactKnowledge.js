///////////////////////////////////////////////////////////////////////////////////////
Lifecycele Methods:
1.RENDER
Constructor: where you have this.state
Render: where you return JSX. Mandatory. you cannot set state here! will end up in infinite loop!

componentDidMount: runs after component is mounted. notidy that DOM is ready now, we can make change accordingly.

2.RE-RENDER
shouldComponentUpdate: here we decide if we really need to update a component, we could be setting same state - same result? we make that decision inside this lifecycle method, compare previous state and new state. return true - render, false - no render.
(*prevents component from re-rendering!*)

componenetDidUpdate:like name

///////////////////////////////////////////////////////////////////////////////////////

• WHY arrow function in React?
note that render() is a class method but functions that we come up with is class property! clickHandle is also not method, it's a class property
in a arrow function, this binds to the environment outside of the arrow fn. this way we dont hav to write this.fnName = this.fnName.bind(this). we want this to be the class

• WHY setState is async?
Bc setStates are batched for performance gains.
Also allows you to use a callback fn after you use setState for example:

this.setState({ foo: bar }, () => {
    return "I came after the setState because of async!" }
);

• Explain error boundaries
catch errors by using error boundaries, this is similar to catch blocks
<ErrorBoundaryComp> // this is the errboundary, u can name it anything
  <MycompToRender/>
</ErrorBoundaryComp>
- life cycle hooks to use with error boundaries:
1. static getDerivedStateFromError - when err happens, u cast error and change state accordingly, here you can have a fallback compoennt, where u can have another component to render itself, such as a message saing theres error
2. componentDidCatch - you can log the error thats happening


• Best lifecycle method for making API calls?
componentDidMount.
when u make API call, it gets some data from server and it wll update the state, and then u have to re-render the component. when u make the call, it might take longer, u wanna make sure your DOM is already ready. ComponentDidMount ensures that, ur DOM is ready!

• Why would you use React in your project?
functional programming, allows u to do alot of Javascript, good for JS savvy

• What is CSS-In-JS pattern?
css is global, changing some part of css can change other part unintentionally, this is a problem.
pass css as JS, inline css, also conditional render( another advantage) by props.

///////////////////////////////////////////////////////////////////////////////////////

* WHAT is react hooks?
- hooks are functions lets you "HOOK into" STATE and LIFECYCLE features from FUNCTION componenents.

* WHY react hooks?
- diff way of doing same thing
- no more complex lifecycle methods
simpler code.
- hooking into component is much easier

* Rules of React hooks
- only call Hooks at top level
- dont call hooks inside loops conditions or nested functions
- dont call hooks inside class component

* Stages of Life cycle
- initial render
- updates
- unmount

* - INITIAL RENDER
componentDidMount
useEffect(() => {}, [])
// this not only initial render, it also updates according to what is in the array.
// it runs firts time and every time
// componentDidMount in classes will only run the firts tine

* - UPDATES
componentDidUpdate

///////////////////////////////////////////////////////////////////////////////////////
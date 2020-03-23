- [ ] Why would you use class component over function components (removing hooks from the question)?

Class components have been around for a long time, so we are likely to jump into jobs where the existing codebase is written in class components, instead of functional ones. Plus, before hooks came along, class components were the best way to handle state that we needed to change. 

- [ ] Name three lifecycle methods and their purposes.

  1. render() - The one and only required method in a class component. Returns React elements, arrays, fragments, portals, strings, numbers, booleans, or null. 
  2. constructor() - Must call super(props) inside it to define props and state. Initializes local state by assigning an object to this.state, and binds event handler methods to an instance.
  3. componentWillUnmount() - Invoked immediately before a component is unmounted and destroyed. This is where you should perform an necessary cleanup, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount(). 

- [ ] What is the purpose of a custom hook?

Custom hooks are a way to reuse stateful logic (such as setting up a subscription, and remembering the current value). Every time you use a custom hook, all state and effect inside of it are fully isolated. They let us "hook" into the React state and lifecycle features from functional components. These hooks allow us to easily manipulate the state of our functional component without needing to convert them into class components.

- [ ] Why is it important to test our apps?

Tests allow us to produce software (or websites) with better quality. This better-quality code is more maintainable as a product scales and grows, which is less expensive (with time and money) in the long run. It also helps us, as developers, reason better about what we do. 
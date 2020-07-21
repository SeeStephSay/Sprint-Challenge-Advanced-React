- [X] Why would you use class component over function components (removing hooks from the question)?

A lot of existing codebases are written with class components, even though the makers of React discourage their use since the creation of hooks. Before hooks came into the picture, class components were written so that state could be updated.

- [X] Name three lifecycle methods and their purposes.

1. render() - the only required method inside a React class component. It renders your component to the UI.
2. ComponentDidMount() - is called as soon as the component is mounted and is a good place to initiate API calls. It also allows the use of setState, which render() does not. This will update state and cause the component to render again, but it happens before the browser updates it, so the user doesn't see it happen twice. This can cause performance issues, so it's recommended to assign states in the constructor().
3. ComponentWillUnmount() - is called right before the component is unmounted, and is where we would place any cleanup actions, like clearing timers, cancelling API calls, or clearing caches in storage.

- [X] What is the purpose of a custom hook?

Custom hooks are a way to reuse stateful logic (such as setting up a subscription, and remembering the current value). Every time you use a custom hook, all state and effect inside of it are fully isolated. They let us "hook" into the React state and lifecycle features from functional components. These hooks allow us to easily manipulate the state of our functional component without needing to convert them into class components.

- [X] Why is it important to test our apps?
We test our apps to make sure that they pass basic functionalities that we may not see, as we are too close to our projects. It's like having another automated pair of eyes to give it a good once over. Even New York Times best-selling authors need an editor to go over their work and provide feedback, in one way or another. This process makes a better end product, which is less expensive to maintain over time. :)
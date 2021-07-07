- [ ] Why would you use class components over function components (removing hooks from the question)?

A lot of existing codebases are written with class components, even though the makers of React discourage their use since the creation of hooks. Before hooks came into the picture, class components were written so that state could be updated.


- [x] Name three lifecycle methods and their purposes.

* render() - the only required method inside a React class component. It renders your component to the UI.
* ComponentDidMount() - is called as soon as the component is mounted and is a good place to initiate API calls. It also allows the use of setState, which render() does not. This will update state and cause the component to render again, but it happens before the browser updates it, so the user doesn't see it happen twice. This can cause performance issues, so it's recommended to assign states in the constructor().
* ComponentWillUnmount() - is called right before the component is unmounted, and is where we would place any cleanup actions, like clearing timers, cancelling API calls, or clearing caches in storage.


- [ ] What is the purpose of a custom hook?
- [ ] Why is it important to test our apps?
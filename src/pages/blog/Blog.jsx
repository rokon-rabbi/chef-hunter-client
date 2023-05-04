import React from "react";
const Blog = () => {
  
  return (
   
        <div className="container text-gray-800 font-semibold leading-7 text-lg mx-auto">
        <h2 className="text-2xl font-bold m-10 bg-amber-200 w-fit mx-auto rounded-md text-center">
            Questions and Answers
        </h2>
        <ul className="divide-y divide-gray-400">
            <li className="p-4  bg-amber-50 rounded-md">
            <h3 className="text-lg font-semibold bg-amber-200 w-fit rounded-sm">
                Tell us the differences between uncontrolled and controlled
                components.?
            </h3>
            <p className="mt-2">
                A controlled component is a component where React controls the value
                of the input element. This means that the value of the input is
                managed by the component's state, and any changes to the input value
                are handled by a change event handler that updates the component's
                state. In a controlled component, the value of the input is always
                consistent with the component's state.State management: In
                controlled components, the value of the input element is managed by
                the component's state. In uncontrolled components, the value is
                managed by the browser's DOM. Event handling: In controlled
                components, changes to the input value are handled by a change event
                handler that updates the component's state. In uncontrolled
                components, changes to the input value are handled by the browser's
                default behavior. Accessing input values: In controlled components,
                the current value of the input element is always available in the
                component's state. In uncontrolled components, the value of the
                input element can be accessed using a ref.
            </p>
            </li>
            <li className="p-4  bg-amber-50 rounded-md">
            <h3 className="text-lg font-semibold bg-amber-200 w-fit rounded-sm">
                How to validate React props using PropTypes?
            </h3>
            <p className="mt-2">
            In React, PropTypes is a package that allows you to define the type and shape of the props that a component should receive. By using PropTypes to validate props, you can catch errors early on and ensure that your components receive the correct types and shapes of props.

    To use PropTypes, you need to import the package in your component and define the propTypes property on the component. The propTypes property should be set to an object that defines the expected type and shape of your props
            </p>
            </li>
            <li className="p-4  bg-amber-50 rounded-md">
            <h3 className="text-lg font-semibold bg-amber-200 w-fit rounded-sm">
            Tell us the difference between nodejs and express js?
            </h3>
            <p className="mt-2">
            Node.js is a runtime environment that allows developers to use JavaScript to build server-side applications. It provides a JavaScript runtime environment outside the browser and allows developers to use JavaScript to build back-end services and applications. Node.js comes with a built-in set of libraries and APIs, which provide functionality for building server-side applications. <br /> <br />
            Express.js, on the other hand, is a web application framework that runs on top of Node.js. It is a minimalist and flexible framework that provides a set of features and tools for building web applications and APIs. Express.js simplifies the process of building server-side applications by providing a simple, easy-to-use API for handling HTTP requests and responses, routing, middleware, and more.
                <br />
            </p>
            </li>
            <li className="p-4  bg-amber-50 rounded-md">
            <h3 className="text-lg font-semibold bg-amber-200  w-fit rounded-sm">
            What is a custom hook, and why will you create a custom hook?
            </h3>
            <p>
            In React, a custom hook is a function that starts with the prefix "use" and allows you to extract reusable logic from a component into a standalone function. Custom hooks are a powerful tool that allows you to share logic between components and reuse code in a more efficient way.{" "}
                <br /> <br />
                Reusing Logic: You can use custom hooks to extract logic that is shared between components and reuse it in multiple places throughout your application. This can make your code more modular, easier to maintain, and less prone to bugs. <br /> <br />
                Encapsulating State: Custom hooks can encapsulate stateful logic and provide a clean interface for other components to interact with that state. This can make your code more organized and easier to reason about.
                <br/>
                Encapsulating State: Custom hooks can encapsulate stateful logic and provide a clean interface for other components to interact with that state. This can make your code more organized and easier to reason about.
            </p>{" "}
            <br />
            </li>
        </ul>
        </div>

  );
};

export default Blog;

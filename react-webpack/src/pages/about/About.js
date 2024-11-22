
import React from 'react';


//classes produces a lot of code and are harder to read, also they are not as flexible as functional components

//you can use classes if you need to use lifecycle methods or state

//another thing to have in mind is that classes are not supported in React 17, so you should use functional components

class About extends React.Component {

  render() {
        return (
        <div>
            <h1>About</h1>
            <p>This is the about page</p>
        </div>
        );
    }

    //lifecycle methods
    componentDidMount() {
     console.log('About component mounted');
    }

    componentWillUnmount() {
     console.log('About component will unmount');
    }
}
export default About;
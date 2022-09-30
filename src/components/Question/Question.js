import React from 'react';

const Question = () => {
    return (
        <div className='text-center mt-5'>
            <div style={{ backgroundColor: 'aliceblue' }} className="p-3">
                <h5>1. How does react work?</h5>
                <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
            </div>
            <div style={{ backgroundColor: 'lightgray' }} className="p-3">
                <h5>2. What is the difference between props and state?</h5>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
            </div>
            <div style={{ backgroundColor: 'aliceblue' }} className="p-3">
                <h5>3. What reason why useEffect use except data load from api?</h5>
                <p>By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.</p>
            </div>
        </div>
    );
};

export default Question;
import React from 'react';

// functional component
// let MyComp = () => {
//     return (
//         <div>
//             <h1>My Component</h1>
//             <p>Paragraph </p>
//             <ul>
//                 <li>Li Tag</li>
//                 <li>Ajay</li>
//             </ul>
//         </div>
//     );
// };

//class component

class MyComp extends React.Component {
    state = {
        someNUmber: 0,
    };
    render = () => {
        return (
            <div>
                <h1>{this.state.someNUmber}</h1>
                <button
                    onClick={() => {
                        this.setState({
                            someNUmber: this.state.someNUmber + 1,
                        });
                    }}
                >
                    increment
                </button>
                <button
                    onClick={() => {
                        this.setState({
                            someNUmber: this.state.someNUmber - 1,
                        });
                    }}
                >
                    decrement
                </button>
            </div>
        );
    };
}

export default MyComp;

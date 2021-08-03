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
        sendNumber: 3,
    };
    render = () => {
        return (
            <div>
                <h1>Class Based Component</h1>
                <h2>{this.state.sendNumber}</h2>
            </div>
        );
    };
}

export default MyComp;

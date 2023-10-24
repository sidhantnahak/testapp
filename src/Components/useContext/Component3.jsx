import React, { useContext } from 'react'
import { userContext } from '../../App';
// import userContext from './Context';

// const Component3 = ({user}) => {
//     return (
//         <div>
//             <h1>I'm Component3 and user is {user}</h1>

//         </div>
//     )
// }

const Component3 = () => {

    const user=useContext(userContext);
    return (
        <div>
            <h1>I'm Component3 and user is {user} </h1>

        </div>
    )
}

export default Component3
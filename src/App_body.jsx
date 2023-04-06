import React, { useState } from 'react';


function AppBody() {

    const [count, setCount] = useState(0);
    const Addition = () => {
        setCount(count+1);
    }
    const Deduction = () => {
        if (count==0) {
            alert("Nothing more to deduct!");
        } else {
            setCount(count-1);  
        }
        
        
    }
    return(
        <div>
            <h1>
                {count}
            </h1>
            <button className="plus" onClick={Addition}>
                +
            </button>
            <button className="minus" onClick={Deduction}>
                -
            </button>
        </div>
    )
}

export default AppBody;
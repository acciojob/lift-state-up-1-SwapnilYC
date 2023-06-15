import React, { useState } from "react";
import ReactDOM from "react-dom";
import Child from "./Child"

const Parent = () => {
    let [showModal , setShowModal] = useState(false);

    function showModalHandler(){
        setShowModal(true);
    }

    return(
        <div className="parent">
            <h1>Parent Component</h1>
            <Child modal={showModal} modalHandler={showModalHandler}/>
        </div>
    );
}


export default Parent;
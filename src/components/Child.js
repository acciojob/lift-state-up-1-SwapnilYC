import React from "react";
import ReactDOM from "react-dom";

const Child = ({modal, modalHandler}) => {
    return(
        <div>
            <h2>Child Component</h2>
            <button onClick={modalHandler}>Show Modal</button>
            {modal && (
                <>
                <h3>Modal Content</h3>
                <p>This is the modal content.</p>
                </>
            )}
        </div>
    );
}

export default Child;
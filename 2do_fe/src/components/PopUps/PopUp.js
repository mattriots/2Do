import React from 'react';


function PopUp (props) {
    return(props.trigger) ? (
        <div>
            <div className="formContainer">
            {props.children}
            </div>
        </div>
    ) : ""
}

export default PopUp
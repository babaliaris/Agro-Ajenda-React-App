import React from "react";
import ReactDOM from "react-dom";
import CenteredModalBody from "./centered-modal-body/CenteredModalContainer";

type CenteredModalProps = {
    children: React.ReactNode
    onClose: ()=>void,
    style?: React.CSSProperties
};

function CenteredModal({children, onClose, style}: CenteredModalProps)
{
    return (
        <React.Fragment>
            {
                ReactDOM.createPortal(<CenteredModalBody children={children} onClose={onClose} style={style}/>, 
                    document.getElementById("id-centered-modal") as HTMLElement)
            }
        </React.Fragment>
    );
}

export default React.memo(CenteredModal);
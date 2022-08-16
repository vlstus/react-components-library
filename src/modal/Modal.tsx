import React, {ReactNode} from "react";

const Modal = (props: { children?: ReactNode[] | ReactNode, isOpen: boolean }) => {
    return (
        <div className='modal-container' style={{display: props.isOpen ? 'block' : 'none'}}>
            {props.children}
        </div>
    );
}

export default Modal;
import { Modal } from 'react-bootstrap';
import React from 'react';

const CustomModal = (props) => {
    return (
        <Modal 
            style={{padding: '0', margin: '0'}}
            show={props?.show}
            size={props?.size || "md"}
            onHide={props?.handleClose}
            centered={props?.centered || "centered"} // true or false
        >
            <Modal.Body style={props?.customCss}>{props?.children}</Modal.Body>
        </Modal>
    );
};

export default CustomModal;
import './tutoModal.css'
import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import {HelpOutline } from "@mui/icons-material"
import ReactPlayer from 'react-player';


export default function ModalEditar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCok = async() => {
        setShow(false)
  };
  

  return (
    <>
        <HelpOutline onClick={handleShow} className="icon"/>
        <Modal show={show} onHide={handleClose} className='modal-wrapper'>
            <Modal.Header className='modalheader'>
            <Modal.Title className='modaltitle'>¿Cómo Editar una Publicación?</Modal.Title>
            </Modal.Header>
            <Modal.Body className='modalbody'>
            <div className="contenedor">
                <ReactPlayer
                url={'https://youtu.be/9cqk_frjlCA'}
                width='100%'
                height='100%'
                controls
                loop
                className="react-player"
                />
                </div>
                    
            </Modal.Body>
            <Modal.Footer className='modalfooter'>
            <button className='modalbuttonGrey' onClick={handleCok}>
                ok
            </button>
            </Modal.Footer>
        </Modal>
    </>
  );
}


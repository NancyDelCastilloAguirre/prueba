import './tutoModal.css'
import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import {HelpOutline } from "@mui/icons-material"
import ReactPlayer from 'react-player';


export default function ModalHablarBOB({Show}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
console.log(Show);
  const handleCok = async() => {
        setShow(false)
  };
  

  return (
    <>
        <HelpOutline show={Show} className="sidebarIcon"/>
        <Modal show={Show} onHide={handleClose}>
            <Modal.Header className='modalheader'>
            <Modal.Title className='modaltitle'>Pagado con éxito!</Modal.Title>
            </Modal.Header>
            <Modal.Body className='modalbody'>
            <div className="contenedor">
                Ten espera tu comida en tu cafeteria!
            </div>
                    
            </Modal.Body>
            <Modal.Footer className='modalfooter'>
            <button className='modalbuttonGrey' onClick={handleCok}>
                Gracias!
            </button>
            </Modal.Footer>
        </Modal>
    </>
  );
}


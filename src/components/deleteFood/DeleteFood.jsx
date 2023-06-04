import './deleteFood.css'
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {Delete, AttachFileOutlined } from "@mui/icons-material"
import { red } from '@mui/material/colors';
import { URL } from '../../URL';
import axios from 'axios';
import jwt_decode from "jwt-decode"


export default function DeleteFood(food) {
  const [show, setShow] = useState(false);
  const token=window.localStorage.getItem("token");
  console.log(token);
  const decodeToken=jwt_decode(token)
  const userId=decodeToken.id;
  //REALMENTE ES EL POST ID
console.log(food.userId._id);

  const handleClose = async() => {
    try {
      const res= await axios.delete(`${URL}api/food/${food.userId._id}`, {
        data:{
          userId:userId
        }
      })
      console.log(res);

    } catch (error) {
      console.log(error);
    }
    setShow(false)
    window.location.reload()
  };
    const handleCok = async() => {
      setShow(false)};
  const handleShow = () => setShow(true);

  return (
    <>
      <Delete onClick={handleShow} sx={{ fontSize:30 }} htmlColor="#ffff"/>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='modalheader'>
          <Modal.Title className='modaltitle'>Eliminar Comida</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modalbody'>
            <p>Cuidado, esta acción es permanente!!!</p>
            <p>¿Seguro de que quieres eliminar la comida?</p>
        </Modal.Body>
        <Modal.Footer className='modalfooter'>
          <button className='modalbuttonGrey' onClick={handleCok}>
            Cancelar
          </button>
          <button className='modalbuttonRedSmall' onClick={handleClose}>
            Eliminar
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


import './editFood.css'
import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {Create, AttachFileOutlined } from "@mui/icons-material"
import { red } from '@mui/material/colors';
import { URL } from '../../URL';
import axios from 'axios';
import jwt_decode from "jwt-decode"


export default function EditFood(props) {
  const [show, setShow] = useState(false);
    const [comida, setComida] = useState(props.postid.food.comida);
    const [contenido, setContenido] = useState(props.postid.food.desc);
    const [precio, setPrecio] = useState(props.postid.food.precio);
    const [file, setFile] = useState(null);
    const [imgP, setImg]=useState(props.postid.food.img)
    const token = window.localStorage.getItem("token");
    
  const [postFood, setPostFood]=useState("")
  const [postCont, setPostcont]=useState("")
  const [postPrecio, setPostPrecio]=useState("")
    const decodeToken = jwt_decode(token);
  
  console.log(token);
  console.log("AQUI ESTÁN LOS PROPS" + props);
  console.log(props.postid.food)

  const handleClose = async() => {
    
    const Apost={
      comida: comida,
      desc: contenido,
      precio:precio,
      img: imgP,
    };

    if (file) {
      console.log("FILEEEE");
      console.log(file);
      var tempI=Date.now() + file.name;
      console.log(tempI);
      setImg(tempI);
      
      var data = new FormData();
      data.set('name', Date.now() +file.name )
      data.set('file', file)
      Apost.img=tempI
      // data.append("file", file);
      // data.append("name", fileName);
      // newPost.img = fileName;
      // console.log("OBJETO POST NUEVO "+newPost.img);
      console.log(data)
      try {
      await axios.post(`https://apisona30-production-635f.up.railway.app/upload`,data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
        
      
        console.log("EL ARCHIVO SE SUBIO A LA CARPETA SIUUU ");
      } catch (error) {
        console.log("NO SE SUBIO A LA CARPETA "+error);
      }
    }


    try {
      await axios.put(`https://apisona30-production-635f.up.railway.app/api/food/${props.postid.food._id}`,Apost)
      window.location.reload() 
    } catch (error) {
      console.log(error);
    }
    setShow(false)
  };
    const handleCok = async() => {
      setShow(false)};


  const handleShow = async() => {
    const info=props.postid.food.comida
      setPostFood(info)
      const cont=props.postid.food.desc
      setPostcont(cont)
      const pre=props.postid.food.precio
      setPostPrecio(pre)
    
    setShow(true)};
   

  return (
    <>
      <Create onClick={handleShow} sx={{ fontSize:30 }} htmlColor="#ffff"/>
      <Modal show={show} onHide={handleCok}>
          <Modal.Header className="modalheader">
            <Modal.Title className="modaltitle">Editar Comida</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modalbody">
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInputText"
              >
                <Form.Label>Tipo Comida</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={postFood}
                  className="forminput"
                  onChange={(e) => {
                  setComida(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea"
              >
              <Form.Label>Desc. de la comida</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder={postCont}
                  className="forminput"
                  onChange={(e) => {setContenido(e.target.value)}}
                />
                <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea"
              >
              <Form.Label>Precio en SOL</Form.Label>
                <Form.Control
                  type="number"
                  placeholder={postPrecio}
                  className="forminput"
                  onChange={(e) => {setPrecio(e.target.value)}}
                />
              </Form.Group>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInputFile"
              >
                <AttachFileOutlined sx={{ color: red[500] }} />
                <Form.Label className="formlabelfile">
                  Adjuntar imagen de la comida
                </Form.Label>
                <Form.Control
                  type="file"
                  className='forminputfile'
                  onChange={(e) => setFile(e.target.files[0])}
                />
            </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer className='modalfooter'>
            <button className='modalbuttonGrey' onClick={handleCok}>
              Cancelar
            </button>
            <button className='modalbuttonRedSmall' onClick={handleClose}>
              Cambiar
            </button>
          </Modal.Footer>
        </Modal>
    </>
  );
}

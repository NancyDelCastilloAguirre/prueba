import "./ShareFood.css"
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { AttachFileOutlined } from "@mui/icons-material";
import { red } from '@mui/material/colors';
import axios from 'axios';
import jwt_decode from "jwt-decode";

export default function ShareFood(){
    const [show, setShow] = useState(false);
    const [asunto, setAsunto] = useState("");
    const [contenido, setContenido] = useState("");
    const [precio, setPrecio] = useState("");
    const [file, setFile] = useState(null);
    const token = window.localStorage.getItem("token");
    const decodeToken = jwt_decode(token);
    const userId = decodeToken.id;
  
    const handleClose = async () => {
      const newPost = {
        comida: asunto,
        desc: contenido,
        precio:precio,
      };
      if (file) {
        var data = new FormData();
        data.set('name', Date.now() +file.name )
        data.set('file', file)
        newPost.img=Date.now() + file.name
        console.log(file);
        // data.append("file", file);
        // data.append("name", fileName);
        // newPost.img = fileName;
        // console.log("OBJETO POST NUEVO "+newPost.img);
        console.log(data)
        try {
        axios.post(`https://apisona30-production-635f.up.railway.app/upload`,data, {
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
        const response = await axios.post(`https://apisona30-production-635f.up.railway.app/api/food`,newPost);
        const postId = response.data._id; // Obtener el ID del post creado
        console.log('FOOD CREADO CON EXITO '+postId);
        window.location.reload()
        // Guardar información en la base de datos y en la carpeta public
      } catch (err) {
        console.log("ERROR AL CREAR EL FOOD", err);
      }
      setShow(false);
      //window.location.reload()
    };
    
    const handleCock = async() => {
      setShow(false);
    };
    
    const handleShow = () => setShow(true);
    return (
      <>
        <button className="modalbuttonRed" onClick={handleShow}>
         Cocinar
        </button>
  
        <Modal show={show} onHide={handleCock}>
          <Modal.Header className="modalheader">
            <Modal.Title className="modaltitle">Nueva Comida</Modal.Title>
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
                  placeholder="Escribe el tipo de comida"
                  className="forminput"
                  onChange={(e) => {
                    setAsunto(e.target.value);
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
                  placeholder="Escribe una pequeña desc. de la comida"
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
                  placeholder="Escribe el precio en moneda SOL"
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
            <button className='modalbuttonGrey' onClick={handleCock}>
              Cancelar
            </button>
            <button className='modalbuttonRedSmall' onClick={handleClose}>
              Publicar
            </button>
          </Modal.Footer>
        </Modal>
      </>
    );

}
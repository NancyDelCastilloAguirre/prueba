import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './PdfList.css';
import axios from 'axios';
import { URL } from '../../URL';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
const PdfList = ({ pdfFiles }) => {

    const onDelete = async(file) => {
      try {
        const res= await axios.delete(`${URL}delete-file`, {
        data:{
          fileName:file
        }
      })
      console.log(res);
      } catch (error) {
        console.log(error);
      }

      try{
        const res=await axios.delete(`${URL}api/pdfCount/delete-file`,{
          data:{
            fileName:file
          }
        })
        console.log(res);
      }catch(err){
        console.log(err);
      }
      window.location.reload()
        };
console.log(pdfFiles);
  return (
    <table>
      <thead>
        <tr>
          <th>Icon</th>
          <th>Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <TransitionGroup component={null}>
          {pdfFiles.map((file) => (
            <CSSTransition key={file.id} timeout={500} classNames="item">
              <tr>
                <td>
                  <PictureAsPdfOutlinedIcon/>
                </td>
                <td>{file}</td>
                <td>
                  <button onClick={() => onDelete(file)}>Delete</button>
                </td>
              </tr>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </tbody>
    </table>
  );
};

export default PdfList;

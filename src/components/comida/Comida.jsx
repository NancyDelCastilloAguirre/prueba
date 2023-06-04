import "./comida.css"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import jwt_decode from "jwt-decode"
import { URL } from "../../URL"
import { PF } from "../../PF"
import EditFood from "../editFood/editFood"
import DeleteFood from "../deleteFood/DeleteFood"
import Pagar from "../pagar/Pagar"
import Pagar2 from "../pagar2/Pagar2"

export default function Comida(props) {


  const food = props.food
  console.log("HSAUSOASHSA");
  console.log(food);

  const token=window.localStorage.getItem("token");
  const decodeToken=jwt_decode(token)
  const rol=decodeToken.role;
 
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">

                </div>
                <div className="postTopRight">
                {rol === "admin" ?
                <>
                    <EditFood className="postTopRightIcon" postid={props} />
                    <DeleteFood className="postTopRightIcon" userId={food} />
                </>
                    :
                    <div></div>
                }
                </div>
            </div>
        </div>
        <div className="comidaCenter">
                <center><img className='comidaImg' src={PF+food.img} alt=""></img></center>
                <div classname="comidaDescripcion">{food?.comida}</div>
                <div classname="comidaDescripcion">{food?.precio} SOL</div>
                <div className="comidaDescripcion">{food?.desc}</div>
        </div>
        <div className="postBottom">
                <div className="postBottomLeft">
                </div>
                <div className="postBottomRight">
                    <Pagar amount={food?.precio}></Pagar>
                </div>
            </div>
    </div>
  )
}

import React from "react";
import "./cafeteriaAdmin.css"
import { useState, useEffect } from "react";
import Autenticado from "../../components/Autenticado/Auntenticado";
import Web3 from "web3";
import axios from "axios";
import jwt_decode from "jwt-decode"
import { useNavigate } from "react-router-dom";
import TopbarAdmin from "../../components/topbarAdmin/TopbarAdmin";
import SidebarAdmin from "../../components/sidebarAdmin/SidebarAdmin";
import ShareFood from "../../components/shareFood/ShareFood";
import Comida from "../../components/comida/Comida"

export default function CafeteriaAdmin() {
    const navigate = useNavigate();
    const [role,setRole]=useState("")
    const [userId,setUserId]=useState("")

    const [food, setFoods]=useState([]) 

  useEffect(()=>{
    const fetchPost = async ()=>{
      try {
        const res=await axios.get(`https://apisona30-production-635f.up.railway.app/api/food/all/food`)
        setFoods(res.data);
      } catch (error) {
          console.log(error);
      }
    };
    fetchPost();
  }, []) 

    useEffect(()=>{
      const getUser=async ()=>{
        const token= window.localStorage.getItem("token")
        const decodedToken=jwt_decode(token)
        setUserId(decodedToken.id)
        setRole(decodedToken.role)
        if(role=="user"){
          navigate("/unauthorized");
        }else{
          console.log("Todo bien");
        }
    }
    getUser()
  },[userId])   
    
    return (
      <Autenticado>
        <TopbarAdmin/>
        <div className="CContainer">
          <SidebarAdmin/>
          <div className="cafeteria">
            <ShareFood/>
          <div className="feed">
            <div className="feedWrapper">
              {food.map((p,key)=>(
                <Comida key={key} food={p} />
              ))}
            </div>
          </div>
        </div>
        </div>
        
      </Autenticado>
    )
}

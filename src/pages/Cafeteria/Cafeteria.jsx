import React from "react";
import "./cafeteria.css"
import { useState, useEffect } from "react";
import Autenticado from "../../components/Autenticado/Auntenticado";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Web3 from "web3";
import { Connection, PublicKey, Transaction, SystemProgram } from '@solana/web3.js';
import axios from "axios";
import jwt_decode from "jwt-decode"
import { useNavigate } from "react-router-dom";
import Comida from "../../components/comida/Comida";

export default function Cafeteria(){
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

  const [account, setAccount] = useState('');

  useEffect(() => {
    if (window.solana) {
      window.solana.connect();
      window.solana.on('connect', () => {
        console.log('Conectado a la billetera Phantom');
        setAccount(window.solana.publicKey.toString());
        console.log(window.solana);
      });
      window.solana.on('disconnect', () => {
        console.log('Desconectado de la billetera Phantom');
        setAccount('');
      });
    } else {
      alert('Por favor instale Phantom Wallet desde https://phantom.app/');
    }
  }, []);
    return (
    <Autenticado>
            <Topbar/>      
      <div className="CContainer">
        <Sidebar/>
        <div className="cafeteria">
            {account ? (
                    <p>Conectado con la cuenta: {account}</p>
                    
                ) : (
                    <button
                    onClick={() => {
                        if (window.solana) {
                        window.solana.connect();
                        } else {
                        alert('Por favor instale Phantom Wallet desde https://phantom.app/');
                        }
                    }}
                    >
                    Conectar con Phantom Wallet
                    </button>
                )}
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
    );
}
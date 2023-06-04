import { Connection, PublicKey, Transaction, SystemProgram, clusterApiUrl } from '@solana/web3.js';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import { useState, useEffect } from 'react';
import ModalPay from "../../components/modalestuto/ModalPay"
export default function Pagar({amount}){
    const [account, setAccount] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const lamports = amount * 1000000000; 
    console.log(lamports);
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
    async function sendTransaction(amount) {
        const connection = new Connection(clusterApiUrl("testnet"));
      
        // La llave pública del destinatario
        const recipientPublicKey = new PublicKey('CLWuvjevKEdwmii4JL6kK1NxVq6MzhCoC1Vzm7LeZ1b2');
      
        // Crea la instrucción para la transacción
        const instruction = SystemProgram.transfer({
          fromPubkey: new PublicKey(account),
          toPubkey: recipientPublicKey,
          lamports: amount,
        });
      
        // Crea la transacción
        const transaction = new Transaction().add(instruction);
      
        // Define el fee payer
        transaction.feePayer = window.solana.publicKey;
      
        // Asigna recientes bloque hash a la transacción
        transaction.recentBlockhash = (await connection.getRecentBlockhash()).blockhash;
      
        // Firma la transacción
        const signedTransaction = await window.solana.signTransaction(transaction);
      
        // Envía la transacción
        const transactionId = await connection.sendRawTransaction(signedTransaction.serialize());
      
        return transactionId;
      }
      <ModalPay show={modalOpen}/>
      return (
        <div>
          {/* Agrega un modal aquí. Este es un ejemplo muy básico; podrías usar una biblioteca de componentes para un modal más atractivo. */}
          {modalOpen && (
            <div className="modal">
              <h2>Transacción completada! Tu comida te espera en tu cafetería</h2>
              <button onClick={() => setModalOpen(false)}>Cerrar</button>
            </div>
          )}
    
          <button
            onClick={() => {
              sendTransaction(lamports).then(transactionId => {
                console.log(`Transacción enviada con el ID ${transactionId}`);
                setModalOpen(true);  // Abre el modal cuando la transacción se completa
              });
            }}
          >
            Comprar
          </button>
        </div>
      );

}

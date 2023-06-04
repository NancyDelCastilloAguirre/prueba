import React from "react";
import { Connection, PublicKey, Transaction, SystemProgram } from '@solana/web3.js';

const Pagar2 = ({ amount }) => {
  const recipientPublicKey = 'CLWuvjevKEdwmii4JL6kK1NxVq6MzhCoC1Vzm7LeZ1b2';
  const connection = new Connection("https://api.testnet.solana.com");

  const sendTransaction = async () => {
    try {
      // Crea la instrucción para la transacción
      const instruction = SystemProgram.transfer({
        fromPubkey: window.solana.publicKey,
        toPubkey: new PublicKey(recipientPublicKey),
        lamports: amount,
      });

      // Crea la transacción
      const transaction = new Transaction().add(instruction);

      // Asigna el bloque hash reciente a la transacción
      const { blockhash } = await connection.getRecentBlockhash();
      transaction.recentBlockhash = blockhash;

      // Firma la transacción
      const signedTransaction = await window.solana.request({
        method: 'signTransaction',
        params: {
          message: transaction.serializeMessage(),
        },
      });

      if (!signedTransaction) {
        throw new Error('Transacción no firmada');
      }

      const signedTx = signedTransaction.serializedTransaction;

      // Envía la transacción
      const transactionId = await connection.sendRawTransaction(signedTx);

      return transactionId;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={sendTransaction}>
      Pagar con Phantom Wallet
    </button>
  );
};

export default Pagar2;

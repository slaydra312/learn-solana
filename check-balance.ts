import dotenv from "dotenv";
dotenv.config();

import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

const LAMPORTS_PER_SOL = 1000000000;

const publicKey = process.env.PUBLIC_KEY;
if (!publicKey) {
  throw new Error("Public key not found");
}

const connection = new Connection(clusterApiUrl("mainnet-beta"));

let address: PublicKey | undefined;

try {
  address = new PublicKey(publicKey);
} catch (error) {}

if (!address) {
  throw new Error("Invalid public key");
}

const balance = await connection.getBalance(address);
const balanceInSol = balance / LAMPORTS_PER_SOL;

console.log(`The balance of the account at ${address} is ${balanceInSol} SOL`);
console.log(`✅ Finished!`);

import express from "express";
import cors from "cors";
import "dotenv/config";
import rotas from "./rotas.js";

const PORTA = process.env.PORTA;
const servidor = express();

servidor.use(cors());
servidor.use(express.json());

rotas(servidor);

servidor.listen(PORTA, () => console.log(`A api subiu na porta ${PORTA}`));

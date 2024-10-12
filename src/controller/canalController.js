import alterarCanalService from "../service/tbCanal/alterarCanalService.js";
import deletarCanalService from "../service/tbCanal/deletarCanalService.js";
import adicionarCanalService from "../service/tbCanal/adicionarCanalService.js";

import selecionarCanalService from "../service/tbCanal/selecionarCanalService.js";
import selecionarCanalPorIdService from "../service/tbCanal/selecionarCanalPorIdService.js";

import { Router } from "express";
import { autenticar } from "../utils/jwt.js";
const endpoint = Router();

endpoint.post("/canal", autenticar, async (req, resp) => {
 
    let canal = req.body;
    canal.idUsuario = req.user.id;

    let idGerado = await adicionarCanalService(canal);

    resp.send({
      id: idGerado,
    });
   
});

endpoint.put("/canal/:id", autenticar, async (req, resp) => {
  try {
    let canal = req.body;
    let id = req.params.id;

    let linhasAfetadas = await alterarCanalService(canal, id);

    resp.status(204).send();
  } catch (error) {
    resp.status(400).send();
  }
});

endpoint.delete("/canal/:id", autenticar, async (req, resp) => {
  try {
    let id = req.params.id;

    let linhasAfetadas = await deletarCanalService(id);

    resp.status(204).send();
  } catch (error) {
    resp.status(400).send();
  }
});

endpoint.get("/canal", autenticar, async (req, resp) => {
  try {
    let idUsuario = req.user.id;
    console.log(idUsuario)
    let registros = await selecionarCanalService(idUsuario );

    resp.send(registros);
  } catch (error) {
    resp.status(400).send();
  }
});

endpoint.get("/canal/:id", autenticar, async (req, resp) => {
  try {
    let id = req.params.id;

    let registros = await selecionarCanalPorIdService(id);

    resp.send(registros);
  } catch (error) {
    resp.status(400).send();
  }
});

export default endpoint;

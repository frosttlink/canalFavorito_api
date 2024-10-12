import alterarProgramaService from "../service/tbCanalPrograma/alterarProgramaService.js";
import deletarProgramaService from "../service/tbCanalPrograma/deletarProgramaService.js";
import adicionarProgramaService from "../service/tbCanalPrograma/adicionarProgramaService.js";

import selecionarProgramaPorIdService from "../service/tbCanalPrograma/selecionarProgramaPorIdService.js";
import selecionarProgramaService from "../service/tbCanalPrograma/selecionarProgramaService.js";


import { Router } from "express";
const endpoint = Router();

endpoint.post("/programa", async (req, resp) => {
  try {
    let programa = req.body;
    let idGerado = await adicionarProgramaService(programa);

    resp.send({
      id: idGerado,
    });

  } catch (error) {
    resp.status(400).send();
  }
});

endpoint.put("/programa/:id", async (req, resp) => {
  try {
    let programa = req.body
    let id = req.params.id

    let linhasAfetadas = await alterarProgramaService(programa, id)

    resp.status(204).send()

  } catch (error) {
    resp.status(400).send()
  }
});

endpoint.delete("/programa/:id", async (req, resp) => {
  try {
    let id = req.params.id

    let linhasAfetadas = await deletarProgramaService(id)

    resp.status(204).send()
    
  } catch (error) {
    resp.status(400).send()
  }
});

endpoint.get("/programa", async (req, resp) => {
  try {
    let registros = await selecionarProgramaService()

    resp.send(registros)
    
  } catch (error) {
    resp.status(400).send()
  }
});

endpoint.get("/programa/:id", async (req, resp) => {
  try {
    let id = req.params.id

    let registro = await selecionarProgramaPorIdService(id)

    resp.send(registro)
    
  } catch (error) {
    resp.status(400).send()
  }
});

export default endpoint;
import adicionarProgramaFavoritoService from "../service/tbProgramaFav/adicionarProgramaFavoritoService.js";
import deletarProgramaFavoritoService from "../service/tbProgramaFav/deletarProgramaFavoritoService.js";
import alterarProgramaFavoritoService from "../service/tbProgramaFav/alterarProgramaFavoritoService.js";

import selecionarProgramaFavoritoService from "../service/tbProgramaFav/selecionarProgramaFavoritoService.js";
import selecionarProgramaFavoritoPorIdService from "../service/tbProgramaFav/selecionarProgramaFavoritoPorIdService.js";

import { Router } from "express";
const endpoint = Router()

endpoint.post("/programaFavorito", async (req, resp) => {
  try {
    let programaFavorito = req.body
    let idGerado = await adicionarProgramaFavoritoService(programaFavorito)

    resp.send({
      id: idGerado
    })
    
  } catch (error) {
    resp.status(400).send()
  }
})

endpoint.put("/programaFavorito/:id", async (req, resp) => {
  try {
    let programaFavorito = req.body
    let id = req.params.id

    let linhasAfetadas = await alterarProgramaFavoritoService(programaFavorito,id)
  
    resp.status(204).send()
    
  } catch (error) {
    resp.status(400).send()
  }
})

endpoint.delete("/programaFavorito/:id", async (req, resp) => {
  try {
    let id = req.params.id

    let linhasAfetadas = await deletarProgramaFavoritoService(id)
  
    resp.status(204).send()
    
  } catch (error) {
    resp.status(400).send()
  }
})

endpoint.get("/programaFavorito", async (req, resp) => {
  try {
    let registros = await selecionarProgramaFavoritoService()
  
    resp.send(registros)
    
  } catch (error) {
    resp.status(400).send()
  }
})

endpoint.get("/programaFavorito/:id", async (req, resp) => {
  try {
    let id = req.params.id

    let registros = await selecionarProgramaFavoritoPorIdService(id)
  
    resp.send(registros)
    
  } catch (error) {
    resp.status(400).send()
  }
})


export default endpoint;
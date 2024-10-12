import { selecionarProgramaFavorito } from "../../repository/programaFavoritoRepository.js";

export default async function selecionarProgramaFavoritoService() {
  let registros = selecionarProgramaFavorito()
  return registros;
}
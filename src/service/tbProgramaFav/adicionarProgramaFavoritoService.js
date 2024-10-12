import { adicionarProgramaFavorito } from "../../repository/programaFavoritoRepository.js";

export default async function adicionarProgramaFavoritoService(programaFavorito) {
  let idGerado = await adicionarProgramaFavorito(programaFavorito)
  return idGerado
} 
import { alterarProgramaFavorito } from "../../repository/programaFavoritoRepository.js";

export default async function alterarProgramaFavoritoService(programaFavorito, id) {
  let linhasAfetadas = alterarProgramaFavorito(programaFavorito, id)
  if (linhasAfetadas == 0)
  throw new Error("Nenhum programa alterado/encontrado para favorito")
}
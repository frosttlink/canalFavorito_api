import { deletarProgramaFavorito } from "../../repository/programaFavoritoRepository.js";

export default async function deletarProgramaFavoritoService(id) {
  let linhasAfetadas = deletarProgramaFavorito(id)
  if (linhasAfetadas == 0)
  throw new Error("Nenhum programa deletado/encontrado para favorito")
}
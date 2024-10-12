import { deletarCanal } from "../../repository/canalRepository.js";

export default async function deletarCanalService(id) {
  let linhasAfetadas = await deletarCanal(id)

  if (linhasAfetadas == 0) 
  throw new Error ('Não foi deletado/encontrado nenhum canal')
}
import { alterarCanal } from "../../repository/canalRepository.js";

export default async function alterarCanalService(canal, id) {
  let linhasAfetadas = await alterarCanal(canal,id)

  if (linhasAfetadas == 0) 
  throw new Error("Nenhum canal alterado/encontrado")
}
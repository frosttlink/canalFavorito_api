import { adicionarCanal } from "../../repository/canalRepository.js";

export default async function adicionarCanalService(canal) {
  let idGerado = await adicionarCanal(canal)

  return idGerado
} 
import { selecionarCanalPorId } from "../../repository/canalRepository.js";

export default async function selecionarCanalPorIdService (id) {
  let registro = await selecionarCanalPorId(id)
  return registro;
}
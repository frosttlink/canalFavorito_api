import { selecionarProgramaPorId } from "../../repository/canalProgramaRepository.js";

export default async function selecionarProgramaPorIdService(id) {
  let registro = await selecionarProgramaPorId(id)
  return registro;
}
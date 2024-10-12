import { selecionarPrograma } from "../../repository/canalProgramaRepository.js";

export default async function selecionarProgramaService() {
  let registro = await selecionarPrograma();
  return registro;
}

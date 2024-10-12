import { adicionarPrograma } from "../../repository/canalProgramaRepository.js";

export default async function adicionarProgramaService(programa) {
  let idGerado = await adicionarPrograma(programa);

  return idGerado;
}

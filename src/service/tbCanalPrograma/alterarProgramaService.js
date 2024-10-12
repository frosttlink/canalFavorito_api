import { alterarPrograma } from "../../repository/canalProgramaRepository.js";

export default async function alterarProgramaService(programa, id) {
  let linhasAfetadas = await alterarPrograma(programa, id);

  if (linhasAfetadas == 0)
    throw new Error("Nenhum programa alterado/encontrado");
}

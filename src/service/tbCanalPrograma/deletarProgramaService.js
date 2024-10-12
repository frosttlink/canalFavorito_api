import { deletarPrograma } from "../../repository/canalProgramaRepository.js";

export default async function deletarProgramaService(id) {
  let linhasAfetadas = await deletarPrograma(id);

  if (linhasAfetadas == 0)
    throw new Error("Não foi deletado/encontrado nenhum programa");
}

import { selecionarProgramaFavoritoPorId } from "../../repository/programaFavoritoRepository.js";

export default async function selecionarProgramaFavoritoPorIdService(id) {
  let registro = await selecionarProgramaFavoritoPorId(id)
  return registro;
}

import { selecionarCanal } from "../../repository/canalRepository.js";

export default async function selecionarCanalService (id) {
  let registro = await selecionarCanal(id)
  return registro;
}
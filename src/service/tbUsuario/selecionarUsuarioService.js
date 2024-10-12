import { selecionarUsuario } from "../../repository/usuarioRepository.js";

export default async function selecionarUsuarioService(){
  let registros = selecionarUsuario()
  return registros
}
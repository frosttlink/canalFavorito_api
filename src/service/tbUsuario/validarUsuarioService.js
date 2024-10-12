import { validarUsuario } from "../../repository/usuarioRepository.js";

export default async function validarUsuarioService(pessoa) {
  let registro = validarUsuario(pessoa)
  return registro;
}
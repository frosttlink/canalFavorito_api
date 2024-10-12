import { adicionarUsuario } from "../../repository/usuarioRepository.js";

export default async function adicionarUsuarioService(usuario) {
  let idGerado = await adicionarUsuario(usuario)

  return idGerado
}
import { deletarUsuario } from "../../repository/usuarioRepository.js";

export default async function deletarUsuarioService(id) {
  let linhasAfetadas = deletarUsuario(id)

  if (linhasAfetadas == 0 )
  throw new Error('Nenhum usuário deletado/encontrado')
}
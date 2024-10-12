import { alterarUsuario } from "../../repository/usuarioRepository.js";

export default async function alterarUsuarioService(usuario,id){
  let linhasAfetadas = alterarUsuario(usuario, id)

  if(linhasAfetadas == 0 )
  throw new Error('Nenhum usuário alterado/encontrado')
}
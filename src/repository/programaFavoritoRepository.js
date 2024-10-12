import con from "./connection.js";

export async function adicionarProgramaFavorito(programaFavorito) {
  let comando = `
  insert into tb_programa_favorito (id_usuario, id_canal_programa, vl_avaliacao)
		values (?, ?, ?);
  `;

  let registro = await con.query(comando, [
    programaFavorito.usuario,
    programaFavorito.canal,
    programaFavorito.avaliacao,
  ]);
  let idGerado = registro[0].insertId;

  return idGerado;
}

export async function alterarProgramaFavorito(programaFavorito, id) {
  let comando = `
  update tb_programa_favorito
	set id_usuario = ?,
    id_canal_programa = ?,
    vl_avaliacao = ?
	where id_programa_favorito = ?;
  `;

  let registro = await con.query(comando, [
    programaFavorito.usuario,
    programaFavorito.canal,
    programaFavorito.avaliacao,
    id,
  ]);
  let linhasAfetadas = registro[0].affectedRows;

  return linhasAfetadas;
}

export async function deletarProgramaFavorito(id) {
  let comando = `
  delete from tb_programa_favorito where id_programa_favorito = ?;
  `;

  let registro = await con.query(comando, [id]);
  let linhasAfetadas = registro[0].affectedRows;

  return linhasAfetadas;
}

export async function selecionarProgramaFavorito() {
  let comando = `
    select id_usuario as usuario, 
    id_canal_programa as programa, 
    vl_avaliacao as avaliacao  
    from tb_programa_favorito;
  `;

  let registro = await con.query(comando);
  let registros = registro[0];

  return registros;
}

export async function selecionarProgramaFavoritoPorId(id) {
  let comando = `
    select id_programa_favorito as idProgramaFav,
    id_usuario as usuario, 
    id_canal_programa as programa, 
    vl_avaliacao as avaliacao
    from tb_programa_favorito
    where id_programa_favorito = ?
  `;

  let registro = await con.query(comando, [id]);

  let info = registro[0];

  return info[0];
}

import con from "./connection.js";

export async function adicionarCanal(canal) {
  let comando = `
  insert into tb_canal (nm_canal, nr_canal, bt_aberto, id_usuario)
		values (?,?,?,?)
  `;
  let registro = await con.query(comando, [
    canal.nome,
    canal.numero,
    canal.aberto,
    canal.idUsuario
  ]);

  let info = registro[0];
  let idGerado = info.insertId;

  return idGerado;
}

export async function alterarCanal(canal, id) {
  let comando = `
  update tb_canal
	set nm_canal = ?, 
		nr_canal = ?,
        bt_aberto = ?
	where id_canal = ?
  `;

  let registro = await con.query(comando, [
    canal.nome,
    canal.numero,
    canal.aberto,
    id,
  ]);

  let info = registro[0];
  let linhasAfetadas = info.affectedRows;
  return linhasAfetadas;
}

export async function deletarCanal(id) {
  let comando = `
  delete from tb_canal where id_canal = ?
  `;

  let registro = await con.query(comando, [id]);

  let info = registro[0];
  let linhasAfetadas = info.affectedRows;

  return linhasAfetadas;
}

export async function selecionarCanal(id) {
  let comando = `
  select id_canal as idCanal,
   nm_canal as nomeCanal,
   nr_canal as numeroCanal,
    bt_aberto as canalAberto
     from tb_canal
     where id_usuario = ?
  `;

  let registro = await con.query(comando, [id]);

  let info = registro[0];

  return info;
}

export async function selecionarCanalPorId(id) {
  let comando = `
  select nm_canal as nomeCanal,
   nr_canal as numeroCanal,
    bt_aberto as canalAberto
     from tb_canal
     where id_canal = ?
  `;

  let registro = await con.query(comando, [id]);

  let info = registro[0];

  return info[0];
}

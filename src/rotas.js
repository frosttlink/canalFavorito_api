import canalController from "./controller/canalController.js";
import programaController from "./controller/programaController.js"
import usuarioController from "./controller/usuarioController.js"
import programaFavoritoController from './controller/programaFavoritoController.js'

export default async function rotas(servidor) {
  servidor.use(canalController);
  servidor.use(programaController);
  servidor.use(usuarioController);
  servidor.use(programaFavoritoController);
}

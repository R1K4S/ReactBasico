import { useState } from "react";
import { useAppContext } from "../../../hooks";
import { Botao, CampoTexto, Loading } from "../../../components";
import { TIPO_BOTAO } from "../../Botao.jsx/constants.js";

import styles from "./ListaTarefasItem.module.css";
const ListaTarefasItem = (props) => {
  const { id, titulo } = props;

  const { removerTarefas, editarTarefas, loadingDeletar, loadingEditar } =
    useAppContext();

  const [editando, setEditando] = useState(false);

  const loadingEditando = loadingEditar == id;
  const loadingDeletando = loadingDeletar == id;

  const onBlurTarefa = (event) => {
    const nomeTarefa = event.currentTarget.value;
    editarTarefas(id, nomeTarefa);
    setEditando(false);
  };
  return (
    <li className={styles.ListaTarefasItem}>
      {(loadingEditando || editando) && (
        <CampoTexto defaultValue={titulo} onBlur={onBlurTarefa} autoFocus />
      )}
      {!loadingEditando && !editando && (
        <span onDoubleClick={() => setEditando(true)}>{titulo}</span>
      )}
      {loadingEditando && <Loading />}
      <Botao
        texto={loadingDeletando ? <Loading /> : "-"}
        tipo={TIPO_BOTAO.SECUNDARIO}
        onClick={() => removerTarefas(id)}
      />
    </li>
  );
};
export { ListaTarefasItem };

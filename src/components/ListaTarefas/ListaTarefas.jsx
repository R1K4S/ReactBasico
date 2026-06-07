import { ListaTarefasItem } from "./ListaTarefasItem";
import styles from "./ListaTarefas.module.css";
import { useAppContext } from "../../hooks";
import { Loading } from "../../components";
const ListaTarefas = () => {
  const { tarefas, loadingCarregar } = useAppContext();
  return (
    <ul className={styles.ListaTarefas}>
      {loadingCarregar && (
        <p>
          Carregando
          <Loading />
        </p>
      )}
      {!loadingCarregar && !tarefas.length && (
        <p>Não há tarefas cadastradas...</p>
      )}
      {tarefas.map((item) => (
        <ListaTarefasItem key={item.id} id={item.id} titulo={item.nome} />
      ))}
    </ul>
  );
};
export { ListaTarefas };

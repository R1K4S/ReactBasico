import { Link } from "react-router-dom";
import style from "./Cabecalho.module.css";
const Cabecalho = () => {
  return (
    <div className={style.Cabecalho}>
      <Link to="/">
        <h1>
          <spam>ToDo </spam>
          List
        </h1>
      </Link>
      <Link to="sobre-nos">Sobre Nos</Link>
    </div>
  );
};
export { Cabecalho };

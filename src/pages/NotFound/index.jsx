import { Link } from "react-router";
import styles from "./notfound.module.css";

export const NotFound = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>404</h1>

        <p>Ops, página não encontrada.</p>

        <p>A página que você está procurando não existe ou foi removida.</p>

        <Link to="/">Voltar para o início</Link>
      </div>
    </main>
  );
};

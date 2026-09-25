import Link from "next/link";
import styles from "./Header.module.css"; // Se usar CSS Modules

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Sistema Escola - <span className={styles.highlight}>SESI</span>
        </h1>
        <nav>
          <ul className={styles.navList}>
            <li>
              <Link href="/" className={styles.navLink}>
                Início
              </Link>
            </li>
            <li>
              <Link href="/cadalunos" className={styles.navLink}>
                Cadastro - Alunos
              </Link>
            </li>
            <li>
              <Link href="/listalunos" className={styles.navLink}>
                Lista - Alunos
              </Link>
            </li>
            <li>
              <Link href="/cadnotas" className={styles.navLink}>
                Cadastro - Notas
              </Link>
            </li>
            <li>
              <Link href="/listnotas" className={styles.navLink}>
                Lista - Notas
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
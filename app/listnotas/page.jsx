"use client"
import Header from '../components/header'
import styles from '../listalunos/listalunos.module.css'

export default function ListNotas() {
    const alunos = [
        { nome: 'Lucas Eduardo', t1: 10, t2: 10, n1: 10, n2: 10, n3: 10 },
        { nome: 'Lucas Eduardo', t1: 10, t2: 10, n1: 10, n2: 10, n3: 10 },
        { nome: 'Lucas Eduardo', t1: 10, t2: 10, n1: 10, n2: 10, n3: 10 },
    ]

    return (
        <>
            <Header />
            <div className={styles.container}>
                <main className={styles.main}>
                    <h2 className={styles.pageTitle}>
                        Lista de Notas
                    </h2>

                    <div className={styles.tableCard}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Aluno</th>
                                    <th>T1</th>
                                    <th>T2</th>
                                    <th>N1</th>
                                    <th>N2</th>
                                    <th>N3</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {alunos.map((aluno, index) => (
                                    <tr key={index}>
                                        <td>{aluno.nome}</td>
                                        <td>{aluno.t1}</td>
                                        <td>{aluno.t2}</td>
                                        <td>{aluno.n1}</td>
                                        <td>{aluno.n2}</td>
                                        <td>{aluno.n3}</td>
                                        <td className={styles.actionsCell}>
                                            <div className={styles.actions}>
                                                <button className={styles.editButton}>Editar</button>
                                                <button className={styles.deleteButton}>Excluir</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </>
    )
}
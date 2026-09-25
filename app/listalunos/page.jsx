"use client"
import Header from '../components/header'
import { useState, useEffect } from 'react'
import styles from './listalunos.module.css'

export default function ListAlunos() {
    const notas = [
        { id: '01', nome: 'Isabella Sanches', idade: 18, serie: '3B', ra: '676767' },
    ]

    return (
        <>
            <Header />
            <div className={styles.container}>
                <main className={styles.main}>
                    <h2 className={styles.pageTitle}>
                        Lista de Alunos
                    </h2>

                    <div className={styles.tableCard}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                    <th>Idade</th>
                                    <th>Série</th>
                                    <th>RA</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {notas.map((nota) => (
                                    <tr key={nota.id}>
                                        <td>{nota.id}</td>
                                        <td>{nota.nome}</td>
                                        <td>{nota.idade}</td>
                                        <td>{nota.serie}</td>
                                        <td>{nota.ra}</td>
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
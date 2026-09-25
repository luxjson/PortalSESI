"use client"
import { useState } from 'react'
import Header from '../components/header'
import styles from './cadalunos.module.css'

export default function CadAlunos() {
    const [nome,setNome] = useState('')
    const [idade,setIdade] = useState('')
    const [serie,setSerie] = useState('')
    const [ra,setRa] = useState('')

    return (
        <>
            <Header />
            <div className={styles.container}>
                <main className={styles.main}>
                    <h2 className={styles.pageTitle}>
                        Cadastro de Alunos
                    </h2>

                    <div className={styles.formCard}>
                        <form className={styles.form} action="">
                            <div className={styles.fieldGroup}>
                                <label className={styles.label} htmlFor="nome">Nome</label>
                                <input className={styles.input} type="text" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                            </div>

                            <div className={styles.fieldGroup}>
                                <label className={styles.label} htmlFor="idade">Idade</label>
                                <input className={styles.input} type="number" name="idade" value={idade} onChange={(e) => setIdade(e.target.value)} />
                            </div>

                            <div className={styles.fieldGroup}>
                                <label className={styles.label} htmlFor="serie">Série</label>
                                <input className={styles.input} type="text" name="serie" value={serie} onChange={(e) => setSerie(e.target.value)} />
                            </div>

                            <div className={styles.fieldGroup}>
                                <label className={styles.label} htmlFor="ra">RA (Registro do Aluno)</label>
                                <input className={styles.input} type="number" name="ra" value={ra} onChange={(e) => setRa(e.target.value)} />
                            </div>

                            <button className={styles.submitButton} type="submit">Cadastrar</button>
                        </form>
                    </div>
                </main>
            </div>
        </>
    )
}
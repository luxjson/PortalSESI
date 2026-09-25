"use client"
import Header from '../components/header'
import { useState } from 'react'
import styles from './cadnotas.module.css'

export default function CadNotas() {
    const [nome,setNome] = useState('')
    const [t1,setT1] = useState('')
    const [t2,setT2] = useState('')

    const [notaFinal,setNotaFinal] = useState('')
    const [notaFinal2,setNotaFinal2] = useState('')
    const [notaFinal3,setNotaFinal3] = useState('')

    return (
        <>
            <Header />
           <div className={styles.container}>
                <main className={styles.main}>
                    <h2 className={styles.pageTitle}>
                        Cadastro de Notas
                    </h2>

                    <div className={styles.formCard}>
                        <form className={styles.form} action="">
                            <div className={styles.fieldGroup}>
                                <label className={styles.label} htmlFor="nome">Nome do Aluno</label>
                                <input className={styles.input} type="text" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                            </div>

                            <div className={styles.fieldGroup}>
                                <label className={styles.label} htmlFor="t1">Nota no T1</label>
                                <input className={styles.input} type="number" name="t1" value={t1} onChange={(e) => setT1(e.target.value)} />
                            </div>

                            <div className={styles.fieldGroup}>
                                <label className={styles.label} htmlFor="t2">Nota no T2</label>
                                <input className={styles.input} type="number" name="t2" value={t2} onChange={(e) => setT2(e.target.value)} />
                            </div>

                            <div className={styles.fieldGroup}>
                                <label className={styles.label} htmlFor="notaFinal">Nota Final</label>
                                <input className={styles.input} type="number" name="notaFinal" value={notaFinal} onChange={(e) => setNotaFinal(e.target.value)} />
                            </div>

                            <div className={styles.fieldGroup}>
                                <label className={styles.label} htmlFor="notaFinal2">Nota Final 2</label>
                                <input className={styles.input} type="number" name="notaFinal2" value={notaFinal2} onChange={(e) => setNotaFinal2(e.target.value)} />
                            </div>

                            <div className={styles.fieldGroup}>
                                <label className={styles.label} htmlFor="notaFinal3">Nota Final 3</label>
                                <input className={styles.input} type="number" name="notaFinal3" value={notaFinal3} onChange={(e) => setNotaFinal3(e.target.value)} />
                            </div>

                            <button className={styles.submitButton} type="submit">Cadastrar</button>
                        </form>
                    </div>
                </main>
            </div>
        </>
    )
}
'use-client'
import { useState } from 'react'
import Header from '../components/header'

export default function CadAlunos() {
    const [nome,setNome] = useState('')
    const [idade,setIdade] = useState('')
    const [serie,setSerie] = useState('')
    const [ra,setRa] = useState('')

    return (
        <>
            <Header />
            <main>
                <h2>
                    Cadastro de Alunos
                </h2>

                <form action="">
                    <label htmlFor="nome">Nome</label>
                    <input type="text" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} />

                    <label htmlFor="idade">Idade</label>
                    <input type="number" name="idade" value={idade} onChange={(e) => setIdade(e.target.value)} />

                    <label htmlFor="serie">Série</label>
                    <input type="text" name="serie" value={serie} onChange={(e) => setSerie(e.target.value)} />

                    <label htmlFor="ra">RA (Registro do Aluno)</label>
                    <input type="number" name="ra" value={ra} onChange={(e) => setRa(e.target.value)} />

                    <button type="submit">Cadastrar</button>
                </form>
            </main>
        </>
    )
}
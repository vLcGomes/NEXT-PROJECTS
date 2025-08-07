'use client'

import { useState } from "react"
import { atualizarPortas, criarPortas } from "../../functions/portas"
import styles from '../../styles/Jogo.module.css'
import Porta from "../../components/Porta"
import Link from "next/link"


export default function jogo() {
  const [portas, setPortas] = useState(criarPortas(4, 2))

  function renderizarPortas() {
      return portas.map(porta => {
        return <Porta key={porta.getNumero()} value={porta} onChange={novaPorta => {
          setPortas(atualizarPortas(portas, novaPorta))
        }} />
      })
    }

  return (
    <div className={styles.jogo}>
      <div className={styles.portas}>
        {renderizarPortas()}
      </div>
      <div className={styles.botoes}>
        <Link href='/'>
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
  )
}
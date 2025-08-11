'use client'

import { useEffect, useState } from "react"
import { atualizarPortas, criarPortas } from "../../../../functions/portas"
import styles from '../../../../styles/Jogo.module.css'
import Porta from "../../../../components/Porta"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useRouter } from "next/router"



export default function jogo() {

  const searchParams = useParams()
  const [valido, setValido] = useState(false)
  const [portas, setPortas] = useState([])

  useEffect(() => {
    const portas = +searchParams.portas
    const temPresente = +searchParams.temPresente
    
    const qtdePortasValidas = portas >= 3 && portas <= 30
    const temPresenteValido = temPresente >= 1 && temPresente <= portas

    setValido(qtdePortasValidas && temPresenteValido)

  }, [portas])

  useEffect(() => {
    const portas = +searchParams.portas
    const temPresente = +searchParams.temPresente
    setPortas(criarPortas(portas, temPresente))
  }, [searchParams])


  function renderizarPortas() {
      return valido && portas.map(porta => {
        return <Porta key={porta.getNumero()} value={porta} onChange={novaPorta => {
          setPortas(atualizarPortas(portas, novaPorta))
        }} />
      })
    }

  return (
    <div className={styles.jogo}>
      <div className={styles.portas}>
        {valido ?
        renderizarPortas() :
        <h2>Valores inválidos</h2>
        }
      </div>
      <div className={styles.botoes}>
        <Link href='/'>
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
  )
}
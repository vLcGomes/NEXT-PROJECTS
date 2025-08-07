import PortaModel from '../model/porta'
import styles from '../styles/Porta.module.css'
import React from 'react'

interface PortaProps {
  value: PortaModel
  onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props: PortaProps) {
  const porta = props.value
  const selecionada = porta.getSelecionada() && !porta.getAberta() ? styles.selecionada : ''

  const alternarSelecao = e => props.onChange(porta.alternarSelecao())
  const abrir = e => {
    e.stopPropagation()
    props.onChange(porta.abrir())
  }

  function renderizarPorta() {
    return (
        <div className={styles.porta}>
          <div className={styles.numero}>{porta.getNumero()}</div>
          <div className={styles.macaneta} onClick={abrir}></div>
        </div>
    )
  }

  return (
    <div className={styles.area} onClick={alternarSelecao}>
      <div className={`${styles.estrutura} ${selecionada}`}>
      {porta.getAberta() ? false : renderizarPorta()}
      </div>
      <div className={styles.chao}></div>
    </div>
  )
}
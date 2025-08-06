import PortaModel from '../model/porta'
import styles from '../styles/Porta.module.css'
import React from 'react'

interface PortaProps {
  porta: PortaModel
}

export default function Porta(props: PortaProps) {
  const { porta } = props
  const selecionada = porta.getSelecionada() ? styles.selecionada : ''

  return (
    <div className={styles.area}>
      <div className={`${styles.estrutura} ${selecionada}`}>
        <div className={styles.porta}>
          <div className={styles.numero}>{porta.getNumero()}</div>
          <div className={styles.macaneta}></div>
        </div>
      </div>
      <div className={styles.chao}></div>
    </div>
  )
}
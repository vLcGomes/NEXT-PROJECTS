'use client'

import { useState } from 'react'
import PortaModel from '../model/porta'
import Porta from '../components/Porta'
import Presente from '../components/Presente'


export default function Home() {
  const [p1, setP1] = useState(new PortaModel(1))

  return (
    <div style={{display: 'flex'}}>
      <Porta porta={p1}/>
    </div>
  );
}

import Cartao from '../components/Cartao'
import styles from '../styles/Formulario.module.css'
import Link from 'next/link'
import EntradaNumerica from '../components/EntradaNumerica'
import { useState } from 'react'
export default function Formulario() {

  const [qtdePortas, setQtdePortas] = useState(3)
  const [comPresente, setCompresente] = useState(1)

  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor="#c0392c">Monty Hall</Cartao>
        <Cartao> 
          <EntradaNumerica text='Qtde Portas?' 
                           value={qtdePortas} 
                           onChange={novaQtdePortas => setQtdePortas(novaQtdePortas)} />
        </Cartao>
      </div>
      <div>
        <Cartao>
        <EntradaNumerica text='Porta com Presente?' 
                           value={comPresente} 
                           onChange={novaPortaComPresente => setCompresente(novaPortaComPresente)} />
        </Cartao>
        <Cartao bgcolor="#28a085">
          <Link href={`jogo/${qtdePortas}/${comPresente}`} passHref>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Cartao>
      </div>

    </div>
  )
}


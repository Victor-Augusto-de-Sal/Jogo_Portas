import styles from '../styles/Porta.module.css';
import PortaModel from '../model/PortaModel'
import Presente from '../components/Presente'

interface Portaprops {
    value: PortaModel,
    onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props: Portaprops) {
    const porta = props.value
    const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada : ''

    const alternarSelecao = e => props.onChange(porta.alterarSelecao());
    const abrir = e => {
        e.stopPropagation();
        props.onChange(porta.abrir())
    };

    function renderizarPorta() {
        return (
            <div className={styles.porta}>
                <div className={styles.numeroDaPorta}>{porta.numero}</div>
                <div className={styles.macaneta} onClick={abrir}></div>
            </div>
        )
    }

    return (
        <div className={styles.area} onClick={alternarSelecao}>
            <div className={`${styles.estrutura} ${selecionada}`}>
                {porta.fechada ? renderizarPorta() : porta.temPresente ? <Presente /> : false}
            </div>
            <div className={styles.chao}></div>
        </div>
    )
}
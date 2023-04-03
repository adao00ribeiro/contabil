import React from "react";
import styles from './styles.module.scss'
import { TbBuildingStore } from 'react-icons/tb';
import { TfiMoney } from 'react-icons/tfi';
import { RiFilePaper2Line } from 'react-icons/ri';
import { FaFileInvoice, FaUserTie } from "react-icons/fa";
export default class Servico extends React.Component {

    render() {

        return (
            <div id="Servico" className={styles.container}>
                <div className={styles.center}>
                    <h2>Nossos Serviços</h2>
                    <span>O Que Podemos Fazer Por Você</span>
                    <div className={styles.grid}>
                        <div className={styles.cardservice}>
                            <div className={styles.divIconBuild}><TbBuildingStore className="icon" size={50} /></div>
                            <h3>Abertura de empresa</h3>
                            <p>Iniciar uma empresa totalmente nova desde o
                                início não é uma tarefa fácil. Oferecemos um começo sem
                                esforço e ajudamos quando necessário.</p>
                        </div>
                        <div className={styles.cardservice}>
                            <div className={styles.divIconBuild}><RiFilePaper2Line className="icon" size={50} /></div>
                            <h3>Contabilidade</h3>
                            <p>Uma empresa traz muita papelada. Além disso, você precisa gerenciar seus impostos. Nós cuidamos de tudo para você..</p>
                        </div>

                        <div className={styles.cardservice}>
                            <div className={styles.divIconBuild}>
                                <FaUserTie className="icon" size={50} />
                            </div>
                            <h3>Consultoria</h3>
                            <p>Como proprietário de uma empresa, você pode encontrar decisões desafiadoras que precisará tomar.
                                Não se preocupe, estamos aqui para ajudá-lo.
                                Temos o prazer de aconselhá-lo sobre investimentos conscientes.</p>
                        </div>
                        <div className={styles.cardservice}>
                            <div className={styles.divIconBuild}><FaFileInvoice className="icon" size={50} /></div>
                            <h3>Auditoria</h3>
                            <p>Envolve a revisão das demonstrações financeiras de uma empresa para garantir que estejam em conformidade com as normas contábeis e legais.</p>
                        </div>
                        <div className={styles.cardservice}>
                            <div className={styles.divIconBuild}><TfiMoney className="icon" size={50} /></div>
                            <h3>Impostos</h3>
                            <p>Inclui a preparação de declarações fiscais e o aconselhamento sobre estratégias fiscais para minimizar a carga tributária.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

} 
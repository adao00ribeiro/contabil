import React from "react";
import styles from './styles.module.scss'
export default class SobreNos extends React.Component {

    render() {

        return (
            <div id="SobreNos" className={styles.container}>

                <div className={styles.left}>
                    <img src="./contadores.jpg"></img>
                </div>
                <div className={styles.right}>
                    <h2>Sobre Nos</h2>
                    <span>Como Nos Tornamos a Contabil</span>
                    <p>A nossa empresa de contabilidade é uma equipe de profissionais altamente
                        capacitados e experientes, dedicados a fornecer soluções
                        financeiras eficientes e confiáveis a nossos clientes. Com anos de
                        experiência no setor, nós entendemos as necessidades e desafios
                        financeiros das pequenas e médias empresas, e oferecemos serviços
                        personalizados para atender às suas necessidades específicas. Nós
                        prestamos serviços de contabilidade, declaração de impostos, auditoria
                        financeira e consultoria empresarial.</p>
                </div>

            </div>
        )
    }

} 
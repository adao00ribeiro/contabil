import React from "react";
import { Link } from 'react-scroll';
import styles from './styles.module.scss'
export default class Principal extends React.Component {

    render() {
        return (
            <div id="Principal" className={styles.container}>
                <div className={styles.center}>
                    <div className={styles.group}>
                        <h1>Um contador em que você pode contar</h1>
                        <span>
                            Seja você um empreendedor iniciante, precisa de c
                            onselhos para investir conscientemente ou precisa de
                            um profissional para gerenciar toda a sua papelada e impostos.
                            A Contabil te protege. Nossos anos de experiência garantem que sua
                            empresa e papelada estejam em boas mãos.
                        </span>
                        <Link activeClass="active" to="SobreNos" spy={true} smooth={true} offset={50} duration={500} >
                            Saiba Mais
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

} 
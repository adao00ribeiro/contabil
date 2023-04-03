import { Link } from "react-scroll";
import React, { useRef } from "react";
import styles from './styles.module.scss'
import { FaBars, FaTimes } from 'react-icons/fa';
export default class Header extends React.Component {
    navRef;
    constructor(props) {
        super(props);
        this.navRef = React.createRef<HTMLElement>();
    }
    render() {


        const showNavbar = () => {

            this.navRef.current.classList.toggle(styles.responsiveNav);

        }
        return (
            <header className={styles.Header}>
                <div className={styles.center}>
                    <span>Contabil</span>
                    <nav ref={this.navRef}>
                        <Link activeClass="active" to="Principal" spy={true} delay={500} smooth={true} offset={0} duration={500} onClick={showNavbar}>
                            Inicio
                        </Link>
                        <Link activeClass="active" to="SobreNos" spy={true} delay={500} smooth={true} offset={0} duration={500} onClick={showNavbar}>
                            Sobre Nos
                        </Link>
                        <Link activeClass="active" to="Servico" spy={true} delay={500} smooth={true} offset={0} duration={500} onClick={showNavbar}>
                            Serviços
                        </Link>
                        <Link activeClass="active" to="Contato" spy={true} delay={500} smooth={true} offset={0} duration={500} onClick={showNavbar}>
                            Contato
                        </Link>
                        <button
                            className={styles.navBtn + " " + styles.navCloseBtn}
                            onClick={showNavbar}>
                            <FaTimes />
                        </button>
                    </nav>
                    <button className={styles.navBtn} onClick={showNavbar}><FaBars></FaBars></button>
                </div>
            </header>
        )
    };



} 
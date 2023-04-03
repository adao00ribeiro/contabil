import React from "react";
import styles from './styles.module.scss'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";

export default class Footer extends React.Component {

    render() {
        const handleSetActive = (to) => {
            console.log(to);
        }
        return (
            <>
                <footer className={styles.footer}>
                    <div className={styles.containerCenter}>
                        <div className={styles.container1}>
                            <h2>Contabil</h2>
                            <p>A Contabil é a escolha certa para sua contabilidade, oferecendo soluções eficientes e personalizadas para sua empresa.</p>
                            <div className={styles.groupIcons}>
                                <Link href={""}><BsFacebook size={25} /></Link>
                                <Link href={""}>  <BsInstagram size={25} /></Link>
                                <Link href={""}><BsTwitter size={25} /></Link>
                            </div>
                        </div>
                        <div className={styles.container1}>
                            <h2>Informação</h2>
                            <div className={styles.containerLinks}>
                                <li>
                                    <LinkScroll activeClass="active" to="Principal" spy={true} smooth={true} offset={0} duration={500} onSetActive={handleSetActive}>
                                        Inicio
                                    </LinkScroll>
                                </li>
                                <li>
                                    <LinkScroll activeClass="active" to="SobreNos" spy={true} smooth={true} offset={0} duration={500} onSetActive={handleSetActive}>
                                        Sobre Nos
                                    </LinkScroll>
                                </li>
                                <li>
                                    <LinkScroll activeClass="active" to="Servico" spy={true} smooth={true} offset={0} duration={500} onSetActive={handleSetActive}>
                                        Serviços
                                    </LinkScroll>
                                </li>  <li>
                                    <LinkScroll activeClass="active" to="Contato" spy={true} smooth={true} offset={0} duration={500} onSetActive={handleSetActive}>
                                        Contato
                                    </LinkScroll>
                                </li>
                            </div>

                        </div>
                        <div className={styles.container1}>
                            <h2>Contato</h2>
                            <div className={styles.containerInfo}>
                                <span>Rua Contabil, nª 000</span>
                                <span> Centro, Araruna-Pr, CEP 87260-000</span>
                                <span>(44) 9999 – 9999</span>
                                <span>contabil@contabil.com.br</span>
                            </div>

                        </div>
                        <div className={styles.container1}>
                            <h2>Horario de trabalho</h2>
                            <div className={styles.containerInfo}>
                                <span> 8:00 as 18:00, Segunda – Sexta</span>
                                <span> 8:00 as 11:00 , Sabado</span>
                                <div className={styles.containerEmpty}></div>
                            </div>
                        </div>
                    </div>
                </footer >
            </>
        )
    }

} 
import React from "react";
import styles from './styles.module.scss'
export default class Contato extends React.Component {

    render() {

        return (
            <div id="Contato" className={styles.container}>
                <div className={styles.containerCenter}>
                    <h2>Fale Conosco</h2>
                    <span>Estamos Aqui Para Te Ajudar</span>
                    <p> Nossa equipe é composta por profissionais altamente qualificados e estamos prontos para atender às suas necessidades.</p>
                    <form>
                        <div>
                            <input type="text" placeholder="Nome" />
                            <input type="text" placeholder="Email" />
                        </div>
                        <select name="select">
                            <option value="Selecione um..." selected>Selecione um...</option>
                            <option value="Eu tenho uma pergunta">Eu tenho uma pergunta</option>
                            <option value="Gostaria de solicitar um orçamento" >Gostaria de solicitar um orçamento</option>
                            <option value="Algo Mais">Algo Mais</option>
                        </select>
                        <textarea placeholder="Digite sua mensagem" />
                        <button>Enviar</button>
                    </form>
                </div>
            </div >
        )
    }

} 
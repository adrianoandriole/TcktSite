import {Component} from "solid-js";
import styles from "./SectorTwo.module.css";
import showcase_1 from "../assets/showcase_1.png";
import showcase_3 from "../assets/showcase_3.png";
import showcase_2 from "../assets/showcase_2.png";

const SectorTwo: Component = () => {
    return (
        <div class={styles.myProjects}>

            <div class={styles.container}>

                <img class={styles.card1} src={showcase_1} alt="Imagem do projeto 1"/>
                <img class={styles.card1} src={showcase_3} alt="Imagem do projeto 3"/>
                <img class={styles.card1} src={showcase_2} alt="Imagem do projeto 2"/>

            </div>

        </div>
    );
};

export default SectorTwo;
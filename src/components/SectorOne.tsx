import { Component } from "solid-js";
import styles from "./SectorOne.module.css";
import logo from "../assets/logo.jpg";

const SectorOne: Component = () => {

    return (
        <div class={styles.card0}>

            <img class={styles.logo0} src={logo} alt="Imagem do projeto 1"/>

        </div>
    );
};

export default SectorOne;

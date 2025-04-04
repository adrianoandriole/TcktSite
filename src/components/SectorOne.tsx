import { Component, createSignal, onCleanup } from "solid-js";
import styles from "./SectorOne.module.css";

const SectorOne: Component = () => {

    return (
        <div class={styles.card0}>

            <div class={styles.card1}>
                <p>Testando o versel</p>
            </div>

            <div class={styles.card2}>
                <p>Testando o versel</p>
            </div>

        </div>
    );
};

export default SectorOne;

import {Component} from "solid-js";
import styles from "./SectorTwo.module.css";
import instagram_icon from "../assets/instagram_icon.png";
import showcase_1 from "../assets/showcase_1.png";
import showcase_3 from "../assets/showcase_3.png";
import showcase_2 from "../assets/showcase_2.png";
import showcase_4 from "../assets/showcase_4.png";

const SectorTwo: Component = () => {
    return (
        <div class={styles.myProjects}>

            <div class={styles.container}>

                <img class={styles.card1} src={showcase_1}> </img>
                <img class={styles.card1} src={showcase_3}> </img>
                <img class={styles.card1} src={showcase_2}> </img>
                <img class={styles.card1} src={showcase_4}> </img>
                <img class={styles.card1} src={instagram_icon}> </img>
                <img class={styles.card1} src={instagram_icon}> </img>
                <img class={styles.card1} src={instagram_icon}> </img>
                <img class={styles.card1} src={instagram_icon}> </img>
                <img class={styles.card1} src={instagram_icon}> </img>
                <img class={styles.card1} src={instagram_icon}> </img>
                <img class={styles.card1} src={instagram_icon}> </img>

            </div>

        </div>
    );
};

export default SectorTwo;
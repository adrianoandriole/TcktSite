import {Component} from "solid-js";
import styles from "../components/PcButtonPanel.module.css";

export type PcButtonPanelProps ={
    changeTab(value:string):void;
}


const PcButtonPanelProps: Component<PcButtonPanelProps> = (props) => {
    return (
        <div class={styles.pcButtonPanel}>

            <div class={styles.buttonOrg}>

                <button class={styles.button1} onClick={() => props.changeTab("sectorOne")}>
                    Home
                </button>

                <button class={styles.button1} onClick={() => props.changeTab("sectorTwo")}>
                    Profile
                </button>

            </div>

        </div>
    );
};

export default PcButtonPanelProps;
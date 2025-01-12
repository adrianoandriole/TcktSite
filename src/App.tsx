import type {Component} from 'solid-js';
import styles from './App.module.css';
import PcButtonPanel from "./components/PcButtonPanel";
import SectorOne from "./components/SectorOne";
import SectorTwo from "./components/SectorTwo";
import {createSignal, Show} from "solid-js";


const App: Component = () => {

    const [tabController, setTabController]= createSignal("sectorOne")

    function changeTab(value:string){
        setTabController(value)
    }


    return (
        <div>

            <div class={styles.header1}>

                <p> Adriano Andriole Costa </p>

            </div>

            <div class={styles.buttonPanel}>
                <PcButtonPanel changeTab={(value) => changeTab(value)}/>
            </div>

            <div class={styles.pcMain}>
                <Show when={tabController() === "sectorOne"} keyed>
                    <SectorOne/>
                </Show>

                <Show when={tabController() === "sectorTwo"} keyed>
                    <SectorTwo/>
                </Show>

            </div>

            <div class={styles.header2}>

                <p> "v1.0.0" </p>

            </div>

        </div>
    );
};

export default App;



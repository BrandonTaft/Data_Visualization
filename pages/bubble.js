import React, { useState, useRef } from 'react';
import Method from './method';
import randomArray from "./randomArray";
import { ButtonBox, SortButton, RefreshButton, ArraySizeButton } from '../src/components/MyButtons.js';
import Box from '@mui/material/Box';
import styles from '../src/css/bubble.module.css';


function Bubble() {
    const [speed, setSpeed] = useState(1000);
    const [capText, setCapText] = useState("");
    const [textTwo, setTextTwo] = useState([]);
    const [bottomText, setBottomText] = useState([]);
    const [bottomTextTwo, setBottomTextTwo] = useState([])
    const { newRandomArray, setNewRandomArray, refresh, setRefresh, max, setMax } = randomArray();
    const arri = useRef();

    async function bubbleSort() {

        const arr = newRandomArray;
        let checked;

        do {
            checked = false
            for (let i = 0; i < arr.length; i++) {
                await new Promise(resolve => setTimeout(resolve, speed));
                document.getElementById(i).classList.toggle("selected-color");
                document.getElementById(i).innerText = "arr[i]";
                // document.getElementById(`caption${i}`).innerText = "<<<=== arr[i]"
                // if (document.getElementById(i + 1) !== null) {
                //     //document.getElementById(i + 1).style.backgroundColor = "white";
                //     // document.getElementById(`caption${i + 1}`).innerText = "<<<=== arr[i + 1]";
                // }
                if (arr[i] > arr[i + 1]) {
                    // setText("If arr[i] is greater than arr[i + 1]")
                    await new Promise(resolve => setTimeout(resolve, speed));
                    setBottomText("They swap positions and the loop moves to the next element")
                    await new Promise(resolve => setTimeout(resolve, speed));
                    await new Promise(resolve => setTimeout(resolve, speed));
                    //Swap the elements in the array since element is less than the next element
                    let tmp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = tmp;

                    //Is only changed to true when there is a swap made

                    checked = true

                } else {
                    await new Promise(resolve => setTimeout(resolve, speed));
                    setText("");
                    setTextTwo("If arr[i] is less than arr[i + 1]");
                    await new Promise(resolve => setTimeout(resolve, speed));
                    setBottomTextTwo("They stay where they are and the loop continues to next element");
                    await new Promise(resolve => setTimeout(resolve, speed));
                }
                document.getElementById(i).classList.toggle("selected-color");
                // document.getElementById(`caption${i}`).innerText = "";

                if (document.getElementById(i + 1) !== null) {
                    // document.getElementById(i + 1).style.backgroundColor = "red";
                    //document.getElementById(`caption${i + 1}`).innerText = "<<<=== arr[i]";
                }
                setText("");
                setTextTwo("");
                setBottomText("");
                setBottomTextTwo("");
                setNewRandomArray([...arr]);
                await new Promise(resolve => setTimeout(resolve, 500));
            }
            //If a swap is not made checked will not be true thus terminating the loop
            //Ensuring loop will not run on a sorted array more than once
        } while (checked)
    }
    // <span id={`caption${index}`}></span>
    const display = newRandomArray.map((bar, index) => {
        let cssProperties = {'--percent': `${bar * (100 / newRandomArray.length)}`}
        return (
            <div className="tube" style={cssProperties} key={index} id={`${index}`} >
                <i className="cap"><span className='cap-text'>arr[i]</span></i><i className="fill" key={bar}></i>
                <div className="base">
                    <div className="icon text">{bar}</div>
                </div>
            </div>
        )
    });

    return (
        <div>

            <Box sx={{ display: "flex" }}>
                <ButtonBox sortMethod={bubbleSort} refresh={refresh} setRefresh={setRefresh} setMax={setMax} speed={speed} setSpeed={setSpeed} />
                <Method method={"bubble"} />
            </Box>
            <Box className={styles.newArray}>
                [{newRandomArray.toString()}]
            </Box>
            <div className={styles.row}>
                {display}
            </div>



        </div>
    )
}

export default Bubble

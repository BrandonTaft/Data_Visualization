import { useState, useEffect } from "react";
import Method from "./method";
import getArray from "./Array";
import ButtonBox from "../src/components/ButtonBox.js";
import Box from "@mui/material/Box";
import SwapIcon from '@mui/icons-material/SwapHorizSharp';
import {BubbleExplanation} from "../src/components/Explanations";

function Bubble() {
    const [speed, setSpeed] = useState(2500);
    const [text, setText] = useState("");
    const [checked, setChecked] = useState("");
    const { array, setArray, refresh, setRefresh, max, setMax } = getArray();

    async function bubbleSort() {

        const arr = array;
        let checked;

        do {
            checked = false
            setChecked("False")
            for (let i = 0; i < arr.length; i++) {
                await new Promise(resolve => setTimeout(resolve, speed));
                document.getElementById(i).classList.toggle("current-element");
                document.getElementById(`cap${i}`).classList.toggle("current-element-text");
                if (document.getElementById(i + 1) !== null) {
                    document.getElementById(i + 1).classList.toggle("next-element");
                    document.getElementById(`cap${i + 1}`).classList.toggle("next-element-text");
                }else{
                    await new Promise(resolve => setTimeout(resolve, speed));
                }

                if (arr[i] > arr[i + 1]) {

                    document.getElementById(`swap${i}`).classList.toggle("swap");
                    await new Promise(resolve => setTimeout(resolve, speed));
                    document.getElementById(`swap${i}`).classList.toggle("swap");
                    //Swap the elements in the array since element is less than the next element
                    let tmp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = tmp;
                    //Is only changed to true when there is a swap made
                    checked = true
                    setChecked("True")
                } else {

                    if (document.getElementById(i + 1) !== null) {
                        document.getElementById(`stay${i}`).classList.toggle("stay");
                        await new Promise(resolve => setTimeout(resolve, speed));
                        document.getElementById(`stay${i}`).classList.toggle("stay");
                    }

                }
                document.getElementById(i).classList.toggle("current-element");
                document.getElementById(`cap${i}`).classList.toggle("current-element-text");
                if (document.getElementById(i + 1) !== null) {
                    document.getElementById(i + 1).classList.toggle("next-element");
                    document.getElementById(`cap${i + 1}`).classList.toggle("next-element-text");
                }

                setArray([...arr]);
                // await new Promise(resolve => setTimeout(resolve, 500));
            }
            //If a swap is not made checked will not be true thus terminating the loop
            //Ensuring loop will not run on a sorted array more than once
        } while (checked)
    }


    const display = array.map((tube, index) => {
        let cssProperties = { "--percent": `${tube * (100 / array.length)}` }
        return (
            <div className="tube" style={cssProperties} key={tube} id={`${index}`} >
                <i className="cap" id={`cap${index}`}></i>
                <i className="fill" key={tube}></i>
                <div className="base">
                    <div className="text">{tube}</div>
                </div>
                <div className="swap thought-bubble bubble-bottom-left" key={tube} id={`swap${index}`}>
                    <p className="greater">{tube} &gt; {array[index + 1]}</p>
                    <p>Swap</p>
                    <SwapIcon sx={{ fontSize: 40 }} />
                </div>
                <div className="stay thought-bubble bubble-bottom-left" id={`stay${index}`}>
                    <p className="less" >{array[index]} &lt; {array[index + 1]}</p>
                    <div>No Swap</div>
                </div>


            </div>
        )
    });

    return (
        <div className="page-container">
            <Box className="top-container">

                <Box className="explanation">
                    <BubbleExplanation />
                </Box>


                <Method method={"bubble"} />
            </Box>
            <Box className="bottom-container">

                <Box className="side-display">
                    <ButtonBox
                        sortMethod={bubbleSort}
                        refresh={refresh}
                        setRefresh={setRefresh}
                        speed={speed}
                        setSpeed={setSpeed}
                    />
                    <Box className="var-container">
                        <Box className="array-container">
                            <h3>Array</h3>
                            <span className="array-span">
                                [{array.toString()}]
                            </span>
                        </Box>
                        <Box className="checked-container">
                            <h3>Checked</h3>
                            <span className="checked-span">
                                {checked}
                            </span>
                        </Box>
                    </Box>

                </Box>
                <div className="row">
                    {display}
                </div>
            </Box>
        </div>
    )
}

export default Bubble

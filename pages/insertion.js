import { useState, useEffect } from "react";
import Method from "./method";
import getArray from "./Array";
import ButtonBox from "../src/components/ButtonBox.js";
import Box from "@mui/material/Box";
import SwapIcon from '@mui/icons-material/SwapHorizSharp';
import { InsertionExplanation } from "../src/components/Explanations";

function Insertion() {

    const [speed, setSpeed] = useState(2500);
    const [text, setText] = useState("");
    const [current, setCurrent] = useState("");
    const [sorted, setSorted] = useState([]);
    const [unSorted, setUnSorted] = useState([]);
    const { array, setArray, refresh, setRefresh, max, setMax } = getArray();

    const explanation = (
        <>
            <p>Insertion sort</p>
        </>
    )

    async function insertionSort() {
        const arr = array;
        const n = arr.length;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = arr[i];
            setSorted(arr.slice(0,i))
            setUnSorted(arr.slice(i))
            await new Promise(resolve => setTimeout(resolve, speed));
            // The last element of our sorted subarray
            let j = i - 1;
            while ((j > -1) && (current < arr[j])) {
                arr[j + 1] = arr[j];
                j--;
            }
            
            // await new Promise(resolve => setTimeout(resolve, speed));
            arr[j + 1] = current;
            //setCurrent(current)
            // await new Promise(resolve => setTimeout(resolve, speed));
        }
        await new Promise(resolve => setTimeout(resolve, speed));
        // setSorted(sorted => [...sorted, arr[j]])
        
        await new Promise(resolve => setTimeout(resolve, speed));
        return arr;
        await new Promise(resolve => setTimeout(resolve, speed));
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
                <div className="swap thought-bubble bubble-bottom-left" id={`swap${index}`}>
                    <p className="greater">{tube} &gt; {array[index + 1]}</p>
                    <p>Swap</p>
                    <SwapIcon sx={{ fontSize: 40 }} />
                </div>
                <div className="stay thought-bubble bubble-bottom-left" id={`stay${index}`}>
                    <p className="less" >{tube} &lt; {tube + 1}</p>
                    <div>No Swap</div>
                </div>


            </div>
        )
    });


    return (
        <div className="page-container">
            <Box className="top-container">

                <Box className="explanation">
                    <InsertionExplanation />
                </Box>


                <Method method={"insertion"} />
            </Box>
            <Box className="bottom-container">

                <Box className="side-display">
                    <ButtonBox
                        sortMethod={insertionSort}
                        refresh={refresh}
                        setRefresh={setRefresh}
                        speed={speed}
                        setSpeed={setSpeed}
                    />
                    <Box className="var-container">
                        <Box className="array-container">
                            {/* <h4>Array</h4>
                            <span className="array-span">
                                [{array.toString()}]
                            </span> */}
                        </Box>
                        <Box className="checked-container">
                            <h4>Unsorted</h4>
                            <span className="checked-span">
                                [{unSorted}]
                            </span>
                            <h4>Sorted Array</h4>
                            <span className="checked-span">
                                {sorted}
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


export default Insertion
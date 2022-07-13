import { useState, useEffect } from "react";
import Method from "./method";
import getArray from "../src/components/Array";
import ButtonBox from "../src/components/ButtonBox.js";
import Box from "@mui/material/Box";
import SwapIcon from '@mui/icons-material/SwapHorizSharp';

function QuickSort() {

    const [speed, setSpeed] = useState(2500);
    const [sorted, setSorted] = useState([]);
    const [unSorted, setUnSorted] = useState([]);
    const { array, setArray, refresh, setRefresh, max, setMax } = getArray();

    useEffect(() => {
        setSorted([])
    }, [refresh]);

    function swap(array, a, b) {
        let temp = array[a];
        array[a] = array[b];
        array[b] = temp
    };

    async function partition(array, start, end) {
        document.getElementById(`cap${end}`).classList.toggle("pivot");
        document.getElementById(end).classList.toggle("pivot-tube");
        await new Promise(resolve => setTimeout(resolve, speed));
        let pivotIndex = start;
        let pivotValue = array[end];
        for (let i = start; i < end; i++) {
            if (array[i] < pivotValue) {
                swap(array, i, pivotIndex);
                pivotIndex++;
            }
        }
        swap(array, pivotIndex, end);
        return pivotIndex;
    };

   async function quickSort(array, start, end) {
        if (start >= end) {
            setArray([...array]);
                await new Promise(resolve => setTimeout(resolve, speed));   
            return;
        }
        console.log(start, end)
        let index = partition(array, start, end);
        await quickSort(array, start, index - 1);
        await new Promise(resolve => setTimeout(resolve, speed));   
        await quickSort(array, index + 1, end)
    }

    function runSort(){
        quickSort(array, 0, array.length - 1)
    }

    const display = array.map((tube, index) => {
        let cssProperties = { "--percent": `${tube * (100 / array.length)}` }
        return (
            <div className="tube" style={cssProperties} key={tube} id={`${index}`} >
                <i className="cap" id={`cap${index}`}></i>
                <i className="fill" key={index}></i>
                <div className="base">
                    <div className="text">{tube}</div>
                </div>
                <div className="selection-stay thought-bubble selection-bubble bubble-bottom-left " id={`selection-stay${index}`}>
                    <p className="greater">{tube} &gt; "min"</p>
                    <p>min stays the same</p>
                </div>
                <div className="selection-swap thought-bubble selection-bubble bubble-bottom-left " id={`selection-swap${index}`}>
                    <p className="less" >{array[index]} &lt; "min"</p>
                    <div>This is the new min</div>
                    <SwapIcon sx={{ fontSize: 40 }} />
                </div>
                <div className="move-to-front thought-bubble selection-bubble bubble-bottom-left " id={`move-to-front${index}`}>
                    <div className="selection-div">Swaps places with <span className="j-element">arr[i]</span> making it the last element in the sorted array</div>
                </div>
                <div className="i-is-min thought-bubble selection-bubble bubble-bottom-left " id={`i-is-min${index}`}>
                    <div className="selection-div"><span className="j-element">arr[i]</span> was the lowest element so it stays where it is. </div>
                </div>
                <div className="finished thought-bubble bubble-bottom-left" id={`finished${index}`}>
                    <div>Sorted&nbsp;!!!</div>
                </div>
            </div>
        )
    });

    return (
        <div className="page-container">
            <Box className="top-container">
                <Box className="explanation">
                    
                </Box>
                <Method method={"selection"} />
            </Box>
            <Box className="bottom-container">
                <Box className="side-display insertion">
                    <ButtonBox
                        sortMethod={runSort}
                        refresh={refresh}
                        setRefresh={setRefresh}
                        speed={speed}
                        setSpeed={setSpeed}
                    />
                    <Box className="var-container">
                        <Box className="array-container insertion">
                            <span className="insertion-span">Array</span>
                            <span className="array-span">
                                [{array.toString()}]
                            </span>
                        </Box>
                        <Box className="checked-container insertion">
                            <span className="insertion-span">Unsorted</span>
                            <span className="array-span">
                                [{unSorted.toString()}]
                            </span>
                        </Box>
                        <Box className="checked-container insertion">
                            <span className="insertion-span">Sorted Array</span>
                            <span className="array-span">
                                [{sorted.toString()}]
                            </span>
                        </Box>
                    </Box>
                </Box>
                <div className="selection row move-row">
                    {display}
                </div>
            </Box>
        </div>
    )
}

export default QuickSort
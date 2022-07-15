import { useState, useEffect } from "react";
import Method from "./method";
import getArray from "../src/components/Array";
import ButtonBox from "../src/components/ButtonBox.js";
import Box from "@mui/material/Box";
import SwapIcon from '@mui/icons-material/SwapHorizSharp';

function QuickSort() {

// await new Promise(resolve => setTimeout(resolve, speed));
                // document.getElementById(`swap${i}`).classList.toggle("swap");
                // await new Promise(resolve => setTimeout(resolve, speed));
                // document.getElementById(`swap${i}`).classList.toggle("swap");
                // document.getElementById(`cap${pivotIndex}`).classList.toggle("pivot");
                // document.getElementById(pivotIndex).classList.toggle("pivot-tube");
                // document.getElementById(`cap${i}`).classList.toggle("pivot");
                // document.getElementById(i).classList.toggle("pivot-tube");
                // await new Promise(resolve => setTimeout(resolve, speed));
                // swap(arr, i, pivotIndex);
                // document.getElementById(`cap${end}`).classList.toggle("pivot-value");
        // document.getElementById(end).classList.toggle("pivot-value-tube");
    // await quickSort(arr, start, index - 1);
        // await new Promise(resolve => setTimeout(resolve, speed));
        // await quickSort(arr, index + 1, end)

        // async function swap(arr, a, b) {
        //     document.getElementById(`cap${pivotIndex}`).classList.toggle("pivot-index");
        //     document.getElementById(pivotIndex).classList.toggle("pivot-index-tube");
        //     await new Promise(resolve => setTimeout(resolve, speed));
        //     let temp = arr[a];
        //     arr[a] = arr[b];
        //     arr[b] = temp;
        //     document.getElementById(`cap${pivotIndex}`).classList.toggle("pivot-index");
        //     document.getElementById(pivotIndex).classList.toggle("pivot-index-tube");
        //     await new Promise(resolve => setTimeout(resolve, speed));
        //     setArray([...arr]);
        //     await new Promise(resolve => setTimeout(resolve, speed));
        // };

    const [speed, setSpeed] = useState(2500);
    const [sorted, setSorted] = useState([]);
    const [unSorted, setUnSorted] = useState([]);
    const { array, setArray, refresh, setRefresh, max, setMax } = getArray();

    useEffect(() => {
        setSorted([])
    }, [refresh]);

    

    async function quickSort(arr, start, end) {
        if (start >= end) {
            setArray([...arr]);
            await new Promise(resolve => setTimeout(resolve, speed));
            return;
        }
        let index = await partition(arr, start, end);
        await Promise.all([
            quickSort(arr, start, index - 1),
            quickSort(arr, index + 1, end)
        ])
        setArray([...arr]);
        await new Promise(resolve => setTimeout(resolve, speed));
        
    }

    async function partition(arr, start, end) {
        let pivotIndex = start;
        let pivotValue = arr[end];
        document.getElementById(`cap${end}`).classList.toggle("pivot-value");
        document.getElementById(end).classList.toggle("pivot-value-tube");
        await new Promise(resolve => setTimeout(resolve, speed));
        for (let i = start; i < end; i++) {
            document.getElementById(`cap${pivotIndex}`).classList.add("pivot-index");
            document.getElementById(pivotIndex).classList.add("pivot-index-tube");
            await new Promise(resolve => setTimeout(resolve, speed));
            if (arr[i] < pivotValue) {
                

               
                let temp = arr[i];
                arr[i] = arr[pivotIndex];
                arr[pivotIndex] = temp;
                
                
                await new Promise(resolve => setTimeout(resolve, speed));
                document.getElementById(`cap${pivotIndex}`).classList.remove("pivot-index");
                document.getElementById(pivotIndex).classList.remove("pivot-index-tube");
                setArray([...arr]);
                await new Promise(resolve => setTimeout(resolve, speed));
                pivotIndex++;
                document.getElementById(`cap${pivotIndex}`).classList.add("pivot-index");
            document.getElementById(pivotIndex).classList.add("pivot-index-tube");
            await new Promise(resolve => setTimeout(resolve, speed));
            }

            setArray([...arr]);
            await new Promise(resolve => setTimeout(resolve, speed));
        }
        
        document.getElementById(`cap${end}`).classList.remove("pivot-value");
        document.getElementById(end).classList.remove("pivot-value-tube");
        document.getElementById(`cap${pivotIndex}`).classList.remove("pivot-index");
        document.getElementById(pivotIndex).classList.remove("pivot-index-tube");
        //SWAP PIVOT VALUE AND PIVOT INDEX TO FINISH THE PARTITION FUNCTION
        let temp = arr[pivotIndex];
        arr[pivotIndex] = arr[end];
        arr[end] = temp;
        
        setArray([...arr]);
        await new Promise(resolve => setTimeout(resolve, speed));
        return pivotIndex;
    };

    

    function runSort() {
        quickSort(array, 0, 5)
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
                <div className="stay thought-bubble bubble-bottom-left" id={`swap${index}`}>
                    <p className="greater">{array[index]} &gt; Pivot</p>
                    <p>Swap</p>
                    <SwapIcon sx={{ fontSize: 40 }} />
                </div>
                <div className="swap thought-bubble bubble-bottom-left" id={`stay${index}`}>
                    <p className="less" >{array[index]} &lt; Pivot}</p>
                    <div>Swap with pivot</div>
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
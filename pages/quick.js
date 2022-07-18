import { useState, useEffect } from "react";
import Method from "./method";
import getArray from "../src/components/Array";
import ButtonBox from "../src/components/ButtonBox.js";
import Box from "@mui/material/Box";
import SwapIcon from '@mui/icons-material/SwapHorizSharp';
import {QuickExplanation} from "../src/components/Explanations";

function QuickSort() {

    const [speed, setSpeed] = useState(2500);
    const [myPivotIndex, setMyPivotIndex] = useState([]);
    const [unSorted, setUnSorted] = useState([]);
    const { array, setArray, refresh, setRefresh, max, setMax } = getArray();

    // useEffect(() => {
    //     setSorted([])
    // }, [refresh]);



    async function quickSort(arr, start, end) {
        document.getElementById("sort-button").disabled = true;
        document.getElementById("refresh-button").disabled = true;
        document.getElementById("in-nav-container").classList.toggle("turn-off");
        document.getElementById("footer-link-container").classList.toggle("turn-off");
        document.getElementById("menu-appbar").classList.toggle("turn-off");
        if (start >= end) {
            document.getElementById(`start-greater-end${start}`).classList.toggle("start-greater-end");
            await new Promise(resolve => setTimeout(resolve, speed));
            document.getElementById(`start-greater-end${start}`).classList.toggle("start-greater-end");
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
        document.getElementById("sort-button").disabled = false;
        document.getElementById("refresh-button").disabled = false;
        document.getElementById("in-nav-container").classList.toggle("turn-off");
        document.getElementById("menu-appbar").classList.toggle("turn-off");
        document.getElementById("footer-link-container").classList.toggle("turn-off");
        await new Promise(resolve => setTimeout(resolve, speed));

    }

    async function partition(arr, start, end) {
        let pivotIndex = start;
        setMyPivotIndex(pivotIndex)
        let pivotValue = arr[end];
        document.getElementById(`cap${end}`).classList.toggle("pivot-value");
        document.getElementById(end).classList.toggle("pivot-value-tube");
        await new Promise(resolve => setTimeout(resolve, speed));
        for (let i = start; i < end; i++) {
            document.getElementById(i).classList.add("current");
            document.getElementById(`cap${pivotIndex}`).classList.add("pivot-index");
            document.getElementById(pivotIndex).classList.add("pivot-index-tube");
            await new Promise(resolve => setTimeout(resolve, speed));
            if (arr[i] < pivotValue) {
                if(arr[i] )
                document.getElementById(`quick-swap${i}`).classList.toggle("quick-swap");
                await new Promise(resolve => setTimeout(resolve, speed));
                document.getElementById(i).classList.remove("current");
                let temp = arr[i];
                arr[i] = arr[pivotIndex];
                arr[pivotIndex] = temp;
                document.getElementById(`quick-swap${i}`).classList.toggle("quick-swap");
                document.getElementById(`cap${pivotIndex}`).classList.remove("pivot-index");
                document.getElementById(pivotIndex).classList.remove("pivot-index-tube");
                setArray([...arr]);
                await new Promise(resolve => setTimeout(resolve, speed));
                pivotIndex++;
                setMyPivotIndex(pivotIndex)
                document.getElementById(`cap${pivotIndex}`).classList.add("pivot-index");
                document.getElementById(pivotIndex).classList.add("pivot-index-tube");
                
                await new Promise(resolve => setTimeout(resolve, speed));
            } else {
                document.getElementById(`quick-stay${i}`).classList.toggle("quick-stay");
                await new Promise(resolve => setTimeout(resolve, speed));
                document.getElementById(`quick-stay${i}`).classList.toggle("quick-stay");
                document.getElementById(i).classList.remove("current");
                await new Promise(resolve => setTimeout(resolve, speed));
            }
            
        }
        document.getElementById(`cap${end}`).classList.remove("pivot-value");
        document.getElementById(end).classList.remove("pivot-value-tube");
        document.getElementById(`cap${pivotIndex}`).classList.remove("pivot-index");
        document.getElementById(pivotIndex).classList.remove("pivot-index-tube");
        //SWAP PIVOT VALUE AND PIVOT INDEX TO FINISH THE PARTITION FUNCTION
        document.getElementById(`quick-swap-pivot${pivotIndex}`).classList.toggle("quick-swap-pivot");
        await new Promise(resolve => setTimeout(resolve, speed));
        document.getElementById(`quick-swap-pivot${pivotIndex}`).classList.toggle("quick-swap-pivot");
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
                <div className="quick-stay thought-bubble quick-bubble bubble-bottom-left " id={`quick-stay${index}`}>
                    <p className="greater">{tube} &gt; "Pivot Value"</p>
                    <p>Nothing changes and loop moves to next index</p>
                </div>
                <div className="quick-swap thought-bubble quick-bubble bubble-bottom-left " id={`quick-swap${index}`}>
                    <p className="less" >{array[index]} &lt; "Pivot Value"</p>
                    <div>Swap places with the pivot index then pivot index moves one spot forward</div>
                    <SwapIcon sx={{ fontSize: 40 }} />
                </div>
                <div className="quick-swap-pivot thought-bubble quick-bubble bubble-bottom-left " id={`quick-swap-pivot${index}`}>
                    <div>Pivot Index and Pivot Value swap places.</div>
                    <SwapIcon sx={{ fontSize: 40 }} />
                </div>
                {/* <div className="i-is-pivot-index thought-bubble selection-bubble bubble-bottom-left " id={`i-is-pivot-index${index}`}>
                    <p className="less" >{array[index]} &lt; "Pivot Value"</p>
                    <div className="selection-div"> This is now the pivot index </div>
                </div> */}
                <div className="start-greater-end thought-bubble selection-bubble bubble-bottom-left " id={`start-greater-end${index}`}>
                    <p>quickSort(arr, start, index)</p>
                    <p className="greater">start {array[0]} &gt;= end {array[array.length]}</p>
                    <div> This array is sorted. </div>
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
                    <QuickExplanation />
                </Box>
                <Method method={"quick"} />
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
                            <span className="insertion-span">Pivot Index</span>
                            <span className="array-span">
                                {myPivotIndex}
                            </span>
                        </Box>
                        {/* <Box className="checked-container insertion">
                            <span className="insertion-span">Sorted Array</span>
                            <span className="array-span">
                                [{sorted.toString()}]
                            </span>
                        </Box> */}
                    </Box>
                </Box>
                <div className="quick row move-row">
                    {display}
                </div>
            </Box>
        </div>
    )
}

export default QuickSort
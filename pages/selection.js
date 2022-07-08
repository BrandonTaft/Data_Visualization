import { useState, useEffect } from "react";
import Method from "./method";
import getArray from "../src/components/Array";
import ButtonBox from "../src/components/ButtonBox.js";
import Box from "@mui/material/Box";
import SwapIcon from '@mui/icons-material/SwapHorizSharp';
import { SelectionExplanation } from "../src/components/Explanations";

function Selection() {

    const [speed, setSpeed] = useState(2500);
    const [sorted, setSorted] = useState([]);
    const [unSorted, setUnSorted] = useState([]);
    const { array, setArray, refresh, setRefresh, max, setMax } = getArray();

    useEffect(() => {
        setSorted([])
    }, [refresh]);

    async function selectionSort() {
        const arr = array;
        const n = arr.length;
        await new Promise(resolve => setTimeout(resolve, speed / 2));
        document.getElementById(0).classList.toggle("sorted");
        document.getElementById(`cap${0}`).classList.toggle("sorted-text");
        document.querySelectorAll(".cap").forEach(el => { el.classList.toggle("unSorted-text") });
        for (let i = 0; i < n; i++) {
            // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++){
            if(arr[j] < arr[min]) {
                min=j; 
            }
         }
            
            await new Promise(resolve => setTimeout(resolve, speed / 2));
            document.getElementById(i).classList.toggle("current");
            document.getElementById(`cap${i}`).classList.toggle("current-text");
            await new Promise(resolve => setTimeout(resolve, speed));
           
            if (min != i) {
                // Swapping the elements
                let tmp = arr[i]; 
                arr[i] = arr[min];
                arr[min] = tmp;      
           }
       
           
            document.getElementById(j + 1).classList.toggle("current");
            document.getElementById(`cap${j + 1}`).classList.toggle("current-text");
            document.getElementById(j + 1).classList.toggle("sorted");
            document.getElementById(`cap${j + 1}`).classList.toggle("sorted-text");
            setArray(arr);
            await new Promise(resolve => setTimeout(resolve, speed));
        }    
        setUnSorted([])
        setSorted(arr)
        await new Promise(resolve => setTimeout(resolve, speed));
        document.getElementById('finished2').classList.toggle("finished");
        document.querySelectorAll(".cap").forEach(el => { el.classList.toggle("unSorted-text") });
        document.querySelectorAll(".tube").forEach(el => { el.classList.toggle("sorted") });
        document.querySelectorAll(".cap").forEach(el => { el.classList.toggle("sorted-text") });
        return arr;
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
                <div className="swap thought-bubble bubble-bottom-left move-the-bubble" id={`swap${index}`}>
                    <p className="greater">{tube} &gt; {array[index + 1]}</p>
                    <p>Swap</p>
                    <SwapIcon sx={{ fontSize: 40 }} />
                </div>
                <div className="stay thought-bubble bubble-bottom-left move-the-bubble" id={`stay${index}`}>
                    <p className="less" >{array[index]} &lt; {array[index + 1]}</p>
                    <div>No Swap</div>
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
                    <SelectionExplanation />
                </Box>
                <Method method={"selection"} />
            </Box>
            <Box className="bottom-container">
                <Box className="side-display insertion">
                    <ButtonBox
                        sortMethod={selectionSort}
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
                <div className="row move-row">
                    {display}
                </div>
            </Box>
        </div>
    )
}

export default Selection
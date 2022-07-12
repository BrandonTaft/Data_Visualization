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
        
        document.querySelectorAll(".cap").forEach(el => { el.classList.toggle("unSorted-text") });
        await new Promise(resolve => setTimeout(resolve, speed / 2));
        for (let i = 0; i < n; i++) {
            // Finding the smallest number in the subarray
            document.getElementById(`cap${i}`).classList.toggle("min");
            document.getElementById(i).classList.toggle("min-tube");
            await new Promise(resolve => setTimeout(resolve, speed));
        let min = i;
        
        
        for(let j = i+1; j < n; j++){
            if(arr[j] > arr[min]) {
                document.getElementById(`selection-stay${j}`).classList.toggle("selection-stay");
                await new Promise(resolve => setTimeout(resolve, speed));
                document.getElementById(`selection-stay${j}`).classList.toggle("selection-stay");
            }else if(arr[j] < arr[min]) {
                document.getElementById(`selection-swap${j}`).classList.toggle("selection-swap");
                await new Promise(resolve => setTimeout(resolve, speed));
                document.getElementById(`cap${min}`).classList.remove("min");
                document.getElementById(min).classList.toggle("min-tube");
                document.getElementById(`cap${j}`).classList.toggle("min");
                document.getElementById(j).classList.toggle("min-tube");
                document.getElementById(`selection-swap${j}`).classList.toggle("selection-swap");
                await new Promise(resolve => setTimeout(resolve, speed ));
                min=j; 
            }
         }  if(min == i){
            document.getElementById(`i-is-min${min}`).classList.toggle("i-is-min");
                await new Promise(resolve => setTimeout(resolve, speed));
                document.getElementById(`i-is-min${min}`).classList.toggle("i-is-min");
         }
            
            
            else if (min != i) {
                // Swapping the elements
                document.getElementById(`move-to-front${min}`).classList.toggle("move-to-front");
                await new Promise(resolve => setTimeout(resolve, speed));
                document.getElementById(`move-to-front${min}`).classList.toggle("move-to-front");
                let tmp = arr[i]; 
                arr[i] = arr[min];
                arr[min] = tmp;   
                setArray([...arr]);
                await new Promise(resolve => setTimeout(resolve, speed));   
           }
           document.getElementById(`cap${i}`).classList.toggle("min");
           document.getElementById(i).classList.toggle("min-tube");
           document.getElementById(i).classList.toggle("sorted");
        document.getElementById(`cap${i}`).classList.toggle("sorted-text");
           setSorted(arr.slice(0, i + 1))
            setUnSorted(arr.slice(i + 1))
            
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
                <div className="selection row move-row">
                    {display}
                </div>
            </Box>
        </div>
    )
}

export default Selection
import { useState, useEffect } from "react";
import Method from "../src/components/Method";
import getArray from "../src/components/Array";
import ButtonBox from "../src/components/ButtonBox.js";
import Box from "@mui/material/Box";
import SwapIcon from '@mui/icons-material/SwapHorizSharp';
import { SelectionExplanation } from "../src/components/Explanations";

function Selection() {

    const [speed, setSpeed] = useState(3000);
    const [sorted, setSorted] = useState([]);
    const [unSorted, setUnSorted] = useState([]);
    const { array, setArray, refresh, setRefresh } = getArray();

    useEffect(() => {
        setSorted([])
    }, [refresh]);

    function timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function selectionSort() {
        document.getElementById('finished2').classList.add("finished");
        document.getElementById("sort-button").disabled = true;
        document.getElementById("refresh-button").disabled = true;
        document.getElementById("in-nav-container").classList.toggle("turn-off");
        document.getElementById("menu-appbar").classList.toggle("turn-off");
        document.getElementById("footer-link-container").classList.toggle("turn-off");
        const arr = array;
        const n = arr.length;

        document.querySelectorAll(".cap").forEach(el => { el.classList.toggle("unSorted-text") });
        await new Promise(resolve => setTimeout(resolve, speed / 2));
        for (let i = 0; i < n; i++) {
            // Finding the smallest number in the subarray
            document.getElementById(`cap${i}`).classList.toggle("min");
            document.getElementById(i).classList.toggle("min-tube");
            await timeout(speed);
            let min = i;


            for (let j = i + 1; j < n; j++) {
                if (arr[j] > arr[min]) {
                    document.getElementById(`selection-stay${j}`).classList.toggle("selection-stay");
                    await timeout(speed);
                    document.getElementById(`selection-stay${j}`).classList.toggle("selection-stay");
                } else if (arr[j] < arr[min]) {
                    document.getElementById(`selection-swap${j}`).classList.toggle("selection-swap");
                    await timeout(speed);
                    document.getElementById(`cap${min}`).classList.remove("min");
                    document.getElementById(min).classList.toggle("min-tube");
                    document.getElementById(`cap${j}`).classList.toggle("min");
                    document.getElementById(j).classList.toggle("min-tube");
                    document.getElementById(`selection-swap${j}`).classList.toggle("selection-swap");
                    await timeout(speed);
                    min = j;
                }
            } if (min == i) {
                document.getElementById(`i-is-min${min}`).classList.toggle("i-is-min");
                await timeout(speed);
                document.getElementById(`i-is-min${min}`).classList.toggle("i-is-min");
            }


            else if (min != i) {
                // Swapping the elements
                document.getElementById(`move-to-front${min}`).classList.toggle("move-to-front");
                await timeout(speed);
                document.getElementById(`move-to-front${min}`).classList.toggle("move-to-front");
                let tmp = arr[i];
                arr[i] = arr[min];
                arr[min] = tmp;
                setArray([...arr]);
                await timeout(speed);
            }
            document.getElementById(`cap${i}`).classList.toggle("min");
            document.getElementById(i).classList.toggle("min-tube");
            document.getElementById(i).classList.toggle("sorted");
            document.getElementById(`cap${i}`).classList.toggle("sorted-text");
            setSorted(arr.slice(0, i + 1))
            setUnSorted(arr.slice(i + 1))

            setArray(arr);
            await timeout(speed);
        }
        setUnSorted([])
        setSorted(arr)
        await timeout(speed);
        document.getElementById("sort-button").disabled = false;
        document.getElementById("refresh-button").disabled = false;
        document.getElementById('finished2').classList.remove("finished");
        document.querySelectorAll(".cap").forEach(el => { el.classList.toggle("unSorted-text") });
        document.querySelectorAll(".tube").forEach(el => { el.classList.toggle("sorted") });
        document.querySelectorAll(".cap").forEach(el => { el.classList.toggle("sorted-text") });
        document.getElementById("sort-button").disabled = false;
        document.getElementById("refresh-button").disabled = false;
        document.getElementById("in-nav-container").classList.toggle("turn-off");
        document.getElementById("menu-appbar").classList.toggle("turn-off");
        document.getElementById("footer-link-container").classList.toggle("turn-off");
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
                <div className="selection selection-stay thought-bubble bubble-bottom-left " id={`selection-stay${index}`}>
                    <p className="selection greater">{tube} &gt; min</p>
                    <p className="selection no-tm mb">min stays the same</p>
                </div>
                <div className="selection selection-swap thought-bubble bubble-bottom-left " id={`selection-swap${index}`}>
                    <p className="selection less" >{array[index]} &lt; min</p>
                    <p className="selection no-tm">This is the new min</p>
                    <SwapIcon className="selection swap-icon" sx={{ fontSize: 40 }} />
                </div>
                <div className="selection move-to-front thought-bubble mtf bubble-bottom-left " id={`move-to-front${index}`}>
                    <p className="mtf-p">Swaps places with <span className="j-element">arr[i]</span> making it the last element in the sorted array</p>
                </div>
                <div className="selection i-is-min thought-bubble iim mtf bubble-bottom-left " id={`i-is-min${index}`}>
                    <p className="mtf-p tm">&nbsp;<span className="j-element">arr[i]</span>&nbsp; was the lowest element so it stays where it is. </p>
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
                <Box className="selection explanation">
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
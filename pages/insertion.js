import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Method from "../src/components/Method";
import getArray from "../src/components/Array";
import ButtonBox from "../src/components/ButtonBox.js";
import Box from "@mui/material/Box";
import SwapIcon from '@mui/icons-material/SwapHorizSharp';
import { InsertionExplanation } from "../src/components/Explanations";

function Insertion() {

    const [speed, setSpeed] = useState(3000);
    const [sorted, setSorted] = useState([]);
    const [unSorted, setUnSorted] = useState([]);
    const { array, setArray, refresh, setRefresh } = getArray();
    const router = useRouter();
    let path = router.pathname;

    useEffect(() => {
        setSorted([])
    }, [refresh]);

    function timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function insertionSort() {
        document.getElementById('finished2').classList.add("finished");
        document.getElementById("sort-button").disabled = true;
        document.getElementById("refresh-button").disabled = true;
        document.getElementById("in-nav-container").classList.toggle("turn-off");
        document.getElementById("menu-appbar").classList.toggle("turn-off");
        document.getElementById("footer-link-container").classList.toggle("turn-off");
        try {
            while (path == "/insertion") {
                document.getElementById("sort-button").disabled = true;
                document.getElementById("refresh-button").disabled = true;
                const arr = array;
                const n = arr.length;
                await new Promise(resolve => setTimeout(resolve, speed / 2));
                document.getElementById(0).classList.toggle("sorted");
                document.getElementById(`cap${0}`).classList.toggle("sorted-text");
                document.querySelectorAll(".cap").forEach(el => { el.classList.toggle("unSorted-text") });
                for (let i = 1; i < n; i++) {
                    if (path == "/insertion") {
                        // Choosing the first element in our unsorted subarray
                        let current = arr[i];
                        setSorted(arr.slice(0, i))
                        setUnSorted(arr.slice(i))
                        await new Promise(resolve => setTimeout(resolve, speed / 2));
                        document.getElementById(i).classList.toggle("current");
                        document.getElementById(`cap${i}`).classList.toggle("current-text");
                        await timeout(speed);
                        // The last element of our sorted subarray
                        let j = i - 1;
                        while ((j > -1) && (current < arr[j])) {
                            if (path == "/insertion") {
                                document.getElementById(`swap${j}`).classList.toggle("swap");
                                await timeout(speed);
                                document.getElementById(`swap${j}`).classList.toggle("swap");
                                // arr[j + 1] = arr[j];
                                let tmp = arr[j];
                                arr[j] = arr[j + 1];
                                arr[j + 1] = tmp;
                                setArray([...arr]);
                                await timeout(speed);
                                j--;
                            }
                        }
                        if (j > -1) {
                            document.getElementById(`stay${j}`).classList.toggle("stay");
                            await timeout(speed);
                            document.getElementById(`stay${j}`).classList.toggle("stay");
                        }
                        arr[j + 1] = current;
                        document.getElementById(j + 1).classList.toggle("current");
                        document.getElementById(`cap${j + 1}`).classList.toggle("current-text");
                        document.getElementById(j + 1).classList.toggle("sorted");
                        document.getElementById(`cap${j + 1}`).classList.toggle("sorted-text");
                        setArray(arr);
                        await timeout(speed);
                    } else {
                        return;
                    }
                }
                setUnSorted([])
                setSorted(arr)
                await timeout(speed);
                document.getElementById("sort-button").disabled = false;
                document.getElementById("refresh-button").disabled = false;
                document.getElementById("in-nav-container").classList.toggle("turn-off");
                document.getElementById("menu-appbar").classList.toggle("turn-off");
                document.getElementById("footer-link-container").classList.toggle("turn-off");
                document.getElementById('finished2').classList.remove("finished");
                document.querySelectorAll(".cap").forEach(el => { el.classList.toggle("unSorted-text") });
                document.querySelectorAll(".tube").forEach(el => { el.classList.toggle("sorted") });
                document.querySelectorAll(".cap").forEach(el => { el.classList.toggle("sorted-text") });
                return arr;
            }
        } catch (error) {
            return;
        }
        document.getElementById("sort-button").disabled = false;
        document.getElementById("refresh-button").disabled = false;
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
                    <SwapIcon className="swap-icon" sx={{ fontSize: 40 }} />
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
                    <InsertionExplanation />
                </Box>
                <Method method={"insertion"} />
            </Box>
            <Box className="bottom-container">
                <Box className="side-display insertion">
                    <ButtonBox
                        sortMethod={insertionSort}
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

export default Insertion
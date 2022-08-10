import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Method from "../src/components/Method";
import getArray from "../src/components/Array";
import ButtonBox from "../src/components/ButtonBox.js";
import Box from "@mui/material/Box";
import { turnOff, turnOn, timeOut } from "../src/components/Utils";
import { InsertionExplanation } from "../src/components/Explanations";
import SwapIcon from '@mui/icons-material/SwapHorizSharp';

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

    async function insertionSort() {
        turnOff();
        try {
            while (path == "/insertion") {
                document.getElementById("sort-button").disabled = true;
                document.getElementById("refresh-button").disabled = true;
                const arr = array;
                const n = arr.length;
                await timeOut(speed / 2);
                document.getElementById(0).classList.toggle("sorted");
                document.getElementById(`cap${0}`).classList.toggle("sorted-text");
                document.querySelectorAll(".cap").forEach(el => { el.classList.toggle("unSorted-text") });
                for (let i = 1; i < n; i++) {
                    if (path == "/insertion") {
                        // Choosing the first element in our unsorted subarray
                        let current = arr[i];
                        setSorted(arr.slice(0, i))
                        setUnSorted(arr.slice(i))
                        await timeOut(speed / 2);
                        document.getElementById(i).classList.toggle("current");
                        document.getElementById(`cap${i}`).classList.toggle("current-text");
                        await timeOut(speed);
                        // The last element of our sorted subarray
                        let j = i - 1;
                        while ((j > -1) && (current < arr[j])) {
                            if (path == "/insertion") {
                                document.getElementById(`swap${j}`).classList.toggle("swap");
                                await timeOut(speed);
                                document.getElementById(`swap${j}`).classList.toggle("swap");
                                // arr[j + 1] = arr[j];
                                let tmp = arr[j];
                                arr[j] = arr[j + 1];
                                arr[j + 1] = tmp;
                                setArray([...arr]);
                                await timeOut(speed);
                                j--;
                            }
                        }
                        if (j > -1) {
                            document.getElementById(`stay${j}`).classList.toggle("stay");
                            await timeOut(speed);
                            document.getElementById(`stay${j}`).classList.toggle("stay");
                        }
                        arr[j + 1] = current;
                        document.getElementById(j + 1).classList.toggle("current");
                        document.getElementById(`cap${j + 1}`).classList.toggle("current-text");
                        document.getElementById(j + 1).classList.toggle("sorted");
                        document.getElementById(`cap${j + 1}`).classList.toggle("sorted-text");
                        setArray(arr);
                        await timeOut(speed);
                    } else {
                        return;
                    }
                }
                setUnSorted([])
                setSorted(arr)
                await timeOut(speed);
                turnOn();
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
                <div className="swap thought-bubble bubble-bottom-left" id={`swap${index}`}>
                    <p className="greater">{tube} &gt; {array[index + 1]}</p>
                    <div>Swap</div>
                    <SwapIcon className="swap-icon" sx={{ fontSize: 40 }} />
                </div>
                <div className="stay thought-bubble bubble-bottom-left" id={`stay${index}`}>
                    <p className="greater" >{array[index]} &lt; {array[index + 1]}</p>
                    <div className="no-swap">No Swap</div>
                </div>
                <div className="finished thought-bubble bubble-bottom-left" id={`finished${index}`}>
                    <div className="no-swap">Sorted&nbsp;!!!</div>
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
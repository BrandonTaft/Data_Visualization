import { useState, useEffect } from "react";
import Method from "../src/components/Method";
import getArray from "../src/components/Array";
import ButtonBox from "../src/components/ButtonBox.js";
import Box from "@mui/material/Box";
import { QuickExplanation } from "../src/components/Explanations";

function QuickSort() {

    const [speed, setSpeed] = useState(2500);
    // eslint-disable-next-line no-unused-vars
    const [myPivotIndex, setMyPivotIndex] = useState([]);
    const { array, setArray, refresh, setRefresh} = getArray();

    useEffect(() => {
        clearAll();
    }, [refresh]);

    function clearAll() {
        document.querySelectorAll(".tube").forEach(el => { el.classList.remove("sorted") });
        document.querySelectorAll(".cap").forEach(el => { el.classList.remove("sorted-text") });
        document.querySelectorAll(".tube").forEach(el => { el.classList.remove("index-element") });
        document.querySelectorAll(".cap").forEach(el => { el.classList.remove("index-element-text") });
    }

    function timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    let x = 0;
    async function quickSort(arr, start, end) {
        if (x < 3) {
            document.getElementById("sort-button").disabled = true;
            document.getElementById("refresh-button").disabled = true;
            document.getElementById("in-nav-container").classList.toggle("turn-off");
            document.getElementById("footer-link-container").classList.toggle("turn-off");
            document.getElementById("menu-appbar").classList.toggle("turn-off");
        }
        if (start >= end) {
            if (document.getElementById(start) !== null) {
                document.getElementById(`start-greater-end${start}`).classList.remove("start-greater-end");
                await timeout(speed);
                document.getElementById(`start-greater-end${start}`).classList.add("start-greater-end");
                document.getElementById(start).classList.toggle("sorted");
                document.getElementById(`cap${start}`).classList.toggle("sorted-text");
            }
            console.log(start, end)
            console.log("test", arr[start], arr[end])
            setArray([...arr]);
            await timeout(speed);
            return;
        }
        let index = await partition(arr, start, end);
        document.getElementById(index).classList.add("index-element");
        document.getElementById(`cap${index}`).classList.add("index-element-text");
        quickSort(arr, start, index - 1);
        quickSort(arr, index + 1, end);
        setArray([...arr]);
        await timeout(speed);
        x += 1;
        if (x === 3) {
            document.getElementById("sort-button").disabled = false;
            document.getElementById("refresh-button").disabled = false;
            document.getElementById("in-nav-container").classList.toggle("turn-off");
            document.getElementById("menu-appbar").classList.toggle("turn-off");
            document.getElementById("footer-link-container").classList.toggle("turn-off");
        }
    }

    async function partition(arr, start, end) {
        let pivotIndex = start;
        setMyPivotIndex(pivotIndex)
        let pivotValue = arr[end];
        document.getElementById(`cap${end}`).classList.toggle("pivot-value");
        document.getElementById(end).classList.toggle("pivot-value-tube");
        await timeout(speed);
        for (let i = start; i < end; i++) {
            document.getElementById(i).classList.add("quick-current");
            document.getElementById(`cap${pivotIndex}`).classList.add("pivot-index");
            document.getElementById(pivotIndex).classList.add("pivot-index-tube");
            await timeout(speed);
            if (arr[i] < pivotValue) {
                document.getElementById(`quick-swap${i}`).classList.toggle("quick-swap");
                await timeout(speed);
                document.getElementById(i).classList.remove("quick-current");
                document.getElementById(`quick-swap${i}`).classList.toggle("quick-swap");
                let temp = arr[i];
                arr[i] = arr[pivotIndex];
                arr[pivotIndex] = temp;
                document.getElementById(`cap${pivotIndex}`).classList.remove("pivot-index");
                document.getElementById(pivotIndex).classList.remove("pivot-index-tube");
                setArray([...arr]);
                await timeout(speed);
                pivotIndex++;
                setMyPivotIndex(pivotIndex)
                if (pivotIndex < arr.length - 1) {
                    document.getElementById(`cap${pivotIndex}`).classList.add("pivot-index");
                    document.getElementById(pivotIndex).classList.add("pivot-index-tube");
                }
                await timeout(speed);
            } else {
                document.getElementById(`quick-stay${i}`).classList.toggle("quick-stay");
                await timeout(speed);
                document.getElementById(`quick-stay${i}`).classList.toggle("quick-stay");
                document.getElementById(i).classList.remove("quick-current");
                await timeout(speed);
            }

        }

        //SWAP PIVOT VALUE AND PIVOT INDEX TO FINISH THE PARTITION FUNCTION
        document.getElementById(`quick-swap-pivot${pivotIndex}`).classList.toggle("quick-swap-pivot");
        await timeout(speed);
        document.getElementById(`cap${end}`).classList.remove("pivot-value");
        document.getElementById(end).classList.remove("pivot-value-tube");
        document.getElementById(`cap${pivotIndex}`).classList.remove("pivot-index");
        document.getElementById(pivotIndex).classList.remove("pivot-index-tube");
        document.getElementById(`quick-swap-pivot${pivotIndex}`).classList.toggle("quick-swap-pivot");
        await timeout(speed);

        let temp = arr[pivotIndex];
        arr[pivotIndex] = arr[end];
        arr[end] = temp;


        setArray([...arr]);
        await timeout(speed);
        return pivotIndex;
    }

    function runSort() {
        clearAll();
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
                <div className="quick quick-stay thought-bubble bubble-bottom-left " id={`quick-stay${index}`}>
                    <p className="quick-greater">{tube} &gt; Pivot Value</p>
                    <p className="quick-p">Nothing changes and the loop moves to next index</p>
                </div>
                <div className="quick qs quick-swap thought-bubble bubble-bottom-left " id={`quick-swap${index}`}>
                    <p className="quick-greater" >{array[index]} &lt; Pivot Value</p>
                    <p className="quick-p">Swap values with pivot index then pivot index moves one spot to the right</p>
                </div>
                <div className="quick qsp quick-swap-pivot thought-bubble bubble-bottom-left " id={`quick-swap-pivot${index}`}>
                    <p><span className="sorted-array">Pivot Index</span> and <span className="value-element">Pivot Value</span> swap places.</p>
                </div>
                <div className="quick start-greater-end thought-bubble bubble-bottom-left " id={`start-greater-end${index}`}>
                    <p className="quick-greater">start &gt;= end </p>
                    <p> This array is sorted. </p>
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
                    <Box className="quick-var-container">
                        <Box className="array-container insertion">
                            <span className="insertion-span">Array</span>
                            <span className="array-span">
                                [{array.toString()}]
                            </span>
                        </Box>
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
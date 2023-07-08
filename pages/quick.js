import { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/router';
import Method from "../src/components/Method";
import useArray from "../src/components/useArray";
import ButtonBox from "../src/components/ButtonBox.js";
import { quickTurnOff, quickTurnOn, timeOut } from "../src/components/Utils";
import Explanation from "../src/components/Explanations";

function QuickSort() {
    const [speed, setSpeed] = useState(3000);
    const tubeRef = useRef([]);
    const [isRunning, setIsRunning] = useState(false);
    const [arrI, setArrI] = useState(-1);
    const [stay, setStay] = useState(-1);
    const [swap, setSwap] = useState(-1);
    const [pivot, setPivot] = useState(-1);
    const [end, setEnd] = useState(-1);
    const [finished, setFinished] = useState(false);
    const [myPivotIndex, setMyPivotIndex] = useState([]);
    const { array, setArray, refresh, setRefresh } = useArray();
    const router = useRouter();
    let path = router.pathname;

    useEffect(() => {
        clearAll();
    }, [refresh]);

    function clearAll() {
        document.querySelectorAll(".tube").forEach(el => { el.classList.remove("sorted") });
        document.querySelectorAll(".tube").forEach(el => { el.classList.remove("index-element") });
    }

    let x = 0;
    async function quickSort(arr, start, end) {
        setIsRunning(true)
        setFinished(false)
       
        try {
            while (path === "/quick") {
                console.log("RUN")
                if (start >= end) {
                    if (document.getElementById(start) !== null) {
                        setEnd(-1)
                        await timeOut(speed);
                        setEnd(start)
                        tubeRef.current[start].classList.toggle("sorted");
                    }
                    setArray([...arr]);
                    await timeOut(speed);
                    return;
                }
                let index = await partition(arr, start, end);
                tubeRef.current[index].classList.add("index-element");
                quickSort(arr, start, index - 1);
                quickSort(arr, index + 1, end);
                setArray([...arr]);
                await timeOut(speed);
                x += 1;
                if (x === 3) {
                    setFinished(true)
                    setIsRunning(false)
                }

            }
        } catch (error) {
            return;
        }
    }

    async function partition(arr, start, end) {
        let pivotIndex = start;
        setMyPivotIndex(pivotIndex)
        let pivotValue = arr[end];
        tubeRef.current[end].classList.toggle("pivot-value");
        await timeOut(speed);
        for (let i = start; i < end; i++) {
            tubeRef.current[i].classList.add("quick-current");
            tubeRef.current[pivotIndex].classList.add("pivot-index");
            await timeOut(speed);
            if (arr[i] < pivotValue) {
                setSwap(i)
                await timeOut(speed);
                tubeRef.current[i].classList.remove("quick-current");
                setSwap(-1)
                let temp = arr[i];
                arr[i] = arr[pivotIndex];
                arr[pivotIndex] = temp;
                tubeRef.current[pivotIndex].classList.remove("pivot-index");
                setArray([...arr]);
                await timeOut(speed);
                pivotIndex++;
                setMyPivotIndex(pivotIndex)
                if (pivotIndex < arr.length - 1) {
                    tubeRef.current[pivotIndex].classList.add("pivot-index");
                }
                await timeOut(speed);
            } else {
                setStay(i)
                await timeOut(speed);
                setStay(-1)
                tubeRef.current[i].classList.remove("quick-current");
                await timeOut(speed);
            }
        }
        //SWAP PIVOT VALUE AND PIVOT INDEX TO FINISH THE PARTITION FUNCTION
        setPivot(pivotIndex)
        await timeOut(speed);
        tubeRef.current[end].classList.remove("pivot-value");
        tubeRef.current[pivotIndex].classList.remove("pivot-index");
        setPivot(-1)
        await timeOut(speed);
        let temp = arr[pivotIndex];
        arr[pivotIndex] = arr[end];
        arr[end] = temp;
        setArray([...arr]);
        await timeOut(speed);
        return pivotIndex;
    }

    function runSort() {
        clearAll();
        quickSort(array, 0, 5)
    }

    return (
        <div className="page-container">
            <div className="top-container">
                <p className="explanation-heading">Quick sort utilizes a divide and conquer method. It divides a list at a pivot point, breaking it into smaller parts to
                    perform sorting opereations on them. This is where the recursion comes in, quicksort is a function that calls itself to sort the smaller lists after they are split at the pivot point.
                    There are multiple ways to write this algorithm. I've decided to use this one because it makes the most sense to me.
                </p>
                <Method method={"quick"} />
                <Explanation type={"quick"} />
            </div>
            <div className="bottom-container">
                <div className="side-display insertion">
                    <ButtonBox
                        isRunning={isRunning}
                        sortMethod={runSort}
                        refresh={refresh}
                        setRefresh={setRefresh}
                        speed={speed}
                        setSpeed={setSpeed}
                        setFinished={setFinished}
                    />
                    <div className="quick-var-container">
                        <div className="array-container insertion">
                            <span className="insertion-span">Array</span>
                            <span className="array-span">
                                [{array.toString()}]
                            </span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {finished &&
                        <div className="finished-bubble bubble-bottom-left" >
                            <div className="no-swap">Sorted&nbsp;!!!</div>
                        </div>
                    }
                    {array.map((tube, index) => {
                        let cssProperties = { "--percent": `${tube * (100 / array.length)}` }
                        return (
                            <div
                                key={tube}
                                ref={e => tubeRef.current[index] = e}
                                className="tube"
                                style={cssProperties}
                            >
                                <i className="cap"></i>
                                <i className="fill" key={index}></i>
                                <div className="base">
                                    <div className="text">{tube}</div>
                                </div>
                                {stay === index &&
                                    <div className="quick quick-stay thought-bubble bubble-bottom-left " id={`quick-stay${index}`}>
                                        <p className="quick-greater">{tube} &gt; Pivot Value</p>
                                        <p className="quick-p">Nothing changes and the loop moves to next index</p>
                                    </div>
                                }
                                {swap === index &&
                                    <div className="quick qs quick-swap thought-bubble bubble-bottom-left " id={`quick-swap${index}`}>
                                        <p className="quick-greater" >{array[index]} &lt; Pivot Value</p>
                                        <p className="quick-p">Swap values with pivot index then pivot index moves one spot to the right</p>
                                    </div>
                                }
                                {pivot === index &&
                                    <div className="quick qsp quick-swap-pivot thought-bubble bubble-bottom-left " id={`quick-swap-pivot${index}`}>
                                        <p><span className="sorted-array">Pivot Index</span> and <span className="value-element">Pivot Value</span> swap places.</p>
                                    </div>
                                }
                                {end === index &&
                                    < div className="quick thought-bubble bubble-bottom-left ">
                                        <p className="quick-greater">start &gt;= end </p>
                                        <p> This element is sorted. </p>
                                    </div>
                                }
                            </div >
                        )
                    })
                    }
                </div>
            </div>

        </div>
    )
}

export default QuickSort
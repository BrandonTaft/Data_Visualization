import { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/router';
import Method from "../src/components/Method";
import useArray from "../src/components/useArray";
import ButtonBox from "../src/components/ButtonBox.js";
import { timeOut } from "../src/components/Utils";
import Explanation from "../src/components/Explanations";

function QuickSort() {
    const tubeRef = useRef([]);
    const countRef = useRef(0);
    const [speed, setSpeed] = useState(3000);
    const [isRunning, setIsRunning] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [arrI, setArrI] = useState(-1);
    const [stay, setStay] = useState(-1);
    const [swap, setSwap] = useState(-1);
    const [swapPivot, setSwapPivot] = useState(false);
    const [sorted, setSorted] = useState(-1);
    const [args, setArgs] = useState("");
    const [pivotIndex, setPivotIndex] = useState("");
    const { array, setArray, refresh, setRefresh } = useArray(8);
    const router = useRouter();
    let path = router.pathname;

    useEffect(() => {
        clearAll();
    }, [refresh]);

    function clearAll() {
        document.querySelectorAll(".tube").forEach(el => el.classList.remove("sorted"));
        document.querySelectorAll(".tube").forEach(el => el.classList.remove("index"));
        setArgs("");
        countRef.current = 0;
    }

    async function quickSort(arr, start, end) {
        setArgs(`${start} , ${end}`)
        setIsRunning(true)
        if (path === "/quick") {
            if (start > end) {
                if (tubeRef.current[start]) {
                    tubeRef.current[start].classList.add("sorted");
                    setSorted(start)
                    countRef.current = countRef.current + 1
                    await timeOut(speed);
                    setSorted(-1)
                }
                setArray([...arr]);
                await timeOut(500);
                if (countRef.current === 8) setIsRunning(false)
                return;
            }
            if (start === end) {
                if (tubeRef.current[start]) {
                    tubeRef.current[start].classList.add("sorted");
                    setSorted(start)
                    countRef.current = countRef.current + 1

                    if (start < 7) {
                        if (tubeRef.current[end + 1]) {
                            tubeRef.current[end + 1].classList.add("sorted");
                            countRef.current = countRef.current + 1
                        }
                    }
                    await timeOut(speed);
                    setSorted(-1)
                }
                setArray([...arr]);
                await timeOut(500);
                if (countRef.current === 8) setIsRunning(false)
                return;
            }
            let index = await partition(arr, start, end);
            setPivotIndex(index)
            if (tubeRef.current[index]) {
                tubeRef.current[index].classList.add("index");
            }
            await timeOut(500);
            await quickSort(arr, start, index - 1);
            await quickSort(arr, index + 1, end);
        } else return;
    }

    async function partition(arr, start, end) {
        let pivotIndex = start;
        let pivotValue = arr[end];
        for (let i = start; i < end; i++) {
            if (tubeRef.current[end]) {
                tubeRef.current[end].classList.add("pivot-value");
            }
            if (tubeRef.current[pivotIndex]) {
                tubeRef.current[pivotIndex].classList.add("pivot-index");
            }
            setArrI(i)
            await timeOut(250);
            if (arr[i] < pivotValue) {
                setSwap(i)
                await timeOut(speed);
                setArrI(-1)
                setSwap(-1)
                let temp = arr[i];
                arr[i] = arr[pivotIndex];
                arr[pivotIndex] = temp;
                if (tubeRef.current[pivotIndex]) {
                    tubeRef.current[pivotIndex].classList.remove("pivot-index");
                }
                pivotIndex++;
                setArray([...arr]);
                await timeOut(500);
                if (tubeRef.current[pivotIndex]) {
                    tubeRef.current[pivotIndex].classList.add("pivot-index");
                }
            }
            else {
                setStay(i)
                await timeOut(speed);
                setStay(-1)
                setArrI(-1)
                await timeOut(500);
            }
        }
        setSwapPivot(true)
        await timeOut(speed);
        setSwapPivot(false)
        if (tubeRef.current[end]) {
            tubeRef.current[end].classList.remove("pivot-value");
        }
        if (tubeRef.current[pivotIndex]) {
            tubeRef.current[pivotIndex].classList.remove("pivot-index");
        }
        let temp = arr[pivotIndex];
        arr[pivotIndex] = arr[end];
        arr[end] = temp;
        setArray([...arr]);
        await timeOut(1000);
        return pivotIndex;
    }

    function runSort() {
        clearAll();
        quickSort(array, 0, 7)
    }

    return (
        <div className="page-container">
            <div className="top-container">
                <p className="explanation-heading">Quick sort utilizes a divide and conquer method. It divides a list at a pivot point, breaking it into smaller parts to
                    perform sorting operations on them. This is where the recursion comes in, quicksort calls itself to sort the smaller lists after they are split at the pivot point.
                    This will repeat until the sub-arrays are broken down to one element.  Also, keep in mind there are multiple ways to write this algorithm.
                </p>
                <Method method={"quick"} />
                <Explanation type={"quick"} />
            </div>
            <div className="quick bottom-container">
                <div className="quick side-display insertion">
                    <ButtonBox
                        isRunning={isRunning}
                        isMuted={isMuted}
                        setIsMuted={setIsMuted}
                        sortMethod={runSort}
                        refresh={refresh}
                        setRefresh={setRefresh}
                        speed={speed}
                        setSpeed={setSpeed}
                    />
                    <div className="insertion var-container">
                        <div className="array-container insertion">
                            <h3>Array</h3>
                            <span className="quick array-span">
                                [{array.toString()}]
                            </span>
                        </div>
                        <div className="array-container insertion">
                            <h3>( Start , End )</h3>
                            <span className="quick array-span">
                                ({args})
                            </span>
                        </div>
                        <div className="array-container insertion">
                            <h3>Pivot Index</h3>
                            <span className="quick array-span">
                                arr[{pivotIndex}]
                            </span>
                        </div>
                    </div>
                </div>
                <div className="quick-row row">
                    {(!isMuted && (stay >= 0 || sorted >= 0)) &&
                        <div className="quick-swap quick thought-bubble bubble-bottom-left">
                            {stay >= 0 &&
                                <>
                                    <p>{array[stay]} &gt; <span className="orange">Pivot Value</span></p>
                                    <p>Nothing changes</p>
                                </>
                            }

                            {sorted >= 0 &&
                                <>
                                    <p className="blue">quickSort(arr, {args})</p>
                                    <p>start &gt;= end </p>
                                    <p className="orange"> arr[{sorted}] is sorted. </p>
                                </>
                            }
                        </div>
                    }
                    {(!isMuted && (swap >= 0 || swapPivot)) &&
                        <div className="quick-swap quick thought-bubble bubble-bottom-left">
                            {swap >= 0 &&
                                <>
                                    <p>{array[swap]} &lt; <span className="orange">Pivot Value</span></p>
                                    <p>Swap values with <span className="blue">pivot index</span></p>
                                    <p>then <span className="blue">pivot index</span> moves up one spot</p>
                                </>
                            }
                            {swapPivot &&
                                <>
                                    <p><span className="blue">pivot index</span> and <span className="orange">Pivot Value</span></p>
                                    <p> swap places.</p>
                                </>
                            }
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
                                {arrI === index &&
                                    <div className="arri">arr[i]</div >
                                }

                                <div className="index-element">INDEX</div >

                                <i className="cap"></i>
                                <i className="fill" key={index}></i>
                                <div className="base">
                                    <div className="quick text">{tube}</div>
                                </div>

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
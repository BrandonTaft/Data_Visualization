import { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/router';
import Method from "../src/components/Method";
import useArray from "../src/components/useArray";
import ButtonBox from "../src/components/ButtonBox.js";
import { timeOut } from "../src/components/Utils";
import Explanation from "../src/components/Explanations";

function QuickSort() {
    const [speed, setSpeed] = useState(3000);
    const tubeRef = useRef([]);
    const [isRunning, setIsRunning] = useState(false);
    const [arrI, setArrI] = useState(-1);
    const [arrJ, setArrJ] = useState(-1);
    const [stay, setStay] = useState(-1);
    const [swap, setSwap] = useState(-1);
    const [swapPivot, setSwapPivot] = useState(false);
    const [end, setEnd] = useState(false);
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
        console.log(start, end)
        // try {
        //     while (path === "/quick") {
                if (start >= end) {
                    // if (tubeRef.current[start]) {
                    //     setEnd(true)
                    //     await timeOut(speed);
                    //     setEnd(false)
                    //     tubeRef.current[start].classList.toggle("sorted");
                    // }
                    //setArray([...arr]);
                    x += 1;
                if (x > 3) {
                    
                    setIsRunning(false)
                }
                
                    //await timeOut(speed);
                    return;
                }
                // tubeRef.current[end].classList.add("pivot-value");
                // tubeRef.current[start].classList.add("pivot-index");
                let index = await partition(arr, start, end);
                console.log(index)
                // tubeRef.current[index].classList.add("index-element");
                quickSort(arr, start, index - 1);
                quickSort(arr, index + 1, end);
                // setArray([...arr]);
                // await timeOut(speed);
                

            //}
        // } catch (error) {
        //     return;
        // }
    }

    async function partition(arr, start, end) {
        let pivotIndex = start;
        let pivotValue = arr[end];

        //await timeOut(speed);
        for (let i = start; i < end; i++) {
           // setArrI(i)
            // tubeRef.current[i].classList.add("quick-current");
            // tubeRef.current[end].classList.add("pivot-value");
            // tubeRef.current[pivotIndex].classList.add("pivot-index");
            // await timeOut(speed);
            if (arr[i] < pivotValue) {
                // setSwap(i)
                // await timeOut(speed);
                // // tubeRef.current[i].classList.remove("quick-current");
                // setArrI(-1)
                // setSwap(-1)
                let temp = arr[i];
                arr[i] = arr[pivotIndex];
                arr[pivotIndex] = temp;
                // tubeRef.current[pivotIndex].classList.remove("pivot-index");
                setArray([...arr]);
                await timeOut(speed);
                pivotIndex++;
                // // if (pivotIndex < arr.length - 1) {
                // //     tubeRef.current[pivotIndex].classList.add("pivot-index");
                // // }
                // await timeOut(speed);
             } 
            //else {
            //     setStay(i)
            //     await timeOut(speed);
            //     setStay(-1)
            //     setArrI(-1)
            //     // tubeRef.current[i].classList.remove("quick-current");
            //     await timeOut(100);
            // }
        }
        //SWAP PIVOT VALUE AND PIVOT INDEX TO FINISH THE PARTITION FUNCTION
        // setSwapPivot(true)
        // await timeOut(speed);
        // tubeRef.current[end].classList.remove("pivot-value");
        // tubeRef.current[pivotIndex].classList.remove("pivot-index");
        // setSwapPivot(false)
        // await timeOut(speed);
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
                    {(swap >= 0 || stay >= 0 || swapPivot || end) &&
                        <div className="thought-bubble bubble-bottom-left">
                            {stay >= 0 &&
                                <>
                                    <p>{array[stay]} &gt; Pivot Value</p>
                                    <p>Nothing changes</p>
                                </>
                            }
                            {swap >= 0 &&
                                <>
                                    <p>{array[swap]} &lt; Pivot Value</p>
                                    <p>Swap values with pivot index then pivot index moves one spot to the right</p>
                                </>
                            }
                            {swapPivot &&

                                <p><span>Pivot Index</span> and <span>Pivot Value</span> swap places.</p>

                            }
                            {end &&
                                <>
                                    <p>start &gt;= end </p>
                                    <p> This element is sorted. </p>
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
                                <i className="cap"></i>
                                <i className="fill" key={index}></i>
                                <div className="base">
                                    <div className="text">{tube}</div>
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
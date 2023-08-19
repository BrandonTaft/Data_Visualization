import React, { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/router';
import Method from "../src/components/Method";
import useArray from "../src/components/useArray";
import ButtonBox from "../src/components/ButtonBox.js";
import { timeOut } from "../src/components/Utils";
import Explanation from "../src/components/Explanations";

function Selection() {
    const tubeRef = useRef([]);
    const [isRunning, setIsRunning] = useState(false);
    const [mute, setMute] = useState(false);
    const [arrI, setArrI] = useState(-1);
    const [arrJ, setArrJ] = useState(-1);
    const [stay, setStay] = useState(-1);
    const [swap, setSwap] = useState(-1);
    const [lastIndex, setLastIndex] = useState(false);
    const [minBubble, setMinBubble] = useState(false);
    const [move, setMove] = useState(false);
    const [speed, setSpeed] = useState(3000);
    const [sorted, setSorted] = useState([]);
    const [unSorted, setUnSorted] = useState([]);
    const { array, setArray, refresh, setRefresh } = useArray(6);
    const router = useRouter();
    let path = router.pathname;

    useEffect(() => {
        setSorted([])
        tubeRef.current.forEach(el => el.classList.remove('sorted'));
    }, [refresh]);

    async function selectionSort() {
        setIsRunning(true)
        tubeRef.current.forEach(el => el.classList.remove('sorted'));
        try {
            while (path == "/selection") {
                const arr = array;
                const n = arr.length;
                document.querySelectorAll(".cap").forEach(el => { el.classList.toggle("unSorted-text") });
                await timeOut(1000);
                for (let i = 0; i < n - 1; i++) {
                    setArrI(i)
                    tubeRef.current[i].classList.toggle("min-tube");
                    await timeOut(2000);
                    let min = i;
                    for (let j = i + 1; j < n; j++) {
                        setArrJ(j)
                        tubeRef.current[j].classList.toggle("compare-tube");
                        if (arr[j] > arr[min]) {
                            setStay(j)
                            await timeOut(speed);
                            tubeRef.current[j].classList.toggle("compare-tube");
                            setStay(-1)
                        } else if (arr[j] < arr[min]) {
                            setSwap(j)
                            await timeOut(speed);
                            tubeRef.current[j].classList.toggle("compare-tube");
                            tubeRef.current[min].classList.toggle("min-tube");
                            tubeRef.current[j].classList.toggle("min-tube");
                            setSwap(-1)
                            min = j;
                        }
                        setArrJ(-1)
                        await timeOut(1000);
                    } if (min === i) {
                        setMinBubble(true)
                        await timeOut(speed);
                        setMinBubble(false)
                    } else if (min !== i) {
                        setMove(true)
                        await timeOut(speed);
                        setMove(false)
                        let tmp = arr[i];
                        arr[i] = arr[min];
                        arr[min] = tmp;
                        setArray([...arr]);
                        await timeOut(2000);
                    }
                    tubeRef.current[i].classList.toggle("min-tube");
                    tubeRef.current[i].classList.toggle("sorted");
                    setSorted(arr.slice(0, i + 1))
                    setUnSorted(arr.slice(i + 1))
                    setArray(arr);
                    await timeOut(2000);
                }
                setArrI(5)
                setLastIndex(true)
                tubeRef.current[5].classList.toggle("sorted");
                await timeOut(speed);
                setArrI(-1)
                setLastIndex(false)
                setUnSorted([])
                setSorted(arr)
                await timeOut(100);
                document.querySelectorAll(".cap").forEach(el => { el.classList.toggle("unSorted-text") });
                setIsRunning(false)
                return arr;
            }
        } catch (error) {
            return;
        }
    }
    return (
        <div className="page-container">
            <div className="selection top-container">
                <p className="explanation-heading">Selection sort is like insertion sort in the way that you can think of it as dividing the array into two parts, sorted and unsorted. The sorted part will be on the left side and it will start off empty.
                    On each pass throught the array you take the smallest element and add it to end of the sorted side. Then repeat until you have gone through the whole array.
                </p>
                <Method method={"selection"} />
                <Explanation type={"selection"} />
            </div>
            <div className="bottom-container">
                <div className="side-display insertion">
                    <ButtonBox
                        isRunning={isRunning}
                        sortMethod={selectionSort}
                        refresh={refresh}
                        setRefresh={setRefresh}
                        speed={speed}
                        setSpeed={setSpeed}
                    />
                    <div className="var-container">
                        <div className="insertion array-container">
                            <h3>Array</h3>
                            <span className="array-span">
                                [{array.toString()}]
                            </span>
                        </div>
                        <div className="insertion array-container">
                            <h3>Unsorted</h3>
                            <span className="array-span">
                                [{unSorted.toString()}]
                            </span>
                        </div>
                        <div className="insertion array-container">
                            <h3>Sorted Array</h3>
                            <span className="array-span">
                                [{sorted.toString()}]
                            </span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {(mute && (stay > 0 || swap > 0 || move || minBubble || lastIndex)) &&
                        < div className="thought-bubble bubble-bottom-left ">
                            {stay > 0 &&
                            <div>
                                <p>{array[stay]} &gt; <span className="green">min</span></p>
                                <p><span className="green">min</span> stays</p>
                            </div>
                            }
                            {swap > 0 &&
                                <div>
                                    <p>{array[swap]} &lt; <span className="green">min</span></p>
                                    <p><span className="green">min</span> is now {array[swap]}</p>
                                </div>
                            }
                            {move &&
                                <div>
                                    <p><span className="green">min</span> swaps places</p>
                                    <p>with <span className="blue">arr[i]</span></p>
                                </div>
                            }
                            {minBubble &&
                                <div>
                                    <p><span className="blue">arr[i]</span> is the smallest value</p>
                                    <p> so it stays where it is. </p>
                                </div>
                            }
                            {lastIndex &&
                                <div>
                                    <p>The last index</p>
                                    <p>is already sorted. </p>
                                </div>
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
                                {arrI === index && arrI < 5 &&
                                    <div className="selection arri">arr[i]</div >
                                }
                                {arrJ === index &&
                                    <div className="arrj">arr[j]</div >
                                }
                                <i className="cap"></i>
                                <i className="animated fill" key={index}></i>
                                <div className="base">
                                    <div className="text">{tube}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}

export default Selection
import { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/router';
import Method from "../src/components/Method";
import useArray from "../src/components/useArray";
import ButtonBox from "../src/components/ButtonBox.js";
import { timeOut } from "../src/components/Utils";
import Explanation from "../src/components/Explanations";
import SwapIcon from '@mui/icons-material/SwapHorizSharp';

function Selection() {
    const tubeRef = useRef([]);
    const [isRunning, setIsRunning] = useState(false);
    const [stay, setStay] = useState(false);
    const [swap, setSwap] = useState(false);
    const [minBubble, setMinBubble] = useState(false);
    const [move, setMove] = useState(false);
    const [finished, setFinished] = useState(false);
    const [speed, setSpeed] = useState(3000);
    const [sorted, setSorted] = useState([]);
    const [unSorted, setUnSorted] = useState([]);
    const { array, setArray, refresh, setRefresh } = useArray();
    const router = useRouter();
    let path = router.pathname;

    useEffect(() => {
        setSorted([])
    }, [refresh]);

    async function selectionSort() {
        setIsRunning(true)
        setFinished(false)
        try {
            console.log(path)
            while (path == "/selection") {
                const arr = array;
                const n = arr.length;
                document.querySelectorAll(".cap").forEach(el => { el.classList.toggle("unSorted-text") });
                await timeOut(speed / 2);
                for (let i = 0; i < n; i++) {
                    // Finding the smallest number in the subarray
                    tubeRef.current[i].classList.toggle("min-tube");
                    await timeOut(speed);
                    let min = i;
                    for (let j = i + 1; j < n; j++) {
                        if (arr[j] > arr[min]) {
                            setStay(j)
                            await timeOut(speed);
                            setStay(-1)
                        } else if (arr[j] < arr[min]) {
                            setSwap(j)
                            await timeOut(speed);
                            tubeRef.current[min].classList.toggle("min-tube");
                            tubeRef.current[j].classList.toggle("min-tube");
                            setSwap(-1)
                            await timeOut(speed);
                            min = j;
                        }
                    } if (min == i) {
                        setMinBubble(min)
                        await timeOut(speed);
                        setMinBubble(-1)
                    } else if (min != i) {
                        // Swapping the elements
                        setMove(min)
                        await timeOut(speed);
                        setMove(-1)
                        let tmp = arr[i];
                        arr[i] = arr[min];
                        arr[min] = tmp;
                        setArray([...arr]);
                        await timeOut(speed);
                    }
                    tubeRef.current[i].classList.toggle("min-tube");
                    tubeRef.current[i].classList.toggle("sorted");
                    setSorted(arr.slice(0, i + 1))
                    setUnSorted(arr.slice(i + 1))
                    setArray(arr);
                    await timeOut(speed);
                }
                setUnSorted([])
                setSorted(arr)
                await timeOut(speed);
                document.querySelectorAll(".cap").forEach(el => { el.classList.toggle("unSorted-text") });
                tubeRef.current.forEach(el => { el.classList.toggle("sorted") });
                document.querySelectorAll(".cap").forEach(el => { el.classList.toggle("sorted-text") });
                setFinished(true)
                setIsRunning(false)
                return arr;
            }
        } catch (error) {
            return;
        }
    }
    return (
        <div className="page-container">
            <div className="insertion top-container">
                <p className="explanation-heading">In selection sort you will divide an array into two parts, sorted and unsorted. The sorted part will be on the left side and it will start off empty.
                    On each pass throught the unsorted array you take the smallest element and add it to end of the sorted side. Then repeat until you have gone through the whole array.
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
                        setFinished={setFinished}
                    />
                    <div className="insertion var-container">
                        <div className="insertion array-container">
                            <span className="insertion-span">Array</span>
                            <span className="insertion array-span">
                                [{array.toString()}]
                            </span>
                        </div>
                        <div className="checked-container insertion">
                            <span className="insertion-span">Unsorted</span>
                            <span className="insertion array-span">
                                [{unSorted.toString()}]
                            </span>
                        </div>
                        <div className="checked-container insertion">
                            <span className="insertion-span">Sorted Array</span>
                            <span className="insertion array-span">
                                [{sorted.toString()}]
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
                    <div className="selection selection-stay thought-bubble bubble-bottom-left ">
                        <p className="selection greater">{tube} &gt; min</p>
                        <p className="selection no-tm mb">min stays the same</p>
                    </div>
                }
                {swap === index &&
                    <div className="selection selection-swap thought-bubble bubble-bottom-left ">
                        <p className="selection greater" >{array[index]} &lt; min</p>
                        <p className="selection no-tm">This is the new min</p>
                        <SwapIcon className="selection swap-icon" sx={{ fontSize: 40 }} />
                    </div>
                }
                { move === index &&
                <div className="selection move-to-front thought-bubble mtf bubble-bottom-left ">
                    <p className="mtf-p">Swaps places with <span className="j-element">arr[i]</span> making it the last element in the sorted array</p>
                </div>
                    }
                {minBubble === index &&
                    <div className="selection i-is-min thought-bubble iim mtf bubble-bottom-left ">
                        <p className="mtf-p tm">&nbsp;<span className="j-element">arr[i]</span>&nbsp; was the lowest element so it stays where it is. </p>
                    </div>
                }
            </div>
        )
    })}
                </div>
            </div>
        </div>
    )
}

export default Selection
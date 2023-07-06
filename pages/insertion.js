import { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/router';
import Method from "../src/components/Method";
import getArray from "../src/components/useArray";
import ButtonBox from "../src/components/ButtonBox.js";
import { timeOut } from "../src/components/Utils";
import Explanation from "../src/components/Explanations";
import SwapIcon from '@mui/icons-material/SwapHorizSharp';

function Insertion() {
    const tubeRef = useRef([]);
    const [isRunning, setIsRunning] = useState(false);
    const [stay, setStay] = useState(false);
    const [swap, setSwap] = useState(false);
    const [finished, setFinished] = useState(false);
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
        setIsRunning(true)
        setFinished(false)
        try {
            while (path == "/insertion") {
                const arr = array;
                const n = arr.length;
                await timeOut(speed / 2);
                tubeRef.current[0].classList.toggle("sorted");
                document.querySelectorAll(".cap").forEach(el => { el.classList.toggle("unSorted-text") });
                for (let i = 1; i < n; i++) {
                    // Choosing the first element in our unsorted subarray
                    let current = arr[i];
                    setSorted(arr.slice(0, i))
                    setUnSorted(arr.slice(i))
                    await timeOut(speed / 2);
                    tubeRef.current[i].classList.toggle("current");
                    await timeOut(speed);
                    // The last element of our sorted subarray
                    let j = i - 1;
                    while ((j > -1) && (current < arr[j])) {
                        setSwap(j)
                        await timeOut(speed);
                        setSwap(-1)
                        let tmp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = tmp;
                        setArray([...arr]);
                        await timeOut(speed);
                        j--;
                    }
                    if (j > -1) {
                        setStay(j)
                        await timeOut(speed);
                        setStay(-1)
                    }
                    arr[j + 1] = current;
                    tubeRef.current[j + 1].classList.toggle("current");
                    tubeRef.current[j + 1].classList.toggle("sorted");
                    setArray(arr);
                    await timeOut(speed);
                }
                setUnSorted([])
                setSorted(arr)
                await timeOut(speed);
                document.querySelectorAll(".cap").forEach(el => { el.classList.toggle("unSorted-text") });
                document.querySelectorAll(".tube").forEach(el => { el.classList.toggle("sorted") });
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
                <p className="explanation-heading">Insertion can be compared to sorting a hand of cards as you draw from the top of a deck. The unsorted array is the deck and the sorted array is your hand.
                    The first element will be the first card in your hand and each subsequent element is a new card that you draw and add to your hand. You then sort your hand before drawing another
                    card from the deck.
                </p>
                <Method method={"insertion"} />
                <Explanation type={"insertion"} />
            </div>
            <div className="bottom-container">
                <div className="side-display insertion">
                    <ButtonBox
                        isRunning={isRunning}
                        sortMethod={insertionSort}
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
                                {swap === index &&
                                    <div className="thought-bubble bubble-bottom-left">
                                        <p className="greater">{array[index]} &nbsp;  &gt; &nbsp;{array[index + 1]}</p>
                                        <div>Swap</div>
                                        <SwapIcon className="swap-icon" sx={{ fontSize: 30 }} />
                                    </div>
                                }
                                {stay === index &&
                                    <div className="thought-bubble bubble-bottom-left stay-bubble">
                                        <p className="greater" >{array[index]} &lt; {array[index + 1]}</p>
                                        <div className="no-swap">No Swap</div>
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

export default Insertion
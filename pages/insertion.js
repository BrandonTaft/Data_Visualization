import { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/router';
import Method from "../src/components/Method";
import getArray from "../src/components/useArray";
import ButtonBox from "../src/components/ButtonBox.js";
import { timeOut } from "../src/components/Utils";
import Explanation from "../src/components/Explanations";

function Insertion() {
    const tubeRef = useRef([]);
    const [isRunning, setIsRunning] = useState(false);
    const [stay, setStay] = useState(-1);
    const [swap, setSwap] = useState(-1);
    const [speed, setSpeed] = useState(3000);
    const [sorted, setSorted] = useState([]);
    const [unSorted, setUnSorted] = useState([]);
    const { array, setArray, refresh, setRefresh } = getArray();
    const router = useRouter();
    let path = router.pathname;

    useEffect(() => {
        setSorted([])
        tubeRef.current.forEach(el => el.classList.remove('finished'));
    }, [refresh]);

    async function insertionSort() {
        setIsRunning(true)
        tubeRef.current.forEach(el=>el.classList.remove('finished'));
        try {
            while (path == "/insertion") {
                const arr = array;
                const n = arr.length;
                await timeOut(speed / 2);
                if (tubeRef.current[0]) {
                tubeRef.current[0].classList.toggle("sorted");
                }
                document.querySelectorAll(".cap").forEach(el => { el.classList.toggle("unSorted-text") });
                for (let i = 1; i < n; i++) {
                    // Choosing the first element in our unsorted subarray
                    let current = arr[i];
                    setSorted(arr.slice(0, i))
                    setUnSorted(arr.slice(i))
                    await timeOut(speed / 2);
                    if (tubeRef.current[i]) {
                    tubeRef.current[i].classList.toggle("current");
                    }
                    await timeOut(speed);
                    // The last element of our sorted subarray
                    let j = i - 1;
                    while ((j > -1) && (current < arr[j])) {
                        setSwap(j)
                        await timeOut(speed);
                        setSwap(-1)
                        if (tubeRef.current[j]) {
                        tubeRef.current[j].classList.toggle("swap-right");
                        }
                        if (tubeRef.current[j + 1]) {
                        tubeRef.current[j + 1].classList.toggle("swap-left");
                        }
                        await timeOut(speed)
                        let tmp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = tmp;                   
                        tubeRef.current[j].classList.toggle("swap-right");
                        tubeRef.current[j + 1].classList.toggle("swap-left");
                        setArray([...arr]);
                        await timeOut(100);
                        j--;
                    }
                    if (j > -1) {
                        setStay(j)
                        await timeOut(speed);
                        setStay(-1)
                    }
                    arr[j + 1] = current;
                    if (tubeRef.current[j + 1]) {
                    tubeRef.current[j + 1].classList.toggle("current");
                    tubeRef.current[j + 1].classList.toggle("sorted");
                    }
                    setArray(arr);
                    await timeOut(speed);
                }
                setUnSorted([])
                setSorted(arr)
                await timeOut(speed);
                document.querySelectorAll(".cap").forEach(el => { el.classList.toggle("unSorted-text") });
                document.querySelectorAll(".tube").forEach(el => { el.classList.toggle("sorted") });
                document.querySelectorAll(".cap").forEach(el => { el.classList.toggle("sorted-text") });
                tubeRef.current.forEach(el=>el.classList.add('finished'));
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
                    {(swap >= 0 || stay >= 0) &&
                        <div className="thought-bubble bubble-bottom-left">
                            {swap >= 0 &&
                                <>
                                    <p>{array[swap]} &nbsp;  &gt; &nbsp; {array[swap + 1]}</p>
                                    <p>Swap</p>
                                </>
                            }
                            {stay >= 0 &&
                                <>
                                    <p>{array[stay]} &nbsp; &lt; &nbsp; {array[stay + 1]}</p>
                                    <p className="no-swap">No Swap</p>
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
                                <i className="cap"></i>
                                <i className="fill" key={index}></i>
                                <div className="base">
                                    <div className="text">{tube}</div>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Insertion
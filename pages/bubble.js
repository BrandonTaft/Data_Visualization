import { useState, useRef, useEffect } from "react";
import { useRouter } from 'next/router';
import Method from "../src/components/Method";
import useArray from "../src/components/useArray";
import Explanation from "../src/components/Explanations";
import ButtonBox from "../src/components/ButtonBox.js";
import { timeOut } from "../src/components/Utils";

function Bubble() {
    const tubeRef = useRef([]);
    const [isRunning, setIsRunning] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [stay, setStay] = useState(-1);
    const [swap, setSwap] = useState(-1);
    const [speed, setSpeed] = useState(2000);
    const [swapped, setSwapped] = useState("True");
    const { array, setArray, refresh, setRefresh } = useArray(6);
    const router = useRouter();
    let path = router.pathname;

    useEffect(() => {
        tubeRef.current.forEach(el => el.classList.remove('finished'));
    }, [refresh])

    async function bubbleSort() {
        setIsRunning(true)
        tubeRef.current.forEach(el => el.classList.remove('finished'));
        let swapped;
        do {
            swapped = false
            setSwapped("False")
            for (let i = 0; i < array.length - 1; i++) {
                await timeOut(1000);
                if (tubeRef.current[i]) {
                    tubeRef.current[i].classList.toggle("current-element");
                }
                if (tubeRef.current[i + 1]) {
                    tubeRef.current[i + 1].classList.toggle("next-element");
                }
                if (array[i] > array[i + 1]) {
                    setSwap(i)
                    await timeOut(speed)
                    setSwap(-1)
                    if (tubeRef.current[i]) {
                        tubeRef.current[i].classList.toggle("swap-right");
                        tubeRef.current[i + 1].classList.toggle("swap-left");
                    }
                    await timeOut(1000)
                    let tmp = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = tmp;
                    swapped = true
                    setSwapped("True")
                    if (tubeRef.current[i]) {
                        tubeRef.current[i].classList.toggle("swap-right");
                        tubeRef.current[i + 1].classList.toggle("swap-left");
                    }
                } else {
                    if (tubeRef.current[i + 1]) {
                        setStay(i)
                        await timeOut(speed);
                        setStay(-1)
                    }
                }
                setArray([...array]);
                if (tubeRef.current[i]) {
                    tubeRef.current[i].classList.toggle("current-element");
                }
                if (tubeRef.current[i + 1]) {
                    tubeRef.current[i + 1].classList.toggle("next-element");
                }
            }
        } while (swapped && path == "/bubble")
        if (tubeRef.current[1]) {
            tubeRef.current.forEach(el => el.classList.add('finished'));
        }
        setIsRunning(false)
    }
    return (
        <div className="page-container">
            <div className="top-container">
                <p className="explanation-heading">Bubble sort is a simple comparison-based algorithm, in which each pair of adjacent elements is compared and the elements are swapped if they are not in order.</p>
                <Method method={"bubble"} />
                <Explanation type={"bubble"} />
            </div>
            <div className="bottom-container">
                <div className="side-display">
                    <ButtonBox
                        isRunning={isRunning}
                        isMuted={isMuted}
                        setIsMuted={setIsMuted}
                        sortMethod={bubbleSort}
                        refresh={refresh}
                        setRefresh={setRefresh}
                        speed={speed}
                        setSpeed={setSpeed}
                    />
                    <div className="var-container">
                        <div className="array-container">
                            <div className="cont-label">Array</div>
                            <span className="array-span">
                                [{array.toString()}]
                            </span>
                        </div>
                        <div className="checked-container">
                        <div className="cont-label">Swapped</div>
                            <span className="array-span">
                                {swapped}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {!isMuted && ((swap >= 0 || stay >= 0)) &&
                        <div className="thought-bubble bubble-bottom-left">
                            {swap >= 0 &&
                                <>
                                    <p>{array[swap]} &gt; {array[swap + 1]}</p>
                                    <p>Swap</p>
                                </>
                            }
                            {stay >= 0 &&
                                <>
                                    <p>{array[stay]} &lt; {array[stay + 1]}</p>
                                    <p>No Swap</p>
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

export default Bubble

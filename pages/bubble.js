import { useState, useRef } from "react";
import { useRouter } from 'next/router';
import Method from "../src/components/Method";
import useArray from "../src/components/useArray";
import Explanation from "../src/components/Explanations";
import ButtonBox from "../src/components/ButtonBox.js";
import { timeOut } from "../src/components/Utils";
import SwapIcon from '@mui/icons-material/SwapHorizSharp';
import thumb from '../public/icons/thumb.svg'
import Image from "next/image";

function Bubble() {
    const tubeRef = useRef([]);
    const [isRunning, setIsRunning] = useState(false);
    const [stay, setStay] = useState(-1);
    const [swap, setSwap] = useState(-1);
    const [finished, setFinished] = useState(false);
    const [speed, setSpeed] = useState(2000);
    const [swapped, setSwapped] = useState("");
    const { array, setArray, refresh, setRefresh } = useArray();
    const router = useRouter();
    let path = router.pathname;

    async function bubbleSort() {
        setIsRunning(true)
        setFinished(false)
        let swapped;
        do {
            swapped = false
            setSwapped("False")
            for (let i = 0; i < array.length - 1; i++) {
                await timeOut(speed / 2);
                if (tubeRef.current[i]) {
                    tubeRef.current[i].classList.toggle("current-element");
                }
                if (tubeRef.current[i + 1]) {
                    tubeRef.current[i + 1].classList.toggle("next-element");
                } else {
                    await timeOut(speed)
                }
                if (array[i] > array[i + 1]) {
                    setSwap(i)
                    await timeOut(speed)
                    setSwap(-1)
                    tubeRef.current[i].classList.toggle("swap-right");
                    tubeRef.current[i + 1].classList.toggle("swap-left");
                    await timeOut(speed)
                    

                    let tmp = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = tmp;
                    swapped = true
                    setSwapped("True")
                    tubeRef.current[i].classList.toggle("swap-right");
                    tubeRef.current[i + 1].classList.toggle("swap-left");
                    setArray([...array]);
                    
                } else {
                    if (tubeRef.current[i + 1]) {
                        setStay(i)
                        await timeOut(speed);
                        setStay(-1)
                    }
                }
                if (tubeRef.current[i]) {
                    tubeRef.current[i].classList.toggle("current-element");
                }
                if (tubeRef.current[i + 1]) {
                    tubeRef.current[i + 1].classList.toggle("next-element");
                }
               
            }
        } while (swapped && path == "/bubble")
        setFinished(true)
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
                        setFinished={setFinished}
                        sortMethod={bubbleSort}
                        refresh={refresh}
                        setRefresh={setRefresh}
                        speed={speed}
                        setSpeed={setSpeed}
                    />
                    <div className="var-container">
                        <div className="array-container">
                            <h3>Array</h3>
                            <span className="array-span">
                                [{array.toString()}]
                            </span>
                        </div>
                        <div className="checked-container">
                            <h3>Swapped</h3>
                            <span className="array-span">
                                {swapped}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {finished &&
                        <div className="finished-bubble bubble-bottom-left" >
                            <div className="no-swap">Sorted!</div>
                            <Image src={thumb} alt="thumb-icon" className="thumbs-up"/>
                        </div>
                    }
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

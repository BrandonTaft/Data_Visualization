import { useState } from "react";
import { useRouter } from 'next/router';
import Method from "../src/components/Method";
import getArray from "../src/components/Array";
import { UpDown } from "../src/components/Feedback";
import { BubbleExplanation } from "../src/components/Explanations";
import ButtonBox from "../src/components/ButtonBox.js";
import { turnOff, turnOn, timeOut } from "../src/components/Utils";
import SwapIcon from '@mui/icons-material/SwapHorizSharp';

function Bubble() {
    const [speed, setSpeed] = useState(3000);
    const [checked, setChecked] = useState("");
    const { array, setArray, refresh, setRefresh } = getArray();
    const router = useRouter();
    let path = router.pathname;

    async function bubbleSort() {
        turnOff();
        const arr = array;
        let checked;
        do {
            checked = false
            setChecked("False")
            for (let i = 0; i < arr.length; i++) {
                await timeOut(speed / 2);
                document.getElementById(i).classList.toggle("current-element");
                document.getElementById(`cap${i}`).classList.toggle("current-element-text");
                if (document.getElementById(i + 1) !== null) {
                    document.getElementById(i + 1).classList.toggle("next-element");
                    document.getElementById(`cap${i + 1}`).classList.toggle("next-element-text");
                } else {
                    await timeOut(speed);
                }
                if (arr[i] > arr[i + 1]) {
                    document.getElementById(`swap${i}`).classList.toggle("swap");
                    await timeOut(speed);
                    document.getElementById(`swap${i}`).classList.toggle("swap");
                    //Swap the elements in the array since element is less than the next element
                    let tmp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = tmp;
                    //Is only changed to true when there is a swap made
                    checked = true
                    setChecked("True")
                } else {
                    if (document.getElementById(i + 1) !== null) {
                        document.getElementById(`stay${i}`).classList.toggle("stay");
                        await timeOut(speed);
                        document.getElementById(`stay${i}`).classList.toggle("stay");
                    }
                }
                document.getElementById(i).classList.toggle("current-element");
                document.getElementById(`cap${i}`).classList.toggle("current-element-text");
                if (document.getElementById(i + 1) !== null) {
                    document.getElementById(i + 1).classList.toggle("next-element");
                    document.getElementById(`cap${i + 1}`).classList.toggle("next-element-text");
                }
                setArray([...arr]);
            }
        } while (checked && path == "/bubble")
        turnOn();
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
                <div className="swap thought-bubble bubble-bottom-left" id={`swap${index}`}>
                    <p className="greater">{array[index]} &gt; {array[index + 1]}</p>
                    <div>Swap</div>
                    <SwapIcon className="swap-icon" sx={{ fontSize: 40 }} />
                </div>
                <div className="stay thought-bubble bubble-bottom-left" id={`stay${index}`}>
                    <p className="greater" >{array[index]} &lt; {array[index + 1]}</p>
                    <div className="no-swap">No Swap</div>
                </div>
                <div className="finished thought-bubble bubble-bottom-left" id={`finished${index}`}>
                    <div className="no-swap">Sorted&nbsp;!!!</div>
                </div>
            </div>
        )
    });

    return (
        <div className="page-container">
            <div className="top-container">
                <div className="explanation">
                    <BubbleExplanation />
                </div>
                <Method method={"bubble"} />
            </div>
            <div className="bottom-container">
                <div className="side-display">
                    <ButtonBox
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
                            <h3>Checked</h3>
                            <span className="array-span">
                                {checked}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {display}
                </div>
            </div>
            <UpDown />
        </div>
    )
}

export default Bubble

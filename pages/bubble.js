import { useState } from "react";
import { useRouter } from 'next/router';
import Method from "../src/components/Method";
import getArray from "../src/components/Array";
import { UpDown } from "../src/components/Feedback";
import { BubbleExplanation } from "../src/components/Explanations";
import ButtonBox from "../src/components/ButtonBox.js";
import SwapIcon from '@mui/icons-material/SwapHorizSharp';

function Bubble() {
    const [speed, setSpeed] = useState(3000);
    const [checked, setChecked] = useState("");
    const { array, setArray, refresh, setRefresh } = getArray();
    const router = useRouter();
    let path = router.pathname;

    function timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function bubbleSort() {
        document.getElementById('finished2').classList.add("finished");
        document.getElementById("sort-button").disabled = true;
        document.getElementById("refresh-button").disabled = true;
        document.getElementById("in-nav-container").classList.toggle("turn-off");
        document.getElementById("menu-appbar").classList.toggle("turn-off");
        document.getElementById("footer-link-container").classList.toggle("turn-off");
        const arr = array;
        let checked;
        do {
            checked = false
            setChecked("False")
            for (let i = 0; i < arr.length; i++) {
                await timeout(speed);
                document.getElementById(i).classList.toggle("current-element");
                document.getElementById(`cap${i}`).classList.toggle("current-element-text");
                if (document.getElementById(i + 1) !== null) {
                    document.getElementById(i + 1).classList.toggle("next-element");
                    document.getElementById(`cap${i + 1}`).classList.toggle("next-element-text");
                } else {
                    await timeout(speed);
                }
                if (arr[i] > arr[i + 1]) {
                    document.getElementById(`swap${i}`).classList.toggle("swap");
                    await new Promise(resolve => setTimeout(resolve, speed));
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
                        await timeout(speed);
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
        document.getElementById("sort-button").disabled = false;
        document.getElementById("refresh-button").disabled = false;
        document.getElementById("in-nav-container").classList.toggle("turn-off");
        document.getElementById("menu-appbar").classList.toggle("turn-off");
        document.getElementById("footer-link-container").classList.toggle("turn-off");
        document.getElementById('finished2').classList.remove("finished");
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
                    <p className="less" >{array[index]} &lt; {array[index + 1]}</p>
                    <div>No Swap</div>
                </div>
                <div className="finished thought-bubble bubble-bottom-left" id={`finished${index}`}>
                    <div>Sorted&nbsp;!!!</div>
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

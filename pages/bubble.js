import { useState, useEffect } from 'react';
import Highlighter from "react-highlight-words";
import Method from './method';
import randomArray from "./randomArray";
import { ButtonBox, ButtonGrid } from '../src/components/MyButtons.js';
import Box from '@mui/material/Box';
import styles from '../src/css/bubble.module.css';

function Bubble() {
    const [speed, setSpeed] = useState(1000);
    const [text, setText] = useState("");
    const [explanation, setExplanation] = useState("")
    const { newRandomArray, setNewRandomArray, refresh, setRefresh, max, setMax } = randomArray();

    useEffect(() => {
    setExplanation(`While checked is true the do block will run. The do block immediately sets checked to false, then runs
        the for loop. As long as the for loop makes one change, it sets checked back to true. Since checked is true when the for loop completes
        it runs the do block again. This continues until the for loop makes a pass through the array without making a change which keeps checked as false
        which then breaks us out of the while loop.`)
    }, [])

    async function bubbleSort() {

        const arr = newRandomArray;
        let checked;

        do {
            checked = false
            for (let i = 0; i < arr.length; i++) {
                await new Promise(resolve => setTimeout(resolve, speed));
                // document.getElementById(i).classList.toggle("test");
                document.getElementById(i).classList.toggle("current-element");
                document.getElementById(`cap${i}`).classList.toggle("current-element-text");
                if (document.getElementById(i + 1) !== null) {
                    document.getElementById(i + 1).classList.toggle("next-element");
                    document.getElementById(`cap${i + 1}`).classList.toggle("next-element-text");
                }

                if (arr[i] > arr[i + 1]) {
                    setExplanation("")
                    await new Promise(resolve => setTimeout(resolve, speed));
                    setText("Since arr[i] is greater than arr[i + 1] so they swap positions and the loop moves to the next element")
                    await new Promise(resolve => setTimeout(resolve, speed));
                    //Swap the elements in the array since element is less than the next element
                    let tmp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = tmp;

                    //Is only changed to true when there is a swap made

                    checked = true

                } else {
                    setText("Since arr[i] is less than arr[i + 1] They stay where they are and the loop continues to next element");
                    await new Promise(resolve => setTimeout(resolve, speed));

                }
                document.getElementById(i).classList.toggle("current-element");
                document.getElementById(`cap${i}`).classList.toggle("current-element-text");
                if (document.getElementById(i + 1) !== null) {
                    document.getElementById(i + 1).classList.toggle("next-element");
                    document.getElementById(`cap${i + 1}`).classList.toggle("next-element-text");
                }
                setText("");
                setNewRandomArray([...arr]);
                await new Promise(resolve => setTimeout(resolve, 500));
            }
            //If a swap is not made checked will not be true thus terminating the loop
            //Ensuring loop will not run on a sorted array more than once
        } while (checked)
    }


    const display = newRandomArray.map((bar, index) => {
        let cssProperties = { '--percent': `${bar * (100 / newRandomArray.length)}` }
        return (
            <div className="tube" style={cssProperties} key={bar} id={`${index}`} >
                <i className="cap"><span className="cap-text" id={`cap${index}`}></span></i><i className="fill" key={bar}></i>
                <div className="base">
                    <div className="text">{bar}</div>
                </div>
            </div>
        )
    });

    return (
        <div>

            <Box sx={{ display: "flex" , margin: "0 1em 0 1em"}}>
            <Box className="thought-bubble">
                <Highlighter
                        highlightClassName="YourHighlightClass"
                        searchWords={["arr[i]", "arr[i + 1]"]}
                        autoEscape={true}
                        textToHighlight={explanation}
                    />
                </Box>
               
                <Method method={"bubble"} />
            </Box>
            <Box className={styles.newArray}>
                [{newRandomArray.toString()}]
            </Box>
             <ButtonGrid sortMethod={bubbleSort} refresh={refresh} setRefresh={setRefresh} setMax={setMax} speed={speed} setSpeed={setSpeed} />
            <div className={styles.row}>
                {display}
            </div>
            <Box className="thought-bubble-container">
                <div className="thought-bubble">
                <Highlighter
                        highlightClassName="YourHighlightClass"
                        searchWords={["arr[i]", "arr[i + 1]"]}
                        autoEscape={true}
                        textToHighlight={explanation}
                    />
                </div>
                <div className="pointer"></div>
            </Box>


        </div>
    )
}

export default Bubble

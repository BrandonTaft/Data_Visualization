import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import {materialDark} from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Box from '@mui/material/Box';

function Method({ method}) {
    let display;
    if (method === "bubble") {
        display = `let checked;
        do {
            checked = false
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > arr[i + 1]) {
                    let temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    checked = true
                }
            }
        } while (checked)
    `;

    } else if (method === "insertion"){
        display = `function insertionSort(inputArr) {
            let n = inputArr.length;
                for (let i = 1; i < n; i++) {
                    let current = inputArr[i];
                    let j = i-1; 
                    while ((j > -1) && (current < inputArr[j])) {
                        inputArr[j+1] = inputArr[j];
                        j--;
                    }
                    inputArr[j+1] = current;
                }
            return inputArr;
        }`;
    }
    return (
        <Box className={"method"}>
            <SyntaxHighlighter
                language="javascript"
                style={materialDark}
                wrapLongLines
                >
                {display}
            </SyntaxHighlighter>

        </Box>
    )
}

export default Method
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
        } while (checked)`;

    } else if (method === "insertion"){
        display = `insertion(arr) {
            let n = arr.length;
            for (let i = 1; i < n; i++) {
                let current = arr[i];
                let j = i-1; 
                while ((j > -1) && (current < arr[j])) {
                    arr[j+1] = arr[j];
                    j--;
                }
                arr[j+1] = current;
            }
            return arr;
        }`;
    } else if (method === "selection"){
        display = `selection(arr) {              
            for(let i = 0; i < arr.length; i++) {
                let min = i;
                for(let j = i+1; j < n; j++){
                    if(arr[j] < arr[min]) {
                        min=j; 
                    }
                 }
                 if (min != i) {
                     let tmp = arr[i]; 
                     arr[i] = arr[min];
                     arr[min] = tmp;      
                }
            }
            return arr;
        }`;
    }
    
    return (
        <Box className={"method"}>
            <SyntaxHighlighter
                language="javascript"
                style={materialDark}
                codeTagProps={{style: {fontSize: '15px'} }}
                >
                {display}
            </SyntaxHighlighter>

        </Box>
    )
}

export default Method
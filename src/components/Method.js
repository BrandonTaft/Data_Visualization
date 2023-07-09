import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Box from '@mui/material/Box';
import { memo } from 'react';

function Method({ method }) {
    let display;
    switch (method) {
        case "bubble":
        display = `function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true
            }
        }
    } while (swapped)
}`;
break;
     case "insertion" :
        display = `function insertionSort(arr) {
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
break;
    
    case "selection": 
        display = `function selection(arr) {              
    let n = arr.length;
    for(let i = 0; i < n - 1; i++) {
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
break;
    
 case "quick":
        display =
            `function swap(arr, a, b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp
}
            
function partition(arr, start, end){
    let pivotIndex = start;
    let pivotValue = arr[end];
    for(let i = start; i < end; i++){
        if(arr[i] < pivotValue){
            swap(arr, i, pivotIndex);
            pivotIndex++;
        }
    }
    swap(arr, pivotIndex, end);
    return pivotIndex;
    }
        
function quickSort(arr,start,end){
    if(start >= end){
        return;
    }
    let index = partition(arr,start,end);
    quickSort(arr,start,index - 1);
    quickSort(arr,index + 1, end)
}`
break;

default:
    break;
    }

    return (
        <Box className={"method"}>
            <SyntaxHighlighter
                language="javascript"
                style={materialDark}
                useInlineStyles={false}
            >
                {display}
            </SyntaxHighlighter>

        </Box>
    )
}

export default memo(Method)
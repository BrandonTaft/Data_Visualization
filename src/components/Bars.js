import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import useArray from "./useArray";
import { timeOut } from "./Utils";

function Bars({ bubbleSort, insertionSort, selectionSort, quickSort }) {
    const { array, setArray, refresh, setRefresh } = useArray();

    useEffect(() => {
        const arr = [];
            for (let i = 0; i < 6;) {
                let num = Math.floor(Math.random() * 6 + 1)
                while (arr.includes(num) === false) {
                    arr.push(num)
                    i++
                }
            }
    },[])

    useEffect(() => {
        async function bubbleSortFn() {
            let swapped;
            do {
                swapped = false
                for (let i = 0; i < array.length - 1; i++) {
                    if (array[i] > array[i + 1]) {
                        let temp = array[i];
                        array[i] = array[i + 1];
                        array[i + 1] = temp;
                        swapped = true
                    }
                    setArray([...array]);
                    await timeOut(100);
                }
            } while (swapped)
        }

        async function insertionSortFn() {
            let n = array.length;
            for (let i = 1; i < n; i++) {
                let current = array[i];
                let j = i - 1;
                while ((j > -1) && (current > array[j])) {
                    array[j + 1] = array[j];
                    setArray([...array]);
                    await timeOut(100);
                    j--;
                }
                array[j + 1] = current;
                setArray([...array]);
                await timeOut(100);
            }
            return array;
        }

        async function selectionSortFn() {
            for (let i = 0; i < array.length - 1; i++) {
                let min = i;
                for (let j = i + 1; j < array.length; j++) {
                    if (array[j] < array[min]) {
                        min = j;
                    }
                }
                if (min != i) {
                    let tmp = array[i];
                    array[i] = array[min];
                    array[min] = tmp;
                    setArray([...array]);
                    await timeOut(200);
                }
                setArray([...array]);
                await timeOut(200);
            }
            return array;
        }

        async function swap(array, a, b) {
            let temp = array[a];
            array[a] = array[b];
            array[b] = temp
            setArray([...array]);
            await timeOut(500);
        }

       function partition(array, start, end) {
            let pivotIndex = start;
            let pivotValue = array[end];
            for (let i = start; i < end; i++) {
                if (array[i] > pivotValue) {
                    swap(array, i, pivotIndex);
                    pivotIndex++;
                }
            }
            swap(array, pivotIndex, end);
            return pivotIndex;
        }

        async function quickSortFn(array, start, end) {
            if (start >= end) {
                return;
            }
            let index = partition(array, start, end);
            setArray([...array]);
            await timeOut(500);
            quickSortFn(array, start, index - 1);
            setArray([...array]);
            await timeOut(500);
            quickSortFn(array, index + 1, end);
            setArray([...array]);
            await timeOut(500);
        }

        if (bubbleSort) bubbleSortFn();
        if (insertionSort) insertionSortFn();
        if (selectionSort) selectionSortFn();
        if (quickSort) quickSortFn(array, 0, 5);

    }, [bubbleSort, insertionSort, selectionSort, quickSort])

    const display = array.map((bar, index) => {
        return (
            <div className="equalizer-bar" key={index} >
                <span style={{ height: (bar * 15) }}></span>
            </div>
        )
    })


    return (
        <div className="equalizer">
            {display}
        </div>
    )
}

export default dynamic(() => Promise.resolve(Bars), { ssr: false });


// export function BarsOne() {
//     return (
//         <div className="equalizer">
//             <div className="equalizer-bar">
//                 <span style={{ height: 15 }}></span>
//             </div>
//             <div className="equalizer-bar">
//                 <span style={{ height: 30 }}></span>
//             </div>
//             <div className="equalizer-bar">
//                 <span style={{ height: 45 }}></span>
//             </div>
//             <div className="equalizer-bar">
//                 <span style={{ height: 60 }}></span>
//             </div>
//             <div className="equalizer-bar">
//                 <span style={{ height: 75 }}></span>
//             </div>
//             <div className="equalizer-bar">
//                 <span style={{ height: 90 }}></span>
//             </div>
//             <div className="equalizer-bar">
//                 <span style={{ height: 105 }}></span>
//             </div>
//         </div>
//     )
// }

// export function BarsThree() {
//     return (
//         <div className="equalizer">
//             <div className="equalizer-bar">
//                 <span style={{ height: 105 }}></span>
//             </div>
//             <div className="equalizer-bar">
//                 <span style={{ height: 90 }}></span>
//             </div>
//             <div className="equalizer-bar">
//                 <span style={{ height: 75 }}></span>
//             </div>
//             <div className="equalizer-bar">
//                 <span style={{ height: 60 }}></span>
//             </div>
//             <div className="equalizer-bar">
//                 <span style={{ height: 45 }}></span>
//             </div>
//             <div className="equalizer-bar">
//                 <span style={{ height: 30 }}></span>
//             </div>
//             <div className="equalizer-bar">
//                 <span style={{ height: 15 }}></span>
//             </div>
//         </div>
//     )
// }


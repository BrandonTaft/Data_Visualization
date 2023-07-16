import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { timeOut } from "./Utils";

function Bars() {
    const [arr,setArr] = useState([]);
    const [sort, setSort] = useState(false);
    const [checkSort, setCheckSort] = useState(false);

useEffect(() => {
    if(sort === true) {
        console.log(arr)
        bubbleSort()
    }

    if(sort === false) {
        setArr([1,4,2,7,6,5,3])
    }
    
},[sort])

useEffect(() => {
    if(sort === false) {
        setArr([1,4,2,7,6,5,3])
    }
},[checkSort])


            // for (let i = 0; i < 7;) {
            //     let num = Math.floor(Math.random() * 7) + 1
            //     while (arr.includes(num) === false) {
            //         arr.push(num)
            //         i++
            //     }
            // }

    const display = arr.map((bar, index) => {
        return(
        <div className="equalizer-bar" key={index} onMouseEnter={() => setSort(true)} onMouseLeave={() => setSort(false)}>
                <span style={{ height: (bar * 15) }}></span>
            </div>
        )
    })

    async function bubbleSort() {
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
                setArr([...arr]);
                if(sort === true) {
                await timeOut(100);
                }
            }
        } while (swapped)
        // if(sort === false) {
        //     setArr([1,4,2,7,6,5,3])
        // }
        setCheckSort(!checkSort)
    }

    return (
        <div className="equalizer">
            {display}
        </div>
    )
}

export default dynamic(()=> Promise.resolve(Bars), {ssr: false});


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


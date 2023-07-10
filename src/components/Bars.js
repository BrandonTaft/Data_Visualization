import { useState, useEffect } from "react";
import useArray from "./useArray";
import { timeOut } from "./Utils";

export function BarsOne() {
    
    const [myArray, setMyArray] = useState([])
    const [restart, setRestart] = useState(false)
    const { array, setArray, refresh, setRefresh } = useArray();

useEffect(() => {
  start()
    
},[])
async function start() {
    await timeOut(2000);
    bubbleSort([6,1,5,3,2,4])
}
  async function bubbleSort(arr) {
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
                
                await timeOut(2000);

                setArray(arr)
                console.log(array)
            }
        } while (swapped)
       setArray(arr)
        await timeOut(2000)
        setArray([6,1,5,3,2,4])
        bubbleSort(array)
  }
 
    return (
        <div className="equalizer">
            {array.map((tube, index) => {
                return (
                    <div key={index}>
                    <div className="equalizer-bar">
                        <span style={{ height: tube * 20 }}></span>
                    </div>
                    </div>
                )
            })}
        </div>
    )
}

export function BarsThree() {
    return (
        <div className="equalizer">
            <div className="equalizer-bar">
                <span style={{ height: 105 }}></span>
            </div>
            <div className="equalizer-bar">
                <span style={{ height: 90 }}></span>
            </div>
            <div className="equalizer-bar">
                <span style={{ height: 75 }}></span>
            </div>
            <div className="equalizer-bar">
                <span style={{ height: 60 }}></span>
            </div>
            <div className="equalizer-bar">
                <span style={{ height: 45 }}></span>
            </div>
            <div className="equalizer-bar">
                <span style={{ height: 30 }}></span>
            </div>
            <div className="equalizer-bar">
                <span style={{ height: 15 }}></span>
            </div>
        </div>
    )
}


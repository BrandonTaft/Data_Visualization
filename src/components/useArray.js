import { useState, useEffect } from "react";

function useArray(x) {
    const [array, setArray] = useState([]);
    const [refresh, setRefresh] = useState("false");
    useEffect(() => {
        const getMyArray = () => {
            const arr = [];
            for (let i = 0; i < x;) {
                let num = Math.floor(Math.random() * x + 1)
                while (arr.includes(num) === false) {
                    arr.push(num)
                    i++
                }
            }
            setArray(arr)
        }
        getMyArray()
    }, [refresh])
    return { array, setArray, refresh, setRefresh }
}

export default useArray
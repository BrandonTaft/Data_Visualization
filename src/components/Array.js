import { useState, useEffect } from "react";

function getArray() {
    const [array, setArray] = useState([]);
    const [max, setMax] = useState(6);
    const [refresh, setRefresh] = useState("false");
    useEffect(() => {
        const getMyArray = () => {
            const arr = [];
            for (let i = 0; i < max;) {
                let num = Math.floor(Math.random() * max + 1)
                while (arr.includes(num) === false) {
                    arr.push(num)
                    i++
                }
            }
            setArray(arr)
        }
        getMyArray()
    }, [refresh, max])
    return { array, setArray, refresh, setRefresh, max, setMax }
}

export default getArray
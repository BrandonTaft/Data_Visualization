import { useState, useEffect } from "react";

function getArray() {
    const [array, setArray] = useState([]);
    const [refresh, setRefresh] = useState("false");
    useEffect(() => {
        const getMyArray = () => {
            const arr = [];
            for (let i = 0; i < 6;) {
                let num = Math.floor(Math.random() * 6 + 1)
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

export default getArray
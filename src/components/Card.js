import Link from './Link';
import CardContent from './CardContent';
import Bars from "./Bars";

import { useState } from 'react';

export default function Card({ type }) {
    const [bubbleSort, setBubbleSort] = useState(false);
    const [insertionSort, setInsertionSort] = useState(false);
    const [selectionSort, setSelectionSort] = useState(false);
    const [quickSort, setQuickSort] = useState(false);

    switch (type) {
        case "bubble":
            return (
                <Link href="/bubble">
                    <div className="card" onMouseEnter={() => setBubbleSort(true)}>
                        <Bars bubbleSort={bubbleSort} />
                        <CardContent type={"bubble"} />
                    </div>
                </Link>
            )
        case "insertion":
            return (
                <Link href="/insertion">
                    <div className="card" onMouseEnter={() => setInsertionSort(true)}>
                        <Bars insertionSort={insertionSort} />
                        <CardContent type={"insertion"} />
                    </div>
                </Link>
            )
        case "selection":
            return (
                <Link href="/selection">
                    <div className="card" onMouseEnter={() => setSelectionSort(true)}>
                        <Bars selectionSort={selectionSort} />
                        <CardContent type={"selection"} />
                    </div>
                </Link>
            )
        case "quick":
            return (
                <Link href="/quick">
                    <div className="card" onMouseEnter={() => setQuickSort(true)}>
                        <Bars quickSort={quickSort} />
                        <CardContent type={"quick"} />
                    </div>
                </Link>
            )
    }
}
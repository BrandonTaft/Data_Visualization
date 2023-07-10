import Link from './Link';
import CardContent from './CardContent';
import { BarsOne, BarsThree } from "./Bars";

export default function Card({ type }) {
    switch (type) {
        case "bubble":
            return (
                <Link href="/bubble">
                    <div className="card">
                        <BarsOne />
                        <CardContent type={"bubble"} />
                    </div>
                </Link>
            )
        case "insertion":
            return (
                <Link href="/insertion">
                    <div className="card">
                        <BarsThree />
                        <CardContent type={"insertion"} />
                    </div>
                </Link>
            )
        case "selection":
            return (
                <Link href="/selection">
                    <div className="card">
                        <BarsThree />
                        <CardContent type={"selection"} />
                    </div>
                </Link>
            )
        case "quick":
            return (
                <Link href="/quick">
                    <div className="card">
                        <BarsOne />
                        <CardContent type={"quick"} />
                    </div>
                </Link>
            )
    }
}
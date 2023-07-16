import Link from './Link';
import CardContent from './CardContent';
import Bars from "./Bars";

export default function Card({ type }) {
    
    switch (type) {
        case "bubble":
            return (
                <Link href="/bubble">
                    <div className="card" >
                        <Bars />
                        <CardContent type={"bubble"} />
                    </div>
                </Link>
            )
        case "insertion":
            return (
                <Link href="/insertion">
                    <div className="card">
                        <Bars />
                        <CardContent type={"insertion"} />
                    </div>
                </Link>
            )
        case "selection":
            return (
                <Link href="/selection">
                    <div className="card">
                        <Bars />
                        <CardContent type={"selection"} />
                    </div>
                </Link>
            )
        case "quick":
            return (
                <Link href="/quick">
                    <div className="card">
                        <Bars />
                        <CardContent type={"quick"} />
                    </div>
                </Link>
            )
    }
}
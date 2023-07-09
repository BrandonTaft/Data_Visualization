import Link from './Link';
import { BubbleCardContent, InsertionCardContent, SelectionCardContent, QuickCardContent } from './CardContent';
import { BarsOne, BarsThree } from "./Bars";

export function BubbleCard() {
    return (
        
            <Link href="/bubble">
                <div className="card">
                    <BarsOne />
                    <BubbleCardContent />
                    </div>
            </Link>
        
    )
}

export function InsertionCard() {
    return (
            <Link href="/insertion">
                <div className="card">
                    <BarsThree />
                    <InsertionCardContent />
                    </div>
            </Link>
        
    )
}

export function SelectionCard() {
    return (
        
        
            <Link href="/selection">
                <div className="card">
                    <BarsThree />
                    <SelectionCardContent />
                    </div>
            </Link>
        
    )
}

export function QuickCard() {
    return (
        
            <Link href="/quick">
                <div className="card">
                    <BarsOne />
                    <QuickCardContent />
                    </div>
            </Link>
        
    )
}
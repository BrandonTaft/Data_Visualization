import Link from './Link';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import { BubbleCardContent, InsertionCardContent, SelectionCardContent, QuickCardContent } from './CardContent';
import Bars from "./Bars";

export function BubbleCard() {
    return (
        <Card className="card">
            <Link href="/bubble">
                <CardActionArea className="card-action-area">
                    <Bars />
                    <BubbleCardContent />
                </CardActionArea>
            </Link>
        </Card>
    )
}

export function InsertionCard() {
    return (
        <Card className="card">
            <Link href="/insertion">
                <CardActionArea className="card-action-area">
                    <Bars />
                    <InsertionCardContent />
                </CardActionArea>
            </Link>
        </Card>
    )
}

export function SelectionCard() {
    return (
        <Card className="card">
            <Link href="/selection">
                <CardActionArea className="card-action-area">
                    <Bars />
                    <SelectionCardContent />
                </CardActionArea>
            </Link>
        </Card>
    )
}

export function QuickCard() {
    return (
        <Card className="card">
            <Link href="/quick">
                <CardActionArea className="card-action-area">
                    <Bars />
                    <QuickCardContent />
                </CardActionArea>
            </Link>
        </Card>
    )
}
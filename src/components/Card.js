import Link from './Link';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { BubbleCardContent, InsertionCardContent, SelectionCardContent, QuickCardContent } from './CardContent';

export function BubbleCard() {
    return (
        <Card className="card">
            <Link href="/bubble">
                <CardActionArea className="card-action-area">
                    <CardMedia
                        className='card-pic'
                        component="img"
                        height="180"
                        image="/images/screen.png"
                        alt="Picture of tubes"
                    />
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
                    <CardMedia
                        className='card-pic'
                        component="img"
                        height="180"
                        image="/images/circle.png"
                        alt="Picture of tubes"
                    />
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
                    <CardMedia
                        className='card-pic'
                        component="img"
                        height="180"
                        image="/images/laptop.png"
                        alt="Picture of tubes"
                    />
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
                    <CardMedia
                        className='card-pic'
                        component="img"
                        height="180"
                        image="/images/cell.png"
                        alt="Picture of tubes"
                    />
                    <QuickCardContent />
                </CardActionArea>
            </Link>
        </Card>
    )
}
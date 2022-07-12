import Link from './Link';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { BubbleCardContent, InsertionCardContent, SelectionCardContent, QuickCardContent, MergeCardContent, BucketCardContent } from './CardContent';

export function BubbleCard() {
    
    return (

        <Card className="card">
            <Link href="/bubble">
            <CardActionArea >
                <CardMedia
                    component="img"
                    height="180"
                    image="/images/screen.png"
                    alt="Picture of tubes"
                />
                {/* <CardMedia>
        <CardImage />
        </CardMedia> */}
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
            <CardActionArea>
                <CardMedia
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
            <CardActionArea>
                <CardMedia
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
            <CardActionArea>
                <CardMedia
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

export function BucketCard() {

    return (

        <Card className="card">
            <Link href="/bucket">
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="180"
                    image="/images/gears.png"
                    alt="Picture of tubes"
                />
                <BucketCardContent />
            </CardActionArea>
            </Link>
        </Card>

    )
}

export function MergeCard() {

    return (

        <Card className="card">
            <Link href="/merge">
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="180"
                    image="/images/cell-laptop.png"
                    alt="Picture of tubes"
                />
                <MergeCardContent />
            </CardActionArea>
            </Link>
        </Card>

    )
}
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { BubbleCardContent, InsertionCardContent, SelectionCardContent, QuickCardContent, MergeCardContent, BucketCardContent } from './CardContent';

export function BubbleCard() {
    const handleExpandClick = () => {
        console.log("TEST");
    };

    return (

        <Card className="card">
            <CardActionArea onClick={handleExpandClick}>
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
        </Card>

    )
}

export function InsertionCard() {

    return (

        <Card className="card" >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="180"
                    image="/images/circle.png"
                    alt="Picture of tubes"
                />
                <InsertionCardContent />
            </CardActionArea>
        </Card>

    )
}

export function SelectionCard() {

    return (

        <Card className="card" >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="180"
                    image="/images/laptop.png"
                    alt="Picture of tubes"
                />
                <SelectionCardContent />
            </CardActionArea>
        </Card>

    )
}

export function QuickCard() {

    return (

        <Card className="card" >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="180"
                    image="/images/cell.png"
                    alt="Picture of tubes"
                />
                <QuickCardContent />
            </CardActionArea>
        </Card>

    )
}

export function BucketCard() {

    return (

        <Card className="card" >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="180"
                    image="/images/gears.png"
                    alt="Picture of tubes"
                />
                <BucketCardContent />
            </CardActionArea>
        </Card>

    )
}

export function MergeCard() {

    return (

        <Card className="card" >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="180"
                    image="/images/cell-laptop.png"
                    alt="Picture of tubes"
                />
                <MergeCardContent />
            </CardActionArea>
        </Card>

    )
}
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { BubbleCardContent, InsertionCardContent, SelectionCardContent } from './CardContent';
import CardImage from './CardImage';


export function BubbleCard() {
  
  return (

  <Card className="card" sx={{ maxWidth: 333 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          object-fit="fill"
          image="/images/tubes.png"
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
  
        <Card className="card" sx={{ maxWidth: 333 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image="/images/tubes.png"
            alt="Picture of tubes"
          />
         <InsertionCardContent />
        </CardActionArea>
      </Card>
  
    )
  }

  export function SelectionCard() {
  
    return (
  
        <Card className="card" sx={{ maxWidth: 333 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image="/images/tubes.png"
            alt="Picture of tubes"
          />
         <SelectionCardContent />
        </CardActionArea>
      </Card>
  
    )
  }
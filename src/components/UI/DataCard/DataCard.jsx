import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const DataCard = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }} elevation={6}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {props.picture}
          alt= {props.alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{color:'#202A62'}}>
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default DataCard;
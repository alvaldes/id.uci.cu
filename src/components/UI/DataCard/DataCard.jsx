import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {Link} from 'react-router-dom';


const DataCard = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }} elevation={6}>
      <CardActionArea component= {Link} to={props.ruta}>
        <CardMedia
          component="img"
          height="140"
          image= {props.picture}
          alt= {props.alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{color:'primary'}}>
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button size="small" color="secondary">
          Más
        </Button>
      </CardActions>
    </Card>
  );
}
export default DataCard;
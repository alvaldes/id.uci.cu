import React from 'react'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';


const TeamCard = (props) => {
    return (
      <Card sx={{display:'flex', width:'500px' }}>
        <CardMedia sx={{ width: 171 }} alt="tutor">
          <Avatar
            alt={props.name}
            src={props.img}
            sx={{ width: 100, height: 100, margin: "20px auto" }}
          />
        </CardMedia>
        <CardContent>
          <Typography component="div" variant="h5">
            {props.name}
          </Typography>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Stack direction="row" spacing={2}>
              <Tooltip title={props.email}>
                <IconButton>
                  <EmailIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title={props.github}>
                <IconButton
                  sx={{ color: "#340E47" }}
                  href={"https:/github.com/"+ props.github}
                  target="_blank"
                >
                  <GitHubIcon />
                </IconButton>
              </Tooltip>
            </Stack>
          </Grid>
        </CardContent>
      </Card>
    );
}

export default TeamCard

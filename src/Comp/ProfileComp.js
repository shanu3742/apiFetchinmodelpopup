import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';



const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });


function ProfileComp() {

   
    
    const classes = useStyles();
   
  return (


    <Card className={classes.root}>
   <CardContent>
      <Typography id="container" className={classes.title} color="textSecondary" gutterBottom>
      <span > <Avatar src="/broken-image.jpg" /> </span>  <span>Word of the Day</span>
      </Typography>
      
      <Typography className={classes.pos} color="textSecondary">
     adjective
      </Typography>
     
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
    
  </Card>
   
  );
}

export default ProfileComp;

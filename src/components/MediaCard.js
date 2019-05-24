import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom'
import { CustomSvg } from '.';
import './MediaCard.scss';

function MediaCard({image, imagePosition, svg, style, title, heading, text, to, history}) {
  return (
    <Card className="card" onClick={() => { if(to) history.push(to)}}>
      <CardActionArea>
        {image && <CardMedia
            className={`media ${imagePosition ? imagePosition : ''}`}
            image={image}
            title={title}
          />
        }
        {svg && <div className="media svgMedia">
          <CustomSvg svgName={svg} style={style}/>
        </div>
        }
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {heading}
          </Typography>
          <Typography component="p">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}


export default withRouter(MediaCard);
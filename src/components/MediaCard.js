import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CustomSvg } from '.';
import './MediaCard.scss';

function MediaCard({image, imagePosition, svg, width, height, color, title, heading, text}) {
  return (
    <Card className="card">
      <CardActionArea>
        {image && <CardMedia
            className={`media ${imagePosition ? imagePosition : ''}`}
            image={image}
            title={title}
          />
        }
        {svg && <div className="media">
          <CustomSvg svgName={svg} width={width} height={height} style={{fill: color}}/>
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


export default MediaCard;
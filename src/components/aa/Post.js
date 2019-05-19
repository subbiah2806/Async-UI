import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Post extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const classes = {
			main: {
				padding: "10px",
			},
			card: {
				width: 300,
			},
			media: {
				objectFit: 'cover'
			},
			button: {
				float: 'right'
			}
		};
		return (
			<div style={classes.main}>
				<Card style={classes.card}>
					<CardActionArea>
						<CardMedia
							component="img"
							alt="Contemplative Reptile"
							style={classes.media}
							height="140"
							image={this.props.image}
							title="Contemplative Reptile"
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								{this.props.title}
							</Typography>
							<Typography component="p">
								{this.props.message}
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button fullWidth={true} size="medium" color="secondary">
							Open
						</Button>
					</CardActions>
				</Card>
			</div>
		)
	}
};

export default Post;
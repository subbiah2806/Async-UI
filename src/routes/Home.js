import React from 'react';
import './Home.scss';
import { CustomSvg, CircleIcon } from '../components';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import space from '../assets/space.jpg';
import dp from '../assets/dp.jpg';
import deepPurple from '@material-ui/core/colors/deepPurple';
const useitlate = "I build websites that don't fly.";

const iconColor = deepPurple[300];
const HomeFooterColor = deepPurple['800'];
var bg = {
	backgroundImage: `url(${space})`,
};

class Home extends React.Component {
	state = {
		scrollType: 'scroll'
	};
	componentDidMount() {
	};
	componentDidUpdate() {
	};
	componentWillUnmount() {
	};
	render() {
		return (
			<div id="Home">
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
				<section style={bg} className="section1">
					<div className="content">
						<div className="content-margin">
							<h1>I am Subbiah</h1>
							<h2>Web Developer</h2>
						</div>
					</div>
				</section>
				<section className="section2">
					<Avatar alt="Display Picture" src={dp} className="dp"/>
					<footer className="section2-footer">
						<CircleIcon text="I build websites, my experience builds my resume">
							<CustomSvg svgName="linkedIn" width="50" height="50" style={{fill: iconColor}}/>
						</CircleIcon>
						<CircleIcon text="I write code that doesn't bite.">
							<CustomSvg svgName="github" width="60" height="60" style={{fill: iconColor}}/>
						</CircleIcon>
						<CircleIcon text="I do things that I love the most.">
							<CustomSvg svgName="facebook" width="47" height="47" style={{fill: iconColor}}/>
						</CircleIcon>
					</footer>
				</section>
				<footer className="Home-footer" style={{background: HomeFooterColor}}>
					<Avatar alt="Display Picture" src={dp} className="dp"/>
					<div className="line" />
					<a className="email" href="mailto:subbiah2806@gmail.com?Subject=Regarding%20web%20development" target="_top">
						<h2>subbiah2806@gmail.com</h2>
					</a>
					<div className="buttons">
						<div className="buttons-left">
							<Fab variant="extended" size="medium" component="button" aria-label="Add"> LinkedIn</Fab>
							<Fab variant="extended" size="medium" component="button" aria-label="Add"> Github</Fab>
							<Fab variant="extended" size="medium" component="button" aria-label="Add"> Facebook</Fab>
						</div>
						<p>Web developer based on <br/> Bay area, california</p>
					</div>
				</footer>
			</div>
		)
	}
};

export default Home;
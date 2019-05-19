import React from 'react';
import './Home.scss';
import { CustomSvg, CircleIcon } from '../components';
import Avatar from '@material-ui/core/Avatar';
import space from '../assets/space.jpg';
import dp from '../assets/dp.jpg';
import deepPurple from '@material-ui/core/colors/deepPurple';
const useitlate = "I build websites that don't fly.";

const iconColors = deepPurple[300];
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
				<div style={bg} className="bg">
					<div className="content">
						<div className="content-margin">
							<h1>I am Subbiah</h1>
							<h2>Web Developer</h2>
						</div>
					</div>
				</div>
				<div className="section">
					<Avatar alt="dp" src={dp} className="dp" />


					<footer className="footer">
						<CircleIcon text="I build websites, my experience builds my resume">
							<CustomSvg svgName="linkedIn" width="50" height="50" style={{fill: iconColors}}/>
						</CircleIcon>
						<CircleIcon text="I write code that doesn't bite.">
							<CustomSvg svgName="github" width="60" height="60" style={{fill: iconColors}}/>
						</CircleIcon>
						<CircleIcon text="I do things that I love the most.">
							<CustomSvg svgName="facebook" width="47" height="47" style={{fill: iconColors}}/>
						</CircleIcon>
					</footer>
				</div>
			</div>
		)
	}
};

export default Home;
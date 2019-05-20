import React from 'react';
import './Home.scss';
import { CustomSvg, CircleIcon, MediaCard } from '../components';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import space from '../assets/space.jpg';
import dp from '../assets/dp.jpg';
import es6 from '../assets/es6.png';
import es7 from '../assets/es7.png';
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
					<div className="MediaCard">
						<MediaCard image={es7} imagePosition="bottom" title="ES7" heading="ES7" text="To infinity and beyond"/>
						<MediaCard image={es6} imagePosition="bottom" title="ES6" heading="ES6" text="The bits you will actually use"/>
						<MediaCard svg="linkedIn" height="60" width="60" color={iconColor} imagePosition="bottom" title="React-Transition" heading="React-Transition" text="An easy way to perform animations when a React component enters or leaves the DOM"/>
						<MediaCard image={es7} imagePosition="bottom" title="Movie" heading="Movie" text="An interactive HTML movie experience"/>
						<MediaCard image={es7} imagePosition="bottom" title="Timeline Page" heading="Timeline Page" text="UI dashboard to record your timelines"/>
						<MediaCard image={es7} imagePosition="bottom" title="Login Page" heading="Login Page" text="simple and elegent login page"/>
						<MediaCard image={es7} imagePosition="bottom" title="Maps" heading="Maps" text="various kinds of map interface"/>
						<MediaCard image={es7} imagePosition="bottom" title="calender" heading="calender" text="Google calender interface"/>
					</div>
					<div className="samplePage">

					</div>
				</section>
				<section className="section3">
						<CircleIcon text="I build websites, my experience builds my resume">
							<CustomSvg svgName="linkedIn" width="50" height="50" style={{fill: iconColor}}/>
						</CircleIcon>
						<CircleIcon text="I write code that doesn't bite.">
							<CustomSvg svgName="github" width="60" height="60" style={{fill: iconColor}}/>
						</CircleIcon>
						<CircleIcon text="I do things that I love the most.">
							<CustomSvg svgName="facebook" width="47" height="47" style={{fill: iconColor}}/>
						</CircleIcon>
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
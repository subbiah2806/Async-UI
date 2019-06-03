import React from 'react';
import './Home.scss';
import { CustomSvg, CircleIcon, MediaCard } from '../components';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import space from '../assets/space.jpg';
import dp from '../assets/dp.jpg';
import es6 from '../assets/es6.png';
import es7 from '../assets/es7.png';
import you from '../assets/you.jpg';
import transition from '../assets/reat-transition.jpg';
import deepPurple from '@material-ui/core/colors/deepPurple';
import login from '../assets/signIn.png';
import signUp from '../assets/SignUp.png';
const useitlate = "I build websites that don't fly.";

const iconColor = deepPurple[300];
const HomeFooterColor = deepPurple[800];
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
					<Avatar alt="Display Picture" src={dp} className="dp" />
					<div className="MediaCard">
						<MediaCard to="/os" image={transition} imagePosition="center" title="React transitions" heading="React transitions" text="Native application like transission in web UI, swipe left, right and up." />
						<MediaCard to="/forms?signup" state="signup" image={signUp} imagePosition="top" title="signup Page" heading="signup Page" text="simple and elegent signup page" />
						<MediaCard to="/forms?login" state="login" image={login} imagePosition="top" title="login Page" heading="login Page" text="simple and elegent login page" />
						<MediaCard to="/es7" image={es7} imagePosition="bottom" title="ES7" heading="ES7" text="To infinity and beyond" />
						<MediaCard image={es6} imagePosition="bottom" title="ES6" heading="ES6" text="The bits you will actually use" />
						<MediaCard to="/you" image={you} imagePosition="center" title="YOU" heading="YOU" text="Do you know everyone is YOU. An interactive HTML movie experience" />
						<MediaCard image={es7} imagePosition="bottom" title="Timeline Page" heading="Timeline Page" text="UI dashboard to record your timelines" />
						<MediaCard image={es7} imagePosition="bottom" title="Maps" heading="Maps" text="various kinds of map interface" />
						<MediaCard image={es7} imagePosition="bottom" title="calender" heading="calender" text="Google calender interface" />
					</div>
					<div className="samplePage">

					</div>
				</section>
				<section className="section3">
					<CircleIcon href="https://www.linkedin.com/in/subbiah-chandru-31b339184/" text="I build websites, my experience builds my resume">
						<CustomSvg svgName="linkedIn" style={{ fill: iconColor, width: "50", height: "50" }} />
					</CircleIcon>
					<CircleIcon href="https://github.com/subbiah28062/Async-UI" text="I write code that doesn't bite.">
						<CustomSvg svgName="github" style={{ fill: iconColor, width: "60", height: "60" }} />
					</CircleIcon>
					<CircleIcon href="https://www.facebook.com/profile.php?id=100005246984751" text="I do things that I love the most.">
						<CustomSvg svgName="facebook" style={{ fill: iconColor, width: "47", height: "47" }} />
					</CircleIcon>
				</section>
				<footer className="Home-footer" style={{ background: HomeFooterColor }}>
					<Avatar alt="Display Picture" src={dp} className="dp" />
					<div className="line" />
					<a className="email" href="mailto:subbiah2806@gmail.com?Subject=Regarding%20web%20development" target="_top">
						<h2>subbiah2806@gmail.com</h2>
					</a>
					<div className="buttons">
						<div className="buttons-left">
							<Fab href="https://www.linkedin.com/in/subbiah-chandru-31b339184/" variant="extended" size="medium" component="button" aria-label="Add"> LinkedIn</Fab>
							<Fab href="https://github.com/subbiah28062/Async-UI" variant="extended" size="medium" component="button" aria-label="Add"> Github</Fab>
							<Fab href="https://www.facebook.com/profile.php?id=100005246984751" variant="extended" size="medium" component="button" aria-label="Add"> Facebook</Fab>
						</div>
						<p>Web developer based on <br /> Bay area, california</p>
					</div>
				</footer>
			</div>
		)
	}
};

export default Home;
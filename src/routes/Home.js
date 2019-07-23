import React from 'react';
import './Home.scss';
import { CustomSvg, CircleIcon, MediaCard } from '../components';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import space from '../assets/space.jpg';
import dp from '../assets/dp.jpg';
import evasHut from '../assets/evas_hut.png';
import tamil from '../assets/tamilodu_velaiyadu.png';
import verifyCode from '../assets/verifyCode.png';
import transition from '../assets/reat-transition.jpg';
import deepPurple from '@material-ui/core/colors/deepPurple';
import login from '../assets/signIn.png';
import signUp from '../assets/SignUp.png';
import ScrollReveal from 'scrollreveal'
import { TimelineLite, Linear, TextPlugin, CSSPlugin } from "gsap/all";
let initialMount = false;
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
		// eslint-disable-next-line
		const plugins = [TextPlugin, CSSPlugin];
		const sr = ScrollReveal();
		if (!initialMount) {
			initialMount = true;
			const section1FaceIn = new TimelineLite({});
			section1FaceIn
				.to("#Home", 2, { autoAlpha: 1 }, '+=1')
				.add(() => {
					window.scrollTo({
						top: 0,
						behavior: "smooth"
					});
				}, '-=2')
				.from(".dp", 2, { scale: 1.5, rotation: 180 }, '-=2')
				.to(`.animateTyping`, 1, {
					text: `I am Subbiah`,
					yoyo: true,
					repeat: 1,
					repeatDelay: 1,
					ease: Linear.easeNone
				}, '-=1')
				.to(`.animateTyping`, 1, {
					text: `Web Developer`,
					yoyo: true,
					repeat: 1,
					repeatDelay: 1,
					ease: Linear.easeNone
				})
				.to(`.headerName`, 2, {
					autoAlpha: 1,
					display: 'block',
					ease: Linear.easeNone
				});
		} else {
			const section1FaceIn = new TimelineLite({});
			section1FaceIn
				.to("#Home", .001, { autoAlpha: 1 })
				.to(`.headerName`, .001, {
					autoAlpha: 1,
					display: 'block'
				});
			if (!this.isnotmobile()) {
				setTimeout(() => {
					sr.reveal('.card', {
						duration: 1,
					}, 1);
				});
			}
		}
		if (!this.isnotmobile()) {
			setTimeout(() => {
				sr.reveal('.card', {
					duration: 600,
					distance: '20px',
					easing: 'ease-out',
					origin: 'bottom',
					reset: true,
					viewFactor: 0,
				}, 150);
			}, 500);
		}
	};
	componentDidUpdate() {
	};
	componentWillUnmount() {
	};
	isnotmobile() {
		return window.innerWidth > 575.98;
	};
	render() {
		return (
			<div id="Home">
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
				<section style={bg} className="section1">
					<div className="content">
						<div className="content-margin">
							{/* eslint-disable-next-line */}
							<h1 className="animateTyping"></h1>
							<h1 className="headerName">I am Subbiah</h1>
							<h2 className="headerName">-Web Developer</h2>
						</div>
					</div>
				</section>
				<section className="section2">
					<Avatar alt="Display Picture" src={dp} className="dp" />
					<div className="MediaCard">
						<MediaCard id="media1" href="https://tamilodu-vilaiyadu.herokuapp.com/" image={tamil} imagePosition="top" title="Tamilodu Velaiyadu" heading="Tamilodu Velaiyadu" text="A webapp designed with vueJs" />
						<MediaCard id="media2" to="/forms?signup" state="signup" image={signUp} imagePosition="top" title="signup Page" heading="signup Page" text="simple and elegent signup page" />
						<MediaCard id="media3" to="/forms?login" state="login" image={login} imagePosition="top" title="login Page" heading="login Page" text="simple and elegent login page" />
						<MediaCard id="media4" to="/verifyCode" image={verifyCode} imagePosition="top" title="verify code" heading="verify code" text="node.js OPT verification" />
						<MediaCard id="media5" href="https://subbiah28062.github.io/Eva-s-hut/" image={evasHut} imagePosition="top" title="EVA'S Hut" heading="EVA'S Hut" text="Static webpage created with vanilla HTML,CSS and Vanilla Js" />
						<MediaCard id="media6" to="/os" image={transition} imagePosition="center" title="React transitions" heading="React transitions" text="Native application like transission in web UI, swipe left, right and up." />
						<MediaCard id="media7" heading="under construction" text="under construction" />
						<MediaCard id="media8" heading="under construction" text="under construction" />
					</div>
					<div className="about">
						<div className="aboutMargin">
							<div className="aboutColumns">
								<div data-line-nr="01"><div className="blueviolet">class</div><div className="yellow"> AboutMe </div>{`{`}</div>

								<div data-line-nr="02"><div className="lightGrey">··</div><div className="dimGrey">{`// I'm ambitious and love new challenges :)`}</div></div>
								<div data-line-nr="03"><div className="lightGrey">··</div><div className="dimGrey">{`// My vast variety of skills is continuously expanding.`}</div></div>

								<div data-line-nr="04"><div className="lightGrey">··</div><div className="blueviolet">constructor</div>{`() {`}</div>
								<div data-line-nr="05">
									<div className="lightGrey">····</div>
									<div className="red">this</div>
									.<div className="green">name </div>
									<div className="red">= </div>
									<div className="darkGreen">'Subbiah Chandramouli'</div>
								</div>
								<div data-line-nr="06">
									<div className="lightGrey">····</div>
									<div className="red">this</div>
									.<div className="green">dateOfBirthTimestamp </div>
									<div className="red">= </div>
									<div className="darkGreen">772841730000</div>
								</div>
								<div data-line-nr="07">
									<div className="lightGrey">····</div>
									<div className="red">this</div>
									.<div className="green">email </div>
									<div className="red">= </div>
									<div className="darkGreen">'subbiah2806@gmail.com'</div>
								</div>
								<div data-line-nr="08"><div className="lightGrey">··</div>{`}`}</div>

								<div data-line-nr="09"><div className="lightGrey">··</div><div className="yellow">workExperience</div>{`() {`}</div>
								<div data-line-nr="10"><div className="lightGrey">····</div><div className="blueviolet">return </div>{`[`}</div>
								<div data-line-nr="11">
									<div className="lightGrey">······</div>
									{`{ `}
									<div className="darkGreen">'July 2018 – Present' </div>
									{`: `}
									<div className="darkGreen">'Front-end Developer at Apple' </div>
									{`}`}
								</div>
								<div data-line-nr="12"><div className="lightGrey">····</div>{`]`}</div>
								<div data-line-nr="13"><div className="lightGrey">··</div>{`}`}</div>

								<div data-line-nr="14"><div className="lightGrey">··</div><div className="yellow">education</div>{`() {`}</div>
								<div data-line-nr="15"><div className="lightGrey">····</div><div className="blueviolet">return </div>{`[`}</div>
								<div data-line-nr="16">
									<div className="lightGrey">······</div>
									{`{ `}
									<div className="darkGreen">'2016 – 2018' </div>
									{`: `}
									<div className="darkGreen">'Texas A&M University, Kingsville' </div>
									{`}`}
								</div>
								<div data-line-nr="17">
									<div className="lightGrey">······</div>
									{`{ `}
									<div className="darkGreen">'2011 – 2015' </div>
									{`: `}
									<div className="darkGreen">'Saveetha Engineering College' </div>
									{`}`}
								</div>
								<div data-line-nr="18"><div className="lightGrey">····</div>{`]`}</div>
								<div data-line-nr="19"><div className="lightGrey">··</div>{`}`}</div>

								<div data-line-nr="20"><div className="lightGrey">··</div><div className="yellow">skills</div>{`() {`}</div>
								<div data-line-nr="21"><div className="lightGrey">····</div><div className="blueviolet">return </div>{`[ `}</div>
								<div data-line-nr="22">
									<div className="lightGrey">······</div>
									<div className="darkGreen">'HTML5/CSS4/JS/TS', </div>
								</div>
								<div data-line-nr="23">
									<div className="lightGrey">······</div>
									<div className="darkGreen">'React.js', </div>
								</div>
								<div data-line-nr="24">
									<div className="lightGrey">······</div>
									<div className="darkGreen">'Vue.js', </div>
								</div>
								<div data-line-nr="25">
									<div className="lightGrey">······</div>
									<div className="darkGreen">'AngularJs/2', </div>
								</div>
								<div data-line-nr="26">
									<div className="lightGrey">······</div>
									<div className="darkGreen">'UI-Automation[Protractor, nightwatchJs, Testcafe]', </div>
								</div>
								<div data-line-nr="27">
									<div className="lightGrey">······</div>
									<div className="darkGreen">'UNIT-Testing[Karma/Jasmine]', </div>
								</div>
								<div data-line-nr="28">
									<div className="lightGrey">······</div>
									<div className="darkGreen">'SASS', </div>
								</div>
								<div data-line-nr="29">
									<div className="lightGrey">······</div>
									<div className="darkGreen">'Jquery', </div>
								</div>
								<div data-line-nr="30">
									<div className="lightGrey">······</div>
									<div className="darkGreen">'GIT', </div>
								</div>
								<div data-line-nr="31">
									<div className="lightGrey">······</div>
									<div className="darkGreen">'npm/jspm/bower', </div>
								</div>
								<div data-line-nr="32">
									<div className="lightGrey">······</div>
									<div className="darkGreen">'Bootstrap/Material Design', </div>
								</div>
								<div data-line-nr="33"><div className="lightGrey">····</div>{`] `}</div>
								<div data-line-nr="34"><div className="lightGrey">··</div>{`}`}</div>

							</div>
						</div>
					</div>
				</section>
				<section className="section3">
					<CircleIcon href="https://www.linkedin.com/in/subbiah-chandramouli-31b339184" text="I build websites, my experience builds my resume">
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
							<Fab target="_blank" href="https://www.linkedin.com/in/subbiah-chandramouli-31b339184" variant="extended" size="medium" component="button" aria-label="Add"> LinkedIn</Fab>
							<Fab target="_blank" href="https://github.com/subbiah28062/Async-UI" variant="extended" size="medium" component="button" aria-label="Add"> Github</Fab>
							<Fab target="_blank" href="https://www.facebook.com/profile.php?id=100005246984751" variant="extended" size="medium" component="button" aria-label="Add"> Facebook</Fab>
						</div>
						<p>Web developer based on <br /> Bay area, california</p>
					</div>
				</footer>
			</div>
		)
	}
};

export default Home;
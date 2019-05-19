import React from 'react';
import './Home.scss';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import space from '../assets/space.jpg';
import dp from '../assets/dp.jpg';

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
				</div>
			</div>
		)
	}
};

export default Home;
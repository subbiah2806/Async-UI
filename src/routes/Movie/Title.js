import React from 'react';
import Title1 from '../assets/title-1.mp4';
import { CSSTransitionGroup } from 'react-transition-group';

class Title extends React.Component {
	state = {
		Title1Playing: true
	}
	componentDidMount() {
	};
	componentDidUpdate() {
	};
	componentWillUnmount() {
	};
	onEnded = (e) => {
		console.log('video ended', e);
		this.setState({Title1: false})
	}
	Title = React.createRef();
	render() {
		const Title1Playing = this.state.Title1Playing;
		let Video1;

		if(Title1Playing) {
			Video1 = <CSSTransitionGroup
			transitionName="example"
			transitionEnterTimeout={500}
			transitionLeaveTimeout={300}>
			<video autoPlay={true} muted={true} className="myVideo" onEnded={this.onEnded}>
				<source src={Title1} type="video/mp4" />
			</video>
		</CSSTransitionGroup>;
		}

		return (
			<section id="Title" ref={this.Title} className="fullscreen">
				{/* {Video1} */}
			</section>
		)
	};
};

export default Title;
import React from 'react';
import './Movie.scss';
import { Title, Section1, Section2, Section3, Section4, Section5, EndCredits } from '..';

class Movie extends React.Component {
	state = {
		scrollType: 'scroll'
	};
	componentDidMount() {
		// this.Movie.current.addEventListener('wheel', this.wheel);
	};
	componentDidUpdate() {
	};
	componentWillUnmount() {
		// const removeEvent = node.removeEventListener || node.detachEvent;
		// Reduce any memory leaks
		// removeEvent("keypress", this.handleKeyPress);
	};
	wheel = (e) => {
		// if(e.deltaY > 0) {
		// 	if(this.state.scrollType !== 'scroll') {
		// 		this.setState({scrollType: 'scroll'})
		// 	}
		// } else {
		// 	if(this.state.scrollType !== 'hidden') {
		// 		this.setState({scrollType: 'hidden'})
		// 	}
			// e.preventDefault();
			// e.stopPropagation();
		// }
	};
	Movie = React.createRef();
	render() {
		return (
			<div id="Movie" style={{overflowY: this.state.scrollType}} ref={this.Movie}>
				<Title />
				<Section1 />
				<Section2 />
				<Section3 />
				<Section4 />
				<Section5 />
				<EndCredits />
			</div>
		)
	}
};

export default Movie;
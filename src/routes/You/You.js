import React from 'react';
import './You.scss';
import wallpaper from '../../assets/wallpaper.jpg';
class You extends React.Component {

	componentDidMount() {
	};
	componentDidUpdate() {
	};
	componentWillUnmount() {
	};
	render() {
		return (
			<div id="You" style={{backgroundImage: `url(${wallpaper})`}}>
			</div>
		)
	}
};

export default You;
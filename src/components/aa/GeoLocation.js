import React from 'react';

class GeoLocation extends React.Component {

	constructor() {
		super();
		this.state = {
			lat: null,
			lon: null
		}

		window.navigator.geolocation.getCurrentPosition(
			(pos) => {
				this.setState({ lat: pos.coords.latitude});
				this.setState({ lon: pos.coords.longitude});
			},
			(err) => console.log(err)
		);
	}

	render() {
		return (
			<div>
				<div>
					{'lat:'+ this.state.lat}
				</div>
				<div>
					{'lon:'+ this.state.lon}
				</div>
			</div>
		)
	}
};

export default GeoLocation;
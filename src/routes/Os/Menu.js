import React from 'react';
import CustomSvg from '../../components/CustomSvg';
import grey from '@material-ui/core/colors/grey';

const inputGrey = grey[800];

class Menu extends React.Component {

	componentDidMount() {
	};
	componentDidUpdate() {
	};
	componentWillUnmount() {
	};
	render() {
		return (
			<div id="Menu">
				<input className="Menu-top-input" type="text" placeholder="Finder search" style={{ backgroundColor: inputGrey }}></input>
				<div className="Menu-icons">
					<CustomSvg svgName="mat-phone" style={{ fill: 'green', width: "40", height: "40" }} />
					<CustomSvg svgName="mat-music_video" style={{ fill: 'white', width: "40", height: "40" }} />
					<CustomSvg svgName="mat-shopping_cart" style={{ fill: 'grey', width: "40", height: "40" }} />
					<CustomSvg svgName="mat-camera_alt" style={{ fill: 'red', width: "40", height: "40" }} />
				</div>
			</div>
		)
	}
};

export default Menu;
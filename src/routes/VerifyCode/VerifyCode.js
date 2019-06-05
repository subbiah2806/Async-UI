import React from 'react';
import CustomSvg from '../../components/CustomSvg'
import Typography from '@material-ui/core/Typography';
import './VerifyCode.scss';

class VerifyCode extends React.Component {
	render() {
		return (
			<div id="VerifyCode">
				<section className="VerifyCode-section1">
					<div className="V-marginTop">
						<CustomSvg svgName="mat-chevron_left" style={{ fill: '#FFF', width: "40", height: "40" }} />
						<h1>
							Send Code
						</h1>
						<CustomSvg svgName="mat-Menu" style={{ fill: '#FFF', width: "30", height: "30" }} />
					</div>
					<div className="V-marginMid">
						<CustomSvg svgName="mat-Devices" style={{ fill: '#FFF', width: "80", height: "80" }} />
					</div>
				</section>
				<section className="VerifyCode-section2">
				</section>
			</div>
		)
	}
}

export default VerifyCode;
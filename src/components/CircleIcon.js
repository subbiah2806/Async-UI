import React from 'react';
import './CircleIcon.scss';
class CircleIcon extends React.Component {
	href = () => {
		const href = this.props.href;
		if (href) {
			window.location = href;
		}
	}
	render({ className, style, text } = this.props) {
		return (
			<div id="CircleIcon" className={className} style={style} onClick={this.href}>
				<i>{this.props.children}</i>
				{text && <p>
					{text}
				</p>}
			</div>
		)
	}
};

export default CircleIcon;
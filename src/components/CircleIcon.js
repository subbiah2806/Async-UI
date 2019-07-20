import React from 'react';
import './CircleIcon.scss';
class CircleIcon extends React.Component {
	href = () => {
		const href = this.props.href;
		if (href) {
			window.open(href);
		}
	}
	render({ className, style, istyle, text, onClick, IPStyle } = this.props) {
		return (
			<div id="CircleIcon" className={className} style={style}>
				<div className="iconParent" style={IPStyle} >
					<i style={istyle} onClick={onClick || this.href} >{this.props.children}</i>
				</div>
				{text && <p>
					{text}
				</p>}
			</div>
		)
	}
};

export default CircleIcon;
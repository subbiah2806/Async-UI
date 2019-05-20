import React from 'react';
import './CircleIcon.scss';
class CircleIcon extends React.Component {
	render({className, style, text} = this.props) {
		return (
			<div id="CircleIcon" className={className} style={style}>
				<i>{this.props.children}</i>
				{text && <p>
					{text}
				</p>}
			</div>
		)
	}
};

export default CircleIcon;
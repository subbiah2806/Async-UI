import React from 'react';

class Segment extends React.Component {
	render() {
		return (
			<div className="ui placeholder segment">
				{this.props.children}
			</div>
		)
	}
};

export default Segment;
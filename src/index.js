import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './routes/Home';
class Index extends React.Component {
	render() {
		const baseUrl = process.env.PUBLIC_URL;
		return (
			<BrowserRouter>
				<Route exact path={`${baseUrl}/`} component={Home}/>
			</BrowserRouter>
		)
	}
};

ReactDOM.render(<Index />, document.getElementById('root'))
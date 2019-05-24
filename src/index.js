import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './routes/Home';
const You = lazy(() => import('./routes/You/You'));

class Index extends React.Component {
	render() {
		const baseUrl = process.env.PUBLIC_URL;
		return (
			<BrowserRouter>
				<Route exact path={`${baseUrl}/`} component={Home}/>
				<Suspense fallback={<h1></h1>}>
					<Route path={`${baseUrl}/you`} component={You}/>
    		</Suspense>
			</BrowserRouter>
		)
	}
};

ReactDOM.render(<Index />, document.getElementById('root'))
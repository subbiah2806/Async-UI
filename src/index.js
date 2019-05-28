import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './routes/Home';
import Os from './routes/Os/Os';
const You = lazy(() => import('./routes/You/You'));

class Index extends React.Component {
	componentDidMount() {
		const isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1; //&& ua.indexOf("mobile");
		if(isAndroid) {
			document.write('<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, height='+window.innerHeight+'">');
		}
	};
	render() {
		const baseUrl = process.env.PUBLIC_URL;
		return (
			<BrowserRouter>
				<Route exact path={`${baseUrl}/`} component={Home}/>
				<Suspense fallback={<h1> </h1>}>
					<Route path={`${baseUrl}/you`} component={You}/>
    		</Suspense>
				<Route path={`${baseUrl}/os`} component={Os}/>
			</BrowserRouter>
		)
	}
};

ReactDOM.render(<Index />, document.getElementById('root'))
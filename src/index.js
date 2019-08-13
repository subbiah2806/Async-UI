import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './routes/Home';
import Os from './routes/Os/Os';
import Froms from './routes/Forms/Forms';
import VerifyCode from './routes/VerifyCode/VerifyCode';
import './index.scss';
import { TweenLite, TextPlugin, CSSPlugin } from "gsap/all";
const You = lazy(() => import('./routes/You/You'));

class Index extends React.Component {
	componentDidMount() {
		// eslint-disable-next-line
		const plugins = [TextPlugin, CSSPlugin];
		const isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1; //&& ua.indexOf("mobile");
		if (isAndroid) {
			document.write('<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, height=' + window.innerHeight + '">');
		}
		if (this.isnotmobile()) {
			window.addEventListener("mousemove", this.moveCircle, true);
		}
	};
	componentWillUnmount() {
		if (this.isnotmobile()) {
			window.removeEventListener("mousemove", this.moveCircle);
		}
	}
	isnotmobile() {
		return window.innerWidth > 575.98;
	};
	moveCircle(e) {
		TweenLite.to("#mousePointer", 0.001, {
			css: {
				x: e.clientX,
				y: e.clientY
			},
		});
	};
	render() {
		const baseUrl = process.env.PUBLIC_URL;
		return (
			<BrowserRouter>
				{this.isnotmobile() && <div className="mousepointer" id="mousePointer"></div>}
				<Route exact path={`${baseUrl}/`} component={Home} />
				<Suspense fallback={<h1> </h1>}>
					<Route path={`${baseUrl}/you`} component={You} />
				</Suspense>
				<Route path={`${baseUrl}/os`} component={Os} />
				<Route path={`${baseUrl}/forms`} component={Froms} />
				<Route path={`${baseUrl}/verifyCode`} component={VerifyCode} />
			</BrowserRouter>
		)
	}
};

ReactDOM.render(<Index />, document.getElementById('root'))
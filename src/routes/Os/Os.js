import React from 'react';
import './Os.scss';
import Swiper from 'swiper';
import wallpaper from '../../assets/wallpaper.jpg';
import Homepage from './Homepage';
import Menu from './Menu';
import NotificationBar from './NotificationBar';

class Os extends React.Component {

	componentDidMount() {
		new Swiper('.swiper-container-main', {
			direction: 'vertical',
			effect: 'fade',
		});
	};
	componentDidUpdate() {
	};
	componentWillUnmount() {
	};
	render() {
		return (
			<div id="Os">
				<NotificationBar />
				<div className="swiper-container swiper-container-main">
					<div className="swiper-wrapper">
						<div className="swiper-slide">
							<div className="background">
								<img src={wallpaper} alt="background Img" />
							</div>
							<Homepage />
						</div>
						<div className="swiper-slide">
							<div className="background blur">
								<img src={wallpaper} alt="background Img blured" />
							</div>
							<Menu />
						</div>
					</div>
				</div>
			</div>
		)
	}
};

export default Os;
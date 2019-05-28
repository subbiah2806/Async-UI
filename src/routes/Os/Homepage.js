import React from 'react';
import CustomSvg from '../../components/CustomSvg';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css'

class Homepage extends React.Component {

	componentDidMount() {
		new Swiper('.swiper-container-homepage-content', {
			spaceBetween: 50,
      pagination: {
        el: '.swiper-pagination-homepage-content',
        clickable: true,
      },
    });
	};
	componentDidUpdate() {
	};
	componentWillUnmount() {
	};
	render() {
		return (
			<div id="Homepage">
				<div className="homepage-content-area">
					<div className="swiper-container swiper-container-homepage-content">
						<div className="swiper-wrapper">
							<div className="swiper-slide"></div>
							<div className="swiper-slide"></div>
						</div>
						<div className="swiper-pagination swiper-pagination-homepage-content"></div>
					</div>
				</div>
				<footer className="homepage-footer">
					<CustomSvg svgName="mat-phone" style={{fill: 'green', width: "40", height: "40"}}/>
					<CustomSvg svgName="mat-music_video" style={{fill: 'white', width: "40", height: "40"}}/>
					<CustomSvg svgName="mat-shopping_cart" style={{fill: 'grey', width: "40", height: "40"}}/>
					<CustomSvg svgName="mat-camera_alt" style={{fill: 'red', width: "40", height: "40"}}/>
				</footer>
			</div>
		)
	}
};

export default Homepage;
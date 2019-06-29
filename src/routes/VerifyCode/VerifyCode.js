import React from 'react';
import { CustomSvg, CircleIcon } from '../../components'
import countryTelData from 'country-telephone-data';
import 'flag-icon-css/css/flag-icon.css';
import './VerifyCode.scss';
import Select from 'react-select';
import TextField from '@material-ui/core/TextField';
import { Agent } from 'https';
import axios from 'axios';

const axiosNoSsl = axios.create({
	httpsAgent: new Agent({
		rejectUnauthorized: false,
	}),
});

const customStyles = {
	control: (base, state) => ({
		...base,
		boxShadow: "none"
	}),
	menu: base => ({
		...base,
		zIndex: 100
	})
};

class VerifyCode extends React.Component {
	listOfCountries = [];
	constructor() {
		super();
		countryTelData.allCountries.forEach((country) => {
			let formatName;
			if (country.format && country.dialCode) {
				let dialCode = country.dialCode.toString();
				let format = country.format.split('-').join(' ');
				format = format.split('(').join(' ');
				format = format.split(')').join(' ');
				format = format.split('  ').join(' ');
				const formatNameLength = format.split('.').length;
				formatName = format.split('.').map((value, index) => {
					if (formatNameLength > index + 1) {
						if (dialCode[index]) {
							return `${value}${dialCode[index]}`
						} else {
							return `${value}*`
						}
					}
				});
				formatName = formatName.join('');
			}
			country.name = country.name.replace(/ *\([^)]*\) */g, "");
			this.listOfCountries.push({ value: country.iso2, label: `${country.name} (${formatName})`, formatName: formatName, dialCode: `+${country.dialCode}` })
		});
	}
	state = {
		selectedOption: { value: "us", label: "United States (+1 *** *** ****)", formatName: '+1 *** *** ****', dialCode: '+1' },
		inputValue: '',
		length: 10,
		formError: false,
		verifyCode: null,
	};
	handleChange = selectedOption => {
		const formatNameLength = selectedOption.formatName && selectedOption.formatName.split(' ').join('').length;
		const dialcodeLength = selectedOption.dialCode.length;
		this.setState({ length: (formatNameLength && formatNameLength - dialcodeLength) || undefined })
		this.setState({ selectedOption });
		this.setState({ inputValue: '' });
	};
	addSpaces = initial => {
		const { length, formError } = this.state;
		let inputValue = initial.target.value;
		if (!length || (inputValue.length <= length)) {
			if (inputValue.length === length && formError) {
				this.setState({ formError: false })
			}
			inputValue = inputValue.replace(/[^0-9+ ]/, "");
			this.setState({ inputValue })
		}
	}
	numberOnBlur = () => {
		const { length, inputValue, formError } = this.state;
		if (length && inputValue.length !== length && !formError) {
			this.setState({ formError: true })
		}
	}
	sendMsg = () => {
		const { length, inputValue, selectedOption } = this.state;
		if (length && inputValue.length !== length) {
			this.setState({ formError: true })
		} else {
			const verifyCode = Math.floor(Math.random() * 90000) + 10000;
			this.setState({ verifyCode })
			// axiosNoSsl({
			// 	method: 'post',
			// 	url: 'https://rest.nexmo.com/sms/json',
			// 	params: {
			// 		api_key: '41faeb39',
			// 		api_secret: 'BZ1LENvOITq0yb8n',
			// 		to: `${selectedOption.dialCode.split('+').join('')}${inputValue}`,
			// 		from: '12065294617',
			// 		text: `${verifyCode}. Hi this is verification code from ASYNC-UI. \nThanks for watching my work`
			// 	},
			// 	headers: {
			// 		'Content-Type': 'application/x-www-form-urlencoded'
			// 	}
			// });
		}
	}
	render() {
		const { selectedOption, inputValue, formError, verifyCode } = this.state;
		const section1 = {
			backgroundColor: '#304ffe',
			height: '50%',
			width: '100%',
			borderRadius: '0 0 20px 20px',
		}
		const section1Sent = {
			backgroundColor: 'white',
			height: '10%',
			minHeight: '70px',
			width: '100%',
			transition: 'height .5s',
		}
		return (
			<div id="VerifyCode">
				<section className="VerifyCode-section1" style={verifyCode ? section1Sent : section1}>
					<div className="V-marginTop">
						<CustomSvg svgName="mat-chevron_left" style={{ fill: verifyCode ? 'black' : '#FFF', width: "40", height: "40" }} />
						<h1 style={{ color: verifyCode ? 'black' : '#FFF' }}>
							{verifyCode ? 'Verification Code' : 'Send Code'}
						</h1>
						<CustomSvg svgName={verifyCode ? "mat-lock" : "mat-Menu"} style={{ fill: verifyCode ? 'black' : '#FFF', width: "30", height: "30" }} />
					</div>
					{!verifyCode && <div className="V-marginMid">
						<CustomSvg svgName="mat-Devices" style={{ fill: '#FFF', width: "80", height: "80" }} />
					</div>}
				</section>
				<section className={verifyCode ? "VerifyCode-section2-sent" : "VerifyCode-section2"}>
					{!verifyCode && <React.Fragment>
						<div className="V-marginTop">
							<h1>
								Personal information
							<CustomSvg svgName="mat-chevron_right" style={{ fill: 'black', width: "20", height: "20" }} />
							</h1>
						</div>
						<span className={`flag-icon flag-icon-${this.state.selectedOption.value}`}></span>
						<Select
							className="reactSelect"
							value={selectedOption}
							onChange={this.handleChange}
							options={this.listOfCountries}
							isSearchable={false}
							styles={customStyles}
						/>
						<div className="VerifyCode-section2-div">
							<p className="dialcode">{this.state.selectedOption.dialCode}</p>
							<TextField
								onBlur={this.numberOnBlur}
								className="TextFieldArea"
								autoComplete="phoneNumber"
								name="phoneNumber"
								variant="outlined"
								required
								fullWidth
								id="phoneNumber"
								label="Your phone number"
								value={inputValue}
								onChange={this.addSpaces}
								margin="normal"
								error={formError}
							/>
						</div>
						<div className="remaining">
							<h5 className="message">
								We will send you <strong>ONE</ strong> time SMS message.
							<br />Carrier rates may apply.
						</h5>
						</div>
						<CircleIcon className="sendbutton" onClick={this.sendMsg} IPStyle={{ cursor: formError ? 'not-allowed' : 'pointer' }} istyle={{ pointerEvents: formError ? 'none' : 'auto', backgroundColor: '#304ffe', height: '65px', width: '65px' }}>
							<CustomSvg svgName="mat-arrow_forward" style={{ fill: '#304ffe', stroke: 'white', width: "30", height: "30" }} />
						</CircleIcon>
					</React.Fragment>}
					{verifyCode && <React.Fragment>
						<svg viewBox="0 75 500 450" className="wavy" preserveAspectRatio="none">
							<path d="M0.00,92.27 C216.83,192.92 304.30,8.39 500.00,109.03 L500.00,0.00 L0.00,0.00 Z" style={{ stroke: 'none', fill: 'white' }}></path>
						</svg>
						<div className="section2-sent-maincontent">
							<div className="row">
								<CustomSvg svgName="mat-done" style={{ fill: '#FFF', width: "25", height: "25" }} />
								<h1 className="h1" style={{ marginLeft: '20px' }}>confirmation</h1>
							</div>
							<div className="row">
								<CustomSvg svgName="mat-phonelink_ring" style={{ fill: '#FFF', width: "45		", height: "45" }} />
								<p style={{ marginLeft: '20px', color: 'white', fontSize: '20px' }}>Please type the verification <br /> code sent to {`${selectedOption.dialCode} ${inputValue.split('').map((val, index) => (index + 1 > inputValue.length - 3 || index === 0) ? val : '*').join('')}`}</p>
							</div>
						</div>
					</React.Fragment>}
				</section>
			</div>
		)
	}
}

export default VerifyCode;
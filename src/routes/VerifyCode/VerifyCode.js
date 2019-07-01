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
		userInput: ['', '', '', ''],
		codeVerified: false,
		countStart: 4
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
			this.setState({ formError: true });
		} else {
			this.setState({ codeVerified: false });
			const verifyCode = Math.floor(Math.random() * 9000) + 1000;
			this.setState({ verifyCode });
			axiosNoSsl({
				method: 'post',
				url: 'https://rest.nexmo.com/sms/json',
				params: {
					api_key: '41faeb39',
					api_secret: 'BZ1LENvOITq0yb8n',
					to: `${selectedOption.dialCode.split('+').join('')}${inputValue}`,
					from: '12065294617',
					text: `${verifyCode}. Hi this is verification code from ASYNC-UI. \nThanks for watching my work`
				},
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			});
		}
	}
	backButton = () => {
		const { verifyCode } = this.state;
		if (verifyCode) {
			this.setState({ verifyCode: null })
		} else {
			this.props.history.push('/')
		}
	}
	inputRefs = [];
	setRef = (ref) => {
		this.inputRefs.push(ref);
	};
	noOfIncorrectEntries = 0;
	ifError = {};
	inputError = {};
	section2VerifiedCode = {};
	countStart = 4;
	verifyinputvalue = (event, key) => {
		const { userInput, verifyCode } = this.state;
		const newValue = userInput;
		const uservalue = event.target.value.length;
		if (uservalue === 1) {
			newValue[key] = event.target.value;
			this.setState({ userInput: newValue });
			if (key === 3) {
				const userEnteredValue = parseInt(userInput.join(''));
				if (userEnteredValue === verifyCode) {
					this.inputRefs[3].blur();
					this.setState({ codeVerified: true });
					this.section2VerifiedCode = {
						height: '0%',
						transition: 'height 500ms',
					}
					const time = setInterval(() => {
						if (this.countStart > 0) {
							this.countStart = this.countStart - 1;
							this.setState({ countStart: this.countStart })
						} else {
							clearInterval(time);
							this.setState({ codeVerified: false });
							this.props.history.push('/')
						}
						console.log('countStart', this.countStart)
					}, 1000);
				} else {
					this.ifError = {
						borderColor: 'red'
					}
					this.inputError = {
						backgroundColor: 'rgba(216, 93, 93, 0.4)',
						caretColor: 'white'
					}
					if (this.noOfIncorrectEntries < 2) {
						setTimeout(() => {
							this.setState({ userInput: ['', '', '', ''] });
							this.inputRefs[0].focus();
						}, 250);
					} else {
						this.setState({ userInput: ['', '', '', ''] });
						this.setState({ verifyCode: null })
					}
					this.noOfIncorrectEntries = this.noOfIncorrectEntries + 1;
				}
			} else {
				this.inputRefs[key + 1].focus();
			}
		}
	}
	removeuserinput = (event, i) => {
		var key = event.keyCode || event.charCode;

		if (key === 8 || key === 46) {
			const { userInput } = this.state;
			const newValue = userInput;
			if (i !== 0) {
				newValue[i - 1] = '';
				this.setState({ userInput: newValue });
				this.inputRefs[i - 1].focus();
			}
		}
	}
	render() {
		const { codeVerified, userInput, selectedOption, inputValue, formError, verifyCode } = this.state;
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
		const section1Verified = {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: 'white',
			height: '100%',
			width: '100%',
		}
		return (
			<div id="VerifyCode">
				<section className="VerifyCode-section1" style={verifyCode ? codeVerified ? section1Verified : section1Sent : section1}>
					{!codeVerified && <React.Fragment>
						<div className="V-marginTop">
							<i onClick={this.backButton}>
								<CustomSvg className="svg-hover" svgName="mat-chevron_left" style={{ fill: verifyCode ? 'black' : '#FFF', width: "40", height: "40" }} />
							</i>
							<h1 style={{ color: verifyCode ? 'black' : '#FFF' }}>
								{verifyCode ? 'Verification Code' : 'Send Code'}
							</h1>
							<CustomSvg className="svg-hover-not-allowed" svgName={verifyCode ? "mat-lock" : "mat-Menu"} style={{ fill: verifyCode ? 'black' : '#FFF', width: "30", height: "30" }} />
						</div>
						{!verifyCode && <div className="V-marginMid">
							<CustomSvg svgName="mat-Devices" style={{ fill: '#FFF', width: "80", height: "80" }} />
						</div>}
					</React.Fragment>}
					{codeVerified && <React.Fragment>
						<h1 style={{ color: 'black' }}>
							{'Code Verified'}
						</h1>
						<h3 style={{ color: 'black' }}>
							{'Redirecting to homepage in '}{this.countStart}{'... seconds'}
						</h3>
					</React.Fragment>}
				</section>
				<section style={this.section2VerifiedCode} className={verifyCode ? "VerifyCode-section2-sent" : "VerifyCode-section2"}>
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
						<svg style={{ display: codeVerified ? 'none' : 'block' }} viewBox="0 75 500 450" className="wavy" preserveAspectRatio="none">
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
							<div style={this.ifError} className="row border">
								{Array.from({ length: 4 }).map((x, i) => {
									return (
										<input style={this.inputError} ref={this.setRef} key={i} placeholder="-" value={userInput[i]} className="verify-code-input" type="number" onChange={(e) => this.verifyinputvalue(e, i)} onKeyDown={(e) => this.removeuserinput(e, i)} />
									)
								})}
							</div>
						</div>
					</React.Fragment>}
				</section>
			</div>
		)
	}
}

export default VerifyCode;
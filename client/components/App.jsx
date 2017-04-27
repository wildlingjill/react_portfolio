import React from "react";

class ContactButton extends React.Component {
	render(){
		return (
			<li>
				<a href={this.props.url}>
					<img src={this.props.img} width="40" height="40"></img>
				</a>
			</li>
		);
	}
}

export class Header extends React.Component {
	render(){
		return (
			<header>
				<h1>Jill Robinson</h1>
				<h4>JAVASCRIPT DEVELOPER</h4>
				<ul className="contact_buttons">
					<ContactButton url="/static/docs/jillrobinsonresumeApr17.pdf" img="/static/img/resume.png" />
					<ContactButton url="mailto:contact@jillcrobinson.com" img="/static/img/email.png" />
					<ContactButton url="https://github.com/wildlingjill" img="/static/img/github.png" />
					<ContactButton url="https://www.youtube.com/channel/UCpzSHDdfhICve3Bxk-Zbc-A" img="/static/img/youtube.png" />
					<ContactButton url="https://www.linkedin.com/in/jillcrobinson" img="/static/img/linkedin.png" />
				</ul>
			</header>
		);
	}
}

export class Container extends React.Component {
	render () {
		return (
			<div className="grid_container">
				<div className="parallax col-12"></div>
				<div className="scroller col-12">
					
				</div>
			</div>
		);
	}

}

export class Site extends React.Component {
	render () {
		return (
			<Header />
		);
	}

}

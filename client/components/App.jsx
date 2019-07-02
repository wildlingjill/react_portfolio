import React from "react";

class ContactButton extends React.Component {
	render(){
		return (
			<li>
				<a href={this.props.url} target="_blank" rel="noopener noreferrer">
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
					<ContactButton url="/static/docs/JillRobinsonResumeMar2019.pdf" img="/static/img/resume.png" />
					<ContactButton url="mailto:contact@jillcrobinson.com" img="/static/img/email.png" />
					<ContactButton url="https://github.com/wildlingjill" img="/static/img/github.png" />
					<ContactButton url="https://www.youtube.com/c/JillRobinson" img="/static/img/youtube.png" />
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
				<div className="parallax col-12">

				</div>
				<div className="scroller col-12">
					<h2 className="flex-h2">Hi, I'm <span className="span">Jill</span></h2>
					<div className="flex-p">
						<p>I'm a determined and motivated <span className="span">full-stack JavaScript engineer</span> currently living in <span className="span">San Jose, CA</span> (but originally from the UK)!</p>
						<p>I am passionate about learning new technologies, and have a special interest in <span className="span">front-end frameworks</span> such as <span className="span">React</span> and <span className="span">AngularJS</span>. I gained experience building in these frameworks during and after attending the Coding Dojo bootcamp in San Jose. I also have experience of working in full stack Python, and iOS.</p>
						<p>If you feel like I could be a good fit for your team or just want to find out more, please get in touch at contact@jillcrobinson.com, view my <a href="https://www.linkedin.com/in/jillcrobinson">LinkedIn</a> or <a href="https://github.com/wildlingjill">GitHub</a> accounts, or watch my <a href="https://www.youtube.com/c/JillRobinson">JavaScript with Jill</a> YouTube walkthroughs.</p>
					</div>
					<br />
					<h3>Skills</h3>
					<Technologies />
					<ul className="techList">
						<li><span className="span">Platforms: </span> JavaScript/Node.js, Python, Swift, Web & Mobile-Web (HTML5/CSS3)</li>
						<li><span className="span">Frameworks: </span> AngularJS, React.js, Ember, Polymer, Pylot MVC, Flask</li>
						<li><span className="span">Libraries: </span> jQuery, Bootstrap, Materialize, Socket.IO, Mocha, Chai</li>
						<li><span className="span">Servers: </span> Linux, NGINX, Express.js</li>
						<li><span className="span">Databases: </span> MySQL, MongoDB/Mongoose</li>
						<li><span className="span">Other Technologies: </span> React Native, Xcode, Git/GitHub</li>
					</ul>
					<br />
					<h3>Projects</h3>
					<ProjectContainer />
					<br />
					<h3 className="h3">JavaScript with Jill</h3>
					<div className="videos">
						<iframe className="videoFrame" src="https://www.youtube.com/embed/K05Ftgvj06U?rel=0" allowFullScreen></iframe>
						<iframe className="videoFrame" src="https://www.youtube.com/embed/DHoiFbU0Ezk?rel=0" allowFullScreen></iframe>
						<iframe className="videoFrame" src="https://www.youtube.com/embed/pNvAlEu26k8?rel=0" allowFullScreen></iframe>
					</div>
					<br />
					<ThanksContainer />
				</div>
			</div>
		);
	}

}

export class Tooltip extends React.Component {
	render () {
		return (
			<div className="tooltip">
				<img src={this.props.img} width="60" height="60" /><span className="tooltiptext">{this.props.name}</span>
			</div>
		);
	}
}

export class Technologies extends React.Component {
	render () {
		return (
			<div className="technologies">
				<Tooltip img="/static/img/javascript.png" name="JavaScript"/>
				<Tooltip img="/static/img/angular.png" name="AngularJS"/>
				<Tooltip img="/static/img/mongodb.png" name="MongoDB"/>
				<Tooltip img="/static/img/node.png" name="Node.js"/>
				<Tooltip img="/static/img/react.png" name="React"/>
				<Tooltip img="/static/img/github2.png" name="Git"/>
				<Tooltip img="/static/img/html5.png" name="HTML5"/>
				<Tooltip img="/static/img/css3.png" name="CSS3"/>
				<Tooltip img="/static/img/python.png" name="Python"/>
				<Tooltip img="/static/img/swift.png" name="iOS/Swift"/>
				<Tooltip img="/static/img/mysql.png" name="MySql"/>
			</div>
		);
	}
}

export class ProjectContainer extends React.Component {
	render () {
		return (
			<div className="projectcontainer">
				<div className="projects">
					<div className="projects1 projects">
						<Project url="http://papirus.jillcrobinson.com" img="/static/img/papirus.png" />
						<Project url="http://colorvert.jillcrobinson.com/" img="/static/img/colorvert.png" />
						<Project url="https://www.youtube.com/watch?v=K05Ftgvj06U" img="/static/img/directme.png" />
					</div>
					<div className="projects1 descriptions">
						<p><span className="span">Papirus:</span> an API REST endpoint tester built in React, Node.js and Express.js</p>
						<p><span className="span">Colorvert:</span> a Hex-RGB converter built with AJAX, Node.js and Mocha</p>
						<p><span className="span">DirectMe:</span> Python activities app with Yelp API integration, built in Flask and MySQL</p>
					</div>
				</div>
				<div className="projects">
					<div className="projects2 projects">
						<Project url="http://bluesuncorp.co.uk/2048/client/index.html#/" img="/static/img/2048.png" />
						<Project url="https://github.com/wildlingjill/maze_project" img="/static/img/imaze.png"/>
					</div>
					<div className="projects2 descriptions">
						<p><span className="span">2048:</span> a web version of the number game built in AngularJS, Node.js and Express.js</p>
						<p><span className="span">iMaze:</span> interactive marble maze game for iOS built in Swift 2.3 with Core Motion controls</p>
					</div>
				</div>
			</div>
		);
	}
}

export class Project extends React.Component {
	render () {
		return (
			<div>
				<a href={this.props.url}>
					<img className="img" src={this.props.img} />
				</a>
			</div>
		);
	}
}

export class ThanksContainer extends React.Component {
	render () {
		return (
			<div>
				<h3 className="h3">Thanks for visiting!</h3>
				<div className="thankscontainer">
					<img className="thanksImg" src="/static/img/me.jpg" />
					<div className="contactcontainer">
						<Contact url="/static/docs/jillrobinsonresumeMay17.pdf" title="View my resume" />
						<Contact url="mailto:contact@jillcrobinson.com" title="Email me" />
						<Contact url="https://github.com/wildlingjill" title="View my GitHub profile" />
						<Contact url="https://www.youtube.com/c/JillRobinson" title="JavaScript with Jill on YouTube" />
						<Contact url="https://www.linkedin.com/in/jillcrobinson" title="Add me on LinkedIn" />
					</div>
				</div>
			</div>
		);
	}
}

export class Contact extends React.Component {
	render () {
		return (
			<div>
				<h4><a href={this.props.url}>{this.props.title}</a></h4>
				<hr className="hr" />
			</div>
		);
	}
}


export class Site extends React.Component {
	render () {
		return (
			<div>
				<Header />
				<Container />
			</div>
		);
	}
}

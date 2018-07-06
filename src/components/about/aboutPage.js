"use strict";

var React = require('react');

var About = React.createClass({
	statics: {
	},
	render: function () {
		return (
			<div>
				<h1>About</h1>
				<p>
					This application allows you to view drone telemetry and execute simple commands using the Flyt REST api (<a target="new" href="http://api.flytbase.com/?javascript--REST">api.flytbase.com</a>).


					The application is for demonstration purposes only.
				
				</p>
			</div>
		); 
	}
});

module.exports = About;
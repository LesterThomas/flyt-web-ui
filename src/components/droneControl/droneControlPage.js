"use strict";

var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;
var DroneControlStore = require('../../stores/droneControlStore');
var DroneControlActions = require('../../actions/droneControlActions');

var DroneControlPage = React.createClass({
	getInitialState: function() {
		return {
			droneControl: DroneControlStore.getAllDroneControl()
		};
	},

	componentWillMount: function() {
		DroneControlStore.addChangeListener(this._onChange);
	},

	//Clean up when this component is unmounted
	componentWillUnmount: function() {
		DroneControlStore.removeChangeListener(this._onChange);
	},

	_onChange: function() {
		this.setState({ droneControl: DroneControlStore.getAllDroneControl() });
	},

	render: function() {
		return (
			<div>
				<h1>Drone Control</h1>
				<ul>
				<li>Latitude: {this.state.droneControl.latitude}</li>
				<li>Longitude: {this.state.droneControl.longitude}</li>
				<li>Altitude: {this.state.droneControl.altitude}</li>
				</ul>
			</div>
		);
	}
});

module.exports = DroneControlPage;
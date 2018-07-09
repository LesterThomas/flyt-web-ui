import React, { Component } from 'react';

// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

var DroneControlStore = require('../../stores/droneControlStore');
var DroneControlActions = require('../../actions/droneControlActions');



class DroneControlPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			droneControl: DroneControlStore.getAllDroneControl()
		};
	}

	componentWillMount() {
		DroneControlStore.addChangeListener(this._onChange.bind(this));
	}
	
	//Clean up when this component is unmounted
	componentWillUnmount() {
		DroneControlStore.removeChangeListener(this._onChange);
		clearInterval(this.interval);
	}

	componentDidMount() {
		this.interval = setInterval( this.timer, 1000);
	}

	timer() {
		// setState method is used to update the state
		DroneControlStore.updateDrone();
	}

	_onChange() {
		this.setState({ droneControl: DroneControlStore.getAllDroneControl() });
	}

	render() {
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
}

module.exports = DroneControlPage;
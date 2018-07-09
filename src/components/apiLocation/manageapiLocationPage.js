import React from 'react';
import Router from 'react-router';
import APILocationForm from './apiLocationForm';
import apiLocationAction from '../../actions/apiLocationAction';
import apiLocationStore from '../../stores/apiLocationStore';
import toastr from 'toastr';

var ManageapiLocationPage = React.createClass({
	getInitialState: function() {
		return {
			apiLocation: apiLocationStore.getapiLocation(),
			errors: {},
			dirty: false
		};
	},

	componentWillMount: function() {
		this.setState({apiLocation: apiLocationStore.getapiLocation()});
		apiLocationStore.addChangeListener(this._onChange);
	},

	//Clean up when this component is unmounted
	componentWillUnmount: function() {
		apiLocationStore.removeChangeListener(this._onChange);
	},

	_onChange: function() {
		this.setState({ apiLocation: apiLocationStore.getapiLocation()});
	},

	setapiLocationState: function(event) {
		this.setState({dirty: true});
		var field = event.target.name;
		var value = event.target.value;
		this.state.apiLocation[field] = value;
		return this.setState({apiLocation: this.state.apiLocation});
	},

	apiLocationFormIsValid: function() {
		var formIsValid = true;
		this.state.errors = {}; //clear any previous errors.

		this.setState({errors: this.state.errors});
		return formIsValid;
	},

	saveapiLocation: function(event) {
		event.preventDefault();

		if (!this.apiLocationFormIsValid()) {
			return;
		}

		apiLocationAction.updateapiLocation(this.state.apiLocation);
		
		this.setState({dirty: false});
		toastr.success('API Location saved.');
	},

	render: function() { 
		console.log('Rendering API Location', this.state);
		return (
			<div>
				<br />				
				<APILocationForm 
					apiLocation={this.state.apiLocation}
					onChange={this.setapiLocationState} 
					onSave={this.saveapiLocation}
					errors={this.state.errors} />
			</div>
		);
	}
});

module.exports = ManageapiLocationPage;
import Input from '../common/textInput';
import PropTypes from 'prop-types';
import React, { Component } from 'react';


class apiLocationForm extends Component {

	render() {
		console.log('Rendering API Location Form', this.props);

		return (
			<form>
				<h1>Manage API Location</h1>
				<Input
					name="href"
					label="API Location"
					value={this.props.apiLocation.href}
					onChange={this.props.onChange}
					error={this.props.errors.href} />
				<Input
					name="vehicleID"
					label="VehicleID"
					value={this.props.apiLocation.vehicleID}
					onChange={this.props.onChange}
					error={this.props.errors.href} />
				<Input
					name="authorization"
					label="Authorization"
					value={this.props.apiLocation.authorization}
					onChange={this.props.onChange}
					error={this.props.errors.href} />


				<input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
			</form>
		);
	}
}

apiLocationForm.propTypes = {
	apiLocation: PropTypes.object.isRequired,
	onSave:	PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	errors: PropTypes.object
};


module.exports = apiLocationForm;
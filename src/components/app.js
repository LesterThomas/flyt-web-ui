/*eslint-disable strict */ //Disabling check because we can't run strict mode. Need global vars.
import React from 'react';
import Header from './common/header';
import { RouteHandler } from 'react-router';

import $ from 'jquery';

var App = React.createClass({
	render: function() {
		return (
			<div>
				<Header/>
				<div className="container-fluid">
					<RouteHandler/>
				</div>
			</div>
		);
	}
});

module.exports = App;
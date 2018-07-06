"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var apiLocationActions = {

	updateapiLocation: function(apiLocation) {
		Dispatcher.dispatch({
			actionType: ActionTypes.UPDATE_APILOCATION,
			apiLocation: apiLocation
		});
	}

};

module.exports = apiLocationActions;
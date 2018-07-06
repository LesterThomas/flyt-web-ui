"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var InitializeActions = {
	initApp: function() {
		var defaultapiLocation = "https://dev.flytbase.com/rest/ros/flytsim/";
		var defaultVehicleID = "0pOz4Wfj";
		var defaultAuthorization = "Token 4735f11275d02a9529859d7a6a8224b7418f82eb";
		var dispatchData = {
			actionType: ActionTypes.INITIALIZE,
			initialData: {
				apiLocation: {href: defaultapiLocation, vehicleID: defaultVehicleID, authorization: defaultAuthorization}
			}
		};
		Dispatcher.dispatch(dispatchData);	
	}
};

module.exports = InitializeActions;
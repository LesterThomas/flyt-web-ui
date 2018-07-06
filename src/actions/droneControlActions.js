"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var DroneControlActions = {
	createDroneControl: function(droneControl) {
		//var newDroneControl = DroneControlApi.saveDroneControl(droneControl);
		//Hey dispatcher, go tell all the stores that an droneControl was just created.
		/*Dispatcher.dispatch({
			actionType: ActionTypes.CREATE_SERVICESPEC,
			droneControl: newDroneControl
		});*/
	},

	updateDroneControl: function(droneControl) {
		//var updatedDroneControl = DroneControlApi.saveDroneControl(droneControl);
		/*Dispatcher.dispatch({
			actionType: ActionTypes.UPDATE_SERVICESPEC,
			droneControl: updatedDroneControl
		});*/
	},

	deleteDroneControl: function(id) {
		//DroneControlApi.deleteDroneControl(id);
		/*Dispatcher.dispatch({
			actionType: ActionTypes.DELETE_SERVICESPEC,
			id: id
		});*/
	}
};

module.exports = DroneControlActions;
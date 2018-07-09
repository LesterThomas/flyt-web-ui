"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var _droneControl = {};
var _apiLocation = {};

var DroneControlStore = assign({}, EventEmitter.prototype, {
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	getAllDroneControl: function() {
		return _droneControl;
	},

	updateDrone: function() {
		fetch( this._apiLocation.href, { 
			method: "get", 
			headers: new Headers({
				"Authorization": this._apiLocation.authorization, 
				"VehicleID": this._apiLocation.vehicleID
			})
		}).then(function(response) {
				return response.json();
			})
			.then(function(myJson) {
				_droneControl = myJson;
				console.log("_droneControl", myJson);
				DroneControlStore.emitChange();
			});	
		return _droneControl;
	},


	getDroneDetails: function(apiLocation){
		this._apiLocation = apiLocation;
		this.updateDrone();
	}

});

Dispatcher.register(function(action) {
	switch(action.actionType) {
		case ActionTypes.INITIALIZE:
			DroneControlStore.getDroneDetails(action.initialData.apiLocation);
			break;
		case ActionTypes.UPDATE_APILOCATION:
			DroneControlStore.getDroneDetails(action.initialData.apiLocation);
		break;
		default:
			// no op
	}
});

module.exports = DroneControlStore;
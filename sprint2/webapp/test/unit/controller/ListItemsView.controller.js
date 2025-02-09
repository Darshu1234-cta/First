/*global QUnit*/

sap.ui.define([
	"app/sprint2/controller/ListItemsView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ListItemsView Controller");

	QUnit.test("I should test the ListItemsView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});

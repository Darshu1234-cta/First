/*global QUnit*/

sap.ui.define([
	"app/navigation/controller/Businesspartnerview.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Businesspartnerview Controller");

	QUnit.test("I should test the Businesspartnerview controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});

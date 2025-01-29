/*global QUnit*/

sap.ui.define([
	"namespace2/salesorderdisplay12/controller/salesOrder.controller"
], function (Controller) {
	"use strict";

	QUnit.module("salesOrder Controller");

	QUnit.test("I should test the salesOrder controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});

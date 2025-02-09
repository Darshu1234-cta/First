/* global QUnit */
// https://api.qunitjs.com/config/autostart/
QUnit.config.autostart = false;

sap.ui.require([
	"app/sprint2/test/unit/AllTests"
], function (Controller) {
	"use strict";
	QUnit.start();
});
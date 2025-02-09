sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller,JSONModel) => {
    "use strict";
 
    return Controller.extend("app.darshanamining19.controller.miningDetail", {
        onInit() {
         
           
            var oRouter = this.getOwnerComponent().getRouter()
            oRouter.attachRoutePatternMatched(this._onMatched, this)
           
        },
        _onMatched: function(oEvent){
 
            var myobj=oEvent.mParameters.arguments.obj;
           
           
            console.log(myobj);
            var myObj = JSON.parse(myobj);
 
            var oModel = new JSONModel(myObj)
            this.getView().setModel(oModel,'Routingdetails')
            console.log(oModel);
           
        }
    });
});

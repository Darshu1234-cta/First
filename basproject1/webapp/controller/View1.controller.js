sap.ui.define([
    "sap/ui/core/mvc/Controller",
   
], (Controller) => {
    "use strict";
 
    return Controller.extend("namespace.basproject1.controller.View1", {
        onInit() {
           
            var oModel=new sap.ui.model.json.JSONModel();
             oModel.loadData("/model/mockData/empData.json");
            this.getView().setModel(oModel, "dModel");
 
 
        }
    });
});
 
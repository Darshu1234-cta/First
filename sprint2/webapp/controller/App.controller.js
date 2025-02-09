sap.ui.define([
  "sap/ui/core/mvc/Controller"
], (Controller) => {
  "use strict";
 
  return Controller.extend("app.sprint2.controller.App", {
      onInit() {
       
       
        var oModel=new sap.ui.model.json.JSONModel();
      oModel.loadData("/model/mockData/basic.json");
        this.getView().setModel(oModel,"toolModel");
      }
  });
});
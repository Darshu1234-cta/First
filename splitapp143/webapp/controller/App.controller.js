sap.ui.define([
  "sap/ui/core/mvc/Controller"
], (BaseController) => {
  "use strict";

  return BaseController.extend("app.splitapp143.controller.App", {
      onInit() {
         var oModel=new sap.ui.model.json.JSONModel();
        oModel.loadData("/model/mockData/toolsData.json"); 
				this.getView().setModel(oModel,"toolModel");
      }
  });
});
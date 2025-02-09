sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
  ], (Controller,Fragment) => {
    "use strict";
 
    return Controller.extend("app.sprint2.controller.DetailView", {
        onInit() {
          var oModel=new sap.ui.model.json.JSONModel();
              oModel.loadData("/model/mockData/details.json");
                  this.getView().setModel(oModel);
 
                  let oRouter = this.getOwnerComponent().getRouter();
            oRouter.attachRoutePatternMatched(this._onRouteMatched,this)
 
        },
 
        _onRouteMatched:function(oEvent)
        {
            let sIndex = oEvent.getParameter("arguments").ind
            let sPath = "toolModel>/location/" + sIndex
            let oDetailView = this.getView();
            oDetailView.bindElement(sPath)
 
        },
 
 
 
 
                  onConfirm:function(oEvent){
                    var oItem=oEvent.getParameter("selectedItem");
                      var sItem=  oItem.mProperties.title;
                      var oInpt=sap.ui.getCore().byId(this.sId);
                      oInpt.setValue(sItem);
                   
                  },
                  f4Help:function(oEvent){
                       this.sId=oEvent.getSource().getId();
                      var oView=this.getView();
                      var oModel = oView.getModel();
                      var oData = JSON.parse(JSON.stringify(oModel.getProperty("/detail")));
                     
                      var oTempModel = new sap.ui.model.json.JSONModel({
                        detail: oData
                      });
                   
                    if(!this.dialog){
                      this.dialog=Fragment.load({
                        name:"app.sprint2.fragments.popUp",
                        controller:this
                      }).then(function(oDialog){
                        this.dialog=oDialog;
                        oView.addDependent(this.dialog);
                        this.dialog.setModel(oTempModel, "fragmentModel");
                        this.dialog.open();
                      }.bind(this));
                    }else{
                      this.dialog.open();
                    }
                    // var oView=this.getView();
                    // var that=this;
                    // if(!that.dialog){
                    //  that.dialog=Fragment.load({
                    //    name:"capgemini.ui5training.batch12.fragments.popUp",
                    //    controller:this
                    //  }).then(function(oDialog){
                    //    that.dialog=oDialog;
                    //    oView.addDependent(that.dialog);
                    //    that.dialog.open();
                    //  });
                    // }else{
                    //  that.dialog.open();
                    // }
                  }
               
               
        });
    });
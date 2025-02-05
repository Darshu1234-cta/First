sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
], (Controller,Fragment) => {
    "use strict";
 
    return Controller.extend("app.splitapp143.controller.DetailView", {
        onInit() {
             var oModel=new sap.ui.model.json.JSONModel();
            oModel.loadData("/model/mockData/supplier.json"); 
                    this.getView().setModel(oModel);
            let oRouter=this.getOwnerComponent().getRouter();
            oRouter.attachRoutePatternMatched(this._onRouteMatched,this)
        },
        _onRouteMatched:function(oEvent)   {
            let sIndex=oEvent.getParameter("arguments").ind
            let sPath="toolModel>/toolsData/"+sIndex
            let oDetailView=this.getView();
            oDetailView.bindElement(sPath)
        },
        onConfirm:function(oEvent){
            var oItem=oEvent.getParameter("selectedItem");
              var sItem=  oItem.mProperties.title;
              //var sItem=oItem.getProperty("title")
              var oInpt=sap.ui.getCore().byId(this.sId);
              oInpt.setValue(sItem);
            
        },
        f4Help:function(oEvent){
            this.sId=oEvent.getSource().getId();
             var oView=this.getView();
             var oModel=oView.getModel();
             // Deep Copy
             var oData=JSON.parse(JSON.stringify(oModel.getProperty("/supplierTab")));        
             
             var oTempModel= new sap.ui.model.json.JSONModel({
                 supplierTab:oData
             });  
             if(!this.dialog){
                this.dialog=Fragment.load({
                    name:"app.splitapp143.fragments.popUp",
                    controller:this
                }).then(function(oDialog){
                    this.dialog=oDialog;
                    oView.addDependent(this.dialog);
                    this.dialog.setModel(oTempModel,"fragmentModel");
                    this.dialog.open();
                }.bind(this));
            }else{
                this.dialog.open();
            }
        },
        onPresstoView1:function(){
			var oAppCtrl=this.getView().getParent();
			oAppCtrl.to("idList");
			
		}
  
    });
});
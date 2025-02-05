sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("app.navigation.controller.salesOrderView", {
        onInit: function() {
            let oRouter=this.getOwnerComponent().getRouter()
            oRouter.attachRoutePatternMatched(this.onRouteMatched,this)
        },
        onRouteMatched:function(oEvent){
          let sId=oEvent.mParameters().arguments.sId
          // let sId2=oEvent.getParameter().arguments.id
          // query= /BusinessPartnerSet('0100000002')/ToSalesOrders

          console.log();
          
        }
      });
    }
  );
  
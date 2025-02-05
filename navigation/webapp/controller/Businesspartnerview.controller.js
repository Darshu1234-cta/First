sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("app.navigation.controller.Businesspartnerview", {
        onInit:function () {

        },
        onSelect:function(oEvent){
             var oItem=oEvent.getParameter("selectedItem")
             let skey=oItem.getProperty("key");
             let oRouter=this.getOwnerComponent().getRouter()
             oRouter.navTo("RouteDetail",{
                id:skey
             })
        }
    });
});

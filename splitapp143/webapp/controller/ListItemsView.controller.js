sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], (Controller) => {
    "use strict";

    return Controller.extend("app.splitapp143.controller.ListItemsView", {
        onInit() {
        },onItemPress:function(oControlEvent){
            var item=oControlEvent.getParameter("listItem");
             var sPath=item.oBindingContexts.toolModel.sPath;
             let aItems=sPath.split("/")
             let sIndex=aItems[aItems.length-1]
             let oRouter=this.getOwnerComponent().getRouter()
             oRouter.navTo("RouteDetail",{
                ind:sIndex
             })
            //  var mainPath="toolModel>" +sPath;
            //  var oApp=this.getView().getParent().getParent();
            //  //var oApp=this.oModel();
                // var oView2=oApp.getDetailPage("idDetail");
                // oView2.bindElement(mainPath);
                this.onPressToView2;
               
           },
           
           onSort:function(){
           
               if(this.descending==="undefined") {
                   this.descending=false;
               }
               // var descending=false;
           var sorter=new sap.ui.model.Sorter("name", this.descending);
           var oList=this.getView().byId("idListItem");
           var oBinding=oList.getBinding("items");
           oBinding.sort(sorter);
           this.descending=!this.descending;
           
           },
         onSearch:function(oEvent){
               var searchString=oEvent.getParameter("query") || oEvent.getParameter("newValue");
               // var searchST=this.getView().byId("idSearch").getValue();
               var filter1=new Filter("name",FilterOperator.Contains,searchString);
               var filter2=new Filter("id",FilterOperator.Contains,searchString);
               var aFilter=[filter1,filter2];
           
               var mainFilter=new Filter({
                   filters:aFilter,
                   and:false
               });
           
               var oList=this.getView().byId("idListItem");
                var bindingItems=oList.getBinding("items");
               
                bindingItems.filter(mainFilter);
           },
    });
});
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Filter"
], (Controller,FilterOperator,Filter) => {
    "use strict";

    return Controller.extend("app.darshanamining19.controller.View1", {
        onInit() {
        },
        onSearch: function () {
            // Retrieve SmartFilterBar instance
            var oSmartFilterBar = this.getView().byId("smartFilterBar");
            if (!oSmartFilterBar) {
                console.error("SmartFilterBar not found in the view.");
                return;
            }

            // Retrieve generated filters
            var aFilters = oSmartFilterBar.getFilters();
            console.log("Filters generated: ", aFilters);
 
            // Retrieve Table instance
            var oTable = this.getView().byId("table1");
            if (!oTable) {
                console.error("Table not found in the view.");
                return;
            }

            // Get binding of the rows and apply filters
            var oBinding = oTable.getBinding("rows");
            if (oBinding) {
                oBinding.filter(aFilters || []); // Apply filters or clear if empty
            } else {
                console.error("Rows binding not available for the table.");
            }
        },
        onPress:function(){
                      this.getOwnerComponent().getRouter().navTo("RouteView3")
        },
        onRowSelect: function(){
            var oTable = this.byId('table1')
 
            var selectdIndices = oTable.getSelectedIndices();
 
            var oselectedItem = oTable.getContextByIndex(selectdIndices[0])
 
            var selectedData = oselectedItem.getObject();

            var myObj = {
 
                LocationId : selectedData.LocationId,
                LocationDes : selectedData.LocationDes,
                MiningRsc : selectedData.MiningRsc,
                Cost : selectedData.Cost,
                MineralType : selectedData.MineralType,
                DrillCount : selectedData.DrillCount,
                Minerals:   selectedData.Minerals,
                MaterialId:  selectedData.MaterialId,
                MineralType: selectedData.MineralType,
                CostCenter: selectedData.CostCenter,
                DrillDate:   selectedData.DrillDate
 
            }
            


           
        var myObjStr = JSON.stringify(myObj);
        var oRouter = this.getOwnerComponent().getRouter()


        oRouter.navTo('Routingdetails',{
            'obj': myObjStr
        })
       

    }

    });
});
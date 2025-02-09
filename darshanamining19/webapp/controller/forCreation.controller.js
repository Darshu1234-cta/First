sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], (BaseController) => {
    "use strict";
  
    return BaseController.extend("app.darshanamining19.controller.forCreation", {
        onInit() {
        },
        onSubmitPress:function(){
          // First thing is to get the odata model object from yhe manifest
          var oModel=this.getOwnerComponent().getModel()

          // Prepare the entity
          let entity="/WASet"

          // Prepare the payload
          let oInput1=this.getView().byId("id1")
          let oInput2=this.getView().byId("id2")
          let oInput3=this.getView().byId("id3")
          // let oInput4=this.getView().byId("id4")
          let oInput5=this.getView().byId("id5")
          // let oInput6=this.getView().byId("id6")
          let oInput7=this.getView().byId("id7")
          let oInput8=this.getView().byId("id8")
          let oInput9=this.getView().byId("id9")
          let oInput10=this.getView().byId("id10")

          let s1=oInput1.getValue()
          let s2=oInput2.getValue()
          let s3=oInput3.getValue()
          // let s4=oInput4.getValue()
          let s5=oInput5.getValue()
          // let s6=oInput6.getValue()
          let s7=oInput7.getValue()
          let s8=oInput8.getValue()
          let s9=oInput9.getValue()
          let s10=oInput10.getValue()

          let payload={
            LocationId:s1,
            LocationDes:s2,
            MiningRsc:s3,
            // Cost:s4,
            Minerals:s5,
            // DrillDate:s6,
            DrillCount:s7,
            MineralType:s8,
            MaterialId:s9,
            CostCenter:s10
          }

        // Operation

        oModel.create(entity,payload,{
          success:function(odata,response){
              if(response.statusCode==="500"){
                sap.m.MessageBox.show(response.statusText)
              }
              
          },

          error:function(error){
              console.log(error);
              
          }
          
        })








        }
    });
  });
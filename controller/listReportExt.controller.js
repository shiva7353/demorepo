sap.ui.define([], function () {
    return {
        onBeforeRebindTableExtension: function (oEvent) {
            debugger;
            var oBindingParams = oEvent.getParameter("bindingParams");


            //   var oSmartTable = oEvent.getSource();
            //   var oSmartFilterBar = this.byId(oSmartTable.getSmartFilterId());

            //       var oCustomControl = oSmartFilterBar.getControlByKey("CustomDateFilter");
            //       var oDateValue = oCustomControl.getDateValue(); //give input like this --  Jul 16, 1996, 5:30:00 AM
            //       if (oDateValue) {
            //        oBindingParams.filters.push(new sap.ui.model.Filter("ShippedDate", "EQ", oDateValue));
            //      }

            var oSmartTable = oEvent.getSource();
            var oSmartFilterBar = this.byId(oSmartTable.getSmartFilterId());
            var oCustomControl = oSmartFilterBar.getControlByKey("customShipCity");
            var sShipCity = oCustomControl.getValue();
            if (sShipCity) {
                oBindingParams.filters.push(new sap.ui.model.Filter("ShipCity", "EQ", sShipCity));
            }
//comment
           
        },
        onInitSmartFilterBarExtension: function (oEvent) {
            debugger;
        },
        symanticContry: function (sValue) {
            if (sValue > 50) {
                return "Success";
            } else {
                return "Error";
            }
        }
    }
});

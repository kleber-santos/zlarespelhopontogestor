sap.ui.define([
	"whr/com/br/ZLAREspelhoPontoGestor/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("whr.com.br.ZLAREspelhoPontoGestor.controller.NotFound", {

			onInit: function () {
				this.getRouter().getTarget("notFound").attachDisplay(this._onNotFoundDisplayed, this);
			},

			_onNotFoundDisplayed : function () {
					this.getModel("appView").setProperty("/layout", "OneColumn");
			}
		});
	}
);
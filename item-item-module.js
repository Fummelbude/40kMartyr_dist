(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["item-item-module"],{

/***/ "./src/app/core/model/deserializableObject.ts":
/*!****************************************************!*\
  !*** ./src/app/core/model/deserializableObject.ts ***!
  \****************************************************/
/*! exports provided: DeserializableObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeserializableObject", function() { return DeserializableObject; });
var DeserializableObject = /** @class */ (function () {
    function DeserializableObject() {
    }
    DeserializableObject.prototype.deserialize = function (json, jsonKey) {
        this.jsonKey = jsonKey;
        for (var jsonAttrName in json) {
            var found = false;
            for (var objAttrName in this) {
                if (this.unifyAttrName(objAttrName) === this.unifyAttrName(jsonAttrName)) {
                    this[objAttrName] = json[jsonAttrName];
                    found = true;
                    break;
                }
            }
            if (!found)
                this[jsonAttrName] = json[jsonAttrName];
        }
        return this;
    };
    DeserializableObject.prototype.unifyAttrName = function (attrName) {
        return attrName.toLocaleLowerCase().replace('_', '').replace('-', '');
    };
    return DeserializableObject;
}());



/***/ }),

/***/ "./src/app/item/component/detail/itemDetail.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/item/component/detail/itemDetail.component.ts ***!
  \***************************************************************/
/*! exports provided: ItemDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailComponent", function() { return ItemDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _app_item_model_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/item/model/item */ "./src/app/item/model/item.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng-table.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng-api.js");
/* harmony import */ var _core_pipe_ui_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/pipe/ui.pipe */ "./src/app/core/pipe/ui.pipe.ts");







function ItemDetailComponent_p_table_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.item.jsonKey, " ");
} }
function ItemDetailComponent_p_table_0_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "ui");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var attr_r4 = ctx.$implicit;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](attr_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, ctx_r3.item[attr_r4]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function ItemDetailComponent_p_table_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-table", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ItemDetailComponent_p_table_0_ng_template_2_Template, 1, 1, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ItemDetailComponent_p_table_0_ng_template_3_Template, 6, 4, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.itemAttrs);
} }
var ItemDetailComponent = /** @class */ (function () {
    function ItemDetailComponent() {
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
        //        console.log(Object.keys(this.item));
    };
    ItemDetailComponent.prototype.ngOnChanges = function (changes) {
        if (changes.item.currentValue)
            this.itemAttrs = Object.getOwnPropertyNames(changes.item.currentValue);
        else
            this.itemAttrs = undefined;
    };
    ItemDetailComponent.ɵfac = function ItemDetailComponent_Factory(t) { return new (t || ItemDetailComponent)(); };
    ItemDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemDetailComponent, selectors: [["itemDetail"]], inputs: { item: "item" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[3, "value", 4, "ngIf"], [3, "value"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "body"], [2, "width", "80%"], [3, "innerHtml"]], template: function ItemDetailComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ItemDetailComponent_p_table_0_Template, 4, 1, "p-table", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], primeng_table__WEBPACK_IMPORTED_MODULE_3__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeTemplate"]], pipes: [_core_pipe_ui_pipe__WEBPACK_IMPORTED_MODULE_5__["UiPipe"]], encapsulation: 2 });
    return ItemDetailComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'itemDetail',
                templateUrl: './itemDetail.component.html'
            }]
    }], function () { return []; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/item/component/overview/itemOverview.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/item/component/overview/itemOverview.component.ts ***!
  \*******************************************************************/
/*! exports provided: ItemOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemOverviewComponent", function() { return ItemOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _service_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/item.service */ "./src/app/item/service/item.service.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng-table.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng-api.js");
/* harmony import */ var _detail_itemDetail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../detail/itemDetail.component */ "./src/app/item/component/detail/itemDetail.component.ts");
/* harmony import */ var _core_pipe_ui_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/pipe/ui.pipe */ "./src/app/core/pipe/ui.pipe.ts");









var _c0 = ["dt"];
function ItemOverviewComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ItemOverviewComponent_ng_template_4_Template_input_input_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.filterGlobal($event.target.value, "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ItemOverviewComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ItemOverviewComponent_ng_template_5_Template_input_input_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.filter($event.target.value, "nameId[1]", "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ItemOverviewComponent_ng_template_5_Template_input_input_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.filter($event.target.value, "type", "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ItemOverviewComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "ui");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "ui");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSelectableRow", item_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, item_r10.nameId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, item_r10.type));
} }
function ItemOverviewComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, ":(");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var _c1 = function () { return [100, 250, 500, 1000]; };
var _c2 = function () { return ["nameId[1]", "type"]; };
var ItemOverviewComponent = /** @class */ (function () {
    function ItemOverviewComponent(itemService) {
        this.itemService = itemService;
    }
    ItemOverviewComponent.prototype.ngOnInit = function () {
        this.init();
    };
    ItemOverviewComponent.prototype.init = function () {
        var _this = this;
        this.itemService.getAll().subscribe(function (items) {
            _this.allItems = items;
        });
    };
    ItemOverviewComponent.prototype.rowSelected = function (event, selected) {
    };
    ItemOverviewComponent.ɵfac = function ItemOverviewComponent_Factory(t) { return new (t || ItemOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"])); };
    ItemOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemOverviewComponent, selectors: [["itemOverview"]], viewQuery: function ItemOverviewComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        } }, decls: 10, vars: 11, consts: [[1, "p-grid"], [1, "p-col-12", "p-md-6", "p-lg-6", "scrollable"], ["selectionMode", "single", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "value", "rowsPerPageOptions", "paginator", "rows", "selection", "filterDelay", "showCurrentPageReport", "globalFilterFields", "selectionChange", "onRowSelect", "onRowUnselect"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [3, "item"], [1, "ui-table-globalfilter-container"], ["pInputText", "", "type", "text", "placeholder", "Global Search", 3, "input"], ["pInputText", "", "type", "text", "placeholder", "Search by jsonKey", 1, "ui-column-filter", 3, "input"], ["pInputText", "", "type", "text", "placeholder", "Search by type", 1, "ui-column-filter", 3, "input"], [1, "ui-selectable-row", 3, "pSelectableRow"], [2, "width", "100%"]], template: function ItemOverviewComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p-table", 2, 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ItemOverviewComponent_Template_p_table_selectionChange_2_listener($event) { return ctx.selectedItem = $event; })("onRowSelect", function ItemOverviewComponent_Template_p_table_onRowSelect_2_listener($event) { return ctx.rowSelected($event, true); })("onRowUnselect", function ItemOverviewComponent_Template_p_table_onRowUnselect_2_listener($event) { return ctx.rowSelected($event, false); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ItemOverviewComponent_ng_template_4_Template, 2, 0, "ng-template", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ItemOverviewComponent_ng_template_5_Template, 5, 0, "ng-template", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ItemOverviewComponent_ng_template_6_Template, 7, 7, "ng-template", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ItemOverviewComponent_ng_template_7_Template, 3, 0, "ng-template", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "itemDetail", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.allItems)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1))("paginator", true)("rows", 100)("selection", ctx.selectedItem)("filterDelay", 1)("showCurrentPageReport", true)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", ctx.selectedItem);
        } }, directives: [primeng_table__WEBPACK_IMPORTED_MODULE_2__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeTemplate"], _detail_itemDetail_component__WEBPACK_IMPORTED_MODULE_4__["ItemDetailComponent"], primeng_table__WEBPACK_IMPORTED_MODULE_2__["SelectableRow"]], pipes: [_core_pipe_ui_pipe__WEBPACK_IMPORTED_MODULE_5__["UiPipe"]], styles: ["[_nghost-%COMP%]     * {\r\n\tbox-shadow: none!important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbS9jb21wb25lbnQvb3ZlcnZpZXcvaXRlbU92ZXJ2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQywwQkFBMEI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9pdGVtL2NvbXBvbmVudC9vdmVydmlldy9pdGVtT3ZlcnZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAqIHtcclxuXHRib3gtc2hhZG93OiBub25lIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });
    return ItemOverviewComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'itemOverview',
                templateUrl: './itemOverview.component.html',
                styleUrls: ['./itemOverview.component.css']
            }]
    }], function () { return [{ type: _service_item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"] }]; }, { table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['dt']
        }] }); })();


/***/ }),

/***/ "./src/app/item/item-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/item/item-routing.module.ts ***!
  \*********************************************/
/*! exports provided: ItemRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemRoutingModule", function() { return ItemRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _component_overview_itemOverview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/overview/itemOverview.component */ "./src/app/item/component/overview/itemOverview.component.ts");





var itemRoutes = [
    { path: 'overview', component: _component_overview_itemOverview_component__WEBPACK_IMPORTED_MODULE_2__["ItemOverviewComponent"] },
];
var ItemRoutingModule = /** @class */ (function () {
    function ItemRoutingModule() {
    }
    ItemRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ItemRoutingModule });
    ItemRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ItemRoutingModule_Factory(t) { return new (t || ItemRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(itemRoutes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return ItemRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ItemRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(itemRoutes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/item/item.module.ts":
/*!*************************************!*\
  !*** ./src/app/item/item.module.ts ***!
  \*************************************/
/*! exports provided: ItemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemModule", function() { return ItemModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/fieldset */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng-fieldset.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng-table.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _app_core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _item_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./item-routing.module */ "./src/app/item/item-routing.module.ts");
/* harmony import */ var _component_overview_itemOverview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/overview/itemOverview.component */ "./src/app/item/component/overview/itemOverview.component.ts");
/* harmony import */ var _component_detail_itemDetail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/detail/itemDetail.component */ "./src/app/item/component/detail/itemDetail.component.ts");






//my





var ItemModule = /** @class */ (function () {
    function ItemModule() {
    }
    ItemModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ItemModule });
    ItemModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ItemModule_Factory(t) { return new (t || ItemModule)(); }, providers: [], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                primeng_fieldset__WEBPACK_IMPORTED_MODULE_2__["FieldsetModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_4__["TableModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _item_routing_module__WEBPACK_IMPORTED_MODULE_7__["ItemRoutingModule"],
                _app_core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
            ],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] });
    return ItemModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ItemModule, { declarations: [_component_overview_itemOverview_component__WEBPACK_IMPORTED_MODULE_8__["ItemOverviewComponent"],
        _component_detail_itemDetail_component__WEBPACK_IMPORTED_MODULE_9__["ItemDetailComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        primeng_fieldset__WEBPACK_IMPORTED_MODULE_2__["FieldsetModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        primeng_table__WEBPACK_IMPORTED_MODULE_4__["TableModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _item_routing_module__WEBPACK_IMPORTED_MODULE_7__["ItemRoutingModule"],
        _app_core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _component_overview_itemOverview_component__WEBPACK_IMPORTED_MODULE_8__["ItemOverviewComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    primeng_fieldset__WEBPACK_IMPORTED_MODULE_2__["FieldsetModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    primeng_table__WEBPACK_IMPORTED_MODULE_4__["TableModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _item_routing_module__WEBPACK_IMPORTED_MODULE_7__["ItemRoutingModule"],
                    _app_core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
                ],
                declarations: [
                    _component_overview_itemOverview_component__WEBPACK_IMPORTED_MODULE_8__["ItemOverviewComponent"],
                    _component_detail_itemDetail_component__WEBPACK_IMPORTED_MODULE_9__["ItemDetailComponent"],
                ],
                exports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _component_overview_itemOverview_component__WEBPACK_IMPORTED_MODULE_8__["ItemOverviewComponent"],
                ],
                providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/item/model/item.ts":
/*!************************************!*\
  !*** ./src/app/item/model/item.ts ***!
  \************************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony import */ var _app_core_model_deserializableObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/core/model/deserializableObject */ "./src/app/core/model/deserializableObject.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = undefined;
        _this.nameId = undefined;
        return _this;
        //    icon: string = undefined;
        //    rarity: string = undefined;
        //    value: number = undefined;
        //    ancientName: string = undefined; s
        //    weaponCategory: string = undefined;
        //    skills: string[] = undefined;
        //
        //    damageReduce: string = undefined;
        //    allResist: string = undefined;
        //    deflect: string = undefined;
        //
        //    fixEnchants: any[] = undefined;
        //    mainEnchant: string = undefined;
        //    primaryEnchants1: any[] = undefined;
        //    secondaryEnchants1: any[] = undefined;
        //    secondaryEnchants2: any[] = undefined;
        //    forcedSlots: any[] = undefined;
    }
    return Item;
}(_app_core_model_deserializableObject__WEBPACK_IMPORTED_MODULE_0__["DeserializableObject"]));



/***/ }),

/***/ "./src/app/item/service/item.service.ts":
/*!**********************************************!*\
  !*** ./src/app/item/service/item.service.ts ***!
  \**********************************************/
/*! exports provided: ItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _app_item_model_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/item/model/item */ "./src/app/item/model/item.ts");






var ItemService = /** @class */ (function () {
    function ItemService(http) {
        this.http = http;
    }
    ItemService.prototype.getJson = function () {
        return this.http.get("./assets/data/item.min.json");
    };
    ItemService.prototype.init = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getJson().subscribe(function (jData) {
                for (var key in jData) {
                    var item = new _app_item_model_item__WEBPACK_IMPORTED_MODULE_3__["Item"]().deserialize(jData[key], key);
                    ItemService.items.set(key, item);
                }
                resolve(true);
            });
        });
    };
    ItemService.prototype.getByNameId = function (nameId) {
        if (ItemService.items.size === 0) {
            this.init();
        }
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            observer.next(ItemService.items.get(nameId));
            observer.complete();
        });
    };
    ItemService.prototype.getAll = function (limit) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            if (ItemService.items.size === 0) {
                _this.init().then(function (jData) {
                    var items;
                    if (limit) {
                        items = Array.from(ItemService.items.values()).slice(0, limit);
                    }
                    else {
                        items = Array.from(ItemService.items.values());
                    }
                    observer.next(items);
                    observer.complete();
                });
            }
        });
    };
    ItemService.items = new Map();
    ItemService.ɵfac = function ItemService_Factory(t) { return new (t || ItemService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    ItemService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ItemService, factory: ItemService.ɵfac, providedIn: 'root' });
    return ItemService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=item-item-module.js.map
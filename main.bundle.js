webpackJsonp(["main"],{

/***/ "./demo/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./demo/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./demo/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"py-3 text-center\">\n      <h2>ngx-phone</h2>\n      <p class=\"lead\">Angular Form Control</p>\n  </div>\n\n  <div class=\"row mb-5\">\n\n    <app-template-form class=\"col-md-6\"></app-template-form>\n    <app-reactive-form class=\"col-md-6\"></app-reactive-form>\n\n  </div>\n</div>"

/***/ }),

/***/ "./demo/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./demo/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./demo/app/app.component.html"),
            styles: [__webpack_require__("./demo/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./demo/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src__ = __webpack_require__("./src/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./demo/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__template_form_template_form_component__ = __webpack_require__("./demo/app/template-form/template-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reactive_form_reactive_form_component__ = __webpack_require__("./demo/app/reactive-form/reactive-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__covalent_highlight__ = __webpack_require__("./node_modules/@covalent/highlight/esm5/covalent-highlight.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_i18n_iso_countries_langs_en_json__ = __webpack_require__("./node_modules/i18n-iso-countries/langs/en.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_i18n_iso_countries_langs_en_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_i18n_iso_countries_langs_en_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__template_form_template_form_component__["a" /* TemplateFormComponent */],
                __WEBPACK_IMPORTED_MODULE_5__reactive_form_reactive_form_component__["a" /* ReactiveFormComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__covalent_highlight__["a" /* CovalentHighlightModule */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__src__["a" /* NgxPhoneModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9_i18n_iso_countries_langs_en_json__)
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./demo/app/reactive-form/reactive-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    Reactive Forms\n  </div>\n  <div class=\"card-body\">\n\n    <pre>{{form.value | json}}</pre>\n\n    <hr>\n\n    <form [formGroup]=\"form\">\n\n      <div class=\"form-group row\">\n        <label for=\"name\" class=\"col-sm-2 col-form-label\">Name</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"name\">\n          <small *ngIf=\"form.get('name').invalid\" class=\"form-text text-danger\">Name must have at least 5 characters</small>\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label for=\"email\" class=\"col-sm-2 col-form-label\">Email</label>\n        <div class=\"col-sm-10\">\n          <input type=\"email\" class=\"form-control\" id=\"email\" formControlName=\"email\">\n          <small *ngIf=\"form.get('email').invalid\" class=\"form-text text-danger\">A valid email address is required</small>\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Phone</label>\n        <div class=\"col-sm-10\">\n          <ngx-phone-number-input formControlName=\"phone\"></ngx-phone-number-input>\n          <small *ngIf=\"form.get('phone').invalid\" class=\"form-text text-danger\">Invalid phone number</small>\n        </div>\n      </div>\n\n    </form>\n\n    <hr>\n\n    <td-highlight lang=\"html\">\n      <![CDATA[\n        <form [formGroup]=\"form\">\n          ...\n          <div>\n            <label>Phone</label>\n            <div>\n              <ngx-phone-number-input formControlName=\"phone\">\n              </ngx-phone-number-input>\n              <small *ngIf=\"form.get('phone').invalid\">\n                Invalid phone number\n              </small>\n            </div>\n          </div>\n        </form>\n        ]]>\n    </td-highlight>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./demo/app/reactive-form/reactive-form.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./demo/app/reactive-form/reactive-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReactiveFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReactiveFormComponent = /** @class */ (function () {
    function ReactiveFormComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    ReactiveFormComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            name: ['Noam Chomsky', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(5)],
            email: ['noam@chomsky', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email])],
            phone: ['+31684567890']
        });
    };
    ReactiveFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-reactive-form',
            template: __webpack_require__("./demo/app/reactive-form/reactive-form.component.html"),
            styles: [__webpack_require__("./demo/app/reactive-form/reactive-form.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], ReactiveFormComponent);
    return ReactiveFormComponent;
}());



/***/ }),

/***/ "./demo/app/template-form/template-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    Template-driven Forms\n  </div>\n  <div class=\"card-body\">\n\n    <pre>{{user | json}}</pre>\n\n    <hr>\n\n    <form #form=\"ngForm\">\n\n      <div class=\"form-group row\">\n        <label for=\"name\" class=\"col-sm-2 col-form-label\">Name</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" [(ngModel)]=\"user.name\" #name=\"ngModel\" minlength=\"5\">\n          <small *ngIf=\"name.invalid\" class=\"form-text text-danger\">Name must have at least 5 characters</small>\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label for=\"email\" class=\"col-sm-2 col-form-label\">Email</label>\n        <div class=\"col-sm-10\">\n          <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" [(ngModel)]=\"user.email\" #email=\"ngModel\" email required>\n          <small *ngIf=\"email.invalid\" class=\"form-text text-danger\">A valid email address is required</small>\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Phone</label>\n        <div class=\"col-sm-10\">\n          <ngx-phone-number-input #phone=\"ngModel\" [(ngModel)]=\"user.phone\" name=\"phone\"></ngx-phone-number-input>\n          <small *ngIf=\"phone.invalid\" class=\"form-text text-danger\">Invalid phone number</small>\n        </div>\n      </div>\n\n    </form>\n\n    <hr>\n\n    <td-highlight lang=\"html\">\n      <![CDATA[\n        <form #form=\"ngForm\">\n          ...\n          <div>\n            <label>Phone</label>\n            <div>\n              <ngx-phone-number-input #phone=\"ngModel\" \n                    [(ngModel)]=\"user.phone\" name=\"phone\">\n              </ngx-phone-number-input>\n              <small *ngIf=\"phone.invalid\">\n                Invalid phone number\n              </small>\n            </div>\n          </div>\n        </form>\n        ]]>\n    </td-highlight>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./demo/app/template-form/template-form.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./demo/app/template-form/template-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TemplateFormComponent = /** @class */ (function () {
    function TemplateFormComponent() {
        this.user = {
            name: 'Noam Chomsky',
            email: 'noam@chomsky.com',
            phone: '+31684567890'
        };
    }
    TemplateFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-template-form',
            template: __webpack_require__("./demo/app/template-form/template-form.component.html"),
            styles: [__webpack_require__("./demo/app/template-form/template-form.component.scss")]
        })
    ], TemplateFormComponent);
    return TemplateFormComponent;
}());



/***/ }),

/***/ "./demo/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./demo/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./demo/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./demo/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/components/phone-number-input/phone-number-input.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"input-group\">\n  <div class=\"input-group-prepend\" dropdown (isOpenChange)=\"isOpenChange($event)\">\n    <button dropdownToggle type=\"button\" class=\"btn btn-outline-secondary dropdown-toggle\" aria-haspopup=\"true\" aria-expanded=\"false\">\n      +{{ country?.dialCode }}\n    </button>\n    <div *dropdownMenu class=\"dropdown-menu\">\n      <button *ngFor=\"let country of countries | countrySearch: filter\" class=\"dropdown-item\" (click)=\"setCountry(country)\" type=\"button\">\n        <span>+{{country.dialCode}}</span> {{country.name}}\n      </button>\n    </div>\n  </div>\n  <input type=\"text\" [value]=\"number\" (input)=\"onNumberInput($event.target.value)\" (blur)=\"onNumberBlur()\" class=\"form-control form-control-xs\">\n</div>\n"

/***/ }),

/***/ "./src/components/phone-number-input/phone-number-input.component.scss":
/***/ (function(module, exports) {

module.exports = ".dropdown-menu {\n  max-height: 200px;\n  overflow-y: scroll; }\n\n.dropdown-item {\n  padding-left: 1rem;\n  padding-right: 2rem; }\n\n.dropdown-item span {\n    color: grey;\n    min-width: 3rem;\n    display: inline-block; }\n"

/***/ }),

/***/ "./src/components/phone-number-input/phone-number-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneNumberInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_libphonenumber_js__ = __webpack_require__("./node_modules/libphonenumber-js/index.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_country_service__ = __webpack_require__("./src/services/country.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_phone_validator__ = __webpack_require__("./src/validators/phone-validator.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PhoneNumberInputComponent = /** @class */ (function () {
    function PhoneNumberInputComponent(countryService) {
        this.countryService = countryService;
        this.onChange = function (_) { };
        this.onTouched = function (_) { };
    }
    PhoneNumberInputComponent_1 = PhoneNumberInputComponent;
    Object.defineProperty(PhoneNumberInputComponent.prototype, "phone", {
        get: function () {
            var number = this.number;
            var country = (this.country && this.country.code);
            return Object(__WEBPACK_IMPORTED_MODULE_2_libphonenumber_js__["a" /* format */])(number, country, 'E.164');
        },
        set: function (value) {
            var _a = Object(__WEBPACK_IMPORTED_MODULE_2_libphonenumber_js__["d" /* parse */])(value || ''), _b = _a.phone, phone = _b === void 0 ? value : _b, _c = _a.country, country = _c === void 0 ? this.defaultCountry : _c;
            this.number = phone;
            this.country = this.countries.find(function (c) { return c.code === country; });
        },
        enumerable: true,
        configurable: true
    });
    PhoneNumberInputComponent.prototype.ngOnInit = function () {
        this.number = '';
        this.countries = this.countryService.getCountries();
        this.country = this.defaultCountry = this.countries[0];
    };
    PhoneNumberInputComponent.prototype.handleKeyboardEvent = function (event) {
        if (this.filter !== undefined) {
            if (event.key.match(/^[a-z]$/i)) {
                this.filter = this.filter + event.key;
            }
        }
    };
    PhoneNumberInputComponent.prototype.writeValue = function (value) {
        this.phone = value;
    };
    PhoneNumberInputComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    PhoneNumberInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    PhoneNumberInputComponent.prototype.setCountry = function (country) {
        this.country = country;
        this.onChange(this.phone);
    };
    PhoneNumberInputComponent.prototype.onNumberInput = function (value) {
        this.number = value;
        this.onChange(this.phone);
    };
    PhoneNumberInputComponent.prototype.onNumberBlur = function () {
        this.onTouched(this.phone);
    };
    PhoneNumberInputComponent.prototype.isOpenChange = function (isOpen) {
        this.filter = isOpen ? '' : undefined;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* HostListener */])('document:keypress', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], PhoneNumberInputComponent.prototype, "handleKeyboardEvent", null);
    PhoneNumberInputComponent = PhoneNumberInputComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ngx-phone-number-input',
            template: __webpack_require__("./src/components/phone-number-input/phone-number-input.component.html"),
            styles: [__webpack_require__("./src/components/phone-number-input/phone-number-input.component.scss")],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NG_VALUE_ACCESSOR */],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* forwardRef */])(function () { return PhoneNumberInputComponent_1; }),
                    multi: true
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALIDATORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_4__validators_phone_validator__["a" /* PhoneValidator */],
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_country_service__["a" /* CountryService */]])
    ], PhoneNumberInputComponent);
    return PhoneNumberInputComponent;
    var PhoneNumberInputComponent_1;
}());



/***/ }),

/***/ "./src/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_phone_number_input_phone_number_input_component__ = __webpack_require__("./src/components/phone-number-input/phone-number-input.component.ts");
/* unused harmony reexport PhoneNumberInputComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__module__ = __webpack_require__("./src/module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__module__["a"]; });




/***/ }),

/***/ "./src/module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxPhoneModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_country_service__ = __webpack_require__("./src/services/country.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_country_search_pipe__ = __webpack_require__("./src/pipes/country-search.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_phone_number_input_phone_number_input_component__ = __webpack_require__("./src/components/phone-number-input/phone-number-input.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var NgxPhoneModule = /** @class */ (function () {
    function NgxPhoneModule() {
    }
    NgxPhoneModule_1 = NgxPhoneModule;
    NgxPhoneModule.forRoot = function (localizedCountryData) {
        return {
            ngModule: NgxPhoneModule_1,
            providers: [
                {
                    provide: 'LocalizedCountryData',
                    useValue: localizedCountryData
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_4__services_country_service__["a" /* CountryService */],
                    useClass: __WEBPACK_IMPORTED_MODULE_4__services_country_service__["a" /* CountryService */]
                }
            ]
        };
    };
    NgxPhoneModule = NgxPhoneModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* BsDropdownModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__components_phone_number_input_phone_number_input_component__["a" /* PhoneNumberInputComponent */], __WEBPACK_IMPORTED_MODULE_5__pipes_country_search_pipe__["a" /* CountrySearchPipe */]],
            exports: [__WEBPACK_IMPORTED_MODULE_6__components_phone_number_input_phone_number_input_component__["a" /* PhoneNumberInputComponent */]]
        })
    ], NgxPhoneModule);
    return NgxPhoneModule;
    var NgxPhoneModule_1;
}());



/***/ }),

/***/ "./src/pipes/country-search.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountrySearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CountrySearchPipe = /** @class */ (function () {
    function CountrySearchPipe() {
    }
    CountrySearchPipe.prototype.transform = function (value, filter) {
        var result = value;
        if (value && filter) {
            var filterNormalized_1 = filter.toUpperCase();
            var filtered = result.filter(function (country) { return country.name.toUpperCase().startsWith(filterNormalized_1); });
            if (filtered.length > 0) {
                result = filtered;
            }
        }
        return result;
    };
    CountrySearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Pipe */])({
            name: 'countrySearch'
        })
    ], CountrySearchPipe);
    return CountrySearchPipe;
}());



/***/ }),

/***/ "./src/services/country.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_libphonenumber_js__ = __webpack_require__("./node_modules/libphonenumber-js/index.es6.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var CountryService = /** @class */ (function () {
    function CountryService(localizedCountryData) {
        this.localizedCountryData = localizedCountryData;
    }
    CountryService.prototype.getCountries = function () {
        if (!this.cache) {
            this.cache = this.loadCountries();
        }
        return this.cache;
    };
    CountryService.prototype.loadCountries = function () {
        var results = [];
        var countries = this.localizedCountryData.countries;
        for (var _i = 0, _a = Object.keys(countries); _i < _a.length; _i++) {
            var country = _a[_i];
            var dialCode = this.getDialCode(country);
            if (dialCode) {
                results.push({
                    code: country,
                    name: countries[country],
                    dialCode: dialCode
                });
            }
        }
        results.sort(function (a, b) { return (a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1); });
        return results;
    };
    CountryService.prototype.getDialCode = function (countryCode) {
        try {
            var code = Object(__WEBPACK_IMPORTED_MODULE_1_libphonenumber_js__["b" /* getPhoneCode */])(countryCode);
            return code;
        }
        catch (_a) {
            return undefined;
        }
    };
    CountryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Inject */])('LocalizedCountryData')),
        __metadata("design:paramtypes", [Object])
    ], CountryService);
    return CountryService;
}());



/***/ }),

/***/ "./src/validators/phone-validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libphonenumber_js__ = __webpack_require__("./node_modules/libphonenumber-js/index.es6.js");

var PhoneValidator = /** @class */ (function () {
    function PhoneValidator() {
    }
    PhoneValidator.prototype.validate = function (control) {
        var value = control.value;
        if (value) {
            if (!Object(__WEBPACK_IMPORTED_MODULE_0_libphonenumber_js__["c" /* isValidNumber */])(value)) {
                return { 'invalid-phone-number': true };
            }
        }
        return null;
    };
    return PhoneValidator;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./demo/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
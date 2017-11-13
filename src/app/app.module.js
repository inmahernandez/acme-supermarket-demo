"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var hero_detail_component_1 = require("./hero-detail/hero-detail.component");
var heroes_component_1 = require("./heroes/heroes.component");
var hero_service_1 = require("./hero.service");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var app_routing_module_1 = require("./app-routing.module");
var message_service_1 = require("./message.service");
var messages_component_1 = require("./messages/messages.component");
//Angularfire2 is the official firebase library for angular
var angularfire2_1 = require("angularfire2");
var firestore_1 = require("angularfire2/firestore");
var environment_1 = require("../environments/environment");
/**export const firebaseConfig = {
  apiKey: "AIzaSyBvNo-0U2HKk-gIxTpHMjjipMmBQfn7iT4",
  authDomain: "testproject-b6c3a.firebaseapp.com",
  databaseURL: "https://testproject-b6c3a.firebaseio.com",
  projectId: "testproject-b6c3a",
  storageBucket: "testproject-b6c3a.appspot.com",
  messagingSenderId: "588065433893"
};*/
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_module_1.AppRoutingModule,
            angularfire2_1.AngularFireModule.initializeApp(environment_1.environment.firebase),
            firestore_1.AngularFirestoreModule,
        ],
        declarations: [app_component_1.AppComponent, hero_detail_component_1.HeroDetailComponent, heroes_component_1.HeroesComponent, dashboard_component_1.DashboardComponent, messages_component_1.MessagesComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [hero_service_1.HeroService, message_service_1.MessageService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
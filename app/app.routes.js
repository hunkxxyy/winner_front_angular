"use strict";
var router_1 = require('@angular/router');
var mainView_component_1 = require('./views/mainView.component');
var ingatlanokView_component_1 = require('./views/ingatlanok/ingatlanokView.component');
var dynamic_component_1 = require("./views/dynamic/dynamic.component");
var admin_component_1 = require("./views/admin/admin.component");
var ingatlanlista_component_1 = require("./views/admin/ingatlanok/ingatlanlista.component");
var eredmenyekLista_component_1 = require("./views/admin/eredmenyek/eredmenyekLista.component");
var ingatlanModify_1 = require("./views/admin/ingatlanok/ingatlanModify");
var usersLista_component_1 = require("./views/admin/users/usersLista.component");
var hirekLista_component_1 = require("./views/admin/hirek/hirekLista.component");
var hirekModify_1 = require("./views/admin/hirek/hirekModify");
var eredmenyekModify_1 = require("./views/admin/eredmenyek/eredmenyekModify");
var vasarlasok_component_1 = require("./views/admin/vasarlasok/vasarlasok.component");
var eredmeny_component_1 = require("./views/eredmeny/eredmeny.component");
var hireink_component_1 = require("./views/hireink/hireink.component");
var kapcsolat_component_1 = require("./views/kapcsolat/kapcsolat.component");
var dynamic_html_component_1 = require("./views/dynamic-html/dynamic-html.component");
var APP_ROUTES = [
    { path: '', component: mainView_component_1.MainComponent },
    { path: 'ingatlanok', component: ingatlanokView_component_1.IngatlanokViewComponent },
    { path: 'admin', component: admin_component_1.AdminViewComponent },
    { path: 'admin/ingatlanok', component: ingatlanlista_component_1.ingatlanListaComponent },
    { path: 'ingatlanok/modify/:id', component: ingatlanModify_1.IngatlanModifyComponent },
    { path: 'admin/ingatlanok/new', component: ingatlanModify_1.IngatlanModifyComponent },
    { path: 'admin/users', component: usersLista_component_1.usersListaComponent },
    {
        path: 'admin/hirek',
        component: hirekLista_component_1.HirekListaComponent
    },
    {
        path: 'admin/hirek/modify/:id',
        component: hirekModify_1.HirekModifyComponent
    },
    {
        path: 'admin/eredmenyek/new',
        component: eredmenyekModify_1.EredmenyekModifyComponent
    }, {
        path: 'admin/eredmenyek',
        component: eredmenyekLista_component_1.EredmenyekListaComponent
    },
    {
        path: 'admin/eredmenyek/modify/:id',
        component: eredmenyekModify_1.EredmenyekModifyComponent
    },
    {
        path: 'admin/hirek/new',
        component: hirekModify_1.HirekModifyComponent
    },
    {
        path: 'admin/vasarlasok',
        component: vasarlasok_component_1.VasarlasListaComponent
    },
    {
        path: 'eredmeny-hirdetes',
        component: eredmeny_component_1.EredmenyComponent
    },
    {
        path: 'hireink',
        component: hireink_component_1.HireinkComponent
    },
    {
        path: 'kapcsolat',
        component: kapcsolat_component_1.KapcsolatComponent
    }, {
        path: 'temp',
        component: dynamic_html_component_1.DynamicHtmlComponent
    },
    {
        path: ':id',
        component: dynamic_component_1.DynamicComponent
    }
];
exports.APP_ROUTES_PROVIDER = [
    router_1.provideRouter(APP_ROUTES)
];
//# sourceMappingURL=app.routes.js.map
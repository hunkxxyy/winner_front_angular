// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md
/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {};
/** User packages configuration. */
var packages = {};
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var barrels = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/forms',
    '@angular/http',
    '@angular/router',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    // Thirdparty barrels.
    'rxjs',
    // App specific barrels.
    'app',
    'app/shared',
    'app/wiews/teszt-compi',
    'app/views/partners',
    'app/views/items',
    'app/views/settings/settingsview',
    'app/views/settings/paymentMethod/payment-method',
    'app/components/modal/modal',
    'app/views/settings/partnerg-roup-setting',
    'app/views/settings/partner-group-setting',
    'app/views/settings/base-setting',
    'app/components/confirm',
    'app/components/modal/units-modal',
    'app/views/settings/unit',
    'app/views/settings/tax-code-setting',
    'app/views/settings/item-group',
    'app/views/dynamic-html',
    'app/views/kapcsolat',
    'app/components/hunk-slider',
    'app/components/szavazogomb/modal',
    'app/components/ckeditor',
    'app/components/hunk-img',
    'app/components/my-inner-html',
    'app/views/aszf-view-component',
    'app/components/hunk-toolbar-component',
    'app/views/adatvedelem-view',
    'app/components/editable-view',
    'app/views/forgot-password',
    'app/views/changeforgottenpassord',
];
var cliSystemConfigPackages = {
    'ng2-bs3-modal': {
        defaultExtension: 'js',
        main: 'ng2-bs3-modal.js'
    },
    'ng2-ckeditor': {
        format: 'cjs'
    }
};
barrels.forEach(function (barrelName) {
    cliSystemConfigPackages[barrelName] = { main: 'index' };
});
// Apply the CLI SystemJS configuration.
System.config({
    map: {
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs',
        'main': 'main.js',
        'ng2-bs3-modal': 'vendor/ng2-bs3-modal',
        'ng2-ckeditor': 'vendor/ng2-ckeditor/lib/CKEditor.js',
    },
    packages: cliSystemConfigPackages
});
// Apply the user's configuration.
System.config({ map: map, packages: packages });
//# sourceMappingURL=system-config.js.map
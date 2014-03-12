requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: '/vendor/libs',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        controllers : '/scripts/controllers',
        modules     : '/scripts/modules',
        jQuery      : 'jquery-1.11.0.min',
        angular     : 'angular.min'
    }
});

// Start the main app logic.
requirejs(['jQuery', 'angular'],
function   ($) {

});


var defaultRoute = '/',
    siteHost = location.protocol + '//' + location.host + '/',
    site = window.location.href.substr(siteHost.length);
    // site = site.substr(0,site.length-1);
    site ='controllers/' + site+'index';
console.log(siteHost);
console.log(site);
var js = [site];

requirejs(js);


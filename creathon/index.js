const app = angular.module(/* YOUR MODULE NAME */, ['angularJSNavbar', 'ui.router' /* YOUR OTHER IMPORTED MODULES*/]);
app.config($stateProvider => {
  /* Define your ui-router states here */
  const homeState = {
    name: 'home',
    url: '/',
    templateUrl: './README.html'
  }
 
  const testState = {
    name: 'test',
    url: '/test',
    template: '<h3>I am the test route!</h3>'
  }
 
  $stateProvider.state(homeState);
  $stateProvider.state(testState);
});
app.run((navbarRouteService) => {
 
  // Set your site title
  navbarRouteService.setTitle('angular-js-navbar', {
    title: 'Home',
    state: 'home',
    url: '/'
  });
 
  // Set your application routes, should be similar to defined ui-router states
  navbarRouteService.setRoutes([{
    title: 'Home',
    state: 'home',
    url: '/'
  },
  {
    title: 'Test',
    state: 'test',
    url: '/test'
  }]);
});
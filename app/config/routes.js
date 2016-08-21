var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Prompt = require("../components/Prompt");
var PromptContainer = require('../containers/PromptContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={PromptContainer}>
      <IndexRoute component={PromptContainer}/>
    </Route>
  </Router>
);

module.exports = routes;

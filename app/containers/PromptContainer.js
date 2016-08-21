var React = require('react');
var Prompt = require('../components/Prompt');
var axios = require('axios');

var PromptContainer = React.createClass({
  // do this so you don't have to pass router as props to your components when you need it and change url
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  // giving a react component a state (specify state properties in a specific component)
  getInitialState: function () {
    return {
      info: []
    }
  },
  onClick: function (event) {
    event.preventDefault();
    var self = this
    self.setState({
      info: []
    });
    axios.get("https://snag.herokuapp.com/results/index.json")
      .then(function(response) {
        self.setState({
          info: response
        });
      });
  },
  render: function () {
    return (
      <Prompt
        onClick={this.onClick}
        info={this.state.info} />
    )
  }
});

module.exports = PromptContainer;

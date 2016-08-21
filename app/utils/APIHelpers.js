var axios = require('axios');


function getInfo () {
  return axios.get("https://snag.herokuapp.com/results/index.json")
}

var helpers = {
  getMessages: function() {
    console.log('hello');
    axios.get("https://snag.herokuapp.com/results/index.json")
      .then(function (response) {
        console.log(response);
      });
      .catch(function (error) {
        console.log(error);
      });
  }
};

module.exports = helpers;

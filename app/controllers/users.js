var request = require('request');

function getAll (req, res) {
  var options = {
    uri: 'http://localhost:9000/user',
    method: 'GET'
  };

  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log('body', body) // Print the google web page.
    } else{
      console.log('error', error);
    }
  });
}

function getOne (req, res) {
  var params = req.params;
  var options = {
    uri: 'http://localhost:9000/user/'+params.userId,
    method: 'GET'
  };

  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log('body', body) // Print the google web page.
    } else{
      console.log('error', error);
    }
  });
}

function create (req, res) {
  // TODO: validate req.body
  var body = req.body;
  var options = {
    // TODO: setup environment variables
    uri: 'http://localhost:9000/user',
    method: 'POST',
    json: {
      "userName": body.userName,
      "firstName": body.firstName,
      "lastName": body.lastName
    }
  };

  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log('body', body) // Print the google web page.
    } else{
      console.log('error', error);
    }
  });
}

function update (req, res) {
  var body = req.body;
  var options = {
    uri: 'http://localhost:9000/user/'+body.userId,
    method: 'PUT',
    json: {
      "userName": body.userName,
      "firstName": body.firstName,
      "lastName": body.lastName
    }
  };

  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log('body', body) // Print the google web page.
    } else{
      console.log('error', error);
    }
  });
}

function remove (req, res) {
  var params = req.params;
  var options = {
    uri: 'http://localhost:9000/user/'+params.userId,
    method: 'DELETE'
  };

  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log('body', body) // Print the google web page.
    } else{
      console.log('error', error);
    }
  });
}

module.exports = {
  getAll: getAll,
  getOne: getOne,
  create: create,
  update: update,
  remove: remove
}

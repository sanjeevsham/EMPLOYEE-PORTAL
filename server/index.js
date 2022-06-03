const express = require('express');
const bodyparser = require('body-parser');
const app = express();
app.use(express.static('public'));
const port = 8000;
const cors = require('cors');
const dbconnection = require('./database');
const { request, response } = require('express');
app.use(bodyparser.json());
app.use(express.static('public'));
app.use(
  cors({
    origin: 'http://localhost:4200',
  })
);
//To post the user data to the database
app.post('/postquery', (request, response) => {
  var object = {
    username: request.body.username,
    password: request.body.password,
    email: request.body.email,
    // confirmpassword: request.body.confirmpassword,
  };
  dbconnection.insert(object, 'employee-portal').then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send('error');
    }
  });
  console.log('Data added');
});
app.post('/post_query', (request, response) => {
  var object = {
    id: request.body.id,
    username: request.body.username,
    email: request.body.email,
    dob: request.body.dob,
    mobileno: request.body.mobileno,
    bloodgroup: request.body.bloodgroup,
    userlogin: request.body.userlogin,
    userpassword: request.body.userpassword,
  };
  dbconnection.insert(object, 'employee-details').then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send('error');
    }
  });
  console.log('Data added');
});
app.post('/post_user', (request, response) => {
  var object = {
    empid: request.body.empid,
    firstname: request.body.firstname,
    email: request.body.email,
    fromdate: request.body.fromdate,
    todate: request.body.todate,
    days: request.body.days,
    mobileno: request.body.mobileno,
    reason: request.body.reason,
  };
  dbconnection.insert(object, 'user-data').then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send('error');
    }
  });
  console.log('Data added');
});
app.post('/post_data', (request, response) => {
  var object = {
    firstname: request.body.firstname,
    lastname: request.body.lastname,
    email: request.body.email,
    mobileno: request.body.mobileno,
    query: request.body.query,
  };
  dbconnection.insert(object, 'query-data').then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send('error');
    }
  });
  console.log('Data added');
});

//To get all the _id,_rev... form database
app.get('/get_query', (request, response) => {
  console.log('start');
  dbconnection.get('employee-details').then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send('error');
    }
  });
});
app.get('/get_data', (request, response) => {
  console.log('start');
  dbconnection.get('query-data').then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send('error');
    }
  });
});
app.get('/get_user', (request, response) => {
  console.log('start');
  dbconnection.get('user-data').then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send('error');
    }
  });
});
// To get the all user data value from database
app.get('/get__query/:id', (request, response) => {
  console.log('get id', request.params.id);
  var fetchdata = {
    selector: {
      id: request.params.id,
    },
  };
  dbconnection.employee.find(fetchdata).then((res) => {
    if (res) {
      console.log(res);
      response.json(res);
    } else {
      response.send('error');
    }
  });
  // .catch((err=>{
  //   console.log("No data found",err);
  // }))

  console.log('end');
});
app.get('/get_all_query/:id', (request, response) => {
  dbconnection.getAll(request.params.id, 'employee-details').then((res) => {
    if (res) {
      console.log(res);
      response.send(res);
    } else {
      response.send('error');
    }
  });

  console.log('end');
});
app.get('/get_all_data/:id', (request, response) => {
  dbconnection.getAll(request.params.id, 'query-data').then((res) => {
    if (res) {
      console.log(res);
      response.send(res);
    } else {
      response.send('error');
    }
  });

  console.log('end');
});
app.get('/get_all_user/:id', (request, response) => {
  dbconnection.getAll(request.params.id, 'user-data').then((res) => {
    if (res) {
      console.log(res);
      response.send(res);
    } else {
      response.send('error');
    }
  });

  console.log('end');
});

//To delete particular user from database

app.delete('/delete_query/:id/:id1', (request, response) => {
  dbconnection
    .deleted(request.params.id, request.params.id1, 'employee-details')
    .then((res) => {
      if (res) {
        console.log('deleted success');
        response.send(res);
      } else {
        console.log('can not deleted...');
        response.send('error');
      }
    });
});
// To update the particular user data using id
app.put('/update_query', (request, response) => {
  console.log('hey');
  var object = {
    _id: request.body._id,
    _rev: request.body._rev,
    id: request.body.id,
    username: request.body.username,
    email: request.body.email,
    dob: request.body.dob,
    mobileno: request.body.mobileno,
    bloodgroup: request.body.bloodgroup,
    userlogin: request.body.userlogin,
    userpassword: request.body.userpassword,
  };
  dbconnection.update(object, 'employee-details').then((res) => {
    if (res) {
      console.log('updated....');
      response.send(res);
    } else {
      console.log('can not updated....');
      response.send('error');
    }
  });
});

// app.put('/update_query', (request, response) => {
//   console.log('hey');
//   var object = {
//     _id: request.body._id,
//     _rev: request.body._rev,
//     firstname: request.body.firstname,
//     lastname: request.body.lastname,
//     email: request.body.email,
//     mobileno: request.body.mobileno,
//     query: request.body.query,
//   };
//   // console.log(object);
//   dbconnection.update(object, 'query-data').then((res) => {
//     if (res) {
//       console.log('updated....');
//       response.send(res);
//     } else {
//       console.log('can not updated....');
//       response.send('error');
//     }
//   });
// });
app.get('/getdata/:id', (req, res) => {
  console.log('retreived......', req.params.id);

  //all data retrieved

  // const doc = dbconnection.trainee.list().then(body => {
  //     body.rows.forEach((doc) => {
  //         console.log(doc);
  //     })
  // })

  var object = {
    selector: {
      userlogin: req.params.id,
    },
  };
  dbconnection.trainee.find(object).then((data) => {
    console.log('firstname', data);
    res.json(data);
  });
});
app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on http://localhost:${port}`);
});

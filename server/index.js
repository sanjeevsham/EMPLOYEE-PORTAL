const express = require('express');
const bodyparser = require('body-parser');
const app = express();
app.use(express.static('public'));
const port = 8000;
const cors = require('cors');
const dbconnection = require('./database');
app.use(bodyparser.json());
app.use(express.static('public'));
app.use(
  cors({
    origin: 'http://localhost:4200',
  })
);

//------------------------------------------admin--------------------------------//
app.get('/getadmin', (request, response) => {
  console.log(request);
  let data = {
    selector: {
      type: 'admin',
    },
  };
  dbconnection.get(data, 'employee-details').then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send('error');
    }
  });
});
app.get('/getadminId/:id', (request, response) => {
  dbconnection.getId(request.params.id, 'employee-details').then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send('error');
    }
  });
});
//-----------------------------------------dashboard------------------------------------------------------------//
app.post('/post_query', (request, response) => {
  let object = {
    id: request.body.id,
    username: request.body.username,
    email: request.body.email,
    dob: request.body.dob,
    mobileno: request.body.mobileno,
    bloodgroup: request.body.bloodgroup,
    doj: request.body.doj,
    month: request.body.month,
    leave: request.body.leave,
    salary: request.body.salary,
    userlogin: request.body.userlogin,
    userpassword: request.body.userpassword,
    type: 'dashboard',
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

app.get('/get_query', (request, response) => {
  console.log('start');
  let data = {
    selector: {
      type: 'dashboard',
    },
  };
  dbconnection.get(data, 'employee-details').then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send('error');
    }
  });
});
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
app.put('/update_query', (request, response) => {
  console.log('hey');
  let object = {
    _id: request.body._id,
    _rev: request.body._rev,
    id: request.body.id,
    username: request.body.username,
    email: request.body.email,
    dob: request.body.dob,
    mobileno: request.body.mobileno,
    bloodgroup: request.body.bloodgroup,
    doj: request.body.doj,
    month: request.body.month,
    leave: request.body.leave,
    salary: request.body.salary,
    userlogin: request.body.userlogin,
    userpassword: request.body.userpassword,
    type: 'dashboard',
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

//------------------------------------salary------------------------------------------//
app.post('/post_salary', (request, response) => {
  let object = {
    userid: request.body.userid,
    name: request.body.name,
    doj: request.body.doj,
    month: request.body.month,
    leave: request.body.leave,
    salary: request.body.salary,
    type: 'salary',
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
app.get('/get_salary', (request, response) => {
  console.log('start');
  let data = {
    selector: {
      type: 'salary',
    },
  };
  dbconnection.get(data, 'employee-details').then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send('error');
    }
  });
});
app.put('/update_salary', (request, response) => {
  console.log('hey');
  let object = {
    _id: request.body._id,
    _rev: request.body._rev,
    userid: request.body.userid,
    name: request.body.name,
    doj: request.body.doj,
    month: request.body.month,
    leave: request.body.leave,
    salary: request.body.salary,
    type: 'salary',
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

app.delete('/delete_salary/:id/:id1', (request, response) => {
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

/////a

// app.get('/uniqueidChanged', (request, response) => {
//   console.log(request.params.id);
//   let name = request.params.id;
//   let employeenameall = {
//     selector: {
//       name: request.params.username,
//       uniqueid: request.params._id,

//       type: 'dashboard',
//     },
//   };
//   dbconnection.find(employeenameall, 'employee-details').then((res) => {
//     if (res) {
//       response.send(res);
//     } else {
//       response.send('error');
//     }
//   });
// });

//---------------------------------------------Apply Leave--------------------------------------------------//
app.post('/post_user', (request, response) => {
  let object = {
    empid: request.body.empid,
    firstname: request.body.firstname,
    email: request.body.email,
    fromdate: request.body.fromdate,
    todate: request.body.todate,
    days: request.body.days,
    mobileno: request.body.mobileno,
    reason: request.body.reason,
    type: 'apply',
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
app.get('/get_user', (request, response) => {
  console.log('start');
  let data = {
    selector: {
      type: 'apply',
    },
  };
  dbconnection.get(data, 'employee-details').then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send('error');
    }
  });
});
//-------------------------------------------query--------------------------------------//
app.post('/post_data', (request, response) => {
  let object = {
    firstname: request.body.firstname,
    lastname: request.body.lastname,
    email: request.body.email,
    mobileno: request.body.mobileno,
    query: request.body.query,
    type: 'query',
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

app.get('/get_data', (request, response) => {
  console.log('start');
  let data = {
    selector: {
      type: 'query',
    },
  };
  dbconnection.get(data, 'employee-details').then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send('error');
    }
  });
});

app.get('/get__query/:id', (request, response) => {
  console.log('get id', request.params.id);
  let fetchdata = {
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

  console.log('end');
});
//--------------------------------------user login------------------------------------//
app.get('/getdata/:id', (req, res) => {
  console.log('retreived......', req.params.id);
  let object = {
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

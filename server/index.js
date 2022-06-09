const express = require('express');
const bodyparser = require('body-parser');
const app = express();
app.use(express.static('public'));
const port = 8000;
const cors = require('cors');
const dbconnection = require('./database');
const { request } = require('express');
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
  dbconnection.get(data, 'employee-details').then((admin_res) => {
    if (admin_res) {
      response.send(admin_res);
    } else {
      response.send('error');
    }
  });
});
app.get('/getadminId/:id', (request, response) => {
  dbconnection
    .getAll(request.params.id, 'employee-details')
    .then((adminid_res) => {
      if (adminid_res) {
        response.send(adminid_res);
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
  dbconnection.insert(object, 'employee-details').then((dash_res) => {
    if (dash_res) {
      response.send(dash_res);
    } else {
      response.send('error');
    }
  });
  console.log('Data added');
});

app.get('/get_query', (_request, response) => {
  console.log('start');
  let data = {
    selector: {
      type: 'dashboard',
    },
  };
  dbconnection.get(data, 'employee-details').then((dashget_res) => {
    if (dashget_res) {
      response.send(dashget_res);
    } else {
      response.send('error');
    }
  });
});

app.get('/get_leaveapproved/:id', (request, response) => {
  console.log('start', request.params.id);
  let data = {
    selector: {
      employee_id: request.params.id,
      approved: 'Leaveapproved',
      type: 'approved',
    },
  };
  console.log(data);
  dbconnection.get(data, 'employee-details').then((dashget_res) => {
    if (dashget_res) {
      console.log('leave', dashget_res);
      response.send(dashget_res);
    } else {
      response.send('error');
    }
  });
});
app.delete('/delete_query/:id/:id1', (request, response) => {
  dbconnection
    .deleted(request.params.id, request.params.id1, 'employee-details')
    .then((delete_res) => {
      if (delete_res) {
        console.log('deleted success');
        response.send(delete_res);
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
  dbconnection.update(object, 'employee-details').then((updata_res) => {
    if (updata_res) {
      console.log('updated....');
      response.send(updata_res);
    } else {
      console.log('can not updated....');
      response.send('error');
    }
  });
});

//------------------------------------salary------------------------------------------//
// app.post('/post_salary', (request, response) => {
//   let object = {
//     userid: request.body.userid,
//     name: request.body.name,
//     doj: request.body.doj,
//     month: request.body.month,
//     leave: request.body.leave,
//     salary: request.body.salary,
//     type: 'salary',
//   };
//   dbconnection.insert(object, 'employee-details').then((res) => {
//     if (res) {
//       response.send(res);
//     } else {
//       response.send('error');
//     }
//   });
//   console.log('Data added');
// });
// app.get('/get_salary', (_request, response) => {
//   console.log('start');
//   let data = {
//     selector: {
//       type: 'salary',
//     },
//   };
//   dbconnection.get(data, 'employee-details').then((res) => {
//     if (res) {
//       response.send(res);
//     } else {
//       response.send('error');
//     }
//   });
// });
// app.put('/update_salary', (request, response) => {
//   console.log('hey');
//   let object = {
//     _id: request.body._id,
//     _rev: request.body._rev,
//     userid: request.body.userid,
//     name: request.body.name,
//     doj: request.body.doj,
//     month: request.body.month,
//     leave: request.body.leave,
//     salary: request.body.salary,
//     type: 'salary',
//   };
//   dbconnection.update(object, 'employee-details').then((res) => {
//     if (res) {
//       console.log('updated....');
//       response.send(res);
//     } else {
//       console.log('can not updated....');
//       response.send('error');
//     }
//   });
// });

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
    leavetype: request.body.leavetype,
    reason: request.body.reason,
    employee_id: request.body.employee_id,
    type: 'apply',
  };
  dbconnection.insert(object, 'employee-details').then((leave_res) => {
    if (leave_res) {
      response.send(leave_res);
    } else {
      response.send('error');
    }
  });
  console.log('Data added');
});
app.get('/get_user', (_request, response) => {
  console.log('start');
  let data = {
    selector: {
      type: 'apply',
    },
  };
  dbconnection.get(data, 'employee-details').then((leaveger_res) => {
    if (leaveger_res) {
      response.send(leaveger_res);
    } else {
      response.send('error');
    }
  });
});

app.delete('/delete_leave/:id/:id1', (_request, response) => {
  dbconnection
    .deleted_id(_request.params.id, _request.params.id1, 'employee-details')
    .then((delete_res) => {
      if (delete_res) {
        console.log('deleted success');
        response.send(delete_res);
      } else {
        console.log('can not deleted...');
        response.send('error');
      }
    });
});
///----------------------------------approved---------------------------------------------//
app.post('/post_approved', (request, response) => {
  let object = {
    empid: request.body.empid,
    firstname: request.body.firstname,
    email: request.body.email,
    fromdate: request.body.fromdate,
    todate: request.body.todate,
    days: request.body.days,
    mobileno: request.body.mobileno,
    leavetype: request.body.leavetype,
    reason: request.body.reason,
    employee_id: request.body.employee_id,
    approved: request.body.approved,
    type: 'approved',
  };
  dbconnection.insert(object, 'employee-details').then((leave_res) => {
    if (leave_res) {
      response.send(leave_res);
    } else {
      response.send('error');
    }
  });
  console.log('Data added');
});
app.get('/get_approved', (_request, response) => {
  console.log('start');
  let data = {
    selector: {
      type: 'approved',
    },
  };
  dbconnection.get(data, 'employee-details').then((leaveger_res) => {
    if (leaveger_res) {
      response.send(leaveger_res);
    } else {
      response.send('error');
    }
  });
});

app.delete('/delete_approved/:id/:id1', (request, response) => {
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
  dbconnection.insert(object, 'employee-details').then((query_res) => {
    if (query_res) {
      response.send(query_res);
    } else {
      response.send('error');
    }
  });
  console.log('Data added');
});

app.get('/get_data', (_request, response) => {
  console.log('start');
  let data = {
    selector: {
      type: 'query',
    },
  };
  dbconnection.get(data, 'employee-details').then((queryget_res) => {
    if (queryget_res) {
      response.send(queryget_res);
    } else {
      response.send('error');
    }
  });
});

app.delete('/delete_data/:id/:id1', (request, response) => {
  dbconnection
    .deleted_id(request.params.id, request.params.id1, 'employee-details')
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

app.get('/get__query/:id', (request, response) => {
  console.log('get id', request.params.id);
  let fetchdata = {
    selector: {
      id: request.params.id,
    },
  };
  dbconnection.employee.find(fetchdata).then((queryid_res) => {
    if (queryid_res) {
      console.log(queryid_res);
      response.json(queryid_res);
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

const Cloudant = require('@cloudant/cloudant');
var url =
  'https://97233c10-e8bd-4684-98ca-20e5eaf8dd35-bluemix.cloudantnosqldb.appdomain.cloud ';
var username = 'apikey-v2-msz5pn0gamsoigpftay3cndoju75rdeejvo1cd3paw0';
var password = '1cd6b51776516316358ce28da3097318';

var cloudant = Cloudant({ url: url, username: username, password: password });
var employee = cloudant.use('employee-details');

data = {
  selector: {
    id: 'admin-11',
    username: 'Sanjeev',
    password: 'sanjeev11',
  },
};
insert = function (paramsvalue, dbname) {
  console.log(paramsvalue);
  return cloudant.use(dbname).insert(paramsvalue);
};

get = function (dbname) {
  return cloudant.use(dbname).list();
};
getAll = function (id, dbname) {
  return cloudant.use(dbname).get(id);
};
deleted = function (id, id1, dbname) {
  return cloudant.use(dbname).destroy(id, id1);
};
update = function (doc, dbname) {
  console.log(doc);
  return cloudant.use(dbname).insert(doc);
};

module.exports = {
  employee,
  insert,
  get,
  getAll,
  deleted,
  update,
};

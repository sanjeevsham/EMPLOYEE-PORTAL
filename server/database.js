const Cloudant = require('@cloudant/cloudant');
let nano = require('nano');
const url1 =
  'https://apikey-v2-msz5pn0gamsoigpftay3cndoju75rdeejvo1cd3paw0:1cd6b51776516316358ce28da3097318@97233c10-e8bd-4684-98ca-20e5eaf8dd35-bluemix.cloudant.com';
const nanodb = nano(process.env.COUCHDB_URL || url1); // connect with couchdb
const trainee = nanodb.use('employee-details');

let url =
  'https://97233c10-e8bd-4684-98ca-20e5eaf8dd35-bluemix.cloudantnosqldb.appdomain.cloud ';
let username = 'apikey-v2-msz5pn0gamsoigpftay3cndoju75rdeejvo1cd3paw0';
let password = '1cd6b51776516316358ce28da3097318';

let cloudant = Cloudant({ url: url, username: username, password: password });
let employee = cloudant.use('employee-details');

let data = {
  selector: {
    id: 'admin-11',
    username: 'Sanjeev',
    password: 'sanjeev11',
  },
};
let insert = function (paramsvalue, dbname) {
  console.log(paramsvalue);
  return cloudant.use(dbname).insert(paramsvalue);
};

let get = function (id, dbname) {
  return cloudant.use(dbname).find(id);
};
let getAll = function (id, dbname) {
  return cloudant.use(dbname).get(id);
};
let deleted = function (id, id1, dbname) {
  return cloudant.use(dbname).destroy(id, id1);
};
let update = function (doc, dbname) {
  console.log(doc);
  return cloudant.use(dbname).insert(doc);
};

module.exports = {
  employee,
  data,
  insert,
  get,
  getAll,
  deleted,
  update,
  nano,
  trainee,
};

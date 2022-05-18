const Cloudant = require('@cloudant/cloudant');
var url =
  'https://97233c10-e8bd-4684-98ca-20e5eaf8dd35-bluemix.cloudantnosqldb.appdomain.cloud ';
var username = 'apikey-v2-msz5pn0gamsoigpftay3cndoju75rdeejvo1cd3paw0';
var password = '1cd6b51776516316358ce28da3097318';

var cloudant = Cloudant({ url: url, username: username, password: password });

module.exports.insert = function (paramsvalue) {
  console.log(paramsvalue);
  return cloudant.use('employee-portal').insert(paramsvalue);
};

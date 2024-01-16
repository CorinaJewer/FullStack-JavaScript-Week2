var url = require('url');
var address = 'https://localhost:3010/default.htm?year=2017&month=february';
var q = url.parse(address, true);

console.log(q.host);
console.log (q.pathname);
console.log(q.search);

var qdata = q.query;
console.log(qdata.month);

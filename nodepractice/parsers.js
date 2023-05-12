//json parser
const jsonString = '{"name": "John", "age": 30}';
const obj = JSON.parse(jsonString);       //o/p:   { name: 'John', age: 30 }
console.log(obj)


//query string parser
const querystring = require('querystring');
const qs = 'name=John&age=30';
const obj1 = querystring.parse(qs);
console.log(obj1);   //[Object: null prototype] { name: 'John', age: '30' }

//XML parser
const xml2js = require('xml2js');
const xmlString = '<person><name>John</name><age>30</age></person>';
const parser = new xml2js.Parser();

parser.parseString(xmlString, (err, result) => {
  console.log(result);  
// output:[Object: null prototype] {
//     person: [Object: null prototype] { name: [ 'John' ], age: [ '30' ] }
//   }
});


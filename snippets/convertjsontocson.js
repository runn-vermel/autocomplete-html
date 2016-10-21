var fs = require('fs'),
    json = require('../completions.json'),
    startingString = "'.text.html, .text.html .meta.scope.between-tag-pair, .text.html .punctuation.tag.begin':\n",
    string  = '';

//append the first line
fs.appendFile('predix-ui.cson',startingString, function(err) {
  if (err) console.log(err);
});

//grab the keys`
var keys = Object.keys(json.tags);
//loop through the keys
keys.forEach(function(key) {
  //reset your string each time
  string = '';
  string =
`
  '${key}':
    'prefix': '${key}'
    'body': '<${key}>$0</${key}>'
`;
  //string += "\t'" + key +"':\n";
  fs.appendFile('predix-ui.cson',string, function(err) {
    if (err) console.log(err);
  });
});

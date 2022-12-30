var fs = require('fs')

(function() {
   
const ddir = 'js/plugins/bullethell/functions/src';
const dfile = readdirSync(`${ddir}/`).filter(files => files.endsWith('.js'));



for (const file of actions) {
	fs.readFile(`${ddir}/${file}`, 'utf8', function (err,data) {
	  if (err) {
		return console.log(err);
	  }
	  var result = data;
	  result = result.replace(/<LoadActions>/g, 'replacement');
	  result = result.replace(/<LoadImages>/g, 'replacement');
	  result = result.replace(/<LoadScenes>/g, 'replacement');

	  fs.writeFile(`${ddir}/../${file}`, result, 'utf8', function (err) {
		 if (err) return console.log(err);
	  });
	});
};
   
   
})();


const path = require('path');


const a1 = path.basename('C:\\temp\\myfile.html');
const a2 = path.dirname('C:\\temp\\myfile.html');
console.log("Printing a1 variable",a1);
console.log("Printing a2 variable",a2);
const a3 = path.extname(__filename)
console.log(__filename, a3)
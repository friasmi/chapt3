var path = require('path');

//Fixes up .. and.
//logs on Unix: /foo
//logs on Windows: /foo
console.log(path.normalize('/foo/bar/..'));

//also removes duplicate '//' slashes
//longs on Unix /foo/bar
//logs on Windows \foo\bar
console.log(path.normalize('/foo//bar/bas/..'));
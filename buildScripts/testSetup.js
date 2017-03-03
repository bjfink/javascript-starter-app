//This file doesn't get transpiled and must use ES5

//Register babel to transpile before the test run
require('babel-register');

// Diable webpack features that Moca doesn't understand
require.extensions['.css'] = function () { }

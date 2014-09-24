var symbols = require('katex/src/symbols');
var functions = require('katex/src/functions');

module.exports = {
  textSymbols: Object.keys(symbols.text),
  mathSymbols: Object.keys(symbols.math),
  functions: Object.keys(functions.funcs)
};

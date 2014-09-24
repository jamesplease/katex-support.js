# katex-support.js

Generates lists of the functions and symbols that [KaTeX](https://github.com/Khan/KaTeX) supports.

## Installation

Install via npm.

```js
npm install katex-support
```

Require it in your project.

```js

```

## Usage

This package exports an object with three keys: `textSymbols`, `mathSymbols`, and `functions`. Each key is an array
of the supported symbols of that type.

```js
var katexSupport = require('katex-support');

var supportedMathSymbols = katexSupport.mathSymbols;
var supportedTextSymbols = katexSupport.textSymbols;
var supportedFunctions = katexSupport.functions;
```

# pipe-program

[![Greenkeeper badge](https://badges.greenkeeper.io/JustinDFuller/pipe-program.svg)](https://greenkeeper.io/)

Easily create a pipe-able program. 

`npm install pipe-program --save`

`yarn add pipe-program`

## Why

In order to encourage smaller, focused programs, it should be easy to compose programs by using the unix pipe "|" operator. 
Your program should read from stdin and write to stdout unless it's actually meant to write to the file system or do some other IO.

Ideally your program would just be a function and something else takes care of all the reading and writing from the process.stdin and stdout.
The `pipe-program` package is that "something else".

## Simple example

```js
import pipeProgram from 'pipe-program'

function myFunction (stdin) {
  return stdin + ' This is stdout.'
}

export default pipeProgram(myFunction)

// echo -n "This is stdin." | node simple-example.js
// "This is stdin. This is stdout." will be printed.
```

## Async example

```js
import path from 'path'
import pipeProgram from 'pipe-program'
import { readFileAsync } from 'fs-extra-promise'

/**
 * This will read the file passed in through stdin
 */
function myAsyncFunction (stdin) {
  return readFileAsync(path.resolve(__dirname, stdin))
}

export default pipeProgram(myAsyncFunction)

// echo -n "package.json" | node async-example.js
// The contents of package.json (if it exists) will be printed.
```

## Stream example

`pipe-program` is designed to work with streams. If your function
returns one it will be piped to stdout.

```js
import path from 'path'
import { createReadStream } from 'fs'
import pipeProgram from 'pipe-program'

function myStreamFunction (stdin) {
  return createReadStream(path.resolve(__dirname, stdin), {
    encoding: 'utf8'
  })
}

export default pipeProgram(myStreamFunction)

// echo -n "package.json" | node stream-example.js
// The contents of package.json (if it exists) will be printed.
```

## Errors

All errors, both async and sync, will be written to `process.stdout`.
If you return a rejected promise it will attempt to pass the error to stdout.


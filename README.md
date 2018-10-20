# pipe-able

Easily create a pipe-able program. 

`npm install pipe-able --save`

`yard add pipe-able`

## Why

In order to encourage smaller, focused programs, it should be easy to compose programs by using the unix pipe "|" operator. 
Your program should read from stdin and write to stdout unless it's actually meant to write to the file system or do some other IO.

Ideally your program would just be a function and something else takes care of all the reading and writing from the process.stdin and stdout.
The `pipe-able` package is that "something else".

## Example

```js
import pipeAble from 'pipe-able'

function myFunction (stdin) {
  return stdin + ' this will be stdout'
}

export default pipeAble(myFunction)
```

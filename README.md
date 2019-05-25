# @lilonga/output-p5

> Renders input code as a P5.js sketch.

[![NPM](https://img.shields.io/npm/v/@lilonga/output-p5.svg)](https://www.npmjs.com/package/@lilonga/output-p5)

## Install

```bash
npm install --save @lilonga/output-p5
```

## Usage
Try out an editable version of the below example at Repl.it: [https://repl.it/@lilonga/output-p5](https://repl.it/@lilonga/output-p5)

```js
import React, { Component } from 'react'

import OutputP5 from '@lilonga/output-p5'
const inputExample = `
  function setup(){
    createCanvas(400,400)
  }
  function draw(){
    line(0,0,width,height)
  }
`
class Example extends Component {
  render() {
    return (
      <OutputP5
        width={400}
        height={400}
        input={inputExample}
      />
    )
  }
}
export default Example
```

## API
See [@lilonga/output-p5 docs](https://@lilonga/output-p5-docs.lilo.now.sh) for more examples and documentation

## License

MIT © [Luka Kakia](https://github.com/manguluka)

# @lilonga/output-khan-processing

> Renders input code using Khan Academy's custom Processing.js environment.

[![NPM](https://img.shields.io/npm/v/@lilonga/output-khan-processing.svg)](https://www.npmjs.com/package/@lilonga/output-khan-processing)

## Install

```bash
npm install --save @lilonga/output-khan-processing
```

## Usage
Try out an editable version of the below example at Repl.it: [https://repl.it/@lilonga/output-khan-processing](https://repl.it/@lilonga/output-khan-processing)

```js
import React, { Component } from 'react'

import OutputPjs from '@lilonga/output-khan-processing'

class Example extends Component {
  render() {
    return (
      <OutputPjs
        width={100}
        height={100}
        input="line(0,0,100,100)"
      />
    )
  }
}
export default Example
```

## API
See [@lilonga/output-khan-processing docs](https://@lilonga/output-khan-processing-docs.lilo.now.sh) for more examples and documentation

## License

MIT © [Luka Kakia](https://github.com/manguluka)

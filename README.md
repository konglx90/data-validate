### Data validate

### Validate rules

A brief data validation library.

#### Import

```js
// ES6
import validate from '@konglx/data-validate';
// ES5
const validate = require('@konglx/data-validate');
```

#### String rules

The type check is based on `Object.prototype.toString.call(o).slice(8, -1).toLocaleLowerCase()`

```js
//  Basic data types
validate('string', 'i am a string') // => true
validate('number', 1) // => true
validate('null', null) // => true
validate('undefined', undefined) // => true

// Object Array
validate('object', {}) // => true
validate('array', []) // => true

// instanceOf
function Dog() {}
const dog = new Dog();
validate(Dog, dog); // => true

// optional
validate('?:string', undefined) // => true
validate('?:string', 'ok') // => true

```

#### Compose validate rules

```js
// object
validate({ a: 'string', b: 'number'}, {
  a: 'i am a string',
  b: 1,
}) // => true

// array
validate(['string'], ['a', 'b']) // => true
validate(['string'], ['a', 1]) // => false

// if you want two type in a Array
validate(['string|number'], ['a', 1])

// deep
validate([{
    name: 'string',
    girlFrends: [
        {
            name: 'string',
            friends: [
                {
                    name: 'string',
                    classmates: [
                        {
                            name: 'string',
                            hobbies: []
                        }
                    ]
                }
            ]
        }
    ]
}], [{
  name: 'xiaoming',
  girlFrends: [{
    name: 'zhang',
    friends: [{
      name: 'mao',
      classmates: [
        {
          name: 'li',
          hobbies: [],
        }
      ]
    }]
  }],
}]) // => true

```

#### Error

```js
// If you want get the error path
validate({ ok: 'number' }, { ok: '9999' }, falseThrowError = true); // This will throw a Error with error path
```

[More examples](./test/base.test.js)

#### Other Tips

1. Empty Array

```js
// can pass validate
validate(
    {
        friends: [{
            name: 'string'
        }],
    },
    {
        names: [],
    }
) // => true

// can't pass validate
validate(
    {
        friends: [{
            name: 'string',
        }],
    },
    {
        names: [{

        }],
    }
) // => true
```

### publish

`npm publish --access=public`

### Dev

Test Cover [Istanbul](https://github.com/gotwarlost/istanbul#features)
```sh
npm run cover
```

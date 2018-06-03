

### Validate rules

#### Import

```js
// ES6
import { validateEngine } from '@konglx/data-validate';
// ES5
const { validateEngine } = require('@konglx/data-validate');
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


#### Other Tips

1. 数组可以为空, 对象一定会校验

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

测试覆盖率 [Istanbul](https://github.com/gotwarlost/istanbul#features)
```sh
npm run cover
```

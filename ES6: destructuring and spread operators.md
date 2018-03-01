### Destructuring

```
const toto = {
  tata: 'tutu',
  titi: 'tete'
};
```

Before ES6 (ES2015):
```
const tata = toto.tata; // tata === 'tutu'
const titi = toto.titi; // titi === 'tete'
```

Now with destructuring:
```
const { tata, titi } = toto;
// tata === 'tutu'
// titi === 'tete'
```

Note:
```
const coucou = toto.tata; // coucou === 'tutu'

const { coucou } = toto; // coucou === undefined because it works like "const coucou = toto.coucou;"
```


It work on arrays too!

```
const toto = [ 'tutu', 'titi', 'tata' ];

const [ first, second, third ] = toto;
// first === 'tutu'
// second === 'titi'
// third === 'tata'

// If you don't want the second one:
const [ first, , third ] = toto;
```


### Spread operators

```
const basket1 = [ 'apple', 'banana' ];
const basket2 = [ 'raspberry', 'cherry' ];
```

Before ES6 (ES2015), we used concat:
```
const basket = basket1.concat(basket2); // basket = [ 'apple', 'banana', 'raspberry', 'cherry' ]
```

Now with spread operators:
```
const basket = [ ...basket1, ...basket2 ]; // basket = [ 'apple', 'banana', 'raspberry', 'cherry' ]
```


And it works on objects too:
```
const basket1 = { apple: 2, banana: 1 };
const basket2 = { raspberry: 1, cherry: 5 };
```

Before ES6 (ES2015), we used Object.assign:
```
const basket = Object.assign({}, basket1, basket2); // basket = { apple: 2, banana: 1, raspberry: 1, cherry: 5 }
```

With spread operators:
```
const basket = { ...basket1, ...basket2 }; // basket = { apple: 2, banana: 1, raspberry: 1, cherry: 5 }
```


const bar = () => console.log('bar')
const baz = () => console.log('baz')

// LIFO -> Last Input, First Output
// FIFO -> First Input, First Output
const foo = () => {
  console.log('foo')
  bar()
  baz()
}

foo()
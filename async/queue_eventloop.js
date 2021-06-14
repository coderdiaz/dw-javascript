// const bar = () => console.log('bar')
const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  setTimeout(function () {
    console.log('bar')
  }, 0)
  baz()
}

foo()
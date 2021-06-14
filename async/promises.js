const bar = () => console.log('bar')
const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  setTimeout(bar, 0)

  // Promise
  new Promise((resolve, reject) => {
    resolve('should be right after baz, before bar')
  }).then((value) => {
    console.log(value)
  }).catch(err => console.log(err))

  baz()
}

foo()


[1, 0, 0].map((item, index) => {

})
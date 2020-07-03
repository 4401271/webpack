import {add, sub} from './module1'
import {mul, getName} from './module2'
import module3 from './module3'
//引入json 图片 css都类似对于默认暴露的引入
// import data from '../json/data.json'
// import '../less/demo.less'

console.log(add(1,2))
console.log(sub(1,2))
console.log(mul(1,2))
console.log(getName())
console.log(module3.name, module3.age)
module3.setName('Rose')
console.log(module3.name, module3.age)
// console.log(data, typeof data)

setTimeout(()=>{
  console.log("1")
},1000)

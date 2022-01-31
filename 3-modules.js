// CommonJS, every file is module (by default)
// modules - Encapsulated Code (only share minimum)

// location of our module file
// Pulls in the names john and peter
const names = require('./4-names')
// Pulls in program sayHi
const sayHi = require('./5-utils')
// Pulls in items and person
const data = require('./6-alt-flavor')
require('./7-mind-grenade')
/* Even though we did not explicity call 7-mind-grenade
   It still runs because whenever you import a module you run it.*/
   
// console.log(names)
sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)
sayHi(data.person.name)
sayHi(data.items[1])
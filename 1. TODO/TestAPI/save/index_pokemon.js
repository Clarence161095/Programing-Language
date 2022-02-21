const Pokemon = require('pokemon.js');

Pokemon.setLanguage('english');

// Pokemon.getPokemon('1').then(console.log);
// Pokemon.getAll('item').then(console.log)
// Pokemon.getNature('serious').then(console.log)
// console.log(new Date().getTime())

const deepCloneObjectToString = (_object) => {
  if (typeof _object === 'object') {
      return JSON.stringify(JSON.parse(JSON.stringify(_object)))
  }
  return null
}

const data = [{"teamIndex":1,"battleMatrix":"3x3","formation":["a288e4a9-d771-4c8f-bb30-b3b4da4b7f05","a288e4a9-d771-4c8f-bb30-b3b4da4b7f05","a288e4a9-d771-4c8f-bb30-b3b4da4b7f05","a288e4a9-d771-4c8f-bb30-b3b4da4b7f05","a288e4a9-d771-4c8f-bb30-b3b4da4b7f05","a288e4a9-d771-4c8f-bb30-b3b4da4b7f05","a288e4a9-d771-4c8f-bb30-b3b4da4b7f05","a288e4a9-d771-4c8f-bb30-b3b4da4b7f05",""]},{"teamIndex":2,"battleMatrix":"3x3","formation":["a288e4a9-d771-4c8f-bb30-b3b4da4b7f05","a288e4a9-d771-4c8f-bb30-b3b4da4b7f05","a288e4a9-d771-4c8f-bb30-b3b4da4b7f05","a288e4a9-d771-4c8f-bb30-b3b4da4b7f05","a288e4a9-d771-4c8f-bb30-b3b4da4b7f05","a288e4a9-d771-4c8f-bb30-b3b4da4b7f05","a288e4a9-d771-4c8f-bb30-b3b4da4b7f05","a288e4a9-d771-4c8f-bb30-b3b4da4b7f05",""]},{"teamIndex":3,"battleMatrix":"3x3","formation":["a288e4a9-d771-4c8f-bb30-b3b4da4b7f05","a288e4a9-d771-4c8f-bb30-b3b4da4b7f05","a288e4a9-d771-4c8f-bb30-b3b4da4b7f05","a288e4a9-d771-4c8f-bb30-b3b4da4b7f05","a288e4a9-d771-4c8f-bb30-b3b4da4b7f05","a288e4a9-d771-4c8f-bb30-b3b4da4b7f05","a288e4a9-d771-4c8f-bb30-b3b4da4b7f05","a288e4a9-d771-4c8f-bb30-b3b4da4b7f05","a288e4a9-d771-4c8f-bb30-b3b4da4b7f05"]}]

console.time('check')
console.log(`deepCloneObjectToString(data): `, deepCloneObjectToString(data).length)
console.timeEnd(`check`)
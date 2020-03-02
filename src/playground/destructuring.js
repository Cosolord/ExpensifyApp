//OBJECT DESTRUCTURING

/* const person = {
  name: 'Nat',
  age: 42,
  location: {
    city: 'RC',
    temp: 22
  }
};

const { name, lastname = 'sconosciuto', age, location } = person;
const { city, temp: temperature } = person.location;

console.log(`${name} ha ${age} anni`);
if (city && temperature) {
  console.log(`Oggi ci sono ${temperature} gradi a ${city}`);
}
 */
/* 
const book = {
  title: 'Ego is the enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName);
 */

//ARRAY DESTRUCTURING
const address = ['1299 S Juniper Street', 'Philly', 'Pensilvania', '19147'];
const [, city = 'New York', state] = address;
console.log(`Ti trovi a ${city} in ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$3.00'];
const [Coffee, , medium] = item;
console.log(`A medium ${Coffee} costs ${medium}`);

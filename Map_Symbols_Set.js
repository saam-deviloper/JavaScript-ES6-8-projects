//Map a object with  varoius key value
const userData = {
    name:'hesam',
    family:"mb",
    age:20
};

//use Set for filter duplicated items in array
const numbers = [1,1,2,2,3,3,4,5];

console.log(userData.name)
const Map1 = new Map();
Map1.set(12,[12345,'key value for getting this item is number(can be object itself),that what the Map do.']);
console.log(Map1.get(12),Map1.size);
console.log(Map1.has(12))

const setarray = new Set(numbers);
setarray.add(6);
setarray.delete(1);
console.log(setarray,'Set can filter arrays item ');

const age1 = Symbol('userAge');
const users={name:'hesam',family:'mb',[age1]:22}
console.log(Object.keys(users),'with symbols we close access to third Key')


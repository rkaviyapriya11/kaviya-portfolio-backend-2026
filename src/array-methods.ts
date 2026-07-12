// 1. map ()

const nums = [1, 2, 3, 4];

const doubled = nums.map(num => num * 2);

console.log(doubled);
// [2, 4, 6, 8]

console.log(nums);
// [1, 2, 3, 4] (original unchanged)



// 2. filter()

const filter = [10, 15, 20, 25, 30];

const greaterThan20 = filter.filter(num => num > 20);

console.log(greaterThan20);
// [25, 30]




// 3. reduce()

const reduce = [1, 2, 3, 4];

const sum = reduce.reduce((acc, curr) => acc + curr, 0);

console.log(sum);
// 10



// 4. find()

const find = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Bob" }
];

const user = find.find(u => u.id === 2);

console.log(user);
// { id: 2, name: 'Jane' }




// 5. findIndex()

const findIndex = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" }
];

const index = findIndex.findIndex(u => u.id === 2);

console.log(index);
// 1




// 6. some()

const some = [1, 3, 5, 8];

const hasEven = some.some(num => num % 2 === 0);

console.log(hasEven);
// true




// 7. every()


const every = [2, 4, 6, 8];

const allEven = every.every(num => num % 2 === 0);

console.log(allEven);
// true




// 8. slice()

const slice = [10, 20, 30, 40, 50];

const result = slice.slice(1, 4);

console.log(result);
// [20, 30, 40]

console.log(slice);
// [10, 20, 30, 40, 50]




// 9. splice()

const splice = [10, 20, 30, 40, 50];

const spliceRemoved = splice.splice(1, 2);

console.log(spliceRemoved);
// [20, 30]

console.log(splice);
// [10, 40, 50]




// 10. forEach()

const forEach = [1, 2, 3];

forEach.forEach(num => {
  console.log(num);
   console.log(num * 2)
});



// 11. push()

const push = ["apple", "banana"];

push.push("orange");

console.log(push);
// ['apple', 'banana', 'orange']



// 12. pop()

const pop = ["apple", "banana", "orange"];

const removed = pop.pop();

console.log(removed);
// orange

console.log(pop);
// ['apple', 'banana']



// 13. sort()

const sort = [30, 5, 100, 20];

sort.sort((a, b) => a - b);

console.log(sort);
// [5, 20, 30, 100]


// 14. flat()

const flat = [1, 2, [3, 4], [5, 6]];

const resultT = flat.flat();

console.log(resultT);
// [1, 2, 3, 4, 5, 6]


// 15. flatMap()

const flatMap = ["hello", "world"];

const chars = flatMap.flatMap(flatMap => flatMap.split(""));

console.log(chars);




export const ArrayMethods = async (): Promise<void> => {
try{

}catch(error:any){

}
}
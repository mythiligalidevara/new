//Lodash is a JavaScript utility library. Simply put, it is a list of 100+ JavaScript functions that other people already wrote that you can import into your current project and use to solve common coding headaches.
// There are 13 categories of functions, but the ones that you will most commonly use are probably the Array, Collection, Object and String categories. If you’re having trouble 
//writing a JavaScript function to handle some sort of data, there’s most likely already a one-liner function in Lodash for it.
//And if it wasn’t clear, Lodash means “low dash”, also known as an underscore.
//npm install lodash
//import _ from "lodash";

const _ = require("lodash")

//1)The _.uniq method is used to create an array of unique values in order, from all given arrays using SameValueZero for equality comparisons. 
//Syntax:_.uniq(array)
let x=[1,2,2,3,1]
let unique=_.uniq(x)
console.log(unique); //[1,2,3]
let y=["apple","banana","apple","orange"]
let unique1=_.uniq(y)
console.log(unique1); //[ 'apple', 'banana', 'orange' ]

//2) uniqBy-This method is like `uniq` except that it accepts `iteratee` which is
//  invoked for each element in `array` to generate the criterion by which
// uniqueness is computed. The order of result values is determined by the
// order they occur in the array. The iteratee is invoked with one argument:(value).
let x1=[1.1,2.1,2.5,1.6,3.1]
let y1=_.uniqBy(x1,Math.floor)
console.log(y1); //[ 1.1, 2.1, 3.1 ]
console.log(x1); //[ 1.1, 2.1, 2.5, 1.6, 3.1 ] gives new array

//3)Pull-Removes all given values from array using SameValueZero for equality comparisons.
let x2=["a","b","c","a","b"]
let y2=_.pull(x2,"a")
console.log(y2); //[ 'b', 'c', 'b' ]
console.log(x2); //[ 'b', 'c', 'b' ] mutates original array

//4)filter-Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The predicate is invoked with three arguments: (value, index|key, collection).
//returns new array
//The _.filter() is used to check which elements in the passed array satisfy the condition. It will form a new array of all those elements which satisfy the condition passed from the array. 
//It is mostly used when need to find certain elements from a large array.
//syntax:_.filter(collection, [predicate=_.identity])
let x3=[{"user":"mythili","age":"2","active":true},
{"user":"sreeram","age":"3","active":false}]
console.log(_.filter(x3, function(o) { return !o.active; })); //[ { user: 'sreeram', age: '3', active: false } ]
console.log(_.filter(x3, { 'age': 3, 'active': true }));  //[]
console.log(_.filter(x3, ['active', false]));  //[ { user: 'sreeram', age: '3', active: false } ]
console.log(_.filter(x3, 'active'));  //[ { user: 'mythili', age: '2', active: true } ]

var oddNo = _.filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 
    function(num){ 
        return num % 2 != 0;
    });
console.log(oddNo); //[ 1, 3, 5, 7, 9 ]

var words = ['javascript', 'java', 'unix', 'hypertext', 'underscore', 'CSS'];
const result = words.filter(word => word.length == 9);
console.log(result);    //[ 'hypertext' ]

//5)find-The _.find() function looks at each element of the list and returns the first occurrence of the element that satisfy the condition. 
//If any element of list is not satisfy the condition then it returns the undefined value.
//_.find(list, predicate, [context])
// Parameters: This function accept three parameters as mentioned above and described below:
// list: This parameter is used to hold the list of items.
// predicate: This parameter is used to hold the truth condition.
// context: The text content which need to be display. It is an optional parameter.
var oddNo = _.find([5, 6, 7, 8, 9, 10],
    function (num) {
        return num % 2 != 0;
    });
console.log(oddNo);  //5

//6)findIndex-The Loadsh.findIndex() method is used to find the index of the first occurrence of the element.
// It is different from indexOf because it takes the predicate function that iterates through each element of the array.
//Syntax:findIndex(array, [predicate=_.identity], fromIndex)
// Parameter: This method accepts three parameters as mentioned above and described below:
// array: It is the array in which the value is to be searched.
// predicate: It is the function that iterate through each element.
// fromIndex: It is the index after which the element is to be searched. If from index is not given by default it will be 0.
//Return Value: It return the index of the element if found else -1 is returned.
let x5 = [4, 2, 3, 1, 4, 2]
let index = _.findIndex(x5, (e) => {
    return e == 1;
}, 0);
console.log("original Array: ", x5) // [ 4, 2, 3, 1, 4, 2 ]
console.log("index: ", index)  //3


//7)Difference:The _.difference() function is used to remove a single element or the array of elements from the original array. 
//This function works pretty much same as the core function of JavaScript i.e filter.
// Syntax :_.difference(array, [values]);
// Parameters: This function accept two parameters as mentioned above and described below:
// array: It is the array from which different elements are to be removed.
// values: It is the array of values that are to be removed from the original array.
// Note: We can use single value or the array of values. But if only single Integer is given then it will not effect the original array.
let array = ["a", 2, 3];
// Values to be removed from the original array
let values = [2, 3]
let newArray = _.difference(array, values);
console.log("Before: ", array);  // [ 'a', 2, 3 ]
console.log("After: ", newArray);  // [ 'a' ]

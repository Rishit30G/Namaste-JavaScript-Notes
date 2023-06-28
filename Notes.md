# Namaste JavaScript 
## What is Javascript ?

JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Many websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries.


## "Javascript is a synchronous single-threaded language and everything in it happens inside an execution context"

- This means that it can only move on the next line once the single line operation is complete
- The execution context consists of Memory(Varibale Enviornment) and Code(Thread of Execution) as two components, the memory component consists of variable and functions as key-value pairs and the code component consists of the instructions that are executed.

```javascript
// Code Sample

var n = 2;
function square(num) {
  var ans = num * num;
  return ans;
}

var square2 = square(n);
console.log(square2);
```
Output: 
```javascript
4
```

### Memory Allocation Phase 
- In the first step, javascript will skim through the code and will allocate memory to all the variables and functions.
- It stores a special value of `undefined` for all the variables and incase of functions it will store the whole function code.

    ![](https://i.postimg.cc/nhbQ3n4b/Screenshot-2022-04-25-150650.jpg)
    
### Code Exectution Phase
- In the second step, javascript will again rundown the code line by line
- It will set `n=2` and since there is nothing to exectue from line 2 to 5 it will move on to var `sqaure2` where it will encounter a function invocation. 
- When it encouters a function invocation, a brand new execution context is created inside the code section 
- So again the memory will be allocated to the varibales `num` and `ans` and they will store the value `undefined`

    ![](https://i.postimg.cc/CxsHDRW6/Screenshot-2022-04-25-161023.jpg)

- Now comes the part of code execution, in which we will be executing each line inside the function 
- In `square(n)` the value of n is 2 (argument) is passed to `num` as a parameter 

    ![](https://i.postimg.cc/4xPVyr9D/Screenshot-2022-04-25-161115.jpg)

    ![](https://i.postimg.cc/D03PL1yH/Screenshot-2022-04-25-161434.jpg)

- Now in the code section, the operation num * num is performed and the result is stored in `ans` 
   
    ![](https://i.postimg.cc/nLkJ6GNY/Screenshot-2022-04-25-161559.jpg)

- In the end, we have a `return` keyword which means that we are done with the execution of the function and have to return the control back to the execution context where the function was invoked.


- The `return ans` which is present in the code section finds the value of 4 inside the memory section and returns it to the execution context where the function was invoked and hence the value of `square2` changes from `undefined` to `4`.

    ![](https://i.postimg.cc/VN5xVPB1/Screenshot-2022-04-25-161753.jpg)

    ![](https://i.postimg.cc/6q1RzR9B/Screenshot-2022-04-25-161903.jpg)

- Once the whole code is completed, then all the execution contexts are destroyed and the memory is freed up

### Call Stack 
JavaScript uses the call stack to keep track of several function calls. It works in data structures like a true stack, allowing data to be pushed and popped and adhering to the Last In First Out (LIFO) principle. We use the call stack to remember which function is currently active.
### Names for stack
- Execution Stack:
- Program Stack
- Control Stack
- Runtime Stack
- Machine Stack

## [Part-1](https://www.youtube.com/watch?v=ZvbzSrg0afE&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=2) and [Part-2 Complete](https://www.youtube.com/watch?v=iLWTnMzWtj4&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=5)
---
<br> 

## Hoisting is JavaScript
Hoisting as a core concept relies on the way how Execution Context is created. In the first phase i.e. the Memory Allocation Phase all the variables and functions are allocated memory, even before any code is executed. All the variables are assigned undefined at this point in time in the local memory. 

### Case -1 
```javascript
getName();
console.log(x);

var x = 7;
function getName()
{
    console.log("JavaScript");
}
```
The Output would be: 
```javascript
JavaScript 
undefined
```

This is because javascript first skims through the code and looks for the variables and functions and then assigns the value to the variables which is undefined. 

If we remove `var x = 7` from the code, then the console.log(x) will give ``Uncaught error: x is not defined``.

### Case-2
```javascript
var x = 7;
console.log(getName);
function getName()
{
    console.log("JavaScript");
}
```
The Output would be:
```javascript
function getName()
{
    console.log("JavaScript");
}
```

### Case-3
```javascript
console.log(getName);
var x = 7;
var getName  = () =>
{
    console.log("JavaScript");
}
```
Output would be:
```javascript
undefined
```
Here, the output will be undefined because javascript will take this `var` as a typical variable and not count it as a function. 

## [Part-3 Complete](https://www.youtube.com/watch?v=Fnlnw8uY6jo&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=4)

---
<br>

## How Function work in JS ?
### Code Sample 1 
````javascript

var x = 1;
a();
b(); 
console.log(x);
function a(){
    var x = 10;
    console.log(x);
}

function b(){
    var x = 1000;
    console.log(x);
}
````
Output would be: 
````javascript
10 
1000 
1 
````

- Global Execution context is created and memory is allocated to `var x`, `function a and b`.
- `Var x` will store the value `undefined` and `function a and b` will point to the `function body`.
- When the code will start running, first thing that will take place is that x's undefined will be replaced with the value 1
- After this the `function a` will be invoked and its own execution context will be created in the call stack ,which will store the value of seperate `x=10`
- Similar thing will happen with `function b`
- As soon as these functions are executed, their memory and space is deleted from the call stack. 
- In the end the control goes to global execution context which console logs the value of `x = 1` in the end.

## [Part-4 Complete](https://www.youtube.com/watch?v=gSDncyuGw0s&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=5)
---
<br>

## Global Object 
- Whenever you create an execution context, `this` is created along with it even for the functional execution of the context and even for this global execution context.
- At Global level the `this` points to global object that is the window incase of the browser  
- Anything that is not inside any function is  called as global object.
````javascript
var x = 1;           ---> Global Varibale  
function a () = {
   var b = 3;
}
console.log(window.a);
console.log(this.a);
console.log(b); 
````
- When we will go to console in browser and type `window` we will get `x: 1` and `a(): f a()` as a part of the `window`
- `b` wont be there as a part of window, Thus the output will be `undefined`

## [Part-5 Complete](https://www.youtube.com/watch?v=QCRpVw2KXf8&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=6)
---
<br>

## Undefined and Not-Defined 
 
- `Undefined` in javascript is some `undefined` value given to a variable or function before the execution of the program. It is not considered empty as it consumes memory sapce as well 
- `Not-Defiend` in javascript is somehing which is not allocated sapce and not declared in the program
- JavaScript is `losely typed language`, which means that anything can be allocated to anything i.e. `var` can be allocated as `string`, `int`, `boolean`. 

````javascript 
var a;
console.log(a);
var a = 10;
console.log(a);
a = "Hello World" 
console.log(a);
````
Output: 
```javascript
undefined 
10 
Hello World
````

```
foo = 1;
console.log(foo);
var foo;

var x; 
console.log(x);
x = 1;
```
Output: 
```
1
undefined
```


## [Part-6 Complete](https://www.youtube.com/watch?v=B7iF6G3EyIk&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=7)
---
<br>

## The Scope Chain and Lexical Enviornment

````javascript
function a(){
    var b = 10;
    c();
    function c(){
        console.log(b);
    }
}
a();
````
Output: 
```javascript
10
````

- In Javascript the `lexical enviornment` is created when a local memory of every execution context of javascript is nested in one another and accesed by the lowest lexicographic enviornment 
- `Scope Chaining` is the method by which the lexical enviornment is created and accessed by the execution context.
- In the above example: The javascript first creates the `lexical enviornment` for `a` and then for `c` and then for `b`
- Then the `lexical enviornment` is accessed by the `c` function and the value of `b` is printed.
- For reference do watch the video below. ( Important )


## [Part-7 Complete](https://www.youtube.com/watch?v=uH-tVP8MUs8&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=9)
---
<br>

## `let` and `const` in Javascript
````javascript
console.log(x);
console.log(a);
console.log(b);
let a = 10;
var b = 100;
````

Output: 
```javascript
Uncaught ReferecneError: x is not defined
Uncaught ReferenceError: Cannot access 'a' before initialization
undefined
````

- Hoisting is done for `let` and `const` variables as well, but they are stored in a different meomry space which the users cannot access. (Script)
- Any line written above `let` variable for accessing it is defiend as `Temporal Dead Zone` for that variable. 
- `let` and `const` variables give an output of `undefined` on accessing them through the keywords `this` and `window` in global execution
- `Let and Const are block Scoped and Var is function scoped`
```javascript
let a = 10;
let a = 100;
var a = 212;
console.log("abcd");
```
Output: 
```javascript
Uncaught SyntaxError: Identifier 'a' has already been declared 
```
 - This means that you cannot redeclare the same variable in the same scope for `let` and `const`
 - Incase of `var` it is possible 

 ````javascript
 // Correct Way  
 const b = 10;

 // Incorrect Way - 1
 const b; 
 b = 100;

 // Incorrect Way - 2
 const b = 8; 
 b = 88;

````
Output:
```javascript
Uncaught SyntaxError: Missing initializer in const declaration
Uncaught TypeError: Assignment to constant variable.
```
- This is because `const` is a constant variable and it is not possible to change the value of it.
- That's the reason why all the initializations are kept on the top to minimize the temporal dead zone.

- Other Examples 
```javascript
//Works fine
{
  var y = 10;
}
function inner() {
  console.log(y);
}
inner();

// Works fine
let x = 10;
function inner() {
  console.log(x);
}
inner();


// Gives Error as let is block scoped
{
  let z = 10;
}
function inner() {
  console.log(z);
}
inner();
```

   
## [Part-8 Complete](https://www.youtube.com/watch?v=BNC6slYCj50&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=9)
---
<br>

## Block Scope and Shadowing in Javascript 
- We group multiple statements in a block so that we can use it where javascript expects one statement
````javascript
{
    //Compound Statement
    var a = 10;
    let b = 20;
    const c = 30;
}
console.log(a);
console.log(b);
console.log(c);
````
Output:
```javascript
ReferenceError: c is not defined
````
- This is because the `var` is hoisted in the global block level, `let` and `const` variables are not hoisted to the top of the block instead they are hoisted in Block level. 

````javascript
var a = 100; 
console.log(a);
{
    //Compound Statement
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(c);
}
console.log(a);
````
Output:
```javascript
100 
30
10
```
- Here comes the concept of shadowing, as in the above example we can see that when `var a` is declared on the first line and it gives `100` as the output for the first time, but later when we declare it in the block level scope and then try to log the value of `a` it gives `10` as the output.
This happens because of the concept of shadowing. 
- Shadowing does not take place in the case of `let` and `const` variables.
````javascript 
const c = 100;
function x () {
    const c = 10;
    console.log(c);
}
x();
console.log(c);
````
Output:
````javascript
10
100
````
- Shadowing works the same in case of functions as well 

````javascript
let a = 10;

// Illegal Shadowing 
{
    var a = 20;
}
// Legal Shadowing 
{
    let a = 20;
}
````
- `Illegal shadowing` is when you try to declare a variable with the same name as an existing variable in the same scope.

````javascript
const a = 20;
{
    const a = 19;
    {
        const a = 12;
    }
    console.log(a);
}
````
Output:
```javascript
19
```
- `Lexical Scope` is also followed incase of `Block level functions` i.e each and every block has its own lexical enviornment. It follows `lexical scope chain` pattern as well.

<br>

## [Part-9 Complete](https://www.youtube.com/watch?v=lW_erSjyMeM&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=10)
---
<br>

## Closures  
- Closure is a function bundled along with its lexical scope 

````javascript
function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  return y;
}
var z = x();
console.log(z);
z();
````
Output:
```javascript
f y(){
    console.log(a);
}

7 
```
- In the first case when `console.log(z)` is executed, it will return the `function y()` itself  as it is the return value of the `x()` function.
- In the second case, 7 is prinited as the function remembers it's lexical scope and remembers the value of `a` which is 7.
- `return y` statement means that a closure is rerturned and it is put inside z. 

````javascript
function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  a = 100;
  return y;
}
var z = x();
z();
````
Output:
```javascript
100
```
- Here the value of `a` is changed to 100 and the function remembers it's lexical scope and remembers the value of `a` which is 100.

```javascript
function z() {
  let b = 912;
  function x() {
    var a = 7;
    function y() {
      console.log(a,b);
    }
    y();
  }
  x();
}
z();
```
Output:
```javascript
7 912
```
- Another example how closures helps us to avoid the use of global variable by remembering the value of the variable in the lexical scope.

 ## [Part-10 Complete](https://www.youtube.com/watch?v=qikxEIxsXco&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=12)
---
<br>

## First Class Functions ft. Anonymous Functions
- Difference between `Function Statement and Function Expression`
- The difference lies in the `hoisting` of the function
- The `function a` will be hoisted and will give `undefined` as the output
- But `function b` will give Error as it it will be treated like any other varibale and will be given `undefined` intially but on final execution it will see that b is a varibale and not a function, thus it will give Error 
````javascript
//Function Statement 
a();
function a(){
  console.log("a is called");
}

//Function Expression 
b();
var b = function (){
  console.log("b is called");
}
````
- `Function Statement and Function Declearation` are the same in javascript.
````javascript
//Anonymus Function 
function () {

}
````
Output:
````javascript
Uncaught SyntaxError: Function statements requires a function name
````
- The Use of Anonymus function is used in places like function expression where there is no name given to the function  
````javascript
//Named Function Expression 
var b = function xy(){
  console.log("Hello World");
}
b();
xy();

//Named Function Expression - 2
var b = function xy(){
  console.log(xy);
}
b();
````
Output: 
```javascript
Hello World
Reference error: xy is not defined
function xy(){
  console.log(xy);
}
``` 
- The use of named function expression is used in places where we want to call the function later on.
- This gives error because xy is not present in the outer scope but it is created a s local variable 
- We can access this function in its own scope by using the name of the function.

````javascript

//Difference Between Parameters and Arguments 

function a(x,y){  // -- Paramenters
  console.log(x,y);
}
a(1,3); //-- Arguments 
````
Ouptut
````javascript
1 3
````

````javascript 
//First Class Function - 1 
var b = function(param1){
  console.log(param1);
}
b(function xyz(){
});

//First Class Function - 2
var b = function(param1){
  console.log(param1);
}
function xyz(){

}
b(xyz);


//First Class Function - 3
var b = function(param1){
   return function(){

   };
};
console.log(b());
````
Output:
````javascript
[Function: xyz] 
[Function: xyz]
[Function: anonymous]
````
- First Class Functions are the ability of the functions to be used as values and passed into as arguments in another function and can be returned as a function 
- It is also called `First Class Citizens`

 ## [Part-11 Complete](https://www.youtube.com/watch?v=SHINoHxvTso&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=15)
---
<br>

## `setTimeout` and Closure - Interview Questions 
```javascript
function x(){
   var i = 1;
   setTimeout(function(){
      console.log(i);
   },3000);
   console.log("Hello World");
}
x();
```
Output: 
```javascript
Hello World
//Waits for 3 seconds and then prints 1
1
```
- Here the `setTimeout` function is called with a function as an argument.
- The function is called after 3 seconds and prints the value of `i` which is 1.
- `setTimeout` takes this call back function and attaches a timer, when the timer expires it calls the function 

````javascript
//Code Example -1 
function x() {
  for (var i = 1; i < 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("Hello World");
}
x();

//Code Example - 2
function x() {
   for (let i = 1; i < 5; i++) {
     setTimeout(function () {
       console.log(i);
     }, i * 1000);
   }
   console.log("Hello World");
 }
 x(); 

 //Code Example - 3
 function x() {
   for (var i = 1; i < 5; i++) {
      function close(x){
         setTimeout(function () {
            console.log(x);
          }, x * 1000);
        }
      close(i);
      }
 }
 x();
````
Output: 
````javascript
//Ouptut of Code Example - 1
Hello World
5
5
5
5
//Ouptut of Code Example - 2
Hello World
1
2
3
4
//Ouptut of Code Example - 3
Hello World 
1 
2
3
4
````
- `In Code Example -1`  the value of 'i' is remembered as reference and not as the value 
- When the loop runs the first time, makes a copy of this function, attaches a timer and also remebers the reference of 'i' 
- Javascript does not wait for anything, it will run the loop again and again, it will not wait for the timer to expire.
- And when the timer expires it is too late, because the loop was constantly running, the value of `i` became 5 and when the call back function runs, the `var i` becomes 5
- `In Code Example -2`, we have used `let` keyword instead of `var` keyword, which has a block level scope and each and every time this `setTimeout` is called, the function forms a closure with a new variable itself, this means the value of `i` is new in every iteration. 
- `In Code Example -3` we have made a closure named `close()` , because here everytime we create `x` in the above part everytime the loop is executed 
 ## [Part-12 Complete](https://www.youtube.com/watch?v=eBTBG4nda2A&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=13)
---
<br>
 
 ## Callback Functions in JS ft. Event Listeners
 - Callback Functions are functions that are passed as arguments to other functions.
 ```javascript
 setTimeout(function () {
  console.log("timer");
}, 2000);

function x(y) {
  console.log("Hello");
  y();
}

x(function y() {
  console.log("World");
});

```
Output: 
```javascript
Hello
World 
timer
```
- Any function that block the Call Stack is termed as  `blocking the main thread` 
- To sum up, if javascript did not have this first class citizen concept, it would not be able to use callback functions. (like `setTimeout` function is used) or else everything would be kept on getting blocked if any operation took a longer time to complete.
- If it wasnt for the first class citizen concept, we would be unable to complete this asyncronus operations 


### Event Listeners in JavaScript
- Event Listeners are functions that are attached to an event.
- In the below example we have a button on the page and when the button is clicked an event listener is already attached to the button, which calls the `function xyz()` (Callback function)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
</head>
<body>
    <h1>Event Listeners in JavaScript</h1>
    <button id="clickMe">Click Me</button>
    <script src="index.js"></script>
</body>
</html>
```

```javascript
//Example - 1
document.getElementById("clickMe").addEventListener("click", function xyz() {
  alert("Button clicked");
});
```
- In simple terms, this snippet of code means that it will pick up the "clickMe" element and it will add an event listener (which is "click"), and when the event is triggered it will call the `function xyz()` (Callback function) thus pulling it into the call stack.

```javascript
//Example - 2: Couting Number of Clicks -- Wrong Approach 
 let count = 0;
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log(count++);
  });
```
```javascript
//Example - 3: Couting Number of Clicks -- Right Approach 
function x() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log(count++);
  });
}
x();
```
- In the above code snippet we have used the conept of closures, so that the count variable cannot be accessed outside the function.
- `let` is used instead of `var` so that it block scoped i.e value cannot be modified beyond the function 

- Event Listeners are heavy, it takes memory, so whenever you attach an event listener it forms a closure and even when the call stack is empty, still the program will not free up that memory because you never know when someone can click on that button and might need this closure to function  
- So once we remove this event listener, so all the varibales that were held by this closure are garbage collected 

 ## [Part-13 Complete](https://www.youtube.com/watch?v=btj35dh3_U8&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=16)
---
<br>
 
 ## Asynchronus JavaScript and Event Loop from scratch

 FAQs
 1. When does the event loop actually start? - Event loop, as the name suggests, is a single-thread, loop that is `almost infinite`. It's always running and doing its job. 
2.  Are only asynchronous web API callbacks are registered in the web API environment? - YES, the synchronous callback functions like what we pass inside map, filter, and reduce aren't registered in the Web API environment. It's just those async callback functions that go through all this.
3. Does the web API environment stores only the callback function and pushes the same callback to queue/microtask queue? - Yes, the callback functions are stored, and a reference is scheduled in the queues. Moreover, in the case of event listeners(for example click handlers), the original callbacks stay in the web API environment forever, that's why it's advised to explicitly remove the listeners when not in use so that the garbage collector does its job.
4. How does it matter if we delay for setTimeout would be 0ms. Then callback will move to queue without any wait? 
No, there are trust issues with setTimeout(). The callback function needs to wait until the Call Stack is empty. So the 0 ms callback might have to wait for 100ms also if the stack is busy.  It's a very beautiful concept, and I've covered this in detail in the next episode of Namaste JavaScript. 

 ### The Video linked below is an amazing explanation for it! Save it and watch it again!
 ## [Part-14 Complete](https://www.youtube.com/watch?v=8zKuNo4ay8E&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=17)
---
<br>


## Trust Issues with `setTimeout()`

- A `setTimeout()` with a delay of 5000ms does not always exactly wait for 5000ms.
- The code snippet given below demonstrates the problem 

```javascript
// Example - 1

console.log("Start");

//The callback function is delayed for 5000ms
setTimeout(function cb(){
  console.log("Callback Cb");
}, 5000);

console.log("End");

// This code snippet is for simulating ~1 million lines of code which can take a time of around 10ms to execute. (Blocking the main thread). 
// We have a startDate which gets the currentTime in milliseconds and then in the while loop we are adding 10,000ms to it and making endDate equal to the currentTime in milliseconds.
let startDate = new Date().getTime();
let endDate = startDate;
while(endDate < startDate + 10000) {
   endDate = new Date().getTime();
}
console.log("While Expires");

```
Output: 
```
Start 
End 
While Expires 
Callback Cb 
```
 
### Explanation 
- First of all `Start` will be printed on the console.
- Next we have a setTimeout(), the function inside it will be registered in the web API environment and the timer will start from 5000ms.
- Now `End` will be printed in the console 
- Next, the while loop which is a part of the global execution context will start for next 10,000ms, it will block the main thread 
- But after 5000ms the callback function will be finished executing but it will stay inside the Callback Queue and will only execute after the Event Loop finds that after 10,000 ms the Call Stack is empty (Since GEC is still present because of Time code) and then only it will shift the callback function to the main call stack.
- Thus, `While Expires` will be printed in the console first and then `Callback Cb` will be printed 
- This is also known as the Concurrency Model in JavaScript 


```javascript
// Example-2: setTiemout() with a delay of 0ms

console.log("Start");

setTimeout(function cb(){
  console.log("Callback Cb");
}, 0);

console.log("End");
```
Output: 
```
Start 
End
Callback Cb 
```
- A misconception about this code is that output would be `Start`,`Callback Cb`,`End` because the callback function is executed for 0ms. 
- But that is certainly not the case, even when the timer is for 0ms, this callback function has to go through a queue and wait for the Call Stack to be empty i.e when GEC is also not present. 
- Thus, the correct output would be `Start`,`End`,`Callback Cb`
- The usecase of setting setTimeout() to 0ms will be if you want to defer a piece of code i.e execute that piece of code when the whole program is executed. 
Example: Implementing infinite scrolling in a web application.

## [Part-15 Complete](https://www.youtube.com/watch?v=nqsPmuicJJc&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=19)
---
<br>

## Map, Filter and Reduce
- `Map function` is being used here to convert the array into a new array with modified values. 
```javascript 
//Example of Map
const arr = [4,5,6,23,4];
const newArr = arr.map(function(item){
    return item*2;
});
console.log(newArr);

//--- Just Another Way to write it 

// function double(item)
// {
//   return item*2;
// }
// const output = arr.map(double);
// console.log(output);

//---- Short Hand-Fat Arrow Syntax
// const opt = arr.map((x) => x*2);
```
Output:
```javascript
[ 8, 10, 12, 46, 8 ]
```
 - `Filter function` is used to filter the array based on the condition.
 ```javascript
 const arr = [4,5,6,23,4];
//Filter out Values odd 
const output = arr.filter((item) => item % 2 !== 0);
console.log(output);
```
Output:
```javascript
[ 5, 23 ]
```
- `Reduce Function`- It is used in places where we have to find a particular value, Used for Sum or Max 
 ```javascript
 const arr = [4,5,6,23,4]; 

//Traditional Way
function findSum(arr){
  let sum =0;
  for(let i=0;i<arr.length;i++){
    sum = sum + arr[i];
  }
  return sum;
}
console.log(findSum(arr));

//acc- Accumilator and curr- Current
//0 is the is the initial value of accumilator
const output = arr.reduce(function(acc,curr){
   return acc + curr;
},0);
console.log(output);

//Find Maximum Number in the Array
const max = arr.reduce(function(acc,curr){
  if(curr>acc){
    acc = curr;
  }
  return acc;
},-Infinity);
console.log(max);
```
Output:
```javascript
42 
42 
23
```

- `Task`: To get the First And Last Name of the User
```javascript 
const users = [
  {firstName: 'John', lastName: 'Doe', age: 20},
  {firstName: 'Mark', lastName: 'Holland', age: 24},
  {firstName: 'Jeff', lastName: 'Musk', age: 21},
  {firstName: 'Tobby', lastName: 'Wayne', age: 20},
]

const getUsers = users.map(function(x){
  console.log(x.firstName+" "+x.lastName);
});

//---- Short-Hand Fat Arrow Syntax
// const getUsers = users.map(x => console.log(x.firstName+" "+x.lastName));
```
Output:
```javascript
John Doe
Mark Holland
Jeff Musk
Tobby Wayne
```

- `Task-2`: Get the output as `{ '20': 2, '21': 1, '24': 1 }`
```javascript
const users = [
  {firstName: 'John', lastName: 'Doe', age: 20},
  {firstName: 'Mark', lastName: 'Holland', age: 24},
  {firstName: 'Jeff', lastName: 'Musk', age: 21},
  {firstName: 'Tobby', lastName: 'Wayne', age: 20},
]

const output = users.reduce(function(acc,curr){
   if(acc[curr.age]){
      acc[curr.age]++;
   }
   else{
     acc[curr.age]=1;
   }
   return acc;
},{});

console.log(output);
```
Output:
```javascript
{ '20': 2, '21': 1, '24': 1 }
```

- `Task-3` - Find the First and Last name of people with age greater than 21
```javascript
//Using Chain of Map and Filter
const users = [
  {firstName: 'John', lastName: 'Doe', age: 20},
  {firstName: 'Mark', lastName: 'Holland', age: 24},
  {firstName: 'Jeff', lastName: 'Musk', age: 21},
  {firstName: 'Tobby', lastName: 'Wayne', age: 20},
]

const output = users.filter((x)=> x.age > 20).map(function(y){
  return y.firstName + ' ' + y.lastName;
});
console.log(output);
```
Output:
```javascript
[ 'Mark Holland', 'Jeff Musk' ]
```

- `Task 4`: Achieve the above task using Reduce
```javascript
const users = [
  {firstName: 'John', lastName: 'Doe', age: 20},
  {firstName: 'Mark', lastName: 'Holland', age: 24},
  {firstName: 'Jeff', lastName: 'Musk', age: 21},
  {firstName: 'Tobby', lastName: 'Wayne', age: 20},
]

const output = users.reduce((acc, curr)=>{
     if(curr.age>21) {
        acc.push(curr.firstName + ' ' + curr.lastName);
      }
      return acc;
}, []);
console.log(output);

```
Output:
```javascript
[ 'Mark Holland', 'Jeff Musk' ]
```

 ## [Part-16 Complete](https://www.youtube.com/watch?v=zdp0zrpKzIE&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=21)
---
<br>

## Higher Order Functions
- A function which takes another function as an argument or returns a function as a result is called `Higher Order Function`.
````javascript
function x(){
  console.log("Hello World");
}
function y(x){
   y();
}
````
### Functional Programming advantages: 
- DRY principles are followed 
- Each function is independent with its own task 
- Functions are reusable
````javascript
//--- Code written without following DRY (Don't Repeat Yourself) Principles 

// Radius of circles 
const radius = [1,2,3,4];

// Area Function 
const calculateArea = function(radius){
  const output = [];
  for(let i=0;i<radius.length;i++)
  {
    output.push(Math.PI*radius[i]*radius[i]);
  }
  return output;
}
console.log(calculateArea(radius));

// Circumference Function 
const calculateCircumference = function(radius){
  const output = [];
  for(let i=0;i<radius.length;i++)
  {
    output.push(2*Math.PI*radius[i]);
  }
  return output;
}
console.log(calculateCircumference(radius));

// Diameter Function 
const calculateDiameter = function(radius){
  const output = [];
  for(let i=0;i<radius.length;i++)
  {
    output.push(2*radius[i]);
  }
  return output;
};
console.log(calculateDiameter(radius));
````
Output: 
```javascript
[
  3.141592653589793,
  12.566370614359172,
  28.274333882308138,
  50.26548245743669
]
[
  6.283185307179586,
  12.566370614359172,
  18.84955592153876,
  25.132741228718345
]
[ 2, 4, 6, 8 ]
```

```javascript
//---- Modular or Reusable Code using Higher Order Functions
const radius = [1,2,3,4];


const calculate = function(radius, logic){
  const output = [];
  for(let i = 0; i < radius.length; i++){
    output.push(logic(radius[i]));
  }
  return output;
};


const area = function(radius){
  return Math.PI*radius*radius;
};

const diameter = function(radius){
  return radius*2;
};

const circumference = function(radius){
  return 2*Math.PI*radius;
};

console.log(calculate(radius,area));
console.log(calculate(radius,diameter));
console.log(calculate(radius,circumference));
```
Output:
```javascript
[ 3.141592653589793, 12.566370614359172, 28.274333882308138, 50.26548245743669 ]
[ 2, 4, 6, 8 ]
[ 6.283185307179586, 12.566370614359172, 18.84955592153876, 25.132741228718345 ]
```
 ## [Part-17 Complete](https://www.youtube.com/watch?v=HkWxvB1RJq0&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=20)
---
<br>

# Core JavaScript Fundamentals 

## Call, Apply and Bind Methods in Javascript 
- Brute way is to call the function directly, but we will use call method -- function borrowing, call method is used to call the function with the context of the object
- Apply method is used to call the function with the context of the array
- Bind method is used to call the function with the context of the object and also to store the context of the object in a variable
- The bind() method creates a new function, when invoked, has the this sets to a provided value.
The bind() method allows an object to borrow a method from another object without making a copy of that method

```javascript
let printFullName = function(hometown , state) {
  console.log(this.firstname + " " + this.lastname + " " + "is from " + hometown + " " + "and lives in " + state);
}

let name = {
  firstname: "John", 
  lastname: "Doe",
};

let name2 = {
  firstname: "Jane",
  lastname: "Night",
};

// Call Method 
printFullName.call(name, "Manhattan", "New York");
printFullName.call(name2, "Brooklyn", "New York");

// Apply Method 
printFullName.apply(name2, ["Brooklyn", "New York"]);

// Bind Method 
let printFullName2 = printFullName.bind(name, "Manhattan", "New York");
console.log(printFullName2);
printFullName2();

```
Output 
```javascript
John Doe is from Manhattan and lives in New York
Jane Night is from Brooklyn and lives in New York
Jane Night is from Brooklyn and lives in New York
[Function: bound printFullName]
John Doe is from Manhattan and lives in New York
```
 ## [Part-18 Complete](https://www.youtube.com/watch?v=75W8UPQ5l7k&list=PLlasXeu85E9eLVlWFs-nz5PKXJU4f7Fks&index=3)
 ---
 <br/>

## Polyfill for Bind Method 
```javascript
let name = {
  firstname: "John",
  lastname: "Doe",
}

let printName = function( hometown ,state, country){
  console.log(this.firstname + " " + this.lastname + " " + hometown + " " + state + " " + country);
};

// Inbuilt Bind Method 
let printMyName = printName.bind(name, "New York", "NY");
console.log(printMyName);
printMyName("USA");

// Creating our own Bind method 
//1. Put the function in the global scope
//2. Create a new function
//3. Create a new context
//4. Return the new function

Function.prototype.mybind = function (...args) {
  let context = this, 
  params = args.slice(1);               //Except the first argument everything is consoidered
     return function (...args2){
       context.apply(args[0], [...params, ...args2]);
     }
};

let printMyName2 = printName.mybind(name, "New York", "NY");
printMyName2("USA");
```
Output:
```javascript
[Function: bound printName]
John Doe New York NY USA
John Doe New York NY USA
```

## [Part 19 Complete](https://www.youtube.com/watch?v=ke_y6z0xRpk&list=PLlasXeu85E9eLVlWFs-nz5PKXJU4f7Fks)
---
<br/>

## Debouncing in Javascript

- Debouncing is a technique to avoid the function to be called too often, hence avoiding UI freezing. 
- The below example is of debouncing function, where user searches for a product in search bar, if he/she types more than 1 character, the function will be called again and again until the user types faster than 300 milliseconds, in that case lesser number of function calls will be made. 

```javascript 
let counter = 0;
const getData = () => {
  console.log("Fetching Data.. ", counter++);
};

//Only debounce and call the getData() method when the difference between two key presses is greater than 300 ms
const debounce = (fn, delay) => {
  let timer;
  return function () {
    let context = this,
      args = arguments;

    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, arguments);
    }, delay);
  };
};

const betterFunction = debounce(getData, 300);
```
Without Debouncing:
<br/>
![](https://i.postimg.cc/5yrfRTfc/Screenshot-2022-04-12-190642.jpg)

With Debouncing: 
<br/>
![](https://i.postimg.cc/yd0x9fP7/Screenshot-2022-04-12-190116.jpg)

## [Part 20 Complete](https://www.youtube.com/watch?v=Zo-6_qx8uxg&list=PLlasXeu85E9eLVlWFs-nz5PKXJU4f7Fks&index=12)
---
<br/>

## Debouncing vs Throttling
- Both are used to optimize the performance of the web app, it happens by limiting the rate of function calls 
- `Debouncing` happens when the user gives a pause of that specified delay (say 300ms) amount set by the website and then only further results are fetched from the server.
- `Example`: If a user wants to search for 'Adidas Shoes' on an e-commerce webiste, if debouncing is not there in the website then for every word that user will type, API calls will be made to the server which can lag the UI (imagine for millions of users accessing that website). If debouncing is being used in the website at a delay of 300ms, then after typing without a gap of 300ms user can get the results without making lot of function/API calls to the server. Like if he/she types 'Adidas' within 300ms then only 1 call will be made and next call will be made for 'Adidas Shoes' after 300ms.
- `Throttling` is also similar to Debouncing but here there is a time frame specified by the website, in that time frame only one function call will be made.
- `Example`: When a user searches for 'Adidas Shoes', and if the throttling dealy time is 300ms, then no matter how fast the user types, the function call will only be made after 300ms after the user starts searching. 
- So in-case of a `searching bar of an e-commerce website, debouncing is better than throttling` because if you type at a decent speed, then it will make API calls faster for that keyword. In throttling you might have to wait for a while to get the results, as the website has a specified delay.
- In-case we have to `track website resizing`. In debouncing suppose the website is being resized at varying speeds then in that case if the user gets slow while resizing then it will make few API calls. So it will perfect for finding how many times the user is resizing.In throttling, the function call will be made only after certain intervals of time, which will satiate our need for finding the frequency of the user resizing the screen.

## [Part 21 Complete](https://www.youtube.com/watch?v=tJhA0DrH5co&list=PLlasXeu85E9eLVlWFs-nz5PKXJU4f7Fks&index=2)
---
<br/>

## Throttling 
- Throttling is similar to Debouncing, but here there is a time frame specified by the website, in that time frame only one function call will be made.

Normal Thorttling Code: 

```javascript
const expensive = () => {
  console.log('expensive');
}

const betterExpensive = () => {
  throttle(expensive, 5000);
}

window.addEventListener('resize', betterExpensive);
```

Making your own throttling function: 
```javascript 
const throttle = (func, limit) => {
  let flag = true;
  return function () {
    let context = this;
    args = arguments; 
    if (flag) {
      func();
      flag = false;
      setTimeout(() => {
        func.apply(context, args);
        flag = true;
      }, limit);
    }
  };
};

window.addEventListener('resize', throttle(() => {
  console.log('Window resized');
}, 5000));
```
Output: 
![](https://i.postimg.cc/mZMprfQ6/Screenshot-2022-04-14-162032.jpg)

## [Part 22 Complete](https://www.youtube.com/watch?v=81NGEXAaa3Y&list=PLlasXeu85E9eLVlWFs-nz5PKXJU4f7Fks&index=9&t=3s)
---
<br>

## Function Currrying 
### Using Bind Method 
- In the below example we have made a copy of the subtract method and we can make more methods out of it and pass some arguments in the function. Like 2 is set as `x` in subtract function. 

```javascript
let subtract = function (x, y) {
  console.log(x - y);
};

let subtractByTwo = subtract.bind(this, 2);
let subtractByNum = subtract.bind(this, 9, 1);

//  How bind function works by creating a copy of the original function. 

// let subtractByTwo = function (y){
//   x = 2;
//   console.log(x * y);
// }

// Passed as the second argument 
subtractByTwo(3);   //This is Currying 
subtractByNum(3);   //This will be ignored
```
Output: 
```
-1
8
```

### Using Closure Method
- In the below example we are using closure for currying the function.
```javascript
let multiply = function (x) {
  return function (y){
    console.log(x * y);
  };
};

let multiplyByTwo = multiply(2);
multiplyByTwo(4);
```
Output: 
```
8
```

## [Part 23 Complete](https://www.youtube.com/watch?v=vQcCNpuaJO8&list=PLlasXeu85E9eLVlWFs-nz5PKXJU4f7Fks&index=4)
--- 
<br>

## Event Bubbling and Capturing (Event Trickling)
- These are the two ways of event propogating in a DOM Tree
- In Event Bubbling the event is propogated from the selected element and up the hierarchy till the end of the DOM 
- In Event Capturing the event goes down the hierarchy till the selected element and propogates the event to the selected element. Oppposite order of Event Bubbling. 
- Some examples of Bubbling and Capturing are given below: 
```html 
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
    <style>
       div{
             min-width: 100px;
             min-height: 100px;
             padding: 30px;
             border: 1px solid black;
       }
    </style>
</head>
<body>
    <div id="grandparent">
        <div id="parent">
            <div id="child"></div>
        </div>
    </div>
    <script src="index.js"></script>
</body>
</html>
```

### Event Bubbling without any argument being passed: 
```javascript 
document.querySelector('#grandparent').addEventListener('click', ()=>{
  console.log('Grandparent clicked!');
});
//If no value is passed as the second argument, the default is false which means bubbling of events.

document.querySelector('#parent').addEventListener('click', ()=>{
  console.log('Parent clicked!');
});

document.querySelector('#child').addEventListener('click', ()=>{
  console.log('Child clicked!');
});
```
- On Clicking Child

![](https://i.postimg.cc/y6bX5gp3/Screenshot-2022-04-15-103653.jpg)

</br>

### Event Trickling on passing true as the second argument: 
```javascript
document.querySelector('#grandparent').addEventListener('click', ()=>{
  console.log('Grandparent clicked!');
}, true);

document.querySelector('#parent').addEventListener('click', ()=>{
  console.log('Parent clicked!');
}, true);

document.querySelector('#child').addEventListener('click', ()=>{
  console.log('Child clicked!');
}, true);
```

- On Clicking Child 

![](https://i.postimg.cc/15MVg4b5/Screenshot-2022-04-15-103653.jpg)

### Event Trickling and Event Bubbling simultaneously: 
- Capturing takes place first and then Bubbling
```javascript
//Example - 1

document.querySelector('#grandparent').addEventListener('click', ()=>{
  console.log('Grandparent clicked!');
}, true); //Capturing

document.querySelector('#parent').addEventListener('click', ()=>{
  console.log('Parent clicked!');
}, false); //Bubbling

document.querySelector('#child').addEventListener('click', ()=>{
  console.log('Child clicked!');
}, false); //Bubbling 
```

- On Clicking Child

![](https://i.postimg.cc/nrXd5Ny6/Screenshot-2022-04-15-103653.jpg)

<br/>

```javascript
//Example - 2 

document.querySelector('#grandparent').addEventListener('click', ()=>{
  console.log('Grandparent clicked!');
}, true); //Capturing

document.querySelector('#parent').addEventListener('click', ()=>{
  console.log('Parent clicked!');
}, false); //Bubbling

document.querySelector('#child').addEventListener('click', ()=>{
  console.log('Child clicked!');
}, true); //Capturing 
```

- On Clicking Child

![](https://i.postimg.cc/G3jGwMLf/Screenshot-2022-04-15-103653.jpg)

### Stopping Propogation of Event
- It is used to stop the propogation of the event.
#### Incase of Event Bubbling 
```javascript
document.querySelector('#grandparent').addEventListener('click', ()=>{
  console.log('Grandparent clicked!');
}, false); 

document.querySelector('#parent').addEventListener('click', (e)=>{
  console.log('Parent clicked!');
   e.stopPropagation();
}, false); 

document.querySelector('#child').addEventListener('click', ()=>{
  console.log('Child clicked!');
}, false); 
```
- On first clicking Grandparent, then Parent (Event Propogation stopped it from going to Grandparent), then Child (Same Case with Child as well, unable to propogate after parent) 

![](https://i.postimg.cc/MHGyrRQH/Screenshot-2022-04-15-103653.jpg)

#### Incase of Event Bubbling and Trickling simulataneously 
```javascript
document.querySelector('#grandparent').addEventListener('click', ()=>{
  console.log('Grandparent clicked!');
}, false); //Bubbling

document.querySelector('#parent').addEventListener('click', (e)=>{
  console.log('Parent clicked!');
  e.stopPropagation();
}, false);  //Bubbling

document.querySelector('#child').addEventListener('click', (e)=>{
  console.log('Child clicked!');
}, true); //Trickling
```
- On Clicking Child

![](https://i.postimg.cc/5NgwWs30/Screenshot-2022-04-15-103653.jpg)

## [Part 24 Complete](https://www.youtube.com/watch?v=aVSf0b1jVKk&list=PLlasXeu85E9eLVlWFs-nz5PKXJU4f7Fks&index=6)
---
<br>

## Event Delegation 
- It is a technique of handling evenets on our web page in a better way
- Capturing and bubbling allow us to implement one of the most powerful event handling patterns called event delegation
- In layman terms, Instead of attaching event handlers to each and every child elements, we should rather attach an event handler to parent of these elements 
- Example for Event Delegation: 
```html 
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
</head>
<body>
    <div>
        <ul id="category">
            <li id="laptop"> Laptops </li>
            <li id="cameras"> Cameras </li>
            <li id="phones"> Phones </li>
        </ul>
    </div>
    <script src="index.js"></script>
</body>
</html>
```
```javascript 
document.querySelector('#category').addEventListener('click', (e) => {
  console.log(e.target.id);
  if(e.target.tagName === 'LI') {
  window.location.href = `/category/${e.target.id}`;
  }
})
```

- Example of Behaviour Pattern using Event Delegation 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
</head>
<body>
    <div id="form">
        <input type="text" id="name" data-uppercase> 
        <input type="text" id="surname">
        <input type="text" id="address" data-uppercase>
    </div>
    <script src="index.js"></script>
</body>
</html>
```
```javascript
document.querySelector('#form').addEventListener('keyup',(e)=>{
   console.log(e);
   if(e.target.dataset.uppercase != undefined){
     e.target.value = e.target.value.toUpperCase();
   }
});
```
![](https://i.postimg.cc/zGs64YHj/Screenshot-2022-04-16-082924.jpg)

### Pros of Event Delegation
- It saves a lot memory by reducing the number of additional event listeners
- It also mitigates the risk of performance bottleneck 
- Writing less code (Rather than attaching to each child, we attach it to parent)

### Cons of Event Delegation
- All the events are not bubbled up like scroll, blur etc. 
- If you are using stop propogation anytime, then eventually that would work, to let event delegation work you dont have to use stop propogation and let the events bubble up

## [Part 25 Complete](https://www.youtube.com/watch?v=3KJI1WZGDrg)
---
<br>

## Async vs Defer Attributes 
- These are boolean attributes that are used along with script tags to load the external scripts efficiently to the web page 
- When we are loading a web page then they are two major things happening in your browser, one is the HTML parsing and the second is the loading of the scripts 
- The loading of the scripts consists of two parts, one is fetching scripts from the network and the other is executing the scripts

![](https://i.postimg.cc/0yvJnc9B/Screenshot-2022-04-16-102605.jpg)

- `Normal Case`: The browser is parsing the HTML line by line and suddenly encounters a script tag, then the browser stops the parsing at that point of time and then sees the script tag and fetches the  script from the network and then executes the script. Then after the script work is done, the HTML parsing will continue. 

- `Async`: In this case, meanwhile the HTML parsing is going on, the scripts are fetched from the network asyncronously, then HTML parsing is stopped, and the scripts are executed. Once these scripts are executed, then the remaining HTML parsing is completed. 


- `Defer`: In this case, meanwhile the HTML parsing is going on, the scripts are fetched from the network in parallel. Once the HTML parsing completes then the scripts are executed.

### When to use what ?
- The async attributes does not guarantee the order of execution of the scripts but defer does 
- Like if some scripts are dependent on other scripts, then we should use defer attribute, since defer attribute will execute the scripts in the order of their loading
- But suppose we have to load some external scripts like Google Analytics which are quite modular and are independent of our modular code, so it makes sense to use async attribute

## [Part 26 Complete ](https://www.youtube.com/watch?v=IrHmpdORLu8&list=PLlasXeu85E9eLVlWFs-nz5PKXJU4f7Fks&index=5&t=36s)
---
<br>

## Local Storage and Session Storage 
- Web Storage API is nothing but key value pair storage, which is used to store data in the browser
- There are two ways to store this data in the browser, one is local storage and the other is session storage
- Lets say a user is visiting a web app, as soon as he visits the web app, session is started and data which is stored in the session storage will only be persistant till the user closes the browser
- But Session Storage is very useful than cookies, session storage data is not being sent to the server while making the network request calls and this session storage has a larger capacity to hold (~5MB)
- Local Storage is also similar to session storage but the difference here is that once the user closes the tab, the data is still persistant in the local storage 
### Same Origin Policy of Local Storage and Session Storage
- Local Storage and Session Storage are not accessible from the web page which is not same origin policy because of security reasons. 
- The Origin comprises of three things: `Protocol`, `Host` and `Port`
- Lets suppose for the website: `http://akshaysaini.in`
- We can access this website from the browser by typing in the address bar: `http://akshaysaini.in/data.php`
- We cant access this website on: <br>`https://akshaysaini.in` <br> `https://blog.akshaysaini.in` <br>
`https://akshaysaini.in:8080` <br> because of the changes made to `protocol`, `host` and `port` respectively. 

<br>

### Important Commands of Local Storage

![](https://i.postimg.cc/ZR9vpw1Q/Screenshot-2022-04-16-174718.jpg)

### Example: 

#### Wrong way of parsing: 

![](https://i.postimg.cc/Qxzvtxps/Screenshot-2022-04-16-082924.jpg)

![](https://i.postimg.cc/mDV5Gbbv/Screenshot-2022-04-16-175822.jpg)

#### Correct way of parsing: 

![](https://i.postimg.cc/T2747YNm/Screenshot-2022-04-16-175841.jpg)

## [Part 27 Complete](https://www.youtube.com/watch?v=MOd5cTJ6kaA)
---
<br>

## Prototype and Prototypal Inheritence 
- Whenever we create a JavaScript Object/Function, the JavaScript engine automatically without even letting you know attaches your objects/function to some hidden functions and properties which is called `Prototype`.

![](https://i.postimg.cc/3rydrSZ0/Screenshot-2022-04-17-105716.jpg)
<br>

#### Example for Prototype Chaining in Array: 

```javascript
let arr = ["Aditya", "Akshay"]; 
```

![](https://i.postimg.cc/wjYVQsBF/Screenshot-2022-04-17-105716.jpg)

- `Array.prototype === arr.__proto__`
- `arr.__proto__ === Object.protoype` because the Array is an object and the Object is an object
-  `arr.__proto__.__proto__.__proto__ === null` because the Object's prototype has no prototype
<br>

#### Example for Prototype Chaining in Object:

```javascript
let object = {
    name: "John",
    city: "New York",
    getIntro : function() {
       console.log(`Name is ${this.name} and city is ${this.city}`);
    }
}
```

![](https://i.postimg.cc/1RJT5BJ6/Screenshot-2022-04-17-105716.jpg)

- Prototype chaining proves the statement that everything in JavaScript is an object.

![](https://i.postimg.cc/SKtFRp6B/Screenshot-2022-04-17-105716.jpg)

- So when you try to access the property of `object2` which is not there like `city` then it goes to the `object` proto and prints when it finds it.  

#### Example of Global Prototype:

```javascript
Function.prototype.mybind= function(){
    console.log("abcde");
}
function fun(){

}
```

![](https://i.postimg.cc/6577p9dX/Screenshot-2022-04-17-105716.jpg)

## [Part 28 Completed](https://www.youtube.com/watch?v=wstwjQ1yqWQ&list=PLlasXeu85E9eLVlWFs-nz5PKXJU4f7Fks&index=8)
--- 
<br>

# Namaste JavaScript (Season 2)
<br> 

## Callback Hell
- Using callback we can do asynchronous programming in JavaScript
- We can take a piece of code and pass it as an argument to another function and then that function can  be called at a later point of time
- Async programming in JavaScript exist because of callback exist 

```javascript
console.log("Namaste");

 setTimeout( function() {
    console.log("I am inside the setTimeout function");
 }, 2000);
```

- An example of callback hell for a shopping cart application

```javascript
const cart = ["shoes", "pant", "kurta"];
api.createOrder(cart, function () {
  api.proceedToPaymnet(function () {
    api.showOrderSummary(function () {
      api.updateWallet(function () {
        
      });
    });
  });
});
```
- When we have a large codebase and we have so many apis here and there, they are dependent one after the another so we fall into this trap of callback hell 
- Our code starts to grow horizontally instead of vertically, this style of code is unreadable and unmaintainable
- The structure is also called `Pyramid of Doom` 

### Inversion of Control 
- We are blindly trusting our createOrder API that it will call the callback function, but what if it doesnt call the callback function, then we are in trouble
- The createOrder API is a risky API, it could have potential bugs that it might not call the callback function

 ## [Part 29 Completed](https://youtu.be/yEKtJGha3yM)
 ---
 <br>

 ## Promises 
 - Promises are objects representing the eventual completion of an asynchronous operation and it's resulting value 
 - They are immutable, you cannot alter a promise once it's resolved, it comes with a lot of trust 

 ```javascript
 const cart = ["shoes", "hat", "kurta"];

// Will cause callback hell
createOrder(cart, function(orderId){
    proceedToPayment(orderId);
});

//Resolved using promises 
const promise = createOrder(cart);

// {data: undefined} changes to {data: orderDetails}

promise.then(function(orderId){
    proceedToPayment(orderId);
})
```
- Promise is an object which has a function called `then` which takes a callback function as an argument
- It is undefined in the beginning but when the promise is resolved then it gets the data
- createOrder API is an asnyc operation and it returns a promise object
- The promise object will be filled with the value after an async time, meanwhile other lines of code will be executed 
<br></br>

### How is it better ? 
- Earlier we were `passing` the function into the createOrder API i.e another function, but now we are `attaching` the function to the promise object
- Promises give us the guarantee that the function present inside the promise object will be called 
- Promises will call the inner function once and only once

<br></br>

```javascript 
const GITHUB_API = "https://api.github.com/users/rishit30g";
const user = fetch(GITHUB_API);

user
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Something went wrong");
    }
  })
  .then((data) => {
    console.log(data.id);
  })
  .catch((error) => {
    console.log(error);
  });
```
- The promise object contains three things: [[Prototype]], [[PromiseState]], [[PromiseResult]]
- Prototype will say 'Promise'
- PromiseState will say 'pending' or 'fulfilled' or 'rejected'
- PromiseResult will say 'undefined intially' or 'data that will be fetched' or 'error' 
- Promise Result will be filled with the data that we get from the API after execution of the promise object 

### Promise Chaining 

```javascript
const cart = ["apple", "orange", "banana"];


// Callback Hell
createOrder(car, function(orderID) {
    proceedToPaymeNt(orderID, function(status){
        showOrderStatus(status, function(){
            updateWalletBalance();
        });
    });
});


// Equivalent Code using Promise Chaining 
const promise = createOrder(cart);

promise.then(function(orderID){
    return proceedToPaymeNt(orderID);
}).then(function(status){
    return showOrderStatus(status);
}).then(function(){
    return updateWalletBalance();
});

```
## [Part 30 Completed](https://youtu.be/ap-6PPAuK1Y)
--- 
<br>

## Promises - Part 2

- Example of Simple promise with resolve and reject 
```javascript
const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart);

promise.then(function(orderID){
    console.log("Order ID: ", orderID);
}).catch(function(err){
    console.log("Error: ", err.message);
});

function createOrder(cart){
     const pr = new Promise(function(resolve, reject){
        if(isValidCart(cart))
        {
            const orderID = "1223";
            if(orderID)
            {
                resolve(orderID);
            }
            else{
                const err = new Error("Invalid Order");
                reject(err);
            }
        }
        else{
            const err = new Error("Invalid Cart");
            reject(err);
        }
     })
     return pr;
}

function isValidCart(cart){
    return Array.isArray(cart) && cart.length > 0;
}
```

- Example of Promise with Chaining 
```javascript
const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart);

promise.then(function(orderID){
    console.log("Order ID: ", orderID);
    return orderID;
}).then(function(orderID){
    return proceedToPayment(orderID);
}).then (function(paymentInfo){
    console.log("Payment Info: ", paymentInfo);
}).catch(function(err){
    console.log("Error: ", err.message);
});

function createOrder(cart){
     const pr = new Promise(function(resolve, reject){
        if(isValidCart(cart))
        {
            const orderID = "1223";
            if(orderID)
            {
                resolve(orderID);
            }
            else{
                const err = new Error("Invalid Order");
                reject(err);
            }
        }
        else{
            const err = new Error("Invalid Cart");
            reject(err);
        }
     })
     return pr;
}

function isValidCart(cart){
    return Array.isArray(cart) && cart.length > 0;
}

function proceedToPayment(orderID){
    const pr = new Promise(function(resolve, reject){
        resolve(`Payment Info is ${orderID}`);
    });
    return pr;
}
```
## [Part 31 Completed](https://www.youtube.com/watch?v=U74BJcr8NeQ&t=1682s&ab_channel=AkshaySaini)
---

// Fibonacci series
/*function fibonacciSeries(num) {
  let a = 0;
  let b = 1;
  let temp = 0;

  for (let i = 1; i <= num; i++){

    if (i == 1) {
      console.log(a); //0
    }
    if (i == 2) {
      console.log(b); //1
    }


    temp = a + b; //0+1=1
    a = b;   //a=1
    b = temp; 
    console.log(temp);

   
    //0,1,1,2,3,5,8,13,21

    
  }
  

}

var num = 10;
console.log(fibonacciSeries(num)); */

//Basic Object
/*
var rahim = {
	fullName: "Rahim Miya",
	age: 21,
	address: "Dhaka",
	job: "Job Holder",
	welcomeMsg: function () {
		console.log("Hello There");
	},
};
console.log(rahim.fullName);   */

//Statement & Expression

// console.log(2+2);
// console.log(3*7);
// console.log(1 + 2 + 3 * 8 ** 9 - Math.sqrt(4.0));
// console.log(min(2,22));

// var y = 13;

// function myFunction() {
//   let x = 12;
//   console.log(y);
// }

// myFunction();
// // console.log(x);

//Assignment Problem 1

// function seerToMon(seer) {
// 	//checking the parameter is it a number or not
// 	if (typeof seer != "number") {
// 		//Give Error Message
// 		return "Error!! please give a number value";
// 	}
// 	//checking the number is it positive or not
// 	else if (seer < 0) {
// 		//Give Error Message
// 		return "Found Error! Please enter positive number";
// 	}
//    //calculate seer to mon
//   let seerToMonConvertion = seer / 40;

//   //return output
// 	return seerToMonConvertion;
// }

// var seerInput = 100;
// console.log(seerToMon(seerInput),' Mon');

// // Answer to question no 02
//    // totalSales
// function totalSales(shirtsquantity, pantsquantity, shoesquantity) {
//     //checking the parameter is it a number or not
//     if (typeof (shirtsquantity) != "number" || typeof (pantsquantity) != "number" || typeof (shoesquantity) != "number")
//     {
//         //give Error Message
//         return "Error!! please give a number value"; }
//         //checking the parameter is it positive or not
//         else if (shirtsquantity < 0 || pantsquantity < 0 || shoesquantity < 0) {
//                 //give Error Message
//                 return 'Found Error! Please enter positive number';
//             }
//                 //Calculation
//                 const shirtsPrice = 100;
//                 const  pantsPrice = 200;
//                 const shoesPrice = 500;

//                 const shirtsalesprice=shirtsquantity*shirtsPrice;
//                 const pantsalesprice=pantsquantity*pantsPrice;
//                 const shoesalesprice=shoesquantity*shoesPrice;
//                 const total =  shirtsalesprice + pantsalesprice +shoesalesprice;
//     //give total cost
//     return total;
// }
// //console
//     let totalpurches=totalSales(5 , 2 , 4 );
//         console.log(totalpurches);

// // Assignment problem 3

// function deliveryCost(shirtQuantity) {

// //checking  the parameter is it  a number or not
// if (typeof (shirtQuantity) != "number")
// {
//     //give Error Message
//     return "Error!! please give a number value";
//     }
//     //checking the parameter is it positive or not
//     else if (shirtQuantity < 0)
//     {
//         //give Error Message
//         return 'Found Error! Please enter positive number';
//         }
//         // initializing

//   let first100Count = 100;
//   let totalDeliveryCost = 0;

//   if (shirtQuantity <= 100) {

//     totalDeliveryCost = shirtQuantity* 100;

//   }
//   else if (shirtQuantity <= 200) {

//     let first100Cost = first100Count * 100;
//     let remainningProduct = shirtQuantity - 100;
//     let second100Cost = remainningProduct * 80;

//     totalDeliveryCost =  first100Cost + second100Cost;
//   }
//   else {
//     first100Cost = first100Count * 100;
//     second100Cost = first100Count * 80;
//     third100Count = shirtQuantity - 200;
//     let third100Cost = third100Count * 50;
//     totalDeliveryCost = first100Cost + second100Cost + third100Cost;
//   }

//   return totalDeliveryCost;

// }

// var shirtQuantity = 700;
// console.log(deliveryCost(shirtQuantity));

// Answer to question no 04

// perfectFriend
//     function perfectFriend(goodFriendlist) {
//         //checking the parameter is it a object or not
//         if (typeof (goodFriendlist) != "object") {
//             //Return Error Message
//             return "Error!! please give a object";
//         }
//         //checking the parameter object elements are string or not
//         else {
//             for (const friend of goodFriendlist) {
//                 if (typeof (friend) != "string"){
//         // give Error Message
//         return "Error!! Parameter object elements must be string";
//     }
//     }
// }
// //searching for perfect friend
// for (const friend of goodFriendlist)
//     {
//     //condition for checking perfect friend
//     if (friend.length == 5)
//         {
//             //give friends name
//             return friend;
//         }
//     }
//         //give Error Message if not found any perfect friend
//       return "Sorry!! You don't have any perfect friend.";

// }
//     var friends = [5, 'piash', 'shovon','ananna', 'sakib', 'limon'];
//     var BestFriend = perfectFriend(friends);
//     console.log(BestFriend);

// search index

// const products = [
//   { name: 'samsung phone', price: 12000},
//   { name: 'samsung watch', price: 13000},
//   { name: 'samsung phone', price: 143000},
//   { name: 'samsung earphone', price: 16000},
//   { name: 'samsung TWS', price: 19000},
// ]

// function searchProducts(product, searchIndex) {

//   const matched = [];
//   for (const product of products) {

//     const name = product.price;
//     if (name==searchIndex) {
//       matched.push(product);
//     }
//   }
//   return matched;
// }

// const halum = searchProducts(products, '143000');
// console.log(halum);

// baap er Bank project

// function getInputValue(fieldId) {
// 	const inputField = document.getElementById(fieldId);
// 	const inputFieldInText = inputField.value;
// 	const inputValue = parseFloat(inputFieldInText);
// 	document.getElementById(fieldId).value = "";
// 	return inputValue;
// }

// function updateBankAmount(amount, fieldId) {
// 	const previousValue = getInnerText(fieldId);
// 	const updateAmount = previousValue + amount;
// 	// const depositValue = getInnerText('deposit-update');
// 	// const withDrawValue = getInnerText('withdraw-update');
// 	// const updateAmount = depositValue - withDrawValue + 1200;
// 	document.getElementById(fieldId).innerText = updateAmount;
// }

// function getInnerText(fieldId) {
// 	const hasTag = document.getElementById(fieldId);
// 	const valueInText = hasTag.innerText;
// 	const value = parseFloat(valueInText);
// 	return value;
// }
// function updateBankAmountTotal() {
// 	const depositValue = getInnerText("deposit-update");
// 	const withDrawValue = getInnerText("withdraw-update");
// 	const updateAmount = depositValue - withDrawValue + 1200;
// 	// const previosBanlace = getInnerText("balance-update");
// 	// let updateBalance;
// 	// if (isAdding == true) {
// 	// 	updateBalance = previosBanlace + amount;
// 	// } else {
// 	// 	updateBalance = previosBanlace - amount;
// 	// }
// 	document.getElementById("balance-update").innerText = updateAmount;
// }

// document
// 	.getElementById("deposit-button")
// 	.addEventListener("click", function () {
// 		const amount = getInputValue("deposit-value");
// 		if (amount > 0) {
// 			const updatedAmount = updateBankAmount(amount, "deposit-update");
// 			updateBankAmountTotal();
// 		}
// 	});
// document
// 	.getElementById("withdraw-button")
// 	.addEventListener("click", function () {
// 		const amount = getInputValue("withdraw-value");
// 		const balance = getInnerText("balance-update");
// 		if (amount > 0 && amount <= balance) {
// 			const updatedAmount = updateBankAmount(amount, "withdraw-update");
// 			updateBankAmountTotal();
// 		}
// 	});


//MODULE 31

// learning map
// get numbers array value and multiply the value
/*
const numbers = [2, 4, 6, 8, 10];
const output = [];
//using loop througt each element
for (const num of numbers) {
	const result = num * 2;
	output.push(result);
}
console.log(output); 
*/

//use a arrow function into avobe function 
/*

//using arrow function
const doubleIt = number => number * 2;

for (const num of numbers) {
	const result = doubleIt(num);
	output.push(result);
}
console.log(output);
*/

//emplemanting map by arrow function 
/*
const doubleIt = number => number * 2;

const numbers = [2, 4, 6, 8, 10];
const output2 = numbers.map(doubleIt);
console.log(output2);

//short cut arrow function

const output3 = numbers.map(x => x * 5);
console.log(output3);


//square value
const output4 = numbers.map(x => x * x);
console.log(output4);


//finding arraw lenght by map
const friends = ['diar', 'pias', 'fahim', 'tom', 'solaiman'];
const frndLenght = friends.map(friend => friend.length);
console.log(frndLenght);

//map in array of object
const products = [
	{ name: 'water bottle', price: 50, color: 'yellow' },
	{ name: 'mobile phone', price: 5000, color: 'black' },
	{ name: 'sticky note', price: 50, color: 'pink' },
	{ name: 'water glass', price: 500, color: 'white' },
	
]

const productNames = products.map(product => product.name);
const productPrice = products.map(product => product.price);
console.log(productNames);
console.log(productPrice);
*/

//filter
/*
const numbers = [10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];
const bigNumer = numbers.filter(number => number > 25);
const smallNumber = numbers.filter(number => number < 15);
console.log(bigNumer);
console.log(smallNumber);

*/
//filter from array object
/*
const products = [
	{ name: "water bottle", price: 50, color: "yellow" },
	{ name: "mobile phone", price: 5000, color: "black" },
	{ name: "sticky note", price: 50, color: "pink" },
	{ name: "water glass", price: 500, color: "white" },
];

const expensive = products.filter(Find => Find.price >= 500);
const color = products.filter(Find => Find.color =='black' );
console.log(expensive);
console.log(color);

//learning find
//find retuen direct element - map return array

const whiteColor = products.find(product => product.color == 'white');
console.log(whiteColor);

*/

//  Class, constructor, method, create object from class
/*
class Support{
	name;
	role = 'support web dev';
	address = 'BD';
	constructor(name) {
		this.name = name;
	}
	startSession() {
		console.log(this.name,"start a support session");
	}
}
const aamir = new Support("aamir");
const salman = new Support("salman");
console.log(aamir);
console.log(salman);
aamir.startSession();
salman.startSession();
*/

//Inheritance, extends class, super, class method
/*
class StudentCare{
	name;
	role = 'student care web dev';
	address = 'BD'
	constructor(nam, addr) {
		this.name = nam;
		this.address.addr;
	}
	buildARoutine(student) {
		console.log(this.name,'Build a routine',student);
	}
}
*/

//29 August 

//34-2 Primitive data type and non-primitive data type
/*
-----------------------------------------------------------------
primitive data type
Data Types
1.number
2.string
3.boolean
4.undefined
5.null
6.object
7.symbol

*/

let a = 'hello';
let b = a;
a = 'gelo';
// console.log(a,b);



// non primitive 

/*
const x = { job: 'web developer' };
const y = x;
console.log(x, y);
//output: { name: 'web developer' } { name: 'web developer' }
x.job = 'front end';
console.log(x, y);
//output : { name: 'front end' } { name: 'front end' }
*/

//34-3 Different Truthy and Falsy values in JavaScript
/*
truethy:-----------
true
number (-,+), 
any string with sigle space,
'0',
empty array,
empty object


falsy:---------
false
0, empty string,
undified,null,
NaN



const x = false;
if (x) {
	console.log("variable is truthy");
} else {
	console.log("variable is falsy");
}
//output: variable is falsy;

-------------------------------------------------
const x = 1;
if (x) {
	console.log("variable is truthy");
} else {
	console.log("variable is falsy");
}
//output:variable is truthy
----------------------------------------------
const x = -10;
if (x) {
	console.log("variable is truthy");
} else {
	console.log("variable is falsy");
}
//output: variable is truthy

------------------------------------------
const x =0;
if (x) {
	console.log("variable is truthy");
} else {
	console.log("variable is falsy");
}
//output: variable is falsy
*/
/*--------------------------------------------------------------- */
//34-4 Null Vs Undefined, different ways you will get undefined

// 04 September 2021 

// setTIme Out function 

/*

function didar() {
	console.log("object3");
}
console.log("object1");
console.log("object2");
// setTimeout(didar,3000);
setTimeout(() => {
	console.log("exploring MDN article");
},3000)
console.log("object4");
*/

// 37-5 Recognize fetch as an Asynchronous activity 

// fetch & setTimeOut did't work in synchronous way 
/*
fetch("https://jsonplaceholder.typicode.com/todos/1")
	.then((response) => response.json())
	.then((json) => console.log(json));


react();

const  react =()=> {
	console.log("object");
}



setInterval(() => {
	console.log("object");
	
}, 1000);
*/


//06 september 2021

/*
const sum1 = parseInt(prompt("give  1st number"));
const sum2 = parseInt(prompt("give  2nd number"));

alert(`result = ${sum1 + sum2}`);



purpose of browser cookie 

Cookies are created to identify you when you visit a new website.
 The web server — which stores the website’s data — sends a short stream of identifying info to your web browser.

Browser cookies are identified and read by “name-value” pairs. These tell cookies where to be sent and what data to recall.

The server only sends the cookie when it wants the web browser to save it.
 If you’re wondering “where are cookies stored,” it’s simple: your web browser will store it locally to remember the “name-value pair” that identifies you.

If a user returns to that site in the future, the web browser returns that data to the web server in the form of a cookie. 
This is when your browser will send it back to the server to recall data from your previous sessions.

*/
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

function getInputValue(fieldId) {
	const inputField = document.getElementById(fieldId);
	const inputFieldInText = inputField.value;
	const inputValue = parseFloat(inputFieldInText);
	document.getElementById(fieldId).value = "";
	return inputValue;
}

function updateBankAmount(amount, fieldId) {
	const previousValue = getInnerText(fieldId);
	const updateAmount = previousValue + amount;
	// const depositValue = getInnerText('deposit-update');
	// const withDrawValue = getInnerText('withdraw-update');
	// const updateAmount = depositValue - withDrawValue + 1200;
	document.getElementById(fieldId).innerText = updateAmount;
}

function getInnerText(fieldId) {
	const hasTag = document.getElementById(fieldId);
	const valueInText = hasTag.innerText;
	const value = parseFloat(valueInText);
	return value;
}
function updateBankAmountTotal() {
	const depositValue = getInnerText("deposit-update");
	const withDrawValue = getInnerText("withdraw-update");
	const updateAmount = depositValue - withDrawValue + 1200;
	// const previosBanlace = getInnerText("balance-update");
	// let updateBalance;
	// if (isAdding == true) {
	// 	updateBalance = previosBanlace + amount;
	// } else {
	// 	updateBalance = previosBanlace - amount;
	// }
	document.getElementById("balance-update").innerText = updateAmount;
}

document
	.getElementById("deposit-button")
	.addEventListener("click", function () {
		const amount = getInputValue("deposit-value");
		if (amount > 0) {
			const updatedAmount = updateBankAmount(amount, "deposit-update");
			updateBankAmountTotal();
		}
	});
document
	.getElementById("withdraw-button")
	.addEventListener("click", function () {
		const amount = getInputValue("withdraw-value");
		const balance = getInnerText("balance-update");
		if (amount > 0 && amount <= balance) {
			const updatedAmount = updateBankAmount(amount, "withdraw-update");
			updateBankAmountTotal();
		}
	});

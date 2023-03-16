"use strict";
//1

/*
function positiveSum(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++){
		 if(arr[i] >=0){
			sum += arr[i] 
		 }
	  
	}
	return sum;
 }
 const arr = [ 1,2,3,-5,4]
console.log(positiveSum(arr))
 */
//2 
/*
function hero(bullets, dragons) {

	if ((dragons * 2) <= bullets) {
		return true
	} else {
		return false
	}
}
console.log(hero(2,1))
 */

//3
/* 
function century(year) {
	const century = year / 100
	return Math.ceil(century);
 }
 console.log(century(2023))
*/

//4
/* 
function solution(str){
	return str.split('').reverse().join('');
}
*/

//5

/*
function makeUpperCase(str) {	
	return str.toUpperCase()
 }
 */

//6
/*
function fakeBin(x) {
	let arr = x.split('')
	for (let i = 0; i < arr.length; i++ ){
		if(arr[i] < 5){
			arr[i] = 0
		}
		else if(arr[i] >= 5){
			arr[i] = 1
		}
	}

	return arr.join('');
}

fakeBin("12345")
*/

//7
/*
function invert(array) {
	const arr = array
	for (let i = 0; i < arr.length; i++) {
		arr[i] = arr[i] * -1
	}
	return arr;
}
console.log(invert([-1, 2, 5, -5, 0]))

*/

//8
/*
function digitize(n) {
	const arr = String(n).split('').reverse();
		arr.forEach((key, index) =>{
			arr[index] = Number(key)
		});
	return arr

}
console.log(digitize(12345))
*/

//9
/*
function rentalCarCost(d) {

	if (d > 0 && d < 3) {
		return d * 40;
	} else if (d >= 3 && d < 7) {
		return d * 40 - 20
	}
	else {
		return d * 40 - 50
	}
}
console.log(rentalCarCost(3))
*/

//10
// function noSpace(x){
// 	let str = ""
// 	for(let i = 0; i < x.length; i++){
// 		if(x[i] == ' '){
// 			continue;
// 		}else{
// 			str += x[i]
// 		}
// 	}
// 	return str
// }
// console.log(noSpace(" adksjsadjjkasd  asdsajdjajs dasdsadsad as  98 987 878  "))





console.log("hello");
document.write("hi");
//alert
// alert("welcome");
// prompt
// prompt("hi, what is your name?");



var num1 = 19;
var num1 = 40;
console.log(num1);



//number datatype
let num = 10;
console.log(num);

//string datatype
let string = "bharathi";

//null datatype
let nullvalue = null;

//boolean datatype
let istrue = true;

//undefined datatype
//console.log(undefinedvalue);

// object datatype
let obj = {
    username : "pavithra",
    id : 1001,
    department : "BCA",

}
console.log(obj);

//function
function myfunction(){
    let str = "hello";
    console.log(str);
}

//array datatype
let arr = ["bharathi", 50, 36,"pavi"];
console.log(arr);

//operators
//1. arithmetic opetators

let val1 = 10;
let val2 = 50;
let addition = val1 + val2;
console.log("addition: " + addition);
let subtraction = val1 - val2;
console.log("subtraction: " + subtraction);
let multiplication = val1 * val2;
console.log("multiplication: " + multiplication);
let division = val1 / val2;
console.log("division: "+ division);
let modulus = val1 % val2;
console.log("modulus:" + modulus);
let exponensial = val1 ** 2;
console.log("exponensial: " + exponensial);

let postincrement = val1 ++;
console.log(postincrement);
console.log(val1);

let preincrement = ++val1;
console.log(preincrement);
console.log(val1);

let postdecrement = val2 --;
console.log(postdecrement);
console.log(val2);

let predecrement = --val2;
console.log(predecrement);
console.log(val2);
// 2. assignment operator
let number1 = 40;
let number2 = 20;
let number3 = 2;
let add = number1 += number2; // number1 =>60  - 40+20
let sub = number1 -= number2; // number1 =>40 - 60-20
let miltiply = number1 *= number2; // number1 =>800 - 40*20
let div = number1 /= number2; // number1 =>40 - 800/20
let mod = number1 %= number2; // number1 =>0 - 40/20 =>0
let exponesial = number2 **= number3;  // number1 => 400 - 20 squre 2

console.log("assingment plus " + (add));
console.log("assingment minus " + (sub));
console.log("assingment multi " + (miltiply));
console.log("assingment divisiom " + (div));
console.log("assingment mogilus " + (mod));
console.log("assingment exponensial " + (exponesial));

//3. comparison operators

let value1 = 16;
let value2 = 18;
 //equal ==
 if(value1 == value2){
    console.log("equal");
 }
 else{
    console.log("not equal")
 }
  //triple equal ===
  if(value1 === value2){
    console.log("values are equal it check both value and type");
 }
 else{
    console.log("values are not equal,it check both value and type")
 }

 //not equal !=
 if(value1 != value2){
    console.log("true, values are not same");
 }
 else{
    console.log("false, values are same");
 }
 // double not equal to !==
 if(value1 !== value2){
    console.log("correct, value1 and value2 is not same,it check both value and type");
 }
 else{
    console.log("wrong, value1 and value2 is same,it check both value and type");
 }
 //greater than
 if(val1>val2){
 console.log(val1 + "is greater");
 }
 else{
  console.log(val2 + "is greater");
}
//less than
 if(val1<val2){
 console.log(val2 + "is greater");
 }
 else{
  onsole.log(val1 + "is greater");
}
//less than or equal to and greater than or qequal to
let a=8, b = 88
if(a<=b){
 console.log("b is greater than a or equal to")
}
else{
 console.log("a is lesser than a or equal to")
}


// to see which number is greater
 if(val1<val2){
 console.log(val2 + "is greater");
 }
 else{
  onsole.log(val1 + "is greater");
}



// guess the number excersice 1

document.getElementById("innerhtml").innerHTML = "<h1>heelow welcome</h1>";
document.getElementById("innerhtml2").innerHTML = "welcome";

function inputfun(){
    let input1 = document.getElementById("demoinput1").value;
    let input2 = document.getElementById("demoinput2").value;
    if(input1 == input2){
        console.log("same");
    }
    else{
        console.log("not same");

    }
}



// guess the number excersice 2 using ternery operator
function guessnum(){
    let val = 6;
    let guessnum = document.getElementById("guessnum").value;
    let result = (guessnum == val)?"correct":"wrong";
    console.log(result);
}

//array methods
const fruits = ["apple","mango","grapes","watermelon","orange","Pineapple",
"papaya","cherry","lemon","kiwi","Strawberry","Blueberry"];
//to string
document.getElementById("arr").innerHTML = fruits; 
//or
document.getElementById("arr").innerHTML = fruits.toString();
console.log("tostring: " + fruits.toString());

//length
document.getElementById("arr").innerHTML = fruits.length;
console.log("length: " + fruits.length);

//at
document.getElementById("arr").innerHTML = fruits.at(3);
console.log(fruits.at(6));
console.log(fruits.at(3));
console.log(fruits.at(8));
console.log(fruits.at(1));
console.log(fruits.at(4));
console.log(fruits.at(1));

// new page loading in js
function newpage(){
   window.location.href = 'signup.html';
}

// join method
const joinmethod = ["aa","bb","cc","dd","ee"];
// document.getElementById("methodslearning").innerHTML = joinmethod;
console.log("before joinmethod : " + joinmethod);
let aa = joinmethod.join("-");
aa = joinmethod.join(" ");
console.log("after joinmethod : " + aa);
// document.getElementById("methodslearning").innerHTML = joinmethod.join("-");

// push methods
const pushmethods = ["aa","bb","cc","dd","ee"];
console.log("before push : " + pushmethods);
pushmethods.push("ff","gg","hh");
console.log("after push : " + pushmethods);

// pop methods
const popmethods = ["aa","bb","cc","dd","ee"];
console.log("before pop : " + popmethods);
popmethods.pop();
popmethods.pop();
console.log("after pop : " + popmethods);

// shift methods
const shiftmethods = ["aa","bb","cc","dd","ee"];
console.log("before shift : " + shiftmethods);
shiftmethods.shift();
shiftmethods.shift();
console.log("after shift : " + shiftmethods);

// unshift methods
const unshiftmethods = ["aa","bb","cc","dd","ee"];
console.log("before push : " + unshiftmethods);
unshiftmethods.unshift("00");
unshiftmethods.unshift("ff","gg","hh");
console.log("after push : " + unshiftmethods);

//splice -  insert and delete can be done and original array affected
//1. deletion
const splicemethoddelete = ["aa","bb","cc","dd","ee","ff","gg","hh"];
console.log("before splice deletion : " + splicemethoddelete);
splicemethoddelete.splice(4,3); // starting index, count of deletion 
// splicemethod.splice(1,2)
// splicemethod.splice(4,3)
console.log("after splice deletion : " + splicemethoddelete);
//2.adding
const splicemethodadding = ["aa","bb","cc","dd","ee","ff","gg","hh"];
console.log("after splice adding : " + splicemethodadding);
splicemethodadding.splice(4,3,"eee","fff","ggg");// stating index, count of deletion, adding values
console.log("after splice adding : " + splicemethodadding);

//slice method
const slicemethods = ["aaa","bbb","ccc","ddd","eee","fff"];
console.log("before slice: "+ slicemethods);
let slicee = slicemethods.slice(4,5);
// let slicee = slicemethods.slice(1,4);
// let slicee = slicemethods.slice(0,4);
console.log("after slice: "+ slicee);
console.log("after slice method: "+ slicemethods);

//map method
const mapmethod = [20,50,20,40,70,60,10];
const newmap = mapmethod.map(mapfunction);
console.log(newmap);
function mapfunction(num){
   return num + 2;
}

//filter methods
const filtermethod = [20,50,20,40,70,60,10];
const newfilter = filtermethod.filter(filterfunction);
console.log(newfilter);
function filterfunction(num1){
   return num1 > 30;
}

//funtion types 
/*
1. callback function
2.anonymous function
3.arrow function
 */
// 1. callback function
function functionname(){
   console.log("hello bharathi");
}
functionname();

//arguments
function myfunction1(fname){
   console.log("hellow " + fname);
}
myfunction1("pavithra");

//2.anonymous function
let anonymousvariable = function(){
   console.log("hellow " + "magesh");
}
anonymousvariable();
//arguments
let anonymousvar = function(fname,lname){
   console.log("hellow " + fname + " "+ lname);
}
anonymousvar("hema", "varshini");
//3.arrow function
let arrowfun = () =>{
   console.log("hello sumi ");
}
arrowfun();  
//arguments
let arrowfunparam = (fname,lname) =>{
   console.log("hello " + fname + " " + lname);
}
arrowfunparam("sri","devi"); 

//math function

let pivalue = Math.PI;
console.log(pivalue); 

let eulersvalue = Math.E;
console.log(eulersvalue); 

let squarerootoftwo = Math.SQRT2;
console.log(squarerootoftwo); 

let squarerootofhalf = Math.SQRT1_2;
console.log(squarerootofhalf); 

let log2evalue = Math.LOG2E;
console.log(log2evalue); 

let log10evalue = Math.LOG10E;
console.log(log10evalue); 

let natural_lgorithm_two = Math.LOG2E;
console.log(natural_lgorithm_two); 

let natural_algorith_ten = Math.LOG10E;
console.log(natural_algorith_ten);

// roundof method
let round_of_method = Math.round(3.765);
let round_of_method2 = Math.round(77.265);
let round_of_method3 = Math.round(3);
console.log("round of 3.765: " + round_of_method);
console.log("round of 3.265: " + round_of_method2);
console.log("round of 3: " + round_of_method3);


// square root method
let square_root1 = Math.sqrt(64);
let square_root2 = Math.sqrt(43);
let square_root3 = Math.sqrt(8.4);
console.log("square_root of 64: " + square_root1);
console.log("square_root of 43: " + square_root2);
console.log("square_root of 8.4: " + square_root3);


// ceil method next nearest number
let ceiling1 = Math.ceil(64.74);
let ceiling2 = Math.ceil(73.03);
let ceiling3 = Math.ceil(45.0);
let ceiling4 = Math.ceil(-23);
let ceiling5 = Math.ceil(-46);
console.log("ceiling of 64.74: " + ceiling1);
console.log("ceiling of 73.03: " + ceiling2);
console.log("ceiling of 45.0: " + ceiling3);
console.log("ceiling of 23: " + ceiling4);
console.log("ceiling of -46: " + ceiling5);


// floor method it show same number not next previous
let floor1 = Math.floor(64.74);
let floor2 = Math.floor(73.03);
let floor3 = Math.floor(45.0);
let floor4 = Math.floor(-23);
console.log("floor of 64.74: " + floor1);
console.log("floor of 73.03: " + floor2);
console.log("floor of 45.0: " + floor3);
console.log("floor of 23: " + floor4);

//sign method => if negative values  o/p is -1 and positive values o/p is 1
let sign1 = Math.sign(64.74);
let sign2 = Math.sign(-73.03);
let sign3 = Math.sign(-83);
let sign4 = Math.sign(37);
console.log("sign of 64.74: " + sign1);
console.log("sign of -73.03: " + sign2);
console.log("sign of -83: " + sign3);
console.log("sign of 37: " + sign4);

//power mwthod
let power1 = Math.pow(2,3);
let power2 = Math.pow(374,6);
let power3 = Math.pow(-2,2);
let power4 = Math.pow(347,5);
console.log("2 power 3 : " + power1);
console.log("374 power 6 : " + power2);
console.log("-2 power 2 : " + power3);
console.log("347 power 5 : " + power4);

//absolute method => it does not care about sign (positive or negative)
let absolute1 = Math.abs(-2.7886);
let absolute2 = Math.abs(374.75);
let absolute3 = Math.abs(975);
let absolute4 = Math.abs(-6575);
console.log("absolute of -2.7886: " + absolute1);
console.log("absolute of 374.75: " + absolute2);
console.log("absolute of 975: " + absolute3);
console.log("absolute of -6575: " + absolute4);

//min method
let min1 = Math.min(452,8374,7263,-9827,-25,-3,-88,927,0);
let min2 = Math.min(91,982,627,12,87,92);
let min3 = Math.min(-7,-8,-2,-6,-23,-3);
console.log("minimum value '452,8374,7263,-9827,-25,-3,-88,927,0'  " + min1);
console.log("minimum value '91,982,627,12,87,92'  " + min2);
console.log("minimum value '-7,-8,-2,-6,-23,-3'  " + min3);

//max method
let max1 = Math.max(452,8374,7263,-9827,-25,-3,-88,927,0);
let max2 = Math.max(91,982,627,12,87,92);
let max3 = Math.max(-7,-8,-2,-6,-23,-3);
console.log("maxium value '452,8374,7263,-9827,-25,-3,-88,927,0'  " + max1);
console.log("maxium value '91,982,627,12,87,92'  " + max2);
console.log("maxium value '-7,-8,-2,-6,-23,-3'  " + max3);

// DOM Document object model
/* 1. id selector
   2. clss selector
   3. query selctor
*/
// id selector
let id_selector = document.getElementById("demodom").innerHTML = "welcome to garilan";
console.log("id selctor : " + id_selector);  
// class selector
let class_selector = document.getElementsByClassName("classdom").innerHTML = "welcome to  greate garilan";
console.log("class selctor : " + class_selector);    
// query selector
let querys_selector = document.querySelectorAll("p").innerHTML = "welcome to  ultra greate garilan";
console.log("query selctor : " + querys_selector);  

/*looping
1.for loop
2.while loop
3.do while loop
*/

// for loop => for(initialization:condition;increment/decrement) => print 1 -10 number
let for_loop;
console.log("for loop");
for(for_loop=1;for_loop<=10;for_loop++)

{
   console.log(for_loop);

}
//tables using for loop
let tab;
let i = 5;
for(tab=1;tab<=10;tab++){
   console.log(i + "X" + tab + "=" + i*tab);
}
console.log("hellow");
//while loop
let while_loop = 1;
while(while_loop<=10){
   console.log(while_loop);
   while_loop++;
}

//do while 
let do_while_loop = 1;
do{
   console.log(do_while_loop);
   do_while_loop++
}while(do_while_loop>5)




































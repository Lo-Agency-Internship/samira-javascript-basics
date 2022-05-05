let name = prompt('What is your name?');
let age = prompt('How old are you?');
let sex = prompt('what is your gender?');

alert(`${name} ${age} ${sex}`)

let num1 = prompt('please inseart your phon number');
let num2 = prompt('please insert your id number');

alert(`phone number: ${num1} id number: ${num2}`);

let savevalue = num1;
num1 = num2
num2 = savevalue
alert(`phone nember:${num1} id number: ${num2}`)

//data type
let firstName = prompt('What is your first name?')
let lastName = prompt('What is your last name?')
let ageuser = prompt('How old are you?')
let gender = prompt('Please insert your gender')
alert(`First name: ${firstName} Last name: ${lastName} age: ${ageuser} Gender: ${gender}`)

//show html
let message =`First name: ${firstName} , Last name: ${lastName} , age ${ageuser} , Gender: ${gender}`
alert(message)
document.getElementById("shown").innerHTML = message

//random

function random(min, max) {
    

    randomNum = Math.floor(Math.random() * (max - min) + min);
    return randomNum;
 }
 console.log(random(10,70))

 //bionery to decimal
 let binary = '00110110'
function bin2dec(binary){
  return (parseInt(binary, 2));
}

console.log(bin2dec(binary));

////comparision
function sumnum (x,y) 
{if(x===y) {return ((x+y)*3);
} 
else {return (x+y);} }
console.log(sumnum(2,4));

////second task
function absloutdiff (x) {
  if(x>19) {return ((x-19)*3);}
}
console.log(absloutdiff(30));
/////third one


function newString(a){
  if (a.startsWith('Lo')){
      return(a)
     }
  else{
      return ("Lo"+a)
 
 }
 }
 console.log(newString("Loagancy"));

 //////logical opreator
 //1
 const a= true
 function logicalGatebuffer (a) {
   return a
 }
 console.log(logicalGatebuffer(a))
/////2
 function logicalGateNot (a){
  return !a
}
console.log(logicalGateNot(a))
/////3
function logicalGateAnd (b,c) {
  if (b===true && c===true)
  return true;
  else {return false;}
} 
let b=true
let c=true

console.log(logicalGateAnd(b,c))
/////4

function logicalGateOr(d,e) {
  if (d===false||e===false) return false;
  else {return true;}
}
let d=false
let e=false
console.log(logicalGateOr(d,e))
/////5

function logicalGateNand (x,g) {
  if (x===true && g===true)
  return true;
  else {return false;}
} 
let x=!true
let g=true

console.log(logicalGateAnd(x,g))
/////6

function logicalGateNor(h,i) {
  if (!(h===false||i===false)) 
  return false;
  else {return true;}
}
let h=false
let i=false
console.log(logicalGateNor(h,i))
/////7
function logicalGateXor(j,k) {
  if (j===k) 
  return false;
  else {return true;}
}
let j=false
let k=false
console.log(logicalGateXor(j,k))
/////8
function logicalGateXnor(l,m){
  if(!(l===m)) 
  return false;
  else {return true;}
}
let l=false
let m=false
console.log(logicalGateXnor(l,m))
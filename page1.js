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

/////loop





function factorialIterative(k) {
  let result=1;
  if(k > 1) {
    for (let i = 1; i<=k; i++) {
      result = result*i
    }
    return result;
  }
else{
  return "k has to be positive";
}
}
let ask = prompt("Enter a number");
ask = parseInt(ask)
alert("The result is:"+ factorialIterative(ask))

////////////////

function factorialRecursive(q){
  if(q <= 1){
    return 1;
  }
  else{
    return q * factorialIterative(q-1)
  }
}

let inp = prompt("Enter number");
inp = parseInt(inp)
alert("The result is:" + factorialIterative(inp))


/////////////////////////////functions///////A
const myarry =[]
myarry.push(Math.floor(Math.random()*(50-15)+15));
myarry.push(Math.floor(Math.random()*(50-15)+15));
myarry.push(Math.floor(Math.random()*(50-15)+15));
console.log(myarry);


///////////////////////////////B
function customMap(ar=[] , callback){
   const _get=[]
    for (let i=0; i<ar.length; i++) {
        _get.push(callback(ar[i]))

    }
    return _get;
}
const _in = customMap(myarry, (_value) => {
  return  _value *2;
}
)
console.log(_in);
/////////////////////C

function customFilter(ar=[], callback){
    const _get=[]
    for(let i=0; i<ar.length; i++) {
        if(callback(ar[i])) {
            _get.push(ar[i])
        }
    }
return _get;
}
const fl=customFilter(myarry, (_value) =>{
    return _value >23;
}
)
console.log(fl);

//////////////////////D
function customReduce(arr, callback)
{
    let initial = arr[0];

    for (let i = 1; i < arr.length; i++)
    {
        initial = callback(initial, arr[i], i);
    }
    return initial;
}

console.log(customReduce(myarry, (acc, cv) => acc + cv));



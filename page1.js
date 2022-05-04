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
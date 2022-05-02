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
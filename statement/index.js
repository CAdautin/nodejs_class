const firstName = prompt('What is your firstName');
const lastName = prompt('What is your lastName');

function myName(){
if(!firstName & !lastName){
    return(`the two fields are empty`);
}
if(!firstName) {
    return(`the firstName field is empty`);
}
if (!lastName) {
    return(`the lastName field is empty`)
}

else{
    return(`welcome ${firstName} ${lastName}`)
}
}
console.log(myName())


const adult = 18
const myAge = promp('how old are you?')
function checkAge(){
    if(myAge < adult){
        return('hey sorry, your age is ${myAge}')
    }
    else{
        return(`hey your age is${myAge} you are an adult`)
    }
}
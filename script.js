
document.title = 'good job';
console.log(document.title);
document.title = 'Change';

console.log(document.body.innerHTML);



document.querySelector('.js-button').innerHTML= 'good job';
const buttonElement = document.querySelector('.js-button');
console.log(buttonElement);

function subscribe(){
    console.log(document.querySelector('.js-subscribe-button'));
    const buttonElement = document.querySelector('.js-subscribe-button');
    if (buttonElement.innerText === 'Subscribe'){
        buttonElement.innerHTML = 'Subscribed';
    } else {
        buttonElement.innerHTML = 'Subscribe';
    }
}
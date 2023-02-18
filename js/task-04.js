let counterValue=0;

const refs = {
tabloValue:document.querySelector('#value'),
buttonDecrement:document.querySelector('[data-action="decrement"]'),
buttonIncrement:document.querySelector('[data-action="increment"]'),
}

refs.buttonDecrement.addEventListener('click', setCounterDecrement);
refs.buttonIncrement.addEventListener('click', setCounterIncrement);


function setCounterDecrement() {
    counterValue -= 1;
    refs.tabloValue.textContent=counterValue
};
 
function setCounterIncrement() {
    counterValue += 1;
    refs.tabloValue.textContent=counterValue 
};


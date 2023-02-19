// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
//  підставляє його поточне значення в span#name - output.Якщо інпут порожній,
// у спані повинен відображатися рядок "Anonymous".
// Уважно визначайте та вказуйте події у завданні 5-7 (попри те, що у т/з є прямі підказки, помилок із цього приводу чимало).



const refs = {
    inputForm: document.querySelector('#name-input'),
    greetingText: document.querySelector('#name-output'),
};

refs.inputForm.addEventListener("input", evnt);

function evnt(event) {
    refs.greetingText.textContent = event.target.value;
    if (event.target.value.trim() === "") {
        refs.greetingText.textContent = 'Anonymous';
    }
       }

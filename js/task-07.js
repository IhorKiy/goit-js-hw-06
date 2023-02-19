const refs = {
    inputRef: document.querySelector('#font-size-control'),
    textRef: document.querySelector('#text'),
};

refs.inputRef.addEventListener("input", e)

function e() {
    let evntCurrent =event.currentTarget.value
    refs.textRef.style.fontSize = evntCurrent +'px';
   }


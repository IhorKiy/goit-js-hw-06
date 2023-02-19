function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     // this.color = color
//     console.log('changecolor -> this', this)
//   }

//   //   changeColor()
//   const sweat = {
//     color: 'teal',
//   }

//   sweat.uptadeColor = changeColor
//   sweat.uptadeColor('red')

//   return sweat.uptadeColor
// }
// makeChangeColor()

class Draw {
 constructor() {
  this.options = ["url(img/seven.jpg)", "url(img/cherry.jpg)", "url(img/apple.jpg)", "url(img/bar.jpg)", "url(img/orange.jpg)", "url(img/bannan.jpg)", "url(img/cash.jpg)" ];
  let _result = this.drawResult()
  this.getDrawResult = () => _result;
 }

 drawResult() {
  let colors = [];
  //uzupełnianie poprzez losowanie
  for (let i = 0; i < 3; i++) {
   const index = Math.floor(Math.random() * this.options.length)
   const color = this.options[index]
   colors.push(color)
  }
  return colors

 }
}

// const draw = new Draw()
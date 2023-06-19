var equalButton=document.querySelector('.equal');
var numberButtons=document.querySelectorAll('.number-button');
var allClearButtons=document.querySelector('.clear-button');
var operationButtons=document.querySelectorAll('.opn')
console.log(numberButtons);
var display=document.getElementById('display');
const allClearButton = document.querySelector('.clear-button');
var operand1=0;
var operand2=null;
var oprator=null;
function allClear(){
    operand1=0;
    operand2=0;
    display.innerHTML="";
    oprator=null;
}
operationButtons.forEach(button=>{
    button.addEventListener('click',()=>{
    updateDisplay(button.getAttribute('data-value'));
    })
})
numberButtons.forEach(button=>{
 button.addEventListener('click',()=>{
updateDisplay(button.getAttribute('data-value'));
 })
}
)
function updateDisplay(number){
    if(number=="="){
     display.innerText =(eval(display.innerHTML));
    }
   else
     display.innerText+=number;
}
equalButton.addEventListener('click',()=>{
updateDisplay(equalButton.getAttribute('data-value'));
})
allClearButtons.addEventListener('click',()=>{
    display.innerHTML="";
})
class Calculator{
    constructor(previousOperand, currentOpernd) {
        this.previousOperand = previousOperand;
        this.currentOpernd = currentOpernd;
        this.clear()
      }
      clear(){
        this.currentOpernd="";
        this.previousOperand="";
        this.oprator="";
      }
}
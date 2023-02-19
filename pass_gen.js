let Inputvalue = document.querySelector("input[type=range]")
let copy = document.querySelector(".fa-copy")
let password_place = document.querySelector(".input-field")
let upper = document.querySelector("#Upper")
let lower = document.querySelector("#Lower")
let numbers = document.querySelector("#Numbers")
let sympols = document.querySelector("#Sympols")
let gen = document.querySelector("#gen")
let len = document.querySelector(".len")
let strong_state = document.querySelectorAll(".mid div")

len.innerText =  Inputvalue.value

Inputvalue.onchange = ()=>{
  len.innerText =  Inputvalue.value
  strong_state.forEach((e)=>{
    if (Inputvalue.value < 7) {
      e.className = ''
      strong_state[0].className = "active"
    }
    if (Inputvalue.value < 10 && Inputvalue.value >= 7) {
      e.className = ''
      for(let i = 0;i<2;++i){
        strong_state[i].className = "active"
      }
    }
    if (Inputvalue.value < 12 && Inputvalue.value >= 9) {
      e.className = ''
      for(let i = 0;i<3;++i){
        strong_state[i].className = "active"
      }
    }
    if (Inputvalue.value > 13) {
      e.className = ''
      for(let i = 0;i<4;++i){
        strong_state[i].className = "active"
      }
    }
  })
}
let s1 = 'abcdefghijklmnopqrstuvwxyz'.split('');
let s2 = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')
let s3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let s4 = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~']

s1 = s1.sort((a, b) => 0.5 - Math.random());
s2 = s2.sort((a, b) => 0.5 - Math.random());
s3 = s3.sort((a, b) => 0.5 - Math.random());
s4 = s4.sort((a, b) => 0.5 - Math.random());
let obj = {
  "lower":s1,
  "upper":s2,
  "numbers":s3,
  "symplos":s4,
}
console.log(obj.lower[0])
gen.addEventListener("click", () => {
  let password = []
  let checked = []
    if (lower.checked) {
      checked.push("lower")
    }
    if (upper.checked) {
      checked.push("upper")
    }
    if (numbers.checked) {
      checked.push("numbers")
    }
    if (sympols.checked) {
      checked.push("symplos")
    }
    if(checked.length === 1){
      for(let i =0;i<Inputvalue.value;++i){
        password.push(obj[checked[0]][i]) 
      }
    }
    if(checked.length === 2){
          for(let i =0;i<Math.round((Inputvalue.value/2));++i){
            password.push(obj[checked[0]][i])
            password.push(obj[checked[1]][i]) 
          }
        
      }
      if(checked.length === 3){
        for(let i =0;i<Math.round((Inputvalue.value/3));++i){
          password.push(obj[checked[0]][i])
          password.push(obj[checked[1]][i]) 
          password.push(obj[checked[2]][i])
        }
      
    }
    if(checked.length === 4){
      for(let i =0;i<Math.round((Inputvalue.value/4));++i){
        password.push(obj[checked[0]][i])
        password.push(obj[checked[1]][i]) 
        password.push(obj[checked[2]][i])
        password.push(obj[checked[3]][i])
      }
    
  }
  password =  password.sort((a, b) => 0.5 - Math.random());
  password = password.join("")
  password_place.value = password
})

function copyFunction() {
  // Get the text field
  var copyText = document.querySelector(".input-field");

  // Select the text field
  copyText.select();

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}
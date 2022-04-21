let button = document.getElementById("button");
let heading = document.getElementById("heading")
let result = ""

button.addEventListener("click", function(){
  for(let i = 1; i <= 12; i++){
    result  += `${i} times table <br>`
    for(let j = 1; j <= 12; j++){
      let multiply = i * j;
      result += `${i} * ${j} = ${multiply} <br>`;
    }
    result += "<br>"
    heading.innerHTML= result
    
  }
})




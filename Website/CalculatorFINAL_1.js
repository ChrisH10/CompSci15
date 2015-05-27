var hasNum1 = false;
var hasOpp = false;
var hasNum2 = false;
var num1Val = 0;
var opp = "";
var num2Val = 0;
var answer;
var output = document.getElementById("display");
var input = "";

// MAKES ALLKEYS DO MATHIFY

function operate(operator){
  
  if (input===""){
    //nothing 
  
  }
  else if(hasNum1){
 
    compute();
  }
  else{
    
    num1Val = parseFloat(input);
    hasNum1 = true;
  
  }
  
  opp=operator;

  input="";
  
}

function compute(){
  
  if (!hasNum1||input===""){
    
    return;
    
  }
  
  num2Val = parseFloat(input);
  input="";
  
  
   switch(opp){
  case "+":
      answer = num1Val + num2Val;
      output.innerHTML = answer;
      break;
  case "-":
      answer = num1Val - num2Val;
      output.innerHTML = answer;
      break;
  case "*":
      answer = num1Val * num2Val;
      output.innerHTML = answer;
      break;
  case "/":
      answer = num1Val / num2Val;
      output.innerHTML = answer;
      break; 
   }
  
  num1Val = answer;
  
  opp="";
 
  
}

function resetvars(){
  
hasNum1 = false;
hasOpp = false;
hasNum2 = false;
num1Val = 0;
opp="";
num2Val = 0;
answer = 0;

input = "";
output.innerHTML="";
  
}

function mathify(){
  //output.innerHTML = "";
  var button = this.innerHTML;
  
  
  switch(button){
  case "+":
      operate(button);
      break;
  case "-":
      operate(button);
      break;
  case "*":
      operate(button);
      break;
  case "/":
     operate(button);
      break;   
  case "=":
      compute();
      break;
  case "Clear":
      resetvars();
      break;
  default: 
      input+=button;
      output.innerHTML = input;
 
  }
  
 if (hasNum1){
    output.innerHTML = num1Val + " " + opp + " " + input;
    
  }
  else{
    
    output.innerHTML = input;
  }
  
 
  
}
              

var keys = document.querySelectorAll("div.button");
for(var i = 0; i < keys.length; i++){
    keys[i].addEventListener("click", mathify);
	}
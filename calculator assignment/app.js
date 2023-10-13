function getNumber(num){

    var results = document.getElementById("result");
    results.value += num;
}

function getResult(){
     var result = document.getElementById("result")
result.value = eval(result.value)
}


function clearScreen(){

    document.getElementById('result').value = ''

}



function deleteLastCharacter() {
    var result = document.getElementById('result');
    result.value = result.value.slice(0, -1);
}





function squareNumber(){
    var input = document.getElementById('result');
    input.value = input.value * input.value;
}
// // function clrAll() {
//     var input = document.getElementById("inputField");
//     input.value = "";
//   }
  
//   function deleteLast(){
//     var input = document.getElementById("inputField");
//     input.value = input.value.slice(0,-1);
//   }
  


// function runC(){

// document.case.display.value = ""
// };


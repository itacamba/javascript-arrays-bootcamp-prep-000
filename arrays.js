var chocolateBars = ["snickers","hundred grand","kitkat", "skittles"];

function addElementToBeginningOfArray(array,element){
  var newArray = array;
  newArray = [element, ...newArray]
  return newArray;
}
function destructivelyAddElementToBeginningOfArray(array,element){
  var newArray = array;
  newArray.unshift(element)
  return newArray;
}


function addElementToEndOfArray(array,element){
  newArray = array;
  newArray = [...newArray ,element];
  return newArray;
}
function destructivelyAddElementToEndOfArray(array,element){
  newArray = array;
  newArray.push(element);
  return newArray;
}



function accessElementInArray(array,index){
  newArray = array;
  newIndex = index; 
  return newArray[index];
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  return array;
}
function removeElementFromBeginningOfArray(array){
  return array;
}
function removeElementFromEndOfArray(array){

}

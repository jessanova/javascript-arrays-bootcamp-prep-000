var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
function addElementToBeginningOfArray (a,b){
  return [...a,...b]  
}
function destructivelyAddElementToBeginningOfArray(a,b){
  return a.unshift(b)
}
function addElementToEndOfArray(a,b){
  return [...a,...b]
}
function destructivelyAddElementToEndOfArray(a,b){
  return a.push(b)  
}
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
function addElementToBeginningOfArray (a,b){
  a.unshift(b)
  return a
}
function destructivelyAddElementToBeginningOfArray(a,b){
  a.unshift(b)
  return a
}
function addElementToEndOfArray(a,b){
  return a.push(b)
}
function destructivelyAddElementToEndOfArray(a,b){
  return a.push(b)  
}
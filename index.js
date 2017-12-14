var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, {object, [key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key, value) {
  delete recipes.key 
}

function deleteFromObjectByKey(object, key, value) {
  var obj = {recipe: `corn`}
  var newObj = Object.assign({}, obj)
  delete newObj.recipe
}
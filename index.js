var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, {object, [key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key, value) {
  var clone = object.assign({}, object)
  delete clone[key]
  return clone
}

function deleteFromObjectByKey(object, key, value) {
  var clone = Object.assign({}, object)
  delete clone[key]
  return clone
}


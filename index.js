var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, {object, [key]: value})
}

function updateObjectEithKeyAndValue(object, key, value)
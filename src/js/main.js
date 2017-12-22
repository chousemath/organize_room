const initializeAttribute = (name, id) => {
  let attribute = window.localStorage.getItem(name)
  if (attribute) attribute = parseInt(attribute)
  else attribute = 0
  document.getElementById(id).innerHTML = attribute
  return attribute
}

const initialize = () => {
  console.log('initialize')
  console.log(`Value of shirt-count is ${initializeAttribute('shirtCount', 'shirt-count')}`)
  console.log(`Value of pushup-count is ${initializeAttribute('pushupCount', 'pushup-count')}`)
}

initialize()

const incrementAttribute = (name, id, amount) => {
  let attribute = window.localStorage.getItem(name)
  if (attribute) attribute = parseInt(attribute)
  else attribute = 0
  const incrementedAttribute = attribute + amount
  window.localStorage.setItem(name, incrementedAttribute)
  document.getElementById(id).innerHTML = incrementedAttribute
  return incrementedAttribute
}

const makeSound = id => {
  const audio = document.getElementById(id)
  audio.play()
}

const handleShirtBtnClick = () => {
  incrementAttribute('shirtCount', 'shirt-count', 1)
  makeSound('coin-1')
}

const handlePantsBtnClick = () => {}

const handleUnderwearBtnClick = () => {}

const handleSocksBtnClick = () => {}

const handlePushupsBtnClick = () => incrementAttribute('pushupCount', 'pushup-count', 10)

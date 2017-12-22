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
  console.log(`Value of pants-count is ${initializeAttribute('pantsCount', 'pants-count')}`)
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
  $('#shirt-img').animate({
    opacity: '+=0.2',
    width: '+=10',
    height: '+=10'
  }, 500, () => {
    // Animation complete
  })
  setTimeout(() => {
    $('#shirt-img').animate({
      opacity: '-=0.2',
      width: '-=10',
      height: '-=10'
    }, 500, () => {
      // Animation complete
    })
  }, 700)
  makeSound('coin-1')
}

const handlePantsBtnClick = () => {
  incrementAttribute('pantsCount', 'pants-count', 1)
  makeSound('coin-3')
}

const handleUnderwearBtnClick = () => {}

const handleSocksBtnClick = () => {}

const handlePushupsBtnClick = () => {
  incrementAttribute('pushupCount', 'pushup-count', 10)
  makeSound('coin-2')
}

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
}

initialize()

const handleShirtBtnClick = () => {
  let shirtCount = window.localStorage.getItem('shirtCount')
  if (shirtCount) shirtCount = parseInt(shirtCount)
  else shirtCount = 0
  window.localStorage.setItem('shirtCount', shirtCount + 1)
  document.getElementById('shirt-count').innerText = (shirtCount + 1)
}

const handlePantsBtnClick = () => {}

const handleUnderwearBtnClick = () => {}

const handleSocksBtnClick = () => {}

const handlePushupsBtnClick = () => {
  let pushupCount = window.localStorage.getItem('pushupCount')
  if (pushupCount) pushupCount = parseInt(pushupCount)
  else pushupCount = 0
  window.localStorage.setItem('pushupCount', pushupCount + 10)
  document.getElementById('pushup-count').innerHTML = (pushupCount + 10)
}

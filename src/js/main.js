const initialize = () => {
  console.log('initialize')
  window.sessionStorage.setItem('shirtCount', 0)
}

initialize()

const handleShirtBtnClick = () => {
  let shirtCount = window.sessionStorage.getItem('shirtCount')
  if (shirtCount) shirtCount = parseInt(shirtCount)
  else shirtCount = 0
  window.sessionStorage.setItem('shirtCount', shirtCount + 1)
  document.getElementById('shirt-count').innerText = (shirtCount + 1)
}

const handlePantsBtnClick = () => {}

const handleUnderwearBtnClick = () => {}

const handleSocksBtnClick = () => {}
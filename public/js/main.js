'use strict';

var initialize = function initialize() {
  console.log('initialize');
  window.sessionStorage.setItem('shirtCount', 0);
};

initialize();

var handleShirtBtnClick = function handleShirtBtnClick() {
  var shirtCount = window.sessionStorage.getItem('shirtCount');
  if (shirtCount) shirtCount = parseInt(shirtCount);else shirtCount = 0;
  window.sessionStorage.setItem('shirtCount', shirtCount + 1);
  document.getElementById('shirt-count').innerText = shirtCount + 1;
};

var handlePantsBtnClick = function handlePantsBtnClick() {};

var handleUnderwearBtnClick = function handleUnderwearBtnClick() {};

var handleSocksBtnClick = function handleSocksBtnClick() {};
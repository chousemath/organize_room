'use strict';

var initializeAttribute = function initializeAttribute(name, id) {
  var attribute = window.localStorage.getItem(name);
  if (attribute) attribute = parseInt(attribute);else attribute = 0;
  document.getElementById(id).innerHTML = attribute;
  return attribute;
};

var initialize = function initialize() {
  console.log('initialize');
  console.log('Value of shirt-count is ' + initializeAttribute('shirtCount', 'shirt-count'));
};

initialize();

var handleShirtBtnClick = function handleShirtBtnClick() {
  var shirtCount = window.localStorage.getItem('shirtCount');
  if (shirtCount) shirtCount = parseInt(shirtCount);else shirtCount = 0;
  window.localStorage.setItem('shirtCount', shirtCount + 1);
  document.getElementById('shirt-count').innerText = shirtCount + 1;
};

var handlePantsBtnClick = function handlePantsBtnClick() {};

var handleUnderwearBtnClick = function handleUnderwearBtnClick() {};

var handleSocksBtnClick = function handleSocksBtnClick() {};

var handlePushupsBtnClick = function handlePushupsBtnClick() {
  var pushupCount = window.localStorage.getItem('pushupCount');
  if (pushupCount) pushupCount = parseInt(pushupCount);else pushupCount = 0;
  window.localStorage.setItem('pushupCount', pushupCount + 10);
  document.getElementById('pushup-count').innerHTML = pushupCount + 10;
};
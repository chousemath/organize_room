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
  console.log('Value of pushup-count is ' + initializeAttribute('pushupCount', 'pushup-count'));
};

initialize();

var incrementAttribute = function incrementAttribute(name, id, amount) {
  var attribute = window.localStorage.getItem(name);
  if (attribute) attribute = parseInt(attribute);else attribute = 0;
  var incrementedAttribute = attribute + amount;
  window.localStorage.setItem(name, incrementedAttribute);
  document.getElementById(id).innerHTML = incrementedAttribute;
  return incrementedAttribute;
};

var makeSound = function makeSound(id) {
  var audio = document.getElementById(id);
  audio.play();
};

var handleShirtBtnClick = function handleShirtBtnClick() {
  incrementAttribute('shirtCount', 'shirt-count', 1);
  makeSound('coin-1');
};

var handlePantsBtnClick = function handlePantsBtnClick() {};

var handleUnderwearBtnClick = function handleUnderwearBtnClick() {};

var handleSocksBtnClick = function handleSocksBtnClick() {};

var handlePushupsBtnClick = function handlePushupsBtnClick() {
  return incrementAttribute('pushupCount', 'pushup-count', 10);
};
let numSignsArray = [];
const display = document.querySelector('.display-content');
function Clear() {
  display.innerText = '0';
  numSignsArray = [];
}

function handleNum(numKey) {
  // numKey is event.target.innerText
  if (display.innerText === '0') {
    display.innerText = numKey;
  } else {
    display.innerText += numKey;
  }
}
function handlePoint(numPoint) {
  // numPoint is event.target.innerText
  if (display.innerText.includes('.')) {
  } else {
    display.innerText += numPoint;
  }
}
function getValue() {
  numSignsArray.push(parseFloat(display.innerText, 10));
}

function handleSign(signKey) {
  // signKey is event.target.innerText
  getValue();
  numSignsArray.push(signKey);
  display.innerText = '0';
}
function backSpace() {
  if (display.innerText.length === 1) {
    display.innerText = '0';
  } else {
    display.innerText = display.innerText.substr(
      0,
      display.innerText.length - 1
    );
  }
}

function handleMath() {
  let answer = numSignsArray[0];
  for (let i = 1; i < numSignsArray.length; i += 2) {
    switch (numSignsArray[i]) {
      case '+':
        answer += numSignsArray[i + 1];
        break;
      case '-':
        answer -= numSignsArray[i + 1];
        break;
      case 'x':
        answer *= numSignsArray[i + 1];
        break;
      case '/':
        answer /= numSignsArray[i + 1];
        break;
    }
  }

  if (Math.round(answer) === answer) {
    display.innerText = Math.round(answer);
  } else {
    display.innerText = answer.toFixed(4);
  }
  numSignsArray = [];
}

function handleInput(event) {
  if (event.target.classList.contains('num')) {
    handleNum(event.target.innerText);
  } else if (event.target.classList.contains('point')) {
    handlePoint(event.target.innerText);
  } else if (event.target.classList.contains('signs')) {
    handleSign(event.target.innerText);
  } else if (event.target.classList.contains('equal')) {
    getValue();
    handleMath();
  } else if (event.target.classList.contains('clear')) {
    Clear();
  } else if (event.target.classList.contains('backspace')) {
    backSpace();
  } else {
    console.log('debugging required');
  }
}

const bubbleWatcher = document.querySelector('.main-container');
bubbleWatcher.addEventListener('click', handleInput);

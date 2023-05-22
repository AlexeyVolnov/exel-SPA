import _ from 'lodash'
import './scss/style.scss'

// eslint-disable-next-line require-jsdoc
function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());



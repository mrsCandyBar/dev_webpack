import _ from 'lodash';
import './style.css';
import IMG from './smile.jpg';
import Data from './data.xml';

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    var myDog = new Image();
    myDog.src = IMG;

    //element.appendChild(myDog);
    console.log('Data >>>', Data);

    return element;
}

document.body.appendChild(component());
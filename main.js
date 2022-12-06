let one = document.getElementById('one'); 
let two = document.getElementById('two'); 
let three = document.getElementById('three'); 
let container = document.getElementById('container');
let text = document.getElementsByClassName('spacer')[0];

let availableWidth = window.innerWidth - 10;
let availableHeight = 0.75 * window.innerHeight - 10;




let oneX;
let oneY;
let twoX;
let twoY;
let threeX;
let threeY;
let pointX;
let pointY;

function setPoints() {
    const center = input => {
        output = input - 5;
        return output;
    }

    if (availableWidth * 2 < availableHeight * 1.73) {
        console.log('calculating by width');
        
        oneY = 0;
        one.style.top = center(oneY) + 'px';
        oneX = Math.floor(availableWidth / 2);
        one.style.left = center(oneX) + 'px' ;

        twoY = Math.floor(1.73 * availableWidth / 2);
        two.style.top = center(twoY) + 'px';
        twoX = 0;
        two.style.left = center(twoX) + 'px';

        threeY = Math.floor(1.73 * availableWidth / 2);
        three.style.top = center(threeY) + 'px';
        threeX = Math.floor(availableWidth);
        three.style.left = center(threeX) + 'px';
        //return [oneX, oneY, twoX, twoY, threeX, threeY];
    } 
    else {
        console.log('calculating by height');
        let screenCenter = Math.floor(availableWidth / 2) - Math.floor(availableHeight / 1.73) 
        oneY = 0
        one.style.top = center(oneY) + 'px';
        oneX = Math.floor(availableHeight / 1.73) + screenCenter;
        one.style.left = center(oneX) + 'px';

        twoY = Math.floor(availableHeight);
        two.style.top = center(twoY) + 'px';
        twoX = 0 + screenCenter;
        two.style.left = center(twoX) + 'px';

        threeY = Math.floor(availableHeight);
        three.style.top = center(threeY) + 'px';
        threeX = Math.floor(availableHeight * 2 / 1.73) + screenCenter;
        three.style.left = center(threeX) + 'px';
        return [oneX, oneY, twoX, twoY, threeX, threeY];
    }
}


/////////////// adding explanation text /////////////////////
/////////////////////////////////////////////////////////////

let conversation = ['Hello there', 'I heard you like fractals', "This ones called Sierpinski's triangle", 'Check it out',
'First we start with the three corners of a triangle', 'Then we add a small dot randomly within the triangle', 'Do you see it?', 
'Then we choose a corner at random', 'And  we add another dot halfway between it and our last point', 'Do you see that one?', 
'And then do the same again', 'And again', 'And more', 'And more', 'And faster', 'Alright this is taking a while', "That's it", 
'Wow look at it go', "This should start making a Seirpinski's triangle", 'Do you see the pattern?', 
'Following this ruleset always makes this pattern', 'Lets add another 10,000 dots', 'Wow', "And that's it", 'I hope you like the fractal :)']
let i = 4;

const speak = () => {
    text.innerHTML = '<p>' + conversation[i] + '</p>';
}


let myInterval = setInterval( () => {
    console.log('i = ' + i + '  - ' + conversation[i]);
    speak();
    text.id = 's2';
    setTimeout( () => {
        text.id = 's1';
    }, 3000);
    if (i === 4) {  //First we start with the three corners of a triangle
        setTimeout(setPoints(), 6000);
        implementInitialisePoints();
        document.getElementById('one').style.backgroundColor = '#fcf8a1';
        document.getElementById('two').style.backgroundColor = '#fcf8a1';
        document.getElementById('three').style.backgroundColor = '#fcf8a1';
        
    } else if (i === 5) { //'Then we add a small dot randomly within the triangle'
        setTimeout(addDot(), 4000);
    } else if (i === 8) { //Then we choose a corner at random, and add another point halfway between it our last point 
        setTimeout(addDot(), 2000);
    } else if (i === 10) { //And then do the same again
        setTimeout(addDot(), 2000);
    } else if (i === 11) { //And another
        setTimeout(addDot(), 2000);
    } else if (i === 12) { //Lets keep adding more
        increaseAddDot();
    } else if (i === 21) {
        addThousands();
    } else if (i >= conversation.length - 1) {
        clearInterval(myInterval);
    }
    i++;
}, 
5000);



///////  Making Seirpinski's triangle //////////
////////////////////////////////////////////////
function implementInitialisePoints() {
    let randCorner;
    pointX = Math.floor(Math.random() * (threeX + twoX)/2);
    pointY = Math.floor(Math.random() * (twoY + oneY)/2);

    console.log(pointX + ' ' + pointY);

    const initialisePoints = () => {
        randCorner = Math.ceil(Math.random() * 3);
        if (randCorner === 1) {
            pointX = Math.abs((oneX + pointX) / 2);
            pointY = Math.abs((oneY + pointY) / 2);
        } else if (randCorner === 2) {
            pointX = Math.abs((twoX + pointX) / 2);
            pointY = Math.abs((twoY + pointY) / 2);
        } else {
            pointX = Math.floor(Math.abs((threeX + pointX) / 2));
            pointY = Math.floor(Math.abs((threeY + pointY) / 2));
        }
    }

    initialisePoints();
    initialisePoints();
    initialisePoints();
    initialisePoints();
    initialisePoints();
    initialisePoints();
}

//Generating a dot halfway between a random corner and the previous dot

const addDot = () => {
    let dot = document.createElement('div');
    dot.classList.add('dot');
    randCorner = Math.ceil(Math.random() * 3);
    if (randCorner === 1) {
        pointX = Math.abs((oneX + pointX) / 2);
        pointY = Math.abs((oneY + pointY) / 2);
        dot.style.left = pointX + 'px';
        dot.style.top = pointY + 'px';
    } else if (randCorner === 2) {
        pointX = Math.abs((twoX + pointX) / 2);
        pointY = Math.abs((twoY + pointY) / 2);
        dot.style.left = pointX + 'px';
        dot.style.top = pointY + 'px';
    } else {
        pointX = Math.floor(Math.abs((threeX + pointX) / 2));
        pointY = Math.floor(Math.abs((threeY + pointY) / 2));
        dot.style.left = pointX + 'px';
        dot.style.top = pointY + 'px';
    }
    container.appendChild(dot);
}

const addThousands = () => {
    for (let i = 0; i < 10000; i++) {
        addDot();
    }
    console.log('Over 9000!!')
}


let speed = 2000;
const increaseAddDot = () => {
    addDot();
    speed = Math.ceil(speed / 1.085);
    //console.log(speed);
    setTimeout(increaseAddDot, speed);
}


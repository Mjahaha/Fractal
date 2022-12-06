let one = document.getElementById('one'); 
let two = document.getElementById('two'); 
let three = document.getElementById('three'); 

let availableWidth = window.innerWidth - 100;
let availableHeight = 0.75 * window.innerHeight - 100;

function setPoints() {
    if (availableWidth * 2 < availableHeight * 1.73) {
        console.log('calculating by width');
        let oneY = 0;
        one.style.top = oneY + 'px';
        let oneX = Math.floor(availableWidth / 2);
        one.style.left = oneX + 'px' ;

        let twoY = Math.floor(1.73 * availableWidth / 2);
        two.style.top = twoY + 'px';
        let twoX = 0;
        two.style.left = twoX + 'px';

        let threeY = Math.floor(1.73 * availableWidth / 2);
        three.style.top = threeY + 'px';
        let threeX = Math.floor(availableWidth);
        three.style.left = threeX + 'px';
        return [oneX, oneY, twoX, twoY, threeX, threeY];
    } 
    else {
        console.log('calculating by height');
        let oneY = 0
        one.style.top = oneY + 'px';
        let oneX = Math.floor(availableHeight / 1.73);
        one.style.left = oneX + 'px';

        let twoY = Math.floor(availableHeight);
        two.style.top = twoY + 'px';
        let twoX = 0
        two.style.left = twoX + 'px';

        let threeY = Math.floor(availableHeight);
        three.style.top = threeY + 'px';
        let threeX = Math.floor(availableHeight * 2 / 1.73);
        three.style.left = threeX + 'px';
        return [oneX, oneY, twoX, twoY, threeX, threeY];
    }
}

let array = setPoints();
let oneX = array[0];
let oneY = array[1];
let twoX = array[2];
let twoY = array[3];
let threeX = array[4];
let threeY = array[5];

let pointX = Math.floor(Math.random() * (threeX - twoX));
let pointY = Math.floor(Math.random() * (twoY - oneY));

console.log(pointX + ' ' + pointY);

let randCorner;
let reps = 5000;

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
    document.body.appendChild(dot);
}

for (let i; i < 50000; i++) {
    addDot();
}

//setInterval(addDot, 5);
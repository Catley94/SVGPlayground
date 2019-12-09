//Get Variables
//Right Tail
const tailTop = document.querySelector('.tailTop');
const tailMid = document.querySelector('.tailMid');
const tailRoot = document.querySelector('.tailRoot');

//Left Tail
const tailTopLeft = document.querySelector('.tailTopLeft');
const tailMidLeft = document.querySelector('.tailMidLeft');
const tailMidBottomLeft = document.querySelector('.tailMidBottomLeft');

//Body
const bodyMainContainer = document.querySelector('.bodyMainContainer');
const bodyContainer = document.querySelector('.bodyContainer');
const bodyMain = document.querySelector('.bodyMain');
const tribalContainerAndBody = document.querySelector('.tribalContainerAndBody');
const tribalBottomLeft = document.querySelector('.tribalBottomLeft');
const tribalBottomMid = document.querySelector('.tribalBottomMid');
const tribalBottomRight = document.querySelector('.tribalBottomRight');
const tribalMidRight = document.querySelector('.tribalMidRight');
const tribalTopLeft = document.querySelector('.tribalTopLeft');

//Eyes
const eyeLeftContainer = document.querySelector('.eyeLeftContainer');
const eyeRightContainer = document.querySelector('.eyeRightContainer');

//Left Arm
const armLeftBottom = document.querySelector('.armLeftBottom');
const armLeftTop = document.querySelector('.armLeftTop');


//Right Arm
const armRightTop = document.querySelector('.armRightTop');
const armRightMid = document.querySelector('.armRightMid');
const armRightBottom = document.querySelector('.armRightBottom');


//Temp - Hide body
// bodyContainer.style.display = 'none';

//Make SVG fill invisible
//tails
tailTop.style.fillOpacity = 0;
tailMid.style.fillOpacity = 0;
tailRoot.style.fillOpacity = 0;
tailTopLeft.style.fillOpacity = 0;
tailMidLeft.style.fillOpacity = 0;
tailMidBottomLeft.style.fillOpacity = 0;

//body
bodyMain.style.fillOpacity = 0;
// tribalContainerAndBody.style.fillOpacity = 0;
tribalBottomLeft.style.fillOpacity = 0;
tribalBottomMid.style.fillOpacity = 0;
tribalBottomRight.style.fillOpacity = 0;
tribalMidRight.style.fillOpacity = 0;
tribalTopLeft.style.fillOpacity = 0;

//arms
armLeftBottom.style.fillOpacity = 0;
armLeftTop.style.fillOpacity = 0;
armRightBottom.style.fillOpacity = 0;
armRightMid.style.fillOpacity = 0;
armRightTop.style.fillOpacity = 0;

//eyes
eyeLeftContainer.style.display = 'none';
eyeRightContainer.style.display = 'none';

// function timeline() {
//     const draw = anime.timeline({
//         targets: [bodyMain, tribalBottomLeft, tribalBottomMid, tribalBottomRight, tribalMidRight, tribalTopLeft],
//         strokeDashoffset: [anime.setDashoffset, 0],
//         autoplay: true,
//         easing: 'easeInOutSine',
//         duration: 1500,
//         delay: anime.stagger(1000),
//         endDelay: 10000,
//         direction: 'forwards',
//         loop: false
//       });
//     // colourBody();
// }

function colourBody() {
    anime({
        targets: [bodyMain, tribalBottomLeft, tribalBottomMid, tribalBottomRight, tribalMidRight, tribalTopLeft, armLeftTop, armLeftBottom, armRightTop, armRightMid, armRightBottom],
        easing: 'easeInOutSine',
        duration: 1500,
        fillOpacity: 1,
        // delay: function(el, i) { return i * 250 },
        direction: 'forwards',
        delay: anime.stagger(1000),
        loop: false
      });
}

function drawTails() {
    anime({
        targets: [tailMidBottomLeft, tailMidLeft, tailTopLeft, tailRoot, tailMid, tailTop],
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        delay: anime.stagger(1000),
        direction: 'forwards',
        loop: false
      });
}
function drawBody() {
    anime({
        targets: [bodyMain, tribalBottomLeft, tribalBottomMid, tribalBottomRight, tribalMidRight, tribalTopLeft, armLeftTop, armLeftBottom, armRightTop, armRightMid, armRightBottom],
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        delay: anime.stagger(1000),
        direction: 'forwards',
        loop: false
      });
      eyeLeftContainer.style.display = 'inline';
      eyeRightContainer.style.display = 'inline';

    //   drawBody.add({
    //       delay: 3000
    //   });
    //   drawBody.add({
    //     targets: [armLeftTop, armLeftBottom, armRightTop, armRightMid, armRightBottom],
    //     delay: anime.stagger(1000),
    //   })

    
}

function colourTails() {
    anime({
        targets: [tailMidBottomLeft, tailMidLeft, tailTopLeft, tailRoot, tailMid, tailTop],
        easing: 'easeInOutSine',
        duration: 1500,
        fillOpacity: 1,
        // delay: function(el, i) { return i * 250 },
        direction: 'forwards',
        delay: anime.stagger(1000),
        loop: false
      });
}

window.onload = function () {
    let topLogoClickCounter = 0;
//get logo-heading variable
const topLogo = document.querySelector('.logo-heading');
//console.log(topLogo);
//click eventListener for logo-heading
topLogo.addEventListener('click', () => {
    if (topLogoClickCounter === 0) {
        topLogo.style.transform = 'rotateY(60deg)';
        topLogoClickCounter++;
    } 
    else if (topLogoClickCounter === 1) {
        topLogo.style.transform = 'rotateY(120deg)';
        topLogoClickCounter++;
    } else if (topLogoClickCounter === 2) {
        topLogo.style.transform = 'rotateY(180deg)';
        topLogoClickCounter++;
    } else if (topLogoClickCounter === 3) {
        topLogo.style.transform = 'rotateY(240deg)';
        topLogoClickCounter++;
    } else if (topLogoClickCounter === 4) {
        topLogo.style.transform = 'rotateY(300deg)';
        topLogoClickCounter++;
    } else if (topLogoClickCounter === 5) {
        topLogo.style.transform = 'rotateY(0deg)';
        topLogoClickCounter = 0;
    }   
});   
}

//get all .nav a elements variable
const newNav = document.querySelectorAll('.nav a');
//console.log(newNav);
//add click eventListener for multiple elements
newNav.forEach(navigation => {
    navigation.addEventListener('click', (event) => {
        event.target.style.color = 'blue';
    });
});

//get header section topImg variable
const topContent = document.querySelector('.topImg');
//console.log(topContent);
//add eventListener mouseenter
//good practice pairing transform + transition for smooth transition
topContent.addEventListener('mouseenter', () => {
    topContent.style.transform = 'scale(1.1)';
    topContent.style.transition = 'all 1.3s';
});
//add eventListener mouseleave
topContent.addEventListener('mouseleave', () =>{
    topContent.style.transform = 'scale(1)';
    topContent.style.transition = 'all 1.3s';
});

//get buttons variable
const bottomButtons = document.querySelectorAll('.btn');
//console.log(bottomButtons);
//add eventListener for multiple elements
bottomButtons.forEach(buttons => {
    buttons.addEventListener('click', (event) => {
        event.target.style.color = 'red';
        console.log('target', event.target);
    });
});

//get images variable
const massImg = document.querySelectorAll('.img-content');
//console.log(img-content);
// Moves images around on the page using dragend & dragstart event listner
massImg.forEach(element => {
    element.addEventListener('dragstart', (event) => {
        event.target.style.transform = 'translate(7rem,0)';
    });
    element.addEventListener('dragend', (event) => {
        event.target.style.transform = 'translate(-7rem,0)';
    });
});

//new color scheme variable
const spaceColor = document.querySelectorAll(
    '.main-navigation, .nav-container a, body, footer p'
    );
// Scroll Event Listner to change background and text colors
spaceColor.forEach(element => {
    window.addEventListener('scroll', () => {
        element.style.color = '#FB3640';
        element.style.backgroundColor = '#1F2041';
    });
});

//variable for nav-link
const navBar = document.querySelectorAll('.nav-link');
// PreventDefault event listner for NavLink
navBar.forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('Prevented!');
    });
});

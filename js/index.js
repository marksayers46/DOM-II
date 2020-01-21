//get all .nav a elements
const newNav = document.querySelectorAll('.nav a');
//console.log(newNav);
//add eventListener for multiple elements
newNav.forEach(navigation => {
    navigation.addEventListener('click', (event) => {
        event.target.style.color = 'blue'
    });
});

//get header section topImg
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

//get buttons
const bottomButtons = document.querySelectorAll('.btn');
//console.log(bottomButtons);
//add eventListener for multiple elements
bottomButtons.forEach(buttons => {
    buttons.addEventListener('click', (event) => {
        event.target.style.color = 'red';
    });
});



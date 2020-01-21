//get all .nav a elements
const newNav = document.querySelectorAll('.nav a');
//console.log(newNav);
//add event listener on multiple elements
newNav.forEach(navigation => {
    navigation.addEventListener('click', (event) => {
        event.target.style.color = 'blue'
    });
});

//get header section topImg
const topContent = document.querySelector('.topImg');
//console.log(topContent);
//add event listener mouseenter
topContent.addEventListener('mouseenter', () => {
//good practice pairing transform + transition for smooth transition
    topContent.style.transform = 'scale(1.1)';
    topContent.style.transition = 'all 1.3s';
});
//add event listener mouseleave
topContent.addEventListener('mouseleave', () =>{
    topContent.style.transform = 'scale(1)';
    topContent.style.transition = 'all 1.3s';
});

//get buttons
const bottomButton = document.querySelectorAll('btn');
//console.log(bottomButton);




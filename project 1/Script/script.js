// Event listeners for adding pets to favorites
document.querySelector('#petit').addEventListener('click', (action) => {
    action.preventDefault();
    alert('Max added to favorite');
});

document.querySelector('#petit1').addEventListener('click', (action) => {
    action.preventDefault();
    alert('Luna added to favorite');
});

document.querySelector('#petit2').addEventListener('click', (action) => {
    action.preventDefault();
    alert('Snowball added to favorite');
});

// Event listener for navigation items hover
document.querySelector('.nav-items').addEventListener('mouseover', (action) => {
    action.preventDefault();
    action.target.classList.toggle('round');
});

// Main header text and style
document.querySelector('#main-header p').textContent = `Adopt Don't Shop! Give A Pet A Loving Home.`;
document.querySelector('#main-header p').style.fontFamily = 'bufalo';

// Navigation items color
document.querySelectorAll('.nav-items li a').forEach(item => {
    item.style.color = 'red';
});

// Contact info box style
document.querySelector('.contact-info-box h2').style.textDecoration = 'underline';

// Pet care tips and pets section margin
document.querySelectorAll('#pet-care-tips h2, #pets h2').forEach(item => {
    item.style.marginBottom = '50px';
});

// Section tips font family
document.querySelectorAll('.section-tips p').forEach(item => {
    item.style.fontFamily = 'silly kids';
});

// Contact wrapper hover effect
document.querySelector('.contact-wrapper').addEventListener('mouseover', (action) => {
    action.target.style.backgroundColor = 'lightblue';
});

document.querySelector('.contact-wrapper').addEventListener('mouseout', (action) => {
    action.target.style.backgroundColor = '';
});

// Pet care tips font size hover effect
document.querySelectorAll('#pet-care-tips #No1, #pet-care-tips #No2, #pet-care-tips #No3').forEach(item => {
    item.addEventListener('mouseover', (action) => {
        action.target.style.fontSize = '25px';
    });

    item.addEventListener('mouseout', (action) => {
        action.target.style.fontSize = '';
    });
});

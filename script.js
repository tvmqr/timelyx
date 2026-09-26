console.log('JS connected');



// MODAL "Get a Demo"

const btnGetADemo = document.querySelector('[data-open-modal]');
const windowGetADemo = document.querySelector('#modal');
const closeGetADemo = document.querySelector('[data-close-modal]');

btnGetADemo.addEventListener('click', function () {
    windowGetADemo.hidden = false;
});


closeGetADemo.addEventListener('click', function () {
    windowGetADemo.hidden = true;
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        windowGetADemo.hidden = true;
    }
});

windowGetADemo.addEventListener('click', function(event) {
    if (event.target === windowGetADemo) {
        windowGetADemo.hidden = true;
    }
});
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



// ===== BURGER =====

const burger = document.querySelector('#burger');
const nav = document.querySelector('#nav');

burger.addEventListener('click', function () {
    nav.classList.toggle('active');

    const isOpen = nav.classList.contains('active');
    burger.setAttribute('aria-expanded', isOpen);
});



// ===== HERO FORM =====

const heroForm = document.querySelector('#hero-form');
const heroEmail = document.querySelector('#hero-email');
const heroError = heroForm.querySelector('.error-msg');
const heroSubmit = heroForm.querySelector('.hero__submit');
const heroSubmitText = heroSubmit.textContent;

heroForm.addEventListener('submit', function (event) {
    event.preventDefault();

    if (heroEmail.value.trim() === '' || !heroEmail.checkValidity()) {
        heroError.style.color = '';
        heroEmail.classList.add('error');
        heroError.textContent = 'Enter a valid email';
    } else {
        heroEmail.value = '';
        heroEmail.classList.remove('error');
        heroError.textContent = '';
        heroError.style.color = '#4ade80';
        heroError.textContent = 'Thanks! Check your inbox';

        heroSubmit.textContent = 'Subscribed ✓';
        heroSubmit.disabled = true;

        setTimeout(() => {
            heroSubmit.textContent = heroSubmitText;
            heroSubmit.disabled = false;
            heroError.textContent = '';
        }, 2000);
    }
});



// ===== Features =====

const filterBtn = document.querySelectorAll('.filter-btn');
const card = document.querySelectorAll('.feature-card');

filterBtn.forEach(btn => {
    btn.addEventListener('click', () => {

        filterBtn.forEach(filt => {
            filt.classList.remove('filter-btn--active');
        });
        btn.classList.add('filter-btn--active');

        const activeFilter = btn.dataset.filter;

        card.forEach(c => {
            if (activeFilter === 'all' || c.dataset.category === activeFilter) {
                c.classList.remove('hidden');
            } else {
                c.classList.add('hidden');
            }
        });
    });
});



// ===== BENEFITS / TABS =====

const tabButton = document.querySelectorAll('.tab');
const tabPanel = document.querySelectorAll('.tab-panel');

tabButton.forEach(btn => {
    btn.addEventListener('click', () => {

        tabButton.forEach(tabNoAct => {
            tabNoAct.classList.remove('tab--active');
        });
        btn.classList.add('tab--active');


        tabPanel.forEach(panelka => {
            if (btn.dataset.tab === panelka.id) {
                panelka.classList.add('tab-panel--active');
            } else {
                panelka.classList.remove('tab-panel--active');
            }
        });

    });
});


// ===== PRICING =====

// ===== PRICING =====

const priceBtn = document.querySelectorAll('.price-btn');
const priceValue = document.querySelectorAll('.plan__price');

priceBtn.forEach(btn => {
    btn.addEventListener('click', function() {

        priceBtn.forEach(otherBtn => {
            otherBtn.classList.remove('price-btn--active');
        });
        btn.classList.add('price-btn--active');

        const selectedPeriod = btn.dataset.period;

        priceValue.forEach(price => {
            price.classList.add('is-changing');

            setTimeout(() => {
                price.textContent = selectedPeriod === 'month'
                    ? '$' + price.dataset.month
                    : '$' + price.dataset.year;
                price.classList.remove('is-changing');
            }, 200);
        });

    });
});



// ===== FAQ =====

const accordionHeader = document.querySelectorAll('.accordion-header');

accordionHeader.forEach(header => {
    header.addEventListener('click', () => {
        const item = header.closest('.accordion-item');
        const isOpen = item.classList.contains('accordion-item--open');

        document.querySelectorAll('.accordion-item').forEach(el => {
            el.classList.remove('accordion-item--open');
            el.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
        });

        if (!isOpen) {
            item.classList.add('accordion-item--open');
            header.setAttribute('aria-expanded', 'true');
        }
    });
});
















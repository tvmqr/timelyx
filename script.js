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

nav.querySelectorAll('.header__link').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        burger.setAttribute('aria-expanded', 'false');
    });
});



// ===== EMAIL FORMS (HERO, NEWSLETTER) =====

function setupEmailForm(formSelector) {
    const form = document.querySelector(formSelector);
    const email = form.querySelector('input[type="email"]');
    const error = form.querySelector('.error-msg');
    const submit = form.querySelector('button[type="submit"]');
    const submitText = submit.textContent;

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (email.value.trim() === '' || !email.checkValidity()) {
            error.style.color = '';
            email.classList.add('error');
            error.textContent = 'Enter a valid email';
        } else {
            email.value = '';
            email.classList.remove('error');
            error.style.color = '#4ade80';
            error.textContent = 'Thanks! Check your inbox';

            submit.textContent = 'Subscribed ✓';
            submit.disabled = true;
            submit.classList.add('is-success');

            setTimeout(() => {
                submit.textContent = submitText;
                submit.disabled = false;
                error.textContent = '';
                submit.classList.remove('is-success');
            }, 2000);
        }
    });
}

setupEmailForm('#hero-form');
setupEmailForm('#contact-form');



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
















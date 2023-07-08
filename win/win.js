const rulebutton = document.querySelector('.rule_button');
const rulebox = document.querySelector('.rulebox');
const close = document.querySelector('.close');


rulebutton.addEventListener('click', function () {
    rulebox.classList.add('rulebox_open');
    setTimeout(() => {
        rulebox.classList.remove('rulebox_open');
    }, 25000);
})
close.addEventListener('click', function () {
    rulebox.classList.remove('rulebox_open');
})
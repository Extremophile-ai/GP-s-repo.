import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/payment.js';
import { ListTemplate } from './classes/listTemplate.js';
const form = document.querySelector('.new-item-form');
const date = Date.now();
const now = new Date(date);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const time = now.toDateString();
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
// add event listener
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber, time];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    ;
    list.render(doc, type.value, 'start');
});

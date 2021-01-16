import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { ListTemplate } from './classes/listTemplate.js';


const form = document.querySelector('.new-item-form') as HTMLFormElement;
const date = Date.now();
const now = new Date(date);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
const time = now.toDateString();


// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

// add event listener
form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let values: [string, string, number, string]
    values = [tofrom.value, details.value, amount.valueAsNumber, time]
    let doc: HasFormatter;
    if(type.value === 'invoice') {
        doc = new Invoice(...values);
    } else {
        doc = new Payment(...values);
    };
   list.render(doc, type.value, 'start');
});

const btn=document.querySelector('[data-menu-toggle]');
const nav=document.querySelector('[data-nav]');
if(btn&&nav){btn.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');btn.setAttribute('aria-expanded',String(open));});document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('is-open');btn.setAttribute('aria-expanded','false');}});}
const color=document.querySelector('#tshirt-color'),size=document.querySelector('#tshirt-size');
const params=new URLSearchParams(location.search);
for(const [field,key] of [[color,'farve'],[size,'stoerrelse']]){if(field&&Array.from(field.options).some(o=>o.value===params.get(key)))field.value=params.get(key);}
const shirtForm=document.querySelector('.tshirt-selection-form');
if(shirtForm){const link=shirtForm.querySelector('a');link.addEventListener('click',e=>{e.preventDefault();if(shirtForm.reportValidity())location.href='tilmelding.html?'+new URLSearchParams({farve:color.value,stoerrelse:size.value});});}
for(const form of document.querySelectorAll('[data-registration],.payment-form')){form.addEventListener('submit',e=>{e.preventDefault();let result=form.querySelector('.form-result');if(!result){result=document.createElement('p');result.className='form-result';result.setAttribute('role','status');form.append(result);}result.textContent=form.matches('.payment-form')?'Dette er en demonstration. Ingen betaling er gennemført.':'Dette er en demonstration. Din tilmelding er ikke sendt. Du kan kontakte Dansk Skak Union på dsu@skak.dk.';});}

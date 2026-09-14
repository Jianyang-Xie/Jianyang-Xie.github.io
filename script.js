'use strict';
const page=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('nav a').forEach(a=>{if(a.getAttribute('href')===page)a.setAttribute('aria-current','page');});
const search=document.getElementById('search');
if(search){
 const year=document.getElementById('year'),cards=[...document.querySelectorAll('#papers .publication')];
 document.querySelector('.filters').hidden=false;
 function filter(){let n=0;const q=search.value.trim().toLowerCase();cards.forEach(c=>{const show=c.textContent.toLowerCase().includes(q)&&(!year.value||c.dataset.year===year.value);c.hidden=!show;if(show)n++;});document.getElementById('count').textContent=`${n} of ${cards.length} publications`;document.getElementById('empty').hidden=n!==0;}
 search.addEventListener('input',filter);year.addEventListener('change',filter);document.getElementById('clear').addEventListener('click',()=>{search.value='';year.value='';filter();search.focus();});
}

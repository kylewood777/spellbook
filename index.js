const input=document.querySelector('#spell');
const spells=document.querySelector('#spells');

function changeHeader(){
    spells.innerHTML += `<li>${input.value}</li>`;
    input.value='';
}
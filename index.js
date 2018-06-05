const input=document.querySelector('#input');
const spells=document.querySelector('#spells');

function changeHeader(){
    spells.innerHTML += `<li>${input.value}</li>`;
    input.reset();
}
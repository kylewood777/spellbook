const input=document.querySelector('#spell');
const color=document.querySelector('#effectColor');
const spells=document.querySelector('#spells');

function changeHeader(){
    var spellItem=document.createElement("li");
    var spellSpan=document.createElement('span');
    var spellNameContent=document.createTextNode(input.value);
    spellSpan.appendChild(spellNameContent);
    spellItem.appendChild(spellSpan);
    spells.appendChild(spellItem);
    input.value='';
    color.value='';
}
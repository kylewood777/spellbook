const input=document.querySelector('#spell');
const color=document.querySelector('#effectColor');
const spells=document.querySelector('#spells');

function createSpell(){
    if(input.value){
        const spellItem=document.createElement("li");
        const spellSpan=document.createElement('span');
        spellSpan.className='spellName';
        const spellNameContent=document.createTextNode(input.value);
        spellSpan.appendChild(spellNameContent);
        spellItem.appendChild(spellSpan);
        spellItem.appendChild(document.createElement("br"));
        spellItem.appendChild(createSpellColor());
        spells.appendChild(spellItem);
        input.value='';
        color.value='';
    }
}

function createSpellColor(){
    const spellSpan=document.createElement('span');
    const spellColorContent=document.createTextNode(color.value);
    spellSpan.appendChild(spellColorContent);
    spellSpan.className='spellColor';
    return spellSpan;
}
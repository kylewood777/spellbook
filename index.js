const spellNameField=document.querySelector('#spellNameField');
const spellColorField=document.querySelector('#spellColorField');
const spellList=document.querySelector('#spellList');

function createSpell(){
    if(spellNameField.value){
        const spellItem=document.createElement("li");
        const spellNameSpan=document.createElement('span');
        spellNameSpan.className='spellName';
        const spellNameContent=document.createTextNode(spellNameField.value);
        spellNameSpan.appendChild(spellNameContent);
        spellItem.appendChild(spellNameSpan);
        spellItem.appendChild(document.createElement("br"));
        spellItem.appendChild(createSpellColor());
        spellList.appendChild(spellItem);
        spellNameField.value='';
        spellColorField.value='';
    }
}

function createSpellColor(){
    const spellColorSpan=document.createElement('span');
    const spellColorContent=document.createTextNode(spellColorField.value);
    spellColorSpan.appendChild(spellColorContent);
    spellColorSpan.className='spellColor';
    return spellColorSpan;
}
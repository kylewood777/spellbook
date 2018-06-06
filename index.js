const input=document.querySelector('#spell');
const spells=document.querySelector('#spells');

function changeHeader(){
    var listItem=document.createElement("li");
    var content=document.createTextNode(input.value);
    listItem.appendChild(content);
    spells.appendChild(listItem);
    input.value='';
}